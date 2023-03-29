function LinkedList() {

    let headNode = null;
	
	function append(value) {
		if(headNode === null) {
			headNode = value;
        }
		else {
			let temp = headNode;
			while(temp.next !== null)
				temp = temp.next;
			temp.next = value;
		}
	}

	function prepend(value) {
		value.next = headNode;
        headNode = value;
	}

	function size() {
		if(headNode === null)
			return 0;
		let temp = headNode;
		let size = 1;
		while(temp.next !== null) {
			temp = temp.next;
			size++;
		}
		return size;
	}

	function head() {
		return headNode;
	}

	function tail() {
		if(headNode === null)
			console.log('list is empty');
		let temp = headNode;
		while(temp.next !== null) {
			temp = temp.next;
		}
		return temp;
	}

	function at(index) {
		let temp = headNode;
		while(index !== 0) {
			temp = temp.next;
			index--;
		}
		return temp;
	}

	function pop() {
		if(headNode === null)
			console.log('list is empty');
		let temp = headNode;
		let prev = headNode;
		if(headNode.next !== null) {
			temp = headNode.next;
		}
		while(temp.next !== null) {
			temp = temp.next;
			prev = prev.next;
		}
		prev.next = null;
	}

	function contains(value) {
		if(headNode === null)
			console.log('list is empty');
		let temp = headNode;
		while(temp !== null) {
			if(temp.value === value)
				return true;
			else
				temp = temp.next;
		}
		return false;
	}

	function find(value) {
		if(headNode === null)
			console.log('list is empty');
		let temp = headNode;
		let index = 0;
		while(temp !== null) {
			if(temp.value === value)
				return index;
			else {
				temp = temp.next;
				index++;
			}
		}
		return null;
	}

	function toString() {
		if(headNode === null)
			console.log('list is empty');
		let temp = headNode;
		let returnString = '';
		while(temp !== null) {
			returnString += '(' + temp.value + ') -> ';
			temp = temp.next;
		}
		returnString += 'null';
        return returnString;
	}

    function insertAt(value, index) {
        if(index > this.size())
            console.log('index is larger than list size');
        else if(index === this.size()) {
            this.append(value);
        } else if(index === 0) {
            this.prepend(value);
        } else {
            let prev = headNode;
            let temp = headNode.next;
            index--;
            while(index > 0) {
                prev = prev.next;
                temp = temp.next;
                index--;
            }
            prev.next = value;
            value.next = temp;
        }
    }

	return {
		append,
		prepend,
		size,
		head,
		tail,
		at,
		pop,
		contains,
		find,
		toString,
        insertAt
	};
}

const nodeFactory = (value) => {
    return {
        value: value,
        next: null,
        toString: function() {
            return `{value: ${this.value}, next: ${this.next}}`;
        }
    }
}


let node1 = nodeFactory(1);
let node2 = nodeFactory(2);
let node3 = nodeFactory(3);
let pop = nodeFactory('pop');
let insert = nodeFactory('insert');
let list = LinkedList();
list.append(node2);
list.append(node3);
list.prepend(node1);
console.log('toString(): ' + list.toString());
console.log('size(): ' + list.size());
console.log('head(): ' + list.head());
console.log('tail(): ' + list.tail());
console.log('list.at(0): ' + list.at(0));
console.log('list.at(1): ' + list.at(1));
console.log('list.at(2): ' + list.at(2));
list.append(pop);
console.log('before pop: ' + list.toString());
list.pop();
console.log('after pop: ' + list.toString());
console.log('contains 3: ' + list.contains(3));
console.log('contains x: ' + list.contains('x'));
console.log('find 3: ' + list.find(3));
console.log('find x: ' + list.find('x'));
list.insertAt(insert, 2);
console.log(list.toString());