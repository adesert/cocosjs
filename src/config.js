

// var visibleSize = cc.Director.getInstance().getVisibleSize();
// var visibleOrigin = cc.Director.getInstance().getVisibleOrigin();
// var.sceneSize = cc.Director.getInstance().getWinSizeInPixels();
 // var platform = cc.Application.getInstance().getTargetPlatform();
 

var winSize = cc.winSize;
var center_x = winSize.width / 2
var center_y = winSize.height / 2
var screen_w = winSize.width
var screen_h = winSize.height
var screen_left = 0
var screen_right = winSize.width
var screen_top = winSize.height
var screen_bottom = 0


var CONFIG_SCREEN_WIDTH = 1136
var CONFIG_SCREEN_HEIGHT = 640

cc.view.setDesignResolutionSize(CONFIG_SCREEN_WIDTH, CONFIG_SCREEN_HEIGHT, cc.ResolutionPolicy.SHOW_ALL);


var define_centerx = CONFIG_SCREEN_WIDTH/2
var define_centery = CONFIG_SCREEN_HEIGHT/2

var define_w = CONFIG_SCREEN_WIDTH
var define_h = CONFIG_SCREEN_HEIGHT
var define_left = 0
var define_right = CONFIG_SCREEN_WIDTH
var define_top = CONFIG_SCREEN_HEIGHT
var define_bottom = 0


// cc.sys.language     cc.LANGUAGE_CHINESE
// cc.sys.os  cc.sys.OS_IOS   cc.sys.OS_ANDROID    

var language = cc.sys.language;//c.Application:getInstance():getCurrentLanguage() --cc.LANGUAGE_ENGLISH
var platform = cc.sys.os;//cc.Application.getInstance().getTargetPlatform()


cc.log("language,platform--->"+language,platform);
cc.log("# CONFIG_SCREEN_WIDTH          = " + CONFIG_SCREEN_WIDTH);
cc.log("# CONFIG_SCREEN_HEIGHT         = " + CONFIG_SCREEN_HEIGHT);
cc.log("# screen_w                = " + screen_w);
cc.log("# screen_h               = " + screen_h);
cc.log("# center_x                   = " + center_x);
cc.log("# center_y                   = " + center_y);
cc.log("# screen_left                 = " + screen_left);
cc.log("# screen_right             = " + screen_right);
cc.log("# screen_top                 = " + screen_top);
cc.log("# screen_bottom             = " + screen_bottom);
cc.log("#");

