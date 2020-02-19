/* Write a Program to Flatten a given n-dimensional array */

const flatten = (input) => {
	// Write your code here
	if(Array.isArray(input)){
	Array.prototype.flatten = (array) => {
		const newAr = [];
		const flat = (array) => {
				return array.map(i => {
					Array.isArray(i) ? flat(i) : newAr.push(i)
				})
			
		}
		flat(input);
		return newAr;
	};
	const result = input.flatten();
	return result;
}else{
	return null;
}
};

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
