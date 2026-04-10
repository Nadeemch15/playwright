class signInPage
{
    constructor(page)
    {
        this.page = page
        this.username= '#email';
        this.password= '#password1'
        this.signinbtn= '//button[text()="Sign in"]'
    }

    async loginToApp(email, password)
    {
        await this.page.fill(this.username, email);
        await this.page.fill(this.password, password);
        await this.page.signinbtn.click()      

    }
}