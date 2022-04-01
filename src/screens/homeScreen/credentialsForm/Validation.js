export const Validation = (
  sourceName,
  sourcePassword,
  confirmSourcePassword,
) => {
  if (sourceName === '') {
    return {
      type: 'sourceName',
      msg: 'sourceName is not correct',
      status: false,
    };
  } else if (sourcePassword === '') {
    return {
      type: 'sourcePassword',
      msg: 'sourcePassword is not correct',
      status: false,
    };
  } else if (confirmSourcePassword !== sourcePassword) {
    return {
      type: "confirmSourcePassword",
      msg: "password is not match",
      status:false
    }
  } else {
    return {
      type: "",
      msg: "",
      status:true
    }
  }
};
