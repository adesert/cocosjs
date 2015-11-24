
require("config.js");
require("game.js");
require("game_hook.js");
require("global.js");
require("global_define.js");
require("module_consts.js");
require("NodeEx.js");
require("tools/CommonFunc.js");
require("tools/MathUtil.js");
require("tools/TimeUtil.js");
require("tools/Base64.js");
require("protobuf/ProtobufManager.js");
require("network/http/HttpManager.js");
require("network/socket/SocketManager.js");
require("network/socket/WebSocketManager.js");
require("ex_framework/functions.js");
require("ex_framework/init.js");
require("ex_framework/scheduler.js");
require("game/base/BaseData.js");
require("game/base/BaseLayer.js");
require("game/base/lan_tool.js");

require("game/combat/combat_op.js");
require("game/creature/machine/ai/AIFactory.js");
require("game/creature/machine/ai/BossAI.js");
require("game/creature/machine/ai/IAI.js");
require("game/creature/machine/ai/MonsterAI1.js");
require("game/creature/machine/ai/PlayerAI.js");
require("game/creature/machine/ai/PlayerAI.js");
require("game/creature/machine/state/DieState.js");
require("game/creature/machine/state/HurtState.js");
require("game/creature/machine/state/IState.js");
require("game/creature/machine/state/MoveState.js");
require("game/creature/machine/state/StandState.js");
require("game/creature/machine/BaseEffect.js");
require("game/creature/machine/BaseObject.js");
require("game/creature/machine/Boss.js");
require("game/creature/machine/Monster.js");
require("game/creature/machine/Player.js");
require("game/creature/machine/Vitro.js");
require("game/manager/AIManager.js");
require("game/manager/BaseManager.js");
require("game/manager/DataManager.js");
require("game/manager/EffectManager.js");
require("game/manager/FlyWordManager.js");
require("game/manager/FrameSpriteCacheManager.js");
require("game/manager/LocalManager.js");
require("game/manager/ObjectManager.js");
require("game/manager/PathManager.js");
require("game/manager/PopWindowManager.js");
require("game/manager/SoundManager.js");
require("game/map/CameraManager.js");
require("game/map/MapManager.js");
require("game/map/TileMap.js");
require("game/platform/android/AndroidManager.js");
require("game/platform/ios/IOSManager.js");
require("game/platform/talkingdata/TalkingDataManager.js");
require("game/platform/umeng/UMengManager.js");
require("game/platform/web/WebManager.js");
require("game/platform/PlatformManager.js");
require("game/spine/BaseSpine.js");
require("game/uicenter/main_layer/UICenterLayer.js");
require("game/uicenter/UICenterManager.js");

require("game/modules/loading/HttpLoadingLayer.js");
require("game/modules/loading/LoadingManager.js");
require("game/modules/loading/LoadingWnd.js");
require("game/modules/test/TestManager.js");
require("game/modules/test/TestUI.js");



cc.game.onStart = function(){
    // Pass true to enable retina display, disabled by default to improve performance
    cc.view.enableRetina(false);
    // Adjust viewport meta
    cc.view.adjustViewPort(true);
    // Setup the resolution policy and design resolution size
    // cc.view.setDesignResolutionSize(800, 450, cc.ResolutionPolicy.SHOW_ALL);
    // The game will be resized when browser size change
    cc.view.resizeWithBrowserSize(true);

    cc.sys.garbageCollect();

    game.update();
};
cc.game.run();

