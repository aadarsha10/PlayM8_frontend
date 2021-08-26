// const { Given, When, Then } = require('@cucumber/cucumber');
// const webdriver = require('selenium-webdriver');
// const {By, Key} = require('selenium-webdriver');
// const { delay } = require("../utils/delay");
// const {setDefaultTimeout} = require('@cucumber/cucumber');
// setDefaultTimeout(60 * 1000);

// let driver = new webdriver.Builder()
// .forBrowser('chrome')
// .build();

// Given('I should visit login page and provide login details', async () => {
//     driver.manage().window().maximize();
//     await driver.get("http://localhost:3000/organizer/login") 
    
//   });

//   When('I should see add events page and provide event details to add event', async () => {
//     await driver.findElement(By.id("username")).sendKeys("ramesh");
//     await driver.findElement(By.id("password")).sendKeys("R@mesh123");  
//     await driver.sleep(delay);  
      
//     driver.findElement(By.id("btnLogin")).sendKeys("btnLogin", Key.RETURN);  
    
//     //await driver.get("http://localhost:3000/AddEvents")
//     await driver.findElement(By.id("eName")).sendKeys("Men's Weekly Tournament");
//     await driver.findElement(By.id("exampleFormControlSelect1"));
//     select.selectByVisibleText("Table Tennis");

//     await driver.findElement(By.xpath("//*[@id='ePoster']")).sendKeys("C:\\User\\Lenovo Yoga\\OneDrive\\Desktop\\.tt.jpg");
//     await driver.findElement(By.id("date")).sendKeys("01-September-2021 - 07-September-2021");
//     await driver.findElement(By.id("prize")).sendKeys("RS. 50000");
//     await driver.findElement(By.id("venue")).sendKeys("Sankhamul, TT Academy");
//     await driver.findElement(By.id("comment")).sendKeys("Please enroll your team before one day of tournament start date.");
//     driver.findElement(By.id("sumbit")).sendKeys("submit", Key.RETURN);
    
//   });

//   Then('I should see event added successfully message', async () =>{

//     await driver.findElement(By.id("//*[@id='root']/div/div/div/div[1]"));
    
//   });