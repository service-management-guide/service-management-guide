# Gestión de la Configuración

**La gestión de la configuración mantiene una imagen exacta y utilizable de los componentes que forman sus servicios y de cómo se conectan, para poder juzgar el impacto de un cambio o de un fallo; los equipos modernos obtienen esa imagen de la infraestructura como código y del descubrimiento, con una base de datos de configuración como una vista de ella, no como una lista llevada a mano.**

## Por qué importa

Cuando un servidor de base de datos falla a las 2 de la madrugada, la primera pregunta es qué depende de él. Cuando alguien propone un cambio en una regla de red, la primera pregunta es qué podría romper. Cuando un auditor pregunta cómo está construido un servicio, la primera pregunta es dónde está escrita la verdad. Las tres necesitan lo mismo: una imagen actual y fiable de lo que existe y de cómo se relacionan las partes.

Muchas organizaciones intentan proporcionarla con una base de datos de gestión de la configuración (CMDB): una base de datos de elementos de configuración y relaciones. Muchas también descubren que se convierte en un cementerio de registros obsoletos, llevados a mano, en los que nadie confía. Los registros están desactualizados en semanas, porque el parque real cambia más rápido que cualquiera puede actualizar un formulario. La CMDB se convierte en un artefacto de cumplimiento, no en una herramienta.

Dos ideas rescatan la práctica. Primero, tratar la definición de la infraestructura como código en control de versiones, de modo que la fuente de verdad sea lo que crea el sistema, no una descripción de él. Segundo, poblar la imagen automáticamente a partir del descubrimiento y de ese código, y usarla para preguntas específicas: impacto de un cambio, alcance de un incidente, responsabilidad. Este tema explica la práctica y sus trampas. Se vincula con la gestión de activos (Tema 4.1 — Gestión de activos), la habilitación de cambios (Tema 3.4 — Habilitación de Cambios), la infraestructura como código (Tema 6.3 — Infraestructura como código y GitOps) y el catálogo de servicios (Tema 3.8 — Gestión del Catálogo de Servicios).

## Conceptos clave

**Gestión de la configuración.** En el sentido de ITIL, la práctica de asegurar que la información exacta y fiable sobre la configuración de los servicios, y de los elementos de configuración que los respaldan, esté disponible cuando y donde se necesita. En ingeniería, «gestión de la configuración» también se refiere a la disciplina de mantener los sistemas en un estado conocido y coherente. Wikipedia describe la gestión de la configuración en el sentido más amplio. Esta guía usa ambos sentidos y dice cuál.

**Elemento de configuración (CI).** Cualquier componente que necesita gestionarse para entregar un servicio de TI. Wikipedia describe los elementos de configuración. Los ejemplos incluyen servidores, aplicaciones, bases de datos, dispositivos de red, recursos de nube, certificados y, a veces, documentos y contratos. Cada CI tiene atributos (tipo, versión, responsable, estado) y relaciones con otros CI.

**Base de datos de gestión de la configuración (CMDB).** Un repositorio de CI, sus atributos y sus relaciones. Wikipedia describe la CMDB. Una CMDB no es una hoja de cálculo de activos: su valor está en las relaciones, que permiten preguntas como «¿qué servicios usan esta base de datos?».

**Sistema de gestión de la configuración (CMS).** El conjunto más amplio de herramientas y datos que ofrece una vista de la configuración a través de varias fuentes. ITIL describe un CMS que federa datos de varios lugares, no una única base de datos. Wikipedia describe los sistemas de bases de datos federadas como una forma de combinar fuentes sin copiarlas.

**Mapa de servicio.** Una vista que muestra cómo un servicio depende de sus componentes. Un mapa de servicio técnico vincula aplicaciones, bases de datos, servidores y redes. Una vista de negocio vincula servicios con las personas y los procesos que respaldan. Los mapas se usan en incidentes y cambios. Véase el Tema 3.8 — Gestión del Catálogo de Servicios.

**Líneas base y deriva.** Una línea base es una configuración conocida y aprobada en un momento dado. La deriva es la diferencia entre la línea base y lo que realmente se ejecuta, a menudo por cambios manuales. Wikipedia describe las líneas base en la gestión de la configuración. Detectar y corregir la deriva mantiene los sistemas coherentes y seguros.

**Infraestructura como código (IaC).** Definir la infraestructura, como servidores, redes y recursos de nube, en archivos de texto que se almacenan en control de versiones y se aplican con herramientas. Wikipedia describe la infraestructura como código. Herramientas como Terraform, Ansible y los manifiestos de Kubernetes expresan el estado deseado, y la herramienta hace que la realidad coincida. El código es a la vez la documentación y el mecanismo. Véase el Tema 6.3 — Infraestructura como código y GitOps.

**Idempotencia y estado deseado.** Las buenas herramientas de configuración pueden ejecutarse repetidamente con el mismo resultado: solo hacen lo necesario para alcanzar el estado descrito. Wikipedia describe la idempotencia. Esto hace seguro volver a aplicar la configuración para detectar y corregir la deriva.

**Fuente de verdad.** El lugar donde un hecho es autoritativo. Para la configuración deseada, es el repositorio de código; para lo que realmente se ejecuta, es el descubrimiento o el propio estado de la plataforma; para la responsabilidad, puede ser el catálogo o un registro de equipos. Decida la fuente para cada tipo de hecho y evite mantener a mano el mismo hecho en dos lugares. Wikipedia describe la idea de la fuente única de verdad.

**Descubrimiento.** Herramientas que rastrean redes, cuentas de nube y plataformas para encontrar lo que existe y cómo se conecta. El descubrimiento encuentra lo que nadie registró, pero produce mucho detalle y algo de ruido, y necesita reglas sobre qué elementos conservar y cómo nombrarlos.

**Relaciones y análisis de impacto.** Saber que la aplicación A usa la base de datos B permite preguntar qué se ve afectado si B cambia o falla. Wikipedia describe el análisis de impacto de cambios y los grafos de dependencias. Las bases de datos de grafos, descritas en Wikipedia, son una manera de almacenar y consultar relaciones. El análisis de impacto es tan bueno como las relaciones registradas.

**Calidad de los datos.** La exactitud, la integridad y la actualidad deciden el valor de los datos. Defina qué atributos importan y qué tan frescos deben ser. Un conjunto menor de datos exactos es más útil que uno grande de datos poco fiables. Véase el Tema 7.2 — Fundamentos y gobernanza de datos.

**Alcance.** No intente registrar todo. Elija los CI y las relaciones que necesita para sus decisiones: los servicios críticos, sus componentes principales y su responsabilidad. Amplíe a medida que se demuestre el valor.

**Responsabilidad.** Cada CI o grupo tiene un responsable que responde de él y de los datos sobre él. Sin responsabilidad, los datos se deterioran.

**Contenedores y nube.** Las plataformas modernas crean y destruyen recursos constantemente. Un registro de un contenedor individual no tiene sentido una hora después. Siga en el nivel que importa, como el servicio y el despliegue, y use etiquetas para vincular los recursos con responsables y servicios.

**Cómo encajan las lentes.** La gestión de la configuración respalda lo ágil y la entrega continua haciendo repetibles los entornos. La IA puede ayudar a descubrir relaciones, sugerir vínculos que faltan y responder preguntas sobre el impacto, bajo revisión. La automatización aplica la configuración y mantiene actual la imagen. La analítica usa los datos para encontrar riesgos y costos.

## Buenas prácticas

1. **Empiece por las preguntas que necesita responder.** Enumere las decisiones que apoyarán los datos, como el impacto de un cambio, el alcance de un incidente y la responsabilidad. Registre solo lo que las responde.
2. **Trate el código como la fuente de verdad del estado deseado.** Defina la infraestructura y la configuración en control de versiones, revise los cambios y aplíquelos con herramientas. Evite los cambios manuales en los sistemas en vivo.
3. **Pueble la imagen automáticamente.** Use el descubrimiento y los datos de la plataforma para alimentar la CMDB o el mapa de servicio, y concilie con el código. Limite la entrada manual a los hechos que no pueden descubrirse, como la responsabilidad.
4. **Defina la fuente de cada hecho.** Para cada atributo, decida dónde es autoritativo y dónde se permiten copias. Muestre la fuente y la hora de la última actualización.
5. **Mapee primero los servicios críticos.** Construya mapas de servicio para los servicios más importantes, incluidas las dependencias de proveedores y plataformas compartidas. Pruébelos con un incidente o cambio real.
6. **Detecte y corrija la deriva.** Compare el estado real con el deseado según un calendario y alerte de las diferencias. Trate la deriva repetida como una señal sobre el proceso o el acceso.
7. **Nombre un responsable de cada elemento y de la calidad de los datos.** Muestre los responsables en los registros. Revise con regularidad los registros obsoletos y los huérfanos.
8. **Vincule la configuración con los registros de cambios e incidentes.** Facilite ver desde un cambio qué CI toca y desde un incidente qué CI intervienen. Compruebe que los vínculos se usan.
9. **Use etiquetas de forma coherente.** En los entornos de nube, exija etiquetas de responsable, servicio y entorno en la creación y haga que se cumplan en el pipeline.
10. **Mida la utilidad.** Siga con qué frecuencia se usan los datos en cambios e incidentes y con qué frecuencia fueron erróneos. Corrija las causas y retire los datos que nadie usa.

## Preguntas para conversar con su equipo

**¿Qué decisiones queremos que apoyen los datos de configuración y las apoyan hoy?**
Parta del uso. Espere respuestas como el impacto de un cambio y el alcance de un incidente. Pruébenlo con un cambio reciente. Después elijan un uso y comprueben los datos frente a él.

**¿Dónde está la descripción verdadera de nuestra infraestructura: en el código, en una base de datos, en la cabeza de las personas?**
Pida la fuente de verdad de tres sistemas. Espere varias respuestas. Después elijan un sistema y trasladen su definición al control de versiones.

**¿Cuándo nos engañó por última vez la CMDB y por qué?**
Pida un caso real. Espere relaciones obsoletas o ausentes. Busque la causa, como la entrada manual. Después elijan una fuente de datos para automatizar.

**¿Cómo nos enteramos de que alguien cambia a mano un sistema en vivo?**
Esto prueba la detección de deriva. Espere «no nos enteramos». Después acuerden un análisis en un sistema y una regla sobre lo que ocurre a continuación.

**¿Quién es responsable de cada uno de nuestros elementos de configuración críticos y cómo encontraríamos al responsable a las 3 de la madrugada?**
Pregunte dónde se registra la responsabilidad. Pruébenlo con unos pocos elementos. Después añadan etiquetas de responsable y compruébenlas.

**¿Cómo podría ayudar la IA a mantener exacta nuestra imagen de configuración y qué comprobaríamos a mano?**
La IA puede sugerir relaciones y detectar anomalías. También puede inventar vínculos. Pregunte quién es responsable del uso y cómo se encuentran los errores. Después comparen las relaciones sugeridas por la IA con un mapa verificado manualmente de un servicio.

## En la práctica: un ejemplo de gestión de servicios

El equipo digital de una red ferroviaria nacional opera una plataforma de venta de billetes formada por unos 60 servicios repartidos entre dos proveedores de nube y un antiguo centro de datos local. La CMDB contiene 40.000 registros, introducidos sobre todo a mano, y el equipo de operaciones dice que se equivoca aproximadamente un tercio de las veces. Durante una caída reciente, una cola de mensajes averiada detuvo la venta de billetes; nadie se dio cuenta de que el programa de fidelización también la usaba hasta que los clientes se quejaron.

El responsable de la plataforma fija una meta más estrecha: para los diez servicios más críticos, el mapa de servicio debe ser lo bastante correcto como para responder a «¿qué se ve afectado si falla este componente?» en cinco minutos. El equipo define cada uno de los diez servicios en código, con responsables y dependencias declarados como etiquetas en las definiciones. Un trabajo nocturno lee la plataforma de nube y el repositorio de código, construye el mapa y señala las diferencias entre ambos. El centro de datos está cubierto por descubrimiento, y su salida se hace coincidir con los mismos nombres de servicio con una revisión manual para los elementos nuevos.

En un trimestre, el mapa de los diez servicios inspira confianza. En el siguiente incidente, una base de datos que falla en el servicio de pagos muestra los cinco servicios que leen de ella, y el equipo avisa a sus responsables en minutos. Un informe de deriva encuentra 14 cambios manuales en producción, tres de los cuales eran reglas de grupos de seguridad abiertas durante un incidente antiguo y nunca cerradas.

Qué cambia: los incidentes y los cambios empiezan ahora con un mapa, y la antigua CMDB se retira para estos servicios. Qué sigue siendo difícil: los otros 50 servicios aún no están cubiertos y los equipos que los poseen ven pocas razones para hacer el trabajo; el descubrimiento del centro de datos sigue produciendo ruido; y algunas dependencias, como la API de un proveedor, no pueden descubrirse y se introducen a mano. El responsable de la plataforma elige los diez servicios siguientes según el historial de incidentes y negocia tiempo con sus responsables.

## Cuatro perspectivas

### Equipos de producto y de entrega

Definan su infraestructura y su configuración en código, etiqueten los recursos con responsables y servicios y eviten los cambios manuales en los sistemas en vivo. Mantengan actual la información de dependencias como parte de su diseño.

### Equipos de servicio y de operaciones

Usen el mapa en incidentes y cambios e informen de dónde es erróneo. Detecten la deriva, cierren los cambios temporales y mantengan al día los datos de responsabilidad.

### Liderazgo y gobernanza

Pida evidencia de que los datos se usan y son exactos, no un recuento de registros. Financie la automatización y la disciplina de responsabilidad. Respalde la regla de que los cambios en vivo pasan por el código.

### Clientes y usuarios

Usted se beneficia cuando los proveedores saben qué depende de qué: diagnóstico más rápido y menos sorpresas por cambios. Pregunte si los servicios de los que depende tienen responsables y mapas de impacto.

## Ágil, IA, automatización y analítica

### Ágil

Construya la imagen en pasos pequeños, empezando por los servicios más críticos, y mejórela con las personas que la usan. Revise su utilidad tras los incidentes. Precaución: un proyecto de CMDB de gran explosión repite viejos fracasos; empiece con preguntas y unos pocos servicios.

### IA

La IA puede sugerir relaciones a partir de registros y trazas, responder preguntas de impacto en lenguaje natural y encontrar valores atípicos, con un responsable y verificación humana. Precaución: la IA puede inferir dependencias que no existen o pasar por alto las reales; valídela con incidentes conocidos. Véase el Tema 5.2 — AIOps.

### Automatización

Automatice el descubrimiento, la conciliación, la detección de deriva y el cumplimiento de las etiquetas, con registros y revisión de las excepciones. Precaución: una importación automática puede inundar la base de datos con registros de poco valor; filtre por lo que respalda las decisiones. Véase el Tema 6.3 — Infraestructura como código y GitOps.

### Analítica

Observe la integridad de los datos de los servicios críticos, la exactitud hallada en incidentes, los recuentos de deriva, el tiempo para encontrar al responsable y el uso de los datos en los cambios. Precaución: contar registros o campos rellenados fomenta el volumen sobre la exactitud; mida con qué frecuencia ayudaron los datos y con qué frecuencia engañaron. Véanse el libro *Service Management Metrics* y el Tema 7.2 — Fundamentos y gobernanza de datos.

## Modos de fallo habituales

- **Una CMDB llenada a mano.** Los datos se deterioran rápido. Pueble por descubrimiento y por código.
- **Registrarlo todo.** El ruido oculta el valor. Acote el alcance a las decisiones.
- **Dos fuentes para el mismo hecho.** Discrepan. Declare una sola fuente.
- **Sin responsabilidad.** Nadie corrige los errores. Asigne responsables.
- **Cambios manuales en sistemas en vivo.** La deriva crece. Cambie mediante código y detecte la deriva.
- **Faltan relaciones.** El análisis de impacto falla. Mapee primero los servicios críticos.
- **Seguir recursos efímeros.** Los registros caducan al instante. Siga en el nivel de servicio, con etiquetas.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Alcance | Poco claro | Servidores principales enumerados | Servicios críticos y dependencias mapeados | Alcance ampliado según el valor y los incidentes | Amplia cobertura en todo el parque y los proveedores |
| Fuente de verdad | Hojas de cálculo y memoria | Parte de la infraestructura en código | Estado deseado en código, estado real por descubrimiento | Conciliación automatizada y monitorizada | Vista única coordinada alimentada por código, descubrimiento y plataformas |
| Calidad de los datos | Desconocida | Comprobaciones puntuales | Atributos y frescura definidos | Exactitud medida en incidentes y cambios | Calidad asegurada de forma continua con revisión humana |
| Uso | Rara vez usados | Usados en algunos incidentes | Usados de forma rutinaria en cambios e incidentes | Uso y valor seguidos | Los datos impulsan el riesgo, el costo y la planificación entre servicios |

## Lista de verificación

- [ ] Enumeramos las preguntas que deben responder nuestros datos de configuración.
- [ ] El estado deseado de los sistemas clave vive en control de versiones.
- [ ] El descubrimiento alimenta nuestros mapas de servicio y se concilia con el código.
- [ ] Cada hecho tiene una fuente de verdad definida.
- [ ] Los servicios críticos tienen dependencias mapeadas, probadas con sucesos reales.
- [ ] Detectamos y corregimos la deriva de configuración.
- [ ] Cada elemento de configuración o grupo tiene un responsable.
- [ ] Medimos con qué frecuencia ayudan los datos y con qué frecuencia engañan.

## Prompts de IA

**Encuentre dependencias ausentes a partir de un incidente.**

```text
Here is the timeline of an incident, with the services that were affected: [paste]. Here is our service map for the failing component: [paste].
List affected services that the map does not show as dependent on the failing component, and for each give a question to verify the link. Do not infer dependencies without evidence in the timeline.
List what you are unsure of.
```

**Compare el estado deseado con el real.**

```text
Here is the desired configuration from our code: [paste]. Here is what discovery found running: [paste].
List differences by type (missing, extra, changed), and for each one a question about why it differs. Do not recommend fixes.
List what you are unsure of.
```

**Redacte reglas de etiquetas de responsable.**

```text
Our cloud resources are used by these teams and services: [list]. Tags we want on every resource: [list].
Draft a tagging standard of under one page with rules, allowed values, and how to enforce it in the pipeline. Do not name specific tools unless I list them.
List what you are unsure of.
```

## Habilidades de IA

- [configuration-management](../../../../skills/configuration-management/SKILL.md): úsela para diseñar y mantener registros y relaciones de configuración.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): úsela para rastrear dependencias en un proceso o sistema.
- [mermaid-diagram](../../../../skills/mermaid-diagram/SKILL.md): úsela para dibujar mapas de servicio en texto.
- [data-quality](../../../../skills/data-quality/SKILL.md): úsela para definir y comprobar la calidad de los datos de configuración.

## Fuentes principales

- PeopleCert, páginas de certificación ITIL: la descripción del propietario de la práctica de gestión de la configuración de servicios.
- Kief Morris, *Infrastructure as Code* (2.ª edición, 2020): una guía práctica para definir y gestionar infraestructura en código.
- Wikipedia, "Configuration management" y "Configuration management database": visiones generales de las ideas.
- Wikipedia, "Infrastructure as code": el enfoque de ingeniería del estado deseado.

## Referencias

1. Configuration management — Wikipedia — https://en.wikipedia.org/wiki/Configuration_management
2. Configuration management database — Wikipedia — https://en.wikipedia.org/wiki/Configuration_management_database
3. Configuration item — Wikipedia — https://en.wikipedia.org/wiki/Configuration_item
4. Infrastructure as code — Wikipedia — https://en.wikipedia.org/wiki/Infrastructure_as_code
5. Baseline (configuration management) — Wikipedia — https://en.wikipedia.org/wiki/Baseline_(configuration_management)
6. Idempotence — Wikipedia — https://en.wikipedia.org/wiki/Idempotence
7. Single source of truth — Wikipedia — https://en.wikipedia.org/wiki/Single_source_of_truth
8. Change impact analysis — Wikipedia — https://en.wikipedia.org/wiki/Change_impact_analysis
9. Graph database — Wikipedia — https://en.wikipedia.org/wiki/Graph_database
10. Federated database system — Wikipedia — https://en.wikipedia.org/wiki/Federated_database_system
11. Data quality — Wikipedia — https://en.wikipedia.org/wiki/Data_quality
