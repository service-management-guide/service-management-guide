# Estrategia de automatización

**Una estrategia de automatización decide qué automatizar y qué no, en qué orden y con qué controles; sigue el principio de ITIL «optimizar y automatizar» simplificando primero, automatizando el trabajo estable y repetido con registros y reversión, y tratando cada automatización como un producto que necesita un responsable y mantenimiento.**

## Por qué importa

La automatización es la palanca más antigua de las operaciones tecnológicas y la que más a menudo se acciona sin un plan. Alguien escribe un script para ahorrar una hora y funciona. Otra persona escribe otro. En dos años un equipo tiene cientos de scripts, trabajos programados y reglas de flujos de trabajo, escritos por personas que ya se han ido, que nadie entiende y de los que depende todo. Un fallo silencioso en uno de ellos tumba un servicio, y el equipo descubre lo que automatizó al ver qué dejó de funcionar.

El error opuesto también es común. Un equipo fija la meta de «automatizar el 80 por ciento de las tareas» y automatiza cosas que ocurren dos veces al año, o que dependen del criterio, o que cambian cada mes. El esfuerzo nunca se amortiza, y la automatización hay que mantenerla para siempre. Mientras tanto, el trabajo que habría devuelto diez veces la inversión sigue siendo manual porque es aburrido y nadie preguntó por él.

Una estrategia evita ambos extremos. Elige qué automatizar según la evidencia del retorno, ordena el trabajo de modo que simplificar vaya antes que programar con scripts y trata el resultado como algo que debe tener un responsable y mantenerse. También afronta un costo humano real: cuando las máquinas se encargan de lo rutinario, las personas se quedan con las excepciones difíciles y con menos oportunidades de practicar lo básico. Este tema expone esas decisiones. Es la puerta de entrada a la Parte 6 y se relaciona con la automatización de flujos de trabajo (Tema 6.2 — Automatización y orquestación de flujos de trabajo), la infraestructura como código (Tema 6.3 — Infraestructura como código y GitOps), los pipelines (Tema 6.4 — Pipelines y cambio automatizado), el autoservicio (Tema 6.5 — Autoservicio y cumplimiento automatizado) y la automatización de runbooks (Tema 6.6 — Automatización de runbooks y autorremediación). Su vínculo con la IA está en el Tema 5.1 — IA en la gestión de servicios.

## Conceptos clave

**Automatización.** El uso de tecnología para realizar tareas con menos intervención humana. Wikipedia describe la automatización en sentido amplio en la industria. En la gestión de servicios va desde un script programado, pasando por flujos de trabajo que abarcan varias herramientas, hasta sistemas que deciden y actúan. La palabra cubre cosas muy distintas, así que nombre el tipo en cada conversación.

**Optimizar, luego automatizar.** El principio rector de ITIL 4 «optimizar y automatizar» dice que hay que asegurarse de que el trabajo sea tan eficaz como pueda ser y luego usar la tecnología para lograr más (véase el Tema 1.5 — Principios Rectores de ITIL). El orden es deliberado. Automatizar un proceso confuso o con desperdicio fija su confusión y su desperdicio donde están y lo hace más difícil de cambiar. El pensamiento lean llega a la misma conclusión (véase el Tema 2.4 — Lean y kaizen).

**Qué hace buena candidata a una tarea.** Busque trabajo frecuente, bien entendido, basado en reglas, propenso a errores cuando se hace a mano y estable. Las descripciones de Wikipedia sobre la automatización de procesos de negocio y la automatización robótica de procesos (RPA) describen objetivos comunes, como mover datos entre sistemas. Las malas candidatas son raras, cambiantes, ambiguas o dependientes del criterio o de la empatía.

**Retorno de la automatización.** Una regla aproximada es comparar el tiempo ahorrado al año, más el valor de menos errores y de una respuesta más rápida, con el costo de construir, operar y mantener la automatización. Wikipedia describe el retorno de la inversión y el análisis de costo-beneficio. Incluya el mantenimiento: las automatizaciones se rompen cuando cambian los sistemas que las rodean. Indique supuestos y rangos, ya que los números son estimaciones.

**Dónde buscar.** Empiece por los datos. La minería de procesos, descrita en Wikipedia, usa registros de eventos para mostrar cómo fluye realmente el trabajo. Los datos de tickets y solicitudes muestran qué tareas se repiten. Pregunte a quienes hacen el trabajo qué les aburre o les frustra. El principio de Pareto sugiere que una pequeña parte de los tipos de tareas supone la mayor parte del volumen.

**Niveles de automatización.** Desde manual, pasando por asistida (una herramienta prepara, una persona actúa), hasta condicional (el sistema actúa y una persona aprueba), hasta autónoma dentro de límites. Elija el nivel por tarea según el costo de un error y la capacidad de deshacerlo. Véase el Tema 5.5 — IA agéntica y supervisión humana.

**Controles.** Toda automatización necesita un registro de lo que hizo y cuándo, límites sobre lo que puede tocar, una forma de detenerla y una forma de revertir sus efectos. Wikipedia describe el diseño a prueba de fallos (fail-safe): cuando un sistema falla, debe hacerlo de un modo que cause el menor daño. Véase el Tema 3.4 — Habilitación de Cambios.

**La automatización como producto.** Una automatización tiene usuarios, un responsable, un backlog, documentación, pruebas y un ciclo de vida. Sin responsable, se deteriora. El artículo de Wikipedia sobre la deuda técnica se aplica: los scripts escritos deprisa y nunca mantenidos se convierten en pasivos. Véase el Tema 2.8 — Propiedad de Productos y Servicios.

**Primero los procedimientos estándar.** Un procedimiento escrito y probado, como un runbook o un procedimiento operativo estándar (descrito en Wikipedia), es la mejor especificación para la automatización. Si no puede escribir lo que hace la persona, no está listo para automatizarlo. Véase el Tema 3.9 — Gestión del Conocimiento.

**Herramientas y plataformas.** Las opciones van desde scripts de shell y planificadores como cron, pasando por plataformas de flujos de trabajo y orquestación, hasta RPA y plataformas de bajo código. Wikipedia describe cada una. Elija la herramienta más simple que sea mantenible y prefiera las que tienen control de versiones, pruebas y auditoría integrados. Véase el Tema 6.2 — Automatización y orquestación de flujos de trabajo.

**Habilidades y las ironías de la automatización.** En un artículo muy conocido de 1983, la investigadora Lisanne Bainbridge describió las ironías de la automatización: cuando la automatización se encarga de la mayor parte de una tarea, la persona se queda con los casos difíciles y raros, pero con menos práctica y menos sensibilidad para el sistema. Wikipedia describe el artículo. La lección práctica es mantener a las personas en práctica, mostrarles lo que hace la automatización y diseñar los traspasos de modo que una persona pueda intervenir.

**Factor autobús y conocimiento.** La automatización puede concentrar el conocimiento en el autor. Wikipedia describe el factor autobús. Revise, documente y comparta, para que más de una persona pueda mantener cada automatización.

**Seguridad.** Las automatizaciones guardan credenciales y tienen poder. Una automatización comprometida es un objetivo atractivo. Dé a cada una su propia identidad con permisos mínimos, guarde los secretos con seguridad y revise el acceso. Véase el Tema 3.13 — Gestión de la Seguridad de la Información.

**Personas y confianza.** El personal puede temer que la automatización amenace sus empleos o que se le culpe de los fallos. Involúcrelo en la elección de qué automatizar, diga cómo se usará el tiempo ahorrado y reconozca el trabajo de construir y mantener la automatización. Véase el Tema 8.3 — Cambio Organizacional y Adopción.

**Cómo encajan las lentes.** La automatización es la tercera lente. La práctica ágil sugiere automatizar en pasos pequeños y aprender de cada uno. La IA añade una forma de decidir y de redactar; la automatización actúa. La analítica identifica candidatas y muestra si la automatización cumplió.

## Buenas prácticas

1. **Parta de los datos y del dolor.** Mire los volúmenes de tickets y solicitudes, la minería de procesos donde esté disponible y lo que el personal encuentra tedioso. Elija por evidencia, no por lo que esté de moda.
2. **Simplifique primero.** Elimine los pasos y las aprobaciones que no añaden valor antes de programarlos. Pregunte cuál sería el proceso si empezara de nuevo.
3. **Ponga el procedimiento por escrito.** Documente los pasos, las entradas, las salidas y las excepciones. Pruebe el procedimiento haciendo que otra persona lo siga. Úselo como especificación.
4. **Estime el retorno con honestidad.** Compare el tiempo ahorrado con el costo de construcción y mantenimiento, usando rangos. Cuente la reducción de errores y la rapidez donde importen. Descarte las candidatas que no se amortizan.
5. **Automatice en pasos pequeños.** Empiece con una parte, como recopilar datos para una persona, y luego amplíe. Libere a menudo y aprenda.
6. **Elija el nivel de autonomía según el riesgo.** Deje que las tareas reversibles de bajo riesgo se ejecuten solas con registros, y mantenga a una persona en el circuito para las importantes o irreversibles.
7. **Integre registros, límites y reversión.** Registre cada acción, limite cuánto puede cambiar una ejecución y escriba la vuelta atrás. Pruébela.
8. **Dé a cada automatización un responsable y un hogar.** Guarde el código en control de versiones con revisión y pruebas, documéntelo y enumérelo en un registro con su responsable y lo que depende de él.
9. **Mantenga vivas las habilidades.** Muestre a las personas lo que hace la automatización, ensaye la alternativa manual para las tareas importantes y rote a las personas por los casos difíciles.
10. **Revise y retire.** Compruebe con regularidad qué automatizaciones se usan y cuáles fallan, arréglelas o elimínelas y mida el beneficio frente a la estimación.

## Preguntas para conversar con su equipo

**¿Qué tareas repetimos con más frecuencia y cuáles nos gustaría más no volver a hacer nunca?**
Pregunten a todos. Esperen altas de cuentas, informes y correcciones de datos. Después elijan tres y estimen las horas al mes.

**Para nuestra candidata principal, ¿cómo sería el proceso si lo simplificáramos antes de automatizarlo?**
Dibújenlo. Esperen pasos que nadie puede justificar. Después eliminen uno antes de escribir ningún código.

**¿De qué automatizaciones ya dependemos, quién es responsable de cada una y qué ocurre si una falla en silencio?**
Hagan una lista. Esperen sorpresas y huérfanas. Después nombren responsables y añadan una comprobación de fallo.

**¿Qué tareas nuestras deben seguir siendo manuales porque necesitan criterio o empatía?**
Discutan. Esperen acuerdo sobre los asuntos sensibles y desacuerdo en el borde. Después escriban el límite y quién puede cambiarlo.

**¿Cómo mantendremos las habilidades para hacer la tarea a mano si la automatización no está disponible?**
Pregunten cuándo fue la última vez que alguien la hizo manualmente. Esperen que hace mucho. Después planifiquen un ensayo periódico.

**¿Cómo usaremos el tiempo que libera la automatización y se lo hemos dicho al equipo?**
Esto genera confianza. Esperen incertidumbre y algo de miedo. Después acuerden a qué irá el tiempo ahorrado y díganlo abiertamente.

## En la práctica: un ejemplo de gestión de servicios

Un registro nacional de nacimientos, defunciones y matrimonios tiene un pequeño equipo de TI de diez personas que da soporte a 600 empleados. Un directivo ha propuesto «automatizar todo lo posible» y tiene una lista de 120 tareas candidatas. El responsable del servicio sospecha que la mayoría no se amortizaría y pide una clasificación.

El equipo dedica dos semanas a recoger datos. A partir de seis meses de tickets, descubre que el 70 por ciento del volumen corresponde a ocho tipos de tareas, encabezados por las altas de cuentas de personal nuevo, los restablecimientos de contraseña, los cambios en buzones compartidos y la elaboración del informe mensual. Estiman las horas al mes de cada uno y preguntan a las personas implicadas qué sale mal. Las altas de cuentas, con 40 horas al mes, implican once pasos manuales, de los cuales tres están duplicados y dos son aprobaciones que nunca se han rechazado. Simplifican a ocho pasos antes de escribir nada.

Automatizan por etapas. Primero, un script reúne la información y crea las cuentas, con un técnico revisando el resultado. Tras dos meses de ejecuciones sin errores, el script se ejecuta sin supervisión para los roles estándar, con un registro y una comprobación diaria, y un técnico atiende los roles no estándar. Los restablecimientos de contraseña pasan a la vía de autoservicio del sistema de identidad, que proporciona el proveedor. El informe mensual, que lleva 12 horas, depende de datos de tres sistemas en formatos distintos, y el equipo decide no automatizarlo hasta que se arreglen las fuentes de datos.

Cada automatización se registra, con un responsable, un repositorio y una reversión. A un técnico se le asigna rotar por el manejo manual cada trimestre, para conservar la habilidad. El directivo acuerda que el tiempo ahorrado irá a un backlog de actualizaciones atrasadas y lo dice en una reunión del equipo.

Qué cambia: se liberan unas 70 horas al mes y el personal nuevo tiene cuentas operativas el primer día. Qué sigue siendo difícil: el script hay que actualizarlo cada vez que cambia la estructura del directorio, lo que ocurrió dos veces en el primer trimestre; dos técnicos son los únicos que lo entienden; y el directivo aún pregunta por qué no se hicieron las otras 110 candidatas. El responsable muestra los datos y acuerda revisar la lista cada semestre.

## Cuatro perspectivas

### Equipos de producto y de entrega

Construyan pensando en la automatización: expongan interfaces claras, eviten los pasos manuales en la liberación y el despliegue y proporcionen runbooks que otros puedan convertir en scripts. Sean dueños de las automatizaciones que crean.

### Equipos de servicio y de operaciones

Conozcan sus tareas repetidas, simplifíquenlas y automaticen las estables con registros y reversión. Mantengan vivas las habilidades manuales y registren lo que automatizan con un responsable.

### Liderazgo y gobernanza

Pida evidencia del retorno y de los controles, no un recuento de automatizaciones. Diga cómo se usará el tiempo ahorrado. Financie el mantenimiento y las habilidades además de la construcción.

### Clientes y usuarios

Usted se beneficia de un servicio más rápido y más coherente, y aun así debería poder llegar a una persona para las excepciones. Diga al proveedor dónde la automatización no atendió su caso.

## Ágil, IA, automatización y analítica

### Ágil

Automatice en incrementos pequeños, con las personas que hacen el trabajo, y revise los resultados. Trate el backlog de automatización como parte del backlog de mejoras. Precaución: la velocidad de entrega de automatizaciones puede superar la capacidad de mantenerlas; limite el trabajo en curso y retire las antiguas.

### IA

La IA puede ayudar a encontrar candidatas agrupando tareas, redactar scripts y procedimientos y decidir dentro de límites qué hacer. Toda automatización asistida por IA necesita el mismo responsable, las mismas pruebas y los mismos controles. Precaución: los scripts generados pueden contener errores o patrones inseguros; revíselos y pruébelos como cualquier otro código. Véase el Tema 5.1 — IA en la gestión de servicios.

### Automatización

Este tema es la propia lente: elegir, simplificar, construir con controles, ser responsable y revisar. Precaución: la automatización concentra poder y oculta complejidad; mantenga legibles los registros y dé a las personas los medios para entenderla y detenerla.

### Analítica

Use los datos de tickets, la minería de procesos, los datos de tiempo y error y los resultados tras la automatización. Precaución: las estimaciones de horas ahorradas suelen inflarse y medidas como el «número de automatizaciones» premian el volumen; siga el tiempo realmente liberado, los errores y los fallos. Véanse el Tema 7.6 — Analítica de procesos y de flujos de valor y el libro *Service Management Metrics*.

## Modos de fallo habituales

- **Automatizar un desorden.** Se conserva la confusión. Simplifique primero.
- **Automatización por objetivos.** Las tareas se eligen por el recuento. Elija por retorno y necesidad.
- **Scripts huérfanos.** Nadie los posee ni los entiende. Regístrelos, asigne responsables y revíselos.
- **Sin registros ni reversión.** Un fallo no puede rastrearse ni deshacerse. Intégrelos.
- **Las habilidades se desvanecen.** Nadie sabe hacer la tarea a mano. Ensaye y rote.
- **Costo de mantenimiento oculto.** La automatización se rompe con cada cambio cercano. Cuente el mantenimiento en el retorno.
- **Miedo y secretismo.** El personal se resiste. Involúcrelo y diga cómo se usarán las ganancias.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Selección | Scripts ad hoc | Candidatas enumeradas | Candidatas elegidas según datos y retorno | Resultados comparados con las estimaciones | Portafolio elegido y reequilibrado según el valor y el riesgo |
| Controles | Ninguno | Algo de registro | Registros, límites y reversión como norma | Controles probados y auditados | Controles integrados en plataformas compartidas |
| Responsabilidad | Individuos | Autores conocidos | Registro con responsables, control de versiones y revisión | Mantenimiento y fallos seguidos | Responsabilidad coordinada entre equipos |
| Personas | Miedo o descuido | Conciencia | Habilidades mantenidas vivas y beneficios compartidos | Habilidades y carga de trabajo revisadas | Roles y habilidades planificados con la automatización en toda la organización |

## Lista de verificación

- [ ] Elegimos las candidatas con datos de volumen, errores y esfuerzo.
- [ ] Simplificamos cada proceso antes de automatizarlo.
- [ ] Cada automatización sigue un procedimiento escrito y probado.
- [ ] Estimamos el retorno incluido el mantenimiento.
- [ ] Cada automatización tiene un responsable, control de versiones y una entrada en el registro.
- [ ] Los registros, los límites y la reversión están integrados y probados.
- [ ] Mantenemos vivas las habilidades manuales en las tareas importantes.
- [ ] Dijimos al equipo cómo se usará el tiempo ahorrado.

## Prompts de IA

**Clasifique candidatas a partir de datos de tickets.**

```text
Here is a summary of ticket categories with counts per month and average handling time: [paste].
Compute hours per month for each category, rank them, and for the top eight list questions to ask about whether the task is stable, rules-based, and safe to automate. Do not recommend automating any.
List what you are unsure of.
```

**Redacte una especificación a partir de un procedimiento.**

```text
Here is the written procedure for a task: [paste].
List the inputs, steps, decision points, outputs, and exceptions, and mark each step as "clear", "needs judgment", or "unclear". List questions to answer before automation. Do not write code.
List what you are unsure of.
```

**Revise una automatización en cuanto a controles.**

```text
Here is a description of an automation: what it does, what it can change, who owns it, how it runs: [paste].
List missing controls from this set: logging, limits, rollback, stop switch, owner, permissions, tests, and failure alerts, quoting the description for each you consider present. Do not assume controls that are not stated.
List what you are unsure of.
```

## Habilidades de IA

- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): úsela para analizar pasos y esperas antes de automatizar.
- [roi-analysis](../../../../skills/roi-analysis/SKILL.md): úsela para estimar el retorno de una automatización.
- [runbook](../../../../skills/runbook/SKILL.md): úsela para escribir el procedimiento que se convierte en la especificación.
- [kaizen](../../../../skills/kaizen/SKILL.md): úsela para simplificar antes de automatizar.
- [value-stream-map](../../../../skills/value-stream-map/SKILL.md): úsela para encontrar los pasos que vale la pena automatizar.

## Fuentes principales

- PeopleCert, páginas de certificación ITIL: la descripción del propietario de la orientación de ITIL, incluido optimizar y automatizar.
- Lisanne Bainbridge, "Ironies of Automation" (*Automatica*, 1983): el artículo clásico sobre automatización y habilidad humana.
- Betsy Beyer y otros (eds.), *Site Reliability Engineering* (2016), capítulo sobre la eliminación del toil, gratis en sre.google.
- Wikipedia, "Automation" y "Business process automation": visiones generales de las ideas.

## Referencias

1. Automation — Wikipedia — https://en.wikipedia.org/wiki/Automation
2. Business process automation — Wikipedia — https://en.wikipedia.org/wiki/Business_process_automation
3. Robotic process automation — Wikipedia — https://en.wikipedia.org/wiki/Robotic_process_automation
4. Ironies of Automation — Wikipedia — https://en.wikipedia.org/wiki/Ironies_of_Automation
5. Process mining — Wikipedia — https://en.wikipedia.org/wiki/Process_mining
6. Return on investment — Wikipedia — https://en.wikipedia.org/wiki/Return_on_investment
7. Cost–benefit analysis — Wikipedia — https://en.wikipedia.org/wiki/Cost%E2%80%93benefit_analysis
8. Technical debt — Wikipedia — https://en.wikipedia.org/wiki/Technical_debt
9. Standard operating procedure — Wikipedia — https://en.wikipedia.org/wiki/Standard_operating_procedure
10. Fail-safe — Wikipedia — https://en.wikipedia.org/wiki/Fail-safe
11. Bus factor — Wikipedia — https://en.wikipedia.org/wiki/Bus_factor
12. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
