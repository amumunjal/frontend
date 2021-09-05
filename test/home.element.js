const { expect, assert, should } = require("chai");
const { default: waitForDisplayed } = require("webdriverio/build/commands/element/waitForDisplayed");
const homepage = require("../pages/homepage");
const config   = require("../wdio.conf.js").config;
const util     = require("../utils/util");



describe("home page tests",function() {
  it("verify browser initiation and page title",function(){

    browser.url(config.baseUrl)
    browser.maximizeWindow()
    expect(homepage.pageTitle.getText()).equals('SBS Hindi News 13 July 2021: More financial support amid extended NSW lockdown')
   });

   it("verify subscribe button shows podcast list",function(){
    homepage.clickSubscribe();
    expect(homepage.applePodcast.isDisplayed()).equals(true)
    expect(homepage.googlePodcast.isDisplayed()).equals(true)

   });

   it("verify language toggle displays language list",function(){
    expect(homepage.langList.isDisplayed()).equals(false)
    homepage.changeLanguage();
    expect(homepage.langList.isDisplayed()).equals(true)
   });

   
   it("verify player is launched by clicking play on the audio icon",function(){
    homepage.mediaPlay();
    browser.pause(3000)
    expect(homepage.audioPlayer.isDisplayed()).equals(true)

   });

   it("verify player control actions",function(){

// Verify forward 20 Action    
        homepage.playForward();
        let uRange      = util.getAttVal(homepage.progressStatus)                           
        let nRange      = util.getFixVal(uRange)
        expect(nRange).to.be.greaterThan(1)

 //verify rewind action
         homepage.playRewind();
         let rRange      = util.getAttVal(homepage.progressStatus) 
         let nRewRRange  = util.getFixVal(rRange);
         expect(nRewRRange).to.be.lessThan(1);
         
 //Check Pause action.
         homepage.audioPausePlay();
         expect(homepage.mediaPaused.isDisplayed()).equals(true)
       
//verify Mute Unmute actions
         let volrange      = util.getAttVal(homepage.volStat)
         let nVolRange     = util.getFixVal(volrange);
         expect(nVolRange).to.be.greaterThan(0)
         homepage.clickVol();
         
         let mutRange      = util.getAttVal(homepage.volStat)
         let mVolRange     = util.getFixVal(mutRange);
         console.log(mVolRange)
         expect(mVolRange).equals(0);
       

});

})