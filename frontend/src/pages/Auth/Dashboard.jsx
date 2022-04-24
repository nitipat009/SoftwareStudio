import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Usercard from "../../components/usercard";
function Dashboard() {
  const path = useLocation().pathname;


  
  useEffect(()=>{
    fetchData()
  },[])

  const [data,setData] = useState([])



  const fetchData = async() => {
    const {data} = await axios.get(`https://localhost:7198/api/Users/`)
    setData(data)
  }
  return (
    <div className="flex flex-row-cols-2 h-full w-full">
      <section className="flex h-screen items-center">
        {/* Sidebar */}
        <Sidebar pathname={path} />
      </section>
      <section className="flex h-screen w-full">
        <div class="text-gray-900 bg-gray-200 w-full h-full mt-32">
          <div class="p-4 flex">
            <h1 class="text-3xl">Users</h1>
          </div>
          <div class="px-3 py-4 flex justify-center">
            <table class="w-full text-md bg-white shadow-md rounded mb-4">
              <tbody>
                <tr class="border-b">
                  <th class="text-left p-3 px-5">Name</th>
                  <th class="text-left p-3 px-5">Password</th>
                  <th class="text-left p-3 px-5">Role</th>
                  <th class="text-left p-3 px-5">Status</th>
                  <th></th>
                </tr>
                {data.map((data) => {
                  return <Usercard {...data} />
                })}
                
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
