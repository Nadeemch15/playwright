import {test, expect}from '@playwright/test'
test('Handle inputbox', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    //input box
    await expect(await page.locator('#name')).toBeVisible();
    await expect(await page.locator('#name')).toBeEmpty();
    await expect(await page.locator('#name')).toBeEnabled();
    await expect(await page.locator('#name')).toBeEditable();

    await page.locator('//input[@id="name"]').fill('Nadeem');
    await page.waitForTimeout(3000);
})