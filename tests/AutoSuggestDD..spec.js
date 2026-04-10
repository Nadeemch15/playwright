import {test, expect} from '@playwright/test'
test('Auto suggest Dropdown', async({page})=>{
await page.goto('https://www.redbus.in/')
await page.locator('#srcinput').fill('Delhi');
await page.waitForSelector('//li[contains(@class,"sc-iwsKbI")]/div/text[1]')

const city = await page.$$('//li[contains(@class,"sc-iwsKbI")]/div/text[1]')

    for(let option of city)
    {
        const value =await option.textContent()
        if (value.includes('Anand Vihar'))
        {
            await option.click()
            break;
        }

    }

})