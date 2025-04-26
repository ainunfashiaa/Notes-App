import AuthService from "../../service/auth.js";
import "../../style/profile.css";

class UserProfile extends HTMLElement {
  connectedCallback() {
    const user = AuthService.getCurrentUser();

    if (!user) {
      window.location.href = "login.html";
      return;
    }

    this.innerHTML = `
      <a href="home.html" class="back-button">
        <i class="ph ph-arrow-left"></i>
        Profile
      </a>
      <profile-photo name="${user.name || "User"}"></profile-photo>
      <hr style="margin: 24px 0;">
      <account-settings 
        email="${user.email || ""}" 
        password="${user.password ? "••••••••" : ""}"
      ></account-settings>
      <div style="text-align: right; margin-top: 24px;">
        <action-button text="Log out" danger></action-button>
      </div>
    `;

    this.querySelector("action-button[danger]").addEventListener(
      "click",
      () => {
        AuthService.logout();
        window.location.href = "login.html";
      },
    );
  }
}

customElements.define("user-profile", UserProfile);

class ProfilePhoto extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute("name") || "User";
    this.innerHTML = `
      <div style="display: flex; align-items: center; gap: 20px;">
        <div style="
          width: 80px; 
          height: 80px; 
          border-radius: 50%; 
          background: #f0f0f0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          color: #666;
        ">${name.charAt(0).toUpperCase()}</div>
        <div>
          <h2 style="margin: 0 0 6px; color: #333; font-size: 20px;">${name}</h2>
          <a href="#" style="color: #1a73e8; font-size: 14px; text-decoration: none;">✎ Edit photo</a>
        </div>
      </div>
    `;
  }
}

customElements.define("profile-photo", ProfilePhoto);

class AccountSettings extends HTMLElement {
  connectedCallback() {
    const email = this.getAttribute("email") || "";
    const password = this.getAttribute("password") || "••••••••";

    this.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 28px;">
        <div style="flex: 1; margin-right: 16px;">
          <p style="margin: 0 0 4px; color: #555; font-size: 14px;">Email</p>
          <p style="margin: 0; color: #333; font-weight: 500; word-break: break-all;">${email}</p>
        </div>
        <action-button text="Change email"></action-button>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div style="flex: 1; margin-right: 16px;">
          <p style="margin: 0 0 4px; color: #555; font-size: 14px;">Password</p>
          <p style="margin: 0; color: #333; font-weight: 500;">${password}</p>
        </div>
        <action-button text="Change password"></action-button>
      </div>
    `;
  }
}

customElements.define("account-settings", AccountSettings);

class ActionButton extends HTMLElement {
  connectedCallback() {
    const text = this.getAttribute("text") || "Click";
    const danger = this.hasAttribute("danger");
    this.innerHTML = `
      <button style="
        background: ${danger ? "#ffecec" : "#eee"};
        color: ${danger ? "#e53935" : "#333"};
        padding: 8px 16px;
        border: none;
        border-radius: 20px;
        font-size: 14px;
        cursor: pointer;
        transition: background 0.3s;
        white-space: nowrap;
      ">
        ${text}
      </button>
    `;
  }
}

customElements.define("action-button", ActionButton);
