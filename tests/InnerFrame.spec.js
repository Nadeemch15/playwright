import{test,expect}from '@playwright/test';
test('handling inner/nested frame',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')
    
    //await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'}).locator('input[name="mytext3"]').fill('Welcome');
    const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    frame3.locator('input[name="mytext3"]').fill('Welcome')

    //nested frame
    const childframe = await frame3.childFrames();
    await childframe[0].locator('//div[@id="i6"]//div[@class="AB7Lab Id5V1"]').click();

    await page.waitForTimeout(5000)

})