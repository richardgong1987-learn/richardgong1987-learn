package ch3;

import java.util.Arrays;

public class PriorityQueue {
	private int[] array;
	private int size;

	public PriorityQueue() {
		array = new int[32];
	}

	public static void main(String[] args) throws Exception {
		PriorityQueue priorityQueue = new PriorityQueue();
		priorityQueue.enQueue(3);
		priorityQueue.enQueue(7);
		priorityQueue.enQueue(5);
		priorityQueue.enQueue(10);
		priorityQueue.enQueue(2);
		System.out.println("出队元素：" + priorityQueue.deQueue());
		System.out.println("出队元素：" + priorityQueue.deQueue());
	}

	public void enQueue(int key) {
		if (size >= array.length) {
			resize();
		}
		array[size++] = key;
		upAdjust();
	}

	public int deQueue() throws Exception {
		if (size <= 0) {
			throw new Exception("the queue is empty!");
		}
		int head = array[0];
		array[0] = array[--size];
		downAdjust();
		return head;
	}

	private void upAdjust() {
		int childIndex = size - 1;
		int parentIndex = (childIndex - 1) / 2;
		int temp = array[childIndex];
		while (childIndex > 0 && temp > array[parentIndex]) {
			array[childIndex] = array[parentIndex];
			childIndex = parentIndex;
			parentIndex = parentIndex / 2;
		}
		array[childIndex] = temp;
	}

	public void downAdjust() {
		int parentIndex = 0;
		int temp = array[parentIndex];
		int childIndex = 1;
		while (childIndex < size) {
			if (childIndex + 1 < size && array[childIndex + 1] > array[childIndex]) {
				childIndex++;
			}
			if (temp >= array[childIndex]) {
				break;
			}
			array[parentIndex] = array[childIndex];
			parentIndex = childIndex;
			childIndex = 2 * childIndex + 1;
		}
		array[parentIndex] = temp;
	}

	private void resize() {
		int newSize = this.size * 2;
		this.array = Arrays.copyOf(this.array, newSize);
	}
}
