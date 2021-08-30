package ch6.part7;

import java.util.Stack;

public class AddTwoNumbers {
    /**
     * Definition for singly-linked list.
     */
    public static class ListNode {
        int val;
        ListNode next;

        ListNode() {
        }

        ListNode(int val) {
            this.val = val;
        }

        ListNode(int val, ListNode next) {
            this.val = val;
            this.next = next;
        }
    }

    private static final ListNode ZERO_NODE = new ListNode(0);

    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        return recurisiveSum(l1, l2, 0);
    }

    private ListNode recurisiveSum(ListNode a, ListNode b, int carry) {
        
    }


    public static void main(String[] args) {
        ListNode l1 = new ListNode(2);
        ListNode l2 = new ListNode(0);

        AddTwoNumbers addTwoNumbers = new AddTwoNumbers();
        ListNode listNode = addTwoNumbers.addTwoNumbers(l1, l2);
        System.out.println(listNode);
    }
}
