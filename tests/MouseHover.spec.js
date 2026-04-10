import {test, expect} from '@playwright/test';
test('Mouse Hover Test', async ({page})=>{
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
//mouse hover on component
const MouseHover = await page.locator('//button[@id="mousehover"]');
await MouseHover.hover();

// mouse hover on Reload link
//const Reload = await page.locator ('//a[normalize-space()='Reload']'); 

//await page.locator ('//a[normalize-space()="Reload"]').hover();
const Top= page.locator('a[href="#top"]');
await Top.hover();

await page.waitForTimeout(2000);
await Top.click();
await page.waitForTimeout(2000);    
})