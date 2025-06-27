<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>2</span></div>
        <h1>Diseño de infraestructura</h1>
      </div>
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-sm-6 col-lg-2 mb-4 mb-lg-0">
          <img
            class="img-fluid img-a"
            src="@/assets/curso/temas/tema2/img1.svg"
          />
        </div>
        <div class="col-lg-7">
          <p>
            El diseño de infraestructura en redes de telecomunicaciones es un
            proceso integral que abarca la planificación, implementación y
            mantenimiento de los componentes físicos y lógicos necesarios para
            soportar una red eficiente y escalable. Este diseño incluye la
            selección y configuración de equipos, la disposición de los cables y
            la organización de los espacios físicos donde se alojan los equipos
            de red.
          </p>
        </div>
        <div class="col-lg-3">
          <img
            class="img-fluid img-a"
            src="@/assets/curso/temas/tema2/img2.png"
          />
        </div>
      </div>
      <Separador></Separador>
      <div id="t_2_1" class="titulo-segundo color-acento-botones mt-5">
        <h2>2.1 Subsistemas de cableado estructurado</h2>
      </div>
      <p class="mb-4">
        El cableado estructurado es una infraestructura de telecomunicaciones
        que consiste en una serie de estándares que especifican cómo se deben
        instalar los cables en un edificio o campus para soportar una amplia
        gama de servicios de telecomunicaciones. Este tipo de cableado es
        importante para la implementación de redes de datos, voz y video, y se
        diseña para ser flexible y escalable, permitiendo la fácil adición,
        movimiento o cambio de dispositivos y servicios.
      </p>
      <div class="row justify-content-center align-items-center mb-4">
        <div class="col-lg-12">
          <div class="titulovi mb-4">
            <h5 class="order-2 mb-0 p-1">
              Clases de subsistemas de cableado estructurado
            </h5>
            <div class="imgicon order-1">
              <img
                src="@/assets/curso/temas/tema1/imgicono.png"
                alt="Imagen decorativa"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-lg-4">
          <h5>Subsistema de cableado horizontal</h5>
        </div>
      </div>
      <div class="tarjeta--container row mb-5">
        <div class="col-md tarjeta bg6 p-5">
          <div class="row mb-4">
            <div class="col-2">
              <figure>
                <img
                  src="@/assets/curso/temas/tema2/img3.svg"
                  alt="Texto que describa la imagen"
                />
              </figure>
            </div>
          </div>
          <p>
            <b>Descripción: </b>este subsistema incluye los cables que conectan
            los dispositivos de usuario final, como computadoras y teléfonos,
            con los puntos de distribución en el cuarto de telecomunicaciones.
          </p>
        </div>
        <div class="col-md tarjeta bg1 p-5">
          <div class="row mb-4">
            <div class="col-2">
              <figure>
                <img
                  src="@/assets/curso/temas/tema2/img4.svg"
                  alt="Texto que describa la imagen"
                />
              </figure>
            </div>
          </div>
          <p>
            <b>Componentes: </b>cables de par trenzado no apantallado (UTP),
            cables de fibra óptica, conectores RJ-45, paneles de parcheo.
          </p>
        </div>
        <div class="col-md tarjeta bg9 p-5">
          <div class="row mb-4">
            <div class="col-2">
              <figure>
                <img
                  src="@/assets/curso/temas/tema2/img5.svg"
                  alt="Texto que describa la imagen"
                />
              </figure>
            </div>
          </div>
          <p>
            <b>Funciones: </b>proporciona conectividad a los usuarios finales y
            dispositivos de red, permitiendo la transmisión de datos, voz y
            video.
          </p>
        </div>
      </div>
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-lg-4">
          <h5>Subsistema de cableado vertical</h5>
        </div>
      </div>
      <div class="tarjeta--container row mb-5">
        <div class="col-md tarjeta bg6 p-5">
          <div class="row mb-4">
            <div class="col-2">
              <figure>
                <img
                  src="@/assets/curso/temas/tema2/img3.svg"
                  alt="Texto que describa la imagen"
                />
              </figure>
            </div>
          </div>
          <p>
            <b>Descripción: </b>este subsistema incluye los cables que conectan
            los cuartos de telecomunicaciones en diferentes pisos o edificios.
          </p>
        </div>
        <div class="col-md tarjeta bg1 p-5">
          <div class="row mb-4">
            <div class="col-2">
              <figure>
                <img
                  src="@/assets/curso/temas/tema2/img4.svg"
                  alt="Texto que describa la imagen"
                />
              </figure>
            </div>
          </div>
          <p>
            <b>Componentes: </b>cables de fibra óptica, cables de par trenzado
            apantallado (STP), conductos de cableado, paneles de parcheo.
          </p>
        </div>
        <div class="col-md tarjeta bg9 p-5">
          <div class="row mb-4">
            <div class="col-2">
              <figure>
                <img
                  src="@/assets/curso/temas/tema2/img5.svg"
                  alt="Texto que describa la imagen"
                />
              </figure>
            </div>
          </div>
          <p>
            <b>Funciones: </b>proporciona interconexión entre los cuartos de
            telecomunicaciones, permitiendo la transmisión de datos entre
            diferentes áreas de la red.
          </p>
        </div>
      </div>
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-lg-4">
          <h5>Subsistema de cableado de campus</h5>
        </div>
      </div>
      <div class="tarjeta--container row mb-5">
        <div class="col-md tarjeta bg6 p-5">
          <div class="row mb-4">
            <div class="col-2">
              <figure>
                <img
                  src="@/assets/curso/temas/tema2/img3.svg"
                  alt="Texto que describa la imagen"
                />
              </figure>
            </div>
          </div>
          <p>
            <b>Descripción: </b>este subsistema incluye los cables que conectan
            los edificios en un campus o área geográfica amplia.
          </p>
        </div>
        <div class="col-md tarjeta bg1 p-5">
          <div class="row mb-4">
            <div class="col-2">
              <figure>
                <img
                  src="@/assets/curso/temas/tema2/img4.svg"
                  alt="Texto que describa la imagen"
                />
              </figure>
            </div>
          </div>
          <p>
            <b>Componentes: </b>cables de fibra óptica, cables de par trenzado
            apantallado (STP), conductos de cableado, paneles de parcheo.
          </p>
        </div>
        <div class="col-md tarjeta bg9 p-5">
          <div class="row mb-4">
            <div class="col-2">
              <figure>
                <img
                  src="@/assets/curso/temas/tema2/img5.svg"
                  alt="Texto que describa la imagen"
                />
              </figure>
            </div>
          </div>
          <p>
            <b>Funciones: </b>proporciona interconexión entre los edificios,
            permitiendo la transmisión de datos, voz y video a largas
            distancias.
          </p>
        </div>
      </div>
      <div class="row justify-content-center align-items-center mb-4">
        <div class="col-lg-12">
          <div class="titulovi mb-4">
            <h5 class="order-2 mb-0 p-1">
              Características de los subsistemas de cableado estructurado
            </h5>
            <div class="imgicon order-1">
              <img
                src="@/assets/curso/temas/tema1/imgicono.png"
                alt="Imagen decorativa"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-xl-4 col-lg-7 col-md-9 col-11 mb-4 mb-xl-0">
          <div class="crd_hover_txt" data-aos="flip-left">
            <div class="crd_hover_txt--img">
              <figure>
                <img src="@/assets/curso/temas/tema2/img6.png" alt="alt" />
              </figure>
            </div>
            <div class="crd_hover_txt--body">
              <h4 class="text-white mb-3">Flexibilidad</h4>
              <p class="text-white mb-0">
                Los subsistemas de cableado estructurado están diseñados para
                ser flexibles, permitiendo la fácil adición, movimiento o cambio
                de dispositivos y servicios sin necesidad de reconfigurar toda
                la red.
              </p>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-7 col-md-9 col-11 mb-4 mb-xl-0">
          <div class="crd_hover_txt" data-aos="flip-left">
            <div class="crd_hover_txt--img">
              <figure>
                <img src="@/assets/curso/temas/tema2/img7.png" alt="alt" />
              </figure>
            </div>
            <div class="crd_hover_txt--body">
              <h4 class="text-white mb-3">Escalabilidad</h4>
              <p class="text-white mb-0">
                La infraestructura de cableado estructurado es escalable, lo que
                significa que puede adaptarse a cambios en la demanda y crecer
                junto con la red sin una pérdida significativa de rendimiento.
              </p>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-7 col-md-9 col-11 mb-4 mb-xl-0">
          <div class="crd_hover_txt" data-aos="flip-left">
            <div class="crd_hover_txt--img">
              <figure>
                <img src="@/assets/curso/temas/tema2/img8.png" alt="alt" />
              </figure>
            </div>
            <div class="crd_hover_txt--body">
              <h4 class="text-white mb-3">Estándares</h4>
              <p class="text-white mb-0">
                Los subsistemas de cableado estructurado se basan en estándares
                internacionales, como TIA/EIA-568 y ISO/IEC 11801, que
                especifican los tipos de cables, conectores y métodos de
                instalación.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Separador></Separador>
      <div id="t_2_2" class="titulo-segundo color-acento-botones mt-5">
        <h2>2.2 Cuartos de telecomunicaciones</h2>
      </div>
      <p class="mb-4">
        Los cuartos de telecomunicaciones son espacios físicos dentro de un
        edificio o campus donde se alojan los equipos de red, como
        <i>switches</i>, <i>routers</i>, servidores y paneles de parcheo. Estos
        cuartos sirven para la gestión y mantenimiento de la red, y deben estar
        diseñados para proporcionar un entorno seguro y eficiente para los
        equipos de red.
      </p>
      <div class="row justify-content-center align-items-center mb-4">
        <div class="col-lg-12">
          <div class="titulovi mb-4">
            <h5 class="order-2 mb-0 p-1">
              Clases de cuartos de telecomunicaciones
            </h5>
            <div class="imgicon order-1">
              <img
                src="@/assets/curso/temas/tema1/imgicono.png"
                alt="Imagen decorativa"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-sm-6 col-lg-4 mb-4 mb-lg-0">
          <img src="@/assets/curso/temas/tema2/img9.svg" alt="alt" />
        </div>
        <div class="col-lg-8">
          <AccordionRED tipo="a" clase-tarjeta="tarjeta">
            <div titulo="Cuarto de telecomunicaciones principal">
              <div class="row justify-content-center align-items-center mb-3">
                <div class="col-sm-2 col-lg-1 mb-4 mb-lg-0">
                  <img src="@/assets/curso/temas/tema2/img21.svg" alt="alt" />
                </div>
                <div class="col-lg-11">
                  <p>
                    <b>Descripción: </b>este cuarto aloja los equipos de red
                    principales, como los <i>switches</i> de núcleo y los
                    <i>routers</i> de borde.
                  </p>
                </div>
              </div>
              <div class="row justify-content-center align-items-center mb-3">
                <div class="col-sm-2 col-lg-3 mb-4 mb-lg-0">
                  <img src="@/assets/curso/temas/tema2/img22.svg" alt="alt" />
                </div>
                <div class="col-lg-11">
                  <p>
                    <b>Componentes: </b><i>switches</i> de núcleo,
                    <i>routers</i> de borde, servidores, paneles de parcheo,
                    sistemas de alimentación ininterrumpida (UPS).
                  </p>
                </div>
              </div>
              <div class="row justify-content-center align-items-center mb-3">
                <div class="col-sm-2 col-lg-1 mb-4 mb-lg-0">
                  <img src="@/assets/curso/temas/tema2/img23.svg" alt="alt" />
                </div>
                <div class="col-lg-11">
                  <p>
                    <b>Funciones: </b>proporciona la interconexión principal de
                    la red, gestionando el tráfico de datos entre diferentes
                    partes de la red y conectando la red con el mundo exterior.
                  </p>
                </div>
              </div>
            </div>
            <div titulo="Cuarto de telecomunicaciones intermedio">
              <div class="row justify-content-center align-items-center mb-3">
                <div class="col-sm-2 col-lg-1 mb-4 mb-lg-0">
                  <img src="@/assets/curso/temas/tema2/img21.svg" alt="alt" />
                </div>
                <div class="col-lg-11">
                  <p>
                    <b>Descripción: </b>este cuarto aloja los equipos de red
                    intermedios, como los <i>switches</i> de distribución y los
                    <i>routers</i> de acceso.
                  </p>
                </div>
              </div>
              <div class="row justify-content-center align-items-center mb-3">
                <div class="col-sm-2 col-lg-1 mb-4 mb-lg-0">
                  <img src="@/assets/curso/temas/tema2/img22.svg" alt="alt" />
                </div>
                <div class="col-lg-11">
                  <p>
                    <b>Componentes: </b><i>switches</i> de distribución,
                    <i>routers</i> de acceso, paneles de parcheo, sistemas de
                    alimentación ininterrumpida (UPS).
                  </p>
                </div>
              </div>
              <div class="row justify-content-center align-items-center mb-3">
                <div class="col-sm-2 col-lg-1 mb-4 mb-lg-0">
                  <img src="@/assets/curso/temas/tema2/img23.svg" alt="alt" />
                </div>
                <div class="col-lg-11">
                  <p>
                    <b>Funciones: </b>proporciona la interconexión intermedia de
                    la red, gestionando el tráfico de datos entre los cuartos de
                    telecomunicaciones principales y los cuartos de
                    telecomunicaciones de acceso.
                  </p>
                </div>
              </div>
            </div>
            <div titulo="Cuarto de telecomunicaciones de acceso">
              <div class="row justify-content-center align-items-center mb-3">
                <div class="col-sm-2 col-lg-1 mb-4 mb-lg-0">
                  <img src="@/assets/curso/temas/tema2/img21.svg" alt="alt" />
                </div>
                <div class="col-lg-11">
                  <p>
                    <b>Descripción: </b>este cuarto aloja los equipos de red de
                    acceso, como los <i>switches</i> de acceso y los puntos de
                    acceso inalámbricos.
                  </p>
                </div>
              </div>
              <div class="row justify-content-center align-items-center mb-3">
                <div class="col-sm-2 col-lg-1 mb-4 mb-lg-0">
                  <img src="@/assets/curso/temas/tema2/img22.svg" alt="alt" />
                </div>
                <div class="col-lg-11">
                  <p>
                    <b>Componentes: </b><i>switches</i> de acceso, puntos de
                    acceso inalámbricos, paneles de parcheo, sistemas de
                    alimentación ininterrumpida (UPS).
                  </p>
                </div>
              </div>
              <div class="row justify-content-center align-items-center mb-3">
                <div class="col-sm-2 col-lg-1 mb-4 mb-lg-0">
                  <img src="@/assets/curso/temas/tema2/img23.svg" alt="alt" />
                </div>
                <div class="col-lg-11">
                  <p>
                    <b>Funciones: </b>proporciona la conectividad de acceso a
                    los usuarios finales y dispositivos de red, gestionando el
                    tráfico de datos en el nivel de acceso.
                  </p>
                </div>
              </div>
            </div>
          </AccordionRED>
        </div>
      </div>
      <div class="row justify-content-center align-items-center mb-4">
        <div class="col-lg-12">
          <div class="titulovi mb-4">
            <h5 class="order-2 mb-0 p-1">
              Características de los cuartos de telecomunicaciones
            </h5>
            <div class="imgicon order-1">
              <img
                src="@/assets/curso/temas/tema1/imgicono.png"
                alt="Imagen decorativa"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-4 mb-4">
          <div class="tarjeta--boton color-primario p-4 h-100">
            <div class="row justify-content-center mb-4">
              <div class="col-3">
                <figure>
                  <img
                    src="@/assets/curso/temas/tema2/img10.svg"
                    alt="Texto que describa la imagen"
                  />
                </figure>
              </div>
            </div>
            <h5>Seguridad</h5>
            <p>
              Los cuartos de telecomunicaciones deben estar diseñados para
              proporcionar un entorno seguro para los equipos de red, incluyendo
              medidas de seguridad física y lógica.
            </p>
          </div>
        </div>
        <div class="col-lg-4 mb-4">
          <div class="tarjeta bg4 p-4 h-100">
            <div class="row justify-content-center mb-4">
              <div class="col-4">
                <figure>
                  <img
                    src="@/assets/curso/temas/tema2/img11.svg"
                    alt="Texto que describa la imagen"
                  />
                </figure>
              </div>
            </div>
            <h5>Control ambiental</h5>
            <p>
              Los cuartos de telecomunicaciones deben estar equipados con
              sistemas de control ambiental, como aire acondicionado y sistemas
              de ventilación, para mantener una temperatura y humedad adecuadas
              para los equipos de red.
            </p>
          </div>
        </div>
        <div class="col-lg-4 mb-4">
          <div class="tarjeta--boton color-primario p-4 h-100">
            <div class="row justify-content-center mb-4">
              <div class="col-3">
                <figure>
                  <img
                    src="@/assets/curso/temas/tema2/img12.svg"
                    alt="Texto que describa la imagen"
                  />
                </figure>
              </div>
            </div>
            <h5>Alimentación ininterrumpida</h5>
            <p>
              Los cuartos de telecomunicaciones deben estar equipados con
              sistemas de alimentación ininterrumpida (UPS) para asegurar que
              los equipos de red sigan funcionando en caso de fallos en la
              alimentación eléctrica.
            </p>
          </div>
        </div>
      </div>
      <Separador></Separador>
      <div id="t_2_3" class="titulo-segundo color-acento-botones mt-5">
        <h2>2.3 Distribución y rutas de cableado</h2>
      </div>
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-lg-8">
          <p class="mb-4">
            La distribución y las rutas de cableado son aspectos del diseño de
            infraestructura de red. La distribución de cableado se refiere a la
            disposición física de los cables en el edificio o campus, mientras
            que las rutas de cableado se refieren a las rutas específicas que
            siguen los cables para conectar los dispositivos de red.
          </p>
          <TabsA class="color-acento-botones mb-5">
            <div class="tarjeta brad p-4" titulo="Distribución horizontal">
              <h5>Distribución horizontal</h5>
              <div class="row justify-content-center align-items-center mb-3">
                <div class="col-sm-2 col-lg-1 mb-4 mb-lg-0">
                  <img src="@/assets/curso/temas/tema2/img21.svg" alt="alt" />
                </div>
                <div class="col-lg-11">
                  <p>
                    <b>Descripción: </b>la distribución horizontal incluye los
                    cables que conectan los dispositivos de usuario final con
                    los puntos de distribución en el cuarto de
                    telecomunicaciones.
                  </p>
                </div>
              </div>
              <div class="row justify-content-center align-items-center mb-3">
                <div class="col-sm-2 col-lg-1 mb-4 mb-lg-0">
                  <img src="@/assets/curso/temas/tema2/img22.svg" alt="alt" />
                </div>
                <div class="col-lg-11">
                  <p>
                    <b>Componentes: </b>cables de par trenzado no apantallado
                    (UTP), cables de fibra óptica, conectores RJ-45, paneles de
                    parcheo.
                  </p>
                </div>
              </div>
              <div class="row justify-content-center align-items-center mb-3">
                <div class="col-sm-2 col-lg-1 mb-4 mb-lg-0">
                  <img src="@/assets/curso/temas/tema2/img23.svg" alt="alt" />
                </div>
                <div class="col-lg-11">
                  <p>
                    <b>Funciones: </b>proporciona conectividad a los usuarios
                    finales y dispositivos de red, permitiendo la transmisión de
                    datos, voz y video.
                  </p>
                </div>
              </div>
            </div>
            <div class="tarjeta brad p-4" titulo="Distribución vertical">
              <h5>Distribución vertical</h5>
              <div class="row justify-content-center align-items-center mb-3">
                <div class="col-sm-2 col-lg-1 mb-4 mb-lg-0">
                  <img src="@/assets/curso/temas/tema2/img21.svg" alt="alt" />
                </div>
                <div class="col-lg-11">
                  <p>
                    <b>Descripción: </b>la distribución vertical incluye los
                    cables que conectan los cuartos de telecomunicaciones en
                    diferentes pisos o edificios.
                  </p>
                </div>
              </div>
              <div class="row justify-content-center align-items-center mb-3">
                <div class="col-sm-2 col-lg-1 mb-4 mb-lg-0">
                  <img src="@/assets/curso/temas/tema2/img22.svg" alt="alt" />
                </div>
                <div class="col-lg-11">
                  <p>
                    <b>Componentes: </b>cables de fibra óptica, cables de par
                    trenzado apantallado (STP), conductos de cableado, paneles
                    de parcheo.
                  </p>
                </div>
              </div>
              <div class="row justify-content-center align-items-center mb-3">
                <div class="col-sm-2 col-lg-1 mb-4 mb-lg-0">
                  <img src="@/assets/curso/temas/tema2/img23.svg" alt="alt" />
                </div>
                <div class="col-lg-11">
                  <p>
                    <b>Funciones: </b>proporciona interconexión entre los
                    cuartos de telecomunicaciones, permitiendo la transmisión de
                    datos entre diferentes áreas de la red.
                  </p>
                </div>
              </div>
            </div>
            <div class="tarjeta brad p-4" titulo="Distribución de campus">
              <h5>Distribución de campus</h5>
              <div class="row justify-content-center align-items-center mb-3">
                <div class="col-sm-2 col-lg-1 mb-4 mb-lg-0">
                  <img src="@/assets/curso/temas/tema2/img21.svg" alt="alt" />
                </div>
                <div class="col-lg-11">
                  <p>
                    <b>Descripción: </b>la distribución de campus incluye los
                    cables que conectan los edificios en un campus o área
                    geográfica amplia.
                  </p>
                </div>
              </div>
              <div class="row justify-content-center align-items-center mb-3">
                <div class="col-sm-2 col-lg-1 mb-4 mb-lg-0">
                  <img src="@/assets/curso/temas/tema2/img22.svg" alt="alt" />
                </div>
                <div class="col-lg-11">
                  <p>
                    <b>Componentes: </b>cables de fibra óptica, cables de par
                    trenzado apantallado (STP), conductos de cableado, paneles
                    de parcheo.
                  </p>
                </div>
              </div>
              <div class="row justify-content-center align-items-center mb-3">
                <div class="col-sm-2 col-lg-1 mb-4 mb-lg-0">
                  <img src="@/assets/curso/temas/tema2/img23.svg" alt="alt" />
                </div>
                <div class="col-lg-11">
                  <p>
                    <b>Funciones: </b>proporciona interconexión entre los
                    edificios, permitiendo la transmisión de datos, voz y video
                    a largas distancias.
                  </p>
                </div>
              </div>
            </div>
          </TabsA>
        </div>
        <div class="col-sm-6 col-lg-4 mb-4 mb-lg-0">
          <img
            src="@/assets/curso/temas/tema2/img16.svg"
            alt="Texto que describa la imagen"
          />
        </div>
      </div>
      <div class="row justify-content-center align-items-center mb-4">
        <div class="col-lg-12">
          <div class="titulovi mb-4">
            <h5 class="order-2 mb-0 p-1">
              Características de la distribución y rutas de cableado
            </h5>
            <div class="imgicon order-1">
              <img
                src="@/assets/curso/temas/tema1/imgicono.png"
                alt="Imagen decorativa"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-lg-10">
          <CarouselCard class="mb-5" columnas="col-lg-4 col-xl-4">
            <div class="tarjeta tarjeta--tres bg4 p-4">
              <div class="row justify-content-center align-items-center mb-3">
                <div class="col-4">
                  <img
                    src="@/assets/curso/temas/tema2/img17.svg"
                    alt="AvatarTop"
                  />
                </div>
              </div>
              <h5>Organización</h5>
              <p>
                La distribución y las rutas de cableado deben estar organizadas
                de manera lógica y estructurada para facilitar la gestión y el
                mantenimiento de la red.
              </p>
            </div>
            <div class="tarjeta tarjeta--tres p-4">
              <div class="row justify-content-center align-items-center mb-3">
                <div class="col-4">
                  <img
                    src="@/assets/curso/temas/tema2/img18.svg"
                    alt="AvatarTop"
                  />
                </div>
              </div>
              <h5>Protección</h5>
              <p>
                Los cables deben estar protegidos contra daños físicos y
                ambientales, utilizando conductos de cableado, bandejas de
                cableado y otros métodos de protección.
              </p>
            </div>
            <div class="tarjeta tarjeta--tres p-4">
              <div class="row justify-content-center align-items-center mb-3">
                <div class="col-4">
                  <img
                    src="@/assets/curso/temas/tema2/img19.svg"
                    alt="AvatarTop"
                  />
                </div>
              </div>
              <h5>Etiquetado</h5>
              <p>
                Los cables y los puntos de distribución deben estar claramente
                etiquetados para facilitar la identificación y la gestión de la
                red.
              </p>
            </div>
            <div class="tarjeta tarjeta--tres p-4">
              <div class="row justify-content-center align-items-center mb-3">
                <div class="col-4">
                  <img
                    src="@/assets/curso/temas/tema2/img20.svg"
                    alt="AvatarTop"
                  />
                </div>
              </div>
              <h5>Documentación</h5>
              <p>
                La distribución y las rutas de cableado deben estar documentadas
                de manera detallada, incluyendo diagramas de cableado, listas de
                equipos y registros de mantenimiento.
              </p>
            </div>
          </CarouselCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema2',
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
