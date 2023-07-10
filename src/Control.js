import React from "react";

const Control = ({ handleClick, currentStep }) => {
  return (
    <>
      <div className="container flex justify-around mt-4 mb-8">
        {/* back button */}
        <button
          onClick={() => handleClick()}
          type="submit"
          className={`bg-white text-indigo-500 uppercase py-2 px-4 rounded-full font-semibold curser-pointer border-2 border-indigo-500  
     hover:bg-indigo-500 hover:text-black transition duration-200 ease-in-out ${
       currentStep === 1 ? "opacity-0" : ""
     }`}
        >
          {" "}
          Previous
        </button>
        {/* next button */}
        <button
          onClick={() => handleClick("next")}
          form="my-form"
          type="submit"
          className={`bg-indigo-500 text-white uppercase py-2 px-4 rounded-full font-semibold curser-pointer border-2 border-indigo-500 hover:bg-indigo-700 hover:text-white transition duration-200 ease-in-out ${
            currentStep === 4 ? "opacity-0" : ""
          } `}
        >
          Next Step{" "}
        </button>
      </div>
    </>
  );
};

export default Control;
