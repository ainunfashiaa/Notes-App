// src/script/view/login.js
import AuthService from "../../service/auth.js";
import "../../style/form-style.css";

class LoginForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .loading {
          display: inline-block;
          width: 20px;
          height: 20px;
          border: 3px solid rgba(255,255,255,.3);
          border-radius: 50%;
          border-top-color: #f39ba9;
          animation: spin 1s ease-in-out infinite;
          margin-left: 10px;
        }
        
        input {
          width: 100% !important;
          max-width: 600px !important;
          padding: 0.8rem 1rem !important;
          border: 1px solid #ccc !important;
          border-radius: 999px !important;
          font-size: 1rem !important;
          outline: none !important;
          margin: 8px 0;
        }
        
        button {
          width: 100%;
          max-width: 600px;
          padding: 0.8rem;
          border: none;
          background-color: #fdecec;
          color: #6c6c6c;
          font-weight: 600;
          font-size: 1rem;
          border-radius: 999px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          margin-top: 2.5rem;
        }

        button:hover {
          background-color: #fcd9d9;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      </style>

      <div class="container">
        <h2>Hello Again!</h2>
        <p>We've missed you and can't wait to see the amazing notes you'll create every day.</p>

        <form id="loginForm">
          <input type="email" placeholder="Email" required id="email">
          <input type="password" placeholder="Password" required id="password">
          <button type="submit" id="submitBtn">Login</button>
        </form>

        <p class="register-link">Don't have an account? <a href="signup.html">Sign up</a> here.</p>
      </div>
    `;

    this.shadowRoot
      .querySelector("#loginForm")
      .addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = this.shadowRoot.getElementById("email").value;
        const password = this.shadowRoot.getElementById("password").value;
        const submitBtn = this.shadowRoot.getElementById("submitBtn");

        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Logging In <span class="loading"></span>';

        try {
          const result = await AuthService.login(email, password);

          if (result.status === "success") {
            window.location.href = "home.html";
            window.localStorage.setItem("currentUser", result.data.name);
          } else {
            alert(result.message);
          }
        } catch (error) {
          alert("An error occurred during login");
        } finally {
          submitBtn.disabled = false;
          submitBtn.textContent = "Login";
        }
      });
  }
}

customElements.define("login-form", LoginForm);
