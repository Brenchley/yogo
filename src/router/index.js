import { createRouter, createWebHistory } from "vue-router";

let Login = {
  path: "/login",
  name: "Login",
  component: () => import("@/views/auth/Login.vue")
};

let SignUp = {
  path: "/register",
  name: "SignUp",
  component: () => import("@/views/auth/SignUp.vue")
};
let Profile = {
  path: "/app/profile",
  redirect: "/app/profile/interests",
  component: () => import("@/views/app/Profile/index.vue"),
  children: [
    {
      path: "interests",
      name: "profileInterests",
      component: () => import("@/components/Profile/Interests.vue")
    },
    {
      path: "addFollowers",
      name: "profileFollowers",
      component: () => import("@/components/Profile/AddFollowers.vue")
    }
  ]
};
let App = {
  path: "/app/discover",
  name: "discover",
  component: () => import("@/views/app/Home/index.vue")
};
let Place = {
  path: "/app/view",
  name: "placeView",
  component: () => import("@/views/app/Home/place.vue")
};
let Trip = {
  path: "/app/trip",
  redirect: "/app/trip/create",
  component: () => import("@/views/app/Trip/index.vue"),
  children: [
    {
      path: "/app/trip/create",
      name: "createTrip",
      component: () => import("@/components/Trip/CreateTrip.vue")
    },
    {
      path: "/app/trip/mine",
      name: "myTrips",
      component: () => import("@/components/Trip/MyTrips.vue")
    },
    {
      path: "/app/trip/view",
      name: "givenTrip",
      component: () => import("@/components/Trip/ViewTrip.vue")
    },
    {
      path: "/app/trip/details",
      name: "detailTrip",
      component: () => import("@/components/Trip/TripDetails.vue")
    }
  ]
};
const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  Login,
  SignUp,
  Profile,
  App,
  Place,
  Trip
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
