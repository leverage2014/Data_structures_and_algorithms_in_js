module.exports = function Queue(){
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.isEmpty = isEmpty;
    this.length = length;
}

function enqueue(element){
	this.dataStore.push(element);
}

function dequeue(){
	return this.dataStore.shift();
}

function front(){
	return this.dataStore[0];
}

function length(){
	return this.dataStore.length;
}

function back(){
	return this.dataStore[this.dataStore.length - 1];
}

function isEmpty(){
	return this.dataStore.length===0? true: false;
}