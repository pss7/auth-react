
import { Link } from "react-router-dom";
import Main from "../components/layout/Main";

export default function VerifyEmailPage() {

  return (
    <Main>
      <div className="contentBox">
        <div className="authWrap">
          <div className="authBox">

            <h1>이메일 인증</h1>
            <p className="authDescription">
              이메일로 전송된 인증번호를 입력해주세요.
            </p>

            {/* 이메일 인증 폼 */}
            <form className="authForm">

              {/* 인증번호 */}
              <div className="formItem">
                <label htmlFor="verificationCode">인증번호</label>
                <input
                  type="text"
                  id="verificationCode"
                  name="verificationCode"
                  inputMode="numeric"
                  placeholder="인증번호를 입력해주세요."
                />
              </div>

              <button type="button" className="btn authSubmitBtn">
                인증 확인
              </button>

              <button type="button" className="authTextBtn">
                인증번호 재전송
              </button>

            </form>

            <div className="authBottomBox">
              <Link to="/auth/signup">회원가입으로 돌아가기</Link>
            </div>

          </div>
        </div>
      </div>
    </Main>
  );

}
