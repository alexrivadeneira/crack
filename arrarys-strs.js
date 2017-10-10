// Does str have all unique chars?



// Js Hash table

var h = new Object();

h['one'] = 1;
h['two'] = 2;
h['three'] = 3;

for(var k in h){
	if(h.hasOwnProperty(k)){
		console.log('key is ' + k + ', value is ' + h[k]);
	}
}

console.log(h.length);
// function uniqueChars(myStr){


// 	for(var i = 0; i < myStr.length; i++){
// 		for(var j = 0; j < myStr.length; j++){
// 			if(i !== j){
// 				if(myStr[i] === myStr[j]){
// 					return false;
// 				}
// 			}				
// 		}
// 	}

// 	return true;
// }


// console.log(uniqueChars("alexA"));
// console.log(uniqueChars("alexela"));
// console.log(uniqueChars("sar"));
// console.log(uniqueChars("sarda-!A"));