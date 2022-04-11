import { combineReducers } from "redux";
import WalletListReducer from "../components/walletDash/_redux/reducer/WalletListReducer";

const RootReducer = combineReducers({
    WalletReducer: WalletListReducer,
})

export default RootReducer;