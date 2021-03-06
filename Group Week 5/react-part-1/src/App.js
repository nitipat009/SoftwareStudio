// import logo from './logo.svg';
import "./App.css";
import React from "react";
import MemberCard from "./componants/MemberCard";

function App() {

  const members = [
    {
      firstname: "Kan",
      lastname: "Maksapsin",
      id: 62010052,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio, molestias tempora quisquam explicabo consectetur? Corporis amet nulla consectetur numquam architecto ratione a libero! Debitis alias itaque, commodi maxime voluptas sit provident at aliquid cupiditate, explicabo molestiae eveniet obcaecati, ipsa tempora! Laboriosam, officiis ab? Sit, dolor laboriosam deleniti reprehenderit dolorem praesentium velit eaque nemo cumque asperiores debitis, perferendis nam non perspiciatis soluta eum aliquid odit est ipsam delectus quis? Cum recusandae quaerat id ea laboriosam pariatur consequuntur quos quas laudantium.',
      image:
        "https://cdn.discordapp.com/attachments/802277621772714004/936911819627438120/unknown.png",
    },
    {
      firstname: "Nathamon",
      lastname: "Boonprasert",
      id: 62010285,
      description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio, molestias tempora quisquam explicabo consectetur? Corporis amet nulla consectetur numquam architecto ratione a libero! Debitis alias itaque, commodi maxime voluptas sit provident at aliquid cupiditate, explicabo molestiae eveniet obcaecati, ipsa tempora! Laboriosam, officiis ab? Sit, dolor laboriosam deleniti reprehenderit dolorem praesentium velit eaque nemo cumque asperiores debitis, perferendis nam non perspiciatis soluta eum aliquid odit est ipsam delectus quis? Cum recusandae quaerat id ea laboriosam pariatur consequuntur quos quas laudantium.",
      image:
        "https://cdn.discordapp.com/attachments/774503557852037130/947408066448613406/khaopod.jpg",
    },
    {
      firstname: "Nontapan",
      lastname: "Rujirakal",
      id: 62010453,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio, molestias tempora quisquam explicabo consectetur? Corporis amet nulla consectetur numquam architecto ratione a libero! Debitis alias itaque, commodi maxime voluptas sit provident at aliquid cupiditate, explicabo molestiae eveniet obcaecati, ipsa tempora! Laboriosam, officiis ab? Sit, dolor laboriosam deleniti reprehenderit dolorem praesentium velit eaque nemo cumque asperiores debitis, perferendis nam non perspiciatis soluta eum aliquid odit est ipsam delectus quis? Cum recusandae quaerat id ea laboriosam pariatur consequuntur quos quas laudantium.",
      image:
        "https://media.discordapp.net/attachments/802277621772714004/936911820172714004/unknown.png",
    },
    {
      firstname: "Narawich",
      lastname: "Youbua",
      id: 62010465,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio, molestias tempora quisquam explicabo consectetur? Corporis amet nulla consectetur numquam architecto ratione a libero! Debitis alias itaque, commodi maxime voluptas sit provident at aliquid cupiditate, explicabo molestiae eveniet obcaecati, ipsa tempora! Laboriosam, officiis ab? Sit, dolor laboriosam deleniti reprehenderit dolorem praesentium velit eaque nemo cumque asperiores debitis, perferendis nam non perspiciatis soluta eum aliquid odit est ipsam delectus quis? Cum recusandae quaerat id ea laboriosam pariatur consequuntur quos quas laudantium.",
      image:
        "https://cdn.discordapp.com/attachments/793757885569564702/939068903961808986/MaleCool.jpg",
    },
    {
      firstname: "Nitipat",
      lastname: "Boongate",
      id: 62010494,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio, molestias tempora quisquam explicabo consectetur? Corporis amet nulla consectetur numquam architecto ratione a libero! Debitis alias itaque, commodi maxime voluptas sit provident at aliquid cupiditate, explicabo molestiae eveniet obcaecati, ipsa tempora! Laboriosam, officiis ab? Sit, dolor laboriosam deleniti reprehenderit dolorem praesentium velit eaque nemo cumque asperiores debitis, perferendis nam non perspiciatis soluta eum aliquid odit est ipsam delectus quis? Cum recusandae quaerat id ea laboriosam pariatur consequuntur quos quas laudantium.",
      image:
        "https://scontent.fbkk6-1.fna.fbcdn.net/v/t1.6435-9/202844320_3115516578676762_2287929788556523078_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF7eOK7JUcPMSamEhWGCHl9md5v0zjp71aZ3m_TOOnvVtnFT-5jd4TPNLWeub9d1WIezPUAt4SBfjooZ_3KQI53&_nc_ohc=sW4uEsHYmb4AX_7WJhH&tn=uuTGGbGELiEdRKnI&_nc_ht=scontent.fbkk6-1.fna&oh=00_AT8BTnL2bIRvBHoHiXq-EbIzpr9qD_jPWI71mPvccj4siA&oe=623F5347",
    },
    {
      firstname: "Nitipoom",
      lastname: "Klaynium",
      id: 62010496,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio, molestias tempora quisquam explicabo consectetur? Corporis amet nulla consectetur numquam architecto ratione a libero! Debitis alias itaque, commodi maxime voluptas sit provident at aliquid cupiditate, explicabo molestiae eveniet obcaecati, ipsa tempora! Laboriosam, officiis ab? Sit, dolor laboriosam deleniti reprehenderit dolorem praesentium velit eaque nemo cumque asperiores debitis, perferendis nam non perspiciatis soluta eum aliquid odit est ipsam delectus quis? Cum recusandae quaerat id ea laboriosam pariatur consequuntur quos quas laudantium.",
      image:
        "https://images.unsplash.com/photo-1634195130430-2be61200b66a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ];
  return (
    <div className="App">
    
      <div className="header" id="font-link">Group's Members</div>
      {members.map((member) => (
      <MemberCard
        firstname={member.firstname}
        lastname={member.lastname}
        id={member.id}
        des={member.description}
        image={member.image}
      />
      ))}
     
    </div>
  );
}

export default App;
