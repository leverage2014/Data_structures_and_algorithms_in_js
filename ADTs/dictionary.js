module.exports = function dictionary(){
	this.dataStore = new Array();
	this.add = add;
	this.find = find;
	this.remove = remove;
	this.showAll = showAll;
	this.size = size;
	this.count = 0;
	this.clear = clear;
}

function add(key, value){
	this.dataStore[key] = value;
	this.count++;
}

function find(key){
    return this.dataStore[key];
}

function remove(key){
	delete this.dataStore[key];
	this.count--;
}

function showAll(){
	var dict = "";
    for(var key in this.dataStore){
        dict = dict + key + "-->" + this.dataStore[key] +",";
    }

    return dict==""?"":dict.substring(0, dict.length-1);
}

function size(){
	return this.count;
}

function clear(){
	for(var key in this.dataStore){
		this.remove(key);
	}
}








