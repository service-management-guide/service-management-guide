# Habilitación de Cambios

**La habilitación de cambios garantiza que los cambios en los servicios se hagan con seguridad y rapidez; evalúa el riesgo, asigna autoridad a las personas más cercanas al cambio y traslada las comprobaciones rutinarias al pipeline, reservando la revisión humana para los cambios en los que hace falta criterio.**

## Por qué importa

Los cambios causan incidentes. Una edición de configuración, una liberación de código, la renovación de un certificado, una regla de cortafuegos: cualquiera de ellos puede tumbar un servicio. La mayoría de las organizaciones lo aprenden por las malas y responden con un control: un formulario, una aprobación, una reunión, una congelación. El control reduce parte del riesgo y añade retraso, y el retraso anima a la gente a agrupar los cambios en lotes mayores, que son más arriesgados.

La forma tradicional del control es el comité asesor de cambios (CAB), un grupo que revisa los cambios propuestos. Los comités pueden aportar valor real cuando traen una visión amplia a los cambios arriesgados. También se convierten en un cuello de botella cuando revisan todos los cambios, incluidos los rutinarios que han tenido éxito mil veces. La investigación sobre la entrega de software recogida en el libro *Accelerate*, de Nicole Forsgren, Jez Humble y Gene Kim, encontró que la aprobación externa pesada no se asociaba con mayor estabilidad y sí con una entrega más lenta; la revisión entre pares y las comprobaciones automatizadas se asociaban con mejores resultados. Los datos provienen de encuestas y tienen sus propios límites, pero la dirección es coherente con la experiencia de muchos equipos.

ITIL 4 rebautizó la práctica como «habilitación de cambios» (change enablement), para señalar que el objetivo es hacer posible el cambio beneficioso asegurando que los riesgos se evalúan adecuadamente, autorizando que los cambios procedan y gestionando el calendario de cambios. Este tema muestra cómo hacerlo con rutas distintas para distintos tipos de cambio y cómo integrar la evidencia en el trabajo. Se apoya en la entrega continua (Tema 2.2 — Entrega continua) y se conecta con la gestión de versiones (Tema 3.5 — Gestión de Versiones y Despliegues) y la gestión de la configuración (Tema 4.4 — Gestión de la Configuración).

## Conceptos clave

**Cambio.** En ITIL 4, la adición, modificación o eliminación de cualquier cosa que pueda tener un efecto directo o indirecto sobre los servicios. El alcance es amplio: software, infraestructura, configuración, documentos, proveedores y procesos. Los artículos de Wikipedia sobre la gestión del cambio y el control de cambios describen la idea en TI y en ingeniería.

**Habilitación de cambios frente a gestión del cambio.** «Gestión del cambio» se usa también para el cambio organizacional, es decir, el lado humano de la transformación (véase el Tema 8.3 — Cambio Organizacional y Adopción). «Habilitación de cambios» en ITIL se refiere a controlar los cambios en servicios y productos. Esta guía usa el término de ITIL 4 para la práctica descrita aquí.

**Tipos de cambio.** ITIL 4 describe tres:

| Tipo | Descripción | Ruta típica |
|---|---|---|
| Estándar | De bajo riesgo, bien entendido, preautorizado, repetido | Sigue un procedimiento documentado; sin aprobación individual |
| Normal | Necesita evaluación y autorización | Evaluado y autorizado por la autoridad de cambios adecuada |
| De emergencia | Debe hacerse con urgencia, por ejemplo para restablecer el servicio o corregir una vulnerabilidad crítica | Autorización acelerada con una revisión posterior |

**Autoridad de cambios.** La persona o grupo que autoriza un cambio. ITIL 4 destaca que la autoridad debe asignarse al nivel apropiado al riesgo, que para los cambios de bajo riesgo es a menudo un par o el propio equipo. Los cambios de mayor riesgo suben más. El artículo de Wikipedia sobre el comité asesor de cambios describe el modelo tradicional.

**Evaluación del riesgo.** Estimar la probabilidad y el impacto de que el cambio falle. Los factores incluyen el tamaño del cambio, la criticidad del servicio, el número de usuarios, las pruebas realizadas, la capacidad de revertir y el historial de cambios similares. Los artículos de Wikipedia sobre evaluación y gestión de riesgos describen métodos generales. Una lista de comprobación sencilla y coherente funciona mejor que una puntuación elaborada en la que nadie confía.

**Calendario de cambios.** Un calendario que muestra los cambios planificados, para ver los conflictos y los choques con periodos críticos del negocio. Para los equipos que liberan muchas veces al día, el calendario se reduce a excepciones, como los periodos de congelación, y a los cambios grandes que necesitan coordinación.

**Revisión entre pares.** Otra persona competente revisa el cambio antes de que se haga, como en la revisión de código. Wikipedia describe la revisión por pares y la revisión de código. Es barata, rápida y aporta conocimiento relevante, y respalda la separación de funciones donde se exija.

**Controles automatizados en el pipeline.** Pruebas, análisis estático, análisis de seguridad y comprobaciones de políticas se ejecutan en cada cambio, y el pipeline registra qué se ejecutó y los resultados. Esto produce mejor evidencia que una reunión, porque es coherente y está ligada al cambio real. Los artículos de Wikipedia sobre automatización de pruebas y análisis estático de programas describen algunas de las técnicas. Véase el Tema 6.4 — Pipelines y cambio automatizado.

**Separación de funciones.** Un control en el que ninguna persona puede completar sola una acción arriesgada, por ejemplo exigiendo que quien escribe un cambio no sea la única que lo aprueba. La regulación o la auditoría pueden exigirla. Wikipedia describe la separación de funciones. Los pipelines pueden hacerla cumplir exigiendo un segundo revisor y registrando a ambos.

**Reversión y recuperación.** La capacidad de revertir un cambio o de avanzar con rapidez reduce el riesgo. Los cambios de datos son más difíciles de revertir que los de código. Véase el artículo de Wikipedia sobre rollback en la gestión de datos.

**Cambios de emergencia.** Las emergencias genuinas necesitan velocidad. Una ruta definida, con una autoridad designada, el mínimo papeleo y una revisión posterior impide que «emergencia» se convierta en la forma por defecto de evitar el proceso.

**Evidencia y auditoría.** Regulaciones como la Ley Sarbanes–Oxley en Estados Unidos, y normas similares en otras jurisdicciones, han impulsado requisitos de control sobre los cambios en sistemas financieros. Los requisitos difieren según la jurisdicción y el sector; compruebe cuáles le aplican y pregunte a su auditor qué evidencia los satisface. Esta guía no ofrece asesoramiento jurídico.

**Cómo encajan las lentes.** La habilitación de cambios es donde el ritmo ágil se encuentra con el control. La práctica ágil sugiere cambios pequeños y frecuentes y la participación temprana de las partes interesadas. La IA puede ayudar a evaluar el riesgo y a redactar descripciones de cambios, bajo revisión. La automatización proporciona los controles del pipeline. La analítica muestra los fallos de cambio y el plazo de entrega.

## Buenas prácticas

1. **Clasifique los cambios por tipo y riesgo.** Defina cambios estándar, normales y de emergencia, con ejemplos de cada uno. Revise la clasificación con regularidad y pase los cambios a «estándar» cuando la evidencia lo respalde.
2. **Preautorice los cambios estándar.** Para cambios repetidos y de bajo riesgo, acuerde el procedimiento una vez, con el responsable del riesgo, y deje que los equipos los realicen sin aprobación individual. Revise su tasa de éxito.
3. **Ponga la autoridad cerca del trabajo.** Deje que la revisión entre pares autorice los cambios de bajo riesgo. Escale los cambios de mayor riesgo a personas que entiendan el servicio y sus dependencias.
4. **Use el comité para los cambios que lo necesitan.** Mantenga una función asesora de cambios para los cambios de alto riesgo o transversales. Prepare el material con antelación y decida rápido.
5. **Integre los controles en el pipeline.** Exija pruebas, análisis y un segundo revisor en las herramientas y registre la evidencia automáticamente. Muestre a los auditores el pipeline, no una hoja de cálculo.
6. **Haga los cambios pequeños.** Divida los cambios grandes en pasos menores que puedan liberarse y comprobarse por separado. Los cambios más pequeños conllevan menos riesgo y son más fáciles de revertir.
7. **Planifique la vuelta atrás.** Exija un plan de reversión o de avance para cada cambio normal y ensáyelo para los importantes.
8. **Mantenga un calendario visible.** Muestre los cambios planificados y los periodos de congelación donde los equipos puedan verlos y resalte los conflictos con eventos importantes. Para cambios pequeños y frecuentes, muestre solo lo que necesita coordinación.
9. **Defina y vigile las emergencias.** Escriba los criterios y la ruta. Revise cada cambio de emergencia después y pregunte por qué fue necesario y si la ruta normal podría mejorarse.
10. **Aprenda de los cambios fallidos.** Revise los cambios que causaron incidentes y ajuste las reglas de riesgo, las pruebas o la lista de comprobación. Siga la tasa de fallos de cambio y mire sus causas.

## Preguntas para conversar con su equipo

**¿Cuáles de nuestras aprobaciones nunca han rechazado ni alterado un cambio y cuánto tiempo cuestan?**
Esto prueba si los controles aportan valor. Pida datos de los últimos seis meses. Puede encontrar pasos de aprobación sin efecto registrado. Después pregunte qué riesgo atiende cada uno y si otro control podría atenderlo.

**¿Qué cambios hacemos con más frecuencia y cuáles podrían preautorizarse como cambios estándar?**
Enumere los diez primeros por volumen. Espere que muchos sean de bajo riesgo y repetitivos. Involucre al responsable del riesgo. Después elijan dos para una prueba y acuerden los criterios de éxito.

**¿Cómo decidimos qué cambios necesitan una revisión humana y quién la hace?**
Los criterios suelen ser implícitos. Pregunte qué haría «arriesgado» a un cambio en nuestro contexto. Después redacten una lista de comprobación breve y pruébenla con cambios recientes.

**¿Qué aceptaría nuestro auditor como evidencia de que un cambio fue probado, revisado y aprobado?**
Pregunte directamente al auditor en lugar de suponer. Espere que los registros del pipeline puedan ser aceptables si muestran quién, qué y cuándo. Después acuerden una muestra de registros del pipeline y pidan al auditor que los revise.

**¿Cuándo fue la última vez que un cambio salió mal y qué de nuestro proceso lo permitió?**
Esto vincula la práctica con fallos reales. Busque pruebas ausentes, falta de reversión o mala información. Evite culpar a la persona. Después acuerden un control para añadir o mejorar.

**¿Dónde podría ayudar la IA a evaluar el riesgo de los cambios y qué querríamos comprobar a mano?**
La IA puede leer la descripción de un cambio y fallos pasados similares para sugerir factores de riesgo. También puede pasar por alto o inventar. Pregunte quién es responsable de la herramienta y cómo se verifican sus sugerencias. Después comparen las valoraciones de riesgo de la IA con los resultados de cambios pasados.

## En la práctica: un ejemplo de gestión de servicios

El departamento de TI de una autoridad sanitaria regional celebra un comité asesor de cambios semanal, al que asisten unas 20 personas, que revisa todos los cambios. Los ingenieros dicen que esperan hasta ocho días por la aprobación; el comité dice que detecta problemas. El sistema de historias clínicas de la autoridad tuvo el año pasado dos incidentes causados por cambios de configuración sin revisar que se hicieron como «emergencias» para evitar el comité.

El gestor de cambios analiza seis meses de registros: se revisaron 640 cambios, 590 se aprobaron tal como se presentaron, 38 se devolvieron por falta de información y 12 se modificaron o rechazaron por razones de fondo. De los 590, 41 causaron incidentes, casi todos entre cambios que también se hicieron con urgencia. El gestor propone tres rutas. Los cambios estándar, como añadir un usuario a un grupo o renovar un certificado, siguen procedimientos documentados y no necesitan aprobación. Los cambios normales en sistemas clasificados como de menor riesgo los revisa un par de otro equipo y los comprueba el pipeline. Los cambios de mayor riesgo en el sistema de historias clínicas van a un comité más pequeño que se reúne dos veces por semana y solo ve estos.

El oficial de seguridad clínica pide evidencia de que la revisión entre pares ocurre. El gestor le muestra un informe del pipeline que enumera cada cambio con el nombre del revisor, las pruebas ejecutadas y el resultado. El oficial acepta una prueba de seis meses con una revisión mensual de los cambios fallidos.

Qué cambia: la mediana del tiempo de aprobación baja de cinco días a menos de uno para la mayoría de los cambios, y el uso de «emergencia» cae bruscamente. Qué sigue siendo difícil: algunos sistemas heredados no pueden ejecutar pruebas automatizadas, así que sus cambios siguen necesitando comprobaciones manuales; la revisión entre pares depende de que los ingenieros tengan tiempo, y los equipos bajo presión revisan superficialmente; y la revisión mensual encuentra dos cambios cuyo revisor no tenía conocimiento relevante. El gestor añade una regla: el revisor debe ser alguien que haya trabajado en el sistema.

## Cuatro perspectivas

### Equipos de producto y de entrega

Hagan pequeños los cambios, añadan pruebas y planifiquen la reversión. Trabajen con la práctica de cambios para definir los cambios estándar y la evidencia del pipeline. Traten la revisión entre pares como una revisión real, no como una firma.

### Equipos de servicio y de operaciones

Ayuden a evaluar el riesgo operativo, mantengan el calendario y compartan lo que saben sobre las dependencias. Revisen con los equipos los cambios fallidos y mantengan raros y examinados los cambios de emergencia.

### Liderazgo y gobernanza

Delegue la autoridad según el riesgo, pida evidencia del pipeline y no exija una reunión para el cambio rutinario. Proteja el tiempo para la revisión entre pares. Revise las cifras de cambios de emergencia.

### Clientes y usuarios

Debería enterarse de los cambios que le afectan, con suficiente aviso y una descripción clara. Diga al proveedor los periodos en que el cambio es arriesgado para usted. Informe pronto de los problemas tras un cambio.

## Ágil, IA, automatización y analítica

### Ágil

Los cambios pequeños y frecuentes con las partes interesadas informadas son más seguros que los grandes y raros. Involucre a operaciones y a los responsables del riesgo en el diseño de las rutas de cambio y mejórelas con retroalimentación. Precaución: no abandone los controles en nombre de la agilidad; sustitúyalos por otros mejores.

### IA

La IA puede ayudar a redactar descripciones de cambios, sugerir factores de riesgo a partir de cambios pasados similares y comprobar si faltan datos en las descripciones, con una persona responsable de la decisión. Precaución: una puntuación de riesgo de IA puede tratarse como una autoridad; preséntela como sugerencia y siga con qué frecuencia acertó. Véase el Tema 5.4 — IA generativa para incidentes, conocimiento y cambios.

### Automatización

Automatice las comprobaciones del pipeline, la captura de evidencia, la detección de conflictos en el calendario y la ejecución de cambios estándar, con registros y reversión. Precaución: la aprobación automática de cambios es tan buena como sus reglas; revise las reglas y muestree los cambios aprobados. Véase el Tema 6.4 — Pipelines y cambio automatizado.

### Analítica

Siga el volumen de cambios por tipo, el plazo de entrega, la tasa de fallos de cambio y los cambios de emergencia, y mire las causas de los fallos. Precaución: una tasa de fallos baja puede deberse a que no se registran los fallos, y los recuentos de aprobaciones pueden manipularse dividiendo o agrupando cambios; contraste con los datos de incidentes. Véanse el libro *Service Management Metrics* y el Tema 7.3 — Medición e informes.

## Modos de fallo habituales

- **Revisar todos los cambios de la misma manera.** Los cambios rutinarios esperan. Clasifique por riesgo y preautorice los cambios estándar.
- **Un comité sin evidencia.** Los miembros aprueban lo que no pueden evaluar. Prepare la información y envíe solo los cambios que necesitan criterio.
- **Emergencia como atajo.** Se declara urgencia para evitar la revisión. Defínala y revise cada uso.
- **Revisión entre pares superficial.** Una firma sin leer. Exija un revisor cualificado y muestree las revisiones.
- **Abandonar controles sin reemplazo.** Los fallos suben y los auditores objetan. Cumpla el fin de cada control en el pipeline.
- **Sin plan de reversión.** Un cambio fallido prolonga un incidente. Exija y ensaye la recuperación.
- **Contar cambios aprobados como éxito.** El volumen sube y la calidad no. Siga los fallos y los incidentes causados.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Tipos de cambio y autoridad | Una ruta para todo | Existe una ruta de emergencia | Estándar, normal y de emergencia definidos con autoridad por riesgo | Rutas revisadas con datos | Las rutas se adaptan automáticamente según el riesgo entre servicios |
| Evidencia | Formularios y reuniones | Algunos registros de herramientas | Registros del pipeline para la mayoría de los cambios | Evidencia muestreada y auditada | Evidencia continua entre herramientas y proveedores |
| Evaluación del riesgo | Intuición | Lista de comprobación informal | Lista y criterios coherentes | Criterios ajustados con datos de fallos | Riesgo evaluado con datos y automatización, con revisión humana |
| Aprendizaje | Culpa | Revisiones ocasionales | Cambios fallidos revisados con acciones | Causas de fallos seguidas y reducidas | Aprendizaje compartido entre equipos |

## Lista de verificación

- [ ] Tenemos tipos de cambio estándar, normal y de emergencia con ejemplos.
- [ ] Los cambios estándar están preautorizados con un procedimiento documentado.
- [ ] La autoridad de cada tipo se corresponde con el riesgo.
- [ ] La revisión entre pares la hace alguien con conocimiento relevante.
- [ ] Los controles del pipeline registran pruebas, revisores y resultados.
- [ ] Todo cambio normal tiene un plan de reversión o de avance.
- [ ] Los cambios de emergencia se revisan después.
- [ ] Seguimos la tasa de fallos de cambio y aprendemos de los cambios fallidos.

## Prompts de IA

**Compruebe si falta algo en la descripción de un cambio.**

```text
Here is a draft change description: [paste]. Our required fields are: [list].
List which required fields are missing or unclear, and list five questions a reviewer would ask. Do not rewrite the change or rate its risk.
List what you are unsure of.
```

**Busque patrones en los cambios fallidos.**

```text
Below is a list of changes that caused incidents, with dates, type, size, whether tested, and whether rolled back: [paste list, names removed].
List common features across them and questions to investigate. Do not infer causes beyond the data.
List what you are unsure of.
```

**Proponga candidatos a cambios estándar.**

```text
Here are our most frequent changes in the last six months, with counts and failure counts: [paste data].
List which look like candidates for pre-authorization, with the data you used and the questions we should ask the risk owner. Do not claim any is safe.
List what you are unsure of.
```

## Habilidades de IA

- [change-request](../../../../skills/change-request/SKILL.md): úsela para diseñar un registro de cambio claro y ligero.
- [enterprise-change-management](../../../../skills/enterprise-change-management/SKILL.md): úsela para el lado organizacional del cambio.
- [risk-register](../../../../skills/risk-register/SKILL.md): úsela para registrar y revisar los riesgos de los cambios.
- [compliance-testing](../../../../skills/compliance-testing/SKILL.md): úsela para contrastar la evidencia con los requisitos de control.
- [security-testing](../../../../skills/security-testing/SKILL.md): úsela para planificar las comprobaciones de seguridad del pipeline.

## Fuentes principales

- Nicole Forsgren, Jez Humble y Gene Kim, *Accelerate* (2018): investigación sobre prácticas de entrega, incluida la aprobación de cambios.
- DORA (dora.dev): investigación e informes continuos sobre el desempeño de la entrega de software.
- PeopleCert, páginas de certificación ITIL: la descripción del propietario de la práctica de habilitación de cambios.
- Wikipedia, "Change management" y "Change control": visiones generales de las ideas.

## Referencias

1. Change management — Wikipedia — https://en.wikipedia.org/wiki/Change_management
2. Change control — Wikipedia — https://en.wikipedia.org/wiki/Change_control
3. Change-advisory board — Wikipedia — https://en.wikipedia.org/wiki/Change-advisory_board
4. Risk assessment — Wikipedia — https://en.wikipedia.org/wiki/Risk_assessment
5. Peer review — Wikipedia — https://en.wikipedia.org/wiki/Peer_review
6. Code review — Wikipedia — https://en.wikipedia.org/wiki/Code_review
7. Separation of duties — Wikipedia — https://en.wikipedia.org/wiki/Separation_of_duties
8. Test automation — Wikipedia — https://en.wikipedia.org/wiki/Test_automation
9. Static program analysis — Wikipedia — https://en.wikipedia.org/wiki/Static_program_analysis
10. Continuous delivery — Wikipedia — https://en.wikipedia.org/wiki/Continuous_delivery
11. DORA research — DevOps Research and Assessment — https://dora.dev/research/
