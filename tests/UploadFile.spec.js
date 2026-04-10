
//Reference: https://playwright.dev/docs/input#upload-files

// get relative path of the file to upload


import{test, expect} from '@playwright/test'
test('Singe file upload test', async({page})=>{
await page.goto('https://the-internet.herokuapp.com/upload')

await page.waitForSelector('#file-upload');
await page.locator('#file-upload').setInputFiles('Uploadfiles/testfile1.pdf');
await page.waitForTimeout(3000);
})

test.only('Mulitple files upload', async({page})=>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    await page.waitForSelector('[name="filesToUpload"]')
    await page.locator('[name="filesToUpload"]')
    .setInputFiles(['Uploadfiles/testfile1.pdf','Uploadfiles/testfile2.txt']);
    //.setInputFiles(["C:\Users\hp\Desktop\New folder\file3.txt","C:\Users\hp\Desktop\New folder\file4.txt"]);
    
    expect (await page.locator('//li[normalize-space()="testfile1.pdf"]')).toBeVisible('testfile1.pdf');
    expect (await page.locator('div[class="main"] li:nth-child(2)')).toBeVisible('testfile2.txt');
    await page.waitForTimeout(3000);

    await page.locator('[name="filesToUpload"]').setInputFiles([]);
    expect (await page.locator('//li[normalize-space()="No Files Selected"]')).toBeVisible('No Files Selected');
    await page.waitForTimeout(3000);

})

