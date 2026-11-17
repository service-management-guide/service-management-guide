# Gestión de Solicitudes de Servicio

**La gestión de solicitudes de servicio atiende las cosas planificadas y repetibles que piden los usuarios, como accesos, equipos e información, como servicios estandarizados con formularios, aprobaciones y pasos de cumplimiento claros; el objetivo es hacer rápidas y predecibles las solicitudes rutinarias y automatizar lo que pueda automatizarse con seguridad.**

## Por qué importa

Gran parte del trabajo de un centro de servicios no trata de cosas rotas. Trata de personas que necesitan cosas: una cuenta nueva, acceso a una carpeta, una licencia de software, un teléfono móvil, una reserva de sala, un cambio de nombre. Estas solicitudes son predecibles y se repiten. Atender cada una como una conversación única hace perder el tiempo tanto de quien pide como de quien cumple.

Cuando las solicitudes se estandarizan, se vuelven rápidas. Quien pide ve una descripción de lo que puede solicitar, llena un formulario breve que recoge lo que necesita quien cumple y obtiene un estado claro. Las aprobaciones se dan solo donde hacen falta. Los pasos de cumplimiento se documentan, se comparten en el equipo y, donde es seguro, se automatizan. El tiempo dedicado a lo rutinario baja y se libera atención para trabajos más difíciles.

Las solicitudes mal gestionadas causan daños propios. Los formularios poco claros generan preguntas repetidas. Las aprobaciones que nadie lee añaden días. El acceso concedido sin comprobaciones se convierte en un riesgo de seguridad, y el acceso que nunca se retira, en otro distinto. Este tema explica cómo diseñar, operar y mejorar el cumplimiento de solicitudes y cómo se conecta con el catálogo de servicios (Tema 3.8 — Gestión del Catálogo de Servicios), el centro de servicios (Tema 3.1 — Centro de Servicios) y la automatización (Tema 6.5 — Autoservicio y cumplimiento automatizado).

## Conceptos clave

**Solicitud de servicio.** En ITIL 4, una petición de un usuario o de su representante autorizado que inicia una acción de servicio acordada como parte normal de la prestación del servicio. Los ejemplos incluyen una solicitud de información, de acceso, de un artículo estándar y de un cambio estándar. Una solicitud de servicio no es un fallo: es algo que el proveedor ha aceptado hacer.

**Solicitud frente a incidente.** Un incidente es una interrupción no planificada o una reducción de calidad; una solicitud es un pedido planificado y estándar. «Mi portátil no enciende» es un incidente. «Necesito un portátil» es una solicitud. Algunos sistemas los tratan en una sola herramienta con flujos de trabajo distintos. Mezclarlos en una sola cola oculta la diferencia en cómo debe tratarse cada uno. Véase el Tema 3.2 — Gestión de Incidentes.

**Modelo de solicitud.** Una descripción predefinida de cómo se atiende un tipo particular de solicitud: la información necesaria, las reglas de aprobación, los pasos, quién hace cada uno, el plazo objetivo y la forma de informar al usuario. Los artículos de Wikipedia sobre flujos de trabajo y estandarización describen ideas generales. Un modelo se escribe una vez, se mejora con el tiempo y se reutiliza.

**Entrada del catálogo.** Cada tipo de solicitud aparece en el catálogo de servicios con un nombre claro para el usuario, una descripción, quién puede pedirla y el plazo esperado. Véase el Tema 3.8 — Gestión del Catálogo de Servicios. Wikipedia describe los catálogos de servicios como una lista de los servicios ofrecidos.

**Aprobación.** Algunas solicitudes necesitan autorización, por ejemplo de un directivo o de quien controla el presupuesto. Un buen diseño limita las aprobaciones a donde aportan valor: donde se gasta dinero o donde se concede acceso a información sensible. Las cadenas de aprobación que existen por tradición y no por riesgo añaden retraso.

**Cumplimiento.** El trabajo de entregar lo solicitado. Puede ser manual, parcialmente automatizado o totalmente automatizado. Una progresión común es documentar los pasos, luego programar con scripts los repetitivos y después conectar el formulario directamente con el script.

**Autoservicio.** Los usuarios hacen solicitudes y las siguen mediante un portal o un chat sin involucrar al centro de servicios. Wikipedia describe el autoservicio como un sistema en el que las personas se sirven a sí mismas. Un buen autoservicio depende de formularios que los usuarios entiendan y de información de estado en la que puedan confiar. Véase el Tema 6.5 — Autoservicio y cumplimiento automatizado.

**Identidad y acceso.** Gran parte de las solicitudes se refiere al acceso. Los artículos de Wikipedia sobre la gestión de identidades y accesos y sobre el principio de mínimo privilegio describen las ideas principales: conceder solo el acceso necesario, verificar quién pide, registrar quién aprobó y retirar el acceso cuando ya no se necesita. Véase el Tema 3.13 — Gestión de la Seguridad de la Información.

**Altas, movimientos y bajas.** Los acontecimientos de la vida de las personas en una organización, como una persona nueva, alguien que cambia de puesto o alguien que se va, desencadenan paquetes de solicitudes. Tratarlos como un único recorrido con un responsable y una lista de comprobación evita pasos omitidos. Véase el Tema 1.9 — Gestión de servicios empresariales.

**Cambios estándar.** Muchas solicitudes son cambios estándar, que están preautorizados y son de bajo riesgo. Conectar ambas prácticas evita la duplicación de aprobaciones. Véase el Tema 3.4 — Habilitación de Cambios.

**Metas y expectativas.** Cada tipo de solicitud tiene un plazo de entrega esperado y los usuarios lo ven. Las metas deben ser realistas, basadas en el rendimiento real, y honestas donde el cumplimiento depende de un tercero.

**Costo y cargo.** Algunas solicitudes tienen un costo, como una licencia o un dispositivo. Mostrar el costo y quién paga ayuda a los usuarios a decidir y a los responsables a ver la demanda. Véase el Tema 4.5 — Gestión financiera y FinOps.

**Experiencia.** Una buena experiencia de solicitud significa que los usuarios pueden encontrar lo que quieren, entender el formulario, saber qué ocurre a continuación y recibirlo cuando se prometió. El artículo de Wikipedia sobre experiencia del cliente da un contexto general.

**Cómo encajan las lentes.** La gestión de solicitudes es el hogar de la mejora continua mediante cambios pequeños: simplificar un formulario, quitar una aprobación, automatizar un paso. La IA puede ayudar a los usuarios a encontrar la solicitud adecuada y rellenar el formulario, y ayudar a quienes cumplen a prepararse. La automatización hace el trabajo repetible. La analítica muestra la demanda y los retrasos.

## Buenas prácticas

1. **Describa las solicitudes con las palabras del usuario.** Nombre cada solicitud por lo que el usuario quiere, como «Acceso a una carpeta compartida», no por el objeto técnico. Pruebe los nombres con los usuarios.
2. **Mantenga breves los formularios.** Pregunte solo lo que necesita quien cumple y rellene de antemano lo que ya sabe. Pruebe el formulario con un usuario nuevo y observe dónde duda.
3. **Escriba un modelo de solicitud para cada tipo.** Registre entradas, aprobaciones, pasos, responsable, plazo objetivo y mensajes al usuario. Revise los modelos con regularidad frente a los datos reales.
4. **Apruebe solo donde aporte valor.** Para cada aprobación, nombre el riesgo que atiende y a la persona que lo entiende. Elimine las aprobaciones que nunca han rechazado ni cambiado una solicitud, tras consultar al responsable del riesgo.
5. **Muestre el estado y el plazo esperado.** Deje que los usuarios vean dónde está su solicitud y cuándo esperarla. Envíe un mensaje cuando algo cambie o se retrase.
6. **Automatice por pasos.** Empiece con un procedimiento manual claro, luego programe los pasos repetitivos y, por último, conecte el formulario con el script. Mantenga un registro y una alternativa manual.
7. **Trate el acceso con cuidado.** Verifique la identidad, conceda el mínimo privilegio, registre las aprobaciones, revise el acceso con regularidad y haga que retirarlo sea tan rutinario como concederlo. Véase el Tema 3.13 — Gestión de la Seguridad de la Información.
8. **Trate los acontecimientos de la vida laboral como recorridos.** Para altas, movimientos y bajas, cree un recorrido con un responsable, una lista de comprobación y un estado compartido entre equipos.
9. **Revise la demanda.** Observe qué solicitudes son más comunes, cuáles tardan más y cuáles se abandonan o se devuelven. Use los hallazgos para mejorar formularios y modelos.
10. **Retire y fusione tipos de solicitud.** Elimine los tipos que nadie usa y combine los casi duplicados. Un catálogo más corto es más fácil de usar.

## Preguntas para conversar con su equipo

**¿Cuáles son las diez solicitudes que recibimos con más frecuencia y cuánto tarda cada una?**
Use datos reales. Espere sorpresas: un número reducido de tipos suele constituir la mayor parte del volumen. Pregunte cuáles son lentas y por qué. Después elijan una para simplificar primero.

**¿Qué aprobaciones exigimos y qué riesgo atiende cada una?**
Recorra los pasos de aprobación. Espere algunos que nadie sepa explicar. Pregunte quién ha rechazado o cambiado una solicitud en el último año. Después prueben eliminar una aprobación, con el acuerdo del responsable del riesgo.

**¿Qué tienen que saber los usuarios para hacer una solicitud y qué les resulta confuso?**
Pregunte a los usuarios y a las personas nuevas. Espere confusión sobre nombres, formularios y a quién preguntar. Después reescriban un formulario y pruébenlo con cinco usuarios.

**¿Cuáles de nuestros pasos de solicitud son manuales y repetitivos y podrían programarse con scripts?**
Enumere los pasos y el tiempo de cada uno. Espere configuración de cuentas y accesos rutinarios. Pregunte qué podría salir mal si se automatiza. Después elijan un paso y acuerden salvaguardas, registro y una alternativa manual.

**¿Cómo retiramos el acceso cuando las personas cambian de puesto o se van?**
Esto prueba la otra mitad de la gestión de accesos. Espere brechas. Pregunte cuál fue el último hallazgo de auditoría. Después acuerden un responsable y un desencadenante para la retirada.

**¿Cómo podría ayudar la IA a los usuarios a encontrar y completar solicitudes y qué debe quedar en manos de una persona?**
La IA puede recomendar la solicitud adecuada y rellenar detalles. También puede elegir mal o conceder demasiado por sugerencia. Pregunte dónde debe aprobar una persona. Después elijan una prueba limitada a solicitudes de bajo riesgo con revisión.

## En la práctica: un ejemplo de gestión de servicios

El departamento de TI de la sede central de una gran cadena minorista atiende unas 2.500 solicitudes al mes. El personal se queja de que las solicitudes «caen en un agujero negro». El gerente de servicios revisa seis meses de datos y descubre que cinco tipos de solicitud suponen el 60 por ciento del volumen: alta de personal nuevo, acceso a carpetas compartidas, instalación de software, pedidos de teléfonos móviles y restablecimiento de contraseñas. El tiempo medio para cumplir una solicitud de carpeta compartida es de cuatro días, de los cuales tres se van esperando la aprobación del responsable de la carpeta, que a menudo no responde.

El gerente trabaja con los responsables para hacer tres cambios. Para las carpetas compartidas, el formulario muestra ahora el nombre del responsable, que aprueba desde un enlace de correo con un recordatorio al cabo de un día; para las carpetas clasificadas de sensibilidad baja, aprueba solo el jefe del solicitante. Para las altas de personal, un único recorrido sustituye a cuatro solicitudes separadas, a cargo de RR. HH., con tareas de TI, instalaciones y nómina. Para la instalación de software, se publica un catálogo de aplicaciones preaprobadas, con instalación automática para ellas, y aprobación solo para las demás.

Tras dos meses, la solicitud media de carpeta compartida tarda un día, y el recorrido de altas reduce los informes de equipo ausente el primer día. El gerente muestrea 50 instalaciones automatizadas y encuentra tres que instalaron una versión antigua porque un paquete estaba desactualizado.

Qué cambia: el personal recibe lo que pide más rápido y el centro atiende menos contactos de «dónde está mi solicitud». Qué sigue siendo difícil: los responsables de carpetas sensibles aún tardan varios días en responder y la organización no ha acordado quién es responsable de alrededor de un tercio de las carpetas; la auditoría de accesos encuentra usuarios que conservan acceso de puestos anteriores; y el recorrido de altas depende de que RR. HH. introduzca las fechas de inicio a tiempo. El gerente lleva al equipo de seguridad la responsabilidad de las carpetas y las revisiones de acceso.

## Cuatro perspectivas

### Equipos de producto y de entrega

Proporcionen la información necesaria para cumplir las solicitudes de sus servicios, como modelos de acceso y configuraciones estándar. Mantengan ordenadas las interfaces de autoservicio y la automatización, y ofrézcanse a cumplir sus propias solicitudes rutinarias donde sea seguro.

### Equipos de servicio y de operaciones

Sean dueños de los modelos de solicitud y manténganlos breves y actuales. Automaticen los pasos repetidos con salvaguardas y vigilen los retrasos y las solicitudes devueltas. Lleven los datos de demanda a los responsables de los servicios.

### Liderazgo y gobernanza

Pida evidencia de cuánto tardan las solicitudes y dónde esperan. Respalde la eliminación de aprobaciones que no añaden seguridad. Dé a los responsables autoridad para cambiar los modelos y financie la automatización con los controles adecuados.

### Clientes y usuarios

Debería encontrar fácilmente lo que necesita, ver el estado y recibirlo cuando se prometió. Diga al proveedor cuándo un formulario es confuso o una aprobación parece inútil. Devuelva lo que ya no necesite, incluido el acceso.

## Ágil, IA, automatización y analítica

### Ágil

Trate cada modelo de solicitud como un pequeño producto y mejórelo con los usuarios: simplifique un formulario, pruébelo, ajuste. Revise la demanda con regularidad con las partes interesadas. Precaución: retocar los formularios continuamente confunde a los usuarios; anuncie los cambios y mantenga una lista corta.

### IA

La IA puede ayudar a los usuarios a encontrar la solicitud adecuada, rellenar formularios a partir de una descripción, resumir solicitudes para quienes aprueban y redactar notas de cumplimiento, con una persona que apruebe todo lo que conceda acceso o gaste dinero. Nombre un responsable. Precaución: un asistente que sugiere un acceso amplio «por si acaso» rompe el mínimo privilegio; restrinja sus opciones. Véase el Tema 5.3 — Centro de servicio con IA y agentes virtuales.

### Automatización

Automatice el cumplimiento rutinario, como la creación de cuentas, la instalación de software y la pertenencia a grupos, con comprobaciones, registros y una alternativa manual. Precaución: una concesión automática de acceso sin verificación es un agujero de seguridad; incluya comprobaciones de identidad y revise una muestra. Véase el Tema 6.5 — Autoservicio y cumplimiento automatizado.

### Analítica

Observe la demanda por tipo, el tiempo de cumplimiento, el tiempo de espera de aprobación, las solicitudes devueltas o abandonadas y la retroalimentación de los usuarios. Precaución: el tiempo medio oculta retrasos largos y puede manipularse cerrando y reabriendo; mire distribuciones y muestras. Véanse el Tema 7.7 — Analítica de experiencia y sentimiento y el libro *Service Management Metrics*.

## Modos de fallo habituales

- **Nombres de solicitud poco claros.** Los usuarios eligen mal. Renombre con las palabras del usuario y pruebe.
- **Formularios largos.** Los usuarios abandonan o adivinan. Pregunte solo lo necesario.
- **Aprobaciones por costumbre.** Retraso sin seguridad. Conserve las que tienen un riesgo nombrado.
- **Automatización sin comprobaciones.** Acceso equivocado o artículos equivocados. Añada verificación, registros y revisión.
- **Acceso que nunca se retira.** Quedan cuentas viejas. Haga de la retirada un desencadenante rutinario.
- **Sin estado para los usuarios.** Suben los contactos repetidos. Muestre el estado y envíe actualizaciones.
- **El catálogo crece sin podarse.** Los usuarios no encuentran nada. Retire y fusione.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Diseño de solicitudes | Ad hoc por correo | Algunos formularios | Modelos de solicitud para los tipos comunes | Modelos revisados frente a los datos | Modelos mejorados continuamente entre funciones |
| Aprobaciones | Muchas y manuales | Revisadas una vez | Aprobaciones ligadas a riesgos nombrados | Valor de las aprobaciones medido | Aprobaciones basadas en riesgo adaptadas automáticamente |
| Cumplimiento | Manual | Algunos scripts | Solicitudes comunes automatizadas con registros | Calidad de la automatización muestreada y revisada | Automatización de extremo a extremo entre sistemas |
| Ciclo de vida del acceso | Concedido ad hoc | Revisión periódica | Desencadenantes de alta, movimiento y baja | Acceso revisado con evidencia | Acceso ajustado de forma continua entre sistemas |

## Lista de verificación

- [ ] Nuestros diez principales tipos de solicitud están descritos con las palabras de los usuarios.
- [ ] Cada uno tiene un modelo de solicitud con entradas, aprobaciones, pasos, responsable y plazo objetivo.
- [ ] Cada aprobación tiene un riesgo nombrado y un responsable que lo entiende.
- [ ] Los usuarios pueden ver el estado y el plazo esperado.
- [ ] El cumplimiento automatizado tiene comprobaciones, registros y una alternativa manual.
- [ ] El acceso se concede con mínimo privilegio y se retira cuando ya no se necesita.
- [ ] Los recorridos de alta, movimiento y baja tienen responsables.
- [ ] Revisamos la demanda y podamos los tipos de solicitud con regularidad.

## Prompts de IA

**Agrupe las solicitudes por tipo.**

```text
Below are request titles and descriptions from the last month, with personal data removed: [paste sample].
Group them into up to twelve request types, count each, and list the three most common questions the requester or fulfiller had to ask. Do not suggest changes.
List what you are unsure of.
```

**Redacte un formulario de solicitud breve.**

```text
Request type: [name]. What the fulfiller needs to do the work: [list]. What we already know about the requester: [list].
Draft a form with only the questions we cannot already answer, in plain language, with a one-line help text for each. Do not add questions that are not needed.
List what you are unsure of.
```

**Revise una cadena de aprobación.**

```text
Request type: [name]. Current approvals: [list with who and typical wait]. Data on past outcomes: [paste, such as number approved and refused].
For each approval, state the risk it appears to address based only on what I provided, how often it changed the outcome, and a question to ask the owner. Do not recommend removal.
List what you are unsure of.
```

## Habilidades de IA

- [service-catalog](../../../../skills/service-catalog/SKILL.md): úsela para describir los tipos de solicitud para los usuarios.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): úsela para examinar pasos, esperas y aprobaciones.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md): úsela para aclarar quién aprueba y quién cumple.
- [survey-design](../../../../skills/survey-design/SKILL.md): úsela para diseñar la retroalimentación sobre la experiencia de solicitud.

## Fuentes principales

- PeopleCert, páginas de certificación ITIL: la descripción del propietario de la práctica de gestión de solicitudes de servicio.
- Wikipedia, "Service catalog" y "Self-service": antecedentes de cómo se describen y se hacen las solicitudes.
- Wikipedia, "Principle of least privilege": la base del cumplimiento seguro de accesos.
- Wikipedia, "Identity and access management": la disciplina detrás de muchas solicitudes.

## Referencias

1. Service catalog — Wikipedia — https://en.wikipedia.org/wiki/Service_catalog
2. Self-service — Wikipedia — https://en.wikipedia.org/wiki/Self-service
3. Workflow — Wikipedia — https://en.wikipedia.org/wiki/Workflow
4. Standardization — Wikipedia — https://en.wikipedia.org/wiki/Standardization
5. Identity and access management — Wikipedia — https://en.wikipedia.org/wiki/Identity_and_access_management
6. Principle of least privilege — Wikipedia — https://en.wikipedia.org/wiki/Principle_of_least_privilege
7. Onboarding — Wikipedia — https://en.wikipedia.org/wiki/Onboarding
8. Provisioning — Wikipedia — https://en.wikipedia.org/wiki/Provisioning
9. Customer experience — Wikipedia — https://en.wikipedia.org/wiki/Customer_experience
10. Automation — Wikipedia — https://en.wikipedia.org/wiki/Automation
