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
export const todoListSelector = (state) => state.todoList;
export const todoRemainingSelector = createSelector(
                                      todoListSelector,
                                      searchTextSelector,
                                      (todoList, searchText) => {
                                        return todoList.filter((todo) => {
                                          return todo.name.includes(searchText);
                                        })
                                      });
