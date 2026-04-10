import {test,expect} from '@playwright/test'
test('Hidden Dropdown', async({page})=>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

await page.locator('[name="username"]').fill('Admin');
await page.locator('[name="password"]').fill('admin123')
await page.click('[type="submit"]')

await page.locator('//span[normalize-space()="PIM"]').click();
await page.locator('//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]').click();
await page.waitForTimeout(3000);
const options = await page.$$('//div[@role="listbox"]//span')
for (let option of options)
    {
        const job = await option.textContent()

        if(job.includes('QA Lead'))
        { 
            await option.click();
            break;
        }
}

})