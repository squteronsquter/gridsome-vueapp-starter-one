<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link exact class="nav__link" to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link exact class="nav__link" to="/">Start</g-link>
        <g-link class="nav__link" to="/about/">O nas</g-link>
        <g-link exact class="nav__link" to="/new">Nowości</g-link>
        <g-link exact class="nav__link" to="/new/products/">Produkty</g-link>
      </nav>
    </header>
    <div class="innerWrapper">
      <slot />
    </div>
    <div>
      <Footer v-if="showFooter"></Footer>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Footer from "~/components/Footer.vue";
export default {
  metaInfo: {
    title: "Witamy"
  },
  components: {
    Footer
  },
  components: {
    Footer
  },
  props: ["showFooter"]
};
</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}
.body {
  background-color: #ffffff;
}
.layout {
  max-width: 960px;
  margin: 0 auto;
  padding-bottom: 0rem;
  padding-left: 0px;
  padding-right: 0px;
  height: 99vh;
}
.innerWrapper {
  background-color: #e9e9e9;
  padding: 2rem;
}

.header {
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}
nav {
  margin-right: 2rem;
}

.nav__link {
  margin-left: 20px;
}

.active {
  color: #fdb900;
  text-decoration: none;
}
a {
  color: black;
}
footer {
  background-color: #fdb900;
  bottom: 2rem;
  color: black;
  font-size: 0.625rem;
  letter-spacing: 0.5px;
  margin-top: 1rem;
}
.footer__links {
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 20rem;
}
.footer__bottom-links {
  padding: 1rem;
  text-align: center;
}
footer a {
  color: black;
}
.home-links a {
  margin-right: 1rem;
}
</style>
