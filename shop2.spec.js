
const { test } = require('@playwright/test');
const {ShopPage } = require('../pages/shoppage');
test('shopPage', async ({ page }) => {
    try{
        const addtoCart = new  ShopPage(page);
        await page.setViewportSize({ width: 1920, height: 1080 });
        await addtoCart.gotoHomePage();       
        await addtoCart.product1();
        await addtoCart.product2();
        await addtoCart.product3();
        await addtoCart.product3Button();
        await addtoCart.backButton();
        await addtoCart.cartlink();
        await addtoCart.checkoutimg();
        await addtoCart.fName();
        await addtoCart.lname();
        await addtoCart.postcode();
        await addtoCart.continueButton();
        await addtoCart.final();
        await addtoCart.thankyou();
    }
    finally{
        await page.close();
    }
});