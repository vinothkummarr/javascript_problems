class LinkedList {
  constructor(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next || null;
  }
}

class HashMap {
  constructor(value) {
    this.value = value;
    this.array = new Array();
  }
  hash(value) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < value.length; i++) {
      hashCode = primeNumber * hashCode + value.charCodeAt(i);
    }

    return hashCode;
  }
  set(value) {
    let hashCode = this.hash(value);
    let index = hashCode % 16;
    let already_found = this.array[index];
    const link = new LinkedList(hashCode, value);
    if (already_found) {
      let current = this.array[index];
      while (current.next != null) {
        current = current.next;
      }
      current.next = link;
      return this.array;
    }
    this.array[index] = link;
    return this.array;
  }

  get(key) {
    let aray = this.array;
    for (let i = 0; i <= 15; i++) {
      if (aray[i]) {
        let current = aray[i];
        while (current.next != null) {
          if (current.key == key) {
            console.log(current.value + " found");
          }
          current = current.next;
        }
        if (current.key == key) {
          console.log(current.value + " found");
        }
      }
    }
  }

  has(key) {
    let aray = this.array;
    let condition = false;
    for (let i = 0; i <= 15; i++) {
      if (aray[i]) {
        let current = aray[i];
        while (current.next != null) {
          if (current.key == key) {
            condition = true;
          }
          current = current.next;
        }
        if (current.key == key) {
          condition = true;
        }
      }
    }
    return condition;
  }

  remove(key) {
    let aray = this.array;
    let prev = aray;

    for (let i = 0; i <= 15; i++) {
      if (aray[i]) {
        let current = aray[i];
        if (current.key == key) {
          console.log(i);
          this.array.splice(i, 1);
        }
        while (current.next != null) {
          prev = current;
          current = current.next;
          if (current.key == key) {
            console.log("kedachitu");

            prev.next = current.next;

            console.log(prev);
            return this.array;
          }
        }
      }
    }
    return this.array;
  }

  length() {
    let count = 0;
    let aray = this.array;
    for (let i = 0; i <= 15; i++) {
      if (aray[i]) {
        let current = aray[i];
        if (current.key) {
          console.log("top work");
          count++;
        }
        while (current.next != null) {
          current = current.next;
          if (current.key) {
            console.log("down work");
            count++;
          }
        }
      }
    }
    return count;
  }

  keys() {
    let keyList = [];
    let aray = this.array;
    for (let i = 0; i <= 15; i++) {
      if (aray[i]) {
        let current = aray[i];
        if (current.key) {
          console.log("top work");
          keyList.push(current.key);
        }
        while (current.next != null) {
          current = current.next;
          if (current.key) {
            console.log("down work");
            keyList.push(current.key);
          }
        }
      }
    }
    return keyList;
  }

  values() {
    let valueList = [];
    let aray = this.array;
    for (let i = 0; i <= 15; i++) {
      if (aray[i]) {
        let current = aray[i];
        if (current.value) {
          console.log("top work");
          valueList.push(current.value);
        }
        while (current.next != null) {
          current = current.next;
          if (current.value) {
            console.log("down work");
            valueList.push(current.value);
          }
        }
      }
    }
    return valueList;
  }
  entries() {
    let entryList = [];
    let aray = this.array;
    for (let i = 0; i <= 15; i++) {
      if (aray[i]) {
        let current = aray[i];
        if (current.value) {
          console.log("top work");
          let a = new Array();
          a.push(current.key);
          a.push(current.value);
          entryList.push(a);
        }
        while (current.next != null) {
          current = current.next;
          if (current.value) {
            console.log("down work");
            let a = new Array();
            a.push(current.key);
            a.push(current.value);
            entryList.push(a);
          }
        }
      }
    }
    return entryList;
  }

  clear(){
    set1.array=[]
    return set1
  }
}
const set1 = new HashMap("HashMap");
set1.set("vinoth");
set1.set("kumar");
set1.set("kumlar");
set1.set("kumar");
set1.set("kuspdr");
set1.set("kumarsdjk");
set1.set("vinojsdth");
set1.set("vinosth");
set1.set("vinosdpoth");
set1.set("vinosdpdjksnoth");
set1.set("vinosdpoirjth");
set1.set("vinoersdpoth");
set1.set("vinoer;jrsdpoth");
set1.set("vinosdiijjpoth");
set1.set("vinosdpoddddth");
console.log(set1);
//console.log(set1.length());
//console.log(set1.keys());
//console.log(set1.remove(95705293407208540000));
//console.log(set1.values());
//console.log(set1.entries())
console.log(set1.clear())
console.log(set1);
set1.set("kumar");
