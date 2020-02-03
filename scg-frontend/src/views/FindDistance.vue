<template>
  <div>
    <Navbar></Navbar>
    <b-container>
      <div class="content">
        <h4 style="margin:20px 0">3.Please use “Google API” for finding the best way to go to Central World from SCG Bangsue</h4>
        <mdb-row>
          <!-- GMAP -->
          <mdb-col sm="6">
            <gmap-map
              class="mt-2"
              ref="map"
              :center="SCG"
              :zoom="15"
              style="width: 100%; height: 550px"
            >
              <gmap-marker vshow="onshow" :position="SCG"></gmap-marker>
              <gmap-marker vshow="onshow" :position="CentralWorld"></gmap-marker>

              <gmap-polyline
                v-show="!onshow"
                v-bind:path.sync="path"
                v-bind:options="{ strokeColor:'#03b6fc'}"
              ></gmap-polyline>
            </gmap-map>
            <mdb-btn color="warning" size="lg" block @click="getDirection">
              <span style="color:white;font-size:20px;">{{buttonText}}</span>
            </mdb-btn>
            <mdb-card style="width:100%" v-show="!onshow">
              <mdb-card-body >
                <mdb-card-title>Summary</mdb-card-title>
                <hr>
                <mdb-card-text class="text-left" id="summary">
                   <span style="font-size:20px">Distance : {{distance}}</span>
                   <br>
                    <span  style="font-size:20px">Duration : {{duration}}</span>
                </mdb-card-text>
              </mdb-card-body>
            </mdb-card>
            <!-- End -->
          </mdb-col>
          <mdb-col sm="6">
            <mdb-card style="width:100%" v-show="!onshow" class="mt-2">
              <mdb-card-body>
                <mdb-card-title>Steps</mdb-card-title>
                <hr>
                <mdb-card-text class="text-left" >
                  <ol id="step"></ol>
                </mdb-card-text>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </div>
    </b-container>
    <Footer />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { gmapApi } from "vue2-google-maps";
import {
  mdbBtn,
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText
} from "mdbvue";

export default {
  name: "FindDistance",
  components: {
    Navbar,
    Footer,
    mdbBtn,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText
  },
  data() {
    return {
      CentralWorld: {
        lat: 13.7466304,
        lng: 100.5371464
      },
      SCG: {
        lat: 13.8059302,
        lng: 100.5356363
      },
      onshow: true,
      path: [],
      duration:null,
      distance:null,
      buttonText:"Show Directions"
    };
  },
  methods: {
    async getDirection() {
      const google = await gmapApi();
      await this.$store.dispatch("findDistance");
      var path = google.maps.geometry.encoding.decodePath(
        this.$store.state.DISTANCE.routes[0].overview_polyline.points
      );
      this.path = path;
      const element = document.getElementById('step');
      element.innerHTML = ""
      this.$store.state.DISTANCE.routes[0].legs[0].steps.forEach((step)=>{
        const html = "<li>" + step.html_instructions + "</li>"
        element.innerHTML += html
      })
      this.distance = this.$store.state.DISTANCE.routes[0].legs[0].distance.text;
      this.duration = this.$store.state.DISTANCE.routes[0].legs[0].duration.text;

      this.onshow = !this.onshow;
      if(this.buttonText == "Show Directions"){
        this.buttonText = "Hide Directions"
      }
      else{
        this.buttonText = "Show Directions"
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