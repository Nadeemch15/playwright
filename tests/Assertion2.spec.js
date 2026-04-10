const {test, expect} = require('@playwright/test');
test('Handle input box', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
 
    //input box
    await expect(await page.locator('#name')).toBeVisible();
    await expect(await page.locator('#name')).toBeEmpty();
    await expect(await page.locator('#name')).toBeEditable();
    await expect(await page.locator('#name')).toBeEnabled();
 
    await page.getByPlaceholder('Enter Name').fill('Nadeem');
 
   // await page.locator('#name').fill('Nadeem')
    await page.fill('#phone','07901236448');
 
    await page.waitForTimeout(5000)
})