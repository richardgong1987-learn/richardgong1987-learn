package leetcode;

import ch3.BinaryTreeTraversal;

import java.util.*;

public class Leetcode199 {

	public static void main(String[] args) {
		Leetcode199 leetcode199 = new Leetcode199();
		TreeNode binaryTree = leetcode199.deserialize("1,2,3,null,5,null,4");
		List<Integer> integers1 = leetcode199.rightSideView(binaryTree);
		System.out.println(integers1);
	}

	public List<Integer> rightSideView(TreeNode root) {
		//层序遍历，将每层最后一个元素存入集合
		Deque<TreeNode> queue = new LinkedList<>();
		List<Integer> res = new ArrayList<>();
		if (root == null) {//特判
			return res;
		}
		queue.add(root);//根节点入队
		while (!queue.isEmpty()) {//外层循环，每进行一次循环相当于走了一层
			int size = queue.size();//预先定义for循环遍历的次数，因为之后队列的大小是会发生变化的
			TreeNode node = queue.getLast();//获取该层最后一个节点
			res.add(node.val);//将该节点的值加入结果集
			for (int i = 0; i < size; i++) {//队列中的前size个元素为该层元素，我们对该层元素依次遍历
				TreeNode cur = queue.poll();
				if (cur.left != null)//左节点不为空，则加入队列
					queue.add(cur.left);
				if (cur.right != null)//右节点不为空，则加入队列
					queue.add(cur.right);
			}
		}
		return res;
	}

//	public List<Integer> rightSideView(TreeNode root) {
//		List<Integer> result = new LinkedList<>();
//		Queue<TreeNode> queue = new LinkedList<>();
//		Queue<Integer> levelQueue = new LinkedList<>();
//		if (root == null) {
//			return result;
//		}
//		queue.add(root);
//		levelQueue.add(1);
//		while (!queue.isEmpty()) {
//			TreeNode node = queue.poll();
//			int level = levelQueue.poll();
//			if (levelQueue.isEmpty() || levelQueue.peek() != level) {
//				result.add(node.val);
//			}
//			if (node.left != null) {
//				queue.add(node.left);
//				levelQueue.add(level + 1);
//			}
//			if (node.right != null) {
//				queue.add(node.right);
//				levelQueue.add(level + 1);
//			}
//		}
//		return result;
//	}

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

	/**
	 * 构建二叉树
	 *
	 * @param inputList 输入序列
	 */

	String SEP = ",";
	String NULL = "null";

	/* 将字符串反序列化为二叉树结构 */
	public TreeNode deserialize(String data) {
		if (data.isEmpty()) return null;
		String[] nodes = data.split(SEP);
		// 第一个元素就是 root 的值
		TreeNode root = new TreeNode(Integer.parseInt(nodes[0]));

		// 队列 q 记录父节点，将 root 加入队列
		Queue<TreeNode> q = new LinkedList<>();
		q.offer(root);

		for (int i = 1; i < nodes.length; ) {
			// 队列中存的都是父节点
			TreeNode parent = q.poll();
			// 父节点对应的左侧子节点的值
			String left = nodes[i++];
			if (!left.equals(NULL)) {
				parent.left = new TreeNode(Integer.parseInt(left));
				q.offer(parent.left);
			} else {
				parent.left = null;
			}
			// 父节点对应的右侧子节点的值
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
