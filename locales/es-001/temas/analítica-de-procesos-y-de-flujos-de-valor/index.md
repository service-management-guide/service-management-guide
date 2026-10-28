# Analítica de procesos y de flujos de valor

**La analítica de procesos y de flujos de valor mide cómo fluye realmente el trabajo: cuánto tarda cada paso, cuánto espera el trabajo, dónde da marcha atrás y dónde se acumula; funciona cuando se construye a partir de datos de eventos con marca de tiempo y de recorridos reales, se dirige a la restricción y se contrasta con las personas que hacen el trabajo.**

## Por qué importa

Todo el mundo tiene una imagen de cómo fluye el trabajo, y suele ser errónea. Los documentos del proceso muestran un camino limpio desde la solicitud hasta su finalización. La realidad incluye desvíos, bucles, traspasos que no están en ningún diagrama y largos periodos en los que el trabajo queda sin tocar. Una solicitud que según el documento tarda tres pasos puede pasar por once y pasar el 90 por ciento de su vida esperando.

La analítica de procesos y de flujos de valor sustituye la imagen por evidencia. Parte de los datos que los sistemas ya registran, como los estados de los tickets, las marcas de tiempo y las asignaciones, y de la observación del trabajo real. Reconstruye las rutas que sigue el trabajo, mide el tiempo en cada etapa y separa el tiempo de trabajo del tiempo de espera. Wikipedia describe la minería de procesos como las técnicas de análisis de registros de eventos para descubrir, monitorizar y mejorar los procesos reales.

Los resultados suelen sorprender. El cuello de botella no está donde la gente pensaba. El paso del que todos se quejan es rápido, y la demora está en el traspaso anterior. Un tercio de las solicitudes vuelve atrás por falta de información. Estos hallazgos llevan a mejoras concretas y pequeñas, razón por la cual este análisis es uno de los más útiles de la gestión de servicios. Este tema describe las técnicas principales, los datos necesarios y las precauciones. Se apoya en la cadena de valor (Tema 1.7 — La cadena de valor del servicio), el flujo y Kanban (Tema 2.3 — Flujo y Kanban), el pensamiento lean (Tema 2.4 — Lean y Kaizen) y la analítica (Tema 7.1 — Analítica para la gestión de servicios). Los fundamentos de datos (Tema 7.2 — Fundamentos y gobernanza de datos) importan mucho aquí, porque las marcas de tiempo y los cambios de estado son la materia prima.

## Conceptos clave

**Flujo de valor.** La secuencia de pasos que realiza una organización para entregar un producto o servicio a un cliente, como «resolver un incidente mayor» o «incorporar a un nuevo empleado». Wikipedia describe los flujos de valor. Un flujo de valor pasa por las actividades de la cadena de valor en su propio orden. Véase el Tema 1.7 — La cadena de valor del servicio.

**Mapeo del flujo de valor.** Una técnica lean que dibuja cada paso de un flujo de valor con su tiempo de procesamiento y la espera entre pasos, de modo que el tiempo dedicado a añadir valor pueda compararse con el tiempo total transcurrido. Wikipedia la describe. Un mapa suele dibujarse recorriendo el proceso con las personas implicadas y anotando tiempos reales.

**Minería de procesos.** Usar datos de eventos para descubrir cómo se ejecutan realmente los procesos. Cada evento tiene un identificador de caso (como un número de ticket), una actividad (como «asignado» o «resuelto») y una marca de tiempo. A partir de ellos, las técnicas reconstruyen el camino de cada caso, muestran las rutas más comunes, encuentran variantes y miden tiempos. Wikipedia describe la minería de procesos y el descubrimiento de procesos. Complementa al mapeo: la minería muestra lo que ocurrió en miles de casos, el mapeo muestra por qué en unos pocos.

**Datos de eventos.** El análisis de procesos depende de buenos datos de eventos: un identificador de caso estable, nombres de actividad claros y marcas de tiempo exactas. Los sistemas de tickets y de flujo de trabajo suelen almacenar los cambios de estado con sus horas. Compruebe que los datos reflejan lo que ocurrió. Un ticket marcado como «en espera» puede no significar que espera al cliente; un estado puede fijarse en bloque al final. Véase el Tema 7.2 — Fundamentos y gobernanza de datos.

**Plazo de entrega, tiempo de ciclo y tiempo de espera.** El plazo de entrega (lead time) es el tiempo transcurrido desde la solicitud hasta la finalización, tal como lo experimenta el cliente. El tiempo de ciclo es el tiempo desde que empieza el trabajo. Wikipedia describe ambos. El tiempo de espera, el tiempo pasado en colas o inactivo entre pasos, suele ser la mayor parte. Defina con precisión cada punto de inicio y de fin. La relación entre el trabajo en curso, el rendimiento y el plazo de entrega la da la ley de Little, descrita en Wikipedia. Véase el Tema 2.3 — Flujo y Kanban.

**Eficiencia del flujo.** La proporción del plazo de entrega en la que se trabaja activamente en la tarea. En muchos procesos de conocimiento y de servicio, la eficiencia del flujo está por debajo del 20 por ciento, lo que significa que la mayor parte del tiempo es espera. Esta medida llama la atención sobre la demora en lugar de sobre el esfuerzo. Compruebe las cifras muestreando casos reales, ya que dependen de cómo se registra el tiempo activo.

**Cuellos de botella y restricciones.** Un cuello de botella es un paso que limita el rendimiento de todo el proceso. La teoría de las restricciones, que Wikipedia describe, sostiene que mejorar cualquier cosa que no sea la restricción no mejora el flujo global, y que la restricción debe identificarse, explotarse y luego aliviarse. Wikipedia describe los cuellos de botella en la producción. En analítica, busque pasos en los que el trabajo hace cola, en los que el tiempo de espera es más largo o en los que la utilización es casi plena.

**Variantes y retrabajo.** El mismo proceso se ejecuta en muchas variantes: el camino feliz, caminos con aprobación, caminos con bucles. Wikipedia describe el retrabajo, la repetición de trabajo por errores o falta de información. Contar con qué frecuencia vuelven atrás los casos, y por qué, encuentra desperdicio. Un bucle hacia el cliente por falta de información en el 30 por ciento de las solicitudes apunta a un problema del formulario.

**Traspasos.** Cada traspaso entre equipos añade espera y una posibilidad de pérdida de información. Cuente los traspasos por caso y el tiempo que sigue a cada uno. Una vista de calles (swimlane), descrita en Wikipedia, muestra quién se ocupa de qué. Los caminos con muchos traspasos son candidatos a rediseño. Véase el Tema 3.1 — Centro de Servicios.

**Variación.** Los promedios ocultan la dispersión. Los casos que tardan diez veces más que el caso típico causan el dolor, y tienen causas que vale la pena encontrar. Wikipedia describe la dispersión estadística y el control estadístico de procesos, que separan la variación ordinaria de las señales. Informe distribuciones y percentiles, no solo medias. Véase el Tema 7.3 — Medición e informes.

**El principio de Pareto.** Un pequeño número de causas suele producir la mayor parte del efecto, un patrón que Wikipedia describe como el principio de Pareto. Aplicado a las demoras, unas pocas variantes o unos pocos pasos suelen explicar la mayor parte del tiempo perdido. Empiece por ahí.

**Colas.** Cuando la utilización se acerca a la capacidad, la espera crece bruscamente, como muestra la teoría de colas. Wikipedia la describe. Un equipo que está «ocupado al 100 por ciento» tendrá colas largas. Deje holgura, sobre todo para el trabajo que llega al azar. Véase el Tema 3.11 — Disponibilidad, Capacidad y Rendimiento.

**Conformidad y cumplimiento.** La minería de procesos puede comprobar si los casos reales siguen el proceso previsto, por ejemplo si se dieron las aprobaciones requeridas. Ayuda a la auditoría y al control, con la salvedad de que los datos muestran lo que se registró, no necesariamente lo que se hizo. Véase el Tema 3.4 — Habilitación de Cambios.

**Recorrer el proceso.** Los datos encuentran dónde; las personas explican por qué. Observe el trabajo, hable con quienes lo hacen y mire una muestra de casos reales. La práctica lean llama a esto ir al lugar donde ocurre el trabajo, el gemba. Véase el Tema 2.4 — Lean y Kaizen.

**Privacidad y equidad.** Los datos de proceso pueden mostrar los patrones de trabajo de los individuos. Úselos para entender el sistema, agregue por equipo o por paso y no los use para vigilar ni clasificar a los individuos. Véase el Tema 5.6 — Gobernanza, riesgo y cumplimiento de la IA.

**Cómo encajan las lentes.** La analítica de procesos es el lado de datos de la mejora ágil y del pensamiento lean: encontrar la restricción, probar un cambio pequeño y medir de nuevo. La IA puede ayudar a descubrir patrones y a redactar mapas, bajo revisión. La automatización actúa sobre los hallazgos, como eliminar un traspaso. La analítica proporciona la evidencia.

## Buenas prácticas

1. **Elija un flujo de valor que importe.** Escoja uno que interese a los clientes y que sea lento o irregular, como las solicitudes de acceso o el tratamiento de incidentes mayores. Defina su inicio y su fin desde el punto de vista del cliente.
2. **Compruebe primero los datos de eventos.** Confirme que tiene identificadores de caso, nombres de actividad y marcas de tiempo fiables. Contraste muestras de casos con la realidad y anote los estados que no significan lo que dicen.
3. **Mapee el flujo actual a partir de los datos y de las personas.** Reconstruya las rutas con minería de procesos donde pueda y recorra unos cuantos casos reales con quienes los manejan. Compare las dos vistas.
4. **Separe el trabajo de la espera.** Para cada paso, mida el tiempo activo y el tiempo de espera. Calcule la eficiencia del flujo y anote las esperas más largas.
5. **Mire las variantes y los bucles.** Cuente las variantes principales, la proporción de casos que vuelven atrás y los motivos. Revise individualmente los casos más largos.
6. **Encuentre la restricción.** Identifique el paso que limita el rendimiento y centre la mejora ahí. No optimice primero otros pasos.
7. **Cuente los traspasos y la información perdida.** Mida los traspasos por caso y la demora tras cada uno, y entreviste al lado receptor sobre lo que le falta.
8. **Use distribuciones y muestree casos reales.** Informe medianas y percentiles y lea una muestra de la cola. Compruebe a mano los hallazgos automatizados.
9. **Cambie una cosa y mida de nuevo.** Haga un cambio pequeño en la restricción, registre la línea base y compare después de un periodo definido, anotando otros cambios en el mismo periodo.
10. **Use los datos para entender el sistema.** Agregue por equipo y por paso, no clasifique a individuos y comparta los hallazgos con quienes hacen el trabajo.

## Preguntas para conversar con su equipo

**¿Dónde espera más tiempo una solicitud típica y a quién espera?**
Usen datos o un caso rastreado. Esperen aprobaciones, colas y esperas al cliente. Después elijan una espera y pregunten quién podría acortarla.

**¿Cuántas rutas distintas siguen las solicitudes por nuestro proceso y son todas necesarias?**
Muestren las variantes. Esperen más de las que nadie pensaba. Después elijan la menos útil y pregunten si puede eliminarse.

**¿Qué proporción de nuestros casos vuelve atrás por falta de información y qué falta?**
Cuéntenlos. Esperen una cifra alta en ciertos tipos de solicitud. Después cambien el formulario o la primera respuesta para pedirlo antes.

**¿Dónde pierden información los traspasos y qué querría tener el equipo receptor?**
Pregunten al equipo receptor. Esperen los mismos pocos elementos. Después añádanlos al traspaso.

**¿Qué paso es la restricción y qué pasaría con el flujo global si duplicáramos su velocidad?**
Piénsenlo con los datos. Esperen que la gente nombre el paso más ruidoso. Después contrasten la respuesta con los tiempos de cola y de espera.

**¿Cómo podría ayudarnos la IA a encontrar patrones en nuestros datos de proceso y cómo comprobaríamos que acertó?**
La IA puede resumir variantes y sugerir causas. También puede sobreinterpretar el ruido. Pregunten quién revisa. Después comparen un resumen de IA con un análisis manual de una muestra.

## En la práctica: un ejemplo de gestión de servicios

El departamento de TI de una autoridad sanitaria regional tarda en promedio 19 días laborables en conceder a los clínicos acceso a una nueva aplicación clínica. Los clínicos se quejan; el informe del departamento muestra todas las tareas completadas dentro de su meta. La gerente del servicio decide rastrear el flujo.

Extrae los datos de eventos de 600 solicitudes de acceso recientes: cambios de estado y marcas de tiempo del sistema de tickets. Una herramienta de minería de procesos reconstruye los caminos. Encuentra nueve variantes, de las cuales tres cubren el 80 por ciento de los casos. El tiempo de trabajo promedia unos 2,5 días. El resto es espera: la aprobación del superior (promedio de 4 días), la conformidad de un responsable clínico (promedio de 5 días), que el equipo de aplicaciones recoja la tarea (3 días) y que el solicitante aporte un certificado de formación que falta (4 días, en el 35 por ciento de los casos). La eficiencia del flujo es de alrededor del 13 por ciento.

Recorre cinco casos con las personas implicadas. Descubre que la aprobación del responsable clínico es, para la mayoría de los roles, una formalidad: de las últimas 200, ninguna se había rechazado. También descubre que el bucle del certificado surge porque el formulario no lo pide de entrada y que el equipo de aplicaciones agrupa las solicitudes los jueves.

El equipo hace tres cambios. Elimina la aprobación del responsable clínico para los roles con acceso estándar, añade el certificado al formulario y pasa al equipo de aplicaciones a una cola atendida a diario. La gerente registra la línea base y sigue 100 casos después del cambio. El plazo de entrega medio baja a 8 días, y el percentil 90 pasa de 31 a 15 días. Lee diez de los casos más largos y descubre que la mayoría involucran roles inusuales.

Qué cambia: los clínicos obtienen el acceso más rápido y el informe muestra ahora el plazo de entrega tal como lo experimenta el cliente. Qué sigue siendo difícil: la eliminación de la aprobación necesita el acuerdo del oficial de seguridad clínica y está en prueba; los datos no pueden separar la espera al cliente de la espera causada por el equipo, porque el estado «pendiente» se usa para ambas; y a la gerente le han pedido análisis de la velocidad de cada técnico, algo que rechaza. Pide al responsable de la herramienta que añada un estado distinto para la espera al cliente.

## Cuatro perspectivas

### Equipos de producto y de entrega

Hagan de su pipeline de entrega un flujo de valor y rastreen los cambios desde la idea hasta producción. Proporcionen los eventos y las marcas de tiempo que hacen posible el análisis y usen los hallazgos para eliminar las esperas que ustedes causan.

### Equipos de servicio y de operaciones

Sepan dónde espera el trabajo y por qué. Usen estados coherentes, registren los motivos de espera y participen en el rastreo de casos reales. Planteen los problemas de traspaso al responsable del flujo.

### Liderazgo y gobernanza

Pida el plazo de entrega tal como lo ve el cliente, la eficiencia del flujo y la restricción, no solo los tiempos de las tareas. Respalde los cambios en la restricción. No use los datos de proceso para clasificar a los individuos.

### Clientes y usuarios

Usted experimenta todo el flujo, incluida la espera. Diga cuánto esperó y por qué, y responda con prontitud cuando el proveedor le pida información.

## Ágil, IA, automatización y analítica

### Ágil

Use el análisis para elegir la siguiente mejora pequeña en la restricción, hágala y mida de nuevo, con las partes interesadas implicadas. Precaución: no ejecute un largo programa de mapeo antes de cambiar nada; rastree un flujo, cambie una cosa y aprenda.

### IA

La IA puede descubrir variantes de proceso, resumir trazas y sugerir causas candidatas, con un responsable y comprobaciones. Precaución: los resúmenes de IA de datos de proceso pueden presentar el ruido como patrón; contraste con casos muestreados y con las personas implicadas. Véase el Tema 5.1 — IA en la gestión de servicios.

### Automatización

Automatice los pasos que el análisis muestra estables y repetidos, y elimine los traspasos que no añaden valor, con registros y planes de respaldo. Precaución: automatizar un paso que no es la restricción no acorta el plazo de entrega; compruebe dónde está la espera. Véase el Tema 6.2 — Automatización y orquestación de flujos de trabajo.

### Analítica

Este tema es la analítica del flujo: datos de eventos, plazos y tiempos de espera, variantes, bucles y restricciones. Precaución: las marcas de tiempo reflejan cómo se usan los estados, y las medidas de velocidad por paso pueden manipularse moviendo tickets entre estados; verifique con casos reales. Véanse el Tema 7.3 — Medición e informes y el libro *Service Management Metrics*.

## Modos de fallo habituales

- **Confiar en el proceso documentado.** Difiere de la realidad. Use datos de eventos y casos reales.
- **Datos de eventos sucios.** Los estados y las horas engañan. Compruebe y corrija primero los datos.
- **Optimizar el paso equivocado.** El esfuerzo va donde hay más ruido. Encuentre la restricción.
- **Solo promedios.** Los casos largos quedan ocultos. Use percentiles y lea la cola.
- **Ignorar la espera.** Se mide el esfuerzo, no la demora. Separe el tiempo de trabajo del de espera.
- **Datos sin personas.** Los hallazgos carecen de causas. Recorra casos reales con quienes hacen el trabajo.
- **Vigilancia individual.** La confianza se derrumba. Analice el sistema.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Datos | Recuentos de tareas | Algunas marcas de tiempo | Estados y marcas de tiempo coherentes para los flujos clave | Calidad de los datos de eventos monitorizada | Datos de eventos integrados entre herramientas y proveedores |
| Análisis | Proceso documentado | Un flujo rastreado | Análisis rutinario de los flujos clave: plazo de entrega, esperas, variantes | Restricciones identificadas y seguidas | Análisis automatizado y continuo con revisión humana |
| Mejora | Ad hoc | Arreglos ocasionales | Cambios en la restricción, medidos | Mejoras ligadas a los resultados de flujo | Mejora coordinada entre flujos y socios |
| Ética | Poco clara | Conciencia | Análisis a nivel de equipo, sin clasificación individual | Uso revisado con el personal | Privacidad integrada en la analítica |

## Lista de verificación

- [ ] Elegimos un flujo de valor relevante para el cliente con inicio y fin claros.
- [ ] Comprobamos los datos de eventos: identificadores de caso, nombres de actividad y marcas de tiempo.
- [ ] Mapeamos el flujo actual a partir de los datos y de recorrer casos reales.
- [ ] Medimos el tiempo de trabajo y el de espera, y la eficiencia del flujo.
- [ ] Contamos variantes, bucles y traspasos.
- [ ] Identificamos la restricción y centramos el cambio ahí.
- [ ] Informamos percentiles y leímos una muestra de la cola.
- [ ] Analizamos a nivel de equipo y de paso, no a nivel individual.

## Prompts de IA

**Resuma las variantes a partir de caminos de casos.**

```text
Here is a list of case paths (sequence of activities) with counts, and median time for each path, identifiers removed: [paste].
Describe the main variants, the share of cases each covers, where loops occur, and what the longest paths have in common. Do not infer causes.
List what you are unsure of.
```

**Encuentre la espera en una traza.**

```text
Here are the events of five cases with timestamps and the person or team handling each: [paste, names removed].
For each case, compute time between events, identify the three longest waits, and say whether the data suggest waiting on a team, on a customer, or unclear. Do not guess where the data are silent.
List what you are unsure of.
```

**Prepare preguntas para un recorrido del proceso.**

```text
We are about to walk through a value stream with the people who do the work. Here is what the data show: [paste summary].
Write ten open questions to ask on the walk, aimed at why waits and loops occur. Avoid blame and do not suggest answers.
List what you are unsure of.
```

## Habilidades de IA

- [value-stream-map](../../../../skills/value-stream-map/SKILL.md): úsela para mapear y medir un flujo de valor.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): úsela para analizar pasos, traspasos y esperas.
- [statistical-analysis](../../../../skills/statistical-analysis/SKILL.md): úsela para examinar la variación y la incertidumbre.
- [kaizen](../../../../skills/kaizen/SKILL.md): úsela para convertir los hallazgos en pequeñas mejoras.
- [mermaid-diagram](../../../../skills/mermaid-diagram/SKILL.md): úsela para dibujar en texto los flujos actual y futuro.

## Fuentes principales

- Wil van der Aalst, *Process Mining: Data Science in Action* (2.ª edición, 2016): la referencia principal sobre minería de procesos.
- Mike Rother y John Shook, *Learning to See* (1999): la guía clásica del mapeo del flujo de valor.
- Eliyahu Goldratt, *The Goal* (1984): una novela que introdujo la teoría de las restricciones.
- Wikipedia, "Process mining" y "Value-stream mapping": visiones generales de las técnicas.

## Referencias

1. Process mining — Wikipedia — https://en.wikipedia.org/wiki/Process_mining
2. Value-stream mapping — Wikipedia — https://en.wikipedia.org/wiki/Value-stream_mapping
3. Value stream — Wikipedia — https://en.wikipedia.org/wiki/Value_stream
4. Theory of constraints — Wikipedia — https://en.wikipedia.org/wiki/Theory_of_constraints
5. Bottleneck (production) — Wikipedia — https://en.wikipedia.org/wiki/Bottleneck_(production)
6. Cycle time — Wikipedia — https://en.wikipedia.org/wiki/Cycle_time
7. Lead time — Wikipedia — https://en.wikipedia.org/wiki/Lead_time
8. Little's law — Wikipedia — https://en.wikipedia.org/wiki/Little%27s_law
9. Rework — Wikipedia — https://en.wikipedia.org/wiki/Rework
10. Pareto principle — Wikipedia — https://en.wikipedia.org/wiki/Pareto_principle
11. Statistical process control — Wikipedia — https://en.wikipedia.org/wiki/Statistical_process_control
12. Swimlane — Wikipedia — https://en.wikipedia.org/wiki/Swimlane
