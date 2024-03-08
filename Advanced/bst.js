class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array, root) {
    this.array = array;
    this.root = null;
  }
  buildTree() {
    const array = this.array.sort(function (a, b) {
      return a - b;
    });

    const unique = [...new Set(array)];
    //console.log(unique);
    let start = 0;
    let end = unique.length - 1;
    return this.sortedBst(unique, start, end);
  }
  sortedBst(unique, start, end) {
    if (start > end) {
      return null;
    }
    let mid = Math.floor((start + end) / 2);

    let node = new Node(unique[mid]);

    node.left = this.sortedBst(unique, start, mid - 1);
    node.right = this.sortedBst(unique, mid + 1, end);
    this.root = node;
    return this.root;
  }

  insert(key) {
    return this.insertion(this.root, key);
  }
  insertion(root, key) {
    if (root == null) {
      let newRoot = new Node(key);
      return newRoot;
    }

    if (key < root.data) {
      root.left = this.insertion(root.left, key);
    } else if (key > root.data) {
      root.right = this.insertion(root.right, key);
    }
    return root;
  }

  delete(key) {
    return this.deletion(this.root, key);
  }
  deletion(root, key) {
    if (root.data == key) {
      let newRoot = new Node(null);
      return newRoot;
    }
    //if (key < root.data ) {
    //  root.left = this.deletion(root.left, key);
    //} else if (key > root.data) {
    //  root.right = this.deletion(root.right, key);
    //}

    if (root.data) {
      let current = root;
      // console.log(current);
      return this.deleteFunction(current, key);
    }
  }
  deleteFunction(current, key) {
    let prev = current;
    console.log(prev);
    //console.log("working times");
    //console.log(current);
    if (current || current) {
      //console.log(current.left);
      //console.log(current.right);
      let data_left = current.left;
      let data_right = current.right;
      if (data_left != null) {
        //console.log('first function')
        if (data_left.data == key) {
          prev = data_left;
          current.left = prev.left;
          //prev.right =current.right
          console.log(current);
          console.log(prev.left);
          console.log("founded left");
          prev = data_left.data;
        } else if (key < data_left.data) {
          //console.log("chance to be left");
          this.deleteFunction(data_left.right, key);
        } else if (data_right != null) {
          if (key > data_left.data) {
            this.deleteFunction(data_left, key);
          }
        }
      }
      if (data_right != null) {
        // console.log(data_right);
        if (data_right.data == key) {
          prev = data_right;
          current.right = prev.right;
          //current.left =prev.left
          console.log("founded riht");
        } else if (key > data_right.data) {
          // console.log("chance to be right");
          this.deleteFunction(data_right, key);
        } else if (data_right.left != null) {
          if (key < data_right.data) {
            this.deleteFunction(data_right, key);
          }
        }
      }
    }
    return this.root;
  }
  find(value, root = this.root) {
    if (root.data == value) {
      return root;
    }
    if (value < root.data) {
      return this.find(value, root.left);
    }
    if (value > root.data) {
      return this.find(value, root.right);
    }
  }

  levelOrder(callBack) {
    let resultArray = [];

    function traversal(callBack, index) {
      if (!callBack) {
        return;
      }
      if (resultArray[index]) {
        resultArray[index].push(callBack.data);
      } else {
        resultArray[index] = [callBack.data];
      }
      traversal(callBack.left, index + 1);
      traversal(callBack.right, index + 1);
    }
    traversal(callBack, 0);
    return resultArray;
  }

  preOrder(root) {
    let preOrder = [];
    function preOrdering(root) {
      if (root) {
        preOrder.push(root.data);
        preOrdering(root.left);
        preOrdering(root.right);
      }
    }
    preOrdering(root);
    return preOrder;
  }

  inOrder(root) {
    let inOrder = [];
    function inOrdering(root) {
      if (root) {
        inOrdering(root.left);
        inOrder.push(root.data);
        inOrdering(root.right);
      }
    }
    inOrdering(root);
    return inOrder;
  }

  postOrder(root) {
    let postOrder = [];
    function postOrdering(root) {
      if (root) {
        postOrdering(root.left);
        postOrdering(root.right);
        postOrder.push(root.data);
      }
    }
    postOrdering(root);
    return postOrder;
  }

  height(node) {
    let newNode = this.find(node);
    console.log(newNode);
    function heightFinder(node) {
      if (node == null) return -1;
      else {
        let left = heightFinder(node.left);
        let right = heightFinder(node.right);
        if (left > right) {
          return left + 1;
        } else {
          return right + 1;
        }
      }
    }
    return heightFinder(newNode);
    //let height =[]
    //function heightMeasuring(node){
    //if(node){
    //  heightMeasuring(node.left)
    //  height.push(node.data)
    //}}
    //heightMeasuring(node)
    //return height.length-1
  }

  depth(node) {
    let root = this.root;
    //console.log(root);
    function depthFinder(node, root) {
      if (root) {
        //console.log(root)
        if (root.data == node) {
          //console.log('found')
          return 0;
        } else {
          let left = depthFinder(node, root.left);
          let right = depthFinder(node, root.right);

          if (left > right) {
            return left + 1;
          } else if (right > left) {
            return right + 1;
          } else {
            return -1;
          }
        }
      }
      return -1;
    }
    return depthFinder(node, root);
  }
  isBalanced(root = this.root) {
    function isBalanceChecker(root) {
      if (root == null) {
        return 0;
      } else {
        let left = isBalanceChecker(root.left);
        let right = isBalanceChecker(root.right);
        if (left > right) {
          return left + 1;
        } else {
          return right + 1;
        }
      }
    }
    let leftHeight = isBalanceChecker(root.left);
    let rightHeight = isBalanceChecker(root.right);
    //console.log(leftHeight)
    //console.log(rightHeight)
    // let a = Math.abs(leftHeight - rightHeight)
    if (Math.abs(leftHeight - rightHeight) <= 1) {
      return true;
    } else {
      return false;
    }
  }

  reBalance() {
    let root = this.root;
    let refinedArray = this.inOrder(root);
    //console.log(refinedArray);
    //let tree = new Tree(refinedArray);
    //console.log(tree)
    let start = 0;
    let end = refinedArray.length - 1;
    const treeArray = this.sortedBst(refinedArray, start, end);
    return this.prettyPrint(treeArray);
  }

  prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
}

const tree = new Tree([10,20,30,40,50]);
//console.log(tree.buildTree());

//console.log(tree.buildTree());
//
//console.log(tree.insert(5));

//console.log(tree.delete(30)

//tree.prettyPrint(tree.delete(5));
//tree.prettyPrint(tree.delete());
console.log(tree.buildTree());
console.log(tree.array);
tree.prettyPrint(tree.root);
//tree.find(23);
//console.log(tree.levelOrder(tree.root));
tree.prettyPrint(tree.insert(5));
tree.prettyPrint(tree.insert(15));
tree.prettyPrint(tree.insert(3));
tree.prettyPrint(tree.insert(7));
//tree.prettyPrint(tree.insert(4));
//tree.prettyPrint(tree.insert(6));
tree.prettyPrint(tree.insert(16));
//tree.prettyPrint(tree.insert(7.5));
//tree.prettyPrint(tree.insert(9));

//tree.prettyPrint(tree.insert(8));
//tree.prettyPrint(tree.delete(2));
console.log(tree.levelOrder(tree.root));
console.log(tree.preOrder(tree.root));
console.log(tree.inOrder(tree.root));
console.log(tree.postOrder(tree.root));

//console.log(tree.find(5))
//console.log(tree.depth(5));
tree.prettyPrint(tree.insert(20));
tree.prettyPrint(tree.insert(21));
console.log(tree.isBalanced());
console.log(tree.reBalance());
