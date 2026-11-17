# Observabilidad y telemetría

**La observabilidad es la capacidad de hacer preguntas nuevas a un sistema en funcionamiento y obtener respuestas de los datos que emite: métricas, registros y trazas con un contexto coherente; rinde cuando la telemetría se diseña desde el principio, se estandariza sobre formatos abiertos, se mantiene a un costo asumible y se usa para entender la experiencia del usuario, no solo la salud de las máquinas.**

## Por qué importa

La monitorización responde a preguntas que usted pensó de antemano. ¿Está activo el servicio? ¿Está lleno el disco? ¿Supera la latencia los dos segundos? Son buenas preguntas y detectan los fallos que ya ha visto. Pero los servicios modernos fallan de maneras nuevas. Un cambio en un componente ralentiza una solicitud en otro. Los datos inusuales de un solo cliente activan una ruta rara. Una dependencia situada tres capas más abajo se degrada y nadie tiene un panel para ella.

Cuando llega un fallo nuevo, el equipo necesita hacer preguntas que nadie anticipó: ¿qué solicitudes son lentas, para qué usuarios, a través de qué servicios, desde qué versión? Si el sistema emite datos ricos y conectados, el equipo puede seguir el rastro. Si no, adivina, añade registros, vuelve a desplegar y espera a que el fallo ocurra de nuevo. Wikipedia describe la observabilidad en software como la capacidad de entender el estado interno de un sistema a partir de sus salidas externas, una idea tomada de la teoría de control.

El trabajo práctico está en la telemetría: los datos que los sistemas emiten sobre sí mismos. Una buena telemetría se diseña, es coherente y está conectada, de modo que una queja de un usuario pueda rastrearse hasta una solicitud, la solicitud hasta los servicios que tocó y la lentitud hasta una llamada concreta. Este tema describe los principales tipos de telemetría, los estándares que la hacen portable y los costos y riesgos que conlleva. Se apoya en la monitorización (Tema 3.10 — Monitorización y Gestión de Eventos) y se vincula con SRE (Tema 2.6 — Ingeniería de fiabilidad de sitios), AIOps (Tema 5.2 — AIOps) y la gobernanza de datos (Tema 7.2 — Fundamentos y gobernanza de datos).

## Conceptos clave

**Telemetría.** Datos recogidos de un sistema y enviados a un lugar donde pueden examinarse. Wikipedia describe la telemetría en general. En software, las señales principales son las métricas, los registros y las trazas, con otras más nuevas como los perfiles y los eventos.

**Métricas.** Números medidos a lo largo del tiempo, como la tasa de solicitudes, la tasa de errores, la latencia, el uso de memoria y la profundidad de las colas. Las métricas son baratas de almacenar y buenas para tendencias, alertas y paneles. Resumen, así que pierden detalle sobre solicitudes individuales. Las bases de datos de series temporales, descritas en Wikipedia, las almacenan de forma eficiente; Prometheus es un ejemplo de código abierto muy usado.

**Registros (logs).** Anotaciones con marca de tiempo de sucesos discretos, como un mensaje de error o una transacción completada. Wikipedia describe el registro en informática. Los registros contienen detalle y son voluminosos y caros de almacenar y buscar. Los registros estructurados, con campos con nombre coherentes en lugar de texto libre, son más fáciles de consultar y de vincular con otras señales.

**Trazas.** Un registro del recorrido de una solicitud por las partes de un sistema distribuido, que muestra por qué servicios pasó y cuánto tardó en cada uno. Wikipedia describe el rastreo (tracing) en software. Las trazas responden a «¿adónde se fue el tiempo?» en sistemas construidos con muchos servicios, como los microservicios, que Wikipedia también describe.

**Contexto y correlación.** Lo que hace poderosas a las tres señales juntas es el contexto compartido: un identificador que ata una línea de registro a la traza y a la solicitud del usuario, y etiquetas como servicio, versión y entorno en todo. Sin contexto compartido, tiene tres montones de datos. Con él, puede pasar de una solicitud lenta en una métrica a la traza y de ahí a la línea de registro que la explica.

**Instrumentación.** Añadir el código que produce telemetría. Wikipedia describe la instrumentación en programación. Puede ser automática, mediante bibliotecas y agentes, o manual, cuando los desarrolladores añaden las señales que importan al negocio, como «pedido realizado». Instrumente lo que hacen los usuarios, no solo lo que hacen las máquinas.

**OpenTelemetry y los estándares abiertos.** OpenTelemetry es un proyecto de código abierto, bajo la Cloud Native Computing Foundation (que Wikipedia describe), que proporciona formatos y herramientas comunes para emitir métricas, registros y trazas, independientes de la herramienta que los almacena y analiza. Consulte el sitio del propio proyecto para conocer su estado actual. El objetivo es permitirle recoger la telemetría una vez y enviarla a cualquier sistema final compatible, reduciendo la dependencia. Wikipedia describe los estándares abiertos y la dependencia del proveedor (vendor lock-in) en términos generales. Véase el Tema 3.14 — Gestión de Proveedores.

**Monitorización frente a observabilidad.** La monitorización vigila condiciones conocidas y alerta; la observabilidad permite explorar las desconocidas. Son complementarias: las alertas dicen que algo va mal, la exploración dice por qué. Véase el Tema 3.10 — Monitorización y Gestión de Eventos.

**Indicadores de nivel de servicio a partir de la telemetría.** Los SLI, como la proporción de solicitudes que tienen éxito dentro de un tiempo, se calculan a partir de la telemetría. Defínalos desde el punto de vista del usuario y mídalos donde la solicitud del usuario entra en el sistema. Véanse el Tema 2.6 — Ingeniería de fiabilidad de sitios y el artículo de Wikipedia sobre objetivos de nivel de servicio.

**Telemetría de usuarios y de negocio.** La monitorización de usuarios reales y la monitorización sintética, descritas en Wikipedia, muestran la experiencia desde fuera: tiempos de carga de páginas, éxito de los recorridos, errores en navegadores y aplicaciones. Los eventos de negocio, como los registros y los pagos, vinculan la salud técnica con los resultados. Véase el Tema 7.7 — Analítica de experiencia y sentimiento.

**Cardinalidad y costo.** La cardinalidad es el número de valores distintos de una etiqueta. Una métrica etiquetada por identificador de usuario tiene una cardinalidad enorme y puede desbordar un almacén de métricas. Wikipedia describe la cardinalidad en el modelado de datos. El volumen de telemetría crece con el tráfico y el detalle, y el costo de almacenamiento y procesamiento crece con él. Decida qué conservar con todo el detalle, qué muestrear y qué agregar.

**Muestreo.** Conservar solo una fracción de las trazas o los registros. Wikipedia describe el muestreo en estadística. El muestreo reduce el costo y puede ocultar sucesos raros; considere conservar todos los errores y las solicitudes lentas y muestrear las normales.

**Retención.** Cuánto tiempo se conserva la telemetría. Conserve brevemente los datos de alto detalle y más tiempo los agregados. La retención afecta al costo, a la investigación y a la privacidad. Véase el Tema 7.2 — Fundamentos y gobernanza de datos.

**Privacidad y seguridad en la telemetría.** Los registros y las trazas pueden contener datos personales, credenciales y secretos, por accidente o a propósito. Wikipedia describe los datos personales. Depure o evite los campos sensibles en el origen, controle el acceso y fije la retención. La telemetría es también una fuente de datos de seguridad. Véase el Tema 3.13 — Gestión de la Seguridad de la Información.

**Observabilidad para la IA.** Los sistemas de IA necesitan su propia telemetría: entradas, salidas, latencia, costo, tasas de error y de rechazo, retroalimentación de los usuarios y señales de deriva. Registre lo suficiente para investigar una respuesta errónea, con cuidado por los datos registrados. Véase el Tema 5.1 — IA en la gestión de servicios.

**Plataforma y responsabilidad.** Muchas organizaciones operan una plataforma de telemetría compartida, con estándares de nomenclatura, etiquetado y retención, y con equipos que son responsables de las señales de sus servicios. Un equipo de plataforma proporciona herramientas y orientación; los equipos de servicio son responsables de lo que emiten y de cómo lo usan.

**Cómo encajan las lentes.** La observabilidad es la base de datos de la analítica y de AIOps. La práctica ágil trata la instrumentación como parte de la definición de terminado. La automatización usa la telemetría para escalar y remediar.

## Buenas prácticas

1. **Instrumente a medida que construye.** Trate la telemetría como parte de la funcionalidad. Inclúyala en la definición de terminado y revísela con el diseño.
2. **Estandarice nombres y contexto.** Acuerde nombres de servicios, conjuntos de etiquetas, unidades y un identificador de solicitud que viaje por todos los servicios. Documéntelos y compruébelos en el pipeline.
3. **Emita registros estructurados.** Use campos con nombre coherentes, incluya el identificador de solicitud y mantenga los mensajes cortos. Evite registrar secretos y datos personales innecesarios.
4. **Rastree los caminos que importan.** Instrumente los principales recorridos de usuario y las llamadas entre servicios, y propague el contexto por cada salto, incluidas las colas y las llamadas externas.
5. **Defina los indicadores desde la vista del usuario.** Calcule los SLI a partir de la telemetría en el punto de contacto con el usuario y añada eventos de negocio que muestren si los usuarios lograron lo que venían a hacer.
6. **Use formatos abiertos.** Prefiera los estándares abiertos para emitir telemetría, de modo que pueda cambiar de sistema final sin reinstrumentar. Compruebe el soporte en sus plataformas.
7. **Controle el costo deliberadamente.** Fije presupuestos de telemetría, evite las etiquetas de alta cardinalidad, muestree el tráfico normal, conserve los errores y las solicitudes lentas y escalone la retención.
8. **Proteja la telemetría.** Depure los datos sensibles en el origen, restrinja el acceso y aplique reglas de retención. Monitorice el acceso a los almacenes de telemetría.
9. **Hágala utilizable.** Dé a los equipos paneles compartidos, consultas guardadas y formación sobre cómo investigar. Vincule las alertas con la telemetría pertinente y con los runbooks.
10. **Revise la telemetría tras los incidentes.** Pregunte qué no pudo ver durante el incidente y añádalo. Retire las señales que nadie usa.

## Preguntas para conversar con su equipo

**En nuestro último incidente, ¿qué quisimos saber y no pudimos averiguar?**
Pregunten a quienes respondieron. Esperen brechas en trazas, contexto o datos a nivel de usuario. Después elijan una brecha y añadan la señal.

**¿Podemos seguir la solicitud de un solo usuario por todos los servicios que toca?**
Pruébenlo con una solicitud real. Esperen cortes en las colas y las llamadas externas. Después propaguen el identificador a través del primer corte.

**¿Qué registramos que no deberíamos y qué no registramos que sí deberíamos?**
Miren una muestra de registros. Esperen secretos, datos personales y ruido. Después acuerden una regla y una depuración.

**¿Cuánto gastamos en telemetría y qué obtenemos a cambio?**
Pidan la cifra y las mayores fuentes. Esperen sorpresas. Después elijan la señal más cara y menos usada para recortar o muestrear.

**¿Cuánto dependemos de nuestra herramienta de telemetría actual y qué haría falta para cambiar?**
Estimen. Esperen «mucho». Después elijan un servicio para instrumentar con un estándar abierto.

**¿Qué telemetría producen nuestras funciones de IA y podríamos investigar con ella una respuesta errónea?**
Pregunten. Esperen registros mínimos. Después acuerden qué registrar, con límites de privacidad, y prueben una investigación.

## En la práctica: un ejemplo de gestión de servicios

La API pública de un servicio meteorológico nacional atiende varios millones de solicitudes al día a través de ocho servicios internos. Los usuarios se quejan de respuestas lentas ocasionales para ciertas ubicaciones. La monitorización muestra la API dentro de su meta de latencia en promedio, y cada servicio parece sano por separado. El ingeniero de guardia pasa dos días persiguiendo el problema.

El equipo de plataforma ha estado migrando a instrumentación con OpenTelemetry. En la pasarela de la API y en cuatro de los ocho servicios, las solicitudes llevan un identificador de traza y cada servicio registra tramos (spans) con tiempos. Con las trazas, un ingeniero filtra las solicitudes lentas de la última semana y ve que casi todas pasan por la misma llamada: una búsqueda en el servicio de datos geográficos de ubicaciones con caracteres inusuales en sus nombres, que tarda diez veces más de lo normal. Los otros cuatro servicios aún no están instrumentados, pero la brecha ya es lo bastante estrecha como para investigarla a mano. La causa es un índice de base de datos que falta para esas consultas, y la corrección lleva una hora.

El equipo revisa el costo. El gasto en telemetría ha crecido un 40 por ciento en seis meses, sobre todo por una etiqueta en una métrica que incluye la ubicación solicitada, que tiene cientos de miles de valores. Eliminan la etiqueta, conservan la ubicación en trazas y registros y muestrean el 5 por ciento de las trazas ordinarias manteniendo todos los errores y las solicitudes lentas. Una depuración elimina las direcciones IP de los registros tras 24 horas, después de que el oficial de privacidad señalara que cuentan como datos personales en algunas jurisdicciones.

El equipo añade también una señal de negocio: un recuento de llamadas a la API que devolvieron un resultado vacío, que en el pasado los usuarios comunicaban como «sin datos». Muestra un patrón tras cada actualización del modelo.

Qué cambia: las investigaciones llevan horas en lugar de días y el costo baja en una tercera parte. Qué sigue siendo difícil: cuatro servicios siguen sin trazas y dos pertenecen a otra agencia; la regla de muestreo ya ocultó un error raro que solo apareció en tráfico no muestreado y se encontró en un registro; y los ingenieros necesitan práctica para usar bien las herramientas de trazas. El equipo programa una sesión de formación y fija una regla para conservar todas las trazas que tengan algún error.

## Cuatro perspectivas

### Equipos de producto y de entrega

Incorporen la telemetría a las funcionalidades: nombres coherentes, identificadores de solicitud, registros estructurados, tramos en los caminos clave y eventos de negocio. Eviten los secretos en las señales y revisen la telemetría en el diseño.

### Equipos de servicio y de operaciones

Usen la telemetría para investigar, no solo para alertar. Mantengan vinculados los paneles, las consultas y los runbooks, y digan a los desarrolladores lo que no pudieron ver. Vigilen el costo y la calidad de la telemetría.

### Liderazgo y gobernanza

Financie la plataforma, los estándares y la formación. Pida evidencia de que la telemetría acorta las investigaciones y refleja la experiencia del usuario. Fije presupuestos y reglas de privacidad y prefiera los estándares abiertos.

### Clientes y usuarios

Usted se beneficia cuando un proveedor puede rastrear su problema hasta una causa con rapidez. Dé detalles al comunicar una incidencia, como la hora y lo que hizo, que ayudan a encontrar su solicitud.

## Ágil, IA, automatización y analítica

### Ágil

Añada la instrumentación en pasos pequeños con cada funcionalidad y refínela tras cada incidente. Revise los paneles con el equipo y retire los que nadie usa. Precaución: añadir la telemetría al final produce brechas; inclúyala en la definición de terminado.

### IA

La IA puede resumir trazas y registros, agrupar anomalías y responder preguntas sobre la telemetría, con responsables y comprobaciones. Las funciones de IA también necesitan su propia telemetría. Precaución: el análisis de la IA depende de la calidad y el contexto de los datos; unas malas etiquetas producen malas conclusiones. Véase el Tema 5.2 — AIOps.

### Automatización

Automatice la instrumentación donde lo permitan las bibliotecas, imponga los estándares de nombres y etiquetas en el pipeline y use la telemetría para escalar y remediar con límites. Precaución: la automatización activada por telemetría ruidosa puede fallar; pruebe los umbrales y añada límites. Véase el Tema 6.6 — Automatización de runbooks y autorremediación.

### Analítica

Use la telemetría para los SLI, las tendencias, la capacidad y la experiencia del usuario, y para el costo de la propia telemetría. Precaución: el muestreo y la agregación cambian lo que los datos pueden mostrar, y las etiquetas de alta cardinalidad pueden distorsionar o romper sistemas; anote los límites en los informes. Véanse el Tema 7.1 — Analítica para la gestión de servicios y el libro *Service Management Metrics*.

## Modos de fallo habituales

- **Tres montones de datos.** Las métricas, los registros y las trazas no pueden vincularse. Comparta identificadores y etiquetas.
- **La telemetría como ocurrencia tardía.** Aparecen brechas en los incidentes. Instrumente con la funcionalidad.
- **Etiquetas de alta cardinalidad.** Sufren el costo y el rendimiento. Limite las etiquetas y conserve el detalle en trazas y registros.
- **Secretos y datos personales en los registros.** Se filtran datos sensibles. Depure en el origen y controle el acceso.
- **Dependencia de una sola herramienta.** Cambiar es costoso. Use estándares abiertos.
- **Todo se conserva para siempre.** El costo sube. Escalone la retención y muestree.
- **Paneles que nadie usa.** Se desperdicia esfuerzo. Pode y vincule con decisiones.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Cobertura | Métricas de infraestructura | Servicios clave con métricas y registros | Métricas, registros y trazas con contexto compartido en los recorridos clave | Cobertura revisada tras los incidentes | Cobertura coherente entre servicios y proveedores |
| Estándares | Ninguno | Convenciones locales | Nombres, etiquetas y formatos abiertos acordados | Estándares comprobados en el pipeline | Estándares compartidos que evolucionan con la plataforma |
| Costo y retención | Sin gestionar | Conciencia | Presupuestos, muestreo y retención escalonada | Costo por señal y valor revisados | Costo y valor optimizados de forma continua |
| Protección | Poco clara | Control de acceso básico | Reglas de depuración, acceso y retención | Cumplimiento monitorizado | Controles integrados en la recogida y el almacenamiento |

## Lista de verificación

- [ ] La telemetría es parte de nuestra definición de terminado.
- [ ] Tenemos acordados nombres, etiquetas, unidades y un identificador de solicitud que viaja entre servicios.
- [ ] Los registros están estructurados y libres de secretos y de datos personales innecesarios.
- [ ] Los recorridos de usuario clave se rastrean de extremo a extremo.
- [ ] Los SLI se calculan a partir de la telemetría en el punto de contacto con el usuario.
- [ ] Usamos formatos abiertos para emitir telemetría.
- [ ] Tenemos un presupuesto de telemetría con muestreo y retención escalonada.
- [ ] Revisamos lo que no pudimos ver tras cada incidente.

## Prompts de IA

**Encuentre brechas de telemetría a partir de un incidente.**

```text
Here is the timeline of an incident and notes on what responders tried to find out: [paste].
List each question the responders could not answer, what signal would have answered it (metric, log, trace, user data), and a question for the owning team. Do not assume any signal exists.
List what you are unsure of.
```

**Revise una muestra de registros en busca de datos sensibles.**

```text
Here is a sample of log lines from our service: [paste, already partially scrubbed].
List any content that looks like secrets, personal data, or internal details, quoting the exact text, and suggest categories of scrub rules. Do not guess whether any is real.
List what you are unsure of.
```

**Proponga un estándar de nombres y etiquetas.**

```text
Our services: [list]. Our environments: [list]. Our teams: [list]. What we want to be able to filter by: [list].
Draft a one-page standard for service names, label keys, allowed values, and request identifiers, with examples. Warn about labels that could have very many distinct values. Do not name a vendor.
List what you are unsure of.
```

## Habilidades de IA

- [anomaly-analysis](../../../../skills/anomaly-analysis/SKILL.md): úsela para examinar patrones inusuales en la telemetría.
- [data-pipeline](../../../../skills/data-pipeline/SKILL.md): úsela para diseñar cómo se mueve y se almacena la telemetría.
- [data-governance](../../../../skills/data-governance/SKILL.md): úsela para fijar reglas de privacidad, retención y acceso.
- [key-risk-indicators](../../../../skills/key-risk-indicators/SKILL.md): úsela para elegir señales de alerta temprana.
- [performance-testing](../../../../skills/performance-testing/SKILL.md): úsela para probar la latencia y la capacidad con telemetría.

## Fuentes principales

- OpenTelemetry (opentelemetry.io): el estándar abierto y las herramientas para métricas, registros y trazas.
- Charity Majors, Liz Fong-Jones y George Miranda, *Observability Engineering* (2022): una guía de profesionales sobre el enfoque.
- Betsy Beyer y otros (eds.), *Site Reliability Engineering* (2016), capítulo sobre monitorización, gratis en sre.google.
- Wikipedia, "Observability (software)" y "Telemetry": visiones generales de las ideas.

## Referencias

1. Observability (software) — Wikipedia — https://en.wikipedia.org/wiki/Observability_(software)
2. Telemetry — Wikipedia — https://en.wikipedia.org/wiki/Telemetry
3. Logging (computing) — Wikipedia — https://en.wikipedia.org/wiki/Logging_(computing)
4. Tracing (software) — Wikipedia — https://en.wikipedia.org/wiki/Tracing_(software)
5. Time series database — Wikipedia — https://en.wikipedia.org/wiki/Time_series_database
6. Prometheus (software) — Wikipedia — https://en.wikipedia.org/wiki/Prometheus_(software)
7. Cloud Native Computing Foundation — Wikipedia — https://en.wikipedia.org/wiki/Cloud_Native_Computing_Foundation
8. Instrumentation (computer programming) — Wikipedia — https://en.wikipedia.org/wiki/Instrumentation_(computer_programming)
9. Cardinality (data modeling) — Wikipedia — https://en.wikipedia.org/wiki/Cardinality_(data_modeling)
10. Real user monitoring — Wikipedia — https://en.wikipedia.org/wiki/Real_user_monitoring
11. Synthetic monitoring — Wikipedia — https://en.wikipedia.org/wiki/Synthetic_monitoring
12. OpenTelemetry — Cloud Native Computing Foundation — https://opentelemetry.io
