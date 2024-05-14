let a = 2;
let b = ++a * 2;
console.log("Q1: b =", b);

let x = 5;
let y = x-- + 2;
console.log("Q2: y =", y);

let c = 3;
let d = ++x + x++ + ++x;
console.log("Q3: d =", d);

let e = 2;
let f = ++e * e++ * --e;
console.log("Q4: f =", f);

let g = 3;
let h = 5;
let result = ++g + h-- - g++ + --h;
console.log("Q5: result =", result);

let m = 2;
let n = 4;
let p = m++ + ++n - --m + n--;
console.log("Q6: m =", m, ", n =", n, ", p =", p);

let q = 5;
let r = 3;
let s = 2;
let t = 7;
let total = ++q * (r-- + s) / --t;
console.log("Q7: q =", q, ", r =", r, ", s =", s, ", t =", t, ", result =", result);

let u = 2;
let v = 3;
let w = 4;
let value = u++ * (--v + u) / (w-- - v);
console.log("Q8: u =", u, ", v =", v, ", w =", w, ", result =", result);