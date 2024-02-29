class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    const node = new ListNode(value);
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = node;
  }

  prepend(value) {
    const node = new ListNode(value);
    node.next = this.head;
    this.head = node;
  }

  size() {
    let temp = this.head;

    let count = 1;
    while (temp.next != null) {
      count++;
      temp = temp.next;
    }

    return count;
  }

  headValue() {
    let temp = this.head;
    return temp;
  }

  tailValue() {
    let temp = this.head;
    while (temp.next != null) {
      temp = temp.next;
    }

    return temp;
  }
  at(index) {
    let temp = this.head;

    let count = 1;
    if (index == 1) {
      return temp.data;
    }
    while (temp.next != null) {
      count++;
      temp = temp.next;
      while (index == count) {
        return temp.data;
      }
    }
  }
  pop() {
    if (this.size() == 1) {
      this.head = null;
      return LinkedList;
    }

    let temp = this.head;
    let newTail = temp;
    while (temp.next) {
      newTail = temp;
      temp = temp.next;
    }
    temp = newTail;
    temp.next = null;
  }

  contains(value) {
    let temp = this.head;
    let a = false
    console.log(temp)
    while(temp){
      if(temp.data == value){
        a = true
        return a
      }
      temp=  temp.next
    }
    return a
  }

  find(value){
    let index =0
    let findIndex = null
    let temp = this.head
    while(temp){
      if(temp.data != value){
        index++
      } else{
        findIndex = index
      }
      temp= temp.next
    }
    return findIndex
  }
  toStrings(){
    //while(this.head){
    //  let a = this.head
    //  console.log(JSON.stringify(a.data))
    //  this.head = this.head.next
    //}
    let temp = this.head;
        let string = '';
        while (temp) {
            string += `( ${temp.data}) ->`;
            if (temp.next === null) {
                string += 'null';
            }
            temp = temp.next;
        }
        console.log(string);
  }

}

let node1 = new ListNode(2);

const list = new LinkedList(node1);

list.append(5);
list.append(4);
list.append(6);
list.prepend(9);
console.log(list);
list.toStrings()

