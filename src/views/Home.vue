<template>
  <div class="home">
    <div :alt="photoCredit" class="background-image">
      <div class="summary">
        <h2>Hi, my name is</h2>
        <h1>Michael Chi</h1>
        <h1>I'm a full-stack software developer.</h1>
        <div class="links-wrapper">
          <div>
            <i class="fab fa-github-square fa-2x"></i>
          </div>
          <div>
            <i class="fab fa-linkedin fa-2x"></i>
          </div>
          <div>
            <i class="fas fa-envelope-square fa-2x"></i>
          </div>
          <div>
            <i class="fab fa-medium fa-2x"></i>
          </div>
        </div>
      </div>
      <div class="view-my-work">
        <b-button
          @click="goto('work-section')"
          class="view-my-work-button"
          type="is-dark"
          outlined
          inverted
          >View My Work
        </b-button>
      </div>
    </div>
    <div ref="work-section">
      <Work></Work>
    </div>
  </div>
</template>

<script>
import Work from "../components/work";
import { bus } from "../eventBus";

export default {
  name: "Home",
  components: { Work },
  mounted() {
    bus.$on("scrollToWork", this.goto("work-section"));
  },
  beforeDestroy() {
    bus.$off("scrollToWork", this.goto("work-section"));
  },
  methods: {
    goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
    },
  },
  data() {
    return {
      photoCredit: `Photo by
      <a href="https://unsplash.com/@rev3n?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Michał Kubalczyk</a>
      on <a href="https://unsplash.com/s/photos/macbook-pro?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  `,
    };
  },
};
</script>

<style scoped lang="scss">
.background-image {
  height: calc(100vh - 50px) !important;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("~@/assets/laptop.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: top;
}

.summary {
  display: flex;
  flex-direction: column;
  height: 90%;
  text-align: left;
  padding: 50px;
  justify-content: center;

  h1,
  h2 {
    color: $primary-color;
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;
  }

  h2 {
    font-size: 1.25rem;
  }
}

.links-wrapper {
  margin-top: 32px;
  display: flex;
  .fa-github-square,
  .fa-linkedin,
  .fa-envelope-square,
  .fa-medium {
    color: $primary-color;
  }

  div {
    margin-right: 24px;
  }
}

.view-my-work {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  .view-my-work-button {
    width: 150px;
    text-align: center;
  }

  .fa-caret-down {
    color: white;
    display: block;
  }
}

@media screen and (min-width: 1024px) {
  .background-image {
    height: calc(100vh - 80px) !important;
  }
  .summary {
    height: 93%;
  }
}
</style>
