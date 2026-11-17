# Gestión del Catálogo de Servicios

**Un catálogo de servicios (el «service catalogue» de ITIL) es un backlog de producto vuelto del revés: una descripción mantenida y orientada al usuario de lo que ofrece el proveedor, con una vista técnica detrás que muestra cómo se construye cada servicio; solo se gana su lugar si la gente lo usa para encontrar, pedir y entender los servicios.**

## Por qué importa

Pregunte a un usuario típico qué ofrece su departamento de TI o de RR. HH. y a menudo obtendrá un encogimiento de hombros. Los servicios existen, pero nadie los ha descrito de un modo que un usuario pueda encontrar o entender. Los usuarios preguntan a colegas, usan el canal equivocado o construyen sus propias soluciones. Los proveedores, a su vez, no pueden decir qué ofrecen, quién es responsable ni cuánto cuesta, y se sorprenden por la demanda de cosas que no sabían que soportaban.

Un catálogo de servicios lo corrige enumerando los servicios en el lenguaje del usuario, con la información que necesita para decidir y pedir: qué hace el servicio, quién puede usarlo, cómo solicitarlo, cuánto tarda y cuánto cuesta. Detrás de esa vista hay una técnica, que vincula cada servicio con los componentes, equipos y proveedores que lo entregan, y con los acuerdos que lo rigen. Juntas conectan lo que el usuario ve con lo que el proveedor opera.

Los catálogos pueden fallar de dos maneras opuestas. Un catálogo vacío, que rara vez se actualiza, se ignora. Uno inflado, con cientos de elementos en lenguaje técnico, es inutilizable. Este tema explica las dos vistas, cómo construir un catálogo que la gente use y cómo mantenerlo vivo. Está estrechamente relacionado con la gestión de solicitudes de servicio (Tema 3.6 — Gestión de Solicitudes de Servicio), la gestión de niveles de servicio (Tema 3.7 — Gestión de Niveles de Servicio) y la gestión de la configuración (Tema 4.4 — Gestión de la Configuración).

## Conceptos clave

**Service catalogue o catálogo de servicios.** ITIL usa la ortografía británica «service catalogue». Esta guía usa «catálogo de servicios» a partir de esta primera mención. Wikipedia describe un catálogo de servicios como una lista de servicios que una organización presta, a menudo a sus empleados o clientes.

**Vista orientada al cliente.** Una descripción de los servicios tal como los entienden los usuarios, como «Correo y calendario», «Portátil para personal nuevo» o «Consultas de nómina». Indica qué es el servicio, quién puede usarlo, cómo pedirlo, el plazo esperado, el costo cuando corresponde y dónde obtener ayuda. Es la parte que encuentran los usuarios.

**Vista técnica.** Una descripción de cómo se construyen y se soportan los servicios: los componentes, la infraestructura, las aplicaciones, los equipos, los proveedores y los acuerdos detrás de cada uno. Ayuda al proveedor a entender las dependencias y el impacto, por ejemplo qué servicios se ven afectados si falla una base de datos. Está relacionada con una base de datos de gestión de la configuración; véase el Tema 4.4 — Gestión de la Configuración.

**Portafolio de servicios.** El conjunto completo de servicios bajo gestión, incluidos los que están en desarrollo, los que están en vivo en el catálogo y los que se retiran. El catálogo es la parte viva del portafolio. El artículo de Wikipedia sobre la gestión del portafolio de aplicaciones es una idea relacionada para el software. Véase el Tema 2.8 — Propiedad de Productos y Servicios.

**Oferta de servicio.** Una descripción formal de uno o más servicios, posiblemente con distintas opciones, como soporte estándar o premium. Las ofertas ayudan a los usuarios a elegir lo que les conviene y a los proveedores a entender la demanda y el costo.

**Elemento del catálogo y solicitud.** Un elemento del catálogo es lo que el usuario puede pedir o usar. Cuando el elemento es solicitable, se vincula con un modelo de solicitud (véase el Tema 3.6 — Gestión de Solicitudes de Servicio). Algunos elementos son informativos, como «Cómo conectarse a la red inalámbrica».

**Taxonomía y capacidad de búsqueda.** Los usuarios encuentran las cosas explorando categorías o buscando. Los artículos de Wikipedia sobre taxonomía y arquitectura de la información describen cómo organizar la información. Las categorías deben reflejar cómo piensan los usuarios, no cómo está estructurada la organización. Una buena prueba es preguntar a los usuarios dónde buscarían un elemento dado.

**Lenguaje sencillo.** Las descripciones deben ser breves y claras, evitando jerga y siglas. El artículo de Wikipedia sobre el lenguaje sencillo describe los principios. Pruebe las descripciones con personas que no conozcan el servicio.

**Responsabilidad.** Cada servicio tiene un responsable designado que mantiene su entrada y responde de su calidad. Sin responsables, las entradas se deterioran. Véase el Tema 2.8 — Propiedad de Productos y Servicios.

**El catálogo como backlog.** Trate el catálogo como un producto vivo. Las entradas se añaden, mejoran, fusionan y retiran según la demanda y la retroalimentación. Un backlog de mejoras del catálogo, revisado con regularidad, lo mantiene actual. Esto refleja la idea del backlog de producto; véase el artículo de Wikipedia sobre los backlogs de producto.

**Costos y cargos.** Donde los servicios se cobran, el catálogo muestra el precio o la asignación de costos. Incluso donde no hay cargo, mostrar el costo aumenta la conciencia. Véase el Tema 4.5 — Gestión financiera y FinOps.

**Más allá de TI.** Muchas organizaciones extienden el catálogo a RR. HH., instalaciones y otras funciones. Véase el Tema 1.9 — Gestión de servicios empresariales.

**Búsqueda e IA.** Los usuarios buscan o preguntan cada vez más a un asistente de chat en lugar de explorar. El contenido del catálogo debe ser claro y estructurado para que la búsqueda y los asistentes lo encuentren. La IA puede ayudar a vincular la descripción de un usuario con un elemento del catálogo.

**Cómo encajan las lentes.** El catálogo es un producto de mejora continua: actualice las entradas a partir de preguntas reales. La IA puede redactar entradas, sugerir categorías y ayudar a los usuarios a encontrar servicios, bajo revisión. La automatización conecta el catálogo con el cumplimiento y con los datos de configuración. La analítica muestra qué se usa, qué se busca y qué se abandona.

## Buenas prácticas

1. **Empiece por las solicitudes y preguntas principales.** Enumere las veinte cosas que los usuarios piden con más frecuencia. Descríbalas primero. Un catálogo pequeño y útil es mejor que uno grande y vacío.
2. **Describa cada servicio en términos del usuario.** Escriba un resumen breve, a quién va dirigido, cómo pedirlo, el plazo esperado, el costo y dónde obtener ayuda. Evite nombres internos y siglas.
3. **Nombre un responsable y una fecha de revisión.** Muestre quién es responsable de la entrada. Revise cada entrada al menos una vez al año y cuando cambie el servicio.
4. **Organice según cómo piensan los usuarios.** Pruebe las categorías con los usuarios, por ejemplo con una clasificación de tarjetas o un registro de búsquedas. Cámbielas cuando la evidencia lo indique.
5. **Vincule con el cumplimiento.** Donde un servicio pueda solicitarse, conecte la entrada con el formulario de solicitud y el seguimiento de estado. Un catálogo que no lleva a la acción es un folleto.
6. **Mantenga una vista técnica para el proveedor.** Registre, para cada servicio, los componentes, equipos, proveedores y acuerdos que hay detrás. Úsela para el análisis de impacto y la planificación.
7. **Muestre costos y opciones.** Indique lo que cuesta o consume un servicio y describa las opciones, para que los usuarios puedan elegir con información.
8. **Observe lo que buscan los usuarios.** Revise los términos de búsqueda que no devuelven nada o devuelven lo equivocado, y añada o renombre entradas para que coincidan.
9. **Retire y fusione.** Elimine los servicios que ya no se ofrecen. Combine casi duplicados. Marque los servicios que están cambiando.
10. **Trate el catálogo como un producto.** Dele un responsable, un backlog y retroalimentación regular de los usuarios. Mida el uso y mejore lo que no se usa.

## Preguntas para conversar con su equipo

**Si una persona recién incorporada preguntara qué ofrecemos, ¿podríamos responder sin consultar nada?**
Esto prueba si los servicios se conocen y están descritos. Espere respuestas parciales. Pida una lista a tres personas y compárenlas. Después elijan los diez principales y escríbanlos.

**¿Qué elementos del catálogo nunca abren los usuarios y cuáles abren y luego nos llaman?**
Use datos. Los elementos que se abren y se abandonan sugieren descripciones poco claras. Los elementos que nunca se abren pueden ser redundantes. Después elijan tres entradas para reescribir o retirar.

**¿Qué escriben los usuarios en la búsqueda que no devuelve nada útil?**
Los registros de búsqueda revelan diferencias de vocabulario. Espere palabras sencillas que no coinciden con los nombres internos. Después añadan alias o entradas nuevas para las cinco principales búsquedas fallidas.

**¿Quién es responsable de cada entrada de servicio y cuándo se comprobó por última vez?**
Las brechas de responsabilidad y las entradas obsoletas son comunes. Pida fechas. Después asignen responsables y un ciclo de revisión.

**¿Cómo se conecta nuestra vista técnica con lo que ven los usuarios y podríamos decir qué servicios se ven afectados por un fallo dado?**
Esto prueba el vínculo entre vistas. Pruébenlo con un incidente reciente. Espere trabajo manual. Después elijan un servicio crítico y mapeen sus dependencias.

**¿Cómo podría ayudar la IA a los usuarios a encontrar servicios y a nosotros a mantener las entradas actuales y qué debe comprobar una persona?**
La IA puede vincular la descripción de un usuario con las entradas y redactar actualizaciones a partir de tickets. También puede llevar a los usuarios al servicio equivocado. Pregunte quién es responsable y cómo se encuentran los desajustes. Después prueben un buscador con una muestra de preguntas reales.

## En la práctica: un ejemplo de gestión de servicios

El departamento interno de TI de una autoridad tributaria nacional tiene un catálogo de servicios de 340 elementos, la mayoría escritos por los ingenieros que construyeron los servicios. El personal usa el teléfono del centro de servicios, y el centro dedica gran parte del tiempo a indicar a quienes llaman servicios que ya existen.

La gerente de servicios pide a un grupo de quince empleados de distintos departamentos que encuentren cinco cosas en el catálogo: una forma de reservar una sala de videoconferencias, cómo conseguir un segundo monitor, cómo unirse a una lista de correo de un proyecto, cómo obtener acceso a un sistema de casos y cómo informar de un teléfono perdido. Solo dos lo consiguen. El catálogo usa términos como «aprovisionamiento de terminales de conferencia audiovisual» y «equipamiento periférico».

El equipo revisa seis meses de contactos del centro y clasifica los 30 temas de solicitud principales. Reescriben esas entradas en lenguaje sencillo, con una descripción breve, quién puede pedirlo, cuánto tarda y un enlace al formulario. Fusionan 90 entradas en 40, retiran 60 que ya no se ofrecen y añaden alias de búsqueda como «segunda pantalla» para los monitores. Cada entrada muestra un responsable y una fecha de revisión. Se prueba un asistente de chat para dirigir a los usuarios a las entradas, con un enlace a una persona cuando no puede ayudar.

Qué cambia: el mismo grupo de prueba encuentra ahora cuatro de cinco elementos y los contactos del centro de «dónde encuentro» bajan. Qué sigue siendo difícil: la vista técnica está incompleta, por lo que el análisis de impacto aún depende del conocimiento tácito; las 240 entradas restantes no se han revisado; y los responsables de algunos servicios dicen que no tienen tiempo para mantener actuales las entradas. La gerente fija una regla: las entradas no revisadas en un año se marcan como «sin verificar» y se relegan en la búsqueda.

## Cuatro perspectivas

### Equipos de producto y de entrega

Describan para los usuarios los servicios que construyen y mantengan actuales las entradas cuando los cambien. Proporcionen la información técnica que vincula sus componentes con los servicios que respaldan.

### Equipos de servicio y de operaciones

Mantengan la vista técnica y úsenla en incidentes y cambios. Observen lo que los usuarios buscan y preguntan, y devuelvan las brechas a los responsables. Ayuden a que los vínculos de cumplimiento sigan funcionando.

### Liderazgo y gobernanza

Pida un catálogo que los usuarios encuentren útil, con responsables y fechas de revisión. Financie su mantenimiento. Úselo para ver lo que se ofrece, lo que cuesta y lo que se retira.

### Clientes y usuarios

Debería poder encontrar lo que está disponible, entenderlo y pedirlo sin conocer el organigrama. Diga al proveedor lo que no pudo encontrar o entender.

## Ágil, IA, automatización y analítica

### Ágil

Trate el catálogo como un backlog: mejore primero las entradas más usadas, en pasos pequeños, con retroalimentación de los usuarios. Revíselo con regularidad con las partes interesadas. Precaución: no construya todo el catálogo antes del lanzamiento; un comienzo pequeño y útil le enseñará más.

### IA

La IA puede redactar entradas a partir de documentos existentes, sugerir categorías y alias y ayudar a los usuarios a encontrar servicios en el chat. Cada uso necesita un responsable, y una persona debe aprobar el texto publicado. Precaución: un asistente que adivina una entrada que no existe engaña a los usuarios; exíjale que cite las entradas del catálogo. Véase el Tema 5.3 — Centro de servicio con IA y agentes virtuales.

### Automatización

Conecte el catálogo con los formularios de solicitud, las aprobaciones y el cumplimiento, y genere partes de la vista técnica a partir de los datos de configuración. Precaución: la importación automática de datos técnicos puede llenar el catálogo de nombres de máquinas; mantenga un paso de edición humana para el texto orientado al usuario. Véase el Tema 6.5 — Autoservicio y cumplimiento automatizado.

### Analítica

Siga las vistas, las búsquedas, las búsquedas sin resultados, las solicitudes hechas y las solicitudes abandonadas. Precaución: la popularidad no es valor; un elemento poco usado puede ser crítico para unas pocas personas. Combine los recuentos con retroalimentación. Véanse el Tema 7.7 — Analítica de experiencia y sentimiento y el libro *Service Management Metrics*.

## Modos de fallo habituales

- **Un catálogo escrito por ingenieros.** Los usuarios no pueden entenderlo. Reescriba en lenguaje sencillo y pruebe.
- **Demasiadas entradas.** Nadie encuentra nada. Empiece pequeño y luego fusione y retire.
- **Sin responsables.** Las entradas se deterioran. Nombre responsables y fechas de revisión.
- **Solo folleto.** El catálogo no lleva a la acción. Vincule las entradas con formularios y estado.
- **Categorías según el organigrama.** Los usuarios no pueden adivinar dónde buscar. Organice según la intención del usuario.
- **Sin vista técnica.** El análisis de impacto es una conjetura. Mapee las dependencias de los servicios críticos.
- **Nunca retirar.** Las entradas muertas engañan. Revise y elimine.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Vista para el usuario | Ninguna o técnica | Servicios principales descritos | Servicios descritos en lenguaje sencillo con responsables | Entradas probadas y revisadas con usuarios | Entradas coherentes entre funciones y canales |
| Vista técnica | No registrada | Servicios principales mapeados | Dependencias registradas para servicios importantes | Usada en incidentes y cambios | Generada y mantenida al día a partir de los datos de configuración |
| Capacidad de búsqueda | Solo exploración | Algo de búsqueda | Búsqueda y categorías probadas con usuarios | Los registros de búsqueda impulsan cambios | Búsqueda y asistentes integrados entre canales |
| Mantenimiento | Ninguno | Ocasional | Responsables y fechas de revisión | Uso y calidad medidos | Mejora continua a partir de la retroalimentación |

## Lista de verificación

- [ ] Las veinte principales solicitudes y preguntas están en el catálogo.
- [ ] Cada entrada está en lenguaje sencillo, con quién, cómo, cuánto tarda y costo.
- [ ] Cada entrada tiene un responsable y una fecha de revisión.
- [ ] Las categorías se probaron con los usuarios.
- [ ] Las entradas solicitables se vinculan con formularios y estado.
- [ ] La vista técnica cubre nuestros servicios críticos.
- [ ] Revisamos las búsquedas fallidas y las entradas abandonadas.
- [ ] Retiramos o fusionamos entradas con regularidad.

## Prompts de IA

**Redacte una entrada del catálogo a partir de notas.**

```text
Here are notes on the service [name]: [paste, including what it does, who can use it, how to ask, how long, cost].
Draft a catalog entry of under 120 words in plain language with a one-line summary, who it is for, how to ask, and expected time. Mark every gap in the notes with [missing] and do not fill it.
List what you are unsure of.
```

**Encuentre brechas de vocabulario.**

```text
Here are search terms users typed with no useful result: [paste list]. Here are our current catalog entry titles: [paste list].
For each search term, list the entry titles that might match, or write "no match", and suggest a possible alias or new entry. Do not invent entries that I did not list as possible.
List what you are unsure of.
```

**Pruebe las categorías.**

```text
Here is a list of catalog items: [paste]. Here is our proposed category structure: [paste].
For each item, say which category a typical user would most likely look in and why, and list items that could reasonably sit in two places. Use only what is provided.
List what you are unsure of.
```

## Habilidades de IA

- [service-catalog](../../../../skills/service-catalog/SKILL.md): úsela para construir y mantener un catálogo orientado al usuario.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): úsela para vincular las entradas con los pasos de cumplimiento.
- [stakeholder-analysis](../../../../skills/stakeholder-analysis/SKILL.md): úsela para identificar quién usa y quién es responsable de cada servicio.
- [portfolio-management](../../../../skills/portfolio-management/SKILL.md): úsela para revisar el conjunto completo de servicios.

## Fuentes principales

- PeopleCert, páginas de certificación ITIL: la descripción del propietario de la gestión del catálogo de servicios.
- Wikipedia, "Service catalog": una breve visión general del concepto.
- Wikipedia, "Information architecture": la disciplina de organizar la información para los usuarios.
- Wikipedia, "Plain language": los principios de la escritura clara.

## Referencias

1. Service catalog — Wikipedia — https://en.wikipedia.org/wiki/Service_catalog
2. Application portfolio management — Wikipedia — https://en.wikipedia.org/wiki/Application_portfolio_management
3. Taxonomy — Wikipedia — https://en.wikipedia.org/wiki/Taxonomy
4. Information architecture — Wikipedia — https://en.wikipedia.org/wiki/Information_architecture
5. Plain language — Wikipedia — https://en.wikipedia.org/wiki/Plain_language
6. Configuration management database — Wikipedia — https://en.wikipedia.org/wiki/Configuration_management_database
7. Product backlog — Wikipedia — https://en.wikipedia.org/wiki/Product_backlog
8. Self-service — Wikipedia — https://en.wikipedia.org/wiki/Self-service
9. Search engine — Wikipedia — https://en.wikipedia.org/wiki/Search_engine
10. Product management — Wikipedia — https://en.wikipedia.org/wiki/Product_management
