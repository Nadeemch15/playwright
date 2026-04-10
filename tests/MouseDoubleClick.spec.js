import {test, expect} from '@playwright/test'

test('Mouse Double Click Test', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    //double click on button
   const button = page.locator('//button[normalize-space()="Copy Text"]')
   await button.dblclick();
   const field2 = page.locator('#field2')
   
   await expect(field2).toHaveValue('Hello World!');
   await page.waitForTimeout(2000);
})