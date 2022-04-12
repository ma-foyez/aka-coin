import Axios from "axios";
import { showToast } from "../../../utilities/Toaster";
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
            responseData.isLoading = false;
            responseData.status = false;
            showToast("warning", "Something went wrong!")
            dispatch({ type: Types.GET_WALLET_LIST, payload: responseData });
        })
}

/**
 * 
 * @param {string} name ex: Input field data name
 * @param {string} value ex: Input field value
 * @returns formData
 */
export const handleChangeWalletInput = (name, value) => (dispatch) => {
    const formData = {
        name: name,
        value: value
    }
    dispatch({ type: Types.HANDLE_CHANGE_WALLET_INPUT, payload: formData })
}

/**
 * Add new wallet 
 * @param {object} walletInput ex: Wallet Input Fields
 * @returns handlePostWalletData
 */
export const handlePostWalletData = (walletInput) => (dispatch) => {
    const response = {
        isLoading: true,
        status: false,
    }
    if (walletInput.title === "") {
        showToast("error", "Wallet title can't be blank!")
        return false;
    }
    if (walletInput.link === "") {
        showToast("error", "Wallet link can't be blank!");
        return false;
    }
    if (walletInput.description === "") {
        showToast("error", "Description title can't be blank!");
        return false;
    }

    dispatch({ type: Types.HANDLE_SUBMIT_WALLET_DATA, payload: response });

    Axios.post(`${baseURL}/wallet/create`, walletInput)
        .then((res) => {
            response.isLoading = false;
            showToast("success", res.data.message);
            dispatch({ type: Types.HANDLE_SUBMIT_WALLET_DATA, payload: response });

        }).catch((err) => {
            response.isLoading = false;
            let responseLog = err.response;
            showToast("error", responseLog.data.message);
            dispatch({ type: Types.HANDLE_SUBMIT_WALLET_DATA, payload: response });
        })

}

export const getSingleWallet = (id) => (dispatch) => {
    const responseData = {
        isLoading: true,
        status: false,
        walletData: {}
    }
    dispatch({ type: Types.GET_SINGLE_WALLET, payload: responseData });
    Axios.get(`${baseURL}/wallet/${id}`)
        .then((res) => {
            if (res.status === 201) {
                responseData.message = res.data.message;
                responseData.walletData = res.data.data;
                responseData.isLoading = false;
                responseData.status = true;
            }

            dispatch({ type: Types.GET_SINGLE_WALLET, payload: responseData });
        }).catch((err) => {
            responseData.isLoading = false;
            responseData.status = false;
            showToast("warning", "Something went wrong!")
            dispatch({ type: Types.GET_SINGLE_WALLET, payload: responseData });
        })
}