# IA generativa para incidentes, conocimiento y cambios

**La IA generativa puede resumir incidentes, redactar artículos de conocimiento y postmortems y ayudar a evaluar cambios; ahorra más tiempo en los primeros borradores y menos en los hechos, así que úsela para escribir y leer, verifique cada afirmación frente al registro y mantenga a una persona designada como responsable de lo que se envía o se aprueba.**

## Por qué importa

Gran parte del trabajo de operar servicios es escribir y leer. Durante un incidente, alguien escribe actualizaciones de estado mientras otros leen registros de chat. Después, alguien escribe una cronología y una revisión. Un artículo de conocimiento empieza como una nota de resolución de un ticket que hay que convertir en algo legible. Una solicitud de cambio necesita una descripción, una evaluación de riesgos y un plan. Estas tareas consumen tiempo, son repetitivas y a menudo se hacen tarde y mal porque todos están ocupados.

La IA generativa es muy adecuada para este tipo de trabajo. Los grandes modelos de lenguaje pueden leer un hilo largo y producir un resumen en segundos. Pueden convertir notas en bruto en un borrador limpio y proponer una estructura para una revisión. Bien usados, liberan a las personas cualificadas para el criterio y la conversación. Mal usados, producen texto fluido y seguro que es erróneo: una cronología con horas inventadas, una causa raíz que nadie encontró, un paso de runbook que no existe.

La diferencia está en cómo se organiza el trabajo. Dé al modelo el registro real, pídale que use solo eso, haga que muestre sus fuentes y que una persona compruebe antes de compartir nada. Este tema ofrece patrones prácticos para tres áreas: incidentes, conocimiento y cambios. Se apoya en las ideas generales del Tema 5.1 — IA en la gestión de servicios y se relaciona con la gestión de incidentes (Tema 3.2 — Gestión de Incidentes), la gestión de problemas (Tema 3.3 — Gestión de Problemas), la gestión del conocimiento (Tema 3.9 — Gestión del Conocimiento) y la habilitación de cambios (Tema 3.4 — Habilitación de Cambios). Las cuestiones de gobernanza están en el Tema 5.6 — Gobernanza, riesgo y cumplimiento de la IA.

## Conceptos clave

**IA generativa.** Sistemas que producen contenido nuevo, como texto y código, a partir de prompts. Wikipedia describe la IA generativa y los grandes modelos de lenguaje. Para el trabajo de servicio, el texto es la salida principal: resúmenes, borradores, explicaciones y notas estructuradas.

**Alucinación.** Salida fluida y sin respaldo o falsa. Wikipedia describe la alucinación en la IA. Es una propiedad de cómo funcionan estos modelos, no un error raro. El riesgo es mayor cuando se pide al modelo hechos que no se le dieron: una hora exacta, una causa, un número de política, una opción de API.

**Fundamentación (grounding).** Dar al modelo el material de origen y pedirle que responda solo a partir de él. La generación aumentada por recuperación, descrita en Wikipedia, encuentra documentos relevantes y los suministra. Para los incidentes, la fuente es la cronología, el chat y los datos de monitorización; para el conocimiento, el ticket y los artículos existentes; para los cambios, el registro del cambio y los cambios pasados similares. La fundamentación reduce los errores pero no los elimina.

**Ventana de contexto.** La cantidad de texto que un modelo puede considerar a la vez. Wikipedia describe la ventana de contexto. Los chats largos de incidentes pueden superarla, así que las entradas largas se resumen por partes. Compruebe si se perdió material importante.

**Resumen.** Reducir un texto largo a sus puntos principales. Wikipedia describe el resumen automático. Los resúmenes pierden detalle por diseño y pueden distorsionarlo. Es mejor usarlos como guía del original, con los medios para comprobarlo.

**Borradores, no decisiones.** El uso más seguro es producir un primer borrador para que una persona lo edite y lo asuma. El nombre de la persona va en el resultado, y es responsable de él. Esto mantiene el criterio en manos humanas y usa el modelo para la parte mecánica.

**Prompt e instrucción.** El texto que se da al modelo. Las instrucciones claras, con el rol, la tarea, las fuentes, el formato y qué hacer cuando falta información, mejoran los resultados. Véase el Tema 5.7 — Habilidades y Prompts de IA.

**Confidencialidad.** Los chats y tickets de incidentes suelen contener secretos, datos personales y detalles de seguridad. Importa adónde va el texto: un modelo alojado por su organización, un servicio de un proveedor bajo contrato o una herramienta pública con términos desconocidos. Decida qué puede ir adónde. Véase el Tema 5.6 — Gobernanza, riesgo y cumplimiento de la IA.

**Inyección de prompts.** El texto del material que usted da al modelo, como el cuerpo de un ticket o una línea de registro, puede contener instrucciones que intentan cambiar su comportamiento. Wikipedia describe la inyección de prompts. Trate todas las entradas como no fiables y no deje que un modelo con poderes para actuar lea contenido de fuentes desconocidas.

**Sesgo de automatización.** La tendencia a confiar en las sugerencias automáticas, sobre todo cuando se está cansado u ocupado. Wikipedia describe el sesgo de automatización. Durante un incidente, una sugerencia fluida puede enviar a quienes responden por el camino equivocado. Trate la salida de la IA como una hipótesis.

**Incidentes.** Las tareas útiles incluyen resumir un hilo para una persona que se incorpora, redactar una actualización de estado para su revisión, extraer del registro una cronología de eventos con marcas de tiempo, encontrar incidentes pasados similares y proponer preguntas para la revisión. Las tareas arriesgadas incluyen afirmar una causa raíz como un hecho y enviar una actualización a los clientes sin revisión.

**Conocimiento.** Las tareas útiles incluyen convertir un ticket resuelto en un borrador de artículo, reescribir un artículo en lenguaje sencillo, sugerir títulos y etiquetas y encontrar duplicados. Las tareas arriesgadas incluyen publicar borradores sin una comprobación técnica y confiar en que el modelo conozca la solución correcta.

**Cambios.** Las tareas útiles incluyen comprobar si falta información en la descripción de un cambio, resumir una solicitud de integración grande, sugerir casos de prueba y enumerar factores de riesgo a partir de cambios pasados similares. Las tareas arriesgadas incluyen aprobar un cambio o calificar su riesgo como «bajo» solo por la palabra del modelo.

**Código y scripts.** Los modelos pueden redactar scripts, consultas y configuración. Wikipedia describe la generación de código en un sentido más amplio. El código generado puede contener errores, fallos de seguridad o cuestiones de licencia. Trátelo como código no fiable: revíselo, pruébelo y páselo por el pipeline. Véanse el Tema 3.4 — Habilitación de Cambios y el Tema 4.2 — Gestión de Activos de Software.

**Registros y auditoría.** Conserve un registro de cómo se usó la IA: el prompt, las fuentes dadas, la salida, quién la revisó y qué cambió. Wikipedia describe los rastros de auditoría. Esto respalda el aprendizaje y la rendición de cuentas.

**Cómo encajan las lentes.** La IA generativa es una de las formas más visibles de la lente de IA. La práctica ágil sugiere ensayos cortos con retroalimentación de quienes hacen el trabajo. La automatización puede llevar los borradores a las herramientas, con puertas de revisión. La analítica muestra qué usos ahorran tiempo y cuáles causan retrabajo.

## Buenas prácticas

1. **Déle el registro y diga que use solo eso.** Pegue o recupere la cronología, el ticket o el cambio reales e indique al modelo que use solo el texto suministrado. Dígale que escriba «no indicado» cuando falte información.
2. **Pida citas y referencias.** Haga que el modelo cite las líneas o los artículos que usó, para que una persona pueda comprobar rápido cada afirmación.
3. **Separe los hechos de la inferencia.** Pida primero los hechos tomados del registro y después las hipótesis claramente etiquetadas. No deje que las hipótesis aparezcan como hallazgos.
4. **Mantenga un responsable humano.** La persona que envía la actualización, publica el artículo o aprueba el cambio es dueña del contenido, sea lo que sea que haya redactado el modelo. Hágalo explícito en el proceso.
5. **No envíe al exterior salidas sin revisar.** Las actualizaciones a clientes, reguladores o el público necesitan revisión y aprobación humanas. Los borradores internos tienen menor riesgo pero aun así necesitan comprobación.
6. **Proteja los datos.** Use herramientas aprobadas para la sensibilidad del contenido. Elimine secretos y datos personales donde pueda y no pegue nunca credenciales.
7. **Compruebe números, nombres y horas.** Es donde más aparece la invención. Compare cada cifra del borrador con la fuente.
8. **Pruebe con casos reales.** Ejecute el enfoque sobre incidentes y tickets pasados en los que conozca la verdad y anote dónde falla. Comparta los hallazgos y actualice sus instrucciones.
9. **Registre el uso.** Anote que la IA ayudó, con las fuentes y el revisor. Siga las correcciones para aprender qué tareas le convienen.
10. **Revise y retire.** Revise qué usos ahorran tiempo y cuáles causan retrabajo. Detenga los que no ayudan.

## Preguntas para conversar con su equipo

**¿Qué tareas de escritura y lectura en nuestro trabajo de incidentes y cambios llevan más tiempo y cuáles son de bajo riesgo?**
Hagan una lista. Esperen cronologías, actualizaciones de estado, borradores de revisiones y descripciones de cambios. Clasifíquenlas por riesgo. Después elijan una tarea de bajo riesgo para probar con IA.

**¿Qué necesitaríamos comprobar en un resumen de incidente escrito por IA antes de confiar en él?**
Piensen en horas, causas e impacto. Esperen acuerdo en que las horas y las causas necesitan comprobación. Después escriban una breve lista de verificación.

**¿Qué información no debe entrar nunca en una herramienta de IA y cómo facilitamos cumplirlo?**
Enumeren secretos, datos personales y detalles de seguridad. Esperen confusión sobre qué cuenta. Después acuerden una regla sencilla y una herramienta segura para el resto.

**¿Cómo sabríamos si los resúmenes o borradores de la IA estaban empeorando nuestra base de conocimiento?**
Piensen en pasos erróneos y errores repetidos. Esperen «no lo sabríamos». Después muestreen cada mes los artículos asistidos por IA para comprobar su exactitud.

**¿Cuándo dejaríamos que la IA sugiriera el riesgo de un cambio y quién decide?**
Discutan. Esperen cautela sobre la aprobación y comodidad con los avisos de información ausente. Después acuerden que la IA puede sugerir preguntas y cambios pasados similares, y que una persona califica el riesgo.

**¿Quién en nuestro equipo es bueno comprobando la salida de la IA y cómo podemos extender esa habilidad?**
Comprobar es una habilidad. Esperen unas pocas personas seguras. Después realicen un breve ejercicio en el que el equipo compruebe junto un borrador defectuoso.

## En la práctica: un ejemplo de gestión de servicios

El equipo de tecnología operativa de una red ferroviaria nacional gestiona sistemas de apoyo a la señalización. Tras cada incidente mayor, un ingeniero dedica media jornada a escribir una revisión a partir de registros de chat, gráficos de monitorización y notas de tickets. Las revisiones llegan tarde y las recientes han sido escasas.

El jefe del equipo prueba un asistente de IA generativa, alojado bajo el contrato del ferrocarril con un proveedor que no conserva ni entrena con las entradas, para el primer borrador de las revisiones. Para cada incidente, el ingeniero exporta el registro de chat y el historial del ticket, elimina los nombres del personal y da al asistente estas instrucciones: use solo el texto suministrado; produzca una cronología en la que cada entrada cite la línea de origen; enumere el impacto tal como se indica; enumere lo que ayudó y lo que frenó la respuesta; marque como «no indicado» todo lo que no esté en el texto; y ponga las hipótesis en una sección aparte etiquetada como tal.

En la primera prueba, sobre un incidente pasado, la cronología del borrador es exacta salvo que da una hora de reinicio de las 02:15, cuando el chat dice «sobre y cuarto, creo» y el ticket dice 02:22; el ingeniero lo corrige. El borrador también enumera como causa «un conmutador de red defectuoso», que aparece en el chat como una conjetura que luego se descartó; la revisión la trasladó a las hipótesis, como se había indicado, pero no anotó que se había descartado. El ingeniero corrige ambas cosas y envía el borrador al equipo en dos horas en lugar de cuatro.

Tras diez incidentes, el equipo estima que los primeros borradores llevan alrededor de un tercio del tiempo. Añaden una regla: el ingeniero comprueba cada hora y cada causa frente a la fuente, y las revisiones registran que la IA redactó la primera versión. También deciden no usar todavía la IA para calificar el riesgo en los registros de cambios.

Qué cambia: las revisiones llegan en un día y tienen más detalle sobre lo que ayudó. Qué sigue siendo difícil: los ingenieros a veces aceptan la formulación del modelo de causas que la evidencia respalda solo débilmente; a veces quedan detalles confidenciales en los chats exportados; y un ingeniero teme que las habilidades de redacción se desvanezcan. El jefe programa una sesión trimestral en la que los ingenieros escriben una revisión sin IA y la comparan.

## Cuatro perspectivas

### Equipos de producto y de entrega

Usen la IA para redactar descripciones de cambios, ideas de pruebas y notas de versión a partir de sus propios registros, y revísenlas. Traten el código generado como no fiable: pruébenlo y analícenlo como cualquier otro cambio.

### Equipos de servicio y de operaciones

Usen la IA para resumir hilos y redactar actualizaciones, revisiones y artículos, con las fuentes adjuntas. Comprueben cada hora, nombre y causa, y sean responsables de lo que publican.

### Liderazgo y gobernanza

Fije reglas sobre datos y aprobaciones y financie herramientas que las cumplan. Pida evidencia del tiempo ahorrado y de los errores detectados. No acepte la salida de la IA como registro de los hechos.

### Clientes y usuarios

Debería recibir actualizaciones que una persona ha comprobado. Si ve un error en lo que recibe, dígaselo al proveedor. Pregunte cómo se usa la IA en lo que se le comunica.

## Ágil, IA, automatización y analítica

### Ágil

Pruebe una tarea de escritura cada vez con las personas que la hacen, recoja retroalimentación y mejore las instrucciones. Mantenga breves y frecuentes las revisiones. Precaución: no deje que un borrador más rápido acorte la reflexión; el valor de una revisión está en el aprendizaje.

### IA

Fundamente cada uso en el registro, muestre las fuentes y mantenga a una persona responsable. Pruebe con casos pasados y registre el uso de la IA. Precaución: el texto fluido oculta la evidencia débil; pida al modelo que etiquete la confianza y las fuentes, y compruébelas. Véase el Tema 5.7 — Habilidades y Prompts de IA.

### Automatización

Automatice la fontanería: exportar el registro, eliminar secretos, llamar al modelo, adjuntar el borrador al ticket y avisar al revisor. Mantenga una puerta de revisión antes de publicar. Precaución: un pipeline que publica borradores automáticamente propaga errores; exija aprobación. Véase el Tema 6.2 — Automatización y orquestación de flujos de trabajo.

### Analítica

Siga el tiempo para elaborar las revisiones, las ediciones hechas a los borradores, los errores hallados y el uso por tipo de tarea. Precaución: contar borradores producidos premia el volumen, y el tiempo ahorrado suele estimarse; muestree la calidad de los documentos finales. Véanse el libro *Service Management Metrics* y el Tema 7.3 — Medición e informes.

## Modos de fallo habituales

- **Hechos de memoria.** El modelo inventa horas y causas. Suministre el registro y exija citas.
- **Actualizaciones externas sin revisar.** Llega información errónea a los clientes. Exija aprobación humana.
- **Secretos en los prompts.** Se filtran datos sensibles. Use herramientas aprobadas y elimine secretos.
- **Firmar sin mirar.** Quienes revisan aceptan borradores sin comprobar. Dé una lista de verificación y muestree las revisiones.
- **Entradas que manipulan el modelo.** El texto hostil cambia el comportamiento. Trate las entradas como no fiables.
- **Usar la IA para calificar el riesgo.** Se cree un «bajo» fluido. Use la IA para plantear preguntas y deje que las personas califiquen el riesgo.
- **Erosión de habilidades.** La gente deja de escribir y de comprobar. Mantenga la práctica y la calidad de la revisión.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Uso | Experimentos individuales | Consejos compartidos | Patrones aprobados para incidentes, conocimiento y cambios | Patrones revisados según los resultados | Patrones integrados en las herramientas con gobernanza |
| Fundamentación y comprobación | Memoria del modelo | Algunas fuentes mostradas | Fuentes citadas y hechos comprobados frente a los registros | Errores seguidos y devueltos al proceso | Verificación parcialmente automatizada, con aprobación humana |
| Protección de datos | Poco clara | Conciencia | Herramientas y reglas aprobadas | Cumplimiento monitorizado | Controles integrados en las herramientas y los pipelines |
| Responsabilidad | Poco clara | Informal | Responsables designados para cada salida | Responsables y revisiones auditados | Responsabilidad integrada entre servicios |

## Lista de verificación

- [ ] Elegimos unas pocas tareas de escritura de bajo riesgo para la IA generativa.
- [ ] Damos al modelo el registro y le decimos que use solo eso.
- [ ] Las salidas citan sus fuentes y separan hechos de hipótesis.
- [ ] Una persona designada es dueña de cada salida y la revisa antes de compartirla.
- [ ] Usamos herramientas aprobadas para el contenido sensible y eliminamos secretos.
- [ ] Comprobamos horas, nombres, números y causas frente a la fuente.
- [ ] Registramos cuándo ayudó la IA y quién revisó.
- [ ] No dejamos que la IA apruebe cambios ni afirme causas raíz por sí sola.

## Prompts de IA

**Construya una cronología de incidente con fuentes.**

```text
Below is the chat log and ticket history of an incident, with names removed: [paste].
Produce a timeline table with columns: time (exactly as written; write "not stated" if no time), event, and the quoted source line. Then list impact as stated in the text, and a separate section "Hypotheses mentioned" with who raised each and whether the text shows it was confirmed or ruled out. Do not add anything not in the text.
List what you are unsure of.
```

**Redacte un artículo de conocimiento a partir de un ticket resuelto.**

```text
Here is a resolved ticket with notes, personal data removed: [paste]. Here are existing articles on related topics: [paste titles and summaries].
Draft a new article with a title in plain words, symptom, steps, and how to check it worked. Use only the ticket. Mark missing information with [missing], and list existing articles that might duplicate this one.
List what you are unsure of.
```

**Compruebe la descripción de un cambio.**

```text
Here is a change description: [paste]. Our required items: [list].
List which required items are missing or unclear, list questions a reviewer should ask, and list any statements in the description that look inconsistent with each other. Do not rate the risk or recommend approval.
List what you are unsure of.
```

## Habilidades de IA

- [postmortem](../../../../skills/postmortem/SKILL.md): úsela para estructurar revisiones de incidentes que redacta la IA y asumen las personas.
- [prompt-engineering](../../../../skills/prompt-engineering/SKILL.md): úsela para escribir instrucciones claras y fundamentadas.
- [runbook](../../../../skills/runbook/SKILL.md): úsela para convertir procedimientos en runbooks comprobados y probados.
- [release-notes](../../../../skills/release-notes/SKILL.md): úsela para redactar notas de versión para su revisión.
- [change-request](../../../../skills/change-request/SKILL.md): úsela para definir qué contiene una buena descripción de cambio.

## Fuentes principales

- NIST, AI Risk Management Framework: una estructura para identificar y gestionar los riesgos del uso de la IA.
- OWASP, orientación sobre riesgos de aplicaciones construidas con grandes modelos de lenguaje (owasp.org): consejos comunitarios sobre inyección de prompts y riesgos relacionados.
- Wikipedia, "Generative AI" y "Hallucination (artificial intelligence)": visiones generales de la tecnología y de su principal modo de fallo.
- Wikipedia, "Automation bias": por qué la gente confía en exceso en las sugerencias automáticas.

## Referencias

1. Generative AI — Wikipedia — https://en.wikipedia.org/wiki/Generative_AI
2. Large language model — Wikipedia — https://en.wikipedia.org/wiki/Large_language_model
3. Hallucination (artificial intelligence) — Wikipedia — https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)
4. Retrieval-augmented generation — Wikipedia — https://en.wikipedia.org/wiki/Retrieval-augmented_generation
5. Automatic summarization — Wikipedia — https://en.wikipedia.org/wiki/Automatic_summarization
6. Prompt injection — Wikipedia — https://en.wikipedia.org/wiki/Prompt_injection
7. Automation bias — Wikipedia — https://en.wikipedia.org/wiki/Automation_bias
8. Context window — Wikipedia — https://en.wikipedia.org/wiki/Context_window
9. Postmortem documentation — Wikipedia — https://en.wikipedia.org/wiki/Postmortem_documentation
10. Audit trail — Wikipedia — https://en.wikipedia.org/wiki/Audit_trail
11. AI Risk Management Framework — NIST — https://www.nist.gov/itl/ai-risk-management-framework
12. OWASP — OWASP Foundation — https://owasp.org
