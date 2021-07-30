const { expect } = require("chai");
const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { Builder, By, Key, until, sleep } = require("selenium-webdriver"); 
const { delay } = require("../utils/delay");

Given("Test registration functionality", {timeout:30000}, async function (){
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/organizer/register");
    await driver.findElement(By.id("fullName")).sendKeys("Aadarsha Man Shrestha");
    await driver.findElement(By.id("contact")).sendKeys("9861763483");
    await driver.findElement(By.id("address")).sendKeys("Kapan");
    await driver.findElement(By.id("email")).sendKeys("aadarsha@gmail.com");
    await driver.findElement(By.id("userName")).sendKeys("aadarsha12");
    await driver.findElement(By.id("password")).sendKeys("Aadarsha123");
    await driver.sleep(delay);
    await driver.findElement(By.id("btnRegister")).click();

    await driver.wait(until.elementLocated(By.id("loginForm")), 30000);
    expect(await driver.wait(until.elementLocated(By.id("loginForm"))));
});

Given("Test login functionality", {timeout: 30000 }, async function (){
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/organizer/login");
    await driver.findElement(By.id("userName")).sendKeys("aadarsha@gmail.com");
    await driver.findElement(By.id("password")).sendKeys("Aadarsha123");
    await driver.sleep(delay);
    await driver.findElement(By.id("btnLogin")).click();

    await driver.wait(until.elementLocated(By.id("registrationForm")), 30000);
    expect(await driver.wait(until.elementLocated(By.id("registrationForm"))));
})
