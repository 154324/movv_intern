// //  lodash _.reverse() 함수 es6으로 구현하기

// const arr = [1, 2, 3, 4, 5, 6];

// const _reverse = function (arr) {
//   if (Array.isArray(arr)) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//       newArr[i] = arr[arr.length - 1 - i];
//     }
//     return newArr;
//   }

//   return new Error('배열이 아닙니다!');
// };

// console.log(_reverse(arr)); //console.log [6,5,4,3,2,1]

//아래에는 재귀함수로 다차원 배열도 리버스 해볼려고 합니다.
let arr1 = [1, 2, 3, [4, 5], 6];
const newArr = [];

function gogo(arr) {
  for (var i = arr.length; i > 0; i--) {
    if (!Array.isArray(arr[i - 1])) {
      newArr.push(arr[i - 1]);
      console.log(newArr);
    } else if (Array.isArray(arr[i - 1])) {
      gogo(arr[i - 1]);
    }
  }
}

gogo(arr1);
