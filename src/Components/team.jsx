import React from "react";
import Comment from "./comment";

const Team = () => {
  return (
    <section className="w-full flex justify-center pt-[150px]" id="Team">
      <div className="container w-full flex flex-col items-center">
        <div className="w-[90%] flex flex-wrap items-center justify-between md:flex-row md:w-full">
          <img className="w-[100%] md:w-[50%]" src="./images/illustration-stay-productive.png" alt="" />
          <div className="w-[100%] lg:w-[45%]">
            <h1 className="text-hColor text-[30px] w-[100%] mb-[15px] lg:text-[40px] lg:w-3/4">
              Stay productive, wherever you are
            </h1>
            <p className="text-textColor my-[15px]">
              Never let location be an issue when accessing your files. fylo has
              you covered for all of your file storage needs.
            </p>
            <p className="text-textColor my-[15px]">
              Securely share files and folders with friends, family and
              colleagues for live collabration. No email attchment required
            </p>
            <a href="/" className="text-buttonColor hover-effect">
              See how Fylo words <i className="bx bx-right-arrow-alt bg-buttonColor text-black rounded-[100%]"></i>
              <hr className="w-[0px] bg-buttonColor border-none h-[2px] mt-[2px]"/>
            </a>
          </div>
        </div>
        <div className="w-[90%] positive flex flex-wrap justify-between md:w-full mt-[120px] ">
          <img className="absolute translate-x-[-20px] translate-y-[-35px]" src="./images/bg-quotes.png" alt="" />
          <Comment img="./images/profile-1.jpg" name="Statish Patel"/>
          <Comment img="./images/profile-2.jpg" name="Bruce Mckenzle"/>
          <Comment img="./images/profile-3.jpg" name="Iva Boyd"/>
        </div>
      </div>
    </section>
  );
};

export default Team;
