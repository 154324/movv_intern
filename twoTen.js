//구조 분해 할당
//키를 가진 데이터 여러 개를 하나의 엔티티에 저장할 땐 객체를 컬렉션에 데이터를 순서대로 저장할땐 배열 사용
// 이름과 성을 요소로 가진 배열
let arr = ["Bora", "Lee"]

// 구조 분해 할당을 이용해
// firstName엔 arr[0]을
// surname엔 arr[1]을 할당하였습니다.
let [firstName, surname] = arr;

// console.log(firstName); // Bora
// console.log(surname);  // Lee

let guest = "Jane";
let admin = "Pete";

// 변수 guest엔 Pete, 변수 admin엔 Jane이 저장되도록 값을 교환함
[guest,admin] =[admin,guest]

// console.log(`${guest} ${admin}`); // Pete Jane(값 교환이 성공적으로 이뤄졌습니다!)

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// console.log(name1); // Julius
// console.log(name2); // Caesar

// `rest`는 배열입니다.
// console.log(rest[0]); // Consul
// console.log(rest[1]); // of the Roman Republic
// console.log(rest.length); // 2


let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  
let {title, ...width} = options

// console.log(title);
// console.log(width.height);


//구조분해 할당

let user = {
    name: "John",
    years: 30
  };


let {name , years : age ,isAdmin=false} = user;

//최대 급여 계산하기
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

function topSalary(salaries){
    let max = 0
    let maxName = null
    
    for(const [name,salary] of Object.entries(salaries)){
        if(max<salary){
            max = salary
            maxName = name;
        }
    }

    return maxName
}

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
  };
  
  let json = JSON.stringify(student);
  
  
  /* JSON으로 인코딩된 객체:
  {
    "name": "John",
    "age": 30,
    "isAdmin": false,
    "courses": ["html", "css", "js"],
    "wife": null
  }*/

// 객체를 JSON 으로 바꿔주는 메소는 JSON.stringfy <-> json.parse

// 함수 프로ㅓ티(메소드), 심볼형 폴퍼티, 값이 undefined 것들은 json.stringfy 에서 무시
// 또한 순환 참조가 있으면 객체 문자열로 바꾸는게 어렵다
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// let meetup = JSON.parse(str, function(key, value) {
//   if (key == 'date') return new Date(value);
//   return value;
// });

let user1 = {
    name: "John Smith",
    age: 35
  };

let user_json = JSON.stringify(user1)
let user2 = JSON.parse(user_json)

//역참조 배제하기
let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
  };
  
  // 순환 참조
  room.occupiedBy = meetup;
  meetup.self = meetup;
//   console.log(JSON.stringify(meetup, function replacer(key,value){
//       return (key !='' && value == meetup) ? undefined : value;
//   }))
//   console.log( JSON.stringify(meetup, function replacer(key, value) {
//     return (key !="" && value ==meetup)? undefined :value;
//   },2));
  
  /* 얼럿창엔 아래와 같은 결과가 출력되어야 합니다.
  {
    "title":"Conference",
    "occupiedBy":[{"name":"John"},{"name":"Alice"}],
    "place":{"number":23}
  }
  */


  //재귀

  let company = {
    sales: [
        {
      name: 'John',
      salary: 1000
    }, {
      name: 'Alice',
      salary: 1600
    }],
  
    development: {
      sites: [{
        name: 'Peter',
        salary: 2000
      }, {
        name: 'Alex',
        salary: 1800
      }],
  
      internals: [{
        name: 'Jack',
        salary: 1300
      }]
    }
  };


console.log(Array.isArray(company.sales))

console.log(Object.values(company.development))

// 급여 합계를 구해주는 함수
function sumSalaries(department) {
    if (Array.isArray(department)) { // 첫 번째 경우
      return department.reduce((prev, current) => prev + current.salary, 0); // 배열의 요소를 합함
    } else { // 두 번째 경우
      let sum = 0;
      for (let subdep of Object.values(department)) {
        sum += sumSalaries(subdep); // 재귀 호출로 각 하위 부서 임직원의 급여 총합을 구함
      }
      return sum;
    }
  }
  //재귀함수 구현해보기

  function sumTo(n){
      if(n ==1) {
          return 1
      }
          else return  n+sumTo(n-1);
  }

 // 팩토리얼 계산하기
 function fibo(n){
     if(n <= 1) return n
     else fibo(n-1)+fibo(n-2)

 }

 //단일 연결 리스트 출력하기

 function printList(list){
         console.log(list.value)
     if(list.next)
         {
             printList(list.next)
         }
 }