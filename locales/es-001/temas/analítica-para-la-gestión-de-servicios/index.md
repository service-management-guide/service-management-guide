# Analítica para la gestión de servicios

**La analítica convierte los datos de servicio en respuestas a preguntas: qué ocurrió, por qué, qué ocurrirá y qué hacer; se gana la confianza cuando cada análisis parte de una pregunta con nombre, indica sus datos y sus límites, separa la correlación de la causa y termina en una decisión que alguien puede tomar.**

## Por qué importa

Los equipos de servicio generan una gran cantidad de datos: tickets, registros, métricas, encuestas, registros de cambios, informes de costos. La mayor parte queda sin usar o se resume en paneles que nadie puede vincular con una decisión. Los informes describen actividad, como tickets cerrados, y dicen poco sobre si los clientes están mejor.

La analítica es la disciplina de obtener respuestas de los datos. Wikipedia describe la analítica como el descubrimiento, la interpretación y la comunicación de patrones significativos en los datos. En la gestión de servicios puede mostrar de dónde viene la demanda, por qué se repiten los incidentes, dónde espera el trabajo, qué cambios son arriesgados y si una mejora ayudó. También puede engañar. Un gráfico puede parecer autorizado mientras descansa en una muestra sesgada, una coincidencia o una definición que cambió en silencio.

Este tema es la puerta de entrada a la Parte 7. Describe los tipos de analítica, los pasos de un análisis sólido y las trampas que atrapan incluso a personas cuidadosas. Deja las definiciones de métricas al libro complementario *Service Management Metrics* y remite a los temas siguientes para los fundamentos (Tema 7.2 — Fundamentos y gobernanza de datos), la medición (Tema 7.3 — Medición e informes), la observabilidad (Tema 7.4 — Observabilidad y telemetría), la predicción (Tema 7.5 — Analítica predictiva y previsión), el flujo (Tema 7.6 — Analítica de procesos y de flujos de valor) y la experiencia (Tema 7.7 — Analítica de experiencia y sentimiento). La descripción del propietario de la versión más reciente de ITIL destaca los resultados medibles (véase el Tema 1.3 — ITIL 5), que dependen de una analítica bien hecha.

## Conceptos clave

**Cuatro tipos de analítica.** Un planteamiento común distingue:

| Tipo | Pregunta | Ejemplo en el trabajo de servicio |
|---|---|---|
| Descriptiva | ¿Qué ocurrió? | Incidentes por mes y por servicio |
| Diagnóstica | ¿Por qué ocurrió? | Qué tienen en común los incidentes repetidos |
| Predictiva | ¿Qué es probable que ocurra? | Pronóstico del volumen de tickets del próximo trimestre |
| Prescriptiva | ¿Qué debemos hacer? | Niveles de dotación que cumplen una meta al menor costo |

Wikipedia describe la analítica descriptiva, predictiva y prescriptiva. Cada una se construye sobre la anterior. La mayoría de los equipos de servicio obtendrán el mayor valor de hacer bien las dos primeras.

**Empiece con una pregunta.** Un análisis comienza con una decisión que alguien necesita tomar, como si añadir personal al turno de tarde, y la convierte en una pregunta que los datos puedan responder. Sin una pregunta, el análisis se convierte en una búsqueda de algo interesante, y el artículo de Wikipedia sobre el dragado de datos explica cómo eso encuentra patrones que son solo casualidad.

**Datos.** Lo que tiene, de dónde vino, cómo se registró y lo que deja fuera. Los datos de tickets muestran lo que la gente decidió comunicar y cómo lo categorizaron los agentes, no todo lo que ocurrió. Véase el Tema 7.2 — Fundamentos y gobernanza de datos. Wikipedia describe la calidad de los datos como la aptitud para el uso.

**Estadística descriptiva.** Resúmenes como recuentos, medianas, percentiles y dispersión. Wikipedia describe la estadística descriptiva. Para los datos de servicio, las medianas y los percentiles suelen ser más útiles que los promedios, que ocultan las colas largas, y los valores atípicos, descritos en Wikipedia, merecen una mirada en lugar de una eliminación automática.

**Análisis exploratorio.** Mirar los datos para ver su forma, su calidad y sus sorpresas antes de poner a prueba ideas. Wikipedia describe el análisis exploratorio de datos. Evita errores tontos, como tratar un valor ausente como cero.

**Muestreo y sesgo.** La mayoría de los análisis usan una muestra, y las muestras pueden engañar. Wikipedia describe el muestreo y el sesgo de selección. Las respuestas de las encuestas provienen de quienes contestan, y los tickets de soporte, de quienes le contactan. El sesgo de supervivencia, también descrito allí, surge cuando se estudia solo lo que queda, como los clientes que se quedaron.

**Correlación y causa.** Que dos cosas se muevan juntas no significa que una cause la otra. Wikipedia describe el problema bajo «la correlación no implica causalidad» y la confusión, en la que un tercer factor impulsa a ambas. El volumen de tickets y el número de servidores pueden subir juntos porque el negocio creció. Las afirmaciones causales necesitan más que un gráfico: una comparación controlada o un razonamiento cuidadoso sobre las alternativas. Wikipedia describe la inferencia causal y las pruebas A/B como formas de aprender sobre la causa.

**Paradojas y trampas.** La paradoja de Simpson, descrita en Wikipedia, es un caso en el que una tendencia que aparece en varios grupos se invierte cuando los grupos se combinan. La falacia de la tasa base, también descrita allí, es el error de ignorar lo común que es algo, de modo que un buen detector de un suceso raro produce sobre todo falsas alarmas. Ser consciente de esas trampas es una defensa.

**Significación estadística e incertidumbre.** Un resultado es «significativo» cuando es poco probable que se deba solo al azar bajo supuestos declarados. Wikipedia describe las pruebas de hipótesis y los intervalos de confianza. Significación no es importancia: un efecto minúsculo puede ser significativo en un conjunto de datos grande, y un efecto grande puede ser incierto en uno pequeño. Muestre rangos, no solo cifras únicas.

**Visualización.** Los gráficos ayudan a la gente a ver patrones, y los malos gráficos engañan. Wikipedia describe la visualización de datos e información. Elija formas que correspondan a la pregunta, etiquete los ejes y las unidades, comience las escalas con honestidad y muestre la incertidumbre. Los paneles, descritos en Wikipedia como presentaciones visuales de información clave, deben servir a las decisiones y ser pocos.

**Series temporales.** Muchos datos de servicio se registran a lo largo del tiempo, con tendencias, patrones estacionales y cambios bruscos. Wikipedia describe el análisis de series temporales. Compare lo comparable: este lunes con otros lunes. Véase el Tema 7.5 — Analítica predictiva y previsión.

**Modelos y aprendizaje automático.** Los modelos estadísticos y de aprendizaje automático pueden predecir, clasificar y agrupar. Necesitan datos de entrenamiento y de prueba, validación y monitorización de la deriva. Véase el Tema 5.1 — IA en la gestión de servicios. Un modelo no es una fuente de verdad; es una herramienta con supuestos.

**Ley de Goodhart.** Cuando una medida se convierte en una meta, deja de ser una buena medida. Wikipedia describe la ley. La analítica usada para juzgar a las personas o a los equipos invita a cambios de comportamiento que mejoran el número y no el resultado. Use las medidas para aprender, empárelas con otras y diga cómo podría manipularse cada una. Véase el libro *Service Management Metrics*.

**Ética y privacidad.** La analítica sobre las personas, como la productividad de los agentes o el comportamiento de los usuarios, plantea cuestiones de consentimiento, equidad y proporción. Wikipedia describe la privacidad y el sesgo algorítmico en otros lugares. Recoja solo lo que necesita, agregue donde pueda y sea abierto sobre qué analiza y por qué. Véase el Tema 5.6 — Gobernanza, riesgo y cumplimiento de la IA.

**Comunicación.** Un análisis que nadie entiende no cambia nada. Exponga la pregunta, la respuesta, la confianza, los límites y la decisión recomendada con palabras sencillas, con un gráfico donde ayude.

**Cómo encajan las lentes.** La analítica es la cuarta lente y sirve a las otras tres. La práctica ágil la usa para comprobar si un cambio ayudó. La IA usa los datos como combustible y puede acelerar el análisis, bajo revisión. La automatización produce datos y actúa sobre ellos. La analítica también necesita las tres primeras lentes para convertir la comprensión en cambio.

## Buenas prácticas

1. **Parta de una decisión.** Escriba quién decidirá qué, para cuándo y qué evidencia le haría cambiar de opinión. Dé forma al análisis en consecuencia.
2. **Convierta la decisión en una pregunta precisa.** Defina los términos, como «resuelto» o «incidente repetido», la población y el periodo antes de tocar los datos.
3. **Conozca sus datos.** Documente las fuentes, cómo se crean los registros, las brechas conocidas y los cambios de definiciones a lo largo del tiempo. Compruebe una muestra frente a la realidad.
4. **Mire antes de probar.** Explore primero las distribuciones, los valores ausentes y los valores atípicos. Corrija los errores y registre lo que cambió.
5. **Use resúmenes robustos.** Informe medianas y percentiles con recuentos y muestre la dispersión. Compare lo comparable, como el mismo día de la semana o la misma temporada.
6. **Cuídese del sesgo.** Pregunte quién falta en los datos y por qué. Indique los límites de la muestra al presentar resultados.
7. **No afirme causa sin fundamento.** Diga «asociado con» salvo que tenga una comparación o un argumento sólido. Enumere explicaciones alternativas y diga cómo las comprobó.
8. **Muestre la incertidumbre.** Dé rangos y anote los tamaños de muestra. Evite la falsa precisión.
9. **Diseñe los elementos visuales para el lector.** Mantenga los gráficos simples, honestos y etiquetados. Prefiera unos pocos paneles significativos a muchos sin uso.
10. **Cierre el ciclo.** Registre la decisión tomada y el resultado, y compruebe después si el análisis ayudó. Retire los informes que nadie usa.

## Preguntas para conversar con su equipo

**¿Cuál es la última decisión que tomamos con datos y qué nos dijeron realmente los datos?**
Pida el ejemplo. Espere que los datos respaldaran una decisión ya tomada. Después elijan una decisión próxima y escriban primero la pregunta.

**¿Qué informes nuestros no lee ni actúa sobre ellos nadie?**
Comprueben el uso. Esperen varios. Después retiren uno y pregunten si alguien lo echa de menos.

**¿Dónde podrían estar sesgados o incompletos nuestros datos y quién falta?**
Piensen en tickets, encuestas y registros. Esperen que muchos usuarios nunca nos contacten. Después elijan una fuente y añadan una comprobación desde otra.

**¿Qué nos convencería de que una mejora reciente realmente funcionó?**
Discutan la evidencia. Esperen que se apoye en gráficos de antes y después. Después enumeren otras cosas que cambiaron al mismo tiempo.

**¿Cuáles de nuestros números podrían manipularse y cómo lo notaríamos?**
Elijan una medida que importe para la evaluación de alguien. Esperen respuestas creativas. Después acuerden una comprobación por muestreo o una medida emparejada.

**¿Cómo podría ayudarnos la IA a analizar nuestros datos y cómo comprobaríamos su trabajo?**
La IA puede resumir datos, redactar gráficos y sugerir patrones. También puede afirmar hallazgos inventados. Pregunten quién comprueba y cómo. Después repitan a mano un análisis de IA sobre un conjunto de datos pequeño.

## En la práctica: un ejemplo de gestión de servicios

El centro de servicios de TI de una autoridad tributaria nacional atiende 25.000 contactos al mes. Un directivo veterano tiene un panel que muestra que el tiempo medio de resolución ha subido un 20 por ciento en un año y pide a la jefa del centro que «lo vuelva a bajar». La jefa decide analizar antes de reaccionar.

Empieza con la pregunta: ¿ha subido el tiempo para resolver un contacto típico y, de ser así, para qué tipos de contacto? Comprueba primero los datos. En primavera la herramienta de tickets cambió cómo se registra «resuelto», de modo que los tickets se resuelven cuando el agente los marca y no cuando el usuario confirma. También descubre que una nueva categoría de solicitudes complejas de «acceso al sistema de casos», lanzada en otoño, supone el 12 por ciento de los contactos y tarda cinco veces más que el resto.

Recalcula usando medianas y percentiles 90, divididos por categoría. Para las categorías antiguas, la mediana del tiempo de resolución no ha cambiado; el percentil 90 ha subido ligeramente. El promedio global subió sobre todo por la nueva categoría y por el cambio de definición. Anota que los datos no pueden mostrar por qué algunas solicitudes de acceso tardan mucho, solo que tardan.

Presenta un resumen de una página: el promedio subió por un nuevo tipo de trabajo y un cambio de definición; la mayoría de los contactos son tan rápidos como antes; la cola larga ha crecido un poco y las solicitudes complejas merecen una mirada. Evita decir que la nueva categoría «causó» el aumento de la cola larga, ya que también hubo cambios de personal. Propone dos acciones: un estudio de las solicitudes de acceso con una muestra de 40 tickets y un informe mensual por categoría con percentiles.

Qué cambia: el directivo deja de pedir una reducción global y pide el estudio de las solicitudes de acceso. Qué sigue siendo difícil: el cambio de definición no puede deshacerse del todo, de modo que las comparaciones a través del corte siguen siendo aproximadas; la muestra de 40 tickets la leyó una sola persona y está abierta al sesgo; y el directivo sigue prefiriendo un único número. La jefa conserva ambas vistas y explica los límites cada vez.

## Cuatro perspectivas

### Equipos de producto y de entrega

Usen los datos para comprobar si los cambios ayudaron e instrumenten su producto para que existan datos útiles. Compartan las definiciones y los límites con quienes usan sus datos y eviten exagerar a partir de un solo gráfico.

### Equipos de servicio y de operaciones

Sepan de dónde vienen sus datos y qué omiten. Informen medianas y percentiles con recuentos y examinen las colas largas. Avisen a los analistas cuando cambie una herramienta o una categoría.

### Liderazgo y gobernanza

Pida la pregunta, los datos, los límites y la decisión, no solo un gráfico. No use medidas aisladas para juzgar a las personas. Financie la calidad de los datos y las habilidades analíticas.

### Clientes y usuarios

Usted está en los datos, y a menudo falta en ellos. Deberían preguntarle qué le importa, y el proveedor debería decir cómo se usa su información. Diga al proveedor cuándo los números no coinciden con su experiencia.

## Ágil, IA, automatización y analítica

### Ágil

Use la analítica como herramienta de retroalimentación: fije una expectativa, haga un cambio pequeño, compruebe los datos y decida. Comparta los resultados con las partes interesadas. Precaución: no espere datos perfectos para actuar en un experimento pequeño; tampoco trate un breve gráfico de antes y después como prueba.

### IA

La IA puede limpiar datos, redactar consultas y gráficos, resumir resultados y sugerir patrones, con un responsable y comprobaciones. Precaución: un análisis generado por IA puede afirmar hallazgos que los datos no respaldan o usar el método equivocado; exíjale que muestre sus cálculos y repita una muestra a mano. Véase el Tema 5.1 — IA en la gestión de servicios.

### Automatización

Automatice la recogida de datos, la limpieza y los informes rutinarios, con documentación de cada paso. Precaución: los informes automatizados pueden continuar después de que su significado haya cambiado; revise con regularidad las definiciones y las fuentes. Véase el Tema 6.1 — Estrategia de automatización.

### Analítica

Este tema es la propia lente: preguntas, datos, métodos, incertidumbre y decisiones. Precaución: no deje que el volumen de datos sustituya a la comprensión; mida si los análisis cambiaron decisiones. Véase el libro *Service Management Metrics* para las definiciones de métricas y las salvaguardas.

## Modos de fallo habituales

- **Informes sin decisiones.** Paneles que nadie usa. Parta de una decisión y retire los informes sin uso.
- **Promedios que ocultan.** Una cola de malas experiencias pasa inadvertida. Use medianas, percentiles y divisiones.
- **Definiciones desconocidas.** Un cambio en el significado de un campo rompe las tendencias. Documente y monitorice las definiciones.
- **Muestras sesgadas.** Solo se cuenta a quienes le contactan. Indique quién falta.
- **Causa a partir de correlación.** Se toma un gráfico como prueba. Enumere explicaciones alternativas y pruebe.
- **Falsa precisión.** Se muestran números sin incertidumbre. Muestre rangos y tamaños de muestra.
- **Metas que distorsionan.** La gente optimiza el número. Empareje medidas y muestree casos reales.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Preguntas y decisiones | Informes por costumbre | Algunas preguntas definidas | Los análisis parten de decisiones con nombre | Impacto en las decisiones seguido | Analítica integrada con la planificación entre servicios |
| Comprensión de los datos | Desconocida | Fuentes principales conocidas | Fuentes, definiciones y brechas documentadas | Calidad de los datos medida y mejorada | Datos gobernados y compartidos entre equipos y socios |
| Método | Promedios y gráficos | Medianas y divisiones básicas | Métodos estándar, incertidumbre y comprobaciones de sesgo | Métodos revisados y comprobados entre pares | Métodos avanzados con supervisión y validación |
| Comunicación | Paneles | Resúmenes | Hallazgos en lenguaje sencillo con límites | Hallazgos probados con los usuarios | Conocimiento incorporado a las decisiones diarias |

## Lista de verificación

- [ ] Cada análisis parte de una decisión con nombre y una pregunta precisa.
- [ ] Documentamos nuestras fuentes de datos, definiciones y brechas conocidas.
- [ ] Informamos medianas y percentiles con recuentos.
- [ ] Indicamos quién falta en los datos y los límites de las muestras.
- [ ] Separamos la correlación de la causa y enumeramos explicaciones alternativas.
- [ ] Mostramos la incertidumbre y evitamos la falsa precisión.
- [ ] Emparejamos las medidas que podrían manipularse y muestreamos casos reales.
- [ ] Seguimos las decisiones tomadas y revisamos si el análisis ayudó.

## Prompts de IA

**Convierta una decisión en una pregunta.**

```text
The decision we need to make: [describe]. Who decides: [role]. Data we have: [list sources and fields].
Write three precise analytical questions that would inform the decision, with definitions of key terms, the population, and the period. List what data we lack for each. Do not propose answers.
List what you are unsure of.
```

**Compruebe si el resumen de unos resultados tiene trampas.**

```text
Here is a summary of an analysis with the data used: [paste].
List possible problems: sample bias, missing groups, changes in definitions, outliers, confounding factors, and claims of cause not supported by the data. Quote the text for each. Do not redo the analysis.
List what you are unsure of.
```

**Describa un conjunto de datos antes del análisis.**

```text
Here is a sample of rows from our dataset with field names, identifiers removed: [paste].
List each field, its apparent type, missing values, odd values, and questions to ask about how it is recorded. Do not draw conclusions about the business.
List what you are unsure of.
```

## Habilidades de IA

- [statistical-analysis](../../../../skills/statistical-analysis/SKILL.md): úsela para elegir y aplicar métodos estadísticos sólidos.
- [trend-analysis](../../../../skills/trend-analysis/SKILL.md): úsela para examinar el cambio a lo largo del tiempo.
- [data-quality](../../../../skills/data-quality/SKILL.md): úsela para comprobar y mejorar los datos que hay detrás de un análisis.
- [software-engineering-metrics](../../../../skills/software-engineering-metrics/SKILL.md): úsela para definir medidas de entrega con sus riesgos.
- [survey-design](../../../../skills/survey-design/SKILL.md): úsela para diseñar encuestas que eviten los sesgos comunes.

## Fuentes principales

- Edward Tufte, *The Visual Display of Quantitative Information* (1983): un clásico sobre gráficos honestos.
- Darrell Huff, *How to Lie with Statistics* (1954): un relato breve y legible de los trucos estadísticos comunes.
- El libro complementario *Service Management Metrics*: definiciones de métricas, vectores de manipulación y salvaguardas.
- Wikipedia, "Analytics" y "Data analysis": visiones generales del campo.

## Referencias

1. Analytics — Wikipedia — https://en.wikipedia.org/wiki/Analytics
2. Data analysis — Wikipedia — https://en.wikipedia.org/wiki/Data_analysis
3. Descriptive statistics — Wikipedia — https://en.wikipedia.org/wiki/Descriptive_statistics
4. Predictive analytics — Wikipedia — https://en.wikipedia.org/wiki/Predictive_analytics
5. Prescriptive analytics — Wikipedia — https://en.wikipedia.org/wiki/Prescriptive_analytics
6. Correlation does not imply causation — Wikipedia — https://en.wikipedia.org/wiki/Correlation_does_not_imply_causation
7. Simpson's paradox — Wikipedia — https://en.wikipedia.org/wiki/Simpson%27s_paradox
8. Selection bias — Wikipedia — https://en.wikipedia.org/wiki/Selection_bias
9. Data dredging — Wikipedia — https://en.wikipedia.org/wiki/Data_dredging
10. Goodhart's law — Wikipedia — https://en.wikipedia.org/wiki/Goodhart%27s_law
11. Data quality — Wikipedia — https://en.wikipedia.org/wiki/Data_quality
12. Exploratory data analysis — Wikipedia — https://en.wikipedia.org/wiki/Exploratory_data_analysis
