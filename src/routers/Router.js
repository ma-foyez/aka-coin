
//import all pages here
import AddWallet from '../components/walletDash/AddWallet';
import EditWallet from '../components/walletDash/EditWallet';
import WalletList from '../components/walletDash/WalletList';
import AdminPage from '../pages/AdminPage';
import Login from '../pages/Login';
import HomePage from './../pages/HomePage';
import PageNotFound from './../pages/PageNotFound';

const routes = [
    {
        path: "/",
        name: "Home Page",
        element: HomePage,
    },
    {
        path: "/home",
        name: "Home Page",
        element: HomePage,
    },
    {
        path: "/login",
        name: "Login Page",
        element: Login,
    },
    {
        path: "/admin",
        name: "Admin Panel Main Page",
        element: AdminPage,
    },
    {
        path: "/wallet-list",
        name: "Wallet List Page",
        element: WalletList,
    },
    {
        path: "/add-wallet",
        name: "Add Wallet Page",
        element: AddWallet,
    },
    {
        path: "/edit-wallet/:id",
        name: "Edit Wallet Page",
        element: EditWallet,
    },
    {
        path: "*",
        name: "Home Page",
        element: PageNotFound,
    },
];

export default routes;