<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <!-- Brand logo -->
    <b-navbar-brand href="/">DOSCG</b-navbar-brand>

    <!-- Toggle hamburger menu -->
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/">Home</b-nav-item>
        <b-nav-item href="/findXYZ">Find XYZ</b-nav-item>
        <b-nav-item href="/findBC">Find BC</b-nav-item>
        <b-nav-item href="/findDistance">Find Distance</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="scss" scoped>
$maincolor:#03b6fc ;
nav {
  background-color: $maincolor !important;
}
.navbar-dark .navbar-nav .nav-link {
  cursor: pointer;
  color: rgba(255, 255, 255, 1) !important;
}

.navbar-dark .navbar-nav .nav-link:hover {
  border-bottom: 0.5px solid rgba(255, 255, 255, 1);
  padding-bottom: 0;
}
</style>>

