# Automatización de runbooks y autorremediación

**La automatización de runbooks convierte un procedimiento documentado y probado en código que una persona o una alerta puede disparar, y la autorremediación permite que una señal de monitorización lo dispare sin una persona; ambas son seguras solo para acciones bien entendidas y reversibles, con límites, registros, una parada manual y un responsable que revise con qué frecuencia se disparan.**

## Por qué importa

El trabajo de guardia tiene una forma. Salta una alerta. Un ingeniero cansado abre un runbook, sigue una serie de pasos, reinicia algo, comprueba que funcionó y vuelve a dormir. Una semana después salta la misma alerta y se siguen los mismos pasos. A la décima vez, alguien dice: ¿por qué lo hace una persona?

Tiene razón. Repetir a mano una solución conocida es lento, propenso a errores y corrosivo para quienes lo hacen. Los mismos pasos, escritos como código, se ejecutan en segundos, siempre de la misma manera, y dejan un registro. Wikipedia describe los runbooks como compilaciones de procedimientos rutinarios que realiza un operador. Hacerlos ejecutables y, en algunos casos, hacer que se ejecuten por sí solos, es el paso de la documentación a la automatización.

Ese paso es también un peligro. Un runbook leído por una persona pasa por el criterio humano en cada paso. El código no. Un reinicio automático erróneo puede repetirse para siempre, tumbar un servicio sano o enmascarar un problema más profundo hasta que sea mucho peor. Muchas caídas se han prolongado o causado por una remediación bienintencionada que hizo lo equivocado con rapidez. Wikipedia describe la computación autonómica, el viejo objetivo de sistemas que se gestionan solos, y la lección práctica es que la autonomía necesita límites.

Este tema describe cómo pasar con cuidado del documento al script y a la acción automática. Se apoya en la gestión del conocimiento (Tema 3.9 — Gestión del Conocimiento), la monitorización (Tema 3.10 — Monitorización y Gestión de Eventos), la gestión de incidentes (Tema 3.2 — Gestión de Incidentes) y la estrategia de automatización (Tema 6.1 — Estrategia de automatización). Se conecta con las operaciones con IA (Tema 5.2 — AIOps) y con los agentes que actúan (Tema 5.5 — IA agéntica y supervisión humana).

## Conceptos clave

**Runbook.** Un procedimiento documentado para una tarea o situación operativa específica y recurrente. Wikipedia describe los runbooks. Un buen runbook tiene un desencadenante, pasos numerados, resultados esperados, un paso de verificación y una vía de escalamiento. Véase el Tema 3.9 — Gestión del Conocimiento.

**Automatización de runbooks.** Implementar un runbook como código que ejecuta algunos o todos sus pasos, normalmente disparado por una persona desde una consola o un comando de chat, o por un evento del sistema. Conserva la lógica del runbook, con el beneficio de la rapidez, la coherencia y los registros.

**Autorremediación.** Acción correctiva automática en respuesta a una alerta o evento, sin que una persona la inicie. Los ejemplos incluyen reiniciar un proceso que ha fallado, limpiar un directorio temporal lleno, ampliar un conjunto de trabajadores o conmutar a un sistema en espera. El artículo de Wikipedia sobre computación autonómica describe como meta los sistemas que detectan y corrigen sus propios fallos. En la práctica, la autorremediación cubre un conjunto reducido de fallos bien entendidos.

**Una progresión.** Los equipos suelen pasar por etapas: un runbook escrito; un runbook con scripts que ejecuta una persona; un runbook que una persona dispara con un comando, con el script reuniendo antes las comprobaciones; una alerta que propone la acción y pide aprobación; y una alerta que ejecuta sola la acción dentro de límites. Cada etapa necesita evidencia de la anterior. No se salte etapas en las acciones con consecuencias reales.

**Qué cualifica para la acción automática.** Un fallo que es común, cuya causa y solución se entienden bien, cuya solución es segura y reversible y cuyo síntoma lo identifica con fiabilidad. Ejemplos son un trabajador sin estado colgado o un directorio de registros que se llena. Las malas candidatas incluyen todo lo que borre datos, cambie accesos o dependa del juicio sobre el impacto en el negocio.

**Condiciones de seguridad.** Antes de actuar, compruebe que la situación realmente coincide: la alerta está vigente, el servicio está en el estado esperado, no hay un despliegue ni mantenimiento en curso y la acción no se acaba de ejecutar. Después de actuar, verifique el resultado. Wikipedia describe la ejecución en seco (dry run), un ensayo que muestra lo que ocurriría sin hacerlo; es un modo útil para las automatizaciones nuevas.

**Límites.** Limite cuántas veces puede ejecutarse una acción en un periodo, cuántas instancias puede tocar a la vez y cuánto puede durar. Wikipedia describe la limitación de frecuencia. Un límite convierte un descontrol en un suceso acotado, y superar un límite debería llamar a una persona.

**Interruptores automáticos y retroceso.** Si una acción automatizada falla repetidamente o se dispara repetidamente, deténgase y escale en lugar de reintentar para siempre. Wikipedia describe el patrón del interruptor automático (circuit breaker), en el que los fallos repetidos accionan un interruptor que detiene nuevos intentos durante un tiempo. Añada pausas entre reintentos y histéresis, descrita en Wikipedia, para evitar oscilaciones entre estados.

**Idempotencia.** Una acción que es segura de repetir. Wikipedia describe la idempotencia. Reiniciar un servicio cuando ya se está reiniciando no debería causar una segunda tormenta de reinicios. Diseñe acciones que comprueben primero el estado.

**Perros guardianes y recuperación integrada.** Las plataformas proporcionan sus propios mecanismos de recuperación: supervisores de procesos que reinician servicios caídos, plataformas de contenedores que sustituyen instancias que fallan y temporizadores de vigilancia (watchdog timers), descritos en Wikipedia, que reinician un sistema colgado. Prefiera los mecanismos integrados a los scripts a medida donde encajen y entienda lo que hacen.

**Conmutación y escalado.** La conmutación automática a un sistema en espera y el escalado automático de la capacidad son formas de autorremediación que las plataformas suelen ofrecer. Wikipedia describe la conmutación por error y el escalado automático. También necesitan pruebas y límites, porque pueden empeorar las cosas: una conmutación disparada por un fallo breve puede interrumpir un servicio sano.

**Enmascarar problemas.** Una automatización que corrige un fallo en silencio puede ocultar una causa que empeora. Si un servicio se reinicia cada hora, el reinicio es un síntoma de un problema que hay que corregir. Siga con qué frecuencia se dispara cada automatización y trate un ritmo creciente como un problema que investigar. Véase el Tema 3.3 — Gestión de Problemas.

**Registros, auditoría y notificación.** Toda acción automática debe registrar qué la desencadenó, qué comprobó, qué hizo y el resultado, y debe avisar al equipo responsable. La automatización silenciosa erosiona la comprensión del sistema. Wikipedia describe los rastros de auditoría en general.

**Pruebas.** Pruebe las automatizaciones contra fallos realistas en un entorno seguro, incluidos los casos en los que las comprobaciones deberían detener la acción. Wikipedia describe la ingeniería del caos, la práctica de inyectar fallos de forma deliberada, que también puede probar si la remediación se comporta correctamente. Véase el Tema 3.12 — Gestión de la Continuidad del Servicio.

**Responsabilidad y revisión.** Cada automatización tiene un responsable, vive en control de versiones con revisión y aparece en un registro. Revise con regularidad con qué frecuencia se dispara, si tuvo éxito y si debería corregirse la causa subyacente.

**Acceso y seguridad.** Las herramientas de remediación tienen poder sobre producción. Dé a cada una su propia identidad con los permisos estrechos que necesita cada acción y proteja el código y los desencadenantes de manipulaciones. Véase el Tema 3.13 — Gestión de la Seguridad de la Información.

**Habilidades humanas.** Si la automatización atiende los fallos rutinarios, las personas pueden perder la sensibilidad para el sistema. Mantenga legibles los runbooks, ensaye la operación manual e incluya las automatizaciones en los días de simulacro. Véase el Tema 6.1 — Estrategia de automatización.

**Cómo encajan las lentes.** Este tema es la lente de automatización en el punto de las operaciones. La práctica ágil sugiere subir por la progresión en pasos pequeños con revisión tras cada incidente. La IA puede sugerir acciones y seleccionar runbooks, bajo los límites aquí descritos. La analítica mide las frecuencias de disparo, el éxito y los problemas enmascarados.

## Buenas prácticas

1. **Empiece con un buen runbook.** Escriba, pruebe y use primero el procedimiento a mano. Automatizar un procedimiento que no funciona solo lo rompe más rápido.
2. **Elija con cuidado las candidatas.** Busque soluciones frecuentes, bien entendidas, seguras y reversibles con una señal fiable. Clasifíquelas por tiempo de guardia ahorrado y por riesgo.
3. **Suba la escalera.** Pase de script a desencadenante de un comando, a acción propuesta con aprobación y a acción automática solo a medida que se acumule evidencia. Registre la decisión en cada paso.
4. **Compruebe antes y después.** Verifique que la situación coincide, que no hay actividad en conflicto en curso y que la acción funcionó. Deténgase y escale si falla cualquier comprobación.
5. **Fije límites y un interruptor automático.** Limite la frecuencia, el alcance y la duración. Si una acción se dispara demasiado a menudo o falla dos veces, deténgase y llame a una persona.
6. **Haga idempotentes y reversibles las acciones.** Compruebe primero el estado y escriba la vuelta atrás. Pruebe ambos.
7. **Registre, avise y haga visible.** Registre cada acción automática, avise al equipo responsable y muestre las frecuencias de disparo en un panel.
8. **Corrija la causa.** Cuente con qué frecuencia se dispara cada automatización y plantee un problema cuando la tasa sea alta o creciente. Trate la automatización como un puente hacia una solución, no como un sustituto.
9. **Pruebe en condiciones seguras.** Ensaye con fallos realistas y casos límite, incluidos los que deberían rechazarse. Incluya las automatizaciones en los días de simulacro.
10. **Sea responsable y revise.** Nombre un responsable, mantenga el código en control de versiones con revisión, registre cada automatización y revise cada trimestre cuáles conservar, cambiar o retirar.

## Preguntas para conversar con su equipo

**¿Qué alertas arreglamos siempre de la misma manera y cuánto tarda cada una?**
Usen datos de incidentes y alertas. Esperen un puñado que explique la mayoría de los avisos. Después elijan una y comprueben que su runbook es exacto.

**¿Qué podría salir mal si esta solución se ejecutara cuando no debe?**
Imaginen el desencadenante equivocado o el destino equivocado. Esperen unos cuantos casos desagradables. Después añadan una comprobación o un límite para cada uno.

**¿Cómo sabríamos que la automatización estaba enmascarando un problema creciente?**
Pregunten qué veríamos. Esperen «nada». Después acuerden contar los disparos y fijar un umbral para plantear un problema.

**¿Cuál es el daño máximo que podría causar una sola ejecución y cómo la detendríamos?**
Nombren el alcance. Esperen incertidumbre. Después fijen un tope y ensayen una parada.

**¿Cuándo hicimos por última vez esta tarea a mano y podría seguir haciéndola todo el personal de guardia?**
Pregunten cuándo fue la última vez. Esperen que hace mucho. Después programen un ensayo.

**¿Dónde podría la IA proponer o elegir una remediación y qué debe aprobar aún una persona?**
La IA puede relacionar síntomas con runbooks y sugerir acciones. Pregunten qué acciones necesitan aprobación y quién decide. Después elijan una prueba en la que la IA propone y una persona aprueba, con medidas de con qué frecuencia acertó la sugerencia.

## En la práctica: un ejemplo de gestión de servicios

El equipo de información al viajero de una red ferroviaria nacional opera pantallas en 400 estaciones, alimentadas por un servicio de datos. Unas dos veces por semana, el procesador del flujo se cuelga y las pantallas se congelan en horas antiguas. Se avisa al ingeniero de guardia, que inicia sesión, comprueba que el proceso está colgado, lo reinicia y confirma las actualizaciones. Lleva unos 20 minutos, sobre todo de noche.

El equipo escribe el runbook, refinándolo tras probarlo en dos incidentes: confirmar la alerta, comprobar que no hay un despliegue en curso, comprobar que el proceso no ha escrito en su registro en cinco minutos, reiniciar, esperar dos minutos, comprobar que la marca de tiempo de salida es actual y anotar el incidente. Lo convierten en un script con un modo de ejecución en seco, y un ingeniero lo dispara con un comando de chat durante un mes. Tiene éxito cada vez.

Luego lo conectan con la alerta en un modo de propuesta: la alerta publica los hallazgos del script y un botón que pide aprobación al ingeniero de guardia. Tras un mes, todas las aprobaciones fueron correctas y llevaron menos de dos minutos. El equipo acuerda dejar que se ejecute automáticamente bajo condiciones estrictas: solo cuando pasen las comprobaciones, como máximo dos veces en una hora, nunca durante un despliegue y con un aviso a una persona si el segundo reinicio no lo arregla. Registra cada ejecución y publica en el canal del equipo.

La automatización se dispara 19 veces en los dos primeros meses. Una revisión muestra que el cuelgue ocurre más a menudo tras una actualización nocturna de cierto proveedor de datos, algo que el equipo no había notado al atender cada aviso por separado. Plantean un problema al proveedor. En una ejecución, el interruptor automático se acciona tras dos reinicios fallidos y avisa a un ingeniero, que descubre que el disco está lleno, una causa que el runbook no cubría.

Qué cambia: los ingenieros duermen durante la mayoría de estos sucesos y las pantallas se recuperan en menos de tres minutos. Qué sigue siendo difícil: el proveedor aún no ha corregido el formato de los datos; el equipo ha notado que los ingenieros nuevos nunca han hecho el procedimiento manual y le preocupa su habilidad; y el paso adicional de comprobar el disco se añadió solo tras la sorpresa. El jefe programa un ensayo manual trimestral y añade la comprobación del disco al script.

## Cuatro perspectivas

### Equipos de producto y de entrega

Construyan servicios fáciles de remediar: puntos de salud, reinicio seguro, operaciones idempotentes y registros claros. Escriban los runbooks junto con el código y corrijan las causas que la automatización pone de manifiesto.

### Equipos de servicio y de operaciones

Sean dueños de los runbooks y las automatizaciones: escriban, prueben, limiten, registren y revisen. Mantengan vivas las habilidades manuales y traten el disparo frecuente como un problema que corregir.

### Liderazgo y gobernanza

Respalde subir por la escalera con evidencia y pida frecuencias de disparo y comprobaciones de problemas enmascarados. Financie el tiempo para corregir las causas. Desconfíe de las afirmaciones de sistemas que se autorreparan.

### Clientes y usuarios

Debería ver una recuperación más rápida y menos caídas visibles. Si una corrección automática no funcionó o causó un problema, dígaselo al proveedor para que se corrija la regla.

## Ágil, IA, automatización y analítica

### Ágil

Mejore la remediación tras cada incidente: refine el runbook, añada una comprobación o suba un peldaño de la escalera. Mantenga pequeños y revisados los cambios. Precaución: no automatice en bloque tras una mala noche; avance una solución cada vez con pruebas.

### IA

La IA puede relacionar alertas con runbooks, sugerir pasos y redactar nuevos runbooks a partir de notas de incidentes, con aprobación para todo lo que actúe. Nombre un responsable y mida la exactitud de las sugerencias. Precaución: una IA que elige una acción ante una alerta inusual puede elegir mal; limítela a una lista de acciones aprobadas. Véase el Tema 5.5 — IA agéntica y supervisión humana.

### Automatización

Este tema es la lente de automatización en las operaciones: condiciones de seguridad, límites, interruptores automáticos, idempotencia, registros y revisión. Precaución: la remediación automática puede enmascarar problemas y empeorarlos; cuente los disparos, limite las ejecuciones y escale ante el fallo. Véase el Tema 6.1 — Estrategia de automatización.

### Analítica

Siga la tasa de disparo por automatización, la tasa de éxito, el tiempo de recuperación, el número de avisos evitados, las activaciones del interruptor automático y los problemas planteados a partir de patrones. Precaución: los avisos evitados son fáciles de inflar y pueden ocultar tasas de disparo crecientes; siga ambos juntos. Véanse el Tema 7.4 — Observabilidad y telemetría y el libro *Service Management Metrics*.

## Modos de fallo habituales

- **Automatizar un runbook sin probar.** La solución es errónea a velocidad. Pruebe primero a mano.
- **Sin límites.** Un bucle o un disparo erróneo se repite. Limite las ejecuciones y use un interruptor automático.
- **Problemas ocultos.** Los reinicios enmascaran una causa. Cuente los disparos y corrija las causas.
- **Sin comprobaciones antes de actuar.** La acción golpea un sistema sano u ocupado. Verifique las condiciones.
- **Automatización silenciosa.** Nadie sabe qué hizo. Registre y avise.
- **Las habilidades se desvanecen.** Nadie sabe hacerlo a mano. Ensaye.
- **Herramientas con demasiados privilegios.** Un solo compromiso llega a todo. Use identidades estrechas.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Runbooks | En las cabezas o el correo | Escritos para las alertas principales | Runbooks probados vinculados con las alertas | Calidad de los runbooks revisada tras los incidentes | Runbooks mantenidos como código entre servicios |
| Automatización | Ninguna | Scripts disparados por personas | Acciones aprobadas y probadas con propuestas | Acciones seleccionadas que se ejecutan automáticamente con límites | Acciones seguras elegidas según el riesgo con control humano |
| Seguridad | Ninguna | Registro básico | Comprobaciones, límites, interruptores automáticos y reversión | Seguridad probada y auditada | Seguridad integrada en las plataformas compartidas |
| Aprendizaje | Apagar incendios | Revisión ocasional | Frecuencias de disparo seguidas y causas planteadas como problemas | Recurrencia medida y reducida | Aprendizaje compartido entre equipos y proveedores |

## Lista de verificación

- [ ] El runbook se escribió, se probó y se usó a mano antes de automatizar.
- [ ] Cada automatización tiene un desencadenante, condiciones previas, verificación y un escalamiento.
- [ ] Las acciones son idempotentes y reversibles.
- [ ] Los límites y un interruptor automático acotan la frecuencia y el alcance.
- [ ] Cada ejecución se registra y se avisa al equipo responsable.
- [ ] Seguimos con qué frecuencia se dispara cada automatización y planteamos problemas a partir de los patrones.
- [ ] Las automatizaciones están en control de versiones, revisadas y registradas con responsables.
- [ ] Ensayamos la operación manual y probamos las automatizaciones con fallos realistas.

## Prompts de IA

**Convierta notas de incidentes en un borrador de runbook.**

```text
Here are notes from three incidents that had the same fix: [paste, personal data removed].
Draft a runbook with: trigger, preconditions to check, numbered steps with expected results, verification, rollback, and escalation. Use only what the notes say; write [missing] for anything not stated.
List what you are unsure of.
```

**Encuentre brechas de seguridad en una automatización.**

```text
Here is a description of an auto-remediation: trigger, checks, action, and limits: [paste].
List which of these are missing or unclear: precondition checks, post-action verification, rate limit, circuit breaker, idempotence, rollback, logging, notification, owner. Quote the text for each you consider present. Do not assume any.
List what you are unsure of.
```

**Revise los datos de disparos.**

```text
Here is a log of when each automation fired in the last month, with result: [paste].
Count firings per automation, list those that are rising or clustered at the same time of day, and list questions to find causes. Do not guess causes.
List what you are unsure of.
```

## Habilidades de IA

- [runbook](../../../../skills/runbook/SKILL.md): úsela para escribir y probar el procedimiento antes de automatizar.
- [chaos-testing](../../../../skills/chaos-testing/SKILL.md): úsela para probar la remediación frente a fallos realistas.
- [root-cause-analysis](../../../../skills/root-cause-analysis/SKILL.md): úsela para encontrar las causas que oculta la automatización.
- [on-call-rotation](../../../../skills/on-call-rotation/SKILL.md): úsela para diseñar arreglos de guardia sostenibles.
- [incident-response-plan](../../../../skills/incident-response-plan/SKILL.md): úsela para definir roles y escalamiento alrededor de la automatización.

## Fuentes principales

- Betsy Beyer y otros (eds.), *Site Reliability Engineering* (2016), capítulos sobre la eliminación del toil y sobre la automatización, gratis en sre.google.
- Lisanne Bainbridge, "Ironies of Automation" (*Automatica*, 1983): por qué la automatización cambia el papel humano de formas sorprendentes.
- Wikipedia, "Runbook" y "Autonomic computing": visiones generales del documento y de la aspiración.
- Wikipedia, "Circuit breaker design pattern": un patrón para detener el fallo repetido.

## Referencias

1. Runbook — Wikipedia — https://en.wikipedia.org/wiki/Runbook
2. Autonomic computing — Wikipedia — https://en.wikipedia.org/wiki/Autonomic_computing
3. Circuit breaker design pattern — Wikipedia — https://en.wikipedia.org/wiki/Circuit_breaker_design_pattern
4. Watchdog timer — Wikipedia — https://en.wikipedia.org/wiki/Watchdog_timer
5. Idempotence — Wikipedia — https://en.wikipedia.org/wiki/Idempotence
6. Rate limiting — Wikipedia — https://en.wikipedia.org/wiki/Rate_limiting
7. Failover — Wikipedia — https://en.wikipedia.org/wiki/Failover
8. Autoscaling — Wikipedia — https://en.wikipedia.org/wiki/Autoscaling
9. Chaos engineering — Wikipedia — https://en.wikipedia.org/wiki/Chaos_engineering
10. Hysteresis — Wikipedia — https://en.wikipedia.org/wiki/Hysteresis
11. Dry run (testing) — Wikipedia — https://en.wikipedia.org/wiki/Dry_run_(testing)
12. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
