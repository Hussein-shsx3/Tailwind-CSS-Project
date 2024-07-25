import React from "react";

const Features = () => {
  return (
    <section className="w-full flex justify-center pt-[150px]" id="Features">
      <div className="container w-full flex flex-wrap justify-center gap-[80px]">
        <div className="w-[90%] flex flex-col items-center text-center  md:w-[40%] lg:w-[31%]">
          <img
            src="./images/icon-access-anywhere.svg"
            alt=""
            className="w-[130px] mb-[15px] h-[120px]"
          />
          <h3 className="text-[23px] text-hColor m-[10px]">
            Access your files, anywhere
          </h3>
          <p className="text-textColor">
            the ability to use a smatrphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>
        <div className="w-[90%] flex flex-col items-center text-center  md:w-[40%] lg:w-[31%]">
          <img
            src="./images/icon-security.svg"
            alt=""
            className="w-[100px] mb-[15px] h-[120px]"
          />
          <h3 className="text-[23px] text-hColor m-[10px]">
            Access your files, anywhere
          </h3>
          <p className="text-textColor">
            the ability to use a smatrphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>
        <div className="w-[90%] flex flex-col items-center text-center  md:w-[40%] lg:w-[31%]">
          <img
            src="./images/icon-collaboration.svg"
            alt=""
            className="w-[130px] mb-[15px] h-[110px]"
          />
          <h3 className="text-[23px] text-hColor m-[10px]">
            Access your files, anywhere
          </h3>
          <p className="text-textColor">
            the ability to use a smatrphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>
        <div className="w-[90%] flex flex-col items-center text-center md:w-[40%] lg:w-[31%]">
          <img
            src="./images/icon-any-file.svg"
            alt=""
            className="w-[130px] mb-[15px] h-[110px]"
          />
          <h3 className="text-[23px] text-hColor m-[10px]">
            Access your files, anywhere
          </h3>
          <p className="text-textColor">
            the ability to use a smatrphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
