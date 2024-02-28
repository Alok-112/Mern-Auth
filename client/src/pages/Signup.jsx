import React, { useState } from "react";
import axios from 'axios'
import {toast} from 'react-hot-toast'
import {useNavigate} from  'react-router-dom';

const Signup = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const signupUser = async(e) => {
    e.preventDefault();
    const {name,email,password}= data
    try {
      const {data} = await axios.post('/signup',{
        name,email,password
      })
      if(data.error){
        toast.error(data.error)
      }else{
        setData({})
        toast.success('Signup Successful,  Welcome')
        navigate('/signin')
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center my-32 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <form onSubmit={signupUser} className="max-w-md w-full space-y-8">
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Enter Name..."
            />
          </div>
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Enter Email..."
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Enter Password..."
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;