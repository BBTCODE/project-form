import React, { useState } from "react";
import { StepperContext } from "./contexts/Steppercontext";
import Header from "./Header";
import Footer from "./Footer";
import Hadding from "./Hadding";
import Control from "./Control";
import Stapper from "./Stapper";
import Step1 from "./component/Step/Step1";
import Step2 from "./component/Step/Step2";
import Step3 from "./component/Step/Step3";
import Step4 from "./component/Step/Step4";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, SetUserData] = useState("");
  const [finalData, setFinalData] = useState([]);
  const steps = ["Step1", "Step2", "Step3", "Step4"];
  const displaystep = (step) => {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      default:
    }
  };
  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    // check if staps are with in bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };
  return (
    <>
      {/*display Header */}
      <Header />
      {/*display Heading */}
      <Hadding />
      {/*display stapper + components */}
      {/*display stapper */}

      <div className="container md:w-1/2 mx-auto  mt-5 shadow-xl rounded-xl pb-2 bg-white ">
        <Stapper steps={steps} currentStep={currentStep} />

        {/*display components */}

        <div className="m-2 p-2">
          <StepperContext.Provider
            value={{
              userData,
              SetUserData,
              finalData,
              setFinalData,
            }}
          >
            {displaystep(currentStep)}
          </StepperContext.Provider>
        </div>
      </div>
      {/*display control */}
      <Control
        handleClick={handleClick}
        currentStep={currentStep}
        steps={steps}
      />
      {/*display Footer */}
      <Footer />
    </>
  );
};

export default App;
