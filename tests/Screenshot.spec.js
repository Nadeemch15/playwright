import {test, expect} from '@playwright/test';
test('Screenshot test', async({page})=>{
await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
await page.screenshot({path:'tests/Screenshots/'+Date.now()+'Homepage.png'});

});
test('Full page screenshot test', async({page})=>{
await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
await page.waitForTimeout(3000);
await page.screenshot({path:'tests/Screenshots/'+Date.now()+'Full.png',fullPage:true});   
})

test.only('Element screenshot test', async({page})=>{
await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
await page.waitForTimeout(3000);
await page.locator('//h1[contains(text(),"Demo:")]').screenshot({path:'tests/Screenshots/'+Date.now()+'Full.png',fullPage:true});   
})

