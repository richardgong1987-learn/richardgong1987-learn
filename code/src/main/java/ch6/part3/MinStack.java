package ch6.part3;

import java.util.Stack;

public class MinStack {
	private final Stack<Integer> mainStack = new Stack<>();
	private final Stack<Integer> minStack = new Stack<>();

	public void push(int element) {
		mainStack.push(element);
		if (minStack.empty() || element <= minStack.peek()) {
			minStack.push(element);
		}
	}

	public Integer pop() {
		if (mainStack.peek().equals(minStack.peek())) {
			minStack.pop();
		}
		return mainStack.pop();
	}

	public int getMin() throws Exception {
		if (mainStack.empty()) {
			throw new Exception("stack is empty");
		}
		return minStack.peek();
	}
}
