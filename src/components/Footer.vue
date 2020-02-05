<template>
  <footer>
    <div class="footer__links">
      <div class="home-links">
        <a href="https://www.pilz.com/pl-PL" target="_blank" rel="noopener">Pilz Polska</a>
        <a href="https://www.pilz.com/en-INT" target="_blank" rel="noopener">Pilz GmbH & Co. KG</a>
      </div>
    </div>
    <div class="footer__bottom-links">
      Copyright &copy;{{getCurrentYear}} | All rights reserved by Akademia Pilz. Powered by
      <a
        :href="href"
      >Digital Mind Solutions LTD</a>
    </div>
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

