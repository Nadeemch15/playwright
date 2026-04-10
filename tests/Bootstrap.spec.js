import {test, expect}from '@playwright/test'
test('Bootstrap demo', async({page})=>{
    await page.goto('https://www.jqueryscript.net/demo/Bootstrap-4-Select-Dropdown/')
    await page.locator('//p[normalize-space()="Consent"]').click();
    await page.locator('#bsd1-button').click();
    const option1 = await page.locator('//a[@class="dropdown-item"]')   
    
    console.log(`Total countries:${option1.length}`)
    await expect(option1).toHaveCount(255);

    const option2 = await page.$$('//a[@class="dropdown-item"]')
    for (let country of option2){
        const value = await country.textContent();
        console.log(value)
        if(value.includes('Pakistan')){
            await country.click();
        }
    }
    await page.waitForTimeout(3000)
})