# Gestión de Incidentes

**La gestión de incidentes existe para restablecer el servicio normal lo más rápido posible y limitar el daño a los usuarios; funciona cuando la gravedad se acuerda de antemano, los roles son claros, la comunicación es constante y la revisión posterior examina el sistema y no a las personas.**

## Por qué importa

Un incidente es una interrupción no planificada de un servicio, o una reducción de su calidad. Cuando ocurre uno, las personas implicadas están bajo presión, la información es incompleta y el reloj corre. Las decisiones tomadas en los primeros diez minutos suelen determinar si el incidente dura una hora o seis.

Las organizaciones que gestionan bien los incidentes no dependen de héroes. Han acordado cómo decidir la gravedad de algo, quién lidera, quién habla con los usuarios, cómo escalar y cuándo dejar de investigar y aplicar una solución alternativa. Han practicado. Las organizaciones que gestionan mal los incidentes improvisan cada vez, discuten las prioridades durante el suceso y descubren que la única persona que conoce el sistema está de vacaciones.

Este tema describe la gestión de incidentes como una práctica: definiciones, roles, gravedad, comunicación y revisión. Trata los incidentes mayores con una estructura adicional y cubre cómo pueden ayudar la IA y la automatización y dónde pueden perjudicar. Se sitúa junto a la gestión de problemas (Tema 3.3 — Gestión de Problemas), que busca las causas subyacentes, y la monitorización (Tema 3.10 — Monitorización y Gestión de Eventos), que a menudo detecta el incidente.

## Conceptos clave

**Incidente.** En ITIL 4, una interrupción no planificada de un servicio o una reducción de su calidad. El artículo de Wikipedia sobre la gestión de incidentes describe la práctica en la gestión de servicios de TI. Un incidente puede existir antes de que algún usuario lo note, por ejemplo cuando la monitorización muestra un disco que falla.

**Primero, restablecer el servicio.** El objetivo es devolver el servicio a la normalidad, no encontrar la causa raíz. Una solución alternativa que restablece el servicio es un buen resultado; la causa raíz es cosa de la gestión de problemas. Los equipos que buscan la causa mientras el servicio está caído prolongan la caída.

**Solución alternativa (workaround).** Una solución que reduce o elimina el impacto de un incidente sin resolver su causa, por ejemplo reencaminar el tráfico, reiniciar un componente o pasar a un proceso manual. Véase el Tema 3.3 — Gestión de Problemas para saber cómo se siguen los errores conocidos y las soluciones alternativas.

**Gravedad y prioridad.** La gravedad describe el impacto en los usuarios y el negocio, como cuántos se ven afectados y en qué medida. La prioridad añade la urgencia, como una fecha límite. Muchas organizaciones usan una escala pequeña, por ejemplo cuatro niveles, con una definición y una respuesta esperada para cada uno. Las definiciones deben usar hechos observables («más de 100 usuarios no pueden hacer pagos») y no sensaciones.

**Incidentes mayores.** Un incidente mayor tiene un impacto significativo y necesita una respuesta más rápida y más coordinada que el proceso estándar. Las organizaciones definen sus propios umbrales. Los incidentes mayores suelen tener un líder de incidente designado, un responsable de comunicaciones y un ritmo regular de actualizaciones.

**Roles.** Un líder de incidente coordina y toma decisiones; los técnicos diagnostican y arreglan; un responsable de comunicaciones mantiene informados a las partes interesadas y a los usuarios; un escriba registra lo que se hace y cuándo. Una persona puede ocupar varios roles en un incidente pequeño. El Sistema de Comando de Incidentes, usado en la gestión de emergencias y descrito en Wikipedia, es una influencia en la estructura usada en muchas organizaciones técnicas.

**Escalamiento.** Incorporar más habilidades o más autoridad. El escalamiento funcional lleva el incidente a personas con la experiencia adecuada. El escalamiento jerárquico incorpora a directivos que pueden decidir o aportar recursos. Criterios claros, como «sin progreso tras 30 minutos en gravedad uno», hacen que escalar sea rutina y no una señal de fracaso.

**Guardia (on-call).** Acuerdos para que las personas sean localizables fuera del horario normal. Una buena práctica de guardia incluye límites de carga, un turno claro, runbooks y compensación. Véase el Tema 2.6 — Ingeniería de Fiabilidad de Sitios. La fatiga de alarmas, un fenómeno descrito en Wikipedia, hace que la gente ignore las alertas demasiado frecuentes o no accionables.

**Comunicación.** Los usuarios y las partes interesadas necesitan saber qué está afectado, qué se está haciendo y cuándo tendrán noticias. Las actualizaciones frecuentes y sencillas reducen los contactos repetidos y la ansiedad. El artículo de Wikipedia sobre comunicación de crisis da principios generales. Una página de estado, un canal interno y mensajes directos a clientes clave sirven a públicos distintos.

**Registros de incidentes.** Un ticket o registro con la hora de inicio, los síntomas, las acciones, las decisiones y la hora de fin. El registro apoya la revisión y da datos para la mejora. Una cronología llevada durante el incidente es más exacta que una reconstruida después.

**Revisión.** Tras un incidente significativo, celebre una revisión sin culpa que examine qué ocurrió, qué ayudó, qué frenó la respuesta y qué cambiar. Los hallazgos van a la gestión de problemas y al backlog de mejoras. Véase el Tema 3.3 — Gestión de Problemas.

**Medidas.** El tiempo de detección, el tiempo de respuesta y el tiempo de restablecimiento, a menudo resumidos como tiempo medio de recuperación (MTTR) en la descripción de Wikipedia, son comunes. Los promedios ocultan grandes diferencias entre incidentes y pueden manipularse según cómo se fijen las horas de inicio y fin. Use distribuciones y examine los incidentes individuales. Véase el libro *Service Management Metrics*.

**Cómo encajan las lentes.** La práctica ágil trata cada revisión como retroalimentación y mantiene la mejora pequeña y continua. La IA puede resumir cronologías, sugerir incidentes pasados similares y redactar actualizaciones, con una persona responsable. La automatización ejecuta pasos seguros y bien entendidos, como reinicios y conmutaciones por error. La analítica muestra patrones de recurrencia.

## Buenas prácticas

1. **Defina los niveles de gravedad con hechos observables.** Escriba qué significa cada nivel, a quién se notifica y con qué rapidez. Revise las definiciones tras los incidentes difíciles de clasificar.
2. **Nombre los roles y practíquelos.** Acuerde quién lidera, quién comunica y quién registra. Ensaye con ejercicios para que la primera vez no sea una crisis real. Véase el Tema 3.12 — Gestión de la Continuidad del Servicio.
3. **Primero restablezca, luego investigue.** Fije una regla: se aplica una solución alternativa cuando hay una disponible y segura. Registre el incidente para la gestión de problemas y siga adelante.
4. **Lleve una cronología en vivo.** Registre las acciones y decisiones con sus horas a medida que ocurren, en un lugar compartido. Evita discusiones y acelera la revisión.
5. **Escale pronto y sin culpa.** Defina desencadenantes de escalamiento y trate su uso como buena práctica. Quienes escalan tarde temen la crítica, así que elimínela.
6. **Comunique con ritmo.** Acuerde un intervalo de actualización para cada nivel de gravedad y envíe actualizaciones aunque no haya novedades, diciéndolo. Use un lenguaje sencillo.
7. **Dé a quienes responden lo que necesitan.** Mantenga runbooks, accesos, paneles y listas de contactos. Pruebe el acceso antes de la noche en que haga falta.
8. **Proteja a las personas.** Limite la carga de guardia, releve a quienes responden en los incidentes largos y asegúrese de que descansan. Las personas cansadas toman peores decisiones.
9. **Revise sin culpa y dé seguimiento.** Escriba un informe breve con la cronología, los factores contribuyentes y acciones con responsables y fechas. Siga las acciones hasta completarlas. Véase el Tema 3.3 — Gestión de Problemas.
10. **Devuelva las lecciones.** Actualice los runbooks, la monitorización y el diseño. Comparta el aprendizaje con otros equipos y compruebe que los incidentes repetidos disminuyen.

## Preguntas para conversar con su equipo

**¿Cómo decidimos la gravedad de un incidente y se ha discutido alguna vez durante uno?**
El desacuerdo sobre la gravedad hace perder tiempo. Pida ejemplos recientes. Quizá oiga que la respuesta depende de quién pregunta. Después reescriban la definición de un nivel con hechos observables.

**¿Quién lidera un incidente a las 3 de la madrugada y cómo sabe que es el líder?**
El liderazgo poco claro es una causa común de confusión. Pregunte quién tomó decisiones en el último incidente mayor. Espere respuestas distintas. Después acuerden cómo se elige y se anuncia al líder.

**¿Qué oyen los usuarios de nosotros durante un incidente y con qué frecuencia?**
Compare lo que oyeron los usuarios en el último incidente con lo que querían. Espere silencios largos. Después elijan un intervalo de actualización y un canal y redacten una plantilla.

**¿Qué hemos escalado tarde y por qué?**
Esto explora el miedo y la costumbre. La gente puede retrasarse por miedo a parecer incompetente o a despertar a alguien. Pregunte qué facilitaría el escalamiento. Después escriban una regla como «escalar si no hay progreso en 30 minutos».

**¿Qué dice la revisión de nuestro último incidente que deberíamos cambiar y qué cambió realmente?**
Esto prueba el seguimiento. Pida las acciones y su estado. Espere que algunas lleven abiertas meses. Después asignen responsables y fechas y revísenlas dentro de un mes.

**¿Dónde podría ayudar la IA durante un incidente y dónde debe decidir una persona?**
La IA puede resumir la cronología, buscar incidentes pasados y redactar actualizaciones. No puede ser responsable. Pregunte qué acciones puede realizar una IA sin aprobación, si alguna. Después elijan un uso de bajo riesgo y acuerden cómo se comprueba su salida.

## En la práctica: un ejemplo de gestión de servicios

El equipo digital de una cadena nacional de farmacias gestiona una aplicación que permite a los clientes pedir recetas repetidas. Un viernes por la tarde, los pedidos empiezan a fallar para aproximadamente el 30 por ciento de los usuarios. El ingeniero de guardia ve errores de una base de datos y llama al líder de incidente según el turno. El líder declara un incidente de gravedad dos porque los usuarios no pueden completar una tarea esencial, asigna un responsable de comunicaciones y abre una cronología.

En 15 minutos el equipo sospecha de un cambio en la base de datos desplegado esa tarde. El líder pregunta si revertirlo es seguro; el ingeniero que hizo el cambio confirma que sí. El equipo revierte y los pedidos se recuperan en cinco minutos. El tiempo total desde la primera alerta hasta la recuperación es de 47 minutos. El responsable de comunicaciones había publicado en la página de estado a los 20 minutos, de nuevo a los 35 y una actualización final al recuperarse, y había dicho al equipo de atención al cliente qué decir.

La semana siguiente el equipo celebra una revisión sin culpa. La cronología muestra que la detección dependió de una queja de un usuario, porque ninguna alerta cubría los pedidos fallidos; el cambio se había revisado pero el entorno de pruebas no tenía datos realistas; y la primera actualización fue más lenta que el intervalo acordado porque el responsable de comunicaciones no estaba seguro de lo que la página de estado podía decir. El equipo añade una alerta sobre la tasa de fallos de pedidos, mejora los datos de prueba y escribe una plantilla para la página de estado.

Qué cambia: el siguiente incidente similar lo detecta la alerta en tres minutos. Qué sigue siendo difícil: los datos de prueba no contienen información real de pacientes, por buenas razones, lo cual limita lo realistas que pueden ser; el turno sigue teniendo pocos ingenieros que puedan revertir la base de datos con seguridad; y la lista de acciones de la revisión tiene doce elementos y el equipo tiene tiempo para cinco. Eligen según el riesgo y ponen el resto en el backlog con fechas.

## Cuatro perspectivas

### Equipos de producto y de entrega

Construyan para la recuperación: hagan reversibles los cambios, añadan alertas y registros que muestren el impacto en el usuario y escriban runbooks sobre la marcha. Participen en las revisiones y corrijan las causas en el diseño.

### Equipos de servicio y de operaciones

Conozcan su rol, practiquen y lleven la cronología. Escalen pronto, comuniquen con constancia y cuídense unos a otros. Lleven lo que aprenden a las revisiones y úsenlo para mejorar los runbooks y la monitorización.

### Liderazgo y gobernanza

Acuerde de antemano las definiciones de gravedad y las expectativas, y resista la tentación de asignar culpas. Durante un incidente mayor, respalde al líder y pida actualizaciones solo por el canal acordado. Financie las acciones de seguimiento.

### Clientes y usuarios

Deberían informarle con prontitud de qué está afectado, qué se está haciendo y cuándo tendrá noticias. Informe de lo que ve, con detalles. Tras un incidente mayor, espere un relato claro de qué cambió.

## Ágil, IA, automatización y analítica

### Ágil

Trate las revisiones de incidentes como el ciclo corto de retroalimentación que impulsa la mejora: cambios pequeños en runbooks, alertas y diseño, hechos con rapidez y con las partes interesadas informadas. Precaución: una larga lista de acciones que nadie termina es peor que una corta que se cumple.

### IA

La IA puede redactar actualizaciones, resumir la cronología y el chat, y encontrar incidentes anteriores similares. El líder del incidente sigue siendo responsable, y la salida de una IA es una sugerencia. Precaución: la IA puede inventar causas o tiempos, y una actualización redactada automáticamente y enviada sin revisión puede engañar a los clientes; compruébela siempre antes de enviarla. Véase el Tema 5.4 — IA generativa para incidentes, conocimiento y cambios.

### Automatización

Automatice pasos de respuesta seguros y repetibles, como recopilar datos de diagnóstico, avisar a las personas adecuadas y ejecutar un reinicio revisado, con registros y límites. Precaución: la automatización que actúa durante un incidente puede empeorarlo; mantenga una parada manual y pruebe en un entorno seguro. Véase el Tema 6.6 — Automatización de runbooks y autorremediación.

### Analítica

Observe el tiempo de detección, de respuesta y de restablecimiento, la distribución de cada uno y los incidentes repetidos. Precaución: los promedios ocultan los peores incidentes, las definiciones de inicio y fin varían y las medidas usadas para juzgar a los equipos invitan a manipular las marcas de tiempo; estudie también incidentes individuales. Véanse el libro *Service Management Metrics* y el Tema 7.3 — Medición e informes.

## Modos de fallo habituales

- **Gravedad discutida durante el incidente.** Se pierde tiempo. Escriba definiciones con hechos observables.
- **Sin un líder claro.** Todos actúan y nadie decide. Nombre al líder y anúncielo.
- **Investigar mientras el servicio está caído.** Se retrasa la recuperación. Aplique primero una solución alternativa segura.
- **Silencio hacia los usuarios.** Suben la ansiedad y los contactos repetidos. Actualice con ritmo.
- **Culpa en las revisiones.** La gente oculta errores. Celebre revisiones sin culpa y siga las acciones.
- **Dependencia de héroes.** Una persona lo arregla todo. Comparta el conocimiento y escriba runbooks.
- **Acciones automáticas sin límites.** Una automatización empeora un incidente. Añada límites, registros y una parada manual.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Gravedad y proceso | Ad hoc | Niveles informales | Niveles definidos con expectativas de respuesta | Niveles revisados con datos | Proceso adaptado entre servicios y socios |
| Roles y práctica | Improvisados | Algunos roles nombrados | Roles definidos y ensayados | Ejercicios medidos y mejorados | Ejercicios compartidos con proveedores y clientes |
| Comunicación | Irregular | Actualizaciones cuando se recuerda | Ritmo y canales de actualización por gravedad | Calidad de la comunicación revisada | Coherente entre equipos, clientes y socios |
| Aprendizaje | Culpa | Revisiones ocasionales | Revisiones sin culpa con acciones con seguimiento | Recurrencia medida y reducida | Aprendizaje compartido en toda la organización |

## Lista de verificación

- [ ] Los niveles de gravedad están definidos con hechos observables y respuestas esperadas.
- [ ] Los roles de incidente están nombrados y ensayados.
- [ ] Los desencadenantes de escalamiento están por escrito.
- [ ] Se lleva una cronología en vivo en los incidentes significativos.
- [ ] Los intervalos de actualización y los canales están fijados para cada gravedad.
- [ ] La carga de guardia está limitada y monitorizada.
- [ ] Las revisiones son sin culpa y las acciones se siguen hasta completarse.
- [ ] La IA y la automatización usadas en incidentes tienen un responsable, límites y revisión.

## Prompts de IA

**Resuma la cronología de un incidente para su revisión.**

```text
Here are the chat messages and notes from an incident, with times and names removed: [paste text].
Produce a timeline of key events, a list of decisions and who made them (by role only), what helped, what slowed us down, and questions for the review. Use only the text and mark anything uncertain.
List what you are unsure of.
```

**Redacte una actualización de estado para su revisión.**

```text
Facts we know: [paste confirmed facts]. Facts we do not know: [list]. Next update in: [time].
Draft a status update of under 80 words in plain language that states what is affected, what we are doing, and when the next update is due. Do not speculate about causes or give an estimate for recovery that is not in the facts.
List what you are unsure of.
```

**Compruebe las definiciones de gravedad.**

```text
Our severity definitions: [paste]. Here are three past incidents with their impact: [paste].
For each incident, say which level the definitions suggest, quote the words you used, and note where the definitions were ambiguous. Do not change the definitions.
List what you are unsure of.
```

## Habilidades de IA

- [incident-response-plan](../../../../skills/incident-response-plan/SKILL.md): úsela para definir roles, gravedad y pasos para responder a incidentes.
- [postmortem](../../../../skills/postmortem/SKILL.md): úsela para realizar una revisión sin culpa con acciones con seguimiento.
- [runbook](../../../../skills/runbook/SKILL.md): úsela para captar los pasos de respuesta ante fallos conocidos.
- [crisis-communication-plan](../../../../skills/crisis-communication-plan/SKILL.md): úsela para planificar las actualizaciones a usuarios y partes interesadas.
- [on-call-rotation](../../../../skills/on-call-rotation/SKILL.md): úsela para diseñar un arreglo de guardia sostenible.

## Fuentes principales

- Betsy Beyer y otros (eds.), *Site Reliability Engineering* (2016), capítulos sobre respuesta a incidentes y postmortems, gratis en sre.google: orientación práctica de un gran operador.
- PeopleCert, páginas de certificación ITIL: la descripción del propietario de la práctica de gestión de incidentes.
- Wikipedia, "Incident management": una visión general de la práctica.
- Wikipedia, "Incident Command System": el modelo de gestión de emergencias que influyó en los roles técnicos de incidentes.

## Referencias

1. Incident management — Wikipedia — https://en.wikipedia.org/wiki/Incident_management
2. Incident Command System — Wikipedia — https://en.wikipedia.org/wiki/Incident_Command_System
3. Mean time to recovery — Wikipedia — https://en.wikipedia.org/wiki/Mean_time_to_recovery
4. Escalation — Wikipedia — https://en.wikipedia.org/wiki/Escalation
5. Crisis communication — Wikipedia — https://en.wikipedia.org/wiki/Crisis_communication
6. Alarm fatigue — Wikipedia — https://en.wikipedia.org/wiki/Alarm_fatigue
7. Workaround — Wikipedia — https://en.wikipedia.org/wiki/Workaround
8. Runbook — Wikipedia — https://en.wikipedia.org/wiki/Runbook
9. Triage — Wikipedia — https://en.wikipedia.org/wiki/Triage
10. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
