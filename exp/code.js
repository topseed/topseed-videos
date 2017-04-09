/*
1. hello -> ellohay
2. apples -> applesay
3. eat world -> eatay orldway
4. Hello -> Ellohay
5. Eat -> Eatay
6. 'hello...  world!?' -> 'ellohay...  orldway!?'
7. school -> oolschay
*/

/*
console.log(pig('hello'));
console.log(pig('apple'));
console.log(pig('eat world'));
console.log(pig('Hello'));
console.log(pig('Eat'));
*/

pig('hello...  world!?');

function pig(args) {
	const re = /\s+/;
	const words = args.split(re);
	let capture = '';
	for(let word of words) {
		capture +=( pigWord(word) +' ');
	}
	return capture;
}

function pigWord(arg) {
	let lower = true;
	const first = arg.substring(0,1);
	if (first == first.toUpperCase()) {
		lower = false;
	}

	const ending = 'ay';
	const vow = ['a','e','i','o','u', 'A','E','I','O','U'];
	let pig = arg.substring(1);

	if(vow.indexOf(first) >= 0 ) {//vow
		pig = arg + ending;  
	} 
	else {
		pig = pig + first + ending;  
	}

	if(!lower) {
		pig = pig.toLowerCase();
		pig = pig.charAt(0).toUpperCase() + pig.slice(1);
	} 
	console.log(pig);
	pig = filter(pig);
	console.log(pig);
	return pig;
}



//console.log(filter('vic'));
//console.log(filter('v..i! c'));

function filter(str) {// move special chars to end.
	let clean = '';
	let other = ''; 
	const re = /[a-z|A-Z|\S+]/;

	for(let char of str) {
		if(re.test(char)) {
			clean += char;
		} else {
			other += char;
		}
	}//()

	return clean + other;
}


