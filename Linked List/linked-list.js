// what is f=going on uder the hood of ll.

// {
// 	head:{
// 		value:11,
// 		next:{
// 			value : 3,
// 			next :{
// 				value: 27,
// 				next: {
// 					value :4,
//     tail:---------->next :null
// 				}
// 			}
// 		}
// 	}
// }

//------------------Linked List Constructor---------------------------------
class Node{
	constructor(value){
		this.value= value
		this.next= null
	}
}



class LinkedList{
	constructor(value){
		//create a new node
		const newNode = new Node(value)
		this.head = newNode
		this.tail = this.head
		this.length = 1
	}
	push(value){
		//create a new node
		//add node to end
		const newNode = new Node(value)
		if(!this.head){
			this.head = newNode
			this.tail = newNode
		}else{
			this.tail.next = newNode
			this.tail = newNode
		}
		this.length++
		return this
		//because of the above item will return all the ll
		// return the LinkedList (from line 29)
	}
	unshift(value){
		//create new node
		//add node to biginning
	}
	inser(value){
		//create new node
		//insert node
	}
}

// create a new node is common, so that we can write new class 
//value:11,
// 		next:




//to create a new node  below method 

// const newNode = new Node(4) 

let myLinkedList = new LinkedList(7);

myLinkedList.push(4)

console.log(myLinkedList)