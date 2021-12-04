package ch6.part6;

/**
 *
 */
public class MaxSortedDistance {
	public static int getMaxSortedDistance(int[] array) {
		int max = array[0];
		int min = array[0];
		for (int v : array) {
			if (v > max) {
				max = v;
			}
			if (v < min) {
				min = v;
			}
		}

		int d = max - min;

		if (d == 0) {
			return 0;
		}

		int bucketNum = array.length;
		Bucket[] buckets = new Bucket[bucketNum];
		for (int i = 0; i < bucketNum; i++) {
			buckets[i] = new Bucket();
		}
		for (int v : array) {
			/**
			 * index = 偏移量 * (桶数量-1)/差值
			 * index = 偏移量 /(差值/(桶数量-1))
			 *
			 * 差值/(桶数量-1) = 就是求出每个桶区间长度的公式
			 *
			 * 取具体放到那个桶的索引值的方法就是拿该元素的偏移量除以区间长度
			 *
			 */

			int index = ((v - min) * (bucketNum - 1) / d);
			if (buckets[index].min == null || buckets[index].max < v) {
				buckets[index].min = v;
			}
			if (buckets[index].max == null || buckets[index].max < v) {
				buckets[index].max = v;
			}
		}
		int leftMax = buckets[0].max;
		int maxDistance = 0;
		for (Bucket bucket : buckets) {
			if (bucket.min == null) {
				continue;
			}
			if (bucket.min - leftMax > maxDistance) {
				maxDistance = bucket.min - leftMax;
			}
			leftMax = bucket.max;
		}
		return maxDistance;
	}

	public static void main(String[] args) {
		int[] array = {2, 6, 3, 4, 5, 10, 9};
		System.out.println(getMaxSortedDistance(array));
	}

	public static class Bucket {
		Integer max;
		Integer min;
	}
}
