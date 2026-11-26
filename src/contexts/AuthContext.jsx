
import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

/* 로그인 상태 관리 */
export function AuthProvider({ children }) {

  const [user, setUser] = useState(function () {

    const savedUser =
      localStorage.getItem("user") ||
      sessionStorage.getItem("user");

    return savedUser ? JSON.parse(savedUser) : null;

  });

  /* 로그인 */
  function setLogin(userData, remember) {

    setUser(userData);

    localStorage.removeItem("user");
    sessionStorage.removeItem("user");

    if (remember) {
      localStorage.setItem("user", JSON.stringify(userData));
    } else {
      sessionStorage.setItem("user", JSON.stringify(userData));
    }

  }

  /* 로그아웃 */
  function logout() {

    setUser(null);

    localStorage.removeItem("user");
    sessionStorage.removeItem("user");

  }

  return (
    <AuthContext.Provider value={{ user, setLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );

}

/* 로그인 상태 사용 */
export function useAuth() {
  return useContext(AuthContext);
}
