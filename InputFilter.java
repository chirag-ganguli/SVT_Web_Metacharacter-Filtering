import java.util.Scanner;

public class InputFilter {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.print("Input your text: ");
		String badInput = sc.nextLine();
		System.out.println("badInput = " + badInput);
		String filteredInput = InputFilter.Filter(badInput);
		System.out.println("filteredInput = " + filteredInput);
	}
	
	public static String Filter(String userInput) {
		
		String filtered = userInput.replaceAll("([^A-Za-z0-9@.' _-]+)", "_");
		return filtered;
		
	}
	
	
}

