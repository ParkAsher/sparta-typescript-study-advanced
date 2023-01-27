/* 숫자형 Enum */
enum Color {
    Red,
    Green,
    Blue,
}

const myColor: Color = Color.Red;
console.log(myColor);
const yourColor: Color.Blue = Color.Blue;
console.log(yourColor);

console.log('-----------------------------------------');

/* reverse indexing */
console.log(Color[0]);
console.log(Color[2]);
