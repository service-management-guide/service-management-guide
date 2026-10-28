# Habilidades y Prompts de IA

**Un prompt es una solicitud que usted da a un sistema de IA, y una habilidad (skill) es un conjunto reutilizable y versionado de instrucciones para un tipo de tarea; ambos funcionan mejor cuando nombran la tarea, aportan el material de origen, dicen qué hacer cuando falta información y se prueban como cualquier otro producto de trabajo.**

## Por qué importa

Todo el que usa un asistente de IA escribe prompts, sobre todo por ensayo y error. Algunos obtienen resultados excelentes y no saben decir por qué. Otros obtienen respuestas vagas o erróneas y deciden que la herramienta es mala. La diferencia a menudo no es el modelo sino la solicitud: lo claramente que se expone la tarea, qué material tiene el asistente y cómo se comprueba su respuesta.

En la gestión de servicios la diferencia importa porque el trabajo tiene consecuencias. Un prompt que resume un incidente de memoria puede producir una cronología inventada. Un prompt que pide «mejores prácticas» da un texto genérico que suena bien y no ayuda a nadie. Un prompt escrito deprisa puede pegar datos confidenciales en la herramienta equivocada. Son hábitos, y los hábitos pueden mejorarse.

Las habilidades llevan la idea un paso más allá. Una habilidad empaqueta las instrucciones para una tarea recurrente, como escribir un runbook o realizar un postmortem, en un archivo que un asistente de IA puede cargar cuando surge la tarea. Las habilidades de esta guía están escritas en el formato de Claude Code: cada una es un archivo `SKILL.md` con una breve descripción de cuándo usarla y la orientación para hacer el trabajo. Los equipos pueden copiarlas, adaptarlas y escribir las suyas. Este tema explica cómo usar los prompts y las habilidades de esta guía, los patrones que funcionan, cómo verificar los resultados y cómo escribir las habilidades propias de un equipo. Se apoya en el Tema 5.1 — IA en la gestión de servicios y en las salvaguardas del Tema 5.6 — Gobernanza, riesgo y cumplimiento de la IA.

## Conceptos clave

**Prompt.** El texto, y cualquier material adjunto, que usted da a un gran modelo de lenguaje para obtener una respuesta. Wikipedia describe la ingeniería de prompts como el proceso de estructurar instrucciones para que un modelo generativo produzca la salida deseada. El modelo responde a patrones del prompt; los prompts más claros suelen dar mejores respuestas.

**Contexto.** Todo lo que el modelo puede considerar al responder: sus instrucciones, los documentos que usted suministra y la conversación hasta el momento. Wikipedia describe la ventana de contexto, que limita cuánto puede considerar el modelo a la vez. Si algo no está en el contexto, el modelo puede llenar el hueco con conocimiento general, que es por donde se cuelan los errores.

**Fundamentación (grounding).** Suministrar el material de origen y pedir al modelo que use solo ese. Wikipedia describe la generación aumentada por recuperación, una forma automatizada. Para el uso manual, pegue el texto relevante y diga «use solo el texto de abajo». Véase el Tema 3.9 — Gestión del Conocimiento.

**Anatomía de un buen prompt.** Seis partes cubren la mayoría de las necesidades:

| Parte | Qué hace | Ejemplo |
|---|---|---|
| Rol o contexto | Fija la situación | «Está ayudando a una responsable de centro de servicios a preparar una revisión.» |
| Tarea | Indica qué producir | «Resuma el incidente como una cronología.» |
| Material de origen | Aporta los hechos | El historial pegado del ticket |
| Restricciones | Fija límites | «Use solo el texto. No adivine causas.» |
| Formato | Da forma a la salida | «Una tabla con hora, evento y fuente citada.» |
| Regla de incertidumbre | Dice qué hacer cuando no está seguro | «Escriba “no indicado” y enumere de qué no está seguro.» |

**Marcadores de posición.** Los prompts de esta guía usan `[corchetes]` para marcar lo que debe sustituir por su propio material. Un prompt con un marcador sin rellenar es una causa común de malos resultados; lea cada uno antes de enviar.

**Ejemplos y estructura.** Dar uno o dos ejemplos de la salida que desea, lo que se conoce como prompting con pocos ejemplos (few-shot) y se describe en Wikipedia, a menudo mejora el resultado más que una explicación adicional. Pedir una estructura, como una tabla, facilita la comprobación.

**Pedir el razonamiento.** Las técnicas que piden al modelo que trabaje paso a paso, descritas en Wikipedia como prompting de cadena de pensamiento, pueden mejorar las respuestas en algunos problemas. El razonamiento visible no siempre es un relato fiel de cómo se produjo la respuesta, y también puede contener errores. Úselo para ayudarle a comprobar, no como prueba.

**Verificación.** Trate cada salida como un borrador. Compruebe los hechos frente a la fuente, los cálculos y que las citas existen. Wikipedia describe la alucinación y el sesgo de automatización; ambos son razones para verificar. Un prompt que pide al modelo citar sus fuentes lo hace rápido.

**Iteración.** El primer resultado a menudo no es el mejor. Pida cambios, señale errores y refine el prompt. Conserve la versión que funcionó.

**Habilidad (skill).** En esta guía, una habilidad es un archivo `SKILL.md` que le dice a un asistente de IA cómo hacer un tipo de tarea. Empieza con un breve encabezado con el nombre de la habilidad y una descripción de cuándo usarla, seguido de orientación: componentes clave, pasos y comprobaciones. Un asistente que admite habilidades carga el archivo relevante cuando su solicitud coincide con la descripción. Las habilidades son texto plano, por lo que pueden leerse, revisarse, versionarse y compartirse como otros documentos. El artículo de Wikipedia sobre Markdown describe el formato que usan.

**Habilidades frente a prompts.** Un prompt es para una sola solicitud; una habilidad recoge un método para un tipo recurrente de tarea, para no reescribirlo cada vez. Una habilidad puede contener varios prompts, una lista de comprobación y los criterios de un buen resultado. Los temas de esta guía enlazan con habilidades donde un método es útil.

**Qué deben contener las habilidades.** Las buenas habilidades indican cuándo usarlas y cuándo no, definen las partes clave de la salida, dan un proceso breve, enumeran los errores comunes y dicen cómo comprobar el resultado. Son específicas y breves. Una habilidad que intenta cubrirlo todo rara vez se usa.

**Probar habilidades y prompts.** Trátelos como productos de trabajo. Construya unos pocos casos de prueba realistas con buenos resultados conocidos, ejecútelos y anote los fallos. Vuelva a ejecutarlos cuando cambie el modelo, la herramienta o la habilidad. Wikipedia describe las pruebas de regresión, la práctica de volver a ejecutar pruebas tras los cambios para detectar roturas.

**Control de versiones y responsabilidad.** Guarde las habilidades en un repositorio, con un responsable, un registro de cambios y revisión de los cambios. Wikipedia describe el control de versiones. Una habilidad que cambia en silencio sin revisión puede cambiar los resultados de un equipo sin que nadie lo note.

**Seguridad.** Los prompts y las habilidades pueden ser atacados o mal usados. El contenido que usted pega puede contener instrucciones, un riesgo que Wikipedia describe como inyección de prompts. Una habilidad descargada de una fuente desconocida puede decir al asistente que haga algo dañino. Lea las habilidades antes de usarlas y dé a los asistentes solo el acceso que necesitan. Véase el Tema 5.5 — IA agéntica y supervisión humana.

**Confidencialidad.** Decida qué puede pegarse en qué herramienta. Véase el Tema 5.6 — Gobernanza, riesgo y cumplimiento de la IA.

**Cómo encajan las lentes.** Las habilidades y los prompts son la forma en que los equipos ponen la IA a trabajar de manera coherente. La práctica ágil sugiere mantener una biblioteca compartida que mejora con el uso y la retroalimentación. La automatización puede ejecutar prompts aprobados en flujos de trabajo. La analítica muestra qué prompts y habilidades se usan y si ayudan.

## Buenas prácticas

1. **Indique la tarea, no el tema.** «Redacte una actualización de estado para los clientes a partir de estos hechos» funciona mejor que «ayúdeme con el incidente». Diga qué quiere que se produzca y para quién.
2. **Aporte la fuente y restrinja a ella.** Pegue el material relevante y diga que use solo eso. Pida al asistente que escriba «no indicado» donde el material guarda silencio.
3. **Diga qué formato necesita.** Pida una tabla, una lista numerada o un límite de palabras. Hace el resultado más fácil de comprobar y de usar.
4. **Pida fuentes e incertidumbre.** Solicite citas o referencias y una lista de aquello de lo que el asistente no está seguro. Lea esa lista; muestra dónde comprobar primero.
5. **No pegue nunca secretos ni datos protegidos en herramientas no aprobadas.** Elimine nombres, credenciales y datos personales donde pueda. Use las herramientas que su organización ha aprobado para el material sensible.
6. **Compruebe antes de usar.** Compare hechos, números, horas y nombres con la fuente. Ejecute primero cualquier código o comando en un entorno seguro.
7. **Itere y conserve lo que funciona.** Refine el prompt durante unas rondas y guarde la versión final con una nota de para qué sirve y cuándo falla.
8. **Comparta y revise una biblioteca del equipo.** Guarde prompts y habilidades probados en un lugar compartido con responsables. Revise los cambios y retire los que ya no funcionen.
9. **Escriba habilidades para el trabajo recurrente.** Cuando se encuentre repitiendo un prompt, conviértalo en una habilidad con una descripción clara, pasos y comprobaciones. Manténgala breve.
10. **Pruebe las habilidades con casos reales.** Construya unos pocos casos de prueba, ejecútelos tras cada cambio en la habilidad o la herramienta y registre los resultados.

## Preguntas para conversar con su equipo

**¿Qué pedimos hoy a las herramientas de IA y cuáles de esas solicitudes podríamos escribir como un prompt o una habilidad reutilizable?**
Recojan ejemplos. Esperen tareas repetidas como resúmenes, borradores y listas de comprobación. Después elijan una tarea y escriban juntos una versión probada.

**¿Cómo comprobamos una respuesta de IA antes de usarla y lo hace todo el mundo del mismo modo?**
Pregunte cuándo fue la última vez que alguien encontró un error. Esperen hábitos distintos. Después acuerden una breve rutina de verificación para cada tipo de tarea.

**¿Qué hemos pegado en herramientas de IA que no debíamos y cómo facilitamos hacer lo correcto?**
Pregunten en un entorno seguro. Esperen errores. Después acuerden qué puede ir adónde y proporcionen una herramienta aprobada y una guía breve.

**¿Qué prompts han funcionado bien para individuos pero nunca se han compartido?**
Pidan a las personas que los demuestren. Esperen buenos. Después reúnan tres en una biblioteca compartida, con un responsable y una fecha de revisión.

**Si una habilidad que usamos cambiara mañana, ¿cómo lo notaríamos?**
Esperen «no lo notaríamos». Después acuerden que las habilidades vivan en control de versiones, se revisen y tengan unos pocos casos de prueba.

**¿Qué tareas no deberíamos entregar nunca a un asistente de IA, ni siquiera con comprobación?**
Discutan las decisiones que afectan a personas, las conclusiones jurídicas y las aprobaciones. Esperen desacuerdo. Después escriban una lista breve y quién puede cambiarla.

## En la práctica: un ejemplo de gestión de servicios

El equipo de servicio de TI de un hospital regional, de 25 personas, ha empezado a usar un asistente de IA. Cada persona lo usa de manera distinta. Un analista redacta artículos de conocimiento a partir de notas de tickets, otro resume largos hilos de correo y un tercero le pide que explique mensajes de error desconocidos. La jefa del equipo está preocupada: ha visto un artículo que contenía un comando verosímil pero erróneo.

Pide al equipo que traiga sus tres prompts más útiles a una sesión de una hora. Descubren que cuatro personas usan casi el mismo prompt para convertir un ticket resuelto en un artículo. La versión que mejor funciona indica que el asistente debe usar solo el texto del ticket, debe escribir «[falta]» para todo lo que no esté en él, debe enumerar los pasos como líneas numeradas y debe terminar con una breve lista de aquello de lo que no está seguro. Sin la regla de «[falta]», el asistente rellenaba los huecos.

El equipo convierte esto en un archivo de habilidad: cuándo usarla (convertir un ticket resuelto en un borrador de artículo), partes clave de un buen artículo, el proceso y las comprobaciones que una persona debe hacer antes de publicar, incluido ejecutar cada comando en un entorno de pruebas. La prueban con diez tickets antiguos cuyas soluciones se conocen y descubren que en tres el asistente adivinó un número de versión. Añaden una regla sobre los números de versión y vuelven a ejecutar las pruebas. Guardan la habilidad en el repositorio del equipo, asignan como responsable a la adjunta de la jefa y acuerdan que los cambios se revisan como código.

También escriben una página sobre lo que no debe entrar en las herramientas de IA: datos de pacientes, credenciales e informes de seguridad sin publicar; y dirigen a todos a la herramienta aprobada, que tiene un contrato que prohíbe entrenar con sus datos.

Qué cambia: los borradores de artículos llevan minutos y baja el número de artículos con pasos erróneos hallados en la revisión. Qué sigue siendo difícil: parte del personal sigue usando cuentas personales cuando la herramienta aprobada es lenta; la biblioteca de habilidades ha crecido hasta 14 archivos y nadie ha revisado la mitad; y el comportamiento del asistente cambió ligeramente tras una actualización del proveedor, lo que las pruebas detectaron solo porque alguien las volvió a ejecutar. La jefa añade una ejecución mensual de pruebas y una sesión trimestral de poda.

## Cuatro perspectivas

### Equipos de producto y de entrega

Usen prompts y habilidades para redactar código, pruebas y documentación, con su revisión y las comprobaciones habituales del pipeline. Guarden las habilidades de sus propios flujos de trabajo en el repositorio junto al código.

### Equipos de servicio y de operaciones

Construyan una pequeña biblioteca para las tareas recurrentes, como actualizaciones, artículos y revisiones. Compartan lo que funciona, comprueben cada salida y avisen al responsable cuando una habilidad falle.

### Liderazgo y gobernanza

Fije reglas sobre qué puede pegarse dónde, proporcione herramientas aprobadas y financie el tiempo para construir y probar una biblioteca. Pida evidencia de que las salidas se comprueban. No trate los prompts como un sustituto del proceso.

### Clientes y usuarios

Puede encontrarse contenido redactado por IA. Pregunte si lo ha comprobado una persona y diga al proveedor cuándo es erróneo. Tenga cuidado con los datos personales que da a cualquier herramienta de IA.

## Ágil, IA, automatización y analítica

### Ágil

Haga crecer la biblioteca a partir del uso real: añada una habilidad cuando una tarea se repita, mejórela con la retroalimentación y retírela cuando deje de ayudar. Mantenga breves y revisadas las habilidades. Precaución: una biblioteca grande y sin revisar es una carga; manténgala pequeña y con responsables.

### IA

Las habilidades y los prompts son las instrucciones que damos a la IA, así que merecen el cuidado que damos a otros controles: responsabilidad, revisión, pruebas y registros de uso. Precaución: las instrucciones de «ser exacto» no hacen exacto a un modelo; apóyese en fuentes suministradas, comprobaciones y revisión humana. Véase el Tema 5.1 — IA en la gestión de servicios.

### Automatización

Los prompts aprobados pueden incorporarse a flujos de trabajo, como redactar un resumen cuando se cierra un ticket, con un paso de revisión antes de su uso. Precaución: los prompts automatizados se ejecutan sin el cuidado de una persona que lee cada vez; pruébelos con entradas variadas y mantenga una puerta humana. Véase el Tema 6.2 — Automatización y orquestación de flujos de trabajo.

### Analítica

Siga qué prompts y habilidades se usan, con qué frecuencia se editan los borradores, los errores hallados en la revisión y el tiempo ahorrado por tarea. Precaución: los recuentos de uso premian el volumen y los ahorros de tiempo estimados se inflan con facilidad; muestree las salidas finales para ver su calidad. Véanse el libro *Service Management Metrics* y el Tema 7.3 — Medición e informes.

## Modos de fallo habituales

- **Solicitudes vagas.** La respuesta es genérica. Indique la tarea, el público y el formato.
- **Sin material de origen.** El modelo llena los huecos de memoria. Suministre la fuente y restrinja a ella.
- **Marcadores sin rellenar.** Sale un prompt con «[pegue aquí]». Compruebe antes de enviar.
- **Confiar en la primera respuesta.** Los errores pasan inadvertidos. Verifique frente a la fuente.
- **Pegar secretos.** Se filtran datos. Use herramientas aprobadas y elimine los detalles sensibles.
- **Una biblioteca de habilidades sin responsable.** Los archivos se deterioran o cambian sin notarse. Manténgalos en control de versiones con responsables y pruebas.
- **Descargar habilidades sin leerlas.** Se ejecuta una instrucción dañina. Lea y revise antes de usar.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Práctica de prompts | Ensayo y error | Consejos compartidos de manera informal | Patrones estándar con fuentes y comprobaciones | Patrones refinados con datos de errores | Patrones incorporados en herramientas y flujos de trabajo |
| Biblioteca de habilidades | Ninguna | Archivos personales | Habilidades compartidas, con responsable y en control de versiones | Habilidades probadas y revisadas con regularidad | Habilidades gestionadas entre equipos con gobernanza |
| Verificación | Ninguna | Hábitos individuales | Rutinas estándar por tarea | Errores seguidos y devueltos al proceso | Verificación apoyada por herramientas con aprobación humana |
| Reglas de datos | Poco claras | Conciencia | Reglas claras y herramientas aprobadas | Cumplimiento comprobado | Controles integrados en las herramientas |

## Lista de verificación

- [ ] Nuestros prompts indican la tarea, la fuente, el formato y la regla de incertidumbre.
- [ ] Comprobamos las salidas frente a la fuente antes de usarlas.
- [ ] Tenemos reglas sobre qué puede pegarse en qué herramientas, y herramientas aprobadas.
- [ ] Guardamos prompts y habilidades probados en un lugar compartido y con responsable.
- [ ] Las habilidades tienen una descripción clara de cuándo usarlas.
- [ ] Probamos las habilidades con casos reales tras cada cambio en la habilidad o la herramienta.
- [ ] Revisamos las habilidades de fuentes externas antes de usarlas.
- [ ] Enumeramos las tareas que no deben entregarse a la IA.

## Prompts de IA

**Mejore un prompt.**

```text
Here is a prompt I use: [paste]. Here is an example of an output that disappointed me: [paste].
Identify what the prompt does not say that would help (task, source material, constraints, format, uncertainty rule), propose a rewritten prompt with [placeholders] for my material, and explain each change in one line. Do not add facts about my situation.
List what you are unsure of.
```

**Convierta un prompt en una habilidad.**

```text
Here is a prompt that works well for my team: [paste]. Here are two examples of good outputs: [paste].
Draft a SKILL.md with a header (name and a one-sentence description of when to use it and when not), key components of a good output, a short process, common mistakes, and a checklist for verifying the result. Keep it under 400 words and do not add steps not implied by my examples.
List what you are unsure of.
```

**Diseñe pruebas para una habilidad.**

```text
Here is a skill: [paste].
Write eight test cases: five typical, two awkward, and one that tries to make the assistant ignore the skill. For each, describe the input and the correct behavior. Do not use real personal data.
List what you are unsure of.
```

## Habilidades de IA

- [prompt-engineering](../../../../skills/prompt-engineering/SKILL.md): úsela para diseñar, probar y refinar prompts.
- [service-management-guide-skill](../../../../skills/service-management-guide-skill/SKILL.md): úsela para encontrar y aplicar los temas, preguntas y prompts de esta guía.
- [service-management-guide-maintainer-skill](../../../../skills/service-management-guide-maintainer-skill/SKILL.md): úsela para mantener los temas y las habilidades de esta guía.
- [runbook](../../../../skills/runbook/SKILL.md): úsela como ejemplo de una habilidad bien estructurada para el trabajo operativo.

## Fuentes principales

- Anthropic, documentación sobre prompting y sobre Agent Skills (docs.anthropic.com): orientación del proveedor para escribir instrucciones y habilidades para los modelos Claude.
- OWASP, orientación sobre riesgos de aplicaciones construidas con grandes modelos de lenguaje (owasp.org): incluida la inyección de prompts.
- Wikipedia, "Prompt engineering": una visión general de técnicas y términos.
- El directorio `skills/` de esta guía: ejemplos trabajados de habilidades para tareas de gestión de servicios.

## Referencias

1. Prompt engineering — Wikipedia — https://en.wikipedia.org/wiki/Prompt_engineering
2. Large language model — Wikipedia — https://en.wikipedia.org/wiki/Large_language_model
3. Context window — Wikipedia — https://en.wikipedia.org/wiki/Context_window
4. Retrieval-augmented generation — Wikipedia — https://en.wikipedia.org/wiki/Retrieval-augmented_generation
5. Few-shot learning — Wikipedia — https://en.wikipedia.org/wiki/Few-shot_learning
6. Chain of thought — Wikipedia — https://en.wikipedia.org/wiki/Chain_of_thought
7. Hallucination (artificial intelligence) — Wikipedia — https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)
8. Prompt injection — Wikipedia — https://en.wikipedia.org/wiki/Prompt_injection
9. Regression testing — Wikipedia — https://en.wikipedia.org/wiki/Regression_testing
10. Markdown — Wikipedia — https://en.wikipedia.org/wiki/Markdown
11. Version control — Wikipedia — https://en.wikipedia.org/wiki/Version_control
12. OWASP — OWASP Foundation — https://owasp.org
