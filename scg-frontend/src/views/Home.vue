<template>
  <div>
    <Navbar></Navbar>
    <b-container>
      <div class="content">
        <h5 class="title">
          <span class="cir-text-head">Profile</span>
        </h5>
        <b-row class="mt-5">
          <b-col sm="6">
            <b-img
              src="../assets/profile.jpg"
              rounded="circle"
              alt="Circle image"
              width="400"
              height="400"
              class="img-fluid"
            ></b-img>
            
            <div style="margin-top:35px"><q style="font-size:30px;font-family: 'Roboto', sans-serif;">Coding, Reading, Exploring<span style="font-size:50px;">&nbsp;&#128150;</span></q></div>
            
            
          </b-col>
          <b-col sm="6">
            <b-card>
              <b-card-body>
                <b-card-title>
                  <span class="cir-text">Name</span>
                </b-card-title>
                <b-card-text><span class="h3">Punmanat Nunthasunti (Pat)</span></b-card-text>
              </b-card-body>
              <b-card-body>
                <b-card-title>
                  <span class="cir-text">Objective</span>
                </b-card-title>
                <b-card-text>
                  Experience Full-Stack developer in University around 2 years
                  and familiar with Web Technology such as HTML ,CSS, JavaScript, Bootstrap, etc.
                  I want to seek a job position in Full Stack Developer for now and I know a little bit about blockchain technology.
                </b-card-text>
              </b-card-body>
              <b-card-body>
                <b-card-title>
                  <span class="cir-text">About me</span>
                </b-card-title>
                <b-card-text class="text-left">
                  <b>Email:</b>
                  <span>60070053@kmitl.ac.th</span>
                  <br />
                  <b>Tel:</b>
                  <span>0618961414</span>
                  <br />
                  <b>University:</b>
                  <span>Information Technology,KMITL</span>
                  <br />
                  <b>Track:</b>
                  <span>Software engineering</span>
                  <br />
                  <b>GPA:</b>
                  <span>3.54</span>
                </b-card-text>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
        <br />
        <br />
        <hr />
        <h5 class="title">
          <span class="cir-text-head">Activities</span>
        </h5>
        <br />
        <b-row>
          <b-col sm="12">
            <mdb-timeline>
              <mdb-timeline-item color="light-blue lighten-4" icon="child">
                <mdb-row>
                  <mdb-col sm="6">
                    <h2>IT Camp 14 KMITL</h2>
                    <p
                      class="text-muted mb-2"
                    >Work as Teacher Assistance in Network camp. Objective of camp was to teach younger people to know about Networking and consulted about entering in Information Technology Faculty</p>
                  </mdb-col>
                  <mdb-col sm="6">
                    <img class="img-fluid" src="../assets/itcamp.jpg" width="1000" height="1000" />
                  </mdb-col>
                </mdb-row>
                <p class="text-right text-muted mt-2">May 2018 - June 2018</p>
                <hr />
              </mdb-timeline-item>
              <mdb-timeline-item color="light-blue lighten-3" inverted icon="plane-arrival">
                <mdb-row>
                  <mdb-col sm="6">
                    <img class="img-fluid" src="../assets/TPMAP.png" width="1000" height="1000" />
                  </mdb-col>
                  <mdb-col sm="6">
                    <h2>TPMAP Project KMITL</h2>
                    <p class="text-muted mt-2">
                      I am doing this project in university with my friends
                      and my professor. Objective of project is predict a poor people
                      in Thailand that use open data by applying Data Science Knowledge
                      such as Data Analyse, Machine Learning, Data Cleansing, Data scraping, etc.
                    </p>
                  </mdb-col>
                </mdb-row>
                <p class="text-right text-muted">May 2019 - Present</p>
                <hr />
              </mdb-timeline-item>
              <mdb-timeline-item color="light-blue lighten-4" icon="child">
                <mdb-row>
                  <mdb-col sm="6">
                    <h2>Project in University</h2>
                    <ol class="text-muted mb-2">
                      <li>Furniture shop website (This is first project in university that I practice web technology skill on doing this project)</li>
                      <li>Online queueing barber system (This system is applied many sofware engineering technique such as get requirements from stakeholders, create use case, create sequence diagram, etc).</li>
                      <li>Reservation service system (This system is applied microservice pattern to implement these methods through out the project)</li>
                    </ol>
                  </mdb-col>
                  <mdb-col sm="6">
                    <img class="img-fluid" src="../assets/project.jpeg" width="1000" height="1000" />
                  </mdb-col>
                </mdb-row>
                <hr />
              </mdb-timeline-item>
            </mdb-timeline>
          </b-col>
        </b-row>
      </div>
    </b-container>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { mdbTimeline, mdbTimelineItem, mdbRow, mdbCol } from "mdbvue";
export default {
  name: "home",
  components: {
    Navbar,
    Footer,
    mdbTimeline,
    mdbTimelineItem,
    mdbRow,
    mdbCol
  }
};
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap');
$maincolor: #03b6fc;
$whitecolor: rgba(255, 255, 255);
$red: #ed4e42;
.title {
  font-size: 50px;
  margin: 50px;
}

.cir-text {
  width: 100%;
  height: 20%;
  background-color: $maincolor;
  padding: 10px 20px;
  color: $whitecolor;
  border-radius: 20px;
}
.card {
  margin-top: 6px !important;
}
.card-title {
  margin-bottom: 1.75rem !important;
}
.cir-text-head {
  width: 100%;
  height: 20%;
  background-color: $red;
  padding: 10px 30px;
  color: $whitecolor;
  border-radius: 20px;
}
</style>
