# Monitorización y Gestión de Eventos

**La monitorización y la gestión de eventos vigilan los servicios para que la persona adecuada se entere pronto de los problemas reales y a nadie lo despierte el ruido; funcionan cuando las alertas describen lo que sienten los usuarios, cada alerta tiene una acción y el volumen de eventos se mantiene lo bastante bajo como para que la gente confíe en él.**

## Por qué importa

La primera señal de problemas debería venir de sus propios sistemas, no de un usuario. Esa es la promesa de la monitorización: la salud de un servicio se observa de forma continua y una desviación se detecta antes de que la mayoría de los usuarios la noten. En la práctica, muchos equipos descubren que los usuarios siguen informando primero de los problemas, mientras el equipo está sepultado bajo alertas en las que nadie actúa.

La diferencia entre ambas experiencias es de diseño. Una configuración de monitorización que lanza una alerta por cada umbral cruzado enseña a sus destinatarios a ignorar las alertas. Wikipedia lo describe como fatiga de alarmas, un fenómeno estudiado por primera vez en hospitales, donde el personal expuesto a demasiadas alarmas se insensibiliza y pasa por alto las importantes. Una configuración que mide lo que experimentan los usuarios, alerta solo cuando hace falta actuar y da contexto a quien responde convierte la monitorización en un sistema de alerta temprana.

La monitorización también tiene un papel mayor que detectar fallos. Proporciona los datos para la planificación de la capacidad, para el trabajo de rendimiento, para comprobar que una liberación está sana y para decidir qué mejorar. Este tema describe el vocabulario y las prácticas que distinguen la monitorización útil del ruido. Se vincula estrechamente con la gestión de incidentes (Tema 3.2 — Gestión de Incidentes), la disponibilidad y la capacidad (Tema 3.11 — Disponibilidad, Capacidad y Rendimiento) y la observabilidad (Tema 7.4 — Observabilidad y telemetría).

## Conceptos clave

**Monitorización.** Recoger, procesar y usar datos sobre el estado de los servicios y sus componentes. Wikipedia describe la monitorización de sistemas y de redes como las prácticas de vigilar los sistemas en busca de fallos y de rendimiento. La monitorización responde a preguntas conocidas: ¿está activo?, ¿es rápido?, ¿está lleno?

**Evento.** En ITIL 4, cualquier cambio de estado que tenga importancia para la gestión de un servicio u otro elemento de configuración. Los eventos pueden ser informativos, una advertencia o una excepción. Muchos eventos son normales y no necesitan acción; la práctica consiste en decidir cuáles sí.

**Alerta.** Una notificación de que un evento necesita atención. No todo evento debería convertirse en una alerta. Una buena alerta dice a una persona que algo necesita acción ahora, qué falla y dónde mirar.

**Fatiga de alarmas.** La pérdida de sensibilidad a las alertas cuando hay demasiadas o demasiadas son falsas. Véase el artículo de Wikipedia sobre la fatiga de alarmas. Entre las señales están las alertas reconocidas sin leerlas, los canales silenciados y los incidentes descubiertos tarde. Es un problema de diseño, no de disciplina.

**Métricas, registros y trazas.** Tres tipos comunes de telemetría. Las métricas son mediciones numéricas a lo largo del tiempo, como la tasa de solicitudes o el uso de memoria. Los registros son anotaciones de eventos con marca de tiempo. Las trazas siguen una solicitud a través de las partes de un sistema distribuido. Los artículos de Wikipedia sobre telemetría y gestión de registros describen ideas generales. Juntos sustentan tanto la monitorización como la investigación más profunda que se trata bajo observabilidad.

**Observabilidad.** La capacidad de entender el estado interno de un sistema a partir de sus salidas. Wikipedia describe la observabilidad en software como una extensión de la monitorización a preguntas que usted no anticipó. Ambas se solapan: la monitorización vigila el fallo conocido; la observabilidad ayuda a investigar los desconocidos. Véase el Tema 7.4 — Observabilidad y telemetría.

**Síntomas y causas.** Un síntoma es lo que experimentan los usuarios o el servicio, como las respuestas lentas; una causa es lo que hay detrás, como un disco lleno. Alertar sobre los síntomas le dice que los usuarios están afectados. Alertar sobre cada causa posible crea ruido. Muchos equipos alertan sobre síntomas y usan métricas a nivel de causa para investigar.

**Umbrales y líneas base.** Un umbral fijo, como «CPU por encima del 90 por ciento», es simple y a menudo erróneo, porque los niveles normales varían con la hora y la carga. Las líneas base aprenden lo que es normal para una hora del día y lanzan alertas ante la desviación. El artículo de Wikipedia sobre la detección de anomalías describe la idea y sus cautelas.

**Correlación de eventos.** Combinar eventos relacionados para encontrar el problema subyacente, de modo que cien alertas de un componente que falla se conviertan en una. Wikipedia describe la correlación de eventos. Puede basarse en reglas o usar aprendizaje automático. Véase el Tema 5.2 — AIOps.

**Monitorización sintética y de usuarios reales.** La monitorización sintética ejecuta pruebas con guion que imitan a los usuarios y comprueba con regularidad si un recorrido funciona. La monitorización de usuarios reales registra la experiencia de los usuarios reales. Wikipedia describe ambas. Las comprobaciones sintéticas detectan caídas en horas tranquilas; los datos de usuarios reales muestran lo que la gente experimenta de verdad.

**Gestión del rendimiento de aplicaciones.** Herramientas y prácticas para monitorizar el rendimiento y la disponibilidad de las aplicaciones, incluidos los tiempos de respuesta y las tasas de error. Wikipedia describe el campo.

**Accionabilidad.** Cada alerta debe tener una acción definida, aunque la acción sea «consultar el runbook». Si una persona no puede decir qué hacer, la alerta debe eliminarse o convertirse en un informe. Véase el Tema 3.9 — Gestión del Conocimiento.

**Encaminamiento y escalamiento.** Las alertas van a las personas que pueden actuar, según los turnos de guardia, con escalamiento si no hay acuse de recibo. Véase el Tema 3.2 — Gestión de Incidentes.

**Gestión de eventos e ITIL.** ITIL 4 describe la «monitorización y gestión de eventos» como una práctica que observa sistemáticamente los servicios y sus componentes y registra e informa de cambios de estado seleccionados. El énfasis está en decidir qué eventos importan y qué hacer con cada uno.

**Cómo encajan las lentes.** La monitorización es el lado de la retroalimentación de la entrega continua: muestra si un cambio está sano. La práctica ágil trata la calidad de las alertas como un elemento del backlog. La IA puede reducir el ruido, correlacionar eventos y resumir, bajo revisión. La automatización puede actuar ante eventos bien entendidos. La analítica muestra las tendencias y el costo del ruido.

## Buenas prácticas

1. **Alerte sobre lo que sienten los usuarios.** Empiece con los síntomas, como solicitudes fallidas, páginas lentas y trabajos fallidos. Use métricas de causa para el diagnóstico, no para avisar, salvo que una causa sea una alerta temprana fiable.
2. **Haga accionable cada alerta.** Para cada alerta, escriba qué significa, quién actúa y qué hace primero. Enlácela con un runbook. Elimine las alertas que no tienen acción.
3. **Mantenga bajo el volumen.** Cuente las alertas que recibe cada persona de guardia por turno y fije un límite. Revise las alertas más ruidosas cada semana y arréglelas o elimínelas.
4. **Avise por urgencia, abra un ticket para el resto.** Use una llamada o un aviso solo cuando alguien deba actuar ahora. Envíe las demás señales a una cola o a un informe. Defina con claridad la diferencia.
5. **Use las líneas base con cuidado.** Donde lo normal cambia con la hora y la carga, use umbrales sensibles al tiempo o detección de anomalías, y revíselos. No confíe en un modelo que no pueda explicar a quienes responden.
6. **Agrupe las alertas relacionadas.** Correlacione los eventos de la misma causa y suprima las alertas descendentes cuando falla una dependencia. Envíe un solo mensaje con contexto.
7. **Compruebe desde el punto de vista del usuario.** Añada comprobaciones sintéticas para los recorridos clave y use datos de usuarios reales para la experiencia. Un servidor puede estar «activo» mientras los usuarios no pueden iniciar sesión.
8. **Monitorice la monitorización.** Pruebe que las alertas llegan a las personas, que el sistema de avisos funciona y que un fallo silencioso de la monitorización se detecta por sí mismo. Realice pruebas ocasionales de extremo a extremo.
9. **Revise tras los incidentes.** Pregunte qué alerta saltó, cuál debería haberlo hecho y cuáles eran ruido. Ajuste en la revisión del incidente. Véase el Tema 3.3 — Gestión de Problemas.
10. **Comparta paneles y contexto.** Dé a desarrolladores, operaciones y soporte acceso a los mismos datos y muestre el efecto de los cambios recientes. Evite los paneles que nadie usa.

## Preguntas para conversar con su equipo

**¿Cuál fue el último incidente del que nos avisaron los usuarios antes que nuestra monitorización y por qué?**
Esto encuentra puntos ciegos. Mire lo que vieron los usuarios. Espere brechas en los bordes de los recorridos. Después elijan una comprobación orientada al usuario para añadir.

**¿Cuántas alertas recibieron nuestras personas de guardia el mes pasado y cuántas requirieron acción?**
Cuenten juntos. Si nadie lo sabe, es un hallazgo. Espere una baja proporción de alertas accionables. Después elijan las cinco alertas más ruidosas y decidan el destino de cada una.

**¿Qué alertas ignoramos y qué pasaría si las eliminásemos?**
Ignorar alertas es señal de fatiga. Pregunte cuándo fue la última vez que importó cada una. Después eliminen o degraden una, con una fecha de revisión.

**¿A quién se despierta por qué y todos están de acuerdo en que vale la pena despertarlo?**
Acuerden los criterios para avisar. Espere desacuerdo, que es útil. Después escriban una regla de un párrafo y pruébenla durante un mes.

**¿Cómo sabríamos si nuestra monitorización misma dejara de funcionar?**
Esto prueba la metamonitorización. Espere silencio o una respuesta vaga. Después añadan una comprobación de latido o una alerta de prueba diaria y acuerden quién la vigila.

**¿Qué querríamos que hiciera la IA con nuestras alertas y qué debe seguir siendo una decisión humana?**
La IA puede agrupar alertas, sugerir causas y resumir el contexto. También puede suprimir una alerta real. Pregunte qué acciones necesitan aprobación. Después elijan una prueba limitada a agrupar y resumir, con revisión de lo que ocultó.

## En la práctica: un ejemplo de gestión de servicios

El equipo de tecnología operativa de un aeropuerto regional monitoriza el manejo de equipaje, los sistemas de facturación y las pantallas de información de vuelos. El equipo de seis personas recibe unas 400 alertas al día. El personal de guardia dice que echa un vistazo a las notificaciones y en su mayoría las silencia. El mes pasado, un conmutador de red averiado en una terminal pasó inadvertido durante 40 minutos, hasta que los pasajeros se quejaron de que las pantallas estaban en blanco.

El jefe del equipo dedica una semana a mirar los datos. De las 400 alertas diarias, unas 350 vienen de 12 reglas, como advertencias de disco en dispositivos que se limpian solos y oscilaciones de interfaz en un puerto sin uso. Solo unas 15 al día necesitan acción humana. El jefe y el equipo acuerdan tres cambios. Eliminan o degradan las 12 reglas ruidosas a un informe diario. Añaden dos comprobaciones sintéticas que cargan la página de pantallas y la pantalla de facturación desde cada terminal cada minuto y avisan si cualquiera falla dos veces seguidas. Y configuran la correlación para que un conmutador averiado produzca una alerta que nombre las pantallas afectadas, no cien.

Durante el mes siguiente, las alertas de guardia bajan a unas 20 al día, y el siguiente fallo de conmutador se detecta en tres minutos, con un único aviso que enumera las terminales afectadas. En la revisión semanal el equipo encuentra una alerta que la correlación suprimió cuando no debía, y corrige la regla.

Qué cambia: la gente confía en los avisos y responde. Qué sigue siendo difícil: el equipo del proveedor del manejo de equipaje envía sus propias alertas en un formato que el equipo no puede filtrar, así que queda algo de ruido; algunas personas del turno de noche temen que no se lea el informe diario; y nadie ha probado aún qué ocurre si falla el propio sistema de monitorización. El jefe programa un simulacro y añade una alerta de prueba diaria.

## Cuatro perspectivas

### Equipos de producto y de entrega

Integren las señales: métricas, registros y trazas significativos, y comprobaciones de salud que reflejen los recorridos de los usuarios. Escriban el runbook junto con la alerta. Observen los efectos de cada liberación.

### Equipos de servicio y de operaciones

Sean dueños de la calidad de las alertas. Revisen cada semana las alertas más ruidosas, protejan a las personas de la sobrecarga y comprueben que cada aviso tiene una acción. Prueben las rutas que siguen las alertas.

### Liderazgo y gobernanza

Pida el recuento de alertas accionables, no el número de monitores. Financie el tiempo para arreglar alertas ruidosas. Trate los avisos repetidos fuera de horario como un costo para el personal y para la calidad.

### Clientes y usuarios

Debería enterarse de los problemas por el proveedor antes de notarlos usted y saber qué está afectado. Informe de lo que ve, con las horas, y diga al proveedor dónde falló la monitorización.

## Ágil, IA, automatización y analítica

### Ágil

Trate las alertas y los paneles como parte del producto: mejórelos en pasos pequeños tras cada incidente y liberación. Revíselos con quienes responden. Precaución: añadir monitores para cada función nueva sin quitar los antiguos aumenta el ruido.

### IA

La IA puede aprender patrones normales, agrupar alertas relacionadas, sugerir causas probables y resumir una tormenta de alertas, con un responsable y decisiones humanas. Pruébela con incidentes pasados. Precaución: un modelo que suprime alertas puede ocultar un fallo raro pero real; mida qué suprimió y qué se pasó por alto. Véase el Tema 5.2 — AIOps.

### Automatización

Automatice las respuestas a eventos bien entendidos, como reiniciar un proceso que falla, y el encaminamiento y enriquecimiento de las alertas, con límites y registros. Precaución: la autorremediación que reintenta sin fin puede ocultar un sistema que falla o empeorarlo; añada límites de frecuencia y escalamiento. Véase el Tema 6.6 — Automatización de runbooks y autorremediación.

### Analítica

Siga el volumen de alertas, la proporción que fueron accionables, el tiempo de acuse de recibo y los incidentes detectados por la monitorización frente a los detectados por usuarios. Precaución: los recuentos de alertas por sí solos pueden manipularse subiendo los umbrales hasta que nada salte; contraste con los incidentes. Véanse el Tema 7.4 — Observabilidad y telemetría y el libro *Service Management Metrics*.

## Modos de fallo habituales

- **Alertar sobre todo.** La gente silencia el canal. Alerte sobre síntomas y elimine el resto.
- **Alertas sin acción.** Quienes responden no saben qué hacer. Enlace con un runbook o elimine la alerta.
- **Solo umbrales fijos.** Falsas alarmas en las horas de mayor actividad. Use con cuidado métodos sensibles al tiempo o de línea base.
- **Los usuarios se enteran primero.** Hay brechas en las comprobaciones orientadas al usuario. Añada monitorización sintética y de usuarios reales.
- **Sin metamonitorización.** La monitorización falla en silencio. Añada latido y simulacros.
- **Proliferación de paneles.** Nadie los mira. Conserve unos pocos que respalden decisiones.
- **Confiar en un modelo opaco.** Quienes responden no pueden explicar lo que hizo. Mantenga revisables las reglas y la lógica.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Diseño de alertas | Cada umbral alerta | Algunas alertas clave | Alertas basadas en síntomas y accionables con runbooks | Calidad de las alertas medida y revisada cada semana | Alertas adaptadas y correlacionadas entre servicios |
| Cobertura | Solo servidores | Algunas aplicaciones | Recorridos de usuarios comprobados de forma sintética y con datos de usuarios reales | Cobertura revisada tras los incidentes | Cobertura coherente en todo el parque y con proveedores |
| Ruido | Abrumador | Consciente | Volumen limitado y revisado | Ruido medido y en descenso | Ruido gestionado con correlación y automatización con supervisión |
| Respuesta | Manual | Avisos a un equipo | Encaminada con escalamiento | Tiempo de respuesta seguido | Acciones seguras automatizadas con control humano |

## Lista de verificación

- [ ] Las alertas se basan en síntomas que sienten los usuarios.
- [ ] Cada alerta tiene una acción definida y un runbook enlazado.
- [ ] El volumen de alertas de guardia por turno se mide y se limita.
- [ ] Revisamos cada semana las alertas más ruidosas.
- [ ] Los recorridos clave de usuarios tienen comprobaciones sintéticas.
- [ ] Las alertas relacionadas se correlacionan.
- [ ] Probamos que las alertas llegan a las personas y que se detecta un fallo de la monitorización.
- [ ] La IA o la automatización que actúan sobre las alertas tienen un responsable, límites y revisión.

## Prompts de IA

**Clasifique las alertas ruidosas.**

```text
Here is a list of alert rules with the number of times each fired last month and how many led to action: [paste].
Rank them by number of non-actionable firings, list the top ten, and give one question per rule to ask about whether to remove, change, or keep it. Do not recommend deleting any.
List what you are unsure of.
```

**Redacte el texto de una alerta.**

```text
The situation to alert on: [describe]. Who acts: [role]. The first checks they should make: [list].
Draft an alert title (under 80 characters) and a body (under 80 words) that says what is wrong, what users may be experiencing, and the first step, with a link placeholder for the runbook. Do not speculate about causes.
List what you are unsure of.
```

**Pruebe una regla de correlación.**

```text
Here is a correlation rule: [describe]. Here is a list of recent events with timestamps and sources: [paste].
List which events the rule would group, which it would suppress, and any case where a real separate problem could be hidden. Do not propose a new rule.
List what you are unsure of.
```

## Habilidades de IA

- [runbook](../../../../skills/runbook/SKILL.md): úsela para escribir la acción que acompaña a cada alerta.
- [anomaly-analysis](../../../../skills/anomaly-analysis/SKILL.md): úsela para examinar patrones inusuales en las métricas.
- [key-risk-indicators](../../../../skills/key-risk-indicators/SKILL.md): úsela para elegir indicadores de alerta temprana.
- [on-call-rotation](../../../../skills/on-call-rotation/SKILL.md): úsela para diseñar arreglos de guardia sostenibles.

## Fuentes principales

- Betsy Beyer y otros (eds.), *Site Reliability Engineering* (2016), capítulo sobre la monitorización de sistemas distribuidos, gratis en sre.google.
- Rob Ewaschuk, "My Philosophy on Alerting" (2013): un ensayo breve y conocido sobre las alertas basadas en síntomas.
- Wikipedia, "Alarm fatigue" y "Observability (software)": visiones generales de ideas clave.
- PeopleCert, páginas de certificación ITIL: la descripción del propietario de la práctica de monitorización y gestión de eventos.

## Referencias

1. Alarm fatigue — Wikipedia — https://en.wikipedia.org/wiki/Alarm_fatigue
2. Observability (software) — Wikipedia — https://en.wikipedia.org/wiki/Observability_(software)
3. Application performance management — Wikipedia — https://en.wikipedia.org/wiki/Application_performance_management
4. Event correlation — Wikipedia — https://en.wikipedia.org/wiki/Event_correlation
5. Log management — Wikipedia — https://en.wikipedia.org/wiki/Log_management
6. Synthetic monitoring — Wikipedia — https://en.wikipedia.org/wiki/Synthetic_monitoring
7. Real user monitoring — Wikipedia — https://en.wikipedia.org/wiki/Real_user_monitoring
8. Network monitoring — Wikipedia — https://en.wikipedia.org/wiki/Network_monitoring
9. Anomaly detection — Wikipedia — https://en.wikipedia.org/wiki/Anomaly_detection
10. Telemetry — Wikipedia — https://en.wikipedia.org/wiki/Telemetry
11. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
