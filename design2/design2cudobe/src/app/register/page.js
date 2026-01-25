"use client"; // Required for useState and event handlers
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function RegisterPage() {
    // 1. Initialize state to capture form data
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        accountType: "Importer", // Default value
    });

    // 2. Fix the "handleFileChange is not defined" error
    const handleFileChange = (e) => {
        const files = e.target.files;
        console.log("Selected files:", files);
        // Logic for file handling would go here
    };

    // 3. Handle text input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // 4. Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await fetch("/api/uploadDocs/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    email: formData.email,
                    password: formData.password,
                    accountType: formData.accountType
                }),
            });

            const data = await response.json();
            if (response.ok) {
                alert("Registration Successful!");
                window.location.href = "/login";
            } else {
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("Failed to connect to the server.");
        }
    };

    return (
        <>
            <Navbar />
            <section className="register-page d-flex align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 col-lg-6">
                            <div className="register-card card p-4 shadow-lg">
                                <div className="text-center mb-3">
                                    <h1 className="brand-title">Cudobe</h1>
                                    <p className="brand-subtitle">
                                        Intelligent Trade Document Verification
                                    </p>
                                </div>

                                <h3 className="text-center mb-4 register-title">
                                    Create Account
                                </h3>

                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label className="form-label d-block">Account Type</label>
                                        <div className="account-type-box">
                                            {["Importer", "Exporter", "Both"].map((type) => (
                                                <label key={type} className="type-option">
                                                    <input 
                                                        type="radio" 
                                                        name="accountType" 
                                                        value={type}
                                                        checked={formData.accountType === type}
                                                        onChange={handleChange}
                                                    />
                                                    <span>{type}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Full Name</label>
                                        <input 
                                            type="text" 
                                            name="fullName"
                                            className="form-control" 
                                            required
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input 
                                            type="email" 
                                            name="email"
                                            className="form-control" 
                                            required
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input 
                                            type="password" 
                                            name="password"
                                            className="form-control" 
                                            required
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Confirm Password</label>
                                        <input 
                                            type="password" 
                                            name="confirmPassword"
                                            className="form-control" 
                                            required
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label">Upload Trade Documents</label>
                                        <div className="upload-box">
                                            <input
                                                type="file"
                                                name="documents"
                                                className="form-control upload-input"
                                                multiple
                                                onChange={handleFileChange}
                                            />
                                            <p className="upload-hint">
                                                Upload Shipping Bill / Commercial Invoice (PDF, PNG, JPG)
                                            </p>
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-outline-dark w-100">
                                        Register
                                    </button>

                                    <p className="text-center mt-3 small text-muted">
                                        Already have an account?{" "}
                                        <a href="/login" className="login-link">Login</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}