/* 회원가입 */
export async function signup(data) {

  const response = await fetch("http://localhost:3001/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email
    })
  });

  if (!response.ok) {
    throw new Error("회원가입 실패");
  }

  return response.json();

}

/* 로그인 */
export async function login(data) {

  const params = new URLSearchParams({
    email: data.email.trim()
  });

  const response = await fetch(
    `http://localhost:3001/users?${params.toString()}`
  );

  if (!response.ok) {
    throw new Error("로그인 실패");
  }

  const users = await response.json();

  if (users.length === 0) {
    throw new Error("등록되지 않은 이메일입니다.");
  }

  return {
    user: users[0]
  };

}

/* 로그인 
export async function login(data) {

  const response = await fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error("로그인 실패");
  }

  return response.json();

}
  */

/* 로그아웃 */
export async function logout() {

  const response = await fetch("http://localhost:3001/logout", {
    method: "POST"
  });

  if (!response.ok) {
    throw new Error("로그아웃 실패");
  }

}