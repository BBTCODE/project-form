import React from "react";
import Img6 from "../../images/Group 37290.png";
import Img7 from "../../images/Group 37292.png";
import Img8 from "../../images/Group 37291.png";
import Img9 from "../../images/Setting.png";
import { Formik, Form } from "formik";
import { useFormik } from "formik";
import { registerSchema } from "./schemas";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "../userSlice";


const Step2 = () => {

  const dispatch = useDispatch();
  const user = useSelector(updateField);

  const handleChange = (field) => (evt) => {
    dispatch(updateField({ field, value: evt.target.value }));
  };
  const { errors, touched,} =
    useFormik({
      initialValues: {services :""},
    
      validationSchema: {registerSchema},
      
      onsubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <>
     <Formik
        initialValues={{
          services: "",
        }}
        // validations
        validationSchema={registerSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit}>
      <div className="container text-xl font-bold mb-2">Our Services</div>
      <div className="container text-xs mb-2">
        Please select which service you are intrested in.
      </div>
      

<div className="container">
              <div className="row">
                <div className="col-md-12 mx-auto">
                  <div className="col-md-12 flex justify-between flex-wrap my-2">
                    <div className="container md:w-1/3 mx-auto  mt-3 shadow-md rounded-xl  flex items-center h-20 bg-slate-50 border-2 hover:border-indigo-500 cursor-pointer">
                      <input
                        class="form-check-input mr-2"
                        type="radio"
                        id=""
                        value="Devlopment"
                        name="services"
                        onChange={handleChange("services")}
                        defaultChecked={formik.values.services === "Devlopment"}
                      />
                       <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center mx-1"
                type="checkbox">
                  <img src={Img6} alt="img" className="" />
                </div>
                      <label class="form-check-label" for="flexRadioDefault1">
                      Devlopment
                      </label>
                    </div>
                    <div className="container md:w-1/3 mx-auto  mt-3 shadow-md rounded-xl flex items-center h-20 bg-slate-50 cursor-pointer border-2 hover:border-indigo-500 ">
                      <input
                        class="form-check-input mr-2"
                        type="radio"
                        value="Web Design"
                        name="services"
                        onChange={handleChange("services")}
                        defaultChecked={formik.values.services === "Web Design"}
                      />
                      <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center mx-1">
                  <img src={Img7} alt="img" className="" />
                </div>
                      <label class="form-check-label" for="flexRadioDefault1">
                      
                      Web Design
                      </label>
                    </div>
                    <div className="col-md-12 flex justify-between flex-wrap ">
                      <div className="container md:w-1/3 mx-auto  mt-3 shadow-md rounded-xl flex items-center h-20 bg-slate-50 cursor-pointer border-2 hover:border-indigo-500 my-1 ">
                        <input
                          class="form-check-input mr-2"
                          type="radio"
                          value="Marketing"
                          name="services"
                          onChange={handleChange("services")}
                          defaultChecked={
                            formik.values.services === "Marketing"
                          }
                        />
                        <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center mx-1">
                  <img src={Img8} alt="img" className="" />
                </div>
                        <label class="form-check-label" for="flexRadioDefault1">
                        Marketing
                        </label>
                      </div>
                      <div className="container md:w-1/3 mx-auto  mt-3 shadow-md rounded-xl  flex items-center  h-20 bg-slate-50 cursor-pointer border-2 hover:border-indigo-500 ">
                        <input
                          class="form-check-input mr-2"
                          type="radio"
                          value="Other"
                          name="services"
                          onChange={handleChange("services")}
                          defaultChecked={formik.values.services === "Other"}
                        />
                         <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center mx-1">
                  <img src={Img9} alt="img" className="" />
                </div>
                        <label class="form-check-label" for="flexRadioDefault1">
                        Other
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      <br />
      </Form>)}
      </Formik>
    </>
  );
};

export default Step2;
