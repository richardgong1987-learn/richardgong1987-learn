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
		TreeNode root = deserialize("3,5,1,6,2,0,8,#,#,7,4");
		System.out.println(root);

		TreeNode lca = LCA(root, root.left.left, root.left.right.right);
		System.out.println(lca.val);
	}

	static TreeNode LCA(TreeNode root, TreeNode p, TreeNode q) {
		//base case
		if (root == null) {
			return null;
		}
		if (root == p || root == q) {
			return root;
		}
		TreeNode left = LCA(root.left, p, q);
		TreeNode right = LCA(root.right, p, q);
		// 情况1
		if (left != null && right != null) {
			return root;
		}
		// 情况2
		if (left == null && right == null) {
			return null;
		}
		return left == null ? right : left;

	}

	static String SEP = ",";
	static String NULL = "#";

	static TreeNode deserialize(String data) {
		if (data.isEmpty()) {
			return null;
		}
		String[] nodes = data.split(SEP);
		TreeNode root = new TreeNode(Integer.parseInt(nodes[0]));
		LinkedList<TreeNode> q = new LinkedList<>();
		q.offer(root);

		for (int i = 1; i < nodes.length; ) {
			TreeNode parent = q.poll();
			String left = nodes[i++];
			if (!left.equals(NULL)) {
				parent.left = new TreeNode(Integer.parseInt(left));
				q.offer(parent.left);
			} else {
				parent.left = null;
			}

			String right = nodes[i++];
			if (!right.equals(NULL)) {
				parent.right = new TreeNode(Integer.parseInt(right));
				q.offer(parent.right);
			} else {
				parent.right = null;
			}
		}
		return root;

	}

}
