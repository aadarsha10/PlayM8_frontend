const{ Given } = require("@cucumber/cucumber");
const { delay } = require("lodash");

Given("Test registration Functionality", {timeout:3000}, async function (){
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/register");
    await driver.findElement(By.id("firstName")).sendKeys("test");
    await driver.sleep(delay);
    await driver.findElement(By.id("registration")).click();

    await driver.wait(until.elementLocated(By.id("loginForm")), 30000);
    expect(await driver.wait(until.elementLocated(By.id("loginForm"))));
})