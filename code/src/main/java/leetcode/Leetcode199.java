package leetcode;

import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class Leetcode199 {
	public class TreeNode {
		int val;
		TreeNode left;
		TreeNode right;

		TreeNode() {
		}

		TreeNode(int val) {
			this.val = val;
		}
	}

	public List<Integer> rightSideView(TreeNode root) {
		List<Integer> result = new LinkedList<>();
		Queue<TreeNode> q = new LinkedList<>();
		Queue<Integer> l = new LinkedList<>();
		if (root == null) {
			return result;
		}
		q.add(root);
		l.add(1);
		while (!q.isEmpty()) {
			TreeNode node = q.poll();
			int level = l.poll();
			if (l.isEmpty() || l.peek() != level) {
				result.add(node.val);
			}
			if (node.left != null) {
				q.add(node.left);
				l.add(level + 1);
			}
			if (node.right != null) {
				q.add(node.right);
				l.add(level + 1);
			}
		}
		return result;
	}
}
