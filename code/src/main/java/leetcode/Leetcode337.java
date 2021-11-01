package leetcode;

public class Leetcode337 {


	public int rob(TreeNode root) {
		return robResult(root)[0];
	}

	private int[] robResult(TreeNode root) {

		/**
		 * first element:  max of rob current sub tree
		 * second element: max of rob left child and right child
		 */
		int[] res = {0, 0};
		if (root != null) {
			int[] left = robResult(root.left);
			int[] right = robResult(root.right);
			res[1] = left[0] + right[0];
			res[0] = Math.max(res[1], left[1] + right[1] + root.val);
		}

		return res;
	}


	public class TreeNode {
		int val;
		TreeNode left;
		TreeNode right;
	}


}
