const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}


//1. DESTRUCTURE AND ASSIGN ELEMENTS OF CONSTANTS ARRAY TO E, PI, GRAVITY, HUMAN BODY TEMP, WATER BOILING TEMP

let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;

console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

//2. DESTRUCTURE AND ASSIGN ELEMENTS OF COUNTRIES ARRAY TO FIN, EST, SW, DEN, NOR

let [fin, est, sw, den, nor] = countries;

console.log(fin,est,sw,den,nor);

//3. DESTRUCTURE THE RECTANGLE OBJECT BY ITS PROPERTY KEYS

let {width: w, height: h, area: a, perimeter: p} = rectangle;
console.log(w,h,a,p);
