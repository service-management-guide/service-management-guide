# Gobernanza, Riesgo y Cumplimiento

**La gobernanza fija la dirección y la responsabilidad, la gestión de riesgos decide qué hacer ante la incertidumbre y el cumplimiento demuestra que se satisfacen las obligaciones; en la entrega continua funcionan mejor como barreras de protección integradas en el trabajo, con responsables de riesgos que deciden, pipelines que producen evidencia y auditorías que examinan lo bien que funcionan los controles, no cuántos documentos existen.**

## Por qué importa

Pocas palabras en tecnología provocan un suspiro con tanta fiabilidad como «gobernanza». Evoca comités, formularios y aprobaciones que llegan después de tomada la decisión. En muchas organizaciones el suspiro está justificado. La gobernanza se ha convertido en una capa de papeleo sobre el trabajo, en manos de personas que no lo hacen, medida por artefactos y no por resultados.

Sin embargo, la necesidad es real. Las organizaciones manejan el dinero, los historiales médicos y la confianza de otras personas. Los reguladores, los clientes y las juntas piden evidencia de que se gestiona con responsabilidad. Los servicios fallan de maneras que dañan a las personas, y alguien debe responder. Sin gobernanza, las decisiones las toma quien más grita, los riesgos los aceptan personas que no saben que los aceptaron y el cumplimiento se descubre durante una auditoría.

La manera de reconciliar ambas cosas es cambiar el aspecto de la gobernanza. En lugar de puertas al final, ofrece barreras de protección al principio: reglas claras sobre lo que se permite, integradas en las herramientas para que el camino seguro sea el fácil. En lugar de papeleo producido después del hecho, usa evidencia producida por el propio trabajo, como los registros del pipeline. En lugar de una sola aprobación para todos los riesgos, ajusta el nivel de revisión al nivel de riesgo y pone las decisiones en manos de quienes las entienden. Wikipedia describe la gobernanza, el riesgo y el cumplimiento (GRC) como un enfoque integrado de estas tres cosas. Este tema explica las ideas y cómo aplicarlas en la gestión de servicios, incluidos los entornos regulados. No ofrece asesoramiento jurídico, y las normas difieren según el país y el sector. Se apoya en la habilitación de cambios (Tema 3.4 — Habilitación de Cambios), los pipelines (Tema 6.4 — Pipelines y cambio automatizado), la seguridad de la información (Tema 3.13 — Gestión de la Seguridad de la Información) y la gobernanza de la IA (Tema 5.6 — Gobernanza, riesgo y cumplimiento de la IA).

## Conceptos clave

**Gobernanza.** El sistema por el cual se dirige y se controla una organización. Wikipedia describe el gobierno corporativo como los mecanismos, procesos y relaciones por los que se controlan y operan las organizaciones. En ITIL 4, la gobernanza es un componente del sistema de valor del servicio que dirige, evalúa y monitoriza; véase el Tema 1.4 — El sistema de valor del servicio. Existe en varios niveles, desde la junta hasta el equipo.

**Riesgo.** El efecto de la incertidumbre sobre los objetivos. La gestión de riesgos identifica, evalúa, trata y monitoriza los riesgos. Wikipedia describe la gestión de riesgos y orientaciones internacionales como ISO 31000. Un riesgo es una posibilidad, no una certeza, y tiene una probabilidad y un impacto.

**Registro de riesgos.** Un registro de riesgos, sus responsables, evaluaciones, tratamientos y estado. Wikipedia describe los registros de riesgos. Véase la habilidad de registro de riesgos de esta guía. Un registro es una herramienta de trabajo; si solo se actualiza antes de las auditorías, es una decoración.

**Apetito y tolerancia al riesgo.** Cuánto riesgo está dispuesta a aceptar la organización en la búsqueda de sus objetivos, fijado por quienes gobiernan. Wikipedia describe el apetito de riesgo. Dice a los equipos hasta dónde pueden llegar sin escalar. Sin él, cada decisión es demasiado cautelosa o una apuesta inadvertida.

**Tratamiento del riesgo.** Cuatro respuestas básicas: reducir el riesgo mediante controles, aceptarlo a sabiendas, transferirlo, por ejemplo mediante un seguro o un contrato, o evitarlo no realizando la actividad. Registre la elección y quién la hizo. Aceptar por omisión no es una decisión.

**Cumplimiento.** Satisfacer las obligaciones derivadas de leyes, reglamentos, contratos, estándares y políticas internas. Wikipedia describe el cumplimiento normativo. Los ejemplos incluyen leyes de protección de datos como el Reglamento General de Protección de Datos, leyes de información financiera como la Ley Sarbanes–Oxley, normas de privacidad sanitaria como HIPAA en Estados Unidos, requisitos del sector de pagos como PCI DSS y, en la Unión Europea, normas de resiliencia para entidades financieras (la Ley de Resiliencia Operativa Digital, DORA) y para servicios esenciales (la Directiva NIS2), todos los cuales Wikipedia describe. Las obligaciones difieren según el lugar y el sector. Identifique las suyas con asesoramiento especializado.

**Controles.** Medidas que reducen el riesgo o aseguran el cumplimiento: preventivos (impiden un problema), de detección (lo encuentran) y correctivos (lo arreglan). Pueden ser técnicos, como una restricción de acceso, procedimentales, como una revisión, u organizativos, como la separación de funciones, que Wikipedia describe. Los marcos de control interno, como el del Committee of Sponsoring Organizations (COSO), los organizan; Wikipedia describe el control interno. Un control que no se prueba puede no funcionar.

**Barreras de protección en lugar de puertas.** Una puerta detiene el trabajo hasta que alguien aprueba. Una barrera de protección (guardrail) es un límite que mantiene el trabajo seguro sin detenerlo, como una comprobación de política en el pipeline que bloquea un depósito de almacenamiento público. Las barreras son rápidas y coherentes; las puertas son lentas y variables. Use puertas solo donde se necesite un juicio humano sobre el riesgo. Véase el Tema 3.4 — Habilitación de Cambios.

**Política.** Una declaración de intención y de reglas. Wikipedia describe la política en general. Las buenas políticas son cortas, dicen qué se exige y por qué, y están escritas para que la gente pueda seguirlas. La política escrita como código, comprobada automáticamente, vincula la regla con su cumplimiento.

**Evidencia.** Registros que muestran que un control funcionó: registros de actividad, revisiones, resultados de pruebas, aprobaciones. Wikipedia describe los rastros de auditoría y la evidencia. La evidencia producida automáticamente por el trabajo, como el registro de cada ejecución del pipeline, es más barata y fiable que la evidencia reunida para una auditoría. Véase el Tema 6.4 — Pipelines y cambio automatizado.

**Auditoría y aseguramiento.** Examen independiente de si los controles y procesos funcionan. Wikipedia describe la auditoría. La auditoría interna, la externa y las de clientes o reguladores difieren en su propósito. Wikipedia describe el modelo de las «tres líneas», en el que la dirección es responsable del riesgo y del control (primera línea), las funciones de riesgo y cumplimiento supervisan (segunda línea) y la auditoría interna proporciona aseguramiento independiente (tercera línea). Los informes de atestación, como los llamados informes System and Organization Controls (SOC) y descritos por Wikipedia, dan a los clientes seguridad sobre los controles de un proveedor.

**Operar en industrias reguladas.** Los bancos, los hospitales, las aseguradoras y los organismos públicos afrontan requisitos detallados y supervisión. La entrega continua es posible en estos entornos cuando los controles se asignan a los requisitos y la evidencia se genera de forma fiable. Involucre pronto al regulador y explique cómo el pipeline cumple la intención de cada control.

**Riesgo de terceros y de la cadena de suministro.** Las obligaciones se extienden a los proveedores y al software que usa. Véanse el Tema 3.14 — Gestión de Proveedores y el Tema 4.2 — Gestión de Activos de Software.

**Cultura de riesgo.** Cómo piensa la gente sobre el riesgo y cómo habla de él. Una cultura en la que la gente puede comunicar problemas sin culpas, y en la que los líderes aceptan las malas noticias, encuentra los riesgos pronto. Véase el Tema 8.3 — Cambio Organizacional y Adopción.

**Riesgos de la IA y de la automatización.** La nueva tecnología añade riesgos, como la automatización que actúa a gran escala y los sistemas de IA que producen resultados sesgados o erróneos. Necesitan responsables, evaluaciones y controles en el mismo registro que los demás riesgos. Véanse el Tema 5.6 — Gobernanza, riesgo y cumplimiento de la IA y el Tema 6.1 — Estrategia de automatización.

**Cómo encajan las lentes.** El GRC es la capa de control en torno a las otras lentes. La práctica ágil sugiere una gobernanza proporcionada, rápida y colaborativa, con personas de riesgo y cumplimiento dentro de los equipos. La automatización proporciona barreras de protección y evidencia. La analítica monitoriza la eficacia de los controles. La propia IA es un asunto de gobernanza.

## Buenas prácticas

1. **Fije con claridad la dirección y el apetito.** Declare qué hará y qué no hará la organización y cuánto riesgo acepta en las áreas clave. Haga que esas declaraciones sean breves y estén al alcance de los equipos.
2. **Ponga las decisiones de riesgo en manos de los responsables del riesgo.** Nombre un responsable para cada riesgo significativo, que lo entienda y tenga autoridad. Escale según umbrales definidos, no por costumbre.
3. **Mantenga un registro de riesgos vivo.** Registre los riesgos con responsables, calificaciones, tratamientos y fechas de revisión, y actualícelo cuando algo cambie. Vincule los riesgos con servicios y controles.
4. **Ajuste la revisión al riesgo.** Use comprobaciones ligeras y automatizadas para los cambios de bajo riesgo y una revisión humana más profunda para los de alto riesgo. Publique los criterios.
5. **Integre barreras de protección en las herramientas.** Codifique las reglas como comprobaciones de política en el pipeline y las plataformas, para que el camino seguro sea el fácil. Use las puertas con moderación.
6. **Genere evidencia a partir del trabajo.** Capture automáticamente los registros de revisiones, pruebas, aprobaciones y despliegues, y almacénelos donde no puedan alterarlos aquellos a quienes se refieren.
7. **Asigne los controles a los requisitos una sola vez.** Mantenga un único conjunto de controles asignado a los estándares y leyes que le apliquen, en lugar de documentos separados para cada uno. Véase el Tema 1.8 — Marcos y estándares de gestión de servicios.
8. **Pruebe que los controles funcionan.** Muestree registros, realice ejercicios y vuelva a ejecutar los controles. Corrija los que no funcionan y elimine los que añaden costo sin reducir el riesgo.
9. **Trabaje pronto con auditores y reguladores.** Explique su enfoque, pregunte qué evidencia aceptarán e invítelos a ver el pipeline. Las sorpresas en las auditorías son caras.
10. **Construya una cultura de comunicación honesta.** Haga seguro informar de riesgos, cuasi accidentes y errores, y responda con acciones. Siga cuántos problemas encuentra la propia primera línea.

## Preguntas para conversar con su equipo

**¿Cuáles de nuestros pasos de gobernanza han cambiado una decisión en el último año y cuáles solo han añadido demora?**
Pidan evidencia. Esperen que algunos pasos no tengan efecto registrado. Después elijan uno para automatizar o eliminar, con el acuerdo del responsable del riesgo.

**¿Quién es el responsable de cada uno de nuestros diez riesgos principales y cuándo lo revisó por última vez?**
Miren el registro. Esperen brechas y entradas obsoletas. Después asignen responsables y fechas de revisión.

**¿Qué aceptaría nuestro auditor como evidencia de un control y podrían nuestras herramientas producirla automáticamente?**
Pregunten al auditor. Esperen más flexibilidad de la supuesta. Después elijan un control y generen su evidencia desde el pipeline.

**¿Dónde aceptamos riesgo por omisión y a quién sorprendería saberlo?**
Piensen en sistemas antiguos, vulnerabilidades conocidas y arreglos aplazados. Esperen ejemplos incómodos. Después registren decisiones explícitas para los tres principales.

**¿Qué reglamentos y contratos se aplican a nuestros servicios y cómo se corresponden con ellos nuestros controles?**
Enumérenlos con los asesores jurídicos y de cumplimiento. Esperen un mapa incompleto. Después construyan una única correspondencia de controles para un servicio.

**¿Cómo gobernamos la IA y la automatización del mismo modo que otros riesgos y dónde somos incoherentes?**
Comparen los registros y las revisiones. Esperen que la IA quede fuera. Después añadan los usos de la IA al registro principal.

## En la práctica: un ejemplo de gestión de servicios

El equipo de la plataforma minorista de un banco regional quiere publicar versiones a diario. La función de riesgos del banco exige un proceso de comité asesor de cambios para todos los cambios en producción, con un formulario, tres aprobaciones y una reunión semanal. El equipo de la plataforma lo llama teatro, y la función de riesgos señala dos incidentes del año pasado causados por cambios sin revisar.

La jefa de riesgo operacional y el líder de la plataforma acuerdan asignar los controles de cambios del banco a sus propósitos. Los controles existen para asegurar que los cambios los revisa una segunda persona competente, se prueban, los autoriza un responsable que responde por ellos, son rastreables y reversibles. El pipeline puede aportar la mayor parte: un segundo revisor obligatorio, pruebas automatizadas, una autorización registrada por el responsable del producto para los cambios con riesgo, un registro completo y una reversión automática. Para los cambios de mayor riesgo, como los del cálculo de pagos, la reunión semanal se mantiene, con un grupo más pequeño.

Acuerdan una declaración de apetito de riesgo para los cambios: los cambios rutinarios en los canales digitales son de bajo riesgo y quedan cubiertos por los controles del pipeline; los cambios en los sistemas del libro mayor central son de alto riesgo y necesitan aprobación humana. La evidencia del pipeline va a un almacén inmutable, y la auditoría interna muestrea 40 cambios por trimestre. Se informa del enfoque al auditor externo y al supervisor del regulador, y se les muestran los registros del pipeline. El supervisor pide un resumen mensual de excepciones y acuerda revisar el arreglo a los seis meses.

Tras dos trimestres, la tasa de fallos de los cambios es menor que antes, el plazo de entrega de los cambios rutinarios baja de nueve días a uno y la auditoría encuentra la evidencia completa en 39 de los 40 cambios muestreados; el otro muestra un registro de revisor ausente debido a una mala configuración del pipeline, que se corrige. La función de riesgos añade también los usos de IA del banco, que estaban fuera del registro, con responsables y evaluaciones.

Qué cambia: riesgos e ingeniería comparten una visión de los controles, y se permite la publicación diaria para la clase de bajo riesgo. Qué sigue siendo difícil: los sistemas del libro mayor central no pueden ejecutar pruebas automatizadas con facilidad y mantienen la reunión semanal; la regla del segundo revisor tensiona a los equipos pequeños; y los requisitos del supervisor sobre el formato de la evidencia difieren de los del pipeline, lo que exige trabajo de traducción. La jefa de riesgos establece una revisión trimestral de la declaración de apetito y pide recursos para las pruebas del libro mayor central.

## Cuatro perspectivas

### Equipos de producto y de entrega

Conozcan los riesgos y las obligaciones que se aplican a su servicio, integren barreras de protección en su pipeline y generen evidencia a medida que trabajan. Hablen pronto con los colegas de riesgo y cumplimiento e inclúyanlos en el diseño.

### Equipos de servicio y de operaciones

Operen los controles: revisiones, accesos, monitorización y gestión de incidentes. Registren lo que hacen, informen de los cuasi accidentes y señalen los controles que no funcionan o cuestan más de lo que aportan.

### Liderazgo y gobernanza

Fije la dirección y el apetito, nombre a los responsables de los riesgos y financie los controles que funcionan. Pida evidencia y resultados de pruebas, no volúmenes de documentos. Haga seguro comunicar las malas noticias.

### Clientes y usuarios

Usted confía en que los proveedores gestionen los riesgos que le afectan. Pregunte qué aseguramiento pueden dar, como informes de auditoría, y hágales saber los requisitos que le aplican.

## Ágil, IA, automatización y analítica

### Ágil

Incorpore personas de riesgo y cumplimiento a los equipos, revise los controles en ciclos cortos y mejórelos con retroalimentación. Precaución: no confunda la falta de papeleo con la falta de control; muestre cómo se cumple cada control.

### IA

La IA puede ayudar a redactar políticas, asignar controles a requisitos, resumir hallazgos de auditoría y buscar evidencia, con revisión jurídica y humana. Los usos de la IA pertenecen ellos mismos al registro de riesgos. Precaución: un resumen de IA de un reglamento puede ser erróneo; no se apoye nunca en él para el cumplimiento. Véase el Tema 5.6 — Gobernanza, riesgo y cumplimiento de la IA.

### Automatización

Automatice las comprobaciones de política, la captura de evidencia, las revisiones de acceso y la monitorización de controles, con las excepciones encaminadas a sus responsables. Precaución: un control automatizado solo comprueba aquello para lo que se construyó; pruébelo y muestree los resultados a mano. Véase el Tema 6.4 — Pipelines y cambio automatizado.

### Analítica

Siga los resultados de las pruebas de controles, las excepciones, las calificaciones de riesgo a lo largo del tiempo, los hallazgos de auditoría y el tiempo para cerrarlos, y los incidentes vinculados con fallos de control. Precaución: los recuentos de controles o de evaluaciones completadas premian el papeleo; mida la eficacia y los resultados. Véanse el libro *Service Management Metrics* y el Tema 7.3 — Medición e informes.

## Modos de fallo habituales

- **Gobernanza como puertas y papel.** Demora sin seguridad. Integre barreras de protección en las herramientas y genere la evidencia automáticamente.
- **Aceptación del riesgo por omisión.** Nadie decidió. Registre decisiones explícitas con responsables.
- **Una revisión para todos los riesgos.** Los riesgos bajos esperan; los altos se despachan deprisa. Ajuste la revisión al riesgo.
- **Evidencia reunida para las auditorías.** El costo y los errores aumentan. Captúrela a medida que se trabaja.
- **Documentos separados por estándar.** Duplicación y deriva. Asigne un conjunto de controles a muchos requisitos.
- **Controles sin probar.** Fallan en silencio. Pruebe y muestree.
- **Miedo a informar.** Los riesgos quedan ocultos. Responda a las malas noticias con acciones.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Dirección y apetito | Sin declarar | Informal | Apetito y derechos de decisión por escrito | Apetito revisado frente a los resultados | Apetito coordinado en toda la empresa y con los socios |
| Gestión de riesgos | Reactiva | Existe un registro | Registro con responsables, actual y vinculado con servicios y controles | Riesgos revisados frente a incidentes y pruebas | Riesgos gestionados con datos entre proveedores y la IA |
| Controles y evidencia | Manual y por reuniones | Alguna automatización | Barreras de protección en las herramientas, evidencia generada por el trabajo | Eficacia de los controles probada y muestreada | Monitorización continua de controles con supervisión humana |
| Aseguramiento y cultura | Sorpresas en las auditorías | Preparados para las auditorías | Contacto temprano con auditores y reguladores | Hallazgos seguidos hasta su cierre | Aseguramiento integrado con la entrega y el aprendizaje |

## Lista de verificación

- [ ] Tenemos un apetito de riesgo y unos derechos de decisión por escrito.
- [ ] Cada riesgo significativo tiene un responsable y una fecha de revisión.
- [ ] El esfuerzo de revisión se ajusta al riesgo y los criterios están publicados.
- [ ] Los controles se asignan una sola vez a los estándares y leyes que se aplican.
- [ ] Las barreras de protección están integradas en los pipelines y las plataformas.
- [ ] La evidencia se genera automáticamente y se almacena con seguridad.
- [ ] Probamos los controles y muestreamos los registros.
- [ ] Los riesgos de la IA y de la automatización están en el mismo registro.

## Prompts de IA

**Asigne un control a su propósito y a su evidencia.**

```text
Here is a control as written: [paste]. Here is what our pipeline or tools record: [paste].
State the risk the control appears to address, based only on the text, list what evidence the tools would produce, and what the control requires that the evidence does not show. Do not judge whether it meets any regulation.
List what you are unsure of.
```

**Revise la calidad de un registro de riesgos.**

```text
Here is an extract from our risk register: [paste, sensitive details removed].
List entries without an owner, without a review date, with vague descriptions, or where treatment is "accept" without a stated decision-maker. Quote each. Do not rate the risks.
List what you are unsure of.
```

**Prepárese para las preguntas de un auditor.**

```text
The audit covers [area]. Here are our relevant controls and evidence: [paste].
List twelve questions an auditor might ask, grouped by control, and for each what evidence we would need to show. Mark questions where our material gives no basis for an answer. Do not state what the auditor will require.
List what you are unsure of.
```

## Habilidades de IA

- [risk-register](../../../../skills/risk-register/SKILL.md): úsela para registrar riesgos, responsables y tratamientos.
- [key-risk-indicators](../../../../skills/key-risk-indicators/SKILL.md): úsela para elegir indicadores de alerta temprana.
- [compliance-testing](../../../../skills/compliance-testing/SKILL.md): úsela para probar controles y evidencia.
- [legal-compliance-audit](../../../../skills/legal-compliance-audit/SKILL.md): úsela para preparar preguntas y evidencia para la revisión jurídica y de auditoría.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md): úsela para aclarar los derechos de decisión y la responsabilidad.

## Fuentes principales

- ISO 31000, directrices de gestión de riesgos: la orientación internacional sobre gestión de riesgos; lea la edición vigente del editor.
- COSO, *Internal Control — Integrated Framework*: un marco muy usado de control interno.
- Gene Kim y otros, *The DevOps Handbook*: capítulos sobre la integración de la seguridad, el cumplimiento y el control de cambios en el pipeline.
- Wikipedia, "Governance, risk, and compliance" y "Risk management": visiones generales de las ideas.

## Referencias

1. Governance, risk, and compliance — Wikipedia — https://en.wikipedia.org/wiki/Governance,_risk,_and_compliance
2. Corporate governance — Wikipedia — https://en.wikipedia.org/wiki/Corporate_governance
3. Risk management — Wikipedia — https://en.wikipedia.org/wiki/Risk_management
4. Risk register — Wikipedia — https://en.wikipedia.org/wiki/Risk_register
5. Risk appetite — Wikipedia — https://en.wikipedia.org/wiki/Risk_appetite
6. Regulatory compliance — Wikipedia — https://en.wikipedia.org/wiki/Regulatory_compliance
7. Internal control — Wikipedia — https://en.wikipedia.org/wiki/Internal_control
8. Separation of duties — Wikipedia — https://en.wikipedia.org/wiki/Separation_of_duties
9. Audit — Wikipedia — https://en.wikipedia.org/wiki/Audit
10. Audit trail — Wikipedia — https://en.wikipedia.org/wiki/Audit_trail
11. Sarbanes–Oxley Act — Wikipedia — https://en.wikipedia.org/wiki/Sarbanes%E2%80%93Oxley_Act
12. General Data Protection Regulation — Wikipedia — https://en.wikipedia.org/wiki/General_Data_Protection_Regulation
