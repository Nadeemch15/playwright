import {test, expect} from '@playwright/test'
test('Handle Checkbox', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#sunday').check();
    await expect(page.locator('#sunday')).toBeChecked();
    await expect(page.locator('#sunday').isChecked()).toBeTruthy();
    await expect(page.locator('#monday').isChecked()).toBeFalsy();

    // multiple checkboxes

    const checkbox = [
                        '#saturday',
                        '#friday',
                        '#sunday'              


    ];
    for (const locator of checkbox){
        await page.locator(locator).check();

    }

 for (const locator of checkbox){
    if(await page.locator(locator).isChecked())
    {
        await page.locator(locator).uncheck();

    }
 }


})