import {createSelector} from 'reselect';

// export const todoListSelector = (state) => {
//   const searchText = searchTextSelector(state);

//   const result = state.todoList.filter((todo) => {
//     return todo.name.includes(searchText);
//   })
//   return result;
// }
// export const searchTextSelector = (state) => state.filters.search;


// Ap dung reselect, selector nay phu thuoc vao selector khac:

export const searchTextSelector = (state) => state.filters.search;
export const searchStatusSelector = (state) => state.filters.status
export const todoListSelector = (state) => state.todoList;
export const prioritySelector = (state) => state.filters.priority

export const todoRemainingSelector = createSelector(
                                      todoListSelector,
                                      searchTextSelector,
                                      searchStatusSelector,
                                      prioritySelector,
                                      (todoList, searchText, status, priorities) => {
                                        return todoList.filter((todo) => {
                                          if (status === 'All') {
                                            return priorities.length == 0 ? todo.name.includes(searchText) : todo.name.includes(searchText) && priorities.includes(todo.priority);
                                          }

                                          return(
                                            todo.name.includes(searchText) && (status === 'Completed' ? todo.completed : !todo.completed) && (priorities.length ? priorities.includes(todo.priority) : true)
                                          );
                                        })
                                      });
