# Gestión de la Seguridad de la Información

**La gestión de la seguridad de la información protege la confidencialidad, la integridad y la disponibilidad de la información y los servicios; para los equipos de servicio funciona mejor cuando las comprobaciones de seguridad están integradas en el pipeline de entrega y en las operaciones diarias, cuando los incidentes de seguridad se tratan como otros incidentes con cuidado adicional y cuando las decisiones de riesgo tienen responsable y quedan registradas.**

## Por qué importa

Todo servicio guarda información que alguien desea: registros de clientes, credenciales, propiedad intelectual, datos financieros. Todo servicio depende también de que la información sea correcta y esté disponible cuando se necesita. Los fallos de seguridad afectan a todo eso. Una filtración de datos expone a los clientes, un registro manipulado engaña a las decisiones y un ataque de ransomware detiene el trabajo.

La seguridad puede parecer un mundo aparte de especialistas, reglas y auditorías, que llega al final de un proyecto para decir que no. Ese modelo fracasa en la entrega continua, donde el cambio es frecuente y las comprobaciones tardías son demasiado lentas. La alternativa, a menudo llamada DevSecOps, integra la seguridad en el diseño, el código, el pipeline y las operaciones, de modo que forma parte de cada cambio y de cada turno. Los especialistas en seguridad se convierten en socios que fijan salvaguardas y ayudan a los equipos a cumplirlas, no en guardianes que inspeccionan después.

La gestión de servicios tiene su propio interés. Los incidentes de seguridad llegan a través del centro de servicios. Las solicitudes de acceso y los cambios son decisiones de seguridad. Los proveedores forman parte de la superficie de ataque. El conocimiento y la monitorización respaldan la detección. Este tema explica las ideas principales y cómo trabajar con una función de seguridad, sin pretender ser un manual de seguridad. Se relaciona con la gestión de solicitudes de servicio (Tema 3.6 — Gestión de Solicitudes de Servicio), la gestión de proveedores (Tema 3.14 — Gestión de Proveedores) y el gobierno (Tema 8.1 — Gobernanza, Riesgo y Cumplimiento). No ofrece asesoramiento jurídico ni de cumplimiento; compruebe las normas que le aplican.

## Conceptos clave

**La tríada CIA.** La seguridad de la información busca proteger tres propiedades: la confidencialidad (solo las personas autorizadas pueden ver la información), la integridad (la información es exacta y no ha sido manipulada) y la disponibilidad (la información y los servicios pueden usarse cuando se necesitan). El artículo de Wikipedia sobre la seguridad de la información describe la tríada. Algunos marcos añaden otras, como la autenticidad y la trazabilidad de responsabilidades.

**Enfoque basado en el riesgo.** El esfuerzo de seguridad es limitado, así que debe dirigirse adonde el riesgo es mayor. El riesgo combina la probabilidad de un suceso dañino con su impacto. Wikipedia describe la gestión de riesgos en general. Un registro de riesgos anota los riesgos, los responsables y las decisiones: reducir, aceptar, transferir o evitar.

**Sistema de gestión de seguridad de la información (SGSI).** Un conjunto de políticas, procesos y controles para gestionar el riesgo de seguridad de la información, con revisión regular. ISO/IEC 27001 especifica los requisitos de un SGSI y es una base para la certificación. Wikipedia lo describe. Véase el Tema 1.8 — Marcos y estándares de gestión de servicios. El NIST Cybersecurity Framework, de un organismo de Estados Unidos y muy usado en otros lugares, organiza las actividades en funciones como identificar, proteger, detectar, responder y recuperar.

**Controles.** Medidas que reducen el riesgo: técnicas (cifrado, controles de acceso, aplicación de parches), organizativas (políticas, formación, separación de funciones) y físicas (cerraduras, registros de visitantes). Los controles deben ser proporcionales al riesgo y estar probados.

**Defensa en profundidad.** Usar varias capas de controles para que el fallo de una no signifique el fallo de todas. Wikipedia describe la defensa en profundidad en informática. Un atacante que supera una barrera se topa con otra.

**Mínimo privilegio y acceso.** Las personas y los sistemas deben tener solo el acceso que necesitan, solo durante el tiempo que lo necesitan. Wikipedia describe el principio de mínimo privilegio. Una autenticación fuerte, incluida la autenticación multifactor, reduce la probabilidad de que contraseñas robadas den acceso. Véase el Tema 3.6 — Gestión de Solicitudes de Servicio.

**Confianza cero (zero trust).** Un enfoque en el que ningún usuario ni dispositivo es de confianza por defecto por su ubicación en la red; cada solicitud se verifica. Wikipedia describe la arquitectura de confianza cero. Desplaza la atención del borde de la red hacia la identidad, el estado del dispositivo y los datos.

**Gestión de vulnerabilidades y de parches.** Encontrar debilidades en el software y los sistemas y corregirlas a tiempo. Los artículos de Wikipedia sobre la gestión de vulnerabilidades y sobre Common Vulnerabilities and Exposures (CVE) describen cómo se identifican y se siguen las debilidades. Priorice por exposición e impacto, no solo por puntuaciones de gravedad. Véase el Tema 4.2 — Gestión de Activos de Software.

**Cadena de suministro de software.** El software moderno incluye muchos componentes de terceros: bibliotecas, contenedores, herramientas de compilación. Una debilidad en uno afecta a todos los que lo usan. Wikipedia describe la cadena de suministro de software. Saber qué hay en su software, mediante una lista de materiales de software, le ayuda a responder cuando se anuncia una debilidad.

**Modelado de amenazas.** Una forma estructurada de pensar cómo podría atacarse un sistema, pronto en el diseño, para poder planificar las mitigaciones. Wikipedia describe los modelos de amenazas. Es barato en el momento del diseño y caro después.

**DevSecOps y el pipeline.** Integrar comprobaciones de seguridad en el pipeline de entrega: análisis estático del código, análisis de dependencias, detección de secretos en el código, análisis de contenedores y comprobaciones de políticas. Wikipedia describe las pruebas estáticas de seguridad de aplicaciones. Las comprobaciones se ejecutan en cada cambio y producen evidencia. Véase el Tema 6.4 — Pipelines y cambio automatizado.

**Detección y monitorización.** La monitorización de seguridad busca señales de ataque, como inicios de sesión inusuales o movimientos de datos. Los sistemas de gestión de información y eventos de seguridad (SIEM) recogen y analizan registros de muchas fuentes. Wikipedia describe los SIEM. Funcionan solo si los registros están completos y las alertas ajustadas. Véase el Tema 3.10 — Monitorización y Gestión de Eventos.

**Incidentes de seguridad.** Un suceso que compromete, o amenaza con comprometer, información o sistemas. Wikipedia describe la gestión de incidentes de seguridad informática. Un incidente de seguridad necesita los roles de incidente del Tema 3.2 — Gestión de Incidentes, además de otros: preservar la evidencia, contener el ataque y decidir sobre la notificación a clientes y reguladores, que puede ser obligatoria legalmente en algunas jurisdicciones. Involucre pronto a asesores jurídicos y de seguridad.

**Personas.** Muchos ataques empiezan con una persona: correos de phishing, ingeniería social, malos hábitos. Wikipedia describe el phishing y la concienciación en seguridad. La formación ayuda más cuando es breve, frecuente y ligada a ejemplos reales, y cuando informar de un error es seguro y fácil.

**Privacidad.** La protección de la información personal está relacionada con la seguridad, pero no es lo mismo. Leyes como el Reglamento General de Protección de Datos de la Unión Europea fijan obligaciones para los datos personales. Wikipedia describe la privacidad desde el diseño, la idea de incorporar la privacidad a los sistemas desde el principio. Busque asesoramiento especializado.

**Cómo encajan las lentes.** La seguridad es el ámbito donde el ritmo ágil y el control se encuentran con más fuerza. La práctica ágil trata el trabajo de seguridad como parte del backlog e involucra a personas de seguridad en el equipo. La IA ayuda tanto a los defensores como a los atacantes; necesita su propia gobernanza (véase el Tema 5.6 — Gobernanza, riesgo y cumplimiento de la IA). La automatización hace cumplir los controles con coherencia. La analítica muestra la exposición y los tiempos de respuesta.

## Buenas prácticas

1. **Empiece con una visión basada en el riesgo.** Enumere la información y los servicios que más importan, las amenazas que afrontan y los controles existentes. Concentre el esfuerzo en las mayores brechas.
2. **Trabaje con seguridad como socio.** Incluya a una persona de seguridad en el diseño y la planificación. Pregunte qué salvaguardas debe seguir el equipo y manténgalas pocas y claras.
3. **Integre las comprobaciones en el pipeline.** Ejecute análisis de código, dependencias, contenedores y secretos en cada cambio. Corrija las causas de los hallazgos repetidos y deje que una comprobación fallida detenga una liberación donde el riesgo sea grave.
4. **Aplique el mínimo privilegio y una autenticación fuerte.** Conceda el acceso mínimo, exija autenticación multifactor, revise el acceso con regularidad y retírelo cuando ya no se necesite.
5. **Mantenga un inventario y aplique los parches con prontitud.** Sepa qué software y sistemas ejecuta, siga las vulnerabilidades y priorice por exposición e impacto. Fije metas para el tiempo de aplicación de parches y sígalas.
6. **Conozca su cadena de suministro.** Registre los componentes de su software y los proveedores detrás de sus servicios. Esté atento a las debilidades anunciadas y tenga una forma de encontrar con rapidez los sistemas afectados.
7. **Modele las amenazas pronto.** Para los servicios nuevos y los cambios importantes, dedique una hora a pensar como un atacante y registre las mitigaciones que elija.
8. **Prepárese para responder.** Escriba un plan de incidentes de seguridad con roles, contactos, manejo de la evidencia y puntos de decisión. Ensaye, incluidas las decisiones sobre notificación. Involucre asesoramiento jurídico.
9. **Haga seguro informar.** Anime a la gente a informar con rapidez de mensajes sospechosos y errores, y responda con amabilidad. El miedo a la culpa oculta los incidentes.
10. **Registre las decisiones de riesgo.** Cuando se acepta un riesgo, registre quién lo aceptó, por qué y cuándo se revisará. Haga visible el registro para quienes son responsables de los servicios.

## Preguntas para conversar con su equipo

**¿Cuáles son las piezas de información más valiosas y más sensibles que guardamos y quién puede acceder a ellas?**
Hagan una lista breve. Esperen sorpresas sobre quién tiene acceso y dónde viven las copias. Después elijan un conjunto de datos y comprueben su lista de acceso.

**¿Qué comprobaciones de seguridad se ejecutan en cada cambio y cuáles ocurren solo al final?**
Comparen el pipeline con la lista de comprobación de liberación. Esperen revisiones manuales tardías. Después elijan una comprobación tardía para trasladar al pipeline.

**¿Con qué rapidez aplicamos parches a una vulnerabilidad grave y cómo averiguamos qué sistemas están afectados?**
Pregunte por la última. Espere «salimos corriendo». Después acuerden un plazo objetivo y una forma de enumerar los sistemas afectados, por ejemplo a partir de un inventario.

**¿Qué haríamos en la primera hora de una sospecha de filtración y quién decide si se informa a clientes o reguladores?**
Realicen una breve discusión de escenario. Esperen brechas sobre los derechos de decisión. Después escriban una página con roles y contactos e involucren a asesores jurídicos.

**¿Qué tan seguro es para el personal informar de un error, como hacer clic en un enlace malicioso?**
Esto prueba la cultura. Pregunte qué le ocurrió a la última persona que lo hizo. Después acuerden cómo se acusa recibo de los informes y qué se dice públicamente.

**¿Cómo podría ayudar la IA a nuestro trabajo de seguridad y qué nuevos riesgos añade?**
La IA puede resumir alertas y revisar código. También puede filtrar datos que se le pegan, generar código inseguro y ser objetivo de atacantes. Pregunte quién es responsable de cada uso y qué datos pueden compartirse. Después acuerden una regla sobre lo que no debe pegarse en herramientas externas.

## En la práctica: un ejemplo de gestión de servicios

El equipo digital de banca minorista de un banco regional pasa por una revisión de seguridad antes de cada liberación, celebrada por un equipo central una vez al mes. Las liberaciones hacen cola para ella. Los desarrolladores la ven como un obstáculo; el personal de seguridad ve hallazgos recurrentes y poco tiempo. El trimestre pasado, una biblioteca con una debilidad conocida estuvo en producción durante seis semanas antes de que la revisión la encontrara.

El jefe de seguridad y el jefe de ingeniería acuerdan probar otro modelo para un producto. Un ingeniero de seguridad se une al equipo la mitad de cada semana. El pipeline gana análisis de dependencias, análisis estático y una comprobación de secretos en el código, y hace fallar una compilación por hallazgos críticos. El equipo mantiene un inventario sencillo de software generado desde el pipeline. Cada función importante recibe una sesión de modelado de amenazas de una hora en el momento del diseño. La revisión mensual se sustituye, para este producto, por una auditoría ligera por muestreo.

En un trimestre, el pipeline detecta dos bibliotecas vulnerables y una credencial incluida en el código antes de la liberación. Cuando se anuncia una nueva debilidad de biblioteca ampliamente comentada, el inventario identifica los tres servicios afectados en una hora; dos se parchean el mismo día y el tercero se programa con un control compensatorio. El equipo descubre que su plan de incidentes de seguridad supone un contacto que se ha ido y lo actualiza.

Qué cambia: los hallazgos llegan cuando son baratos de corregir y la cola mensual desaparece para este producto. Qué sigue siendo difícil: las comprobaciones del pipeline producen muchos hallazgos de baja gravedad y los desarrolladores han empezado a ignorarlos; el inventario no cubre los servicios de terceros a los que llama el producto; y el regulador del banco sigue pidiendo la evidencia en otra forma, lo que cuesta esfuerzo generar. Los equipos acuerdan ajustar los umbrales y preguntar al regulador qué registros del pipeline aceptará.

## Cuatro perspectivas

### Equipos de producto y de entrega

Asuman la seguridad como parte de la calidad: modelen amenazas, usen las comprobaciones del pipeline, corrijan los hallazgos con prontitud y manejen los secretos con cuidado. Pidan a seguridad salvaguardas y díganle qué les frena.

### Equipos de servicio y de operaciones

Apliquen el mínimo privilegio, parcheen a tiempo y estén atentos a la actividad inusual. Traten los incidentes de seguridad con la disciplina de los incidentes mayores y preserven la evidencia. Informen al equipo de seguridad de lo que ven.

### Liderazgo y gobernanza

Decida el apetito de riesgo y financie tanto la prevención como la respuesta. Pida evidencia de que los controles funcionan. Cree una cultura en la que informar de errores sea seguro. Sepa quién decide sobre la notificación a clientes y reguladores.

### Clientes y usuarios

Use autenticación fuerte, informe de mensajes sospechosos y proteja sus propias credenciales. Pregunte a los proveedores cómo protegen su información y qué le dirán en caso de filtración.

## Ágil, IA, automatización y analítica

### Ágil

Ponga el trabajo de seguridad en el mismo backlog que las funciones, involucre a personas de seguridad en el equipo y mejore en pasos pequeños tras cada hallazgo e incidente. Precaución: la seguridad por «sprint 0» o una revisión de última hora pierde el sentido; intégrela en el flujo de trabajo.

### IA

La IA puede ayudar a resumir alertas, revisar código en busca de debilidades y redactar notas de incidentes, con una persona responsable de las decisiones. También trae riesgos: datos que se filtran a herramientas externas, código generado inseguro y manipulación del modelo. Fije reglas sobre los datos y revise los cambios generados por IA como cualquier otro. Véase el Tema 5.6 — Gobernanza, riesgo y cumplimiento de la IA.

### Automatización

Automatice el análisis, la aplicación de parches en sistemas rutinarios, las revisiones de acceso y la captura de evidencia, con registros y controles sobre la propia automatización. Precaución: la remediación automatizada con amplios privilegios es un objetivo; restrínjala y monitorícela. Véase el Tema 6.4 — Pipelines y cambio automatizado.

### Analítica

Siga el tiempo de aplicación de parches, la exposición por gravedad, la finalización de las revisiones de acceso, los hallazgos de seguridad por cambio y los tiempos de detección y respuesta. Precaución: contar vulnerabilidades cerradas puede premiar las correcciones fáciles, y los recuentos de incidentes pueden bajar porque la detección es deficiente; combine medidas y pruebe la detección. Véanse el libro *Service Management Metrics* y el Tema 7.3 — Medición e informes.

## Modos de fallo habituales

- **Seguridad al final.** Las revisiones bloquean las liberaciones y encuentran los problemas tarde. Integre las comprobaciones en el pipeline y en el diseño.
- **Sobrecarga de alertas y hallazgos.** Los equipos ignoran los escáneres. Ajuste los umbrales y corrija las causas repetidas.
- **Exceso de acceso.** Las cuentas conservan privilegios que ya no necesitan. Revise y retire con regularidad.
- **Sin inventario.** No puede saber qué afecta una nueva debilidad. Genere y mantenga un inventario.
- **Planes de incidentes sin probar.** Los contactos están desactualizados. Ensaye y actualice.
- **Culpa por informar de errores.** Los incidentes se ocultan. Responda con amabilidad y rapidez.
- **Aceptación de riesgos sin responsable.** Los riesgos se aceptan por defecto. Registre quién aceptó y cuándo revisar.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Gestión de riesgos | Informal | Riesgos principales enumerados | Registro de riesgos con responsables y decisiones | Riesgos revisados frente a incidentes y pruebas | Riesgo gestionado en toda la organización y los proveedores |
| Seguridad del pipeline | Revisión manual al final | Algunos análisis | Comprobaciones estándar en cada cambio | Hallazgos y correcciones medidos | Política y comprobaciones adaptadas y automatizadas con supervisión |
| Acceso | Ad hoc | Revisiones básicas | Mínimo privilegio y autenticación multifactor como norma | Acceso revisado con evidencia | Acceso ajustado de forma continua entre sistemas |
| Detección y respuesta | Reactiva | Registro básico | Monitorización de seguridad y un plan de incidentes ensayado | Tiempos de detección y respuesta medidos | Respuesta coordinada entre equipos y proveedores |

## Lista de verificación

- [ ] Conocemos nuestra información más sensible y quién puede acceder a ella.
- [ ] Las comprobaciones de seguridad se ejecutan en el pipeline en cada cambio.
- [ ] El acceso sigue el mínimo privilegio, con autenticación multifactor y revisión regular.
- [ ] Mantenemos un inventario de software y seguimos las vulnerabilidades.
- [ ] Tenemos un plan de incidentes de seguridad, con roles, contactos y asesoramiento jurídico, y lo hemos ensayado.
- [ ] El personal puede informar de errores con seguridad.
- [ ] Las aceptaciones de riesgo se registran con responsable y fecha de revisión.
- [ ] Existen reglas sobre qué datos pueden compartirse con herramientas de IA.

## Prompts de IA

**Prepare una sesión de modelado de amenazas.**

```text
Our system: [describe components, data, and users]. Trust boundaries we know: [list].
List questions to ask in a one-hour threat modeling session, grouped by component and data flow, and note what we have not told you. Do not list specific attacks as facts about our system.
List what you are unsure of.
```

**Resuma hallazgos de vulnerabilidades para priorizarlos.**

```text
Here is a list of vulnerability findings with severity, affected system, and whether the system is exposed to the internet: [paste, with sensitive details removed].
Group them, list those that combine high severity with exposure, and give one question per group about business impact. Do not claim any is exploitable.
List what you are unsure of.
```

**Redacte una guía de la primera hora.**

```text
Our context: [type of organization, key systems]. Roles available: [list].
Draft a one-page first-hour checklist for a suspected data breach with steps for containment, evidence preservation, communication, and decisions that need legal or leadership input. Do not state legal obligations; list questions for our legal adviser instead.
List what you are unsure of.
```

## Habilidades de IA

- [security-testing](../../../../skills/security-testing/SKILL.md): úsela para planificar comprobaciones y pruebas de seguridad.
- [legal-data-privacy-compliance](../../../../skills/legal-data-privacy-compliance/SKILL.md): úsela para plantear las cuestiones de privacidad a su asesor jurídico.
- [risk-register](../../../../skills/risk-register/SKILL.md): úsela para registrar riesgos, responsables y decisiones.
- [incident-response-plan](../../../../skills/incident-response-plan/SKILL.md): úsela para planificar la respuesta, incluidos los eventos de seguridad.
- [key-risk-indicators](../../../../skills/key-risk-indicators/SKILL.md): úsela para elegir indicadores de alerta temprana.

## Fuentes principales

- ISO/IEC 27001 (el propio estándar): los requisitos de un sistema de gestión de seguridad de la información; lea la edición vigente del editor.
- NIST, Cybersecurity Framework (nist.gov/cyberframework): un marco muy usado de un organismo de Estados Unidos.
- OWASP (owasp.org): orientación comunitaria sobre seguridad de aplicaciones.
- Wikipedia, "Information security" e "ISO/IEC 27001": visiones generales del campo y del estándar.

## Referencias

1. Information security — Wikipedia — https://en.wikipedia.org/wiki/Information_security
2. ISO/IEC 27001 — Wikipedia — https://en.wikipedia.org/wiki/ISO/IEC_27001
3. NIST Cybersecurity Framework — Wikipedia — https://en.wikipedia.org/wiki/NIST_Cybersecurity_Framework
4. Risk management — Wikipedia — https://en.wikipedia.org/wiki/Risk_management
5. Principle of least privilege — Wikipedia — https://en.wikipedia.org/wiki/Principle_of_least_privilege
6. Zero trust architecture — Wikipedia — https://en.wikipedia.org/wiki/Zero_trust_architecture
7. Vulnerability management — Wikipedia — https://en.wikipedia.org/wiki/Vulnerability_management
8. Software supply chain — Wikipedia — https://en.wikipedia.org/wiki/Software_supply_chain
9. Threat model — Wikipedia — https://en.wikipedia.org/wiki/Threat_model
10. Computer security incident management — Wikipedia — https://en.wikipedia.org/wiki/Computer_security_incident_management
11. NIST Cybersecurity Framework — NIST — https://www.nist.gov/cyberframework
12. OWASP — OWASP Foundation — https://owasp.org
