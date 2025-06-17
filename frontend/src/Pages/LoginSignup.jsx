"use client"

import { useState } from "react"
import "./CSS/LoginSignup.css"
import axios from "axios"

// Configure axios with base URL
axios.defaults.baseURL = "http://localhost:4000"

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)
  const [agreeToTerms, setAgreeToTerms] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleCheckboxChange = (e) => {
    setAgreeToTerms(e.target.checked)
  }

  const validateForm = () => {
    if (!isLogin && !formData.name) {
      setError("Name is required")
      return false
    }

    if (!formData.email) {
      setError("Email is required")
      return false
    }

    if (!formData.password) {
      setError("Password is required")
      return false
    }

    if (!isLogin && !agreeToTerms) {
      setError("You must agree to the terms of use & privacy policy")
      return false
    }

    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    if (!validateForm()) return

    setLoading(true)

    try {
      const endpoint = isLogin ? "http://localhost:4000/api/login" : "http://localhost:4000/api/register"
      const response = await axios.post(endpoint, formData)

      // Store token in localStorage
      localStorage.setItem("token", response.data.token)
      localStorage.setItem("user", JSON.stringify(response.data.user))

      setSuccess(isLogin ? "Login successful!" : "Registration successful!")

      // Redirect or update UI as needed
      // For example: window.location.href = '/dashboard';
    } catch (error) {
      setError(error.response?.data?.error || "An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const toggleMode = () => {
    setIsLogin(!isLogin)
    setError("")
    setSuccess("")
  }

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{isLogin ? "Login" : "Sign up"}</h1>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            {!isLogin && (
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
            )}
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {!isLogin && (
            <div className="loginsignup-agree">
              <input type="checkbox" id="terms" checked={agreeToTerms} onChange={handleCheckboxChange} />
              <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
          )}

          <button type="submit" disabled={loading}>
            {loading ? "Processing..." : isLogin ? "Login" : "Continue"}
          </button>
        </form>

        <p className="loginsignup-login">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={toggleMode}>{isLogin ? "Sign up Here" : "Login Here"}</span>
        </p>
      </div>
    </div>
  )
}

export default LoginSignup

