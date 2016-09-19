module.exports = function BinarySearchTree(){
	this.root = null;
	this.insert = insert;
	this.inOrder = inOrder;
	this.inOrderHelper = inOrderHelper;

	this.preOrder = preOrder;
	this.preOrderHelper = preOrderHelper;

	this.postOrder = postOrder;
	this.postOrderHelper = postOrderHelper;

    this.getMin = getMin;
    this.getMax = getMax;

    this.find = find;
}

function getMin(){
	var current = this.root;
	while( !(current.left == null) ){
		current = current.left;
	}
	return current.data;
}

function getMax(){
	var current = this.root;
	while( !(current.right == null) ){
		current = current.right;
	}
	return current.data;
}

function find(data){
    var current = this.root;
    while( current.data != data ){
    	if( data < current.data ){
    		current = current.left;
    	} else {
    		current = current.right;
    	}

    	if(current == null){
    		return null;
    	}
    }
    return current;
}


function insert(data){
    var n = new Node(data, null, null);
    if(this.root == null){
    	this.root = n;
    }else{
    	var current = this.root;
    	var parent;
    	while(true){
    		parent = current;
    		if(data < current.data){
    			current = current.left;
    			if(current == null){
    				parent.left = n;
    				break;
    			}
    		}else{
    			current = current.right;
    			if(current == null){
    				parent.right = n;
    				break;
    			}
    		}
    	}
    }
}

function inOrder(node){
   var res = [];
   this.inOrderHelper(node, res);
   return res;
}

function inOrderHelper(node, res){
   if( !(node == null) ){
   	  this.inOrderHelper(node.left, res);
      res.push(node.data);
      this.inOrderHelper(node.right, res);
   }
}

function preOrder(node){
   var res = [];
   this.preOrderHelper(node, res);
   return res;
}

function preOrderHelper(node, res){
   if( !(node == null) ){
      res.push(node.data);
   	  this.preOrderHelper(node.left, res);
      this.preOrderHelper(node.right, res);
   }
}

function postOrder(node){
   var res = [];
   this.postOrderHelper(node, res);
   return res;
}

function postOrderHelper(node, res){
   if( !(node == null) ){
   	  this.postOrderHelper(node.left, res);
      this.postOrderHelper(node.right, res);
      res.push(node.data);
   }
}

function Node(data, left, right){
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = show;
}

function show(){
	return this.data;
}