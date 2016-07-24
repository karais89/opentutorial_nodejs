var sum = require('./lib/sum'); // sum 모듈이 굉장히 복잡하다고 생각해라. 1000줄이 넘는 모듈.
console.log(sum(1,2));

var cal = require('./lib/calculator');
console.log('cal sum', cal.sum(1, 2));
console.log('cal avg', cal.avg(1, 2));