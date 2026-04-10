import {test, expect} from '@playwright/test'
//import { text } from 'node:stream/consumers';
test('text input Action', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const textbox =page.locator('#name')
    await expect(textbox).toBeVisible();
    await expect(textbox).toBeEnabled();
    await textbox.fill('John Canady');
    const length = await textbox.getAttribute('length')
    expect(length).toBe(15);
    const enteredValue=await textbox.inputValue()
    console.log('Entered Value: ',enteredValue)
    expect(enteredValue).toBe('John Canady')



})