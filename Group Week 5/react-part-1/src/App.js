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
        "https://cdn.discordapp.com/attachments/802277621772714004/936911821007388692/unknown.png",
    },
  ];
  return (
    <div className="App">
    
      <div className="header" id="font-link">Group's Members</div>
      <MemberCard
        firstname={members[0].firstname}
        lastname={members[0].lastname}
        id={members[0].id}
        des={members[0].description}
        image={members[0].image}
      />
      <MemberCard
        firstname={members[1].firstname}
        lastname={members[1].lastname}
        id={members[1].id}
        des={members[1].description}
        image={members[1].image}
      />
      <MemberCard
        firstname={members[2].firstname}
        lastname={members[2].lastname}
        id={members[2].id}
        des={members[2].description}
        image={members[2].image}
      />
      <MemberCard
        firstname={members[3].firstname}
        lastname={members[3].lastname}
        id={members[3].id}
        des={members[3].description}
        image={members[3].image}
      />
      <MemberCard
        firstname={members[4].firstname}
        lastname={members[4].lastname}
        id={members[4].id}
        des={members[4].description}
        image={members[4].image}
      />
      <MemberCard
        firstname={members[5].firstname}
        lastname={members[5].lastname}
        id={members[5].id}
        des={members[5].description}
        image={members[5].image}
      />
    </div>
  );
}

export default App;
