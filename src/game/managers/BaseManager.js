
var BaseManager = cc.Node.extend {

	// this.dict = {};

	registerFn:function(key,func,target)
	{
		this.dict = this.dict || new Object();
		this.dict[key] = this.dict[key] || new Object();
		this.dict[key][func] = this.dict[key][func] || new Array();

		var idx = this.dict[key][func].indexOf(target);
		if(idx != -1){
			cc.log("已经拥有监听了   不需要在监听了"+key);
            return;
		}
		 this.dict[key][func].push(target);
	},

	applyFn:function(key)
	{
		if(!this.dict){
			return;
		}
		var obj = this.dict[key];
		if (typeof obj == 'undefined') return;
		for(var ty in obj){
			var n = obj[ty];
			for (var i = 0; i < n.length; i++) {
				if(n[i]){
					if(n[i][ty]){
						n[i][ty](this);
					}
				}
			}
		}

	},

	unRegisterFn:function(key,func,target)
	{
		this.dict = this.dict || new Object();
		this.dict[key] = this.dict[key] || new Object();
		this.dict[key][func] = this.dict[key][func] || new Array();
		var idx = this.dict[key][func].indexOf(target);
		cc.log("删除 监听:"+key+"   func:"+func);
        if(idx == -1){
            cc.log("没有这个回调函数的监听:"+key+"   func:"+func);
            return;
        }
        this.dict[event_name][callback].splice(idx, 1);
        if(this.dict[key][func].length == 0){
        	this.dict[key][func] = null;
        	delete this.dict[key][func];
        }
	},

	unRegisterAllFn:function(key,target)
	{
		for(var k in this.dict[key])
		{
			var idx = this.dict[key][k].indexOf(target);
			if(idx != -1){
				this.dict[key][k].splice(idx,1);
				if(this.dict[key][k].length == 0){
					this.dict[key][k]  = null;
					delete this.dict[key][k];
				}
			}
		}
	}

};