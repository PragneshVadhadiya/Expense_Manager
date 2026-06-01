import { PrismaClient } from '../src/generated/prisma/client'
const prisma = new PrismaClient()

function daysAgo(days: number): string {
    const d = new Date()
    d.setDate(d.getDate() - days)
    return d.toISOString().slice(0, 19).replace('T', ' ')
}
function rand(min: number, max: number) { return Math.floor(Math.random() * (max - min + 1)) + min }
function fuzz(base: number, pct = 0.15) { return Math.round(base * (1 + (Math.random() * 2 - 1) * pct) * 100) / 100 }

async function main() {
    console.log("⚡ Bulk SQL seed starting...\n")

    // ── Get all users ────────────────────────────────────────────────────────────
    const users = await prisma.users.findMany()
    console.log(`Found ${users.length} user(s). Seeding bulk transactions for all...\n`)

    // ─────────────────────────────────────────────────────────────────────────────
    // EXPENSE BULK DATA
    // ─────────────────────────────────────────────────────────────────────────────
    type Row = { catName: string; subName: string; amt: number; detail: string; desc: string; day: number }
    const expRows: Row[] = []
    const monthly = (catName: string, subName: string, amt: number, detail: string, desc: string, dayOfMonth = 1) => {
        for (let m = 0; m < 12; m++) {
            expRows.push({ catName, subName, amt: fuzz(amt * 0.25), detail, desc, day: m * 30 + dayOfMonth })
        }
    }
    const weekly = (catName: string, subName: string, amt: number, detail: string, desc: string) => {
        for (let m = 0; m < 12; m++) {
            expRows.push({ catName, subName, amt: fuzz(amt * 0.25), detail, desc, day: m * 30 + rand(1, 28) })
        }
    }
    const frequent = (catName: string, subName: string, amt: number, detail: string, desc: string, perMonth: number) => {
        for (let i = 0; i < 6; i++) {
            expRows.push({ catName, subName, amt: fuzz(amt * 0.25), detail, desc, day: i * 60 + rand(0, 30) })
        }
    }
    const once = (catName: string, subName: string, amt: number, detail: string, desc: string, day: number) => {
        expRows.push({ catName, subName, amt: amt * 0.25, detail, desc, day })
    }

    // ── HOUSING (monthly fixed) ──────────────────────────────────────────────────
    monthly("Housing", "Rent",               20000, "House rent - 2BHK Satellite Ahmedabad",      "Monthly rent to landlord Deepak Rao", 1)
    monthly("Housing", "Electricity",         2400, "PGVCL electricity bill",                      "Monthly electricity charges", 5)
    monthly("Housing", "Water Bill",           350, "AMC water charges",                            "Municipal water supply", 7)
    monthly("Housing", "Gas Bill",             980, "GSPC piped gas bill",                          "Monthly cooking gas", 8)
    monthly("Housing", "Society Maintenance", 1800, "Aashirwad Society maintenance charges",        "Monthly society fees", 3)
    once("Housing", "Home Insurance",         2200, "HDFC Ergo home insurance annual",              "Annual home insurance premium", 45)
    once("Housing", "Home Insurance",         2200, "HDFC Ergo home insurance renewal",             "Annual home insurance premium", 410)

    // ── FOOD & DINING ────────────────────────────────────────────────────────────
    monthly("Food & Dining", "Groceries", 3200, "D-Mart monthly grocery", "Essential household groceries", 3)
    monthly("Food & Dining", "Groceries", 1800, "Big Bazaar weekly grocery", "Weekly grocery restock", 12)
    monthly("Food & Dining", "Groceries",  900, "Reliance Smart top-up", "Mid-month grocery top-up", 20)
    frequent("Food & Dining", "Food Delivery",  320, "Swiggy - Biryani + Dal Tadka", "Food delivery order", 8)
    frequent("Food & Dining", "Food Delivery",  280, "Zomato - Paneer Tikka", "Lunch delivery order", 6)
    frequent("Food & Dining", "Food Delivery",  450, "Swiggy Instamart - snacks", "Quick grocery delivery", 4)
    frequent("Food & Dining", "Restaurant",    1200, "Barbeque Nation dinner", "Family restaurant outing", 2)
    frequent("Food & Dining", "Restaurant",     650, "Rajdhani Thali lunch", "Weekend lunch outing", 3)
    frequent("Food & Dining", "Restaurant",     480, "Domino's Pizza", "Pizza dinner", 4)
    frequent("Food & Dining", "Restaurant",     380, "KFC family bucket", "Fast food outing", 3)
    weekly("Food & Dining", "Office Lunch",     120, "Office canteen lunch", "Weekday office lunch")
    frequent("Food & Dining", "Coffee & Snacks", 220, "Starbucks - Caramel Macchiato", "Morning coffee", 5)
    frequent("Food & Dining", "Coffee & Snacks",  80, "Chaayos chai + bun maska", "Evening tea break", 12)
    frequent("Food & Dining", "Coffee & Snacks", 140, "Cafe Coffee Day cappuccino", "Coffee meeting", 4)
    frequent("Food & Dining", "Bakery",          350, "Monginis cake + pastries", "Celebration cake", 1)
    frequent("Food & Dining", "Juice/Drinks",    140, "Fresh juice from vendor", "Post-gym fresh juice", 8)

    // ── TRANSPORTATION ───────────────────────────────────────────────────────────
    monthly("Transportation", "Petrol/Diesel", 4200, "BPCL petrol - Honda Activa 3 fills", "Scooter fuel", 10)
    monthly("Transportation", "Petrol/Diesel", 3500, "HPCL petrol - Honda City", "Car fuel", 15)
    frequent("Transportation", "Auto/Taxi",     180, "Ola cab - office commute", "Morning cab to office", 8)
    frequent("Transportation", "Auto/Taxi",     250, "Uber - client meeting", "Business cab ride", 4)
    frequent("Transportation", "Auto/Taxi",     120, "Auto rickshaw - local trip", "Short auto ride", 12)
    monthly("Transportation", "Metro Pass",     500, "Ahmedabad metro monthly pass", "Monthly metro travel pass", 1)
    frequent("Transportation", "Parking",        80, "Mall parking", "Parking charges", 6)
    frequent("Transportation", "Parking",       120, "Office parking", "Monthly parking fee", 1)
    once("Transportation", "Vehicle Service",  4200, "Honda Activa 3000km service - Saga Motors", "Periodic service", 45)
    once("Transportation", "Vehicle Service",  3800, "Honda City service - dealer", "Car annual service", 180)
    once("Transportation", "Vehicle Service",  1500, "Tyre puncture repair + air", "Emergency tyre repair", 90)
    frequent("Transportation", "Toll Charges",  160, "Ahmedabad-Vadodara expressway toll", "Highway toll", 2)
    once("Transportation", "Car EMI",         12500, "HDFC Bank car loan EMI - Honda City", "Monthly car loan", 30)

    // ── HEALTH & MEDICAL ─────────────────────────────────────────────────────────
    monthly("Health & Medical", "Gym",          2500, "Gold's Gym monthly membership", "Monthly gym fee", 1)
    monthly("Health & Medical", "Health Insurance", 4200, "Star Health Family Floater premium", "Monthly health insurance", 5)
    monthly("Health & Medical", "Yoga/Fitness",  1200, "Cult.fit yoga + HIIT classes", "Monthly fitness subscription", 1)
    frequent("Health & Medical", "Medicines",    780, "Medplus pharmacy - monthly medicines", "Prescribed medicines", 2)
    once("Health & Medical", "Doctor Consultation",  600, "Dr. Mehta GP consultation", "General checkup", 30)
    once("Health & Medical", "Doctor Consultation",  600, "Dr. Mehta GP consultation", "Seasonal illness", 120)
    once("Health & Medical", "Doctor Consultation", 1200, "Dr. Kapoor dermatologist", "Skin consultation", 75)
    once("Health & Medical", "Doctor Consultation",  800, "Dr. Joshi - ENT specialist", "Ear infection", 200)
    once("Health & Medical", "Lab Tests",       1500, "SRL Diagnostics - CBC LFT thyroid", "Annual health checkup", 60)
    once("Health & Medical", "Lab Tests",        850, "Metropolis - blood sugar HbA1c", "Diabetes screening", 180)
    once("Health & Medical", "Dental Care",     1800, "Dr. Patel dental - teeth cleaning", "Dental scaling", 90)
    once("Health & Medical", "Dental Care",     2500, "Root canal treatment", "Dental treatment", 270)
    once("Health & Medical", "Eye Care",        3500, "Lenskart - progressive glasses", "New spectacles", 150)

    // ── SHOPPING ─────────────────────────────────────────────────────────────────
    frequent("Shopping", "Clothing",        4500, "Westside - formal shirts + trousers", "Office wear", 2)
    frequent("Shopping", "Clothing",        2800, "H&M casual weekend wear", "Casual clothing", 2)
    frequent("Shopping", "Clothing",        1800, "Zara sale purchase", "Sale shopping", 1)
    frequent("Shopping", "Online Shopping", 2400, "Amazon - kitchen items", "Household shopping", 3)
    frequent("Shopping", "Online Shopping", 1600, "Flipkart - home decor", "Home goods", 2)
    frequent("Shopping", "Online Shopping", 3500, "Amazon Prime Day sale", "Annual sale shopping", 1)
    frequent("Shopping", "Electronics",     7500, "Boat headphones - Amazon", "Audio equipment", 1)
    once("Shopping", "Electronics",        15000, "iPad Air 5th gen - Apple Store", "Tablet for work", 120)
    once("Shopping", "Electronics",         8500, "Samsung 43-inch TV - Croma", "New TV purchase", 200)
    frequent("Shopping", "Footwear",        3200, "Nike shoes - Myntra", "Sports shoes", 2)
    frequent("Shopping", "Footwear",        1800, "Bata formal shoes", "Office shoes", 1)
    frequent("Shopping", "Accessories",     1800, "Fastrack watch + wallet", "Accessories", 1)
    frequent("Shopping", "Books",            650, "Tech books - Amazon", "Programming books", 3)
    once("Shopping", "Furniture",          18000, "Wakefit mattress + bed frame", "Bedroom furniture", 300)
    once("Shopping", "Furniture",           7500, "Godrej bookshelf + study table", "Home office setup", 240)

    // ── ENTERTAINMENT ────────────────────────────────────────────────────────────
    monthly("Entertainment", "OTT Subscriptions",  649, "Netflix Premium 4K", "Streaming subscription", 1)
    monthly("Entertainment", "OTT Subscriptions",  299, "Disney+ Hotstar Super", "OTT subscription", 1)
    monthly("Entertainment", "OTT Subscriptions",  119, "Amazon Prime Video", "Streaming service", 1)
    monthly("Entertainment", "OTT Subscriptions",   99, "Spotify Premium family", "Music streaming", 1)
    frequent("Entertainment", "Movies",             700, "PVR INOX - movie tickets x2", "Movie outing", 2)
    frequent("Entertainment", "Gaming",             499, "PlayStation game download", "Gaming", 1)
    once("Entertainment", "Gaming",                4999, "PS5 game - GTA 6", "New game purchase", 60)
    once("Entertainment", "Sports",                 800, "IPL tickets - GT vs MI", "Live cricket", 90)
    once("Entertainment", "Sports",                1500, "Badminton court booking x4 sessions", "Sports activity", 30)
    once("Entertainment", "Concerts/Events",       2500, "Arijit Singh concert tickets", "Live concert", 180)

    // ── EDUCATION ────────────────────────────────────────────────────────────────
    once("Education", "Online Courses",   2999, "Udemy React + Next.js course", "Frontend course", 60)
    once("Education", "Online Courses",   4999, "Coursera AWS Cloud Practitioner", "Cloud cert", 180)
    once("Education", "Online Courses",   1999, "Zero to Mastery - TypeScript", "TypeScript course", 280)
    once("Education", "Online Courses",   3500, "Unacademy GATE prep subscription", "Exam prep", 330)
    frequent("Education", "Books & Stationery", 580, "Programming reference books", "Tech books", 2)
    once("Education", "Workshops",        1500, "TechFest AI/ML workshop - IIT", "Tech workshop", 120)
    once("Education", "Workshops",        2500, "Google DevFest Ahmedabad", "Developer event", 200)
    once("Education", "Exam Fees",        1800, "AWS SAA exam voucher", "Certification exam", 150)

    // ── COMMUNICATION ────────────────────────────────────────────────────────────
    monthly("Communication", "Mobile Recharge",     299, "Jio 84-day unlimited recharge", "Mobile plan", 5)
    monthly("Communication", "Broadband/Internet",  999, "Airtel Xstream 300Mbps monthly", "Home broadband", 7)
    monthly("Communication", "Cable/DTH",           399, "Tata Play HD+ pack", "DTH recharge", 6)
    monthly("Communication", "Streaming Services",  149, "YouTube Premium family", "YouTube ad-free", 8)

    // ── PERSONAL CARE ────────────────────────────────────────────────────────────
    monthly("Personal Care", "Salon & Haircut",  500, "Green Trends - haircut + beard trim", "Monthly salon", 15)
    frequent("Personal Care", "Skincare",       1200, "Minimalist moisturizer + sunscreen", "Skincare routine", 2)
    frequent("Personal Care", "Cosmetics",       950, "Lakme + MyGlamm cosmetics", "Cosmetics purchase", 1)
    once("Personal Care", "Spa & Massage",      1500, "Bodycraft full body massage", "Weekend spa", 45)
    once("Personal Care", "Spa & Massage",      2000, "Kaya skin studio facial", "Skin treatment", 120)
    frequent("Personal Care", "Perfume",        2200, "Fogg Black + Engage spray", "Fragrance purchase", 1)
    once("Personal Care", "Dental Care",         300, "Colgate Optic White toothpaste + floss", "Oral care", 30)

    // ── SAVINGS & INVESTMENT ─────────────────────────────────────────────────────
    monthly("Savings & Investment", "SIP",               10000, "Parag Parikh Flexi Cap SIP - Zerodha Coin", "Monthly equity SIP", 5)
    monthly("Savings & Investment", "SIP",                5000, "HDFC Mid Cap Opportunities SIP", "Monthly mid-cap SIP", 5)
    monthly("Savings & Investment", "SIP",                3000, "Axis Small Cap SIP", "Small cap SIP", 5)
    monthly("Savings & Investment", "LIC Premium",        5200, "LIC Jeevan Umang annual premium", "LIC monthly deduction", 10)
    monthly("Savings & Investment", "PPF",                5000, "SBI PPF account contribution", "Public provident fund", 5)
    monthly("Savings & Investment", "Recurring Deposit",  3000, "HDFC Bank RD 12-month", "Recurring deposit", 5)
    monthly("Savings & Investment", "Gold Purchase",      5000, "Paytm Gold digital purchase", "Digital gold savings", 7)
    monthly("Savings & Investment", "NPS",                2000, "NPS Tier 1 contribution", "Pension contribution", 5)
    monthly("Savings & Investment", "Emergency Fund",     3000, "Emergency corpus separate account", "Emergency savings", 5)
    once("Savings & Investment", "ELSS",                 50000, "ELSS tax saving - SBI Long Term Equity", "Annual ELSS investment", 60)

    // ── TRAVEL & VACATION ────────────────────────────────────────────────────────
    once("Travel & Vacation", "Flights",          14500, "Ahmedabad-Delhi-Ahmedabad IndiGo", "Round trip flight", 200)
    once("Travel & Vacation", "Flights",          18000, "Ahmedabad-Mumbai-Goa IndiGo", "Goa trip flight", 130)
    once("Travel & Vacation", "Hotels",            6500, "OYO Townhouse Goa 2 nights", "Goa hotel stay", 128)
    once("Travel & Vacation", "Hotels",            4200, "Treebo Hotel - Jaipur 2 nights", "Jaipur trip stay", 250)
    once("Travel & Vacation", "Hotels",            8500, "Radisson Blu - Mumbai 1 night", "Business trip hotel", 175)
    frequent("Travel & Vacation", "Bus/Train Tickets", 1200, "Rajdhani Express tickets", "Train travel", 2)
    once("Travel & Vacation", "Cab/Taxi",          2800, "Zoomcar self-drive rental 2 days", "Road trip car", 130)
    once("Travel & Vacation", "Travel Insurance",   850, "Digit travel insurance - Goa trip", "Trip insurance", 135)
    once("Travel & Vacation", "Sightseeing",        1500, "Goa sightseeing + water sports", "Tourist activities", 127)
    once("Travel & Vacation", "Sightseeing",        1200, "Jaipur fort + city tour", "Historical sightseeing", 251)
    frequent("Travel & Vacation", "Travel Food",     900, "Meals during travel", "Travel meals", 2)

    // ── GIFTS & DONATIONS ────────────────────────────────────────────────────────
    once("Gifts & Donations", "Birthday Gifts",   2000, "Priya birthday gift - Tanishq pendant", "Wife birthday", 150)
    once("Gifts & Donations", "Birthday Gifts",   1200, "Rohit birthday gift - watch", "Friend birthday", 80)
    once("Gifts & Donations", "Birthday Gifts",    800, "Gift for colleague farewell", "Office farewell gift", 220)
    once("Gifts & Donations", "Wedding Gifts",    5000, "Cousin wedding - cash envelope", "Wedding cash gift", 95)
    once("Gifts & Donations", "Wedding Gifts",    3000, "Friend wedding gift - dinner set", "Wedding gift", 200)
    once("Gifts & Donations", "Festival Expenses", 8500, "Diwali gifts + sweets + crackers", "Diwali celebration", 100)
    once("Gifts & Donations", "Festival Expenses", 3500, "Navratri outfit + garba entry", "Navratri festival", 110)
    once("Gifts & Donations", "Festival Expenses", 2000, "Holi colors + pichkari + sweets", "Holi celebration", 320)
    frequent("Gifts & Donations", "Charity/NGO",   1000, "CRY Foundation monthly donation", "Monthly charity", 1)
    once("Gifts & Donations", "Religious Donation", 2100, "Temple donation - Ambaji visit", "Religious offering", 160)

    // ── UTILITIES ────────────────────────────────────────────────────────────────
    monthly("Utilities", "Housekeeping",  3000, "Maid salary - daily cook + cleaning", "Domestic help monthly salary", 1)
    monthly("Utilities", "Laundry",        600, "Wassup laundry pickup service", "Monthly laundry service", 10)
    frequent("Utilities", "Gas/LPG",       950, "Indane LPG cylinder refill", "Cooking gas refill", 2)

    // ── BUSINESS EXPENSES ────────────────────────────────────────────────────────
    monthly("Business Expenses", "Domain & Hosting",   1200, "GoDaddy + Hostinger annual plan", "Web hosting monthly share", 1)
    monthly("Business Expenses", "Software/Tools",     2100, "Adobe Creative Cloud all apps", "Design tools subscription", 1)
    monthly("Business Expenses", "Software/Tools",      800, "Notion Pro + Slack Pro", "Productivity tools", 1)
    monthly("Business Expenses", "Subscriptions",       500, "GitHub Copilot Business", "AI coding assistant", 1)
    monthly("Business Expenses", "Advertising",        3000, "Meta Ads campaign - Reel promotion", "Social media ads", 1)
    monthly("Business Expenses", "Professional Fees",  2500, "CA Amit Trivedi retainer fee", "Accounting services", 1)
    once("Business Expenses", "Office Supplies",       2800, "Printer + cartridges + stationery", "Home office supplies", 50)

    // ── EMI & LOANS ──────────────────────────────────────────────────────────────
    monthly("EMI & Loans", "Home Loan EMI",    22000, "SBI Home Loan EMI - 20yr tenure", "Monthly home loan", 2)
    monthly("EMI & Loans", "Car Loan EMI",     12500, "HDFC Car Loan - Honda City", "Monthly car EMI", 3)
    monthly("EMI & Loans", "Credit Card Bill",  8500, "HDFC Regalia CC outstanding", "Credit card bill payment", 15)
    monthly("EMI & Loans", "Personal Loan EMI", 6500, "Bajaj Finserv personal loan EMI", "Personal loan monthly", 4)

    // ── TAXES & FEES ─────────────────────────────────────────────────────────────
    monthly("Taxes & Fees", "Professional Tax",  200, "Gujarat professional tax", "Monthly PT deduction", 1)
    monthly("Taxes & Fees", "Society Charges",   500, "Society parking + amenity charges", "Society extra charges", 1)
    once("Taxes & Fees", "Income Tax",          25000, "Advance tax Q3 payment", "Quarterly advance tax", 180)
    once("Taxes & Fees", "Income Tax",          18000, "Advance tax Q2 payment", "Quarterly advance tax", 270)
    once("Taxes & Fees", "Vehicle Tax",          3500, "Honda City annual road tax", "Vehicle road tax", 200)


    // ─────────────────────────────────────────────────────────────────────────────
    // INCOME BULK DATA
    // ─────────────────────────────────────────────────────────────────────────────
    type IRow = { catName: string; subName: string; amt: number; detail: string; desc: string; day: number }
    const incRows: IRow[] = []
    const iMonthly = (catName: string, subName: string, amt: number, detail: string, desc: string, dayOfMonth = 1) => {
        for (let m = 0; m < 12; m++) incRows.push({ catName, subName, amt: fuzz(amt * 0.31, 0.05), detail, desc, day: m * 30 + dayOfMonth })
    }
    const iOnce = (catName: string, subName: string, amt: number, detail: string, desc: string, day: number) => {
        incRows.push({ catName, subName, amt: amt * 0.31, detail, desc, day })
    }
    const iFreq = (catName: string, subName: string, amt: number, detail: string, desc: string, perMonth: number) => {
        for (let i = 0; i < 6; i++) incRows.push({ catName, subName, amt: fuzz(amt * 0.31, 0.05), detail, desc, day: i * 60 + rand(0, 30) })
    }
    
    


    // Salary - every month, every field
    iMonthly("Salary", "Basic Pay",       55000, "Monthly salary - Infosys Ltd Ahmedabad",      "Base salary credit", 1)
    iMonthly("Salary", "HRA",             15000, "HRA component monthly credit",                 "House Rent Allowance", 1)
    iMonthly("Salary", "DA",               5000, "Dearness allowance monthly",                   "DA component", 1)
    iMonthly("Salary", "TA",               2000, "Travel allowance monthly",                     "Conveyance allowance", 1)
    iOnce("Salary", "Bonus",              42000, "Q1 April-June performance bonus",              "Quarterly bonus", 270)
    iOnce("Salary", "Bonus",              38000, "Q2 July-Sep performance bonus",                "Quarterly bonus", 180)
    iOnce("Salary", "Bonus",              45000, "Q3 Oct-Dec performance bonus",                 "Quarterly bonus", 90)
    iOnce("Salary", "Performance Pay",    18000, "Annual appraisal increment payout",            "Yearly appraisal", 45)
    iOnce("Salary", "Arrears",            12000, "Salary arrears - increment effective from Apr","Arrears payment", 200)

    // Freelance
    iOnce("Freelance Income", "Web Development",  35000, "Nexus Corp - full stack web project M1", "Project milestone 1", 60)
    iOnce("Freelance Income", "Web Development",  25000, "Nexus Corp - final payment M2",           "Project milestone 2", 30)
    iOnce("Freelance Income", "Web Development",  40000, "Startup MVP - React Node project",         "MVP development payment", 120)
    iOnce("Freelance Income", "Web Development",  22000, "E-commerce store development",             "Shopify store payment", 200)
    iOnce("Freelance Income", "Mobile App",       40000, "Flutter retail app - Milestone 1",         "App development M1", 150)
    iOnce("Freelance Income", "Mobile App",       35000, "Flutter retail app - Final delivery",       "App development final", 100)
    iOnce("Freelance Income", "Consultation",      8000, "Tech consultation - 4 sessions @2000",     "Hourly consultation", 75)
    iOnce("Freelance Income", "Consultation",      6000, "Architecture review - startup",             "System design review", 40)
    iOnce("Freelance Income", "SEO Services",     12000, "SEO audit + 3 month retainer",             "SEO project", 90)
    iOnce("Freelance Income", "Graphic Design",    8500, "Logo + brand kit for Kavita client",        "Branding project", 130)
    iOnce("Freelance Income", "Content Writing",   4500, "Blog writing - 10 articles",               "Content creation", 170)

    // Business Income
    iMonthly("Business Income", "Online Sales",    8500, "Etsy digital templates monthly revenue",  "Digital product sales", 20)
    iMonthly("Business Income", "Product Sales",  12000, "Amazon store monthly payout",              "E-commerce revenue", 22)
    iOnce("Business Income", "Reselling",          5500, "Reselling electronics - profit",           "Reselling income", 85)

    // Investment Returns
    iOnce("Investment Returns", "Mutual Funds",    4800, "Zerodha Coin - PPFAS redemption",         "MF profit booking", 55)
    iOnce("Investment Returns", "Mutual Funds",    3200, "SBI Blue Chip - partial redemption",       "MF withdrawal", 200)
    iOnce("Investment Returns", "Stock Dividends", 3200, "TCS + Infosys dividend Q1",               "Quarterly dividend", 270)
    iOnce("Investment Returns", "Stock Dividends", 2800, "HCL Tech + Wipro dividend Q2",            "Stock dividend", 180)
    iOnce("Investment Returns", "Stock Dividends", 3500, "HDFC Bank + ICICI dividend Q3",           "Quarterly dividend", 90)
    iOnce("Investment Returns", "FD Interest",     5100, "SBI FD quarterly interest credit",        "FD interest", 90)
    iOnce("Investment Returns", "FD Interest",     5100, "SBI FD quarterly interest credit",        "FD interest", 180)
    iOnce("Investment Returns", "FD Interest",     5100, "SBI FD quarterly interest credit",        "FD interest", 270)
    iOnce("Investment Returns", "PPF Interest",    2800, "PPF account annual interest credit",       "PPF interest", 360)
    iOnce("Investment Returns", "Crypto Gains",    8500, "Crypto profit - Bitcoin sell 0.01 BTC",    "Crypto trading profit", 150)
    iOnce("Investment Returns", "RD Maturity",    38000, "HDFC RD 12-month maturity payout",         "RD maturity", 340)

    // Rental Income
    iMonthly("Rental Income", "Shop Rent",        12000, "Shop rent - Vikas Mehta tenant",          "Commercial shop rental", 5)

    // Other Income
    iFreq("Other Income", "Cashback",       750, "HDFC Regalia credit card rewards",         "Monthly cashback", 1)
    iFreq("Other Income", "Cashback",       320, "Paytm + GPay UPI cashback",                "UPI payment rewards", 1)
    iOnce("Other Income", "Tax Refund",    12500, "Income Tax Refund AY 2024-25",             "IT department refund", 200)
    iOnce("Other Income", "Gifts Received", 5000, "Birthday cash gift from parents",          "Cash gift", 150)
    iOnce("Other Income", "Gifts Received",11000, "Diwali bonus from company",                "Festival bonus", 100)
    iOnce("Other Income", "Prize/Lottery",  2500, "Company quiz competition prize",           "Office competition prize", 60)
    iOnce("Other Income", "Insurance Payout", 25000, "LIC maturity payout - old policy",     "Insurance maturity", 250)


    // ── Loop over all users ───────────────────────────────────────────────────────
    const CHUNK = 50
    for (const user of users) {
        const UID = user.UserID
        console.log(`\n👤 Seeding transactions for: ${user.UserName} (ID: ${UID})`)

        // ── Get categories & subcategories already seeded ───────────────────────────
        const cats    = await prisma.categories.findMany({ where: { UserID: UID } })
        const subs    = await prisma.sub_categories.findMany({ where: { UserID: UID } })
        const people  = await prisma.peoples.findMany({ where: { UserID: UID } })
        const projects = await prisma.projects.findMany({ where: { UserID: UID } })

        if (cats.length === 0 || people.length === 0) {
            console.log(`   ⚠️ Skipping User ID ${UID} - Categories or people missing!`)
            continue
        }

        console.log(`   Found: ${cats.length} categories, ${subs.length} subcategories, ${people.length} people, ${projects.length} projects`)

        // Maps
        const catMap: Record<string, number> = {}
        cats.forEach(c => { catMap[c.CategoryName] = c.CategoryID })
        const subMap: Record<string, number> = {}
        subs.forEach(s => { subMap[`${s.CategoryID}::${s.SubCategoryName}`] = s.SubCategoryID })
        const pids  = people.map(p => p.PeopleID)
        const prids = projects.map(p => p.ProjectID)
        const pick  = <T>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)]
        const maybeProject = () => Math.random() > 0.15 && prids.length > 0 ? pick(prids) : null

        // ── Clear existing expenses & incomes ────────────────────────────────────────
        console.log("   Clearing old expenses & incomes...")
        await prisma.$executeRawUnsafe(`DELETE FROM expenses WHERE UserID = ${UID}`)
        await prisma.$executeRawUnsafe(`DELETE FROM incomes WHERE UserID = ${UID}`)
        console.log("   ✅ Cleared")

        // ─────────────────────────────────────────────────────────────────────────────
        // BULK INSERT EXPENSES
        // ─────────────────────────────────────────────────────────────────────────────
        console.log(`   Bulk inserting ${expRows.length} expense rows...`)
        let expCount = 0
        for (let i = 0; i < expRows.length; i += CHUNK) {
            const chunk = expRows.slice(i, i + CHUNK)
            const vals  = chunk.map(r => {
                const catId = catMap[r.catName]
                const subId = subMap[`${catId}::${r.subName}`]
                if (!catId || !subId) return null
                const pid  = pick(pids)
                const proj = maybeProject()
                const dt   = daysAgo(r.day)
                return proj
                    ? `(${UID}, '${dt}', ${catId}, ${subId}, ${pid}, ${proj}, ${r.amt}, '${r.detail.replace(/'/g,"\\'")}', '${r.desc.replace(/'/g,"\\'")}', NOW(), NOW())`
                    : `(${UID}, '${dt}', ${catId}, ${subId}, ${pid}, NULL, ${r.amt}, '${r.detail.replace(/'/g,"\\'")}', '${r.desc.replace(/'/g,"\\'")}', NOW(), NOW())`
            }).filter(Boolean)
            if (vals.length === 0) continue
            await prisma.$executeRawUnsafe(`
                INSERT INTO expenses (UserID, ExpenseDate, CategoryID, SubCategoryID, PeopleID, ProjectID, Amount, ExpenseDetail, Description, Created, Modified)
                VALUES ${vals.join(',')}
            `)
            expCount += vals.length
            process.stdout.write(`\r   Inserted ${expCount}/${expRows.length} expenses...`)
        }
        console.log(`\n   ✅ ${expCount} expense rows inserted`)

        // ─────────────────────────────────────────────────────────────────────────────
        // BULK INSERT INCOMES
        // ─────────────────────────────────────────────────────────────────────────────
        console.log(`   Bulk inserting ${incRows.length} income rows...`)
        let incCount = 0
        for (let i = 0; i < incRows.length; i += CHUNK) {
            const chunk = incRows.slice(i, i + CHUNK)
            const vals  = chunk.map(r => {
                const catId = catMap[r.catName]
                const subId = subMap[`${catId}::${r.subName}`]
                if (!catId || !subId) return null
                const pid  = pick(pids)
                const proj = maybeProject()
                const dt   = daysAgo(r.day)
                return proj
                    ? `(${UID}, '${dt}', ${catId}, ${subId}, ${pid}, ${proj}, ${r.amt}, '${r.detail.replace(/'/g,"\\'")}', '${r.desc.replace(/'/g,"\\'")}', NOW(), NOW())`
                    : `(${UID}, '${dt}', ${catId}, ${subId}, ${pid}, NULL, ${r.amt}, '${r.detail.replace(/'/g,"\\'")}', '${r.desc.replace(/'/g,"\\'")}', NOW(), NOW())`
            }).filter(Boolean)
            if (vals.length === 0) continue
            await prisma.$executeRawUnsafe(`
                INSERT INTO incomes (UserID, IncomeDate, CategoryID, SubCategoryID, PeopleID, ProjectID, Amount, IncomeDetail, Description, Created, Modified)
                VALUES ${vals.join(',')}
            `)
            incCount += vals.length
            process.stdout.write(`\r   Inserted ${incCount}/${incRows.length} incomes...`)
        }
        console.log(`\n   ✅ ${incCount} income rows inserted`)
    }

    console.log("\n🎉 Bulk seed complete for all database users!")
}

main()
    .catch(e => { console.error(e); process.exit(1) })
    .finally(() => prisma.$disconnect())
