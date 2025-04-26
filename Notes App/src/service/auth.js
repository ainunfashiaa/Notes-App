class AuthService {
  static async register(name, email, password) {
    // In a real implementation, this would call your backend API
    // For now, we'll simulate API call and store in localStorage
    return new Promise((resolve) => {
      setTimeout(() => {
        const users = JSON.parse(
          localStorage.getItem("notes-app-users") || "[]",
        );
        const userExists = users.some((user) => user.email === email);

        if (userExists) {
          resolve({ status: "fail", message: "Email already registered" });
          return;
        }

        const newUser = { name, email, password };
        users.push(newUser);
        localStorage.setItem("notes-app-users", JSON.stringify(users));
        resolve({ status: "success", message: "Registration successful" });
      }, 1000);
    });
  }

  static async login(email, password) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const users = JSON.parse(
          localStorage.getItem("notes-app-users") || "[]",
        );
        const user = users.find(
          (u) => u.email === email && u.password === password,
        );

        if (user) {
          localStorage.setItem("notes-app-current-user", JSON.stringify(user));
          resolve({
            status: "success",
            message: "Login successful",
            data: user,
          });
        } else {
          resolve({ status: "fail", message: "Invalid email or password" });
        }
      }, 1000);
    });
  }

  static logout() {
    localStorage.removeItem("notes-app-current-user");
  }

  static getCurrentUser() {
    return JSON.parse(localStorage.getItem("notes-app-current-user"));
  }
}

export default AuthService;
