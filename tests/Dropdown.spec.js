import {test, expect} from '@playwright/test'
test('Handle Dropdown', async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')

//await page.locator('#country').selectOption({label: 'Germany'})
//await page.locator('#country').selectOption('Canada')// visible by text
//await page.locator('#country').selectOption({value: 'uk'}) // using by value
//await page.locator('#country').selectOption({index:0})
//await page.selectOption('#country','Brazil')

//Assertion
//Approach 1
await expect(page.locator('#country option')).toHaveCount(10);

//Approach 2
const option = await page.$$('#country option')
console.log("Number of Options", option.length)
expect(option.length).toBe(10)

//Check presenct value in the dropdown approach 1
const content = await page.locator('#country').textContent();
expect(content.includes('Canada')).toBeTruthy();


const options= await page.$$('#country option')
let status = false;
for(const option1 of options)
{
    let value = await option1.textContent();
    if (value.includes('France'))      
    {
        status=true;
        break;
    }
} 
expect(status).toBeTruthy();

//select the option from dropdown using loop
// const option2 = await page.$$('#country')
// for(const option of option2)
// {
//     let value = await option.textContent();
//     if (value.includes('France'))
//     {
//         await page.selectOption('#country', value)
//         break;
//     }
// }
})