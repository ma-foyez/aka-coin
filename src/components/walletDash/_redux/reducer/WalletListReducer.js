import * as Types from "../types/Types";

const initialState = {
    isLoading: false,
    walletList: [],
    message: "",
    walletInput: {
        title: "",
        link: "",
        description: ""
    },
    isSubmitting: false,
    isDeleting: false,
};

const WalletListReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_WALLET_LIST:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                walletList: action.payload.data,
                message: action.payload.message
            };
        case Types.HANDLE_CHANGE_WALLET_INPUT:
            const walletInput = { ...state.walletInput };
            walletInput[action.payload.name] = action.payload.value;
            return {
                ...state,
                walletInput
            };
        case Types.HANDLE_SUBMIT_WALLET_DATA:
            return {
                ...state,
                isSubmitting: action.payload.isLoading,
                walletInput: initialState.walletInput
            };
        case Types.GET_SINGLE_WALLET:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                walletInput: action.payload.walletData
            };
        case Types.UPDATE_SINGLE_WALLET:
            return {
                ...state,
                isSubmitting: action.payload.isLoading,
                walletInput: initialState.walletInput
            };
        case Types.DELETE_WALLET:
            console.log('action.payload :>> ', action.payload);
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

export default WalletListReducer;