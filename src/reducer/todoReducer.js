export default function todoReducer(todos, action) {

  switch(action.type) {
    case 'added': {
      return [...todos] // setTodos() 를 활용해서 저장 할 상태 리턴
    }
    case 'added_index': {
      
    }
    case 'deleted': {
      
    }
    case 'done': {
      
    }
    case 'reverse': {
      
    }
    default: {
      throw Error('알 수 없는 액션 타입: ' + action.type);
    }
  }
}