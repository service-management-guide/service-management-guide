# DevOps

**DevOps es un conjunto de hábitos culturales, prácticas de trabajo y herramientas que unen el desarrollo y las operaciones para que los equipos puedan cambiar servicios en producción con rapidez y operarlos con fiabilidad; complementa a ITIL al trasladar muchos controles al propio trabajo, y no elimina la necesidad de una responsabilidad clara ni de evidencia.**

## Por qué importa

Durante años, construir software y operarlo fueron trabajos distintos en equipos distintos con objetivos diferentes. A los desarrolladores se les premiaba por el cambio, a operaciones por la estabilidad, y los dos grupos se encontraban en un traspaso que ambos encontraban frustrante. Las liberaciones se lanzaban por encima del muro, los incidentes se devolvían y los clientes esperaban.

DevOps surgió a finales de la década de 2000 como respuesta. Su idea central es sencilla: quienes construyen un servicio deben compartir la responsabilidad de operarlo, y quienes lo operan deben ayudar a dar forma a cómo se construye. Esa responsabilidad compartida, apoyada en la automatización y la retroalimentación rápida, permite liberar con frecuencia y recuperarse deprisa.

Para la gestión de servicios, DevOps es una influencia importante y a veces una fuente de fricción. ITIL describe prácticas como la habilitación de cambios y la gestión de incidentes, y DevOps describe cómo las llevan a cabo los equipos con pipelines, guardias compartidas y revisiones sin culpa. Las organizaciones que ven ambos como opuestos acaban con sistemas paralelos; las que los conectan obtienen controles más rápidos y mejor documentados. Este tema explica las ideas y muestra cómo encajan con el resto de la guía.

## Conceptos clave

**Qué es DevOps.** La palabra combina «desarrollo» y «operaciones». Wikipedia lo describe como un conjunto de prácticas que integra el desarrollo de software y las operaciones de TI, con el objetivo de acortar el ciclo de vida de la entrega y ofrecer entrega continua con alta calidad. Es más un movimiento que un marco: no hay un organismo rector ni una certificación única que lo defina.

**Primero la cultura.** El cambio central es cultural: metas compartidas, responsabilidad compartida y colaboración entre roles. Los equipos que adoptan las herramientas sin la cultura conservan el antiguo traspaso con otro nombre. Un resumen común es «lo construyes, lo operas», asociado a un comentario de Werner Vogels, de Amazon, y que significa que el equipo que construye un servicio es responsable de operarlo.

**Las tres vías.** En la novela *The Phoenix Project* y en el manual que la siguió, Gene Kim y sus coautores describen tres principios: flujo (acelerar el trabajo del desarrollo a las operaciones y a los clientes), retroalimentación (crear retroalimentación rápida de derecha a izquierda en cada etapa) y aprendizaje y experimentación continuos. Vinculan DevOps con el pensamiento lean; véanse el Tema 2.4 — Lean y kaizen y el Tema 2.3 — Flujo y kanban.

**CALMS.** Una regla mnemotécnica común para los elementos: cultura, automatización, lean, medición y compartición (en inglés, culture, automation, lean, measurement, sharing). Es útil como lista de lo que hay que mirar en un equipo, no como puntuación de madurez.

**Prácticas.** Las prácticas típicas de DevOps incluyen el control de versiones para todo, la integración y entrega continuas (véase el Tema 2.2 — Entrega continua), la infraestructura como código (véase el Tema 6.3 — Infraestructura como código y GitOps), las pruebas automatizadas, la monitorización y la observabilidad (véase el Tema 7.4 — Observabilidad y telemetría), las guardias compartidas y las revisiones sin culpa de los incidentes.

**Desplazar a la izquierda.** Mover comprobaciones como las pruebas y la seguridad a etapas más tempranas del ciclo de vida, donde los problemas son más baratos de corregir. DevSecOps extiende la idea a la seguridad, integrando comprobaciones de seguridad en el pipeline. Wikipedia describe ambos.

**Ingeniería de plataformas.** Una práctica más reciente en la que un equipo construye y opera una plataforma interna que otros equipos usan para construir, desplegar y operar servicios. El objetivo es reducir la carga de los equipos de producto ofreciendo rutas estándar y allanadas. Wikipedia describe la ingeniería de plataformas. Hace falta cuidado: una plataforma que los equipos están obligados a usar pero no pueden moldear se convierte en otro traspaso.

**Relación con ITIL.** ITIL 4 reconoce DevOps y describe sus prácticas de modo que puedan cumplirse con controles del pipeline. Ambos responden a preguntas distintas: DevOps describe cómo trabajan y automatizan los equipos; ITIL describe las prácticas que una organización necesita, como la gestión de incidentes, de cambios y de niveles de servicio. Un resumen útil es que DevOps suele aportar el «cómo» e ITIL el «qué considerar». Véanse el Tema 1.2 — ITIL y el Tema 2.9 — Gestión de Servicios Ágil.

**Relación con SRE.** La ingeniería de fiabilidad de sitios (SRE) es una disciplina de ingeniería para la fiabilidad que creció en Google; comparte metas con DevOps, usa objetivos de nivel de servicio y presupuestos de error y a menudo trata las operaciones como un problema de software. Véase el Tema 2.6 — Ingeniería de Fiabilidad de Sitios.

**Relación con lo ágil.** La práctica ágil se centra en entregar software que funciona en piezas pequeñas con participación de las partes interesadas; DevOps extiende esa preocupación más allá del punto de liberación, hacia la operación y la mejora del servicio. Ambos comparten valores como la colaboración, la retroalimentación rápida y la mejora continua.

**Objeciones comunes.** Parte del personal de operaciones teme que DevOps signifique recortar empleos o quitar controles; algunos desarrolladores temen que signifique guardia permanente. Ambos temores tienen casos reales detrás. Aborde esos temores de frente con acuerdos claros sobre carga de trabajo, apoyo y los controles que se mantienen.

**Cómo encajan las lentes.** DevOps es la cultura de entrega dentro de la lente ágil. Los asistentes de IA forman ya parte de muchas cadenas de herramientas, bajo revisión humana. La automatización es central. La analítica, incluidas las medidas de entrega y de fiabilidad, cierra el ciclo de retroalimentación.

## Buenas prácticas

1. **Empiece con metas compartidas.** Dé a desarrollo y operaciones el mismo resultado que cuidar, como la fiabilidad visible para el cliente y la rapidez del cambio seguro. Metas separadas para cada grupo recrean el muro.
2. **Haga al equipo responsable de lo que construye.** Deje que el equipo que construye un servicio participe en su operación, con el apoyo, la formación y los límites de carga de guardia que lo hagan sostenible.
3. **Automatice el camino a producción.** Use pipelines que compilan, prueban, analizan y despliegan de la misma manera cada vez, con registros. Véase el Tema 6.4 — Pipelines y cambio automatizado.
4. **Ponga todo en control de versiones.** Código, configuración, definiciones de infraestructura y runbooks. Un cambio es entonces revisable, rastreable y reversible.
5. **Desplace las comprobaciones a la izquierda.** Añada pruebas unitarias, análisis de seguridad y comprobaciones de políticas pronto en el pipeline, y corrija las causas de los fallos repetidos.
6. **Observe la producción y comparta lo que ve.** Dé a los desarrolladores acceso a la misma monitorización que usa operaciones y revísenla juntos. Véase el Tema 3.10 — Monitorización y Gestión de Eventos.
7. **Revise los incidentes sin culpa.** Celebre una revisión tras los incidentes significativos, céntrese en el sistema y siga las acciones. Véase el Tema 3.3 — Gestión de Problemas.
8. **Ofrezca una plataforma, no un mandato.** Si construye una plataforma interna, trate a los equipos que la usan como clientes: pregunte qué necesitan, publique su hoja de ruta y mida si ayuda.
9. **Conserve los controles, cambie cómo funcionan.** Donde un control gestiona un riesgo real, como la separación de funciones, consérvelo y cúmplalo con automatización y registros en lugar de con una reunión.
10. **Mida juntas la entrega y la fiabilidad.** Mire con qué rapidez y frecuencia cambia, además de con qué frecuencia los cambios causan problemas y con qué rapidez se recupera. Use los números para aprender, no para clasificar personas.

## Preguntas para conversar con su equipo

**¿Dónde está el traspaso entre construir y operar y qué se pierde ahí?**
La mayoría de las organizaciones tiene uno o más. Pregunte a ambas partes: ¿qué no saben los desarrolladores sobre operar el servicio y qué no sabe operaciones sobre el diseño? Espere listas largas. Después elijan un traspaso para eliminar o reducir.

**¿A quién se llama cuando nuestro servicio falla de noche y sabe cómo arreglarlo?**
Esto examina «lo construyes, lo operas» en la práctica. Las respuestas van de un desarrollador de guardia a un equipo aparte con conocimiento limitado. Pregunte por la carga de trabajo y la formación dada. Después acuerden un cambio para mejorar el conocimiento o la carga.

**¿Qué controles tenemos que existen por un incidente pasado y podría proporcionarlos un pipeline?**
Muchos controles son heredados. Pregunte qué riesgo atiende cada uno y qué evidencia satisface a su responsable. Espere resistencia de los dueños de los controles; pídales que ayuden a diseñar el reemplazo. Después prueben un reemplazo en el pipeline con la participación del responsable.

**¿Qué tendría que hacer nuestra plataforma interna para que la eligiéramos libremente?**
Esto prueba el pensamiento de plataforma. Si los equipos solo la usarían porque se les ordena, no los está sirviendo. Pregunte qué usan hoy y por qué. Después acuerden un pequeño conjunto de entrevistas con clientes.

**¿Cómo revisamos los incidentes y qué cambió tras el último?**
Las revisiones importan solo si siguen acciones. Pida las acciones de la última revisión y su estado. Espere que algunas sigan abiertas. Después asignen responsables y fechas de revisión a las que sigan pendientes.

**¿Cómo se usan los asistentes de IA de programación u operaciones en nuestra cadena de herramientas y quién revisa su salida?**
Los asistentes de IA pueden escribir código, pruebas, configuración y runbooks, y resumir incidentes. Pregunte quién es responsable de cada uso, qué revisa una persona y qué detectaría un error. Después elijan un uso para auditar este mes.

## En la práctica: un ejemplo de gestión de servicios

El equipo digital de banca minorista de un banco regional construye una aplicación móvil, y un grupo de operaciones aparte gestiona la producción. Las liberaciones ocurren cada seis semanas, con una congelación de tres días. Los desarrolladores dicen que operaciones bloquea el cambio; operaciones dice que los desarrolladores entregan código sin probar y los dejan a ellos para arreglárselas. Las revisiones de incidentes terminan en desacuerdo sobre de quién fue la culpa.

Un nuevo gerente de ingeniería propone un experimento con un servicio, la función de control de tarjetas. Un desarrollador y un ingeniero de operaciones se unen al mismo equipo. Acuerdan una meta compartida: los clientes pueden congelar y descongelar una tarjeta en menos de cinco segundos, y los cambios pueden liberarse con seguridad en cualquier momento. Ponen la configuración en control de versiones, añaden pruebas automatizadas y análisis de seguridad a un pipeline y acuerdan que todo el equipo asume el turno de guardia, con ingenieros de operaciones que forman a los desarrolladores y un límite de una semana de cada seis por persona. El equipo de riesgos del banco insiste en mantener la separación de funciones; el equipo lo cumple exigiendo una revisión entre pares para cada cambio y registrando la evidencia del pipeline.

Tras seis meses, el control de tarjetas se libera cada semana con pocos incidentes, y el equipo de riesgos acepta el registro del pipeline en lugar de una reunión del comité de cambios para este servicio. Las revisiones de incidentes son sin culpa y se corrigen dos causas repetidas. Los demás servicios siguen en el modelo antiguo.

Qué cambia: este equipo ya no espera el ciclo de seis semanas y tiene una visión compartida de la producción. Qué sigue siendo difícil: el resto de la organización es escéptico, porque el equipo tiene más ingenieros por servicio que los demás; la carga de guardia ha hecho que dos desarrolladores se planteen irse; y el pipeline compartido depende de un equipo central de plataforma con un largo backlog. El gerente lleva las cuestiones de dotación y de plataforma al grupo directivo en lugar de presentar el resultado como una plantilla.

## Cuatro perspectivas

### Equipos de producto y de entrega

Sean dueños del servicio de extremo a extremo: diseño, construcción, liberación y operación. Aprendan cómo funciona operaciones, compartan la guardia con equidad y hagan de la observabilidad y los runbooks parte de su definición de terminado.

### Equipos de servicio y de operaciones

Compartan lo que saben sobre fallos y recuperación, ayuden a construir el pipeline y la monitorización y avancen hacia diseñar su propio trabajo como ingeniería. Conserven los controles que importan y muestren cómo los cumple la automatización.

### Liderazgo y gobernanza

Fije metas compartidas para desarrollo y operaciones, financie la plataforma y la formación y vigile la carga de trabajo y los límites de guardia. No clasifique a los equipos por números de entrega. Pida evidencia de que los controles funcionan.

### Clientes y usuarios

Debería ver correcciones más rápidas y cambios más pequeños y seguros. Diga a los equipos qué importa más y dé retroalimentación sobre los cambios que le perturban.

## Ágil, IA, automatización y analítica

### Ágil

DevOps extiende la preocupación ágil por el software que funciona más allá de la liberación, hacia la operación y mejora del servicio, con las partes interesadas involucradas y la retroalimentación continua. Precaución: no lo trate como una compra de herramientas ni como un nuevo nombre de equipo; el cambio es la cultura.

### IA

Los asistentes de IA pueden ayudar a escribir código, pruebas y definiciones de infraestructura, resumir registros e incidentes y redactar runbooks, con un responsable y revisión humana de todo lo que llegue a producción. Precaución: un asistente puede introducir fallos sutiles o patrones inseguros; aplique las mismas comprobaciones del pipeline que a los cambios humanos y siga los cambios asistidos por IA que fallan. Véase el Tema 5.4 — IA generativa para incidentes, conocimiento y cambios.

### Automatización

Automatice el camino a producción, la creación de entornos, las pruebas y las operaciones rutinarias, con registros y reversión. Precaución: la automatización concentra poder en el pipeline, así que controle el acceso a él y revise los cambios del pipeline con el mismo cuidado que los cambios del servicio.

### Analítica

Observe la frecuencia de despliegue, el plazo de entrega de los cambios, la tasa de fallos de cambio y el tiempo de restablecimiento, junto con medidas de fiabilidad y de clientes. Precaución: las medidas de entrega son fáciles de manipular y comparar equipos ignora el contexto; úselas para encontrar dónde mejorar. Véanse el Tema 7.3 — Medición e informes y el libro *Service Management Metrics*.

## Modos de fallo habituales

- **Un equipo DevOps que se convierte en un nuevo silo.** Un grupo adopta el nombre y el traspaso permanece. Extienda las habilidades y la responsabilidad entre los equipos.
- **Herramientas sin cultura.** Se construye el pipeline y la culpa continúa. Trabaje las metas compartidas y las prácticas de revisión.
- **Hazañas permanentes de guardia.** Los desarrolladores se agotan. Fije límites, comparta la carga y corrija las causas de los avisos.
- **Una plataforma impuesta que nadie quiere.** Los equipos la rodean. Trate a los equipos como clientes y mida el uso por elección.
- **Abandonar controles sin reemplazarlos.** El riesgo sube y los auditores objetan. Cumpla el propósito del control con automatización y registros.
- **Números de entrega como metas.** Los equipos los manipulan. Use las medidas para aprender.
- **Ignorar la seguridad hasta el final.** Los hallazgos llegan tarde y bloquean liberaciones. Desplace las comprobaciones a la izquierda.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Cultura | Metas separadas para desarrollo y operaciones | Metas compartidas en un equipo | Metas y responsabilidad compartidas ampliamente adoptadas | Prácticas culturales revisadas con evidencia | Compartida entre equipos, proveedores y socios |
| Pipeline | Liberaciones manuales | Compilación y pruebas automatizadas | Camino automatizado a producción para la mayoría de los servicios | Pipeline con responsable y mejorado como producto | Pipelines gobernados y compartidos en toda la organización |
| Operaciones | Guardia separada | Guardia compartida en un equipo | Guardia compartida con límites y apoyo | Carga y causas de guardia medidas | Operaciones diseñadas como ingeniería y automatizadas entre servicios |
| Aprendizaje | Culpa | Revisiones ocasionales | Revisiones sin culpa con acciones seguidas | Aprendizaje medido y compartido | Aprendizaje compartido entre equipos y con proveedores |

## Lista de verificación

- [ ] Desarrollo y operaciones comparten metas de fiabilidad y de cambio seguro.
- [ ] El equipo que construye un servicio participa en su operación, dentro de límites sensatos de guardia.
- [ ] Todo lo que cambia el servicio está en control de versiones y pasa por el pipeline.
- [ ] Las comprobaciones de seguridad y de políticas se ejecutan pronto en el pipeline.
- [ ] Los desarrolladores pueden ver la monitorización de producción.
- [ ] Celebramos revisiones sin culpa y seguimos las acciones.
- [ ] Los controles que importan se conservan y se cumplen mediante automatización y registros.
- [ ] La ayuda de IA en la cadena de herramientas tiene un responsable y revisión humana.

## Prompts de IA

**Encuentre traspasos que eliminar.**

```text
Here is a description of how a change goes from "code complete" to "running in production" in our organization: [paste steps and who does each].
List each handover, what information passes across it, and what might be lost. For each, give two questions to ask the people on either side. Do not propose solutions.
List what you are unsure of.
```

**Resuma un incidente para una revisión sin culpa.**

```text
Below is the timeline and notes from an incident: [paste timeline with names removed].
Draft a neutral summary under these headings: what happened, how it was detected, what was done, what helped, what slowed us down, and questions for the review. Do not assign blame or state causes not in the notes.
List what you are unsure of.
```

**Redacte una entrevista con clientes de la plataforma.**

```text
We run an internal platform for [purpose]. Our users are [teams and roles].
Write ten open interview questions to learn what helps and hinders them, avoiding questions that suggest an answer. Add three things to listen for.
List what you are unsure of.
```

## Habilidades de IA

- [postmortem](../../../../skills/postmortem/SKILL.md): úsela para realizar una revisión sin culpa con acciones seguidas.
- [shift-left-testing](../../../../skills/shift-left-testing/SKILL.md): úsela para mover las comprobaciones a etapas más tempranas del pipeline.
- [on-call-rotation](../../../../skills/on-call-rotation/SKILL.md): úsela para diseñar un arreglo de guardia sostenible.
- [runbook](../../../../skills/runbook/SKILL.md): úsela para convertir el conocimiento operativo en runbooks breves y actuales.

## Fuentes principales

- Gene Kim, Jez Humble, Patrick Debois y John Willis, *The DevOps Handbook*: los principios y las prácticas, con casos de estudio.
- Gene Kim, Kevin Behr y George Spafford, *The Phoenix Project*: una novela que presentó las ideas a muchos lectores.
- DORA (dora.dev): investigación sobre el desempeño de la entrega y la fiabilidad.
- Wikipedia, "DevOps": una visión general de la historia y las prácticas.

## Referencias

1. DevOps — Wikipedia — https://en.wikipedia.org/wiki/DevOps
2. Phoenix Project — Wikipedia — https://en.wikipedia.org/wiki/Phoenix_Project
3. Site reliability engineering — Wikipedia — https://en.wikipedia.org/wiki/Site_reliability_engineering
4. Infrastructure as code — Wikipedia — https://en.wikipedia.org/wiki/Infrastructure_as_code
5. Shift-left testing — Wikipedia — https://en.wikipedia.org/wiki/Shift-left_testing
6. Platform engineering — Wikipedia — https://en.wikipedia.org/wiki/Platform_engineering
7. Werner Vogels — Wikipedia — https://en.wikipedia.org/wiki/Werner_Vogels
8. Conway's law — Wikipedia — https://en.wikipedia.org/wiki/Conway%27s_law
9. Postmortem documentation — Wikipedia — https://en.wikipedia.org/wiki/Postmortem_documentation
10. DORA — DevOps Research and Assessment — https://dora.dev
