<template>
  <!-- Footer -->
  <mdb-footer color="blue" class="font-small pt-4 mt-4">
    <mdb-container class="text-left">
      <mdb-row class="text-center">
        <mdb-col sm="12">
          <h5 class="title">DOSCG</h5>
          <p>
            Made with
            <span style="font-size:20px">&#128150;</span>
          </p>
          <p>
            Made with
            <b-img src="../assets/vuejs.png" width="25" height="25"></b-img>
            <b-img src="../assets/bootstrap.png" width="25" height="25"></b-img>
            <b-img src="../assets/sass.png" width="25" height="25"></b-img>
            <b-img src="../assets/nodejs.png" width="25" height="25"></b-img>
          </p>
        </mdb-col>
      </mdb-row>
      <hr />
      <mdb-row class="text-center">
        <mdb-col sm="12">
          <h5 class="title">Services</h5>
          <ul>
            <li class="list-unstyled">
              <a href="/findXYZ">findXYZ</a>
            </li>
            <li class="list-unstyled">
              <a href="/findBC">findBC</a>
            </li>
            <li class="list-unstyled">
              <a href="/findDistance">findDistance</a>
            </li>
          </ul>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2020 Copyright:
        <a href="https://github.com/Punmanat">Github: Punmanat</a>
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from "mdbvue";
export default {
  name: "Footer",
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol
  }
};
</script>

<style lang="scss" scoped>
$maincolor: #03b6fc;
$whitecolor: rgba(255, 255, 255, 0.75);
hr {
  border-color: $whitecolor;
}
ul {
  padding: 0 !important;
}
li:hover {
  transform: scale(1.25);
}
footer {
  background-color: $maincolor !important;
}
img{
  margin:0 2px !important;
}
</style>