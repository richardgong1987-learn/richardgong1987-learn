package ch2;

public class MyLinkedList {
	private Node head;
	private Node last;
	private int size;


	public void insert(int index, Object data) {
		checkValided(index);
		var insertedNode = new Node(data);
		/**
		 * empty linked list
		 */
		if (size == 0) {
			head = insertedNode;
			last = insertedNode;

		} else if (index == 0) {
			/**
			 * insert head
			 */
			insertedNode.next = head;
			head = insertedNode;
		} else if (index == size) {
			/**
			 * insert tail
			 */
			last.next = insertedNode;
			last = insertedNode;

		} else {
			var prevNode = this.get(index - 1);
			insertedNode.next = prevNode.next;
			prevNode.next = insertedNode;
		}
		size++;
	}

	private void checkValided(int index) {
		if (index < 0 || index > size) {
			throw new IndexOutOfBoundsException("Out of range of tables Nodes");
		}
	}

	private Node get(int index) {
		if (index < 0 || index >= size) {
			throw new IndexOutOfBoundsException("Out of range of tables Nodes");
		}

		var tmp = head;
		for (var i = 0; i < index; i++) {
			tmp = tmp.next;
		}
		return tmp;
	}

	public Node delete(int index) {
		if (index < 0 || index >= size) {
			throw new IndexOutOfBoundsException("Out of range of tables Nodes");
		}
		Node deleteNode = null;
		if (index == 0) {
			deleteNode = head;
			head = head.next;
		} else if (index == size - 1) {
			deleteNode = last;
			var prevNode = get(index - 1);
			prevNode.next = null;
			last = prevNode;
		} else {
			var prevNode = get(index - 1);
			deleteNode = prevNode.next;
			prevNode.next = prevNode.next.next;
		}

		return deleteNode;
	}

	public void output() {
		var tmp = head;
		while (tmp != null) {
			System.out.println(tmp.data);
			tmp = tmp.next;
		}
	}

	public class Node {
		public Object data;
		public Node next;

		public Node(Object data) {
			this.data = data;
		}
	}
}
