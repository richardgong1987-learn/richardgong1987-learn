# algorithm math notation

https://latex.codecogs.com/

https://editor.codecogs.com/

https://en.wikipedia.org/wiki/Glossary_of_mathematical_symbols


## variable name conventions

- *s* - italic lowercase letters for scalars (e.g. a number)
- **x** - bold lowercase letters for vectors (e.g. a 2D point)
- **A** - bold uppercase letters for matrices (e.g. a 3D transformation)
- *θ* - italic lowercase Greek letters for constants and special variables


## equals symbols

- `=` is for equality (values are the same)
- `≠` is for inequality (value are not the same)
- `≈` is for approximately equal to (`π ≈ 3.14159`)
- `:=` is for definition (A is defined as B)

```js
// equality
2 === 3

// inequality
2 !== 3

// approximately equal
almostEqual(Math.PI, 3.14159, 1e-5)

function almostEqual(a, b, epsilon) {
  return Math.abs(a - b) <= epsilon
}
```


![equals1](http://latex.codecogs.com/svg.latex?x%20%3A%3D%202kj)

![equals2](http://latex.codecogs.com/svg.latex?x%20%3D%202kj)


```js

var x = 2 * k * j

const f = (k, j) => 2 * k * j

```

## square root and complex numbers


![squareroot](http://latex.codecogs.com/svg.latex?%5Cleft%28%5Csqrt%7Bx%7D%5Cright%29%5E2%20%3D%20x)


```js
var x = 9;
console.log(Math.sqrt(x));
//=> 3
```

Complex numbers: ![complex](http://latex.codecogs.com/svg.latex?a&space;&plus;&space;ib), where ![a](http://latex.codecogs.com/svg.latex?a) is the real part and ![b](http://latex.codecogs.com/svg.latex?b) is the imaginary part. The imaginary number ![i](http://latex.codecogs.com/svg.latex?i) is defined as:

![imaginary](http://latex.codecogs.com/svg.latex?i%3D%5Csqrt%7B-1%7D).


```js
var math = require('mathjs')

var a = math.complex(3, -1)
//=> { re: 3, im: -1 }

var b = math.sqrt(-1)
//=> { re: 0, im: 1 }

console.log(math.multiply(a, b).toString())
//=> '1 + 3i'

console.log(math.eval('(3 - i) * i').toString())
//=> '1 + 3i'
```

## dot & cross

#### scalar multiplication

![dotcross1](http://latex.codecogs.com/svg.latex?5%20%5Ccdot%204%20%3D%205%20%5Ctimes%204)

```js
var result = 5 * 4
```


![dotcross2](http://latex.codecogs.com/svg.latex?3kj)

```js
var result = 3 * k * j
```

#### vector multiplication


![dotcross3](http://latex.codecogs.com/svg.latex?3%5Cmathbf%7Bk%7D%5Ccirc%5Cmathbf%7Bj%7D)


```js
var s = 3
var k = [ 1, 2 ]
var j = [ 2, 3 ]

var tmp = multiply(k, j)
var result = multiplyScalar(tmp, s)
//=> [ 6, 18 ]

function multiply(a, b) {
  return [ a[0] * b[0], a[1] * b[1] ]
}

function multiplyScalar(a, scalar) {
  return [ a[0] * scalar, a[1] * scalar ]
}
```


#### dot product


![dotcross4](http://latex.codecogs.com/svg.latex?%5Cmathbf%7Bk%7D%5Ccdot%20%5Cmathbf%7Bj%7D)


```js
var k = [ 0, 1, 0 ]
var j = [ 1, 0, 0 ]

var d = dot(k, j)
//=> 0

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
}
```

#### cross product


![dotcross5](http://latex.codecogs.com/svg.latex?%5Cmathbf%7Bk%7D%5Ctimes%20%5Cmathbf%7Bj%7D)


```js
var k = [ 0, 1, 0 ]
var j = [ 1, 0, 0 ]

var result = cross(k, j)
//=> [ 0, 0, -1 ]

function cross(a, b) {
  var ax = a[0], ay = a[1], az = a[2],
    bx = b[0], by = b[1], bz = b[2]

  var rx = ay * bz - az * by
  var ry = az * bx - ax * bz
  var rz = ax * by - ay * bx
  return [ rx, ry, rz ]
}
```



## sigma 

The big Greek `Σ` (Sigma), summing up some numbers.

![sigma](http://latex.codecogs.com/svg.latex?%5Csum_%7Bi%3D1%7D%5E%7B100%7Di)


```js
var sum = 0
for (var i = 1; i <= 100; i++) {
  sum += i
}
```



![sum2](http://latex.codecogs.com/svg.latex?%5Csum_%7Bi%3D1%7D%5E%7B100%7D%282i&plus;1%29)


```js
var sum = 0
for (var i = 1; i <= 100; i++) {
  sum += (2 * i + 1)
}
```


![sigma3](http://latex.codecogs.com/svg.latex?%5Csum_%7Bi%3D1%7D%5E%7B2%7D%5Csum_%7Bj%3D4%7D%5E%7B6%7D%283ij%29)


```js
var sum = 0
for (var i = 1; i <= 2; i++) {
  for (var j = 4; j <= 6; j++) {
    sum += (3 * i * j)
  }
}
```


## capital Pi


![capitalPi](http://latex.codecogs.com/svg.latex?%5Cprod_%7Bi%3D1%7D%5E%7B6%7Di)


```js
var value = 1
for (var i = 1; i <= 6; i++) {
  value *= i
}
```

## pipes

#### absolute value 

![pipes1](http://latex.codecogs.com/svg.latex?%5Cleft%20%7C%20x%20%5Cright%20%7C)


```js
var x = -5
var result = Math.abs(x)
// => 5
```

#### Euclidean norm

![pipes4](http://latex.codecogs.com/svg.latex?%5Cleft%20%5C%7C%20%5Cmathbf%7Bv%7D%20%5Cright%20%5C%7C)


![pipes2](http://latex.codecogs.com/svg.latex?%5Cleft%20%7C%20%5Cmathbf%7Bv%7D%20%5Cright%20%7C)



```js
var v = [ 0, 4, -3 ]
length(v)
//=> 5

function length ([x,y,z]) {
  return Math.sqrt(x * x + y * y + z * z)
}
```


#### determinant

![pipes3](http://latex.codecogs.com/svg.latex?%5Cleft%20%7C%5Cmathbf%7BA%7D%20%5Cright%20%7C)


matrix **A**, `|A|` means the [determinant](https://en.wikipedia.org/wiki/Determinant) of matrix **A**.

computing the determinant of a 2x2 matrix, represented by a flat array in column-major format.

```js
var determinant = require('gl-mat2/determinant')

var matrix = [ 1, 0, 0, 1 ]
var det = determinant(matrix)
//=> 1
```

## hat

In geometry, the "hat" symbol above a character is used to represent a [unit vector](https://en.wikipedia.org/wiki/Unit_vector). For example, here is the unit vector of **a**:

![hat](http://latex.codecogs.com/svg.latex?%5Chat%7B%5Cmathbf%7Ba%7D%7D)


In Cartesian space, a unit vector is typically length 1. That means each part of the vector will be in the range of -1.0 to 1.0. Here we *normalize* a 3D vector into a unit vector:

```js
var a = [ 0, 4, -3 ]
normalize(a)
//=> [ 0, 0.8, -0.6 ]

function normalize(vec) {
  var x = vec[0]
  var y = vec[1]
  var z = vec[2]
  var squaredLength = x * x + y * y + z * z

  if (squaredLength > 0) {
    var length = Math.sqrt(squaredLength)
    vec[0] = x / length
    vec[1] = y / length
    vec[2] = z / length
  }
  return vec
}
```


## element

In set theory, the "element of" symbol `∈` and `∋` can be used to describe whether something is an element of a *set*. 



 *A* `{ 3, 9, 14 }` and we are saying `3` is an "element of" that set. 


```js
var A = [ 3, 9, 14 ]

A.indexOf(3) >= 0
//=> true

var A = new Set([ 3, 9, 14 ])

A.has(3)
//=> true
```

The backwards `∋` is the same, but the order changes:


<!-- A=\left \{3,9,14}{  \right \}, A \ni 3 -->

You can also use the "not an element of" symbols `∉` and `∌` like so:



## common number sets

describe *k* to be an element of the set `ℝ`. 

![real](http://latex.codecogs.com/svg.latex?k%20%5Cin%20%5Cmathbb%7BR%7D)


Listed below are a few common sets and their symbols.

#### `ℝ` real numbers

The large `ℝ` describes the set of *real numbers*. These include integers, as well as rational and irrational numbers.


```js
function isReal (k) {
  return typeof k === 'number' && isFinite(k);
}
```

*Note:* Real numbers are also *finite*, as in, *not infinite.*

#### `ℚ` rational numbers

Rational numbers are real numbers that can be expressed as a fraction, or *ratio* (like `⅗`). Rational numbers cannot have zero as a denominator.

This also means that all integers are rational numbers, since the denominator can be expressed as 1.

An irrational number, on the other hand, is one that cannot be expressed as a ratio, like π (PI). 

#### `ℤ` integers

An integer,  a real number that has no fractional part. These can be positive or negative.


```js
function isInteger (n) {
  return typeof n === 'number' && n % 1 === 0
}
```

#### `ℕ` natural numbers

A natural number, a positive and non-negative integer. Depending on the context and field of study, the set may or may not include zero, so it could look like either of these:

```js
{ 0, 1, 2, 3, ... }
{ 1, 2, 3, 4, ... }
```


```js
function isNaturalNumber (n) {
  return isInteger(n) && n >= 0
}
```

#### `ℂ` complex numbers

A complex number is a combination of a real and imaginary number, viewed as a co-ordinate in the 2D plane. For more info, see [A Visual, Intuitive Guide to Imaginary Numbers](http://betterexplained.com/articles/a-visual-intuitive-guide-to-imaginary-numbers/).

## function

![function2](http://latex.codecogs.com/svg.latex?f%5Cleft%20%28x%20%5Cright%20%29%20%3D%20x%5E%7B2%7D)

![function3](http://latex.codecogs.com/svg.latex?y%20%3D%20x%5E%7B2%7D)

```js
function square (x) {
  return Math.pow(x, 2)
}
```

![function4](http://latex.codecogs.com/svg.latex?f%28x%2Cy%29%20%3D%20%5Csqrt%7Bx%5E2%20&plus;%20y%5E2%7D)


```js
function length (x, y) {
  return Math.sqrt(x * x + y * y)
}
```

### piecewise function



![piecewise1](http://latex.codecogs.com/svg.latex?f%28x%29%3D%20%5Cbegin%7Bcases%7D%20%5Cfrac%7Bx%5E2-x%7D%7Bx%7D%2C%26%20%5Ctext%7Bif%20%7D%20x%5Cgeq%201%5C%5C%200%2C%20%26%20%5Ctext%7Botherwise%7D%20%5Cend%7Bcases%7D)



```js
function f (x) {
  if (x >= 1) {
    return (Math.pow(x, 2) - x) / x
  } else {
    return 0
  }
}
```

### common functions


![sgn](http://latex.codecogs.com/svg.latex?sgn%28x%29%20%3A%3D%20%5Cbegin%7Bcases%7D%20-1%26%20%5Ctext%7Bif%20%7D%20x%20%3C%200%5C%5C%200%2C%20%26%20%5Ctext%7Bif%20%7D%20%7Bx%20%3D%200%7D%5C%5C%201%2C%20%26%20%5Ctext%7Bif%20%7D%20x%20%3E%200%5C%5C%20%5Cend%7Bcases%7D)

<!-- sgn(x) := 
\begin{cases}
    -1& \text{if } x < 0\\
    0, & \text{if } {x = 0}\\
    1, & \text{if } x > 0\\
\end{cases} -->


```js
function sgn (x) {
  if (x < 0) return -1
  if (x > 0) return 1
  return 0
}
```

Other examples of such functions: *sin*, *cos*, *tan*.

### function notation


![function2](http://latex.codecogs.com/svg.latex?f%5Cleft%20%28x%20%5Cright%20%29%20%3D%20x%5E%7B2%7D)

<!-- f\left (x  \right ) = x^{2} -->


![mapsto](http://latex.codecogs.com/svg.latex?f%20%3A%20x%20%5Cmapsto%20x%5E2)

<!-- f : x \mapsto x^2 -->

The arrow here with a tail typically means "maps to," as in *x maps to x<sup>2</sup>*. 


![funcnot](http://latex.codecogs.com/svg.latex?%5Cbegin%7Balign*%7D%20f%20%3A%26%5Cmathbb%7BR%7D%20%5Crightarrow%20%5Cmathbb%7BR%7D%5C%5C%20%26x%20%5Cmapsto%20x%5E2%20%5Cend%7Balign*%7D)

<!-- \begin{align*}
f :&\mathbb{R} \rightarrow \mathbb{R}\\
&x \mapsto x^2 
\end{align*}
 -->

A function's *domain* and *codomain* is a bit like its *input* and *output* types, respectively. Here's another example, using our earlier *sgn* function, which outputs an integer:

![domain2](http://latex.codecogs.com/svg.latex?sgn%20%3A%20%5Cmathbb%7BR%7D%20%5Crightarrow%20%5Cmathbb%7BZ%7D)

<!-- sgn : \mathbb{R} \rightarrow \mathbb{Z} -->

The arrow here (without a tail) is used to map one *set* to another.


```js
/**
 * Squares a number.
 * @param  {Number} a real number
 * @return {Number} a real number
 */
function square (a) {
  return Math.pow(a, 2)
}
```


## prime


![function2](http://latex.codecogs.com/svg.latex?f%5Cleft%20%28x%20%5Cright%20%29%20%3D%20x%5E%7B2%7D)

<!-- f\left (x  \right ) = x^{2} -->

Its derivative could be written with a prime `′` symbol:

![prime1](http://latex.codecogs.com/svg.latex?f%27%28x%29%20%3D%202x)

<!-- f'(x) = 2x -->

In code:

```js
function f (x) {
  return Math.pow(x, 2)
}

function fPrime (x) {
  return 2 * x
}
```


## floor & ceiling

The special brackets `⌊x⌋` and `⌈x⌉` represent the *floor* and *ceil* functions, respectively.

![floor](http://latex.codecogs.com/svg.latex?floor%28x%29%20%3D%20%5Clfloor%20x%20%5Crfloor)

<!-- floor(x) =  \lfloor x \rfloor -->

![ceil](http://latex.codecogs.com/svg.latex?ceil%28x%29%20%3D%20%5Clceil%20x%20%5Crceil)

<!-- ceil(x) =  \lceil x \rceil -->


```js
Math.floor(x)
Math.ceil(x)
```

When the two symbols are mixed `⌊x⌉`, it typically represents a function that rounds to the nearest integer:

![round](http://latex.codecogs.com/svg.latex?round%28x%29%20%3D%20%5Clfloor%20x%20%5Crceil)

<!-- round(x) =  \lfloor x \rceil -->


```js
Math.round(x)
```

## arrows

Arrows are often used in [function notation](#function-notation). Here are a few other areas you might see them.

#### material implication

Arrows like `⇒` and `→` are sometimes used in logic for *material implication.* That is, if A is true, then B is also true.

![material1](http://latex.codecogs.com/svg.latex?A%20%5CRightarrow%20B)

<!-- A \Rightarrow B -->

Interpreting this as code might look like this:

```js
if (A === true) {
  console.assert(B === true)
}
```

The arrows can go in either direction `⇐` `⇒`, or both `⇔`. When *A ⇒ B* and *B ⇒ A*, they are said to be equivalent:

![material-equiv](http://latex.codecogs.com/svg.latex?A%20%5CLeftrightarrow%20B)

<!-- A \Leftrightarrow B -->

#### equality

In math, the `<` `>` `≤` and `≥` are typically used in the same way we use them in code: *less than*, *greater than*, *less than or equal to* and *greater than or equal to*, respectively.

```js
50 > 2 === true
2 < 10 === true
3 <= 4 === true
4 >= 4 === true
```

On rare occasions you might see a slash through these symbols, to describe *not*. As in, *k* is "not greater than" *j*.

![ngt](http://latex.codecogs.com/svg.latex?k%20%5Cngtr%20j)

<!-- k \ngtr j -->

The `≪` and `≫` are sometimes used to represent *significant* inequality. That is, *k* is an [order of magnitude](https://en.wikipedia.org/wiki/Order_of_magnitude) larger than *j*.

![orderofmag](http://latex.codecogs.com/svg.latex?k%20%5Cgg%20j)

<!-- k \gg j -->

In mathematics, *order of magnitude* is rather specific; it is not just a "really big difference." A simple example of the above:

```js
orderOfMagnitude(k) > orderOfMagnitude(j)
```

And below is our `orderOfMagnitude` function, using [Math.trunc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc) (ES6).

```js
function log10(n) {
  // logarithm in base 10
  return Math.log(n) / Math.LN10
}

function orderOfMagnitude (n) {
  return Math.trunc(log10(n))
}
```



#### conjunction & disjunction

Another use of arrows in logic is conjunction `∧` and disjunction `∨`. They are analogous to a programmer's `AND` and `OR` operators, respectively.

The following shows conjunction `∧`, the logical `AND`.

![and](http://latex.codecogs.com/svg.latex?k%20%3E%202%20%5Cland%20k%20%3C%204%20%5CLeftrightarrow%20k%20%3D%203)

<!-- k > 2 \land k <  4 \Leftrightarrow k = 3   -->

we use `&&`. Assuming *k* is a natural number, the logic implies that *k* is 3:

```js
if (k > 2 && k < 4) {
  console.assert(k === 3)
}
```

Since both sides are equivalent `⇔`, it also implies the following:

```js
if (k === 3) {
  console.assert(k > 2 && k < 4)
}
```

The down arrow `∨` is logical disjunction, like the OR operator.

![logic-or](http://latex.codecogs.com/svg.latex?A%20%5Clor%20B)

<!-- A \lor B -->

In code:

```js
A || B
```

## logical negation

Occasionally, the `¬`, `~` and `!` symbols are used to represent logical `NOT`. For example, *¬A* is only true if A is false.

Here is a simple example using the *not* symbol:

![negation](http://latex.codecogs.com/svg.latex?x%20%5Cneq%20y%20%5CLeftrightarrow%20%5Clnot%28x%20%3D%20y%29)

<!-- x \neq y \Leftrightarrow \lnot(x = y) -->

An example of how we might interpret this in code:

```js
if (x !== y) {
  console.assert(!(x === y))
}
```

*Note:* The tilde `~` has many different meanings depending on context. For example, *row equivalence* (matrix theory) or *same order of magnitude* (discussed in [equality](#equality)).

## intervals

Sometimes a function deals with real numbers restricted to some range of values, such a constraint can be represented using an *interval*

For example we can represent the numbers between zero and one including/not including zero and/or one as:

- Not including zero or one: ![interval-opened-left-opened-right](http://latex.codecogs.com/svg.latex?%280%2C%201%29)

<!-- (0, 1) -->

- Including zero or but not one: ![interval-closed-left-opened-right](http://latex.codecogs.com/svg.latex?%5B0%2C%201%29)

<!-- [0, 1) -->

- Not including zero but including one: ![interval-opened-left-closed-right](http://latex.codecogs.com/svg.latex?%280%2C%201%5D)

<!-- (0, 1] -->

- Including zero and one: ![interval-closed-left-closed-right](http://latex.codecogs.com/svg.latex?%5B0%2C%201%5D)

<!-- [0, 1] -->

For example we to indicate that a point `x` is in the unit cube in 3D we say:

![interval-unit-cube](http://latex.codecogs.com/svg.latex?x%20%5Cin%20%5B0%2C%201%5D%5E3)

<!-- x \in [0, 1]^3 -->

In code we can represent an interval using a two element 1d array:

```js
var nextafter = require('nextafter')

var a = [nextafter(0, Infinity), nextafter(1, -Infinity)]     // open interval
var b = [nextafter(0, Infinity), 1]                           // interval closed on the left 
var c = [0, nextafter(1, -Infinity)]                          // interval closed on the right
var d = [0, 1]                                                // closed interval
```

Intervals are used in conjunction with set operations:

- *intersection* e.g. ![interval-intersection](http://latex.codecogs.com/svg.latex?%5B3%2C%205%29%20%5Ccap%20%5B4%2C%206%5D%20%3D%20%5B4%2C%205%29)

<!-- [3, 5) \cap [4, 6] = [4, 5) -->

- *union* e.g. ![interval-union](http://latex.codecogs.com/svg.latex?%5B3%2C%205%29%20%5Ccup%20%5B4%2C%206%5D%20%3D%20%5B3%2C%206%5D)

<!-- [3, 5) \cup [4, 6] = [3, 6] -->

- *difference* e.g. ![interval-difference-1](http://latex.codecogs.com/svg.latex?%5B3%2C%205%29%20-%20%5B4%2C%206%5D%20%3D%20%5B3%2C%204%29) and ![interval-difference-2](http://latex.codecogs.com/svg.latex?%5B4%2C%206%5D%20-%20%5B3%2C%205%29%20%3D%20%5B5%2C%206%5D)

<!-- [3, 5) - [4, 6] = [3, 4) -->
<!-- [4, 6] - [3, 5)  = [5, 6] -->

In code:

```js
var Interval = require('interval-arithmetic')
var nextafter = require('nextafter')

var a = Interval(3, nextafter(5, -Infinity))
var b = Interval(4, 6)

Interval.intersection(a, b)
// {lo: 4, hi: 4.999999999999999}

Interval.union(a, b)
// {lo: 3, hi: 6}

Interval.difference(a, b)
// {lo: 3, hi: 3.9999999999999996}

Interval.difference(b, a)
// {lo: 5, hi: 6}
```






