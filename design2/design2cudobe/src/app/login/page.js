import Navbar from "../components/Navbar";

export default function LoginPage() {
  return (
    <>
      <Navbar />

      <section className="login-page d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">

              {/* Header */}
              <div className="text-center mb-4">
                <h5 className="welcome-text">Welcome back</h5>
                <h1 className="brand-title">Cudobe</h1>
                <p className="text-muted">
                  Access your verified trade documents
                </p>
              </div>

              <form className="card p-4 shadow-lg login-card">
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" />
                </div>

                <div className="mb-2">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" />
                </div>

                {/* Forgot password */}
                <div className="text-end mb-3">
                  <span className="forgot-link">Forgot password?</span>
                </div>

                <button
                  type="button"
                  className="btn btn-outline-dark w-100"
                >
                  <i className="fa-brands  me-2"></i>
                  Login
                </button>

                {/* Divider */}
                <div className="divider">
                  <span>or</span>
                </div>

                {/* Google Login */}
                <button
                  type="button"
                  className="btn btn-outline-dark w-100 google-btn"
                >
                  <i className="fa-brands fa-google me-2"></i>
                  Login with Google
                </button>
              </form>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
