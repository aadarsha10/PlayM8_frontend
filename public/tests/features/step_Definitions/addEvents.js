const { Given, When, Then } = require('@cucumber/cucumber');
const webdriver = require('selenium-webdriver');
const {By, Key} = require('selenium-webdriver');
const { delay } = require("../utils/delay");
const {setDefaultTimeout} = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);

let driver = new webdriver.Builder()
.forBrowser('chrome')
.build();

Given('I should visit login page and provide login details', function () {
    driver.manage().window().maximize();
    await driver.get("http://localhost:3000/organizer/login") 
    
  });

  When('I should see add events page and provide event details to add event', function () {
    await driver.findElement(By.id("username")).sendKeys("ramesh");
    await driver.findElement(By.id("password")).sendKeys("R@mesh123");  
    await driver.sleep(delay);  
      
    driver.findElement(By.id("btnLogin")).sendKeys("btnLogin", Key.RETURN);  
    
    await.driver.get("http://localhost:3000/AddEvents")
    await.driver.findElement(By.id("")).sendKeys("")
    
  });

  Then('I should see event added successfully message', function () {
    
  });