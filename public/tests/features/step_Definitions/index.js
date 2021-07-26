const { expect } = require("chai");
const { Given } = require("@cucumber/cucumber");
const { Builder, By, until } = require("selenium-webdriver"); 
const { delay } = require("../utils/delay");
const { getDefaultNormalizer } = require("@testing-library/react");

Given("Test registration functionality", {timeout:30000}, async function (){
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/organizer/register");
    await driver.findElement(By.controlId("fullName")).sendKeys("Aadarsha Man Shrestha");
    await driver.findElement(By.controlId("contact")).sendKeys("9861763483");
    await driver.findElement(By.controlId("address")).sendKeys("Kapan");
    await driver.findElement(By.controlId("email")).sendKeys("aadarsha@gmail.com");
    await driver.findElement(By.controlId("userName")).sendKeys("aadarsha12");
    await driver.findElement(By.controlId("password")).sendKeys("Aadarsha123");
    await driver.sleep(delay);
    await driver.findElement(By.id("registration")).click();

    await driver.wait(until.elementLocated(By.id("Organizer_login")), 30000);
    expect(await driver.wait(until.elementLocated(By.id("Organizer_login"))));
});

Given("Test login functionality", {timeout: 30000 }, async function (){
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/organizer/login");
    await driver.findElement(By.controlId("email")).sendKeys("aadarsha@gmail.com");
    await driver.findElement(By.controlId("password")).sendKeys("Aadarsha123");
    await driver.sleep(delay);
    await driver.findElement(By.id("btnLogin")).click();

    await driver.wait(until.elementLocated(By.id("RegistrationOrganizer")), 30000);
    expect(await driver.wait(until.elementLocated(By.id("RegistrationOrganizer"))));
})
