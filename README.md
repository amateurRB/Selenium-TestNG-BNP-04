# Selenium-TestNG-BNP-04

SPECIFICATION  DOCUMENT

Problem Statement: Automate the given website through Selenium web driver and test it through TestNG. 
Software Specification: 
•	Eclipse
•	TestNG
•	Selenium JAR files
Website: 
Steps: 
•	Create a New Java Project.
•	Create new TestNG class inside this folder under a package (myPackage.FinWebTest)
•	Add all external Jars. Also, build path to add Junit 4, TestNG library. 
•	Run this class as a TestNG. Upon this, a test-output folder will be created. 
•	For adding the test cases, use @Test annotation. In this project, three test cases are created. 
o	registerMe(): this test case is used to test the registration functionality of the website. Driver.findElement searches for a specific element by ClassName, name or by ID. sendKeys sends particular command. 
o	LoginMe(): This is used to test the Login functionality. If the login is successful, Login Successful will be printed on console. Else, incorrect credentials will be printed. We perform this by checking up the URLs after the submit button is hit byt selenium. 
o	Search_add_to_cart(): This test first logs into the account and then enable the search operation. Incase if the credentials do not match authenticated user account, the program is killed and search operation is not permitted. 
•	To make sure all the test cases follow a particular order , (priority=1) or any number is added. If priority of a particular case is 1, that test case will be executed before other test cases. 
•	To reduce the total LOC and fully use the functions, web driver object initialization and website navigation and maximization is all done into a single method @BeforeMethod. This will ensure that all these activities are carried out before each test case. Similarly, 
@AfterMethod is used to close the driver after each test case.  

