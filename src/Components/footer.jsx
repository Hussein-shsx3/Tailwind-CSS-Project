import React from "react";

const Footer = () => {
  return (
    <section className="w-full bg-[#0c1524] flex justify-center py-[150px]">
      <div className="container w-full flex flex-col items-start">
        <img src="./images/logo.svg" alt="" />
        <dir className="w-full flex flex-col justify-between mt-[40px] lg:flex-row">
          <div className="flex gap-[15px] my-[20px]">
            <img
              className="w-[20px] h-[25px]"
              src="./images/icon-location.svg"
              alt=""
            />
            <p className="text-textColor max-w-[350px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              sapiente, impedit earum deleniti voluptas adipisci.
            </p>
          </div>
          <div className="my-[20px]">
            <div className="flex gap-[20px] mb-[23px]">
              <img
                className="w-[20px] h-[20px]"
                src="./images/icon-phone.svg"
                alt=""
              />
              <p className="text-textColor">+1-543-123-4567</p>
            </div>
            <div className="flex gap-[20px]">
              <img
                className="w-[25px] h-[20px]"
                src="./images/icon-email.svg"
                alt=""
              />
              <p className="text-textColor">example@fylo.com</p>
            </div>
          </div>
          <div className="flex flex-col text-textColor my-[20px]">
            <a href="/" className="link">
              About Us
            </a>
            <a href="/" className="link">
              jobs
            </a>
            <a href="/" className="link">
              Press
            </a>
            <a href="/" className="link">
              Blog
            </a>
          </div>
          <div className="flex flex-col text-textColor my-[20px]">
            <a href="/" className="link">
              Contact Us
            </a>
            <a href="/" className="link">
              Terms
            </a>
            <a href="/" className="link">
              Privacy
            </a>
          </div>
          <div className="flex gap-[13px] my-[20px]">
            <a href="/">
              <i className="bx bxl-facebook icon"></i>
            </a>
            <a href="/">
              <i className="bx bxl-twitter icon"></i>
            </a>
            <a href="/">
              <i className="bx bxl-instagram icon"></i>
            </a>
          </div>
        </dir>
      </div>
    </section>
  );
};

export default Footer;
