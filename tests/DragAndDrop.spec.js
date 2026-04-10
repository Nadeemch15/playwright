import {test, expect} from '@playwright/test'
test('Drag and Drop Test', async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');
//drag and drop
const draggable = page.locator('#draggable')
const droppable = page.locator('#droppable')

/*approach 1
await draggable.hover();
await page.mouse.down();

await droppable.hover();
await page.mouse.up();
*/

//approach 2
await draggable.dragTo(droppable);
await page.waitForTimeout(2000);

})
