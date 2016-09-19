module.exports = function HashTable(){
	this.table = new Array(137);
	//this.simpleHash = simpleHash;
	this.betterHash = betterHash;
	this.showDistro = showDistro;
	this.put = put;
	this.get = get;
}

// function simpleHash(data){
// 	var total = 0;
// 	for(var i=0; i<data.length; i++){
// 		total += data.charCodeAt(i);
// 	}
// 	return total % this.table.length;
// }

function betterHash(string, arr){
	const H = 37;
	var total = 0;

	for(var i=0; i<string.length; i++){
		total += H * total + string.charCodeAt(i);
	}
	total = total % arr.length;
	return parseInt(total);
}

function put(data){
	//var pos = this.simpleHash(data);
	var pos = this.betterHash(data);
	this.table[pos] = data;
}

function get(key){
    return this.table[this.betterHash(key)];
}

function showDistro(){
	var str = "";
	for(var i=0; i<this.table.length; i++){
		if(this.table[i] != undefined){
            str += i+"-->"+this.table[i]+",";
		}
	}

	return str==""?"":str.substring(0, str.length-1);
}