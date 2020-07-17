package myPackage;
import org.testng.annotations.Test;
import org.testng.AssertJUnit;
import org.testng.annotations.Test;
import org.testng.AssertJUnit;
import java.util.Iterator;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;
import org.testng.annotations.Test;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;

public class FinWebTest {
	WebDriver driver ;
	
	@BeforeMethod
	public void init() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Ruchika Bhanushali\\Downloads\\chromedriver_win32\\chromedriver.exe");
		driver= new ChromeDriver();

		driver.navigate().to("http://automationpractice.com/index.php");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		
	}

	@Test (priority=1)
	public void registerMe() {

		
		
		driver.findElement(By.className("login")).sendKeys(Keys.ENTER);
		driver.findElement(By.name("email_create")).sendKeys("rishikabhanushali6@gmail.com");
		driver.findElement(By.name("SubmitCreate")).sendKeys(Keys.ENTER);
		
		WebElement radio2= driver.findElement(By.id("id_gender2"));
		radio2.click();
		driver.findElement(By.name("customer_firstname")).sendKeys("Rishika");
		driver.findElement(By.name("customer_lastname")).sendKeys("Bhanushali");
		driver.findElement(By.name("passwd")).sendKeys("A1234567");
		Select dropdown = new Select(driver.findElement(By.id("days")));
		dropdown.selectByValue("10");
		Select dropdown1 = new Select(driver.findElement(By.id("months")));
		dropdown1.selectByIndex(1);
		Select dropdown2 = new Select(driver.findElement(By.id("years")));
		dropdown2.selectByIndex(2);
		
		
		driver.findElement(By.name("firstname")).sendKeys("Rishika");
		driver.findElement(By.name("lastname")).sendKeys("Bhanushali");
		
		driver.findElement(By.name("company")).sendKeys("BNP Paribas");
		driver.findElement(By.name("address1")).sendKeys("F3/108 Lokupvan-2");
		driver.findElement(By.name("city")).sendKeys("Brunswick");
		
		Select dropdown3 = new Select(driver.findElement(By.id("id_state")));
		dropdown3.selectByIndex(3);
		driver.findElement(By.name("postcode")).sendKeys("40067");	
		Select dropdown4 = new Select(driver.findElement(By.id("id_country")));
		dropdown4.selectByIndex(1);
		driver.findElement(By.name("phone_mobile")).sendKeys("9967609147");
		driver.findElement(By.name("alias")).sendKeys("Mumbai");
		driver.findElement(By.name("submitAccount")).sendKeys(Keys.ENTER);
		
		
	}
	
	@Test (priority=2)
	public void LoginMe() {

		driver.findElement(By.className("login")).sendKeys(Keys.ENTER);
		driver.findElement(By.name("email")).sendKeys("rishikabhanushali3@gmail.com");
		driver.findElement(By.name("passwd")).sendKeys("A1234567");
		driver.findElement(By.name("SubmitLogin")).sendKeys(Keys.ENTER);
	    String actualUrl="http://automationpractice.com/index.php?controller=my-account";
	    String expectedUrl= driver.getCurrentUrl();
	    if (actualUrl.equalsIgnoreCase(expectedUrl)) {
		    System.out.println("Login Successful");
	    }
	    else {
	        System.out.println("incorrect credentials");
	    }

	}
	
	@Test (priority=3)
	public void Search_add_to_cart() {
		driver.findElement(By.className("login")).sendKeys(Keys.ENTER);
		driver.findElement(By.name("email")).sendKeys("rishikabhanushali3@gmail.com");
		driver.findElement(By.name("passwd")).sendKeys("A1234567");
		driver.findElement(By.name("SubmitLogin")).sendKeys(Keys.ENTER);
	    String actualUrl="http://automationpractice.com/index.php?controller=my-account";
	    String expectedUrl= driver.getCurrentUrl();
	    if (actualUrl.equalsIgnoreCase(expectedUrl)) {
		    System.out.println("Login Successful");
		    
	    }
	    else {
	        System.out.println("incorrect credentials");
	    }

	

		driver.findElement(By.cssSelector("input[id='search_query_top']")).sendKeys("dress");
	    driver.findElement(By.cssSelector("input[id='search_query_top']")).sendKeys(Keys.ENTER);
	    driver.findElement(By.xpath("//*[contains(text(),'Printed Summer')]")).click();
	    

	    driver.findElement(By.name("Submit")).click();
	    try {
			TimeUnit.SECONDS.sleep(10);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        


	}
	

	
	@AfterMethod
	public void kill() {
		driver.close();
	}
	


}
