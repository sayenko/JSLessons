//minimum
//1.

var products = ['Apple', 'Orange', 'Cherry'];
console.log(products[products.length-1]);

//2.
var styles = ['Jazz', 'Blues'];
styles.push('Rock \'n\' Roll');
console.log(styles);
styles.splice(-2, 1, 'Classical');
console.log(styles);
console.log(styles.shift());
styles.unshift('Rap', 'Reggae');
console.log(styles);

//3.
function find(arr, value){
	for(var i = 0; i < arr.length; i++){
		if(arr[i] === value){
			return i;
		}
	}
	return -1;
}
console.log(find(styles, 'Apple'));

//maximun
//4.

function filterRange(array, a, b){
	return array.splice(a , b+1);
}
console.log(filterRange(styles, 1, 3));

//5.
console.log('--------------------');
function camelize(str){
	if (!str) return str;
	var mas = str.split('-');
	var masNew = [];
	for(var i = 0; i < mas.length; i++){
		if(i == 0){
			masNew.push(mas[i]);
		} else if(i > 0 && mas[i][0]){
			masNew.push(mas[i][0].toUpperCase() + mas[i].slice(1));
		}
	}
	return masNew.join('');
}

console.log(camelize('my-short-string'));
