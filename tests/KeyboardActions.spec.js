import{test,expect}from'@playwright/test';

test('Keyboard Actions Test',async({page})=>{

    await page.goto('https://gotranscript.com/text-compare');
    //await page.locator('[name="text1"]').fill('Welcome');
    await page.type('[name="text1"]','Welcome to Playwright');

    //Ctrl +A
    await page.keyboard.press('Control+A');


    //Ctrl +C
    await page.keyboard.press('Control+C');

    //Tab
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');

    //Ctrl +V
    await page.keyboard.press('Control+V');
    await page.waitForTimeout(2000);

});