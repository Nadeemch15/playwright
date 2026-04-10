import{test, expect}from '@playwright/test';
test.skip('Date Picker Test',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //await page.locator('#datepicker').fill('03/25/2025');

    //date picker calendar
    const year= '2027'
    const month= 'January'
    const date= '29'

    //select year & month
    await page.locator('#datepicker').click();

    while(true)
    {
        const mon = await page.locator('.ui-datepicker-month').textContent();
        const yr = await page.locator('.ui-datepicker-year').textContent();
        
        if(mon===month && yr===year)
        {
            break;
        }
        else
        {
          await page.locator('[title="Next"]').click();            
        }
    }
    //select date
    const alldates = await page.$$('.ui-state-default')
    for (const dt of alldates)
    {
        const dtxt = await dt.textContent();
        if(dtxt===date)
        {
            await dt.click();
            break;
        }
    }
    // date selectin without using loop
    ////a[@class='ui-state-default'][text()='20']
    const date2 = '20'
    await page.locator(`//a[@class="ui-state-default"][text()='${date2}']`).click();
   await page.waitForTimeout(5000)
})


   test('Previouse Date Picker Test',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    
    //date picker calendar

    const year= '2022'
    const month= 'March'
    const date= '21'

    //await page.click('#txtDate');
    //select year & month
    await page.locator('#datepicker').click();

    while(true)
    {
        const mon = await page.locator('.ui-datepicker-month').textContent();
        const yr = await page.locator('.ui-datepicker-year').textContent();

        
        if(mon===month && yr===year)
        {
            break;
        }
        else
        {
          await page.locator('[title="Prev"]').click();            
        }
    }
    //select date
    const alldates = await page.$$('.ui-state-default')
    for (const dt of alldates)
    {
        const dtxt = await dt.textContent();
        if(dtxt===date)
        {
            await dt.click();
            break;
        }
    }
    await page.waitForTimeout(2000)
})

