
import { Link } from "react-router-dom";
import Main from "../components/layout/Main";

export default function LoginPage() {

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

              {/* 로그인 유지 */}
              <div className="authCheckBox">
                <label>
                  <input
                    type="checkbox"
                    name="remember"
                  />
                  로그인 유지
                </label>
              </div>

              {/* 로그인 버튼 */}
              <button type="button" className="btn authSubmitBtn">
                로그인
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
