package ch2;

public class MyQueue {
	private final Object[] array;
	private int front;
	private int rear;

	public MyQueue(int capacity) {
		array = new Object[capacity];
	}

	public void enQueue(Object element) throws Exception {
		if ((rear + 1) % array.length == front) {
			throw new Exception("The Queue is full");
		}
		array[rear] = element;
		rear = (rear + 1) % array.length;
	}

	public Object deQueue() throws Exception {
		if (front == rear) {
			throw new Exception("The Queue is empty");
		}
		var deQueueElement = array[front];
		front = (front + 1) % array.length;
		return deQueueElement;
	}

	public void output() {
		for (var i = front; i != rear; i = (i + 1) % array.length) {
			System.out.println(array[i]);
		}
	}
}
