
var game = new Game();

function Game () {

	update:function()
	{
		var hooker = new game_hook();
		hooker.on_update()
    	hooker.on_enterGame()

    	global.sceneMgr:enterGame()
	}
}


