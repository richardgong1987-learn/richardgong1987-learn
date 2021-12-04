package ch4;

import java.util.Arrays;

public class BubbleSort {
	public static void sort(int[] array) {
		int lastExchangeIndex = 0;
		int sortBorder = array.length - 1;
		for (int i = 0; i < array.length - 1; i++) {
			boolean isSorted = true;
			for (int j = 0; j < sortBorder; j++) {
				int tmp;
				if (array[j] > array[j + 1]) {
					tmp = array[j];
					array[j] = array[j + 1];
					array[j + 1] = tmp;
					isSorted = false;
					lastExchangeIndex = j;
				}
			}
			sortBorder = lastExchangeIndex;
			if (isSorted) {
				break;
			}
		}
	}

	public static void main(String[] args) {
		int[] array = {5, 8, 6, 3, 9, 2, 1, 7};
		sort(array);
		System.out.println(Arrays.toString(array));

	}
}
