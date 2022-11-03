const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/automation/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

 // Write at least 3 tests for the functionality of the Movie List app - these cannot be the same as the functions we covered in the demo.
 // You could test crossing off a movie, deleting a movie, or even the notifications that are displayed.


// use $x(xpath-argument-goes-here) in the browser console to check xpaths

test('Does the heading exist?', async () => {
    const heading = await driver.findElement(By.xpath('(//main/h1)[1]'))
    expect(await heading.isDisplayed()).toBeTruthy();

})

test('Can a movie be added?', async () => {
    await driver.findElement(By.xpath('//input')).sendKeys('My Fair Lady');
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//button')).click();
    await driver.sleep(1500);
    const movie = await driver.findElement(By.xpath('//li/span[text() = "My Fair Lady"]'));
    expect(await movie.isDisplayed()).toBeTruthy();
    await driver.sleep(1500);
})
