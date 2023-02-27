const JSON_USER =
  '[{"photoURL": "https://i.pinimg.com/564x/4a/cf/16/4acf16a2999a4c6dfdfe03f198b95b13.jpg", "displayName": "Guest", "email": "guest@gmail.com"}]';

export const userAccessToken = () => {
  const accessToken =
    localStorage.getItem('accessToken') !== 'undefined'
      ? JSON.parse(localStorage.getItem('accessToken') || JSON_USER)
      : localStorage.clear();

  return accessToken;
};

export const fetchUser = () => {
  const userInfo =
    localStorage.getItem('user') !== 'undefined'
      ? JSON.parse(localStorage.getItem('user') || JSON_USER)
      : localStorage.clear();

  return userInfo;
};
