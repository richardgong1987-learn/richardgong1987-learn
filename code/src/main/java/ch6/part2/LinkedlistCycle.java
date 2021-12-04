package ch6.part2;

public class LinkedlistCycle {
	public static boolean isCycle(Node head) {
		var p1 = head;
		var p2 = head;
		while (p2 != null && p2.next != null) {
			p1 = p1.next;
			p2 = p2.next.next;
			if (p1 == p2) {
				return true;
			}
		}
		return false;
	}

	public static class Node {
		int data;
		Node next;

		public Node(int data) {
			this.data = data;
		}
	}

}
