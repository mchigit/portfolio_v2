<template>
  <div class="work-wrapper">
    <div class="work-content">
      <div class="section-header">
        <h1>Employment</h1>
      </div>
      <div class="content-wrapper">
        <div class="mobile-work">
          <b-tabs expanded>
            <b-tab-item
              v-for="workItem in workExp"
              v-bind:key="workItem.company"
              v-bind:label="workItem.company"
              headerClass="tab-header"
            >
              <div>
                <h1>{{ workItem.title }}</h1>
                <h2>{{ workItem.date }}</h2>
                <div>
                  <div class="achievments">
                    <div
                      v-bind:key="achievements.id"
                      v-for="achievements in workItem.achievements"
                      class="achievement"
                    >
                      <i class="right-caret fas fa-caret-right"></i>
                      <span>{{ achievements.text }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </b-tab-item>
          </b-tabs>
        </div>
        <div class="side-menu">
          <b-tabs vertical>
            <b-tab-item
              v-for="workItem in workExp"
              v-bind:key="workItem.company"
              v-bind:label="workItem.company"
              headerClass="tab-header"
            >
              <div class="work-history">
                <h1>{{ workItem.title }}</h1>
                <h2>{{ workItem.date }}</h2>
                <div>
                  <div class="achievments">
                    <div
                      v-bind:key="achievements.id"
                      v-for="achievements in workItem.achievements"
                      class="achievement"
                    >
                      <i class="right-caret fas fa-caret-right"></i>
                      <span>{{ achievements.text }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </b-tab-item>
          </b-tabs>
        </div>
      </div>
    </div>
    <div class="project-content">
      <div class="section-header">
        <h1>Projects</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      workExp: [
        {
          title: "Software Engineer @ Inkling",
          company: "Inkling",
          date: "June 2020 - Now",
          achievements: [
            {
              id: 1,
              text: "Led the design, and implmenetation of consent form project for McDonalds, which allows them to request trackingconsent from users.",
            },
            {
              id: 2,
              text: "Designed and implemented notification feature for user feedback using AWS SNS, SQS, Lambda, and Stream.",
            },
            {
              id: 3,
              text: "Researched and created prototypes for the regionalization project, which allowed Inkling products to support regionalized languages.",
            },
            {
              id: 4,
              text: "Automated AWS infrastructure modification using Terraform",
            },
          ],
        },
        {
          title: "Software Developer Intern @ Freshii",
          company: "Freshii",
          date: "Sept 2018 - Dec 2018",
          achievements: [
            {
              id: 1,
              text: "Led a team of 2 engineering interns to develop backend API using Node.js and Google Cloud, which improved the career application process.",
            },
            {
              id: 2,
              text: "Shipped features in Vue.js for Freshii's online ordering system, including Google Authentication and inquiry submission.",
            },
            {
              id: 3,
              text: "Introduced coding guidelines, and documented development processes for on-boarding future engineers.",
            },
          ],
        },
        {
          title: "Software Developer Intern @ IBM",
          company: "IBM Canada",
          date: "May 2017 - Aug 2017",
          achievements: [
            {
              id: 1,
              text: "Implemented a Node.js API to control Single Sign-On configurations and authentication, leveraged Redis to cache certificates and created UI with React.",
            },
            {
              id: 2,
              text: "Designed and built a Node/React-based IP Whitelist System, working with SFTP server to provide resource authorization.",
            },
            {
              id: 3,
              text: "Wrote unit tests to validate API endpoints, which increased code coverage by 23%.",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.work-content,
.project-content {
  background-color: $background-color;
  padding: 30px;
}

.project-content {
  margin-top: 36px;
}

.section-header {
  h1 {
    color: $primary-color;
    font-size: 24px;
    font-weight: bold;
    text-align: left;
    position: relative;
  }
}

.mobile-work {
  margin-top: 24px;
}

.side-menu {
  display: none;
}

.tab-header.is-active a span {
  color: $primary-color !important;
  font-weight: bold;
}

.tabs li.is-active a {
  border-bottom-color: $primary-color !important;
  border-bottom: 2px solid;
}

.tab-content {
  padding-left: 0 !important;
}

.work-wrapper {
  padding: 0px;
  background-color: $background-color;
}

.work-history {
  margin-top: 16px;
  color: $primary-color;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-size: 16px;
    font-weight: bold;
  }

  h2 {
    font-size: 14px;
    color: $primary-color;
  }

  @media screen and (min-width: 400px) {
    h1 {
      font-size: 20px;
    }

    h2 {
      font-size: 16px;
      color: $primary-color;
    }
  }
}

.achievments {
  text-align: left;
  margin-top: 12px;
  list-style-position: outside;

  .right-caret {
    margin-top: 3px;
  }

  span {
    margin-left: 4px;
  }

  .achievement {
    margin-top: 8px;
  }
}

.tab-content {
  color: $primary-color;

  h1,
  h2 {
    text-align: left;
  }

  h1 {
    font-weight: bold;
  }
}

@media screen and (min-width: 765px) {
  .side-menu {
    display: block;
    margin-top: 24px;
  }

  .work-wrapper {
    padding: 60px;
    background-color: $background-color;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .work-content {
    height: 500px;
  }

  .work-content,
  .project-content {
    width: 700px;
  }

  .tab-content {
    padding: 0 !important;
    margin-left: 24px;
    width: 400px;
  }

  .mobile-work {
    display: none;
  }

  .section-header {
    h1 {
      color: $primary-color;
      text-align: left;
      font-size: 30px;
      position: relative;
    }

    h1:after {
      content: "";
      display: block;
      width: 70%;
      height: 1px;
      background: $primary-color;
      left: 200px;
      top: 50%;
      position: absolute;
    }
  }
}

@media screen and (min-width: 1024px) {
  .work-content,
  .project-content {
    width: 900px;
  }

  .tab-content {
    padding: 0 !important;
    margin-left: 24px;
    width: 600px;
  }
}
</style>
