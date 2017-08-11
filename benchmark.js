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

// Both vectors retain their initial values.
