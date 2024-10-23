const{expect}=require('@playwright/test');
const locators=require('../Locators/shoplocators');

class ShopPage {
    constructor(page) {
        this.page = page; 
        //this.locators = new Locators(page);

    }
    async gotoHomePage() {
        await this.page.goto("https://www.saucedemo.com/v1/inventory.html");
    }
    async product1() {
        await expect(this.page.locator(locators.addToCartButton)).toBeVisible(); 
        await this.page.locator(locators.addToCartButton).click();
    }
    
async product2(){
    await expect(this.page.locator(locators.sauceLabsBoltButton)).toBeVisible();
    await this.page.locator(locators.sauceLabsBoltButton).click();
}

async product3(){
    await expect(this.page.locator(locators.enlargeBikeLightImage)).toBeVisible();
    await this.page.locator(locators.enlargeBikeLightImage).click();
}
async product3Button(){
    await this.page.locator(locators.enlargeButton).click();
}
async backButton(){
    await this.page.locator(locators.backButton).click();
}
async cartlink(){
    await this.page.locator(locators.cartLink).click();
}
async checkoutimg(){
    await this.page.locator(locators.checkoutLink).click();
}
async fName(){
    await this.page.locator(locators.firstNameInput).pressSequentially("Jason");
}
async lname(){
    await this.page.locator(locators.lastNameInput).pressSequentially("McKarthy");
}
async postcode(){
  await this.page.locator(locators.postalCodeInput).pressSequentially("78654");
}
async continueButton(){
    await this.page.locator(locators.continueButton).click();
}
async final(){
    await this.page.locator(locators.finishLink).click();
}
async thankyou(){
    await expect(this.page.locator(locators.completeHeader)).toBeVisible();
}

}
module.exports={ShopPage};