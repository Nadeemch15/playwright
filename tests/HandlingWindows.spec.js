//Creating own Page
import{test,expect, chromium} from '@playwright/test' 

//not using existing page fixture
test('Handle Page/windows', async()=>{

    //create browser 
    const browser = await chromium.launch()
    const context = await browser.newContext(); // in context we can create multiple pages
    // two pages created
    const page1 = await context.newPage();
    const page2 = await context.newPage();

    const allpages = context.pages();
    console.log('No of Pages',allpages.length)

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle('OrangeHRM')

    await page2.goto('https://www.orangehrm.com/')
    await expect(page2).toHaveTitle('Human Resources Management Software | HRMS | OrangeHRM')
})

test('Handle Noew Pages/windows', async()=>{

    //create browser
    const browser = await chromium.launch()
    const context = await browser.newContext(); // in context we can create multiple pages
    // two pages created
    const page1 = await context.newPage();
    
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle('OrangeHRM')

    const pagePromis=context.waitForEvent('page')
    // click action on page and new tab open
    await page1.locator('//a[normalize-space()="OrangeHRM, Inc"]').click();

    // storing pagePromis in newPage
    const newPage = await pagePromis;
    expect(newPage).toHaveTitle('Human Resources Management Software | HRMS | OrangeHRM')
    await page1.waitForTimeout(3000);
    await newPage.waitForTimeout(3000);

    await browser.close();
})
