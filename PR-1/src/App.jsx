import React from "react";
import Cart from "./component/Cart";

const App = () => {
  const userData = [
    {
      name: "Raj Surani",
      Number: "+1 234 567 890",
      Email: "Rajsurani@gmail.com",
      Desc: "Frontend Developer with 5 years of experience.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      address:"Surat,India",
      joimeddate:"September 2025"
    },
    {
      name: "Jane Smith",
      Number: "+1 987 654 321",
      Email: "jane@example.com",
      Desc: "Full Stack Developer passionate about UI/UX.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      address:"Surat,India",
      joimeddate:"September 2025"
    }
  ];

  return <Cart data={userData} />;
};

export default App;
