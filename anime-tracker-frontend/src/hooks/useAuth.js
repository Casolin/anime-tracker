import { useState } from "react";

export const useAuth = () => {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("token");
    return token ? { token } : null;
  });

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return { user, logout };
};
