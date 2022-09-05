import java.util.Scanner;

public class WeekDayTest {
	public static void main(String[] args) {
//		요일을 계산할 년,월,일 을 입력받는다.
		Scanner scanner = new Scanner(System.in);
		System.out.print("요일을 계산할 년, 월, 일을 입력하세요: ");
		int year = scanner.nextInt();
		int month = scanner.nextInt();
		int day = scanner.nextInt();
		
//		서기 1년 1월 1일 부터 요일을 계산하기 위해 입력한 날짜까지 지난 날짜수를 계산한다.
//		계산된 날짜를 7로 나눈 나머지가 0이면 일요일, 1일이면 월요일, ... , 6이면 토요일
		
//		서기 1년 1월 1일부터 입력한 날짜의 전년도 12월 31일 까지 지난 날짜를 계산한다.
		int sum = (year-1) * 365 + (year-1)/4 - (year-1)/100 + (year-1)/400;
		
//		int sum = (year-1) * 365;
//		for(int i=1; i<year; i++) {
//			if(i % 4==0 && i % 100!=0 || i % 400==0) {
//				sum++;
//			}
//		}
		
//		전년도 12월 31일까지 지난 날짜에 전달까지 지난 날짜를 더한다.
//		for(int i=1; i<month; i++) {
//			switch(i) {
//			case 2:
//				sum += year % 4==0 && year % 100!=0 || year % 400==0 ? 29 :28;
//				break;
//			case 4: case 6: case 9: case 11:
//				sum += 30;
//				break;
//			default:	
//				sum += 31;
//				break;	
//			}
//			
//			
//			
//		}
		int[]m = {31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
		m[1] = year % 4==0 && year % 100!=0 || year % 400==0 ? 29 :28;
		for(int i=1; i<month; i++) {
			sum += m[i-1];
		}
//		전달까지의 날짜에 일을 더한다.
		sum +=day;
		
		System.out.println(sum);
//		System.out.println(sum % 7);
		
//		String[] week = {"월요일","화요일","수요일","목요일","금요일","토요일""일요일"};
//		
//		if(year % 4==0 && year % 100!=0 || year % 400==0) {
//			int sum = (year-1)*366;
//		}else {
//			int sum = (year-1)*365;
//		}
		
//		요일을 출력한다.
		switch(sum%7) {
		case 0: System.out.println("일요일"); break;
		case 1: System.out.println("월요일"); break;
		case 2: System.out.println("화요일"); break;
		case 3: System.out.println("수요일"); break;
		case 4: System.out.println("목요일"); break;
		case 5: System.out.println("금요일"); break;
		case 6: System.out.println("토요일"); break;
		
		}
		String[] week = {"일요일","월요일","화요일","수요일","목요일","금요일","토요일"};
		System.out.println(week[sum%7]);
		char[] week2 = {'일', '월', '화', '수', '목', '금', '토'};
		System.out.println(week2[sum%7]);

	
	}

}
