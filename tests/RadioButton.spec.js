import {test, expect} from '@playwright/test'
test('handle radio button', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/') 

    await page.check('#female');
    //await page.locator('#female').check();
    await expect(page.locator('#female')).toBeChecked();
    await expect(page.locator('#female').isChecked()).toBeTruthy();

    await expect(await page.locator('#male').isChecked()).toBeFalsy()
})