<template>
  <div class="curso-main-container referencias">
    <BannerInterno
      icono="fas fa-book"
      titulo="Referencias bibliográficas"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div v-for="ref in orderedData" :key="ref.link" class="referencias__item">
        <span v-html="ref.referencia"></span
        ><a v-if="ref.link" class="ms-1" :href="ref.link" target="_blank"
          ><span v-html="ref.link"></span
          ><i class="ms-1 fas fa-external-link-alt"></i
        ></a>
        <hr class="my-3" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Referencias',
  data: () => ({
    referencias: [
      {
        referencia:
          'Bates, R., Gregory, J., & Peters, G. (2015). <em>Networking Essentials: A CompTIA Network+ N10-006 Textbook</em>.',
        link: '',
      },
      {
        referencia:
          'Cisco Systems. (2020). <em>Cisco Networking Academy: CCNA Routing and Switching</em>.',
        link: '',
      },
      {
        referencia:
          'Davis, J., & Lewis, T. (2016). <em>Networking for Dummies</em>.',
        link: '',
      },
      {
        referencia:
          'ISO/IEC. (2017). ISO/IEC 11801: <em>Information technology — Generic cabling for customer premises</em>.',
        link: '',
      },
      {
        referencia:
          'Kurose, J. F., & Ross, K. W. (2017). <em>Computer Networking: A Top-Down Approach</em>.',
        link: '',
      },
      {
        referencia:
          'Odom, W. (2017). <em>Cisco CCNA Routing and Switching 200-125 Official Cert Guide Library</em>.',
        link: '',
      },
      {
        referencia:
          'Park, K., & Miller, J. (2016). <em>Network+ Guide to Networks</em>.',
        link: '',
      },
      {
        referencia:
          'TIA/EIA. (2017). TIA/EIA-568: <em>Commercial Building Telecommunications Cabling Standard</em>.',
        link: '',
      },
      {
        referencia: 'Tanenbaum, A. S. (2011). <em>Computer Networks</em>.',
        link: '',
      },
      {
        referencia: 'White, R. (2015). <em>How Computers Work</em>.',
        link: '',
      },
    ],
  }),
  computed: {
    orderedData() {
      return [...this.referencias].sort((a, b) => {
        const afl = this.quitarAcentos(a.referencia.split(' ')[0].toLowerCase())
        const bfl = this.quitarAcentos(b.referencia.split(' ')[0].toLowerCase())
        if (afl < bfl) return -1
        if (afl > bfl) return 1
        return 0
      })
    },
  },
  methods: {
    quitarAcentos(str) {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    },
  },
}
</script>

<style lang="sass">
.referencias
  &__item
    &:last-child
      hr
        display: none
    a
      color: $blue
      text-decoration: underline
      overflow-wrap: break-word
</style>
