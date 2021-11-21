
// verify string is a string

// look for commas

// remove each comma

// return list w line breaks in between each thing -- onClick submit or whatever

// remove whitespace at the beginning of each new line

// oo maybe 2 buttons -- one to transform a comma list into a vert list and one to transform a vert list into a comma list


// variables

// let inputString = document.getElementById('inputList').value;

// functions

	// comma separated list > list of items, each on their own line

	// works except every element but the last one has a space after it lol idk
function removeCommas() {

	let str = document.getElementById('inputList').value;


	let arr = str.split(',');

	let list = arr.map(element => {
		return element.trim();
	})

	document.getElementById('results').innerHTML = list.join('\n');

	console.log(arr[1]);

	return null;


}



	// list of items on their own line > comma separated list


function addCommas() {

	let str = document.getElementById('inputList').value;

	str = str.split('\n');

	console.log(str);

	document.getElementById('results').innerHTML = str.join(', ');

	return null;

}



	// alternate case a la spongebob meme

function alternateCase() {

	let str = document.getElementById('inputList').value;

	str = str.toLowerCase().split("");

	for (let i = 0; i < str.length; i += 2) {

		str[i] = str[i].toUpperCase();
	}

	document.getElementById('results').innerHTML = str.join("");

	return null;
};



















function copy() {

	let text = document.getElementById('results');
	text.select();
	text.setSelectionRange(0, 99999); // for mobile?? idk lol
	navigator.clipboard.writeText(text.value);
}





// calls























/* original function -- works but leaves spaces in front of newlines 
function removeCommas() {

	let str = document.getElementById('inputList').value;

	let newList = str.replaceAll(',', '\n');

	document.getElementById('results').innerHTML = newList;

	console.log(newList);

	return null;

}

*/
