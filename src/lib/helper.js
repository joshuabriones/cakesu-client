export const isAuthenticated = async () => {
  try {
    const response = await fetch(
      "http://localhost:5000/api/auth/authenticated",
      {
        method: "GET",
        credentials: "include", // Include cookies in the request
      }
    );

    if (!response.ok) {
      return false; // User is not authenticated
    }

    const data = await response.json();
    return data.authenticated; // Return true or false based on server response
  } catch (error) {
    console.error("Error checking authentication:", error);
    return false;
  }
};
