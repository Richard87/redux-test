import {SET_VISIBILITY_FILTER, VisibilityFilters} from "../actions";

const VisibilityFilterReducer = (visibility = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER: return action.filter
        default: return visibility
    }
}
export default VisibilityFilterReducer