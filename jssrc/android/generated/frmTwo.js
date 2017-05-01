function addWidgetsfrmTwo() {
    frmTwo.setDefaultUnit(kony.flex.DP);
    var FlxCon = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "425dp",
        "id": "FlxCon",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "75dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlxCon.setDefaultUnit(kony.flex.DP);
    var lstBox = new kony.ui.ListBox({
        "height": "40dp",
        "id": "lstBox",
        "isVisible": true,
        "left": "55dp",
        "masterData": [
            ["en_IN", "English"],
            ["ar_AE", kony.i18n.getLocalizedString("Arabic")]
        ],
        "skin": "CopyslListBox00a47978247a942",
        "top": "82dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "placeholder": "Select Any Language",
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var lblTwo = new kony.ui.Label({
        "id": "lblTwo",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0fe1ac866f55540",
        "text": kony.i18n.getLocalizedString("Select language"),
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var changeBtn = new kony.ui.Button({
        "centerX": "50.00%",
        "centerY": "53%",
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "changeBtn",
        "isVisible": true,
        "left": "56dp",
        "onClick": AS_Button_bbfca45f5b3b47d988f8b9f3d84921e3,
        "skin": "CopyslButtonGlossBlue0bc0479d355f443",
        "text": kony.i18n.getLocalizedString("Change"),
        "top": "193dp",
        "width": "35%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlxCon.add(lstBox, lblTwo, changeBtn);
    var btnLogout = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "95%",
        "focusSkin": "slButtonGlossRed",
        "height": "10%",
        "id": "btnLogout",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_641e62f0972f41279d1880a8062c0fc8,
        "skin": "CopyslButtonGlossBlue04d72cdc0f96949",
        "text": kony.i18n.getLocalizedString("Logout"),
        "top": 563,
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxTitle = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "63dp",
        "id": "flxTitle",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxTitle.setDefaultUnit(kony.flex.DP);
    var lblTitle = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100.05%",
        "id": "lblTitle",
        "isVisible": true,
        "skin": "CopyslLabel0a7b70f91b8b440",
        "text": kony.i18n.getLocalizedString("Welcome"),
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var btnNext = new kony.ui.Button({
        "centerX": "90%",
        "centerY": "50.18%",
        "focusSkin": "slButtonGlossRed",
        "height": "100%",
        "id": "btnNext",
        "isVisible": true,
        "left": "300dp",
        "onClick": AS_Button_dd7d44ce53c147e78c89c967abb8e3fb,
        "skin": "CopyslButtonGlossBlue0f48950dfa06648",
        "text": ">",
        "top": "8dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxTitle.add(lblTitle, btnNext);
    frmTwo.add(FlxCon, btnLogout, flxTitle);
};

function frmTwoGlobals() {
    frmTwo = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTwo,
        "enabledForIdleTimeout": false,
        "id": "frmTwo",
        "init": AS_Form_438a2fe69c794d78a34b1975516535c4,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm056e00e73728c43"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
};