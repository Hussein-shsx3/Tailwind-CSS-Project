import React from "react";

const SignIn = () => {
  return (
    <section className="w-full flex justify-center translate-y-[130px]" id="SignIn">
      <div className="container w-full flex flex-col items-center">
        <div className="w-[95%] px-[10px] py-[20px] bg-secondaryColor flex flex-col items-center  md:w-[70%] md:py-[35px] lg:px-[25px]">
          <h1 className="text-hColor text-[27px]">Get early access today</h1>
          <p className="text-textColor w-[100%] text-center my-[20px] lg:w-[80%]">
            It only takes a minute to sign up and our free starter tier is
            extremely, if you have any questions, our support team would be
            happy to help you.
          </p>
          <div className="flex flex-row justify-between w-[100%] mt-[15px] lg:w-[85%]">
          <input type="text" className="w-[68%] h-[45px] text-[14px] rounded-[30px] pl-[20px] outline-none lg:text-[18px]" placeholder="email@example.com"/>
          <button className="text-hColor bg-buttonColor text-[10px] w-[30%] h-[45px] rounded-[30px] lg:text-[15px] lg:w-[28%]">Get Started For Free</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
