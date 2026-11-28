
import { Link } from "react-router-dom";
import Main from "../components/layout/Main";
import { useState } from "react";
import { findId } from "../api/authApi";

export default function FindIdPage() {

  /* 상태관리 */
  const [formData, setFormData] = useState({
    name: "",
    email: ""
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

    return newErrors;

  }

  /* 입력값 변경 및 실시간 유효성 검사 */
  function handleChange(e) {

    const { name, value } = e.target;

    const updatedData = {
      ...formData,
      [name]: value
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

  /* 아이디 찾기 */
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

      const response = await findId(formData);

      alert(`${response.user.email}`);

    } catch (error) {

      console.error(error);
      alert(error.message);

    } finally {

      setSubmitting(false);

    }

  }

  return (
    <Main>
      <div className="contentBox">
        <div className="authWrap">
          <div className="authBox">

            <h1>아이디 찾기</h1>

            <p className="authDescription">
              가입 시 등록한 정보를 입력해주세요.
            </p>

            {/* 아이디 찾기 폼 */}
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

              <button
                type="submit"
                className="btn authSubmitBtn"
                disabled={submitting}
              >
                {
                  submitting ? "조회중" : "아이디 찾기"
                }
              </button>

            </form>

            <div className="authBottomBox">
              <Link to="/auth/login">
                로그인으로 돌아가기
              </Link>
            </div>

          </div>
        </div>
      </div>
    </Main>
  );

}
