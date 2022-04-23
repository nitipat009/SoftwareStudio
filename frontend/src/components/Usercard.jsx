import React, { useState } from "react";

function Usercard({index,id,username,password,role}) {
    const [user,setUser] = useState({
        id : id,
        username : username,
        password : password,
        role : role
    })

    const handleData = (text) => (e) => {
        setUser({ ...user, [text]: e.target.value });
    };

    const handleSave = () => {

    }

    const handleDelete = () => {

    }
  return (
    <tr className={((index % 2 === 0 )? "bg-gray-100 " : "") + "border-b hover:bg-orange hover:text-white "}>
      <td class="p-3 px-5">
        <input type="text" value={user.username} onChange={handleData("username")} class="bg-transparent" />
      </td>
      <td class="p-3 px-5">
        <input type="password" value={user.password} onChange={handleData("password")} class="bg-transparent" />
      </td>
      <td class="p-3 px-5">
        <select value={user.role} class="bg-transparent" onChange={handleData("role")}>
          <option value="user">user</option>
          <option value="admin">admin</option>
        </select>
      </td>
      <td class="p-3 px-5 flex justify-end">
        <button
          type="button"
          class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          onClick={handleSave}
        >
          Save
        </button>
        <button
          type="button"
          class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          onClick={handleDelete}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Usercard;
