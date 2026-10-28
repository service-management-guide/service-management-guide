# Infraestructura como código y GitOps

**La infraestructura como código define servidores, redes y recursos de nube en archivos de texto revisados que las herramientas aplican; GitOps añade la regla de que el repositorio es la única forma de cambiar los sistemas en vivo y de que un controlador mantiene la realidad igual a él, de modo que el control de versiones se convierte en el registro del cambio y en el medio de recuperación.**

## Por qué importa

Durante mucho tiempo, la infraestructura se construyó a mano. Un ingeniero iniciaba sesión en un servidor, instalaba paquetes, editaba la configuración y seguía adelante. El servidor se convertía en un objeto único, con un historial que vivía en la memoria del ingeniero y en unas pocas notas. Cuando fallaba, se reconstruía de memoria. Cuando hacía falta un segundo servidor, era una copia que difería en pequeños detalles que nadie podía enumerar. Resolver problemas significaba averiguar cómo dos sistemas «idénticos» habían llegado a comportarse de manera distinta.

La infraestructura como código (IaC) sustituye esto por texto. El estado deseado de la infraestructura se escribe en archivos, se guarda en control de versiones, se revisa como el software y lo aplican las herramientas. Reconstruir un entorno se convierte en un comando. Una segunda copia son los mismos archivos con valores distintos. Un cambio es una solicitud de integración, con un revisor, una prueba y un registro. Wikipedia describe la infraestructura como código como la gestión y el aprovisionamiento de la infraestructura mediante archivos de definición legibles por máquina, en lugar de una configuración interactiva.

GitOps lleva la idea un paso más allá. Se declara el repositorio como la única fuente de verdad del estado deseado, y un software vigila tanto a él como al sistema en vivo y pone el sistema en línea. Nadie cambia producción a mano; cambian el repositorio. Esto da mucho a la gestión de servicios: un rastro de auditoría de cada cambio, recuperación rápida, coherencia entre entornos y un hogar natural para la aprobación de cambios. También introduce nuevos riesgos, como los secretos en repositorios y los errores que se aplican en todas partes a la vez. Este tema explica las ideas y cómo adoptarlas con cuidado. Se apoya en la gestión de la configuración (Tema 4.4 — Gestión de la Configuración), la entrega continua (Tema 2.2 — Entrega continua) y la habilitación de cambios (Tema 3.4 — Habilitación de Cambios), y conduce a los pipelines (Tema 6.4 — Pipelines y cambio automatizado).

## Conceptos clave

**Infraestructura como código (IaC).** Definir la infraestructura en código o archivos de configuración que las herramientas leen y aplican. Abarca servidores, redes, almacenamiento, bases de datos, reglas de acceso y ajustes de plataforma. Wikipedia describe el enfoque y su historia. Los archivos son la documentación además del mecanismo.

**Declarativo e imperativo.** Una definición declarativa indica cuál debe ser el estado final («hay tres servidores de este tipo detrás de este balanceador de carga»); la herramienta averigua cómo llegar. Una definición imperativa indica los pasos que dar. Wikipedia describe la programación declarativa e imperativa. Las herramientas declarativas tienden a ser más fáciles de razonar y de repetir con seguridad, y los scripts imperativos ofrecen más control para tareas inusuales. Muchos equipos usan ambos.

**Herramientas.** Los ejemplos incluyen Terraform, que aprovisiona recursos de nube, Ansible, que configura sistemas, y Kubernetes, que ejecuta contenedores según manifiestos declarados. Wikipedia describe cada una. El panorama de herramientas cambia con rapidez; elija según el ajuste, el soporte y las habilidades que tenga, y mantenga las definiciones tan portables como sea práctico.

**Estado deseado, estado real y deriva.** El estado deseado es lo que dice el código; el estado real es lo que se está ejecutando. La deriva es la diferencia, normalmente por cambios manuales o fallos. Detectar la deriva y corregirla es un beneficio central de la IaC. Véase el Tema 4.4 — Gestión de la Configuración.

**Idempotencia.** Aplicar la misma definición repetidamente da el mismo resultado. Wikipedia describe la idempotencia. Es lo que hace seguro volver a ejecutar una aplicación para corregir la deriva.

**Archivos de estado.** Algunas herramientas guardan un registro de los recursos que gestionan, que comparan con la definición. Trátelo con cuidado: puede contener datos sensibles, no debe editarse a mano y necesita bloqueo para que dos personas no apliquen a la vez.

**Infraestructura inmutable.** En lugar de cambiar un servidor en ejecución, se construye uno nuevo a partir de una imagen conocida y se sustituye el antiguo. Esto evita la deriva y hace sencilla la reversión: se vuelve al anterior. Funciona mejor con máquinas virtuales y contenedores, descritos en Wikipedia, y con imágenes bien construidas.

**Control de versiones y revisión.** Las definiciones viven en control de versiones, como Git, que Wikipedia describe como un sistema distribuido de control de versiones. Los cambios pasan por ramas y revisiones, descritas como solicitudes de integración y revisión de código. El historial muestra quién cambió qué, cuándo y por qué, lo que respalda la auditoría y el aprendizaje. Véase el Tema 3.4 — Habilitación de Cambios.

**GitOps.** Un enfoque operativo en el que un repositorio Git contiene el estado deseado y un agente automatizado mantiene el sistema en vivo en línea con él. Los cambios se hacen solo cambiando el repositorio; el agente los extrae y los aplica, y revierte los cambios manuales. Wikipedia menciona GitOps bajo DevOps. El diseño basado en extracción significa que el sistema de producción extrae su propia configuración, de modo que las credenciales de producción no tienen por qué vivir en el sistema de compilación. Consulte la documentación del propio proyecto para los detalles del enfoque.

**Bucles de conciliación.** Un controlador que compara repetidamente el estado deseado y el real y actúa para cerrar la brecha. La idea viene de la teoría de control, descrita en Wikipedia, y sustenta cómo funcionan Kubernetes y las herramientas GitOps. Los bucles son resilientes, y también pueden repetir un mal cambio con rapidez.

**Entornos y promoción.** Las mismas definiciones, con valores distintos, crean entornos de desarrollo, de pruebas y de producción. Los cambios se promueven a través de ellos. Mantener coherentes los entornos hace más significativas las pruebas. Véase el Tema 3.5 — Gestión de Versiones y Despliegues.

**Política como código.** Reglas sobre lo que está permitido, como «ningún almacenamiento público» o «todos los recursos deben estar etiquetados», escritas como código y comprobadas automáticamente antes de aplicar los cambios. Esto pone los controles donde se hace el cambio y produce evidencia. Véase el Tema 6.4 — Pipelines y cambio automatizado.

**Secretos.** Las contraseñas, claves y tokens no deben guardarse en texto plano en los repositorios. Use un gestor de secretos o cifrado y dé a la automatización un acceso mínimo y de corta duración. Véase el Tema 3.13 — Gestión de la Seguridad de la Información.

**Módulos y reutilización.** Módulos compartidos y probados para patrones comunes, como una red estándar o una base de datos, aceleran el trabajo y hacen cumplir los estándares. Necesitan un responsable, versiones y notas de versión.

**Radio de la explosión.** Un error en una definición compartida puede afectar a muchos sistemas a la vez. Límitelo dividiendo el estado en unidades menores, usando despliegues escalonados y exigiendo revisión para los módulos compartidos.

**Pruebas del código de infraestructura.** Los métodos incluyen comprobaciones de sintaxis y de políticas, un plan o vista previa de los cambios antes de aplicar, pruebas en entornos desechables y comprobaciones posteriores a la aplicación. Wikipedia describe ideas relacionadas bajo la automatización de pruebas. Véase el Tema 2.2 — Entrega continua.

**Cómo encajan las lentes.** La IaC y GitOps son la base de ingeniería de las operaciones ágiles: cambios pequeños, revisados y reversibles. La IA puede redactar definiciones y explicar planes, bajo revisión. La automatización los aplica. La analítica lee el historial para saber la frecuencia de cambios y de fallos.

## Buenas prácticas

1. **Ponga cada cambio en código.** Haga del repositorio la vía de cambios en los sistemas importantes y prohíba los cambios manuales salvo en emergencias definidas. Registre los cambios de emergencia e intégrelos de nuevo.
2. **Use revisión y cambios pequeños.** Exija que una segunda persona revise cada cambio y mantenga los cambios lo bastante pequeños como para entenderlos. Muestre la vista previa de lo que cambiará.
3. **Prefiera definiciones declarativas y pasos idempotentes.** Son más fáciles de repetir y de comprobar en busca de deriva. Use scripts imperativos para las tareas que los necesiten, con cuidado.
4. **Detecte y corrija la deriva.** Compare el estado real con el deseado según un calendario o de forma continua. Decida para cada tipo de deriva si revertir automáticamente o alertar.
5. **Mantenga los secretos fuera del código.** Use un gestor de secretos, cifre donde haga falta, dé a la automatización credenciales de corta duración y analice los repositorios en busca de secretos filtrados.
6. **Proteja el estado y el repositorio.** Restrinja quién puede cambiar las definiciones y el estado de producción, haga cumplir la protección de ramas y haga copias de seguridad del repositorio y del estado.
7. **Pruebe antes de aplicar.** Ejecute comprobaciones de políticas, vistas previas y pruebas en entornos desechables. Revise el plan en busca de eliminaciones inesperadas.
8. **Limite el radio de la explosión.** Divida las definiciones en unidades que puedan fallar de forma independiente, despliegue por etapas y proteja los recursos críticos contra la eliminación accidental.
9. **Reutilice módulos probados con responsables.** Publique módulos versionados para patrones estándar, con documentación y notas de versión, y retire las versiones antiguas.
10. **Planifique la recuperación.** Ensaye la reconstrucción de un entorno a partir del código, incluida la restauración de datos, y cronométrela. Incluya el repositorio y las herramientas en sus planes de continuidad. Véase el Tema 3.12 — Gestión de la Continuidad del Servicio.

## Preguntas para conversar con su equipo

**¿Qué sistemas podríamos reconstruir hoy a partir de código y cuáles solo de memoria?**
Hagan una lista. Esperen que muchos dependan de una persona. Después elijan un sistema y defínanlo en código.

**¿Cuándo cambió alguien por última vez producción a mano y cómo nos enteramos?**
Pidan historias. Esperen que nadie lo siga. Después añadan detección de deriva a un entorno y acuerden qué ocurre ante una diferencia.

**¿Dónde podría haber un secreto en un repositorio o en un archivo de estado?**
Busquen juntos. Esperen sorpresas. Después analicen los repositorios y trasladen los hallazgos a un gestor de secretos.

**¿Cuál es el mayor cambio que podría hacer una sola aplicación y cómo lo limitaríamos?**
Piensen en módulos compartidos y estados monolíticos. Esperen respuestas incómodas. Después dividan un estado grande en otros menores.

**¿Cómo revisamos los cambios de infraestructura y qué mira realmente un revisor?**
Pidan una revisión reciente. Esperen una aprobación rápida. Después acuerden qué debe comprobar un revisor, como la salida del plan y el impacto en la seguridad.

**¿Dónde podría ayudar la IA a escribir o revisar código de infraestructura y cómo lo comprobamos?**
La IA puede redactar definiciones y explicar planes. También puede producir valores predeterminados inseguros o ajustes de recursos erróneos. Pregunten quién revisa y qué comprobaciones se ejecutan. Después pasen el código redactado por IA por las mismas comprobaciones de políticas que cualquier otro.

## En la práctica: un ejemplo de gestión de servicios

El equipo digital de una biblioteca nacional opera un servicio de búsqueda del catálogo en una nube pública. Los entornos se construyeron a mano a lo largo de varios años. Un entorno de pruebas difiere de producción de formas que nadie puede enumerar, y una caída reciente se rastreó hasta un cambio de un grupo de seguridad hecho manualmente durante un incidente anterior y nunca registrado.

El responsable de la plataforma elige definir un entorno en código como piloto. Con una herramienta declarativa, el equipo describe la red, el cómputo, la base de datos y las reglas de acceso del entorno de pruebas, importa los recursos existentes y pone el código en un repositorio con protección de ramas y revisión obligatoria. Un pipeline ejecuta comprobaciones de políticas, como ningún almacenamiento público y etiquetas obligatorias, y muestra el plan en cada solicitud de integración. Los secretos pasan al gestor de secretos del proveedor de nube.

Luego añaden detección de deriva: un trabajo nocturno compara el código con el estado real de la nube y publica las diferencias en el canal del equipo. La primera semana encuentra once cambios manuales. Ocho son inofensivos, dos son recursos de prueba obsoletos y uno es una regla de cortafuegos abierta en un puerto de base de datos. Corrigen la regla y eliminan los recursos.

Tras tres meses, producción también está en código, y un controlador al estilo GitOps en la plataforma de contenedores aplica los cambios aprobados desde el repositorio. Reconstruir desde cero el entorno de pruebas lleva 40 minutos. El equipo ensaya la reconstrucción de producción en una cuenta aparte, con una restauración de datos, en media jornada.

Qué cambia: el historial de cambios está en el repositorio, las revisiones son reales y los dos entornos coinciden. Qué sigue siendo difícil: el servidor de base de datos más antiguo no está bien soportado por las herramientas y sigue siendo en parte manual; el archivo de estado contuvo una vez una contraseña en texto plano de una importación anterior, que el equipo tuvo que rotar; y un ingeniero aplicó un cambio desde un portátil con otra versión de la herramienta, lo que produjo diferencias inesperadas. El responsable añade una versión fija de la herramienta en el pipeline, una regla de que las aplicaciones solo vengan del pipeline y un análisis del estado en busca de secretos.

## Cuatro perspectivas

### Equipos de producto y de entrega

Definan la infraestructura de su servicio en código junto a la aplicación, revísenla y pruébenla en entornos desechables. Eviten los cambios manuales. Incluyan etiquetas, responsables y ajustes de seguridad en la definición.

### Equipos de servicio y de operaciones

Usen el repositorio como registro del cambio y detecten la deriva. Revisen los planes con cuidado, protejan el estado y los secretos y ensayen las reconstrucciones. Mantengan raros los cambios de emergencia e intégrenlos de nuevo en el código.

### Liderazgo y gobernanza

Pida evidencia del repositorio y del pipeline en lugar de reuniones. Financie las herramientas, la formación y los ensayos. Deje claro que los cambios manuales en producción son excepciones que deben registrarse.

### Clientes y usuarios

Usted se beneficia de entornos que se comportan de la misma manera y de una recuperación más rápida. Debería ver menos sorpresas tras los cambios y un aviso claro de los importantes.

## Ágil, IA, automatización y analítica

### Ágil

Los cambios de infraestructura pequeños, revisados y reversibles con retroalimentación rápida son la forma operativa de la entrega continua. Construya las definiciones de forma incremental, empezando por el entorno más doloroso. Precaución: una migración masiva de todos los sistemas a código a la vez es arriesgada; avance de uno en uno.

### IA

La IA puede redactar definiciones, explicar un plan y sugerir reglas de políticas, con una persona que revise cada cambio. Nombre un responsable para cada uso. Precaución: el código de infraestructura generado puede ser inseguro por defecto o eliminar recursos; aplique las mismas comprobaciones de políticas y lea el plan. Véase el Tema 5.4 — IA generativa para incidentes, conocimiento y cambios.

### Automatización

IaC y GitOps son la automatización de la propia infraestructura. Mantenga los controladores y los pipelines con mínimo privilegio, registrados y protegidos, porque pueden cambiarlo todo. Precaución: un conciliador automático puede volver a aplicar un error en todas partes; escalone los despliegues y conserve una forma de pausarlo. Véase el Tema 6.4 — Pipelines y cambio automatizado.

### Analítica

Observe la frecuencia de cambios, la tasa de fallos, el tiempo de reconstrucción, los recuentos de deriva, el tiempo para detectar cambios manuales y las infracciones de políticas. Precaución: contar commits premia la actividad, y un recuento bajo de deriva puede reflejar un detector débil; pruebe la detección con un cambio conocido. Véanse el libro *Service Management Metrics* y el Tema 7.3 — Medición e informes.

## Modos de fallo habituales

- **Realidad híbrida.** Unos cambios en código y otros a mano. La deriva crece. Haga del código la única vía y detecte la deriva.
- **Secretos en el repositorio.** Se filtran credenciales. Use un gestor de secretos y analice.
- **Estado compartido enorme.** Un cambio afecta a todo. Divida en unidades menores.
- **Cambios sin revisar.** Los errores llegan a producción. Exija revisión y muestre el plan.
- **Herramientas y módulos sin versión fija.** El comportamiento cambia de forma inesperada. Fije las versiones.
- **Nunca reconstruido.** La recuperación falla cuando hace falta. Ensaye una reconstrucción.
- **El pipeline como superusuario.** Un pipeline comprometido es dueño de producción. Limite los privilegios y protéjalo.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Cobertura | Manual | Algunos recursos en código | Sistemas más importantes definidos en código | Cobertura y excepciones seguidas | Todo el parque definido y gobernado como código |
| Control | Sin revisión | Revisión entre pares | Revisión, vista previa del plan y comprobaciones de políticas en cada cambio | Deriva detectada y atendida | Conciliación con supervisión humana entre entornos |
| Seguridad | Secretos en el código | Conciencia | Secretos gestionados y analizados, automatización de mínimo privilegio | Hallazgos seguidos hasta su cierre | Seguridad y políticas incorporadas en los módulos compartidos |
| Recuperación | Reconstrucción de memoria | Documentada | Reconstrucción ensayada y cronometrada | Tiempo de recuperación medido y mejorado | Recuperación automatizada entre entornos y regiones |

## Lista de verificación

- [ ] Los sistemas importantes están definidos en código en control de versiones.
- [ ] Cada cambio se revisa y muestra una vista previa del plan.
- [ ] Los cambios manuales en producción están prohibidos salvo emergencias registradas.
- [ ] La deriva se detecta según un calendario y se atiende con una regla.
- [ ] Los secretos están en un gestor y se analizan los repositorios y el estado.
- [ ] Las herramientas y los módulos tienen versión fija y responsables.
- [ ] Las definiciones se dividen para limitar el radio de la explosión.
- [ ] Ensayamos la reconstrucción de un entorno y registramos el tiempo.

## Prompts de IA

**Revise la salida de un plan.**

```text
Here is the plan output from an infrastructure change: [paste].
List resources to be created, changed, and destroyed, highlight any deletion or replacement of a data store or network component, and list questions a reviewer should ask. Do not approve or reject.
List what you are unsure of.
```

**Redacte reglas de políticas a partir de requisitos.**

```text
Our requirements: [list, such as no public storage, tags required, encryption at rest]. Our tool: [name, or "undecided"].
Write each requirement as a plain-language rule with one example of a violation, and describe how to test the rule. Do not write code unless I name the tool.
List what you are unsure of.
```

**Resuma los hallazgos de deriva.**

```text
Here is a drift report listing differences between code and the running environment: [paste].
Group the differences by type (extra resource, changed setting, missing resource), flag any that touch access, network, or encryption, and write one question per group for the team. Do not recommend fixes.
List what you are unsure of.
```

## Habilidades de IA

- [configuration-management](../../../../skills/configuration-management/SKILL.md): úsela para vincular las definiciones de código con los servicios que respaldan.
- [change-request](../../../../skills/change-request/SKILL.md): úsela para describir con claridad los cambios de infraestructura para su revisión.
- [security-testing](../../../../skills/security-testing/SKILL.md): úsela para planificar comprobaciones del código de infraestructura y de los secretos.
- [disaster-recovery-testing](../../../../skills/disaster-recovery-testing/SKILL.md): úsela para ensayar la reconstrucción a partir del código.
- [runbook](../../../../skills/runbook/SKILL.md): úsela para documentar los procedimientos manuales de emergencia que permanezcan.

## Fuentes principales

- Kief Morris, *Infrastructure as Code* (2.ª edición, 2020): una guía práctica para definir y gestionar infraestructura.
- Jez Humble y David Farley, *Continuous Delivery* (2010): fundamentos de los entornos repetibles y los pipelines.
- La documentación de las herramientas que use, como Terraform, Ansible y Kubernetes: la fuente autorizada sobre su comportamiento.
- Wikipedia, "Infrastructure as code": una visión general del enfoque.

## Referencias

1. Infrastructure as code — Wikipedia — https://en.wikipedia.org/wiki/Infrastructure_as_code
2. DevOps — Wikipedia — https://en.wikipedia.org/wiki/DevOps
3. Declarative programming — Wikipedia — https://en.wikipedia.org/wiki/Declarative_programming
4. Imperative programming — Wikipedia — https://en.wikipedia.org/wiki/Imperative_programming
5. Idempotence — Wikipedia — https://en.wikipedia.org/wiki/Idempotence
6. Git — Wikipedia — https://en.wikipedia.org/wiki/Git
7. Version control — Wikipedia — https://en.wikipedia.org/wiki/Version_control
8. Code review — Wikipedia — https://en.wikipedia.org/wiki/Code_review
9. Containerization (computing) — Wikipedia — https://en.wikipedia.org/wiki/Containerization_(computing)
10. Control theory — Wikipedia — https://en.wikipedia.org/wiki/Control_theory
11. Kubernetes — Wikipedia — https://en.wikipedia.org/wiki/Kubernetes
12. Terraform (software) — Wikipedia — https://en.wikipedia.org/wiki/Terraform_(software)
