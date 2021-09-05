
class HomePage 

{

    get pageTitle        () { return $('.audiotrack__title') }
    get subscribeBtn     () { return $('#mod-dropdown_module-2>.podcast-subscribe__label.dropdown__button.label') }
    get audioPlayer      () { return $("//div[@class='audio-player audio-player--global is-loaded is-media-tracked is-media-playing is-touched']") }
    get toggleIcon       () { return $('#mod-dropdown_module-1 > a') }
    get langList         () { return $("//div[@class='dropdown__body']//div[@class='language-toggle__option-icon']") }
    get playBtn          () {return $(' .audiotrack__image.audiotrack__image--hero > button > span')}
    get pausePlayIcon    () { return $('.audio-player__icon.audio-player__icon--play-pause') }
    get progressStatus   () { return $('.audio-player__progress') }
    get mediaPaused      () { return $("//div[@class='audio-player audio-player--global is-media-tracked is-touched is-loaded is-media-paused']")}
    get volIcon          () { return $("//button[@class='audio-player__volume-button button button--clean']") }
    get volStat          () { return $("//span[@class='audio-player__volume-level']") }
    get fwdIcon          () { return $('.audio-player__icon.icon.icon--step-forward-20') }
    get rewindIcon       () { return $('.audio-player__icon.icon.icon--step-back-20') }
    get applePodcast     () {return $("//div[@class='dropdown__body']//li/a[text()='APPLE PODCASTS']")}
    get googlePodcast    () {return $("//div[@class='dropdown__body']//li/a[text()='GOOGLE PODCASTS']")}
    
    //Page Actions
     clickSubscribe()
    {
        this.subscribeBtn.click();
    }

     mediaPlay()
    {
        this.playBtn.click();
        this.audioPlayer.waitForDisplayed();
    }

     changeLanguage()
    {
          this.toggleIcon.moveTo();
    }

    audioPausePlay()
    {
          this.pausePlayIcon.click();

    }

     playForward()
    {
        this.fwdIcon.click();
    }

    playRewind()
    {
    this.rewindIcon.click();
    }


    clickVol()
    {
        this.volIcon.click();
    }

    g



}

module.exports = new HomePage();