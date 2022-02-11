//스프레드 문법
//클로저


//환경 레코드 - 모든 지역 변수를 프로퍼티로 저장하고 있는 객체, this 값과
//같은 기타 정보도 여기에 저장됩니다.
//외부 렉시컬 환경에 대한 참조 - 외부 코드와 연관됨


console.log()

const a = {
    b: 1,
    fn: function(){
        return this.b
    }
}

console.log(a.fn())


const other = {
    b: 3333
}

const boundFn = a.fn.bind(other)
// console.log(boundFn())
// console.log(a.fn.call(other))
// console.log(a.fn.apply(other)) //call과 차이점은 단순히 두번째 매게변수가 유사배열객체라는 점이다




function askPassword(ok, fail) {
    let password = prompt("비밀번호를 입력해주세요.", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'John',
  
    login(result) {
    //   alert( this.name + (result ? ' 로그인 성공' : ' 로그인 실패') );
    }
  };
  
//   askPassword(user.login.bind(user,true),user.login.bind(user.false)); // ?


//   let group = {
//     title: "1모둠",
//     students: ["보라", "호진", "지민"],
  
//     showList() {
//       this.students.forEach(
//         student => console.log(this.title + ': ' + student)
//       );
//     }
//   };
  
// Class 인스턴스 생성 오류

// class Animal {

//     constructor(name) {
//       this.name = name;
//     }
  
//   }
  
//   class Rabbit extends Animal {
//     constructor(name) {
//       super(name)//상속은 super를 통해 부모 메소드를 가져온다.
//       this.created = Date.now();
//     }
//   }
  
//   let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
//  console.log(rabbit.name);


class Clock {
    constructor({ template }) {
      this.template = template;
    }
  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }

  class ExtendedClock extends Clock{
      constructor(option){
          super(option);
          let {precision =1000} = option
          this.precision=precision
      }
      start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
      }
    };

    //Object를 상속받는 클래스

    class Rabbit extends Object {
        constructor(name) {
          //this.name = name; 상속이기에 super
          super();
          this.name = name;
        }
      }
      
      let rabbit = new Rabbit("Rab");
      
    //   console.log( rabbit.hasOwnProperty('name') ); // Error

      //커피머신 만들기

      class CoffeeMachine{
          #waterLimit =200;

          #checkWater(value){
              if(value < 0) throw new Error('물의 양은 음수가 될 수 없다')
              if(value > this.#waterLimit) throw new Error("물의 용량을 초과합니다.") 
          }
          
          _waterAmount = 0; //물이 차있는 양
          
          setWaterAmount(value){
              if(value>this.#waterLimit) throw new Error("물이 초과했습니다.")
              this._waterAmount= value

          }

          getWaterAmount(){
              return console.log( this._waterAmount);
          }
          
          constructor(power){
              this._power = power
          }

          getPower(){
              return this._power;
          }

      }

      let coffeeMachine = new CoffeeMachine()

      coffeeMachine.setWaterAmount(200);
      coffeeMachine.getWaterAmount()

      //public , private, protected 정리
      //public 어디서든지 접근 가능하며 외부 인터페이스를 구성한다.
      //private 클래스 내부에서만 접근할 수 있으며 내부 인터페이스를 구성할때 쓰인다. (#waterLimted)
      //protected 클래스 자신과 자손 클래스에서만 접근을 허용하는 protected 필드를 지원 (_waterAmount)
      //자손 클래스서도 접근이 가능하는 것이 protected이다. (즉 상속이 가능하다)
      // js에서 강제사항으 아니지만 프로그래머들 사이에서 외부 접근이 불가능한 프로퍼티나 메서드를 나타낼 때 쓰입니다.


      //JS 에 this 정리
      //this가 쓰이는 함수를 어떤 방식으로 실행하느냐에 따라서 그 역할이 구별된다.
      //1.regular function call
      function foo(){
          console.log(this)// 이때의 this의 값은 글로벌 객체를 가리킨다
      }
      foo()

      //2.도트 표기법

        var age = 100;
        var ken = {
        age: 35,
        foo: function () {
        console.log(this.age); // 35 //이 때 this는 도트 앞에 써있는 객체 자체를 가리킨다.
        }
        }
        ken.foo();

    //3.명백한 바인딩 /call,bind,apply
    //this의 역할을 우리가 직접 명확하게 지정해준다는 뜻이다.
        var age1 = 100;
        function foo() {
        console.log(this.age);//이 때에 this는 값을 지정받게 된다.
        }
        var ken = {
        age: 35,
        log: foo
        }
        foo.call(ken);
    //4.new 키워드르 사용한 함수 실행
        
    function Foo () {
        console.log(this.age); // undefined
        this.age = 100; // 빈 객체에 속성 추가
        console.log(this.age); // 100 //처음에 윈도우를 가리키지만 new를 쓰게 된다면 빈 객체를 생성하여 name이란 속성과
        //ken이란 값읋 할당하게 되고 객체를 리턴한다. 
        }
    new Foo();
     
    //내장 클래스 확장해보기

    class PowerArray extends Array {
        isEmpty(){
            return this.length ===  0;
        }
    }
    let arr = new PowerArray(1,2,5,10,50);
    console.log(arr.isEmpty())// false
    let filteredArr = arr.filter(item => item >10)
    console.log(filteredArr.isEmpty())//false //여기서 흥미로운게 filter map 등의 내장
    //메서드가 상속받은 클래스인 파워 어레이의 객체를 반환 
    //이 객체를 구현할 뗀 내부에서 객체의 constructor 프로퍼티 사용 한다.
    //즉 arr.constructor ===PowerArray

 





