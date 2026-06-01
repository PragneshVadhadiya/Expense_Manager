import { PrismaClient } from '../src/generated/prisma/client'
const prisma = new PrismaClient()

// ─── Helpers ──────────────────────────────────────────────────────────────────
function daysAgo(days: number): Date {
    const d = new Date()
    d.setDate(d.getDate() - days)
    return d
}
function rand(min: number, max: number) { return Math.floor(Math.random() * (max - min + 1)) + min }
function pick<T>(arr: T[]): T { return arr[Math.floor(Math.random() * arr.length)] }
function fuzz(base: number, pct = 0.15): number {
    return Math.round(base * (1 + (Math.random() * 2 - 1) * pct))
}

// ─── USERS ────────────────────────────────────────────────────────────────────
const USERS = [
    { name: "Pragnesh Vadhadiya", email: "pragnesh@gmail.com",  mobile: "9876543210", role: "Admin",  password: "password123" },
    { name: "Riya Patel",         email: "riya@gmail.com",       mobile: "9988776601", role: "User",   password: "pass123" },
    { name: "Aryan Shah",         email: "aryan@gmail.com",      mobile: "9877001122", role: "User",   password: "pass123" },
]

// ─── PEOPLE (contacts per user) ───────────────────────────────────────────────
const PEOPLE_LIST = [
    { name: "Priya Vadhadiya",   mobile: "9876500001", email: "priya.v@gmail.com",   code: "PV001", desc: "Wife - family expenses"           },
    { name: "Rohit Sharma",      mobile: "9876500002", email: "rohit.s@gmail.com",   code: "RS002", desc: "Friend - shared outings"          },
    { name: "Anita Patel",       mobile: "9876500003", email: "anita.p@gmail.com",   code: "AP003", desc: "Sister - occasional transfers"    },
    { name: "Suresh Kumar",      mobile: "9876500004", email: "suresh.k@gmail.com",  code: "SK004", desc: "Colleague - lunch splits"         },
    { name: "Meena Desai",       mobile: "9876500005", email: "meena.d@gmail.com",   code: "MD005", desc: "Neighbour - utility payments"     },
    { name: "Vikas Mehta",       mobile: "9876500006", email: "vikas.m@gmail.com",   code: "VM006", desc: "Business partner"                 },
    { name: "Kavita Joshi",      mobile: "9876500007", email: "kavita.j@gmail.com",  code: "KJ007", desc: "Freelance client"                 },
    { name: "Deepak Rao",        mobile: "9876500008", email: "deepak.r@gmail.com",  code: "DR008", desc: "Landlord - rent payments"        },
    { name: "Sunita Gupta",      mobile: "9876500009", email: "sunita.g@gmail.com",  code: "SG009", desc: "Mother - family support"         },
    { name: "Amit Trivedi",      mobile: "9876500010", email: "amit.t@gmail.com",    code: "AT010", desc: "CA / Accountant"                  },
    { name: "Pooja Nair",        mobile: "9876500011", email: "pooja.n@gmail.com",   code: "PN011", desc: "Gym partner"                      },
    { name: "Rahul Pandey",      mobile: "9876500012", email: "rahul.p@gmail.com",   code: "RP012", desc: "Cousin - shared travel"          },
]

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
const PROJECTS_LIST = [
    { name: "Home Renovation 2024",      detail: "Complete interior renovation of 3BHK - flooring, paint, modular kitchen",      startDays: -150, endDays:  60, active: true  },
    { name: "Freelance - Nexus Corp",    detail: "Full-stack web application for Nexus Corp startup",                             startDays:  -90, endDays:  30, active: true  },
    { name: "Emergency Fund Goal",       detail: "Build 6-month emergency fund of ₹3,00,000",                                     startDays: -365, endDays: 180, active: true  },
    { name: "Goa Family Trip",           detail: "5-day Goa vacation for family of 4 - Dec 2024",                                 startDays: -190, endDays: -10, active: false },
    { name: "MacBook Pro Purchase",      detail: "Save & buy MacBook Pro M3 for development",                                     startDays: -100, endDays: -30, active: false },
    { name: "E-Commerce Side Business",  detail: "Launch Etsy + Amazon store for handmade products",                              startDays:  -45, endDays: 270, active: true  },
    { name: "Car Upgrade Fund",          detail: "Saving for new car - Honda City or Creta by Dec 2025",                          startDays: -200, endDays: 365, active: true  },
    { name: "Freelance - Startup MVP",   detail: "Build MVP for a healthcare startup - React + Node",                             startDays:  -30, endDays:  90, active: true  },
    { name: "Wedding Anniversary Trip",  detail: "Trip to Manali with wife for 5th anniversary",                                  startDays:  -60, endDays: -5,  active: false },
    { name: "Cloud Migration Project",   detail: "Client project - migrate legacy app to AWS",                                    startDays:  -20, endDays: 120, active: true  },
    { name: "Home Loan Prepayment",      detail: "Target extra ₹1L prepayment on home loan this year",                           startDays: -180, endDays: 185, active: true  },
    { name: "Diwali Preparation 2024",   detail: "Gifts, decoration, sweets, crackers for Diwali",                                startDays: -100, endDays: -80, active: false },
]

// ─── CATEGORIES ───────────────────────────────────────────────────────────────
const CATEGORIES = [
    { name: "Salary",               isIncome: true,  isExpense: false, seq: 1,  desc: "Monthly employment income",
      subs: ["Basic Pay","HRA","DA","TA","Bonus","Performance Pay","Arrears","Overtime Pay"] },
    { name: "Freelance Income",     isIncome: true,  isExpense: false, seq: 2,  desc: "Project-based freelance earnings",
      subs: ["Web Development","Graphic Design","Content Writing","Consultation","Mobile App","SEO Services"] },
    { name: "Business Income",      isIncome: true,  isExpense: false, seq: 3,  desc: "Revenue from business activities",
      subs: ["Product Sales","Service Revenue","Online Sales","Reselling","Wholesale"] },
    { name: "Investment Returns",   isIncome: true,  isExpense: false, seq: 4,  desc: "Returns from financial investments",
      subs: ["Stock Dividends","Mutual Funds","FD Interest","PPF Interest","Crypto Gains","RD Maturity"] },
    { name: "Rental Income",        isIncome: true,  isExpense: false, seq: 5,  desc: "Income from renting property/assets",
      subs: ["House Rent","Shop Rent","Vehicle Rent"] },
    { name: "Other Income",         isIncome: true,  isExpense: false, seq: 6,  desc: "Miscellaneous income sources",
      subs: ["Cashback","Gifts Received","Tax Refund","Prize/Lottery","Insurance Payout"] },

    { name: "Food & Dining",        isIncome: false, isExpense: true,  seq: 1,  desc: "All food related expenses",
      subs: ["Groceries","Restaurant","Food Delivery","Coffee & Snacks","Office Lunch","Bakery","Juice/Drinks"] },
    { name: "Housing",              isIncome: false, isExpense: true,  seq: 2,  desc: "Home and accommodation expenses",
      subs: ["Rent","Home Loan EMI","Society Maintenance","Electricity","Water Bill","Gas Bill","Property Tax","Home Insurance"] },
    { name: "Transportation",       isIncome: false, isExpense: true,  seq: 3,  desc: "Travel and commute costs",
      subs: ["Petrol/Diesel","Auto/Taxi","Bus/Train Fare","Metro Pass","Parking","Car EMI","Vehicle Service","Toll Charges"] },
    { name: "Health & Medical",     isIncome: false, isExpense: true,  seq: 4,  desc: "Healthcare and wellness expenses",
      subs: ["Doctor Consultation","Medicines","Lab Tests","Hospital Bills","Health Insurance","Gym","Yoga/Fitness","Dental Care","Eye Care"] },
    { name: "Shopping",             isIncome: false, isExpense: true,  seq: 5,  desc: "Clothing, gadgets & consumer goods",
      subs: ["Clothing","Electronics","Footwear","Accessories","Home Appliances","Online Shopping","Furniture","Books"] },
    { name: "Entertainment",        isIncome: false, isExpense: true,  seq: 6,  desc: "Fun, leisure and recreation",
      subs: ["Movies","OTT Subscriptions","Gaming","Concerts/Events","Sports","Hobbies","Theme Parks"] },
    { name: "Education",            isIncome: false, isExpense: true,  seq: 7,  desc: "Learning and skill development",
      subs: ["School/College Fees","Online Courses","Books & Stationery","Coaching","Exam Fees","Workshops"] },
    { name: "Communication",        isIncome: false, isExpense: true,  seq: 8,  desc: "Phone, internet and media bills",
      subs: ["Mobile Recharge","Broadband/Internet","Cable/DTH","Streaming Services","Landline"] },
    { name: "Personal Care",        isIncome: false, isExpense: true,  seq: 9,  desc: "Grooming and personal wellness",
      subs: ["Salon & Haircut","Skincare","Cosmetics","Spa & Massage","Perfume","Dental Care"] },
    { name: "Savings & Investment", isIncome: false, isExpense: true,  seq: 10, desc: "Savings goals and investments",
      subs: ["SIP","Recurring Deposit","PPF","LIC Premium","Emergency Fund","Gold Purchase","NPS","ELSS"] },
    { name: "Travel & Vacation",    isIncome: false, isExpense: true,  seq: 11, desc: "Trips, holidays and travel",
      subs: ["Flights","Hotels","Bus/Train Tickets","Travel Insurance","Sightseeing","Travel Food","Cab/Taxi"] },
    { name: "Gifts & Donations",    isIncome: false, isExpense: true,  seq: 12, desc: "Gifting and charitable giving",
      subs: ["Birthday Gifts","Wedding Gifts","Festival Expenses","Charity/NGO","Religious Donation"] },
    { name: "Utilities",            isIncome: false, isExpense: true,  seq: 13, desc: "Home utility services",
      subs: ["Electricity Bill","Water Bill","Gas/LPG","Internet","Housekeeping","Laundry"] },
    { name: "Business Expenses",    isIncome: false, isExpense: true,  seq: 14, desc: "Costs for running business/freelance",
      subs: ["Domain & Hosting","Software/Tools","Advertising","Office Supplies","Professional Fees","Subscriptions"] },
    { name: "EMI & Loans",          isIncome: false, isExpense: true,  seq: 15, desc: "Loan repayments and EMIs",
      subs: ["Home Loan EMI","Car Loan EMI","Personal Loan EMI","Education Loan EMI","Credit Card Bill"] },
    { name: "Taxes & Fees",         isIncome: false, isExpense: true,  seq: 16, desc: "Government taxes and official fees",
      subs: ["Income Tax","GST Paid","Vehicle Tax","Stamp Duty","Professional Tax","Society Charges"] },
]

// ─── EXPENSE TEMPLATES ─────────────────────────────────────────────────────────
// [category, subcategory, baseAmount, detail, description, frequency/month]
type ET = { cat: string; sub: string; amt: number; detail: string; desc: string; freq: number }
const EXPENSE_TEMPLATES: ET[] = [
    // Food & Dining - high frequency
    { cat:"Food & Dining",     sub:"Groceries",          amt:3200,  detail:"D-Mart monthly grocery shopping",          desc:"Essential household groceries",          freq:5 },
    { cat:"Food & Dining",     sub:"Groceries",          amt:1800,  detail:"Big Bazaar grocery run",                   desc:"Weekly grocery restock",                freq:4 },
    { cat:"Food & Dining",     sub:"Groceries",          amt:950,   detail:"Reliance Smart grocery",                   desc:"Top-up grocery purchase",               freq:3 },
    { cat:"Food & Dining",     sub:"Restaurant",         amt:1200,  detail:"Dinner at Barbeque Nation",                desc:"Family dinner outing",                  freq:2 },
    { cat:"Food & Dining",     sub:"Restaurant",         amt:650,   detail:"Lunch at Rajdhani Restaurant",             desc:"Weekend lunch",                         freq:3 },
    { cat:"Food & Dining",     sub:"Restaurant",         amt:480,   detail:"Pizza at Domino's",                        desc:"Quick dinner",                          freq:4 },
    { cat:"Food & Dining",     sub:"Food Delivery",      amt:320,   detail:"Swiggy - Butter Chicken Biryani",          desc:"Late night food delivery",              freq:6 },
    { cat:"Food & Dining",     sub:"Food Delivery",      amt:280,   detail:"Zomato - Paneer Tikka + Naan",             desc:"Work from home lunch order",            freq:6 },
    { cat:"Food & Dining",     sub:"Food Delivery",      amt:420,   detail:"Swiggy - Chinese combo meal",              desc:"Weekend dinner delivery",               freq:4 },
    { cat:"Food & Dining",     sub:"Coffee & Snacks",    amt:220,   detail:"Starbucks - Caramel Macchiato",            desc:"Morning coffee treat",                  freq:5 },
    { cat:"Food & Dining",     sub:"Coffee & Snacks",    amt:80,    detail:"Chaayos chai + snacks",                    desc:"Evening tea break",                     freq:8 },
    { cat:"Food & Dining",     sub:"Office Lunch",       amt:120,   detail:"Office canteen lunch",                     desc:"Weekday office lunch",                  freq:15},
    { cat:"Food & Dining",     sub:"Bakery",             amt:350,   detail:"Monginis cake + pastries",                 desc:"Birthday celebration cake",             freq:1 },
    { cat:"Food & Dining",     sub:"Juice/Drinks",       amt:140,   detail:"Fresh juice from street vendor",           desc:"Post gym fresh juice",                  freq:6 },

    // Housing - monthly fixed
    { cat:"Housing",           sub:"Rent",               amt:20000, detail:"Monthly rent - 2BHK Satellite, Ahmedabad",desc:"House rent payment to landlord",        freq:1 },
    { cat:"Housing",           sub:"Electricity",        amt:2400,  detail:"PGVCL electricity bill",                   desc:"Monthly electricity charges",           freq:1 },
    { cat:"Housing",           sub:"Water Bill",         amt:350,   detail:"AMC water charges",                        desc:"Municipal water bill",                  freq:1 },
    { cat:"Housing",           sub:"Gas Bill",           amt:980,   detail:"GSPC gas bill",                            desc:"Piped natural gas monthly bill",        freq:1 },
    { cat:"Housing",           sub:"Society Maintenance",amt:1800,  detail:"Aashirwad Society maintenance",            desc:"Monthly society maintenance charges",   freq:1 },
    { cat:"Housing",           sub:"Home Insurance",     amt:2200,  detail:"HDFC Ergo home insurance annual",          desc:"Annual home insurance premium",         freq:1 },

    // Transportation
    { cat:"Transportation",    sub:"Petrol/Diesel",      amt:4200,  detail:"BPCL petrol - Honda Activa 3 fills",       desc:"Monthly petrol for scooter",            freq:2 },
    { cat:"Transportation",    sub:"Petrol/Diesel",      amt:3500,  detail:"HPCL petrol - Honda City fill",            desc:"Car petrol fill",                       freq:3 },
    { cat:"Transportation",    sub:"Auto/Taxi",          amt:180,   detail:"Ola cab - Satellite to Navrangpura",       desc:"Office commute cab",                    freq:8 },
    { cat:"Transportation",    sub:"Auto/Taxi",          amt:250,   detail:"Uber - Airport drop",                      desc:"Airport ride",                          freq:2 },
    { cat:"Transportation",    sub:"Metro Pass",         amt:500,   detail:"Ahmedabad BRTS+Metro monthly pass",        desc:"Monthly public transport pass",         freq:1 },
    { cat:"Transportation",    sub:"Parking",            amt:100,   detail:"Mall parking charges",                     desc:"Parking at Iskon mall",                 freq:4 },
    { cat:"Transportation",    sub:"Vehicle Service",    amt:3800,  detail:"Honda Activa 3000km service",              desc:"Scooter periodic service",              freq:1 },
    { cat:"Transportation",    sub:"Toll Charges",       amt:160,   detail:"Ahmedabad-Vadodara expressway toll",       desc:"Highway toll both ways",                freq:2 },

    // Health & Medical
    { cat:"Health & Medical",  sub:"Medicines",          amt:780,   detail:"Monthly medicines - Medplus pharmacy",     desc:"Prescribed medicines monthly stock",    freq:2 },
    { cat:"Health & Medical",  sub:"Doctor Consultation",amt:600,   detail:"Dr. Mehta - General physician",            desc:"GP checkup consultation",               freq:1 },
    { cat:"Health & Medical",  sub:"Doctor Consultation",amt:1200,  detail:"Dr. Kapoor - Dermatologist",               desc:"Skin specialist consultation",          freq:1 },
    { cat:"Health & Medical",  sub:"Gym",                amt:2500,  detail:"Gold's Gym monthly membership",            desc:"Monthly gym fee",                       freq:1 },
    { cat:"Health & Medical",  sub:"Lab Tests",          amt:1500,  detail:"SRL Diagnostics - CBC, LFT, thyroid",      desc:"Annual health checkup tests",           freq:1 },
    { cat:"Health & Medical",  sub:"Health Insurance",   amt:4200,  detail:"Star Health family floater premium",       desc:"Monthly health insurance EMI",         freq:1 },
    { cat:"Health & Medical",  sub:"Yoga/Fitness",       amt:1200,  detail:"Cult.fit yoga + HIIT subscription",        desc:"Monthly fitness app + classes",         freq:1 },
    { cat:"Health & Medical",  sub:"Dental Care",        amt:1800,  detail:"Dr. Patel dental clinic - cleaning",       desc:"Teeth cleaning and checkup",            freq:1 },
    { cat:"Health & Medical",  sub:"Eye Care",           amt:3500,  detail:"Lenskart - Progressive glasses",           desc:"Prescription glasses purchase",         freq:1 },

    // Shopping
    { cat:"Shopping",          sub:"Clothing",           amt:4500,  detail:"Westside shirts + trousers",               desc:"Office wear shopping",                  freq:2 },
    { cat:"Shopping",          sub:"Clothing",           amt:2800,  detail:"H&M casual wear",                          desc:"Weekend casual clothes",                freq:2 },
    { cat:"Shopping",          sub:"Electronics",        amt:7500,  detail:"Boat Rockerz 450 headphones",              desc:"Wireless headphones purchase",          freq:1 },
    { cat:"Shopping",          sub:"Electronics",        amt:3200,  detail:"USB hub + portable charger - Amazon",      desc:"Work from home accessories",            freq:1 },
    { cat:"Shopping",          sub:"Footwear",           amt:3200,  detail:"Nike Air Max - Myntra",                    desc:"Sports shoes online",                   freq:2 },
    { cat:"Shopping",          sub:"Online Shopping",    amt:2400,  detail:"Amazon - kitchen appliances",              desc:"Household items online",                freq:3 },
    { cat:"Shopping",          sub:"Online Shopping",    amt:1600,  detail:"Flipkart - home decor items",              desc:"Home decoration shopping",              freq:2 },
    { cat:"Shopping",          sub:"Accessories",        amt:1800,  detail:"Fastrack watch + wallet combo",            desc:"Accessories from mall",                 freq:1 },
    { cat:"Shopping",          sub:"Books",              amt:650,   detail:"Programming books - Amazon",               desc:"Tech and self-help books",              freq:2 },

    // Entertainment
    { cat:"Entertainment",     sub:"OTT Subscriptions",  amt:649,   detail:"Netflix Premium 4K subscription",          desc:"Monthly Netflix streaming",             freq:1 },
    { cat:"Entertainment",     sub:"OTT Subscriptions",  amt:299,   detail:"Disney+ Hotstar Super",                    desc:"OTT subscription",                      freq:1 },
    { cat:"Entertainment",     sub:"OTT Subscriptions",  amt:119,   detail:"Amazon Prime Video monthly",               desc:"Prime video subscription",              freq:1 },
    { cat:"Entertainment",     sub:"OTT Subscriptions",  amt:99,    detail:"Spotify Premium family plan",              desc:"Music streaming subscription",          freq:1 },
    { cat:"Entertainment",     sub:"Movies",             amt:700,   detail:"PVR INOX - Jawan IMAX tickets x2",         desc:"Movie outing with family",              freq:2 },
    { cat:"Entertainment",     sub:"Gaming",             amt:499,   detail:"PlayStation game - Spider-Man 2",          desc:"Gaming purchase",                       freq:1 },
    { cat:"Entertainment",     sub:"Sports",             amt:800,   detail:"IPL tickets - Gujarat Titans vs MI",       desc:"Cricket match live",                    freq:1 },

    // Education
    { cat:"Education",         sub:"Online Courses",     amt:2999,  detail:"Udemy - Complete React + Next.js course",  desc:"Frontend development course",           freq:1 },
    { cat:"Education",         sub:"Online Courses",     amt:4999,  detail:"Coursera - AWS Cloud Practitioner",        desc:"Cloud certification course",            freq:1 },
    { cat:"Education",         sub:"Books & Stationery", amt:580,   detail:"Clean Code + System Design books",         desc:"Programming reference books",           freq:2 },
    { cat:"Education",         sub:"Workshops",          amt:1500,  detail:"TechFest AI/ML workshop",                  desc:"Weekend tech workshop",                 freq:1 },

    // Communication
    { cat:"Communication",     sub:"Mobile Recharge",    amt:299,   detail:"Jio 84-day unlimited plan",                desc:"Monthly mobile recharge",               freq:1 },
    { cat:"Communication",     sub:"Broadband/Internet", amt:999,   detail:"Airtel Xstream Fiber 300Mbps",             desc:"Home broadband monthly",                freq:1 },
    { cat:"Communication",     sub:"Cable/DTH",          amt:399,   detail:"Tata Play HD+ pack recharge",              desc:"Monthly DTH recharge",                  freq:1 },
    { cat:"Communication",     sub:"Streaming Services", amt:149,   detail:"YouTube Premium family",                   desc:"Ad-free YouTube subscription",          freq:1 },

    // Personal Care
    { cat:"Personal Care",     sub:"Salon & Haircut",    amt:500,   detail:"Green Trends salon - cut + beard",         desc:"Monthly salon visit",                   freq:1 },
    { cat:"Personal Care",     sub:"Skincare",           amt:1200,  detail:"Minimalist moisturizer + sunscreen",       desc:"Skincare routine products",             freq:2 },
    { cat:"Personal Care",     sub:"Cosmetics",          amt:950,   detail:"Lakme lipstick + foundation",              desc:"Cosmetics purchase",                    freq:1 },
    { cat:"Personal Care",     sub:"Spa & Massage",      amt:1500,  detail:"Bodycraft spa full body massage",          desc:"Weekend spa relaxation",                freq:1 },
    { cat:"Personal Care",     sub:"Perfume",            amt:2200,  detail:"Fogg Black Collection perfume",            desc:"Perfume purchase",                      freq:1 },

    // Savings & Investment
    { cat:"Savings & Investment",sub:"SIP",              amt:10000, detail:"Parag Parikh Flexi Cap SIP - Zerodha",     desc:"Monthly equity mutual fund SIP",        freq:1 },
    { cat:"Savings & Investment",sub:"SIP",              amt:5000,  detail:"HDFC Mid Cap Opportunities SIP",           desc:"Monthly mid cap SIP",                   freq:1 },
    { cat:"Savings & Investment",sub:"LIC Premium",      amt:5200,  detail:"LIC Jeevan Umang annual premium",          desc:"Monthly LIC premium deduction",         freq:1 },
    { cat:"Savings & Investment",sub:"PPF",              amt:5000,  detail:"SBI PPF account contribution",             desc:"Monthly PPF contribution",              freq:1 },
    { cat:"Savings & Investment",sub:"Recurring Deposit",amt:3000,  detail:"HDFC Bank RD - 1 year tenure",            desc:"Monthly recurring deposit",             freq:1 },
    { cat:"Savings & Investment",sub:"Gold Purchase",    amt:5000,  detail:"Digital gold - Paytm Gold",               desc:"Monthly digital gold savings",          freq:1 },
    { cat:"Savings & Investment",sub:"NPS",              amt:2000,  detail:"National Pension Scheme contribution",     desc:"Monthly NPS contribution",              freq:1 },
    { cat:"Savings & Investment",sub:"Emergency Fund",   amt:3000,  detail:"Emergency fund savings account",           desc:"Monthly emergency corpus build",        freq:1 },

    // Travel & Vacation
    { cat:"Travel & Vacation",  sub:"Flights",           amt:14500, detail:"Ahmedabad-Delhi-Ahmedabad IndiGo",         desc:"Round trip flight tickets",             freq:1 },
    { cat:"Travel & Vacation",  sub:"Hotels",            amt:6500,  detail:"OYO Townhouse - 2 nights Goa",             desc:"Hotel accommodation Goa",               freq:1 },
    { cat:"Travel & Vacation",  sub:"Bus/Train Tickets", amt:1200,  detail:"Rajdhani Express - Ahmedabad to Mumbai",   desc:"Train ticket both ways",                freq:2 },
    { cat:"Travel & Vacation",  sub:"Cab/Taxi",          amt:2800,  detail:"Zoomcar self-drive rental - 2 days",       desc:"Self-drive car for trip",               freq:1 },
    { cat:"Travel & Vacation",  sub:"Travel Food",       amt:900,   detail:"Meals during Goa trip",                    desc:"Food expenses during travel",           freq:2 },
    { cat:"Travel & Vacation",  sub:"Sightseeing",       amt:1500,  detail:"Goa sightseeing activities + entry fees",  desc:"Tourist activities",                    freq:1 },

    // Gifts & Donations
    { cat:"Gifts & Donations",  sub:"Birthday Gifts",    amt:2000,  detail:"Birthday gift for Priya",                  desc:"Wife birthday gift",                    freq:1 },
    { cat:"Gifts & Donations",  sub:"Birthday Gifts",    amt:1200,  detail:"Birthday gift for friend Rohit",           desc:"Friend birthday gift",                  freq:1 },
    { cat:"Gifts & Donations",  sub:"Wedding Gifts",     amt:5000,  detail:"Wedding gift + envelope - cousin",         desc:"Cousin wedding cash gift",              freq:1 },
    { cat:"Gifts & Donations",  sub:"Festival Expenses", amt:8500,  detail:"Diwali - gifts, sweets, crackers",         desc:"Diwali festival celebration",           freq:1 },
    { cat:"Gifts & Donations",  sub:"Festival Expenses", amt:3500,  detail:"Navratri garba entry + dandiya outfit",    desc:"Navratri celebration",                  freq:1 },
    { cat:"Gifts & Donations",  sub:"Charity/NGO",       amt:1000,  detail:"Child Rights Foundation donation",         desc:"Monthly charity donation",              freq:2 },

    // Utilities
    { cat:"Utilities",          sub:"LPG/Gas",           amt:950,   detail:"Indane LPG cylinder refill",               desc:"LPG cooking gas",                       freq:2 },
    { cat:"Utilities",          sub:"Housekeeping",      amt:3000,  detail:"Maid salary - daily cook + cleaning",      desc:"Monthly domestic help salary",          freq:1 },
    { cat:"Utilities",          sub:"Laundry",           amt:600,   detail:"Wassup laundry service monthly",           desc:"Monthly laundry service",               freq:1 },

    // Business Expenses
    { cat:"Business Expenses",  sub:"Domain & Hosting",  amt:1200,  detail:"GoDaddy domain + Hostinger hosting",       desc:"Annual web hosting (monthly share)",    freq:1 },
    { cat:"Business Expenses",  sub:"Software/Tools",    amt:2100,  detail:"Adobe Creative Cloud monthly",             desc:"Design tools subscription",             freq:1 },
    { cat:"Business Expenses",  sub:"Software/Tools",    amt:800,   detail:"Notion Pro + Slack Pro subscriptions",     desc:"Productivity tools monthly",            freq:1 },
    { cat:"Business Expenses",  sub:"Subscriptions",     amt:500,   detail:"GitHub Copilot subscription",              desc:"AI coding assistant",                   freq:1 },
    { cat:"Business Expenses",  sub:"Advertising",       amt:3000,  detail:"Meta Ads - Facebook + Instagram campaign", desc:"Social media advertising",              freq:1 },
    { cat:"Business Expenses",  sub:"Professional Fees", amt:2500,  detail:"CA Amit Trivedi - ITR filing fees",        desc:"Annual tax filing (monthly share)",     freq:1 },

    // EMI & Loans
    { cat:"EMI & Loans",        sub:"Home Loan EMI",     amt:22000, detail:"SBI Home Loan EMI - Jan 2030 tenure",      desc:"Monthly home loan EMI",                 freq:1 },
    { cat:"EMI & Loans",        sub:"Car Loan EMI",      amt:12500, detail:"HDFC Car Loan - Honda City",               desc:"Monthly car loan EMI",                  freq:1 },
    { cat:"EMI & Loans",        sub:"Credit Card Bill",  amt:8500,  detail:"HDFC Regalia credit card bill",            desc:"Monthly credit card outstanding",       freq:1 },

    // Taxes & Fees
    { cat:"Taxes & Fees",       sub:"Professional Tax",  amt:200,   detail:"Gujarat professional tax monthly",         desc:"Monthly professional tax deduction",    freq:1 },
    { cat:"Taxes & Fees",       sub:"Society Charges",   amt:500,   detail:"Society parking + amenity charges",        desc:"Society extra charges",                 freq:1 },
]

// ─── INCOME TEMPLATES ─────────────────────────────────────────────────────────
type IT = { cat: string; sub: string; amt: number; detail: string; desc: string; freq: number }
const INCOME_TEMPLATES: IT[] = [
    // Salary - monthly
    { cat:"Salary",             sub:"Basic Pay",          amt:55000, detail:"Monthly salary credit - Infosys Ltd",     desc:"Base salary for month",                 freq:1 },
    { cat:"Salary",             sub:"HRA",                amt:15000, detail:"HRA component monthly",                   desc:"House rent allowance",                  freq:1 },
    { cat:"Salary",             sub:"DA",                 amt:5000,  detail:"Dearness allowance monthly",              desc:"DA component salary",                   freq:1 },
    { cat:"Salary",             sub:"Bonus",              amt:42000, detail:"Q1 performance bonus",                    desc:"Quarterly performance bonus",           freq:1 },
    { cat:"Salary",             sub:"Performance Pay",    amt:18000, detail:"Annual increment + performance pay",      desc:"Yearly appraisal payout",               freq:1 },

    // Freelance
    { cat:"Freelance Income",   sub:"Web Development",    amt:35000, detail:"Nexus Corp - full stack project payment", desc:"Milestone 1 payment from client",       freq:1 },
    { cat:"Freelance Income",   sub:"Web Development",    amt:25000, detail:"Startup MVP - React + Node payment",      desc:"Project milestone payment",             freq:1 },
    { cat:"Freelance Income",   sub:"Consultation",       amt:8000,  detail:"Tech consultation - 4 sessions",          desc:"Hourly tech consultation fee",          freq:1 },
    { cat:"Freelance Income",   sub:"Mobile App",         amt:40000, detail:"Flutter app for retail client",           desc:"App development payment",               freq:1 },
    { cat:"Freelance Income",   sub:"SEO Services",       amt:12000, detail:"SEO audit + monthly retainer",            desc:"SEO project payment",                   freq:1 },

    // Business Income
    { cat:"Business Income",    sub:"Online Sales",       amt:8500,  detail:"Etsy digital products sales - 3 items",   desc:"Digital product revenue",               freq:1 },
    { cat:"Business Income",    sub:"Product Sales",      amt:12000, detail:"Amazon store monthly payout",             desc:"E-commerce monthly sales",              freq:1 },

    // Investment Returns
    { cat:"Investment Returns", sub:"Mutual Funds",       amt:4800,  detail:"Zerodha Coin MF withdrawal gains",        desc:"Mutual fund redemption profit",         freq:1 },
    { cat:"Investment Returns", sub:"Stock Dividends",    amt:3200,  detail:"TCS + Infosys + HCL dividend payout",     desc:"Quarterly stock dividends",             freq:1 },
    { cat:"Investment Returns", sub:"FD Interest",        amt:5100,  detail:"SBI FD quarterly interest credit",        desc:"Fixed deposit interest income",         freq:1 },
    { cat:"Investment Returns", sub:"PPF Interest",       amt:2800,  detail:"PPF account annual interest (monthly)",   desc:"PPF interest earnings",                 freq:1 },

    // Rental Income
    { cat:"Rental Income",      sub:"Shop Rent",          amt:12000, detail:"Shop rent - Vikas Mehta tenant",          desc:"Monthly rental from commercial shop",   freq:1 },

    // Other Income
    { cat:"Other Income",       sub:"Cashback",           amt:750,   detail:"HDFC Regalia credit card cashback",       desc:"Monthly credit card rewards",           freq:1 },
    { cat:"Other Income",       sub:"Cashback",           amt:320,   detail:"Paytm & Google Pay cashback rewards",     desc:"UPI payment cashback",                  freq:1 },
    { cat:"Other Income",       sub:"Tax Refund",         amt:12500, detail:"Income Tax Refund AY 2024-25",            desc:"IT department tax refund",              freq:1 },
    { cat:"Other Income",       sub:"Gifts Received",     amt:5000,  detail:"Birthday gift from parents",              desc:"Cash gift received",                    freq:1 },
]

// ─── MAIN ─────────────────────────────────────────────────────────────────────
async function main() {
    console.log("🌱 Starting comprehensive database seed...\n")

    // ── 1. Seed users ────────────────────────────────────────────────────────────
    console.log("👤 Seeding users...")
    const userIds: number[] = []
    for (const u of USERS) {
        let user = await prisma.users.findFirst({ where: { EmailAddress: u.email } })
        if (!user) {
            user = await prisma.users.create({
                data: {
                    UserName: u.name, EmailAddress: u.email, Password: u.password,
                    MobileNo: u.mobile, Role: u.role, Created: new Date(), Modified: new Date(),
                }
            })
            console.log(`   ✅ Created: ${u.email}`)
        } else {
            console.log(`   ℹ️  Exists:  ${u.email}`)
        }
        userIds.push(user.UserID)
    }

    // ── Work with primary user (Pragnesh) ────────────────────────────────────────
    const UID = userIds[0]

    // ── 2. Clear existing data for primary user ──────────────────────────────────
    console.log("\n🗑️  Clearing old data for primary user...")
    await prisma.$executeRawUnsafe(`DELETE FROM expenses        WHERE UserID = ${UID}`)
    await prisma.$executeRawUnsafe(`DELETE FROM incomes         WHERE UserID = ${UID}`)
    await prisma.$executeRawUnsafe(`DELETE FROM peoples         WHERE UserID = ${UID}`)
    await prisma.$executeRawUnsafe(`DELETE FROM projects        WHERE UserID = ${UID}`)
    await prisma.$executeRawUnsafe(`DELETE FROM sub_categories  WHERE UserID = ${UID}`)
    await prisma.$executeRawUnsafe(`DELETE FROM categories      WHERE UserID = ${UID}`)
    console.log("   ✅ Cleared")

    // ── 3. Seed categories & subcategories ──────────────────────────────────────
    console.log("\n📂 Seeding categories & subcategories...")
    const catMap: Record<string, number> = {}
    const subMap: Record<string, number> = {}
    let subTotal = 0
    for (const cat of CATEGORIES) {
        const dbCat = await prisma.categories.create({
            data: {
                CategoryName: cat.name, IsIncome: cat.isIncome, IsExpense: cat.isExpense,
                IsActive: true, UserID: UID, Sequence: cat.seq, Description: cat.desc,
                Created: daysAgo(rand(300, 365)), Modified: new Date(),
            }
        })
        catMap[cat.name] = dbCat.CategoryID
        for (let i = 0; i < cat.subs.length; i++) {
            const sub = cat.subs[i]
            const dbSub = await prisma.sub_categories.create({
                data: {
                    SubCategoryName: sub, IsActive: true,
                    CategoryID: dbCat.CategoryID, UserID: UID,
                    IsExpense: cat.isExpense, IsIncome: cat.isIncome,
                    Sequence: i + 1,
                    Created: daysAgo(rand(300, 365)), Modified: new Date(),
                }
            })
            subMap[`${cat.name}::${sub}`] = dbSub.SubCategoryID
            subTotal++
        }
    }
    console.log(`   ✅ ${CATEGORIES.length} categories, ${subTotal} subcategories`)

    // ── 4. Seed projects ─────────────────────────────────────────────────────────
    console.log("\n📁 Seeding projects...")
    const projectIds: number[] = []
    for (const p of PROJECTS_LIST) {
        const startDate = daysAgo(-p.startDays)
        const endDate   = daysAgo(-p.endDays)
        const proj = await prisma.projects.create({
            data: {
                ProjectName: p.name, ProjectDetail: p.detail,
                Description: `Budget tracking for: ${p.name}`,
                ProjectStartDate: startDate, ProjectEndDate: endDate,
                IsActive: p.active, UserID: UID,
                Created: daysAgo(rand(200, 365)), Modified: new Date(),
            }
        })
        projectIds.push(proj.ProjectID)
    }
    console.log(`   ✅ ${PROJECTS_LIST.length} projects`)

    // ── 5. Seed people ───────────────────────────────────────────────────────────
    console.log("\n👥 Seeding people (contacts)...")
    const peopleIds: number[] = []
    for (const p of PEOPLE_LIST) {
        const person = await prisma.peoples.create({
            data: {
                PeopleName: p.name, MobileNo: p.mobile, Email: p.email,
                PeopleCode: p.code, Description: p.desc,
                Password: "pass123", IsActive: true, UserID: UID,
                Created: daysAgo(rand(200, 365)), Modified: new Date(),
            }
        })
        peopleIds.push(person.PeopleID)
    }
    console.log(`   ✅ ${PEOPLE_LIST.length} people`)

    // ── 6. Seed expenses - 12 months of dense data ───────────────────────────────
    console.log("\n💸 Seeding expenses (12 months)...")
    let expenseCount = 0
    for (const tmpl of EXPENSE_TEMPLATES) {
        const catId = catMap[tmpl.cat]
        const subId = subMap[`${tmpl.cat}::${tmpl.sub}`]
        if (!catId || !subId) continue

        // freq = times per month, seed 12 months
        const totalEntries = tmpl.freq * 12
        for (let i = 0; i < totalEntries; i++) {
            // spread entries evenly over 365 days
            const dayOffset = Math.floor((i / totalEntries) * 365) + rand(0, Math.floor(30 / tmpl.freq))
            const amount    = fuzz(tmpl.amt)
            await prisma.expenses.create({
                data: {
                    ExpenseDate:   daysAgo(dayOffset),
                    CategoryID:    catId,
                    SubCategoryID: subId,
                    PeopleID:      pick(peopleIds),
                    ProjectID:     Math.random() > 0.65 ? pick(projectIds) : null,
                    Amount:        amount,
                    ExpenseDetail: tmpl.detail,
                    Description:   tmpl.desc,
                    UserID:        UID,
                    Created:       new Date(),
                    Modified:      new Date(),
                }
            })
            expenseCount++
        }
    }
    console.log(`   ✅ ${expenseCount} expense entries`)

    // ── 7. Seed incomes - 12 months ──────────────────────────────────────────────
    console.log("\n💰 Seeding incomes (12 months)...")
    let incomeCount = 0
    for (const tmpl of INCOME_TEMPLATES) {
        const catId = catMap[tmpl.cat]
        const subId = subMap[`${tmpl.cat}::${tmpl.sub}`]
        if (!catId || !subId) continue

        const totalEntries = tmpl.freq * 12
        for (let i = 0; i < totalEntries; i++) {
            const dayOffset = Math.floor((i / totalEntries) * 365) + rand(1, 5)
            const amount    = fuzz(tmpl.amt, 0.05)
            await prisma.incomes.create({
                data: {
                    IncomeDate:    daysAgo(dayOffset),
                    CategoryID:    catId,
                    SubCategoryID: subId,
                    PeopleID:      pick(peopleIds),
                    ProjectID:     Math.random() > 0.75 ? pick(projectIds) : null,
                    Amount:        amount,
                    IncomeDetail:  tmpl.detail,
                    Description:   tmpl.desc,
                    UserID:        UID,
                    Created:       new Date(),
                    Modified:      new Date(),
                }
            })
            incomeCount++
        }
    }
    console.log(`   ✅ ${incomeCount} income entries`)

    // ── Summary ──────────────────────────────────────────────────────────────────
    console.log("\n🎉 Comprehensive seed complete!")
    console.log(`   Users:        ${USERS.length}`)
    console.log(`   Categories:   ${CATEGORIES.length}`)
    console.log(`   Subcategories:${subTotal}`)
    console.log(`   Projects:     ${PROJECTS_LIST.length}`)
    console.log(`   People:       ${PEOPLE_LIST.length}`)
    console.log(`   Expenses:     ${expenseCount}`)
    console.log(`   Incomes:      ${incomeCount}`)
    console.log(`   Total records:${CATEGORIES.length + subTotal + PROJECTS_LIST.length + PEOPLE_LIST.length + expenseCount + incomeCount}`)
    console.log(`\n   🔑 Login: pragnesh@gmail.com / password123`)
}

main()
    .catch(e => { console.error(e); process.exit(1) })
    .finally(() => prisma.$disconnect())
