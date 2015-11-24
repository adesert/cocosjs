
var CommonFunc = function(){
	this.plistObject = new Object();
}

CommonFunc.prototype.getParticleSystem(str)
{
	var particle = cc.ParticleSystem.create(str);
    particle.setAutoRemoveOnFinish(true);
    return particle;
}

CommonFunc.prototype.getSpriteFrame = function (url)
{
    var cache = cc.SpriteFrameCache.getInstance();
    var frame = cache.getSpriteFrame(url);
     cc.log('replaceFrame#' + JSON.stringify(frame));
    return frame;
}

CommonFunc.prototype.getSpritePlist = function (url)
{
    //cc.log("---------------getSpritePlist:"+url);
    var frame = this.getSpriteFrame(url);
    var sprite = undefined;
    if(frame){
        sprite = cc.Sprite.createWithSpriteFrame(frame);
    }else{
        sprite = cc.Sprite.create(url);
    }

    return sprite ;
}

// 加载ccb
CommonFunc.prototype.loadCCB = function(url)
{
	var scene = cc.BuilderReader.load(url);
	// this.txtTF = this.scene.controller.txtTF;
	return scene;
}

/////////////////////////////////////////////////

CommonFunc.prototype.addrameCachePlist = function (picName,pixelFormat)
{
    if (picName == null)
        return;
    if (picName.indexOf(".png") != -1)
        picName = picName.substr(0, picName.indexOf(".png"));

    var extension = ".png";
    var platform = cc.Application.getInstance().getTargetPlatform();
    if (!this.plistObject[picName]) {
        var cache = cc.SpriteFrameCache.getInstance();
        cache.addSpriteFrames(picName+".plist", picName+extension);
        this.plistObject[picName] = picName+extension;
    }
}

CommonFunc.prototype.removeCachePlist = function (picName,_extension)
{
    if(picName == null)return;
    if(picName.indexOf(".png") != -1)picName = picName.substr(0,picName.indexOf(".png"));
    var extension = ".png";
    // var platform = cc.Application.getInstance().getTargetPlatform();
    var texture = cc.TextureCache.getInstance().textureForKey(picName+extension);
    cc.log("----removeCachePlist-----removeTexture:"+picName);
    if(texture)cc.TextureCache.getInstance().removeTexture(texture);
    cc.TextureCache.getInstance().removeTextureForKey(picName+extension);
    if(this.plistObject[picName]){
        var cache = cc.SpriteFrameCache.getInstance();
        cache.removeSpriteFramesFromFile(picName+".plist");
        this.plistObject[picName] = undefined;
        delete this.plistObject[picName]
    }
}

CommonFunc.prototype.removeAllCachePlist = function ()
{
    var cache = cc.SpriteFrameCache.getInstance();
    cache.removeSpriteFrames();
    cc.TextureCache.getInstance().removeAllTextures();
//    cc.TextureCache.getInstance().removeUnusedTextures();
    this.plistObject = new Object();
}


CommonFunc.prototype.removeTouches = function (layer)
{
    layer.setTouchMode(false)
    layer.setTouchEnabled(false)
//    cc.unregisterTouchDelegate(this);//去掉
}

//监听触摸
CommonFunc.prototype.addTouch = function (layer)
{
    cc.log("CommonFunc----->addTouch:"+layer);
    var target = this;
    if(layer.rootNode){
        layer = layer.rootNode;
    }
    layer.setTouchEnabled(true);
    layer.onTouchBegan = function (touch, event)
    {
        var target = this;
        if(this.controller){
            target = this.controller;
        }
        if(target.onTouchBegan){
            target.onTouchBegan( touch, event)
        }
        return true;
    }
    layer.onTouchEnded = function (touch, event)
    {
        var target = this;
        if(this.controller){
            target = this.controller;
        }
        if(target.onTouchEnded){
            target.onTouchEnded( touch, event)
        }
        return true;
    }
    layer.onTouchMoved = function (touch, event)
    {
        var target = this;
        if(this.controller){
            target = this.controller;
        }
        if(target.onTouchMoved){
            target.onTouchMoved( touch, event)
        }
        return true;
    }
    layer.onTouchCancelled = function (touch, event)
    {
        var target = this;
        if(this.controller){
            target = this.controller;
        }
        if(target.onTouchCancelled){
            target.onTouchCancelled( touch, event)
        }
        return true;
    }
}


/****************************多点触摸****************************/
//监听触摸
CommonFunc.prototype.addTouches = function (layer)
{
    cc.log("CommonFunc----->addTouches:"+layer);
    var target = this;
    if(layer.rootNode){
        layer = layer.rootNode;
    }
//    layer.setTouchEnabled(true);
    layer.onTouchesBegan = function( touch, event) {
        var target = this;
        if(this.controller){
            target = this.controller;
        }
        if(target.onTouchesBegan){
            target.onTouchesBegan( touch, event)
        }
        return true;
    };
    layer.onTouchesEnded = function( touch, event) {
//        cc.log("-----onTouchEnded")
        var target = this;
        if(this.controller){
            target = this.controller;
        }
        if(target.onTouchesEnded){
            target.onTouchesEnded( touch, event)
        }
        return true;
    };
    layer.onTouchesMoved = function( touch, event) {
//        cc.log("-----onTouchMoved")
        var target = this;
        if(this.controller){
            target = this.controller;
        }
        if(target.onTouchesMoved){
            target.onTouchesMoved( touch, event)
        }
        return true;
    };
    layer.onTouchesCancelled = function( touch, event)
    {
        var target = this;
        if(this.controller){
            target = this.controller;
        }
        if(target.onTouchesCancelled){
            target.onTouchesCancelled( touch, event)
        }
        return true;
    }
}


//是否可以触发了
CommonFunc.prototype.onTouchesHit = function (touch,list)
{
    var getPoint = touch.getLocation();
    var lastTarget = null;
    for (var i = 0; i < list.length; i++) {
        var target = list[i];
        if(target && target.isVisible() && target.getParent()){
            var pos = target.getPosition();
            var p = target.getParent().convertToWorldSpace(pos);
            var size = target.getContentSize();
            var anchorPoint = target.getAnchorPoint();
            var op = cc.p(0,0);
            if(target._op){
                op = target._op;
            }
            var sX = Math.abs(target.getScaleX());
            var sY = Math.abs(target.getScaleY());
            var Vx = p.x - size.width * anchorPoint.x * sX;
            var Vy = p.y - size.height * anchorPoint.y * sY;

            var myRect = cc.rect(Vx-op.x, Vy-op.y, (size.width+2*op.x) * sX, (size.height+2*op.y) * sY);

//            var myRect = cc.rect(Vx, Vy, size.width, size.height);
//            cc.log("onTouchesHit--- target:"+JSON.stringify(myRect));
//            cc.log("onTouchesHit--getPoint:"+JSON.stringify(getPoint));
            if (cc.rectContainsPoint(myRect, getPoint)) {
                lastTarget = target;
                break;
            }
        }

    }
    return lastTarget;
}

CommonFunc.prototype.getTimes = function (value)
{
    var shi = parseInt(value / 3600);
    var fen = parseInt((value/60) % 60);
    var miao = value%60;

    return this.getTimesString(shi)+":"+ this.getTimesString(fen)+":"+this.getTimesString(miao)
}
CommonFunc.prototype.getTimesString = function (value)
{
    if(parseInt(value)<10){
        value = "0"+value;
    }
    return value;
}

//时间差
CommonFunc.prototype.getDateTimeStamp = function (dateTimeStamp)
{
    var seconds = 1000;
    var minute = seconds * 60
    var hour = minute * 60;
    var day = hour * 24;
    var halfamonth = day * 15;
    var month = day * 30;

    var now = new Date().getTime();
    var diffValue = now - dateTimeStamp;
    if(diffValue < 0){
        cc.log("结束日期不能小于开始日期！");
    }
    var monthC = diffValue/month;
    var weekC = diffValue/(7*day);
    var dayC = diffValue/day;
    var hourC = diffValue/hour;
    var minC = diffValue/minute;
    var secondsC =diffValue/seconds;
    var result = "";
    if(monthC>=1){
        result = parseInt(monthC) + "个月前";
    }
    else if(weekC>=1){
        result= parseInt(weekC) + "个星期前";
    }
    else if(dayC>=1){
        result= parseInt(dayC) +"天前";
    }
    else if(hourC>=1){
        result= parseInt(hourC) +"个小时前";
    }
    else if(minC>=1){
        result= parseInt(minC) +"分钟前";
    }
    else  {
        result = parseInt(secondsC) +"秒前";
//        result="刚刚";
    }
    return result
}


///////////////////////////////////////////////


// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Date.prototype.Format = function(fmt)
{ //author: meizz
    var o = {
        "M+" : this.getMonth()+1,                 //月份
        "d+" : this.getDate(),                    //日
        "h+" : this.getHours(),                   //小时
        "m+" : this.getMinutes(),                 //分
        "s+" : this.getSeconds(),                 //秒
        "q+" : Math.floor((this.getMonth()+3)/3), //季度
        "S"  : this.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt))
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(var k in o)
        if(new RegExp("("+ k +")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    return fmt;
}

CommonFunc.prototype.jsonParse = function (url)
{
    var data = cc.FileUtils.getInstance().getStringFromFile(url);
    return JSON.parse(data);
}
CommonFunc.prototype.jsonStringify= function (value)
{
    var jsons = JSON.stringify(value);
    return jsons;
}


