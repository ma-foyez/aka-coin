import Axios from "axios";
import * as Types from "../types/Types";

let baseURL = process.env.REACT_APP_API_URL;


export const getWalletList = () => (dispatch) => {
    const responseData = {
        isLoading: true,
        status: false,
        message: "",
        data: [],
    }
    dispatch({ type: Types.GET_WALLET_LIST, payload: responseData });

    Axios.get(`${baseURL}/wallet/list/`)
        .then((res) => {
            if (res.status === 201) {
                responseData.message = res.data.message;
                responseData.data = res.data.wallet;
                responseData.isLoading = false;
                responseData.status = true;
            }

            dispatch({ type: Types.GET_WALLET_LIST, payload: responseData });
        }).catch((err) => {
            let responseLog = err.response;
            if (typeof responseLog !== 'undefined') {
                const { request, ...errorObject } = responseLog;
                // showToast('error', responseLog.data.message);
                if (responseLog.data.error) {
                    // showToast('error', responseLog.data.error);
                }
                dispatch({ type: Types.GET_WALLET_LIST, payload: responseData });
            }
        })
}