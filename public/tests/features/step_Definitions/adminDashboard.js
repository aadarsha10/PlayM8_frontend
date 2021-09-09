const { Given, When, Then } = require('@cucumber/cucumber');
const webdriver = require('selenium-webdriver');
const {By, Key } = require('selenium-webdriver');
const { delay } = require("../utils/delay");
const {setDefaultTimeout} = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);

let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();


Given('I visit Admin Dashboard', async () =>  
{
  driver.manage().window().maximize();
  await driver.get("http://localhost:3000/admin/dashboard")            
}); 
 
When('I should click Approve button to approve user for login', async () => 
{    
  driver.findElement(By.xpath("/div/div/div/div[2]/div/table/div[5]/div/tbody/tr/td[5]/button[1]")).sendKeys("/div/div/div/div[2]/div/table/div[5]/div/tbody/tr/td[5]/button[1]", Key.RETURN); 
  
}); 