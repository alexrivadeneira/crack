// calculate a, b, c, d - all btwn [1, 1000]

// brute force

// for(var a = 1; a < 1001; a++){
// 	for(var b = 1; b < 1001; b++){
// 		for(var c = 1; c < 1001; c++){
// 			for(var d = 1; d < 1001; d++){

// 				if((Math.pow(a,3) + Math.pow(b,3)) === (Math.pow(c,3) + Math.pow(d,3))){
// 					console.log(a, b, c, d);
// 					break;
// 				}
// 			}
// 		}
// 	}
// }

// just solving for d

// for(var a = 1; a < 1001; a++){
// 	for(var b = 1; b < 1001; b++){
// 		for(var c = 1; c < 1001; c++){
// 			d = Math.pow( (Math.pow(a, 3) + Math.pow(b, 3) - Math.pow(c,3)), 1/3);
// 			if(Math.pow(a,3) + Math.pow(b, 3) === Math.pow(c, 3) + Math.pow(d, 3) && d <= 1000 && d >= 0){
// 				console.log(a, b, c, d);
// 			}
// 		}
// 	}
// }


// Use dict to save some of the values so not recalculating


var list = {};

for(var a = 1; a <= 1000; a++){
	for(var b = 1; b <= 1000; b++){
		result = Math.pow(b, 3) + Math.pow(a, 3);
		list[result] = [a, b];
		console.log(list);
	}
}

console.log(list);



console.log(Math.pow(5,3) + Math.pow(858, 3), Math.pow(5, 3) + Math.pow(858,3));