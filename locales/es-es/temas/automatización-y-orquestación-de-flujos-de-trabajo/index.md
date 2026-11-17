# Automatización y orquestación de flujos de trabajo

**La automatización de flujos de trabajo mueve el trabajo entre personas y sistemas según reglas; la orquestación coordina muchos de esos pasos entre herramientas, con aprobaciones, reintentos y un registro del estado; funcionan cuando los flujos son simples, idempotentes, observables y diseñados para las personas que deben intervenir.**

## Por qué importa

Gran parte del trabajo de servicio es una carrera de relevos. Una solicitud empieza en un portal, pasa a un directivo para su aprobación, crea una cuenta en un sistema, un buzón en otro, una licencia en un tercero, un ticket para instalaciones y un mensaje para quien la pidió. Cada traspaso del testigo es una oportunidad de esperar, de perder información o de ser olvidado. Cuando las personas hacen los traspasos por correo y de memoria, el retraso y el error vienen incorporados.

La automatización de flujos de trabajo sustituye los traspasos por un flujo definido. El sistema conoce los pasos, quién o qué hace cada uno, qué hacer cuando un paso falla y qué ha ocurrido hasta el momento. La orquestación es la misma idea a mayor escala: un coordinador que llama a muchos sistemas en el orden correcto, espera resultados y maneja los casos incómodos. Wikipedia describe los flujos de trabajo, los sistemas de gestión de flujos de trabajo y la orquestación en informática como formas de definir y ejecutar esos flujos.

La promesa es un trabajo más rápido y coherente con un registro visible. Los riesgos son familiares de otras automatizaciones: un proceso defectuoso se endurece en código, un fallo a mitad de camino deja las cosas incoherentes y un cambio en un sistema conectado rompe el flujo en silencio. Un buen diseño los anticipa. Este tema describe los principales bloques de construcción, los patrones que mantienen fiables los flujos y el lugar de las personas en ellos. Se apoya en el Tema 6.1 — Estrategia de automatización, se relaciona con las solicitudes de servicio (Tema 3.6 — Gestión de Solicitudes de Servicio) y conduce al autoservicio (Tema 6.5 — Autoservicio y cumplimiento automatizado) y a los pipelines (Tema 6.4 — Pipelines y cambio automatizado).

## Conceptos clave

**Flujo de trabajo.** Una secuencia de pasos, con reglas sobre quién o qué realiza cada uno, en qué orden y en qué condiciones. Wikipedia describe el flujo de trabajo como un patrón de actividad orquestado y repetible. Un flujo puede ser tan simple como «cuando un ticket se marca como resuelto, avisar a quien lo pidió» o tan complejo como un recorrido completo de incorporación de personal.

**Motor de flujos de trabajo.** Software que ejecuta flujos: lleva el seguimiento del estado de cada instancia, ejecuta los pasos, espera eventos y registra lo ocurrido. Wikipedia describe los motores de flujos de trabajo y los sistemas de gestión de flujos de trabajo. Muchas plataformas de tickets incluyen uno, y existen plataformas independientes para los flujos entre sistemas.

**Orquestación.** Coordinar varias tareas y servicios automatizados en un solo proceso, normalmente desde un controlador central que llama a cada uno por turno. Wikipedia describe la orquestación en informática. Contrasta con la coreografía, en la que los servicios reaccionan a eventos sin un controlador central. La orquestación es más fácil de ver y de depurar; la coreografía puede ser más resiliente y escalable. Muchas organizaciones usan ambas.

**Modelado.** Los flujos pueden dibujarse con una notación como el Business Process Model and Notation (BPMN), descrito en Wikipedia, y luego ejecutarse. Los diagramas ayudan a las personas de negocio y técnicas a acordar un flujo. Manténgalos legibles y mantenga alineados el modelo y el flujo en ejecución.

**Estado.** Lo que se ha hecho hasta el momento en una instancia de un flujo. Conocer el estado permite al sistema reanudar tras un fallo, mostrar el progreso e informar. Wikipedia describe las máquinas de estados finitos, una forma útil de pensar una solicitud que está «enviada», «aprobada», «atendida» y «cerrada».

**Desencadenantes y eventos.** Un flujo empieza desde un desencadenante: un formulario, un mensaje, un calendario, un cambio en un sistema. Los enfoques dirigidos por eventos, descritos en Wikipedia como arquitectura dirigida por eventos, permiten que los sistemas anuncien lo ocurrido para que otros reaccionen. Los webhooks, también descritos allí, son una forma común de que un sistema avise a otro.

**Integración.** Los flujos llaman a otros sistemas mediante interfaces de programación de aplicaciones (API), conectores o plataformas de integración. Wikipedia describe las API y la integración de aplicaciones empresariales. La integración es donde se rompen la mayoría de los flujos, porque los sistemas cambian sus interfaces, límites de frecuencia y credenciales.

**Idempotencia y reintentos.** Una operación es idempotente si hacerla dos veces tiene el mismo efecto que hacerla una. Wikipedia describe la idempotencia. Cuando un paso falla o agota el tiempo, la respuesta segura suele ser reintentar, lo cual solo es seguro si el paso es idempotente. Los reintentos deben esperar más cada vez, una técnica descrita en Wikipedia como retroceso exponencial (exponential backoff), y detenerse tras un límite.

**Tratamiento de fallos.** ¿Qué ocurre cuando falla el paso cuatro de siete? Las opciones incluyen reintentar, omitir, compensar los pasos anteriores deshaciéndolos o detenerse y preguntar a una persona. Los flujos de larga duración que abarcan varios sistemas no pueden depender de una única transacción; Wikipedia describe el enfoque de saga, en el que cada paso tiene una acción compensatoria. Los fallos que no pueden tratarse automáticamente deben ir a una cola con un responsable claro, no desaparecer. Wikipedia describe las colas de mensajes no entregados (dead letter queues) para los mensajes que no pueden procesarse.

**Tareas humanas y aprobaciones.** Muchos flujos necesitan a una persona: para aprobar, decidir o hacer algo que no puede automatizarse. Wikipedia describe los sistemas con humano en el circuito. Diseñe estas tareas con cuidado: a quién se pide, cómo se le recuerda, qué ocurre si no responde y qué información ve. Una aprobación que espera indefinidamente paraliza el flujo.

**Observabilidad y auditoría.** Cada instancia debe poder rastrearse: qué la desencadenó, qué hizo cada paso, cuál fue el resultado y quién aprobó. Wikipedia describe los rastros de auditoría. Esto respalda las preguntas de soporte («¿dónde está mi solicitud?»), la resolución de problemas y el cumplimiento. Véase el Tema 7.4 — Observabilidad y telemetría.

**Bajo código y automatización robótica de procesos.** Las plataformas de bajo código y la automatización robótica de procesos (RPA) permiten a personas que no son programadoras construir flujos o automatizar acciones en interfaces de usuario. Wikipedia describe ambas. Aceleran los casos simples y pueden producir automatizaciones frágiles y sin responsable a escala. Aplique la misma responsabilidad, pruebas y revisión que aplicaría al código.

**Versionado y cambio.** La definición de un flujo cambia con el tiempo mientras siguen ejecutándose instancias. Decida cómo tratar las instancias en curso cuando cambie la definición. Guarde las definiciones en control de versiones y pruebe los cambios antes de desplegarlos. Véase el Tema 3.4 — Habilitación de Cambios.

**Seguridad.** Los flujos guardan credenciales y llaman a sistemas con poder. Dé a cada uno su propia identidad con permisos mínimos, guarde los secretos con seguridad y revise quién puede cambiar un flujo. Véase el Tema 3.13 — Gestión de la Seguridad de la Información.

**Cómo encajan las lentes.** Las herramientas de flujos de trabajo son la fontanería de la lente de automatización. La práctica ágil sugiere construir un flujo en pasos pequeños con los usuarios. La IA puede clasificar solicitudes, redactar contenido y hacer sugerencias dentro de un flujo, con revisión humana. La analítica usa los datos de estado y de tiempos para encontrar retrasos.

## Buenas prácticas

1. **Mapee y simplifique antes de construir.** Dibuje el proceso tal como es, elimine los pasos que no añaden valor y acuerde el flujo futuro con las personas implicadas. Véase el Tema 6.1 — Estrategia de automatización.
2. **Mantenga los flujos pequeños y claros.** Prefiera varios flujos cortos con traspasos definidos a uno enorme. Nombre los pasos en lenguaje sencillo para que el personal de soporte pueda seguirlos.
3. **Diseñe cada paso para que sea seguro repetirlo.** Haga idempotentes los pasos donde pueda, para que reintentar sea inofensivo. Donde no pueda, añada comprobaciones que detecten que el paso ya ocurrió.
4. **Planifique el fallo.** Para cada paso, decida qué ocurre ante el fallo: reintentar con retroceso y un límite, compensar o pasar a una persona. Envíe los fallos sin resolver a una cola visible con un responsable.
5. **Trate las tareas humanas como ciudadanas de primera.** Especifique quién, qué ve, cuánto tiempo tiene, recordatorios y qué ocurre ante el agotamiento del plazo o la ausencia. Proporcione un suplente.
6. **Muestre el estado a los usuarios.** Deje que quienes piden vean dónde está su solicitud y qué se espera a continuación. Envíe notificaciones en puntos significativos, no en cada paso.
7. **Registre y rastree cada instancia.** Anote los desencadenantes, las entradas, las salidas, las decisiones y quienes aprobaron. Facilite buscar una instancia por su referencia.
8. **Controle los cambios en los flujos.** Guarde las definiciones en control de versiones, revise los cambios, pruébelos en un entorno seguro y decida cómo tratar las instancias en ejecución.
9. **Gestione las conexiones.** Mantenga un registro de integraciones con responsables, credenciales y puntos de contacto de cada sistema. Monitorice los fallos y esté atento a los cambios anunciados en las interfaces.
10. **Revise el rendimiento.** Observe el tiempo por paso, las esperas, los fallos y las excepciones. Use los datos para eliminar cuellos de botella y retirar los flujos que nadie usa.

## Preguntas para conversar con su equipo

**¿Cuáles de nuestros procesos pasan más trabajo entre personas y sistemas y dónde se pierde trabajo?**
Sigan un ejemplo real. Esperen un traspaso por correo o chat en algún punto. Después elijan un traspaso para automatizar.

**¿Qué ocurre hoy cuando un paso falla a mitad de un proceso y quién lo sabe?**
Piensen en una creación de cuenta que tuvo éxito en un sistema y falló en otro. Esperen incoherencia. Después diseñen una ruta de fallo para un flujo.

**¿Cuáles de nuestras aprobaciones se estancan y qué debería ocurrir si quien aprueba no responde?**
Miren los elementos que llevan más tiempo esperando. Esperen largos retrasos. Después acuerden un recordatorio, un suplente y una regla de agotamiento del plazo.

**¿Quién es responsable de cada integración en la que se apoyan nuestros flujos y cómo sabríamos que se rompió?**
Enumeren las integraciones. Esperen huérfanas. Después nombren responsables y añadan una alerta de fallos.

**¿Qué flujos construyó una persona con una herramienta de bajo código y quizá no los entienda nadie más?**
Pregunten por ahí. Esperen varios. Después documenten los tres principales y pónganlos en control de versiones o en un registro compartido.

**¿Dónde podría ayudar la IA dentro de un flujo y dónde debe decidir una persona?**
La IA puede clasificar, redactar y sugerir. Una persona debe decidir sobre el acceso y el dinero. Después elijan un paso para probar con revisión y una medida de encaminamiento correcto.

## En la práctica: un ejemplo de gestión de servicios

Los equipos de RR. HH. y de TI de un banco regional gestionan por correo los eventos de «alta, movimiento y baja». Una persona recién incorporada necesita una cuenta, un portátil, acceso al edificio, un registro de nómina y la inscripción en la formación, atendidos por cinco equipos. Cada equipo recibe un correo de RR. HH., hace su parte y a veces responde. Aproximadamente una de cada cinco personas nuevas carece de algo el primer día.

La gerente de servicios propone un único flujo en la plataforma de tickets del banco, que tiene un motor de flujos de trabajo y conectores. Empieza por mapear el proceso con los cinco equipos y descubre que tres de las aprobaciones nunca se rechazan. El nuevo diseño elimina dos y conserva una, la del jefe de la persona nueva. El registro de RR. HH. de la nueva contratación desencadena el flujo. Crea un caso padre con cinco tareas hijas, cada una asignada a la cola del equipo correcto, que se ejecutan en paralelo donde es posible. La creación de la cuenta se automatiza con un conector del sistema de identidad; la tarea del portátil va a un técnico; el acceso al edificio va a instalaciones con la fecha de inicio.

El equipo diseña para el fallo. La creación de la cuenta es idempotente: el conector comprueba si la cuenta existe antes de crearla. Si el conector falla dos veces con retroceso, la tarea pasa a una cola de técnicos con el error adjunto y se envía una alerta al responsable del flujo. Las tareas humanas tienen recordatorios al cabo de un día y escalan a un jefe de equipo a los tres. Cada caso muestra su estado a RR. HH. y al jefe de la persona nueva.

Tras tres meses, la proporción de personas nuevas que carecen de algo el primer día baja a alrededor del 4 por ciento. El rastro de auditoría permite al centro de servicios responder a «¿dónde está?» en un minuto. Qué sigue siendo difícil: el conector de nómina depende de una interfaz del proveedor que cambió una vez sin aviso, lo que provocó una ejecución fallida que nadie vio durante dos días hasta que se añadió la alerta; el equipo de instalaciones sigue trabajando con una hoja de cálculo y copia a mano los datos del caso; y los eventos de movimiento y baja tienen más excepciones y aún no se han incluido. La gerente planifica a continuación los eventos de movimiento y pide al proveedor avisos de cambios.

## Cuatro perspectivas

### Equipos de producto y de entrega

Expongan API y eventos estables y documentados que los flujos puedan usar, con mensajes de error claros. Avisen con antelación de los cambios a los responsables de los flujos. Usen las mismas ideas para sus propios flujos de liberación.

### Equipos de servicio y de operaciones

Sean dueños de los flujos y las integraciones que operan: registros, alertas, colas de fallos y documentación. Atiendan las excepciones con prontitud y lleven los patrones al responsable del flujo.

### Liderazgo y gobernanza

Pida la vista del recorrido, con un responsable para cada flujo entre equipos. Financie el mantenimiento de las integraciones. Busque evidencia de un flujo más rápido y fiable, no un recuento de flujos.

### Clientes y usuarios

Debería ver el estado de su solicitud y obtener lo que pidió sin tener que perseguirlo. Cuando un paso necesite una aportación suya, debería estar claro qué se necesita y para cuándo.

## Ágil, IA, automatización y analítica

### Ágil

Construya los flujos de un recorrido cada vez con las personas que los usan, libere pequeñas mejoras y revise los resultados. Precaución: un despliegue de plataforma que migra todos los procesos a la vez multiplica el riesgo; empiece con un recorrido.

### IA

La IA puede clasificar solicitudes entrantes, extraer detalles de texto libre, redactar mensajes y sugerir el encaminamiento, con una persona o una regla que compruebe antes de las acciones. Nombre un responsable y siga las correcciones. Precaución: un paso de IA en un flujo puede enviar trabajo al lugar equivocado a escala; muestree los resultados y mantenga una cola de respaldo. Véase el Tema 5.1 — IA en la gestión de servicios.

### Automatización

Los flujos de trabajo son el núcleo de esta lente. Construya con pasos idempotentes, límites y registros, y mantenga cada integración con responsable y monitorizada. Precaución: un flujo que toca muchos sistemas puede extender un error ampliamente; añada límites de frecuencia y un interruptor de parada. Véase el Tema 6.1 — Estrategia de automatización.

### Analítica

Use los datos del flujo para el tiempo por paso, la espera de aprobaciones, las tasas de fallo, las excepciones y el volumen por tipo. Precaución: los datos de tiempos reflejan cómo se definen los pasos y pueden manipularse dividiendo o reclasificando tareas; contraste con casos de muestra. Véanse el Tema 7.6 — Analítica de procesos y de flujos de valor y el libro *Service Management Metrics*.

## Modos de fallo habituales

- **Automatizar un mal proceso.** Se conserva el desperdicio. Simplifique y acuerde primero el flujo.
- **Sin diseño de fallos.** Un paso falla y la instancia queda atascada. Defina reintentos, compensación y colas.
- **Reintentos no idempotentes.** Se crean duplicados. Haga seguros los pasos para repetirlos o compruebe primero.
- **Aprobaciones que se estancan.** El trabajo espera a una persona ausente. Añada recordatorios, suplentes y plazos.
- **Fallo silencioso de una integración.** Un conector se rompe y nadie lo sabe. Monitorice y alerte.
- **Flujos de bajo código sin responsable.** Nadie los entiende. Regístrelos, documéntelos y revíselos.
- **Cambiar definiciones sin cuidado.** Se rompen las instancias en ejecución. Versione y pruebe los cambios.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Diseño | Traspasos por correo | Unos pocos flujos simples | Recorridos mapeados y simplificados con responsables | Flujos mejorados a partir de datos | Recorridos orquestados entre sistemas y socios |
| Fiabilidad | Se rompe sin que se note | Alertas básicas | Reintentos definidos, colas de fallos y pasos idempotentes | Fallos medidos y reducidos | Flujos que se autocomprueban con escalamiento humano |
| Tareas humanas | Ad hoc | Aprobaciones por correo | Tareas definidas, recordatorios y suplentes | Retrasos de las tareas medidos | Tareas humanas equilibradas y automatizadas según el riesgo |
| Control | Sin registros | Algunos registros | Control de versiones, rastro de auditoría y registro | Cambios revisados y auditados | Gobierno integrado con la plataforma |

## Lista de verificación

- [ ] Mapeamos y simplificamos cada proceso antes de automatizarlo.
- [ ] Los flujos son pequeños, tienen nombres en lenguaje sencillo y tienen responsable.
- [ ] Los pasos son idempotentes o están protegidos contra la duplicación.
- [ ] Las rutas y colas de fallos están definidas, con alertas.
- [ ] Las tareas humanas tienen recordatorios, suplentes y plazos.
- [ ] Cada instancia se registra y se puede rastrear.
- [ ] Las definiciones están en control de versiones y los cambios se prueban.
- [ ] Las integraciones tienen responsables y monitorización.

## Prompts de IA

**Convierta un procedimiento en un esquema de flujo.**

```text
Here is a description of how we handle [type of request] today: [paste steps and who does each].
Draft a workflow outline with: trigger, steps (marking each as automated, human, or approval), data passed between steps, and for each step what should happen on failure or no response. Mark every assumption. Do not invent systems or rules.
List what you are unsure of.
```

**Encuentre puntos de fallo en un flujo.**

```text
Here is our workflow definition in plain text: [paste].
List each step that calls another system, what could go wrong, whether it appears to be safe to retry, and what information a support person would need to fix it. Do not rewrite the workflow.
List what you are unsure of.
```

**Analice retrasos a partir de datos del flujo.**

```text
Here is an export of workflow instances with step names, start and end times, and outcome, with identifiers removed: [paste].
Compute median and 90th percentile time for each step, list the three longest waits, count failures by step, and list questions to investigate. Do not infer causes.
List what you are unsure of.
```

## Habilidades de IA

- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): úsela para analizar pasos, esperas y traspasos.
- [value-stream-map](../../../../skills/value-stream-map/SKILL.md): úsela para ver el recorrido completo entre equipos.
- [mermaid-diagram](../../../../skills/mermaid-diagram/SKILL.md): úsela para dibujar flujos en texto para su revisión.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md): úsela para asignar quién hace y quién aprueba cada paso.
- [change-request](../../../../skills/change-request/SKILL.md): úsela para describir los cambios en las definiciones de flujos.

## Fuentes principales

- OMG, especificación Business Process Model and Notation (BPMN): la notación estándar para diagramas de procesos.
- Gregor Hohpe y Bobby Woolf, *Enterprise Integration Patterns* (2003): un catálogo de patrones para conectar sistemas.
- Wikipedia, "Workflow" y "Orchestration (computing)": visiones generales de las ideas.
- Wikipedia, "Idempotence": la propiedad que hace seguros los reintentos.

## Referencias

1. Workflow — Wikipedia — https://en.wikipedia.org/wiki/Workflow
2. Workflow engine — Wikipedia — https://en.wikipedia.org/wiki/Workflow_engine
3. Workflow management system — Wikipedia — https://en.wikipedia.org/wiki/Workflow_management_system
4. Orchestration (computing) — Wikipedia — https://en.wikipedia.org/wiki/Orchestration_(computing)
5. Business Process Model and Notation — Wikipedia — https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation
6. Finite-state machine — Wikipedia — https://en.wikipedia.org/wiki/Finite-state_machine
7. Event-driven architecture — Wikipedia — https://en.wikipedia.org/wiki/Event-driven_architecture
8. Idempotence — Wikipedia — https://en.wikipedia.org/wiki/Idempotence
9. Exponential backoff — Wikipedia — https://en.wikipedia.org/wiki/Exponential_backoff
10. Dead letter queue — Wikipedia — https://en.wikipedia.org/wiki/Dead_letter_queue
11. Human-in-the-loop — Wikipedia — https://en.wikipedia.org/wiki/Human-in-the-loop
12. Audit trail — Wikipedia — https://en.wikipedia.org/wiki/Audit_trail
