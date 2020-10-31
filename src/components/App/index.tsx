import React from "react";
import { Formik, Form, Field } from "formik";
import "./App.css";

interface FormValues {
  name: string;
  position: string;
}

const initialValues: FormValues = {
  name: "",
  position: "",
};

const App: React.FC = () => {
  const handleSubmit = (values: FormValues): void => {
    alert(JSON.stringify(values));
  };
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(props) => {
          return (
            <Form>
              <div>
                <label>Name: </label>
                <Field autoComplete="off" name="name" as="input"></Field>
              </div>
              <div>
                <label>Position: </label>
                <Field
                  autoComplete="off"
                  name="position"
                  placeholder="choose your position"
                  as="select"
                >
                  <option value="front-end">Front End</option>
                  <option value="back-end">Back End</option>
                  <option value="ful-stack">Ful Stack</option>
                  <option value="mern-stack">MERN stack</option>
                </Field>
              </div>
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
export default App;
