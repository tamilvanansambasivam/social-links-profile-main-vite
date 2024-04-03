import React from "react";

function Button({ platform }) {
  return (
    <button className="bg-greyFM text-whiteFM hover:bg-primaryGreen hover:text-offBlack rounded px-4 py-2 m-4">
      {platform}
    </button>
  );
}

function App() {
  const socialMediaPlatforms = [
    "GitHub",
    "Frontend Mentor",
    "LinkedIn",
    "Twitter",
    "Instagram",
  ];

  return (
    <div className="flex justify-center items-center  bg-offBlack h-screen font-Inter">
      <div
        id="card"
        className="bg-darkGrey space-y-1 flex flex-col justify-center px-5 h-[70%] w-80  "
      >
        <div className="flex flex-col items-center space-y-4">
          <img
            src="assets/images/avatar-jessica.jpeg" // Updated file path
            alt=""
            className="rounded-full h-20 w-20 "
          />
          <div className="flex flex-col justify-center items-center space-y-1">
            <h1 className="text-whiteFM font-medium text-2xl tracking-wide">
              {" "}
              Jessica Randall
            </h1>
            <p className="text-primaryGreen text-sm font-semibold">
              London, United Kingdom
            </p>
          </div>
          <p className="text-gray-400 text-sm font-light">
            "Front-end developer and avid reader."
          </p>
        </div>

        <div id="buttons" className="flex flex-col">
          {socialMediaPlatforms.map((platform) => (
            <Button key={platform} platform={platform} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
