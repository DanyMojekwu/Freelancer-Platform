import { registerUser } from "../services/api";

async function handleRegister(event) {
  event.preventDefault();
  const userData = {
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  try {
    const data = await registerUser(userData);
    alert(data.message);
  } catch (error) {
    console.error("Error registering user:", error);
  }
}
