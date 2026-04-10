import {test, expect} from '@playwright/test'

test('Soft Assertion', async({page})=>{
await page.goto('https://www.demoblaze.com/index.html')
//hard assertion
// await expect(page).toHaveTitle('STORE')
// await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
// await expect (page.locator('#nava')).toBeVisible();

//soft assertion
await expect.soft(page).toHaveTitle('STORE1')
await expect.soft(page).toHaveURL('https://www.demoblaze.com/index.html')
await expect.soft (page.locator('#nava')).toBeVisible();
})