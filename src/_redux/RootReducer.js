import { combineReducers } from "redux";
import GuidelineReducer from "../components/guidelineDash/_redux/reducer/GuidelineReducer";
import WalletListReducer from "../components/walletDash/_redux/reducer/WalletListReducer";

const RootReducer = combineReducers({
    WalletReducer: WalletListReducer,
    GuidelineReducer: GuidelineReducer,
})

export default RootReducer;