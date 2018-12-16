var arr = [1, 2, 3, 4, 5, 6];
// 方法1
Array.prototype.sum = function() {
  var result = 0;
  for (var i = 0; i < this.length; i++) {
    result += parseInt(this[i]);
  }
  return result;
};

// 方法2
Array.prototype.sum = function() {
  var result = 0;
  var i = this.length;
  while (i--) {
    result += parseInt(this[i]);
  }
  return result;
};

// 方法3
Array.prototype.sum = function() {
  var result = 0;
  return this.reduce(function(preValue, curValue) {
    return preValue + curValue;
  });
};

// 方法4
Array.prototype.sum = function() {
  var self = this;
  return eval(self.join("+"));
};

// 方法5
Array.prototype.sum = function() {
  var self = this;
  var result = 0;
  self.forEach(function(val, idx, arr) {
    result += val;
  });
  return result;
};

console.log(arr.sum());
