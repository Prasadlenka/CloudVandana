import java.util.Arrays;
import java.util.Random;

public class shuffleArray {
    public static void main(String[] args) {
        int[] originalArray = { 1, 2, 3, 4, 5, 6, 7 };

        
        int[] shuffledArray = Arrays.copyOf(originalArray, originalArray.length);

        
        shuffleArray(shuffledArray);

        
        System.out.println(Arrays.toString(shuffledArray));
    }

    public static void shuffleArray(int[] array) {
        int n = array.length;
        Random random = new Random();

        for (int i = n - 1; i > 0; i--) {
            int j = random.nextInt(i + 1);
            
            int temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}
