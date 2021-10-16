/**
 *  e.g

 var output = [];
 getC([1,2,3], 2, 0, [], output);
 console.log(output);

 0: (2) [1, 2]
 1: (2) [1, 3]
 2: (2) [2, 3]

 */
function getC(array, size, start, init, output) {
    console.log(`start = ${start}, init=${JSON.stringify(init)}`)
    if (init.length >= size) {
        output.push(init);
    } else {
        for (let i = start; i < array.length; i++) {
            // console.log(`start=${i + 1}, i=${i}, array[i]=${array[i]}, init=${JSON.stringify(init)}`);
            getC(array, size, i + 1, init.concat(array[i]), output);
        }
    }
}

var output = [];
getC([1, 2, 3], 2, 0, [], output);
console.log(JSON.stringify(output));
