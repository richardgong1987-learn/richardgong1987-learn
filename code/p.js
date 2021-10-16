/**
 *
 var output = [];
 P([1, 2, 3], 3,output);
 console.log(output);
 [
 [ 1, 2, 3 ],
 [ 1, 3, 2 ],
 [ 2, 1, 3 ],
 [ 2, 3, 1 ],
 [ 3, 1, 2 ],
 [ 3, 2, 1 ]
 ]

 */
function P(array, k, output) {
    var comb = [];
    var indices = {};

    function run(level) {
        for (var i = 0; i < array.length; i++) {
            if (!indices[i]) {
                indices[i] = true;
                comb[level] = array[i];
                console.log(`i=${i}, indices=${JSON.stringify(indices)}, comb=${comb}`);
                if (level < k - 1) {
                    console.log()
                    run(level + 1);
                } else {
                    output.push(comb.concat());
                }
                indices[i] = false;
            }
        }
    }

    run(0);
}

var output = [];
P([1, 2, 3], 3, output);
console.log(JSON.stringify(output));

