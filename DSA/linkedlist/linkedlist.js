class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	addFirst(data) {
		const newNode = new Node(data);
		newNode.next = this.head;
		this.head = newNode;
	}

	addLast(data) {
		const newNode = new Node(data);
		if (!this.head) {
			this.head = newNode;
			return;
		}
		let current = this.head;
		while (current.next) {
			current = current.next;
		}
		current.next = newNode;
	}

	size() {
		let count = 0;
		let current = this.head;
		while (current.next) {
			current = current.next;
			count++;
		}
		return count;
	}

	addAt(index, data) {
		if (index < 0 || index > this.size()) {
			console.log("invalid index");
		}
		const newNode = new Node(data);
		if (index === 0) {
			newNode.next = this.head;
			this.head = newNode;
			return;
		}
		let current = this.head;
		for (let i = 0; i < index - 1; i++) {
			current = current.next;
		}
		newNode.next = current.next;
		current.next = newNode;
	}

	removeTop() {
		if (!this.head) {
			console.log("LinkedList is empty");
		}
		this.head = this.head.next;
	}

	removeLast() {
		if (!this.head) {
			console.log("LinkedList is empty");
		}
		let current = this.head;
		while (current.next.next) {
			current = current.next;
		}
		current.next = null;
	}

	removeAt(index) {
		if (index < 0 || index > this.size()) {
			console.log("invalid index");
		}
		if (index === 0) {
			this.head = this.head.next;
		}
		let current = this.head;
		for (let i = 0; i < index - 1; i++) {
			current = current.next;
		}
		if (current.next) {
			current.next = current.next.next;
		}
	}

	print() {
		let current = this.head;
		while (current) {
			console.log(current.data);
			current = current.next;
		}
	}
}

const linkedList = new LinkedList();
linkedList.addFirst(5);
linkedList.addFirst(6);
linkedList.addFirst(12);
linkedList.addLast(7);
linkedList.print();
linkedList.removeTop();
linkedList.print();
