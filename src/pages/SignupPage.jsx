
import { Link, useNavigate } from "react-router-dom";
import Main from "../components/layout/Main";
import { useState } from "react";
import { signup } from "../api/authApi";

export default function SignupPage() {

  /* 페이지 이동 */
  const navigate = useNavigate();

  /* 상태관리 */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordCheck: "",
    agree: false
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  /* 유효성 검사 */
  function validateForm(formData) {

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "이름을 입력해주세요.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "이메일을 입력해주세요.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "올바른 이메일 형식을 입력해주세요.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "비밀번호를 입력해주세요.";
    } else if (formData.password.length < 6) {
      newErrors.password = "비밀번호는 6자 이상 입력해주세요.";
    }

    if (!formData.passwordCheck.trim()) {
      newErrors.passwordCheck = "비밀번호 확인을 입력해주세요.";
    } else if (formData.password !== formData.passwordCheck) {
      newErrors.passwordCheck = "비밀번호가 일치하지 않습니다.";
    }

    if (!formData.agree) {
      newErrors.agree = "이용약관 및 개인정보 처리방침에 동의해주세요.";
    }

    return newErrors;

  }

  /* 입력값 변경 및 실시간 유효성 검사 */
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

  };

  /* 포커스 해제 시 유효성 검사 */
  function handleBlur(e) {

    const { name } = e.target;

    const newErrors = validateForm(formData);

    setErrors(function (prev) {
      return {
        ...prev,
        [name]: newErrors[name] || ""
      }
    });

  }

  /* 회원가입 */
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

      await signup(formData);

      alert("회원 등록 완료");

      navigate("/auth/login");

    } catch (error) {

      console.error(error);
      alert("회원 등록 실패");

    } finally {

      setSubmitting(false);

    }

  }

  return (
    <Main>
      <div className="contentBox">
        <div className="authWrap">
          <div className="authBox">

            <h1>회원가입</h1>
            <p className="authDescription">
              회원정보를 입력해주세요.
            </p>

            {/* 회원가입 폼 */}
            <form className="authForm" onSubmit={handleSubmit}>

              {/* 이름 */}
              <div className="formItem">
                <label htmlFor="name">이름</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="이름을 입력해주세요."
                />

                {
                  errors.name && (
                    <p className="errorMessage">
                      {errors.name}
                    </p>
                  )
                }

              </div>

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

                {
                  errors.email && (
                    <p className="errorMessage">
                      {errors.email}
                    </p>
                  )
                }

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

                {
                  errors.password && (
                    <p className="errorMessage">
                      {errors.password}
                    </p>
                  )
                }

              </div>

              {/* 비밀번호 확인 */}
              <div className="formItem">
                <label htmlFor="passwordCheck">비밀번호 확인</label>
                <input
                  type="password"
                  id="passwordCheck"
                  name="passwordCheck"
                  value={formData.passwordCheck}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="비밀번호를 다시 입력해주세요."
                />

                {
                  errors.passwordCheck && (
                    <p className="errorMessage">
                      {errors.passwordCheck}
                    </p>
                  )
                }

              </div>

              {/* 약관 동의 */}
              <div className="authCheckBox">
                <label>
                  <input
                    type="checkbox"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  이용약관 및 개인정보 처리방침에 동의합니다.
                </label>

                {errors.agree && (
                  <p className="errorMessage">{errors.agree}</p>
                )}

              </div>

              <button
                type="submit"
                className="btn authSubmitBtn"
                disabled={submitting}
              >
                {
                  submitting ? "등록중" : "회원가입"
                }
              </button>

            </form>

            <div className="authBottomBox">
              <p>이미 계정이 있으신가요?</p>
              <Link to="/auth/login">로그인</Link>
            </div>

          </div>
        </div>
      </div>
    </Main>
  );

}
