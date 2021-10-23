<template>
  <v-app>
    <v-responsive>
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
        <v-menu offset-y open-on-hover>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" @click="goto1" plain class="ml-8"
              >Services</v-btn
            >
          </template>
          <v-row style="background-color:black; width:1000px" class="mt-4">
            <v-col cols="3" class="mt-4 ml-8 pl-8">
              <h3>Mobile Apps</h3>
              <p class="text-caption">
                Native iOS Apps Apps
              </p>
              <p class="text-caption">
                Native Android Apps
              </p>
              <p class="text-caption">Cross Platform</p>
              <p class="text-caption">Hybrid Apps</p>
              <p class="text-caption">PWA</p>
              <h3>IoT</h3>
              <p class="text-caption">
                Industrial Automation
              </p>
              <p class="text-caption">Home Automation</p>
              <p class="text-caption">Smart Healthcare</p>
              <p class="text-caption">Conneted Devices</p>
            </v-col>
            <v-col cols="4" class="mt-4">
              <h3>Web Development</h3>
              <p class="text-caption">
                Enterprise solutions
              </p>
              <p class="text-caption">ECommerce</p>
              <p class="text-caption">CMS</p>
              <p class="text-caption">API&Backend</p>
              <p class="text-caption">Custom Development</p>
              <h3>Marketing</h3>
              <p class="text-caption">
                Content
              </p>
              <p class="text-caption">PPC Campaigns</p>
              <p class="text-caption">Social Media</p>
            </v-col>
            <v-col cols="2" class="mt-4">
              <h3>Design</h3>
              <p class="text-caption">
                Discovery Workshop
              </p>
              <p class="text-caption">Analysis</p>
              <p class="text-caption">Wireframe</p>
              <p class="text-caption">UI/UX Design</p>
              <h3 class="pt-4 mt-8">AI&ML</h3>
              <p class="text-caption">
                Strategic planning
              </p>
              <p class="text-caption">Chatbots</p>
              <p class="text-caption">Analytics</p>
              <p class="text-caption">Visual Recognition</p>
            </v-col>
            <v-col cols="2" class="mt-4">
              <router-link to="/" style="text-decoration:none"
                ><h3>DevOps</h3></router-link
              >
              <p class="text-caption">Setups</p>
              <p class="text-caption">Automation</p>
              <p class="text-caption">Continuous Delivery</p>
              <p class="text-caption">Monitoring</p>
              <h3 class="pt-4 mt-8">QA</h3>
              <p class="text-caption">Manaual QA Testing</p>
              <p class="text-caption">Web Testing Automation</p>
              <p class="text-caption">Mobile App Testing</p>
              <p class="text-caption">API Testing</p>
            </v-col>
            <v-card color="red" width="1000px" height="120px">
              <v-row>
                <v-col cols="8">
                  <h3 class="pt-6 ml-12">
                    Discovery Workshop
                  </h3>
                  <p class=" ml-12">
                    Define functional scope of your project to plan project
                    budget and timeline.
                  </p>
                </v-col>
                <v-col cols="4">
                  <v-btn class="mt-8" color="white">View More</v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-row>
        </v-menu>
        <v-menu offset-y open-on-hover>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" @click="goto2" plain class="ml-8"
              >Technology</v-btn
            >
          </template>
          <v-row style="background-color:black; width:1000px" class="mt-4">
            <v-card color="red" width="200px">
              <v-img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb68Et1yknNhvghhiycAXgT6_QT1W6VM0D1A&usqp=CAU"
              ></v-img>
              <h3 style="margin-top:130px" class="ml-6">Hire Team</h3>
              <p class="ml-6">
                Create your own agile squad with experienced members just like
                your local team.
              </p>
              <v-btn class="ml-6">
                Know more
              </v-btn>
            </v-card>
            <v-col cols="3" class="mt-4 ml-8 pl-8">
              <h3>Mobile</h3>
              <p class="text-caption">
                iOS
              </p>
              <p class="text-caption">Android</p>
              <p class="text-caption">React Native</p>
              <p class="text-caption">Ionic</p>
              <h3 class="mt-2 pt-2">Infra&DevOps</h3>
              <p class="text-caption">
                AWS
              </p>
              <p class="text-caption">Azure</p>
              <p class="text-caption">Google Cloud</p>
              <p class="text-caption">Selenium</p>
              <p class="text-caption">Jenkins</p>
              <p class="text-caption">Appium</p>
            </v-col>
            <v-col cols="3" class="mt-4">
              <h3>Backend</h3>
              <p class="text-caption">
                Node
              </p>
              <p class="text-caption">PHP</p>
              <p class="text-caption">Java</p>
              <p class="text-caption">Python</p>
              <h3 class="mt-6">Database</h3>
              <p class="text-caption">
                MySQL
              </p>
              <p class="text-caption">PostgreSQL</p>
              <p class="text-caption">Firebase</p>
              <p class="text-caption">MongoDB</p>
              <p class="text-caption">Oracle</p>
            </v-col>

            <v-col cols="3" class="mt-4">
              <h3>Front End</h3>
              <p class="text-caption">
                Angular
              </p>
              <p class="text-caption">ReactJs</p>
              <p class="text-caption">Vue</p>
              <p class="text-caption">Typescript</p>
              <h3 class="mt-2 pt-2">CMS</h3>
              <p class="text-caption">
                Magento
              </p>
              <p class="text-caption">WordPress</p>
              <p class="text-caption">Shopify</p>
              <p class="text-caption">Drupal</p>
              <p class="text-caption">Umbraco</p>
            </v-col>
          </v-row>
        </v-menu>
        <v-menu offset-y open-on-hover class="mt-4">
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" @click="goto3" plain class="ml-8"
              >Work</v-btn
            >
          </template>
          <v-row style="background-color:black; width:900px;" class="mt-4">
            <v-col class="mt-4 ml-4 pl-4">
              <v-img
                height="120px"
                width="140px"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJW75Ah83mwW4MJpECniY1ZId1o1sTAIvpZw&usqp=CAU"
              ></v-img>
              <h3 class="mt-4">Popular Brands</h3>
              <p class="text-caption">
                A gallery of astonishing solutions dekivered to the most
                recognized brands.
              </p>
            </v-col>
            <v-col class="mt-4">
              <v-img
                height="120px"
                width="140px"
                src="https://hvtimes.com/wp-content/uploads/2021/02/web-design-Dublin.png"
              ></v-img>
              <h3 class="mt-4">Case Studies</h3>
              <p class="text-caption">
                Explore how IndiaNIC delivered IT solutions to startups &
                Enterprises.
              </p>
            </v-col>
            <v-col class="mt-4">
              <v-img
                height="120px"
                width="140px"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO9JDarHFOfBVfUqb08472kjt1zGQ83zr7Bg&usqp=CAU"
              ></v-img>
              <h3 class="mt-4">Portfolio</h3>
              <p class="text-caption">
                A glimpse to our experties on design, development and industry
                experience.
              </p>
            </v-col>
            <v-col class="mt-4">
              <v-img
                height="120px"
                width="140px"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSGaJBY-vRCNIMdG2Kz-BNuTzeJKyMX-sIGA&usqp=CAU"
              ></v-img>
              <h3 class="mt-4">Products</h3>
              <p class="text-caption">
                Digital tools developed by us for businesses to be more
                productive.
              </p>
            </v-col>
          </v-row>
        </v-menu>
        <v-menu offset-y open-on-hover>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" @click="goto4" plain class="ml-8"
              >Methodology</v-btn
            >
          </template>
          <v-row style="background-color:black; width:500px" class="mt-4">
            <v-col cols="5" class="mt-4 ml-4">
              <h3>Discovery</h3>
              <p class="text-caption">
                Transforming ideas into a measureable scope with functional
                UI/UX Design.
              </p>
              <h3>Remote Team</h3>
              <p class="text-caption">
                Form an expert team who works remotely, under your supervision.
              </p>
            </v-col>
            <v-col cols="5" class="mt-4 ml-8">
              <h3>Project Execution</h3>
              <p class="text-caption">
                Get to know how we balance the critical triangle of Cost, Time
                and Scope.
              </p>
              <h3>Project Review</h3>
              <p class="text-caption">
                Proactive review at every satge for the efficient delivery.
              </p>
            </v-col>
          </v-row>
        </v-menu>
        <v-btn dark3 class="blue lighten-3">
          Contact us
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </v-app-bar>
      <router-view></router-view>
    </v-responsive>
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
      itemse: [
        { name: "Click Me" },
        { name: "Click Me" },
        { name: "Click Me" },
        { name: "Click Me 2" },
      ],
    };
  },
  methods: {
    goto() {
      this.$router.push({ name: "About" });
    },
    goto1() {
      this.$router.push({ name: "Services" });
    },
    goto2() {
      this.$router.push({ name: "Technology" });
    },
    goto3() {
      this.$router.push({ name: "Work" });
    },
    goto4() {
      this.$router.push({ name: "Methodology" });
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
