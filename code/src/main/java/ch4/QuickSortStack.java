package ch4;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Stack;

public class QuickSortStack {
    public static void main(String[] args) {
        int[] arr = {4, 7, 6, 5, 3, 2, 8, 1};
        quickSort(arr, 0, arr.length - 1);
        System.out.println(Arrays.toString(arr));

    }

    public static String START_INDEX = "startIndex";
    public static String END_INDEX = "endIndex";

    public static void quickSort(int[] arr, int startIndex, int endIndex) {
        Stack<Map<String, Integer>> quickSortStack = new Stack<>();

        Map<String, Integer> rootParam = new HashMap<>();
        rootParam.put(START_INDEX, startIndex);
        rootParam.put(END_INDEX, endIndex);
        quickSortStack.push(rootParam);

        while (!quickSortStack.isEmpty()) {
            Map<String, Integer> param = quickSortStack.pop();
            int pivotIndex = partition(arr, param.get(START_INDEX), param.get(END_INDEX));

            if (param.get(START_INDEX) < pivotIndex - 1) {
                HashMap<String, Integer> leftParam = new HashMap<>();
                leftParam.put(START_INDEX, param.get(START_INDEX));
                leftParam.put(END_INDEX, pivotIndex - 1);
                quickSortStack.push(leftParam);
            }

            if (pivotIndex + 1 < param.get(END_INDEX)) {
                HashMap<String, Integer> rightParam = new HashMap<>();
                rightParam.put(START_INDEX, pivotIndex + 1);
                rightParam.put(END_INDEX, param.get(END_INDEX));
                quickSortStack.push(rightParam);
            }
        }
    }

    private static int partition(int[] arr, int startIndex, int endIndex) {
        int pivot = arr[startIndex];
        int mark = startIndex;
        for (int i = startIndex + 1; i <= endIndex; i++) {
            if (arr[i] < pivot) {
                mark++;
                int p = arr[mark];
                arr[mark] = arr[i];
                arr[i] = p;
            }
        }
        arr[startIndex] = arr[mark];
        arr[mark] = pivot;
        return mark;
    }
}
