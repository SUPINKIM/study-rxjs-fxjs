- 함수형으로 사고하기
- 하나의 함수에서 바로 평가하는 것이 아닌, 원하는 결과를 리턴하기 위한 평가 함수 역시 매개변수로 전달 받는다.
- Iterable: Iterator를 리턴하는 "\[Symbol.iterator]()"를 가진 값
- Iterator: { value, done } 객체를 리턴하는 next()를 가진 값
- Iterable / Iterator protocol : Iterable을 for...of, 전개 연산자 등과 함께 동작하도록한 규약
- generator : iterator이자 iterable을 생성하는 함수
