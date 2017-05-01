//actions.js file 
function AS_Button_0f290b8991084ceea7527f0df3874a19(eventobject) {
    frmTwo.show();
    frmHome.destroy();
}

function AS_Button_118f0d5474634087bc13742f442819b4(eventobject) {
    frmTwo.show();
}

function AS_Button_15ddf94cc27146379fec5151ca69c577(eventobject) {
    frmThree.show();
}

function AS_Button_641e62f0972f41279d1880a8062c0fc8(eventobject) {
    return back.call(this);
}

function AS_Button_668edb6b6cd142d4be4e9685df892b63(eventobject) {
    frmTwo.show();
}

function AS_Button_ba497567679f4b58a6e2c5728d9e8b06(eventobject) {
    frmTwo.show();
}

function AS_Button_bbfca45f5b3b47d988f8b9f3d84921e3(eventobject) {
    return getSelect.call(this);
}

function AS_Button_dd7d44ce53c147e78c89c967abb8e3fb(eventobject) {
    frmThree.destroy();
    frmThree.show();
}

function AS_Button_ffd586ad62584763848507b88528d6c6(eventobject) {
    frmThree.destroy();
    back();
}

function AS_Form_42532b71160d4f608e6a18ce965aa3cb(eventobject) {
    return getCurrentLocale.call(this);
}

function AS_Form_438a2fe69c794d78a34b1975516535c4(eventobject) {
    frmTwo.lstBox.placeholder = def[0][1];
}

function AS_Form_e03b9abec14944368d679a35ea1b9083(eventobject) {
    //alert(currentLocales);
    if (currentLocales == "en_IN") frmThree.brwsr.requestURLConfig = {
        URL: "http://www.bbc.com/",
        requestMethod: constants.BROWSER_REQUEST_METHOD_GET
    };
    if (currentLocales == "ar_AE") frmThree.brwsr.requestURLConfig = {
        URL: "http://www.bbc.com/arabic",
        requestMethod: constants.BROWSER_REQUEST_METHOD_GET
    };
}