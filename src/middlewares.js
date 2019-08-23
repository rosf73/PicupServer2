export const isAuthenticated = request => {
  if(!request.user) {
    throw Error("로그인 후 이용가능한 서비스입니다");
  }
  return;
}