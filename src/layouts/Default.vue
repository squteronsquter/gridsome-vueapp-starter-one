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
    <slot />
    <Footer v-if="showFooter"></Footer>
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
  props: ["showFooter"]
};
</script>

<style>
body {
  background-color: #fff;
  color: #2a2a2a;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
.active {
  color: #fdb900;
}
a {
  color: black;
}
</style>
