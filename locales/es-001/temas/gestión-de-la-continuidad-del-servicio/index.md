# Gestión de la Continuidad del Servicio

**La gestión de la continuidad del servicio prepara a una organización para mantener en funcionamiento los servicios críticos, o restablecerlos en un plazo acordado, tras una interrupción grave; funciona cuando los objetivos de recuperación provienen del impacto en el negocio, los planes se ensayan y las copias de seguridad se demuestran restaurándolas.**

## Por qué importa

La mayoría de los incidentes son pequeños: un disco averiado, una mala liberación, un certificado caducado. Unos pocos no lo son. Un centro de datos se queda sin electricidad durante un día. Falla una región de la nube. Un ransomware cifra los sistemas principales. Un proveedor se hunde. Una pandemia mantiene al personal lejos de sus oficinas. Sucesos así amenazan a la organización, no solo a un servicio, y ocurren con tan poca frecuencia que la gente se olvida de prepararse para ellos.

La preparación es una forma de seguro con una particularidad: su valor solo se ve el día en que se necesita, y un plan que nunca se ha probado probablemente no funcionará. Las copias de seguridad que nunca se restauraron resultan estar vacías. Una conmutación por error que nunca se ensayó tarda un día en lugar de una hora. Una lista de llamadas incluye a personas que se fueron. Los equipos que han practicado encuentran los problemas en la práctica, no en la crisis.

Este tema explica cómo decidir qué proteger, cómo fijar objetivos de recuperación, cómo planificar y ensayar, y cómo incluir con sensatez la IA y la automatización. En ITIL 4 la práctica es la gestión de la continuidad del servicio. En un uso más amplio también encontrará la gestión de la continuidad del negocio, la recuperación ante desastres y la resiliencia. Se solapan, y este tema describe cómo encajan. Se conecta con la disponibilidad (Tema 3.11 — Disponibilidad, Capacidad y Rendimiento), la gestión de incidentes (Tema 3.2 — Gestión de Incidentes) y la seguridad de la información (Tema 3.13 — Gestión de la Seguridad de la Información).

## Conceptos clave

**Continuidad del servicio.** En ITIL 4, asegurar que la disponibilidad y el rendimiento de un servicio se mantienen a un nivel suficiente en caso de desastre. La práctica incluye evaluar riesgos e impactos, planificar la recuperación y ensayar.

**Continuidad del negocio y recuperación ante desastres.** La planificación de la continuidad del negocio, descrita en Wikipedia, abarca cómo una organización mantiene en funcionamiento las funciones críticas, o las reanuda con rapidez, durante y después de una interrupción. La recuperación ante desastres es la parte de TI: restablecer sistemas, datos e infraestructura. La continuidad del negocio pregunta «¿cómo seguimos atendiendo a los clientes?»; la recuperación ante desastres pregunta «¿cómo recuperamos los sistemas?». ISO 22301 es una norma internacional para los sistemas de gestión de la continuidad del negocio, descrita en Wikipedia; su relación con ISO/IEC 20000 se trata en el Tema 1.8 — Marcos y estándares de gestión de servicios.

**Análisis de impacto en el negocio (BIA).** Un estudio de lo que ocurre a la organización si cada función o servicio no está disponible durante un tiempo dado. Identifica qué servicios son críticos y con qué rapidez deben restablecerse. El análisis involucra al negocio, no solo a TI, ya que solo el negocio conoce el impacto de una hora o un día perdidos.

**Objetivo de tiempo de recuperación (RTO).** El tiempo máximo objetivo para restablecer un servicio tras una interrupción. Wikipedia lo describe bajo recuperación ante desastres de TI. Proviene del análisis de impacto: si una hora de inactividad cuesta mucho, el RTO es corto y la solución es cara.

**Objetivo de punto de recuperación (RPO).** La cantidad máxima aceptable de pérdida de datos, medida en tiempo. Un RPO de 15 minutos significa que, tras la recuperación, no pueden faltar más de 15 minutos de datos. Determina con qué frecuencia deben copiarse los datos.

**Costos y compromisos.** Los RTO y RPO más cortos cuestan más: más redundancia, más replicación, más pruebas. Muestre el costo de cada opción a quienes deciden y registre la decisión. Véase el Tema 4.5 — Gestión financiera y FinOps.

**Copia de seguridad y replicación.** Las copias de seguridad son copias de datos que se guardan para restaurarlos tras una pérdida o un daño. La replicación mantiene una segunda copia actualizada de forma continua en otro lugar. Wikipedia describe ambas. La replicación no sustituye a la copia de seguridad: si la corrupción o el cifrado por ransomware se replican, la copia también queda dañada. Conserve al menos una copia de seguridad que no pueda alterarse desde el entorno de producción y pruebe su restauración.

**Sitios y patrones de recuperación.** Las opciones van desde un sitio en espera que siempre está en marcha, pasando por uno que puede arrancarse en horas, hasta restaurar desde una copia de seguridad en un entorno nuevo. Los servicios en la nube facilitan varios patrones, como recrear la infraestructura a partir de código. Véase el Tema 6.3 — Infraestructura como código y GitOps. Wikipedia describe los sitios de respaldo.

**Dependencias.** Un servicio crítico depende de otros: identidad, redes, DNS, proveedores, certificados y personas. Los planes de recuperación deben seguir esas dependencias y ordenar la restauración. Muchas recuperaciones fallidas se atascan en una dependencia olvidada, como el sistema que almacena las contraseñas necesarias para restaurar los demás.

**Planes y guías de actuación (playbooks).** Instrucciones escritas y concisas sobre quién hace qué, en qué orden y con quién contactar. Deben guardarse donde puedan leerse cuando los sistemas estén caídos, incluidas copias sin conexión. Los roles deben nombrarse, con suplentes.

**Ejercicios.** Los ensayos van desde una discusión guiada de un escenario, a una simulación, a una conmutación o restauración en vivo. Wikipedia describe la ingeniería del caos, en la que se introducen fallos de forma deliberada y controlada para encontrar debilidades. Empiece pequeño y seguro, y aumente el realismo con el tiempo. Registre lo que ocurrió y corrija lo que aprenda.

**Gestión de crisis y comunicación.** Una interrupción grave necesita decisiones de liderazgo, comunicación con el personal, los clientes, los reguladores y el público, y coordinación entre funciones. El artículo de Wikipedia sobre la gestión de crisis describe el campo. Decida de antemano quién habla y cómo. Véase el Tema 3.2 — Gestión de Incidentes.

**Eventos cibernéticos.** El ransomware y otros ataques son hoy una causa principal de interrupciones graves. Wikipedia describe el ransomware como software malicioso que cifra datos y exige un pago. La recuperación de un ataque así necesita copias de seguridad limpias, aislamiento de los sistemas afectados, reconstrucción de la infraestructura de confianza y coordinación con seguridad. Compruebe la ley y el asesoramiento que le apliquen, incluido lo referente a la notificación; esta guía no ofrece asesoramiento jurídico.

**Proveedores.** Su continuidad depende de la de sus proveedores. Pregunte por sus planes e inclúyalos en los ejercicios donde sea posible. Véase el Tema 3.14 — Gestión de Proveedores.

**Cómo encajan las lentes.** La continuidad es donde la iteración ágil se encuentra con la preparación: mejore el plan tras cada ejercicio. La IA puede ayudar a redactar planes y escenarios, bajo revisión, pero no puede darse por fiable durante una crisis. La automatización reconstruye entornos y ejecuta conmutaciones por error. La analítica informa el análisis de impacto y sigue los resultados de los ejercicios.

## Buenas prácticas

1. **Empiece por el impacto en el negocio.** Pregunte al negocio cuánto cuesta la caída de cada servicio en minutos, horas y días. Clasifique los servicios y fije los RTO y RPO en consecuencia. Revise el análisis tras cambios importantes.
2. **Proteja primero a los pocos críticos.** Concentre el esfuerzo en los servicios cuya pérdida dañaría gravemente a la organización. Disponga arreglos más ligeros para el resto.
3. **Mapee las dependencias.** Para cada servicio crítico, enumere lo que necesita para funcionar y para restaurarse, incluidos identidad, red, DNS y proveedores. Planifique el orden de recuperación.
4. **Conserve una copia de seguridad inmutable y probada.** Mantenga al menos una copia que no pueda cambiarse ni borrarse desde el entorno de producción y restaure desde ella con regularidad para demostrar que funciona.
5. **Escriba planes breves y utilizables.** Ponga los roles, los primeros pasos, los contactos y los puntos de decisión en unas pocas páginas. Conserve copias sin conexión y con las personas que las necesitan.
6. **Nombre roles y suplentes.** Para cada rol en una crisis, nombre un titular y al menos un suplente. Actualice la lista cuando las personas cambien de puesto.
7. **Ensaye por pasos.** Comience con una discusión de un escenario, pase a simulaciones y luego a pruebas controladas en vivo de restauración y conmutación. Registre los tiempos y los problemas.
8. **Corrija lo que halla el ejercicio.** Trate los hallazgos como elementos del backlog con responsables y fechas. Compruebe en el siguiente ejercicio que se hicieron.
9. **Incluya a proveedores y clientes.** Pida a los proveedores críticos sus arreglos de continuidad y pruebe las conexiones. Acuerde con los clientes qué servicio degradado pueden aceptar.
10. **Planifique las comunicaciones.** Prepare quién informa a quién, por qué canales, con plantillas, incluidos canales que funcionen cuando sus sistemas no lo hagan.

## Preguntas para conversar con su equipo

**¿Qué tres servicios nos harían más daño si no estuvieran disponibles durante una semana y cómo lo sabemos?**
Pregunte al negocio, no solo a TI. Espere respuestas distintas, lo que es un buen punto de partida. Después organicen una breve discusión de impacto para cada uno de los tres.

**¿Cuándo restauramos por última vez desde una copia de seguridad y cuánto tardó?**
Pida la fecha y el resultado. Espere «nunca lo hemos intentado» o «solo un archivo de prueba». Después programen una restauración completa de un sistema importante en un entorno seguro.

**¿De qué depende nuestra recuperación que no hayamos probado, como los sistemas de identidad, el DNS o una persona?**
Dibujen la cadena de un servicio. Busquen dependencias circulares. Después elijan una dependencia para probar.

**Si nuestros sistemas de comunicación habituales estuvieran caídos, ¿cómo nos contactaríamos entre nosotros y con nuestros clientes?**
Muchos planes suponen correo y chat. Pregunte por la lista de llamadas y los canales alternativos. Después prueben un árbol de llamadas.

**¿Qué haríamos en la primera hora de un ataque de ransomware y quién decide?**
Realicen una breve discusión de escenario. Esperen desacuerdos sobre aislar sistemas y sobre el contacto con las autoridades. Después escriban con seguridad una guía de una página para la primera hora.

**¿Dónde podría ayudar la IA a prepararnos o a responder y dónde debemos confiar en planes humanos preparados?**
La IA puede redactar escenarios, comprobar si faltan cosas en los planes y resumir registros. Durante una caída, el propio servicio de IA puede no estar disponible. Pregunte qué supone el plan. Después comprueben que los pasos críticos no dependen de un servicio de IA.

## En la práctica: un ejemplo de gestión de servicios

Los sistemas de la sala de control de una distribuidora regional de electricidad, que muestran el estado de la red a los operadores, deben restablecerse en un plazo de dos horas tras un fallo. El plan de recuperación ante desastres de la distribuidora así lo dice. Se escribió hace cuatro años y se probó por última vez como un ejercicio sobre papel.

Una nueva responsable de continuidad del servicio pide una prueba en vivo. El equipo acepta restaurar la aplicación de la sala de control en un entorno aparte a partir de la copia de seguridad de la noche anterior, con el jefe de operaciones observando. La restauración tarda once horas en lugar de dos. Surgen tres problemas: la copia de seguridad incluye los archivos de la aplicación pero no su base de datos de configuración, que pertenece a otro equipo; las contraseñas necesarias para la restauración están en una caja fuerte que forma parte del mismo centro de datos; y la persona que conoce los ajustes de red del sitio de recuperación está de licencia larga y no tiene suplente.

El equipo lo corrige en tres meses. Añade la base de datos de configuración al calendario de copias, crea un almacén de credenciales de emergencia guardado sin conexión en un sobre sellado y en una cuenta de nube aparte, y forma a dos ingenieros adicionales en el sitio de recuperación. Una segunda prueba restaura la aplicación en 2 horas y 40 minutos. La tercera, con un inicio deliberadamente sin aviso, tarda 1 hora y 50 minutos.

Qué cambia: la meta se cumple en la práctica y el plan es un documento que la gente ha usado. Qué sigue siendo difícil: la prueba usó una copia de los datos de producción y no incluyó las conexiones con el equipamiento de campo, que solo pueden probarse con el operador de la red; la organización no ha ensayado la pérdida de todo el centro de datos, solo de una aplicación; y el costo de mantener el sitio de recuperación se cuestiona cada año. La responsable mantiene el calendario de ejercicios y presenta los costos frente al análisis de impacto.

## Cuatro perspectivas

### Equipos de producto y de entrega

Hagan de la recuperación parte del diseño: reconstruyan desde el código, respalden datos y configuración y eviten dependencias ocultas. Participen en los ejercicios y corrijan lo que encuentren.

### Equipos de servicio y de operaciones

Conozcan su rol y su suplente, mantengan al día los runbooks y ensayen restauraciones y conmutaciones. Registren cuánto tardan realmente las cosas y díganselo a los responsables.

### Liderazgo y gobernanza

Decida los objetivos de recuperación con el negocio y financie lo que exigen. Participe en los ejercicios, incluidas las decisiones y la comunicación. Pida ver resultados de las pruebas, no solo planes.

### Clientes y usuarios

Pregunte qué arreglos de continuidad protegen los servicios de los que depende y acuerde qué servicio degradado puede aceptar. Mantenga su propio plan de contingencia para las necesidades críticas.

## Ágil, IA, automatización y analítica

### Ágil

Mejore la continuidad en pasos pequeños: una dependencia, una prueba de restauración, una corrección cada vez, revisadas con las partes interesadas. Precaución: no aplace todo el trabajo de continuidad a un único gran proyecto; ensaye pronto y a menudo.

### IA

La IA puede ayudar a redactar escenarios, comprobar si faltan cosas en los planes y resumir registros tras un ejercicio, con una persona que revise. Nombre un responsable. Precaución: un asistente de IA puede no estar disponible en una crisis o dar instrucciones poco fiables; mantenga los procedimientos esenciales en documentos sencillos y probados. Véase el Tema 5.1 — IA en la gestión de servicios.

### Automatización

Automatice la reconstrucción de entornos, la verificación de copias de seguridad y la conmutación por error, con registros y salvaguardas, y pruébelas con regularidad. Precaución: la automatización puede extender el daño con rapidez, por ejemplo borrando las copias de seguridad junto con los datos de producción; proteja los sistemas de copias con credenciales y controles separados. Véase el Tema 6.3 — Infraestructura como código y GitOps.

### Analítica

Siga el éxito de las copias de seguridad, los tiempos de las pruebas de restauración frente al RTO, el RPO logrado, los hallazgos de ejercicios cerrados y la cobertura de dependencias. Precaución: una alta tasa de éxito de copias no dice nada sobre si los datos pueden restaurarse; cuente las restauraciones. Véanse el libro *Service Management Metrics* y el Tema 7.3 — Medición e informes.

## Modos de fallo habituales

- **Planes nunca probados.** Fallan cuando hacen falta. Ensaye y restaure con regularidad.
- **Copias de seguridad nunca restauradas.** Están vacías o incompletas. Pruebe las restauraciones y verifique el contenido.
- **Dependencias ocultas.** La recuperación se atasca en la identidad o el DNS. Mapee y pruebe las dependencias.
- **Copias que los atacantes pueden modificar.** El ransomware las cifra. Conserve una copia inmutable.
- **Planificación solo de TI.** El negocio no participa. Realice un análisis de impacto con los responsables del negocio.
- **El plan vive solo en el sistema caído.** Nadie puede leerlo. Conserve copias sin conexión.
- **Sin suplentes.** Una persona posee el conocimiento. Nombre suplentes y fórmelos.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Impacto y objetivos | No definidos | Servicios críticos enumerados | RTO y RPO fijados a partir del impacto en el negocio | Objetivos revisados con el costo y los resultados | Objetivos coordinados entre la empresa y los proveedores |
| Copia de seguridad y recuperación | Copias sin verificar | Las copias se ejecutan | Restauraciones probadas y cronometradas | Rendimiento de la restauración seguido y mejorado | Recuperación automatizada y probada de forma continua |
| Planes | Ninguno o desactualizado | Escritos para los servicios principales | Planes concisos con roles y suplentes nombrados | Planes actualizados tras cada ejercicio | Planes integrados entre funciones, proveedores y clientes |
| Ejercicios | Ninguno | Recorridos sobre papel | Simulaciones regulares y restauraciones en vivo | Hallazgos seguidos hasta su cierre | Ejercicios que incluyen socios y escenarios realistas |

## Lista de verificación

- [ ] Completamos un análisis de impacto en el negocio de nuestros servicios críticos.
- [ ] Cada servicio crítico tiene un RTO y un RPO acordados con su responsable.
- [ ] Las dependencias, incluidas identidad y DNS, están mapeadas.
- [ ] Al menos una copia de seguridad es inmutable y se han probado las restauraciones.
- [ ] Los planes son breves, actuales y están guardados también sin conexión.
- [ ] Los roles y suplentes están nombrados.
- [ ] Realizamos ejercicios con regularidad y seguimos los hallazgos hasta su cierre.
- [ ] Los arreglos de continuidad de los proveedores se conocen y se prueban donde es posible.

## Prompts de IA

**Compruebe si faltan cosas en un plan.**

```text
Here is our continuity plan for [service]: [paste]. Here is the list of its dependencies: [paste].
List dependencies that the plan does not mention, steps that rely on a person without a named deputy, and steps that assume a system that may be down. Do not rewrite the plan.
List what you are unsure of.
```

**Diseñe un ejercicio de escenario.**

```text
Our context: [type of organization, key services]. Scenario theme: [for example, ransomware, data center loss].
Draft a 90-minute discussion exercise with a timeline of events, six decision points, questions for each role, and what to record. Do not use real names or systems unless I give them.
List what you are unsure of.
```

**Resuma los resultados de una prueba de restauración.**

```text
Here are the notes from a restore test: [paste with times and problems].
List what took longest, what failed, the dependencies discovered, and the actions to consider, with the owner role for each. Do not invent causes.
List what you are unsure of.
```

## Habilidades de IA

- [business-continuity-plan](../../../../skills/business-continuity-plan/SKILL.md): úsela para planificar cómo continúan las funciones críticas.
- [disaster-recovery-plan](../../../../skills/disaster-recovery-plan/SKILL.md): úsela para planificar la restauración de sistemas y datos.
- [disaster-recovery-testing](../../../../skills/disaster-recovery-testing/SKILL.md): úsela para diseñar y ejecutar pruebas de recuperación.
- [crisis-communication-plan](../../../../skills/crisis-communication-plan/SKILL.md): úsela para planificar la comunicación durante una interrupción.
- [chaos-testing](../../../../skills/chaos-testing/SKILL.md): úsela para probar con seguridad el comportamiento ante fallos.

## Fuentes principales

- ISO 22301, Security and resilience — Business continuity management systems: la norma internacional; lea la edición vigente del editor.
- PeopleCert, páginas de certificación ITIL: la descripción del propietario de la práctica de gestión de la continuidad del servicio.
- Wikipedia, "Business continuity planning" y "IT disaster recovery": visiones generales de las ideas y los términos.
- Wikipedia, "Chaos engineering": la práctica de probar el fallo de forma deliberada.

## Referencias

1. Business continuity planning — Wikipedia — https://en.wikipedia.org/wiki/Business_continuity_planning
2. IT disaster recovery — Wikipedia — https://en.wikipedia.org/wiki/IT_disaster_recovery
3. Disaster recovery — Wikipedia — https://en.wikipedia.org/wiki/Disaster_recovery
4. ISO 22301 — Wikipedia — https://en.wikipedia.org/wiki/ISO_22301
5. Backup — Wikipedia — https://en.wikipedia.org/wiki/Backup
6. Backup site — Wikipedia — https://en.wikipedia.org/wiki/Backup_site
7. Chaos engineering — Wikipedia — https://en.wikipedia.org/wiki/Chaos_engineering
8. Crisis management — Wikipedia — https://en.wikipedia.org/wiki/Crisis_management
9. Ransomware — Wikipedia — https://en.wikipedia.org/wiki/Ransomware
10. Replication (computing) — Wikipedia — https://en.wikipedia.org/wiki/Replication_(computing)
11. Risk management — Wikipedia — https://en.wikipedia.org/wiki/Risk_management
