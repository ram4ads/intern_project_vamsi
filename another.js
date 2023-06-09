const { Builder, By, key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const options = new chrome.Options();
options.addArguments("--start-maximized");
const driver = new Builder()
  .forBrowser("chrome")
  .setChromeOptions(options)
  .build();

async function LoginpageTest() {
  try {
    const url =
      "https://powerusers-staging.microsoft.com/t5/ICS-Forums/vamsi-2023-6-7-12-51-7/td-p/98224";
    await driver.get(url);

    const replyButton = await driver.findElement(
      By.xpath("//span[contains(@class, 'message-reply')]/a")
    );

    await replyButton.click();

    const pageTitle = await driver.getTitle();

    console.log("Page Title:", pageTitle);

    if (pageTitle === "Sign in to your account") {
      await driver.wait(until.elementLocated(By.css('input[name="loginfmt"]')));

      const email = await driver.findElement(By.css('input[name="loginfmt"]'));

      await email.sendKeys("vamsiu@italentdigital.com");

      const nextBtn = await driver.findElement(By.id("idSIButton9"));

      await nextBtn.click();

      await driver.sleep(2000);

      await driver.wait(until.elementLocated(By.css('input[name="passwd"]')));

      const password = await driver.findElement(By.css('input[name="passwd"]'));

      await password.sendKeys("Vamsi@#9432");

      await driver.sleep(1000);

      const submitBtn = await driver.findElement(By.id("idSIButton9"));

      await submitBtn.click();

      await driver.sleep(2000);
    }

    await driver.wait(until.elementLocated(By.css('input[id="idSIButton9"]')));

    await driver.sleep(15000);

    const yesbtn = await driver.findElement(By.id("idSIButton9"));

    await yesbtn.click();

    await driver.sleep(3000);

    const afterLoginPageTitle = await driver.getTitle();

    console.log("Page Title:", afterLoginPageTitle);

    if (
      afterLoginPageTitle === "Complete your Profile - Microsoft Fabric Community"
    ) {
      const username = await driver.findElement(By.id("lia-login"));

      await driver.sleep(2000);

      await username.sendKeys("vamsikrishna");

      await driver.sleep(2000);

      const clickCheckBox = await driver.findElement(
        By.id("lia-userAcceptsTermsOfService")
      );

      await clickCheckBox.click();

     


      // Click the captcha checkbox
      
      
      
      const submitBtn = await driver.findElement(By.id("submitContext_0"));

      await submitBtn.click();

      await driver.sleep(2000);
    }

    const body = await driver.findElement(By.id('mceu_38'))

    const iframe = await body.findElement(By.tagName('iframe'))

    await driver.switchTo().frame(iframe);

    const paragraphElement  = await driver.findElement(By.tagName('p'))

    await paragraphElement.sendKeys("vamsi-replaying-8-06-2023")

    await driver.sleep(2000)

    await driver.switchTo().defaultContent();

    const postBtn = await driver.findElement(By.id("submitContext_1"));
       await postBtn.click();

       await driver.sleep(3000);

    
       const replyElements = await driver.findElements(By.css('[aria-label="Reply to comment"]'));
  
       const lastReplyElement = replyElements[replyElements.length - 1];
       lastReplyElement.click(); 
       await driver.sleep(4000);
       const iframeDiv2 = await driver.findElement(By.id("mceu_70"));

        const iframe2 = await iframeDiv2.findElement(By.tagName('iframe'));

        await driver.switchTo().frame(iframe2);

        const pElememt = await driver.findElement(By.tagName('p'));

        const date = new Date();

        await pElememt.sendKeys(`Testing on ${date}`);

        await driver.sleep(2000);

        await driver.switchTo().defaultContent();

        await driver.sleep(2000);

        const final = await driver.findElement(By.css('input[name="submitContext_0"]'));
        await final.click();

// Click the last element
    await lastReplyElement.click();
  } finally {
    console.log("another");
  } 
}

LoginpageTest();
