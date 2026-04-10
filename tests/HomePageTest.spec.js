const {test, expect} =require('@playwright/test');
test('Home Page', async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');
    const title = page.title();
    await expect(page).toHaveTitle('STORE');
    const Url = page.url();
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
    await page.close();
});