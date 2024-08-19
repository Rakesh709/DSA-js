class Node{
    constructor(value){
        this.value= value;
        this.next= null
    }
}

// const node1 = new Node('5')
// console.log(node1);



class LinkedList{
    constructor(value){
      //create a new node 
      const newNode = new Node(value);
      this.head = newNode;
      this.tail= this.head;
      this.length =1
    }

    push(value){
        //create node 
        //add at the end 
        const newNode = new Node(value);
        if(!this.head){
            this.head= newNode;
            this.tail= this.head;
        }else{
            this.tail.next= newNode;
            this.tail = newNode
        }
        this.length++
        //console.log(this)
        return this
        
    }


}

const linkedlistOne = new LinkedList(7)
linkedlistOne.push(4)
console.log(linkedlistOne);

