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
        "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=756&q=80",
    },
    {
      firstname: "Nathamon",
      lastname: "Boonprasert",
      id: 62010285,
      description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio, molestias tempora quisquam explicabo consectetur? Corporis amet nulla consectetur numquam architecto ratione a libero! Debitis alias itaque, commodi maxime voluptas sit provident at aliquid cupiditate, explicabo molestiae eveniet obcaecati, ipsa tempora! Laboriosam, officiis ab? Sit, dolor laboriosam deleniti reprehenderit dolorem praesentium velit eaque nemo cumque asperiores debitis, perferendis nam non perspiciatis soluta eum aliquid odit est ipsam delectus quis? Cum recusandae quaerat id ea laboriosam pariatur consequuntur quos quas laudantium.",
      image:
        "https://images.unsplash.com/photo-1634896941598-b6b500a502a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=756&q=80",
    },
    {
      firstname: "Nontapan",
      lastname: "Rujirakal",
      id: 62010496,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio, molestias tempora quisquam explicabo consectetur? Corporis amet nulla consectetur numquam architecto ratione a libero! Debitis alias itaque, commodi maxime voluptas sit provident at aliquid cupiditate, explicabo molestiae eveniet obcaecati, ipsa tempora! Laboriosam, officiis ab? Sit, dolor laboriosam deleniti reprehenderit dolorem praesentium velit eaque nemo cumque asperiores debitis, perferendis nam non perspiciatis soluta eum aliquid odit est ipsam delectus quis? Cum recusandae quaerat id ea laboriosam pariatur consequuntur quos quas laudantium.",
      image:
        "https://images.unsplash.com/photo-1635763600243-7de773972512?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      firstname: "Narawich",
      lastname: "Youbua",
      id: 62010453,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio, molestias tempora quisquam explicabo consectetur? Corporis amet nulla consectetur numquam architecto ratione a libero! Debitis alias itaque, commodi maxime voluptas sit provident at aliquid cupiditate, explicabo molestiae eveniet obcaecati, ipsa tempora! Laboriosam, officiis ab? Sit, dolor laboriosam deleniti reprehenderit dolorem praesentium velit eaque nemo cumque asperiores debitis, perferendis nam non perspiciatis soluta eum aliquid odit est ipsam delectus quis? Cum recusandae quaerat id ea laboriosam pariatur consequuntur quos quas laudantium.",
      image:
        "https://cdn.discordapp.com/attachments/793757885569564702/938786782399565845/bp.jpg",
    },
    {
      firstname: "Nitipat",
      lastname: "Boongate",
      id: 62010465,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio, molestias tempora quisquam explicabo consectetur? Corporis amet nulla consectetur numquam architecto ratione a libero! Debitis alias itaque, commodi maxime voluptas sit provident at aliquid cupiditate, explicabo molestiae eveniet obcaecati, ipsa tempora! Laboriosam, officiis ab? Sit, dolor laboriosam deleniti reprehenderit dolorem praesentium velit eaque nemo cumque asperiores debitis, perferendis nam non perspiciatis soluta eum aliquid odit est ipsam delectus quis? Cum recusandae quaerat id ea laboriosam pariatur consequuntur quos quas laudantium.",
      image:
        "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      firstname: "Nitipoom",
      lastname: "Klaynium",
      id: 62010494,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio, molestias tempora quisquam explicabo consectetur? Corporis amet nulla consectetur numquam architecto ratione a libero! Debitis alias itaque, commodi maxime voluptas sit provident at aliquid cupiditate, explicabo molestiae eveniet obcaecati, ipsa tempora! Laboriosam, officiis ab? Sit, dolor laboriosam deleniti reprehenderit dolorem praesentium velit eaque nemo cumque asperiores debitis, perferendis nam non perspiciatis soluta eum aliquid odit est ipsam delectus quis? Cum recusandae quaerat id ea laboriosam pariatur consequuntur quos quas laudantium.",
      image:
        "https://images.unsplash.com/photo-1634195130430-2be61200b66a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ];
  return (
    <div className="App">
    
      <div className="header">Group's Members</div>
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
