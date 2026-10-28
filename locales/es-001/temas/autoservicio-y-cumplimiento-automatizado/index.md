# Autoservicio y cumplimiento automatizado

**El autoservicio permite a las personas obtener lo que necesitan sin esperar a otra persona, y el cumplimiento automatizado completa la solicitud entre bastidores; ambos funcionan cuando la solicitud es estándar, la identidad se verifica, el acceso sigue el mínimo privilegio y queda una vía hacia una persona para todo lo que el sistema no puede atender.**

## Por qué importa

La mayoría de las solicitudes que llegan a un equipo de servicio son rutinarias: restablecer una contraseña, añadir a alguien a un grupo, instalar software aprobado, reservar una sala de reuniones, averiguar cómo conectarse a la red inalámbrica. Una persona que las hace a mano tarda minutos en cada una. Quien las pide espera horas, porque la solicitud queda en una cola hasta que alguien se libera, y quien la atiende pasa el día en un trabajo que aporta poco.

El autoservicio cambia ambos lados. Quien pide encuentra lo que busca en un portal o chat, rellena lo necesario y lo obtiene, a menudo de inmediato. Entre bastidores, el cumplimiento automatizado realiza los pasos: crea la cuenta, asigna la licencia, avisa al jefe y registra el resultado. Wikipedia describe el autoservicio como un sistema en el que las personas se sirven a sí mismas. En un servicio bien gestionado mejora la rapidez, la coherencia y el costo, y libera al personal cualificado para trabajos más difíciles.

El cumplimiento que se ejecuta sin una persona se ejecuta también sin el criterio de una persona. Si el sistema concede acceso por una afirmación falsa, instala lo equivocado o falla en silencio, el efecto es inmediato y repetido. Las cuestiones de diseño tratan por tanto tanto del control como de la comodidad: quién pide, si está autorizado, qué puede salir mal y cómo lo sabremos. Este tema describe cómo diseñar con seguridad el autoservicio y el cumplimiento automatizado. Se apoya en la gestión de solicitudes de servicio (Tema 3.6 — Gestión de Solicitudes de Servicio), el catálogo (Tema 3.8 — Gestión del Catálogo de Servicios) y la automatización de flujos de trabajo (Tema 6.2 — Automatización y orquestación de flujos de trabajo), y comparte preocupaciones con la seguridad de la información (Tema 3.13 — Gestión de la Seguridad de la Información).

## Conceptos clave

**Autoservicio.** Mecanismos que permiten a los usuarios completar tareas por sí mismos, mediante un portal, una aplicación, un asistente de chat o un quiosco. Wikipedia describe el autoservicio y los portales web. Abarca encontrar información, hacer solicitudes, seguir el estado y realizar acciones como restablecer una contraseña.

**Cumplimiento automatizado.** Realizar los pasos de una solicitud mediante software. La forma más simple es un script detrás de un formulario; la más rica es un flujo de trabajo orquestado entre varios sistemas. Wikipedia describe el aprovisionamiento, la preparación de usuarios, sistemas y servicios. El aprovisionamiento sin intervención (zero-touch provisioning), también descrito allí, configura un dispositivo automáticamente cuando se conecta por primera vez.

**Cumplimiento totalmente automatizado, asistido y aprobado.** Algunas solicitudes pueden atenderse sin ningún humano, como añadir una aplicación aprobada. Otras necesitan primero una aprobación humana y luego se ejecutan automáticamente. Otras necesitan que un técnico realice un paso, con el sistema haciendo el resto. Elija la vía según el riesgo y el costo. Véase el Tema 6.1 — Estrategia de automatización.

**Identidad y autenticación.** El sistema debe saber quién pide. Wikipedia describe la gestión de identidades y accesos, el inicio de sesión único y la autenticación multifactor. Una autenticación fuerte en el momento de una acción sensible, como un restablecimiento de contraseña, impide que los atacantes aprovechen la vía de autoservicio.

**Derechos y autorización.** Quién puede pedir qué. Las reglas pueden depender del rol, el departamento, la ubicación o la aprobación del jefe. Wikipedia describe el control de acceso basado en roles, en el que los permisos siguen a los roles. Codifique las reglas en el catálogo y el flujo de trabajo, para que sea el sistema, y no quien cumple, quien decida la elegibilidad. Véase el Tema 3.6 — Gestión de Solicitudes de Servicio.

**Mínimo privilegio y límites de tiempo.** Conceda solo el acceso que se necesita y, donde sea posible, solo durante el tiempo que se necesita. Wikipedia describe el principio de mínimo privilegio. El acceso limitado en el tiempo, que caduca si no se renueva, reduce la acumulación de permisos antiguos. El acceso privilegiado, como los derechos de administrador, merece un control adicional. Wikipedia describe la gestión de accesos privilegiados.

**Altas, movimientos y bajas.** Los acontecimientos del tiempo de una persona en una organización desencadenan muchas solicitudes. Automatizarlos a partir de una fuente de confianza, normalmente el registro de RR. HH., proporciona cuentas y accesos al empezar, cambios cuando se mueve y retirada cuando se va. Wikipedia describe la incorporación. Véase el Tema 1.9 — Gestión de servicios empresariales.

**Interfaces estándar.** Los sistemas pueden conectarse mediante interfaces de programación de aplicaciones (API) y estándares de aprovisionamiento de identidades, como SCIM, descrito en Wikipedia. Las interfaces estándar reducen el código a medida y hacen más robusto el cumplimiento. Donde un sistema no tiene interfaz, hace falta una persona o una automatización frágil.

**Verificación y confirmación.** Tras un paso, compruebe que funcionó e informe a quien pidió. Un cumplimiento que informa de éxito sin comprobar es una fuente de fallos silenciosos. Proporcione un estado que el usuario pueda ver.

**Excepciones y traspaso.** Las solicitudes que no encajan o fallan van a una persona con todo el contexto, y se informa al usuario. Facilite llegar a una persona desde cualquier punto. Véase el Tema 5.3 — Centro de servicio con IA y agentes virtuales.

**Abuso y fraude.** El autoservicio es un objetivo de la ingeniería social, en la que los atacantes persuaden o engañan a un sistema o a una persona para que concedan acceso. Wikipedia describe la ingeniería social. Las defensas incluyen comprobaciones fuertes de identidad, límites a cuánto se puede hacer a la vez, monitorización de patrones inusuales y comprobaciones adicionales para las solicitudes de alto riesgo.

**Experiencia y accesibilidad.** El mejor autoservicio es fácil de encontrar y de usar para todos. Wikipedia describe la experiencia de usuario, la accesibilidad y las Pautas de Accesibilidad para el Contenido Web. No todos pueden o quieren usar un portal, y la brecha digital, descrita allí, es real. Mantenga abiertas otras vías.

**Auditabilidad.** Para cada solicitud, registre quién pidió, quién aprobó, qué se hizo y cuándo. Wikipedia describe los rastros de auditoría. Esto respalda las investigaciones, las revisiones de acceso y el cumplimiento.

**Reversión y compensación.** Si un paso falla, deshaga los pasos anteriores o márquelos para su limpieza. Si una solicitud se atendió por error, necesita una forma de revertirla. Véase el Tema 6.2 — Automatización y orquestación de flujos de trabajo.

**Capacidad de los sistemas descendentes.** La automatización puede enviar solicitudes más rápido de lo que un sistema destino puede manejar. Use colas y límites y proteja a los sistemas pequeños de las avalanchas.

**Cómo encajan las lentes.** El autoservicio es el lado orientado al usuario de la lente de automatización. La práctica ágil sugiere empezar con las solicitudes principales y mejorar con retroalimentación. La IA puede ayudar a los usuarios a encontrar la solicitud adecuada y a rellenar el formulario, con límites estrictos sobre lo que puede conceder. La analítica muestra la demanda, los fallos y el abandono.

## Buenas prácticas

1. **Empiece con las diez solicitudes principales.** Elija las más frecuentes, estándar y de bajo riesgo, y hágalas excelentes antes de añadir otras. Véase el Tema 3.8 — Gestión del Catálogo de Servicios.
2. **Escriba en el sistema las reglas de elegibilidad y aprobación.** Haga que el catálogo sepa quién puede pedir qué y quién debe aprobar. Elimine las aprobaciones que no gestionan un riesgo real.
3. **Verifique la identidad en proporción al riesgo.** Use autenticación fuerte para las acciones sensibles y comprobaciones adicionales para las de alto riesgo. No deje que una afirmación en un chat sustituya a la verificación.
4. **Conceda mínimo privilegio, con caducidad.** Dé el acceso mínimo por un tiempo y renueve a petición. Revise el acceso con regularidad.
5. **Cumpla en pasos pequeños e idempotentes con comprobaciones.** Verifique cada paso, confirme al usuario y diseñe de modo que una repetición no cause daño. Registre cada acción.
6. **Ofrezca estado y una salida.** Muestre el progreso, envíe avisos en puntos significativos y facilite llegar a una persona.
7. **Diseñe para el fallo.** Decida qué ocurre cuando un paso falla: reintentar, compensar o pasar a una persona. Envíe los fallos a una cola visible con un responsable.
8. **Esté atento al abuso.** Monitorice patrones inusuales, como muchos restablecimientos desde una misma fuente o solicitudes de acceso inusuales, y añada límites. Trate el portal como parte de su perímetro de seguridad.
9. **Pruebe con usuarios reales.** Observe cómo usa la gente el portal. Corrija las formulaciones y los flujos confusos y pruebe la accesibilidad. Mantenga otras vías para quienes las necesiten.
10. **Revise y retire.** Compruebe qué solicitudes automatizadas fallan, cuáles se abandonan y cuáles cuestan más de mantener que lo que ahorran. Mejórelas o elimínelas.

## Preguntas para conversar con su equipo

**¿Qué solicitudes podríamos atender hoy sin una persona si confiáramos en la identidad y en las reglas?**
Enumeren candidatas. Esperen restablecimientos de contraseña y software estándar. Pregunten qué nos impide confiar. Después elijan una y arreglen el obstáculo.

**¿Cómo sabemos que la persona que pide es quien dice ser, para cada tipo de solicitud?**
Recorran la comprobación. Esperen comprobaciones más débiles de lo que se suponía. Después refuercen una solicitud de alto riesgo.

**¿Qué es lo peor que podría ocurrir si una solicitud automatizada se ejecutara mal o para la persona equivocada?**
Imaginen el acceso a un sistema sensible o el borrado de datos. Esperen algunos casos incómodos. Después añadan aprobación o límites para ellos.

**¿Cuánto duran las concesiones de acceso y quién las revisa?**
Pidan los datos. Esperen concesiones permanentes. Después elijan un tipo de acceso para darle una fecha de caducidad.

**¿Qué ve un usuario cuando una solicitud falla a medias y quién se entera?**
Prueben un fallo. Esperen silencio. Después diseñen un mensaje, una cola y un responsable.

**¿Quién podría no poder usar nuestro portal y cómo obtiene ayuda?**
Piensen en necesidades de accesibilidad, idioma y conectividad. Esperen que algunos grupos no se hayan considerado. Después prueben con unos pocos usuarios reales de esos grupos.

## En la práctica: un ejemplo de gestión de servicios

El departamento de TI de un ayuntamiento regional atiende unas 1.800 solicitudes al mes de 4.000 empleados. Los desbloqueos de cuentas y restablecimientos de contraseña suponen 600, las altas de personal nuevo 120 y las instalaciones de software 300. Un buzón compartido y una cola telefónica reciben la mayoría. El personal de las bibliotecas, los depósitos y las residencias de mayores a menudo llama porque no puede llegar a un técnico en su sede.

La gerente de servicios construye autoservicio para los tres principales tipos de solicitud. Para los restablecimientos de contraseña, el flujo de autoservicio del propio sistema de identidad pide autenticación multifactor, con una videollamada con un técnico como alternativa para el personal que no tiene un dispositivo registrado. Para el software, un catálogo de 40 aplicaciones preaprobadas se instala automáticamente tras la aprobación del jefe mediante un enlace de correo, con aprobación automática para las diez herramientas comunes de bajo riesgo. Para las altas de personal nuevo, el registro del sistema de RR. HH. crea un caso padre y desencadena la creación de la cuenta, el buzón y la pertenencia a grupos mediante el motor de flujos de trabajo, con una tarea de técnico para el portátil.

El equipo diseña para el control. La elegibilidad está codificada: el personal de los depósitos no puede pedir software de diseño. El acceso al sistema financiero nunca es automático; va al equipo de finanzas para su aprobación, con una caducidad de un año. Cada paso del cumplimiento comprueba su resultado: tras crear una cuenta, el flujo verifica que es posible iniciar sesión y envía un mensaje al usuario. Los fallos van a una cola de técnicos con el error adjunto.

Tras cuatro meses, las llamadas bajan en aproximadamente un 40 por ciento y el personal nuevo tiene cuentas el primer día. Un monitor detecta una ráfaga de intentos de restablecimiento de contraseña desde una misma dirección, y el equipo de identidad la bloquea. Qué sigue siendo difícil: algunas residencias de mayores no tienen internet fiable, así que el personal sigue llamando; las instalaciones automáticas fallan en dispositivos antiguos, lo que el equipo solo ha descubierto por la cola de fallos; y los jefes aprueban enlaces de correo sin leer, lo que la gerente muestreó y planea abordar con aprobaciones menos numerosas y más claras. La gerente añade una opción telefónica para quienes no pueden usar el portal y una revisión mensual de los fallos.

## Cuatro perspectivas

### Equipos de producto y de entrega

Expongan API limpias e interfaces de identidad estándar que el cumplimiento pueda usar. Proporcionen la configuración y los paquetes de su producto y avisen al equipo de los cambios que rompan la automatización.

### Equipos de servicio y de operaciones

Sean dueños de los modelos de solicitud, la automatización y las colas de fallos. Prueben las vías, estén atentos al abuso y mantengan vías manuales para las excepciones. Usen los datos para mejorar formularios y reglas.

### Liderazgo y gobernanza

Pida evidencia de que las comprobaciones de identidad y las reglas de acceso funcionan, y datos sobre fallos y abandono. Financie la accesibilidad y las alternativas. No cuente las solicitudes automatizadas como éxito sin comprobar su calidad.

### Clientes y usuarios

Debería poder obtener lo rutinario con rapidez, ver el estado y llegar a una persona cuando no encaje. Mantenga seguras sus credenciales y diga al proveedor lo que no funcionó o lo que no pudo usar.

## Ágil, IA, automatización y analítica

### Ágil

Lance un tipo de solicitud cada vez, observe el uso real y mejore antes de añadir más. Involucre a los usuarios en los formularios y la redacción. Precaución: un portal con muchas solicitudes a medio funcionar erosiona la confianza; es preferible tener menos y mejores.

### IA

La IA puede ayudar a los usuarios a encontrar la solicitud adecuada, rellenar formularios y resumir solicitudes para quienes aprueban. No debe decidir la elegibilidad ni conceder acceso por sus propias afirmaciones; deciden las reglas y las comprobaciones de identidad. Precaución: un mensaje persuasivo puede dirigir a un asistente, así que mantenga estrechos sus poderes y verifique fuera del chat. Véase el Tema 5.3 — Centro de servicio con IA y agentes virtuales.

### Automatización

El cumplimiento automatizado necesita pasos idempotentes, comprobaciones, registros, límites y reversión. Trate cada flujo de cumplimiento como un producto con un responsable. Precaución: la concesión automática de acceso sin verificación es un agujero de seguridad; incluya comprobaciones de identidad y revisiones por muestreo. Véase el Tema 6.2 — Automatización y orquestación de flujos de trabajo.

### Analítica

Siga la demanda por tipo, el tiempo de cumplimiento, la proporción totalmente automatizada, los fallos, el abandono, las reaperturas y las señales de abuso. Precaución: las tasas de automatización pueden elevarse trasladando a otro lugar los casos problemáticos, y los tiempos cortos de cumplimiento pueden ocultar resultados erróneos; muestree los resultados. Véanse el Tema 7.7 — Analítica de experiencia y sentimiento y el libro *Service Management Metrics*.

## Modos de fallo habituales

- **Comprobaciones de identidad débiles.** Un atacante usa el autoservicio para apoderarse de cuentas. Refuerce la autenticación en proporción al riesgo.
- **Concesiones automáticas sin reglas.** Las personas equivocadas obtienen acceso. Codifique la elegibilidad y las aprobaciones.
- **Acceso permanente.** Se acumulan permisos antiguos. Use caducidad y revisiones.
- **Fallo silencioso.** Una solicitud falla y nadie lo sabe. Verifique, avise y ponga los fallos en cola.
- **Sin forma de llegar a una persona.** Los usuarios quedan atascados. Ofrezca alternativas claras.
- **Portal inaccesible.** Parte del personal queda excluido. Pruebe la accesibilidad y mantenga otras vías.
- **Avalanchas sobre sistemas pequeños.** Fallan los servicios descendentes. Use colas y límites.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Autoservicio | Teléfono y correo | Portal para unas pocas solicitudes | Portal y chat para las solicitudes principales con estado | Uso y abandono revisados | Experiencia coherente entre funciones y canales |
| Cumplimiento | Manual | Algunos scripts | Flujos orquestados con comprobaciones y registros | Fallos y calidad medidos | Automatización de extremo a extremo con supervisión según el riesgo |
| Identidad y acceso | Ad hoc | Comprobaciones básicas | Autenticación fuerte, reglas por roles y caducidad | Abuso monitorizado y acceso revisado | Acceso adaptado de forma continua entre sistemas |
| Inclusión | No considerada | Conciencia | Accesibilidad probada, alternativas conservadas | Resultados medidos por grupo | Experiencia diseñada para todos los usuarios |

## Lista de verificación

- [ ] Elegimos las solicitudes principales para el autoservicio y las describimos con las palabras de los usuarios.
- [ ] Las reglas de elegibilidad y aprobación están codificadas en el sistema.
- [ ] Las comprobaciones de identidad corresponden al riesgo de cada solicitud.
- [ ] El acceso es de mínimo privilegio con caducidad donde es posible.
- [ ] Cada paso de cumplimiento se verifica, se registra y es seguro repetirlo.
- [ ] Los fallos van a una cola con responsable y se informa a los usuarios.
- [ ] Monitorizamos el abuso.
- [ ] La accesibilidad está probada y existen vías alternativas.

## Prompts de IA

**Evalúe el riesgo por tipo de solicitud.**

```text
Here is a list of our request types with what each grants or changes: [paste].
For each, describe the worst plausible outcome if fulfilled in error or for the wrong person, and suggest a question about the level of identity check and approval needed. Do not rank by importance or decide.
List what you are unsure of.
```

**Pruebe un flujo de autoservicio.**

```text
Here is a description of how a self-service request works, step by step: [paste].
Write 20 test cases: normal, edge, failure at each step, an impostor attempt, and a request outside eligibility. For each, state the expected result. Do not use real personal data.
List what you are unsure of.
```

**Analice los fallos.**

```text
Here is a list of failed automated requests with type, step that failed, error text, and date, identifiers removed: [paste].
Group failures by type and step, count each, and list questions to investigate. Do not infer causes beyond the data.
List what you are unsure of.
```

## Habilidades de IA

- [service-catalog](../../../../skills/service-catalog/SKILL.md): úsela para describir las solicitudes y la elegibilidad para el portal.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): úsela para analizar los pasos de cumplimiento y los puntos de fallo.
- [security-testing](../../../../skills/security-testing/SKILL.md): úsela para probar las vías de autoservicio frente al abuso.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md): úsela para aclarar quién aprueba y quién es responsable de cada cumplimiento.
- [user-story](../../../../skills/user-story/SKILL.md): úsela para expresar las necesidades de los usuarios al diseñar solicitudes.

## Fuentes principales

- PeopleCert, páginas de certificación ITIL: la descripción del propietario de la práctica de gestión de solicitudes de servicio.
- NIST, Digital Identity Guidelines (SP 800-63): orientación sobre la comprobación de identidad y la autenticación.
- W3C, Web Content Accessibility Guidelines (WCAG): el estándar internacional de contenido web accesible.
- Wikipedia, "Self-service" e "Identity and access management": visiones generales de las ideas.

## Referencias

1. Self-service — Wikipedia — https://en.wikipedia.org/wiki/Self-service
2. Provisioning — Wikipedia — https://en.wikipedia.org/wiki/Provisioning
3. Zero-touch provisioning — Wikipedia — https://en.wikipedia.org/wiki/Zero-touch_provisioning
4. Identity and access management — Wikipedia — https://en.wikipedia.org/wiki/Identity_and_access_management
5. Multi-factor authentication — Wikipedia — https://en.wikipedia.org/wiki/Multi-factor_authentication
6. Role-based access control — Wikipedia — https://en.wikipedia.org/wiki/Role-based_access_control
7. Principle of least privilege — Wikipedia — https://en.wikipedia.org/wiki/Principle_of_least_privilege
8. Privileged access management — Wikipedia — https://en.wikipedia.org/wiki/Privileged_access_management
9. Social engineering (security) — Wikipedia — https://en.wikipedia.org/wiki/Social_engineering_(security)
10. Web Content Accessibility Guidelines — Wikipedia — https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines
11. System for Cross-domain Identity Management — Wikipedia — https://en.wikipedia.org/wiki/System_for_Cross-domain_Identity_Management
12. Audit trail — Wikipedia — https://en.wikipedia.org/wiki/Audit_trail
