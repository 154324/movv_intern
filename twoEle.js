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


  let group = {
    title: "1모둠",
    students: ["보라", "호진", "지민"],
  
    showList() {
      this.students.forEach(
        student => console.log(this.title + ': ' + student)
      );
    }
  };
  
  group.showList();





