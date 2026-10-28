# Analítica predictiva y previsión

**Las previsiones y predicciones de demanda, capacidad, incidentes y riesgo de los cambios ayudan a los equipos a prepararse, pero son inciertas por naturaleza; use primero líneas base simples, muestre rangos en lugar de cifras únicas, valide con datos reservados, vigile la deriva y haga explícita la regla de decisión antes de elaborar la previsión.**

## Por qué importa

Los equipos de servicio siempre se están preparando para algo. ¿Cuántos contactos llegarán en la primera semana del nuevo curso? ¿Cuándo se llenará el almacenamiento? ¿Qué cambios probablemente causarán incidentes? ¿Cuántas personas deben estar de guardia durante las rebajas? Las decisiones sobre personal, capacidad y riesgo descansan en creencias sobre el futuro, las exprese alguien o no.

La predicción hace explícitas esas creencias y las vuelve comprobables. Una previsión del volumen de tickets del mes próximo, con un rango, puede compararse con lo que ocurre y mejorarse. Un modelo que puntúa el riesgo de un cambio puede contrastarse con los cambios que fallaron. Bien hecha, sustituye la intuición por evidencia. Mal hecha, la sustituye por una falsa confianza: una sola cifra con dos decimales, producida por un modelo que nadie puede explicar, en el que se confía porque parece científico.

Las predicciones fallan por razones ordinarias. El pasado no contenía el patrón que importa. El modelo se ajusta al ruido. Un lanzamiento, un cambio de política o una caída rompen la relación que aprendió el modelo. Un suceso raro se pronostica con una herramienta hecha para los comunes. Este tema describe los principales tipos de previsión y predicción en la gestión de servicios, los métodos en términos sencillos y los hábitos que los mantienen honestos. Se apoya en la analítica (Tema 7.1 — Analítica para la gestión de servicios) y en la planificación de la capacidad (Tema 3.11 — Disponibilidad, Capacidad y Rendimiento), y se relaciona con AIOps (Tema 5.2 — AIOps) y con la economía de la nube (Tema 4.5 — Gestión financiera y FinOps).

## Conceptos clave

**Previsión y predicción.** La previsión estima valores futuros de una cantidad a lo largo del tiempo, como la demanda del mes próximo. La predicción, de manera más amplia, estima una incógnita, como si un cambio fallará. Wikipedia describe la previsión y la analítica predictiva. Ambas usan patrones de datos pasados, y ambas son inciertas.

**Series temporales.** Datos registrados a intervalos regulares. Wikipedia describe el análisis de series temporales. Muchas cantidades de servicio, como los recuentos diarios de tickets, son series temporales con una tendencia (un aumento o descenso a largo plazo), estacionalidad (ciclos regulares, como semanales o anuales) y ruido. Wikipedia describe la estacionalidad. Las previsiones deben tener en cuenta las tres.

**Líneas base.** La previsión más simple que podría funcionar: «la próxima semana será como esta semana» o «este mes será como el mismo mes del año pasado, ajustado por el crecimiento». Las líneas base son sorprendentemente difíciles de superar. Compare siempre un método sofisticado con una línea base; si no lo hace claramente mejor, use la línea base.

**Métodos clásicos.** Técnicas como el suavizado exponencial y los modelos autorregresivos integrados de media móvil (ARIMA), que Wikipedia describe, manejan tendencias y estacionalidad en muchas series y a menudo son difíciles de superar con herramientas más complejas. También son más fáciles de explicar.

**Métodos de aprendizaje automático.** Los métodos que aprenden patrones a partir de muchas variables, como los árboles de regresión o las redes neuronales, pueden usar información adicional, como los eventos planificados. Wikipedia describe el análisis de regresión y el aprendizaje automático en general. Pueden rendir bien cuando hay muchos datos pertinentes y pueden sobreajustarse cuando no los hay. Véase el Tema 5.1 — IA en la gestión de servicios.

**Sobreajuste y validación.** Un modelo que se ajusta demasiado al pasado, incluido su ruido, rinde mal con datos nuevos. Wikipedia describe el sobreajuste. La defensa es reservar datos que el modelo no vio, en conjuntos separados de entrenamiento, validación y prueba, como describe Wikipedia, y probar en periodos posteriores a los usados para construir el modelo. En series temporales esto se llama backtesting; Wikipedia lo describe.

**Fuga de información (leakage).** Usar en el modelo información que no estaría disponible en el momento de la predicción, como un campo que se rellena después de resolverse un incidente. Wikipedia describe la fuga de datos en el aprendizaje automático. Produce resultados de prueba impresionantes y previsiones inútiles.

**Incertidumbre e intervalos.** Una previsión es una distribución de posibilidades, no un número. Un intervalo de predicción, descrito en Wikipedia, da un rango que se espera que contenga el resultado con una probabilidad declarada. Informe rangos, como «entre 8.000 y 9.500 contactos, lo más probable 8.700». Los métodos de Monte Carlo, descritos en Wikipedia, simulan muchos futuros posibles para mostrar un rango.

**Escenarios.** Para las cosas que dependen de decisiones o sucesos, como un lanzamiento, la planificación de escenarios, descrita en Wikipedia, desarrolla unas pocas historias verosímiles y planifica para cada una, en lugar de una sola previsión. Use escenarios cuando el futuro pueda diferir en naturaleza del pasado.

**Medidas de exactitud.** Las medidas comunes comparan las previsiones con los resultados, como el error porcentual absoluto medio, que Wikipedia describe, y la proporción de resultados que caen en el rango declarado. Cada una tiene debilidades: el error porcentual es inestable cuando los valores se acercan a cero. Elija medidas que correspondan a cómo le cuestan los errores.

**Clasificación y puntuaciones de riesgo.** Predecir si algo ocurrirá, como que un cambio falle o que un ticket incumpla su meta, produce una puntuación. Wikipedia describe la precisión y la exhaustividad (recall), las dos maneras en que estas predicciones pueden equivocarse: falsas alarmas y omisiones. Los sucesos raros lo dificultan: Wikipedia describe la falacia de la tasa base, en la que un detector aparentemente bueno produce sobre todo falsas alarmas cuando el suceso es raro. Decida los costos de cada tipo de error antes de elegir un umbral.

**Calibración.** Una puntuación de riesgo está calibrada si, entre los elementos puntuados con un 20 por ciento, alrededor del 20 por ciento ocurre realmente. Wikipedia describe la calibración en estadística. Una puntuación que ordena bien pero no está calibrada puede engañar a quienes la leen como una probabilidad.

**Deriva.** Las relaciones cambian a medida que cambian los servicios, los usuarios y las herramientas. Wikipedia describe la deriva de concepto. Un modelo que funcionó el año pasado puede fallar tras el lanzamiento de un nuevo producto. Vigile la exactitud a lo largo del tiempo y reentrene o reconstruya cuando baje.

**Sucesos raros y extremos.** Los modelos entrenados con historia ordinaria rinden mal con sucesos muy inusuales. Wikipedia describe la teoría del cisne negro, la idea de que los sucesos raros de alto impacto no son predecibles a partir de datos ordinarios. No confíe en las previsiones para los riesgos de cola; use escenarios, pruebas de estrés y ensayos. Véase el Tema 3.12 — Gestión de la Continuidad del Servicio.

**Colas y capacidad.** La previsión de la demanda alimenta las decisiones de capacidad. La teoría de colas y la ley de Little, que Wikipedia describe, relacionan la demanda, la capacidad y la espera. Véanse el Tema 3.11 — Disponibilidad, Capacidad y Rendimiento y el Tema 2.3 — Flujo y Kanban.

**Primero las decisiones.** Una previsión solo es útil si cambia una decisión. Antes de construir una, escriba la decisión a la que informa, los umbrales de acción y lo que hará en cada uno. Si nada cambiaría, no pronostique.

**Juicio humano.** Las personas saben de lanzamientos, cambios de política y sucesos que ningún modelo ha visto. Combine la salida del modelo con el juicio, registre los ajustes y compruebe después si ayudaron.

**Cómo encajan las lentes.** La predicción es el lado prospectivo de la analítica. La práctica ágil trata una previsión como una hipótesis, que se renueva con frecuencia. Las técnicas de IA amplían lo que puede predecirse, bajo revisión y con las precauciones anteriores. La automatización puede actuar sobre las predicciones, como escalar antes de la demanda, con límites.

## Buenas prácticas

1. **Declare primero la decisión y los umbrales.** Escriba qué acción desencadenaría cada rango de previsión y quién decide. Omita las previsiones que no cambiarían nada.
2. **Empiece con una línea base.** Construya una previsión simple, como el patrón del año pasado ajustado por el crecimiento, y mida su error. Úsela como la vara que hay que superar.
3. **Prefiera métodos que pueda explicar.** Use métodos clásicos o modelos simples salvo que los complejos sean claramente mejores con datos reservados. Sea capaz de decir, con palabras sencillas, qué impulsa la previsión.
4. **Valide con honestidad.** Reserve el periodo más reciente, haga backtesting en varios periodos y compruebe si hay fuga de información. Informe el error con datos que el modelo no vio.
5. **Muestre rangos y escenarios.** Dé un valor más probable y un rango verosímil. Use escenarios donde los sucesos puedan cambiar el patrón. No presente una falsa precisión.
6. **Incluya los sucesos conocidos.** Añada lanzamientos, plazos, festivos y campañas de quienes los conocen. Registre los ajustes hechos por juicio.
7. **Ajuste el umbral al costo de los errores.** Para las puntuaciones de riesgo, decida el costo de las falsas alarmas y de las omisiones, fije el umbral en consecuencia y compruebe la calibración.
8. **Vigile la exactitud y la deriva.** Compare cada previsión con el resultado, siga el error a lo largo del tiempo y reentrene o reconstruya cuando baje la exactitud. Mantenga un registro de previsiones para poder auditarlas.
9. **No confíe en exceso en las predicciones de sucesos raros.** Use escenarios, pruebas de estrés y ensayos para los sucesos graves pero improbables.
10. **Cierre el ciclo con las decisiones.** Registre la decisión tomada y el resultado, y úselos para mejorar la previsión y la regla de decisión.

## Preguntas para conversar con su equipo

**¿Qué decisiones tomamos hoy basadas en una conjetura sobre el futuro y qué haríamos distinto con una mejor?**
Enumérenlas: dotación, capacidad, momento de las versiones. Esperen varias. Después elijan una y escriban la regla de decisión.

**¿Cuán exactas fueron nuestras tres últimas previsiones y cómo lo averiguamos?**
Pidan las cifras. Esperen que nadie lo comprobó. Después comparen las previsiones pasadas con los valores reales y acuerden llevar un registro.

**¿Cuál es la previsión más simple que podría funcionar para esto y cuánto mejor tiene que ser un modelo complejo para justificarlo?**
Construyan la línea base. Esperen que rinda decentemente. Después fijen una mejora mínima para adoptar algo más complejo.

**¿Qué sucesos conocemos que un modelo entrenado con la historia no conocería?**
Enumeren lanzamientos, plazos y cambios de política. Esperen muchos. Después decidan cómo incluirlos, como entradas o como ajustes.

**¿Cómo se usaría una puntuación de riesgo de los cambios y cuál es el costo de una falsa alarma frente a una omisión?**
Conversen en términos concretos. Esperen opiniones distintas. Después acuerden un umbral y una revisión de los resultados del primer mes.

**¿Dónde podría ayudarnos la IA a pronosticar o predecir y cómo sabríamos que se equivocó?**
La IA puede ajustar patrones complejos y también inventarlos. Pidan la comparación con las líneas base y el plan para vigilar la deriva. Después ejecuten una previsión de IA junto al método actual durante un trimestre.

## En la práctica: un ejemplo de gestión de servicios

Una agencia nacional de préstamos estudiantiles opera un centro de soporte que está tranquilo la mayor parte del año y desbordado en las dos semanas anteriores al plazo anual de solicitudes. Hasta ahora, la jefa del centro ha dotado de personal el pico recordando la experiencia del año anterior y añadiendo un margen. Hace dos años el centro tuvo poco personal, y el año pasado se excedió en el gasto en agentes temporales.

La analista de servicio, a la que se pide mejorar la previsión, empieza por la decisión: cuántos agentes reservar con seis semanas de antelación, en pasos de cinco, con un ajuste final dos semanas antes. Construye una línea base: para cada día de los últimos cuatro años, el número de contactos en relación con los días que faltan para el plazo, escalado por el número de solicitantes hasta el momento. Con datos reservados del año anterior, el error de la línea base en la semana pico es del 18 por ciento. Prueba un modelo más complejo que añade el clima, las menciones en redes sociales y el día de la semana. Con el mismo año reservado, mejora el error al 15 por ciento, pero con el año anterior es peor que la línea base, y nadie puede explicar por qué. Elige la línea base con un ajuste simple por el número de nuevos solicitantes y muestra a la jefa un rango: de 11.000 a 14.500 contactos en la semana pico, lo más probable 12.500.

Pregunta al negocio por los sucesos conocidos. Un nuevo formulario en línea se lanzará dos semanas antes del plazo, lo que podría aumentar o reducir los contactos. Construye dos escenarios: uno en el que el formulario reduce los contactos un 15 por ciento y otro en el que añade un 10 por ciento por confusión. La jefa reserva para la mitad del rango, con un grupo de agentes de guardia para el escenario superior. La analista registra la previsión, los escenarios y la decisión.

Qué cambia: los contactos reales de la semana pico son 13.800, dentro del rango, y el centro cumple su meta sin excederse en el gasto. Qué sigue siendo difícil: el lanzamiento del formulario sí añadió confusión, algo que solo anticipó el escenario superior; la previsión depende de datos sobre los solicitantes que llegan tarde; y un directivo pidió una cifra única, que la analista dio junto con el rango. Registra el error, un 10 por ciento respecto al valor más probable, y planea compararlo con la línea base y con el del año próximo.

## Cuatro perspectivas

### Equipos de producto y de entrega

Avisen pronto a los analistas de lanzamientos, cambios y campañas, ya que mueven la demanda y el riesgo. Proporcionen los datos que necesitan las predicciones y usen las puntuaciones de riesgo como incentivos para hacer preguntas, no como veredictos.

### Equipos de servicio y de operaciones

Usen las previsiones para planificar la dotación y la capacidad, con un margen para el escenario superior. Informen de dónde fallaron las previsiones y por qué, para que el método mejore.

### Liderazgo y gobernanza

Pida la decisión, la línea base, el rango y el historial de exactitud. Acepte la incertidumbre. Financie los datos y el tiempo para comprobar las previsiones. No exija cifras únicas.

### Clientes y usuarios

Usted se beneficia cuando los proveedores se preparan para los picos y los riesgos. Informe al proveedor de sus propios planes que puedan afectar a la demanda, como campañas, y comunique los problemas que sugieran que una previsión erró.

## Ágil, IA, automatización y analítica

### Ágil

Trate las previsiones como hipótesis, renuévelas con frecuencia y compruébelas tras cada periodo. Involucre a las partes interesadas en los supuestos. Precaución: reprever constantemente sin registrar las previsiones anteriores oculta lo equivocadas que estaban.

### IA

Los métodos de IA pueden modelar muchas variables y señales no estructuradas y pueden redactar resúmenes de las previsiones, bajo revisión. Nombre un responsable, compare con las líneas base y vigile la deriva. Precaución: una previsión de IA sin un rango ni una prueba con datos reservados es una conjetura con una superficie pulida. Véase el Tema 5.1 — IA en la gestión de servicios.

### Automatización

Automatice la recogida de datos, las ejecuciones de previsiones y las alertas programadas y, donde sea seguro, acciones como escalar antes de la carga esperada, con límites. Precaución: una acción automática sobre una previsión errónea puede desperdiciar dinero o causar daño; fije límites y revise. Véase el Tema 6.1 — Estrategia de automatización.

### Analítica

Mida el error de las previsiones, la cobertura de los intervalos, la calibración de las puntuaciones de riesgo y el valor de las decisiones tomadas. Precaución: un modelo con un error medio bajo puede fallar en los picos que más importan; evalúe donde los errores cuestan más. Véanse el libro *Service Management Metrics* y el Tema 7.1 — Analítica para la gestión de servicios.

## Modos de fallo habituales

- **Previsiones que no cambian nada.** Ninguna decisión depende de ellas. Parta de la decisión.
- **Modelo complejo, sin línea base.** No lo hace mejor que uno simple. Compare siempre.
- **Sobreajuste y fuga de información.** Grandes resultados de prueba, mala realidad. Reserve datos posteriores y compruebe las entradas.
- **Cifras únicas.** Falsa precisión. Muestre rangos y escenarios.
- **Ignorar sucesos conocidos.** Un modelo pasa por alto un lanzamiento. Añada lo que sabe la gente.
- **Sin vigilancia.** La deriva pasa inadvertida. Siga la exactitud a lo largo del tiempo.
- **Confiar en las predicciones de sucesos raros.** Un riesgo de cola se valora mal. Use escenarios y ensayos.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Decisiones y líneas base | Conjeturas | Algunas previsiones | Previsiones ligadas a decisiones con nombre, con líneas base | Valor de las previsiones revisado | Previsiones integradas en la planificación entre servicios |
| Método y validación | Sin comprobar | Métodos básicos | Métodos explicables, backtesting y comprobaciones de fuga | Métodos comparados y mejorados | Métodos seleccionados y vigilados en una cartera |
| Incertidumbre | Cifras únicas | Algunos rangos | Rangos y escenarios como norma | Cobertura de intervalos y calibración medidas | Incertidumbre usada en decisiones automatizadas con límites |
| Vigilancia | Ninguna | Revisión ocasional | Exactitud y deriva seguidas | Reentrenamiento y reconstrucción activados por la evidencia | Evaluación continua entre modelos |

## Lista de verificación

- [ ] Cada previsión nombra la decisión y los umbrales a los que informa.
- [ ] Comparamos cada modelo con una línea base simple.
- [ ] Validamos con datos posteriores reservados y comprobamos si hay fuga de información.
- [ ] Informamos rangos y usamos escenarios donde los sucesos podrían cambiar los patrones.
- [ ] Los sucesos conocidos del negocio se incluyen o se registran como ajustes.
- [ ] Las puntuaciones de riesgo tienen un umbral fijado según el costo de las falsas alarmas y las omisiones, y comprobamos la calibración.
- [ ] Registramos las previsiones, las comparamos con los resultados y vigilamos la deriva.
- [ ] Usamos escenarios y ensayos para los sucesos raros y graves.

## Prompts de IA

**Construya una línea base a partir de datos.**

```text
Here is a monthly count of [quantity] for the last [number] years: [paste].
Describe the trend and seasonal pattern, produce a simple baseline forecast for the next [period] (state the method and show the calculation), and give an approximate range based on the spread in past years. Do not use any method that needs data I have not provided.
List what you are unsure of.
```

**Revise un informe de previsión.**

```text
Here is a forecast report and how it was built: [paste].
List problems: no baseline comparison, no validation on held-back data, possible leakage, single numbers without ranges, missing known events, and claims that are stronger than the evidence. Quote the text for each. Do not redo the forecast.
List what you are unsure of.
```

**Redacte escenarios.**

```text
The decision: [describe]. The uncertain event: [describe]. What we know: [list].
Draft three scenarios (low, middle, high) with the assumption behind each, what we would see early if it were happening, and how our plan would differ. Do not assign probabilities.
List what you are unsure of.
```

## Habilidades de IA

- [demand-forecasting](../../../../skills/demand-forecasting/SKILL.md): úsela para estimar la demanda futura con incertidumbre declarada.
- [capacity-planning](../../../../skills/capacity-planning/SKILL.md): úsela para convertir las previsiones en decisiones de capacidad.
- [trend-analysis](../../../../skills/trend-analysis/SKILL.md): úsela para analizar tendencias y estacionalidad.
- [statistical-analysis](../../../../skills/statistical-analysis/SKILL.md): úsela para elegir y comprobar métodos.
- [budget-forecasting](../../../../skills/budget-forecasting/SKILL.md): úsela para pronosticar costos con supuestos.

## Fuentes principales

- Rob J. Hyndman y George Athanasopoulos, *Forecasting: Principles and Practice* (gratis en línea en otexts.com/fpp3): un texto claro y práctico sobre métodos de previsión.
- Nate Silver, *The Signal and the Noise* (2012): un relato legible sobre la predicción y sus trampas.
- Wikipedia, "Forecasting" y "Overfitting": visiones generales del campo y de su principal trampa.
- Wikipedia, "Prediction interval": cómo expresar la incertidumbre.

## Referencias

1. Forecasting — Wikipedia — https://en.wikipedia.org/wiki/Forecasting
2. Predictive analytics — Wikipedia — https://en.wikipedia.org/wiki/Predictive_analytics
3. Time series — Wikipedia — https://en.wikipedia.org/wiki/Time_series
4. Seasonality — Wikipedia — https://en.wikipedia.org/wiki/Seasonality
5. Exponential smoothing — Wikipedia — https://en.wikipedia.org/wiki/Exponential_smoothing
6. Autoregressive integrated moving average — Wikipedia — https://en.wikipedia.org/wiki/Autoregressive_integrated_moving_average
7. Overfitting — Wikipedia — https://en.wikipedia.org/wiki/Overfitting
8. Backtesting — Wikipedia — https://en.wikipedia.org/wiki/Backtesting
9. Prediction interval — Wikipedia — https://en.wikipedia.org/wiki/Prediction_interval
10. Scenario planning — Wikipedia — https://en.wikipedia.org/wiki/Scenario_planning
11. Concept drift — Wikipedia — https://en.wikipedia.org/wiki/Concept_drift
12. Base rate fallacy — Wikipedia — https://en.wikipedia.org/wiki/Base_rate_fallacy
