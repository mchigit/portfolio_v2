<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <b-navbar class="nav-bar" type="is-black" spaced fixed-top>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <h1 class="navbar-title">Michael Chi</h1>
        </b-navbar-item>
      </template>
      <template #end>
        <div class="nav-bar-menu">
          <b-navbar-item @click="goToWork" href="#"> Work </b-navbar-item>
          <b-navbar-item href="#"> Services </b-navbar-item>
          <b-navbar-item target="_blank" :href="resumeURL">
            Resume
          </b-navbar-item>
          <b-navbar-item href="#"> Contact </b-navbar-item>
        </div>
      </template>
    </b-navbar>
    <router-view />
  </div>
</template>
<script>
import firebase from "firebase/app";
import "firebase/storage";
import { bus } from "./eventBus";

export default {
  data() {
    return {
      resumeURL: null,
    };
  },
  async mounted() {
    const storage = firebase.storage();
    const resumeRef = storage.ref().child("michael_chi_resume.pdf");

    const downloadUrl = await resumeRef.getDownloadURL();
    this.resumeURL = downloadUrl;
  },
  methods: {
    goToWork() {
      bus.$emit("scrollToWork");
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav-bar {
  height: 60px;
}

.nav-bar-menu {
  background-color: #0a0a0a !important;
  display: flex;
  flex-direction: column;
  a {
    color: white;
  }
}

.navbar-menu {
  background-color: #0a0a0a !important;
}

.navbar-title {
  font-size: 1.5rem;
  font-weight: bold;
}

@media screen and (min-width: 1024px) {
  .nav-bar-menu {
    flex-direction: row;
  }

  .nav-bar {
    height: 100px;
  }
}

body {
  margin: 0;
}
</style>
