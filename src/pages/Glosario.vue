<template>
  <div class="curso-main-container glosario">
    <BannerInterno icono="fas fa-atlas" titulo="Glosario"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div
        v-for="letra in orderedData"
        :key="'letra-' + letra.letra"
        class="glosario__letra-item mb-2"
      >
        <div class="glosario__letra-item__letra me-4">
          <div class="glosario__letra-item__letra__icono">
            <span>{{ letra.letra }}</span>
          </div>
        </div>
        <div class="glosario__letra-item__texto">
          <p
            v-for="termino in letra.terminos"
            :key="termino.termino"
            class="mb-3"
          >
            <strong><i class="lista-ul__vineta"></i></strong
            ><strong v-html="termino.terminoHtml || termino.termino"> </strong
            ><strong>: </strong><span v-html="termino.significado"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import plantillaMixins from '@/js/plantillaMixins'
export default {
  name: 'Glosario',
  mixins: [plantillaMixins],
  data() {
    return {
      glosarioData: [
        {
          termino: 'Ancho de banda',
          significado:
            'Capacidad de una red para transferir datos en un período de tiempo determinado.',
        },
        {
          termino: 'Arquitectura de red',
          significado:
            'Estructura general de una red que define la organización y comunicación de sus componentes.',
        },
        {
          termino: 'Cableado estructurado',
          significado:
            'Infraestructura de telecomunicaciones que consiste en una serie de estándares para la instalación de cables en un edificio o campus.',
        },
        {
          termino: 'Cableado horizontal',
          significado:
            'Subsistema de cableado que conecta los dispositivos de usuario final con los puntos de distribución en el cuarto de telecomunicaciones.',
        },
        {
          termino: 'Cableado vertical',
          significado:
            'Subsistema de cableado que conecta los cuartos de telecomunicaciones en diferentes pisos o edificios.',
        },
        {
          termino: 'Cat5e',
          significado:
            'Tipo de cable de par trenzado no apantallado que ofrece una velocidad de transmisión de hasta 1 Gbps.',
        },
        {
          termino: 'Cat6',
          significado:
            'Tipo de cable de par trenzado no apantallado que soporta velocidades de transmisión de hasta 10 Gbps.',
        },
        {
          termino: 'Cat6a',
          significado:
            'Tipo de cable de par trenzado no apantallado que soporta velocidades de transmisión de hasta 10 Gbps y ofrece una mejor protección contra interferencias.',
        },
        {
          termino: 'Conectividad',
          significado:
            'Capacidad de los dispositivos de una red para comunicarse entre sí.',
        },
        {
          termino: 'Dispositivos de red',
          significado:
            'Componentes que aseguran la conectividad y el rendimiento de la red, como <em>switches</em>, <em>routers</em> y puntos de acceso.',
        },
        {
          termino: 'Distancia',
          significado:
            'Longitud del cable entre los dispositivos y los puntos de terminación.',
        },
        {
          termino: 'Documentación técnica',
          significado:
            'Conjunto de documentos que proporcionan una representación visual y escrita de la infraestructura de red.',
        },
        {
          termino: 'Escalabilidad',
          significado:
            'Capacidad de la red para crecer y adaptarse a cambios en la demanda sin una pérdida significativa de rendimiento.',
        },
        {
          termino: 'Fibra óptica',
          significado:
            'Tipo de cable que utiliza luz para transmitir datos, ofreciendo una mayor capacidad de transmisión y resistencia a interferencias.',
        },
        {
          termino: '<em>Firewall</em>',
          significado:
            'Dispositivo de <em>hardware</em> o <em>software</em> que protege la red contra amenazas externas.',
        },
        {
          termino: 'Interferencias',
          significado:
            'Perturbaciones electromagnéticas que afectan la transmisión de datos en cables de cobre.',
        },
        {
          termino: 'Redundancia',
          significado:
            'Implementación de componentes críticos duplicados para asegurar la continuidad del servicio en caso de fallos.',
        },
        {
          termino: '<em>Router</em>',
          significado:
            'Dispositivo de red que gestiona el tráfico entre diferentes segmentos de la red.',
        },
        {
          termino: '<em>Switch</em>',
          significado:
            'Dispositivo de red que proporciona conectividad y gestión de tráfico en la red.',
        },
        {
          termino: 'Topología de red',
          significado:
            'Disposición física y lógica de los dispositivos en una red.',
        },
      ],
    }
  },
  computed: {
    orderedData() {
      const newGlosarioData = [...this.glosarioData]
      newGlosarioData.forEach(element => {
        element.significado =
          element.significado.charAt(0).toLowerCase() +
          element.significado.slice(1)
      })

      const sortedData = [...newGlosarioData].reduce((r, e) => {
        const letra = this.quitarAcentos(e.termino.toLowerCase())[0]
        if (!r[letra]) r[letra] = { letra, terminos: [e] }
        else r[letra].terminos.push(e)
        return r
      }, {})

      const soloLetras = Object.keys(sortedData).sort()
      const newSortedData = []

      soloLetras.forEach(element => {
        const letraObj = sortedData[element]
        let terminos = letraObj.terminos

        if (terminos.length > 1) {
          const terminosOrdenados = []
          const soloTerminos = letraObj.terminos
            .map(termObj => termObj.termino)
            .sort((a, b) => {
              const an = this.quitarAcentos(a).toLowerCase()
              const bn = this.quitarAcentos(b).toLowerCase()
              if (an < bn) return -1
              if (bn < an) return 1
              return 0
            })
          soloTerminos.forEach(term => {
            terminosOrdenados.push(
              terminos.find(termino => termino.termino === term),
            )
          })
          terminos = terminosOrdenados
        }
        newSortedData.push({
          letra: letraObj.letra.toUpperCase(),
          terminos: terminos,
        })
      })
      return newSortedData
    },
  },
}
</script>

<style lang="sass">
.glosario
  &__letra-item
    display: flex
    &__texto
      padding-top: 5px
    &__letra
      &__icono
        width: 32px
        height: 32px
        position: relative
        line-height: 1em
        border-radius: 50%
        background-color: $color-sistema-d

        span
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%,-50%)
          font-size: 1.1em
          font-weight: $base-black-font-weight
</style>
