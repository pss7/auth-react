
import { Link } from "react-router-dom";
import Main from "../components/layout/Main";

export default function ResetPasswordPage() {

  return (
    <Main>
      <div className="contentBox">
        <div className="authWrap">
          <div className="authBox">

            <h1>비밀번호 재설정</h1>
            <p className="authDescription">
              새로운 비밀번호를 입력해주세요.
            </p>

            {/* 비밀번호 재설정 폼 */}
            <form className="authForm">

              {/* 새 비밀번호 */}
              <div className="formItem">
                <label htmlFor="password">새 비밀번호</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="새 비밀번호를 입력해주세요."
                />
              </div>

              {/* 새 비밀번호 확인 */}
              <div className="formItem">
                <label htmlFor="passwordCheck">새 비밀번호 확인</label>
                <input
                  type="password"
                  id="passwordCheck"
                  name="passwordCheck"
                  placeholder="새 비밀번호를 다시 입력해주세요."
                />
              </div>

              <button type="button" className="btn authSubmitBtn">
                비밀번호 변경
              </button>

            </form>

            <div className="authBottomBox">
              <Link to="/auth/login">로그인으로 돌아가기</Link>
            </div>

          </div>
        </div>
      </div>
    </Main>
  );

}
