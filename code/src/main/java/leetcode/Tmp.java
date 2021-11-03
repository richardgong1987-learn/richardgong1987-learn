package leetcode;

import util.Node;
import util.Utils;

import java.util.Deque;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class Tmp {
	public static int height(Node root) {

		Deque<Node> queue = new LinkedList<>();
		int height = 0;

		if (root == null) {
			return height;
		}

		if (root.left == null && root.right == null) {
			return height;
		}
		queue.add(root);
		queue.add(null);

		while (!queue.isEmpty()) {
			Node temp = queue.remove();
			if (temp == null) {
				if (!queue.isEmpty()) {
					queue.add(null);
					height++;
				}
			} else {
				if (temp.left != null) queue.add(temp.left);
				if (temp.right != null) queue.add(temp.right);
			}
		}
		return height;
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int t = scan.nextInt();
		Node root = null;
		while (t-- > 0) {
			int data = scan.nextInt();
			root = Utils.insert(root, data);
		}
		scan.close();
		int height = height(root);
		System.out.println(height);
	}
}
