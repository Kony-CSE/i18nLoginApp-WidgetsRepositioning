def = [
    [0, "Select any Language"]
];

function getCurrentLocale() {
    try {
        currentLocales = kony.i18n.getCurrentLocale();
        if (currentLocales === "en_IN") {
            frmHome.loginId.centerX = "20%";
            frmHome.pass.centerX = "20%";
            frmHome.pass.centerY = "40%";
            frmHome.txtBox1.centerX = "70%";
            frmHome.txtBox2.centerX = "70%";
            frmHome.btnLog.centerX = "50%"
            frmHome.lblTitle.centerX = "50%";
            frmHome.lblTerms.centerX = "50%";
            frmHome.txtBox1.contentAlignment = constants.CONTENT_ALIGN_MIDDLE_LEFT;
            frmHome.txtBox2.contentAlignment = constants.CONTENT_ALIGN_MIDDLE_LEFT;
            frmHome.btnLog.contentAlignment = constants.CONTENT_ALIGN_TOP_CENTER;
            frmHome.lblTitle.contentAlignment = constants.CONTENT_ALIGN_CENTER;
            frmTwo.lblTitle.centerX = "50%";
            frmTwo.lblTitle.contentAlignment = constants.CONTENT_ALIGN_CENTER;
        } else {
            frmHome.loginId.centerX = "80%";
            frmHome.pass.centerX = "80%";
            frmHome.pass.centerY = "40%";
            frmHome.txtBox1.centerX = "30%";
            frmHome.txtBox2.centerX = "30%";
            frmHome.lblTitle.centerX = "50%";
            frmHome.txtBox1.contentAlignment = constants.CONTENT_ALIGN_TOP_RIGHT;
            frmHome.txtBox1.contentAlignment = constants.CONTENT_ALIGN_TOP_RIGHT;
            frmHome.txtBox2.contentAlignment = constants.CONTENT_ALIGN_TOP_RIGHT;
            frmHome.lblTitle.contentAlignment = constants.CONTENT_ALIGN_CENTER;
            frmTwo.lblTitle.centerX = "50%";
            frmTwo.lblTitle.contentAlignment = constants.CONTENT_ALIGN_CENTER;
        }
        //alert("Language has been set to:"+currentLocales); 
    } catch (i18nError) {
        alert("Exception While getting currentLocale  : " + i18nError);
    }
}

function getSelect() {
    sele = frmTwo.lstBox.selectedKey;
    if (sele === null) alert("please select any language");
    else {
        frmTwo.lstBox.placeholder = sele;
        currentLocales = sele;
        def = frmTwo.lstBox.selectedKeyValues;
        kony.i18n.setCurrentLocaleAsync(sele, onsuccesscallback, onfailurecallback);
    }

    function onsuccesscallback(old, newer) {
        //alert("The old one is "+old+" the new one is "+newer);
        frmTwo.destroy();
        //   if(currentLocales=="en_IN")
        //     frmTwo.lblTwo.contentAlignment=constants.CONTENT_ALIGN_TOP_LEFT;
        //   else
        //     frmTwo.lblTwo.contentAlignment=constants.CONTENT_ALIGN_TOP_RIGHT;
        frmTwo.show();
    }

    function onfailurecallback(errcode, errmsg) {
        //alert(" "+errcode+" "+errmsg);
    }
}

function back() {
    frmHome.destroy();
    frmHome.show();
}