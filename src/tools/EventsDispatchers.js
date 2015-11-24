/**
 * Created with JetBrains WebStorm.
 * User: ynjin
 * Date: 13-11-16
 * Time: 上午10:50
 * To change this template use File | Settings | File Templates.
 */


var EventType = EventType || {};
EventType.EVENT_CHANGE = "EVENT_CHANGE";
EventType.EVENT_CD_CHANGE = "EVENT_CD_CHANGE";


var EventsDispatchers = cc.Node.extend
//var EventsDispatchers = cc.Class.extend
(
    {
//        callbacks:new Object(),
        /**
         * 注册监听
         * @param event_name  //监听名字
         * @param target     //回调对象
         * @param callback  //回调函数
         */
        addEventListener : function (event_name,target,callback)
        {
//             cc.log("typeEvent:"+this.typeEvent)
//             cc.log("callbacks:"+this.callbacks)
            this.callbacks = this.callbacks || new Object();
            this.callbacks[event_name] = this.callbacks[event_name] || new Object();
            this.callbacks[event_name][callback] = this.callbacks[event_name][callback] || new Array();
            var idx = this.callbacks[event_name][callback].indexOf(target);
            if(idx != -1){
                cc.log("已经拥有监听了   不需要在监听了"+event_name);
                return;
            }
//            cc.log("++++++addEventListeners:"+event_name);
            this.callbacks[event_name][callback].push(target);
        },
        /**
         * 删除监听
         * @param event_name  //监听名字
         * @param target     //回调对象
         * @param callback  //回调函数
         */
        removeEventListener : function (event_name,target,callback)
        {
            this.callbacks = this.callbacks || new Object();
            this.callbacks[event_name] = this.callbacks[event_name] || new Object();
            this.callbacks[event_name][callback] = this.callbacks[event_name][callback] || new Array();
            var idx = this.callbacks[event_name][callback].indexOf(target);
            cc.log("删除 监听:"+event_name+"   callback:"+callback);
            if(idx == -1){
                cc.log("没有这个回调函数的监听:"+event_name+"   callback:"+callback);
                return;
            }
            this.callbacks[event_name][callback].splice(idx, 1);
            if(this.callbacks[event_name][callback].length == 0){
                this.callbacks[event_name][callback] = null;
                delete this.callbacks[event_name][callback]
            }
        },
        removeEventAllListener:function (event_name,target)
        {
            for(var key in this.callbacks[event_name]){
                var idx = this.callbacks[event_name][key].indexOf(target);
                if(idx != -1){
                    this.callbacks[event_name][key].splice(idx, 1);
                    if(this.callbacks[event_name][key].length == 0){
                        this.callbacks[event_name][key] = null;
                        delete this.callbacks[event_name][key]
                    }
                }
            }
        },
        dispatchEvents : function ( event_name) {
            if(!this.callbacks)return;
//            this.callbacks = this.callbacks|| new Object();
            var obj = this.callbacks[event_name];
            if (typeof obj == 'undefined') return;
            for(var ty in obj){
                 var chain = obj[ty];
                for (var i = 0; i < chain.length; i++) {
                    if(chain[i]){
//                        if(event_name != EventType.EVENT_CD_CHANGE)cc.log('dispatchEvents:'+ty+'  event_name:'+event_name);
                        if(chain[i][ty]){
                            chain[i][ty](this);
                        }
//                        try{
//                            if(chain[i][ty]){
//                                chain[i][ty](this);
//                            }
//                        }catch(error){
//                            cc.log("error-----没有这个回调函数--event_name:"+event_name+" callback:"+ty);
//                            this.removeEventListener(event_name,chain[i],ty);
//                        }
                    }
                }
            }
        }
    }
)
EventsDispatchers.prototype.setData = function (obj)
{
    if(!obj)return;
    for(var ty in obj){
//        cc.log("属性更改完毕:"+this.typeEvent+"  ty:"+ty+"   ==="+(this[ty]===undefined));
//        if(this[ty] === undefined) {
//        }else{
////            cc.log("属性更改完毕:"+this.typeEvent+"  ty:"+ty+"   ==="+this[ty]);
//            if(typeof(this[ty]) === "function"){
//                this[ty](obj[ty])
//            }else{
//                this[ty] = obj[ty];
//            }
//        }
        if(typeof(this[ty]) === "function"){
            this[ty](obj[ty])
        }else{
            this[ty] = obj[ty];
        }
    }

    if(typeof(this.setObj) === "function"){
        this.setObj(obj);
    }
    cc.log("属性更改完毕:"+this.typeEvent);
    if(this.onDataChange && typeof (this.onDataChange) == "function"){

        this.onDataChange();
    }
    this.dispatchEvents(EventType.EVENT_CHANGE);
}
// 军团战数据
EventsDispatchers.prototype.setWarData = function (obj)
{
    if(!obj)return;
    for(var ty in obj){
        if(typeof(this[ty]) === "function"){
            this[ty](obj[ty])
        }else{
            this[ty] = obj[ty];
        }
    }

    if(typeof(this.setObj) === "function"){
        this.setObj(obj);
    }
    cc.log("属性更改完毕:"+this.typeEvent);
    if(this.onDataChange && typeof (this.onDataChange) == "function"){

        this.onDataChange();
    }
    this.dispatchEvents(EventType.EVENT_CHANGE);
}