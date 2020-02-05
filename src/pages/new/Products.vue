<template>
  <Layout :showFooter="true">
    <h1>Produkty Pilz Polska</h1>
    <p>Na tej stronie znajdziecie Państwo informację o ofercie produktowej Pilz Polska.</p>
    <h2>
      <a
        target="_blank"
        rel="noopener"
        href="https://www.pilz.com/pl-PL/products-solutions/product-finder"
      >Wyszukiwarka produktów</a>
    </h2>
    <p>Najbardziej popularne produkty wszechczasów:</p>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noopener"
          href="https://www.pilz.com/pl-PL/products-solutions/automation-system-pss-4000"
        >System sterowania PSS 4000</a>
      </li>
    </ul>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Produkty",
    meta: [
      { charset: "utf-8" },
      { name: "author", content: "Pilz GmbH" },
      {
        name: "description",
        content:
          "Automatyzacja przemysłowa z wykorzystaniem urządzeń Pilz – dowiedz się więcej o naszych innowacyjnych produktach na potrzeby automatyzacji przemysłowej. - Pilz - PL"
      },
      {
        name: "keywords",
        content: "Automatyzacja w przemyśle, produkty dla automatyzacji"
      }
    ]
  }
};
</script>