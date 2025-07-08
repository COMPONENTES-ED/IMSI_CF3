<template>
  <div class="curso-main-container complementario">
    <BannerInterno
      icono="far fa-folder-open"
      titulo="Material complementario"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th colspan="3" scope="col">Tema</th>
              <th colspan="5" scope="col">Referencia APA del material</th>
              <th colspan="2" scope="col">Tipo</th>
              <th colspan="2" scope="col">Enlace</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in computedData"
              :key="'complementario-' + index"
            >
              <td
                class="text-start"
                colspan="3"
                scope="row"
                v-html="item.tema"
              ></td>
              <td
                class="text-start"
                colspan="5"
                scope="row"
                v-html="item.referencia"
              ></td>
              <td colspan="2" v-html="item.tipo"></td>
              <td colspan="2">
                <div class="complementario__enlaces">
                  <a
                    v-for="(link, linkIndex) of item.link"
                    :key="linkIndex"
                    class="complementario__btn"
                    :href="link"
                    target="_blank"
                    ><i class="fas fa-external-link-alt"></i
                  ></a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MaterialComplementario',
  computed: {
    complementarioData() {
      return [
        {
          tema: '1. Análisis y planificación de redes',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2021, 30 marzo). Conceptos básicos y componentes de una red [Vídeo]. YouTube. https://www.youtube.com/watch?v=Rr8POxBrOlo',
          tipo: 'Video',
          link:
            'https://www.youtube.com/watch?v=Rr8POxBrOlo&list=PLkc5n6npRWkhW66Y8rGD6IOF2dZUDiApU&index=3',
        },
        {
          tema: '2. Diseño de infraestructura',
          referencia:
            'Leonardo Duarte. (2016, 31 julio). Cableado estructurado [Vídeo]. YouTube. https://www.youtube.com/watch?v=9G6fxwp9Ix4 ',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=9G6fxwp9Ix4',
        },
        {
          tema: '2. Diseño de infraestructura',
          referencia:
            'William Hernández Hernández. (2020, 27 noviembre). Cableado Estructurado [Vídeo]. YouTube. https://www.youtube.com/watch?v=Y9Od-Tmm688 ',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=Y9Od-Tmm688',
        },
        {
          tema: '3. Implementación de redes físicas',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023, octubre 30). Gestión de recursos tecnológicos [Vídeo]. YouTube. https://www.youtube.com/watch?v=bkxr4xMfNJM',
          tipo: 'Video',
          link:
            'https://www.youtube.com/watch?v=slz86MF43YE&list=PLkc5n6npRWkhW66Y8rGD6IOF2dZUDiApU&index=27',
        },
        {
          tema: '4. Optimización y mejores prácticas',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023, octubre 30). Gestión de dispositivos de red [Vídeo]. YouTube. https://www.youtube.com/watch?v=slz86MF43YE ',
          tipo: 'Video',
          link:
            'https://www.youtube.com/watch?v=bkxr4xMfNJM&list=PLkc5n6npRWkhW66Y8rGD6IOF2dZUDiApU&index=23',
        },
      ]
    },
    computedData() {
      const data = this.complementarioData
      return data.map(item => {
        let nuevoLink = []
        if (item.link) {
          if (typeof item.link === 'string') {
            nuevoLink.push(item.link)
          } else {
            nuevoLink = item.link
          }
        } else if (item.descarga) {
          if (typeof item.descarga === 'string') {
            nuevoLink.push(this.obtenerLink(item.descarga))
          } else {
            item.descarga.forEach(link => {
              nuevoLink.push(this.obtenerLink(link))
            })
          }
        }
        return {
          ...item,
          link: nuevoLink,
        }
      })
    },
  },
}
</script>

<style lang="sass">
.complementario
  &__enlaces
    display: flex
    justify-content: center
    flex-wrap: wrap
    a
      margin: 0 5px
  &__btn
    font-size: 1.5em
    line-height: 1em
table
  width: calc(100% - 1px)
  min-width: 800px
  thead
    background-color: $color-sistema-e
    th
      border-color: $color-sistema-e
  th, td
    padding: 25px 20px
    text-align: center
</style>
