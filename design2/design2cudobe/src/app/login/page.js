import Navbar from "../components/Navbar";

export default function LoginPage() {
  return (
    <>
      <Navbar />

      {/* Page background wrapper */}
      <section className="login-page section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <h2 className="text-center mb-1">Login</h2>

              {/* Subtitle */}
              <p className="text-center text-muted mb-4">
                Access your verified trade documents
              </p>

              <form className="card p-4 shadow">
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" />
                </div>

                <button className="btn btn-primary-custom w-100">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
