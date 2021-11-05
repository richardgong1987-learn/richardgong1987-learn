package leetcode;

import java.util.Arrays;

public class Leetcode322 {
	int[] memo;

	int coinChange(int[] coins, int amount) {
		memo = new int[amount + 1];
		// dp 数组全都初始化为特殊值
		Arrays.fill(memo, -666);
		return dp(coins, amount);
	}

	int dp(int[] coins, int amount) {
		if (amount == 0) return 0;
		if (amount < 0) return -1;
		// 查备忘录，防止重复计算
		if (memo[amount] != -666)
			return memo[amount];

		int res = Integer.MAX_VALUE;
		for (int coin : coins) {
			// 计算子问题的结果
			int subProblem = dp(coins, amount - coin);
			// 子问题无解则跳过
			if (subProblem == -1) continue;
			// 在子问题中选择最优解，然后加一
			res = Math.min(res, subProblem + 1);
		}
		// 把计算结果存入备忘录
		memo[amount] = (res == Integer.MAX_VALUE) ? -1 : res;
		return memo[amount];
	}

	static int coinChange2(int[] coins, int amount) {
		int[] dp = new int[amount + 1];
		// 数组大小为 amount + 1，初始值也为 amount + 1
		Arrays.fill(dp, amount + 1);

		// base case
		dp[0] = 0;
		// 外层 for 循环在遍历所有状态的所有取值
		for (int i = 0; i < dp.length; i++) {
			// 内层 for 循环在求所有选择的最小值
			for (int coin : coins) {
				// 子问题无解，跳过
				if (i - coin < 0) {
					continue;
				}
				dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
			}
		}
		return (dp[amount] == amount + 1) ? -1 : dp[amount];
	}

	public static void main(String[] args) {
		int i = coinChange2(new int[]{1}, 3);
		System.out.println(i);
	}

	int coinChangeCPP(int[] coins, int amount) {
		// Initialize DP array with INT_MAX and dp[0]=0
		int[] dp = new int[amount + 1];
		dp[0] = 0;

		Arrays.fill(dp, Integer.MAX_VALUE);

		// Fill DP array from amount=1 to amount's actual value
		for (int i = 1; i <= amount; ++i) {
			// Try to include all the coins one by one
			for (int j = 0; j < coins.length; ++j) {
				// If this coin is usable(value less than current amount)
				if (coins[j] <= i) {
					// What is the cost for rest of the amount
					// If I use this coin
					// eg. if amount=8 and coins[j]=5 then rest is min cost
					// for 8-5 = 3
					int rest = dp[i - coins[j]];
					// If including this coin gives lesser value
					// than current min value then include it
					if (rest != Integer.MAX_VALUE && rest + 1 < dp[i]) {
						// update min value for amount=i
						dp[i] = rest + 1;
					}
				}
			}
		}
		return dp[amount] == Integer.MAX_VALUE ? -1 : dp[amount];
	}

}
