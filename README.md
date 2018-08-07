# hi-todo
Make ToDo-list with React

> 2018.08.06
  - title : 초기 설정
  - content : create-react-app 생성
  - idea : 추가, 수정, 삭제가 가능한 간단한 todo-list를 만들어 보자.

> 2018.08.07
  - title : Todo Add
  - content : 파일구조 정리, _typing 으로 입력값 확인, 
              _todo_add 로 item 생성
              _enterKey 로 엔터키 기능 추가
  - idea : _enterKey를 구현하는 부분에서 이벤트를 onKeydown을 하면, 종종 텍스트에디터에서 어떤 테마를 사용할 때 한글 타이핑 에러가 나는 것 처럼 영어를 사용할 때는 문제가 되지 않지만 한글이 들어갈 경우 마지막 한 글자가 튀면서 아이템이 한번 더 추가되는 오류가 발생했다. 인코딩문제 때문인걸까..? 무슨 이유에서인지는 잘 모르겠지만, onKeyPress를 사용하니 해결이 되긴했다. 이 문제에 대해서도 다시 한번 확인해보면서 keyDown과 keyPress에 대한 비교 포스팅도 계획해봐야겠다. 이제 삭제기능을 만들어보자.

> 2018.08.07
  - title : Todo Del
  - content : item의 props로 _todo_del 함수를 넘겨주고, 
              item 컴포넌트 내부에서이 함수를 실행할 수 있도록 _go_del 생성,
              delete 의 index를 맞춰주기 위해서 id값은 0번부터 시작하도록 수정.
  - idea : 잘 가고 있는건지.. 웬지 모르게 뭔가 불안하지만, 일단 삭제하는 것 까진 정리가 됬다! Yeah~
           이제 추가한 아이템의 text를 수정 할 수 있게 만들어보자.
