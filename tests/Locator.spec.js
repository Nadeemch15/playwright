//Const {test,expect} = require('@playwright/test');
import {test, expect} from '@playwright/test';
test('Locator', async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');
    //click on login
    await page.locator('//a[@id=\'login2\']').click();
        // enter username and password
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    //click on login button
    await page.locator('//button[normalize-space()="Log in"]').click();
    const logoutLink = page.locator('#logout2')
    //await expect(logoutLink).toBeVisible();
    await expect(logoutLink).toBeVisible();
    await page.waitForTimeout(3000)
})
