import * as Types from "../types/Types";

const initialState = {
    isLoading: false,
    walletList: [],
    message: ""
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

        default:
            return {
                ...state,
            };
            break;
    }
};

export default WalletListReducer;