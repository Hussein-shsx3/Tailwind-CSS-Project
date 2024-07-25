import React from "react";

const Comment = (props) => {
  return (
    <div className="w-[100%] bg-secondaryColor p-[25px] z-[1] md:w-[31%] mb-[20px]">
      <p className="text-textColor">
        Fylo has improved our team productivity by an order of magnitude. Since
        making the switch our team has become a well-oiled collabration machine.
      </p>
      <div className="mt-[18px] flex flex-row justify-start items-center gap-[15px]">
        <img className="w-[40px] rounded-[100%]" src={props.img} alt="" />
        <div>
          <h4 className="text-hColor text-[14px]">{props.name}</h4>
          <p className="text-textColor text-[13px]">Founder & CEO, Huddle</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
