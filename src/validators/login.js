export const phoneValidator = (rule, value, callback) => {
  console.log('phone ', value);
  const reg =
    /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
  if (!reg.test(value)) {
    console.log('验证手机号未通过');
    return callback(new Error('请输入正确的手机号'));
  } else callback();
};
export const ageValidator = (rule, value, callback) => {
  console.log('age..');
  const reg = /^[1-100]$/;
  console.log('age', value);
  if (!reg.test(value)) {
    callback(new Error('请输入合适的年龄'));
  } else callback();
};
