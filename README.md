# vec2
Performance oriented vectors. No gimmicks. 

[vec2 in use](https://cdn.rawgit.com/tobq/Kinetics/master/balls.html)

Feel free to make [feature requests](https://github.com/tobq/vec2/issues)

# Tests

I tested vec2 against [Victor](https://github.com/maxkueng/victor)

```
very Wow:
var I = 10000000,
    vector = new vec2,
    victor = new Victor,
    start, time, tests = [
        ["new", () => new Victor, () => new vec2],
        ["copy", () => victor.clone(), () => vector.copy()],
        ["add", () => victor.clone().add(new Victor(10, 10)), ()=> vector.copy().add(new vec2(10, 10))],
        ["unit vector", ()=>victor.normalize(), () => vector.unit()],
        ["seperation",()=> victor.distance(new Victor(10, 10)), () => vector.copy().subtract(new vec2(10, 10)).unit()],
        ["magnitude", () => victor.magnitude(), () => vector.mag()],
        ["randomise", () => victor.clone().randomize(new Victor(0, 0), victor),()=> vector.copy().random()],
        ["dot product", () => victor.dot(new Victor(10, 10)), ()=>vector.dot(new vec2(10, 10))],
        ["inversion", () => victor.clone().invert(), ()=>vector.copy().sMultiply(-1)],
        ["component subtraction", () => victor.clone().subtractX(10), () => vector.copy().subtract(new vec2(10, 0))],
    ]

for (var test = tests.length; test--;) {
    start = performance.now();
    for (var i = I; i--;) tests[test][1]();
    time = performance.now() - start;
    start = performance.now();
    for (var i = I; i--;) tests[test][2]();
    console.log("vec2:", tests[test][0] + ".", (time/(performance.now() - start)).toFixed(3) + "x faster");
}

vec2: component subtraction. 9.936x faster
vec2: inversion. 2.379x faster
vec2: dot product. 2.790x faster
vec2: randomise. 2.437x faster
vec2: magnitude. 1.247x faster
vec2: seperation. 1.962x faster
vec2: unit vector. 14.344x faster
vec2: add. 4.878x faster
vec2: copy. 2.438x faster
vec2: new. 2.583x faster

``
