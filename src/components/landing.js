import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "./landing.css";

const Landing = () => {
  const [count, setCount] = useState(0);
  const places = [
    {
      id: 1,
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description:
        "Fusce imperdiet euismod sodales. Nunc vel lacinia mi, ut gravida purus. Nulla dolor ex, eleifend semper sodales ac, consectetur ut nisl. Nulla imperdiet lectus urna.",
      image: "http://localhost:3000/jkl.png",
    },
    {
      id: 2,

      name: "Donec ligula massa, facilisis ac odio sed, vulputate luctus nisi",
      description:
        "Maecenas nibh sapien, ullamcorper eget aliquet at, ultricies ac ex. Pellentesque tempus placerat dolor, quis vulputate sem elementum quis. Morbi interdum ligula ut sodales aliquam. ",
      image: "http://localhost:3000/abc.png",
    },
    {
      id: 3,
      name: "Nam commodo pretium mi, ullamcorper ultricies sem.",
      description:
        "Aenean dui purus, dapibus quis tempor at, molestie in ligula. Proin at egestas tellus, varius varius lorem. Sed suscipit mauris velit, nec porttitor purus ultricies sed",
      image: "http://localhost:3000/ghi.png",
    },
    {
      id: 4,

      name: "Etiam volutpat id neque quis euismod. Nulla facilisi",
      description:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
      image: "http://localhost:3000/def.png",
    },
  ];

  return (
    <div className="box">
      <div className="hero">
        <span className="line">
          <hr></hr>
        </span>

        <h2 className="title">{places[count].name}</h2>
        <hr></hr>
        <p className="text">{places[count].description}</p>
      </div>

      <span className="circle">Read More</span>
      <img src={places[count].image} alt="pic not found" className="img1"></img>
      <img
        src={places[count + 1].image}
        alt="pic not found"
        className="img2"
      ></img>
      {
        <button
          className=" button1"
          onClick={() => setCount(count - 1)}
          disabled={count === 0}
        >
          {places[count].id} {<BsArrowLeft></BsArrowLeft>}
        </button>
      }
      {
        <button
          className="button2 "
          onClick={() => setCount(count + 1)}
          disabled={count + 2 === places.length}
        >
          {places.length}
          {<BsArrowRight></BsArrowRight>}
        </button>
      }
      <></>
    </div>
  );
};
export default Landing;
