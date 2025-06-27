<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Análisis y planificación de redes
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-6.col-lg-2.mb-4.mb-lg-0
        img.img-fluid.img-a(src='@/assets/curso/temas/tema1/img1.svg')
      .col-lg-7
        p El análisis y la planificación de redes son etapas en el diseño de una infraestructura de cableado estructurado. Estas fases permiten identificar los requerimientos específicos, seleccionar las topologías y arquitecturas adecuadas, y garantizar que la red sea escalable y eficiente. Una planificación adecuada asegura que la red cumpla con las necesidades actuales y futuras de la organización, optimizando el rendimiento y minimizando los costos. 
      .col-lg-3
        img.img-fluid.img-a(src='@/assets/curso/temas/tema1/img2.png')
    Separador
    #t_1_1.titulo-segundo.color-acento-botones.mt-5
      h2 1.1 Requerimientos y especificaciones técnicas
    p.mb-5 Los requerimientos y especificaciones técnicas sirven para asegurar que la red cumpla con las necesidades de la organización. Estos incluyen aspectos críticos como la velocidad de transmisión, el tipo de cableado, los dispositivos de red y las medidas de seguridad. A continuación, se profundiza en cada uno de estos aspectos.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .titulovi.mb-4
          h5.order-2.mb-0.p-1 Velocidad de transmisión
          .imgicon.order-1
            img(src='@/assets/curso/temas/tema1/imgicono.png', alt='Imagen decorativa')
          
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        p La velocidad de transmisión determina la capacidad de la red para manejar grandes volúmenes de datos. Esta característica es base para soportar aplicaciones críticas y servicios de alta demanda, como videoconferencias, transferencias de archivos grandes, aplicaciones en la nube y sistemas de gestión empresarial. La velocidad de transmisión se mide en megabits por segundo (Mbps) o gigabits por segundo (Gbps) y debe ser seleccionada en función de las necesidades específicas de la organización.
      .col-sm-6.col-lg-2.mb-4.mb-lg-0.d-lg-block.d-none
        img(src='@/assets/curso/temas/tema1/img3.svg', alt='Imagen decorativa')
    
    .row.justify-content-center.align-items-center.mrgbt
      .col-lg-12
        .titulovi.mb-4
          h5.order-2.mb-0.p-1 Factores para tener en cuenta
          .imgicon.order-1
            img(src='@/assets/curso/temas/tema1/imgicono.png', alt='Imagen decorativa')
    
    .row.justify-content-center.mb-5
      .col-lg-4
        .tarjeta.bg2.brad.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-sm-6.col-lg-6.mb-4.mb-lg-0.d-lg-block.d-none
              img.imgfig(src='@/assets/curso/temas/tema1/img4.svg' alt='AvatarTop')
          p 
            b Aplicaciones críticas: 
            | identificar las aplicaciones que requieren alta velocidad de transmisión, como sistemas de videoconferencia, aplicaciones de colaboración en tiempo real y servicios de #[em streaming.]

      .col-lg-4
        .tarjeta.bg2.brad.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-sm-6.col-lg-5.mb-4.mb-lg-0.d-lg-block.d-none
              img.imgfig(src='@/assets/curso/temas/tema1/img5.svg' alt='AvatarTop')
          p 
            b Número de usuarios: 
            | evaluar el número de usuarios concurrentes y el tipo de tráfico que generan. Una red con muchos usuarios requerirá una mayor velocidad de transmisión para evitar cuellos de botella.

      .col-lg-4
        .tarjeta.bg2.brad.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-sm-6.col-lg-9.mb-4.mb-lg-0
              img.imgfig(src='@/assets/curso/temas/tema1/img6.svg' alt='AvatarTop')
          p 
            b Crecimiento futuro: 
            | considerar el crecimiento futuro de la organización y planificar la velocidad de transmisión en consecuencia. Esto asegura que la red pueda escalar sin necesidad de costosas actualizaciones.
        
   
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .titulovi.mb-4
          h5.order-2.mb-0.p-1 Velocidades de transmisión
          .imgicon.order-1
            img(src='@/assets/curso/temas/tema1/imgicono.png', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        TabsA.color-acento-botones.mb-5
          .tarjeta.brad.p-4(titulo="100 Mbps")
            p Adecuado para pequeñas oficinas con aplicaciones básicas de internet y correo electrónico.
          .tarjeta.brad.p-4(titulo="1 Gbps")
            p Ideal para medianas empresas con aplicaciones de videoconferencia y transferencia de archivos grandes.
          .tarjeta.brad.p-4(titulo="10 Gbps")
            p Necesario para grandes empresas y centros de datos con aplicaciones de alta demanda y grandes volúmenes de datos.
      .col-lg-5
        img(src='@/assets/curso/temas/tema1/img7.png' alt='AvatarTop')

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .titulovi.mb-4
          h5.order-2.mb-0.p-1 Tipo de cableado
          .imgicon.order-1
            img(src='@/assets/curso/temas/tema1/imgicono.png', alt='Imagen decorativa')
    p.mb-4 La selección del tipo de cableado es importante para asegurar que la red cumpla con las necesidades de distancia y ancho de banda. Los cables de cobre y fibra óptica son las opciones más comunes, cada una con sus propias ventajas y desventajas.

    .titulo-segundo.titseg
      h4 Cables de cobre

    .row.justify-content-center.mb-5
      .col-lg-4.mb-4
        .tarjeta--boton.color-acento-contenido.p-4.h-100
          .row.mb-3
            .col-3
              figure
                img(src='@/assets/curso/temas/tema1/img9.svg' alt='Imagen decorativa')
          p
            b Cat5e: 
            | ofrece una velocidad de transmisión de hasta 1 Gbps y es adecuado para distancias de hasta 100 metros. Es una opción económica para pequeñas y medianas empresas.
      .col-lg-4.mb-4
        .tarjeta--boton.color-acento-contenido.p-4.h-100
          .row.mb-3
            .col-3
              figure
                img(src='@/assets/curso/temas/tema1/img9.svg' alt='Imagen decorativa')
          p
            b Cat6: 
            | soporta velocidades de transmisión de hasta 10 Gbps y es adecuado para distancias de hasta 100 metros. Es una opción más robusta y ofrece una mejor protección contra interferencias.
      .col-lg-4
        .tarjeta--boton.color-acento-contenido.p-4.h-100
          .row.mb-3
            .col-3
              figure
                img(src='@/assets/curso/temas/tema1/img9.svg' alt='Imagen decorativa')
          p
            b Cat6a: 
            | soporta velocidades de transmisión de hasta 10 Gbps y es adecuado para distancias de hasta 100 metros. Ofrece una mejor protección contra interferencias y es ideal para aplicaciones de alta demanda.
    
    .titulo-segundo.titseg
      h4 Fibra óptica
    .row.justify-content-center.mb-5
      .col-lg-6.mb-4
        .tarjeta
          .tarjeta.bg4.w-100.p-4
            .row.justify-content-center.align-items-center
              .col-sm-2.col-lg-4.mb-4.mb-lg-0
                img(src='@/assets/curso/temas/tema1/img10.svg' alt='Imagen decorativa')
              .col-lg-8 
                p 
                  b Multimodo: 
                  | utiliza múltiples longitudes de onda de luz para transmitir datos y es adecuado para distancias de hasta 2 kilómetros. Es ideal para aplicaciones de alta demanda y ofrece una mayor capacidad de transmisión.
      .col-lg-6
        .tarjeta
          .tarjeta.bg4.w-100.p-4
            .row.justify-content-center.align-items-center
              .col-sm-2.col-lg-4.mb-4.mb-lg-0
                img(src='@/assets/curso/temas/tema1/img11.svg' alt='Imagen decorativa')
              .col-lg-8
                p 
                  b Monomodo: 
                  | utiliza una sola longitud de onda de luz para transmitir datos y es adecuado para distancias de hasta 40 kilómetros. Es ideal para aplicaciones de larga distancia y ofrece una mayor capacidad de transmisión.
    
    p.mb-5 Este tipo de cableado tiene unas particularidades las cuales pueden afectar o potenciar su utilidad. Estas son:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        TabsA.color-acento-botones.mb-5
          .tarjeta.brad.p-4(titulo="Distancia")
            p Evaluar la distancia entre los dispositivos y los puntos de terminación. Los cables de cobre son adecuados para distancias cortas y medianas, mientras que la fibra óptica es ideal para largas distancias.
          .tarjeta.brad.p-4(titulo="Ancho de <br>Banda")
            p Determinar el ancho de banda necesario para soportar las aplicaciones y servicios de la organización. Los cables de cobre ofrecen un ancho de banda limitado, mientras que la fibra óptica ofrece un ancho de banda mucho mayor.
          .tarjeta.brad.p-4(titulo="Interferencias")
            p Considerar el entorno físico y las posibles interferencias electromagnéticas. Los cables de cobre son susceptibles a interferencias, mientras que la fibra óptica es inmune a ellas.
      .col-lg-5
        img(src='@/assets/curso/temas/tema1/img12.png' alt='AvatarTop')



    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .titulovi.mb-4
          h5.order-2.mb-0.p-1 Dispositivos de red
          .imgicon.order-1
            img(src='@/assets/curso/temas/tema1/imgicono.png', alt='Imagen decorativa')
    p.mb-5 Los dispositivos de red son componentes que aseguran la conectividad y el rendimiento de la red. Estos incluyen #[i switches], #[i routers], puntos de acceso y otros equipos necesarios.

    .titulo-segundo.titseg
      h4 #[i Switches]

    .row.justify-content-center.mb-4   
      .col-lg-9.my-lg-0.my-3
        AccordionRED(tipo="a" clase-tarjeta="tarjeta")
          div(titulo="<em>Switches</em> de capa 2")
            p Operan en la capa de enlace de datos del modelo OSI y son adecuados para redes pequeñas y medianas. Proporcionan conectividad básica y gestión de tráfico.
          div(titulo="<em>Switches</em> de capa 3")
            p Operan en la capa de red del modelo OSI y son adecuados para redes grandes y complejas. Proporcionan funcionalidades avanzadas como enrutamiento, calidad de servicio (QoS) y seguridad.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/tema1/img13.png' alt='')    



    .titulo-segundo.titseg
      h4 #[i Routers]
    
    .row.justify-content-center.mb-5
      .col-lg-6.mb-4
        .tarjeta
          .tarjeta.bg3.w-100.p-4
            .row.justify-content-center.align-items-center
              .col-sm-4.col-lg-4.mb-4.mb-lg-0
                img(src='@/assets/curso/temas/tema1/img14.svg' alt='Imagen decorativa')
              .col-lg-8 
                p 
                  b #[i Routers] de bordes: 
                  | utilizados para conectar la red interna con redes externas, como internet. Proporcionan funcionalidades de enrutamiento, seguridad y gestión de tráfico.
      .col-lg-6.mb-4
        .tarjeta
          .tarjeta.bg3.w-100.p-4
            .row.justify-content-center.align-items-center
              .col-sm-4.col-lg-4.mb-4.mb-lg-0
                img(src='@/assets/curso/temas/tema1/img15.svg' alt='Imagen decorativa')
              .col-lg-8
                p 
                  b #[i Routers] de núcleo: 
                  | utilizados en el centro de la red para gestionar el tráfico entre diferentes segmentos de la red. Proporcionan funcionalidades avanzadas como enrutamiento dinámico y calidad de servicio (QoS).

    .titulo-segundo.titseg
      h4 Puntos de acceso

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-4.col-lg-3.mb-4.mb-lg-0
        img(src='@/assets/curso/temas/tema1/img16.svg' alt='Imagen decorativa')
      .col-lg-8.bg6.p-4
        .row.justify-content-center.align-items-center.mb-3
          .col-sm-2.col-lg-1.mb-4.mb-lg-0
            img(src='@/assets/curso/temas/tema1/img17.svg' alt='Imagen decorativa')
          .col-lg-11
            p
              b Puntos de acceso Wi-Fi: 
              | proporcionan conectividad inalámbrica a los dispositivos de la red. Deben ser seleccionados en función de la cobertura, la capacidad y las características de seguridad.
        
        .row.justify-content-center.align-items-center.mb-3
          .col-sm-2.col-lg-1.mb-4.mb-lg-0
            img(src='@/assets/curso/temas/tema1/img18.svg' alt='Imagen decorativa')
          .col-lg-11
            p
              b Puntos de acceso PoE: 
              | proporcionan conectividad inalámbrica y alimentación eléctrica a través del cable ethernet. Son ideales para dispositivos que requieren alimentación continua, como cámaras de vigilancia y teléfonos IP.
    


    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .titulovi.mb-4
          h5.order-2.mb-0.p-1 Medidas de seguridad
          .imgicon.order-1
            img(src='@/assets/curso/temas/tema1/imgicono.png', alt='Imagen decorativa')
    p.mb-4 Las medidas de seguridad se utilizan para proteger la red contra accesos no autorizados y amenazas externas. Estas incluyen #[i firewalls], sistemas de detección de intrusos (IDS) y autenticación de usuarios. La Tabla 1 profundiza las clases y características de cada una:

    .titulo-sexto.color-acento-contenido.offset-0
      h5 Tabla 1. 
      span Tipos y características de las medidas de seguridad

    .tabla-a.color-acento-contenido.text-center.mb-5
      table
        caption Fuente: OIT, 2024.
        thead
          tr(style="background-color:#E0D4F0")
            th Medidas
            th Tipo 1
            th Tipo 2
        tbody
          tr
            td.bg7.fast-bold.h5 #[i Firewalls]
            td 
              p 
                b #[i Firewalls] de #[i hardware]:  
                | dispositivos físicos que se instalan en el borde de la red para protegerla contra amenazas externas. Proporcionan funcionalidades de filtrado de paquetes, inspección de estado y prevención de intrusos.
            td 
              p 
                b #[i Firewalls] de #[i software]:  
                | aplicaciones que se instalan en los dispositivos de la red para protegerlos contra amenazas internas y externas. Proporcionan funcionalidades de filtrado de paquetes, inspección de estado y prevención de intrusos.
          tr
            td.bg7.fast-bold.h5 Sistemas de Detección de Intrusos (IDS)
            td
              p 
                b IDS basados en red: 
                | monitorean el tráfico de la red en busca de actividades sospechosas y alertan a los administradores de posibles intrusiones.

            td
              p 
                b IDS basados en #[em host]: 
                | monitorean las actividades en los dispositivos individuales en busca de actividades sospechosas y alertan a los administradores de posibles intrusiones.
          
          tr
            td.bg7.fast-bold.h5 Autenticación de usuarios
            td
              p.text-left
                b Autenticación multifactor (MFA): 
                | requiere múltiples formas de autenticación, como contraseñas, tokens de #[i hardware] y biometría, para verificar la identidad de los usuarios.

            td
              p
                b Autenticación basada en certificados: 
                | utiliza certificados digitales para verificar la identidad de los usuarios y dispositivos. Proporciona un alto nivel de seguridad y es ideal para redes corporativas.
          
    Separador
    #t_1_2.titulo-segundo.color-acento-botones.mt-5
      h2 1.2 Topologías y arquitecturas en red
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p Las topologías de red describen la disposición física y lógica de los dispositivos en una red, mientras que las arquitecturas de red se refieren a la estructura general de la red, incluyendo la organización de los componentes y la forma en que se comunican entre sí. Ambas hacen parte del diseño y la implementación de redes eficientes y efectivas.
      .col-lg-5
        img(src='@/assets/curso/temas/tema1/img19.png' alt='Imagen decorativa')

    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .titulovi.mb-4
          h5.order-2.mb-0.p-1 Topologías de red
          .imgicon.order-1
            img(src='@/assets/curso/temas/tema1/imgicono.png', alt='Imagen decorativa')

    p.mb-4 Las topologías de red determinan cómo se conectan los dispositivos entre sí y cómo se transmite la información a través de la red. Existen varias topologías de red, cada una con sus propias características y aplicaciones.
    
    .titulo-segundo.titseg
      h4 Características de las topologías de red
    CarouselCard.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.tarjeta--boton.p-4
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/temas/tema1/img20.svg' alt='AvatarTop')
        h5.text-center Disposición física
        p.text-center Define la forma en que los cables y dispositivos están físicamente conectados.
      .tarjeta.tarjeta--boton.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img21.svg' alt='AvatarTop')
        h5.text-center Disposición lógica
        p.text-center Describe cómo se transmite la información entre los dispositivos, independientemente de la disposición física.

      .tarjeta.tarjeta--boton.p-4
        .row.justify-content-center.mb-5
          .col-8
            img(src='@/assets/curso/temas/tema1/img22.svg' alt='AvatarTop')
        h5.text-center Escalabilidad
        p.text-center Capacidad de la topología para adaptarse a cambios en la red, como la adición de nuevos dispositivos.
      
      .tarjeta.tarjeta--boton.p-4
        .row.justify-content-center.mb-5
          .col-9
            img(src='@/assets/curso/temas/tema1/img23.svg' alt='AvatarTop')
        h5.text-center Tolerancia a fallos
        p.text-center Capacidad de la topología para mantener la funcionalidad de la red en caso de fallos en los dispositivos o conexiones.


    .titulo-segundo.titseg
      h4 Clases de topologías de red
    p.mb-4 Las topologías se clasifican de acuerdo con sus características y funcionalidad en varios grupos.


    .row.justify-content-center.mb-5  
      .col-lg-10.my-lg-0.my-3
        AccordionRED(tipo="a" clase-tarjeta="tarjeta")
          div(titulo="Topología en estrella")
            ul.lista-ul
              li
                i.fas.fa-life-ring
                | #[b Descripción:] todos los dispositivos están conectados a un punto central, generalmente un #[em hub] o un #[i switch].
              li
                i.fas.fa-life-ring
                | #[b Ventajas:] facilidad de instalación y gestión, aislamiento de problemas.
              li
                i.fas.fa-life-ring
                | #[b Desventajas:] dependencia del nodo central, costo del cableado.
          div(titulo="Topología en anillo")
            ul.lista-ul
              li
                i.fas.fa-life-ring
                | #[b Descripción:] cada dispositivo está conectado a exactamente dos otros dispositivos, formando un anillo.
              li
                i.fas.fa-life-ring
                | #[b Ventajas:] acceso equitativo a los recursos, fácil de expandir.
              li
                i.fas.fa-life-ring
                | #[b Desventajas:] difícil de instalar y mantener, un solo fallo puede afectar a toda la red.
            
          div(titulo="Topología en bus")
            ul.lista-ul
              li
                i.fas.fa-life-ring
                | #[b Descripción:] todos los dispositivos están conectados a un único cable central.
              li
                i.fas.fa-life-ring
                | #[b Ventajas:] fácil de instalar, requiere menos cableado.
              li
                i.fas.fa-life-ring
                | #[b Desventajas:] difícil de aislar problemas, un fallo en el cable puede afectar a toda la red.
          div(titulo="Topología en malla")
            ul.lista-ul
              li
                i.fas.fa-life-ring
                | #[b Descripción:] cada dispositivo está conectado a todos los demás dispositivos.
              li
                i.fas.fa-life-ring
                | #[b Ventajas:] alta tolerancia a fallos, rutas múltiples para la transmisión de datos.
              li
                i.fas.fa-life-ring
                | #[b Desventajas:] compleja de instalar y mantener, requiere mucho cableado.

          div(titulo="Topología híbrida")
            ul.lista-ul
              li
                i.fas.fa-life-ring
                | #[b Descripción:] combinación de dos o más topologías.
              li
                i.fas.fa-life-ring
                | #[b Ventajas:] flexibilidad, puede adaptarse a diferentes necesidades.
              li
                i.fas.fa-life-ring
                | #[b Desventajas:] complejidad en el diseño y mantenimiento.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-12
            .titulovi.mb-4
              h5.order-2.mb-0.p-1 Arquitecturas de red
              .imgicon.order-1
                img(src='@/assets/curso/temas/tema1/imgicono.png', alt='Imagen decorativa')
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-3
            img(src='@/assets/curso/temas/tema1/img23.png' alt='AvatarTop')
          .col-lg-9
            p Las arquitecturas de red se refieren a la estructura general de la red y cómo se organizan y comunican los componentes. Existen varias arquitecturas de red, cada una diseñada para satisfacer diferentes necesidades y requisitos.
      .col-lg-4
        img(src='@/assets/curso/temas/tema1/img24.png' alt='AvatarTop')
    
    .titulo-segundo.titseg
      h4 Características de las arquitecturas de red
  
    .row.bg8.align-items-center.mb-5
      .px-lg-5.px-4
        .bgw.brad.p-5.my-5
          CarouselRED(tipo="b")
            .row.justify-content-center
              .col-lg-6.my-2
                h5.mb-4 Organización en capas 
                p La red se organiza en capas, cada una con una función específica, lo que facilita la gestión y la escalabilidad. Esta organización permite que cada capa se enfoque en tareas específicas, como la conexión de usuarios finales en la capa de acceso, la agregación y enrutamiento en la capa de distribución, y la interconexión de redes en la capa de núcleo. Esta estructura modular facilita la identificación y resolución de problemas, así como la adición de nuevos dispositivos y servicios sin afectar el rendimiento general de la red.
              
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/curso/temas/tema1/img25.png', alt='')    
            .row.justify-content-center
              .col-lg-6.my-2
                h5.mb-4 Modularidad
                p La red se divide en módulos que pueden ser fácilmente añadidos, eliminados o modificados según sea necesario. La modularidad permite una mayor flexibilidad y adaptabilidad, ya que los cambios en una parte de la red no afectan a otras partes. Esto es especialmente útil en entornos donde la red debe adaptarse rápidamente a nuevas demandas o tecnologías. La modularidad también facilita la gestión y el mantenimiento, ya que los problemas pueden ser aislados y resueltos de manera más eficiente.
                
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/curso/temas/tema1/img26.png', alt='')    
            .row.justify-content-center
              .col-lg-6.my-2
                h5.mb-4 Redundancia
                p Implementación de redundancia para mejorar la tolerancia a fallos y la disponibilidad de la red. La redundancia implica la duplicación de componentes críticos, como enlaces de red y dispositivos, para asegurar que la red siga funcionando incluso si uno de los componentes falla. Esto es importante en entornos donde la disponibilidad de la red es crítica, como en centros de datos y redes empresariales. La redundancia también puede incluir la implementación de rutas alternativas para la transmisión de datos, lo que mejora la resiliencia de la red.
              
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/curso/temas/tema1/img27.png', alt='')    
            .row.justify-content-center
              .col-lg-6.my-2
                h5.mb-4 Gestión de recursos
                p Implementación de herramientas y políticas para gestionar eficientemente los recursos de la red y así asegurar un rendimiento óptimo. La gestión de recursos incluye el monitoreo de la red para detectar problemas y optimizar el rendimiento, el balanceo de carga para distribuir el tráfico de manera equitativa, y la priorización de tráfico para asegurar que las aplicaciones críticas reciban el ancho de banda necesario. Estas prácticas ayudan a maximizar la eficiencia y la efectividad de la red, asegurando que los recursos se utilicen de la mejor manera posible.
              
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/curso/temas/tema1/img28.png', alt='')    


    .titulo-segundo.titseg
      h4 Clases de arquitecturas de red
    
    .titulo-sexto.color-acento-contenido.offset-0
      h5 Tabla 2. 
      span Clases de arquitecturas y características diversas

    .tabla-a.color-acento-contenido.text-center.mb-5
      table
        caption Fuente: OIT, 2024.
        thead
          tr(style="background-color:#E0D4F0")
            th Formato
            th Descripción
            th Ventajas 
            th Desventajas
        tbody
          tr
            td.bg7.fast-bold.h5 Arquitectura de red jerárquica
            td 
              p La red se organiza en capas, como la capa de acceso, la capa de distribución y la capa de núcleo.
            td 
              p Facilita la gestión y escalabilidad, aislamiento de problemas.
            td
              p Puede ser compleja de diseñar e implementar.
          tr
            td.bg7.fast-bold.h5 Arquitectura de red plana
            td
              p Todos los dispositivos están en el mismo nivel y pueden comunicarse directamente entre sí.

            td
              p Simple y fácil de implementar.
            
            td
              p Difícil de gestionar y escalar, problemas de rendimiento a medida que la red crece.
          
          tr
            td.bg7.fast-bold.h5 Arquitectura de red en campus
            td
              p Diseñada para grandes áreas geográficas, como universidades o parques empresariales

            td
              p Alta escalabilidad y flexibilidad.
            td
              p Complejidad en el diseño y mantenimiento.
 
    
    Separador
    #t_1_3.titulo-segundo.color-acento-botones.mt-5
      h2 1.3 Dimensionamiento y escalabilidad

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        img.img-a.img-t(src='@/assets/curso/temas/tema1/img29.png', alt='')    
      .col-lg-9
        p El dimensionamiento y la escalabilidad son aspectos en el diseño y la planificación de redes. El dimensionamiento se refiere a la determinación de los recursos necesarios para soportar las necesidades actuales y futuras de la red, mientras que la escalabilidad se refiere a la capacidad de la red para crecer y adaptarse a cambios en la demanda sin una pérdida significativa de rendimiento.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .titulovi.mb-4
          h5.order-2.mb-0.p-1 Características del dimensionamiento y la escalabilidad
          .imgicon.order-1
            img(src='@/assets/curso/temas/tema1/imgicono.png', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        TabsA.color-acento-botones.mb-5
          .tarjeta.brad.p-4(titulo="Evaluación de necesidades")
            h5 Evaluación de necesidades
            p La evaluación de necesidades implica identificar los requisitos actuales y futuros de la red, incluyendo el número de usuarios, dispositivos y aplicaciones. Esto se realiza mediante análisis de tráfico, encuestas a usuarios y evaluaciones de aplicaciones. La evaluación de necesidades ayuda a determinar los recursos necesarios y planificar la expansión de la red.
          .tarjeta.brad.p-4(titulo="Selección de equipos")
            p La selección de equipos implica elegir los dispositivos de red adecuados, como #[i switches], #[i routers] y puntos de acceso, basándose en las necesidades evaluadas. La selección debe considerar la capacidad de puerto, el rendimiento, las características de seguridad y la compatibilidad con otros dispositivos de la red. La correcta selección de equipos asegura que la red pueda soportar las demandas actuales y futuras.
          .tarjeta.brad.p-4(titulo="Diseño de la topología")
            p El diseño de la topología implica determinar la topología de red más adecuada para satisfacer los requisitos de la red. La topología debe ser flexible y escalable, permitiendo la fácil adición de nuevos dispositivos y servicios. El diseño de la topología debe considerar la facilidad de gestión, la tolerancia a fallos y la capacidad de expansión.
          .tarjeta.brad.p-4(titulo="Planificación de capacidad")
            h5 Planificación de capacidad
            p La planificación de capacidad implica realizar una planificación continua para anticipar y satisfacer las necesidades futuras de la red. Esto incluye análisis de tendencias, simulaciones de crecimiento y evaluaciones periódicas. La planificación de capacidad asegura que la red pueda adaptarse a cambios en la demanda y mantener un rendimiento óptimo.
      .col-lg-3
        img(src='@/assets/curso/temas/tema1/img30.png' alt='AvatarTop')

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .titulovi.mb-4
          h5.order-2.mb-0.p-1 Clases de dimensionamiento y escalabilidad
          .imgicon.order-1
            img(src='@/assets/curso/temas/tema1/imgicono.png', alt='Imagen decorativa')

    CarouselCard.mb-5(columnas="col-lg-6 col-xl-6")
      .tarjeta.tarjeta--tres.p-4
        .row.mb-3
          .col-2
            img(src='@/assets/curso/temas/tema1/img31.svg' alt='AvatarTop')
        h5 Dimensionamiento vertical
        p El dimensionamiento vertical implica añadir más recursos a un dispositivo existente para mejorar su capacidad. Esto puede incluir la adición de más memoria, procesadores o puertos a un #[i switch] o #[i router]. El dimensionamiento vertical es útil cuando se necesita mejorar el rendimiento de un dispositivo específico sin cambiar la infraestructura de la red.

      .tarjeta.tarjeta--tres.p-4
        .row.mb-3
          .col-2
            img(src='@/assets/curso/temas/tema1/img32.svg' alt='AvatarTop')
        h5 Dimensionamiento horizontal
        p El dimensionamiento horizontal implica añadir más dispositivos a la red para aumentar su capacidad. Esto puede incluir la adición de más #[i switches], #[i routers] o servidores. El dimensionamiento horizontal es útil cuando se necesita aumentar la capacidad de la red en general y distribuir la carga de trabajo entre múltiples dispositivos.

      .tarjeta.tarjeta--tres.p-4
        .row.mb-3
          .col-2
            img(src='@/assets/curso/temas/tema1/img33.svg' alt='AvatarTop')
        h5  Escalabilidad elástica
        p La escalabilidad elástica implica la capacidad de la red para ajustar automáticamente sus recursos en respuesta a cambios en la demanda. Esto es común en entornos de #[em cloud computing], donde los recursos pueden ser añadidos o eliminados dinámicamente según sea necesario. La escalabilidad elástica asegura que la red pueda adaptarse rápidamente a cambios en la demanda sin interrupciones en el servicio.


    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .titulovi.mb-4
          h5.order-2.mb-0.p-1 Funciones del dimensionamiento y la escalabilidad
          .imgicon.order-1
            img(src='@/assets/curso/temas/tema1/imgicono.png', alt='Imagen decorativa')

    .titulo-segundo.titseg
      h4 Optimización del rendimiento
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p El dimensionamiento y la escalabilidad permiten optimizar el rendimiento de la red asegurando que los recursos estén disponibles cuando y donde se necesiten. Esto incluye la distribución equitativa del tráfico, la priorización de aplicaciones críticas y la reducción de la latencia.
        .cajon.color-primario.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-sm-2.col-lg-2.mb-4.mb-lg-0
              img(src='@/assets/curso/temas/tema1/img34.svg' alt='AvatarTop')
            .col-lg-10
              p La siguiente figura proporciona una representación visual clara y organizada de cómo el dimensionamiento y la escalabilidad contribuyen a la optimización del rendimiento de la red, asegurando la disponibilidad de recursos, la distribución equitativa del tráfico, la priorización de aplicaciones críticas y la reducción de la latencia.
      .col-lg-4.d-lg-block.d-none
        img(src='@/assets/curso/temas/tema1/img35.png' alt='AvatarTop')

    
    .titulo-sexto.color-acento-contenido.offset-1
      h5 Figura 1. 
      span Optimización del rendimiento de la red
    .row.justify-content-center.align-items-center.mb-5 
      .col-lg-6
        img(src='@/assets/curso/temas/tema1/img36.svg' alt='La Figura 1 se denomina «Optimización del rendimiento de la red» y enseña todos los factores que son impactados por el dimensionamiento y la escalabilidad.')
        figcaption.mt-2 Fuente: OIT, 2024.
    .titulo-segundo.titseg
      h4 Mejora de la disponibilidad
    p.mb-4 El dimensionamiento y la escalabilidad mejoran la disponibilidad de la red asegurando que los recursos estén disponibles incluso en caso de fallos. Esto incluye la implementación de redundancia, la distribución de la carga de trabajo y la planificación de contingencias.
    
    .row.justify-content-center
      .col-lg-5
        .tarjeta--morada.color-primario.p-4.h-100.mb-5
          .row
            .col-2
              figure
                img(src='@/assets/curso/temas/tema1/img37.svg', alt='Texto que describa la imagen')
          h5 Reducción de costos
          p El dimensionamiento y la escalabilidad permiten reducir los costos de la red mediante la optimización del uso de recursos. Esto incluye la selección de equipos adecuados, la planificación de capacidad y la implementación de soluciones escalables que pueden adaptarse a cambios en la demanda sin necesidad de inversiones adicionales.
      .col-lg-5
        .tarjeta--verde.color-primario.p-4.h-100
          .row
            .col-2
              figure
                img(src='@/assets/curso/temas/tema1/img38.svg', alt='Texto que describa la imagen')
          h5 Importancia en el análisis y planificación de Redes
          p El dimensionamiento y la escalabilidad se requieren para el análisis y la planificación de redes porque aseguran que la red pueda satisfacer las necesidades actuales y futuras de manera eficiente y efectiva. La evaluación de necesidades, la selección de equipos, el diseño de la topología y la planificación de capacidad son pasos infalibles en el proceso de planificación de redes. La capacidad de la red para crecer y adaptarse a cambios en la demanda es importante para mantener un rendimiento óptimo y asegurar la disponibilidad de los servicios.
</template>

<script>
export default {
  name: 'Tema1',
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
