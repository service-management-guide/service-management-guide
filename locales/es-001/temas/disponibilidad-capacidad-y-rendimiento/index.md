# Disponibilidad, Capacidad y Rendimiento

**La gestión de la disponibilidad, la capacidad y el rendimiento mantiene un servicio utilizable, lo bastante grande y lo bastante rápido para la demanda que afronta; funciona cuando las metas provienen de las necesidades de los usuarios, los riesgos se eliminan por diseño mediante redundancia y pruebas, y los pronósticos se contrastan con la realidad en lugar de darse por buenos.**

## Por qué importa

Los usuarios juzgan un servicio por tres cosas antes que por cualquier otra: ¿puedo usarlo?, ¿aguanta cuando lo usa mucha gente?, ¿es rápido? Los fallos en cualquiera de ellas se manifiestan como trabajo perdido, compras abandonadas y llamadas airadas. Sin embargo, las tres son fáciles de descuidar hasta un mal día: un lanzamiento que duplica el tráfico, un plazo que manda a todos al sistema en la última hora, el fallo de un único componente del que nadie se dio cuenta de que dependía todo.

Estas prácticas existen para evitar esos malos días pensando en ellos por adelantado. Preguntan cuánto fallo puede tolerar el servicio y cuánto cuesta, cuánta demanda debe atender y cómo crecerá esa demanda, y con qué rapidez debe responder. Responden con decisiones de diseño como la redundancia, con pruebas que encuentran los límites antes que los usuarios y con pronósticos que se comprueban y actualizan.

ITIL 4 describe tres prácticas relacionadas: la gestión de la disponibilidad, la gestión de la capacidad y el rendimiento y, muy ligada a ellas, la gestión de la continuidad del servicio (Tema 3.12 — Gestión de la Continuidad del Servicio). Los equipos de ingeniería las conocen como ingeniería de fiabilidad, ingeniería de rendimiento y planificación de la capacidad, con SLO y presupuestos de errores (Tema 2.6 — Ingeniería de Fiabilidad de Sitios). Este tema reúne las ideas y explica cómo usarlas sin excesos: más disponibilidad no siempre es mejor, porque cada nueve adicional cuesta más. Se conecta con la gestión de niveles de servicio (Tema 3.7 — Gestión de Niveles de Servicio) y con la monitorización (Tema 3.10 — Monitorización y Gestión de Eventos).

## Conceptos clave

**Disponibilidad.** La capacidad de un servicio de cumplir su función acordada cuando se requiere. Wikipedia describe la disponibilidad como la proporción de tiempo en que un sistema funciona. Suele expresarse como porcentaje a lo largo de un periodo, como el 99,9 por ciento en un mes, lo que permite unos 43 minutos de inactividad. La cifra solo tiene sentido cuando se define qué significa «funcionar» para los usuarios.

**Fiabilidad y mantenibilidad.** La fiabilidad es cuánto tiempo funciona un servicio sin fallar; la mantenibilidad es la rapidez con que puede restablecerse. La disponibilidad depende de ambas. Los artículos de Wikipedia sobre ingeniería de fiabilidad y sobre el tiempo medio entre fallos (MTBF) describen las medidas. En muchos servicios modernos, la recuperación rápida es más alcanzable que el fallo raro.

**Redundancia y puntos únicos de fallo.** Redundancia significa tener componentes de repuesto para que un fallo no detenga el servicio. Un punto único de fallo es un componente cuyo fallo lo detiene todo. Los artículos de Wikipedia sobre la redundancia y los puntos únicos de fallo describen las ideas. Encontrar los puntos únicos de fallo, incluidos personas, proveedores y certificados que caducan, es una tarea central de la disponibilidad.

**Tolerancia a fallos y degradación elegante.** Un sistema tolerante a fallos sigue funcionando cuando fallan partes; uno que se degrada con elegancia pierde alguna función pero conserva su núcleo. Por ejemplo, un sitio de compras podría desactivar las recomendaciones pero seguir procesando pedidos. Diseñe para lo segundo donde la tolerancia total sea demasiado costosa.

**Conmutación por error (failover).** Pasar a un componente en espera cuando falla el principal. Debe probarse; la conmutación por error sin probar suele fallar cuando hace falta. Véase el Tema 3.12 — Gestión de la Continuidad del Servicio.

**Capacidad.** El máximo rendimiento que un servicio puede ofrecer. La gestión de la capacidad se asegura de que haya suficiente, y no mucho más que suficiente, para atender la demanda actual y futura a un costo acordado. El artículo de Wikipedia sobre la planificación de la capacidad la describe.

**Demanda.** La carga impuesta al servicio: usuarios, solicitudes, volumen de datos. La demanda varía por hora, día, temporada y evento, y se ve afectada por lanzamientos, campañas y sucesos externos. Entender el patrón importa más que el promedio.

**Escalabilidad y escalado automático.** La capacidad de manejar más carga añadiendo recursos. Las plataformas en la nube permiten un escalado automático que añade capacidad cuando sube la carga. Ayuda, pero no elimina la necesidad de planificar: tiene límites, cuesta dinero y no arregla una base de datos que no escala. Véase el Tema 4.5 — Gestión financiera y FinOps.

**Rendimiento.** Con qué rapidez y eficiencia responde el servicio. Las medidas comunes son la latencia (cuánto tarda una solicitud), el rendimiento (cuántas solicitudes se atienden) y la tasa de error. Wikipedia describe la latencia en ingeniería. Los usuarios notan la cola lenta, así que mire percentiles, como el 95, y no solo el promedio. Véase el Tema 3.7 — Gestión de Niveles de Servicio.

**Colas y saturación.** A medida que un sistema se acerca al uso total, el tiempo de espera crece bruscamente. La teoría de colas, descrita en Wikipedia, explica por qué un servicio que opera al 95 por ciento de su capacidad se siente muy distinto de uno al 60 por ciento. Deje margen.

**Ingeniería y pruebas de rendimiento.** Diseñar y probar el rendimiento durante todo el desarrollo, no solo al final. Las pruebas de carga aplican la demanda esperada; las pruebas de estrés la superan para encontrar puntos de ruptura. Wikipedia describe ambas. Pruebe en un entorno parecido a producción, con datos realistas.

**Pronóstico.** Estimar la demanda futura a partir del historial, los eventos conocidos y el crecimiento. Wikipedia describe métodos de pronóstico. Los pronósticos son inciertos: registre los supuestos, muestre rangos y compare las predicciones con lo que ocurre. Véase el Tema 7.5 — Analítica predictiva y previsión.

**Compromisos de costo.** Cada aumento de disponibilidad o de capacidad cuesta dinero. El nivel adecuado depende del costo del fallo y de la lentitud para el negocio. Haga explícito el compromiso con quienes pagan y escríbalo.

**Cómo encajan las lentes.** La práctica ágil trata el trabajo de fiabilidad como parte del backlog y prueba pronto y a menudo. La IA puede detectar anomalías y apoyar el pronóstico, bajo revisión. La automatización escala recursos y conmuta por error. La analítica proporciona los datos para las tres prácticas.

## Buenas prácticas

1. **Fije metas de disponibilidad a partir de la necesidad del usuario.** Pregunte qué ocurre cuando el servicio está caído una hora, un día, una semana. Fije una meta, y un costo, que correspondan. Escriba la definición de «disponible» desde el punto de vista del usuario.
2. **Encuentre los puntos únicos de fallo.** Mapee los componentes y dependencias de los servicios importantes y pregunte qué ocurre si falla cada uno. Incluya certificados, licencias, personas y proveedores.
3. **Diseñe para el fallo.** Use redundancia donde el costo esté justificado, haga que los componentes fallen de forma independiente y decida qué se puede apagar para proteger el núcleo.
4. **Pruebe la conmutación por error y la recuperación.** Ensaye las conmutaciones en un entorno seguro y registre el tiempo que llevan. Corrija lo que revele el ensayo.
5. **Conozca su patrón de demanda.** Recoja datos de carga por hora, día y temporada, y enumere los próximos eventos conocidos, como lanzamientos y plazos. Planifique para los picos, no para los promedios.
6. **Deje margen.** No haga funcionar componentes importantes cerca de su capacidad total. Fije umbrales de alerta que avisen a tiempo para actuar.
7. **Pruebe el rendimiento antes que los usuarios.** Ejecute pruebas de carga y estrés con escenarios realistas antes de las liberaciones importantes y antes de los picos conocidos. Aprenda dónde se rompe el sistema.
8. **Pronostique y compruebe.** Haga un pronóstico con sus supuestos, revíselo con regularidad frente a lo real y ajústelo. Comparta rangos, no cifras únicas.
9. **Vigile la cola.** Informe la latencia por percentiles y las tasas de error, e investigue las solicitudes más lentas. Los promedios ocultan la experiencia de los usuarios con mala suerte.
10. **Sopese costo y riesgo abiertamente.** Muestre a los responsables el costo de cada nivel de disponibilidad y capacidad, y registre la decisión y quién la tomó.

## Preguntas para conversar con su equipo

**¿Qué perderían nuestros usuarios si este servicio estuviera caído una hora y nuestra meta se corresponde con eso?**
Esto vincula las metas con el impacto. Espere que usuarios distintos den respuestas distintas. Pida ejemplos reales. Después escriban la meta con un costo y compruébenla con un cliente.

**¿Cuáles son nuestros puntos únicos de fallo, incluidos los que no son máquinas?**
Dibujen las dependencias de un servicio crítico. Espere sorpresas: un certificado que nadie sigue, un único ingeniero, un proveedor sin respaldo. Después elijan uno para reducir.

**¿Cuándo probamos por última vez la conmutación por error y qué ocurrió?**
Pida la fecha y el resultado. Espere «nunca» o «funcionó en el entorno de pruebas». Después planifiquen un ensayo con un tiempo de recuperación declarado.

**¿Cuál es la hora de más actividad del año para este servicio y estamos preparados?**
Piensen en plazos, lanzamientos y rebajas. Pregunte qué ocurrió la última vez. Después planifiquen una prueba de carga para el siguiente pico.

**¿Qué precisión tuvieron nuestros tres últimos pronósticos de capacidad?**
Esto prueba el aprendizaje. Espere que nadie lo comprobara. Comparen los pronósticos con lo real. Después acuerden un ciclo de revisión y registren los supuestos.

**¿Cómo podría ayudar la IA a pronosticar la demanda o a detectar problemas pronto y cómo sabríamos que se equivocó?**
La IA puede encontrar patrones en la telemetría. También puede ajustar ruido. Pregunte quién es su responsable y con qué se comparará. Después ejecuten un pronóstico de IA junto con el método existente durante un trimestre.

## En la práctica: un ejemplo de gestión de servicios

Una agencia nacional de préstamos estudiantiles opera un portal de solicitudes. Durante la mayor parte del año atiende unos pocos miles de usuarios al día. En los dos últimos días antes del plazo anual de solicitud, atiende bastante más de cien veces esa cifra. Hace dos años se cayó en la última tarde; el año pasado sobrevivió con escalado de emergencia y una noche de horas extra.

La responsable del servicio empieza en enero, mucho antes del siguiente plazo. Pide los datos de tráfico de los tres últimos años, hora por hora, y encuentra una forma constante: un ascenso lento durante la última semana, un ascenso brusco el último día y un pico en las tres últimas horas. Pide al equipo que identifique los puntos únicos de fallo. Descubren que el portal depende de un servicio de verificación de identidad operado por un proveedor con un límite de frecuencia fijo, que limitaría el rendimiento a alrededor de la mitad del pico esperado.

El equipo hace tres cosas. Negocia un límite de frecuencia mayor con el proveedor y obtiene un aumento temporal para la última semana. Ejecuta pruebas de carga en marzo y en junio con el patrón del año anterior más un 30 por ciento, y descubre que la base de datos se convierte en el cuello de botella en torno al 70 por ciento del pico esperado, lo que corrige añadiendo una réplica de lectura y almacenando en caché algunas consultas costosas. Y prepara un modo degradado: el último día, las funciones no esenciales, como la calculadora de ahorros, se desactivan si la carga supera un umbral.

El día del plazo, el portal aguanta el pico. El servicio de identidad se vuelve lento en la hora de más actividad pero no falla, y el modo degradado se activa una vez, durante 40 minutos. Qué cambia: ninguna caída ni crisis de horas extra. Qué sigue siendo difícil: el límite del proveedor es una cuestión contractual que se restablece cada año; el pronóstico de un aumento del 30 por ciento fue un supuesto, y el aumento real fue del 22 por ciento, de modo que quizá el equipo gastó de más; y nadie ha probado el fallo completo de una región, que aún detendría el servicio. La responsable lo anota en el plan del próximo año.

## Cuatro perspectivas

### Equipos de producto y de entrega

Diseñen para el fallo y para la carga: hagan independientes los componentes, prueben el rendimiento a medida que construyen y conozcan sus límites. Incluyan modos degradados y límites de frecuencia en el diseño.

### Equipos de servicio y de operaciones

Conozcan el patrón de demanda y el margen de capacidad. Ensayen la conmutación por error, vigilen la cola lenta y avisen pronto de las tendencias. Mantengan al día el mapa de dependencias.

### Liderazgo y gobernanza

Decida los niveles de disponibilidad y capacidad con atención al costo y al riesgo, y pida la evidencia que los respalda. Financie las pruebas y los ensayos, no solo el equipamiento. Esté atento a los picos conocidos.

### Clientes y usuarios

Diga al proveedor cuáles son sus periodos de mayor actividad y qué le cuesta un fallo. Pregunte qué nivel de disponibilidad se planea y qué ocurre cuando no se cumple.

## Ágil, IA, automatización y analítica

### Ágil

Incluya el trabajo de fiabilidad y rendimiento en el backlog, pruebe pronto y a menudo en el pipeline y aprenda de cada incidente y pico. Precaución: dejar la fiabilidad para «más tarde» acumula una deuda que aflora en el peor momento.

### IA

La IA puede detectar anomalías, pronosticar la demanda a partir del historial y los eventos y sugerir acciones de escalado, con responsables y decisiones humanas sobre costo y riesgo. Precaución: un modelo entrenado con días normales puede fallar ante sucesos sin precedentes; compárelo con líneas base simples y mantenga a una persona responsable. Véase el Tema 5.2 — AIOps.

### Automatización

Automatice el escalado, la conmutación por error, las comprobaciones de salud y las pruebas de carga en el pipeline, con límites y registros. Precaución: el escalado automático puede disparar los costos u ocultar una liberación defectuosa; fije presupuestos y alertas y pruebe las reglas de escalado. Véase el Tema 6.6 — Automatización de runbooks y autorremediación.

### Analítica

Recoja la demanda, la utilización, los percentiles de latencia, las tasas de error y la precisión de los pronósticos. Precaución: las metas de utilización pueden manipularse moviendo carga, y los promedios ocultan la cola lenta; contraste con datos de experiencia de usuario. Véanse el Tema 7.5 — Analítica predictiva y previsión y el libro *Service Management Metrics*.

## Modos de fallo habituales

- **Metas por costumbre.** Se prometen los «cinco nueves» sin motivo. Fije las metas según la necesidad del usuario y el costo.
- **Puntos únicos de fallo ocultos.** Un certificado o una persona lo detienen todo. Mapee las dependencias con amplitud.
- **Conmutación por error sin probar.** Falla cuando hace falta. Ensaye con regularidad.
- **Planificar para los promedios.** Los picos desbordan el sistema. Planifique para los picos conocidos y deje margen.
- **Pronósticos que nunca se comprueban.** Los errores se repiten. Compare las predicciones con lo real.
- **El escalado automático como panacea.** Los costos y los cuellos de botella permanecen. Pruebe los límites y fije presupuestos.
- **Solo promedios.** Se ignora la cola lenta. Informe percentiles.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Disponibilidad | Reactiva | Metas para servicios clave | Metas, redundancia y conmutación por error probadas | Disponibilidad medida frente a la experiencia del usuario | Disponibilidad diseñada y gestionada entre servicios y proveedores |
| Capacidad | Se añade cuando se acaba | Monitorización básica | Patrones de demanda conocidos y pronosticados con supuestos | Precisión de los pronósticos revisada | Capacidad planificada y ajustada automáticamente con supervisión |
| Rendimiento | Solo quejas | Algunas medidas | Metas por percentiles y pruebas de carga antes de las liberaciones | Tendencias y regresiones de rendimiento seguidas | Rendimiento diseñado a lo largo del ciclo de vida |
| Conciencia del costo | Desconocido | Conocido aproximadamente | Compromisos documentados con los responsables | Costo y riesgo revisados con regularidad | Costo, riesgo y fiabilidad optimizados en conjunto |

## Lista de verificación

- [ ] Las metas de disponibilidad se basan en la necesidad del usuario y el costo, con una definición clara.
- [ ] Los puntos únicos de fallo de los servicios importantes están mapeados y seguidos.
- [ ] La conmutación por error se ha ensayado y cronometrado.
- [ ] Conocemos nuestro patrón de demanda y los picos próximos.
- [ ] Realizamos pruebas de carga antes de las liberaciones importantes y los picos conocidos.
- [ ] Los pronósticos registran supuestos y se comprueban frente a lo real.
- [ ] Informamos la latencia por percentiles y las tasas de error.
- [ ] Los compromisos de costo y riesgo se registran con sus responsables.

## Prompts de IA

**Encuentre puntos únicos de fallo.**

```text
Here is a description of how [service] works and what it depends on: [paste].
List each component and dependency, and for each one say what the description implies would happen if it failed, or "not stated". Mark candidate single points of failure and questions to ask. Do not assume redundancy that is not described.
List what you are unsure of.
```

**Resuma los patrones de demanda.**

```text
Here is hourly request data for [period]: [paste summary or data].
Describe the daily, weekly, and seasonal patterns you can see, give the peak-to-average ratio, and list dates that look unusual. Do not forecast.
List what you are unsure of.
```

**Redacte un plan de prueba de carga.**

```text
Our service: [describe]. Expected peak: [number and pattern]. Known limits or concerns: [list].
Draft a test plan with scenarios, load levels, what to measure, what would make us stop, and risks of testing. Specify that it is run only in a safe environment.
List what you are unsure of.
```

## Habilidades de IA

- [capacity-planning](../../../../skills/capacity-planning/SKILL.md): úsela para pronosticar la demanda y planificar recursos.
- [load-testing](../../../../skills/load-testing/SKILL.md): úsela para diseñar y ejecutar pruebas de carga.
- [performance-testing](../../../../skills/performance-testing/SKILL.md): úsela para examinar la velocidad y la capacidad de respuesta.
- [demand-forecasting](../../../../skills/demand-forecasting/SKILL.md): úsela para estimar la demanda futura con incertidumbre declarada.
- [chaos-testing](../../../../skills/chaos-testing/SKILL.md): úsela para probar cómo se propagan los fallos.

## Fuentes principales

- Betsy Beyer y otros (eds.), *Site Reliability Engineering* (2016): capítulos sobre la gestión de la sobrecarga y el balanceo de carga, gratis en sre.google.
- PeopleCert, páginas de certificación ITIL: la descripción del propietario de las prácticas de disponibilidad y capacidad.
- Wikipedia, "High availability" y "Capacity planning": visiones generales de las ideas principales.
- Wikipedia, "Queueing theory": las matemáticas detrás de la espera y la saturación.

## Referencias

1. Availability — Wikipedia — https://en.wikipedia.org/wiki/Availability
2. High availability — Wikipedia — https://en.wikipedia.org/wiki/High_availability
3. Capacity planning — Wikipedia — https://en.wikipedia.org/wiki/Capacity_planning
4. Reliability engineering — Wikipedia — https://en.wikipedia.org/wiki/Reliability_engineering
5. Mean time between failures — Wikipedia — https://en.wikipedia.org/wiki/Mean_time_between_failures
6. Single point of failure — Wikipedia — https://en.wikipedia.org/wiki/Single_point_of_failure
7. Redundancy (engineering) — Wikipedia — https://en.wikipedia.org/wiki/Redundancy_(engineering)
8. Load testing — Wikipedia — https://en.wikipedia.org/wiki/Load_testing
9. Queueing theory — Wikipedia — https://en.wikipedia.org/wiki/Queueing_theory
10. Forecasting — Wikipedia — https://en.wikipedia.org/wiki/Forecasting
11. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
