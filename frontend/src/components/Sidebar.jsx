import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {isAuth} from '../helpers/auth'
function Sidebar({ pathname }) {

  const [isadmin,setAdmin] = useState(false)
  useEffect(()=>{
    (isAuth().isAdmin === "True")?setAdmin(true) :setAdmin(false)
  },[])
  return (
    <div class="max-w-2xl mx-auto h-screen bg-orange mt-64">
      <aside class="w-54 h-full" aria-label="Sidebar">
        <div class="px-3 py-4 overflow-y-auto rounded ">
          <ul class="space-y-2">
            {/* User */}
            <li>
              <NavLink
                to={"/Profile"}
                className={(pathname === "/Profile" ? "bg-amber-600 " : " ") + "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white"}
              >
                <svg
                  class="flex-shrink-0 w-6 h-6 text-gray-500 fill-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">
                  Personal Information
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/ChangePassword"}
                className={(pathname === "/ChangePassword" ? "bg-amber-600 " : " ") + "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white"}
              >
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 122.879 118.662"
                  className="fill-white"
                >
                  <g>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M43.101,54.363h4.138v-8.738c0-4.714,1.93-8.999,5.034-12.105v-0.004 c3.105-3.105,7.392-5.034,12.108-5.034c4.714,0,8.999,1.929,12.104,5.034l0.004,0.004c3.104,3.105,5.034,7.392,5.034,12.104v8.738 l3.297,0.001c0.734,0,1.335,0.601,1.335,1.335v28.203c0,0.734-0.602,1.335-1.336,1.335H43.101c-0.734,0-1.336-0.602-1.336-1.335 V55.698C41.765,54.964,42.366,54.363,43.101,54.363L43.101,54.363z M16.682,22.204c-1.781,2.207-3.426,4.551-5.061,7.457 c-5.987,10.645-8.523,22.731-7.49,34.543c1.01,11.537,5.432,22.827,13.375,32.271c2.853,3.392,5.914,6.382,9.132,8.968 c11.112,8.935,24.276,13.341,37.405,13.216c13.134-0.125,26.209-4.784,37.145-13.981c3.189-2.682,6.179-5.727,8.915-9.13 c6.396-7.957,10.512-17.29,12.071-27.138c1.532-9.672,0.595-19.829-3.069-29.655c-3.487-9.355-8.814-17.685-15.775-24.206 C96.695,8.333,88.593,3.755,79.196,1.483c-2.943-0.712-5.939-1.177-8.991-1.374c-3.062-0.197-6.193-0.131-9.401,0.224 c-2.011,0.222-3.459,2.03-3.238,4.041c0.222,2.01,2.03,3.459,4.04,3.237c2.783-0.308,5.495-0.366,8.141-0.195 c2.654,0.171,5.23,0.568,7.731,1.174c8.106,1.959,15.104,5.914,20.838,11.288c6.138,5.751,10.847,13.125,13.941,21.427 c3.212,8.613,4.035,17.505,2.696,25.959c-1.36,8.589-4.957,16.739-10.553,23.699c-2.469,3.071-5.121,5.78-7.912,8.127 c-9.591,8.067-21.031,12.153-32.502,12.263c-11.473,0.109-23.001-3.762-32.764-11.61c-2.895-2.328-5.621-4.983-8.129-7.966 c-6.917-8.224-10.771-18.092-11.655-28.202c-0.908-10.375,1.317-20.988,6.572-30.331c1.586-2.82,3.211-5.071,5.013-7.241 l0.533,14.696c0.071,2.018,1.765,3.596,3.782,3.524s3.596-1.765,3.524-3.782l-0.85-23.419c-0.071-2.019-1.765-3.596-3.782-3.525 c-0.126,0.005-0.25,0.016-0.372,0.032v-0.003L3.157,16.715c-2.001,0.277-3.399,2.125-3.122,4.126 c0.276,2.002,2.124,3.4,4.126,3.123L16.682,22.204L16.682,22.204L16.682,22.204z M53.899,54.363h20.963v-8.834 c0-2.883-1.18-5.504-3.077-7.403l-0.002,0.001c-1.899-1.899-4.521-3.08-7.402-3.08c-2.883,0-5.504,1.18-7.404,3.078 c-1.898,1.899-3.077,4.521-3.077,7.404V54.363L53.899,54.363L53.899,54.363z M64.465,69.795l2.116,9.764l-5.799,0.024l1.701-9.895 c-1.584-0.509-2.733-1.993-2.733-3.747c0-2.171,1.76-3.931,3.932-3.931c2.17,0,3.931,1.76,3.931,3.931 C67.612,67.845,66.261,69.433,64.465,69.795L64.465,69.795L64.465,69.795z"
                    />
                  </g>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">
                  Change Password
                </span>
              </NavLink>
            </li>
            <li className={(isadmin ?"visible" :  "hidden" )}>
              <NavLink
                to={"/Dashboard"}
                className={(pathname === "/Dashboard" ? "bg-amber-600 " : " ") + "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white"}
              >
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20px"
                  height="20px"
                  className="fill-white"
                  viewBox="0 0 237.569 237.569"
                >
                  <g>
                    <path
                      d="M234.362,24.818c-2.009-1.403-4.576-1.736-6.879-0.89l-71.607,26.306L84.272,23.927c-1.671-0.614-3.504-0.614-5.173,0
  L4.914,51.183C1.962,52.268,0,55.079,0,58.223v148.379c0,2.451,1.198,4.748,3.207,6.15c1.276,0.891,2.778,1.35,4.293,1.35
  c0.871,0,1.747-0.152,2.586-0.46l71.599-26.306l71.604,26.306c1.669,0.613,3.502,0.613,5.173,0l74.193-27.256
  c2.952-1.084,4.914-3.895,4.914-7.04V30.968C237.569,28.516,236.372,26.22,234.362,24.818z M222.569,174.112l-66.693,24.5
  l-71.604-26.306c-0.835-0.307-1.711-0.46-2.586-0.46c-0.876,0-1.752,0.153-2.587,0.46L15,195.857V63.458l66.686-24.5l71.604,26.306
  c1.669,0.613,3.502,0.613,5.173,0l64.107-23.551V174.112z"
                    />
                    <path
                      d="M157.018,114.759c0-25.51-20.752-46.264-46.26-46.264c-25.51,0-46.264,20.754-46.264,46.264
  c0,25.509,20.754,46.262,46.264,46.262c10.053,0,19.359-3.233,26.955-8.701l22.563,22.559c1.464,1.464,3.383,2.196,5.303,2.196
  c1.919,0,3.839-0.732,5.304-2.197c2.929-2.929,2.928-7.678-0.001-10.606l-22.562-22.559
  C153.785,134.116,157.018,124.811,157.018,114.759z M79.494,114.759c0-17.239,14.025-31.264,31.264-31.264
  c17.237,0,31.26,14.025,31.26,31.264c0,17.238-14.023,31.262-31.26,31.262C93.519,146.02,79.494,131.996,79.494,114.759z"
                    />
                  </g>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/Logout"}
                className={(pathname === "/Logout" ? "bg-amber-600 " : " ") + "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white"}
              >
                {/* Icon Logout */}
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20px"
                  height="20px"
                  className="fill-white"
                  viewBox="0 0 511.989 511.989"
                >
                  <g>
                    <g>
                      <g>
                        <path
                          d="M110.933,221.782c-4.71,0-8.533,3.823-8.533,8.533v51.2c0,4.71,3.823,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-51.2
          C119.467,225.605,115.644,221.782,110.933,221.782z"
                        />
                        <path
                          d="M111.855,2.304L31.172,34.586C8.448,43,0,54.418,0,76.715v358.477c0,22.298,8.448,33.715,30.959,42.061l81.058,32.427
          c4.011,1.519,8.038,2.287,11.981,2.287c17.152,0,29.602-14.336,29.602-34.091V34.049C153.6,9.78,134.246-6.126,111.855,2.304z
           M136.533,477.876c0,10.18-5.035,17.024-12.535,17.024c-1.869,0-3.883-0.401-5.803-1.118L37.103,461.33
          c-16.102-5.965-20.036-11.102-20.036-26.138V76.715c0-15.036,3.934-20.164,20.241-26.206l80.725-32.29
          c2.082-0.785,4.087-1.186,5.956-1.186c7.501,0,12.544,6.835,12.544,17.016V477.876z"
                        />
                        <path
                          d="M178.133,51.115h120.533c14.114,0,25.6,11.486,25.6,25.6v128c0,4.71,3.814,8.533,8.533,8.533
          c4.719,0,8.533-3.823,8.533-8.533v-128c0-23.526-19.14-42.667-42.667-42.667H178.133c-4.71,0-8.533,3.823-8.533,8.533
          S173.423,51.115,178.133,51.115z"
                        />
                        <path
                          d="M332.8,298.582c-4.719,0-8.533,3.823-8.533,8.533v128c0,14.114-11.486,25.6-25.6,25.6H179.2
          c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h119.467c23.526,0,42.667-19.14,42.667-42.667v-128
          C341.333,302.405,337.519,298.582,332.8,298.582z"
                        />
                        <path
                          d="M511.343,252.655c-0.435-1.05-1.058-1.988-1.852-2.782l-85.325-85.333c-3.337-3.336-8.73-3.336-12.066,0
          c-3.337,3.337-3.337,8.73,0,12.066l70.767,70.775H196.267c-4.71,0-8.533,3.823-8.533,8.533c0,4.71,3.823,8.533,8.533,8.533
          h286.601L412.1,335.215c-3.337,3.337-3.337,8.73,0,12.066c1.664,1.664,3.849,2.5,6.033,2.5c2.185,0,4.369-0.836,6.033-2.5
          l85.325-85.325c0.794-0.794,1.417-1.732,1.852-2.782C512.205,257.093,512.205,254.738,511.343,252.655z"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Logout</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;