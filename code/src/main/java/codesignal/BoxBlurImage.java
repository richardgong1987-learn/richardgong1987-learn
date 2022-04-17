package codesignal;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class BoxBlurImage {
	/**
	 * This function will calculate the value x
	 * * 	  (i.e. blurred pixel value) for each 3 * 3 blur image
	 */
	public static int square_matrix(List<ArrayList<Integer>> square) {
		var totSum = 0;
		for (int i = 0; i < 3; i++) {
			for (int j = 0; j < 3; j++) {
				// Calculate sum of all the pixels in 3 * 3 matrix
				totSum += square.get(i).get(j);
			}
		}
		return totSum / 9; // return the average of the sum of pixels
	}

	/**
	 * This function will calculate the blurred
	 * image for given n * n image.
	 */
	public static int[][] boxBlur(int[][] image) {
		// This will store the 3 * 3 matrix
		// which will be used to find its blurred pixel
		var square = new ArrayList<ArrayList<Integer>>();

		// This will store one row of a 3 * 3 matrix and
		// will be appended in square
		var squareRow = new ArrayList<Integer>();

		// Here we will store the resulting blurred
		// pixels possible in one row
		// and will append this in the blur_img
		var blurRow = new ArrayList<Integer>();

		// This is the resulting blurred image
		var blurImg = new ArrayList<ArrayList<Integer>>();

		// number of rows in the given image
		var nRows = image.length;

		// number of columns in the given image
		var nCol = image[0].length;

		// rp is row pointer and cp is column pointer
		int rp = 0;
		int cp = 0;

		// This while loop will be used to
		// calculate all the blurred pixel in the first row
		while (rp <= nRows - 3) {
			while (cp <= nCol - 3) {
				for (int i = rp; i < rp + 3; i++) {
					for (int j = cp; j < cp + 3; j++) {
						// append all the pixels in a row of 3 * 3 matrix
						squareRow.add(image[i][j]);
					}

					// append the row in the square i.e. 3 * 3 matrix
					square.add(squareRow);
					squareRow = new ArrayList<>();
				}
				// calculate the blurred pixel for given 3 * 3 matrix
				// i.e. square and append it in blur_row
				blurRow.add(square_matrix(square));
				square = new ArrayList<>();

				// increase the column pointer
				cp = cp + 1;
			}

			// append the blur_row in blur_image
			blurImg.add(blurRow);
			blurRow = new ArrayList<>();
			rp = rp + 1; // increase row pointer
			cp = 0; // start column pointer from 0 again
		}
		int[][] ints = new int[blurImg.size()][blurImg.get(0).size()];
		for (int i = 0; i < blurImg.size(); i++) {
			ArrayList<Integer> row = blurImg.get(i);
			for (int j = 0; j < row.size(); j++) {
				Integer integer = row.get(j);
				ints[i][j] = integer;
			}
		}
		// Return the resulting pixel matrix
		return ints;
	}

	public static void main(String[] args) {
		{
			var image = new int[][]{{7, 4, 0, 1}, {5, 6, 2, 2}, {6, 10, 7, 8}, {1, 4, 2, 0}};
			int[][] ints = boxBlur(image);
			System.out.println(Arrays.deepToString(ints));
		}
		{
			var image = new int[][]{{36, 0, 18, 9}, {27, 54, 9, 0}, {81, 63, 72, 45}};
			int[][] ints = boxBlur(image);
			System.out.println(Arrays.deepToString(ints));
		}
	}
}
