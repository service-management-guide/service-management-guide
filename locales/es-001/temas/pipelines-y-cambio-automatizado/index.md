# Pipelines y cambio automatizado

**Un pipeline de entrega puede llevar los controles que necesita la habilitación de cambios: pruebas, comprobaciones de seguridad, comprobaciones de políticas, revisión entre pares, separación de funciones y un rastro de evidencia de cada cambio; la aprobación humana que queda es para los juicios que el pipeline no puede hacer.**

## Por qué importa

Cuando el cambio era raro y grande, controlar significaba una reunión. La gente se juntaba, leía un documento y acordaba que una liberación podía seguir adelante. Cuando el cambio se volvió frecuente y pequeño, la reunión no escaló. Un equipo que libera veinte veces al día no puede convocar veinte comités. Sí puede, en cambio, ejecutar veinte veces el mismo conjunto de comprobaciones, con un rigor coherente, y conservar un registro de cada una.

Esa es la contribución del pipeline a la gestión de servicios. La misma secuencia automatizada que compila y despliega un cambio también puede probarlo, analizarlo en busca de debilidades, contrastarlo con las políticas, exigir un segundo revisor y anotar lo ocurrido. El resultado suele ser un control mejor que el de una reunión: coherente, ligado al cambio real y disponible para un auditor mucho después. Wikipedia describe la entrega continua y la automatización de pruebas como las prácticas que lo hacen posible.

El pipeline es también algo nuevo que gobernar. Guarda credenciales que pueden cambiar producción, puede configurarse mal para saltarse comprobaciones y puede arrullar a un equipo para que confíe en marcas verdes que prueban poco. Este tema explica cómo diseñar pipelines como controles, cómo producir evidencia para los auditores y cómo conservar el criterio humano que la automatización no puede sustituir. Se apoya en la entrega continua (Tema 2.2 — Entrega continua) y la habilitación de cambios (Tema 3.4 — Habilitación de Cambios), se conecta con la infraestructura como código (Tema 6.3 — Infraestructura como código y GitOps) y la gestión de versiones (Tema 3.5 — Gestión de Versiones y Despliegues), y comparte preocupaciones con la seguridad de la información (Tema 3.13 — Gestión de la Seguridad de la Información).

## Conceptos clave

**Pipeline.** Una secuencia automatizada de etapas que lleva un cambio desde el código fuente hasta producción: compilar, probar, analizar, empaquetar, desplegar, verificar. Wikipedia describe los pipelines en el software. Cada etapa pasa o falla, y un fallo detiene el cambio. Los pipelines se definen como código y se guardan en control de versiones.

**Integración y entrega continuas.** Fusionar los cambios a menudo y mantener liberable cada compilación, como se describe en el Tema 2.2 — Entrega continua. El pipeline es la maquinaria de ambas. Wikipedia describe la integración continua y la entrega continua.

**Las etapas como controles.** Cada etapa es un control con un propósito:

| Etapa | Control que ofrece |
|---|---|
| Compilación | El cambio se compila y se empaqueta de forma reproducible |
| Pruebas unitarias y de integración | El comportamiento conocido sigue funcionando |
| Análisis estático y de seguridad | Se encuentran fallos comunes y dependencias vulnerables |
| Comprobaciones de políticas | Se cumplen reglas como el etiquetado, el cifrado y las regiones aprobadas |
| Revisión entre pares | Una segunda persona ha leído el cambio |
| Despliegue escalonado y verificación | El cambio funciona en un lugar seguro antes de una exposición más amplia |

**Puertas de calidad.** Una condición que un cambio debe cumplir para avanzar, como que pasen las pruebas, que no haya vulnerabilidades críticas o que la cobertura no baje. Wikipedia describe el control de calidad de forma más general. Las puertas deben ser pocas, claras y rápidas. Una puerta que a menudo se anula o se ignora enseña al equipo a ignorar las puertas.

**Pruebas automatizadas.** Las pruebas unitarias, de integración y de extremo a extremo se ejecutan en cada cambio. Wikipedia describe la automatización de pruebas, las pruebas unitarias y las pruebas de integración. El valor está en cuánto se confía en ellas: las pruebas inestables erosionan la confianza. Véase el Tema 2.2 — Entrega continua.

**Análisis de seguridad.** El análisis estático examina el código en busca de patrones de debilidad; el análisis de composición de software examina las bibliotecas que usa en busca de vulnerabilidades conocidas. Wikipedia describe tanto las pruebas estáticas de seguridad de aplicaciones como el análisis de composición de software. Los hallazgos necesitan clasificación, ya que muchos son de bajo riesgo o falsos.

**Política como código.** Reglas escritas como código comprobable por máquina y aplicadas en el pipeline, por ejemplo «ningún depósito de almacenamiento puede ser público». Hacen comprobables los requisitos y registrables los resultados. Véase el Tema 6.3 — Infraestructura como código y GitOps.

**Separación de funciones.** La persona que escribe un cambio no es la única que lo aprueba. Wikipedia describe la separación de funciones. En un pipeline se hace cumplir exigiendo un segundo revisor e impidiendo que el autor apruebe su propio cambio. Donde la regulación lo exija, el pipeline puede mostrar quién hizo qué.

**Tipos de cambio en un pipeline.** Los cambios estándar, como una actualización rutinaria de configuración, pueden pasar solo con comprobaciones automáticas y sin aprobación manual. Los cambios normales de mayor riesgo pueden añadir un paso de aprobación humana en el pipeline. Los cambios de emergencia usan el mismo pipeline en modo rápido, con el mismo registro. Véase el Tema 3.4 — Habilitación de Cambios.

**Evidencia.** El pipeline registra qué cambió (el commit), quién lo revisó, qué comprobaciones se ejecutaron y sus resultados, quién o qué lo desplegó y cuándo. Wikipedia describe los rastros de auditoría. La evidencia debe guardarse donde no puedan alterarla las personas a las que concierne y ser fácil de recuperar por cambio.

**Cadena de suministro de software.** El pipeline construye a partir de componentes de terceros, usa herramientas de terceros y produce artefactos que se despliegan. Wikipedia describe la cadena de suministro de software y la idea de procedencia, un registro verificable de dónde viene un artefacto. Las prácticas incluyen fijar versiones, firmar artefactos y mantener una lista de materiales. Véase el Tema 4.2 — Gestión de Activos de Software.

**Despliegue progresivo y verificación.** Tras desplegar, el pipeline puede comprobar indicadores de salud y revertir automáticamente si empeoran. Técnicas como el despliegue escalonado y los interruptores de funciones se describen en el Tema 3.5 — Gestión de Versiones y Despliegues.

**Seguridad del pipeline.** El pipeline puede desplegar en producción, así que es un objetivo de alto valor. Protéjalo: restrinja quién puede cambiar las definiciones del pipeline, use credenciales de corta duración, aísle los entornos de compilación y monitorice la actividad inusual. Trate los cambios en el pipeline con el mismo cuidado que los cambios en producción.

**Rodeos y excepciones.** Algunos cambios no encajarán: una corrección de datos, una acción manual de un proveedor. Defina una vía de excepción registrada, con aprobación, en lugar de dejar que la gente encuentre rodeos. Revise las excepciones con regularidad.

**El pipeline como producto.** Los pipelines necesitan responsables, un backlog, documentación y usuarios que den retroalimentación. Los pipelines lentos e inestables enseñan a la gente a evitarlos.

**Cómo encajan las lentes.** Los pipelines son donde la lente ágil y la de automatización se encuentran con el gobierno. La IA puede sugerir pruebas, revisar cambios y explicar fallos, bajo revisión humana. La analítica usa los datos del pipeline para mostrar la entrega y la calidad de los cambios.

## Buenas prácticas

1. **Diseñe cada etapa como un control con nombre.** Para cada etapa, escriba qué riesgo atiende, quién es su responsable y qué significa un fallo. Elimine las etapas que no atiendan un riesgo real.
2. **Mantenga rápido el pipeline.** Apunte a un resultado en minutos para el camino común. Ejecute las comprobaciones lentas en paralelo o en etapas posteriores, con una retroalimentación clara, para que la gente no busque atajos.
3. **Haga del pipeline la única vía.** Los cambios en producción pasan por él, con una vía de excepción registrada para el resto. Bloquee el acceso directo donde pueda.
4. **Haga cumplir la separación de funciones en las herramientas.** Exija un segundo revisor cualificado, impida que los autores aprueben sus propios cambios y registre ambas identidades.
5. **Tome en serio los fallos.** Una prueba o análisis fallido detiene el cambio. No permita anulaciones rutinarias y exija aprobación y un motivo registrado cuando haga falta una.
6. **Clasifique los hallazgos de seguridad.** Fije umbrales por gravedad y exposición, corrija los graves y siga el resto. Ajuste las reglas para reducir el ruido y que se lean los hallazgos.
7. **Registre la evidencia automáticamente.** Capte el commit, los revisores, las comprobaciones, los resultados, los artefactos y los detalles del despliegue en un almacén que el autor del cambio no pueda editar. Vincúlelo con el registro del cambio.
8. **Proteja el propio pipeline.** Limite quién puede cambiar las definiciones, use credenciales de corta duración con alcance mínimo, fije herramientas y dependencias y firme los artefactos.
9. **Verifique tras el despliegue.** Compruebe los indicadores de salud y revierta o pause cuando empeoren. Informe de los resultados en el mismo registro.
10. **Revise el pipeline con regularidad.** Observe qué comprobaciones detectan problemas reales, cuáles se ignoran, cuánto duran las ejecuciones y qué excepciones ocurren. Mejore y pode.

## Preguntas para conversar con su equipo

**¿Cuáles de nuestros controles de cambios ofrece hoy el pipeline y cuáles dependen aún de una reunión o un formulario?**
Enumeren los controles. Esperen que algunos sean manuales y podrían automatizarse. Después elijan uno para trasladar al pipeline.

**¿Qué vería un auditor si pidiera la evidencia de un cambio del mes pasado?**
Pruébenlo. Esperen tener que juntar varios sistemas. Después acuerden un único registro por cambio y una forma de recuperarlo.

**¿Con qué frecuencia anula o elude la gente una comprobación fallida y por qué?**
Pidan datos. Esperen más de lo que nadie dice. Después miren la comprobación más anulada para arreglarla o eliminarla.

**¿Quién puede cambiar la definición del pipeline y quién revisa ese cambio?**
Esto prueba la seguridad del pipeline. Esperen un acceso amplio. Después restrinjan el acceso y exijan revisión para los cambios del pipeline.

**¿Qué hallazgos de nuestros analizadores leemos y cuáles ignoramos?**
Pregunten a los ingenieros. Esperen «sobre todo ignoramos». Después ajusten el analizador a los hallazgos sobre los que la gente actuará.

**¿Dónde podría ayudar la IA en el pipeline y qué debe seguir siendo una decisión humana?**
La IA puede proponer pruebas, resumir fallos y revisar código. La aprobación del riesgo y de las excepciones debe seguir siendo humana. Después prueben pruebas sugeridas por la IA con revisión.

## En la práctica: un ejemplo de gestión de servicios

Una agencia nacional de seguridad social opera unas 80 aplicaciones. Los cambios en su sistema de cálculo de prestaciones requieren un comité de revisión semanal y un formulario largo, y las liberaciones ocurren cada mes. La oficina de auditoría descubre que el comité aprueba casi todo y que la evidencia de los cambios individuales está dispersa. Los ingenieros de la agencia sostienen que un pipeline podría hacerlo mejor.

La gerente de entrega realiza un piloto con una aplicación. Un pipeline compila la aplicación, ejecuta 1.800 pruebas unitarias y de integración y un conjunto de pruebas de regresión extraídas de defectos pasados, analiza el código y las bibliotecas, comprueba la definición de infraestructura frente a las políticas y exige la revisión de un segundo ingeniero que haya trabajado en el sistema. Cada ejecución escribe un registro: commit, revisores, resultados de pruebas, resultados de análisis, identificador del artefacto y detalles del despliegue, guardado en un registro que los ingenieros no pueden editar.

El proceso de cambios se rediseña en tres vías. Los cambios rutinarios, como las actualizaciones de texto y la configuración menor, son estándar: si el pipeline pasa, el cambio se despliega a un grupo piloto y luego a todos, sin comité. Los cambios en las reglas de cálculo de prestaciones son normales y requieren además la aprobación de un analista de políticas, que ve un resumen en lenguaje sencillo y los resultados de las pruebas. Las correcciones de emergencia usan el mismo pipeline con un conjunto de pruebas reducido y una revisión posterior.

La oficina de auditoría revisa una muestra de 30 cambios y descubre que la evidencia está completa en todos y que el pipeline bloqueó cuatro cambios por fallar comprobaciones. También observa que dos ingenieros habían aprobado repetidamente los cambios del otro y pide una regla de rotación de revisores.

Qué cambia: las liberaciones pasan a ser semanales, el comité se centra en los cambios de reglas y un auditor puede recuperar en minutos la evidencia de cualquier cambio. Qué sigue siendo difícil: las aplicaciones más antiguas no pueden ejecutar las pruebas automatizadas, así que sus cambios conservan la vía antigua; los analizadores señalan muchos problemas de bibliotecas de bajo riesgo y los ingenieros han empezado a ignorar el informe; y se descubre que las credenciales del propio pipeline tenían más acceso del necesario. La gerente añade el ajuste de los analizadores, la rotación de revisores y una revisión de las credenciales del pipeline.

## Cuatro perspectivas

### Equipos de producto y de entrega

Sean dueños del pipeline de su servicio: manténganlo rápido, fiable y honesto sobre lo que comprueba. Escriban pruebas que detecten fallos reales, arreglen las inestables y traten los hallazgos como trabajo. No lo eludan.

### Equipos de servicio y de operaciones

Ayuden a definir las comprobaciones y los indicadores de salud que usa el pipeline tras el despliegue. Usen la evidencia en incidentes y revisiones. Mantengan una vía de excepción para las emergencias reales.

### Liderazgo y gobernanza

Pida evidencia de los pipelines, no más reuniones. Financie las pruebas, el análisis y la seguridad del pipeline. Revise las anulaciones y las excepciones. No confunda pipelines en verde con sistemas seguros.

### Clientes y usuarios

Usted se beneficia de cambios frecuentes y más seguros. Deberían informarle de los cambios importantes que le afecten y debería poder informar de problemas tras una liberación.

## Ágil, IA, automatización y analítica

### Ágil

Los cambios pequeños y frecuentes que pasan las mismas comprobaciones cada vez son la forma práctica del control ágil. Mejore el pipeline a partir de incidentes y retroalimentación. Precaución: no trate el pipeline como terminado; las brechas en las pruebas crecen a medida que cambia el sistema.

### IA

La IA puede sugerir pruebas, revisar cambios, resumir fallos y clasificar hallazgos, con una persona responsable de cada decisión. Precaución: las pruebas generadas por IA pueden pasar probando poco, y la revisión de código por IA puede pasar por alto problemas de seguridad; mida los defectos que escapan y mantenga la revisión humana para el riesgo. Véase el Tema 5.4 — IA generativa para incidentes, conocimiento y cambios.

### Automatización

El pipeline es la automatización del camino a producción, incluidas las comprobaciones y los registros. Protéjalo como infraestructura crítica, con su propia identidad, mínimo privilegio y monitorización. Precaución: la aprobación automática basada en reglas débiles da una falsa garantía; revise lo que realmente comprueba cada regla. Véase el Tema 6.1 — Estrategia de automatización.

### Analítica

Siga el plazo de entrega, la frecuencia de despliegue, la tasa de fallos de cambio, el tiempo de restablecimiento, los recuentos de anulaciones, los defectos que escapan y los hallazgos por gravedad. Precaución: las medidas de entrega son fáciles de manipular y no deben clasificar a los equipos; siga los defectos que escapan para poner a prueba las comprobaciones. Véanse el libro *Service Management Metrics* y el Tema 7.3 — Medición e informes.

## Modos de fallo habituales

- **Verde significa seguro.** Las pruebas son escasas y pasan. Revise lo que prueba realmente cada comprobación y siga los defectos que escapan.
- **Anulaciones rutinarias.** Se eluden las comprobaciones. Haga que las anulaciones sean raras, aprobadas y revisadas.
- **Pipeline lento.** La gente busca atajos. Mantenga rápido el camino común.
- **Ruido de los analizadores.** Se ignoran los hallazgos. Ajuste y clasifique.
- **Evidencia dispersa.** Las auditorías llevan semanas. Registre automáticamente en un solo lugar.
- **Pipeline con demasiados privilegios.** Un solo compromiso llega a todo. Limite el acceso y use credenciales de corta duración.
- **Autoaprobación.** Los autores aprueban su propio trabajo. Haga cumplir la separación de funciones en las herramientas.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Controles | Comprobaciones manuales | Compilación y algunas pruebas | Pruebas, análisis, políticas y revisión en cada cambio | Eficacia de las comprobaciones medida | Controles que se adaptan automáticamente según el riesgo con supervisión humana |
| Evidencia | Formularios y correo | Algunos registros | Registro automático por cambio | Evidencia auditada y muestreada | Evidencia continua entre pipelines y proveedores |
| Seguridad del pipeline | Credenciales compartidas | Conciencia | Mínimo privilegio, herramientas fijadas, definiciones protegidas | Pipeline monitorizado y probado | Cadena de suministro verificada de extremo a extremo |
| Flujo | Lento y manual | Compilaciones más rápidas | Camino común rápido con vía de excepciones | Flujo y fallos medidos | Entrega optimizada entre servicios |

## Lista de verificación

- [ ] Cada etapa del pipeline tiene un propósito con nombre y un responsable.
- [ ] El camino común se ejecuta en minutos.
- [ ] Los cambios en producción pasan por el pipeline, con una vía de excepción registrada.
- [ ] La separación de funciones se hace cumplir en las herramientas.
- [ ] Las comprobaciones fallidas detienen los cambios y las anulaciones se aprueban y se revisan.
- [ ] La evidencia se registra automáticamente en un almacén que los autores no pueden editar.
- [ ] Las definiciones y las credenciales del pipeline están protegidas y se revisan.
- [ ] Revisamos la eficacia de las comprobaciones, incluidos los defectos que escapan.

## Prompts de IA

**Mapee los controles al pipeline.**

```text
Here is our list of change controls: [paste]. Here is a description of what our pipeline does: [paste].
For each control, say whether the pipeline description appears to provide it, partly provide it, or not mention it, quoting the words. Do not assume checks that are not described.
List what you are unsure of.
```

**Revise una ejecución fallida del pipeline.**

```text
Here is the log of a failed run: [paste, with secrets removed].
Summarize which stage failed, the error messages, and the three most likely areas to check, labeling each as a hypothesis. Do not suggest overriding the failure.
List what you are unsure of.
```

**Prepare una muestra de evidencia para una auditoría.**

```text
Here are the records for [number] changes: [paste summary with commit, reviewers, checks, results].
For each, check whether it shows a reviewer who is not the author, passing tests, scan results, and deployment time, and list gaps. Do not infer anything not in the records.
List what you are unsure of.
```

## Habilidades de IA

- [change-request](../../../../skills/change-request/SKILL.md): úsela para describir los cambios y la evidencia que necesitan.
- [shift-left-testing](../../../../skills/shift-left-testing/SKILL.md): úsela para mover las pruebas a etapas más tempranas del pipeline.
- [security-testing](../../../../skills/security-testing/SKILL.md): úsela para planificar las comprobaciones de seguridad del pipeline.
- [compliance-testing](../../../../skills/compliance-testing/SKILL.md): úsela para contrastar la evidencia con los requisitos de control.
- [test-driven-development](../../../../skills/test-driven-development/SKILL.md): úsela para construir pruebas junto con los cambios.

## Fuentes principales

- Jez Humble y David Farley, *Continuous Delivery* (2010): el relato fundacional de los pipelines de despliegue.
- Nicole Forsgren, Jez Humble y Gene Kim, *Accelerate* (2018): investigación sobre prácticas de entrega y desempeño.
- DORA (dora.dev): investigación e informes continuos.
- Wikipedia, "Continuous delivery" y "Software supply chain": visiones generales de la práctica y de sus riesgos.

## Referencias

1. Continuous delivery — Wikipedia — https://en.wikipedia.org/wiki/Continuous_delivery
2. Continuous integration — Wikipedia — https://en.wikipedia.org/wiki/Continuous_integration
3. Test automation — Wikipedia — https://en.wikipedia.org/wiki/Test_automation
4. Unit testing — Wikipedia — https://en.wikipedia.org/wiki/Unit_testing
5. Integration testing — Wikipedia — https://en.wikipedia.org/wiki/Integration_testing
6. Static application security testing — Wikipedia — https://en.wikipedia.org/wiki/Static_application_security_testing
7. Software composition analysis — Wikipedia — https://en.wikipedia.org/wiki/Software_composition_analysis
8. Software supply chain — Wikipedia — https://en.wikipedia.org/wiki/Software_supply_chain
9. Separation of duties — Wikipedia — https://en.wikipedia.org/wiki/Separation_of_duties
10. Audit trail — Wikipedia — https://en.wikipedia.org/wiki/Audit_trail
11. Code signing — Wikipedia — https://en.wikipedia.org/wiki/Code_signing
12. DORA research — DevOps Research and Assessment — https://dora.dev/research/
