# Medición e informes

**Una buena medición parte de los objetivos, usa pocas medidas definidas con precisión, empareja cada medida con una salvaguarda contra la manipulación, muestra distribuciones y tendencias e informa a quienes pueden actuar; las definiciones viven en el libro complementario Service Management Metrics, y este tema trata de cómo usarlas bien.**

## Por qué importa

Todo el que trabaja en gestión de servicios ha visto un informe exacto e inútil. Páginas de cifras, un resumen en semáforo y una nota que dice que se cumplieron todas las metas. Luego una queja de un cliente por una semana de mal servicio, y un directivo que pregunta cómo fue posible. El informe medía lo que era fácil de contar, y la meta llegó a representar el resultado.

El fracaso opuesto es igual de real. Un equipo desconfía de los números porque se han usado para juzgar injustamente a las personas y se niega a medir. Entonces la mejora depende de la opinión y decide la voz más fuerte.

La salida es tratar la medición como un oficio con un propósito: saber si los servicios producen resultados y dónde mejorar. Las medidas se eligen a partir de los objetivos, se definen para que dos personas las calculen del mismo modo, se leen como distribuciones y tendencias y se contrastan con las formas en que pueden engañar. Este tema describe ese oficio en términos generales. No define métricas individuales: el libro complementario *Service Management Metrics* da, para cada una, una definición, un vector de manipulación y una salvaguarda, y es el lugar al que acudir para los números en sí. Este tema se conecta con la analítica (Tema 7.1 — Analítica para la gestión de servicios), los fundamentos de datos (Tema 7.2 — Fundamentos y gobernanza de datos), los niveles de servicio (Tema 3.7 — Gestión de Niveles de Servicio) y la mejora continua (Tema 3.15 — Mejora Continua).

## Conceptos clave

**Medida, métrica, indicador.** Una medida es una cantidad que se puede observar, como el número de incidentes. Una métrica es una medida definida para un propósito, con un cálculo, una fuente y un periodo. Un indicador señala el estado de algo difícil de observar directamente. Wikipedia describe los indicadores de desempeño en general, a menudo abreviados KPI por indicadores clave de desempeño. Los términos se usan con laxitud; defina lo que quiere decir.

**Primero los objetivos.** Una medida solo es útil en relación con un objetivo. Escriba el objetivo con palabras sencillas («los clientes pueden obtener ayuda rápidamente cuando algo falla») y pregunte qué evidencia mostraría si se está cumpliendo. Wikipedia describe enfoques como el cuadro de mando integral, que vincula medidas con objetivos desde varias perspectivas, y los objetivos y resultados clave (OKR), que emparejan un objetivo con resultados medibles. Use el que use, trátelos como ayudas para la conversación.

**Resultados, productos y actividad.** Los resultados son cambios para los clientes y la organización; los productos son lo que produce el servicio; la actividad es el esfuerzo. Medir solo la actividad, como los tickets cerrados, dice poco sobre si alguien está mejor. Incluya medidas de resultado y de experiencia. Véase el Tema 1.1 — Gestión de servicios.

**Indicadores adelantados y rezagados.** Los indicadores rezagados informan de los resultados después del hecho, como la satisfacción del cliente. Los indicadores adelantados señalan lo que es probable que venga, como la antigüedad creciente de la acumulación de trabajo. Wikipedia describe ambos en los indicadores económicos. Un conjunto equilibrado incluye los dos.

**Definiciones precisas.** Dos personas deben poder calcular la medida y obtener la misma respuesta. Defina la población, los sucesos de inicio y fin, lo que se excluye, el periodo y la fuente de datos. «Tiempo de resolución» necesita una definición de cuándo arranca, se detiene y se pausa el reloj. Registre los cambios de definición con fechas. Véase el Tema 7.2 — Fundamentos y gobernanza de datos.

**Promedios, medianas y percentiles.** Los promedios se distorsionan fácilmente con unos pocos valores extremos. Las medianas y los percentiles, descritos en Wikipedia, muestran el caso típico y la cola que experimentan los usuarios desafortunados. Para los tiempos de respuesta y de resolución, informe percentiles, como la mediana y el percentil 90.

**Distribuciones y tendencias.** Un solo número para un mes oculta la variación. Muestre la distribución, la tendencia a lo largo de varios periodos y el rango de la variación ordinaria. Wikipedia describe los gráficos de control y el control estadístico de procesos, que separan la variación normal de las señales de que algo ha cambiado. No reaccione a cada oscilación.

**Metas y umbrales.** Una meta es un nivel al que se aspira; un umbral es un nivel que desencadena una acción. Las metas deben surgir de la necesidad y de la evidencia de lo que es alcanzable. Una meta fijada sin evidencia invita a la manipulación o a la desesperación.

**Ley de Goodhart y manipulación.** Cuando una medida se convierte en una meta, deja de ser una buena medida. Wikipedia describe la ley de Goodhart y la observación relacionada del científico social Donald Campbell. La gente se adapta al incentivo. Se cierran los tickets antes de tiempo, se pausan los relojes, se cambian las categorías, se evitan los casos difíciles. El artículo de Wikipedia sobre incentivos perversos da ejemplos de efectos no deseados, a veces llamados el efecto cobra. Toda métrica tiene un vector de manipulación, y el libro *Service Management Metrics* lo nombra con una salvaguarda.

**Salvaguardas.** Una segunda medida o una comprobación que protege contra la manipulación de la primera. Por ejemplo, emparejar la velocidad con la calidad (tiempo de resolución con tasa de reapertura), el volumen con el resultado (tickets cerrados con satisfacción del usuario) y las medidas automatizadas con una revisión por muestreo de casos reales. Sin salvaguardas, una medida se desvía.

**Medir a las personas.** Las medidas del desempeño individual, como los tickets por agente, son especialmente propensas a la manipulación y a la injusticia, porque el trabajo difiere entre las personas y el sistema determina lo que cualquiera puede lograr. Esta guía y el libro complementario desaconsejan clasificar a los individuos. Use medidas a nivel de equipo para entender el sistema.

**Evaluación comparativa.** Comparar con otros, como describe Wikipedia, puede ayudar a fijar expectativas. Las comparaciones solo son válidas cuando coinciden las definiciones, la mezcla de trabajo y el contexto. Sea escéptico ante comparaciones que ignoran las diferencias.

**Informes.** Los informes existen para informar decisiones. Conozca a la audiencia y la decisión. Los buenos informes exponen el objetivo, las medidas, la tendencia, la explicación y la acción. Use un diseño visual que aclare el mensaje. Wikipedia describe la visualización de datos e información y los paneles. Pocas vistas claras sirven mejor que muchas.

**Medidas de entrega.** Los programas de investigación sobre la entrega de software, como el programa DORA, usan cuatro medidas a menudo llamadas las cuatro métricas clave: frecuencia de despliegue, plazo de entrega de los cambios, tasa de fallo de los cambios y tiempo de restablecimiento del servicio. Son preguntas útiles sobre un sistema de entrega. No son puntuaciones para clasificar equipos. Véase el Tema 2.2 — Entrega continua.

**Medidas de experiencia.** Las encuestas, las puntuaciones de satisfacción y el índice de recomendación neto (net promoter score), descrito en Wikipedia, preguntan a los usuarios qué piensan. Tienen sus propios límites, como quién responde y cómo se formulan las preguntas. Véase el Tema 7.7 — Analítica de experiencia y sentimiento.

**Transparencia y confianza.** La gente confía en las medidas que entiende, que ayudó a definir y que ve usar con justicia. Comparta las definiciones, los datos y cómo se usan los resultados. Diga claramente que las medidas son para aprender.

**Cómo encajan las lentes.** La medición es donde la analítica se encuentra con la gobernanza y la mejora. La práctica ágil usa unas pocas medidas para comprobar si un cambio ayudó. La IA puede ayudar con el cálculo y la redacción, bajo revisión, y ella misma necesita medidas de calidad. La automatización produce mediciones a partir de las herramientas.

## Buenas prácticas

1. **Parta de los objetivos.** Escriba para qué sirve el servicio y cómo es el éxito, y elija después las medidas que muestren si se está llegando. Descarte las medidas que no sirven a ningún objetivo.
2. **Mantenga el conjunto pequeño.** Elija un puñado de medidas por servicio que cubran resultados, flujo, calidad y experiencia. Revise el conjunto al menos una vez al año.
3. **Defina con precisión cada métrica.** Escriba la definición, la fuente, el cálculo, el periodo, las exclusiones, el responsable y los límites conocidos. Use las definiciones del libro *Service Management Metrics* como punto de partida.
4. **Nombre el vector de manipulación y añada una salvaguarda.** Para cada una, pregunte cómo podría mejorarse sin mejorar el servicio y empárela con una comprobación. Muestree casos reales con regularidad.
5. **Muestre distribuciones y tendencias.** Informe medianas y percentiles, el rango de la variación normal y varios periodos. Explique los cambios y distinga la señal del ruido.
6. **Fije metas a partir de la evidencia.** Base las metas en la historia, la necesidad y la capacidad, y acuérdelas con quienes deben cumplirlas. Revíselas cuando cambien las circunstancias.
7. **Mida sistemas, no individuos.** Use medidas de equipo y de servicio para entender el sistema. No clasifique a las personas con ellas.
8. **Informe para decidir.** Para cada informe, nombre la audiencia y la decisión. Exponga el hallazgo, la confianza y la acción propuesta. Retire los informes que nadie usa.
9. **Sea abierto.** Publique las definiciones y los resultados a quienes se mide e invite al cuestionamiento. Diga a la gente cómo se usarán y cómo no se usarán los datos.
10. **Revise y retire.** Compruebe si cada medida cambió una decisión. Retire las que no, y arregle las que fueron manipuladas.

## Preguntas para conversar con su equipo

**¿Cuáles de nuestras medidas podrían cumplirse sin dejar mejor a ningún cliente?**
Esto encuentra vectores de manipulación. Esperen unos cuantos ejemplos fáciles. Después elijan uno y acuerden una salvaguarda.

**¿A qué objetivo sirve cada una de nuestras medidas habituales y quién decide algo gracias a ella?**
Recorran el informe. Esperen varias medidas sin objetivo ni decisión. Después descarten una.

**¿Cómo definimos «resuelto» y «tiempo de respuesta» y ha cambiado alguien la definición?**
Pidan las definiciones escritas. Esperen desacuerdo. Después escriban una definición y registren su historia.

**¿Qué dicen nuestros percentiles que ocultan nuestros promedios?**
Calculen ambos para una medida. Esperen una cola larga. Después acuerden informar percentiles para ella.

**¿Cómo se usan aquí las medidas para juzgar a individuos o a equipos y qué efecto tiene eso en el comportamiento?**
Converse abiertamente. Esperen historias de manipulación y de miedo. Después acuerden que una medida dada se usará para aprender y díganlo por escrito.

**¿Cómo podría ayudarnos la IA a calcular o explicar medidas y cómo lo comprobaríamos?**
La IA puede calcular y redactar comentarios. También puede explicar una tendencia con una causa inventada. Pregunten quién comprueba. Después repitan un cálculo a mano y comparen.

## En la práctica: un ejemplo de gestión de servicios

El departamento de TI de un servicio regional de ambulancias informa mensualmente a su junta sobre 24 medidas. La junta pregunta por qué el informe está en verde mientras los despachadores se quejan de que el sistema de despacho asistido por computadora es lento al comienzo del turno. La jefa de TI decide reconstruir el conjunto de medidas con las personas que lo usan.

Empieza por los objetivos, acordados con los líderes del despacho: los despachadores pueden abrir y actualizar una llamada sin demora; las fallas se arreglan rápidamente; y los cambios no perturban las operaciones. Elige ocho medidas, cada una definida en una ficha de una página basada en el libro complementario *Service Management Metrics*. Para el «tiempo de transacción del despachador», la definición indica qué se cronometra, desde dónde y que el percentil 95 se informa por hora del día. La antigua medida de disponibilidad, medida con un ping desde el centro de datos a intervalos de cinco minutos, se conserva pero no se muestra sola a la junta.

Para cada medida, el equipo escribe el vector de manipulación y una salvaguarda. «Incidentes resueltos dentro de la meta» se empareja con la tasa de reapertura y una muestra mensual de 30 incidentes leídos por un analista veterano; el equipo reconoce que cerrar incidentes rápidamente y reabrirlos después halagaría la primera medida. El informe a la junta muestra medianas y percentiles 95 a lo largo de 12 meses con el rango de variación normal y una breve nota sobre qué cambió y qué hará el equipo.

El primer informe muestra que el percentil 95 del tiempo de transacción se duplica entre las 06:30 y las 07:30, y la junta financia un estudio de capacidad. Una pregunta de satisfacción, hecha mensualmente a 40 despachadores, añade una vista de la experiencia. La jefa de TI también declara por escrito que ninguna medida se usará para clasificar a los analistas individuales.

Qué cambia: la junta discute un problema real y el equipo deja de discutir sobre definiciones. Qué sigue siendo difícil: la nueva medida de transacción depende de un campo de registro que dos proveedores registran de manera distinta, por lo que los datos son aproximados; la tasa de respuesta a la encuesta es baja en los turnos de noche; y un directivo sigue queriendo una puntuación única para la junta. La jefa de TI conserva las ocho medidas y muestra al directivo cómo una puntuación única ocultaría el problema de la mañana.

## Cuatro perspectivas

### Equipos de producto y de entrega

Incorporen la medición al producto: eventos, tiempos e indicadores visibles para el usuario. Usen las medidas de entrega para encontrar restricciones, no para comparar equipos. Compartan las definiciones con operaciones.

### Equipos de servicio y de operaciones

Sepan qué se mide y cómo, y contrástenlo con su propia percepción del servicio. Informen con honestidad de la manipulación y de las malas definiciones. Usen las medidas para ver dónde mejorar.

### Liderazgo y gobernanza

Pida objetivos, definiciones, distribuciones y salvaguardas, no un resumen en verde. No use las medidas para clasificar a las personas. Financie el trabajo de datos y esté preparado para oír malas noticias.

### Clientes y usuarios

Deberían preguntarle qué le importa, mostrarle medidas que reflejen su experiencia y decirle qué cambia gracias a ellas. Diga al proveedor cuándo los números no coinciden con lo que usted ve.

## Ágil, IA, automatización y analítica

### Ágil

Use unas pocas medidas para comprobar cada cambio, con una expectativa y una fecha, y revise con las partes interesadas. Retire las medidas que ya no informan. Precaución: no deje que las medidas se conviertan en metas para los equipos; optimizarán el número.

### IA

La IA puede ayudar a calcular, graficar y redactar comentarios, y los propios sistemas de IA necesitan medidas de exactitud, errores y costo. Precaución: una explicación de la IA sobre por qué cambió un número puede ser inventada; exija que señale los datos y compruébelo. Véase el Tema 5.1 — IA en la gestión de servicios.

### Automatización

Automatice la recogida y el cálculo, con definiciones documentadas y un registro de cambios. Precaución: un informe automatizado puede seguir ejecutándose durante años después de que su definición se haya roto en silencio; valide con regularidad frente a los datos en bruto. Véase el Tema 6.1 — Estrategia de automatización.

### Analítica

Use distribuciones, métodos de tendencia y variación y muestreo de casos reales para comprobar las métricas. Precaución: cualquier medida puede manipularse una vez que importa; empareje las medidas y siga leyendo casos. Véanse el libro *Service Management Metrics* y el Tema 7.1 — Analítica para la gestión de servicios.

## Modos de fallo habituales

- **Informes en verde, clientes descontentos.** Las medidas pasan por alto los resultados. Añada medidas de resultado y de experiencia y muestreo.
- **Demasiadas medidas.** Nadie puede usarlas. Mantenga unas pocas ligadas a los objetivos.
- **Definiciones vagas.** Los números no pueden compararse. Defina con precisión y registre los cambios.
- **Promedios.** La cola queda oculta. Informe percentiles y distribuciones.
- **Metas sin evidencia.** Siguen la manipulación o la desesperación. Base las metas en datos y acuérdelas.
- **Clasificar a individuos.** La confianza se derrumba y los números se manipulan. Mida sistemas y equipos.
- **Sin salvaguardas.** Las medidas se desvían. Empareje cada una con una comprobación y muestree casos.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Objetivos y selección | Lo que sea fácil de contar | Algunas medidas ligadas a objetivos | Un conjunto pequeño ligado a los objetivos de cada servicio | Conjunto revisado frente a las decisiones | Medidas alineadas entre servicios y socios |
| Definición y calidad | Informal | Algunas definiciones | Definiciones precisas con responsables e historial de cambios | Definiciones validadas frente a los datos en bruto | Definiciones compartidas y automatizadas entre equipos |
| Defensas contra la manipulación | Ninguna | Conciencia | Vector de manipulación y salvaguarda para cada métrica | Muestras de casos reales revisadas | Defensas integradas en los informes y en la cultura |
| Informes y uso | Informes estáticos | Paneles | Informes para decisiones con nombre, con tendencias y distribuciones | Uso e impacto seguidos | Informes integrados con la planificación y la mejora |

## Lista de verificación

- [ ] Cada medida sirve a un objetivo escrito.
- [ ] Cada métrica tiene una definición precisa, un responsable, una fuente y un historial de cambios.
- [ ] Informamos medianas y percentiles con tendencias.
- [ ] Cada métrica tiene un vector de manipulación nombrado y una salvaguarda.
- [ ] Incluimos medidas de resultado y de experiencia.
- [ ] No clasificamos a los individuos con las medidas.
- [ ] Cada informe nombra a su audiencia y la decisión a la que sirve.
- [ ] Revisamos y retiramos las medidas que ya no cambian decisiones.

## Prompts de IA

**Redacte una definición de métrica para su revisión.**

```text
Metric name: [name]. What we want to know: [goal in plain words]. Data we have: [fields and source].
Draft a definition with: purpose, population, start and end events, exclusions, calculation, period, source, owner (leave blank), and known limits. Then list two ways the metric could be gamed and one guardrail for each. Mark any assumption.
List what you are unsure of.
```

**Compruebe si un informe tiene problemas comunes.**

```text
Here is a monthly report with its measures and a short commentary: [paste].
List measures without a stated goal, uses of averages where percentiles would help, claims of cause not supported by the data, comparisons that may not be like for like, and anything that could be gamed. Quote the text for each. Do not rewrite the report.
List what you are unsure of.
```

**Explique un cambio en una medida.**

```text
The measure [name] changed from [value] to [value]. Here are other facts from the same period: [paste, such as changes in tools, staffing, volumes, definitions].
List possible explanations as hypotheses, what data would test each, and which are not supported by the facts given. Do not state a cause as fact.
List what you are unsure of.
```

## Habilidades de IA

- [software-engineering-metrics](../../../../skills/software-engineering-metrics/SKILL.md): úsela para definir medidas de entrega con sus riesgos.
- [key-risk-indicators](../../../../skills/key-risk-indicators/SKILL.md): úsela para elegir indicadores de alerta temprana.
- [statistical-analysis](../../../../skills/statistical-analysis/SKILL.md): úsela para analizar la variación y la incertidumbre.
- [survey-design](../../../../skills/survey-design/SKILL.md): úsela para diseñar medidas de experiencia que eviten sesgos.
- [trend-analysis](../../../../skills/trend-analysis/SKILL.md): úsela para examinar el cambio a lo largo del tiempo.

## Fuentes principales

- El libro complementario *Service Management Metrics*: definiciones de métricas, vectores de manipulación y salvaguardas, a las que este tema remite en todo momento.
- Nicole Forsgren, Jez Humble y Gene Kim, *Accelerate* (2018), y DORA (dora.dev): investigación sobre medidas de entrega.
- Donald J. Wheeler, *Understanding Variation* (1993): una explicación clara de la señal y el ruido en las medidas.
- Wikipedia, "Goodhart's law" y "Performance indicator": visiones generales de las ideas principales.

## Referencias

1. Performance indicator — Wikipedia — https://en.wikipedia.org/wiki/Performance_indicator
2. Balanced scorecard — Wikipedia — https://en.wikipedia.org/wiki/Balanced_scorecard
3. Objectives and key results — Wikipedia — https://en.wikipedia.org/wiki/Objectives_and_key_results
4. Goodhart's law — Wikipedia — https://en.wikipedia.org/wiki/Goodhart%27s_law
5. Campbell's law — Wikipedia — https://en.wikipedia.org/wiki/Campbell%27s_law
6. Perverse incentive — Wikipedia — https://en.wikipedia.org/wiki/Perverse_incentive
7. Economic indicator — Wikipedia — https://en.wikipedia.org/wiki/Economic_indicator
8. Control chart — Wikipedia — https://en.wikipedia.org/wiki/Control_chart
9. Percentile — Wikipedia — https://en.wikipedia.org/wiki/Percentile
10. Benchmarking — Wikipedia — https://en.wikipedia.org/wiki/Benchmarking
11. Data and information visualization — Wikipedia — https://en.wikipedia.org/wiki/Data_and_information_visualization
12. Net promoter score — Wikipedia — https://en.wikipedia.org/wiki/Net_promoter_score
