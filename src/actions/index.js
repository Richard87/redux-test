export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const addTodo = (text = 'Build my first Redux app') => ({type: ADD_TODO, text})
export const removeTodo = (index) => ({type: REMOVE_TODO, index})
export const toggleTodo = (index) => ({type: TOGGLE_TODO, index})

export const setVisibilityFilter = (filter = VisibilityFilters.SHOW_COMPLETED) => ({type: SET_VISIBILITY_FILTER, filter})
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}