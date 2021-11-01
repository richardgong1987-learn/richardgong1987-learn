package leetcode;

import util.TreeNode;

public class Leetcode337 {

	private final int MAX_CURRENT_SUB_TREE = 0;
	private final int MAX_LEFT_RIGHT_CHILD = 1;

	public int rob(TreeNode root) {
		return robResult(root)[MAX_CURRENT_SUB_TREE];
	}

	private int[] robResult(TreeNode root) {
		/**
		 * first element:  max of rob current sub tree
		 * second element: max of rob left child and right child
		 */
		int[] res = {0, 0};

		if (root == null) return res;

		int[] left = robResult(root.left);
		int[] right = robResult(root.right);

		res[MAX_LEFT_RIGHT_CHILD] = left[MAX_CURRENT_SUB_TREE] + right[MAX_CURRENT_SUB_TREE];
		res[MAX_CURRENT_SUB_TREE] = Math.max(res[MAX_LEFT_RIGHT_CHILD], left[MAX_LEFT_RIGHT_CHILD] + right[MAX_LEFT_RIGHT_CHILD] + root.val);

		return res;
	}


}
