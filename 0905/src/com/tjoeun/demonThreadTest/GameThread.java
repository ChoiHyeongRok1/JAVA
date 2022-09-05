package com.tjoeun.demonThreadTest;

public class GameThread {
	
	public static void main(String[] args) {
		
		BGMThread bgmThread = new BGMThread();
		
//		demon 스레드는 다른 스레드가 모두 종료되면 같이 종료되는 스레드를 말한다.
		bgmThread.setDaemon(true);
		bgmThread.start();
		
		
		
		for(int i=0; i<10; i++) {
			System.out.println("게임 플레이 중");
			
			if(i==7) {
				System.out.println("엄크");
				System.out.println("엄크로 인해 게임 종료");
				break;
			}
			
			try {
				Thread.sleep(500);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
		
	}

}
