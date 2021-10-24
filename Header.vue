<template>
  <v-app>
    <v-app-bar dark app>
      <v-img
        class="ml-16"
        height="70px"
        max-width="70px"
        src="../../public/logo.png"
      >
      </v-img>
      <v-menu offset-y max-width="500px" style="max-height:500px" open-on-hover>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            @click="gotoAbout"
            plain
            style="margin-left:200px"
            class="link"
            ><span class="link">About</span></v-btn
          >
        </template>
        <v-row style="background-color:black;" class="mt-4">
          <v-col cols="5" class="mt-4 ml-4">
            <router-link to="/" style="text-decoration:none" class="link"><h3 class="link">Team</h3></router-link>
            <p class="text-caption">
              Ready to go an extra mile to deliver great software solutions.
            </p>
            <router-link to="/" style="text-decoration:none"><h3 class="link">Contact</h3></router-link>
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
          <v-btn v-bind="attrs" v-on="on" @click="goto1" plain class="ml-8 link"
            ><span class="link">Services</span></v-btn
          >
        </template>
        <v-row style="background-color:black; width:1000px" class="mt-4">
          <v-col cols="3" class="mt-4 ml-8 pl-8">
            <h3>Mobile Apps</h3>
            <router-link to="/" style="text-decoration:none;"
              ><p class="text-caption mt-2">
                <span class="link"> Native iOS Apps Apps</span>
              </p></router-link
            >
            <router-link to="/" style="text-decoration:none;"
              ><p class="text-caption">
                <span class="link"> Native Android Apps</span>
              </p></router-link
            >
            <router-link to="/" style="text-decoration:none;"
              ><p class="text-caption">
                <span class="link"> Platform</span>
              </p></router-link
            >
            <router-link to="/" style="text-decoration:none;"
              ><p class="text-caption">
                <span class="link">Hybrid Apps</span>
              </p></router-link
            >
            <router-link to="/" style="text-decoration:none;"
              ><p class="text-caption">
                <span class="link">PWA</span>
              </p></router-link
            >
            <h3>DevOps</h3>
            <router-link to="/" style="text-decoration:none;"
              ><p class="text-caption mt-2">
                <span class="link">Setups</span>
              </p></router-link
            >
            <router-link to="/" style="text-decoration:none;"
              ><p class="text-caption">
                <span class="link">Automation</span>
              </p></router-link
            >
            <router-link to="/" style="text-decoration:none;"
              ><p class="text-caption">
                <span class="link">Continuous Delivery</span>
              </p></router-link
            >
            <router-link to="/" style="text-decoration:none;"
              ><p class="text-caption">
                <span class="link">Monitoring</span>
              </p></router-link
            >
          </v-col>
          <v-col cols="4" class="mt-4 ml-8">
            <h3>Web Development</h3>
            <router-link to="/" style="text-decoration:none;"><p class="text-caption mt-2">
             <span class="link"> Enterprise solutions</span>
            </p></router-link>
            <router-link to="/" style="text-decoration:none;"><p class="text-caption"><span class="link">ECommerce</span></p></router-link>
            <router-link to="/" style="text-decoration:none;"><p class="text-caption"><span class="link">CMS</span></p></router-link>
            <router-link to="/" style="text-decoration:none;"><p class="text-caption"><span class="link">API&Backend</span></p></router-link>
            <router-link to="/" style="text-decoration:none;"><p class="text-caption"><span class="link">Custom Development</span></p></router-link>
            <h3 class="">QA</h3>
            <router-link to="/" style="text-decoration:none;"><p class="text-caption mt-2"><span class="link"> QA Testing</span></p></router-link>
            <router-link to="/" style="text-decoration:none;"><p class="text-caption"><span class="link">Web Testing Automation</span></p></router-link>
            <router-link to="/" style="text-decoration:none;"><p class="text-caption"><span class="link">Mobile App Testing</span></p></router-link>
            <router-link to="/" style="text-decoration:none;"><p class="text-caption"><span class="link">API Testing</span></p></router-link>
          </v-col>
          <v-col cols="2" class="mt-2">
            <h3>Design</h3>
            <router-link to="/" style="text-decoration:none"><p class="text-caption mt-2">
             <span class="link"> Discovery Workshop
            </span></p></router-link>
            <router-link to="/" style="text-decoration:none;"><p class="text-caption"><span class="link">Analysis</span></p></router-link>
            <router-link to="/" style="text-decoration:none;"><p class="text-caption"><span class="link">Wireframe</span></p></router-link>
            <router-link to="/" style="text-decoration:none;"><p class="text-caption"><span class="link">UI/UX Design</span></p></router-link>
          </v-col>

          <v-card color="red" width="1000px" height="120px">
            <v-row>
              <v-col cols="8">
                <h3 class="pt-6 ml-12">
                  Discovery Workshop
                </h3>
                <p class=" ml-12">
                  Define functional scope of your project to plan project budget
                  and timeline.
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
          <v-btn
            v-bind="attrs"
            v-on="on"
            @click="goto2"
            plain
            class="ml-8 link"
          >
          <span class="link">  Technology</span>
          </v-btn>
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
            <router-link to="/" style="text-decoration:none"
              ><p class="text-caption mt-2">
                <span class="link"> iOS</span>
              </p></router-link
            >
            <router-link to="/" style="text-decoration:none;">
              <p class="text-caption">
                <span class="link"> Android</span>
              </p>
            </router-link>
            <router-link to="/" style="text-decoration:none;"
              ><p class="text-caption">
                <span class="link"> React Native</span>
              </p></router-link
            >
            <router-link to="/" style="text-decoration:none;"
              ><p class="text-caption">
                <span class="link"> Ionic</span>
              </p></router-link
            >
            <h3 class="mt-2 pt-2">Infra&DevOps</h3>
            <router-link to="/" style="text-decoration:none;"
              ><p class="text-caption  mt-2">
                <span class="link"> AWS</span>
              </p></router-link
            >
            <router-link to="/" style="text-decoration:none;"
              ><p class="text-caption">
                <span class="link"> Azure</span>
              </p></router-link
            >
            <router-link to="/" style="text-decoration:none;"
              ><p class="text-caption">
                <span class="link">Google Cloud</span>
              </p></router-link
            >
            <router-link to="/" style="text-decoration:none;"
              ><p class="text-captio">
                <span class="link"> Selenium</span>
              </p></router-link
            >
            <router-link to="/" style="text-decoration:none;"
              ><p class="text-caption">
                <span class="link">Jenkins</span>
              </p></router-link
            >
            <router-link to="/" style="text-decoration:none;"
              ><p class="text-caption">
                <span class="link">Appium</span>
              </p></router-link
            >
          </v-col>
          <v-col cols="3" class="mt-4">
            <h3>Backend</h3>
            <router-link to="/" style="text-decoration:none;"
              ><p class="text-caption mt-2">
                <span class="link"> Node </span>
              </p></router-link
            >
            <router-link to="/" style="text-decoration:none;"
              ><p class="text-caption">
                <span class="link"> PHP</span>
              </p></router-link
            >
            <router-link to="/" style="text-decoration:none;"
              ><p class="text-caption">
                <span class="link"> Java</span>
              </p></router-link
            >
            <router-link to="/" style="text-decoration:none;"
              ><p class="text-caption">
                <span class="link"> Python</span>
              </p></router-link
            >
            <h3 class="mt-6">Database</h3>
            <router-link to="/" style="text-decoration:none;"
              ><p class="text-caption mt-2">
                <span class="link"> MySQL </span>
              </p></router-link
            >
            <router-link to="/" style="text-decoration:none;"
              ><p class="text-caption">
                <span class="link">PostgreSQL</span>
              </p></router-link
            >
            <router-link to="/" style="text-decoration:none;"
              ><p class="text-caption">
                <span class="link">Firebase</span>
              </p></router-link
            >
            <router-link to="/" style="text-decoration:none;"
              ><p class="text-caption">
                <span class="link">MongoDB</span>
              </p></router-link
            >
            <router-link to="/" style="text-decoration:none;"
              ><p class="text-caption">
                <span class="link">Oracle</span>
              </p></router-link
            >
          </v-col>

          <v-col cols="3" class="mt-4">
            <h3>Front End</h3>
            <router-link to="/" style="text-decoration:none;"
              ><p class="text-caption mt-2">
                <span class="link"> Angular</span>
              </p></router-link
            >
            <router-link to="/" style="text-decoration:none;"
              ><p class="text-caption">
                <span class="link">ReactJs</span>
              </p></router-link
            >
            <router-link to="/" style="text-decoration:none;"
              ><p class="text-caption">
                <span class="link">Vue</span>
              </p></router-link
            >
            <router-link to="/" style="text-decoration:none;"
              ><p class="text-caption">
                <span class="link">Typescript</span>
              </p></router-link
            >
            <h3 class="mt-2 pt-2">CMS</h3>
            <router-link to="/" style="text-decoration:none;"
              ><p class="text-caption mt-2">
                <span class="link"> Magento </span>
              </p></router-link
            >
            <router-link to="/" style="text-decoration:none;"
              ><p class="text-caption">
                <span class="link">WordPress</span>
              </p></router-link
            >
            <router-link to="/" style="text-decoration:none;"
              ><p class="text-caption">
                <span class="link">Shopify</span>
              </p></router-link
            >
            <router-link to="/" style="text-decoration:none;"
              ><p class="text-caption">
                <span class="link">Drupal</span>
              </p></router-link
            >
            <router-link to="/" style="text-decoration:none;"
              ><p class="text-caption">
                <span class="link">Umbraco</span>
              </p></router-link
            >
          </v-col>
        </v-row>
      </v-menu>
      <v-menu offset-y open-on-hover class="mt-4">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" @click="goto3" plain class="ml-8 link"
            ><span class="link">Work</span></v-btn
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
          <v-btn v-bind="attrs" v-on="on" @click="goto4" plain class="ml-8 link"
            ><span class="link">Methodology</span></v-btn
          >
        </template>
        <v-row style="background-color:black; width:500px" class="mt-4">
          <v-col cols="5" class="mt-4 ml-4">
            <h3>Discovery</h3>
            <p class="text-caption">
              Transforming ideas into a measureable scope with functional UI/UX
              Design.
            </p>
            <h3>Remote Team</h3>
            <p class="text-caption">
              Form an expert team who works remotely, under your supervision.
            </p>
          </v-col>
          <v-col cols="5" class="mt-4 ml-8">
            <h3>Project Execution</h3>
            <p class="text-caption">
              Get to know how we balance the critical triangle of Cost, Time and
              Scope.
            </p>
            <h3>Project Review</h3>
            <p class="text-caption">
              Proactive review at every satge for the efficient delivery.
            </p>
          </v-col>
        </v-row>
      </v-menu>
      <v-btn dark3 class="red">
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
      itemse: [
        { name: "Click Me" },
        { name: "Click Me" },
        { name: "Click Me" },
        { name: "Click Me 2" },
      ],
    };
  },
  methods: {
    gotoAbout() {
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
.link:hover {
  color: red;
  border-bottom: 1px solid #090;
}
.link {
  text-decoration: none;
}
</style>
