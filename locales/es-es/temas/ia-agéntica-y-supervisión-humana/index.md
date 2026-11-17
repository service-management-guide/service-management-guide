# IA agéntica y supervisión humana

**Los agentes de IA que actúan sobre los sistemas, y no solo responden preguntas, necesitan un alcance definido, permisos de mínimo privilegio, puertas de aprobación para las acciones importantes, un rastro de auditoría completo y una forma probada de detenerlos; la autonomía debe concederse en pasos pequeños y basados en evidencia, y la responsabilidad sigue en manos de una persona designada.**

## Por qué importa

La mayoría de los usos de la IA en la gestión de servicios hasta ahora son consultivos. Un modelo lee un ticket y sugiere una categoría, o redacta una respuesta que una persona edita. Si la sugerencia es errónea, un humano lo nota antes de que ocurra nada. Un agente de IA cambia eso. Se le dan herramientas: puede consultar sistemas, actualizar registros, ejecutar comandos, abrir y cerrar tickets y enviar mensajes. Planifica pasos hacia una meta y los ejecuta, a menudo con poca intervención humana entre la instrucción y el resultado.

Esto promete un valor real. Un agente podría investigar una alerta extrayendo registros, comprobando los cambios recientes y publicando un resumen. Podría procesar una solicitud rutinaria de principio a fin: verificar la elegibilidad, crear la cuenta, avisar al usuario. Podría redactar una corrección y abrir una solicitud de integración. Bien hecho, quita trabajo rutinario a personas ocupadas y funciona a cualquier hora.

También cambia la naturaleza del riesgo. Una respuesta errónea es una molestia. Una acción errónea puede borrar datos, conceder acceso a la persona equivocada, tumbar un servicio o enviar un mensaje a diez mil clientes. La velocidad que hace útiles a los agentes hace que sus errores se propaguen con rapidez. Y los agentes están expuestos a ataques: una instrucción hostil escondida en un ticket o en una página web puede dirigir a un agente que tiene poder para actuar.

Este tema expone las ideas principales para usar agentes con seguridad en la gestión de servicios: alcance, permisos, aprobación, auditoría y detención. Se apoya en el Tema 5.1 — IA en la gestión de servicios y el Tema 5.6 — Gobernanza, riesgo y cumplimiento de la IA, y se conecta con la automatización (Tema 6.1 — Estrategia de automatización y Tema 6.6 — Automatización de runbooks y autorremediación), la habilitación de cambios (Tema 3.4 — Habilitación de Cambios) y la seguridad de la información (Tema 3.13 — Gestión de la Seguridad de la Información).

## Conceptos clave

**Agente de IA.** Un sistema que percibe su entorno, toma decisiones y realiza acciones para lograr metas. Wikipedia describe los agentes inteligentes y los agentes de IA. En la práctica actual, un agente suele combinar un modelo de lenguaje con herramientas y un bucle: el modelo decide qué hacer a continuación, llama a una herramienta, lee el resultado y continúa hasta que decide que ha terminado o llega a un límite.

**Herramientas y permisos.** El conjunto de acciones que un agente puede realizar, como leer una base de conocimiento, consultar la monitorización, crear un ticket o reiniciar un servicio. Las herramientas suelen exponerse mediante interfaces de programación de aplicaciones (API). Wikipedia describe las API. Los protocolos abiertos para conectar modelos con herramientas, como el Model Context Protocol descrito en Wikipedia, facilitan añadir herramientas, lo cual es útil y también amplía lo que un agente puede hacer. Cada herramienta conlleva su propio riesgo.

**Niveles de autonomía.** Una forma útil de pensar el control es como niveles, de ninguno a total. En un extremo, el agente solo sugiere. Luego prepara una acción para su aprobación. Luego actúa por sí solo dentro de límites estrechos e informa. En el otro extremo actúa ampliamente sin revisión. El artículo de Wikipedia sobre el control supervisor describe la idea de la supervisión humana de sistemas automatizados. Elija el nivel por tarea, según el costo de un error y la capacidad de deshacerlo.

**Supervisión humana.** Una persona sigue siendo capaz de entender, aprobar, detener o corregir al agente. Wikipedia describe los sistemas con humano en el circuito. La supervisión adopta varias formas: aprobar las acciones antes de que ocurran, monitorizarlas mientras ocurren y revisarlas después. La forma adecuada depende de la velocidad y el riesgo. La revisión posterior no sirve para una acción irreversible.

**Sesgo de automatización y firmar sin mirar.** La gente tiende a aprobar lo que propone un sistema, sobre todo cuando las aprobaciones son frecuentes y se parecen. Wikipedia describe el sesgo de automatización. Un control que la gente aprueba sin leer no es un control. Diseñe las aprobaciones de modo que muestren lo que va a ocurrir, sean lo bastante raras como para leerse y se comprueben por muestreo.

**Mínimo privilegio.** Un agente debe tener solo los permisos que necesita para su tarea, solo durante el tiempo que los necesita. Wikipedia describe el principio de mínimo privilegio. Use identidades separadas para los agentes, no una cuenta de administrador compartida, para poder rastrear las acciones y limitar los permisos.

**El diputado confundido.** Un problema de seguridad en el que se engaña a un programa de confianza para que use su autoridad en nombre de alguien que no la tiene. Wikipedia describe el problema del diputado confundido. Un agente que puede actuar con alto privilegio y recibe instrucciones de texto de baja confianza, como el mensaje de un usuario, es un caso clásico.

**Inyección de prompts.** Instrucciones hostiles ocultas en el contenido que lee un agente, como un ticket, un correo, una página web o una línea de registro. Wikipedia describe la inyección de prompts. Como el modelo no puede distinguir de forma fiable las instrucciones de los datos, una fuente de contenido puede intentar redirigir al agente. La defensa se basa sobre todo en limitar lo que el agente puede hacer, no en convencer al modelo de que ignore el mal texto.

**Aislamiento (sandboxing).** Ejecutar los agentes en entornos restringidos, con acceso limitado a sistemas y datos. Wikipedia describe los entornos aislados en seguridad informática. Deje que un agente pruebe las acciones en un entorno de pruebas antes de que trabaje en producción.

**Reversibilidad.** Prefiera acciones que puedan deshacerse: crear un ticket, añadir una etiqueta, proponer un cambio. Trate las acciones irreversibles, como el borrado, el pago y el envío de mensajes al exterior, como que necesitan aprobación o están prohibidas. Wikipedia describe la reversión en la gestión de datos.

**Límites e interruptores automáticos.** Topes al número de acciones que un agente puede realizar por hora, a cuánto puede gastar, a cuántos elementos puede cambiar a la vez y a cuánto tiempo puede funcionar. Wikipedia describe la limitación de frecuencia. Un límite convierte un descontrol en un error acotado.

**Interruptor de apagado (kill switch).** Una forma rápida y fiable de detener a un agente y revocar su acceso. Wikipedia describe los kill switches. Pruébelo. Un interruptor de apagado que depende de la cooperación del propio agente o de un sistema que está caído no lo es.

**Rastro de auditoría.** Un registro completo de lo que se pidió al agente, lo que decidió, qué herramientas llamó con qué entradas y qué ocurrió. Wikipedia describe los rastros de auditoría. Sin él, no puede investigar un error, demostrar el cumplimiento ni aprender.

**Responsabilidad.** Un agente no responde; responden las personas. Un responsable designado responde de lo que hace el agente, de sus permisos y de revisar su registro. Wikipedia describe la rendición de cuentas. Véase el Tema 2.8 — Propiedad de Productos y Servicios.

**Sistemas multiagente.** Varios agentes que trabajan juntos pueden añadir complejidad, errores en cascada y responsabilidad poco clara. Wikipedia describe los sistemas multiagente. Trate por separado el alcance y los permisos de cada agente y tenga cautela con los agentes que dan instrucciones a otros agentes.

**Separación de funciones.** La idea de que ninguna parte debe poder completar sola una acción arriesgada se aplica a los agentes. Un agente que propone un cambio no debería ser el que lo aprueba. Wikipedia describe la separación de funciones.

**Cómo encajan las lentes.** Los agentes están donde la IA se encuentra con la automatización. La práctica ágil sugiere empezar con poco y ampliar la autonomía por pasos con evidencia. La analítica mide lo que hacen los agentes y en qué se equivocan. La gobernanza (véase el Tema 5.6 — Gobernanza, riesgo y cumplimiento de la IA) fija las reglas.

## Buenas prácticas

1. **Defina el alcance por escrito.** Indique para qué sirve el agente, qué puede hacer, qué no puede hacer nunca y qué datos puede tocar. Manténgalo estrecho al principio.
2. **Dé a cada agente su propia identidad.** Use una cuenta separada con permisos mínimos, limitada a su tarea, y rote o haga caducar las credenciales. No reutilice una cuenta de administrador humano.
3. **Elija el nivel de autonomía según el riesgo.** Deje que el agente sugiera primero, luego actúe en tareas reversibles de bajo riesgo y exija aprobación para todo lo importante o irreversible. Escriba los niveles de cada tarea.
4. **Diseñe aprobaciones que la gente lea.** Muestre la acción propuesta, la razón, la evidencia y el efecto. Mantenga las aprobaciones lo bastante raras como para que se lean y muestree los elementos aprobados para comprobar su calidad.
5. **Pruebe primero en un entorno aislado.** Ejecute el agente contra una copia segura con casos realistas, incluidos los adversarios, antes de que toque producción.
6. **Trate las entradas como no fiables.** No deje que el contenido de tickets, correos o la web conceda autoridad. Limite las herramientas disponibles cuando el agente procese contenido no fiable.
7. **Limite el radio de la explosión.** Fije límites al número de acciones, a la cantidad de cambio, al gasto y al tiempo. Haga de una acción masiva un paso separado y aprobado.
8. **Registre todo y revíselo.** Conserve el rastro completo, guárdelo donde el agente no pueda alterarlo y revise muestras con regularidad. Alerte ante patrones inusuales.
9. **Construya y pruebe el interruptor de apagado.** Hágalo rápido, independiente del agente y conocido por las personas de guardia. Ensáyelo.
10. **Amplíe la autonomía despacio.** Conceda más solo tras un periodo de buenos resultados, con la aprobación de un responsable designado y una tasa de error medida. Redúzcala cuando surjan problemas.

## Preguntas para conversar con su equipo

**¿Qué es lo peor que podría hacer este agente con los permisos que planeamos darle?**
Recorran los permisos herramienta por herramienta. Esperen incomodidad. Después eliminen o restrinjan todo permiso cuyo peor caso no aceptaríamos.

**¿Cuáles de sus acciones podemos deshacer y cuáles no?**
Enumérenlas. Esperen algunas irreversibles que se suponían seguras. Después exijan aprobación para cada acción irreversible.

**¿Cómo sabrán quienes aprueban qué están aprobando y con qué frecuencia verán una solicitud?**
Imaginen a quien aprueba en un día ajetreado. Esperen solicitudes largas y de aspecto similar. Después diseñen un resumen y un límite al volumen de aprobaciones.

**¿Qué tendría que poner alguien en un ticket o un correo para que el agente hiciera algo que no queremos?**
Pruébenlo como un atacante. Esperen sorpresas. Después elijan mitigaciones, como restringir las herramientas al leer contenido no fiable.

**Si tuviéramos que detenerlo ahora mismo, ¿quién lo haría, cómo y cuánto tardaría?**
Pidan los pasos y ensayen. Esperen incertidumbre. Después escriban un procedimiento de detención de una página y pruébenlo.

**¿Quién es responsable de este agente y qué revisa cada semana?**
Nombren a la persona y la revisión. Esperen brechas. Después asignen la responsabilidad y una revisión semanal por muestreo con preguntas definidas.

## En la práctica: un ejemplo de gestión de servicios

El equipo de infraestructura de una agencia tributaria nacional quiere un agente que investigue por la noche las alertas de producción. Actualmente se despierta a un ingeniero de guardia por la mayoría de las alertas, que dedica de 15 a 30 minutos a recoger contexto y a menudo descubre que la causa es un problema conocido con una solución documentada.

El equipo diseña el agente en tres etapas. En la etapa uno, el agente tiene acceso de solo lectura: puede consultar métricas, registros, registros de cambios recientes y la base de conocimiento, y publicar un resumen en el canal del incidente con la evidencia que usó. En la etapa dos, también puede realizar una lista pequeña de acciones reversibles, como reiniciar un servicio sin estado o escalar un conjunto de trabajadores en dos instancias, solo cuando la alerta coincide con un runbook documentado, con un límite de tres acciones por hora y un mensaje al canal tras cada una. En la etapa tres, que aún no está aprobada, se le permitiría proponer cambios de configuración para su aprobación humana.

El agente tiene su propia cuenta de servicio con acceso de solo lectura a producción, más las dos acciones nombradas. Lee texto de tickets y registros, que podrían contener contenido hostil, así que cuando lee texto libre no puede llamar a ninguna herramienta de acción en el mismo paso. El registro completo del agente de solicitudes, llamadas a herramientas y resultados va a un almacén de registros aparte. Un ingeniero veterano es responsable del agente, revisa diez sesiones cada semana y puede deshabilitar sus credenciales con un solo comando, lo que el equipo ensaya cada mes.

Tras dos meses en la etapa uno, los ingenieros de guardia encuentran correctos los resúmenes en el 85 por ciento de los casos. En el 10 por ciento pasan por alto un cambio relevante porque el registro del cambio estaba incompleto, y en el 5 por ciento apuntan al componente equivocado. La etapa dos empieza con un runbook. En el primer mes, el agente reinicia un servicio tres veces, correctamente. En una prueba con un ticket manipulado que contenía una instrucción oculta de escalar un conjunto a un número muy alto, el límite de frecuencia y la regla de acciones lo detienen.

Qué cambia: se despierta a los ingenieros con menos frecuencia y llegan con un resumen y evidencia. Qué sigue siendo difícil: la dependencia del agente de registros de cambios exactos deja al descubierto brechas de calidad de datos; los ingenieros a veces confían en el resumen más que en sus propias comprobaciones; y el equipo de seguridad ha pedido que se amplíe y revise la conservación del registro de auditoría. El responsable lo anota y mantiene en suspenso la etapa tres hasta medir la tasa de error de la etapa dos durante un trimestre.

## Cuatro perspectivas

### Equipos de producto y de entrega

Expongan herramientas seguras y estrechas con permisos claros, límites de frecuencia y registros. No den a los agentes acceso general a sus pipelines o datos. Incluyan a los agentes en sus modelos de amenazas.

### Equipos de servicio y de operaciones

Sean dueños del alcance del agente, revisen su registro y ensayen su detención. Mantengan exactos los runbooks, porque los agentes dependen de ellos. Informen de errores y casi accidentes.

### Liderazgo y gobernanza

Decida qué autonomía es aceptable para cada tarea y exija un responsable designado y un rastro de auditoría. Pida evidencia de ensayos etapa por etapa y esté dispuesto a reducir la autonomía. No se apoye solo en las garantías del proveedor.

### Clientes y usuarios

Debería saber cuándo un agente automatizado actúa sobre su solicitud y tener una vía hacia una persona que pueda corregir un error. Diga al proveedor si una acción automatizada fue errónea.

## Ágil, IA, automatización y analítica

### Ágil

Amplíe la autonomía en pasos pequeños con evidencia, revise cada paso con las partes interesadas y mantenga pequeña cada liberación. Precaución: la iteración rápida puede adelantarse a la revisión de seguridad; mantenga una puerta para cada aumento de autonomía.

### IA

El agente es un sistema de IA con un responsable, casos de prueba y monitorización, y necesita un cuidado especial porque actúa. Protéjase de la inyección de prompts y de la confianza excesiva. Precaución: no se apoye en instrucciones que digan al modelo que tenga cuidado como control principal; apóyese en permisos, límites y aprobación. Véase el Tema 5.6 — Gobernanza, riesgo y cumplimiento de la IA.

### Automatización

Los agentes se conectan con la automatización: seleccionan y disparan acciones. Mantenga deterministas y probadas las propias acciones, con su propia validación, para que la elección del agente se limite a opciones aprobadas. Precaución: una automatización que acepta comandos de forma libre de un agente es tan arriesgada como el agente; exponga acciones estrechas y con nombre. Véase el Tema 6.6 — Automatización de runbooks y autorremediación.

### Analítica

Mida las acciones realizadas, las tasas de aprobación, las anulaciones, los errores hallados en la revisión, el tiempo ahorrado y los casi accidentes. Precaución: una tasa de aprobación alta puede significar buenas propuestas o firmar sin mirar; muestree los elementos aprobados. Véanse el libro *Service Management Metrics* y el Tema 7.3 — Medición e informes.

## Modos de fallo habituales

- **Permisos amplios.** Se da al agente una cuenta de administrador compartida. Use una identidad separada de mínimo privilegio.
- **Aprobaciones que nadie lee.** Las solicitudes frecuentes y vagas se firman sin mirar. Hágalas raras, claras y muestreadas.
- **El texto hostil dirige al agente.** El contenido de tickets o páginas web emite comandos. Restrinja las herramientas alrededor de la entrada no fiable.
- **Sin límites.** Un bucle o un error se ejecuta a velocidad de máquina. Limite acciones, gasto y alcance.
- **Sin botón de parada.** Nadie puede detenerlo. Construya y ensaye un interruptor de apagado.
- **Sin registro.** No se pueden investigar los incidentes. Conserve un rastro de auditoría completo y protegido.
- **Autonomía elevada por entusiasmo.** El agente recibe más poder sin evidencia. Amplíe por pasos con medidas.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Alcance y permisos | Amplios o poco claros | Ensayo estrecho | Alcance escrito, identidad propia, mínimo privilegio | Alcance y permisos revisados con regularidad | Permisos que se adaptan según el riesgo con aprobación |
| Supervisión | Ninguna | Revisión informal | Niveles de autonomía y puertas de aprobación definidos | Calidad de las aprobaciones muestreada y medida | Supervisión ajustada con evidencia entre agentes |
| Controles de seguridad | Ninguno | Registro básico | Entorno aislado, límites e interruptor de apagado probados | Controles auditados y ejercitados | Controles integrados en la plataforma para todos los agentes |
| Responsabilidad | Poco clara | Lo posee quien lo construyó | Responsable designado con revisión semanal | El responsable revisa medidas e incidentes | Responsabilidad coordinada entre agentes y equipos |

## Lista de verificación

- [ ] El agente tiene un alcance escrito y un responsable designado.
- [ ] Usa su propia identidad con permisos de mínimo privilegio.
- [ ] Los niveles de autonomía están definidos por tarea, con aprobación para las acciones importantes o irreversibles.
- [ ] Las aprobaciones muestran lo que va a ocurrir y se muestrean para comprobar su calidad.
- [ ] Lo probamos en un entorno aislado, incluidas entradas adversarias.
- [ ] Los límites acotan acciones, gasto y alcance.
- [ ] Su registro completo se guarda donde no puede alterarlo y se revisa.
- [ ] Tenemos un interruptor de apagado y hemos ensayado su uso.

## Prompts de IA

**Pruebe el alcance de un agente.**

```text
Our agent's written scope is: [paste]. Its tools and permissions: [list].
List twenty scenarios, some inside the scope, some at the edge, and some that try to get the agent to act outside it or to use a tool in a harmful way, and for each state what the correct behavior is. Do not include real systems or data.
List what you are unsure of.
```

**Revise un registro de acciones.**

```text
Here is a sample of an agent's action log, with identifiers removed: [paste].
List actions that look unusual in size, timing, or target, actions that did not match a documented runbook, and anything that looks like the agent following instructions from untrusted text. Quote each. Do not say whether the agent was right.
List what you are unsure of.
```

**Redacte un mensaje de aprobación.**

```text
The agent proposes this action: [describe]. The evidence it used: [list]. What would change if it were done: [describe]. How to undo it: [describe or write "not known"].
Write a clear approval request of under 100 words for a busy approver, stating what will happen, why, the risk, and how to undo it. Do not recommend approval.
List what you are unsure of.
```

## Habilidades de IA

- [risk-register](../../../../skills/risk-register/SKILL.md): úsela para registrar los riesgos de los agentes, los responsables y las decisiones.
- [runbook](../../../../skills/runbook/SKILL.md): úsela para definir las acciones que un agente puede realizar y cuándo.
- [security-testing](../../../../skills/security-testing/SKILL.md): úsela para probar los agentes contra entradas hostiles.
- [incident-response-plan](../../../../skills/incident-response-plan/SKILL.md): úsela para planificar las respuestas cuando un agente se comporta mal.
- [mlops](../../../../skills/mlops/SKILL.md): úsela para monitorizar y versionar los modelos que hay detrás de los agentes.

## Fuentes principales

- NIST, AI Risk Management Framework: una estructura para gobernar los riesgos de la IA, incluidos los de los sistemas autónomos.
- OWASP, orientación sobre riesgos de aplicaciones construidas con grandes modelos de lenguaje (owasp.org): incluidas la inyección de prompts y la agencia excesiva.
- Wikipedia, "AI agent" y "Prompt injection": visiones generales de la idea y de un riesgo de seguridad principal.
- Wikipedia, "Principle of least privilege": el control básico para limitar el daño.

## Referencias

1. Intelligent agent — Wikipedia — https://en.wikipedia.org/wiki/Intelligent_agent
2. AI agent — Wikipedia — https://en.wikipedia.org/wiki/AI_agent
3. Human-in-the-loop — Wikipedia — https://en.wikipedia.org/wiki/Human-in-the-loop
4. Principle of least privilege — Wikipedia — https://en.wikipedia.org/wiki/Principle_of_least_privilege
5. Confused deputy problem — Wikipedia — https://en.wikipedia.org/wiki/Confused_deputy_problem
6. Prompt injection — Wikipedia — https://en.wikipedia.org/wiki/Prompt_injection
7. Sandbox (computer security) — Wikipedia — https://en.wikipedia.org/wiki/Sandbox_(computer_security)
8. Kill switch — Wikipedia — https://en.wikipedia.org/wiki/Kill_switch
9. Audit trail — Wikipedia — https://en.wikipedia.org/wiki/Audit_trail
10. Automation bias — Wikipedia — https://en.wikipedia.org/wiki/Automation_bias
11. Rate limiting — Wikipedia — https://en.wikipedia.org/wiki/Rate_limiting
12. OWASP — OWASP Foundation — https://owasp.org
