
import {test, expect} from '@playwright/test'
test('AssertionTest', async({page})=>{
await page.goto('https://demo.nopcommerce.com/register')
await expect(page).toHaveURL('https://demo.nopcommerce.com/register')
await expect(page).toHaveTitle('nopCommerce demo store. Register')

//tobeVisible
const logo = await page.locator('.header-logo')
expect(logo).toBeVisible();
//toBeEnabled
const searchBox = await page.locator('#small-searchterms');
expect(searchBox).toBeEnabled();

//toBeChecked - radio button
const radioButton = await page.locator('#gender-male')
await radioButton.click();
await expect(radioButton).toBeChecked();

// check box
const checkBox = await page.locator('//input[@class="form-check-input"]')
await expect(checkBox).toBeChecked();

//toHaveAttribute
const registerButton = page.locator('#register-button')
await expect(registerButton).toHaveAttribute('type','submit');

//toHaveText
const text = page.locator('.page-title h1')
await expect(text).toHaveText('Register')


//toContainText()
await expect(await page.locator('.page-title h1')).toContainText('Reg')

//toHaveValue()
const emailInput = await page.locator('#Email')
await emailInput.fill('test@demo.com');
await expect(emailInput).toHaveValue('test@demo.com');

/* toHaveCount();
const option = await page.locator(' ')
await expect(option).toHaveCount(2);

})
*/