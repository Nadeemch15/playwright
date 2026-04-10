import {test, expect} from '@playwright/test';

test('Mouse Right Click Test',async({page})=>{
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

    //right click on button
    const button = page.locator('//span[@class="context-menu-one btn btn-neutral"]')
    await button.click({button:'right'});
    await page.waitForTimeout(2000);

})