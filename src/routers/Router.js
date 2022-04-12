
//import all pages here
import AddGuide from '../components/guidelineDash/AddGuide';
import EditGuideline from '../components/guidelineDash/EditGuideline';
import GuidelineList from '../components/guidelineDash/GuidelineList';
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
        path: "/add-guideline",
        name: "Add Guideline Page",
        element: AddGuide,
    },
    {
        path: "/guideline-list",
        name: "Add Guideline Page",
        element: GuidelineList,
    },
    {
        path: "/edit-guideline/:id",
        name: "Add Guideline Page",
        element: EditGuideline,
    },
    {
        path: "*",
        name: "404 Page",
        element: PageNotFound,
    },
];

export default routes;