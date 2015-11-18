
var BaseManager = {

	ctor:function()
	{
		this.init();
	},
	init:function()
	{
		this.dict = {};
	},
	registerFn:function(key,this,func)
	{
		this.dict[key] = func;
	},
	applyFn:function(key)
	{
	},
	unRegisterFn:function(key)
	{
	},
};