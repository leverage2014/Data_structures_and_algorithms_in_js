module.exports = function LList(){
	this.head = new Node('head');
	this.find = find;
	this.insert = insert;
	this.remove = remove;
	this.display = display;
	this.findPrevious = findPrevious;
}

function Node(element){
	this.element = element;
	this.next = null;
}

function find(item){
	var currNode = this.head;
	while(currNode.element != item){
		currNode = currNode.next;
	}
	return currNode;
}

function insert(newElement, item){
    var newNode = new Node(newElement);
    var current = this.find(item);
    
    newNode.next = current.next;
    current.next = newNode; 
}

function findPrevious(item){
   var currNode = this.head;
   while( !(currNode.next == null) && 
   	       (currNode.next.element != item)){
   	  currNode = currNode.next;
   }
   return currNode;
}

function remove(item){
	var prevNode = this.findPrevious(item);
	if(!(prevNode.next == null)){
		prevNode.next = prevNode.next.next;
	}
}

function display(){
	var str ="";
	var currNode = this.head;
	while(!(currNode.next == null)){
		str = str + currNode.next.element + ",";
		currNode = currNode.next;
	}

	return str==""?"":str.substring(0,str.length-1);
}