package ch3;

public class Tmp {
	public static void main(String[] args) {
		Tmp tmp = new Tmp();
		int i = tmp.numTrees(3);
		System.out.println(i);
	}

	int numTrees(int n) {
		// Calculate the number of BSTs consisting of the closed interval [1, n]
//		return count(1, n);
		return count();
	}

	public int step = -1;

	/**
	 * Calculate the number of BSTs consisting of the closed interval [start, end]
	 */
	int count() {
		step++;

		int i = 1;
		int start = 1;
		int end = 3;
		int res = 0;
		// The value of 1 is used as the root node root
		int left = count(start, i - 1);
		int right = count(i + 1, end);
		res += left * right;
		System.out.println(res);
		return res;
	}

	/**
	 * Calculate the number of BSTs consisting of the closed interval [start, end]
	 */
	int count(int start, int end) {
		step++;
		// base case
		if (start > end) return 1;

		int res = 0;
		for (int i = start; i <= end; i++) {
			// The value of i is used as the root node root
			System.out.println();
			int left = count(start, i - 1);
			int right = count(i + 1, end);
			// The mutiplication of the number of combinations of left and right subtrees is the total number of BSTs
			res += left * right;
		}

		return res;
	}
}
