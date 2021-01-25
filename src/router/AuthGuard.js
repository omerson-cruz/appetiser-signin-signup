import store from "../store/index";
import cookies from "vue-cookies";

export default (to, from, next) => {
  console.log("Executing Auth Guard");

  if (to.path === "/" && !store.getters.user) {
    console.log("redirecting");
    next({
      path: "/login",
    });
  } else if (to.path === "/verify" && !store.getters.user) {
    next({
      path: "/login",
    });
  } else {
    next();
  }
};
