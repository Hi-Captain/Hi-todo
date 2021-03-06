# hi-todo
Make ToDo-list with React

> 2018.08.06
  - title : 초기 설정
  - content : 
    - create-react-app 생성
  - idea : 
    - 추가, 수정, 삭제가 가능한 간단한 todo-list를 만들어 보자.

> 2018.08.07
  - title : Todo Add
  - content : 
    - 파일구조 정리, _typing 으로 입력값 확인, 
    - _todo_add 로 item 생성
    - _enterKey 로 엔터키 기능 추가
  - idea : 
    - _enterKey를 구현하는 부분에서 이벤트를 onKeydown을 하면, 종종 텍스트에디터에서 어떤 테마를 사용할 때 
      한글 타이핑 에러가 나는 것 처럼 영어를 사용할 때는 문제가 되지 않지만 한글이 들어갈 경우 마지막 한 글자가 튀면서
      아이템이 한번 더 추가되는 오류가 발생했다. 
    - 인코딩문제 때문인걸까..? 무슨 이유에서인지는 잘 모르겠지만, onKeyPress를 사용하니 해결이 되긴했다. 
    - 이 문제에 대해서도 다시 한번 확인해보면서 keyDown과 keyPress에 대한 비교 포스팅도 계획해봐야겠다. 
    - 이제 삭제기능을 만들어보자.

> 2018.08.07
  - title : Todo Del
  - content : 
    - item의 props로 _todo_del 함수를 넘겨주고, 
    - item 컴포넌트 내부에서이 함수를 실행할 수 있도록 _go_del 생성,
    - delete 의 index를 맞춰주기 위해서 id값은 0번부터 시작하도록 수정.
  - idea : 
    - 잘 가고 있는건지.. 웬지 모르게 뭔가 불안하지만, 일단 삭제하는 것 까진 정리가 됬다! Yeah~
    - 이제 추가한 아이템의 text를 수정 할 수 있게 만들어보자.

> 2018.08.07
  - title : Todo Edit
  - content : 
    - Del과 비슷한 방법으로 item 의 props 로 _todo_edit를 담고나서, 
    - item 컴포넌트 내부에서이 함수를 실행할 수 있도록 _go_eidt 생성.
    - 수정을 원하는 상태일 때와 그렇지 않은 때를 구분하기 위해 item의 isEdit 라는 상태 생성.
    - idEdit를 변경하는 _set_edit로 수정 가능상태 전환.
  - idea : 
    - 처음에는 item의 상태에서 text를 this.prop.todo_text로 받아서 수정하려고 했었는데,
      그렇게 되면 Todo.js의 Todo_list 안에서의 값이 변하지 않아서
      그 부분을 업데이트 할 함수가 하나 더 필요할 수 밖에 없어지기 때문에 이렇게 코드를 구성했다.
    - 근데 이게 계속 Todo.js에서 render가 계속 업데이트 되는데..
      Todo같은 거야 10개 20개 정도면 충분하다지만, 
      규모가 더 커지게 됬을 때, 이런 알고리즘이 성능상의 문제는 없는걸까..?
    - 일단은 Add, Delete, Edit 까지 완료됬으니, complete 기능을 만들어보자.

> 2018.08.07
  - title : Todo Complete
  - content : 
    - 여전히 비슷한 방법으로 list 상태에 들어가는 item 객체에 complete 속성을 추가해서 
      true, false 값을 변환하면서 CSS로 UI 전환.
    - _todo_add에서 빈문자열은 todo생성 제한.
  - idea : 
    - props에 함수를 넘겼다가 다시 받아내는 식으로 계속 작업을 하고 있는데, 좀 더 괜찮은 방법이 있으려나..?
    - 일단 기능들은 다 갖춰진 것 같으니 CSS작업을 조금 제대로 해보자.

> 2018.08.08
  - title : Add CSS
  - content : 
    - Google material design 에서 아이콘 받아오기, unsplash에서 배경 받아오기,
    - 레이아웃 정리를 위해 jsx 코드 수정
  - idea : 
    - 어느정도 css는 갖춰진 것 같은데, edit 할 때 edit를 취소하는 기능이 빠져있었다!
    - edit 부분을 정리해보자.

> 2018.08.09
  - title : Todo Edit Upgrade
  - content : 
    - edit 취소 기능 추가.
    - cancel_editing과, typing을 추가 및 go_edit를 set_edited로 수정.
    - cancel 키보드 기능을 위해 enterkey를 listenKey로 수정.
    - cancel에 esc key활성화 위해 keyPress => keyUp으로 수정.
    - Todo text max length 지정.
    - 각 item 에 mouseover 로 기능버튼 노출.
  - idea : 
    - 에디트 취소를 위해서 text값을 임시로 받을 상태가 필요해서, 결국 함수를 2개 더 만들 수 밖에 없었다.
    - KeyDown KeyUp KeyPress .. Key관련해서 공부를 좀 다시 해봐야겠다.
    - 이제 거의 다 완성한 것 같다.
    - todo list를 저장하고 불러오는 작업만 하면 될 것 같다.
    - ajax로 db없이 간단하게 구현하면 될 것 같은데...

> 2018.08.09
  - title : Read Json & Finish
  - content : 
    - componentDidMount에서 axios로 json파일의 리스트 받기.
    - 마무리.
  - idea : 
    - 아직까지 데이터 통신에 대한 이해도가 부족한 것 같다.
    - 읽어오는 것 까진 성공했는데, 저장이 안된다.
    - componentDidMount에서 읽고, 나중에 componentWillUnmount 에서
      그 때 Todo_list 상태를 list.json파일에 덮어쓰고 싶었는데,
      열심히 찾아보긴 했지만 내가 제대로 찾은게 맞다면
      아무래도 보안상의 이유로 브라우저에서 바로 로컬 파일에 대한 수정은 불가능한 것 같다.
    - 그런 이유로 다음 프로젝트 기획은 잠시 미뤄두고 다시 공부를 조금 시작해야 될 것 같다.
    - 백엔드쪽 지식을 쌓고나서 좀 더 완성도 높은 프로젝트를 진행해보자.

> 2018.08.22
  - title : Edit img-size
  - content : 
    - bg img 용량 줄이기
  - idea : 
    - bg.jpg가 5MB씩이나 됬었었다...
