# IA en la gestión de servicios

**La inteligencia artificial entra en la gestión de servicios en el centro de servicios, en las operaciones, en el conocimiento, en el cambio y en el apoyo a la decisión; trate cada uso como un servicio con un responsable, una persona que decide donde puede haber daño, una forma de detectar errores y una medida de si ayuda.**

## Por qué importa

La IA ha pasado de ser un tema de investigación a ser una función de las herramientas que los equipos de servicio ya usan. El sistema de tickets sugiere categorías. La plataforma de monitorización agrupa alertas. El asistente de chat responde preguntas del personal. El editor de código redacta un script. Algunas de estas funciones las activó el proveedor, y nadie del equipo decidió adoptarlas.

El potencial es real. Gran parte del trabajo de servicio consiste en leer, escribir, clasificar y buscar, tareas que la IA actual hace lo bastante bien como para ahorrar tiempo. El riesgo también es real. Los sistemas de IA producen respuestas fluidas que pueden ser erróneas, pueden ocultar cómo llegaron a una conclusión, pueden filtrar datos y pueden fallar de maneras difíciles de predecir. Un equipo que adopta la IA sin responsables, revisión ni medidas hereda esos riesgos sin los beneficios.

Este tema es el mapa de la parte de IA de esta guía. Explica los principales tipos de IA en el trabajo de servicio, dónde ayudan, dónde no y qué preguntar antes de adoptarlos. Los temas posteriores profundizan: operaciones (Tema 5.2 — AIOps), el centro de servicios (Tema 5.3 — Centro de servicio con IA y agentes virtuales), la IA generativa (Tema 5.4 — IA generativa para incidentes, conocimiento y cambios), los agentes que actúan (Tema 5.5 — IA agéntica y supervisión humana), la gobernanza (Tema 5.6 — Gobernanza, riesgo y cumplimiento de la IA), los prompts y las habilidades (Tema 5.7 — Habilidades y Prompts de IA) y el modelo operativo (Tema 5.8 — Modelo operativo y habilidades de IA). La descripción del propietario de la versión más reciente de ITIL nombra la IA como parte del entorno que la gestión de servicios debe abordar (véase el Tema 1.3 — ITIL 5).

## Conceptos clave

**Inteligencia artificial.** Un término amplio para los sistemas que realizan tareas que normalmente requieren inteligencia humana, como reconocer patrones, entender el lenguaje y hacer recomendaciones. El artículo de Wikipedia sobre la inteligencia artificial describe el campo y su historia. El término abarca muchas técnicas distintas, y lo que la gente entiende por «IA» varía. Cuando hable de un uso, nombre la técnica y la tarea.

**Aprendizaje automático.** Sistemas que aprenden patrones a partir de datos en lugar de seguir reglas explícitas. Wikipedia describe el aprendizaje automático y sus ramas. Los ejemplos en el trabajo de servicio incluyen clasificar tickets, detectar métricas inusuales y predecir fallos. Dependen de los datos de entrenamiento y pueden degradarse cuando cambian las condiciones, un problema que Wikipedia describe como deriva conceptual.

**IA generativa y grandes modelos de lenguaje.** Sistemas que producen contenido nuevo, como texto, código o imágenes, a partir de prompts. Los grandes modelos de lenguaje (LLM) se entrenan con grandes cantidades de texto y pueden resumir, redactar, traducir y responder preguntas. Wikipedia describe la IA generativa y los grandes modelos de lenguaje. Sus salidas son fluidas y no se garantiza que sean verdaderas.

**Alucinación.** Una salida verosímil pero falsa o sin respaldo. Wikipedia describe la alucinación en la IA. En el trabajo de servicio puede significar un comando inventado, una política inventada o una causa raíz errónea expuesta con seguridad. Prevéalo: fundamente las respuestas en fuentes, muestre las fuentes y compruebe antes de actuar.

**Generación aumentada por recuperación.** Un patrón en el que el sistema primero recupera documentos relevantes, como artículos de conocimiento, y luego pide al modelo que responda usando solo esos. Wikipedia describe el enfoque. Reduce, pero no elimina, las respuestas erróneas y depende de la calidad de los documentos. Véase el Tema 3.9 — Gestión del Conocimiento.

**Agentes.** Sistemas que no solo responden sino que realizan acciones: llaman a herramientas, cambian registros, ejecutan scripts. Wikipedia describe los agentes inteligentes en general. Los agentes elevan lo que está en juego porque los errores tienen efectos en el mundo. Véase el Tema 5.5 — IA agéntica y supervisión humana.

**Dónde ayuda la IA en la gestión de servicios.** Los usos típicos caen en cinco grupos:

| Área | Ejemplos | Precaución principal |
|---|---|---|
| Centro de servicios | Clasificar y encaminar tickets, redactar respuestas, responder preguntas comunes | Respuestas erróneas o inventadas a los usuarios |
| Operaciones | Agrupar alertas, encontrar anomalías, sugerir causas | Señales omitidas que pasan inadvertidas |
| Conocimiento | Buscar, resumir y redactar artículos | Borradores que propagan errores |
| Cambio y entrega | Redactar código y pruebas, evaluar el riesgo de cambios, escribir notas de versión | Código inseguro o erróneo, puntuaciones de riesgo tomadas por buenas sin comprobar |
| Apoyo a la decisión | Resumir datos, pronosticar la demanda, encontrar patrones | Conclusiones excesivamente seguras a partir de datos débiles |

**Persona en el circuito (human in the loop).** Una persona revisa o aprueba una salida o acción de la IA antes de que surta efecto. Wikipedia describe los sistemas con humano en el circuito. Es un control, y funciona solo si la persona tiene el tiempo, la información y la autoridad para decir que no. Wikipedia describe también el sesgo de automatización, la tendencia a depender en exceso de las sugerencias automáticas, que puede convertir una comprobación humana en un sello de goma.

**Explicabilidad.** La capacidad de decir por qué un sistema produjo una salida. Wikipedia describe la IA explicable. Para algunos usos, como ordenar un ticket, basta una razón aproximada; para otros, como una decisión que afecta al acceso o al salario de una persona, se necesita más. Decida cuánta explicación requiere cada uso.

**Sesgo y equidad.** La IA entrenada con datos pasados puede reproducir patrones pasados, incluidos los injustos. Wikipedia describe el sesgo algorítmico. En el trabajo de servicio, el sesgo puede aparecer en quién recibe ayuda más rápido, a quién se señalan las solicitudes o cuyo lenguaje entiende bien el sistema.

**Datos y privacidad.** Las herramientas de IA procesan los datos que se les dan, como texto de tickets con datos personales. Adónde van los datos, cuánto tiempo se conservan y si entrenan otros modelos son cuestiones centrales. Véase el Tema 5.6 — Gobernanza, riesgo y cumplimiento de la IA.

**Riesgos de seguridad.** Los sistemas de IA tienen sus propias debilidades, como la inyección de prompts, en la que un texto de un documento o mensaje intenta dar nuevas instrucciones al modelo. Wikipedia describe la inyección de prompts. Trate las entradas externas como no fiables.

**Ciclo de vida y operaciones.** Un modelo en uso necesita monitorización, reentrenamiento o sustitución, versionado y retiro. MLOps, descrito en Wikipedia, aplica disciplina de ingeniería a esto. Para un modelo de proveedor, aun así necesita seguir los cambios de comportamiento tras las actualizaciones.

**Marcos de gobernanza.** La Ley de Inteligencia Artificial de la Unión Europea, descrita en Wikipedia, fija obligaciones legales que dependen de categorías de riesgo. ISO/IEC 42001 especifica un sistema de gestión de IA, y el Instituto Nacional de Estándares y Tecnología de Estados Unidos publica un AI Risk Management Framework. Son vocabulario y estructura para la gobernanza; no sustituyen al asesoramiento jurídico.

**Cómo encajan las lentes.** La IA es una de las cuatro lentes. La práctica ágil sugiere pruebas pequeñas con usuarios reales y retroalimentación corta. La automatización es la vecina más cercana: la IA decide o sugiere, la automatización actúa. La analítica aporta los datos de los que aprende la IA y las medidas que muestran si ayuda.

## Buenas prácticas

1. **Empiece por un problema, no por una herramienta.** Nombre un dolor concreto, como el tiempo dedicado a clasificar tickets, y una medida de mejora. Luego pregunte si la IA es la respuesta adecuada o si basta una solución más simple.
2. **Mantenga un inventario de usos de IA.** Enumere cada función y herramienta de IA en uso, incluidas las funciones de proveedores y las herramientas personales que el personal usa para el trabajo. Registre propósito, datos, responsable y estado.
3. **Nombre un responsable para cada uso.** Una persona responde de lo que hace la IA, de los datos que usa y de lo que ocurre cuando se equivoca. Sin responsable, nadie nota la degradación.
4. **Decida dónde decide una persona.** Para cada uso, escriba qué puede hacer la IA sola, qué necesita revisión y qué no debe hacer nunca. Haga real la revisión: dé a quienes revisan tiempo y contexto.
5. **Fundamente las respuestas en sus propias fuentes.** Use la recuperación de conocimiento revisado, muestre las fuentes al usuario y diga con claridad cuándo ninguna fuente respalda una respuesta.
6. **Pruebe antes y después del lanzamiento.** Construya un conjunto de casos de prueba realistas con respuestas conocidas, incluidos los incómodos y los adversarios. Ejecútelos antes de la liberación y tras cada cambio en el modelo o los datos.
7. **Mida el valor y los errores.** Siga el tiempo ahorrado, la calidad de las salidas, las correcciones humanas, las quejas de los usuarios y el costo. Muestree las salidas con regularidad.
8. **Proteja los datos.** Decida qué datos pueden enviarse a qué herramientas, elimine los datos personales y sensibles donde pueda y compruebe los términos del contrato sobre conservación y uso para entrenamiento.
9. **Planifique el fallo.** Facilite apagar una función de IA, encaminar a una persona y recuperarse. Ensaye el fallo de un servicio de IA del que depende.
10. **Construya habilidades y comparta el aprendizaje.** Forme a las personas para usar bien la IA y para cuestionarla. Comparta lo que funciona y lo que falla entre equipos. Véase el Tema 5.7 — Habilidades y Prompts de IA.

## Preguntas para conversar con su equipo

**¿Dónde usamos ya la IA, incluidas las funciones que no elegimos y las herramientas que la gente usa por su cuenta?**
Pregunten a todos y comprueben los ajustes de los proveedores. Esperen una lista más larga de lo que nadie predijo. Después registren cada uso con un responsable.

**¿Cuáles de nuestras tareas son sobre todo leer, escribir y clasificar y cuáles no querríamos que decidiera una máquina?**
Esto clasifica las tareas por idoneidad. Esperen acuerdo sobre redactar y desacuerdo sobre decidir. Después elijan una tarea de bajo riesgo para probar.

**¿Qué haríamos si nuestro asistente de IA diera una respuesta errónea con seguridad a un usuario y cómo nos enteraríamos?**
Recorran el escenario. Esperen brechas en la detección. Después acuerden una forma de muestrear las salidas y recoger la retroalimentación de los usuarios.

**¿Qué datos enviamos a herramientas de IA y hemos leído los términos?**
Enumeren las herramientas y los datos. Esperen cuentas personales y términos desconocidos. Después acuerden una regla sobre lo que no debe pegarse en herramientas externas.

**¿Cómo sabríamos que un uso de IA valió su costo?**
Pida una medida del beneficio y una del daño. Espere «parece más rápido». Después elijan un uso y acuerden una medida de antes y después.

**¿Qué habilidades necesita nuestra gente para usar bien la IA y quién las enseñará?**
Piensen en escribir buenos prompts, comprobar respuestas y detectar límites. Esperen un amplio rango de confianza. Después planifiquen una breve sesión de práctica con tareas reales.

## En la práctica: un ejemplo de gestión de servicios

El equipo de TI de una red nacional de bibliotecas públicas da soporte a 200 sucursales y a unas 6.000 personas empleadas. El centro de servicios atiende un gran volumen de preguntas repetitivas sobre impresión, inicios de sesión y el sistema de préstamos. La jefa del servicio quiere usar la IA para reducir la cola, y el proveedor del sistema de tickets acaba de añadir un asistente de IA, activado por defecto para el chat orientado al personal.

La gerente de servicios empieza por enumerar los usos de IA. Además del asistente del proveedor, descubre que dos analistas usan una herramienta pública de chat para resumir tickets y que un desarrollador ha construido un script que redacta respuestas. Asigna un responsable a cada uno y fija una regla: ningún dato personal en herramientas públicas. Luego elige un uso para mejorar: un asistente orientado al personal que responde preguntas del tipo «cómo hago», usando solo la base de conocimiento aprobada, con enlaces a las fuentes y un botón visible para llegar a una persona.

Construye 60 preguntas de prueba a partir de tickets reales, incluidas diez que la base de conocimiento no puede responder, donde el comportamiento correcto es decirlo. La primera versión responde tres de esas diez con pasos inventados. El equipo ajusta las instrucciones y añade una regla de declinar cuando ningún artículo coincide, y los fallos bajan a uno. Durante el primer mes, un agente del centro lee todas las conversaciones que el asistente no resolvió y una muestra del resto.

Qué cambia: el asistente resuelve alrededor de un tercio de las conversaciones sin un ticket y los agentes dedican menos tiempo a las preguntas repetitivas. Qué sigue siendo difícil: la base de conocimiento tiene artículos obsoletos que el asistente cita, así que el equipo debe limpiarla; el proveedor cambia el modelo subyacente sin avisar, lo que una vez cambió el comportamiento de la noche a la mañana; y el personal de las sucursales pequeñas a veces prefiere llamar por teléfono. La gerente fija una ejecución mensual de pruebas, un contacto acordado para los cambios de modelo y un mensaje claro de que el teléfono sigue disponible.

## Cuatro perspectivas

### Equipos de producto y de entrega

Usen la IA para redactar código, pruebas y documentación, bajo su revisión y las comprobaciones habituales del pipeline. Registren dónde se usó IA y estén atentos al código inseguro o sin licencia. Traten las funciones de IA de su propio producto como servicios con responsables.

### Equipos de servicio y de operaciones

Usen la IA para clasificar, resumir y buscar, con una persona que decida todo lo que afecte a usuarios o sistemas. Informen de los errores y de los casi accidentes y ayuden a ajustar lo que ve y dice la IA.

### Liderazgo y gobernanza

Pida el inventario, los responsables, las medidas y el plan ante el fallo. Fije reglas claras sobre datos y decisiones. Financie la formación y las pruebas, no solo las licencias.

### Clientes y usuarios

Debería saber cuándo habla con una IA y poder llegar a una persona. Diga al proveedor cuándo una respuesta fue errónea o poco útil. Tenga cuidado con los datos personales que comparte.

## Ágil, IA, automatización y analítica

### Ágil

Pruebe la IA en pequeños ensayos con usuarios reales, aprenda de la retroalimentación y decida conservar, cambiar o detener. Mantenga involucradas a las partes interesadas en lo que la IA puede hacer. Precaución: una demostración exitosa no es evidencia de que un uso sea seguro o valioso; haga un ensayo real con medidas.

### IA

Este tema es la propia lente de IA: cada uso necesita un responsable, una persona que decida donde puede haber daño, detección de errores y medidas. Precaución: no delegue la responsabilidad en un proveedor ni en un modelo; usted sigue siendo responsable de los resultados que entrega su servicio.

### Automatización

La IA decide o sugiere; la automatización actúa. Conéctelas con cuidado, con límites sobre lo que puede ocurrir sin aprobación, registros y una forma de detenerlo. Precaución: una IA que dispara una automatización puede multiplicar un error con rapidez; añada límites de frecuencia y revisión. Véase el Tema 6.1 — Estrategia de automatización.

### Analítica

Mida el beneficio, las tasas de error halladas en las muestras, la retroalimentación de los usuarios y el costo. Precaución: las cifras de uso y las valoraciones de los usuarios pueden parecer buenas mientras la calidad es mala; muestree las salidas y compare con una línea base. Véanse el Tema 7.3 — Medición e informes y el libro *Service Management Metrics*.

## Modos de fallo habituales

- **La herramienta antes que el problema.** Se activa una función y nadie mide el beneficio. Empiece por un dolor y una medida.
- **Sin inventario.** Los usos se multiplican sin verse. Enumere cada uso de IA con un responsable.
- **Revisión humana solo de nombre.** Quienes revisan firman sin mirar. Dé tiempo, contexto y autoridad, y muestree sus decisiones.
- **Respuestas erróneas con aplomo.** Los usuarios actúan sobre consejos inventados. Fundamente las respuestas, cite fuentes y decline responder cuando no esté seguro.
- **Filtraciones de datos.** Texto sensible va a herramientas externas. Fije reglas y compruebe los términos.
- **Ignorar los cambios de modelo.** El comportamiento cambia tras una actualización del proveedor. Pruebe con regularidad y fije un contacto para los cambios.
- **Sin salida.** El servicio depende de la IA sin alternativa. Ofrezca una vía hacia una persona y un interruptor de apagado.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Inventario y responsabilidad | Usos desconocidos | Usos principales enumerados | Inventario con responsables y propósitos | Inventario revisado y probado | Inventario integrado con el catálogo y la gobernanza |
| Decisiones humanas | Sin definir | Revisión informal | Puntos de revisión definidos para cada uso | Calidad de la revisión muestreada | Revisión adaptada según el riesgo y la evidencia |
| Pruebas y monitorización | Ninguna | Demostraciones | Conjuntos de pruebas y muestreo regular | Errores y deriva medidos | Evaluación continua entre usos |
| Datos y riesgo | Poco claros | Conciencia | Reglas sobre datos y términos de proveedores | Cumplimiento comprobado y auditado | Riesgo gestionado entre equipos y proveedores |

## Lista de verificación

- [ ] Mantenemos un inventario de usos de IA, incluidas las funciones de proveedores y las herramientas personales.
- [ ] Cada uso tiene un responsable designado.
- [ ] Escribimos qué puede hacer cada IA por sí sola, qué necesita revisión y qué no debe hacer.
- [ ] Las respuestas se fundamentan en fuentes revisadas y las muestran.
- [ ] Tenemos un conjunto de pruebas y lo ejecutamos con regularidad.
- [ ] Muestreamos las salidas y seguimos errores, correcciones y retroalimentación.
- [ ] Tenemos reglas sobre qué datos van a qué herramientas.
- [ ] Los usuarios pueden llegar a una persona y podemos apagar cada uso de IA.

## Prompts de IA

**Enumere los usos de IA a partir de una descripción de nuestras herramientas.**

```text
Here is a description of the tools our team uses and what each does: [paste].
List which tools probably include AI features, what each might do, what data it might process, and a question to ask the vendor or owner. Mark clearly which items are guesses and do not state facts about vendors.
List what you are unsure of.
```

**Redacte preguntas de prueba para un asistente.**

```text
Our assistant answers questions about [topics] using only these documents: [list titles].
Write 30 test questions: 15 that the documents answer, 10 that they do not, and 5 that try to make the assistant ignore its instructions. For each, state the correct behavior. Do not include real personal data.
List what you are unsure of.
```

**Prepare la revisión de un uso de IA.**

```text
AI use: [describe]. Owner: [role]. Data used: [list]. Decisions it affects: [list].
Draft a one-page review with: purpose, what it may do alone, what needs human review, how errors are detected, how it is switched off, and open questions. Mark every item you could not fill from my description.
List what you are unsure of.
```

## Habilidades de IA

- [prompt-engineering](../../../../skills/prompt-engineering/SKILL.md): úsela para diseñar prompts claros, fundamentados y comprobables.
- [machine-learning-model-card](../../../../skills/machine-learning-model-card/SKILL.md): úsela para documentar qué hace un modelo, sus datos y sus límites.
- [risk-register](../../../../skills/risk-register/SKILL.md): úsela para registrar los riesgos de la IA, los responsables y las decisiones.
- [itil-5](../../../../skills/itil-5/SKILL.md): úsela para relacionar el uso de IA con la orientación más reciente del propietario, con las afirmaciones sin verificar marcadas.
- [mlops](../../../../skills/mlops/SKILL.md): úsela para gestionar los modelos a lo largo de su ciclo de vida.

## Fuentes principales

- NIST, AI Risk Management Framework: una estructura muy usada para identificar y gestionar el riesgo de la IA.
- ISO/IEC 42001 (el propio estándar): requisitos de un sistema de gestión de inteligencia artificial; lea la edición vigente del editor.
- PeopleCert, páginas de certificación ITIL: la descripción del propietario de ITIL (Versión 5), incluida la IA.
- Wikipedia, "Artificial intelligence" y "Large language model": visiones generales del campo y de la tecnología.

## Referencias

1. Artificial intelligence — Wikipedia — https://en.wikipedia.org/wiki/Artificial_intelligence
2. Machine learning — Wikipedia — https://en.wikipedia.org/wiki/Machine_learning
3. Generative AI — Wikipedia — https://en.wikipedia.org/wiki/Generative_AI
4. Large language model — Wikipedia — https://en.wikipedia.org/wiki/Large_language_model
5. Hallucination (artificial intelligence) — Wikipedia — https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)
6. Retrieval-augmented generation — Wikipedia — https://en.wikipedia.org/wiki/Retrieval-augmented_generation
7. Human-in-the-loop — Wikipedia — https://en.wikipedia.org/wiki/Human-in-the-loop
8. Automation bias — Wikipedia — https://en.wikipedia.org/wiki/Automation_bias
9. Algorithmic bias — Wikipedia — https://en.wikipedia.org/wiki/Algorithmic_bias
10. Artificial Intelligence Act — Wikipedia — https://en.wikipedia.org/wiki/Artificial_Intelligence_Act
11. ITIL Foundation Bridge (Version 5) — PeopleCert — https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-foundation-bridge-version-5-4158
12. AI Risk Management Framework — NIST — https://www.nist.gov/itl/ai-risk-management-framework
