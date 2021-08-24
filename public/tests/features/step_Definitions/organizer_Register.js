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


let sum=0;
When('I add {int} and {int}', function (int, int2) {
    sum = int + int2
    });

    Then('the result should be {int}', function (result) {
        
        expect(sum).equal(result)
        });


      
 
          Given('I visit owner register page', async () =>  {
            driver.manage().window().maximize();
              await driver.get("http://localhost:3000/organizer/register")            
          }); 
 
          When('I should provide owner details to register and click register button', async () => {
            //await driver.findElement(By.id('q')).sendKeys('Helmets Nepal'+'\n')  
            await driver.findElement(By.id("fullName")).sendKeys("Aadarsha Man Shrestha");
            await driver.findElement(By.id("contact")).sendKeys("9861763483");
            await driver.findElement(By.id("address")).sendKeys("Kapan");
            await driver.findElement(By.id("email")).sendKeys("aadarsha@gmail.com");
            await driver.findElement(By.id("userName")).sendKeys("aadarsha12");
            await driver.findElement(By.id("password")).sendKeys("Aadarsha123");  
            await driver.sleep(delay);  
            //await driver.findElement(By.id("btnRegister")).click().perform();
          //   await driver.findElement(By.xpath("/html/body/div/div/div/div/div[2]/form/div[5]/div/button\r\n" +
          //  "")).click();   
          driver.findElement(By.id("btnRegister")).sendKeys("btnRegister", Key.RETURN);  
          });
 
 
          Then('I should see Registered successfully message on screen', async () => {
            
            driver.switchTo().alert().getText();
          //   driver.findElement(By.xpath("/html/body/div/div/div/div/div[2]/form/div[5]/div/button\r\n" +
          //  "")).click();
          });