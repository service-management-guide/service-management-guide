# Gestión de Versiones y Despliegues

**La gestión de versiones y despliegues separa dos decisiones que antes eran una sola: cuándo se coloca el código nuevo en los sistemas de producción (despliegue) y cuándo su comportamiento queda disponible para los usuarios (liberación); separarlas, con interruptores de funciones, despliegue escalonado y notas de versión claras, hace el cambio más seguro y más tranquilo.**

## Por qué importa

Los días de lanzamiento son estresantes porque ocurre demasiado a la vez. Se instala código nuevo, se activan funciones nuevas, los usuarios las conocen por primera vez y el equipo de soporte se entera de ellas con la primera queja. Si algo sale mal, todo eso está enredado, y la única vuelta atrás puede ser una reversión que deshace todo.

Los equipos que separan el despliegue de la liberación evitan la mayor parte de eso. El código llega a producción en silencio, desactivado, días antes de que los usuarios lo vean. Cuando el equipo está listo, un interruptor activa la función para un grupo pequeño y luego para más. Si algo va mal, el interruptor la desactiva en segundos. El despliegue, que es un acto técnico, ocurre según el calendario de los ingenieros. La liberación, que es un acto de negocio y de cliente, ocurre cuando la organización está lista.

Este tema explica las dos ideas, las técnicas que las respaldan y las prácticas que mantienen informados a usuarios, personal de soporte y auditores. Se apoya en la entrega continua (Tema 2.2 — Entrega continua) y en la habilitación de cambios (Tema 3.4 — Habilitación de Cambios) y se conecta con la gestión de la configuración (Tema 4.4 — Gestión de la Configuración) y la gestión del conocimiento (Tema 3.9 — Gestión del Conocimiento).

## Conceptos clave

**Despliegue.** El acto de mover software, configuración u otros componentes a un entorno, como el de pruebas o el de producción. El artículo de Wikipedia sobre el despliegue de software describe las actividades implicadas. El despliegue es una operación técnica que pone algo donde puede ejecutarse.

**Liberación (release).** Poner un servicio, función o versión a disposición para su uso. Una liberación puede ocurrir en el mismo momento que un despliegue o más tarde. ITIL 4 describe la «gestión de versiones» (release management) como la práctica de poner a disposición para su uso los servicios y funciones nuevos y modificados, y la «gestión de despliegues» como el traslado de componentes a entornos en vivo.

**Por qué separarlos.** El riesgo del despliegue es si el código se ejecuta y se comporta bien. El riesgo de la liberación es si los usuarios, el soporte y el negocio están listos. Hacerlos en momentos distintos permite gestionar cada riesgo con las personas y herramientas adecuadas.

**Interruptores de funciones (feature flags).** También llamados feature toggles, son interruptores en el código o en un sistema de control que activan o desactivan una función en tiempo de ejecución, sin un nuevo despliegue. Wikipedia describe los interruptores de funciones y sus usos. Pueden ser por usuario, por grupo, por porcentaje de tráfico o globales. Requieren cuidado: los interruptores viejos se acumulan y se convierten en complejidad oculta.

**Despliegue escalonado.** Liberar primero a un grupo pequeño y ampliar poco a poco. Las variantes incluyen primero los usuarios internos, un pequeño porcentaje del tráfico, una sola región o un cliente piloto. Cada etapa da retroalimentación antes de exponer a más personas.

**Despliegue azul-verde y progresivo.** En un despliegue azul-verde existen dos entornos de producción; uno atiende a los usuarios mientras el otro recibe la nueva versión, y el tráfico se conmuta cuando está listo, con un regreso rápido si hace falta. En un despliegue progresivo (rolling), las instancias se actualizan unas pocas cada vez. Wikipedia describe ambos. Cada uno tiene compromisos de costo, complejidad y manejo de datos.

**Preparación para la liberación.** Un breve conjunto de preguntas respondidas antes de liberar: ¿pasan las pruebas?; ¿la monitorización cubre el nuevo comportamiento?; ¿saben el personal de soporte qué cambió y cómo ayudar?; ¿están listas la documentación y los artículos de conocimiento?; ¿hay un plan de reversión?; ¿ha aceptado el negocio la fecha? Manténgalo breve y ligado al riesgo real.

**Notas de versión.** Una descripción de lo que cambió, escrita para quienes necesitan saberlo. Públicos distintos necesitan notas distintas: los usuarios quieren saber qué es nuevo o diferente; el personal de soporte quiere saber qué esperar; operaciones quiere saber qué cambió técnicamente. Los artículos de Wikipedia sobre notas de versión y registros de cambios describen formas comunes.

**Versionado.** Un esquema para nombrar versiones de modo que la gente pueda hablar de ellas. El versionado semántico, un esquema popular descrito bajo versionado de software en Wikipedia, usa números mayor, menor y de parche para señalar el tipo de cambio. Elija un esquema y aplíquelo con coherencia.

**Cambios de datos.** Los cambios en la estructura de la base de datos y en los datos son más difíciles de revertir que los de código. Patrones como hacer los cambios compatibles hacia atrás, ejecutar estructuras antiguas y nuevas en paralelo y migrar en pasos pequeños reducen el riesgo. Wikipedia describe la migración de esquemas.

**Correcciones urgentes (hotfixes) y parches.** Correcciones urgentes hechas fuera del ciclo normal, normalmente para corregir una falla grave o una vulnerabilidad. Necesitan una ruta acelerada con la misma disciplina: probar, revisar, desplegar mediante el pipeline y registrar. Véase el Tema 3.4 — Habilitación de Cambios.

**Entornos.** Entornos de pruebas, preproducción y producción, cada uno con un propósito. Cuanto más se parezcan los entornos de prueba a producción, más fiables son las pruebas. El artículo de Wikipedia sobre entornos de despliegue describe disposiciones comunes.

**Cadena de suministro de software.** Las liberaciones incluyen componentes de terceros, como bibliotecas e imágenes de contenedores. Una lista de materiales de software (SBOM) los enumera, lo que ayuda a responder a las vulnerabilidades. Véase el Tema 4.2 — Gestión de Activos de Software.

**Cómo encajan las lentes.** La práctica de liberación es la lente ágil en el punto de contacto con los usuarios: liberaciones pequeñas con retroalimentación. La IA puede redactar notas de versión y resumir cambios, bajo revisión. La automatización ejecuta el pipeline y el despliegue escalonado. La analítica muestra cómo se comporta una liberación.

## Buenas prácticas

1. **Despliegue en pequeño y a menudo.** Ponga los cambios en producción en piezas pequeñas, detrás de interruptores donde sea útil. El despliegue frecuente hace que cada uno sea de bajo riesgo y rutinario.
2. **Libere con intención.** Decida con el negocio cuándo deben ver los usuarios una función y use un interruptor o un despliegue escalonado para controlarlo. No deje que el calendario de despliegues dicte la liberación.
3. **Despliegue por etapas.** Empiece con un grupo pequeño e informado, observe indicadores y amplíe. Defina de antemano qué mirará y qué le haría detenerse.
4. **Mantenga ordenados los interruptores.** Registre el propósito, el responsable y la fecha de retirada de cada interruptor. Elimine los interruptores tras el despliegue. Pruebe ambos estados mientras el interruptor exista.
5. **Haga rápida la vuelta atrás.** Sepa cómo apagar un interruptor, revertir o conmutar por error, y ensáyelo. Para los cambios de datos, planifique pasos compatibles hacia adelante.
6. **Prepare al soporte antes de la liberación.** Dé al centro de servicios notas de versión, una guía breve y los problemas conocidos antes de que los usuarios vean un cambio. Pregúnteles qué necesitan.
7. **Escriba las notas de versión para sus lectores.** Diga qué cambió en términos del usuario, qué esperar y dónde obtener ayuda. Mantenga el detalle técnico en una nota aparte.
8. **Compruebe la preparación con brevedad.** Use una lista de comprobación breve y coherente para las liberaciones importantes. Omítala en las rutinarias que cubre el pipeline.
9. **Observe la liberación.** Monitorice las tasas de error, el rendimiento y los indicadores de usuario durante y después del despliegue, y asigne a alguien que vigile. Registre lo que vio.
10. **Registre lo que se liberó.** Conserve un registro de versiones, fechas y estados de los interruptores, que ayuda en incidentes y auditorías. Genérelo desde el pipeline donde pueda.

## Preguntas para conversar con su equipo

**¿Cuál es la diferencia entre desplegar y liberar en nuestra organización y quién decide cada cosa?**
En muchos equipos ambos son el mismo suceso. Pregunte quién decide poner el código en producción y quién decide cuándo lo ven los usuarios. Espere respuestas difusas. Después elijan una función para separar.

**¿Con qué rapidez podríamos apagar una función nueva si causara daño?**
Compruebe la respuesta. Algunos equipos pueden apagar un interruptor en segundos; otros necesitan un nuevo despliegue y una aprobación. Pregunte cuándo fue la última vez. Después elijan una función arriesgada y planifiquen un apagado rápido.

**¿Qué sabe nuestro equipo de soporte de una liberación antes de que los usuarios la vean?**
Pregunte al centro de servicios. Espere «nada hasta la primera llamada». Después acuerden un paquete de información estándar y un momento, como 48 horas antes.

**¿Qué interruptores de funciones tenemos y cuáles deberían haber desaparecido?**
Una lista de interruptores suele mostrar muchos que nadie recuerda. Pregunte quién es responsable de cada uno. Después programen la retirada de los más antiguos y añadan un campo de responsable.

**¿Cómo liberamos un cambio que afecta a la base de datos y qué ocurre si necesitamos volver atrás?**
Los cambios de datos causan las peores sorpresas. Pida la última migración y su plan de reversión. Después acuerden un patrón, como cambios compatibles hacia atrás en dos pasos.

**¿Dónde podría ayudar la IA con las notas de versión o la preparación y qué debe verificar una persona?**
La IA puede redactar notas a partir de los mensajes de commits y tickets. Puede describir mal lo que cambió. Pregunte quién lee el borrador y lo compara con el cambio. Después prueben borradores de IA para notas internas, con una persona que apruebe cada una.

## En la práctica: un ejemplo de gestión de servicios

El catálogo en línea de una biblioteca nacional lo usan investigadores de todo el mundo. El equipo libera una página de búsqueda rediseñada. Antes, un cambio así habría entrado en vivo un martes por la tarde con un breve anuncio. Esta vez la responsable del servicio pide una liberación escalonada.

El equipo despliega la nueva página en producción con una semana de antelación, desactivada. Luego la activa para el personal interno y, al día siguiente, para el 5 por ciento de los visitantes elegidos al azar. El responsable de la liberación observa las tasas de éxito de las búsquedas y los recuentos de errores, y el centro de servicios recibe una guía de una página y una breve lista de problemas conocidos dos días antes. El tercer día, un investigador del grupo piloto informa de que fallan las búsquedas con ciertos caracteres no ingleses. El equipo apaga el interruptor para todos los usuarios en un minuto, corrige el problema a la mañana siguiente y reinicia el despliegue al 5 por ciento. Dos semanas después, la nueva página está disponible para todos y se programa la retirada del interruptor.

Qué cambia: el fallo afectó a un puñado de usuarios durante un día y el centro de soporte estaba preparado para las preguntas. Qué sigue siendo difícil: el sistema de interruptores está en una herramienta aparte cuyo acceso no está estrictamente controlado, por lo que el equipo ha pedido una revisión; las notas de versión las escribieron los desarrolladores y los investigadores las encontraron confusas; y el mantenimiento en paralelo de las páginas de búsqueda antigua y nueva costó aproximadamente una semana de esfuerzo. La responsable añade un editor orientado al usuario al paso de las notas de versión.

## Cuatro perspectivas

### Equipos de producto y de entrega

Diseñen para el despliegue y la liberación separados: usen interruptores, hagan compatibles los cambios de datos y planifiquen la vuelta atrás. Observen sus propias liberaciones y escriban notas que usuarios y soporte puedan entender.

### Equipos de servicio y de operaciones

Ayuden a definir la preparación, la monitorización y la reversión. Pidan información de la liberación con antelación y digan a los desarrolladores lo que necesitan. Mantengan exacto el registro de lo que hay en producción.

### Liderazgo y gobernanza

Decida el momento de la liberación con el negocio, no según el calendario de despliegues. Financie el pipeline y las herramientas de interruptores. Pida despliegue escalonado para las funciones de alto impacto y evite la presión de liberar en una fecha fija sin importar la preparación.

### Clientes y usuarios

Debería enterarse de los cambios que importan en términos que entienda y poder informar de problemas con facilidad. Si participa en el acceso anticipado, espere que le pidan retroalimentación y diga al equipo lo que ve.

## Ágil, IA, automatización y analítica

### Ágil

Las liberaciones pequeñas y frecuentes con usuarios reales involucrados en las primeras etapas dan retroalimentación rápida. Trate cada liberación como un paso de aprendizaje y ajuste la siguiente. Precaución: no libere funciones que los usuarios no quieren solo porque el pipeline puede; compruebe el valor con los usuarios.

### IA

La IA puede redactar notas de versión a partir de los cambios y los tickets, resumir la retroalimentación tras el despliegue y sugerir qué observar. Nombre un responsable y haga que una persona compare el borrador con el cambio antes de publicarlo. Precaución: una nota de versión verosímil pero errónea engaña a usuarios y soporte; contraste con el cambio real. Véase el Tema 5.4 — IA generativa para incidentes, conocimiento y cambios.

### Automatización

Automatice el despliegue, el despliegue escalonado, las comprobaciones de salud, la detención automática ante indicadores malos y la reversión, con registros y anulación manual. Precaución: las reglas de despliegue automático que se disparan con indicadores deficientes pueden fallar; pruébelas y mantenga informada a una persona. Véase el Tema 6.4 — Pipelines y cambio automatizado.

### Analítica

Compare los indicadores entre el grupo que recibió la liberación y los demás durante el despliegue, como errores, éxito de las tareas y quejas. Precaución: los grupos pequeños dan resultados ruidosos y comparar sin cuidado puede engañar; acuerde qué mirará y cuánto esperar. Véanse el Tema 7.3 — Medición e informes y el libro *Service Management Metrics*.

## Modos de fallo habituales

- **Liberación y despliegue atados.** Cada lanzamiento es arriesgado. Sepárelos con interruptores y despliegue escalonado.
- **Interruptores sin responsable.** El código se llena de caminos muertos. Registre responsables y fechas de retirada.
- **Sin una vuelta atrás rápida.** Una mala liberación dura horas. Ensaye la reversión y los interruptores.
- **El soporte se entera por la primera llamada.** El centro no está preparado. Dé notas y una guía por adelantado.
- **Notas de versión escritas para desarrolladores.** Los usuarios no pueden leerlas. Escriba para el público.
- **Cambios de datos sin planificar.** La reversión es imposible. Use pasos compatibles y pequeños.
- **No observar nada.** Los usuarios encuentran los problemas. Asigne un observador y fije indicadores.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Separación de despliegue y liberación | Mismo suceso | Algunos interruptores en uso | Interruptores y despliegue escalonado para las funciones importantes | Decisiones de despliegue basadas en datos | Despliegue automatizado con salvaguardas entre servicios |
| Reversión | Lenta y manual | Documentada | Rutas rápidas ensayadas | Tiempo de recuperación medido | Automática y probada con regularidad |
| Comunicación | Anunciada en el lanzamiento | Notas para algunas liberaciones | Notas para cada público, soporte informado por adelantado | Notas probadas con lectores | Comunicación integrada con el pipeline y los canales |
| Registros | Memoria y correo | Hoja de cálculo | Generados desde el pipeline | Usados en revisiones y auditorías | Vinculados entre versiones, interruptores e incidentes |

## Lista de verificación

- [ ] Separamos el despliegue de la liberación en los cambios importantes.
- [ ] Los interruptores de funciones tienen responsables y fechas de retirada.
- [ ] Desplegamos por etapas con indicadores y criterios de parada definidos.
- [ ] Sabemos cómo apagar o revertir con rapidez y lo hemos ensayado.
- [ ] El soporte recibe la información de la liberación antes que los usuarios.
- [ ] Las notas de versión se escriben para sus lectores.
- [ ] Los cambios de datos se hacen en pasos compatibles y reversibles.
- [ ] Los registros de lo liberado se generan desde el pipeline.

## Prompts de IA

**Redacte notas de versión para su revisión.**

```text
Here are the changes in this release: [paste list of changes with ticket titles]. The audience is [users, support staff, or operations].
Draft release notes of under 200 words in plain language, grouped by what users will notice, and list items you could not describe without guessing. Do not add features or dates that are not in the list.
List what you are unsure of.
```

**Prepare una lista de comprobación de preparación para la liberación.**

```text
Our release: [describe]. Risks we know of: [list]. Our usual checks: [list].
Draft a checklist of up to ten yes/no questions to answer before release, with who answers each. Keep it short and tied to the listed risks.
List what you are unsure of.
```

**Planifique un despliegue escalonado.**

```text
Our feature: [describe]. Our users: [groups and sizes]. Indicators we can measure: [list].
Propose three stages with the audience, what to watch, how long, and what would make us stop. Note what the indicators cannot tell us. Do not claim any stage is safe.
List what you are unsure of.
```

## Habilidades de IA

- [release-notes](../../../../skills/release-notes/SKILL.md): úsela para escribir notas de versión para cada público.
- [changelog](../../../../skills/changelog/SKILL.md): úsela para mantener un historial claro de cambios.
- [shift-left-testing](../../../../skills/shift-left-testing/SKILL.md): úsela para probar antes en el pipeline.
- [runbook](../../../../skills/runbook/SKILL.md): úsela para documentar los pasos de despliegue y reversión.

## Fuentes principales

- Jez Humble y David Farley, *Continuous Delivery* (2010): la base de los pipelines de despliegue y las técnicas de liberación.
- PeopleCert, páginas de certificación ITIL: la descripción del propietario de las prácticas de gestión de versiones y despliegues.
- Wikipedia, "Software deployment" y "Feature toggle": visiones generales de las ideas principales.
- Wikipedia, "Release management": antecedentes de la disciplina.

## Referencias

1. Release management — Wikipedia — https://en.wikipedia.org/wiki/Release_management
2. Software deployment — Wikipedia — https://en.wikipedia.org/wiki/Software_deployment
3. Software release life cycle — Wikipedia — https://en.wikipedia.org/wiki/Software_release_life_cycle
4. Feature toggle — Wikipedia — https://en.wikipedia.org/wiki/Feature_toggle
5. Blue–green deployment — Wikipedia — https://en.wikipedia.org/wiki/Blue%E2%80%93green_deployment
6. Release notes — Wikipedia — https://en.wikipedia.org/wiki/Release_notes
7. Changelog — Wikipedia — https://en.wikipedia.org/wiki/Changelog
8. Software versioning — Wikipedia — https://en.wikipedia.org/wiki/Software_versioning
9. Schema migration — Wikipedia — https://en.wikipedia.org/wiki/Schema_migration
10. Deployment environment — Wikipedia — https://en.wikipedia.org/wiki/Deployment_environment
11. Continuous delivery — Wikipedia — https://en.wikipedia.org/wiki/Continuous_delivery
