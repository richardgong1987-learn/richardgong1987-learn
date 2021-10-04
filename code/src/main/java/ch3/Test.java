package ch3;

import java.util.*;

public class Test {
	public static class TreeNode {
		int val;
		TreeNode left;
		TreeNode right;

		TreeNode() {
		}

		TreeNode(int val) {
			this.val = val;
		}

		TreeNode(int val, TreeNode left, TreeNode right) {
			this.val = val;
			this.left = left;
			this.right = right;
		}
	}


	public static void main(String[] args) {
		TreeNode treeNode = new TreeNode(1, new TreeNode(2), new TreeNode(3));

		treeNode.left.left = new TreeNode(4);

		treeNode.right.left = new TreeNode(2);
		treeNode.right.right = new TreeNode(4);

		treeNode.right.left.left = new TreeNode(4);

		findDuplicateSubtrees(treeNode);
	}

	// 记录所有子树以及出现的次数
	static HashMap<String, Integer> memo = new HashMap<>();
	// 记录重复的子树根节点
	static LinkedList<TreeNode> res = new LinkedList<>();

	/* 主函数 */
	static List<TreeNode> findDuplicateSubtrees(TreeNode root) {
		traverse(root);
		return res;
	}

	/* 辅助函数 */
	static String traverse(TreeNode root) {
		if (root == null) {
			return "#";
		}

		String left = traverse(root.left);
		String right = traverse(root.right);

		String subTree = left + "," + right + "," + root.val;

		int freq = memo.getOrDefault(subTree, 0);
		// 多次重复也只会被加入结果集一次
		if (freq == 1) {
			res.add(root);
		}
		// 给子树对应的出现次数加一
		memo.put(subTree, freq + 1);
		return subTree;
	}
}
