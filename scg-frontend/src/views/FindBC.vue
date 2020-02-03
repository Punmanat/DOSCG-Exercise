<template>
  <div>
    <Navbar></Navbar>
    <b-container>
      <div class="content">
        <h4
          style="margin:20px 0"
        >2.If A = 21, A + B = 23, A + C = -21 - Please create a new function for finding B and C value.</h4>
        <img src="../assets/solution2.png" class="img-fluid" width="400" height="300" />
        <mdb-btn color="warning" size="lg" block @click="clickFindBC()">
          <span style="color:white;font-size:20px;">{{clickData}}</span>
        </mdb-btn>
        <mdb-card v-show="isShow" style="width:100%">
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
  name: "FindBC",
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
    async clickFindBC() {
      this.isShow = !this.isShow;
      if (this.isShow) {
        this.clickData = "Hide me";
        const status = await this.$store.dispatch("findBC");
        if (status == true) {
          this.data = this.$store.state.BC;
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