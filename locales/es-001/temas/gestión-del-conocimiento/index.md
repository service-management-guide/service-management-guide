# Gestión del Conocimiento

**La gestión del conocimiento pone lo que la gente aprende operando servicios a disposición de la siguiente persona que lo necesite; los enfoques que funcionan captan el conocimiento como subproducto de resolver problemas, lo mantienen cerca del trabajo, lo revisan cuando se usa y tratan la búsqueda y la redacción con IA como ayudas sobre una base que las personas mantienen.**

## Por qué importa

Todo equipo de servicio carga con conocimiento que no está escrito en ninguna parte: por qué se eligió un ajuste, cómo reiniciar un componente frágil, qué necesita un cliente en particular. Cuando una persona se va, se toma vacaciones o simplemente olvida, el conocimiento se va con ella, y el equipo descubre su dependencia en el peor momento: durante un incidente de madrugada.

La mayoría de las organizaciones han intentado arreglarlo con campañas de documentación. Se dice al personal que lo ponga todo por escrito. Una base de conocimiento se llena de artículos que nadie lee ni en los que nadie confía, porque están desactualizados, son largos o son difíciles de encontrar. Tras unos meses el esfuerzo se desvanece y la gente vuelve a preguntar a los colegas.

Los mejores enfoques tratan el conocimiento como parte del trabajo, no como una tarea aparte. La captura ocurre mientras se resuelve un problema, en unas pocas líneas, a cargo de quien lo resolvió. Los artículos que ayudan se usan y se mejoran; los que fallan se arreglan o se eliminan. La base de conocimiento se sitúa en las herramientas que la gente ya usa: el centro de servicios, el canal de incidentes, el repositorio de código. Este tema explica esas ideas, incluido el método Knowledge-Centered Service (KCS), y el papel que desempeña ahora la IA en la búsqueda y la redacción. Se relaciona con el centro de servicios (Tema 3.1 — Centro de Servicios), la gestión de problemas (Tema 3.3 — Gestión de Problemas) y las habilidades de IA (Tema 5.7 — Habilidades y Prompts de IA).

## Conceptos clave

**Datos, información, conocimiento.** Los datos son hechos; la información son datos en contexto; el conocimiento es información que una persona puede usar para actuar. Un código de error es un dato, un artículo que explica qué significa es información, y saber cuál de tres causas posibles es la probable a las 3 de la madrugada es conocimiento. Una base de conocimiento puede contener información y referencias; no puede contener todo el conocimiento. El artículo de Wikipedia sobre la gestión del conocimiento describe el campo.

**Conocimiento explícito y tácito.** El conocimiento explícito puede ponerse por escrito: procedimientos, listas de comprobación, diagramas. El conocimiento tácito vive en la práctica y el juicio y es difícil de articular. Wikipedia describe el conocimiento tácito, un término asociado a Michael Polanyi. Ambos importan. Escribir ayuda con lo explícito; la conversación, el trabajo en pareja y el acompañamiento ayudan con lo tácito.

**Base de conocimiento.** Una colección de artículos, guías y respuestas, con búsqueda para usuarios y personal. Wikipedia describe las bases de conocimiento y los wikis. Puede ser interna, para el personal, o externa, para los clientes. La calidad depende más del mantenimiento que de la herramienta.

**Runbooks.** Instrucciones paso a paso para manejar una situación conocida, como reiniciar un servicio o responder a una alerta común. El artículo de Wikipedia sobre los runbooks los describe como compilaciones de procedimientos para las operaciones del sistema. Un buen runbook es breve, probado y está vinculado con la alerta que lo dispara. Véase el Tema 6.6 — Automatización de runbooks y autorremediación.

**Knowledge-Centered Service (KCS).** Un método publicado por el Consortium for Service Innovation. Sus ideas principales son: captar el conocimiento mientras se resuelven problemas, dentro del flujo de trabajo; reutilizar y mejorar los artículos al usarlos; hacer seguro y normal que todos contribuyan; y hacer evolucionar la base de conocimiento según la demanda y no según un plan previo. Su descripción incluye prácticas como el «ciclo de resolución» y el «ciclo de evolución». Consulte la orientación vigente del Consortium para los detalles.

**Captura en el flujo de trabajo.** El mejor momento para escribir un artículo es justo después de haber resuelto el problema. Una nota breve, con el síntoma, la causa y la solución, en la misma herramienta que el ticket, lleva minutos. Escribirla después, de memoria, lleva más tiempo y a menudo se omite.

**La reutilización como señal.** Cuando se usa un artículo para resolver un problema, vincúlelo con el ticket. Contar los vínculos muestra qué artículos ayudan y cuáles no se usan nunca. Si alguien usa un artículo y falla, debe arreglarlo o marcarlo en ese momento.

**Calidad del artículo.** Un buen artículo tiene un título claro con las palabras que usan los usuarios, una breve declaración del síntoma o la pregunta, la causa cuando se conoce, los pasos, cómo comprobar que funcionó y a quién preguntar si no lo hizo. Es breve y se mantiene al día con el sistema.

**Documentación como parte del repositorio.** Para los equipos de ingeniería, mantener la documentación junto al código, en texto plano como Markdown, y revisar los cambios junto con el código los mantiene alineados. El artículo de Wikipedia sobre Markdown describe el formato. Las solicitudes de integración (pull requests) que cambian el comportamiento también cambian la documentación.

**Registros de decisiones.** Notas breves que registran por qué se tomó una decisión importante, qué alternativas se consideraron y qué se sabía en ese momento. Ayudan a los nuevos miembros del equipo y a revisiones futuras a entender el razonamiento.

**Factor autobús (bus factor).** El número de personas que habría que perder antes de que un proyecto se detenga por falta de conocimiento. Wikipedia describe el factor autobús, también llamado factor lotería. Un factor autobús de uno es un riesgo. Extender el conocimiento mediante trabajo en pareja, rotación e intercambio lo eleva.

**Transferencia de conocimiento.** Pasar conocimiento de una persona a otra mediante traspasos, trabajo en pareja, formación y acompañamiento. Wikipedia describe la transferencia de conocimiento. Reserve tiempo para ella, en especial cuando alguien se va.

**Capacidad de búsqueda.** Incluso el buen contenido es inútil si la gente no puede encontrarlo. Importan los títulos, las etiquetas, el ajuste de la búsqueda y los enlaces desde alertas y tickets. Los artículos de Wikipedia sobre buscadores y sobrecarga de información describen problemas relacionados.

**IA y recuperación.** Los asistentes de IA pueden buscar en una base de conocimiento, resumir artículos y redactar nuevos. Un patrón común, la generación aumentada por recuperación, recupera pasajes relevantes y pide a un modelo que responda usando solo esos. Wikipedia describe la idea. Las respuestas del asistente son tan buenas como la base que lee, y aún puede equivocarse. Véase el Tema 5.4 — IA generativa para incidentes, conocimiento y cambios.

**Gobernanza.** Decida quién es responsable de la base de conocimiento, cómo se revisan los artículos, cómo se controla el contenido sensible y cuándo se archiva el contenido antiguo. Mantenga ligeras las reglas.

**Cómo encajan las lentes.** La gestión del conocimiento es mejora continua en el nivel de los artículos individuales. La IA ayuda a los usuarios a encontrar, resumir y redactar, bajo revisión. La automatización vincula alertas con runbooks y tickets con artículos. La analítica muestra qué artículos se usan, cuáles fallan y qué brechas se buscan.

## Buenas prácticas

1. **Capte mientras resuelve.** Escriba un artículo breve o actualice uno como parte de cerrar un ticket. Haga que sea un paso normal, no trabajo extra.
2. **Escriba para el lector de las 3 de la madrugada.** Use las palabras que la gente busca, pasos cortos y una comprobación de que la solución funcionó. Ponga primero lo más útil.
3. **Vincule los artículos con tickets y alertas.** Cuando salta una alerta, enlace con el runbook. Cuando un artículo resuelve un ticket, vincúlelos. Los vínculos muestran lo que es útil.
4. **Arregle o marque al usarlo.** Si un artículo es erróneo o poco claro cuando lo usa, corríjalo o márquelo para revisión de inmediato. Facilite hacerlo.
5. **Haga seguro contribuir.** Permita que todos editen, con revisión ligera para el contenido sensible o de alto impacto. Agradezca a quienes contribuyen y no castigue los errores.
6. **Pode con regularidad.** Revise los artículos que llevan mucho tiempo sin usarse y archívelos. Una base más pequeña y fiable es mejor que una grande y dudosa.
7. **Mantenga la documentación de ingeniería con el código.** Revísela con los cambios y genere lo que pueda, como las referencias de API, a partir del código fuente.
8. **Registre las decisiones importantes.** Escriba notas de decisión breves con contexto, opciones y razones. Vincúlelas con el código o el diseño al que se refieren.
9. **Extienda el conocimiento con intención.** Use trabajo en pareja, rotación, charlas breves y acompañamiento para mover el conocimiento tácito. Compruebe el factor autobús de cada servicio crítico.
10. **Trate las respuestas de la IA como borradores.** Deje que la IA busque y sugiera, mostrando las fuentes, y haga que una persona confirme los artículos antes de que sean oficiales. Siga las malas respuestas y corrija las fuentes.

## Preguntas para conversar con su equipo

**¿Qué tuvimos que pedir a alguien que nos explicara por última vez y debería haber estado escrito?**
Empiece con un caso real. Espere «cómo reiniciamos X» o «por qué está así configurado Y». Pregunte qué impidió que se escribiera. Después escríbanlo ahora, juntos.

**¿En qué artículos confiamos y cuáles evitamos?**
La confianza varía por equipo y tema. Pregunte por qué. Espere «obsoleto» y «demasiado largo». Después elijan tres artículos poco fiables para arreglar o eliminar.

**¿Cuántos de nosotros sabemos restaurar nuestro servicio más crítico y qué ocurre si están ausentes?**
Esto prueba el factor autobús. Cuente con honestidad. Espere uno o dos nombres. Después planifiquen una sesión de trabajo en pareja o un ensayo que extienda el conocimiento.

**¿Dónde escribimos las cosas hoy y podemos encontrarlas?**
Enumere los lugares: chat, wiki, tickets, repositorios, notas personales. Intenten encontrar juntos una respuesta concreta. Después acuerden un hogar para cada tipo de conocimiento.

**¿Qué tan fácil es para cualquier miembro del equipo arreglar un artículo que encuentra erróneo?**
Las barreras incluyen permisos, retrasos de revisión y miedo a la crítica. Pregunte qué lo convertiría en una tarea de treinta segundos. Después eliminen una barrera.

**¿Cómo usamos la IA para encontrar o escribir conocimiento y cómo comprobamos lo que dice?**
Pregunte quién usa herramientas de IA para el trabajo de conocimiento y en qué confía. Espere un uso acrítico en algunos lugares. Después acuerden que las respuestas citen artículos y muestreen las respuestas frente a ellos.

## En la práctica: un ejemplo de gestión de servicios

El equipo de infraestructura de ocho personas de un servicio meteorológico nacional opera los pipelines de datos de pronóstico. Dos ingenieros veteranos poseen la mayor parte del conocimiento del pipeline más antiguo, que procesa datos de satélite. Cuando uno de ellos se toma tres semanas de licencia, una falla en el pipeline tarda dos días en resolverse porque la persona junior de guardia no encuentra el procedimiento de reinicio, que está en un hilo de correo de hace seis años.

El jefe del equipo decide usar una versión ligera de KCS. Quien resuelve un problema escribe unas líneas en el campo de solución del ticket: síntoma, causa, solución, comprobación. Una sesión semanal de diez minutos revisa las notas nuevas y asciende las útiles a runbooks en el repositorio del equipo. Cada alerta enlaza con su runbook. Los dos ingenieros veteranos acuerdan trabajar en pareja con los junior por turnos y grabar dos vídeos breves recorriendo el pipeline.

Tras tres meses hay 40 runbooks, y el equipo puede ver en la herramienta de tickets cuáles están vinculados con incidentes resueltos. En la siguiente falla, el junior de guardia encuentra el runbook a través de la alerta, lo sigue y restablece el pipeline en 25 minutos. Un asistente de búsqueda probado sobre el repositorio responde mal una pregunta, citando una sección de un runbook que había sido sustituida por una edición posterior. El jefe añade una regla: las secciones sustituidas se eliminan, no se tachan.

Qué cambia: el pipeline ya no depende de dos personas y los junior se sienten más seguros. Qué sigue siendo difícil: los ingenieros veteranos siguen encontrando que escribir lleva un tiempo que no tienen; algunos runbooks se prueban solo leyéndolos; y el pipeline más antiguo tiene componentes que nadie entiende del todo, lo que ningún documento arreglará. El jefe planifica un ensayo para el pipeline más antiguo y programa una revisión de diseño de los componentes que nadie entiende.

## Cuatro perspectivas

### Equipos de producto y de entrega

Mantengan la documentación con el código y revísenla con los cambios. Escriban notas de decisión y runbooks como parte del trabajo y compartan lo que aprenden con operaciones.

### Equipos de servicio y de operaciones

Capten las soluciones mientras trabajan, arreglen los artículos cuando los usen y vinculen las alertas con los runbooks. Compartan el conocimiento tácito mediante el trabajo en pareja. Cuenten a los responsables las brechas que encuentren.

### Liderazgo y gobernanza

Haga de escribir y leer conocimiento una parte normal del trabajo, no una tarea secundaria. Financie el tiempo para el trabajo en pareja y los ensayos. Pida el factor autobús de los servicios críticos. No premie el volumen de artículos.

### Clientes y usuarios

Los buenos artículos le permiten resolver problemas por sí mismo y obtener respuestas más rápido. Diga al proveedor cuándo un artículo es confuso o erróneo y qué intentaba hacer.

## Ágil, IA, automatización y analítica

### Ágil

Haga evolucionar la base de conocimiento en pasos pequeños, impulsada por el uso, con retroalimentación de usuarios y personal. Revise las brechas en una sesión breve y regular. Precaución: evite los grandes proyectos de documentación; producen contenido desactualizado desde el lanzamiento.

### IA

La IA puede buscar en la base, resumir artículos, responder preguntas con citas y redactar artículos a partir de tickets y chats, con una persona que apruebe todo lo que se vuelva oficial. Nombre un responsable. Precaución: un asistente puede responder con seguridad a partir de contenido obsoleto o erróneo; muestre las fuentes y siga las correcciones. Véase el Tema 5.4 — IA generativa para incidentes, conocimiento y cambios.

### Automatización

Vincule alertas con runbooks, sugiera artículos en los tickets nuevos, señale el contenido obsoleto y cree borradores de artículos a partir de tickets cerrados, con edición humana. Precaución: las sugerencias automáticas pueden llenar la base de borradores de baja calidad; limite lo que se publica sin revisión. Véase el Tema 6.6 — Automatización de runbooks y autorremediación.

### Analítica

Siga el uso de los artículos, los vínculos con tickets resueltos, las búsquedas sin resultado y el tiempo desde la última revisión. Precaución: los recuentos de artículos creados premian el volumen, y los recuentos de uso premian los temas populares sobre los críticos poco frecuentes; combine con retroalimentación y muestreo. Véanse el libro *Service Management Metrics* y el Tema 7.3 — Medición e informes.

## Modos de fallo habituales

- **Campañas de documentación.** A un estallido de escritura le sigue el deterioro. Capte el conocimiento como parte del trabajo.
- **Artículos largos.** Nadie los lee. Escriba artículos cortos y centrados en la tarea.
- **Contenido obsoleto.** La confianza se erosiona. Arregle o marque al usar, y pode.
- **Conocimiento solo en el chat.** No puede encontrarse. Lleve las respuestas útiles a la base.
- **Factor autobús de uno.** La ausencia de una persona detiene el trabajo. Extienda el conocimiento con intención.
- **Respuestas de la IA sin comprobar.** El consejo erróneo se propaga. Muestre las fuentes y muestree las respuestas.
- **Escribir como castigo.** La gente lo evita. Hágalo normal y reconózcalo.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Captura | En las cabezas y el chat | Algunos artículos tras incidentes | La captura es un paso normal del flujo de trabajo | Calidad de la captura muestreada y mejorada | Captura automatizada con revisión humana |
| Capacidad de búsqueda | Preguntar a un colega | Una base con búsqueda | Alertas y tickets enlazan con artículos | Las brechas de búsqueda impulsan el contenido | Recuperación y asistentes integrados entre herramientas |
| Calidad | Sin revisar | Limpieza ocasional | Arreglar o marcar al usar, poda regular | Calidad medida por uso y resultados | Calidad mejorada de forma continua en toda la organización |
| Difusión | Un experto | Algo de trabajo en pareja | Factor autobús comprobado en servicios críticos | Ensayos y rotación planificados | Conocimiento compartido entre equipos y socios |

## Lista de verificación

- [ ] La gente capta las soluciones como parte del cierre de tickets.
- [ ] Las alertas enlazan con runbooks.
- [ ] Los artículos son cortos y están escritos con las palabras que buscan los usuarios.
- [ ] Cualquiera puede arreglar un artículo que encuentre erróneo, con revisión ligera.
- [ ] Podamos con regularidad los artículos sin uso u obsoletos.
- [ ] La documentación de ingeniería vive con el código y se revisa con los cambios.
- [ ] Conocemos el factor autobús de cada servicio crítico.
- [ ] Las respuestas de la IA citan fuentes y se muestrean para comprobar su exactitud.

## Prompts de IA

**Redacte un artículo a partir de un ticket resuelto.**

```text
Here is a resolved ticket with notes, personal data removed: [paste].
Draft a short knowledge article with: a title in the words a user would search, the symptom, the cause (only if stated), the steps, how to check it worked, and who to ask if it did not. Mark any gap with [missing] and do not fill it.
List what you are unsure of.
```

**Revise un artículo para un lector nocturno.**

```text
Here is a runbook: [paste].
List steps that are ambiguous, steps that assume knowledge not stated, and anything that could cause harm if followed literally. Do not rewrite the runbook.
List what you are unsure of.
```

**Encuentre brechas a partir de las búsquedas.**

```text
Here are search terms that returned no result or were followed by a ticket: [paste list]. Here are our article titles: [paste list].
Group the search terms into themes, and for each theme say whether an existing article title looks related or whether a new article is needed. Do not draft articles.
List what you are unsure of.
```

## Habilidades de IA

- [runbook](../../../../skills/runbook/SKILL.md): úsela para escribir y probar runbooks.
- [decision-records](../../../../skills/decision-records/SKILL.md): úsela para registrar por qué se tomaron las decisiones.
- [architecture-decision-record](../../../../skills/architecture-decision-record/SKILL.md): úsela para decisiones de diseño que otros necesitarán entender.
- [prompt-engineering](../../../../skills/prompt-engineering/SKILL.md): úsela para diseñar prompts que lean de una base de conocimiento y citen fuentes.

## Fuentes principales

- Consortium for Service Innovation, Knowledge-Centered Service (KCS): el principal método práctico para captar conocimiento en el soporte.
- Ikujiro Nonaka y Hirotaka Takeuchi, *The Knowledge-Creating Company* (1995): sobre el conocimiento tácito y explícito.
- Wikipedia, "Knowledge management" y "Tacit knowledge": visiones generales neutrales.
- Wikipedia, "Runbook": antecedentes de los procedimientos operativos.

## Referencias

1. Knowledge management — Wikipedia — https://en.wikipedia.org/wiki/Knowledge_management
2. Knowledge base — Wikipedia — https://en.wikipedia.org/wiki/Knowledge_base
3. Tacit knowledge — Wikipedia — https://en.wikipedia.org/wiki/Tacit_knowledge
4. Wiki — Wikipedia — https://en.wikipedia.org/wiki/Wiki
5. Runbook — Wikipedia — https://en.wikipedia.org/wiki/Runbook
6. Retrieval-augmented generation — Wikipedia — https://en.wikipedia.org/wiki/Retrieval-augmented_generation
7. Markdown — Wikipedia — https://en.wikipedia.org/wiki/Markdown
8. Bus factor — Wikipedia — https://en.wikipedia.org/wiki/Bus_factor
9. Knowledge transfer — Wikipedia — https://en.wikipedia.org/wiki/Knowledge_transfer
10. Consortium for Service Innovation — KCS library — https://library.serviceinnovation.org
