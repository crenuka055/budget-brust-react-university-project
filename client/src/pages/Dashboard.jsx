import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer';
import LoginNavbar from '../components/LoginNavbar';
import AreaChart from '../components/AreaChart';
import LineChart from '../components/LineChart';
import PieCharts from '../components/PieChart';
import Table from '../components/Table';
import LineChart2 from '../components/LineChart2';

axios.defaults.withCredentials = true;

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/auth/verify')
      .then(res => {
        if (!res.data.status) {
          navigate('/');
        }
      })
      .catch(error => {
        console.error('Error verifying authentication:', error);
        navigate('/'); // Redirect on error
      });
  }, [navigate]);

  return (
    <div className="bg- min-h-screen m-1">
      <LoginNavbar />
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Pie Charts</h2>
            <PieCharts />
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Line Chart 2</h2>
            <LineChart2 />
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Area Chart</h2>
            <AreaChart />
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Line Chart</h2>
            <LineChart />
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 col-span-2">
            <h2 className="text-xl font-semibold mb-4">Table</h2>
            <Table />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
