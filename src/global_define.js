
// -- 生物实体属性
// --TODO 人物属性键值定义
// -- 1~5000 	int
// -- 5000以上	string
var ATTR_DEFINE ={
	this.NAME = 10001,
	this.DESC = 10002,
	this.CCB = 10003,				//--ccb资源 <<
	this.COLLIDER_Y = 10004,		//--碰撞深度
	this.ICON = 10005,
	this.HALF_ICON = 10006,
	this.CLASS = 10007,			//	--职业
	this.MODEL_ID = 10008,		//	--模型表id
	this.ID = 10009,				//--人物id 本地生成的id
	this.SKILLS = 10010,			//-- 技能
	this.PARENT = 10011,			//--是把特效放到哪个层上面
	this.POS = 10012,				//-- {0,0}坐标
	this.TYPE = 10013,				//--生物类型 <<
	this.USE_SKILLS = 10014,		//-- 战斗的时候队长可使用的技能,已经激活的技能
	this.STARS = 10015,			//-- 星级
	this.TEAM = 10016,			//-- （1 为同一队伍）
	this.RANGE = 10017,			//-- 攻击距离 像素
	this.NORMAL_SKILLS = 10018,	//-- 普通攻击
	this.MOVE_SPEED = 10019,			//--移动速度
	this.isCaptain = 10020,			//-- 是否是队长（队长是属于英灵的）（0 不是队长，1是队长
	this.STAR = 10021,				//-- 星级
	this.SPEED = 10022,             //--移动速度
    this.HDX = 10023,               //-- 成长系数
    
    
  //  -//-skill_config
    this.SKILLID = 20000,        //-- 当前技能id
    this.SKILL_EFFECT = 20001,     // -- 当前技能ccb
    this.SKILL_ICON = 20002,        //-- 
    this.ACTION_NAME = 20003,       //-- 技能动作
    this.SKILL_TYPE = 20004,        //-- 技能类型
    this.ATTACK_RANGE = 20005,      //-- 进攻距离
    this.SKILL_COLD_CD = 20006,     //-- 技能冷却时间
    this.SKILL_BEATTACK_EFFECT = 20008, //-- 被击特效
    this.AI_TYPE = 200009,               //-- AI 类型
    this.SKILL_ACTION_TYPE = 2000010,    //-- 技能动作类型
    this.SKILL_F_EFFECT = 2000011,       //-- 发射特效
    this.MODEL_ID_X = 2000012,            // -- 模型id
    
    //-- 武器配置
    this.WEAPON_ATTACK_VALUE = 3000,        // --攻击属性
    this.WEAPON_CRIT_VALUE = 3001,          // -- 暴击百分比
    this.WEAPON_ZI_DAN = 3002,              // -- 子弹数量
    this.WEAPON_SKILL_ID = 3003,            // -- 技能id
    
    //---- spine config key
    this.SPINE_JSON_STR = 3004,               //-- spine 的json 文件
    this.SPINE_ALAS_STR = 3005,               //-- spine 的 alas 文件
}
//--------------------生物体相关定义开始--------------------------
var CREATURE_TYPE = {
	this.PLAYER = 1,
	this.MONSTER = 2,					//--怪物
	this.BOSS = 3,						//--BOSS
	this.XIANJING = 4,                  // -- 陷阱
}

//--生物朝向
var DIRECTION = {
	this.LEFT = 1,
	this.RIGHT = 2,
}

//--生物动作时间轴名字(除此之外还有数量不固定的skill_形式的技能时间轴)
var CREATURE_ACTION_NAME = {
	this.STAND = "stand",	//--待机动作（循环）
	this.MOVE = "run",		//--移动动作（循环）
	this.ATTACK = "attack",     //-- 攻击
	this.HURT = "attacked",		//--被击动作
	this.DIE = "die",		//--死亡动作
	this.SKILL1 = "skill1", //-- 技能动作
}

//---- 攻击类型
var CREATURE_ATTACK_TYPE = {
    this.ATTACK = 1,     //-- 普通攻击
    this.SKILL = 2,      //-- 技能攻击
}

//--- 飞行特效常量
var VITRO_CONSTS_TYPE = {
    this.NO = 0,
    this.YES = 1,
}

//-- 状态机
var MACHINE_STATE_TYPE = {
    this.STAND = 1,
    this.MOVE = 2,
    this.ATTACK = 3,
    this.HURT = 4,
    this.DIE = 5,
    this.SKILL = 6,
}

//--- 移动方向
var CREATURE_MOVE_DIR = {
    this.RIGHT = 1,      //-- 右
    this.UP = 2,         //-- 上
    this.LEFT = 3,       //-- 左
    this.DOWN = 4,      // -- 下
}

//-------------------------------特效相关定义开始----------------------------------

var EFFECT_PARENT = {
	this.SLEF_DEFINE = 1,			//--自定义层
	this.BOTTOM_LAYER = 2,			//--底层特效层
	this.TOP_LAYER = 3,				//--顶层特效层
	this.OBJECT_BOTTOM = 4,			//--生物底层
	this.OBJECT_TOP = 5 				//--生物顶层
}

var EFFECT_STATE = {
	this.WAIT = 1,				//--等待播放
	this.READY = 2,				//--准备播放		
	this.RUNING = 3,				//--正在播放		 
	this.RUBBISH = 4				//--等待回收		
}

var EFFECT_CALLBACK = {
    this.BEGIN = 0,
    this.END = 1,
}

//-----------------------------------层类型定义开始--------------------------------------

var LAYER_TYPE = {
	this.LOGIN_LAYER = 1000,							//--登录,注册
	this.MAP_LAYER = 1001,							//--地图层
	this.DOWN_EFF_LAYER = 1003,						//--生物下层特效层
	this.THINGS_LAYER = 1004,						//--生物层
	this.UP_EFF_LAYER = 1005,						//--生物上层特效层（掉落等）
	this.TOUCH_LAYER = 1006,							//-- 触摸层（战斗摇杆控制）
	this.MAIN_UI_LAYER = 1007,						//--主UI层（主界面，战斗界面）
	this.WND_LAYER = 1008,							//--面板层
	this.MSG_LAYER = 1009,							//--消息层（HTTP请求层）
	this.LOADING_LAYER = 1010						//--LOADING层
}

var MAP_TYPE = {
    this.MAP_BG_LAYER = 1002,                       //-- 地图背景层
    this.DOWN_EFF_LAYER = 1003,                      //--生物下层特效层
    this.THINGS_LAYER = 1004,                        //--生物层
    this.UP_EFF_LAYER = 1005,                        //--生物上层特效层（掉落等）
}

//--英灵颜色（根据英灵星级而定）
var PLAYER_COLOR = {
    [1] = cc.c3b(255,255,255),      //--白
    [2] = cc.c3b(0,255,0),          //--绿
    [3] = cc.c3b(0,0,255),          //--蓝
    [4] = cc.c3b(138,43,226),         //  --紫
    [5] = cc.c3b(255,215,0)         //--金
}
