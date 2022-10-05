//	선언하지 않은 변수를 사용하면 에러가 발생된다.
'use strict' // ECMA Script5에서 추가

console.log('Hello World');
	
//  자바스크립트는 변수를 선언할 때 앞에 자료형을 쓰지 않는다.
//	변수에 대입되는 데이터의 형태에 따라서 자동으로 변수의 자료형이 결정된다.
//  int a = 111; 에러 발생
a = 100; // 예전 방식
console.log('a: ' + a);

//	ECMA Script5 부터 변수를 선언할 때 앞에 var를 붙여서 선언하기 시작했다.
var a = 120; 
console.log('a: ' + a);
//	먼저 선언한 변수를 다시 선언할 수 있는 문제점이 있다.
var a = 'abcd';
console.log('a: ' + a);

//	ECMA Script6 부터 변수를 선언할 때 앞에 let이나 const를 붙여서 선언하기 시작했다.
let b = 300;
console.log('b: ' + b);
//	let은 먼저 선언한 변수를 다시 선언하면 에러가 발생한다.
//	let b = 'abcd';
b = 'abcd';
console.log('b: ' + b);

const c = 400;
console.log('c: ' + c);
//	const는 상수를 의미하므로 같은변수를 다시 선언하면 안된다.
//	const c = 400;
c = 'abcd'; // 에러 발생
























