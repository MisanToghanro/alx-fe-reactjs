import {Formik , Form , Field , ErrorMessages} from "formik";
import * as Yup from "yup";

const FormikForm = () => {

 const validationSchema = Yup.object({
    username: Yup.string()
    .required("username is required"),

    email: Yup.string()
    .required("email is required")
    .email("invalid email address"),

    password: Yup.string()
    .required("passwrod is required")
    .min("password must be at least 6 characters long")
    
 })

 const handleSubmit = (values) =>{
    alert("form submitted" , values)
 }

    return (
        <Formik
        initialValues={{username:"", email:"", password:""}}
        validationSchema={validationSchema}
       onSubmit={handleSubmit}
        >
            <Form>
                <h1>Formik form</h1>
                <label>Username:</label>
                <Field
                type="text"
                name="username"
                />
                <ErrorMessages name="username"/>

                <label>Email:</label>
                <Field
                type="email"
                name="email"
                />
                <ErrorMessages name="email"/>

                <label>Password:</label>
                <Field
                type="password"
                name="password"
                />
                <ErrorMessages name="email"/>

                <button type="submit">Register</button>
            </Form>
        </Formik>

    )
}

export default FormikForm;
