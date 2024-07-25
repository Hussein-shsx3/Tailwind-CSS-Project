import React from "react";

const Home = () => {
  return (
    <section className="w-full flex justify-center bg-secondaryColor relative">
      <div className="container w-[90%] flex flex-col items-center z-[1] md:w-full">
        <img src="./images/landing-img.png" alt="" className="min-w-[200px]" />
        <div className="flex flex-col items-center text-center my-[15px] md:w-[75%]">
          <h1 className="text-hColor text-[30px] lg:text-[45px] m-[20px]">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="text-textColor lg:w-[68%]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt qui
            ut aut fugit excepturi est maxime nisi dolorem repellat mollitia
            labore laboriosam modi atque laborum, facilis quaerat distinctio
            tempora alias!
          </p>
          <button className="bg-buttonColor text-white w-[250px] h-[45px] rounded-[35px] m-[30px]">Get Started</button>
        </div>
      </div>
      <img src="./images/bg-curvy-desktop.svg" alt="" className="absolute bottom-[0px] w-[100%]"/>
    </section>
  );
};

export default Home;
