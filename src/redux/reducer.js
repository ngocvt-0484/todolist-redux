const initState = {
  filters: {
    search: '',
    status: 'All',
    priority: []
  },
  todoList: [
    {
      id: 1,
      name: "Name",
      completed: false,
      priority: "High"
    },
    {
      id: 2,
      name: "Name 2",
      completed: false,
      priority: "Medium"
    }
  ]
};

const rootReducer = (state = initState, action) => {
  switch(action.type) {
    case 'todoList/addTodo':
      return {
        ...state,
        todoList: [
          ...state.todoList,
          action.payload
        ]
      }
    case 'filters/searchFilterChange':
      return {
        ...state,
        filters: {
          ...state.filters,
          search: action.payload
        }
      }

    default:
      return state;
  }
}

export default rootReducer;
