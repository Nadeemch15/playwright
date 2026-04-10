exports.HomePage = class HomePage
{
    constructor(page){
        this.page = page;
        this.productList = '//*[@id="tbodyid"]/div/div/div/h4/a'
        this.addToCartbtn = '//a[normalize-space()="Add to cart"]'
        this.cart = '//a[@id="cartur"]'
    }
    async addProductToCart(productName)
    {
        const productList = await this.page.$$(this.productList);
        for (const product of productList){
            if (productName = await product.textContent()){
                await product.cick();
                break;
            }
            //handling alert
            await this.page.on('dialog', async dailog=>
            {
                if (dailog.message().includes('added')){
                    await dailog.accept();
                }
            })
                await this.page.locator(this.addToCartbtn).click();               
        }

    }
        async gotoCart()
        {
           await this.page.locator(this.cart).click();
        }
}
