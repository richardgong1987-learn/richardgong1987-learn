package ch6.part5;

public class PowerOf2 {
	public static boolean isPowerOf2(int num) {
		int temp = 1;
		while (temp <= num) {
			if (temp == num) {
				return true;
			}
			temp = temp * 2;
		}
		return false;
	}

	public static boolean isPowerOf2V2(int num) {
		int temp = 1;
		while (temp <= num) {
			if (temp == num) {
				return true;
			}
			temp = temp << 1;
		}
		return false;
	}

	public static boolean isPowerOfV3(int num) {
		return (num & num - 1) == 0;
	}

}
