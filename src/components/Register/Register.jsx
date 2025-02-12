import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
export default function Register() {
  //install formik
  //hook useFormik

  const initialvalue = {
    userName: "",
    email: "",
    password: "",
    confirmedPassword: "",
  };


  const validationSchema = Yup.object().shape({
    userName: Yup.string().min(3,"min character is 3").max(15,"max character is 15").required("requierd"),
    email: Yup.string().email("invalid email").required("requierd"),
    password: Yup.string().matches(/^[A-Z][a-z0-9]{3,8}/, "invalid password").required("requierd"),
    confirmedPassword: Yup.string().oneOf([Yup.ref("password")],"Not Matched").required("requierd"),
  });

  //call api function
  async function register(values){
    //send data to server
/*       axios
        .get("http://localhost:3000/auth/signUp")
        .then(({ data }) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
          alert(error);
        }); */
    let {data} = await axios.post("http://localhost:3000/auth/signUp", values)
    console.log(data);
    
    }


  let registerForm = useFormik({
    initialValues: initialvalue,
    validationSchema,
    onSubmit: register,
    });



  return (
    <>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="my-5">Sign Up :</h1>
          <form onSubmit={registerForm.handleSubmit}>
            <div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  placeholder="User Name"
                  name="userName"
                  value={registerForm.values.userName}
                  onChange={registerForm.handleChange}
                  onBlur={registerForm.handleBlur}
                />
                <label htmlFor="userName" className="text-secondary">
                  Name
                </label>

                {registerForm.errors.userName &&
                registerForm.touched.userName ? (
                  <div className="alert alert-danger" role="alert">
                    {registerForm.errors.userName}
                  </div>
                ) : null}
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  name="email"
                  value={registerForm.values.email}
                  onChange={registerForm.handleChange}
                  onBlur={registerForm.handleBlur}
                />
                <label htmlFor="email" className="text-secondary">
                  Email
                </label>

                {registerForm.errors.email && registerForm.touched.email ? (
                  <div className="alert alert-danger" role="alert">
                    {registerForm.errors.email}
                  </div>
                ) : null}
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="password"
                  name="password"
                  value={registerForm.values.password}
                  onChange={registerForm.handleChange}
                  onBlur={registerForm.handleBlur}
                />
                <label htmlFor="password" className="text-secondary">
                  Password
                </label>

                {registerForm.errors.password &&
                registerForm.touched.password ? (
                  <div className="alert alert-danger" role="alert">
                    {registerForm.errors.password}
                  </div>
                ) : null}
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="repassword"
                  placeholder="repassword"
                  name="confirmedPassword"
                  value={registerForm.values.confirmedPassword}
                  onChange={registerForm.handleChange}
                  onBlur={registerForm.handleBlur}
                />
                <label htmlFor="repassword" className="text-secondary">
                  confirm Password
                </label>

                {registerForm.errors.confirmedPassword &&
                registerForm.touched.confirmedPassword ? (
                  <div className="alert alert-danger" role="alert">
                    {registerForm.errors.confirmedPassword}
                  </div>
                ) : null}
              </div>
              <button  className="btn btn-outline-light"> Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
