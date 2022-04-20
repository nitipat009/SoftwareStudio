import React , {useState} from "react";
import imgUrl from "../assets/bg/Login.png";

function Register(){
    const [user, setUser] = useState({
        username: "",
        password: "",
        cf_password : ""
      });
    
      const handleData = (text) => (e) => {
        setUser({ ...user, [text]: e.target.value });
      };
    
      return (
        <div className="h-screen w-full flex flex-row-cols-2 overflow-hidden">
          
            {/* Left */}
            <section className="flex w-full h-full justify-center">
              <div className="flex w-full h-full p-24">
                <form
                  action="#"
                  className="flex flex-col w-full h-full justify-center gap-5 text-xl"
                >
                  <h1 className="text-3xl font-bold">Register</h1>
                  <h3>Username</h3>
                  <input
                    type={"text"}
                    value={user.username}
                    onChange={handleData("username")}
                    className="border-b-2 border-black"
                  />
                  <h3>Password</h3>
                  <input
                    type={"password"}
                    value={user.password}
                    onChange={handleData("password")}
                    className="border-b-2 border-black"
                  />
                  <h3>Confirm Password</h3>
                  <input
                    type={"password"}
                    value={user.password}
                    onChange={handleData("password")}
                    className="border-b-2 border-black"
                  />
                  {/* Submit Button */}
                  <button
                    type="submit"
                    class="bg-orange hover:bg-opacity-60 active:hover:bg-opacity-40 rounded text-3xl font-bold text-white"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </section>
            
            {/* Right */}
            <section className="flex h-screen items-center">
                <img className="object-cover" src={imgUrl}/>
            </section>
    
            
         
        </div>
      );
}

export default Register