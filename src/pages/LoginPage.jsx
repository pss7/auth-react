
import { Link, useNavigate } from "react-router-dom";
import Main from "../components/layout/Main";
import { login } from "../api/authApi";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function LoginPage() {

  /* 페이지 이동 */
  const navigate = useNavigate();

  const { setLogin } = useAuth();

  /* 상태관리 */
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  /* 유효성 검사 */
  function validateForm(data) {

    const newErrors = {};

    if (!data.email.trim()) {
      newErrors.email = "이메일을 입력해주세요.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      newErrors.email = "올바른 이메일 형식을 입력해주세요.";
    }

    if (!data.password.trim()) {
      newErrors.password = "비밀번호를 입력해주세요.";
    }

    return newErrors;

  }

  /* 입력값 변경 */
  function handleChange(e) {

    const { name, value, type, checked } = e.target;

    const updatedData = {
      ...formData,
      [name]: type === "checkbox" ? checked : value
    };

    setFormData(updatedData);

    if (Object.hasOwn(errors, name)) {

      const newErrors = validateForm(updatedData);

      setErrors(function (prev) {
        return {
          ...prev,
          [name]: newErrors[name] || ""
        };
      });

    }

  }

  /* 포커스 해제 시 유효성 검사 */
  function handleBlur(e) {

    const { name } = e.target;
    const newErrors = validateForm(formData);

    setErrors(function (prev) {
      return {
        ...prev,
        [name]: newErrors[name] || ""
      };
    });

  }

  /* 로그인 */
  async function handleSubmit(e) {

    e.preventDefault();

    if (submitting) {
      return;
    }

    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {

      setSubmitting(true);

      const response = await login(formData);

      setLogin(response.user, formData.remember);

      alert("로그인 성공");
      navigate("/");

    } catch (error) {

      console.error(error);
      alert("이메일 또는 비밀번호를 확인해주세요.");

    } finally {

      setSubmitting(false);

    }

  }

  /* SNS 로그인 
  async function handleSnsLogin(e) {

    const provider = e.currentTarget.dataset.provider;

    try {

      await snsLogin(provider);

    } catch (error) {

      console.error(error);
      alert("SNS 로그인에 실패했습니다.");

    }

  }
*/

  return (
    <Main>

      <div className="contentBox">

        <div className="authWrap">
          <div className="authBox">

            <h1>로그인</h1>
            <p className="authDescription">
              계정 정보를 입력해주세요.
            </p>

            {/* 로그인 폼 */}
            <form className="authForm" onSubmit={handleSubmit}>

              {/* 이메일 */}
              <div className="formItem">
                <label htmlFor="email">이메일</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="이메일을 입력해주세요."
                />

                {errors.email && (
                  <p className="errorMessage">{errors.email}</p>
                )}

              </div>

              {/* 비밀번호 */}
              <div className="formItem">
                <label htmlFor="password">비밀번호</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="비밀번호를 입력해주세요."
                />

                {errors.password && (
                  <p className="errorMessage">{errors.password}</p>
                )}

              </div>

              {/* 로그인 유지 */}
              <div className="authCheckBox">
                <label>
                  <input
                    type="checkbox"
                    name="remember"
                    checked={formData.remember}
                    onChange={handleChange}
                  />
                  로그인 유지
                </label>
              </div>

              {/* 로그인 버튼 */}
              <button
                type="submit"
                className="btn authSubmitBtn"
                disabled={submitting}
              >
                {submitting ? "로그인중" : "로그인"}
              </button>

            </form>

            {/* 하단 링크 */}
            <div className="authLinkBox">
              <Link to="/auth/find-id">아이디 찾기</Link>
              <Link to="/auth/find-password">비밀번호 찾기</Link>
              <Link to="/auth/signup">회원가입</Link>
            </div>

            {/* 소셜 로그인 */}
            <div className="snsLoginBox">

              <p className="snsLoginTitle">간편 로그인</p>

              <div className="snsLoginList">
                <button type="button">구글</button>
                <button type="button">카카오</button>
                <button type="button">네이버</button>
              </div>

            </div>

          </div>
        </div>

      </div>

    </Main>
  );

}
