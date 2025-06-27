<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>4</span></div>
        <h1>Optimización y mejores prácticas</h1>
      </div>
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-lg-2 col-sm-4 mb-4 mb-lg-0">
          <img
            class="img-fluid img-a"
            src="@/assets/curso/temas/tema4/img1.svg"
          />
        </div>
        <div class="col-lg-7">
          <p>
            La implementación de cableado estructurado es un proceso complejo
            que requiere una planificación cuidadosa y la adopción de mejores
            prácticas para asegurar una instalación eficiente y efectiva. La
            optimización del cableado estructurado no solo mejora el rendimiento
            de la red, sino que también facilita el mantenimiento y la expansión
            futura.
          </p>
        </div>
        <div class="col-lg-3">
          <img
            class="img-fluid img-a"
            src="@/assets/curso/temas/tema4/img2.png"
          />
        </div>
      </div>
      <Separador></Separador>
      <div id="t_4_1" class="titulo-segundo color-acento-botones mt-5">
        <h2>4.1 Estándares de calidad</h2>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-5 mb-4">
          <div class="tarjeta--verde p-4 h-100">
            <div class="row justify-content-center mb-3">
              <div class="col-12">
                <figure class="brad">
                  <img
                    src="@/assets/curso/temas/tema4/img3.png"
                    alt="Texto que describa la imagen"
                  />
                </figure>
              </div>
            </div>
            <p>
              <b>TIA/EIA-568:</b> Este estándar, desarrollado por la
              <em>Telecommunications Industry Association</em> (TIA) y la
              <em>Electronic Industries Alliance</em> (EIA), define las
              especificaciones para el cableado de telecomunicaciones en
              edificios comerciales. Incluye directrices sobre la instalación de
              cables, conectores y otros componentes de red.
            </p>
          </div>
        </div>
        <div class="col-lg-5 mb-4">
          <div class="tarjeta--verde p-4 h-100">
            <div class="row justify-content-center mb-3">
              <div class="col-12">
                <figure class="brad">
                  <img
                    src="@/assets/curso/temas/tema4/img4.png"
                    alt="Texto que describa la imagen"
                  />
                </figure>
              </div>
            </div>
            <p>
              <b>SO/IEC 11801:</b> Este estándar, desarrollado por la
              Organización Internacional de Normalización (ISO) y la Comisión
              Electrotécnica Internacional (IEC), proporciona directrices para
              el diseño y la instalación de sistemas de cableado estructurado.
              Incluye especificaciones para diferentes tipos de cables, como
              cables de cobre y fibra óptica.
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center align-items-center mb-4">
        <div class="col-lg-12">
          <div class="titulovi mb-4">
            <h5 class="order-2 mb-0 p-1">
              Beneficios de seguir los estándares de calidad
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
      <div class="row mb-5">
        <div class="col-lg-4 mb-4">
          <div class="tarjeta-avatar-b h-100">
            <div class="tarjeta-avatar-b__img">
              <img src="@/assets/curso/temas/tema4/img5.svg" alt="AvatarTop" />
            </div>
            <div class="tarjeta tarjeta--azul">
              <div class="p-4">
                <p>
                  <b>Interoperabilidad: </b>los estándares de calidad aseguran
                  que los componentes de red de diferentes fabricantes sean
                  compatibles entre sí, lo que facilita la integración y el
                  mantenimiento de la red.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-4">
          <div class="tarjeta-avatar-b h-100">
            <div class="tarjeta-avatar-b__img">
              <img src="@/assets/curso/temas/tema4/img6.svg" alt="AvatarTop" />
            </div>
            <div class="tarjeta tarjeta--azul">
              <div class="p-4">
                <p>
                  <b>Rendimiento: </b>los estándares de calidad garantizan que
                  los componentes de red cumplan con las especificaciones de
                  rendimiento, lo que asegura un funcionamiento óptimo de la
                  red.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-4">
          <div class="tarjeta-avatar-b h-100">
            <div class="tarjeta-avatar-b__img">
              <img src="@/assets/curso/temas/tema4/img7.svg" alt="AvatarTop" />
            </div>
            <div class="tarjeta tarjeta--azul">
              <div class="p-4">
                <p>
                  <b>Escalabilidad: </b>los estándares de calidad permiten la
                  expansión futura de la red, ya que proporcionan directrices
                  claras sobre cómo deben instalarse y configurarse los
                  componentes adicionales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separador></Separador>
      <div id="t_4_2" class="titulo-segundo color-acento-botones mt-5">
        <h2>4.2 Documentación y entregables</h2>
      </div>
      <p class="mb-5">
        La documentación y los entregables son elementos propios en la
        implementación de cableado estructurado. Proporcionan una referencia
        detallada de la instalación y facilitan el mantenimiento y la expansión
        futura de la red.
      </p>
      <div class="row justify-content-center align-items-center mb-4">
        <div class="col-lg-12">
          <div class="titulovi mb-4">
            <h5 class="order-2 mb-0 p-1">Tipos de documentación</h5>
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
          <img src="@/assets/curso/temas/tema4/img8.svg" alt="alt" />
        </div>
        <div class="col-lg-7">
          <AccordionRED tipo="a" clase-tarjeta="tarjeta">
            <div titulo="Diagramas de cableado">
              <p>
                Los diagramas de cableado son representaciones gráficas de la
                disposición física de los cables y los componentes de red.
                Incluyen información sobre la ubicación de los cables, los
                puntos de terminación y las conexiones entre los dispositivos.
              </p>
            </div>
            <div titulo="Listas de materiales">
              <p>
                Las listas de materiales enumeran todos los componentes
                utilizados en la instalación, como cables, conectores, paneles
                de parcheo y otros accesorios. Incluyen detalles sobre la
                cantidad, el tipo y las especificaciones de cada componente.
              </p>
            </div>
            <div titulo="Manuales de instalación">
              <p>
                Los manuales de instalación proporcionan instrucciones
                detalladas sobre cómo instalar y configurar los componentes de
                red. Incluyen información sobre los procedimientos de
                instalación, las herramientas necesarias y las precauciones de
                seguridad.
              </p>
            </div>
          </AccordionRED>
        </div>
      </div>
      <div class="row justify-content-center align-items-center mb-4">
        <div class="col-lg-12">
          <div class="titulovi mb-4">
            <h5 class="order-2 mb-0 p-1">Beneficios de la documentación</h5>
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
          <div class="tarjeta-avatar">
            <img src="@/assets/curso/temas/tema4/img9.svg" alt="AvatarTop" />
            <div class="tarjeta tarjeta--azul bg11 w-100">
              <div class="p-4">
                <h5 class="text-center">Facilita el mantenimiento</h5>
                <p>
                  La documentación detallada facilita el mantenimiento y la
                  resolución de problemas de la red, ya que proporciona una
                  referencia clara de la instalación.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-4">
          <div class="tarjeta-avatar">
            <img src="@/assets/curso/temas/tema4/img10.svg" alt="AvatarTop" />
            <div class="tarjeta tarjeta--azul bg1 w-100">
              <div class="p-4">
                <h5 class="text-center">Mejora la gestión del proyecto</h5>
                <p>
                  Los servidores son mostrados con iconos que indican su tipo y
                  función, como servidores de archivos, servidores de correo
                  electrónico, etc.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-4">
          <div class="tarjeta-avatar">
            <img src="@/assets/curso/temas/tema4/img11.svg" alt="AvatarTop" />
            <div class="tarjeta tarjeta--azul bg1 w-100">
              <div class="p-4">
                <h5 class="text-center">Asegura la consistencia</h5>
                <p>
                  Los cables y conexiones son representados mediante líneas que
                  conectan los diferentes dispositivos. Estas líneas pueden
                  incluir etiquetas que indiquen el tipo de cable (por ejemplo,
                  <i>Ethernet</i>, fibra óptica) y la longitud del cable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separador></Separador>
      <div id="t_4_3" class="titulo-segundo color-acento-botones mt-5">
        <h2>4.3 Gestión de proyectos</h2>
      </div>
      <p class="mb-5">
        La gestión de proyectos es un aspecto primordial en la implementación de
        cableado estructurado. Implica la planificación, ejecución y control de
        las actividades del proyecto para asegurar que se cumplan los objetivos
        y los plazos establecidos.
      </p>
      <div class="row justify-content-center align-items-center mb-4">
        <div class="col-lg-12">
          <div class="titulovi mb-4">
            <h5 class="order-2 mb-0 p-1">Fases de la gestión de proyectos</h5>
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
        <div class="col-lg-9">
          <TabsA class="color-acento-botones mb-5">
            <div class="tarjeta brad p-4" titulo="Planificación">
              <p>
                En esta fase, se realiza un análisis detallado de los requisitos
                del proyecto, se define el alcance y se desarrolla un plan de
                implementación. Incluye la identificación de los recursos
                necesarios, la definición de los plazos y la asignación de
                responsabilidades.
              </p>
            </div>
            <div class="tarjeta brad p-4" titulo="Ejecución">
              <p>
                En esta fase, se llevan a cabo las actividades del proyecto
                según el plan de implementación. Incluye la instalación de los
                componentes de red, la configuración de los dispositivos y la
                realización de pruebas
              </p>
            </div>
            <div class="tarjeta brad p-4" titulo="Control">
              <p>
                En esta fase, se monitorean y controlan las actividades del
                proyecto para asegurar que se cumplan los objetivos y los plazos
                establecidos. Incluye la identificación de desviaciones, la
                implementación de medidas correctivas y la evaluación del
                progreso.
              </p>
            </div>
            <div class="tarjeta brad p-4" titulo="Cierre">
              <p>
                En esta fase, se finaliza el proyecto y se realizan las
                actividades de cierre, como la documentación final, la entrega
                de los entregables y la evaluación del proyecto.
              </p>
            </div>
          </TabsA>
        </div>
        <div class="col-sm-6 col-lg-3 mb-4 mb-lg-0">
          <img src="@/assets/curso/temas/tema4/img12.png" alt="AvatarTop" />
        </div>
      </div>
      <div class="row justify-content-center align-items-center mb-4">
        <div class="col-lg-12">
          <div class="titulovi mb-4">
            <h5 class="order-2 mb-0 p-1">
              Herramientas de gestión de proyectos
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
        <div class="col-sm-6 col-lg-3 mb-4 mb-lg-0">
          <img src="@/assets/curso/temas/tema4/img13.png" alt="alt" />
        </div>
        <div class="col-lg-9 bg10">
          <div class="px-lg-4 px-4">
            <div class="bgw brad p-5 my-5">
              <CarouselRED>
                <div class="row justify-content-center align-items-center mb-5">
                  <div class="col-md-3">
                    <figure>
                      <img
                        src="@/assets/curso/temas/tema4/img14.svg"
                        alt="Texto que describa la imagen"
                      />
                    </figure>
                  </div>
                  <div class="col-md-9 mb-4 mb-md-0">
                    <h5>Diagramas de Gantt</h5>
                    <p>
                      Los diagramas de Gantt son herramientas visuales que
                      muestran el cronograma del proyecto, incluyendo las
                      actividades, los plazos y las dependencias entre las
                      tareas.
                    </p>
                  </div>
                </div>
                <div class="row justify-content-center align-items-center mb-5">
                  <div class="col-md-3">
                    <figure>
                      <img
                        src="@/assets/curso/temas/tema4/img14.svg"
                        alt="Texto que describa la imagen"
                      />
                    </figure>
                  </div>
                  <div class="col-md-9 mb-4 mb-md-0">
                    <h5><i>Software</i> de gestión de proyectos</h5>
                    <p>
                      El <i>software</i> de gestión de proyectos, como Microsoft
                      Project o Asana, proporciona herramientas para la
                      planificación, ejecución y control de las actividades del
                      proyecto.
                    </p>
                  </div>
                </div>
                <div class="row justify-content-center align-items-center mb-5">
                  <div class="col-md-3">
                    <figure>
                      <img
                        src="@/assets/curso/temas/tema4/img14.svg"
                        alt="Texto que describa la imagen"
                      />
                    </figure>
                  </div>
                  <div class="col-md-9 mb-4 mb-md-0">
                    <h5>Reuniones de seguimiento</h5>
                    <p>
                      Las reuniones de seguimiento son encuentros regulares en
                      los que se revisa el progreso del proyecto, se identifican
                      los problemas y se toman decisiones para mantener el
                      proyecto en curso.
                    </p>
                  </div>
                </div>
              </CarouselRED>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center align-items-center mb-4">
        <div class="col-lg-12">
          <div class="titulovi mb-4">
            <h5 class="order-2 mb-0 p-1">
              Beneficios de la gestión de proyectos
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
          <div class="tarjeta-avatar">
            <img src="@/assets/curso/temas/tema4/img15.svg" alt="AvatarTop" />
            <div class="tarjeta tarjeta--azul bg11 w-100">
              <div class="p-4">
                <h5 class="text-center">Mejora la eficiencia</h5>
                <p>
                  La gestión de proyectos mejora la eficiencia al proporcionar
                  una estructura clara para la planificación, ejecución y
                  control de las actividades del proyecto.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-4">
          <div class="tarjeta-avatar">
            <img src="@/assets/curso/temas/tema4/img16.svg" alt="AvatarTop" />
            <div class="tarjeta tarjeta--azul bg1 w-100">
              <div class="p-4">
                <h5 class="text-center">Reduce el riesgo</h5>
                <p>
                  La gestión de proyectos reduce el riesgo al identificar y
                  mitigar los problemas potenciales antes de que se conviertan
                  en problemas mayores.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-4">
          <div class="tarjeta-avatar">
            <img src="@/assets/curso/temas/tema4/img17.svg" alt="AvatarTop" />
            <div class="tarjeta tarjeta--azul bg1 w-100">
              <div class="p-4">
                <h5 class="text-center">
                  Asegura el cumplimiento de los plazos
                </h5>
                <p>
                  La gestión de proyectos asegura que el proyecto se complete
                  dentro de los plazos establecidos al monitorear y controlar
                  las actividades del proyecto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separador></Separador>
      <div id="t_4_4" class="titulo-segundo color-acento-botones mt-5">
        <h2>4.4 Conclusiones</h2>
      </div>
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-lg-8">
          <div class="row justify-content-center align-items-center mb-3">
            <div class="col-sm-6 col-lg-3 mb-4 mb-lg-0">
              <img src="@/assets/curso/temas/tema4/img18.svg" alt="alt" />
            </div>
            <div class="col-lg-9 bg1 p-4">
              <p>
                El análisis y la planificación de redes son etapas propias del
                diseño de una infraestructura de cableado estructurado. Estas
                fases permiten identificar los requerimientos específicos,
                seleccionar las topologías y arquitecturas adecuadas, y
                garantizar que la red sea escalable y eficiente. Una
                planificación adecuada asegura que la red cumpla con las
                necesidades actuales y futuras de la organización, optimizando
                el rendimiento y minimizando los costos.
              </p>
            </div>
          </div>
          <p>
            Los requerimientos y especificaciones técnicas son aspectos que
            aseguran que la red cumpla con las necesidades de la organización.
            Estos incluyen la velocidad de transmisión, el tipo de cableado, los
            dispositivos de red y las medidas de seguridad. La selección
            adecuada de estos elementos se necesita para soportar aplicaciones
            críticas y servicios de alta demanda, como videoconferencias,
            transferencias de archivos grandes y sistemas de gestión
            empresarial.
          </p>
        </div>
        <div class="col-sm-6 col-lg-4 mb-4 mb-lg-0">
          <img src="@/assets/curso/temas/tema4/img19.png" alt="alt" />
        </div>
      </div>
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-lg-4 mb-4">
          <p>
            Las topologías y arquitecturas de red desempeñan un papel importante
            en el diseño e implementación de redes eficientes y efectivas. Las
            topologías como la estrella, el anillo, el bus y la malla, junto con
            las arquitecturas jerárquicas y planas, ofrecen diferentes niveles
            de escalabilidad, tolerancia a fallos y facilidad de gestión. La
            selección adecuada de estas topologías y arquitecturas permite
            adaptar la red a las necesidades cambiantes de la organización y
            asegura un rendimiento óptimo.
          </p>
        </div>
        <div class="col-sm-6 col-lg-3 mb-4 mb-lg-0">
          <img src="@/assets/curso/temas/tema4/img20.svg" alt="alt" />
        </div>
        <div class="col-lg-5">
          <p>
            El dimensionamiento y la escalabilidad son aspectos propios del
            diseño y la planificación de redes. El dimensionamiento vertical y
            horizontal, junto con la escalabilidad elástica, permiten optimizar
            el rendimiento de la red asegurando que los recursos estén
            disponibles cuando y donde se necesiten. Además, la implementación
            de redundancia y la planificación de contingencias mejoran la
            disponibilidad de la red, garantizando que los servicios críticos se
            mantengan operativos incluso en caso de fallos.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Tema4',
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
