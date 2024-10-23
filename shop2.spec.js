const { test, expect } = require('@playwright/test');

test('frameTest', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const frameLocator1 = page.frame({ url: /frame_1.html/ });
    await frameLocator1.fill('input[name="mytext1"]', 'JU');
    const frameLocator2 = page.frame({ url: /frame_2.html/ });
    await frameLocator2.fill('input[name="mytext2"]', 'Khan');
    const frameLocator3 = page.frame({ url: /frame_3.html/ });
    await frameLocator3.fill('input[name="mytext3"]', 'Antony');
    const googleFormFrame = page.frame({ url: /docs.google.com/ }); 
    await googleFormFrame.waitForSelector('form');
    const radioButton = googleFormFrame.locator('//span[text()="Hi, I am the UI.Vision IDE"]');
    await radioButton.click();
    const radioButton2 = googleFormFrame.locator('//span[text()="I am a human"]');
    await radioButton2.click();
   /* const radioButton3 = googleFormFrame.locator('//span[text()="Other"]');
    await radioButton3.click();
    await page.locator('input.Hvn9fb.zHQkBf').fill('I am Demon');*/
    const checkButton = googleFormFrame.locator('//span[text()="Web Testing"]');
    await checkButton.click();
    const checkButton2 = googleFormFrame.locator('//span[text()="Form Autofilling"]');
    await checkButton2.click();
    const checkButton3 = googleFormFrame.locator('//span[text()="General Web Automation"]');
    await checkButton3.click();
    const dropdown = googleFormFrame.locator('//span[text()="Choose"]');
    await dropdown.click();
    await dropdown.click();
    await googleFormFrame.locator('//span[text()="Next"]').click();
    await googleFormFrame.fill('input.whsOnd.zHQkBf', 'RPA is the best technology');
    await googleFormFrame.fill('textarea.KHxj8b.tL9Q4c', 'RPA is the best technology.The new approach is more straightforward and avoids the complexity of using');
    await googleFormFrame.locator('//span[text()="Submit"]').click();
    const frameLocator4 = page.frame({ url: /frame_4.html/ });
    await frameLocator4.fill('input[name="mytext4"]', 'Riya');
    page.close();
});

    
   
    


    
   

  
   

    // Interact with frame 4
   
