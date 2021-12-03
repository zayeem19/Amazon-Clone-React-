import React from "react";

const Register = () => {
  return (
    <div className="container w-25">
      <h2 className="text-center">Amazon</h2>
      <div className="card">
        <div className="card-body">
          <h4>Sign In</h4>
          <form>
            <label className="form-label">Email or mobile phone number</label>
            <input type="email" class="form-control" />
            <button type="submit" className="btn btn-sm btn-warning w-100 my-4">
              Continue
            </button>
          </form>
          <p className="card-text">
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
