import {test, expect} from '@playwright/test'

test('Handle Dropdown', async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')

// await page.selectOption('#colors',['Blue', 'Green'])
// await page.waitForTimeout(3000);

//Assertion - no. of dropdown
const option1 = page.locator('#colors option')
await expect(option1).toHaveCount(7);

const option2 = await page.$$('#colors option')
console.log(`Total Colors: ${option2.length}`)
await expect(option2.length).toBe(7);

//presence of value in dropdown
const color = await page.locator('#colors').textContent();
expect(color.includes('Red')).toBeTruthy();
})