package main.java.ch2;

public class MyArray<T> {
	Object[] array;
	int size;

	public MyArray() {
		this(16);
	}

	public MyArray(int capacity) {
		array = new Object[capacity];
	}

	public static void main(String[] args) throws Exception {
		MyArray myArray = new MyArray(4);
		myArray.insert(0, 0);
		myArray.insert(1, 2);
		myArray.insert(2, 3);
		myArray.insert(3, 4);
		myArray.delete(2);
		myArray.output();
	}

	public void insert(int index, T element) {
		if (index < 0 || index > size) {
			throw new IndexOutOfBoundsException("Out of range of Array actual elements ！");
		}
		/**
		 *
		 * If the actual element reaches the upper line of the array capacity,
		 * the array should be resize
		 *
		 */
		if (size >= array.length) {
			resize();
		}
		/**
		 * loop from left to right,
		 * moving one element at a time to the right
		 */
		for (var i = size - 1; i >= index; i--) {
			array[i + 1] = array[i];
		}
		/**
		 * abbreviations:
		 * if (size - index >= 0)
		 *   System.arraycopy(array, index, array, index + 1, size - index);
		 */
		array[index] = element;
		size++;
	}

	public T delete(int index) {
		if (index < 0 || index > size) {
			throw new IndexOutOfBoundsException("Out of range of Array actual elements ！");
		}
		var deleteElement = array[index];
		for (var i = index; i < size - 1; i++) {
			array[i] = array[i + 1];
		}
		/**
		 * abbreviations:
		 * if (size - 1 - index >= 0)
		 *   System.arraycopy(array, index + 1, array, index, size - 1 - index);
		 */

		size--;
		return (T) deleteElement;
	}

	private void resize() {
		var arrayNew = new Object[array.length * 2];
		System.arraycopy(array, 0, arrayNew, 0, array.length);
		array = arrayNew;
	}

	public void output() {
		for (int i = 0; i < size; i++) {
			System.out.println(array[i]);
		}
	}
}
