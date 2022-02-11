//자료구와 자료형 예시 풀이

//1. 숫자형
// let a = +prompt("첫번째 수 ",0);
// let b = +prompt("두번째 수 ", 0)
// alert(`두 수의 합은 ${a+b} 입니다`);

//6.35toFixed(1) ==6.3인 이유는 Math.round 와 toFixed는 둘다 가장 가깡운 어림수를 구함
//alert(6.35.toFixed(1)=6.3)
//6.35을 제대로 반올림하는 법은 ? 
//최대한 정수에 가깝게 만든 후 에 round를 시켜준다
//Math.round(6.35*10)/10

//function readNumber(){
   // let num ;
   // while(!isFinite(num)){
   //     num = prompt("number please",0);
    //    if(num === null || num ==='')
  //      return null
 //       else return +num
//    }

//}

//2.문자열 
//``(백틱)으로 감싼 문자열을 템플릿 리터럴이라고 한다
// //첫 글자 대문자로 만들어보기
// function ucFirst(str){
//   return str[0].toUpperCase()+str.slice(1)//slice가 start부터 end까지 포함
// }

//스팸 문자열 걸러내기
// function checkSpam(str){
//    let lowerStr = str.toLowerCase();
//    return lowerStr.includes('viagra')||lowerStr.includes('xxx') // includes 가 str 포함한 문자열이 불린 값을 반환
// }

// console.log(checkSpam('free xxx'))



//문자열 줄이기
// function truncate(str,maxlength){
//     if(str.length>maxlength){
//         let newStr = `" ${str.substr(0,maxlength)}..."` // slice를 써도 괜찮다
//         return newStr
    
//     }
// }

// console.log(truncate("What I'd like to tell on this topic is:", 20))


// //숫자만 추출하기
// function extraCurrencyValue(str){
//     return +str.slice(1);
// }

//배열
//push,pop,shift,unshft
//반복작업 for(let i=0;i<arr.length;i++) for(let item of arr) 배열 요소에만 사용되는 모던한 문법
//배열은 복사가 될까 ? 배열은 객체이기 때문에 배열 참조가 가능하다

//shift = 배열의 첫번째 요소를 꺼낼때 사용 / unshift = 배열의 앞에 추가할 때 사용


//입력한 숫자의 합 구하기
// function sumInput(){
//     let num =[];
//     while(true){
//         let value = prompt("숫자를 입력하세요",0)
//         if(value===""||value===null||!isFinite(value)) break;

//         num.push(+value)
//     }

//     let sum = 0;
//     for(let n of num){
//         sum+=n;
//     }
//     return sum;
// }

//splice 는 정해진 시직부터 몇개에 배열요소를 삭제할 건지 정하며 추가적으로 요소를 넣어 대체도 가능하다
//또한 splice 메서드의 deleteCount 를 0으로 설정하면 요소를 제거하지 않으면서 새로운 요소를 추가할 수 있다
//slice 는 str.slice와 유사하다
//concat 은 기존 배열의 요소를 사용해 새로운 배열을 만들거나
//기존 배열에 요소를 추가하고자 할 때 사용할 수 있다.
// arr.concat(arrobject) 같이 객체를 배열처럼 취급하여 객체 전체가 통으로 복사해져서 들어가게 되낟

// function camelize(str){
//     return str
//     .split('-')
//     .map(
//         (word,index)=> index==0?word:word[0].toUpperCase()+word.slice(1)
//     )
//     .join('')
// }
// console.log(camelize("background-color"))

// //특정범위에 속하는 요소 찾기
// function filterRangeInPlace(arr, a, b) {

//     for (let i = 0; i < arr.length; i++) {
//       let val = arr[i];
  
//       // 범위 밖의 요소를 제거함
//       if (val < a || val > b) {
//         arr.splice(i, 1);
//         i--;//??
//       }
//     }

//     return arr;
  
//   }
  
//   let arr = [5, 3, 8, 1];
  
  // 1과 4 사이에 있지 않은 요소는 모두 제거함
  
 // console.log( arr ); // [3, 1]
  //배열 복사본을 정렬하기

  function copySorted(arr){
      return arr.slice().sort();
  }
  let arr = ["HTML", "JavaScript", "CSS"];

  let sorted = copySorted(arr);
  
  console.log( sorted ); // CSS, HTML, JavaScript
  console.log( arr ); 

//확장 가능한 계산기 만들기

// function Calculator(){
//     this.methods = {
//         "-" :(a,b)=>a-b,
//         "+":(a,b)=>a+b
//     };
//     this.calculate = function(str){
//         let split = str.split(' '),
//         a=+split[0],
//         op=split[1],
//         b=+split[2];

//         if(!this.methods[op]||isNaN(a)||isNaN(b)){
//              return NaN;
//         }
//     return this.methods[op](a,b);
//     };
//     this.addMethod = function(name,func){
//         this.methods[name]=func;
//     }}

//이름 맵핑하기
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map(item=>item.name)

// console.log( names ); // John, Pete, Mary


//객체 맵핑하기
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map(user=>(
//     {
//         fullName:`${user.name} ${user.surname}`,
//         id : user.id
//     }
// ))

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

// console.log( usersMapped[0].id ) // 1
// console.log( usersMapped[0].fullName ) // John Smith

//나이를 기준으로 객체 정렬하기

function sortByAge(users){
    users.sort((a,b)=>a.age-b.age)
}
//평균 나이 구하기
// function getAverageAge(users){  //reduce(sum,currentvalue => sum+currentvalue 값을 리턴 시켜준다) 즉 모든 배열의 접근하는 누산기라 생각하면 된다
//     return users.reduce((prev,user)=>prev+user.age,0)/users.length;
// }

//iterable 객체
//반복가능한 객체는 배열을 일반화한 객체
//이터러블 이라는 개념을 사용하면 어떤 객체에든 반복문 적용이 가능하다

//let range = {
//     from : 1 ,
//     to : 5,

//     [Symbol.iterator](){
//         this.current = this.from;
//         return this;
//     },
//     next(){
//         if(this.current <=this.to){
//             return {done: false,value: this.current++};
//         }else{
//             return {done : true};
//         }
//     }
// }

// for(let num of range){
//     console.log(num)
// }

//배열과 문자열은 가장 광범위하게 쓰이는 내장 이터러블이다

// Array.from은 이터러블이나 유사 배열을 받아 진짜 'Array'를 만들어 줍니다.
let arrLike ={
    0:"hello",
    1:"World",
    length:2
}
let arr1 = Array.from(arrLike);// 이부분에서 객체를 받아 이터러블이나 유사 배열인지 조사
console.log(arr1.pop()) //넘겨받은 인수가 이터러블이나 유사배열인 경우, 새로운 배열을 만들고 객체의 모든 요소를 새롭게 만든 배열을 복사한다.



//맵과 셋


//객체와 배열 만으로는 자료구조가 부족하기 맵과 셋이 등장합니다.
//맵은 키가 있는 데이터를 저장한다는 점에서 객체와 유사하지만 맵은 키에 다양한 자료형을 허용한다
//맵에 키에는 자료형 제약이 없다


// 객체를 맵을 바꾸기 Object.entries()
// 맵을 객체로 바꾸기 Object.fromEntries

//set 중복을 혀용하지 않는 값을 모아놓은 특별한 컬렉션

function unique(arr){

 
return Array.from(new Set(arr));//set은 중복을 허용하지 않는다


}
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // 얼럿창엔 `Hare, Krishna, :-O`만 출력되어야 합니다.

// 읽음 상태 메시지 저장하기 + 날짜까지
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

 let readMessage = new WeakMap();
readMessage.get(messages[0], new Date(2020-02-09));

//오브젝트 키와 값, 엔트리
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
function sumSalaries(salaries){
    return Object.entries(salaries).reduce((sum , salaries) => sum + salaries[1],0)

}
  console.log( sumSalaries(salaries) ); // 650