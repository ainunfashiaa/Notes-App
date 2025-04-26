import AuthService from "../../service/auth.js";
import "../../style/form-style.css";

class SignUpForm extends HTMLElement {
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
        <h2>Hello!</h2>
        <p>Welcome to Notes App — join us and keep track of everything in your life with ease.</p>

        <form id="signupForm">
          <input type="text" placeholder="Name" required id="name">
          <input type="email" placeholder="Email" required id="email">
          <input type="password" placeholder="Password" required id="password">
          <button type="submit" id="submitBtn">Sign Up</button>
        </form>

        <p class="register-link">Already have an account? <a href="login.html">Log in</a> here.</p>
      </div>
    `;

    this.shadowRoot
      .querySelector("#signupForm")
      .addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = this.shadowRoot.getElementById("name").value;
        const email = this.shadowRoot.getElementById("email").value;
        const password = this.shadowRoot.getElementById("password").value;
        const submitBtn = this.shadowRoot.getElementById("submitBtn");

        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Signing Up <span class="loading"></span>';

        try {
          const result = await AuthService.register(name, email, password);

          if (result.status === "success") {
            alert("Sign up successful! Please login.");
            window.location.href = "login.html";
          } else {
            alert(result.message);
          }
        } catch (error) {
          alert("An error occurred during sign up");
        } finally {
          submitBtn.disabled = false;
          submitBtn.textContent = "Sign Up";
        }
      });
  }
}

customElements.define("sign-up-form", SignUpForm);
