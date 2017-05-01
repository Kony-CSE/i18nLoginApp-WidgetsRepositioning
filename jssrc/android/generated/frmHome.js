function addWidgetsfrmHome() {
    frmHome.setDefaultUnit(kony.flex.DP);
    var FlexCont = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50.00%",
        "centerY": "55.28%",
        "clipBounds": true,
        "height": "470dp",
        "id": "FlexCont",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0d7c54efce9f049",
        "top": "108dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexCont.setDefaultUnit(kony.flex.DP);
    var loginId = new kony.ui.Label({
        "centerX": "20%",
        "centerY": "20%",
        "height": "40dp",
        "id": "loginId",
        "isVisible": true,
        "skin": "CopyslLabel07b210f800ea749",
        "text": kony.i18n.getLocalizedString("logId"),
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "35%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var pass = new kony.ui.Label({
        "centerX": "20%",
        "height": "10%",
        "id": "pass",
        "isVisible": true,
        "skin": "CopyslLabel073b2eede767044",
        "text": kony.i18n.getLocalizedString("pass"),
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "35%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var txtBox1 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "70%",
        "centerY": "20%",
        "height": "40dp",
        "id": "txtBox1",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Alex",
        "secureTextEntry": false,
        "skin": "CopyslTextBox07cff525152ab47",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "width": "60%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var txtBox2 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "70%",
        "centerY": "40%",
        "height": "40dp",
        "id": "txtBox2",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "1234",
        "secureTextEntry": true,
        "skin": "CopyslTextBox0b5e471be6e5f47",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "width": "60%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var btnLog = new kony.ui.Button({
        "centerX": "50.06%",
        "centerY": "76.60%",
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btnLog",
        "isVisible": true,
        "onClick": AS_Button_0f290b8991084ceea7527f0df3874a19,
        "skin": "CopyslButtonGlossBlue02e4b68e5fb5f4e",
        "text": kony.i18n.getLocalizedString("btnLog"),
        "top": "187dp",
        "width": "35%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblTerms = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "60%",
        "height": "10%",
        "id": "lblTerms",
        "isVisible": true,
        "left": "10dp",
        "skin": "CopyslLabel0550f72ee40ce47",
        "text": kony.i18n.getLocalizedString("terms"),
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "283dp",
        "width": "100%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexCont.add(loginId, pass, txtBox1, txtBox2, btnLog, lblTerms);
    var flxTitle = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "105dp",
        "id": "flxTitle",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "3dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxTitle.setDefaultUnit(kony.flex.DP);
    var lblTitle = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
        "id": "lblTitle",
        "isVisible": true,
        "skin": "CopyslLabel0a7b70f91b8b440",
        "text": "RTL BANK",
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
    flxTitle.add(lblTitle);
    frmHome.add(FlexCont, flxTitle);
};

function frmHomeGlobals() {
    frmHome = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHome,
        "enabledForIdleTimeout": false,
        "id": "frmHome",
        "init": AS_Form_42532b71160d4f608e6a18ce965aa3cb,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm098aa6584b83a4e"
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