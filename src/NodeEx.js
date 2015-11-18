

var node_touchEvent = function (node,target,beganfn,movefn,endfn,cancelfn)
{
	node.setTouchEnabled(true);
	
	node.onTouchBegan = function(touch, event){
		if(target[beganfn]){
			target[beganfn](touch, event);
		}
		return true;
	}

	node.onTouchMoved = function(touch, event){
		if(target[movefn]){
			target[movefn](touch, event);
		}
		return true;
	}

	node.onTouchEnded = function(touch, event){
		if(target[endfn]){
			target[endfn](touch, event);
		}
		return true;
	}

	node.onTouchCancelled = function(touch, event){
		if(target[cancelfn]){
			target[cancelfn](touch, event);
		}
		return true;
	}
}