# Gestión de Servicios Ágil

**La gestión de servicios ágil aplica los valores ágiles al diseño y la mejora de las propias prácticas de gestión de servicios: cada práctica tiene un responsable que actúa como un propietario de producto, un pequeño backlog de mejoras, ciclos cortos de retroalimentación con las personas que usan la práctica y controles integrados en el trabajo.**

## Por qué importa

Las prácticas de gestión de servicios suelen diseñarse una vez, plasmarse en un documento de proceso y hacerse cumplir. El documento envejece a medida que cambian la tecnología y la organización. La gente rodea los pasos que ya no tienen sentido y la práctica se aleja de lo que dice el papel. Revisarla se convierte en un proyecto con comité y un ciclo largo, y cuando la revisión llega ya está desactualizada.

Si las ideas ágiles son buenas para construir software, también deberían serlo para diseñar las prácticas que rigen cómo se opera. Una práctica como la habilitación de cambios puede tratarse como un producto con usuarios, las personas que plantean y aprueban los cambios. Su responsable puede escuchar a esos usuarios, mantener un backlog de pequeñas mejoras, liberarlas a menudo y comprobar si ayudaron. Eso es lo que este tema entiende por gestión de servicios ágil.

La idea coincide con los principios rectores de ITIL 4, como «avanzar de forma iterativa con retroalimentación» y «empezar donde se está» (véase el Tema 1.5 — Principios Rectores de ITIL), y encaja con el foco en la mejora continua del sistema de valor del servicio. La descripción del propietario de la versión más reciente de ITIL destaca un enfoque de creación de valor que vincula estrategia, entrega y resultados medibles (véase el Tema 1.3 — ITIL 5). Las prácticas que mejoran en pasos pequeños y muestran sus resultados encajan con esa dirección.

## Conceptos clave

**Las prácticas como productos.** Una práctica como la gestión de incidentes sirve a un conjunto de usuarios: quienes responden, los clientes, los directivos y los auditores. Un responsable de práctica, actuando como un propietario de producto, responde de lo bien que los sirve. El responsable recoge retroalimentación, mantiene un backlog de cambios a la práctica y decide qué cambiar a continuación. Véase el Tema 2.8 — Propiedad de Productos y Servicios.

**Backlog del proceso.** Una lista breve y ordenada de mejoras a la práctica: un formulario que simplificar, un paso que eliminar, un informe que dejar de hacer, una automatización nueva. Los elementos provienen de los usuarios, de las revisiones de incidentes y de la medición. El artículo de Wikipedia sobre los backlogs explica la idea. El responsable revisa la lista con regularidad con los usuarios y elige unos pocos elementos para probar.

**Cambios pequeños con retroalimentación.** Los cambios en la práctica se hacen en piezas pequeñas y se prueban primero con un grupo limitado, por ejemplo un equipo o un tipo de solicitud. El responsable pregunta a los usuarios qué ocurrió y conserva, ajusta o revierte el cambio. Esto sustituye las grandes reescrituras de un documento de proceso.

**Usuarios de la práctica.** Quienes deben seguir la práctica son sus principales usuarios. Su experiencia importa: una práctica que no pueden seguir será ignorada o manipulada. Involucre a algunos de ellos en cada cambio.

**Controles dentro del trabajo.** Donde una práctica existe para gestionar un riesgo, como la aprobación de cambios arriesgados, la gestión de servicios ágil prefiere integrar el control en las herramientas y el pipeline, produciendo evidencia como subproducto. Véanse el Tema 2.2 — Entrega continua y el Tema 3.4 — Habilitación de Cambios.

**Documentación ligera.** Describa una práctica en una o dos páginas: propósito, quién interviene, qué ocurre, cómo pedir ayuda y cómo se mejora. Deje el detalle en las herramientas y en guías breves y actuales. Los manuales largos de procedimientos rara vez se leen.

**Cadencia de revisión.** Fije un momento regular, como cada mes, para revisar el backlog, las medidas y la retroalimentación y decidir qué cambiar. Entre revisiones, pueden hacerse correcciones urgentes cuando haga falta.

**Experimentos.** Trate un cambio como un experimento con un efecto esperado y una fecha para comprobar. Por ejemplo: «Esperamos que quitar la segunda aprobación de los cambios de bajo riesgo reduzca el plazo en un día sin más fallos. Lo comprobaremos a las cuatro semanas». Si no se ve el efecto, revierta el cambio.

**Ágil e ITIL juntos.** La gestión de servicios ágil no descarta el marco. Usa las prácticas de ITIL como fuente de ideas y de vocabulario, y las adapta. Donde una práctica es un control de riesgo con consecuencias reales, conserva el control y cambia cómo se cumple.

**Lo que no significa.** No significa abandonar la documentación, ignorar los requisitos de auditoría ni realizar ceremonias porque sí. Si su equipo elige usar sprints o Kanban para el trabajo de mejora, pueden encajar; lo importante es el ciclo continuo de retroalimentación y cambio pequeño.

**Cómo encajan las lentes.** El backlog del responsable de la práctica es la lente ágil vuelta sobre la propia gestión de servicios. La IA puede analizar tickets y retroalimentación para sugerir mejoras, bajo revisión. La automatización convierte las reglas de la práctica en comportamiento de las herramientas. La analítica muestra si las prácticas funcionan.

## Buenas prácticas

1. **Nombre un responsable de práctica.** Cada práctica importante tiene una persona responsable de su calidad y mejora. El responsable es usuario de la práctica además de su diseñador.
2. **Empiece por el dolor de los usuarios.** Pregunte a quienes siguen la práctica qué es lento, poco claro o inútil y anote las respuestas. Empiece con lo que ellos plantean, no con lo que sugiere el marco.
3. **Mantenga un backlog breve y visible.** Muéstrelo donde los usuarios puedan verlo. Limite el número de elementos en curso y termine antes de empezar más.
4. **Cambie en pasos pequeños.** Pruebe cada cambio con un equipo o un tipo de solicitud, con una expectativa declarada y una fecha de revisión.
5. **Mida el efecto.** Elija uno o dos indicadores para cada cambio, como el tiempo para aprobar o la proporción de solicitudes devueltas por falta de información. Diga cómo podría engañar la medida.
6. **Integre los controles en las herramientas.** Donde sea posible, haga que la acción segura sea la predeterminada, como un campo obligatorio o una comprobación automática, y registre la evidencia de forma automática.
7. **Escriba menos, enlace más.** Mantenga breve la descripción de la práctica, enlace a herramientas y ejemplos y elimine las páginas que nadie lee.
8. **Revise con cadencia.** Celebre una revisión mensual breve con algunos usuarios y publique qué cambió y por qué.
9. **Respete los requisitos reales.** Consulte con auditoría, seguridad y asuntos legales cuando un cambio toque un control, e involúcrelos pronto para poder explicar cómo el nuevo método cumple el fin.
10. **Retire lo que no ayuda.** Elimine pasos, formularios e informes que no muestren valor y dígalo públicamente.

## Preguntas para conversar con su equipo

**¿Qué prácticas nuestras rodea la gente y por qué?**
Los rodeos muestran dónde la práctica no encaja con el trabajo. Pida ejemplos concretos, como un formulario que se llena con «n/a». No lo trate primero como incumplimiento. Después elijan un rodeo y pregunten qué cambio facilitaría la vía oficial.

**¿Quién es responsable de cada una de nuestras prácticas y cómo se entera de lo que dicen quienes las usan?**
Muchas prácticas no tienen responsable ni vía de retroalimentación. Pregunte cuándo habló el responsable con los usuarios por última vez. Espere silencio. Después acuerden una conversación regular con unos pocos usuarios.

**¿Cuál es el cambio más pequeño a una práctica que podríamos probar la semana próxima y cómo sabríamos que ayudó?**
Esto fomenta los experimentos pequeños. Los equipos suelen proponer rediseños. Insista en algo diminuto, con una medida y una fecha de revisión. Después nombren al responsable y a quien lo comprobará.

**¿Cuáles de nuestros controles podrían cumplir las herramientas o el pipeline en lugar de una reunión o un formulario?**
Busque controles que dependen de que la gente se acuerde. Pregunte qué evidencia necesita el auditor. Después prueben un control automatizado con el responsable del control involucrado.

**¿Cuánto mide la documentación de nuestras prácticas y quién la lee?**
Compruebe si se usan los documentos. Pregunte a las personas recién llegadas qué leen. Espere manuales largos que nadie abre. Después redacten una versión de una página de una práctica y pruébenla con alguien recién llegado.

**¿Cómo podría ayudarnos la IA a ver qué no funciona en nuestras prácticas y qué querríamos comprobar a mano?**
La IA puede encontrar patrones en tickets y retroalimentación. También puede encontrar patrones que son artefactos de cómo la gente rellena campos. Pregunte quién leerá una muestra. Después comparen un análisis de IA de los tickets de un mes con una revisión manual.

## En la práctica: un ejemplo de gestión de servicios

El departamento de TI de una universidad tiene una práctica de habilitación de cambios con un comité de revisión semanal. El personal dice que el formulario es largo y que el comité añade una semana a cada cambio. Los auditores lo valoran, porque proporciona un registro. La responsable de la práctica, una gerente de servicios veterana, decide tratarla como un producto.

Entrevista a ocho personas que plantearon cambios el último mes y asiste a una reunión del comité. Descubre que el 70 por ciento de los cambios son rutinarios y de bajo riesgo, que el formulario tiene 22 campos de los cuales solo ocho se leen alguna vez y que el comité casi siempre aprueba lo que ve. Arma un backlog breve: acortar el formulario, definir una categoría de «cambio estándar» preaprobada por riesgo y no por reunión, y vincular cada registro de cambio con los resultados de las pruebas automatizadas.

Prueba el formulario más corto con un equipo durante cuatro semanas, con la expectativa de que el tiempo medio desde la solicitud hasta la aprobación de los cambios estándar baje de seis días a dos. Pide al auditor interno que revise las reglas propuestas para el cambio estándar. El auditor pide una comprobación por muestreo y una revisión mensual de los fallos. El equipo acepta. A las cuatro semanas el promedio baja a menos de dos días y el número de cambios fallidos no sube.

Qué cambia: el comité dedica ahora su tiempo al 30 por ciento de los cambios con riesgo real, y el registro se genera desde el pipeline. Qué sigue siendo difícil: otros equipos usan una herramienta distinta que no puede mostrar resultados de pruebas, de modo que sus registros siguen siendo manuales; el muestreo del auditor añade trabajo que nadie ha dotado de recursos; y algunos miembros del comité echan de menos el viejo ritual semanal y sienten que su papel se ha reducido. La responsable mantiene una revisión mensual y pide ideas al comité.

## Cuatro perspectivas

### Equipos de producto y de entrega

Ustedes son los principales usuarios de las prácticas de cambio y liberación. Den retroalimentación pronto, participen en las pruebas e integren controles en su pipeline para que la práctica pueda apoyarse en evidencia.

### Equipos de servicio y de operaciones

Con frecuencia son dueños de las prácticas. Actúen como propietarios de producto: escuchen a los usuarios, mantengan un backlog breve y prueben cambios pequeños. Compartan los resultados y retiren los pasos que no ayudan.

### Liderazgo y gobernanza

Pida a los responsables el backlog de la práctica, las medidas y la retroalimentación que han oído. Respalde los cambios que sustituyen controles manuales por controles integrados, tras involucrar a auditoría y riesgos. No exija documentos largos.

### Clientes y usuarios

Cuando una práctica le afecte, como un formulario de solicitud, debería poder decir qué le resulta incómodo y ver que mejora. Pregunte quién es su responsable y cómo dar retroalimentación.

## Ágil, IA, automatización y analítica

### Ágil

Este tema es la lente ágil aplicada a las prácticas: pasos pequeños, participación de las partes interesadas, revisión regular y mejora continua. Precaución: no ejecute rituales ágiles alrededor de una práctica; mantenga el foco en la retroalimentación y el cambio pequeño.

### IA

La IA puede analizar tickets y retroalimentación para sugerir mejoras, redactar descripciones de práctica de una página y contrastar el texto nuevo con las reglas de origen, con una persona que revise. Cada uso necesita un responsable. Precaución: la IA puede escribir procedimientos pulidos que nadie sigue; pruébelos con usuarios reales. Véase el Tema 5.1 — IA en la gestión de servicios.

### Automatización

Convierta las reglas de la práctica en comportamiento de las herramientas: encaminamiento, campos obligatorios, aprobaciones automáticas para cambios de bajo riesgo y captura de evidencia. Mantenga registros y una forma de revertir los cambios. Precaución: incrustar una regla defectuosa en la automatización la endurece; pruebe antes la regla a mano. Véase el Tema 6.2 — Automatización y orquestación de flujos de trabajo.

### Analítica

Use unos pocos indicadores de cómo se desempeña cada práctica, como el tiempo de aprobación, el retrabajo y la satisfacción de los usuarios. Precaución: contar el cumplimiento, como el «porcentaje de cambios con formulario completo», puede manipularse y dice poco sobre si la práctica ayuda; véanse el Tema 7.3 — Medición e informes y el libro *Service Management Metrics*.

## Modos de fallo habituales

- **El rediseño de la práctica como proyecto.** Un comité reescribe el proceso durante meses. Haga cambios pequeños con retroalimentación.
- **Sin responsable de la práctica.** Nadie la mejora. Nombre un responsable.
- **El responsable nunca habla con los usuarios.** La práctica se desvía. Programe conversaciones regulares.
- **Abandonar controles sin reemplazo.** Siguen objeciones de riesgo y auditoría. Cumpla el fin del control en las herramientas.
- **Documentos largos.** Nadie los lee. Escriba una página y enlace al detalle.
- **Medir solo el cumplimiento.** La gente completa formularios y nada mejora. Mida resultados y experiencia.
- **Ceremonia sin cambio.** Hay reuniones y el backlog no se mueve. Limite el trabajo en curso y termine los elementos.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Responsabilidad de las prácticas | Sin responsable | Responsables de las prácticas principales | Cada práctica tiene un responsable y un backlog | Los responsables revisan los resultados con los usuarios | Los responsables se coordinan entre prácticas y socios |
| Cambio de las prácticas | Reescrituras raras y grandes | Mejoras ocasionales | Experimentos pequeños regulares con revisión | Resultados medidos y atendidos | Experimentos compartidos en toda la organización |
| Controles | Manuales y por reunión | Algunos integrados | Controles estándar integrados en las herramientas | Evidencia muestreada y revisada | Controles automatizados y adaptados al riesgo |
| Documentación | Manuales largos | Algunas guías breves | Descripciones de una página mantenidas al día | Uso de los documentos comprobado | Orientación compartida y buscable en contexto |

## Lista de verificación

- [ ] Cada práctica importante tiene un responsable designado.
- [ ] Cada responsable mantiene un backlog breve y visible.
- [ ] Hablamos con los usuarios de cada práctica con regularidad.
- [ ] Probamos los cambios en pasos pequeños con una medida y una fecha de revisión.
- [ ] Los controles están integrados en las herramientas donde es posible.
- [ ] Auditoría y riesgos participan cuando cambian los controles.
- [ ] Las descripciones de las prácticas son breves y actuales.
- [ ] Retiramos los pasos que no ayudan y lo decimos.

## Prompts de IA

**Analice la retroalimentación sobre una práctica.**

```text
Here is feedback from people who follow our [practice name] practice, with names removed: [paste feedback].
Group it into up to six themes, count each, quote two short examples per theme, and list questions the owner should ask. Do not suggest solutions.
List what you are unsure of.
```

**Redacte la descripción de una práctica en una página.**

```text
Here is the current description of our [practice] practice: [paste text].
Draft a one-page version with: purpose, who is involved, what happens, how to ask for help, and how it is improved. Keep every rule that appears in the original; mark any rule you are unsure how to phrase. Do not add rules.
List what you are unsure of.
```

**Planifique un experimento pequeño.**

```text
We want to change [practice step] to [proposed change]. Our current measure: [describe]. The people affected: [list].
Write an experiment plan: expectation, one or two measures, how each could mislead, who to involve, how long to run it, and what would make us reverse it. Do not claim the change will work.
List what you are unsure of.
```

## Habilidades de IA

- [agile-principles](../../../../skills/agile-principles/SKILL.md): úsela para contrastar los cambios en las prácticas con los valores ágiles.
- [kaizen](../../../../skills/kaizen/SKILL.md): úsela para planificar pequeños experimentos de mejora.
- [change-request](../../../../skills/change-request/SKILL.md): úsela para diseñar un registro de cambio más ligero.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): úsela para analizar los pasos y las esperas de una práctica.

## Fuentes principales

- PeopleCert, páginas de certificación ITIL: la descripción del propietario de la orientación de ITIL y de su versión más reciente.
- Wikipedia, "Backlog": antecedentes de la lista que impulsa la mejora.
- Wikipedia, "Continual improvement process": la idea del cambio continuo.
- Wikipedia, "Agile management": la aplicación de las ideas ágiles a la gestión.

## Referencias

1. Agile management — Wikipedia — https://en.wikipedia.org/wiki/Agile_management
2. Backlog — Wikipedia — https://en.wikipedia.org/wiki/Backlog
3. Continual improvement process — Wikipedia — https://en.wikipedia.org/wiki/Continual_improvement_process
4. Business process — Wikipedia — https://en.wikipedia.org/wiki/Business_process
5. Feedback — Wikipedia — https://en.wikipedia.org/wiki/Feedback
6. Agile software development — Wikipedia — https://en.wikipedia.org/wiki/Agile_software_development
7. ITIL — Wikipedia — https://en.wikipedia.org/wiki/ITIL
8. IT service management — Wikipedia — https://en.wikipedia.org/wiki/IT_service_management
9. Self-organization — Wikipedia — https://en.wikipedia.org/wiki/Self-organization
10. ITIL Foundation Bridge (Version 5) — PeopleCert — https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-foundation-bridge-version-5-4158
