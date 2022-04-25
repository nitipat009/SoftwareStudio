import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { isAuth } from "../helpers/auth";

function Usercard(props) {
  const [user, setUser] = useState({
    id: props.id,
    username: props.username,
    password: props.password,
    confirmPassword: props.confirmPassword,
    img: props.img,
    isAdmin: props.isAdmin === "True" ? "admin" : "user",
    isBan: props.isBan,
  });
  useEffect(() => {
    console.log(user.isAdmin);
    user.isAdmin === admin
      ? (document.getElementById("admin").selected = "selected")
      : (document.getElementById("user").selected = "selected");
  }, []);
  const handleData = (text) => (e) => {
    setUser({ ...user, [text]: e.target.value });
  };

  const handleSave = async () => {
    const requestSave = async () => {
      const res = await axios.put(
        `https://localhost:7198/api/Users/${user.id}`,
        {
          id: user.id,
          username: user.username,
          password: user.password,
          confirmPassword: user.confirmPassword,
          img: user.img,
          isAdmin: user.isAdmin === "admin" ? "True" : "False",
        }
      );
      return res;
    };

    await toast.promise(requestSave(), {
      pending: "Pending...",
      error: "Failed to edit!",
      success: "Edit Success!",
    });
  };

  const handleBan = async () => {
    const requestBan = async () => {
      const res = await axios.put(
        `https://localhost:7198/api/Users/ban/${user.id}`,
        {
          id: isAuth().id,
          username: isAuth().username,
          password: isAuth().password,
          confirmPassword: isAuth().confirmPassword,
          img: isAuth().img,
          isAdmin: isAuth().isAdmin,
        },
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      return res
    };

    await toast.promise(requestBan(), {
      pending: "Pending...",
      error: "Failed to ban!",
      success: "Banned!",
    });

    window.location.reload();
  };


  const handleUnBan = async () => {
    const requestUnBan = async () => {
      const res = await axios.put(
        `https://localhost:7198/api/Users/unbanned/${user.id}`,
        {
          id: isAuth().id,
          username: isAuth().username,
          password: isAuth().password,
          confirmPassword: isAuth().confirmPassword,
          img: isAuth().img,
          isAdmin: isAuth().isAdmin,
        },
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      return res
    };

    await toast.promise(requestUnBan(), {
      pending: "Pending...",
      error: "Failed to UnBanned!",
      success: "UnBanned!",
    });

    window.location.reload();
  };
  return (
    <tr
      className={
        (user.isAdmin === "admin" ? "bg-gray-100 " : "") +
        "border-b hover:bg-orange hover:text-white "
      }
    >
      <td class="p-3 px-5">
        <input
          type="text"
          value={user.username}
          onChange={handleData("username")}
          class="bg-transparent"
          readOnly
        />
      </td>
      <td class="p-3 px-5">
        <input
          type={"password"}
          value={user.password}
          onChange={handleData("password")}
          class="bg-transparent"
          readOnly
        />
      </td>
      <td class="p-3 px-5">
        <select
          value={user.isAdmin}
          class="bg-transparent text-black"
          onChange={handleData("isAdmin")}
        >
          <option id="user" value="user">
            user
          </option>
          <option id="admin" value="admin">
            admin
          </option>
        </select>
      </td>

      <td class="p-3 px-5">
        <span class="bg-transparent" onChange={handleData("isBan")}>
          {user.isBan === "False" ? "สถานะปกติ" : "ระงับการใช้งาน"}
        </span>
      </td>
      <td class="p-3 px-5 flex justify-between">
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
          onClick={handleBan}
        >
          Ban
        </button>
        <button
          type="button"
          class="text-sm bg-green-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          onClick={handleUnBan}
        >
          UnBan
        </button>
      </td>
    </tr>
  );
}

export default Usercard;
