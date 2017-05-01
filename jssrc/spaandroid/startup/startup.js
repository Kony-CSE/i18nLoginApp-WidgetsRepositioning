//startup.js file
var appConfig = {
    appId: "I18nlogin",
    appName: "I18nlogin",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.34.63",
    serverPort: "80",
    secureServerPort: "443",
    isMFApp: false,
    eventTypes: ["FormEntry", "ServiceRequest", "Error", "Crash"],
    url: "http://kh9333.kitspl.com:8080/I18nlogin/MWServlet",
    secureurl: "http://kh9333.kitspl.com:8080/I18nlogin/MWServlet",
    middlewareContext: "I18nlogin"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    frmHomeGlobals();
    frmThreeGlobals();
    frmTwoGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        APILevel: 7200
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmHome.show();
        }
    });
};

function loadResources() {
    kony.theme.packagedthemes(
        ["default"]);
    globalhttpheaders = {};
    callAppMenu();
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        eventTypes: ["FormEntry", "ServiceRequest", "Error", "Crash"]
    }
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccessSDKCallBack() {
    spaAPM && spaAPM.startTracking();
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    kony.i18n.setDefaultLocaleAsync("en_IN", onSuccess, onFailure, null);
};