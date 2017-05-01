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