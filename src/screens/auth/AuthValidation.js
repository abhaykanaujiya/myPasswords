const regex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const authFormValidation = (userEmail, password, phone, isLogin) => {
  console.log(userEmail, phone, 'authFormValidation hit');

  if (userEmail === '') {
    return {
      type: 'userEmail',
      msg: 'email is missing',
      status: false,
    };
  } else if (password.length < 4) {
    return {
      type: 'password',
      msg: 'password is missing',
      status: false,
    };
  } else if (!isLogin && phone.length < 10) {
    return {
      type: 'phone',
      msg: 'phone number is invalid',
      status: false,
    };
  } else {
    return {
      type: '',
      msg: '',
      status: true,
    };
  }

  // if (
  //   false
  //   // !userEmail ||
  //   // regex.test(userEmail) === false ||
  //   // !phone.match('[0-9]{10}') ||
  //   // password.length < 6
  // ) {
  //   console.log('Checking if');
  //   isValid = false;
  // } else {
  //   console.log('Checking else');
  //   isValid = true;
  // }
  // return isValid;
};
