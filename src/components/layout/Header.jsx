import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function Header() {

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  /* 로그아웃 */
  async function handleLogout() {

    try {

      await logout();

      alert("로그아웃되었습니다.");
      navigate("/auth/login");

    } catch (error) {

      console.error(error);
      alert("로그아웃 실패");

    }

  }

  return (
    <header>

      {
        user ? (
          <div className="box">
            <span>{user.email}</span>

            <button
              type="button"
              onClick={handleLogout}
            >
              로그아웃
            </button>
          </div>
        ) : (
          <div className="box">
            <Link to="/auth/login">로그인</Link>
            <Link to="/auth/signup">회원가입</Link>
          </div>
        )
      }

    </header>
  );

}