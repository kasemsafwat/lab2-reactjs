import { useFormik } from "formik";


export default function Register() {


    //install formik
    //hook useFormik

    const initialvalue = {
      userName: "",
      email: "",
      password: "",
      confirmedPassword: "",
    };

     let registerForm = useFormik({
        initialValues: initialvalue,
        onSubmit:(values)=>{
            console.log(values);
        }
    })


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
                />
                <label htmlFor="userName" className="text-secondary">
                  Name
                </label>
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
                />
                <label htmlFor="email" className="text-secondary">
                  Email
                </label>
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
                />
                <label htmlFor="password" className="text-secondary">
                  Password
                </label>
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
                />
                <label htmlFor="repassword" className="text-secondary">
                  confirm Password
                </label>
              </div>
              <button className="btn btn-outline-light"> Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
