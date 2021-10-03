const SET_ERROR = `gBooks/common/SET_ERROR`
const TOGGLE_IS_LOADING = `gBooks/common/TOGGLE_IS_LOADING`


const initialState = {
    error: null,
    isLoading: false,
}


const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ERROR:
            return {
                ...state,
                error: action.newError,
            }
        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            }
        default:
            return state
    }
}

export default commonReducer


//AC

export const setNewError = (newError) =>
    ({type: SET_ERROR, newError})

export const toggleIsLoading = (isLoading) =>
    ({type: TOGGLE_IS_LOADING, isLoading})
