/* const {Builder, By, Key, until} = require('selenium-webdriver');

let driver = new Builder().forBrowser('firefox').build();

driver.get('https://www.baidu.com/');
driver.findElement(By.name('wd')).sendKeys('webdriver', Key.RETURN);
driver.wait(until.titleIs('webdriver_百度搜索'), 10000);// webdriver_百度搜索

driver.quit(); */


const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.baidu.com/');
    await driver.findElement(By.name('wd')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver_百度搜索'), 1000);
  } finally {
    await driver.quit();
  }
})();