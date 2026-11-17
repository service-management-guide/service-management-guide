# Ingeniería de Fiabilidad de Sitios

**La ingeniería de fiabilidad de sitios (SRE) trata las operaciones como un problema de ingeniería: fija metas de fiabilidad medibles, gasta un presupuesto de errores en el cambio, elimina el trabajo repetitivo con software y aprende de los fallos sin culpar; expresa en términos de ingeniería muchas prácticas de la gestión de servicios.**

## Por qué importa

Todo servicio tiene una tensión entre el cambio y la fiabilidad. Los clientes quieren funciones nuevas y quieren que el servicio funcione. Los equipos que empujan el cambio con rapidez causan caídas, y los equipos que protegen la estabilidad lo frenan todo. Sin una manera de sopesar ambos, la discusión la zanja quien más grita o el último incidente.

La ingeniería de fiabilidad de sitios ofrece una forma de hacer explícito el equilibrio. Parte de la idea de que la fiabilidad perfecta ni es posible ni se desea: los usuarios no distinguen entre una disponibilidad del 99,999 por ciento y del 99,99 por ciento cuando su propio dispositivo y su red fallan con más frecuencia, y cada nueve adicional cuesta mucho más. Así que el equipo acuerda una meta que corresponde a lo que los usuarios necesitan, la mide y usa el margen entre la meta y la perfección como presupuesto para el riesgo.

SRE nació en Google a principios de la década de 2000 y se describe en libros que la empresa ha publicado en línea. Muchas otras organizaciones han adoptado partes de ella. Para la gestión de servicios, su valor es que ofrece versiones concretas, de estilo ingenieril, de ideas que ITIL llama gestión de niveles de servicio, gestión de la disponibilidad y mejora continua. Este tema explica las ideas principales y advierte contra copiarlas sin el contexto que las hizo funcionar.

## Conceptos clave

**Qué es SRE.** Wikipedia describe la ingeniería de fiabilidad de sitios como un conjunto de principios y prácticas que aplican aspectos de la ingeniería de software a la infraestructura y las operaciones de TI para crear sistemas escalables y fiables. Un equipo SRE suele incluir personas con habilidades de software y de sistemas que automatizan el trabajo operativo y participan en el diseño para la fiabilidad.

**Indicador de nivel de servicio (SLI).** Una medida de algún aspecto del servicio tal como lo experimentan los usuarios, como la proporción de solicitudes que tienen éxito o la proporción que se completan en menos de 300 milisegundos. Un buen indicador refleja lo que importa a los usuarios, no lo que es fácil de medir.

**Objetivo de nivel de servicio (SLO).** Una meta para un indicador a lo largo de un periodo, por ejemplo «el 99,9 por ciento de las solicitudes tiene éxito en 30 días móviles». El objetivo es una meta interna acordada entre quienes operan el servicio y quienes dependen de él. Wikipedia describe los objetivos de nivel de servicio como parte de los acuerdos de nivel de servicio.

**Acuerdo de nivel de servicio (SLA).** Un contrato con consecuencias, a menudo financieras, si el servicio cae por debajo de un nivel acordado. Un SLA suele fijar una meta más laxa que el SLO interno, de modo que el equipo tiene aviso antes de un incumplimiento. Véase el Tema 3.7 — Gestión de Niveles de Servicio.

**Presupuesto de errores.** La cantidad permitida de falta de fiabilidad: si el objetivo es el 99,9 por ciento, el presupuesto es el 0,1 por ciento restante. Mientras quede presupuesto, el equipo puede asumir riesgos, como liberar más rápido. Cuando el presupuesto se agota, el equipo frena el cambio e invierte en fiabilidad. El presupuesto convierte el equilibrio entre fiabilidad y cambio en una decisión compartida y medible, y no en una discusión.

**Trabajo rutinario (toil).** Trabajo manual, repetitivo, automatizable, táctico y que crece con el servicio sin añadir valor duradero. Ejemplos son reiniciar un servicio a mano, procesar a mano el mismo tipo de solicitud y reconocer alertas ruidosas. La práctica SRE limita la parte del tiempo dedicada al toil, a menudo a alrededor de la mitad, y dedica el resto a trabajo de ingeniería que lo reduce.

**Monitorización y alertas.** Las alertas deben ser accionables y estar ligadas a síntomas que los usuarios sienten, con una respuesta clara. Las alertas ruidosas en las que nadie actúa enseñan a la gente a ignorarlas. Véanse el Tema 3.10 — Monitorización y Gestión de Eventos y el Tema 7.4 — Observabilidad y telemetría.

**Respuesta a incidentes y revisiones sin culpa.** SRE destaca los roles claros durante los incidentes, la comunicación y las revisiones estructuradas posteriores que examinan el sistema y producen acciones con seguimiento. Véanse el Tema 3.2 — Gestión de Incidentes y el Tema 3.3 — Gestión de Problemas.

**Capacidad y rendimiento.** SRE incluye pronosticar la demanda, probar los límites y planificar la capacidad para que el crecimiento no cause fallos. Véase el Tema 3.11 — Disponibilidad, Capacidad y Rendimiento.

**Ingeniería de liberaciones y cambio.** Las liberaciones fiables y repetibles, a menudo con despliegue progresivo y reversión automática, forman parte del trabajo de SRE. Véase el Tema 2.2 — Entrega continua.

**Practicar el fallo.** La ingeniería del caos inyecta fallos de forma deliberada y controlada para encontrar debilidades antes que los incidentes reales. Los días de simulacro (game days) ensayan la respuesta. Véase el Tema 3.12 — Gestión de la Continuidad del Servicio.

**SRE y DevOps.** Ambos comparten muchas ideas. Una descripción común es que SRE es una forma de implementar los principios de DevOps, con un conjunto específico de prácticas como los SLO, los presupuestos de errores y los límites del toil. Véase el Tema 2.5 — DevOps.

**SRE e ITIL.** Los SLO y los presupuestos de errores se sitúan junto a la gestión de niveles de servicio; las revisiones sin culpa, junto a la gestión de problemas; la reducción del toil respalda la mejora continua. SRE describe cómo un equipo técnico puede hacer ese trabajo, mientras que ITIL describe las prácticas que una organización necesita en conjunto.

**Límites de copiar.** SRE se desarrolló en una organización de ingeniería muy grande, con una escala y una dotación de personal específicas. Un equipo pequeño no puede ni necesita copiar su estructura. Empiece con unas pocas ideas: elija un indicador centrado en el usuario, fije un objetivo y escriba qué hará cuando el presupuesto se agote.

**Cómo encajan las lentes.** SRE es en buena parte el lado ingenieril de la lente ágil para los servicios en producción. La IA puede ayudar con la clasificación de alertas y los resúmenes de incidentes, bajo revisión humana. La automatización es la herramienta principal contra el toil. La analítica aporta los SLI y los datos sobre toil e incidentes.

## Buenas prácticas

1. **Elija indicadores que reflejen la experiencia del usuario.** Pregunte qué diría un usuario que es «funcionar»: páginas que cargan, pagos que se completan, archivos que llegan. Mida eso, no el uso de CPU.
2. **Fije un objetivo con las personas que dependen del servicio.** Acuerde un número que corresponda a la necesidad real, escrito con el periodo y cómo se mide. Revíselo cuando cambien las necesidades.
3. **Use un presupuesto de errores para tomar decisiones.** Escriba qué ocurre cuando el presupuesto está casi agotado, como congelar los cambios arriesgados, y quién decide. Acuérdelo antes de la primera vez que importe.
4. **Mantenga los objetivos más estrictos que los acuerdos.** Fije su meta interna para notar los problemas antes de incumplir un contrato. Véase el Tema 3.7 — Gestión de Niveles de Servicio.
5. **Cuente y limite el toil.** Registre cuánto tiempo se va en trabajo manual repetitivo y fije un límite. Dedique el resto a eliminar las mayores fuentes de toil.
6. **Alerte sobre síntomas y mantenga las alertas accionables.** Cada alerta debe decir qué falla para los usuarios y qué hacer. Elimine o arregle las alertas en las que nadie actúa.
7. **Comparta la guardia con equidad y de forma sostenible.** Limite el número de avisos por turno, ofrezca formación y una ruta de escalamiento documentada, y revise la carga con regularidad. Véase el Tema 8.3 — Cambio Organizacional y Adopción.
8. **Revise los incidentes sin culpa y dé seguimiento.** Escriba la cronología, los factores contribuyentes y acciones con responsables y fechas. Compruebe que las acciones se hacen.
9. **Practique el fallo en condiciones seguras.** Realice días de simulacro y pequeños experimentos de caos en un entorno de pruebas o con exposición limitada, con un botón de parada claro.
10. **Empiece con poco.** Elija un servicio importante, defina uno o dos SLI y un SLO y aprenda del resultado antes de ampliar.

## Preguntas para conversar con su equipo

**¿Qué dirían nuestros usuarios que significa «funcionar» para este servicio y lo medimos?**
Este es el punto de partida de los indicadores. Los equipos suelen medir la salud de los servidores. Pregunte cuándo fue la última vez que los usuarios estuvieron descontentos mientras nuestros paneles estaban en verde. Después elijan un indicador orientado al usuario para medir.

**¿Qué tan fiable necesita ser realmente este servicio y quién lo decidió?**
Las metas suelen fijarse por costumbre, por ejemplo «cinco nueves». Pregunte qué hacen los usuarios cuando el servicio está caído y cuánto cuesta una hora de caída. Espere desacuerdo. Después redacten un objetivo y compruébenlo con un cliente.

**¿Qué haremos cuando hayamos gastado el presupuesto de errores y lo haremos de verdad?**
Las políticas que nunca se aplican enseñan a la gente a ignorarlas. Pregunte qué ocurrió la última vez que sufrió la fiabilidad y el cambio continuó. Después acuerden una respuesta pequeña y específica y quién decide.

**¿Cuáles son las tres mayores fuentes de toil de nuestro equipo y qué haría falta para eliminar cada una?**
Pida a la gente que enumere las tareas repetitivas y estime el tiempo. Espere reinicios manuales, correcciones de datos y solicitudes de acceso. Después elijan un elemento y estimen el trabajo para automatizarlo, frente al tiempo ahorrado en un año.

**¿Cuántos avisos recibieron nuestras personas de guardia el mes pasado y cuántos requirieron acción humana?**
Esto prueba la calidad de las alertas y la carga de trabajo. Pida los números; si nadie los sabe, es un hallazgo. Después elijan la alerta más ruidosa para arreglar o eliminar.

**¿Dónde podría ayudar la IA con las alertas o los resúmenes de incidentes y cómo notaríamos sus errores?**
La IA puede agrupar alertas, redactar resúmenes y sugerir pasos de runbook. También puede ocultar una señal real o inventar una causa. Pregunte quién es su responsable y cómo se comprueba su salida. Después prueben una herramienta de resúmenes junto con el proceso humano y comparen.

## En la práctica: un ejemplo de gestión de servicios

El equipo del archivo digital de una biblioteca nacional opera un servicio de búsqueda para investigadores. El equipo de seis personas hace guardia por turnos. Los avisos llegan de noche aproximadamente una vez por semana, sobre todo por una alerta de espacio en disco de un servidor por lotes que alguien limpia a mano. La dirección pide «99,99 por ciento de disponibilidad» en el plan anual, aunque nadie ha medido el rendimiento actual.

La jefa del equipo propone un experimento más pequeño. Con dos investigadores, el equipo define un indicador: la proporción de solicitudes de búsqueda que devuelven resultados en menos de dos segundos. Lo miden durante un mes y obtienen 99,2 por ciento. Los investigadores dicen que solo notan lentitud cuando las búsquedas tardan más de cinco segundos, lo que ocurre en aproximadamente el 0,3 por ciento de las solicitudes, sobre todo durante una reconstrucción nocturna del índice. Acuerdan un objetivo del 99,5 por ciento en menos de dos segundos a lo largo de 30 días y una política de presupuesto de errores: si se gasta más del 75 por ciento del presupuesto en un periodo, el equipo pausa las liberaciones no urgentes y corrige la causa mayor.

El equipo también cuenta el toil. Limpiar el disco a mano lleva unas dos horas al mes y despierta a alguien. Automatizan la limpieza, añaden una alerta de crecimiento rápido en lugar del disco lleno y ensayan un día de simulacro de restauración del índice desde la copia de seguridad.

Qué cambia: los avisos nocturnos bajan y las liberaciones se pausan una vez en el primer trimestre cuando el presupuesto se agota, con la causa rastreada hasta una consulta lenta. Qué sigue siendo difícil: el plan anual sigue diciendo «99,99 por ciento», porque la alta dirección no ha aceptado sustituirlo; la reconstrucción del índice depende de un servicio de almacenamiento que gestiona otro departamento; y el equipo no está seguro de si los investigadores de otras zonas horarias experimentan el servicio de la misma forma. La jefa lleva la redacción del plan a la próxima revisión.

## Cuatro perspectivas

### Equipos de producto y de entrega

Compartan el objetivo y el presupuesto con operaciones. Incluyan el trabajo de fiabilidad en el backlog, liberen de forma progresiva y observen el efecto de los cambios. Cuando se agote el presupuesto, únanse al esfuerzo de reducir la causa.

### Equipos de servicio y de operaciones

Definan los indicadores con los usuarios, mantengan accionables las alertas y dediquen su tiempo a ingeniería que elimine el toil. Lleven la carga de guardia y los datos de incidentes a la planificación. Escriban revisiones que conduzcan a acciones con seguimiento.

### Liderazgo y gobernanza

Acuerde objetivos que reflejen la necesidad real y respalde la política de presupuesto cuando exija frenar el cambio. Financie el tiempo para reducir el toil y para el trabajo de fiabilidad. No pida perfección.

### Clientes y usuarios

Deberían preguntarle qué significa «funcionar» para usted y decirle cuál es la meta. Informe los problemas con claridad y espere saber qué se hizo. Si la meta le parece equivocada para sus necesidades, dígalo.

## Ágil, IA, automatización y analítica

### Ágil

SRE añade metas de fiabilidad medibles a la entrega y la mejora continuas. Mantenga involucradas a las partes interesadas en fijar los objetivos y revíselos con regularidad. Precaución: los presupuestos de errores no sustituyen al criterio; algunos incidentes, como una filtración de datos, importan sea cual sea el presupuesto.

### IA

La IA puede agrupar alertas relacionadas, proponer causas probables y redactar resúmenes de incidentes. Cada uso necesita un responsable y una persona responsable de las decisiones, y una forma de comparar las sugerencias de la IA con lo que realmente ocurrió. Precaución: una IA que suprime alertas para reducir el ruido puede ocultar fallos reales; pruébela con incidentes conocidos. Véase el Tema 5.2 — AIOps.

### Automatización

Automatice el toil: reinicios, limpiezas, accesos rutinarios y diagnósticos repetidos, con registros, límites y una forma de apagarla. Precaución: la automatización que actúa sobre producción puede empeorar un incidente; añada límites de frecuencia y una parada manual. Véase el Tema 6.6 — Automatización de runbooks y autorremediación.

### Analítica

Use los SLI, el cumplimiento del SLO, el consumo del presupuesto de errores, las horas de toil y la calidad de las alertas. Precaución: los objetivos elegidos por ser fáciles de alcanzar, o los indicadores que ignoran partes de la experiencia del usuario, dan una falsa tranquilidad; contrástelos con las quejas de los usuarios. Véanse el Tema 7.4 — Observabilidad y telemetría y el libro *Service Management Metrics*.

## Modos de fallo habituales

- **Copiar números de otros.** Se adoptan los «cinco nueves» sin conocer la necesidad. Decida a partir de la necesidad del usuario y del costo.
- **Indicadores que no ven al usuario.** Los paneles están en verde y los usuarios se quejan. Mida lo que experimentan los usuarios.
- **Una política de presupuesto que nadie sigue.** El cambio continúa cuando el presupuesto se agota. Acuerde la respuesta por adelantado y aplíquela.
- **Ruido de alertas.** Las personas de guardia ignoran los avisos. Haga accionable cada alerta.
- **El toil como normal.** El equipo nunca tiene tiempo para automatizar. Cuéntelo y fije un límite.
- **SRE como un cambio de nombre de operaciones.** No se adoptan las prácticas. Defina indicadores, objetivos y presupuestos.
- **Cultura del héroe.** Una persona resuelve cada incidente. Comparta el conocimiento y los runbooks.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Indicadores y objetivos | Sin medidas orientadas al usuario | Solo medidas de infraestructura | SLI y SLO centrados en el usuario para los servicios clave | Objetivos revisados con usuarios y costos | Objetivos coordinados entre servicios dependientes |
| Presupuesto de errores | Ninguno | Discutido | Política escrita y aplicada | Resultados de la política revisados | Presupuestos compartidos entre equipos y socios |
| Toil | Sin medir | Identificado de manera informal | Contado y limitado | Reducido con automatización con seguimiento | Reducido entre servicios con herramientas compartidas |
| Aprendizaje de incidentes | Culpa | Algunas revisiones | Revisiones sin culpa con acciones con seguimiento | Cumplimiento de acciones y reincidencia medidos | Aprendizaje compartido en toda la organización |

## Lista de verificación

- [ ] Tenemos al menos un indicador orientado al usuario para cada servicio importante.
- [ ] Cada uno tiene un objetivo acordado con quienes dependen de él.
- [ ] Escribimos qué ocurre cuando el presupuesto de errores está casi agotado.
- [ ] Nuestros objetivos internos son más estrictos que nuestros acuerdos.
- [ ] Seguimos el toil y tenemos un límite.
- [ ] Las alertas son accionables y las ruidosas se arreglan o eliminan.
- [ ] La carga de guardia se mide y es sostenible.
- [ ] Las revisiones de incidentes son sin culpa y las acciones se siguen hasta el cierre.

## Prompts de IA

**Redacte indicadores candidatos.**

```text
Our service: [describe what it does and who uses it]. What users complain about: [list].
Propose up to five candidate service level indicators, each with what it measures, how it could be computed from [available data sources], and one way it could mislead. Do not choose an objective.
List what you are unsure of.
```

**Calcule el consumo del presupuesto de errores.**

```text
Our objective: [for example, 99.5 percent of requests under two seconds over 30 days]. Here are daily counts of good and total events for the period: [paste data].
Calculate attainment so far, the error budget used as a percentage, and the daily burn rate, showing each calculation. Do not predict beyond the data.
List what you are unsure of.
```

**Clasifique candidatos de toil.**

```text
Here is a list of repetitive tasks our team does, with how often and how long each takes: [paste list].
Compute hours per month for each, rank them, and for the top five list one question about whether automating it is safe. Do not recommend specific tools.
List what you are unsure of.
```

## Habilidades de IA

- [service-level-agreement](../../../../skills/service-level-agreement/SKILL.md): úsela para relacionar los objetivos con los acuerdos.
- [postmortem](../../../../skills/postmortem/SKILL.md): úsela para realizar revisiones sin culpa con acciones con seguimiento.
- [chaos-testing](../../../../skills/chaos-testing/SKILL.md): úsela para planificar experimentos de fallo seguros.
- [capacity-planning](../../../../skills/capacity-planning/SKILL.md): úsela para pronosticar la demanda y los límites.

## Fuentes principales

- Betsy Beyer, Chris Jones, Jennifer Petoff y Niall Richard Murphy (eds.), *Site Reliability Engineering: How Google Runs Production Systems* (2016), disponible gratis en sre.google: la fuente principal de las prácticas.
- Betsy Beyer y otros (eds.), *The Site Reliability Workbook* (2018): orientación práctica para la adopción.
- Wikipedia, "Site reliability engineering": una visión general neutral.
- Wikipedia, "Service-level objective": antecedentes de los términos.

## Referencias

1. Site reliability engineering — Wikipedia — https://en.wikipedia.org/wiki/Site_reliability_engineering
2. Service-level objective — Wikipedia — https://en.wikipedia.org/wiki/Service-level_objective
3. Service level indicator — Wikipedia — https://en.wikipedia.org/wiki/Service_level_indicator
4. Service-level agreement — Wikipedia — https://en.wikipedia.org/wiki/Service-level_agreement
5. Capacity planning — Wikipedia — https://en.wikipedia.org/wiki/Capacity_planning
6. Reliability engineering — Wikipedia — https://en.wikipedia.org/wiki/Reliability_engineering
7. Chaos engineering — Wikipedia — https://en.wikipedia.org/wiki/Chaos_engineering
8. Observability (software) — Wikipedia — https://en.wikipedia.org/wiki/Observability_(software)
9. Postmortem documentation — Wikipedia — https://en.wikipedia.org/wiki/Postmortem_documentation
10. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
