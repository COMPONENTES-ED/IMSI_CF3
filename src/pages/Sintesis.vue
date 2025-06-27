<template>
  <div class="curso-main-container pb-3">
    <BannerInterno icono="fas fa-sitemap" titulo="Síntesis"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5">
      <p class="mb-5">
        El siguiente diagrama está organizado en tres secciones principales:
        análisis y planificación, diseño de infraestructura, e implementación de
        redes físicas. Cada sección contiene subcategorías que detallan los
        componentes y procesos involucrados, lo cual permite hacer relaciones
        entre las diferentes fases y componentes del diseño e implementación de
        redes. Esto facilita la comprensión visual de la información.
      </p>
      <p class="mb-5">
        Para comprender los elementos clave de este diagrama, el aprendiz puede
        analizar cómo las diferentes fases y componentes están
        interrelacionados. Por ejemplo, la sección de diseño de infraestructura
        está conectada con la sección de implementación de redes físicas,
        mostrando cómo la planificación y el diseño adecuados son necesarios
        para una implementación exitosa.
      </p>
      <p class="mb-5">
        Este diagrama proporciona una representación visual clara y organizada
        de los componentes y procesos involucrados en el diseño e implementación
        de redes, facilitando la comprensión y el uso de la información.
      </p>
      <div class="row justify-content-center">
        <div class="col-lg-10 mb-5">
          <figure>
            <img
              src="@/assets/curso/sintesis.svg"
              alt="La imagen muestra la «Síntesis temática del componente», allí se mencionan los principales temas tratados sobre el diseño e implementación de redes como el análisis y planificación, el diseño e infraestructura, la implementación de redes físicas y algunos subtemas que los integran."
            />
          </figure>
        </div>
        <div class="col-auto">
          <a
            class="anexo mb-5"
            :href="obtenerLink('/downloads/Sintesis.pdf')"
            target="_blank"
          >
            <div class="anexo__icono">
              <img src="@/assets/bullets/icono-pdf.svg" />
            </div>
            <div class="anexo__texto">
              <p>Anexo. Síntesis</p>
            </div></a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
