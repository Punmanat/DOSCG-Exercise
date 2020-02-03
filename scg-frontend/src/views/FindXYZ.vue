<template>
  <div>
    <Navbar></Navbar>
    <b-container>
      <div class="content">
        <h4
          style="margin:20px 0"
        >1.X, Y, 5, 9, 15, 23, Z - Please create a new function for finding X, Y, Z value</h4>
        <img src="../assets/solution1.png" class="img-fluid" width="400" height="300" />
        <mdb-btn color="warning" size="lg" block @click="clickFindXYZ()">
          <a href="#card">
            <span style="color:white;font-size:20px;">{{clickData}}</span>
          </a>
        </mdb-btn>
        <mdb-card v-show="isShow" style="width:100%" id="card">
          <mdb-card-body>
            <mdb-card-title>JSON</mdb-card-title>
            <div class="spinner-border text-danger" role="status" v-if="isLoading">
              <span class="sr-only">Loading...</span>
            </div>
            <mdb-card-text class="text-left" v-else>
              <vue-json-pretty :data="data"></vue-json-pretty>
            </mdb-card-text>
          </mdb-card-body>
        </mdb-card>
      </div>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import {
  mdbBtn,
  mdbCard,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText
} from "mdbvue";
import VueJsonPretty from "vue-json-pretty";
export default {
  name: "FindXYZ",
  components: {
    Navbar,
    Footer,
    mdbBtn,
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    VueJsonPretty
  },
  data() {
    return {
      isShow: false,
      clickData: "Click here to find answer!!",
      isLoading: true,
      data: null
    };
  },
  methods: {
    async clickFindXYZ() {
      this.isShow = !this.isShow;
      if (this.isShow) {
        this.clickData = "Hide me";
        const status = await this.$store.dispatch("findXYZ");
        if (status == true) {
          this.data = this.$store.state.XYZ;
          this.isLoading = false;
        } else {
          this.isLoading = true;
        }
      } else {
        this.clickData = "Click here to find answer!!";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  margin: 20px 0 !important;
}
</style>