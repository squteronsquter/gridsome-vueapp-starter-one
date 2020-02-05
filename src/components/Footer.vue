<template>
  <footer>
    Copyright &copy;{{getCurrentYear}} | All rights reserved by Akademia Pilz. Powered by
    <a
      :href="href"
    >Digital Mind Solutions LTD</a>
  </footer>
</template>

<script>
export default {
  data: () => ({
    href: "https://www.bydigitalmind.com"
  }),
  computed: {
    getCurrentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

