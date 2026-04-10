import{test,expect}from '@playwright/test';
test.skip('handling frame',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')

    //total frames
    const allFrames = page.frames()
    console.log(`No. of frames: ${allFrames.length}`)

    // using name or URL
    //const frame = await page.frame('name')
    const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    frame1.locator('[name="mytext1"]').fill('Hello')
    //frame1.fill('[name="mytext1"]', 'Hello')
    await page.waitForTimeout(5000)
})

// using frame locator

test('handling frame1',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')
    // using frame locator
    const inputbox = await page.frameLocator('frame[src="frame_1.html"]').locator('[name="mytext1"]')
    inputbox.fill('HI')
    await page.waitForTimeout(3000)


})
