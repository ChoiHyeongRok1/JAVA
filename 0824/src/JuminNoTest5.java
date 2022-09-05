import java.util.Date;
import java.util.Scanner;

public class JuminNoTest5 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.print("주민등록번호 13자리를 '-'없이 입력하세요: ");
		String jumin = scanner.nextLine().trim();
		
//		8304221185600
		
		
		String check = "234567892345";
		int sum = 0;
		for(int i=0; i<12; i++) {
//			sum += (jumin.charAt(i) - '0') * (check.charAt(i) - '0');
			sum += Integer.parseInt(jumin.charAt(i) + "") * Integer.parseInt(check.charAt(i) + "");
		}
		System.out.println(sum);
		
//		주민등록번호의 각 자리 숫자와 가중치를 곱한 합계를 11로 나눈 나머지를 11에서 뺀다.
//		뺀 결과가 10이상이면 10의 자리는 버리고 1의 자리만 취한다.
		
		int result = (11- sum%11)%10;
		
		if(result == jumin.charAt(12)-48) {
			System.out.println("정상");
		}else {
			System.out.println("오류");
		}
	
	}

}
