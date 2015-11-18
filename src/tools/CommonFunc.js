
var CommonFunc = function(){

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
    return frame;
}