function foo<U> (x: Array<U> | U): Array<U> { return []; }

var x1:number = foo(0)[0];
var x2:string = foo([""])[0];
