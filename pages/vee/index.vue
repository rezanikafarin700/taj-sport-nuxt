<template>
  <div class="container d-flex justify-content-center">
    <div class="container-box">
      <nuxt-link to="/">LOgin
        <!-- <img
          src="@/assets/img/logo.PNG"
          alt="logo"
          class="logo"
          loading="lazy"
        /> -->
      </nuxt-link>
      <div class="title">ورود</div>
      <ValidationObserver ref="form" v-slot="{ handleSubmit }">
        <form class="form" @submit.prevent="handleSubmit(send)">
          <ValidationProvider
            name="کد ملی"
            rules="required|numeric|min:10"
            v-slot="{ errors }"
          >
            <label for="label-input" class="label-input">
              کد ملی خود را وارد کنید
            </label>
            <input
              type="text"
              class="input"
              style="margin-bottom: 12px; !important"
              autocomplete="on"
              v-model="form.nationalCode"
            />
            <div class="invalid">{{ errors[0] }}</div>
          </ValidationProvider>
          <ValidationProvider
            name="رمز عبور"
            rules="required|min:8"
            v-slot="{ errors }"
          >
            <label for="label-input" class="label-input">
              رمز عبور خود را وارد کنید
              <!-- <span class="small">
                (ترکیب حروف بزرگ و کوچک انگلیسی , اعداد و علامت های خاص #?!@$
                %^&*-)
              </span> -->
            </label>

            <input
              type="password"
              class="input"
              autocomplete="on"
              v-model="form.password"
            />
            <div class="invalid">{{ errors[0] }}</div>
          </ValidationProvider>
          <button class="btn btn-primary form-btn">
            ورود به سامانه سجامکس
          </button>
        </form>
      </ValidationObserver>
      <div class="help">
        آیا حساب کاربری ندارید؟<span @click="register">ثبت نام </span>کنید
      </div>
      <div class="help mb-3">
        رمزعبور خود را <span @click="forgetPassword">فراموش کرده اید؟</span>
      </div>
      <div class="guide">
        با ورود و یا ثبت نام در سامانه سجامکس شما
        <a href="#">شرایط و قوانین</a>
        استفاده از سرویس های سامانه سجامکس و
        <a href="">قوانین حریم خصوصی</a>
        آن را می‌پذیرید
      </div>
    </div>
  </div>
</template>

<script>
import utils from "@/assets/js/utils.js";

export default {
  name: "login",
  layout: "account",
  data() {
    return {
      form: {
        nationalCode: "",
        password: ""
      }
    };
  },
  methods: {
    register() {
      this.$router.push("/register");
    },

    forgetPassword() {
      this.$router.push("/recovery");
    },

    async send() {
      try {
        const result = await this.$axios.post(
          `${this.$config.authUrl}/login`,
          this.form
        );

        const {
          data: {
            outcome: {
              data: { user, token }
            }
          }
        } = result;

        this.$store.commit("auth/setUser", user);
        this.$store.commit("auth/setToken", token);
        // this.$sendTokenToAxios.setToken(token)
        // save token in cookie
        this.$cookies.set("token", token, {
          path: "/",
          maxAge: 60 * 60 * 24 * 30, // 30 days in second
          sameSite: "Lax"
        });

        // redirect to "/"
        this.$router.push("/");

        this.$toast.toastSuccess("خوش آمدید");
      } catch (error) {
        console.error(error, "error login");
        // todo remove toast plugin and config it in utils
        utils.handelError(this, error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0.75rem 0.75rem !important;

  margin-top: 5%;
  .container-box {
    width: 400px;
    // height: 470px;
    border: 1px solid #e1e1e1;
    margin: auto;
    padding: 2rem;
    border-radius: 6px;

    .logo {
      max-width: 45%;
      min-height: 37%;
      margin: auto;
      display: block;
    }

    .title {
      text-align: right;
      font-weight: 800;
      margin-top: 35px;
      margin-bottom: 15px;
    }

    .form {
      text-align: right;
      .label-input {
        font-size: 0.8rem;
        color: #8b8989;
        margin-bottom: 10px;
        font-weight: 500;

        padding: 5px;
        font-size: 0.9rem;
        color: #5b5b5b;
        font-weight: 500;

        // .small {
        //   font-size: 0.7rem;
        //   color: #bfbbbb;
        // }
      }

      .input {
        width: 100%;
        border: 1px solid #c9c8c8;
        border-radius: 4px;
        padding: 4px 2px;
        margin-bottom: 10px;
        outline: none;
      }

      .form-btn {
        width: 100%;
        font-size: 0.9rem;
        margin-bottom: 15px;
      }
    }

    .guide,
    a {
      font-size: 0.7rem;
      text-align: right;
      text-underline-position: from-font;
    }

    .help {
      text-align: right;
      margin: 15px 0 0 0;
      color: #8b8989;
      font-size: 0.8rem;

      span {
        margin: 0 7px 0 1px;
        font-size: 0.9rem;
        font-weight: 500;
        color: #0d6efd;
        cursor: pointer;
      }
    }
  }
}

@media (max-width: 390px) {
  .container {
    .container-box {
      .logo {
        min-height: 30%;
      }
    }
  }
}

@media (max-width: 320px) {
  .container {
    .container-box {
      .logo {
        min-height: 27%;
      }
    }
  }
}
</style>
