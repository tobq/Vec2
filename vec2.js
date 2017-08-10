function vec2(x, y) {
	this.x = x || 0;
	this.y = y || 0;
}

vec2.prototype.copy = function () {
	return new vec2(this.x, this.y);
};

vec2.prototype.add = function (vec) {
	this.x += vec.x;
	this.y += vec.y;
	return this;
};

vec2.prototype.sAdd = function (scalar) {
	this.x += scalar;
	this.y += scalar;
	return this;
};

vec2.prototype.subtract = function (vec) {
	this.x -= vec.x;
	this.y -= vec.y;
	return this;
};

vec2.prototype.sSubtract = function (scalar) {
	this.x -= scalar;
	this.y -= scalar;
	return this;
};

vec2.prototype.divide = function (vec) {
	this.x /= vec.x;
	this.y /= vec.y;
	return this;
};

vec2.prototype.sDivide = function (scalar) {
	this.x /= scalar;
	this.y /= scalar;
	return this;
};

vec2.prototype.multiply = function (vec) {
	this.x *= vec.x;
	this.y *= vec.y;
	return this;
};

vec2.prototype.sMultiply = function (scalar) {
	this.x *= scalar;
	this.y *= scalar;
	return this;
};

vec2.prototype.dot = function (vec) {
	return this.x * vec.x + this.y * vec.y;
};

vec2.prototype.mag = function () {
	return Math.sqrt(this.dot(this));
};

vec2.prototype.unit = function () {
	return this.copy().sDivide(this.mag());
};

vec2.prototype.ceil = function () {
	this.x = Math.ceil(this.x);
	this.y = Math.ceil(this.y);
	return this;
};

vec2.prototype.floor = function () {
	this.x = Math.floor(this.x);
	this.y = Math.floor(this.y);
	return this;
};

vec2.prototype.random = function () {
	this.x *= Math.random();
	this.y *= Math.random();
	return this;
};

vec2.prototype.bound = function (component, min, max) {
	if (this[component] < min) this[component] = Math.min(min, max - this[component]);
	else if (this[component] > max) this[component] = Math.max(max, 2 * min - this[component]);
	else return true;
};
