package ch6.part7;

import java.util.Stack;

public class StackQueue {
	private final Stack<Integer> stackA = new Stack<>();
	private final Stack<Integer> stackB = new Stack<>();

	public static void main(String[] args) {
		StackQueue stackQueue = new StackQueue();
		stackQueue.enQueue(1);
		stackQueue.enQueue(2);
		stackQueue.enQueue(3);
		System.out.println(stackQueue.deQueue());
		System.out.println(stackQueue.deQueue());
		stackQueue.enQueue(4);
		System.out.println(stackQueue.deQueue());
		System.out.println(stackQueue.deQueue());
	}

	public void enQueue(int element) {
		stackA.push(element);
	}

	public Integer deQueue() {
		if (stackB.empty()) {
			if (stackA.empty()) {
				return null;
			}
			transfer();
		}
		return stackB.pop();
	}

	private void transfer() {
		while (!stackA.empty()) {
			stackB.push(stackA.pop());
		}
	}
}
