<template>
  <div class="curso-main-container introduccion">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero">
          <span><i class="fas fa-info"></i></span>
        </div>
        <h1>Introducción</h1>
      </div>
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-lg-8">
          <p>
            El diseño e implementación de redes de telecomunicaciones es un
            campo infalible en la era digital, donde la conectividad y la
            eficiencia de las redes aseguran el funcionamiento de cualquier
            organización. La infraestructura de cableado estructurado juega un
            papel indiscutible en este contexto, proporcionando una base sólida
            y flexible para soportar una amplia gama de servicios de
            telecomunicaciones, incluyendo datos, voz y video. Este tipo de
            cableado es diseñado para ser escalable y adaptable, permitiendo la
            fácil adición, movimiento o cambio de dispositivos y servicios sin
            necesidad de reconfigurar toda la red.
          </p>
          <div class="cajon color-primario bg1 p-4 mb-4">
            <p>
              A medida que avances en el módulo, comprenderás que la importancia
              del análisis y la planificación en el diseño de redes no puede ser
              subestimada. Estas fases permiten identificar los requerimientos
              específicos de la organización, seleccionar las topologías y
              arquitecturas adecuadas, y garantizar que la red sea escalable y
              eficiente. Una planificación adecuada asegura que la red cumpla
              con las necesidades actuales y futuras de la organización,
              optimizando el rendimiento y minimizando los costos. Los
              requerimientos y especificaciones técnicas, como la velocidad de
              transmisión, el tipo de cableado, los dispositivos de red y las
              medidas de seguridad, se necesitan para asegurar que la red cumpla
              con las necesidades de la organización.
            </p>
          </div>
          <div class="row justify-content-center align-items-center">
            <div class="col-sm-6 col-lg-3 mb-4 mb-lg-0">
              <img
                class="img-fluid img-a"
                src="@/assets/curso/temas/intro/img2.svg"
              />
            </div>
            <div class="col-lg-9">
              <p>
                Este componente tiene como objetivo proporcionar una comprensión
                integral del diseño e implementación de redes de
                telecomunicaciones, con un enfoque particular en el cableado
                estructurado. A través del análisis de los requerimientos y
                especificaciones técnicas, las topologías y arquitecturas de
                red, y el dimensionamiento y la escalabilidad, se busca ofrecer
                una guía práctica para los profesionales del campo.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4 mb-4 mb-lg-0">
          <img
            class="img-fluid img-a"
            src="@/assets/curso/temas/intro/img1.png"
          />
        </div>
      </div>
      <p>
        <b
          >¡Bienvenido a este viaje por cableado estructurado: diseño e
          implementación de redes!</b
        >
      </p>
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-12">
          <figure>
            <div class="video">
              <iframe
                width="1236"
                height="695"
                src="https://www.youtube.com/embed/maMKMw_m5jA?si=SmVEmJN-J92bu0S9"
                title="Fuentes y técnicas de recolección de datos para análisis"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen="allowfullscreen"
              ></iframe>
            </div>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
