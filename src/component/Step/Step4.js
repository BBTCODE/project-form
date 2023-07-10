import React from "react";
import Img1 from "../../images/Group 37301.png";
import { useSelector, useDispatch } from "react-redux";
import { updateField } from "../userSlice";
import { allField } from "../store/userSlice1";
import { useNavigate } from "react-router-dom";

const Step4 = () => {
  const navigate = useNavigate();
  const user = useSelector(updateField);
  const userList = [user.payload.user];
  const dispatch = useDispatch();

  const onClickSubmit = () => {
    dispatch(allField(userList));
    navigate("/Table");
  };
  return (
    <>
      <div className="flex flex-col justify-start items-center">
        <img src={Img1} alt="img" className="" />
        <div className="container text-xl font-bold mb-1.5 text-center">
          Submit your quote request
        </div>
        <div className="container text-base mb-1.5 text-center ">
          Please review all the information you previously typed in <br /> the
          past steps,and if all is okay,submit your massage to <br /> receive a
          project quote in 24-48 hours.
        </div>
        <button
          className="btn btn-primary bg-indigo-500 text-white rounded-full border-2 border-indigo-500 px-4  hover:bg-indigo-700"
          type="submit"
          onClick={() => onClickSubmit()}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Step4;
