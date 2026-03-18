INSERT IGNORE INTO users (UserName, EmailAddress, Password, MobileNo, Created, Modified) 
VALUES ('Demo User', 'demo@example.com', 'password', '1234567890', NOW(), NOW());
