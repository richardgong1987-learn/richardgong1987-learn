package ch5;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.LinkedList;

public class BucketSort {
    public static double[] bucketSort(double[] array) {
        double max = array[0];
        double min = array[0];
        for (int i = 1; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
            if (array[i] < min) {
                min = array[i];
            }
        }
        double d = max - min;
        int bucketNum = array.length;
        ArrayList<LinkedList<Double>> bucketList = new ArrayList<>(bucketNum);
        for (int i = 0; i < bucketNum; i++) {
            bucketList.add(new LinkedList<Double>());
        }
        for (int i = 0; i < array.length; i++) {
            int num = (int) ((array[i] - min) * (bucketNum - 1) / d);
            bucketList.get(num).add(array[i]);
        }
        for (int i = 0; i < bucketList.size(); i++) {
            Collections.sort(bucketList.get(i));
        }
        double[] sortedArray = new double[array.length];
        int index = 0;
        for (LinkedList<Double> list : bucketList) {
            for (Double element : list) {
                sortedArray[index] = element;
                index++;
            }
        }
        return sortedArray;
    }

    public static void main(String[] args) {
        double[] doubles = {1.23, 3.4, 6.66};
        bucketSort(doubles);
        System.out.println(Arrays.toString(doubles));
    }
}
