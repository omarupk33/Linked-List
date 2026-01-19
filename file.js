class node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedList{
    constructer(){
        this.head = null
    }

    theHead(){
        return this.head
    }

    append(value){
        let new_node = new node(value)
        if (!this.head){
        this.head = new_node
        return
        }
        let tailNode = this.tail()
        tailNode.next = new_node
    }

    prepend(value){
        const new_node = new node(value)        
        if(!this.head){
        this.head = new_node
        return
        }
        
        let first_element = this.head

        this.head = new_node
        new_node.next = first_element
    }

    size(){
        let count = 0
        if(!this.head){
            return undefined
        }
        let tmp = this.head
        while(tmp){
            count+=1
            tmp = tmp.next 
        }
        return count
    }

    tail(){
        if(!this.head){
            return undefined
        }

        let tmp = this.head
        while(tmp && tmp.next){
            tmp = tmp.next
        }
        return tmp
    }
    at(index){
        return
    }
    pop(){
        if(!this.head){
            return undefined
        }

        const popHead = this.head
        this.head = this.head.next

        return popHead
    }

    contains(value){
        if(!this.head){
            return undefined
        }
        let tmp = this.head
        while(tmp){
            if(tmp.value === value){
                return true
            }
            tmp = tmp.next
        }

        return false
    }

    findIndex(value){
        let index = 0 
        if(!this.head){
         return undefined
        }
        let tmp = this.head
        while(tmp){
            if(tmp.value === value){
                return index
            }
            index+=1
            tmp = tmp.next
        }
        return -1
    }

    toString(){
        let addToString = ''
        if(!this.head){
         return ''
        }
        let tmp = this.head
        while(tmp){
            addToString+= `( ${tmp.value} )-> `
            tmp = tmp.next
        }
        addToString+= 'null'
    
    return addToString
    }
    insertAt(index, ...values){
        if(!this.head){
            return undefined
        }
        let tmp = this.head
        
    }
    removeAt(index){
        if(!this.head){
            return undefined
        }
        let tmp = this.head
        let prev = null
        while(tmp){
            if()
        }
    }
}

let linked_list = new linkedList()