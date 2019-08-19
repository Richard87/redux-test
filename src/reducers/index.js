import {combineReducers} from "redux";
import todos from "./TodosReducer";
import visibilityFilter from "./VisibilityFilterReducer"
import * as reddit from "./RedditReducer"

const todoApp2 = combineReducers({
    visibilityFilter,
    todos,
    ...reddit,
})

export default todoApp2