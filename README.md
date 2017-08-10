# vec2
Performance oriented vectors. No gimmicks. 

http://i.imgur.com/sM80KxO.gifv

```
var I=10000000, vector = new vec2, victor = new Victor;

console.time("Victor");
for (var j = I; j--;) new Victor;
console.timeEnd("Victor");
console.time("vec2");
for (var j = I; j--;) new vec2;
console.timeEnd("vec2");
console.time("Victor");
for (var j = I; j--;) victor.clone();
console.timeEnd("Victor");
console.time("vec2");
for (var j = I; j--;) vector.copy();
console.timeEnd("vec2");
console.time("Victor");
for (var j = I; j--;) victor.clone().add(new Victor(10,10));
console.timeEnd("Victor");
console.time("vec2");
for (var j = I; j--;) vector.copy().add(new vec2(10,10));
console.timeEnd("vec2");
console.time("Victor");
for (var j = I; j--;) victor.normalize();
console.timeEnd("Victor");
console.time("vec2");
for (var j = I; j--;) vector.unit();
console.timeEnd("vec2");
console.time("Victor");
for (var j = I; j--;) victor.distance(new Victor(10,10));
console.timeEnd("Victor");
console.time("vec2");
for (var j = I; j--;) vector.copy().subtract(new vec2(10,10)).unit();
console.timeEnd("vec2");
console.time("Victor");
for (var j = I; j--;) victor.magnitude();
console.timeEnd("Victor");
console.time("vec2");
for (var j = I; j--;) vector.mag();
console.timeEnd("vec2");
console.time("Victor");
for (var j = I; j--;) victor.clone().randomize(new Victor(0,0), victor);
console.timeEnd("Victor");
console.time("vec2");
for (var j = I; j--;) vector.copy().random();
console.timeEnd("vec2");
console.time("Victor");
for (var j = I; j--;) victor.dot(new Victor(10,10))
console.timeEnd("Victor");
console.time("vec2");
for (var j = I; j--;) vector.dot(new vec2(10,10))
console.timeEnd("vec2");
console.time("Victor");
for (var j = I; j--;) victor.clone().invert()
console.timeEnd("Victor");
console.time("vec2");
for (var j = I; j--;) vector.copy().sMultiply(-1)
console.timeEnd("vec2");
console.time("Victor");
for (var j = I; j--;) victor.clone().subtractX(10)
console.timeEnd("Victor");
console.time("vec2");
for (var j = I; j--;) vector.copy().x-=10
console.timeEnd("vec2");
```

Across the board, shrekt:

```
Victor: 100ms
vec2: 60ms
Victor: 61ms
vec2: 54ms
Victor: 264ms
vec2: 49ms
Victor: 1807ms
vec2: 58ms
Victor: 162ms
vec2: 70.999755859375ms
Victor: 51.000244140625ms
vec2: 46ms
Victor: 855ms
vec2: 601ms
Victor: 136ms
vec2: 52ms
Victor: 164ms
vec2: 51ms
Victor: 140ms
vec2: 53ms
```
