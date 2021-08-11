import React from "react";

function About(props) {
  const [counter, setcounter] = React.useState(0);
  React.useEffect(() => {
    console.log("Loaded");
  });
  return (
    <div className="wrapper relative">
      <h1
        className="h1 p-2"
        style={{ background: counter ? "pink" : "lightgray" }}
      >
        About Page
      </h1>
      <h3 className="text-xl text-center font-bold">{counter}</h3>
      <p>Hello there</p>
      <button
        className="btn absolute top-3 left-1"
        onClick={() => setcounter(counter - 1)}
      >
        SUB
      </button>
      <button
        className="btn absolute top-3 right-1"
        onClick={() => setcounter(counter + 1)}
      >
        ADD
      </button>
      <button
        className="btn bg-pink-800"
        onClick={() => setcounter(counter - 1)}
      >
        Submit
      </button>
    </div>
  );
}

export default About;
