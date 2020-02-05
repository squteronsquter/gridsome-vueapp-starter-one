<template>
  <Layout>
    <h1>Co to jest Akademia Pilz</h1>
    <p>Akademia Pilz to platforma szkoleniowa firmy Pilz Polska.</p>
    <Footer></Footer>
  </Layout>
</template>

<script>
import Footer from "~/components/Footer.vue";
export default {
  metaInfo: {
    title: "O nas"
  },
  components: {
    Footer
  }
};
</script>
