import java.util.Scanner;

public class PangramChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a sentence: ");
        String input = scanner.nextLine();
        
        if (isPangram(input)) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String input) {
       
        boolean[] alphabetPresent = new boolean[26];

        
        input = input.toLowerCase();

        
        for (int i = 0; i < input.length(); i++) {
            char c = input.charAt(i);
            if (c >= 'a' && c <= 'z') {
                alphabetPresent[c - 'a'] = true;
            }
        }

       

        for (boolean letterPresent : alphabetPresent) {
            if (!letterPresent) {
                return false;
            }
        }

        return true;
    }
}
