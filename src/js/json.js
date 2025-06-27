export default {
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Análisis y planificación de redes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Requerimientos y especificaciones técnicas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Topologías y arquitecturas en red',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Dimensionamiento y escalabilidad',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Diseño de infraestructura',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Subsistemas de cableado estructurado',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Cuartos de telecomunicaciones',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Distribución y rutas de cableado',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Implementación de redes físicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Diagramas y documentación técnica',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Métodos de implementación',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Optimización y mejores prácticas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Estándares de calidad',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Documentación y entregables',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Gestión de proyectos',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Conclusiones',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228142_CF03_DU_V2.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  global: {
    Name: 'Cableado estructurado: diseño e implementación de redes',
    Description:
      'El diseño e implementación de redes de telecomunicaciones es base para la conectividad y eficiencia organizacional. El cableado estructurado, que incluye subsistema horizontal, vertical y de campus, es importante para soportar servicios de datos, voz y video.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [],
  },
}
