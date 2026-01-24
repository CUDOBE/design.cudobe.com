import Navbar from "../components/Navbar";

export default function RegisterPage() {
  return (
    <>
      <Navbar />

      {/* Page background wrapper */}
      <section className="register-page section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h2 className="text-center mb-4">Create Account</h2>

              <form className="card p-4 shadow">
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label">documents</label>
                  <input type="file" className="form-control" />
                </div>

                <button className="btn btn-primary-custom w-100">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
