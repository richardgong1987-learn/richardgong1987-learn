package codesignal.graphs;

public class FinancialCrisis {
	boolean[][][] solution(boolean[][] roadRegister) {
		int len = roadRegister.length;
		boolean[][][] ans = new boolean[len][len - 1][len - 1];

		for (int city = 0; city < len; city++) {
			for (int u = 0; u < len; u++) {
				for (int v = 0; v < roadRegister[0].length; v++) {
					if (u == city || v == city) {
						continue;
					}
					if (roadRegister[u][v]) {
						if (u < city && v < city) {
							ans[city][u][v] = true;
						} else if (u > city && v > city) {
							ans[city][u - 1][v - 1] = true;
						} else if (u < city) {
							ans[city][u][v - 1] = true;
						} else if (u > city && v < city) {
							ans[city][u - 1][v] = true;
						}
					}

				}
			}
		}

		return ans;
	}
}
