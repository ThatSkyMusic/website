
var arrLang = {
    "en-gb": {
        "title": "That Sky Music",
        "APP_NAME": "ThatSkyMusic",
        "APP_SLOGAN": "sky instrument practice tool",
        "APK_DL": "apk Download",
        "IPA_DL": "ipa Download",
        "WIN_DL": "Windows Download",
        "MAC_DL": "mac Download",
        "HELP": "Help",
        "OTHER_DL": "download",
        "FORUM": "Community",
    },
};

// The default language is English
var lang = "zh-cn";
// Check for localStorage support
if ('localStorage' in window) {

    var usrLang = localStorage.getItem('uiLang');
    if (usrLang) {
        lang = usrLang
    }
}

console.log(lang);

$(document).ready(function () {
    if (lang != 'zh-cn') {
        $(".lang").each(function (index, element) {
            $(this).text(arrLang[lang][$(this).attr("key")]);
        });
    }

    $(".mdc-button").each(function (index, element) {
        mdc.ripple.MDCRipple.attachTo(element)
    });

    $('.mdc-icon-button').each(function (index, element) {
        mdc.ripple.MDCRipple.attachTo(element)
        // var iconButtonRipple = new mdc.ripple.MDCRipple(element)
        // iconButtonRipple.unbounded = true;
    });
    //const topAppBar = new mdc.topAppBar.MDCTopAppBar($(".mdc-top-app-bar")[0]);
    console.log(mdc)
});

// get/set the selected language
// $(".translate").click(function () {
//     var lang = $(this).attr("id");

//     // update localStorage key
//     if ('localStorage' in window) {
//         localStorage.setItem('uiLang', lang);
//         console.log(localStorage.getItem('uiLang'));
//     }

//     $(".lang").each(function (index, element) {
//         $(this).text(arrLang[lang][$(this).attr("key")]);
//     });
// });
