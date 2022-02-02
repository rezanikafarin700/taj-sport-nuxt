export default function ({ store, redirect }) {
  let user = JSON.parse(localStorage.getItem("taj-sport-user"));
  if (user == null) {
    console.log("Auth Middleware Message : the user is not exists...");
    return redirect("/account/NavBar");
  } else {
    console.log('USER IN MIDDLEWARE = ',user);
    store.commit('SET_DATA',user)
  }
}
