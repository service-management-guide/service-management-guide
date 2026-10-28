# Fundamentos y gobernanza de datos

**Una buena analítica y una IA segura descansan en datos de servicio definidos, con responsable, exactos, rastreables, protegidos y conservados solo el tiempo necesario; la gobernanza de datos da a cada conjunto de datos importante un responsable designado, una definición sencilla, una comprobación de calidad y reglas de acceso y conservación.**

## Por qué importa

La razón más común por la que un análisis decepciona no es el método. Son los datos. Las categorías de tickets se cambiaron la primavera pasada y nadie anotó cuándo. Dos sistemas afirman tener el departamento del cliente y discrepan. Las marcas de tiempo están en zonas horarias distintas. Un campo que parece completo está lleno de «otro» en la mitad de los registros. Un panel muestra una caída de los incidentes, y la causa resulta ser un cambio de registro, no un servicio mejor.

Los mismos problemas dañan a la IA. Un modelo entrenado con tickets mal etiquetados aprende las etiquetas. Un asistente fundamentado en artículos obsoletos los cita. Un pronóstico construido sobre un historial incompleto arrastra las brechas hacia adelante. A medida que las organizaciones se apoyan en la analítica y en la IA, la calidad, la responsabilidad y la protección de los datos dejan de ser un asunto técnico de fondo y se convierten en un servicio por derecho propio.

La gobernanza de datos es la práctica de gestionar los datos como un activo: decidir quién es responsable, qué significa cada término, cómo se comprueba la calidad, cómo se mueven los datos y de dónde vienen, quién puede usarlos y cuándo se eliminan. Wikipedia describe la gobernanza de datos como la gestión global de la disponibilidad, la utilidad, la integridad y la seguridad de los datos. Este tema la describe en términos prácticos para los datos de gestión de servicios y muestra cómo empezar con poco. Sustenta la analítica (Tema 7.1 — Analítica para la gestión de servicios), la medición (Tema 7.3 — Medición e informes), la observabilidad (Tema 7.4 — Observabilidad y telemetría) y la IA (Tema 5.6 — Gobernanza, riesgo y cumplimiento de la IA), y se vincula con los datos de configuración (Tema 4.4 — Gestión de la Configuración). No ofrece asesoramiento jurídico.

## Conceptos clave

**Activo de datos.** Un conjunto de datos de valor para la organización, como el historial de tickets, la base de datos de configuración, los datos de monitorización, los resultados de encuestas o los datos de costos. Como otros activos, tiene un responsable, un costo, un ciclo de vida y riesgos. Véase el Tema 4.1 — Gestión de activos.

**Responsable y custodio de los datos.** El responsable de los datos responde de un conjunto de datos: su propósito, su calidad y quién puede usarlo. El custodio (data steward) lo cuida día a día, ocupándose de las definiciones, los problemas de calidad y las solicitudes de acceso. Wikipedia describe a los custodios de datos. En los equipos pequeños una persona puede ocupar ambos roles. Sin personas designadas, nadie arregla los problemas.

**Definiciones y diccionario de datos.** Una declaración sencilla de lo que significa cada campo y término, como «resuelto» o «incidente mayor», con cómo se calcula y la fuente. Wikipedia describe los diccionarios de datos. Las definiciones evitan que dos equipos usen la misma palabra para cosas distintas. Registre los cambios de definiciones con fechas, para poder interpretar las tendencias.

**Metadatos.** Datos sobre los datos: de dónde vinieron, cuándo se actualizaron, quién es su responsable, cómo se clasifican y qué significan. Wikipedia describe los metadatos. Un catálogo de datos es un inventario con búsqueda de conjuntos de datos y sus metadatos, que ayuda a la gente a encontrar los datos y a confiar en ellos.

**Calidad de los datos.** Aptitud para el uso, descrita normalmente por dimensiones como exactitud, integridad, coherencia, actualidad y unicidad. Wikipedia describe la calidad de los datos. La calidad es relativa al uso: una categoría de ticket que es suficientemente buena para una tendencia mensual puede ser demasiado gruesa para el encaminamiento. Mídala en los campos que importan y corrija las causas en el origen. La depuración de datos, descrita en Wikipedia, corrige los errores después y no impide que se repitan.

**Fuentes de mala calidad.** Campos de texto libre que rellenan de manera distinta personas distintas, valores predeterminados que nunca se cambian, categorías que crecen sin poda, entradas manuales que se omiten bajo presión, integraciones que pierden o duplican registros y cambios de sistema que alteran el significado. Corríjalo con mejores formularios, validación, formación y revisión de la integración, no culpando a las personas.

**Linaje y procedencia.** Un registro de dónde vinieron los datos y qué les ocurrió en el camino hacia un informe o un modelo. Wikipedia describe el linaje de datos. Cuando se cuestiona una cifra, el linaje permite rastrearla. También muestra qué informes se ven afectados cuando cambia una fuente.

**Pipelines de datos e integración.** Los flujos que mueven datos entre sistemas, a menudo descritos como extraer, transformar y cargar (ETL) en el artículo de Wikipedia, y almacenes como los almacenes de datos y los lagos de datos, que Wikipedia también describe. Los pipelines necesitan responsables, monitorización y pruebas, como cualquier sistema de producción. Véase el Tema 6.2 — Automatización y orquestación de flujos de trabajo.

**Tiempo e identidad.** Dos asuntos pequeños causan grandes problemas. Las marcas de tiempo necesitan una zona horaria y un formato coherentes, como sugieren los artículos de Wikipedia sobre marcas de tiempo y zonas horarias; las zonas mezcladas producen huecos y picos misteriosos. Los identificadores de personas, servicios y activos deben ser estables y compartidos entre sistemas, para poder vincular los registros. La gestión de datos maestros, descrita en Wikipedia, es la disciplina de mantener coherentes esos datos centrales.

**Clasificación.** Etiquetar los datos por sensibilidad, como públicos, internos, confidenciales y restringidos, y asociar reglas a cada nivel. Wikipedia describe la clasificación de datos. Los datos de servicio suelen contener información personal y detalles de seguridad, que necesitan protección.

**Privacidad y protección.** Los datos personales son información relativa a una persona identificable. Leyes como el Reglamento General de Protección de Datos (RGPD) de la Unión Europea fijan reglas sobre finalidad, minimización, conservación y derechos individuales; Wikipedia describe los datos personales y el RGPD. La minimización de datos, descrita allí, significa recoger y conservar solo lo que necesita. Técnicas como la seudonimización y la anonimización, descritas en Wikipedia, reducen el riesgo, aunque son difíciles de hacer bien y una anonimización débil puede revertirse. Recabe asesoramiento jurídico y de privacidad.

**Control de acceso.** Quién puede ver o cambiar qué datos y por qué. Use roles, no individuos, donde sea posible, y revise el acceso con regularidad. Véanse el Tema 3.13 — Gestión de la Seguridad de la Información y el Tema 3.6 — Gestión de Solicitudes de Servicio.

**Conservación y eliminación.** Cuánto tiempo se conservan los datos y cómo se destruyen. Conserve lo que necesite para las operaciones, el análisis y las obligaciones legales, y elimine el resto. Wikipedia describe la conservación de datos. Los datos antiguos aumentan el riesgo y el costo, y los sistemas de IA pueden aprender de ellos. Compruebe los requisitos legales de conservación que le apliquen.

**Soberanía de los datos.** Los datos pueden estar sujetos a las leyes del país donde se almacenan o procesan. Wikipedia describe la soberanía de los datos. Los servicios en la nube y de IA pueden mover datos a través de fronteras; sepa adónde van los suyos.

**Datos en la IA.** Los datos usados para entrenamiento, recuperación o prompts necesitan la misma gobernanza, con cuidado adicional: permiso para el uso, etiquetado de la fuente, comprobaciones de sesgo y de deriva y control de lo que se envía a servicios externos. Véase el Tema 5.1 — IA en la gestión de servicios.

**Foro de gobernanza y política.** Un grupo pequeño con autoridad para fijar estándares, resolver conflictos y priorizar el trabajo de datos, y una política breve que cubra la responsabilidad, la calidad, la clasificación, el acceso, la conservación y el uso de datos en la IA. Manténgalo ligero y práctico.

**Cómo encajan las lentes.** La gobernanza de datos es la base de las lentes de analítica e IA, y la automatización también depende de ella. La práctica ágil sugiere mejorar la calidad de los datos en pasos pequeños, impulsados por las preguntas que la gente realmente necesita responder, con retroalimentación de los usuarios de los datos.

## Buenas prácticas

1. **Empiece con los conjuntos de datos que más importan.** Enumere los datos que hay detrás de sus decisiones clave, como tickets, configuración, monitorización, encuestas y costos. Gobierne primero esos.
2. **Nombre un responsable y un custodio para cada uno.** Regístrelos en el catálogo, con cómo contactarlos. Hágales responsables de la calidad y el acceso.
3. **Ponga las definiciones por escrito.** Defina los términos y campos principales en lenguaje sencillo, con el cálculo y la fuente. Registre cuándo cambian las definiciones.
4. **Mida la calidad donde cuenta.** Elija unos pocos campos que impulsan decisiones, defina comprobaciones e informe de los resultados a los responsables. Siga su evolución en el tiempo.
5. **Corrija los problemas en el origen.** Mejore los formularios, añada validación, simplifique las categorías y arregle las integraciones. La depuración posterior es un parche.
6. **Estandarice el tiempo y los identificadores.** Use un único estándar y formato de hora e identificadores estables y compartidos para personas, servicios y activos.
7. **Conserve el linaje.** Documente de dónde obtienen sus datos los informes y modelos clave y qué transformaciones se aplican. Actualice cuando cambien las fuentes.
8. **Clasifique y proteja.** Etiquete los datos por sensibilidad, aplique reglas de acceso y protección y revise quién tiene acceso. Elimine los datos personales donde no se necesiten.
9. **Fije la conservación y elimine.** Decida cuánto tiempo se conserva cada conjunto de datos y elimínelos o anonimícelos después. Compruebe las normas que le apliquen.
10. **Gobierne los datos que usa la IA.** Registre las fuentes, los permisos y la calidad de los datos usados para entrenamiento y recuperación, y controle lo que va a servicios externos.

## Preguntas para conversar con su equipo

**¿Qué conjuntos de datos impulsan nuestras decisiones más importantes y quién es responsable de cada uno?**
Enumérenlos. Esperen brechas de responsabilidad. Después nombren un responsable y un custodio para los tres principales.

**¿Qué términos usamos de manera distinta en equipos distintos?**
Elijan «resuelto», «incidente» o «cliente». Esperen desacuerdo. Después escriban una definición y quién decide.

**¿Cuándo rompió una tendencia un cambio de definición o de sistema y lo notamos en su momento?**
Pidan ejemplos. Esperen «después». Después acuerden un registro de cambios de definiciones y fuentes.

**¿Qué calidad tienen nuestros datos en los campos en los que más confiamos y cómo lo sabemos?**
Tomen un campo, como la categoría, y muestreen 50 registros. Esperen problemas. Después elijan una causa para corregir.

**¿Qué datos personales o sensibles guardamos en los sistemas de servicio y cuánto tiempo los conservamos?**
Recorran los sistemas principales. Esperen sorpresas sobre adjuntos y registros de chat. Después involucren al oficial de privacidad y acuerden una regla de conservación para un sistema.

**¿Qué datos damos a las herramientas de IA y quién lo aceptó?**
Enumeren los usos. Esperen que algunos sean informales. Después acuerden una regla sobre lo que puede usarse y un registro de usos de datos por la IA.

## En la práctica: un ejemplo de gestión de servicios

El equipo de servicios digitales de una biblioteca nacional quiere pronosticar la demanda y entrenar un modelo para encaminar tickets. Un analista de datos empieza y descubre que el historial de tickets es difícil de usar. Las categorías se renombraron dos veces y una categoría «Otro» contiene el 35 por ciento de los tickets. Las marcas de tiempo de la herramienta antigua están en hora local y las de la nueva en hora universal. El campo de departamento, tomado del sistema de RR. HH., difiere del del sistema de identidad en alrededor del 8 por ciento de los usuarios. Un informe mensual muestra una caída de los incidentes de una cuarta parte, pero el analista descubre que un cambio en cómo se fusionan los incidentes duplicados explica la mayor parte de la caída.

La jefa del servicio decide tratar los datos de tickets como un activo gobernado. Se nombra a sí misma responsable de los datos y a un analista veterano del centro de servicios como custodio. Un diccionario de una página define los 12 campos que importan, incluida la definición de «resuelto» y la fecha en que cambió. El equipo mapea las categorías antiguas a las nuevas, etiqueta el corte en el historial y añade una regla de validación que impide «Otro» sin una nota de texto libre. Un trabajo semanal comprueba tres medidas de calidad: la proporción de tickets en «Otro», la proporción sin departamento y la proporción con marcas de tiempo fuera de los rangos esperados. Los resultados se publican para el centro.

La oficial de privacidad revisa el conjunto de datos y descubre que los campos de texto libre y los adjuntos contienen datos personales de miembros del público. El equipo acuerda eliminar los adjuntos de la copia de análisis, enmascarar nombres y direcciones de correo en el texto antes de usarlo para modelar y eliminar los tickets a los siete años, de acuerdo con la política de registros de la biblioteca. Un registro enumera cada uso de IA de los datos de tickets y su aprobación.

Qué cambia: el analista puede construir el pronóstico con un corte conocido y una serie limpia, y el modelo de encaminamiento se entrena con etiquetas revisadas. Qué sigue siendo difícil: el enmascaramiento del texto libre es imperfecto y quedan algunos datos personales; los sistemas de RR. HH. y de identidad siguen discrepando y sus responsables no han acordado conciliarlos; y las comprobaciones de calidad dependen de un pequeño número de personas. La jefa del servicio plantea la discrepancia de datos al director de informática y planea ampliar las comprobaciones a los datos de configuración.

## Cuatro perspectivas

### Equipos de producto y de entrega

Diseñen los registros, eventos y API de su producto con campos, marcas de tiempo e identificadores coherentes y documéntenlos. Avisen con antelación a los usuarios de los datos de los cambios.

### Equipos de servicio y de operaciones

Introduzcan los datos con cuidado y coherencia y avisen a los custodios de problemas en formularios o categorías. Ayuden a comprobar la calidad y conserven registros de los cambios de definiciones.

### Liderazgo y gobernanza

Nombre responsables, financie el trabajo de datos y pida evidencia de calidad de los datos que hay detrás de las decisiones. Fije reglas de privacidad y de uso de la IA. No acepte informes con términos sin definir.

### Clientes y usuarios

Debería saber qué datos se guardan sobre usted y por qué, y poder preguntar por ellos. Proporcione información exacta y avise al proveedor si los registros parecen erróneos.

## Ágil, IA, automatización y analítica

### Ágil

Mejore los datos en pasos pequeños impulsados por preguntas reales: corrija el campo que bloquea el siguiente análisis. Revise con regularidad la calidad de los datos con sus usuarios. Precaución: un programa de datos de varios años sin resultados visibles pierde apoyo; entregue ganancias pequeñas y útiles.

### IA

La IA puede ayudar a encontrar problemas de calidad, clasificar datos, sugerir definiciones y enmascarar datos personales, bajo revisión. Los datos usados por la IA necesitan su propia gobernanza: fuente, permiso, calidad y comprobaciones de deriva. Precaución: el enmascaramiento basado en IA puede pasar por alto datos personales; pruébelo y mantenga revisión humana para los conjuntos sensibles. Véase el Tema 5.6 — Gobernanza, riesgo y cumplimiento de la IA.

### Automatización

Automatice las comprobaciones de calidad, la captura del linaje, las etiquetas de clasificación, las reglas de conservación y las revisiones de acceso, con responsables de las excepciones. Precaución: la depuración automatizada puede cambiar los datos en silencio; registre los cambios y conserve los originales donde se exija. Véase el Tema 6.2 — Automatización y orquestación de flujos de trabajo.

### Analítica

Mida la calidad de los campos clave, la integridad, la actualidad, la proporción de conjuntos de datos con responsables y definiciones y los incidentes causados por problemas de datos. Precaución: una única puntuación de calidad puede ocultar defectos graves en un campo; informe por campo y por uso. Véanse el Tema 7.3 — Medición e informes y el libro *Service Management Metrics*.

## Modos de fallo habituales

- **Sin responsable.** Los problemas persisten. Nombre un responsable y un custodio.
- **Términos sin definir.** Los equipos discuten por los números. Escriba definiciones y registre los cambios.
- **Calidad comprobada una sola vez.** Los datos se deterioran. Monitorice de forma continua los campos clave.
- **La depuración como solución.** Los errores se repiten. Corrija el origen.
- **Zonas horarias e identificadores mezclados.** Los registros no pueden unirse ni ordenarse. Estandarice.
- **Conservarlo todo.** El riesgo y el costo crecen. Fije la conservación y elimine.
- **Uso de datos por la IA sin gobernar.** Datos sensibles o deficientes llegan a los modelos. Registre y revise los usos.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Responsabilidad y definiciones | Desconocidas | Responsables de los conjuntos de datos principales | Responsables, custodios, diccionario y catálogo | Definiciones y cambios gestionados | Gobernanza coordinada entre equipos y socios |
| Calidad | Desconocida | Comprobaciones puntuales | Campos clave medidos con regularidad | Mejoras de calidad seguidas hasta los orígenes | Calidad asegurada de forma continua con automatización |
| Protección | Ad hoc | Reglas básicas de acceso | Reglas de clasificación, acceso y conservación | Cumplimiento monitorizado y auditado | Protección integrada en los pipelines y las herramientas |
| Uso en la IA | Sin registrar | Conciencia | Registro y reglas para el uso de datos por la IA | Uso revisado y probado en cuanto a sesgo y deriva | Datos de IA gobernados entre sistemas y proveedores |

## Lista de verificación

- [ ] Nuestros conjuntos de datos más importantes tienen responsables y custodios designados.
- [ ] Los términos y campos clave están definidos por escrito, con fechas de cambio.
- [ ] Medimos la calidad en los campos que impulsan decisiones.
- [ ] Corregimos los problemas de calidad en el origen.
- [ ] Las zonas horarias, los formatos y los identificadores están estandarizados.
- [ ] Sabemos de dónde obtienen sus datos los informes clave (linaje).
- [ ] Los datos están clasificados, el acceso está controlado y existen reglas de conservación.
- [ ] Un registro anota qué datos usa la IA y quién lo aceptó.

## Prompts de IA

**Perfile un conjunto de datos.**

```text
Here is a sample of a dataset with field names, identifiers removed: [paste, 50–100 rows].
For each field, give the apparent meaning, type, share of missing or placeholder values, odd values, and a question for the data owner. Do not draw business conclusions.
List what you are unsure of.
```

**Redacte una entrada de diccionario de datos.**

```text
Field: [name]. What I know about it: [source, how it is filled, how it is used].
Draft a dictionary entry with: plain-language definition, allowed values, how it is calculated or entered, source system, owner (only if stated), known issues, and date of last change (only if stated). Mark each item not given as [missing].
List what you are unsure of.
```

**Encuentre datos personales en texto libre para revisión.**

```text
Here is a sample of ticket free text, already partially masked: [paste].
List items that look like personal data (names, emails, phone numbers, addresses, identifiers) that remain, quoting the exact text, and suggest categories of rules to catch them. Do not guess whether any is real.
List what you are unsure of.
```

## Habilidades de IA

- [data-governance](../../../../skills/data-governance/SKILL.md): úsela para fijar responsabilidad, definiciones y reglas para los datos.
- [data-quality](../../../../skills/data-quality/SKILL.md): úsela para definir y comprobar la calidad de los campos clave.
- [data-pipeline](../../../../skills/data-pipeline/SKILL.md): úsela para diseñar y documentar flujos de datos.
- [legal-data-privacy-compliance](../../../../skills/legal-data-privacy-compliance/SKILL.md): úsela para plantear las cuestiones de privacidad a su asesor jurídico.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md): úsela para asignar responsabilidad y custodia.

## Fuentes principales

- DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*: una amplia referencia sobre la gestión y la gobernanza de datos.
- ISO/IEC 25012, modelo de calidad de datos: un conjunto estándar de características de calidad de los datos; lea la edición vigente del editor.
- Wikipedia, "Data governance" y "Data quality": visiones generales de la práctica y de sus dimensiones.
- Wikipedia, "General Data Protection Regulation": antecedentes de un marco jurídico importante (no es asesoramiento jurídico).

## Referencias

1. Data governance — Wikipedia — https://en.wikipedia.org/wiki/Data_governance
2. Data quality — Wikipedia — https://en.wikipedia.org/wiki/Data_quality
3. Data steward — Wikipedia — https://en.wikipedia.org/wiki/Data_steward
4. Data dictionary — Wikipedia — https://en.wikipedia.org/wiki/Data_dictionary
5. Metadata — Wikipedia — https://en.wikipedia.org/wiki/Metadata
6. Data lineage — Wikipedia — https://en.wikipedia.org/wiki/Data_lineage
7. Data cleansing — Wikipedia — https://en.wikipedia.org/wiki/Data_cleansing
8. Master data management — Wikipedia — https://en.wikipedia.org/wiki/Master_data_management
9. Data classification — Wikipedia — https://en.wikipedia.org/wiki/Data_classification
10. Personal data — Wikipedia — https://en.wikipedia.org/wiki/Personal_data
11. General Data Protection Regulation — Wikipedia — https://en.wikipedia.org/wiki/General_Data_Protection_Regulation
12. Data retention — Wikipedia — https://en.wikipedia.org/wiki/Data_retention
