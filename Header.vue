<template>
  <v-app>
    <v-app-bar app>
      <v-img
        class="ml-16"
        height="70px"
        max-width="70px"
        src="../../public/logo.png"
      >
      </v-img>
      <v-menu offset-y max-width="500px" open-on-hover>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            @click="goto"
            plain
            style="margin-left:200px"
            >About</v-btn
          >
        </template>
        <v-row style="background-color:black;" class="mt-4">
          <v-col cols="5" class="mt-4 ml-4">
            <h3>Team</h3>
            <p class="text-caption">
              Ready to go an extra mile to deliver great software solutions.
            </p>
            <h3>Contact</h3>
            <p class="text-caption">
              To discuss your idea and consult with our technology experts.
            </p>
          </v-col>
          <v-col cols="5" class="mt-4 ml-8">
            <h3>We work with</h3>
            <p class="text-caption">
              Global startups, businesses, and enterprise since 1997.
            </p>
            <h3>Careers</h3>
            <p class="text-caption">
              Explore current openings and apply to be a part of IndiaNIC.
            </p>
          </v-col>
        </v-row>
      </v-menu>
      <v-menu offset-y open-on-hover max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" @click="goto" plain class="ml-8"
            >Services</v-btn
          >
        </template>
        <v-row style="background-color:black;" class="mt-4">
          <v-col cols="4" class="mt-4 ml-4">
            <h3>Mobile Apps</h3>
            <p class="text-caption">
              Native iOS Apps Native Android Apps Cross Platform Hybrid Apps
            </p>
            <h3>Web Development</h3>
            <p class="text-caption">
              Ready to go an extra mile to deliver great software solutions.
            </p>
            <h3>QA</h3>
            <p class="text-caption">
              To discuss your idea and consult with our technology experts.
            </p>
          </v-col>
          <v-col cols="3" class="mt-4 ml-8">
            <h3>Design</h3>
            <p class="text-caption">
              Global startups, businesses, and enterprise since 1997.
            </p>
            <h3>DevOps</h3>
            <p class="text-caption">
              Global startups, businesses, and enterprise since 1997.
            </p>
            <h3>IoT</h3>
            <p class="text-caption">
              Explore current openings and apply to be a part of IndiaNIC.
            </p>
          </v-col>
          <v-col cols="3" class="mt-4 ml-8">
            <h3>Marketing</h3>
            <p class="text-caption">
              Global startups, businesses, and enterprise since 1997.
            </p>
            <h3>AI&ML</h3>
            <p class="text-caption">
              Explore current openings and apply to be a part of IndiaNIC.
            </p>
          </v-col>
        </v-row>
      </v-menu>
      <v-menu offset-y open-on-hover>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" @click="goto" plain class="ml-8"
            >Technology</v-btn
          >
        </template>
        <v-row style="background-color:black" class="mt-4">
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title style="color:white"
              >{{ item.title }}&nbsp;&nbsp;&nbsp;&nbsp;{{
                item.title
              }}</v-list-item-title
            >
          </v-list-item>
        </v-row>
      </v-menu>
      <v-menu offset-y open-on-hover>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" @click="goto" plain class="ml-8"
            >Work</v-btn
          >
        </template>
        <v-row style="background-color:black" class="mt-4">
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title style="color:white"
              >{{ item.title }}&nbsp;&nbsp;&nbsp;&nbsp;{{
                item.title
              }}</v-list-item-title
            >
          </v-list-item>
        </v-row>
      </v-menu>
      <v-menu offset-y open-on-hover>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" @click="goto" plain class="ml-8"
            >Methodology</v-btn
          >
        </template>
        <v-row style="background-color:black" class="mt-4">
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title style="color:white"
              >{{ item.title }}&nbsp;&nbsp;&nbsp;&nbsp;{{
                item.title
              }}</v-list-item-title
            >
          </v-list-item>
        </v-row>
      </v-menu>
      <v-btn dark3 class="blue darken-3">
        Contact us
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </v-app-bar>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      items: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" },
      ],
    };
  },
  methods: {
    goto() {
      this.$router.push({ name: "About" });
    },
  },
};
</script>
<style>
.v-app-bar {
  background-color: black;
}
.v-btn {
  margin-left: 100px;
}
h3 {
  color: white;
}
p {
  color: white;
}
</style>
