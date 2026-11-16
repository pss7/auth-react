
import { Link } from "react-router-dom";
import Main from "../components/layout/Main";

export default function FindIdPage() {

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

              {/* 휴대폰 번호 */}
              <div className="formItem">
                <label htmlFor="phone">휴대폰 번호</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="휴대폰 번호를 입력해주세요."
                />
              </div>

              <button type="button" className="btn authSubmitBtn">
                아이디 찾기
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
