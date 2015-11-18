
var global = new Global();

function Global () {
	this.proto = null;
	this.sceneMgr = null;
	this.httpMgr = null;
	this.timeUtil = null;
	this.mathUtil = null;
	this.commonFunc = null;
	this.pathMgr = null;
	this.mapMgr = null;
	this.uicenterMgr = null;
	this.localMgr = null;
	this.platformMgr = null;
	this.flyWordMgr = null;
	this.popWndMgr = null;
	this.objMgr = null;
	this.effectMgr = null;
	this.soundMgr = null;
	this.dataMgr = null;
	this.AIMgr = null;
	// this.currentPlayer = null;
	this.cameraMgr = null;
	this.frameCacheMgr = null;
	this.loadingMgr = null;

	this.initBase = function()
	{
		this.sceneMgr = new GlobalSceneManager();
		this.httpMgr = new HttpManager();
		this.timeUtil = new TimeUtil();
		this.mathUtil = new MathUtil();
		this.commonFunc = new CommonFunc();
		this.pathMgr  = new PathManager();
		this.mapMgr = new MapManager();
		this.uicenterMgr = new UICenterManager();
		this.localMgr = new LocalManager();
		this.platformMgr = new PlatformManager();
		this.flyWordMgr = new FlyWordManager();
		this.popWndMgr = new PopWindowManager();
		this.objMgr = new ObjectManager();
		this.effectMgr = new EffectManager();
		this.soundMgr = new SoundManager();
		this.dataMgr = new DataManager();
		this.AIMgr = new AIManager();
		this.cameraMgr = new CameraManager();
		this.frameCacheMgr = new FrameSpriteCacheManager();
	}

	this.initModules = function()
	{
		this.testMgr =  new TestManager();
		this.loadingMgr = new LoadingManager();
	}
}



