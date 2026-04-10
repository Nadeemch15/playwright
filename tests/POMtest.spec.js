import {test, expect} from '@playwright/test'
import { LoginPage  } from '../Pages/LoginPage';
import { HomePage } from '../Pages/HomePage';

test('test', async({page})=>{
//login
const login = new LoginPage();
await login.gotoLoginPage();
await login.login('pavanol', 'test@123');
await page.waitForTimeout(3000);
await login.loginButton();

//HomePage
const home = new HomePage(page);
await home.addProductToCart('Nexus 6');
await page.waitForTimeout(3000);
await home.gotoCart();
});