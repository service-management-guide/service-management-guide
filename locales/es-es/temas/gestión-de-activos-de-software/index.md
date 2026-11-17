# Gestión de Activos de Software

**La gestión de activos de software asegura que una organización tenga el software que necesita, use lo que paga, cumpla los términos de las licencias y sepa qué hay dentro de su propio software; hoy abarca también las suscripciones, los componentes de código abierto y los términos de los modelos y servicios de IA.**

## Por qué importa

El software es el mayor y menos visible conjunto de activos de muchas organizaciones. Un portátil es algo físico que se puede contar. Un derecho de uso de software es un derecho definido por un contrato, que puede depender de usuarios, dispositivos, procesadores o consumo, y que cambia cuando cambia la infraestructura. Nadie puede verlo con solo mirar.

El resultado son dos riesgos opuestos. La falta de licencias expone a la organización a auditorías, sanciones y a veces acciones legales. El exceso de licencias significa pagar por software que nadie usa, a menudo llamado shelfware. Wikipedia describe el shelfware como software comprado y nunca usado. Los estudios de analistas del sector suelen informar de grandes proporciones del gasto en software como desperdicio, aunque las cifras varían y deben tratarse con cautela. Ambos riesgos se reducen con la misma disciplina: saber qué tiene, para qué puede usarlo y qué usa realmente.

El panorama ha cambiado. Gran parte del software es hoy por suscripción, lo compran equipos con una tarjeta y lo actualiza el proveedor. Los componentes de código abierto están en casi todos los productos, cada uno con términos de licencia que conllevan obligaciones. Y los modelos y servicios de IA traen términos sobre datos, salidas y usos permitidos que son nuevos para muchos compradores. Este tema cubre todo eso. No ofrece asesoramiento jurídico; la interpretación de licencias necesita un asesor cualificado. Se apoya en el Tema 4.1 — Gestión de activos y se conecta con la gestión de proveedores (Tema 3.14 — Gestión de Proveedores) y la seguridad de la información (Tema 3.13 — Gestión de la Seguridad de la Información).

## Conceptos clave

**Gestión de activos de software (SAM).** La práctica de gestionar y optimizar la compra, el despliegue, el mantenimiento, el uso y la eliminación del software dentro de una organización. Wikipedia describe la gestión de activos de software y la vincula con ISO/IEC 19770-1. Véase el Tema 1.8 — Marcos y estándares de gestión de servicios.

**Derecho de uso (entitlement).** El derecho de usar software, tal como lo define una licencia. Los derechos de una organización se registran a partir de contratos, registros de compras y portales de proveedores. Se comparan con lo desplegado y lo usado.

**Modelos de licencia.** Los modelos comunes incluyen por usuario, por dispositivo, por procesador o núcleo, por usuario concurrente (también llamadas licencias flotantes), licencias de sitio o empresariales y precios basados en el consumo. Wikipedia describe las licencias de software y las licencias flotantes. Las reglas difieren según el proveedor y el producto, cambian con la virtualización y la nube y a menudo son complejas.

**Posición efectiva de licencias.** La comparación de los derechos de uso con el uso: lo que puede usar frente a lo que usa, resumida como excedente, déficit o equilibrio. Es una instantánea en un momento dado, y el trabajo consiste en mantenerla actual.

**Auditoría de software.** Un proveedor o un tercero examina el uso de una organización frente a sus derechos. Las auditorías pueden ser rutinarias o agresivas. Una organización que ha mantenido al día su propia posición puede responder con calma. Una que no, puede afrontar costos imprevistos.

**Suscripción y SaaS.** El software como servicio se alquila, normalmente por usuario o por consumo, y se entrega por internet. Wikipedia describe tanto el software como servicio como los modelos de negocio de suscripción. Las suscripciones puede iniciarlas cualquiera con una tarjeta; sin controles, se extienden, se solapan y se renuevan automáticamente. Sígalas con responsables y fechas de renovación.

**Shelfware y optimización.** Software sin uso o infrautilizado. Aprovechar significa recuperar licencias de usuarios que no las necesitan y reasignarlas. Dimensionar correctamente significa ajustar el número y el tipo de licencias a la necesidad. Los ahorros pueden ser significativos, y vienen de preguntar si un uso sigue existiendo.

**Software de código abierto.** Software cuyo código fuente está disponible bajo una licencia que permite su uso, modificación y distribución bajo ciertas condiciones. Wikipedia describe el software libre y de código abierto y las licencias de código abierto. Las licencias difieren: las permisivas imponen pocas obligaciones, mientras que las de copyleft, descritas en Wikipedia, exigen que las obras derivadas se compartan bajo términos similares. Las obligaciones dependen de cómo use y distribuya el software, así que la interpretación necesita asesoramiento jurídico.

**Lista de materiales de software (SBOM).** Una lista de los componentes de un software, con versiones y licencias. Wikipedia describe la cadena de suministro de software y el formato SPDX para intercambiar información de licencias y componentes. Una SBOM respalda el cumplimiento de licencias y la respuesta de seguridad. Véase el Tema 3.13 — Gestión de la Seguridad de la Información.

**Modelos y servicios de IA.** Los modelos y servicios de IA traen términos que cubren lo que puede hacer con ellos, quién es dueño de las salidas, si sus entradas se conservan o se usan para entrenar y qué ocurre si un modelo cambia o se retira. Wikipedia describe los grandes modelos de lenguaje y la inteligencia artificial de código abierto, y señala que «abierto» puede significar cosas distintas para los modelos. Lea los términos y regístrelos. Véase el Tema 5.6 — Gobernanza, riesgo y cumplimiento de la IA.

**Propiedad intelectual.** El software está protegido por derechos de autor y a veces por patentes. Wikipedia describe tanto la propiedad intelectual como los derechos de autor. Usar software fuera de sus términos puede infringir los derechos del titular. El código generado por herramientas de IA plantea cuestiones abiertas sobre propiedad y licencias; recabe asesoramiento.

**Descubrimiento y medición del software.** Las herramientas de descubrimiento encuentran el software instalado y las aplicaciones en la nube. La medición registra el uso real, como la última vez que se lanzó una aplicación. Junto con los derechos de uso, dan la posición de licencias.

**Gobierno.** Políticas sobre quién puede adquirir software, qué debe aprobarse, cómo se revisa el código abierto y cómo se siguen las licencias. Manténgalas ligeras y claras para que la gente las cumpla. Véase el Tema 8.1 — Gobernanza, Riesgo y Cumplimiento.

**Cómo encajan las lentes.** La SAM apoya a los equipos ágiles facilitando la obtención del software aprobado y quitándoles de en medio el cumplimiento. La IA puede ayudar a leer los términos de las licencias y a conciliar datos, bajo revisión jurídica. La automatización aprovisiona y recupera licencias. La analítica muestra el uso, el desperdicio y el riesgo.

## Buenas prácticas

1. **Conozca sus derechos de uso.** Reúna contratos, registros de compras y datos de portales de proveedores en un solo lugar. Registre los términos que importan: métrica, cantidad, plazo, restricciones y fecha de renovación.
2. **Descubra lo que está desplegado y se usa.** Use datos de descubrimiento y de uso para el software local, en la nube y de los equipos de los usuarios, y concilie con los derechos de uso con regularidad.
3. **Calcule su posición de licencias.** Para los principales proveedores, compare los derechos con el uso y registre la posición y la fecha. Resuelva déficits y excedentes de forma deliberada.
4. **Asigne un responsable a cada relación importante con un proveedor.** Nombre a una persona que entienda las reglas de licencias de cada gran proveedor y siga los cambios. Las reglas difieren y cambian.
5. **Facilite la obtención del software aprobado.** Ofrezca un catálogo de aplicaciones aprobadas con una vía rápida, para que la gente no compre las suyas. Véase el Tema 3.8 — Gestión del Catálogo de Servicios.
6. **Controle las suscripciones.** Exija un responsable, un presupuesto y una fecha de renovación en la compra. Revise las renovaciones automáticas con antelación y cancele lo que no se usa.
7. **Aproveche y dimensione bien.** Recupere licencias de usuarios inactivos y pase a niveles más baratos donde encajen. Pregunte a los usuarios antes de retirar el acceso para evitar trastornos.
8. **Revise el uso de código abierto.** Analice el código en busca de componentes y sus licencias, fije una política sobre qué licencias son aceptables y registre las excepciones. Involucre asesoramiento jurídico para las obligaciones.
9. **Registre los términos de la IA.** Para cada modelo y servicio de IA, registre qué datos envía, si se conservan o se usan para entrenar, quién es dueño de las salidas y qué ocurre si el servicio cambia.
10. **Prepárese para las auditorías.** Mantenga los registros al día y sepa quién atiende una solicitud de auditoría de un proveedor. Responda con prontitud y de forma factual, con apoyo jurídico cuando haga falta.

## Preguntas para conversar con su equipo

**Para nuestros tres mayores proveedores de software, ¿conocemos nuestros derechos de uso y nuestro uso?**
Pida un número y su fuente. Espere incertidumbre. Después elijan un proveedor y calculen bien la posición.

**¿Qué suscripciones hemos comprado fuera del proceso central y quién las paga?**
Revisen los extractos de tarjetas y los gastos. Esperen sorpresas. Después registren responsables y fechas de renovación de las diez principales por costo.

**¿Qué licencias pagamos que nadie ha usado en seis meses?**
Usen datos de medición. Esperen shelfware. Después elijan tres para recuperar, con un mensaje previo a los usuarios.

**¿Cómo sabemos qué componentes de código abierto hay en nuestros productos y qué licencias llevan?**
Pidan el último análisis. Esperen brechas. Después elijan un producto y elaboren una lista de componentes.

**Si un proveedor nos auditara mañana, ¿quién respondería y con qué?**
Recorran los pasos. Esperen confusión sobre quién habla con el proveedor. Después nombren un responsable y reúnan un paquete de registros actuales.

**¿Cuáles son los términos de los servicios de IA que usan nuestros equipos y alguien los ha leído?**
Pregunten quién usa qué servicios. Esperen cuentas personales con términos desconocidos. Después enumeren los cinco servicios principales y registren sus términos de datos y propiedad.

## En la práctica: un ejemplo de gestión de servicios

Un grupo hospitalario regional tiene unas 9.000 personas empleadas y licencia una gran aplicación clínica, una suite ofimática, una plataforma de base de datos y decenas de herramientas menores. El director de finanzas ha pedido un recorte del 10 por ciento en el gasto en software. La responsable de SAM, un equipo de dos personas, empieza por el mayor proveedor, cuyo contrato supone el 30 por ciento del gasto.

Reúne el contrato y los registros de compras y descubre que las licencias se cuentan por usuario nominal. Las compara con la lista de usuarios de la propia aplicación y con las fechas de último inicio de sesión. De 4.200 usuarios con licencia, unos 700 no han iniciado sesión en seis meses; muchos son personal sustituto anterior o personas que pasaron a otros puestos. También encuentra 250 usuarios activos sin licencia, sobre todo personal nuevo cuyas cuentas se crearon a partir de una plantilla. La posición neta muestra un excedente sobre el papel, pero un déficit real en un módulo.

Pone en marcha tres pasos. Un trabajo mensual enumera los usuarios inactivos y envía a sus jefes un mensaje antes de recuperar la licencia. El proceso de altas comprueba la posición de licencias antes de asignar acceso. Y un déficit en el módulo se comunica al proveedor de forma proactiva, para resolverlo en la próxima renovación, con ayuda del equipo jurídico del grupo. Los ahorros de las licencias recuperadas alcanzan el 6 por ciento del gasto con el proveedor el primer año.

También revisa las suscripciones y encuentra 14 herramientas SaaS compradas por departamentos, de las cuales cuatro se duplican entre sí y dos procesan datos de pacientes. Remite estas últimas a los equipos de seguridad y de privacidad y registra los términos de IA de una herramienta de transcripción que una clínica ha probado: el proveedor conserva el audio durante 30 días y puede usarlo para mejorar sus modelos, lo cual el equipo de privacidad dice que no es aceptable. La clínica deja de usarla.

Qué cambia: se recuperan y reasignan licencias, y las sorpresas en la renovación son menos frecuentes. Qué sigue siendo difícil: las reglas de licencias de las bases de datos virtualizadas son complejas y el equipo no puede interpretarlas con confianza; a los clínicos no les gusta perder acceso a herramientas y algunas licencias recuperadas se restablecieron tras quejas; y los departamentos siguen comprando suscripciones con tarjeta. La responsable pide a finanzas que marque para revisión las compras de software con tarjeta.

## Cuatro perspectivas

### Equipos de producto y de entrega

Enumeren los componentes, las licencias de código abierto y los servicios de IA de su producto. Elijan licencias y servicios que entiendan y registren sus términos. Eviten pegar código o datos en herramientas cuyos términos no han comprobado.

### Equipos de servicio y de operaciones

Mantengan exactos los datos de despliegue y uso, recuperen las licencias sin uso e informen a la responsable de SAM de las herramientas nuevas. Atiendan las solicitudes de auditoría por la vía acordada.

### Liderazgo y gobernanza

Pida la posición de licencias de los grandes proveedores, el costo del software sin uso y el plan para las auditorías. Respalde una vía de aprobación sencilla que la gente use. Trate los términos de IA como una cuestión de riesgo.

### Clientes y usuarios

Pueden preguntarle si sigue usando una aplicación. Responda con honestidad y diga si la necesita. Use herramientas aprobadas y pida lo que necesite por la vía adecuada.

## Ágil, IA, automatización y analítica

### Ágil

Haga rápido el cumplimiento para los equipos: un catálogo de herramientas aprobadas, una política sencilla de código abierto y una vía corta para las excepciones. Revise el proceso con los desarrolladores. Precaución: las barreras estrictas que los equipos evitan crean TI en la sombra; mantenga rápida la vía.

### IA

La IA puede leer contratos y términos de licencia, resumirlos y señalar cláusulas por comprobar, y puede conciliar datos de despliegue, bajo revisión jurídica y humana. Nombre un responsable. Precaución: un resumen de IA de los términos de una licencia puede ser erróneo de modos que importan; no se apoye nunca en él para decisiones de cumplimiento. Véase el Tema 5.6 — Gobernanza, riesgo y cumplimiento de la IA.

### Automatización

Automatice el descubrimiento, la medición del uso, la asignación de licencias, los avisos de recuperación y los recordatorios de renovación, con responsables y registros. Precaución: la recuperación automática puede retirar un acceso que alguien necesita; avise antes a los usuarios y facilite el restablecimiento. Véase el Tema 6.1 — Estrategia de automatización.

### Analítica

Siga la posición de licencias, las licencias sin uso y su costo, el número y el gasto de suscripciones, las renovaciones próximas y los hallazgos de licencias de código abierto. Precaución: las cifras de ahorro se exageran con facilidad y los recuentos de licencias recuperadas pueden manipularse; siga el gasto real y las quejas de los usuarios. Véanse el Tema 4.5 — Gestión financiera y FinOps y el libro *Service Management Metrics*.

## Modos de fallo habituales

- **Contar una sola vez.** La posición queda desactualizada. Mantenga en marcha el descubrimiento y la medición.
- **Comprar fuera del proceso.** Las suscripciones se extienden. Haga rápida la vía aprobada y revise el gasto con tarjeta.
- **Shelfware.** Se pagan licencias sin uso. Mida el uso y recupere.
- **Uso desconocido de código abierto.** Se pasan por alto obligaciones. Analice y fije una política.
- **Ignorar los términos de la IA.** Los datos se conservan o se usan para entrenar. Lea, registre y decida.
- **Sin preparación para auditorías.** Una auditoría de un proveedor es una carrera. Mantenga registros y un responsable designado.
- **Suponer que las reglas son simples.** La virtualización y la nube cambian las licencias. Busque asesoramiento experto para los productos complejos.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Derechos de uso | Dispersos | Contratos principales reunidos | Derechos registrados en un solo lugar con los términos clave | Derechos conciliados con regularidad | Derechos integrados con compras y proveedores |
| Descubrimiento y uso | Ninguno | Recuentos manuales | Descubrimiento y medición del software principal | Posición calculada y revisada | Posición continua entre local, nube y SaaS |
| Optimización | Ninguna | Limpieza ocasional | Aprovechamiento y ajuste rutinarios | Ahorros seguidos y verificados | Optimización automatizada con aviso a los usuarios |
| Código abierto e IA | Desconocidos | Conciencia | Política, análisis y términos registrados | Hallazgos seguidos hasta su cierre | Integrados en el pipeline y las compras |

## Lista de verificación

- [ ] Tenemos registrados los derechos de uso de los principales proveedores con los términos clave.
- [ ] Los datos de descubrimiento y de uso se concilian con los derechos de uso.
- [ ] Conocemos nuestra posición de licencias con los mayores proveedores.
- [ ] Una persona es responsable de las licencias de cada gran proveedor.
- [ ] Las suscripciones tienen responsables, presupuestos y fechas de renovación.
- [ ] Las licencias inactivas se recuperan con aviso.
- [ ] Los componentes de código abierto y sus licencias se analizan y se gobiernan.
- [ ] Se registran los términos de los modelos y servicios de IA.

## Prompts de IA

**Extraiga los términos clave de un contrato para comprobarlos.**

```text
Here is the text of a software license section: [paste]. 
List the license metric, quantity, term, restrictions, renewal terms, and audit rights, quoting the exact words for each, and write "not found" for any item the text does not state. Do not interpret ambiguous wording or give legal advice.
List what you are unsure of.
```

**Encuentre solapamientos de suscripciones.**

```text
Here is a list of our subscriptions with owner, purpose, cost, and users: [paste].
Group those that serve similar purposes, list the total cost of each group, and give one question per group about whether to consolidate. Do not recommend cancellation.
List what you are unsure of.
```

**Prepare los términos de IA para su revisión.**

```text
Here are the terms of an AI service we use: [paste relevant sections].
List what the terms say about data retention, use of inputs for training, ownership of outputs, permitted uses, and changes to the service, quoting each. For anything the text does not cover, write "not stated". Do not give legal advice.
List what you are unsure of.
```

## Habilidades de IA

- [vendor-management](../../../../skills/vendor-management/SKILL.md): úsela para gestionar las relaciones con proveedores y las renovaciones.
- [legal-compliance-audit](../../../../skills/legal-compliance-audit/SKILL.md): úsela para plantear las cuestiones de cumplimiento de licencias a la revisión jurídica.
- [roi-analysis](../../../../skills/roi-analysis/SKILL.md): úsela para sopesar el costo y el beneficio de las decisiones de software.
- [machine-learning-model-card](../../../../skills/machine-learning-model-card/SKILL.md): úsela para registrar los términos y las propiedades de un modelo de IA.

## Fuentes principales

- ISO/IEC 19770-1 (el propio estándar): procesos y niveles para la gestión de activos de TI; lea la edición vigente del editor.
- PeopleCert, páginas de certificación ITIL: la descripción del propietario de la gestión de activos de software como parte de la gestión de activos.
- Wikipedia, "Software asset management" y "Open-source license": visiones generales de las ideas.
- Open Source Initiative (opensource.org): la definición de código abierto y una lista de licencias aprobadas.

## Referencias

1. Software asset management — Wikipedia — https://en.wikipedia.org/wiki/Software_asset_management
2. Software license — Wikipedia — https://en.wikipedia.org/wiki/Software_license
3. Open-source license — Wikipedia — https://en.wikipedia.org/wiki/Open-source_license
4. Free and open-source software — Wikipedia — https://en.wikipedia.org/wiki/Free_and_open-source_software
5. Copyleft — Wikipedia — https://en.wikipedia.org/wiki/Copyleft
6. Floating licensing — Wikipedia — https://en.wikipedia.org/wiki/Floating_licensing
7. Shelfware — Wikipedia — https://en.wikipedia.org/wiki/Shelfware
8. Software supply chain — Wikipedia — https://en.wikipedia.org/wiki/Software_supply_chain
9. Software as a service — Wikipedia — https://en.wikipedia.org/wiki/Software_as_a_service
10. Large language model — Wikipedia — https://en.wikipedia.org/wiki/Large_language_model
11. Open Source Initiative — OSI — https://opensource.org
