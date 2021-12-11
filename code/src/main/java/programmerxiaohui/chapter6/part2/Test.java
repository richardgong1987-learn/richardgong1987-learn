package programmerxiaohui.chapter6.part2;

public class Test {
	public static void main(String[] args) {
		for (int i = 0; i < 100000; i++) {
			var n = i;
			var n2 = n | (1 << n & 0x1F);
			if (n == (i % 32)) {

			} else {
				System.out.println("false");
			}
		}
	}
}
