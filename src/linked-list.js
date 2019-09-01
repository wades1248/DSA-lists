class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}
class LinkedList{
    constructor(){
        this.head= null
    }
    insertFirst(item){
        this.head = new _Node(item, this.head)
    }
    insertLast(item){
        if(this.head === null){
            this.insertFirst(item)
        }
        else{
            let tempNode= this.head
            while(tempNode.next !== null ){
                tempNode = tempNode.next
            }
            tempNode.next = new _Node(item, null)
        }
    }
    insertBefore(item, beforeNode){
        let currNode = this.head
        if(!this.head){
            return null
        }
        while(currNode.next.value !== beforeNode){
            if(currNode.next === null){
                return null
            }
            else{
                currNode = currNode.next
            }
        }
        let tempNode = currNode
        currNode.next =new _Node(item, tempNode.next )
    }
    insertAfter(item, afterItem){
        let currNode = this.head
        if(!this.head){
            return null
        }
        while(currNode.value !== afterItem){
            if(currNode.next === null){
                return null
            }else{
                currNode = currNode.next
            }
        }
        let tempNode = currNode
        currNode.next = new _Node(item, tempNode.next)
    }
    insertAt(item, index){
        let currNode = this.head
        let listIndex = 0
        if(!this.head){
            return null
        }
        while(listIndex !== index -1){
            if(currNode.next === null){
                return null
            }
            else{
                currNode = currNode.next
                listIndex ++
            }
        }
        let tempNode = currNode
        currNode.next = new _Node(item, tempNode.next)
    }
    find(item){
        let currNode = this.head
        if(!this.head){
            return null
        }
        while( currNode.value !== item){
            if(currNode.next === null){
                return null
            }
            else{
                currNode = currNode.next
            }
        }
        return currNode
    }
    findPrevious(item){
        let currNode = this.head
        if(!this.head){
            return null
        }
        while( currNode.next.value !== item){
            if(currNode.next === null){
                return null
            }
            else{
                currNode = currNode.next
            }
        }
        return currNode.value
    }
    findLast(){
        let currNode = this.head
        if(!this.head){
            return null
        }
        while( currNode.next !== null){
                currNode = currNode.next
        }
        return currNode.value
    }
    size(){
        let currNode = this.head
        let size = 1 
        if(!this.head){
            return null
        }
        while(currNode.next !== null){
            size = (size +1)
            currNode = currNode.next
        }
        return size
    }
    display(){
        let currNode = this.head
        let display = ''
        if(!this.head){
            return null
        }
        while(currNode !== null){
            display = display.concat(currNode.value+', ')
            currNode = currNode.next
        }
        return display
    }
    remove(item){
        if(!this.head){
            return null
        }
        if(this.head.value === item){
            this.head = this.head.next
            return;
        }
        let currNode = this.head
        let  prevNode = this.head
        while((currNode !== null) && (currNode.value !== item)){
            prevNode = currNode
            currNode = currNode.next
        }
        if(currNode === null){
            console.log('Item not Found')
            return;
        }
        prevNode.next = currNode.next
    }
}
module.exports = {_Node, LinkedList}
