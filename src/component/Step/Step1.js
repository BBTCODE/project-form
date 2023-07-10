import React from "react";
import Img2 from "../../images/Group 41.png";
import Img3 from "../../images/Group.png";
import Img4 from "../../images/Group (1).png";
import Img5 from "../../images/Group 3984.png";
import { useFormik } from "formik";
import { registerSchema } from "./schemas";
import { useDispatch, useSelector } from "react-redux";
import { updateField  } from "../userSlice";

const initialValues = {
  name: "",
  email: "",
  number: "",
  company: "",
};



const Step1 = () => {

  const dispatch = useDispatch();
  const user = useSelector(updateField)

  const handleSubmit = (field) => (evt) => {
    
    dispatch(updateField({field, value: evt.target.value}));

  
  }
  const { errors, touched, handleBlur,handleChange  } =
    useFormik({
      initialValues: {initialValues},
      validationSchema: registerSchema,
      onsubmit: (values) => {
        console.log(values);

      },
     
    
    });

    // const commonHandleChange = () => {
    //   handleChange();
    //   handleSubmit('name','email','number','company')
    // }
    
  return (
    <>
      <div className="container text-xl font-bold mb-2">Contact Details</div>
      <div className="container text-xs mb-4">
        Please fill your information so we can get in touch with you.
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mx-auto">
            <form id="my-form" onSubmit={handleSubmit}
            >
              <div className="form-group row">
                <div className="col-sm-6">
                  <label htmlFor="name" className="font-bold">
                    Name
                  </label>
                  <div className=" relative flex items-center justify-end ">
                    <input
                      type="text"
                      className="form-control rounded-full p-3 m-2 shadow-md cursor-pointer relative"
                      id="name"
                      name="name"
                      placeholder="Jhon Carter"
                      value={user.name}
                      onBlur={handleBlur}
                      onChange={handleSubmit("name")}
                    
                      
                    />
                    <img src={Img2} alt="img" className="absolute mr-7" />
                  </div>
                  {errors.name && touched.name ? (
                    <p className="form-error ml-8 text-sm text-red-300 -mt-8 absolute">
                      {errors.name}
                    </p>
                  ) : null}
                </div>
                <div className="col-sm-6">
                  <label htmlFor="email" className="font-bold">
                    Email
                  </label>
                  <div className=" relative flex items-center justify-end ">
                    <input
                      type="email"
                      className="form-control rounded-full p-3 m-2 shadow-md cursor-pointer relative"
                      id="email"
                      name=""
                      placeholder="Email address"
                      value={user.email}
                      onBlur={handleBlur}
                      onChange={handleSubmit("email")}
                    />
                    <img src={Img3} alt="img" className="absolute mr-7" />
                  </div>
                  {errors.number && touched.email ? (
                    <p className="form-error ml-8 text-sm text-red-300 -mt-8 absolute">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
              </div>
              <div class="form-group row">
                <div className="col-sm-6">
                  <label htmlFor="number" className="font-bold">
                    Phone Number
                  </label>
                  <div className=" relative flex items-center justify-end ">
                    <input
                      type=""
                      className="form-control rounded-full p-3 m-2 shadow-md cursor-pointer relative"
                      id="number"
                      name="number"
                      placeholder="(123)456-7890"
                      value={user.number}
                      onBlur={handleBlur}
                      onChange={handleSubmit("number")}                    />
                    <img src={Img4} alt="img" className="absolute mr-7" />
                  </div>
                  {errors.number && touched.number ? (
                    <p className="form-error ml-8 text-sm text-red-300 -mt-8 absolute">
                      {errors.number}
                    </p>
                  ) : null}
                </div>
                <div className="col-sm-6">
                  <label for="company" className="font-bold">
                    Company
                  </label>
                  <div className=" relative flex items-center justify-end ">
                    <input
                      type="text"
                      className="form-control rounded-full p-3 m-2 shadow-md cursor-pointer relative"
                      id="company"
                      name="company"
                      placeholder="Company name"
                      value={user.company}
                      onBlur={handleBlur}
                      onChange={handleSubmit("company")}                      
                    />
                    <img src={Img5} alt="img" className="absolute mr-7" />
                  </div>
                  {errors.company && touched.company ? (
                    <p className="form-error ml-8 text-sm text-red-300 -mt-8 absolute">
                      {errors.company}
                    </p>
                  ) : null}

                </div>
              </div>
              

            </form>
            
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default Step1;
