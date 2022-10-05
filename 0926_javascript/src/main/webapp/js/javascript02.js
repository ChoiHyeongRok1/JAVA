//	변수(variable)
'use strict'; // 변수가 var, let, const로 선언되지 않으면 에러를 발생시킨다.

//	변수의 타입
//	primitive type(기본 자료형, 원시 자료형)
//		=> number(숫자), string(문자), boolean(논리), null, undefined, symbol(ES6)
//	object(객체), box container 
//	function => 함수도 변수에 할당이 가능하다.
//		=> 함수의 인수로 전달도 가능하다. 함수의 결과로 리턴도 가능하다. => 일급함수

//	var를 사용해서 선언한 변수는 프로그램 어디에서 선언하던지 항상 맨 위로 끌어올려진다.
//	변수를 선언만 하고 값을 할당하지 않으면 undefined가 된다.
//	var age;
console.log('age: ' + age);

//	var => ES5
//	variable hoisting: 아래에 var로 선언한 변수를 맨 위로 끌어올린다.
//	어디에 선언했냐에 상관없이 항상 제일 위로 변수 선언을 끌어올리는 것을 말한다.

console.log('age: ' + age);	// undefined
var age = 100;
console.log('age: ' + age);	// 100

var age = '백';	// var는 같은 이름의 변수를 다시 선언할 수 있다.
console.log('age: ' + age);	// 백

//	var는 block scope를 사용하지 않고 function scope를 사용한다. => 유연성
//	block scope: 변수가 선언된 {} 블록 내부에서만 사용할 수 있다. => let, const
//	function scope: 변수가 선언된 함수에서만 사용할 수 있다. => var
//	block scope 변수가 선언된 {} 블록 밖으로 나가면 소멸되고 function scope 변수가 선언된 함수가 종료되면 소멸된다.

//	let => ES6에서 추가
//	block scope

let globalName = '홍길동';
{
	let name = '장길산';
	console.log('name: ' + name);
	// neme = '임꺽정'; // 선언된 변수에 값을 할당한다.
	console.log('name: ' + name);
	console.log('globalName: ' + globalName);
}

console.log('name: ' + name); // 아무런 값이 출력되지 않는다.
console.log('globalName: ' + globalName);
	
	//	상수(constant)
	//	선언시 값을 할당한 다음 값을 변경할 수 없는 데이터 타입, 보안성
	
//	const maxNumber; 상수는 최초 선언시 값을 할당해야 하므로 에러가 발생된다.

const maxNumber = 100;
console.log('maxNumber: ' + maxNumber);
console.log('====================================================');

let count = 17.5;
const size = true;
//	template: `(그레이브)를 사용한다. => ${ ~ } 사이에 출력한다.
//	typeof 명령으로 변수의 자료형을 할 수 있다.
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1 / 0;
//	자바스크립트는 나눗셈을 0으로 하면 결과가 infinity가 된다.
console.log(`value: ${infinity}, type: ${typeof infinity}`);

const negativeinfinity = - 1 / 0;
console.log(`value: ${negativeinfinity}, type: ${typeof negativeinfinity}`);

const nan = 'Not A Number' / 2;
console.log(`value: ${nan}, type: ${typeof nan}`);

//	dynamic typing(동적 자료형): 변수에 저장되는 데이터의 타입에 맞춰 변수의 타입이 결정된다.
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
console.log('====================================================');

//	symbol: 고유한 식별자를 만들 때 사용한다.
const symbol = Symbol('id');
console.log(symbol);
console.log(`type: ${typeof symbol}`);

//	object(객체)
const obj = {
	name: '홍길동',
	age: 20
}
console.log(obj);
console.log(obj.name);
console.log(obj.age);
obj.age = 21;
console.log(obj);
console.log(typeof obj);


const obj2 = {
	name: '홍길동',
	age: 30
}

console.log(obj2);
console.log(typeof obj2);























