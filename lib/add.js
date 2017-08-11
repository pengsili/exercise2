function add(num1, num2) {
  // 实现该函数
  var flag = 0;
  var list1 = num1.split('').reverse();
  var list2 = num2.split('').reverse();
  var max = Math.max(list1.length, list2.length);
  var result = [];
  for (var i = 0; i < max; i++) {
    flag = 0;
    var temp = (+list1[i] || 0) + (+list2[i] || 0) + flag;
    if (temp > 9) {
      temp = temp - 10;
      flag = 1;
    }
    result.push(temp);
  }
  if(flag){
    result.push(flag);
  }
  return result.reverse().join('');
}

module.exports = add