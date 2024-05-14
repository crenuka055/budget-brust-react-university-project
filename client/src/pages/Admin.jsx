import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer';
import LoginNavbar from '../components/LoginNavbar';
import AreaChart from '../components/AreaChart';
import LineChart from '../components/LineChart';
import UserTable from '../components/UserTable';
import LineChart2 from '../components/LineChart2';
import PieChart from '../components/PieChart';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // Verify authentication
  useEffect(() => {
    axios.get('http://localhost:3000/auth/verify')
      .then(res => {
        if (!res.data.status) {
          navigate('/');
        }
      })
      .catch(err => {
        console.error('Error verifying authentication:', err);
        navigate('/'); // Redirect on error
      });
  }, [navigate]);

  // Fetch user data
  useEffect(() => {
    axios.get('http://localhost:3000/get-user')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <> 
      <LoginNavbar />
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-white text-3xl font-semibold text-center mb-8'><span className='text-green-500'>Admin </span>Panel</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Area Chart */}
          <div className="bg-white rounded-lg shadow-md p-4 backdrop-filter backdrop-blur-lg">
            <h2 className="text-xl font-semibold mb-4">Area Chart</h2>
            <AreaChart />
          </div>

          {/* Line Chart */}
          <div className="bg-white rounded-lg shadow-md p-4 backdrop-filter backdrop-blur-lg">
            <h2 className="text-xl font-semibold mb-4">Line Chart</h2>
            <LineChart />
          </div>

          {/* Custom Line Chart */}
          <div className="bg-white rounded-lg shadow-md p-4 backdrop-filter backdrop-blur-lg">
            <h2 className="text-xl font-semibold mb-4">Custom Line Chart</h2>
            <LineChart2 />
          </div>

          {/* Pie Chart */}
          <div className="bg-white rounded-lg shadow-md p-4 backdrop-filter backdrop-blur-lg">
            <h2 className="text-xl font-semibold mb-4">Pie Chart</h2>
            <PieChart />
          </div>

        </div>

        {/* User Table */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-4 backdrop-filter backdrop-blur-lg">
          <h2 className="text-xl font-semibold mb-4">User Data</h2>
          <UserTable users={users} />
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Admin;
