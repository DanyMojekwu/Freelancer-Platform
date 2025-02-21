const API_BASE_URL = "http://localhost:5000/api";

export async function fetchUserProfile() {
  const response = await fetch(`${API_BASE_URL}/user/profile`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
}

export async function registerUser(userData) {
  const response = await fetch(`${API_BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return response.json();
}
