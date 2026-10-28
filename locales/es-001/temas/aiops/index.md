# AIOps

**AIOps aplica el aprendizaje automático a los datos de operaciones para reducir el ruido de las alertas, encontrar anomalías, correlacionar eventos y sugerir causas; da resultado cuando se prueba contra incidentes pasados, se mantiene explicable para las personas que responden y se trata como un asistente del personal de guardia, no como un sustituto del criterio.**

## Por qué importa

Los equipos de operaciones se ahogan en datos. Un servicio moderno emite millones de líneas de registro, miles de métricas y cientos de alertas cada día. Las personas no pueden leerlo todo, así que fijan umbrales y reglas para decidir qué mirar. Las reglas crecen, interactúan y se deterioran. La mayoría de las alertas resultan ser ruido, y algunos problemas reales se esconden entre ellas.

AIOps, un término acuñado por la firma de analistas Gartner a mediados de la década de 2010 a partir de «algorithmic IT operations» y hoy entendido en general como «IA para las operaciones de TI», promete ayudar. Usa el aprendizaje automático para aprender qué es normal, notar cuándo algo no lo es, agrupar alertas relacionadas en un solo evento y sugerir dónde podría estar la causa. Wikipedia describe AIOps como la aplicación de la inteligencia artificial para mejorar las operaciones de TI. Los proveedores la presentan en términos rotundos. Los profesionales informan de ganancias reales en algunos usos, como la reducción del ruido, y de decepción en otros, como el diagnóstico totalmente automático.

Para la gestión de servicios, la pregunta es práctica: qué partes de AIOps dan un valor fiable, cómo se comprueban y cómo se mantiene a las personas al mando. Este tema describe las principales técnicas, sus modos de fallo típicos y un camino sensato de adopción. Se apoya en la monitorización (Tema 3.10 — Monitorización y Gestión de Eventos) y la observabilidad (Tema 7.4 — Observabilidad y telemetría), y se solapa con la gestión de incidentes (Tema 3.2 — Gestión de Incidentes) y la automatización de runbooks (Tema 6.6 — Automatización de runbooks y autorremediación).

## Conceptos clave

**AIOps.** El uso de técnicas de IA, sobre todo aprendizaje automático y estadística, sobre datos de operaciones para apoyar tareas como la detección de anomalías, la correlación de eventos, la sugerencia de causas raíz y la predicción. Es un conjunto de técnicas, no un único producto, y las capacidades varían mucho.

**Detección de anomalías.** Encontrar puntos de datos o patrones que difieren de lo esperado. Wikipedia describe la detección de anomalías y sus métodos. En operaciones, un modelo podría aprender el patrón diario y semanal normal de solicitudes y señalar las desviaciones. Lo normal no es constante: la estacionalidad, descrita en Wikipedia, significa que una mañana de lunes se ve distinta de una noche de domingo. Los buenos detectores la tienen en cuenta.

**Series temporales.** Datos registrados a lo largo del tiempo, como tiempos de respuesta o recuentos de errores. Wikipedia describe el análisis de series temporales. La mayoría de las métricas de operaciones son series temporales, y las técnicas de AIOps se apoyan en métodos para modelarlas y pronosticarlas.

**Correlación de eventos y reducción de ruido.** Combinar las alertas que provienen de una causa en un solo incidente y suprimir duplicados y ruido conocido. Wikipedia describe la correlación de eventos. Las técnicas de agrupamiento, descritas en Wikipedia como análisis de conglomerados, agrupan elementos por similitud. Una buena correlación convierte doscientas alertas en una, con la fuente probable nombrada.

**Sugerencia de causa raíz.** Usar la topología, los registros de cambios, los registros y los incidentes pasados para proponer dónde probablemente está un fallo. Las sugerencias son hipótesis. Son más útiles cuando apuntan a un cambio reciente o a una dependencia y menos fiables cuando la causa es nueva.

**Operaciones predictivas.** Pronosticar los problemas antes de que ocurran, como un disco que se llenará en tres días o un componente con probabilidad de fallar. Wikipedia describe el mantenimiento predictivo y la analítica predictiva. Las predicciones son probabilidades, y cada una tiene un costo por falsas alarmas y por omisiones. Véase el Tema 7.5 — Analítica predictiva y previsión.

**Análisis de registros.** Usar técnicas de procesamiento del lenguaje natural y estadística para encontrar patrones en los registros, como nuevos tipos de mensaje o cambios de frecuencia. Wikipedia describe el análisis de registros.

**IA generativa en operaciones.** Los grandes modelos de lenguaje pueden resumir cronologías de incidentes, traducir alertas a lenguaje sencillo, redactar pasos de runbooks y responder preguntas sobre el entorno. Aportan flexibilidad y el riesgo de contenido inventado. Véase el Tema 5.4 — IA generativa para incidentes, conocimiento y cambios.

**Precisión, exhaustividad y costos de los errores.** Un detector puede equivocarse de dos maneras: puede lanzar una falsa alarma (un falso positivo) o pasar por alto un problema real (un falso negativo). Wikipedia describe ambos tipos de error y las medidas de precisión y exhaustividad. Ajustar para reducir uno aumenta el otro. El equilibrio adecuado depende del costo de cada uno, y servicios distintos merecen ajustes distintos.

**Deriva conceptual.** Los modelos aprenden de datos pasados, y el mundo cambia: nuevas versiones, nuevos patrones de tráfico, nueva infraestructura. Wikipedia describe la deriva conceptual, en la que las propiedades estadísticas de lo que se predice cambian con el tiempo. Un modelo preciso en enero puede engañar en junio si no se monitoriza y se reentrena.

**Explicabilidad.** Quienes responden confiarán más en una sugerencia, y la corregirán de forma más útil, si pueden ver por qué se hizo: qué métricas se movieron, qué eventos se agruparon, qué cambio precedió al desplazamiento. Wikipedia describe la inteligencia artificial explicable y el problema de las cajas negras. Para operaciones, prefiera enfoques que muestren su evidencia.

**Calidad y cobertura de los datos.** AIOps necesita buenos datos: completos, coherentes, con marcas de tiempo correctas y etiquetados con servicios y responsables. Los datos ausentes o incoherentes producen señales perdidas y vínculos falsos. Véanse el Tema 4.4 — Gestión de la Configuración y el Tema 7.2 — Fundamentos y gobernanza de datos.

**Ideas autonómicas y de autorreparación.** El viejo objetivo de sistemas que detectan y corrigen sus propios fallos, descrito en Wikipedia como computación autonómica. Partes son prácticas hoy, como reiniciar un proceso que falla. La autorreparación amplia es mucho más difícil. Véase el Tema 6.6 — Automatización de runbooks y autorremediación.

**Supervisión humana.** Quien responde sigue siendo responsable. Las salidas de AIOps son entradas para una decisión humana, salvo que una acción definida con precisión se haya probado y aprobado para ejecutarse automáticamente. Véase el Tema 5.5 — IA agéntica y supervisión humana.

**Cómo encajan las lentes.** AIOps combina IA y analítica para la parte de operaciones de la gestión de servicios. La práctica ágil sugiere pruebas pequeñas en un servicio, con retroalimentación del personal de guardia. La automatización consume la salida de AIOps, por ejemplo para abrir un ticket o ejecutar una comprobación segura.

## Buenas prácticas

1. **Empiece con un dolor claro.** Elija un problema, como demasiadas alertas en un solo servicio, y una medida, como el número de avisos por turno. Pruebe AIOps ahí.
2. **Ponga primero en orden los datos.** Compruebe que los registros y las métricas están completos, las marcas de tiempo son coherentes y los servicios y responsables están etiquetados. Corrija las brechas antes de culpar al modelo.
3. **Pruebe contra incidentes pasados.** Reproduzca los datos históricos a través de la herramienta y pregunte qué habría señalado, agrupado o sugerido. Cuente las falsas alarmas y las omisiones.
4. **Compare con métodos simples.** Compare con umbrales fijos y reglas básicas. Si un método simple lo hace igual de bien, úselo. No pague por una complejidad que no añade nada.
5. **Prefiera salidas explicables.** Elija herramientas que muestren la evidencia detrás de una alerta o de una causa sugerida. Exija que quienes responden puedan verla y cuestionarla.
6. **Empiece en modo consultivo.** Deje que la herramienta sugiera y que las personas decidan. Revise las sugerencias frente a lo que realmente ocurrió durante unas semanas antes de darle ninguna acción automática.
7. **Limite las acciones automáticas.** Permita solo acciones acotadas, bien entendidas y reversibles, con límites de frecuencia, registros y una parada manual. Revise cada clase de acción antes de habilitarla.
8. **Monitorice los modelos.** Siga las falsas alarmas, las omisiones y la proporción de sugerencias que fueron útiles. Esté atento a la deriva tras las liberaciones importantes y reentrene o reconfigure cuando haga falta.
9. **Mantenga involucrado al personal de guardia.** Pídales que valoren las sugerencias en la herramienta y revise su retroalimentación cada semana. Son los mejores jueces de la utilidad.
10. **Registre lo suprimido.** Conserve un registro de las alertas que el sistema ocultó o fusionó y revise muestras con regularidad. La supresión es donde ocurren los peores fallos.

## Preguntas para conversar con su equipo

**¿Qué alertas desperdician más tiempo de guardia y arreglarían mejores reglas el problema antes que cualquier IA?**
Parta de los datos. Muchos problemas de ruido ceden a soluciones simples. Espere que unas pocas reglas expliquen la mayor parte del ruido. Después corrijan esas y luego reevalúen qué podría añadir la IA.

**Si la herramienta hubiera funcionado en nuestros tres últimos incidentes, ¿qué nos habría dicho y habría ayudado?**
Reproduzcan o simulen. Esperen resultados mixtos. Pregunten qué habría pasado por alto. Después elijan el tipo de incidente en el que la herramienta parece más prometedora.

**¿Cómo sabríamos que la herramienta suprimió una alerta real?**
Esto prueba la supervisión. Esperen «no lo sabríamos». Después acuerden un registro de eventos suprimidos, un muestreo regular y una regla sobre lo que nunca se suprime.

**¿Quién responde cuando una acción automática sale mal y cuáles son sus límites?**
Nombren un responsable y enumeren las acciones permitidas. Esperen respuestas vagas. Después escriban una lista breve de acciones permitidas sin aprobación, cada una con una reversión.

**¿Cómo detectaremos que el modelo se ha desviado tras una liberación importante o un cambio de tráfico?**
Pidan el plan. Esperen que no haya ninguno. Después elijan indicadores, como la tasa de falsas alarmas, y una fecha de revisión tras cada liberación importante.

**¿Qué querría el personal de guardia de esta herramienta y qué haría que dejara de confiar en ella?**
Pregúntenles directamente. Esperen respuestas prácticas sobre contexto y falsas alarmas. Después conviertan las respuestas en criterios de aceptación para el ensayo.

## En la práctica: un ejemplo de gestión de servicios

El equipo de operaciones de un servicio meteorológico nacional opera los pipelines de pronóstico y una API pública en un parque mixto de sistemas locales y en la nube. El personal de guardia recibe unas 300 alertas al día, la mayoría procedentes de unas pocas fuentes ruidosas. Un proveedor propone una plataforma AIOps con correlación automática y sugerencia de causas raíz.

El jefe de operaciones acepta un piloto con condiciones. Primero, el equipo limpia las 12 reglas más ruidosas, lo que elimina aproximadamente la mitad del volumen. Segundo, reproduce seis meses de datos, incluidos 14 incidentes, a través de la plataforma en modo consultivo. En la reproducción, la plataforma agrupa bien las alertas: el incidente medio que produjo 80 alertas aparece como tres grupos. Señala correctamente el primer indicio en nueve de los 14 incidentes, pasa por alto tres en los que el primer síntoma estaba en un registro y lanza falsas alarmas durante el reprocesamiento nocturno rutinario, que tiene un patrón que no ha aprendido.

El equipo la despliega en modo consultivo en un pipeline durante dos meses, con el personal de guardia valorando cada sugerencia como útil, neutral o errónea. Alrededor del 55 por ciento se valora como útil y el 15 por ciento como errónea, normalmente cuando la causa es un cambio reciente no registrado. Entonces se permite a la plataforma abrir tickets automáticamente para los incidentes agrupados, y nada más. El equipo mantiene una revisión semanal de las alertas suprimidas y, tras una liberación importante, descubre que la línea base del modelo para el tráfico ahora es errónea y hay que reentrenarla.

Qué cambia: el personal de guardia recibe muchas menos alertas y mejor agrupadas. Qué sigue siendo difícil: las sugerencias de la plataforma dependen de registros de cambios exactos, que están incompletos; es menos útil para fallos nuevos; y el precio del proveedor crece con el volumen de datos, por lo que el equipo limita lo que ingiere. El jefe planea ampliar el piloto a otro pipeline solo después de una nueva revisión de las omisiones.

## Cuatro perspectivas

### Equipos de producto y de entrega

Emitan buena telemetría: registros coherentes, métricas con etiquetas de servicio y registros de despliegues y cambios. Compartan el conocimiento del diseño con el equipo de operaciones y ayuden a comprobar las sugerencias de la herramienta sobre su servicio.

### Equipos de servicio y de operaciones

Usen la herramienta como asistente: valoren las sugerencias, revisen lo suprimido e informen de las omisiones. Mantengan simples las reglas donde funcionen y conserven la responsabilidad de las decisiones y acciones.

### Liderazgo y gobernanza

Pida resultados de pruebas de reproducción y de un piloto, no de una demostración. Fije límites a las acciones automáticas. Financie la calidad de los datos y la formación. Desconfíe de las afirmaciones de operaciones totalmente autónomas.

### Clientes y usuarios

Debería notar interrupciones menos frecuentes y más breves, no cambios en cómo se le comunican los problemas. Diga al proveedor si se pasó por alto un incidente antes de que usted lo notara.

## Ágil, IA, automatización y analítica

### Ágil

Pruebe en un servicio, con el personal de guardia dando retroalimentación frecuente, y amplíe por pasos. Revise las omisiones tras cada incidente y ajuste. Precaución: ajustar constantemente un modelo sin registrar los cambios hace imprevisible el comportamiento; mantenga un registro de cambios.

### IA

La propia herramienta es un sistema de IA con un responsable, datos de prueba y revisión. Trátela como cualquier otra: registre qué puede hacer, monitorícela y pruébela tras las actualizaciones. Precaución: los proveedores pueden cambiar los modelos sin aviso; pregunte cómo anuncian los cambios y pruebe con regularidad. Véase el Tema 5.6 — Gobernanza, riesgo y cumplimiento de la IA.

### Automatización

Conecte la salida de AIOps con acciones automatizadas acotadas y probadas, como crear tickets, recoger diagnósticos y reiniciar un proceso que falla de forma conocida, con límites y registros. Precaución: las acciones automáticas elegidas a partir de predicciones inciertas pueden empeorar un incidente; exija alta confianza y una reversión. Véase el Tema 6.6 — Automatización de runbooks y autorremediación.

### Analítica

Mida el volumen de alertas, la proporción útil, las falsas alarmas, las omisiones halladas en las revisiones de incidentes, el tiempo de detección y el tiempo de diagnóstico. Precaución: el volumen de alertas puede reducirse ocultando alertas reales; compare siempre con los incidentes y las omisiones. Véanse el Tema 7.4 — Observabilidad y telemetría y el libro *Service Management Metrics*.

## Modos de fallo habituales

- **Comprar una promesa.** La demostración del proveedor se toma como evidencia. Pruebe con sus propios datos mediante reproducción y un piloto.
- **Datos deficientes.** El modelo aprende de registros y etiquetas incoherentes. Corrija primero los datos.
- **Supresión sin revisión.** Se ocultan alertas reales. Registre y muestree lo suprimido.
- **Sugerencias opacas.** Quienes responden no pueden juzgarlas. Prefiera herramientas que muestren la evidencia.
- **Automatización prematura.** Se producen acciones erróneas a velocidad. Empiece en modo consultivo y limite las acciones.
- **Deriva del modelo ignorada.** La precisión se degrada en silencio. Monitorice y reentrene tras los cambios.
- **Complejidad sin beneficio.** Una regla simple bastaría. Compare con métodos simples.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Base de datos | Incoherente | Fuentes principales recogidas | Telemetría coherente, etiquetada y con responsable | Calidad de los datos medida y mejorada | Datos compartidos entre equipos y proveedores con gobernanza |
| Uso de la IA | Afirmaciones del proveedor | Piloto en un servicio | Uso consultivo con reproducción y retroalimentación | Resultados medidos y atendidos | IA integrada en las operaciones con supervisión |
| Automatización | Ninguna | Creación de tickets | Acciones acotadas y aprobadas con límites | Acciones revisadas y mejoradas | Automatización más amplia según el riesgo con control humano |
| Cuidado del modelo | Ninguno | Ajuste ad hoc | Monitorización de deriva y errores | Reentrenamiento ligado al cambio | Evaluación continua entre herramientas |

## Lista de verificación

- [ ] Elegimos un problema concreto y una medida para un piloto.
- [ ] Arreglamos lo peor de nuestro ruido de alertas con reglas simples primero.
- [ ] Probamos la herramienta con incidentes históricos y contamos omisiones y falsas alarmas.
- [ ] La comparamos con métodos simples.
- [ ] Las salidas son explicables para quienes responden.
- [ ] Funcionamos en modo consultivo antes de permitir ninguna acción.
- [ ] Las acciones automáticas son acotadas, registradas, con límite de frecuencia y reversibles.
- [ ] Monitorizamos la deriva y revisamos las alertas suprimidas.

## Prompts de IA

**Compruebe los resultados de una reproducción.**

```text
Here are the results of replaying [number] past incidents through our AIOps tool: for each, the first real symptom, what the tool flagged and when, and what it suggested: [paste].
Compute for each incident whether the tool flagged the problem before the first page, and list false alarms and misses. Summarize counts and note incidents where the data is unclear. Do not rate the tool overall.
List what you are unsure of.
```

**Revise las alertas suprimidas.**

```text
Here is a sample of alerts that the system suppressed or merged last week, with details: [paste sample].
For each, say whether the details suggest it was noise, a duplicate of another alert, or possibly a real problem, and give your reason. Mark those you cannot judge.
List what you are unsure of.
```

**Redacte criterios de aceptación para un piloto.**

```text
Our service: [describe]. Our current pain: [describe, with numbers if known]. Our constraints: [list].
Draft acceptance criteria for a two-month pilot of an AIOps tool: measures, thresholds we should agree beforehand, what would make us stop, and what automatic actions are not allowed. Do not state vendor claims as facts.
List what you are unsure of.
```

## Habilidades de IA

- [anomaly-analysis](../../../../skills/anomaly-analysis/SKILL.md): úsela para examinar patrones inusuales en los datos de operaciones.
- [trend-analysis](../../../../skills/trend-analysis/SKILL.md): úsela para ver cómo cambian las métricas con el tiempo.
- [data-quality](../../../../skills/data-quality/SKILL.md): úsela para comprobar las entradas de las que depende AIOps.
- [mlops](../../../../skills/mlops/SKILL.md): úsela para monitorizar y mantener los modelos en uso.
- [root-cause-analysis](../../../../skills/root-cause-analysis/SKILL.md): úsela para contrastar las causas sugeridas con la evidencia.

## Fuentes principales

- Betsy Beyer y otros (eds.), *Site Reliability Engineering* (2016), capítulo sobre la monitorización de sistemas distribuidos, gratis en sre.google: los fundamentos sobre los que se apoya AIOps.
- PeopleCert, páginas de certificación ITIL: la descripción del propietario de la práctica de monitorización y gestión de eventos.
- Wikipedia, "AIOps" y "Anomaly detection": visiones generales del término y de las técnicas.
- Wikipedia, "Concept drift": la principal razón por la que los modelos se degradan con el tiempo.

## Referencias

1. AIOps — Wikipedia — https://en.wikipedia.org/wiki/AIOps
2. Anomaly detection — Wikipedia — https://en.wikipedia.org/wiki/Anomaly_detection
3. Event correlation — Wikipedia — https://en.wikipedia.org/wiki/Event_correlation
4. Time series — Wikipedia — https://en.wikipedia.org/wiki/Time_series
5. Seasonality — Wikipedia — https://en.wikipedia.org/wiki/Seasonality
6. Cluster analysis — Wikipedia — https://en.wikipedia.org/wiki/Cluster_analysis
7. Precision and recall — Wikipedia — https://en.wikipedia.org/wiki/Precision_and_recall
8. Type I and type II errors — Wikipedia — https://en.wikipedia.org/wiki/Type_I_and_type_II_errors
9. Concept drift — Wikipedia — https://en.wikipedia.org/wiki/Concept_drift
10. Explainable artificial intelligence — Wikipedia — https://en.wikipedia.org/wiki/Explainable_artificial_intelligence
11. Predictive maintenance — Wikipedia — https://en.wikipedia.org/wiki/Predictive_maintenance
