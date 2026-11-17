# Analítica de experiencia y sentimiento

**La analítica de experiencia pregunta a los usuarios cómo les ayudó un servicio y observa cómo lo usan realmente; las encuestas, el texto de los comentarios, el análisis de sentimiento y los acuerdos de nivel de experiencia son útiles cuando las preguntas son justas, se reconoce el sesgo de respuesta, las herramientas de sentimiento se contrastan con las palabras de las propias personas y no se clasifica ni se vigila a ningún individuo.**

## Por qué importa

Un servicio puede cumplir todas las metas técnicas y aun así dejar frustrada a la gente. El sistema funciona, los tickets se cierran a tiempo y una empleada ha pasado esa mañana dos horas intentando obtener acceso a una herramienta que necesita. Los paneles construidos con datos del sistema no pueden verlo. Cuentan lo que registró la máquina, no cómo le fue a la persona.

La analítica de experiencia llena esa brecha. Pregunta directamente a la gente, mediante encuestas breves en el momento del uso y otras más largas y periódicas. Lee lo que escriben: comentarios en tickets, respuestas de encuestas, mensajes de chat. Observa cómo usan el servicio, dónde abandonan un formulario, cuántas veces lo intentan antes de lograrlo. Combina todo ello en una imagen de la experiencia que las medidas técnicas pasan por alto. La idea detrás de los acuerdos de nivel de experiencia (XLA), presentados en el Tema 3.7 — Gestión de Niveles de Servicio, es fijar metas para la experiencia junto a las metas de rendimiento técnico.

Los métodos traen sus propios riesgos. Las encuestas solo llegan a quienes responden. Las herramientas de análisis de sentimiento adivinan sentimientos a partir de las palabras y a menudo se equivocan, sobre todo entre idiomas y culturas. Las puntuaciones se convierten en metas, y las metas invitan a presionar a los encuestados. Los datos de los empleados plantean cuestiones de privacidad y de confianza. Este tema describe cómo reunir y usar bien los datos de experiencia, con justicia y humildad sobre lo que pueden mostrar. Se conecta con el centro de servicios (Tema 3.1 — Centro de Servicios), los niveles de servicio (Tema 3.7 — Gestión de Niveles de Servicio), la medición (Tema 7.3 — Medición e informes) y el uso de la IA para leer texto (Tema 5.1 — IA en la gestión de servicios).

## Conceptos clave

**Experiencia.** Lo que una persona piensa, siente y hace al usar un servicio, desde el primer contacto hasta el resultado. Wikipedia describe la experiencia del cliente y la experiencia del usuario. En los servicios internos, los «clientes» son los colegas, y a veces se usa el término experiencia digital del empleado para cómo vive la gente su tecnología. Incluye la facilidad, la rapidez, la confianza y si lograron su objetivo.

**Satisfacción y medidas relacionadas.** La satisfacción del cliente, descrita en Wikipedia, suele preguntarse como «¿cuán satisfecho quedó?» en una escala. El índice de recomendación neto (net promoter score), también descrito allí, pregunta cuán probable es que una persona recomiende el servicio y se calcula a partir de la proporción de promotores menos la de detractores. Otras medidas preguntan por el esfuerzo, como lo fácil que fue conseguir algo. Cada una tiene usos y críticas: son rápidas y comparables, y a la vez toscas y abiertas a la manipulación y a la mala interpretación.

**Encuestas transaccionales y de relación.** Una encuesta transaccional pregunta por una interacción, como un ticket resuelto, poco después de ocurrir. Una encuesta de relación pregunta por el servicio en conjunto, a intervalos. Las encuestas transaccionales muestran problemas específicos; las de relación muestran la visión más amplia. Use ambas y manténgalas cortas.

**Diseño de encuestas.** La redacción afecta a las respuestas. Wikipedia describe la metodología de encuestas y los problemas comunes: las preguntas tendenciosas, que sugieren una respuesta; el sesgo de aquiescencia, la tendencia a asentir; y el sesgo de deseabilidad social, dar respuestas que parecen aceptables. Use una redacción neutral, una escala clara, una idea por pregunta y un cuadro de comentarios abierto. Wikipedia describe las escalas de Likert y los cuestionarios. Pruebe la encuesta con unas pocas personas. Véase la habilidad de diseño de encuestas de esta guía.

**Respuesta y sesgo.** Solo algunas personas responden, y no son típicas. Wikipedia describe la tasa de respuesta y el sesgo de participación: las personas con sentimientos fuertes, o con tiempo, responden más. Una puntuación procedente de una respuesta del 10 por ciento puede decir poco sobre el otro 90 por ciento. Informe la tasa de respuesta, compare a los encuestados con la población donde pueda y no trate la puntuación como exacta.

**Fatiga de encuestas.** Las personas a las que se pregunta demasiado a menudo dejan de contestar o contestan sin cuidado. Limite la frecuencia con que pregunta, pregunte solo lo que va a usar y muestre qué cambió gracias a las respuestas. Las encuestas que se pierden en el vacío enseñan a la gente a no molestarse.

**Comentarios de texto libre.** Los comentarios dicen por qué. Leer una muestra es esencial, y las herramientas pueden ayudar con el volumen. Wikipedia describe el análisis temático, la práctica de identificar temas en datos cualitativos, y la investigación cualitativa en general. Contar temas y citar ejemplos hace utilizables los comentarios.

**Análisis de sentimiento.** Software que clasifica el texto como positivo, negativo o neutro, o por emoción. Wikipedia describe el análisis de sentimiento y sus métodos. Es útil para una clasificación aproximada de grandes volúmenes de texto. Tiene dificultades con el sarcasmo, los sentimientos mezclados, los términos del dominio («crítico» puede ser una prioridad, no una emoción) y las diferencias de idioma y de dialecto. Contraste sus etiquetas con una muestra leída por personas y no trate el resultado como el sentimiento de ningún individuo. Wikipedia describe también el reconocimiento de emociones, que plantea serias preocupaciones de fiabilidad y de ética, en particular cuando se aplica a rostros o voces; tenga cuidado y busque asesoramiento antes de usar tales métodos.

**Descubrimiento de temas.** Las técnicas de procesamiento del lenguaje natural, incluidos los modelos de temas que Wikipedia describe, pueden agrupar los comentarios por asunto. Ayudan a encontrar temas en miles de comentarios, con revisión humana para nombrar y comprobar los grupos.

**Señales de comportamiento y de uso.** Lo que la gente hace a menudo difiere de lo que dice. Los formularios abandonados, las búsquedas repetidas, los reintentos y los contactos tras un intento de autoservicio muestran fricción. Wikipedia describe las pruebas de usabilidad, en las que la gente intenta tareas realistas mientras los observadores anotan las dificultades. Un puñado de sesiones observadas suele encontrar problemas que ninguna encuesta revela.

**Métodos cualitativos.** Las entrevistas y los grupos focales, descritos en Wikipedia, dan profundidad. Un pequeño número de conversaciones con usuarios reales puede cambiar las prioridades más que una gran encuesta. Elija personas que difieran en rol, habilidad y ubicación.

**Acuerdos de nivel de experiencia.** Acuerdos que fijan metas para las medidas de experiencia, como «al menos el 80 por ciento de los usuarios dice que el servicio les ayudó a hacer su trabajo». Se usan mejor como un objetivo compartido y una conversación, con varias medidas, no como un número único atado a penalizaciones, porque las puntuaciones de experiencia se distorsionan con facilidad. Véase el Tema 3.7 — Gestión de Niveles de Servicio.

**Voz del cliente.** La práctica de captar lo que dicen los clientes y actuar en consecuencia. Wikipedia la describe. Reúne encuestas, comentarios, contactos de soporte, reseñas y conversaciones, y canaliza los conocimientos hacia quienes pueden actuar.

**Bienestar y carga de trabajo del personal.** La analítica también puede abordar la experiencia del personal que presta el servicio: carga de trabajo, peso de las guardias y moral. Wikipedia describe el compromiso de los empleados y el agotamiento laboral (burnout). Mida a nivel de equipo, con consentimiento y cuidado, y actúe sobre lo que encuentre.

**Ética, privacidad y consentimiento.** Reunir y analizar comentarios implica datos personales y a veces opiniones sensibles. Wikipedia describe la privacidad, el anonimato y el consentimiento informado. Diga qué recoge y por qué, permita el anonimato donde importe, agregue antes de informar y no identifique a individuos a partir de sus comentarios sin buena razón. Monitorizar el comportamiento o el sentimiento de los empleados en el trabajo, que Wikipedia describe bajo la monitorización de empleados, puede dañar la confianza y puede estar restringido por la ley; recabe asesoramiento jurídico. Véase el Tema 5.6 — Gobernanza, riesgo y cumplimiento de la IA.

**Cerrar el ciclo.** Diga a la gente qué oyó y qué cambió. Haga seguimiento con quienes plantearon un problema grave. Sin una respuesta visible, la participación cae.

**Cómo encajan las lentes.** La analítica de experiencia da el resultado humano que las otras tres lentes aspiran a mejorar. La práctica ágil realiza pequeños experimentos y pregunta a los usuarios si ayudaron. La IA ayuda a leer y agrupar texto, bajo revisión. La automatización dispara las encuestas y canaliza los comentarios.

## Buenas prácticas

1. **Pregunte por los resultados, no solo por la satisfacción.** Incluya una pregunta como «¿obtuvo lo que necesitaba?» y una sobre el esfuerzo. Empareje las puntuaciones con un «¿qué se interpuso?» de texto libre.
2. **Mantenga las encuestas cortas y oportunas.** Haga de una a tres preguntas poco después de una interacción y realice una breve encuesta de relación unas cuantas veces al año. No pregunte repetidamente a la gente por lo mismo.
3. **Escriba preguntas neutrales y pruébelas.** Evite la redacción tendenciosa, las preguntas dobles y la jerga. Pruebe la encuesta con unas pocas personas de distintos grupos antes del lanzamiento.
4. **Informe las tasas de respuesta y quién respondió.** Muestre cuántos respondieron, compare con la población cuando sea posible y describa los límites. Evite la falsa precisión.
5. **Lea los comentarios.** Muestréelos cada semana, cítelos en los informes y agrúpelos en temas. Use herramientas para la escala, con revisión humana.
6. **Contraste las herramientas de sentimiento con las personas.** Pida a personas que etiqueten una muestra, compárela con la herramienta y anote dónde falla. Use la herramienta para la clasificación inicial, no para sacar conclusiones sobre individuos.
7. **Observe el comportamiento además de las palabras.** Mire el abandono, los reintentos y los contactos repetidos, y realice unas cuantas sesiones de usabilidad con tareas reales. Compare lo que la gente hace con lo que dice.
8. **Use los XLA como un objetivo compartido.** Acuerde con los clientes un conjunto pequeño de medidas de experiencia, revíselas juntos y evite atarlas a penalizaciones o al desempeño individual.
9. **Proteja a las personas.** Explique qué recoge, agregue los resultados, evite identificar a individuos y recabe asesoramiento antes de monitorizar el sentimiento de los empleados. No use nunca los datos de experiencia para clasificar a individuos.
10. **Cierre el ciclo de forma visible.** Publique resúmenes de «ustedes dijeron, nosotros hicimos» y haga seguimiento de los problemas graves. Retire las preguntas que no llevan a ninguna acción.

## Preguntas para conversar con su equipo

**¿Qué sabemos sobre cómo vive la gente nuestro servicio que nuestras medidas técnicas no muestran?**
Enumeren quejas o comentarios recientes. Esperen una discrepancia con los paneles. Después elijan un aspecto, como el tiempo para obtener acceso, y añadan una pregunta de experiencia sobre él.

**¿Quién responde a nuestras encuestas y quién no lo hace nunca?**
Comparen a los encuestados con la población. Esperen que falten grupos como el personal de noche o las sedes remotas. Después lleguen a un grupo ausente de otra manera, como una entrevista breve.

**¿Qué cambiamos el último trimestre por lo que nos dijeron los usuarios y lo saben?**
Pidan ejemplos. Esperen pocos. Después acuerden un mensaje periódico de «ustedes dijeron, nosotros hicimos».

**¿Cuán exacta es nuestra herramienta de sentimiento cuando una persona lee una muestra de los mismos comentarios?**
Pruébenla. Esperen errores con el sarcasmo y los términos del dominio. Después acuerden dónde puede usarse la herramienta y dónde no.

**¿Cuáles de nuestras medidas de experiencia podrían subirse sin mejorar la experiencia?**
Piensen en la presión sobre los encuestados, el muestreo selectivo o el cierre de tickets antes de preguntar. Después acuerden una regla contra la influencia en las respuestas y una comprobación de cómo se envían las encuestas.

**¿Qué recogeríamos sobre la experiencia del personal y cómo nos aseguraríamos de que se use para ayudar y no para vigilar?**
Conversen sobre el consentimiento, la agregación y el propósito. Esperen opiniones fuertes. Después acuerden una declaración de uso e involucren a los representantes del personal y al asesoramiento jurídico.

## En la práctica: un ejemplo de gestión de servicios

El equipo de TI de una red nacional de bibliotecas da soporte a 6.000 empleados en 300 sedes. Las medidas técnicas muestran un buen rendimiento: disponibilidad superior al 99,5 por ciento y el 92 por ciento de los tickets resueltos dentro de la meta. Sin embargo, una encuesta anual al personal dice que el «soporte de TI» es el servicio peor valorado, y los directores de las sedes dicen que TI no entiende su trabajo.

El gerente del servicio empieza con una breve encuesta transaccional, enviada automáticamente cuando se resuelve un ticket: dos preguntas («¿Resolvimos su problema?» y «¿Cuán fácil fue obtener ayuda?») y un comentario opcional. La tasa de respuesta es del 18 por ciento. Al comparar a los encuestados con la población del personal, descubre que las sedes grandes están sobrerrepresentadas y las pequeñas y remotas apenas aparecen. Añade una llamada telefónica mensual a cinco sedes pequeñas elegidas al azar y realiza tres sesiones de usabilidad en las que el personal intenta solicitar un nuevo acceso y reservar una pantalla de sala de reuniones.

Los números muestran que el 84 por ciento dice que su problema se resolvió, pero solo el 55 por ciento dice que fue fácil obtener ayuda. Los comentarios, agrupados por tema por dos analistas, muestran que la queja más común es tener que explicar de nuevo el problema a cada persona: el 31 por ciento de los comentarios. Una herramienta de sentimiento, probada con 200 comentarios etiquetados a mano, etiqueta mal alrededor de una cuarta parte, incluidos muchos que usan «urgente» o «crítico» como palabras descriptivas, por lo que el equipo la usa solo para ordenar los comentarios antes de leerlos. Las sesiones de usabilidad descubren que el formulario de solicitud pide una etiqueta de activo que la mayoría del personal desconoce.

El equipo cambia el formulario, crea un historial visible que sigue al ticket entre agentes y publica una nota mensual de lo que ha cambiado. Acuerdan con los directores de las sedes una meta de experiencia: el 75 por ciento del personal dice que obtener ayuda fue fácil, revisada trimestralmente, junto con los comentarios y la tasa de respuesta. El gerente dice al equipo que las puntuaciones no se usarán para la evaluación individual.

Qué cambia: las puntuaciones de facilidad suben al 68 por ciento en dos trimestres, y «explicar de nuevo» baja al 15 por ciento de los comentarios. Qué sigue siendo difícil: las tasas de respuesta siguen siendo bajas en las sedes más pequeñas; algunos agentes temen que las puntuaciones se usen en su contra a pesar de la declaración; y un proveedor ha ofrecido una herramienta de detección de emociones para llamadas telefónicas, que el gerente rechaza hasta que la hayan revisado los representantes jurídicos y del personal. Planea ampliar el muestreo telefónico.

## Cuatro perspectivas

### Equipos de producto y de entrega

Pregunten a los usuarios por los resultados de sus funcionalidades, observen unas cuantas sesiones reales e instrumenten los puntos de fricción como el abandono. Compartan lo que aprendan con el equipo de servicio.

### Equipos de servicio y de operaciones

Lean los comentarios, digan a los clientes qué cambió y usen los datos de experiencia para ver dónde frustra el proceso a la gente. No manipulen las puntuaciones ni pidan a la gente que les valore bien.

### Liderazgo y gobernanza

Pida medidas de experiencia con tasas de respuesta y comentarios. Financie el trabajo cualitativo y el seguimiento. No use las puntuaciones de experiencia para clasificar ni recompensar a individuos. Recabe asesoramiento sobre privacidad y monitorización de empleados.

### Clientes y usuarios

Deberían preguntarle por lo que importa, poder hablar de forma anónima donde corresponda y saber qué cambió. Diga al proveedor dónde las encuestas no reflejan su experiencia y dé ejemplos en sus comentarios.

## Ágil, IA, automatización y analítica

### Ágil

Realice pequeños experimentos sobre la experiencia, como cambiar un formulario, y pregunte a unos cuantos usuarios si ayudó. Involucre a los usuarios en el diseño. Precaución: cambiar constantemente las encuestas destruye las comparaciones; mantenga un núcleo estable y añada preguntas con moderación.

### IA

La IA puede agrupar comentarios, resumir temas y redactar notas de «ustedes dijeron, nosotros hicimos», con una persona que compruebe contra los originales. Nombre un responsable. Precaución: el sentimiento y la detección de emociones por IA pueden equivocarse y ser injustos entre grupos e idiomas; pruébelos con una muestra etiquetada y evite usarlos con individuos. Véase el Tema 5.6 — Gobernanza, riesgo y cumplimiento de la IA.

### Automatización

Automatice los disparadores de las encuestas, el encaminamiento de los comentarios graves a una persona y los recordatorios de seguimiento. Precaución: las encuestas automatizadas enviadas solo tras buenos resultados inflan las puntuaciones; dispárelas de forma coherente. Véase el Tema 6.2 — Automatización y orquestación de flujos de trabajo.

### Analítica

Combine puntuaciones, tasas de respuesta, temas, señales de comportamiento y datos técnicos. Precaución: las puntuaciones son ruidosas, influidas por quién responde y cómo se formula la pregunta; use tendencias, informe la incertidumbre y lea los comentarios. Véanse el Tema 7.3 — Medición e informes y el libro *Service Management Metrics*.

## Modos de fallo habituales

- **Solo medidas técnicas.** Paneles en verde, usuarios descontentos. Añada medidas de experiencia y comentarios.
- **Sesgo de la encuesta ignorado.** Responden los que más gritan. Informe las tasas de respuesta y llegue a los grupos ausentes.
- **Preguntas tendenciosas.** Las respuestas se sesgan. Use una redacción neutral y pruebe.
- **Confiar en las puntuaciones de sentimiento.** Las herramientas etiquetan mal. Contraste con la lectura humana y úselas para la clasificación inicial.
- **Puntuaciones como metas.** La gente presiona a los encuestados. Use los XLA como un objetivo compartido, con varias medidas.
- **Fatiga de encuestas.** La respuesta cae. Pregunte menos y muestre qué cambió.
- **Vigilar a las personas.** Sufren la confianza y la legalidad. Agregue, pida consentimiento y recabe asesoramiento.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Recogida | Encuesta anual | Encuestas transaccionales | Encuestas transaccionales y de relación breves con comentarios | Respuesta y sesgo comprobados, grupos ausentes alcanzados | Comentarios de varios canales integrados |
| Análisis | Solo puntuaciones | Temas leídos a mano | Temas con muestras, herramientas contrastadas con personas | Experiencia vinculada con el comportamiento y los datos técnicos | Los conocimientos de experiencia impulsan la planificación entre servicios |
| Uso | Informado | Algunas acciones | Acciones seguidas y «ustedes dijeron, nosotros hicimos» publicado | Metas de experiencia revisadas con los clientes | Acuerdos de experiencia compartidos entre socios |
| Ética | Poco clara | Conciencia | Reglas de propósito, anonimato y agregación | Prácticas revisadas con el personal y asesores | Privacidad integrada en la recogida y la analítica |

## Lista de verificación

- [ ] Medimos el resultado y el esfuerzo, no solo la satisfacción.
- [ ] Las encuestas son cortas, neutrales y probadas.
- [ ] Informamos las tasas de respuesta y quién falta.
- [ ] Leemos los comentarios cada semana y los agrupamos en temas.
- [ ] Las herramientas de sentimiento se contrastan con etiquetas humanas y se usan solo para la clasificación inicial.
- [ ] Observamos el uso real, no solo preguntamos.
- [ ] Usamos las metas de experiencia como objetivos compartidos, no como medidas individuales.
- [ ] Publicamos qué cambió gracias a los comentarios.

## Prompts de IA

**Agrupe comentarios en temas para su revisión.**

```text
Here are free-text comments from users with personal details removed: [paste].
Group them into up to eight themes, give a count for each, and quote two short comments exactly for each theme. List comments that do not fit. Do not rate sentiment or guess who wrote anything.
List what you are unsure of.
```

**Revise las preguntas de una encuesta.**

```text
Here is a draft survey: [paste].
List questions that are leading, double-barreled, unclear, or likely to produce biased answers, quoting each, and suggest a neutral rewording. Do not add questions.
List what you are unsure of.
```

**Pruebe una herramienta de sentimiento.**

```text
Here are 40 comments, each with a human label and the tool's label: [paste].
Compute the number and share of agreements and disagreements, list the comments with disagreements, and say what they have in common. Do not conclude anything about the tool beyond this sample.
List what you are unsure of.
```

## Habilidades de IA

- [survey-design](../../../../skills/survey-design/SKILL.md): úsela para diseñar encuestas justas y útiles.
- [getting-feedback](../../../../skills/getting-feedback/SKILL.md): úsela para reunir y utilizar los comentarios de usuarios y colegas.
- [stakeholder-analysis](../../../../skills/stakeholder-analysis/SKILL.md): úsela para identificar a quién preguntar y quién falta.
- [statistical-analysis](../../../../skills/statistical-analysis/SKILL.md): úsela para analizar los datos de respuesta con incertidumbre.
- [service-level-agreement](../../../../skills/service-level-agreement/SKILL.md): úsela para plantear las metas de experiencia junto a las técnicas.

## Fuentes principales

- Don Dillman, Jolene Smyth y Leah Christian, *Internet, Phone, Mail, and Mixed-Mode Surveys* (4.ª edición, 2014): una guía estándar de diseño de encuestas.
- Jakob Nielsen, investigación sobre usabilidad (nngroup.com): evidencia práctica sobre las pruebas de usabilidad con muestras pequeñas.
- El libro complementario *Service Management Metrics*: definiciones y salvaguardas para las medidas de experiencia.
- Wikipedia, "Customer satisfaction" y "Sentiment analysis": visiones generales de las ideas principales.

## Referencias

1. Customer satisfaction — Wikipedia — https://en.wikipedia.org/wiki/Customer_satisfaction
2. Net promoter score — Wikipedia — https://en.wikipedia.org/wiki/Net_promoter_score
3. Customer experience — Wikipedia — https://en.wikipedia.org/wiki/Customer_experience
4. User experience — Wikipedia — https://en.wikipedia.org/wiki/User_experience
5. Survey methodology — Wikipedia — https://en.wikipedia.org/wiki/Survey_methodology
6. Participation bias — Wikipedia — https://en.wikipedia.org/wiki/Participation_bias
7. Sentiment analysis — Wikipedia — https://en.wikipedia.org/wiki/Sentiment_analysis
8. Thematic analysis — Wikipedia — https://en.wikipedia.org/wiki/Thematic_analysis
9. Usability testing — Wikipedia — https://en.wikipedia.org/wiki/Usability_testing
10. Voice of the customer — Wikipedia — https://en.wikipedia.org/wiki/Voice_of_the_customer
11. Employee monitoring — Wikipedia — https://en.wikipedia.org/wiki/Employee_monitoring
12. Privacy — Wikipedia — https://en.wikipedia.org/wiki/Privacy
