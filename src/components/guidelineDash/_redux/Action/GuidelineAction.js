import Axios from "axios";
import { showToast } from "../../../utilities/Toaster";
import * as Types from "../types/Types";

let baseURL = process.env.REACT_APP_API_URL;


/**
 * 
 * @param {string} name ex: Input field data name
 * @param {string} value ex: Input field value
 * @param {string} e ex: Input file type
 * @returns formData
 */
export const handleChangeGuidelineInput = (name, value, e = null) => (dispatch) => {
    let data = {
        name : name,
        value: value,
    }
    dispatch({ type: Types.HANDLE_CHANGE_GUIDELINE_INPUT, payload: data });

    if (name === 'guidelineImg') {
        let reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () => {
            if (name === "guidelineImg") {
                data.name = 'imagePreview';
            }
            data.value = reader.result;
            dispatch({ type: Types.HANDLE_CHANGE_GUIDELINE_INPUT, payload: data });
        }
        reader.readAsDataURL(file)
    }
};

export const deletePreviewImage = (name) => (dispatch) => {

    let data = {
        name : name,
        value: null,
    }
    dispatch({ type: Types.HANDLE_CHANGE_GUIDELINE_INPUT, payload: data });

    if (name === "guidelineImg") {
        data.name = 'imagePreview';
    }
    dispatch({ type: Types.HANDLE_CHANGE_GUIDELINE_INPUT, payload: data });
};


/**
* Add New Guideline
* @param {object} guidelineInput ex: Wallet Input Fields
* @returns handleStoreGuideline
*/
export const handleStoreGuideline = (guidelineInput, navigate) => (dispatch) => {
    const response = {
        isLoading  : true,
        status     : false,
    }
    if (guidelineInput.title === "") {
        showToast("error", "Guideline title can't be blank!")
        return false;
    }

    if (guidelineInput.description === "") {
        showToast("error", "Description can't be blank!");
        return false;
    }
    if (guidelineInput.imagePreview === "" || guidelineInput.imagePreview === null) {
        showToast("error", "Image Can't be blank!");
        return false;
    }

    dispatch({ type: Types.HANDLE_SUBMIT_GUIDELINE_DATA, payload: response });

    Axios.post(`${baseURL}/guideline/create`, guidelineInput)
        .then((res) => {
            response.isLoading = false;
            showToast("success", res.data.message);
            dispatch({ type: Types.HANDLE_SUBMIT_GUIDELINE_DATA, payload: response });
            navigate("/guideline-list");

        }).catch((err) => {
            response.isLoading = false;
            let responseLog = err.response;
            showToast("error", responseLog.data.message);
            dispatch({ type: Types.HANDLE_SUBMIT_GUIDELINE_DATA, payload: response });
        })
}

/**
 * Get All Guideline List
 * @returns getGuidelineList
 */
export const getGuidelineList = () => (dispatch) => {
    const responseData = {
        isLoading      : true,
        status         : false,
        message        : "",
        data           : [],
    }
    dispatch({ type: Types.GET_GUIDELINE_LIST, payload: responseData });

    Axios.get(`${baseURL}/guideline/list`)
        .then((res) => {
            if (res.status === 201) {
                responseData.message   = res.data.message;
                responseData.data      = res.data.data;
                responseData.isLoading = false;
                responseData.status    = true;
            }

            dispatch({ type: Types.GET_GUIDELINE_LIST, payload: responseData });
        }).catch((err) => {
            responseData.isLoading = false;
            responseData.status = false;
            showToast("warning", "Something went wrong!")
            dispatch({ type: Types.GET_GUIDELINE_LIST, payload: responseData });
        })
}


/**
 * Get Single Guideline Data
 * @param {string} id Ex: Guideline ID
 * @returns responseData
 */
export const getSingleGuideline = (id) => (dispatch) => {
    const responseData = {
        isLoading      : true,
        status         : false,
        guidelineData  : {}
    }
    dispatch({ type: Types.GET_SINGLE_GUIDELINE, payload: responseData });
    Axios.get(`${baseURL}/guideline/${id}`)
        .then((res) => {
            if (res.status === 201) {
                responseData.message       = res.data.message;
                responseData.guidelineData = res.data.data;
                responseData.isLoading     = false;
                responseData.status        = true;
            }

            dispatch({ type: Types.GET_SINGLE_GUIDELINE, payload: responseData });
        }).catch((err) => {
            responseData.isLoading = false;
            responseData.status    = false;
            showToast("warning", "Something went wrong!")
            dispatch({ type: Types.GET_SINGLE_GUIDELINE, payload: responseData });
        })
}


/**
* Add New Guideline
* @param {object} guidelineInput ex: Wallet Input Fields
* @param {string} id Ex: Guideline ID
* @param {function} navigate Ex: react router replace page 
* @returns response
*/
export const handleUpdateGuideline = (guidelineInput, id, navigate) => (dispatch) => {
    const response = {
        isLoading  : true,
        status     : false,
    }
    if (guidelineInput.title === "") {
        showToast("error", "Guideline title can't be blank!")
        return false;
    }

    if (guidelineInput.description === "") {
        showToast("error", "Description can't be blank!");
        return false;
    }
    if (guidelineInput.imagePreview === "" || guidelineInput.imagePreview === null) {
        showToast("error", "Image Can't be blank!");
        return false;
    }

    dispatch({ type: Types.UPDATE_SINGLE_GUIDELINE, payload: response });

    Axios.patch(`${baseURL}/guideline/update/${id}`, guidelineInput)
        .then((res) => {
            response.isLoading = false;
            showToast("success", res.data.message);
            dispatch({ type: Types.UPDATE_SINGLE_GUIDELINE, payload: response });
            navigate("/guideline-list");

        }).catch((err) => {
            response.isLoading = false;
            let responseLog = err.response;
            showToast("error", responseLog.data.message);
            dispatch({ type: Types.UPDATE_SINGLE_GUIDELINE, payload: response });
        })
}


/**
 * Delete Single Guideline Data
 * @param {string} id Ex: Guideline ID
 * @param {function} handleClose Ex: Mode Close Function
 * @returns responseData
 */
export const deleteGuideline = (id, handleClose) => (dispatch) => {
    const responseData = {
        isDeleting     : true,
        status         : false,
        message        : ""
    }
    dispatch({ type: Types.DELETE_GUIDELINE, payload: responseData });
    Axios.delete(`${baseURL}/guideline/delete/${id}`)
        .then((res) => {
            if (res.status === 201) {
                responseData.message    = res.data.message;
                responseData.isDeleting = false;
                responseData.status     = true;
                showToast("success", res.data.message);
                dispatch(getGuidelineList())
                handleClose();
            }

            dispatch({ type: Types.DELETE_GUIDELINE, payload: responseData });
        }).catch((err) => {
            responseData.isDeleting = false;
            responseData.status     = false;
            showToast("warning", "Something went wrong!")
            dispatch({ type: Types.DELETE_GUIDELINE, payload: responseData });
        })
}