package codesignal;

import java.util.Arrays;

public class MakeArrayConsecutive2 {
	public static void main(String[] args) {
		MakeArrayConsecutive2 s = new MakeArrayConsecutive2();
		System.out.println(s.solution(new int[]{6, 2, 3, 8}));
	}

	int solution(int[] statues) {
		Arrays.sort(statues);
		int difference = statues[statues.length - 1] - statues[0];
		return difference - (statues.length - 1);
	}

	int solution(int n) {
		int count = 0;
		int i;
		int m;

		for (i = 1, m = i; m < n; i++, m += i) {
			if ((n - m) % (i + 1) == 0) {
				count++;
			}
		}
		return count;
	}

}
