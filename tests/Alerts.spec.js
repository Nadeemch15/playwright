import {test, expect} from '@playwright/test'

test.skip('Alert handling with OK', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //enabling dialog window handling
    page.on('dailog', async dialog1=>{
        expect(dialog1.type()).toContain('alert')
        expect(dialog1.message()).toContain('I am an alert box!')
        await dialog1.accept();
    })
    // before clicking dailog widown we have to enable it, which we did in above code
    await page.click('#alertBtn')
})

test.skip('conformation dialog with OK and Cancel',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog', async dailog2=>{
        expect(dailog2.type()).toContain('confirm')
        expect(dailog2.message()).toContain('Press a button!')
        await dailog2.dismiss(); // close by using cancel
        //await dailog2.accept(); // close by OK 

    })
        await page.click('#confirmBtn');
        await page.waitForTimeout(3000);
   })

test('prompt dialog', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog', async dialog3=>{
        expect(dialog3.type()).toContain('prompt');
        expect(dialog3.message()).toContain('Please enter your name:');
        expect(dialog3.defaultValue()).toContain('Harry Potter');
        await dialog3.accept('Sam');
    })

    await page.click('#promptBtn')
    await expect(page.locator('#demo')).toHaveText('Hello Sam! How are you today?');
})

   