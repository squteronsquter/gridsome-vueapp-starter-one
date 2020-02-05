<template>
  <Layout :showFooter="true">
    <h1>Co to jest Akademia Pilz</h1>
    <p>Akademia Pilz to platforma szkoleniowa firmy Pilz Polska.</p>
    <Footer></Footer>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "O nas",
    meta: [
      { charset: "utf-8" },
      { name: "author", content: "Pilz GmbH" },
      {
        name: "description",
        content:
          "Platforma szkoleniowa wspierająca automatyzację przemysłową z wykorzystaniem urządzeń Pilz – dowiedz się więcej o naszych innowacyjnych produktach na potrzeby automatyzacji przemysłowej. - Pilz - PL"
      },
      {
        name: "keywords",
        content:
          "Szkolenia na temat bezpieczeństwa w przemyśle, Automatyzacja w przemyśle, produkty dla automatyzacji"
      }
    ]
  }
};
</script>
