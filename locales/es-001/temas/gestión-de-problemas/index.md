# Gestión de Problemas

**La gestión de problemas encuentra y elimina las causas de los incidentes, registra los errores conocidos con sus soluciones alternativas y realiza revisiones sin culpa cuyas acciones acaban en el backlog de mejoras; es como un equipo de servicio deja de arreglar el mismo fallo una y otra vez.**

## Por qué importa

Un equipo que gestiona bien los incidentes puede seguir atrapado en un bucle. El mismo tipo de fallo vuelve cada mes, quienes responden aplican la misma solución alternativa y el costo se acumula: tiempo de usuario perdido, personal de guardia cansado y una creciente sensación de que nada mejora nunca. La gestión de incidentes restablece el servicio; no detiene la recurrencia.

La gestión de problemas es la práctica que sí lo hace. Pregunta por qué ocurren los incidentes y qué los evitaría, y asigna las respuestas a alguien que pueda actuar. También conserva un registro de lo que se sabe de los fallos que aún no se han corregido, para que la siguiente persona que responda no parta de cero.

Para los equipos ágiles, la práctica encaja de forma natural en la mejora continua: los hallazgos se convierten en elementos del backlog que compiten con las funciones en una sola lista. El punto débil suele ser no el método sino la prioridad. Corregir causas a menudo pierde frente al trabajo nuevo a menos que alguien haga visible el costo de la recurrencia. Este tema explica la práctica, los principales métodos para encontrar causas y cómo evitar que los hallazgos mueran en un informe. Es un socio cercano de la gestión de incidentes (Tema 3.2 — Gestión de Incidentes), la gestión del conocimiento (Tema 3.9 — Gestión del Conocimiento) y la mejora continua (Tema 3.15 — Mejora Continua).

## Conceptos clave

**Problema.** En ITIL 4, una causa, o causa potencial, de uno o más incidentes. Un problema existe antes que una solución; puede saberse que causa incidentes o solo sospecharse. No todo incidente da lugar a un registro de problema.

**Error conocido.** Un problema que ha sido analizado pero no resuelto, a menudo con una solución alternativa documentada. Wikipedia describe el término en el uso de ITIL. Un registro de error conocido permite al centro de servicios y a quienes responden encontrar rápido la solución alternativa y ver el estado de la corrección permanente.

**Solución alternativa (workaround).** Una forma de reducir o evitar el impacto sin corregir la causa. Las soluciones alternativas hacen la vida tolerable y pueden volverse permanentes por descuido. Un buen registro indica la solución alternativa, quién puede aplicarla y la fecha esperada de una corrección real, para que lo temporal no se vuelva permanente en silencio.

**Las actividades.** La identificación de problemas, que encuentra problemas a partir de tendencias de incidentes, monitorización y revisiones; el control de problemas, que analiza las causas y documenta los errores conocidos; y el control de errores, que gestiona los errores conocidos hasta que se resuelven o se aceptan. ITIL las describe como partes de una sola práctica y no como procesos separados.

**Proactiva y reactiva.** La gestión reactiva de problemas responde a incidentes que han ocurrido. La gestión proactiva busca debilidades antes de que causen incidentes, por ejemplo estudiando los casi accidentes, las tendencias de alertas y las revisiones de cambios.

**Análisis de causa raíz.** Una familia de métodos para encontrar la causa subyacente de un problema. Wikipedia describe el análisis de causa raíz y enumera técnicas comunes. Las más conocidas incluyen:

- *Cinco porqués*: preguntar «por qué» repetidamente hasta llegar a una causa sobre la que se pueda actuar.
- *Diagramas de causa y efecto (Ishikawa o espina de pescado)*: disponer posibles causas por categoría para orientar la discusión.
- *Análisis por árbol de fallos*: trabajar hacia atrás desde un fallo a través de combinaciones de sucesos que podrían causarlo.
- *Análisis de Pareto*: usar recuentos para encontrar las pocas causas detrás de la mayoría de los incidentes.
- *Análisis de modos de fallo y efectos (AMFE)*: examinar cada parte de un sistema para ver cómo podría fallar y qué seguiría.

**Cautelas sobre las causas.** Los sistemas complejos rara vez tienen una única causa raíz. El modelo del queso suizo, descrito en Wikipedia, representa los fallos como la alineación de debilidades en varias capas de defensa. La búsqueda de «la» causa raíz tiende a detenerse en la primera explicación cómoda. Suele ser más útil nombrar factores contribuyentes y decidir cuáles son más baratos y valiosos de cambiar.

**Cultura sin culpa y cultura justa.** La culpa detiene el aprendizaje: la gente oculta errores y las revisiones se vuelven defensivas. Una revisión sin culpa mira qué del sistema hizo razonable la acción en ese momento. Una cultura justa, descrita en Wikipedia, distingue el error honesto del comportamiento temerario y trata a cada uno de forma distinta. Los artículos de Wikipedia sobre el error humano y el sesgo retrospectivo explican por qué «alguien debería haberlo sabido» rara vez es un hallazgo útil.

**Postmortems.** Una revisión escrita tras un incidente significativo, que cubre qué ocurrió, impacto, cronología, factores contribuyentes, qué fue bien y acciones. Véase el artículo de Wikipedia sobre la documentación postmortem. Un buen postmortem se lee y se actúa sobre él; uno malo se archiva.

**Priorizar problemas.** Siempre hay más problemas que capacidad. Clasifíquelos por impacto, como horas de usuario perdidas o costo, por frecuencia y por lo barata que sea la corrección. Muestre el costo de la recurrencia. La deuda técnica, un término descrito en Wikipedia, incluye los problemas conocidos que se han aplazado; seguirla hace visible la elección.

**Vínculo con el cambio.** Corregir un problema suele requerir un cambio. Plantéelo mediante la práctica normal de cambios y asegúrese de que el registro del problema se cierra cuando se confirma la corrección. Véase el Tema 3.4 — Habilitación de Cambios.

**Vínculo con el conocimiento.** Un error conocido y su solución alternativa deben aparecer en artículos de conocimiento que el centro de servicios y el personal de guardia puedan encontrar. Véase el Tema 3.9 — Gestión del Conocimiento.

**Cómo encajan las lentes.** La gestión de problemas es donde la mejora ágil se encuentra con las operaciones: los hallazgos van al backlog y compiten abiertamente. La IA puede agrupar incidentes, sugerir problemas candidatos y redactar postmortems, bajo revisión. La automatización puede detectar la recurrencia y aplicar soluciones alternativas probadas. La analítica muestra la recurrencia y el costo.

## Buenas prácticas

1. **Busque patrones, no solo incidentes aislados.** Revise los incidentes con regularidad para encontrar repeticiones por servicio, componente, cambio y hora. Abra un problema cuando aparezca un patrón.
2. **Mantenga una lista visible de problemas.** Registre cada problema con un responsable, los incidentes vinculados, el impacto, la solución alternativa y el plan. Haga la lista fácil de leer para quienes responden.
3. **Documente los errores conocidos con sus soluciones alternativas.** Escríbalos de modo que una persona de guardia cansada pueda seguirlos y enlácelos con la base de conocimiento del centro de servicios.
4. **Elija el método según el problema.** Use cinco porqués para los casos simples, una espina de pescado para la discusión en grupo, árboles de fallos para fallos complejos y gráficos de Pareto para encontrar dónde concentrarse. No aplique métodos pesados a asuntos pequeños.
5. **Nombre factores contribuyentes, no un único culpable.** Enumere todas las condiciones que hicieron posible el fallo y valore cuáles es práctico cambiar. Evite hallazgos que terminan en «error humano».
6. **Celebre revisiones sin culpa.** Invite a las personas implicadas, exponga las reglas y céntrese en el sistema. Comparta ampliamente la revisión escrita.
7. **Haga las acciones específicas y con responsable.** Cada acción tiene una persona designada, una fecha y una forma de comprobar que está hecha. Póngala en el backlog del que el equipo realmente trabaja.
8. **Muestre el costo de no arreglar.** Totalice las horas de incidente, el impacto en los usuarios y la carga de guardia de cada problema, y use los totales en la priorización. Preséntelos a quienes fijan las prioridades.
9. **Cierre el ciclo.** Cuando se libera una corrección, confirme que los incidentes cesan, actualice el artículo de conocimiento y cierre el registro. Si el problema persiste, reábralo.
10. **Revise la práctica.** Observe cuántos problemas están abiertos, cuánto duran y si los incidentes repetidos disminuyen. Retire los problemas que no vale la pena corregir, con una decisión registrada.

## Preguntas para conversar con su equipo

**¿Qué incidentes han ocurrido tres o más veces en los últimos seis meses y por qué siguen ocurriendo?**
Empiece con ejemplos reales. Espere una mezcla de «nunca llegamos a eso» y «no sabemos la causa». Pregunte cuánto costó cada recurrencia. Después elijan uno para corregir y uno para aceptar formalmente.

**¿Cómo decidimos qué problemas corregir primero y quién decide?**
La priorización suele ser implícita. Quizá oiga que gana quien más grita. Pregunte qué datos usamos. Después acuerden criterios y muestren el costo de los cinco problemas principales.

**La última vez que escribimos «error humano» en una revisión, ¿qué permitió el sistema?**
Esto prueba la práctica sin culpa. Tome una revisión pasada y pregunte qué hizo fácil realizar la acción. Busque protecciones ausentes, información poco clara o presión de tiempo. Después reescriban el hallazgo en términos del sistema.

**¿Dónde viven los errores conocidos y las soluciones alternativas y puede encontrarlos una persona cansada a las 3 de la madrugada?**
El conocimiento disperso en hilos de chat es difícil de encontrar. Intenten encontrar uno juntos. Espere retrasos. Después acuerden un lugar y un hábito de nomenclatura.

**¿Qué acciones de nuestras tres últimas revisiones siguen abiertas y por qué?**
Esto prueba el seguimiento. Espere competencia con el trabajo de funciones. Pregunte quién decide la prioridad entre ambos. Después acuerden una parte de la capacidad para las acciones de problemas.

**¿Cómo podría ayudarnos la IA a encontrar patrones en los incidentes y cómo comprobaríamos que acierta?**
La IA puede agrupar incidentes y sugerir causas. También puede encontrar falsos patrones. Pregunte quién revisa y cómo. Después comparen una agrupación hecha por IA con una manual sobre una muestra.

## En la práctica: un ejemplo de gestión de servicios

El equipo de la plataforma de aprendizaje de una universidad ha tenido un incidente recurrente cada pocas semanas: los estudiantes no pueden entregar tareas cerca de un plazo. El centro de servicios aplica la misma solución alternativa, reiniciar un servicio de colas, que restablece las entregas en 15 minutos. Cada vez el incidente se cierra y se olvida.

La responsable del servicio propone tratarlo como un problema. Reúne los últimos nueve incidentes y registra la hora de cada uno, la carga en ese momento y los cambios hechos la semana anterior. El análisis de Pareto no ayuda, porque hay una sola categoría de causa, pero una cronología muestra que todos los incidentes ocurrieron en la hora previa a un plazo, cuando las entregas se disparan. Una discusión de espina de pescado con desarrolladores y operaciones enumera los factores contribuyentes: el servicio de colas tiene un límite fijo de memoria; ninguna alerta avisa antes de que se llene; un cambio reciente aumentó el tamaño de cada entrega; y el plan de capacidad no incluía los picos de los plazos.

El equipo nombra tres acciones: elevar el límite de memoria y probar el nuevo pico, añadir una alerta al 70 por ciento de la capacidad y escribir un artículo de error conocido para que el centro de servicios vea la solución alternativa y el estado de la corrección. También añaden calendarios de plazos a la revisión de capacidad. La responsable del servicio muestra a la dirección que el problema ha costado unas 15 horas de interrupción para los estudiantes y nueve interrupciones de guardia en tres meses, y el trabajo se programa antes de una función menor.

Qué cambia: el siguiente plazo pasa sin incidentes, y la alerta salta una vez al 72 por ciento, dando tiempo para actuar. Qué sigue siendo difícil: el cambio del límite fue un parche, porque el servicio de colas necesita un rediseño para archivos más grandes, lo cual compite con la hoja de ruta del próximo semestre; las cifras de costo son estimaciones a partir de los tiempos de los tickets; y la revisión no examinó si el cambio de tamaño anterior se había probado bien. La responsable anota el rediseño como un problema aún abierto, con una fecha de revisión.

## Cuatro perspectivas

### Equipos de producto y de entrega

Traten las acciones de problemas como parte de su backlog. Corrijan las causas en el diseño, añadan pruebas y alertas que detecten fallos conocidos y contribuyan a las revisiones. No entreguen los problemas solo a operaciones.

### Equipos de servicio y de operaciones

Registren los patrones y los errores conocidos y lleven a la planificación datos de costo y recurrencia. Mantengan documentadas y localizables las soluciones alternativas. Realicen revisiones a las que la gente se sienta segura de asistir.

### Liderazgo y gobernanza

Pida ver los incidentes recurrentes y su costo, y proteja la capacidad para corregirlos. Busque el miedo a la culpa en cómo se discuten las revisiones. Siga la antigüedad de los problemas abiertos.

### Clientes y usuarios

Debería enterarse cuando un asunto recurrente tiene una causa y una corrección. Si informa dos veces del mismo asunto, dígalo. Pregunte qué se ha hecho al respecto.

## Ágil, IA, automatización y analítica

### Ágil

Ponga las acciones de problemas en el mismo backlog que las funciones y revíselas con las partes interesadas, entregando correcciones pequeñas de forma continua. Precaución: si el trabajo de problemas se relega siempre detrás de las funciones, el backlog crece y los incidentes continúan; acuerde una parte protegida de la capacidad.

### IA

La IA puede agrupar incidentes, vincularlos con cambios, sugerir causas candidatas y redactar postmortems a partir de cronologías, con una persona que compruebe. Nombre un responsable para cada uso. Precaución: la IA puede inventar causas o exagerar patrones; trate sus sugerencias como hipótesis y contrástelas con los datos. Véanse el Tema 5.2 — AIOps y el Tema 5.4 — IA generativa para incidentes, conocimiento y cambios.

### Automatización

Automatice la detección de la recurrencia, la creación de registros de problemas a partir de patrones y las soluciones alternativas probadas, con registros y límites. Precaución: una solución alternativa automatizada puede ocultar un problema que empeora; siga con qué frecuencia se dispara y fije un umbral para escalar. Véase el Tema 6.6 — Automatización de runbooks y autorremediación.

### Analítica

Observe las tasas de recurrencia, la antigüedad y el costo de los problemas abiertos y la proporción de incidentes vinculados con problemas conocidos. Precaución: los recuentos de problemas cerrados pueden manipularse cerrándolos antes de tiempo o dividiéndolos; compruebe que los incidentes realmente bajan. Véanse el libro *Service Management Metrics* y el Tema 7.3 — Medición e informes.

## Modos de fallo habituales

- **Arreglar el incidente, nunca la causa.** La solución alternativa se vuelve permanente. Abra un problema cuando aparezca un patrón.
- **La caza de la causa raíz única.** El equipo se detiene en una respuesta cómoda. Enumere factores contribuyentes y elija cuáles cambiar.
- **Culpa.** La gente oculta errores. Celebre revisiones sin culpa y siga los cambios del sistema.
- **Informes sin responsables.** Las acciones se enumeran y no se hacen. Asigne responsables, fechas y revisión.
- **Sin mostrar el costo.** Los problemas pierden frente a las funciones. Totalice el costo de la recurrencia.
- **Errores conocidos difíciles de encontrar.** Quienes responden parten de cero. Mantenga un solo lugar donde buscar.
- **Cerrar sin comprobar.** La corrección no funciona. Confirme que los incidentes cesan antes de cerrar.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Identificación | Solo tras incidentes grandes | Algunos incidentes repetidos revisados | La revisión regular de patrones abre problemas | Tendencias y casi accidentes usados de forma proactiva | Problemas encontrados automáticamente y entre servicios |
| Análisis | Conjeturas | Métodos informales | Métodos estándar según el tipo de problema | Calidad del método revisada | Análisis compartido entre equipos y socios |
| Errores conocidos | En las cabezas | Algunos documentados | Registrados con soluciones alternativas en un lugar localizable | Uso y exactitud revisados | Vinculados con automatización y conocimiento entre servicios |
| Acción y aprendizaje | Culpa y acciones perdidas | Seguimiento ocasional | Acciones con responsable en el backlog, revisiones sin culpa | Recurrencia y cumplimiento de acciones medidos | Aprendizaje compartido y aplicado en toda la organización |

## Lista de verificación

- [ ] Revisamos los incidentes con regularidad en busca de repeticiones.
- [ ] Mantenemos una lista visible de problemas con responsables y costos.
- [ ] Los errores conocidos y las soluciones alternativas están documentados en un lugar localizable.
- [ ] Las revisiones son sin culpa y nombran factores contribuyentes.
- [ ] Cada acción tiene un responsable, una fecha y una forma de comprobar su cumplimiento.
- [ ] El trabajo de problemas tiene capacidad protegida en el backlog.
- [ ] Confirmamos las correcciones antes de cerrar los problemas.
- [ ] La IA usada para el análisis tiene un responsable y revisión por muestreo.

## Prompts de IA

**Encuentre incidentes repetidos.**

```text
Below is a list of incidents with dates, services, short descriptions, and resolutions, with names removed: [paste list].
Group those that look like repeats, state what they have in common, and list for each group two questions to investigate. Do not name causes. Mark groups you are unsure of.
List what you are unsure of.
```

**Convierta una revisión en una lista de factores contribuyentes.**

```text
Here is a postmortem draft: [paste, names removed].
List contributing factors in categories (technical, process, information, people and workload, suppliers), quoting the text for each, and list what the draft does not say about each. Do not assign blame or add causes.
List what you are unsure of.
```

**Estime el costo de la recurrencia.**

```text
For problem [name] we have these records: incident count, duration of each, users affected, on-call interruptions: [paste data].
Calculate total hours, hours per incident, and per month, showing every step. State what data is missing for a fair cost estimate. Do not guess missing numbers.
List what you are unsure of.
```

## Habilidades de IA

- [root-cause-analysis](../../../../skills/root-cause-analysis/SKILL.md): úsela para analizar causas con un método adecuado.
- [fishbone-diagram](../../../../skills/fishbone-diagram/SKILL.md): úsela para organizar posibles causas en una discusión en grupo.
- [postmortem](../../../../skills/postmortem/SKILL.md): úsela para escribir y dar seguimiento a una revisión sin culpa.
- [cause-and-effect-diagram](../../../../skills/cause-and-effect-diagram/SKILL.md): úsela para mapear causas y efectos.
- [risks-actions-issues-decisions](../../../../skills/risks-actions-issues-decisions/SKILL.md): úsela para seguir las acciones hasta su cumplimiento.

## Fuentes principales

- Sidney Dekker, *The Field Guide to Understanding "Human Error"*: sobre por qué falla culpar a las personas y qué mirar en su lugar.
- Betsy Beyer y otros (eds.), *Site Reliability Engineering* (2016), capítulo sobre la cultura del postmortem, gratis en sre.google.
- PeopleCert, páginas de certificación ITIL: la descripción del propietario de la práctica de gestión de problemas.
- Wikipedia, "Root-cause analysis" y "Postmortem documentation": visiones generales de métodos y documentos.

## Referencias

1. Root-cause analysis — Wikipedia — https://en.wikipedia.org/wiki/Root-cause_analysis
2. Known error — Wikipedia — https://en.wikipedia.org/wiki/Known_error
3. Five whys — Wikipedia — https://en.wikipedia.org/wiki/Five_whys
4. Ishikawa diagram — Wikipedia — https://en.wikipedia.org/wiki/Ishikawa_diagram
5. Fault tree analysis — Wikipedia — https://en.wikipedia.org/wiki/Fault_tree_analysis
6. Failure mode and effects analysis — Wikipedia — https://en.wikipedia.org/wiki/Failure_mode_and_effects_analysis
7. Pareto principle — Wikipedia — https://en.wikipedia.org/wiki/Pareto_principle
8. Swiss cheese model — Wikipedia — https://en.wikipedia.org/wiki/Swiss_cheese_model
9. Just culture — Wikipedia — https://en.wikipedia.org/wiki/Just_culture
10. Postmortem documentation — Wikipedia — https://en.wikipedia.org/wiki/Postmortem_documentation
11. Technical debt — Wikipedia — https://en.wikipedia.org/wiki/Technical_debt
