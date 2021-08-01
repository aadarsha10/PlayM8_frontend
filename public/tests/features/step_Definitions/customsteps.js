const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai')
const webdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');
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
              await driver.get("http://localhost:3000/organizer/register")            
          }); 
 
          When('I search for Helmets Nepal', async () => {
              await driver.findElement(By.name('q')).sendKeys('Helmets Nepal'+'\n')           
          });
 
 
          Then('I should see the results', async () => {
            let text = await driver.findElement(By.id('search')).getText()
            console.log(text);            
          });