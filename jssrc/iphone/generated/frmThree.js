function addWidgetsfrmThree() {
    frmThree.setDefaultUnit(kony.flex.DP);
    var btnLogout = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btnLogout",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_ffd586ad62584763848507b88528d6c6,
        "skin": "CopyslButtonGlossBlue04d72cdc0f96949",
        "text": kony.i18n.getLocalizedString("Logout"),
        "top": "563dp",
        "width": "99.88%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var flxContain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "501dp",
        "id": "flxContain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "62dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxContain.setDefaultUnit(kony.flex.DP);
    var brwsr = new kony.ui.Browser({
        "centerX": "50.03%",
        "centerY": "50%",
        "detectTelNumber": false,
        "enableZoom": false,
        "height": "100%",
        "id": "brwsr",
        "isVisible": true,
        "left": "3dp",
        "requestURLConfig": {
            "URL": "",
            "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
        },
        "top": "3dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxContain.add(brwsr);
    var flx3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "59dp",
        "id": "flx3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flx3.setDefaultUnit(kony.flex.DP);
    var lblTitle = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "lblTitle",
        "isVisible": true,
        "skin": "CopyslLabel0a7b70f91b8b440",
        "text": kony.i18n.getLocalizedString("Browser"),
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var btnBack = new kony.ui.Button({
        "centerX": "10%",
        "centerY": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "100%",
        "id": "btnBack",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_668edb6b6cd142d4be4e9685df892b63,
        "skin": "CopyslButtonGlossBlue0f48950dfa06648",
        "text": "<",
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    flx3.add(lblTitle, btnBack);
    frmThree.add(btnLogout, flxContain, flx3);
};

function frmThreeGlobals() {
    frmThree = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmThree,
        "enabledForIdleTimeout": false,
        "id": "frmThree",
        "init": AS_Form_e03b9abec14944368d679a35ea1b9083,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm0e9c2441da2f640"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": false,
        "titleBarSkin": "slTitleBar"
    });
};