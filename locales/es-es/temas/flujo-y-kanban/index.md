# Flujo y kanban

**El flujo es lo fluido que avanza el trabajo desde la solicitud hasta su terminación, y visualizar el trabajo, limitar el trabajo en curso y medir cuánto tarda el trabajo son las prácticas que lo mejoran; encajan bien con los equipos de servicio dirigidos por interrupciones, y Kanban es una forma con nombre propio de aplicarlas.**

## Por qué importa

Los equipos de servicio siempre están ocupados. Las solicitudes, los incidentes, los cambios y las mejoras llegan sin aviso y la gente cambia de una cosa a otra todo el día. El equipo se siente productivo, pero los clientes esperan mucho tiempo a que algo termine y nadie sabe decir por qué.

El pensamiento de flujo explica la brecha. El trabajo que se empieza pero no se termina espera en colas, y en la mayoría de los equipos el tiempo de espera es mucho mayor que el de trabajo. Añadir más personas o empezar más elementos no ayuda y a menudo empeora las cosas, porque más trabajo en curso significa colas más largas. El remedio es ver el trabajo, limitar cuánto hay en curso a la vez y medir cuánto tardan los elementos desde la solicitud hasta su terminación.

Esas ideas vienen de la manufactura lean, y la herramienta más conocida es el tablero kanban. Muchos equipos ágiles usan Kanban o un tablero inspirado en él. Esta guía trata a Kanban como una opción entre varias. Si su equipo elige usar Kanban, las ideas de aquí le ayudarán; si no, los principios de visibilidad, límites y medición del flujo siguen aplicándose.

## Conceptos clave

**Flujo.** El movimiento del trabajo a través de un sistema. Un sistema con buen flujo entrega elementos de forma constante y predecible, con esperas cortas. El mal flujo se manifiesta en tiempos de entrega largos y variables, acumulaciones antes de ciertos pasos y urgencias frecuentes.

**Trabajo en curso (WIP).** El número de elementos empezados pero no terminados. El artículo de Wikipedia sobre el trabajo en proceso describe la idea en la manufactura. En el trabajo de conocimiento y de servicios, el WIP suele ser invisible, porque los elementos viven en bandejas de entrada, hilos de chat y cabezas de las personas. Hacerlo visible es el primer paso.

**Ley de Little.** En un sistema estable, el tiempo medio que pasa un elemento en el sistema es igual al número medio de elementos en el sistema dividido por la tasa media a la que salen. Si su equipo termina cinco elementos por semana y tiene 25 en curso, el elemento medio tarda unas cinco semanas. Para acortar el tiempo sin trabajar más rápido, reduzca el número en curso.

**Plazo de entrega y tiempo de ciclo.** El plazo de entrega (lead time) es cuánto espera un cliente desde la solicitud hasta la entrega. El tiempo de ciclo es cuánto tarda un elemento una vez que empieza el trabajo. Las definiciones varían entre equipos, así que escriba las suyas. El rendimiento (throughput) es el número de elementos terminados en un periodo.

**El método kanban.** Kanban significa «letrero» o «tarjeta» en japonés. El Sistema de Producción de Toyota, desarrollado con Taiichi Ohno, usaba tarjetas para señalar cuándo se necesitaban más piezas, de modo que la producción fuera tirada por la demanda. David J. Anderson adaptó estas ideas al trabajo de conocimiento en la década de 2000 como el método Kanban, que describe Wikipedia. Sus prácticas centrales incluyen visualizar el trabajo, limitar el WIP, gestionar el flujo, hacer explícitas las políticas, implementar ciclos de retroalimentación y mejorar de forma colaborativa.

**El tablero.** Un tablero kanban muestra los elementos de trabajo como tarjetas en columnas que representan pasos, como «por hacer», «en curso», «en revisión» y «hecho». Los tableros pueden ser físicos o digitales. Un tablero no define un proceso; muestra el que usted tiene.

**Límites de WIP.** Un tope al número de elementos permitidos en un paso o en el tablero. Cuando se alcanza el límite, el equipo no empieza trabajo nuevo; ayuda a terminar algo. Al principio parece lento y hace la entrega más rápida y estable.

**Clases de servicio.** No todos los elementos deberían esperar en la misma cola. Un equipo podría tratar los elementos urgentes, como los incidentes mayores, como una clase «urgente» con un límite estricto, los elementos con fecha fija como otra clase y los ordinarios como estándar. Las clases hacen explícitas las concesiones e impiden que todo elemento se declare urgente.

**Cuellos de botella.** Un paso que limita el rendimiento del sistema. La teoría de las restricciones, desarrollada por Eliyahu Goldratt, aconseja encontrar el cuello de botella, asegurarse de que nunca esté ocioso y mejorarlo, porque acelerar cualquier otra cosa no ayuda. Un límite de WIP suele revelar el cuello de botella como la columna donde se acumula el trabajo.

**Diagrama de flujo acumulado.** Un gráfico que muestra el número de elementos en cada estado a lo largo del tiempo. Las bandas que se ensanchan revelan colas que se forman. Es una forma rápida de ver si el flujo es estable.

**Apto para el trabajo de servicios.** Los equipos de servicio manejan una corriente de tipos de trabajo distintos con llegada impredecible, lo que se ajusta mejor a los métodos de flujo que a los ciclos de planificación fijos. Si su equipo elige usar sprints, las medidas de flujo siguen ayudando a ver lo que ocurre dentro de ellos.

**Cómo encajan las lentes.** La práctica ágil pide entrega y mejora continuas; las medidas de flujo muestran si eso está ocurriendo. La IA puede resumir el tablero o sugerir categorías de clasificación, bajo revisión. La automatización puede actualizar tarjetas y hacer cumplir los límites. La analítica proporciona las medidas, con el riesgo habitual de que se conviertan en metas.

## Buenas prácticas

1. **Visualice todo el trabajo.** Ponga en el tablero todos los tipos de trabajo: incidentes, solicitudes, cambios, mejoras e interrupciones no planificadas. Un tablero que muestra solo el trabajo de «proyecto» oculta la carga.
2. **Defina las columnas a partir del proceso real.** Cree columnas que coincidan con cómo avanza realmente el trabajo, incluidos los estados de espera como «esperando al cliente». Los estados de espera son donde se esconde el retraso.
3. **Fije límites de WIP y respételos.** Empiece con un límite ligeramente por debajo del número actual y ajuste tras observar. Cuando una columna está llena, ayude a avanzar elementos antes de empezar algo nuevo.
4. **Haga explícitas las políticas.** Escriba en el tablero o junto a él qué significan «listo» y «hecho», cómo se priorizan los elementos y quién puede acelerar. Las reglas no escritas crean discusiones.
5. **Use las clases de servicio con intención.** Defina un número reducido de clases, con sus propios límites y tiempos esperados. Revise con regularidad la clase urgente: si siempre está llena, el sistema está sobrecargado o las prioridades no están claras.
6. **Mida el plazo de entrega, el tiempo de ciclo y el rendimiento.** Infórmelos como distribuciones, por ejemplo «el 85 por ciento de los elementos termina en 9 días», no solo como promedios. Las distribuciones muestran el riesgo que los clientes afrontan de verdad.
7. **Mire los elementos más antiguos.** Revise en una reunión regular los elementos que llevan más tiempo en curso. Los elementos viejos suelen señalar una dependencia bloqueada o un responsable poco claro.
8. **Encuentre y mejore el cuello de botella.** Cuando el trabajo se acumula en un lugar, pregunte qué lo limita y trate eso como la mejora prioritaria.
9. **Revise el tablero en conjunto.** Una conversación breve y regular junto al tablero, de pie o no, da al equipo una visión compartida. Concéntrese en los elementos bloqueados y envejecidos, no en informar.
10. **Haga evolucionar el tablero.** Cambie columnas, límites y políticas a medida que aprende. Si su equipo elige usar Kanban, trátelo como un punto de partida que se adapta.

## Preguntas para conversar con su equipo

**¿Cuánto trabajo tenemos en curso ahora mismo y cómo lo sabemos?**
Los equipos suelen sorprenderse del número cuando cuentan. Pida a cada persona que enumere en qué trabaja, incluidas las interrupciones. Espere una lista larga y algunos elementos que nadie recuerda. Después acuerden un primer límite, aunque sea aproximado.

**¿Dónde espera más el trabajo y a quién espera?**
La espera es la principal fuente de retraso. Las respuestas típicas son aprobaciones, un especialista, el cliente o un proveedor. Use un ejemplo real con fechas. Después elijan una espera y pregunten quién podría acortarla.

**¿Qué tipos de trabajo no deberían esperar nunca en la cola ordinaria?**
Esto introduce las clases de servicio. Los incidentes mayores y los plazos legales son respuestas comunes, y la gente puede añadir sus favoritos. Insista en los criterios. Después acuerden una lista corta y un límite para el trabajo acelerado.

**¿Qué ocurre cuando el tablero está lleno y llega una solicitud nueva?**
Esto prueba la disciplina. Los equipos suelen empezar el elemento nuevo de todos modos. Pregunte cuál debería ser la política y quién decide. Después acuerden una regla para cada tipo de solicitud.

**¿Qué medida nos diría que el flujo mejoró y cómo podría malinterpretarse?**
Elija una medida, como el tiempo en que termina el 85 por ciento de los elementos, y discutan cómo podría manipularse, por ejemplo dividiendo elementos o cerrándolos y reabriéndolos. Después acuerden cómo contrastar la medida con la realidad.

**¿Dónde podrían la automatización o la IA ayudar al flujo sin ocultar problemas?**
Las actualizaciones automáticas de tarjetas y las categorías sugeridas pueden ahorrar tiempo. También pueden disfrazar un elemento estancado de «en curso». Pregunte quién es responsable de cada regla automatizada y cómo se encuentran los errores. Después elijan un uso de bajo riesgo y una fecha de revisión.

## En la práctica: un ejemplo de gestión de servicios

El equipo de soporte de sistemas clínicos de un hospital atiende unas 100 solicitudes por semana: cambios de cuentas, solicitudes de informes, correcciones menores y fallas urgentes. El equipo de siete personas usa una bandeja de correo y una herramienta de tickets, y los clínicos se quejan de que las solicitudes «desaparecen».

El jefe del equipo monta en la sala un tablero físico con una tarjeta por cada elemento abierto, unas 70 en total. Al contar, resulta que cada persona tiene en promedio diez elementos en curso. El jefe añade columnas para «esperando al clínico» y «esperando al proveedor», que contienen 25 de los 70 elementos. El equipo fija un límite de cuatro en curso por persona y dos elementos acelerados a la vez. Acuerdan políticas: las fallas urgentes que afectan a la atención del paciente van al carril urgente y se trabajan primero; todo lo demás es primero en entrar, primero en salir.

Tras dos meses, la mediana del tiempo para terminar una solicitud baja de 12 a 7 días hábiles, y el elemento abierto más antiguo tiene 20 días en lugar de 70. La columna «esperando al clínico» crece y el equipo se da cuenta de que a muchas solicitudes les falta información. Añade un breve formulario que plantea las preguntas que suelen faltar.

Qué cambia: los clínicos pueden ver dónde está una solicitud y el equipo dedica menos tiempo a responder correos de «¿dónde está?». Qué sigue siendo difícil: los elementos que esperan al proveedor siguen tardando semanas y el equipo no puede controlarlos; el carril urgente se usa a veces para solicitudes que son simplemente importantes para una persona de alto rango; y la herramienta digital de tickets y el tablero físico divergen cuando la gente olvida actualizar uno de los dos. El equipo revisa las políticas cada mes y planea llevar el tablero a la herramienta.

## Cuatro perspectivas

### Equipos de producto y de entrega

Usen el tablero para ver todo el trabajo, incluidas las interrupciones operativas, y limiten el trabajo en curso para que las funciones y correcciones terminen. Compartan las medidas de flujo con operaciones para encontrar dónde esperan los cambios.

### Equipos de servicio y de operaciones

Ustedes son los usuarios naturales de los métodos de flujo. Hagan visible todo el flujo, acuerden clases de servicio y usen límites para que las interrupciones no ahoguen el trabajo planificado. Lleven evidencia de los retrasos a quienes pueden eliminarlos.

### Liderazgo y gobernanza

Pida las medidas de flujo como distribuciones y mire los elementos más antiguos. Evite empujar más trabajo a un sistema lleno. Apoye a los equipos para que cambien las políticas en lugar de exigir más producción.

### Clientes y usuarios

Debería poder ver dónde está su solicitud, cuánto suelen tardar las de ese tipo y qué espera el equipo. Diga al equipo cuándo algo es urgente y por qué, porque una razón clara le ayuda a decidir.

## Ágil, IA, automatización y analítica

### Ágil

El flujo respalda la entrega y la mejora continuas al exponer retrasos y fomentar elementos pequeños y terminados. Precaución: un tablero no es por sí solo un sistema de mejora; úselo para impulsar una revisión regular con las partes interesadas.

### IA

La IA puede resumir el tablero, sugerir categorías para elementos nuevos y señalar elementos envejecidos o bloqueados, con una persona que revise y un responsable para cada regla. Precaución: un clasificador de IA que adivina mal envía el trabajo a la cola equivocada; siga la tasa de correcciones. Véase el Tema 5.1 — IA en la gestión de servicios.

### Automatización

Automatice la creación de tarjetas desde la herramienta de tickets, actualice los estados a partir de eventos y avise cuando se superen los límites de WIP. Mantenga un registro. Precaución: los cambios automáticos de estado pueden hacer que el flujo parezca mejor de lo que es; muestree elementos reales para comprobarlo. Véase el Tema 6.2 — Automatización y orquestación de flujos de trabajo.

### Analítica

Use distribuciones del plazo de entrega, el rendimiento, el envejecimiento del trabajo en curso y diagramas de flujo acumulado. Precaución: cualquiera de ellos puede manipularse dividiendo, fusionando o reetiquetando elementos, y comparar equipos ignora las diferencias en el trabajo; úselos para entender su propio sistema. Véanse el Tema 7.6 — Analítica de procesos y de flujos de valor y el libro *Service Management Metrics*.

## Modos de fallo habituales

- **Un tablero sin límites.** Las tarjetas se acumulan y nada cambia. Fije un límite y respételo.
- **Solo el trabajo planificado en el tablero.** Las interrupciones son invisibles y la carga se subestima. Muestre todos los tipos de trabajo.
- **Todo se acelera.** El carril rápido se atasca. Límítelo y revise cada uso.
- **Solo promedios.** El promedio oculta retrasos largos. Informe distribuciones y los elementos más antiguos.
- **Manipular las medidas.** Los elementos se dividen o se cierran antes de tiempo. Contraste las medidas con elementos reales.
- **Tratar Kanban como la meta.** El equipo copia un tablero e ignora el flujo. Mire los tiempos de entrega y las esperas.
- **Optimizar un paso que no es el cuello de botella.** El esfuerzo va al paso equivocado. Encuentre dónde se acumula el trabajo.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Visibilidad | Trabajo en bandejas y cabezas | Un tablero para el trabajo planificado | Todo el trabajo visible con políticas explícitas | Tablero y herramientas coherentes y fiables | Flujo visible entre equipos y proveedores |
| Control del WIP | Sin límites | Límites informales | Límites acordados y reglas para excepciones | Límites ajustados con datos | Límites coordinados entre equipos dependientes |
| Medidas de flujo | Ninguna | Recuentos de elementos | Plazo de entrega y rendimiento como distribuciones | Medidas usadas para encontrar cuellos de botella | Medidas compartidas y atendidas en todo el sistema |
| Clases de servicio | Una cola | Urgente o no | Clases definidas con límites | Clases revisadas con evidencia | Clases alineadas entre equipos y acuerdos |

## Lista de verificación

- [ ] Todos los tipos de trabajo, incluidas las interrupciones, están en el tablero.
- [ ] Las columnas incluyen estados de espera.
- [ ] Tenemos límites de WIP y una regla para cuando se llenan.
- [ ] Las políticas de listo, hecho, prioridad y urgencia están por escrito.
- [ ] Medimos el plazo de entrega, el tiempo de ciclo y el rendimiento como distribuciones.
- [ ] Revisamos con regularidad los elementos más antiguos.
- [ ] Conocemos nuestro cuello de botella actual y tenemos una mejora para él.
- [ ] Contrastamos las medidas con elementos reales para detectar manipulación.

## Prompts de IA

**Encuentre patrones en los datos del tablero.**

```text
Here is an export of our items with created, started, and finished dates and state changes: [paste data with names removed].
Calculate the median and 85th percentile lead time, list the five oldest open items, and note where items spend the most time. Do not infer causes. Mark any data problems you notice.
List what you are unsure of.
```

**Sugiera clases de servicio.**

```text
Our team handles these kinds of work: [list with typical urgency and volume].
Propose up to four classes of service, a limit for each, and a rule for entry to the fastest class. Explain the trade-offs of each choice and flag assumptions.
List what you are unsure of.
```

**Prepare una revisión del tablero.**

```text
Below is the current state of our board: [paste columns, items, ages, and blockers].
List the five items I should discuss first and why, and three questions to ask about each. Do not assign blame or propose solutions.
List what you are unsure of.
```

## Habilidades de IA

- [kanban](../../../../skills/kanban/SKILL.md): úsela para montar y operar un tablero con límites y políticas.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): úsela para analizar esperas y traspasos.
- [value-stream-map](../../../../skills/value-stream-map/SKILL.md): úsela para seguir el flujo entre equipos.
- [software-engineering-metrics](../../../../skills/software-engineering-metrics/SKILL.md): úsela para definir medidas de flujo con sus riesgos.

## Fuentes principales

- David J. Anderson, *Kanban: Successful Evolutionary Change for Your Technology Business* (2010): la fuente del método para el trabajo de conocimiento.
- Taiichi Ohno, *Toyota Production System: Beyond Large-Scale Production* (1988): el origen de la tarjeta kanban.
- Wikipedia, "Kanban (development)": una visión general del método.
- Wikipedia, "Little's law": la fórmula detrás de los límites de WIP.

## Referencias

1. Kanban — Wikipedia — https://en.wikipedia.org/wiki/Kanban
2. Kanban (development) — Wikipedia — https://en.wikipedia.org/wiki/Kanban_(development)
3. Work in process — Wikipedia — https://en.wikipedia.org/wiki/Work_in_process
4. Little's law — Wikipedia — https://en.wikipedia.org/wiki/Little%27s_law
5. Toyota Production System — Wikipedia — https://en.wikipedia.org/wiki/Toyota_Production_System
6. Cumulative flow diagram — Wikipedia — https://en.wikipedia.org/wiki/Cumulative_flow_diagram
7. Theory of constraints — Wikipedia — https://en.wikipedia.org/wiki/Theory_of_constraints
8. Lead time — Wikipedia — https://en.wikipedia.org/wiki/Lead_time
9. Bottleneck (production) — Wikipedia — https://en.wikipedia.org/wiki/Bottleneck_(production)
10. Taiichi Ohno — Wikipedia — https://en.wikipedia.org/wiki/Taiichi_Ohno
