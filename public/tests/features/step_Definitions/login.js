const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai')
const webdriver = require('selenium-webdriver');
const {By, Key} = require('selenium-webdriver');
const { delay } = require("../utils/delay");
const {setDefaultTimeout} = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);

let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();


Given('I should visit login page', async () =>  
{
  driver.manage().window().maximize();
  await driver.get("http://localhost:3000/organizer/login")            
}); 
 
When('I should provide username and password to register and click login button', async () => 
{
  
  await driver.findElement(By.id("userName")).sendKeys("aadarsha12");
  await driver.findElement(By.id("password")).sendKeys("Aadarsha123");  
  await driver.sleep(delay);  
    
  driver.findElement(By.id("btnLogin")).sendKeys("btnLogin", Key.RETURN);  
}); 

Then('I should see dashboard', async () => 
{
  await driver.get("http://localhost:/admin/dashboard")
});