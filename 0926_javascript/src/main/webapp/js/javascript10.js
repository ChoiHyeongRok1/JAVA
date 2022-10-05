const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (i=0; i<numbers.length; i++){
	sum += numbers[i];
}
console.log(sum);

sum = 0;
function total(n){
	sum += n;
}
numbers.forEach(total);
console.log(sum);

sum = 0;
numbers.forEach(function total(n){
	sum += n;
});
console.log(sum);

sum = 0;
numbers.forEach(n => sum += n);
console.log(sum);

console.log('============================================');

/*	
	배열.reduce(function(accumulrator[, currentValue, currentIndex, array]){
		실행할 문장;
		...;
		return 값; // 먼저 실행한 return값이 다음 실행의 accumulrator에 저장된다.
	}[, accumulrator의 초기치])
	
	배열.reduce(accumulrator[, currentValue, currentIndex, array] => {
		실행할 문장;
		...;
		return 값; // 먼저 실행한 return값이 다음 실행의 accumulrator에 저장된다.
	}[, accumulrator의 초기치])
	
	accumulator: 연산 결과가 저장될 기억장소
		=> accumulator의 초기치가 생략되면 reduce() 함수를 실행하는 배열의 0번째 index값이 초기치로 지정된다.
	currentValue: reduce() 함수를 실행하는 배열의 값이 차레대로 넘어와 저장되는 변수
	currnetIndex: currentValue로 넘어오는 값의 index가 저장되는 변수
	array: reduce() 함수를 실행하는 배열 자신을 의미한다.
*/

//	최초 실행 시 accumulator의 초기치를 accumulator에 저장한 후 반복이 시작되고 그 다음부터는 현재
//	실행의 return 값이 다음 실행의 accumulator에 저장한 후 끝까지 반복한다.
sum = numbers.reduce(function(accumulator, currentValue, currnetIndex, array){
	console.log(accumulator, currentValue, currnetIndex, array);
	return accumulator + currentValue;
}, 0)

console.log(sum);

sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum);
console.log('============================================');

const numbers2 = [1, 2, 3, 4, 5, 10, 20, 30, 40, 50, 60];

let count = 0;
for(let i=0; i<numbers2.length; i++){
	if(numbers2[i]>10){
		count++;
	}
}

console.log(count);

function tenOverNumber(number){
	let count = 0;
	number.forEach(n => {
		if(n>10){
			count++;
		}
	})
	return count;
}
count = tenOverNumber(numbers2);
console.log(count)

console.log('============================================');

const index = numbers2.filter(function(number2){
	return number2 > 10;
})

console.log(index.length);

console.log('============================================');

function tenOverNumber2(numbers){
	return numbers.reduce(function(ac, cu){
		if(cu > 10){
			// 조건을 만족하면 10 이상인 경우이므로 현재 ac값에 1을 더해서 다음으로 넘겨준다.
			// ac++을 사용하면 현재 ac값인 0을 다음 실행의 ac에 넣어주기 때문에 최종 결과가 0이 나온다.
			return ac + 1;
		}else{
			// 조건을 만족하지 않으면 10이하인 경우이므로 현재 acc값을 그대로 다음으로 넘겨준다.
			return ac;
		}
	}, 0);
}

count = tenOverNumber2(numbers2);
console.log(count);
console.log('============================================');

//	배열에 저장된 문자 개수세기
const alpha = ['a', 'a', 'a', 'b', 'c', 'c', 'd', 'e'];

const alphaCount = alpha.reduce(function(acc, curr){
//	console.log(acc, curr);
	if(acc[curr]){ // 객체에 curr에 저장된 key가 있는가?
		// key가 있으면 문자의 개수를 증가시킨다.
		acc[curr] += 1;
	} else {
		// key가 없으면 1로 초기화시킨다.
		acc[curr] = 1;
	}
	return acc;
}, {}); // acc를 빈 객체로 초기화한다.
console.log(alphaCount);

































