/* 
Global scope and Block Scope:
1- Anything outisde {} is global scope and inside is block scope.
2- If..else {}, for(){}

KEY POINT:
1- Any variable declare/initalized inside {} must remian to that block not accessible outside that block.
2- Any variable declare/initalized outside {} can be accessible inside {} .
*/
// here I initailased/declare variable let, const, var inside {}.
// let const can't able to access it outside it but var can be accessible.
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);
console.log(b);
console.log(c);

// here I initailased/declare variable let, const, var outside {}.
// let const var can be accessible inside {}.
var a = 10;
let b = 20;
const c = 30;
console.log(a);
console.log(b);
console.log(c);
{
  console.log(a);
  console.log(b);
  console.log(c);
}

// here I initailased/declare variable let, const, var outside as well inside {}.
var a = 10;
let b = 20;
const c = 30;
console.log(a);
console.log(b);
console.log(c);
{
  var a = 110;
  let b = 120;
  const c = 130;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);
console.log(b);
console.log(c);

// Output:
// 10
// 20
// 30
// 110
// 120
// 130
// 110
// 20
// 30
