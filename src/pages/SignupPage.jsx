
import { Link } from "react-router-dom";
import Main from "../components/layout/Main";

export default function SignupPage() {

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
            <form className="authForm">

              {/* 이름 */}
              <div className="formItem">
                <label htmlFor="name">이름</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="이름을 입력해주세요."
                />
              </div>

              {/* 이메일 */}
              <div className="formItem">
                <label htmlFor="email">이메일</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="이메일을 입력해주세요."
                />
              </div>

              {/* 비밀번호 */}
              <div className="formItem">
                <label htmlFor="password">비밀번호</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="비밀번호를 입력해주세요."
                />
              </div>

              {/* 비밀번호 확인 */}
              <div className="formItem">
                <label htmlFor="passwordCheck">비밀번호 확인</label>
                <input
                  type="password"
                  id="passwordCheck"
                  name="passwordCheck"
                  placeholder="비밀번호를 다시 입력해주세요."
                />
              </div>

              {/* 약관 동의 */}
              <div className="authCheckBox">
                <label>
                  <input type="checkbox" name="agree" />
                  이용약관 및 개인정보 처리방침에 동의합니다.
                </label>
              </div>

              <button type="button" className="btn authSubmitBtn">
                회원가입
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
