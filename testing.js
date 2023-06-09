const {Builder, By, key, until, } = require("selenium-webdriver"); 

// for opening chrome in maximized mode
const chrome = require('selenium-webdriver/chrome');
const options = new chrome.Options();
options.addArguments('--start-maximized');

// for building driver
const driver = new Builder().forBrowser("chrome").setChromeOptions(options).build(); 

async function LoginpageTest() {
    try {

// for login page

       // getting url
       const url = "https://staging.community.fabric.microsoft.com/t5/user/loginpage" ;
       await driver.get(url) ;
 
       // finding username and password
       const username = await driver.findElement(By.name("login"));
       const password = await driver.findElement(By.name("password"));

       //sending keys to username and password
       await username.sendKeys("SmartConX_Test");
       await password.sendKeys("A!s2d3f4");

       //submiting login form
       await driver.findElement(By.name("form_0")).submit();

       // getting title in the home page
       const title = await driver.getTitle();

       // getting dropdown in home page and clicking it
       const dropdown = await driver.findElement(By.className('lia-js-menu-opener default-menu-option lia-js-click-menu lia-link-navigation'));
       await dropdown.click();

       // selecting desktop in dropdown and clicking
       const desktop = await driver.findElement(By.className('board-dropdown-item lia-board-rd-discussion1'));
       await desktop.click();

       // selcting new message element and clicking it
       const newMessage = await driver.findElement(By.partialLinkText('New Message'));
       await newMessage.click();

       // getting current date using date() method 
       const date =  new Date();
       const text = `vamsi-${date}`;

       // accessing subject element and sending key to it
       const subject  = await driver.findElement(By.name("subject"));
       await driver.sleep(2000);
       await subject.sendKeys(text);

       // finding body and sending key to it
       const body = await driver.findElement(By.id('mceu_40'));
       const iframe = await body.findElement(By.tagName('iframe'));
       await driver.switchTo().frame(iframe);
       const paragraphElement  = await driver.findElement(By.tagName('p'));
       await paragraphElement.sendKeys(text);
       await driver.sleep(2000);
       await driver.switchTo().defaultContent();
       
       // adding label as general comment by selcting label input
       const labelList = await driver.findElement(By.id('list_0'));
       const generalCommentOption = await labelList.findElement(By.xpath(".//a[contains(text(), 'General Comment')]"));
       await generalCommentOption.click();
       const selectedLabelsInput = await driver.findElement(By.id('lia-labels'));
       await selectedLabelsInput.sendKeys('');
       await driver.sleep(3000);

        // submitting post
        const postBtn = await driver.findElement(By.id("submitContext_1"));
        await postBtn.click();
        await driver.sleep(3000);

        // selecting drop down name as community panel and selcting commuinities to syndicate post in another communities
       const dropmenu = await driver.findElement(By.className("selected-values"));
       await driver.executeScript("arguments[0].scrollIntoViewIfNeeded();", dropmenu);
       await dropmenu.click();
       await driver.sleep(2000);
       const dropul = await driver.findElement(By.className("commnity-panel"));
       const checkboxes = await dropul.findElements(By.css('.check-box'));
       for (let i = 0; i < 4; i++) {
           await checkboxes[i].click();
        }
       await driver.sleep(1000);

       // clicking on syndicate button to syndicate post 
       const syndicate = await driver.findElement(By.id("btn-post"));
       await syndicate.click();
       await driver.sleep(4000);

       // clicking on proceed button after syndicate 
       const btnproceed = await driver.findElement(By.id("btn-proceed"));
       btnproceed.click();
       await driver.sleep(4000);

       // click on ok button after proceed button is clicked
       const finalok = await driver.findElement(By.className("btn-ok alert-popup-close lia-button lia-button-primary"));
       finalok.click();

       // waiting driver for sometime to check status of syndication
       await driver.sleep(20000);

       // clicking on status to check the status of syndication
       const checkStatus = await driver.findElement(By.id("btn-status"));
       checkStatus.click();
       await driver.sleep(2000);

       // finding the target community link, if the status is completed
        await driver.wait(until.elementLocated(By.id('tblHTML')));
        const rows = await driver.findElements(By.css('#tblHTML tbody tr'));  // finding all the rows in table body
        const targetId= [];
       
         for (let row of rows) {

            // Find the status cell in each row
            const statusCell = await row.findElement(By.xpath('.//td[2]'));

            // Get the status text
            const statusText = await statusCell.getText();

            // Check if the status is successful
            if (statusText.trim() === 'COMPLETED') {
              await driver.sleep(2000);
              const targetMessageIdLink = await row.findElement(By.xpath('.//td[4]/a'));
              await driver.executeScript("arguments[0].scrollIntoViewIfNeeded();", targetMessageIdLink);
              const targetIDLink = await targetMessageIdLink.getAttribute('href');
              targetId.push(targetIDLink);
              await driver.sleep(3000)
            }
          }

          console.log(targetId);

          


          const otherCommunity = async(com) => {
                try {
                    // driver gets community 
                    await driver.get(com);

                    // clicking on first replay button 
                    const replyButton = await driver.findElement(By.xpath("//span[contains(@class, 'message-reply')]/a"));
                    await replyButton.click();
                    
                    // accessing page title whether it is navigating to signup or going to replay page
                    const pageTitle = await driver.getTitle();
                    console.log("Page Title:", pageTitle);

                    // for signup 
                    if (pageTitle === "Sign in to your account") {
                        // waiting until signin page loads
                        await driver.wait(until.elementLocated(By.css('input[name="loginfmt"]')));

                        // accessing email and sending keys
                        const email = await driver.findElement(By.css('input[name="loginfmt"]'));
                        await email.sendKeys("vamsiu@italentdigital.com");
                  
                        // click on next button 
                        const nextBtn = await driver.findElement(By.id("idSIButton9"));
                        await nextBtn.click();
                        await driver.sleep(2000);

                        // accessing password and sending keys
                        await driver.wait(until.elementLocated(By.css('input[name="passwd"]')));
                        const password = await driver.findElement(By.css('input[name="passwd"]'));
                        await password.sendKeys("Vamsi@#9432");
                        await driver.sleep(1000);
                  
                        // clicking on submit button
                        const submitBtn = await driver.findElement(By.id("idSIButton9"));
                        await submitBtn.click();
                        await driver.sleep(2000);

                        // waiting for authentication and acess yes button for clicking it
                        await driver.wait(until.elementLocated(By.css('input[id="idSIButton9"]')));
                        await driver.sleep(15000);
                        const yesbtn = await driver.findElement(By.id("idSIButton9"));
                        await yesbtn.click();
                        await driver.sleep(3000);
                      }

                      // getting page title
                      const afterLoginPageTitle = await driver.getTitle();
                      console.log("Page Title:", afterLoginPageTitle);

                      // if it asks complete your profile 
                      if ("Complete your Profile".includes(afterLoginPageTitle)) {

                        // acessing username
                        const username = await driver.findElement(By.id("lia-login"));
                        await driver.sleep(2000);
                        await username.sendKeys("vamsikrishna");
                        await driver.sleep(2000);
                  
                        // accepting terms and conditions
                        const clickCheckBox = await driver.findElement(
                          By.id("lia-userAcceptsTermsOfService")
                        );
                        await clickCheckBox.click();

                        // pending for acessing captcha checkbox
                        
                        
                        // finally submiting form and completing profile
                        const submitBtn = await driver.findElement(By.id("submitContext_0"));
                        await submitBtn.click();
                        await driver.sleep(2000);
                      }

                      // accessing body in the other community for the first replay 
                       const body = await driver.findElement(By.id('mceu_38'));
                       const iframe = await body.findElement(By.tagName('iframe'));
                       await driver.switchTo().frame(iframe);
                       const paragraphElement  = await driver.findElement(By.tagName('p'));
                       await paragraphElement.sendKeys("vamsi-replaying-8-06-2023");
                       await driver.sleep(2000);
                       await driver.switchTo().defaultContent();

                       // submitting first reply 
                        const postBtn = await driver.findElement(By.id("submitContext_1"));
                        await postBtn.click();
                        await driver.sleep(4000);

                        // selcting last replay element
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


                        


                } finally {
                     console.log("other community reply");
                }
          }

          // going to another community and giving replay 
          // console.log(targetId);
          // const com = targetId[2];
          // otherCommunity(com);

          for (const communityUrl of targetId) {
            if (communityUrl.startsWith("https://staging.community.fabric.microsoft")) {
                     console.log("Skipping execution for", communityUrl);
                     continue; // Skip this iteration and continue to the next iteration
              }
            await otherCommunity(communityUrl);
          }

          
    

    }finally {
        console.log("testing over");
    }
}

LoginpageTest();