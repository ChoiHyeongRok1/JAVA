function searchParent(){
	let child = document.getElementsByTagName('p')[0];
	console.log(child);
	
//	parentNode는 탐색된 요소(element)의 부모 요소를 탐색한다.
	let parentDiv = child.parentNode;
	console.log(parentDiv);
	parentDiv.style.backgroundColor = 'aqua';
	
//	nodeName은 탐색된 요소의 태그 이름을 얻어온다.
	console.log(parentDiv.nodeName);
}

function searchChild(){
	let parent = document.getElementsByTagName('div')[0];
	console.log(parent);
	/*
//	children은 탐색된 요소의 자식 요소(태그만) 탐색한다.
	let childs = parent.children;
	console.log(childs);
	
	console.log(childs[0]);
	console.log(childs[1]);
	console.log(childs[2]);
	
	childs[0].style.backgroundColor = 'skyblue';
	childs[1].style.backgroundColor = 'yellowgreen';
	childs[2].style.backgroundColor = 'dodgerblue';
	*/
//	childNodes는 탐색된 요소의 자식 요소(태그 및 텍스트)를 탐색한다.
	childs = parent.childNodes;
	
	console.log(childs);
	console.log(childs[1]);
	console.log(childs[3]);
	console.log(childs[5]);
	
	childs[1].style.backgroundColor = 'skyblue';
	childs[3].style.backgroundColor = 'yellowgreen';
	childs[5].style.backgroundColor = 'dodgerblue';
}


function testSearch(){
	let test1 = document.getElementsByTagName('p')[3];
	console.log(test1);
	let div = test1.parentNode;
	console.log(div);
	div.style.backgroundColor = 'lightgray';
	
	let test2 = document.getElementsByTagName('div')[3];
	console.log(test2);
	let childs = test2.childNodes;
	console.log(childs);
	childs[3].style.fontSize = '20px';
	
}














































