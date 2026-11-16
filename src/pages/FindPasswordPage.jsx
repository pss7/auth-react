
import { Link } from "react-router-dom";
import Main from "../components/layout/Main";

export default function FindPasswordPage() {

  return (
    <Main>
      <div className="contentBox">
        <div className="authWrap">
          <div className="authBox">

            <h1>비밀번호 찾기</h1>
            <p className="authDescription">
              가입한 이메일을 입력해주세요.
            </p>

            {/* 비밀번호 찾기 폼 */}
            <form className="authForm">

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

              <button type="button" className="btn authSubmitBtn">
                재설정 안내 받기
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
