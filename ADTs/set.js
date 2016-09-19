module.exports = function Set(){
	this.dataStore = [];
	this.add = add;
	this.remove = remove;
	this.size = size;
	this.union = union;
	this.intersect = intersect;
	this.subsetOf = subsetOf;
	this.difference = difference;
	this.contains = contains;
	this.show = show;
}

function add(data){
	if(this.dataStore.indexOf(data) < 0){
		this.dataStore.push(data);
		return true;
	}else{
		return false;
	}
}

function remove(data){
	var pos = this.dataStore.indexOf(data);

	if(pos > -1){
		this.dataStore.splice(pos, 1);
		return true;
	}else{
		return false;
	}
}

function size(){
	return this.dataStore.length;
}

function union(otherSet){
   for(var i=0; i<otherSet.dataStore.length; i++){
   	   this.add(otherSet.dataStore[i]);
   }
   return this;
}

function intersect(otherSet){
    var result = [];

    for(var i=0; i<this.dataStore.length; i++){
    	if(otherSet.contains(this.dataStore[i])){
    		result.push(this.dataStore[i]);
    	}
    }

    this.dataStore = result;
    return this;
}

function subsetOf(otherSet){
    if(this.size() > otherSet.size()){
    	return false;
    }else{
    	for(var i=0; i<this.size(); i++){
    		if(!otherSet.contains(this.dataStore[i])){
    			return false;
    		}
    	}
    	return true;
    }
}

function difference(otherSet){
    var diff = [];

    if(this.size() != otherSet.size()){
    	var maxSizeSet = this.size()>otherSet.size()?this:otherSet;
       // console.log('max:'+maxSizeSet.show());

        var minSizeSet = this.size()>otherSet.size()?otherSet:this;
       // console.log('min:'+minSizeSet.show());

        for(var i=0; i<maxSizeSet.size(); i++){
	        if(!minSizeSet.contains(maxSizeSet.dataStore[i]) || i>minSizeSet.size()){
                diff.push(maxSizeSet.dataStore[i]);
	        }
        }
    }else{
    	for(var j=0; j<this.size(); j++){
	        if(!this.contains(otherSet.dataStore[j]) ){
                diff.push(otherSet.dataStore[j]);
	        }

	        if( !otherSet.contains(this.dataStore[j]) ){
                diff.push(this.dataStore[j]);
	        }
        }
    }

    this.dataStore = diff;
    return this;
}

function contains(data){
	if(this.dataStore.indexOf(data) > -1){
		return true;
	}else{
		return false;
	}
}

function show(){
	return this.dataStore;
}