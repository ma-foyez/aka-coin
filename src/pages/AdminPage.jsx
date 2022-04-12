import React, { useEffect } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { getWalletList } from '../components/walletDash/_redux/Action/WalletListAction';
import { getGuidelineList } from '../components/guidelineDash/_redux/Action/GuidelineAction';


ChartJS.register(ArcElement, Tooltip, Legend);


const AdminPage = () => {

    const dispatch = useDispatch();
    const { walletList } = useSelector((state) => state.WalletReducer);
    const { guidelineList } = useSelector((state) => state.GuidelineReducer);

    useEffect(() => {
        dispatch(getWalletList())
        dispatch(getGuidelineList())
    }, [dispatch])

    const data = {
        labels: ['Wallets', 'Guidelines'],
        datasets: [
            {
                label: '# of Votes',
                data: [walletList.length > 0 ? walletList.length : 5, guidelineList.length > 0 ? guidelineList.length : 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };


    return (
        <DashboardLayout>
            <div className="container">
                <div className="card p-3">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <Pie data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default AdminPage;