import React from "react";
import { Formik, Form } from "formik";
import { useFormik } from "formik";
import { registerSchema } from "./schemas";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "../userSlice";

const Step3 = () => {
  const dispatch = useDispatch();
  const user = useSelector(updateField);

  const handleChange = (field) => (evt) => {
    dispatch(updateField({ field, value: evt.target.value }));
  };
  const { errors, touched } = useFormik({
    initialValues: { price: "" },

    validationSchema: { registerSchema },

    onsubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <Formik
        initialValues={{
          price: "",
        }}
        // validations
        validationSchema={registerSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit}>
            <div className="container text-xl font-bold mb-2">
              What's your project budget?
            </div>
            <div className="container text-xs mb-2 relative">
              Please select the project budget range you have in mind.
            </div>{" "}
            {errors.price && touched.price ? (
              <p className="form-error  text-sm text-red-300 -mt-2 absolute">
                {errors.price}
              </p>
            ) : null}
            <div className="container">
              <div className="row">
                <div className="col-md-12 mx-auto">
                  <div className="col-md-12 flex justify-between flex-wrap my-2">
                    <div className="container md:w-1/3 mx-auto  mt-3 shadow-md rounded-xl  flex items-center h-20 bg-slate-50 border-2 hover:border-indigo-500 cursor-pointer">
                      <input
                        class="form-check-input mr-2"
                        type="checkbox"
                        id=""
                        value="$5000-10000"
                        name="price"
                        onChange={handleChange("price")}
                        defaultChecked={formik.values.price === "$5000-10000"}
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        $5000-10000
                      </label>
                    </div>
                    <div className="container md:w-1/3 mx-auto  mt-3 shadow-md rounded-xl flex items-center h-20 bg-slate-50 cursor-pointer border-2 hover:border-indigo-500 ">
                      <input
                        class="form-check-input mr-2"
                        type="radio"
                        value="$10000-20000"
                        name="price"
                        onChange={handleChange("price")}
                        defaultChecked={formik.values.price === "$10000-20000"}
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        $10000-20000
                      </label>
                    </div>
                    <div className="col-md-12 flex justify-between flex-wrap ">
                      <div className="container md:w-1/3 mx-auto  mt-3 shadow-md rounded-xl flex items-center h-20 bg-slate-50 cursor-pointer border-2 hover:border-indigo-500 my-1 ">
                        <input
                          class="form-check-input mr-2"
                          type="radio"
                          value="$20000-50000"
                          name="price"
                          onChange={handleChange("price")}
                          defaultChecked={
                            formik.values.price === "$20000-50000"
                          }
                        />
                        <label class="form-check-label" for="flexRadioDefault1">
                          $20000-50000
                        </label>
                      </div>
                      <div className="container md:w-1/3 mx-auto  mt-3 shadow-md rounded-xl  flex items-center  h-20 bg-slate-50 cursor-pointer border-2 hover:border-indigo-500 ">
                        <input
                          class="form-check-input mr-2"
                          type="radio"
                          value="$50000+"
                          name="price"
                          onChange={handleChange("price")}
                          defaultChecked={formik.values.price === "$50000+"}
                        />
                        <label class="form-check-label" for="flexRadioDefault1">
                          $50000+
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Step3;
