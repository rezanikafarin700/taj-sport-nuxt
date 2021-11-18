import Vue from "vue";

/* add this code after search */
// import VeeValidate from 'vee-validate'
// Vue.use(VeeValidate, {
//   inject: true
// })
/* add this code after search */



import fa from "vee-validate/dist/locale/fa.json";
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize,
  configure
} from "vee-validate";
import {
  min,
  max,
  email,
  required,
  min_value,
  max_value,
  numeric,
  is,
  regex
} from "vee-validate/dist/rules";


Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

localize("fa", fa);

extend("min", min);
extend("max", max);
extend("email", email);
extend("numeric", numeric);
extend("required", required);
extend("min_value", min_value);
extend("max_value", max_value);
extend("regex", regex);


extend("complex_password", value => {
  let tester = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g;
  let isMatch = !tester.test(String(value));

  if (!isMatch) {
    return true;
  }

  return "فرمت رمز عبور معتبر نمیباشد";
});

extend('password_confirm', {
  params: ['target'],
  validate(value, { target }) {
    return value === target;
  },
  message: 'تکرار رمزعبور برابر نیست با رمزعبور'
});

configure({
  mode: "eager",
  classes: {
    valid: "",
    invalid: "is-invalid"
  }
});


