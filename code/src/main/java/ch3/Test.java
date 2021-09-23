package ch3;

import java.util.Arrays;
import java.util.LinkedList;

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

    public static void flatten(TreeNode root) {
        //base case;
        if (root == null) {
            return;
        }

        flatten(root.left);
        flatten(root.right);


        TreeNode left = root.left;
        TreeNode right = root.right;


        root.left = null;
        root.right = left;


        TreeNode p = root;
        while (p.right != null) {
            p = p.right;
        }
        p.right = right;

    }

    public static void main(String[] args) {
        LinkedList<Integer> inputList = new LinkedList<Integer>(Arrays.asList(new Integer[]{1,2,5,3,4,null,6}));
        TreeNode treeNode = createBinaryTree(inputList);
        flatten(treeNode);

    }

    /**
     * 构建二叉树
     *
     * @param inputList 输入序列
     */
    public static TreeNode createBinaryTree(LinkedList<Integer> inputList) {
        TreeNode node = null;
        if (inputList == null || inputList.isEmpty()) {
            return null;
        }
        Integer data = inputList.removeFirst();
        //这里的判空很关键。如果元素是空，说明该节点不存在，跳出这一层递归；如果元素非空，继续递归构建该节点的左右孩子。
        if (data != null) {
            node = new TreeNode(data);
            node.left = createBinaryTree(inputList);
            node.right = createBinaryTree(inputList);
        }
        return node;
    }

}
