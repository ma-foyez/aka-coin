import * as Types from "../types/Types";

const initialState = {
    isLoading: false,
    guidelineList: [],
    message: "",
    guidelineInput: {
        title: "",
        description: "",
        guidelineImg: "",
        imagePreview: null
    },
    isSubmitting: false,
    isDeleting: false,
};

const GuidelineReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.HANDLE_CHANGE_GUIDELINE_INPUT:
            const guidelineInput = { ...state.guidelineInput };
            guidelineInput[action.payload.name] = action.payload.value;
            return {
                ...state,
                guidelineInput
            };
        case Types.HANDLE_SUBMIT_GUIDELINE_DATA:
            return {
                ...state,
                isSubmitting: action.payload.isLoading,
                guidelineInput: initialState.guidelineInput
            };
        case Types.GET_GUIDELINE_LIST:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                guidelineList: action.payload.data,
                message: action.payload.message
            };
        case Types.GET_SINGLE_GUIDELINE:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                guidelineInput: action.payload.guidelineData
            };
        case Types.UPDATE_SINGLE_GUIDELINE:
            return {
                ...state,
                isSubmitting: action.payload.isLoading,
                guidelineInput: initialState.guidelineInput
            };
        case Types.DELETE_GUIDELINE:
            return {
                ...state,
                isDeleting: action.payload.isDeleting,
            };
        default:
            return {
                ...state,
            };
            break;
    }
};

export default GuidelineReducer;