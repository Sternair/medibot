import React from "react";
import { withRouter } from "react-router-dom";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

const fake = `
<link href="/bot.css" rel="stylesheet">
<div _ngcontent-c0="" class="chat light ng-star-inserted"><div _ngcontent-c0="" class="chat__header" style="color: rgb(255, 255, 255); background: rgb(19, 41, 75);"><div _ngcontent-c0="" class="chat__name"><!----><div _ngcontent-c0="" class="chat__avatar ng-star-inserted" style="background-image: url(&quot;https://dvgpba5hywmpo.cloudfront.net/media/image/Z3ihYTlb24gamECoDnpvFdxP6&quot;);"></div><div _ngcontent-c0="" class="chat__bot-name">MediBot</div></div><div _ngcontent-c0="" class="chat__controls"><!----><div _ngcontent-c0="" class="ng-star-inserted"><!----></div><!----><div _ngcontent-c0=""><!----><!----></div><!----></div></div><div _ngcontent-c0="" class="chat__body"><ng-scrollbar _ngcontent-c0="" class="my-scrollbar" smoothscroll="" _nghost-c5="" trackx="false" tracky="true" compact="true" autohide="false"><div _ngcontent-c5="" class="ng-scrollbar-layout ng-scrollbar-x-layout"><div _ngcontent-c5="" class="ng-scrollbar-layout ng-scrollbar-y-layout"><div _ngcontent-c5="" class="ng-scroll-view-container"><div _ngcontent-c5="" cdkscrollable="" smoothscroll="" class="ng-scroll-view " style="width: calc(100% + 18px); height: 100%;"><!----><div _ngcontent-c0="" class="messages ng-star-inserted"><div _ngcontent-c0="" class="message" hidden=""><!----><div _ngcontent-c0="" class="message__avatar ng-star-inserted" style="background-image: url(&quot;https://dvgpba5hywmpo.cloudfront.net/media/image/Z3ihYTlb24gamECoDnpvFdxP6&quot;);"></div><div _ngcontent-c0="" class="message__wrapper"><div _ngcontent-c0="">
<div _ngcontent-c0="" class="message__body message_greeting" style="background: rgb(244, 245, 246);"> Hi there,<br />let us help you get the best appointment for you.<br />Please scan you referral slip to get started!  
</div></div></div></div><!----><div _ngcontent-c0="" class="message ng-star-inserted" style="display:none;"><!----><div _ngcontent-c0="" class="message__avatar ng-star-inserted" style="background-image: url(&quot;https://dvgpba5hywmpo.cloudfront.net/media/image/Z3ihYTlb24gamECoDnpvFdxP6&quot;);"></div><!----><div _ngcontent-c0="" class="message__wrapper"><!----><div _ngcontent-c0="" class="message__signature ng-star-inserted">Healthcare Bot</div><!----><div _ngcontent-c0="" class="ng-star-inserted"><!----><div _ngcontent-c0="" class="message__body ng-star-inserted" style="background: rgb(244, 245, 246);"><!----><p _ngcontent-c0="" class="message__body-img angular-with-newlines ng-star-inserted">Welcome to MediBot! Do you have a Patient Id?</p><div _ngcontent-c0="" class="message__body-img"></div><!----></div><!----></div><!----><!----><div _ngcontent-c0="" class="message__date ng-star-inserted"><!----><!----><p _ngcontent-c0="" class="ng-star-inserted">Sep 7, 2019, 8:35:32 PM</p></div><!----><!----><div _ngcontent-c0="" class="ng-star-inserted"><!----><!----><div _ngcontent-c0="" class="message__suggested message__suggested--inline ng-star-inserted"><!----><button _ngcontent-c0="" class="primary message__suggested-btn mat-stroked-button ng-star-inserted" mat-stroked-button=""><span class="mat-button-wrapper">Yes</span><div class="mat-button-ripple mat-ripple" matripple=""></div><div class="mat-button-focus-overlay"></div></button><button _ngcontent-c0="" class="primary message__suggested-btn mat-stroked-button ng-star-inserted" mat-stroked-button=""><span class="mat-button-wrapper">No</span><div class="mat-button-ripple mat-ripple" matripple=""></div><div class="mat-button-focus-overlay"></div></button></div></div><!----></div></div><div _ngcontent-c0="" class="message"><!----></div></div></div></div><!----><ng-scrollbar-y _ngcontent-c5="" class="ng-scrollbar-visible ng-star-inserted"><div class="ng-scrollbar "><div class="ng-scrollbar-thumb " style="transform: translate3d(0px, 0px, 0px); height: 0px;"></div></div></ng-scrollbar-y></div><!----></div></ng-scrollbar></div>
<div _ngcontent-c0="" class="chat__form" style="display:none;"><div _ngcontent-c0="" class="chat__form-btns"><!----><button _ngcontent-c0="" aria-haspopup="true" color="primary" mat-icon-button="" class="mat-icon-button mat-primary ng-star-inserted"><span class="mat-button-wrapper"><mat-icon _ngcontent-c0="" class="mat-icon material-icons" role="img" aria-hidden="true">info</mat-icon></span><div class="mat-button-ripple mat-ripple mat-button-ripple-round" matripple=""></div><div class="mat-button-focus-overlay"></div></button><!----><mat-menu _ngcontent-c0="" class="" yposition="above"><!----></mat-menu><!----><div _ngcontent-c0="" style="
            display: block !important;
            visibility: visible !important;
            position: relative !important;
            left: 0 !important;
            right: 0 !important;
            top: 0 !important;
            bottom: 0 !important;
            pointer-events: all !important;
            opacity: 1 !important;
            clip-path: none !important;
            transform: none !important;
            filter: none !important;
            text-indent: unset !important;
            max-width: 100% !important;
            max-height: 100% !important;
            margin-left: auto !important;
            margin-top: auto !important;
            margin-bottom: auto !important;
            margin-right: auto !important;
            color: rgba(0,0,0,.87) !important;
        " class="ng-star-inserted"><button _ngcontent-c0="" aria-haspopup="true" class="persistent-menu-btn mat-icon-button" mat-icon-button="" style="
                display: block !important;
                visibility: visible !important;
                position: relative !important;
                left: 0 !important;
                right: 0 !important;
                top: 0 !important;
                bottom: 0 !important;
                pointer-events: all !important;
                opacity: 1 !important;
                clip-path: none !important;
                transform: none !important;
                filter: none !important;
                text-indent: unset !important;
                max-width: 100% !important;
                max-height: 100% !important;
                margin-left: auto !important;
                margin-top: auto !important;
                margin-bottom: auto !important;
                margin-right: auto !important;
                color: rgba(0,0,0,.87) !important;
            "><span class="mat-button-wrapper"><mat-icon _ngcontent-c0="" class="mat-icon material-icons" role="img" aria-hidden="true">menu</mat-icon></span><div class="mat-button-ripple mat-ripple mat-button-ripple-round" matripple=""></div><div class="mat-button-focus-overlay"></div></button><mat-menu _ngcontent-c0="" class="ng-animate-disabled"><!----></mat-menu><mat-menu _ngcontent-c0="" class="ng-tns-c4-2"><!----></mat-menu><mat-menu _ngcontent-c0="" class="ng-tns-c4-3"><!----></mat-menu></div></div><div _ngcontent-c0="" autocomplete="off" class="chat__input"><div _ngcontent-c0="" class="round-block"><input _ngcontent-c0="" id="chat_input" matinputautofocus="" name="mess" type="text" placeholder="type something..." class="ng-untouched ng-pristine" disabled=""><button _ngcontent-c0="" mat-icon-button="" class="mat-icon-button" disabled=""><span class="mat-button-wrapper"><i _ngcontent-c0="" class="material-icons">send</i></span><div class="mat-button-ripple mat-ripple mat-button-ripple-round" matripple=""></div><div class="mat-button-focus-overlay"></div></button></div><app-audio-recorder _ngcontent-c0="" id="sendAudioRec" _nghost-c7=""><audio _ngcontent-c7="" class="video"></audio><div _ngcontent-c7="" class="chat__audio"><!----><button _ngcontent-c7="" mat-icon-button="" class="mat-icon-button ng-star-inserted" disabled=""><span class="mat-button-wrapper"><mat-icon _ngcontent-c7="" class="mat-icon material-icons" role="img" aria-hidden="true">mic</mat-icon></span><div class="mat-button-ripple mat-ripple mat-button-ripple-round" matripple=""></div><div class="mat-button-focus-overlay"></div></button><!----><!----></div></app-audio-recorder></div><!----><div _ngcontent-c0="" class="chat__copyright ng-star-inserted"><img _ngcontent-c0="" alt="" src="https://snatchbot.me/img/bot.png"> Powered by SnatchBot</div></div></div>`;
const Patient: React.FC = () => (
  <div className="App">
    <LoadingScreen />
    <div className="content" dangerouslySetInnerHTML={{ __html: fake }}></div>
    <input
      id="file"
      type="file"
      accept="image/*"
      onChange={() => {
        window.location.assign("/chat");
      }}
    />
  </div>
);

export default withRouter(Patient);
