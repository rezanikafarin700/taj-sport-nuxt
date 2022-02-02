export const state = () => ({
  user: {
    username: "Ali",
    email: "Alavi",
    password: "12345",
    type: "USER",
    api_token: null,
  },
});

export const mutations = {
  SET_DATA(state, payload) {
    state.user = payload;
    console.log("SET_DATA user = ", state.user);
    this.localStorage.setItem("taj-sport-user", JSON.stringify(payload));
    this.$axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${payload.api_token}`;
  },

  CLEAR_USER_DATA(state) {
    state.user = null;
    this.localStorage.removeItem("taj-sport-user");
    this.$axios.defaults.headers.common["Authrization"] = null;
    location.reload();
  },
};
export const actions = {
  register({ commit }, payload) {
    console.log('in action of store user = ',payload);
    return this.$axios
      .post(process.env.BASE_URL + "users", payload)
      .then(({ data }) => {
        commit("SET_DATA", data);
      })
      .catch((err) => {
        console.log("error = ", err);
        payload.utils.handelError(this, error);
      });
  },

  login({ commit }, payload) {
    return this.$axios
      .post(process.env.BASE_URL + "login", payload)
      .then(({ data }) => {
        console.log(data);
        commit("SET_DATA", data);
      });
  },

  logout({ commit },redirect) {
    commit("CLEAR_USER_DATA");
  },
};
