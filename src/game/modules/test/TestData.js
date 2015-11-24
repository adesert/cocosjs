

var TestData = function  () {
	
}

TestData.getInstance = function  () {
	if(!this.instance){
		this.instance = new TestData();
	}
	return this.instance;
}

TestData.prototype.setObj =  function  (obj) {
	
}
