# Gobernanza, riesgo y cumplimiento de la IA

**La gobernanza de la IA da a una organización responsables designados, reglas claras sobre datos y decisiones, una evaluación de riesgos proporcional al daño, pruebas y registros para cada sistema de IA que usa; marcos como ISO/IEC 42001, el NIST AI Risk Management Framework y la Ley de IA de la UE aportan vocabulario y estructura, no asesoramiento jurídico.**

## Por qué importa

La IA llega a una organización por muchas puertas a la vez. Los proveedores añaden funciones de IA a las herramientas por las que ya paga. Los equipos construyen asistentes. Las personas usan herramientas públicas de chat para su trabajo. Cada uso conlleva preguntas que la organización quizá no se haya hecho: qué datos entran, quién los ve, qué tan exacta es, a quién afectan sus decisiones y quién responde cuando se equivoca.

Sin gobernanza, esas preguntas se responden uso por uso, de forma incoherente o no se responden. Las consecuencias van de lo embarazoso a lo grave: un documento confidencial pegado en una herramienta pública, un sistema de selección que trata peor a algunos grupos que a otros, un asistente que da un consejo erróneo a un cliente, un regulador que pide evidencia de control y no encuentra ninguna.

La gobernanza es la respuesta, y no tiene por qué ser pesada. En su núcleo es un pequeño conjunto de hábitos: saber qué IA usa, dar a cada uso un responsable, evaluar el riesgo en proporción a lo que podría salir mal, probar y monitorizar, fijar reglas sobre datos y supervisión humana y conservar registros. Las leyes y los estándares evolucionan con rapidez: la Ley de Inteligencia Artificial de la Unión Europea, descrita en Wikipedia, fija obligaciones por categoría de riesgo, y muchas otras jurisdicciones tienen normas o propuestas. Este tema explica la estructura y el vocabulario y muestra cómo encajar la gobernanza de la IA en la gobernanza que ya tiene. No ofrece asesoramiento jurídico; para cualquier cuestión legal, pregunte a un asesor cualificado.

La descripción del propietario de la versión más reciente de ITIL sitúa la IA dentro del entorno que debe abordar la gestión de servicios (véase el Tema 1.3 — ITIL 5). Este tema se conecta con la visión general de la IA (Tema 5.1 — IA en la gestión de servicios), los agentes (Tema 5.5 — IA agéntica y supervisión humana), el modelo operativo (Tema 5.8 — Modelo operativo y habilidades de IA) y el gobierno empresarial (Tema 8.1 — Gobernanza, Riesgo y Cumplimiento).

## Conceptos clave

**Gobernanza, riesgo y cumplimiento (GRC).** La gobernanza es cómo se dirige y se controla una organización; la gestión de riesgos identifica y trata las amenazas a los objetivos; el cumplimiento es satisfacer las obligaciones de leyes, contratos y políticas. Wikipedia describe la GRC como un enfoque integrado de los tres. La gobernanza de la IA aplica la misma lógica a la IA.

**Inventario de IA.** Una lista de todos los sistemas de IA en uso o en desarrollo: propósito, responsable, proveedor o modelo, datos usados, usuarios y personas afectadas, nivel de riesgo y estado. No se puede gobernar lo que no se ve. Incluya las funciones integradas de los proveedores y las herramientas personales usadas para el trabajo.

**Enfoque basado en el riesgo.** El nivel de control debe corresponder al nivel de daño potencial. Resumir notas de reuniones conlleva un riesgo distinto de clasificar a candidatos a un empleo. La Ley de IA de la UE adopta un enfoque similar, con categorías que van del riesgo mínimo al inaceptable; Wikipedia describe las categorías. Compruebe el texto vigente y su propia situación con un asesor jurídico.

**Evaluación de riesgos de la IA.** Para cada uso, pregunte: quién podría sufrir daño y cómo; con qué probabilidad y gravedad; cuáles son los límites del sistema; qué ocurre cuando se equivoca; y cuáles son las alternativas. Wikipedia describe la gestión de riesgos en general. Registre la evaluación y la decisión del responsable. Las evaluaciones de impacto sobre la privacidad, descritas en Wikipedia, son una herramienta relacionada para los datos personales.

**Estándares y marcos.** ISO/IEC 42001, publicado en 2023, especifica los requisitos de un sistema de gestión de inteligencia artificial, comparable en estructura a otros estándares ISO de sistemas de gestión. El Instituto Nacional de Estándares y Tecnología (NIST) de Estados Unidos publica el AI Risk Management Framework, organizado en torno a cuatro funciones: gobernar, mapear, medir y gestionar. Ambos son herramientas voluntarias de estructura y vocabulario compartido. Lea los textos vigentes de los editores. Véase el Tema 1.8 — Marcos y estándares de gestión de servicios.

**Ley y regulación.** La IA está sujeta a leyes existentes, como las de protección de datos, protección del consumidor, discriminación, empleo y propiedad intelectual, además de nuevas normas específicas de IA. Wikipedia describe la regulación de la inteligencia artificial en las distintas jurisdicciones, que cambia con rapidez. Las obligaciones dependen de dónde opere y de lo que haga. Esta guía no puede decirle qué se aplica.

**Protección de datos y privacidad.** Los sistemas de IA suelen procesar datos personales. Leyes como el Reglamento General de Protección de Datos (RGPD) de la Unión Europea fijan reglas sobre la base legal, la finalidad, la minimización, los derechos de las personas y, en algunos casos, límites a las decisiones automatizadas. Wikipedia describe el RGPD y la privacidad. Involucre a su oficial de privacidad o a su asesor jurídico y registre adónde van los datos, cuánto tiempo se conservan y si entrenan algún modelo.

**Sesgo y equidad.** La IA entrenada con datos pasados puede reproducir patrones injustos, de modo que algunas personas obtengan peores resultados. Wikipedia describe el sesgo algorítmico y la equidad en el aprendizaje automático. Pruebe las diferencias de resultados entre grupos relevantes para el uso y revise a quiénes afecta, no solo el rendimiento medio. Decida qué es aceptable antes del lanzamiento.

**Transparencia y explicabilidad.** Las personas afectadas por un sistema de IA deben saber que se usa y, para las decisiones importantes, poder obtener una explicación y una vía para impugnar. Wikipedia describe la transparencia algorítmica y la IA explicable. El nivel adecuado depende de lo que esté en juego.

**Supervisión humana.** Una persona que puede entender, cuestionar y anular el sistema, con tiempo e información para hacerlo. Véase el Tema 5.5 — IA agéntica y supervisión humana. La supervisión que existe solo sobre el papel es un hallazgo común.

**Seguridad.** Los sistemas de IA pueden ser atacados (por ejemplo, por inyección de prompts), pueden filtrar datos y pueden comportarse de forma inesperada. El red teaming, descrito en Wikipedia, es la práctica de probar un sistema simulando a un adversario. Véase el Tema 3.13 — Gestión de la Seguridad de la Información.

**Propiedad intelectual.** Surgen cuestiones sobre el material usado para entrenar modelos, la propiedad de las salidas y las licencias de los propios modelos. Wikipedia describe la propiedad intelectual y los derechos de autor. Véase el Tema 4.2 — Gestión de Activos de Software. Recabe asesoramiento sobre cómo le afectan.

**Responsabilidad y roles.** La gobernanza necesita roles claros: un patrocinador ejecutivo, un órgano que fije la política y revise los usos de mayor riesgo, responsables de cada sistema y especialistas en seguridad, privacidad y asuntos jurídicos. Wikipedia describe la rendición de cuentas. Evite un comité que lo apruebe todo y bloquee el trabajo; reserve la revisión para los usos de mayor riesgo.

**Controles del ciclo de vida.** Los controles se aplican a lo largo de la vida de un sistema: diseño (propósito, datos, riesgo), construcción o compra (diligencia debida, contratos, pruebas), despliegue (aprobación, monitorización), operación (rendimiento, deriva, incidentes) y retiro. Véase el Tema 3.14 — Gestión de Proveedores.

**Registros.** Conserve la evidencia: el inventario, las evaluaciones de riesgo, los resultados de pruebas, las aprobaciones, los registros de incidentes y los registros de uso. Los registros respaldan las auditorías, el aprendizaje y las impugnaciones de las personas afectadas.

**Cómo encajan las lentes.** La gobernanza es la capa de control alrededor de la lente de IA. La práctica ágil sugiere una revisión proporcionada y rápida, con salvaguardas que los equipos puedan usar sin esperar. La automatización puede hacer cumplir reglas, como impedir que los datos sensibles vayan a herramientas no aprobadas. La analítica aporta la evidencia de monitorización.

## Buenas prácticas

1. **Construya primero el inventario.** Pregunte a los equipos, compruebe los ajustes de los proveedores y revise los datos de red y de gastos. Registre cada sistema de IA con un responsable y un propósito.
2. **Clasifique por riesgo.** Defina unos pocos niveles de riesgo con ejemplos, como bajo (redactar texto interno), medio (respuestas orientadas al cliente) y alto (decisiones que afectan a derechos o seguridad de las personas). Vincule el nivel de revisión con el nivel de riesgo.
3. **Nombre un responsable para cada uso.** Una persona responsable por sistema, que firma la evaluación de riesgos y responde del rendimiento y los incidentes.
4. **Haga una política breve y clara.** Indique qué datos pueden ir a qué herramientas, qué usos necesitan aprobación, qué no debe hacerse nunca y a quién preguntar. Manténgala en unas pocas páginas y publique ejemplos.
5. **Ofrezca herramientas y vías aprobadas.** Si el personal no tiene una forma aprobada de usar la IA, usará formas no aprobadas. Ofrezca herramientas con los términos adecuados y una vía rápida de aprobación.
6. **Evalúe antes y pruebe después.** Haga una evaluación de riesgos proporcionada antes de que un uso entre en producción y pruebe con casos realistas, incluidas comprobaciones de sesgo y de mal uso. Repita tras los cambios importantes.
7. **Compruebe proveedores y términos.** Pregunte a los proveedores cómo usan sus datos, cómo prueban, cómo le informan de los cambios de modelo y qué ocurre con los datos al final. Registre las respuestas. Véase el Tema 3.14 — Gestión de Proveedores.
8. **Defina la supervisión humana en la práctica.** Para cada uso, diga quién revisa qué, con qué información y con qué frecuencia, y muestree las revisiones.
9. **Monitorice y gestione incidentes.** Siga los errores, las quejas, la deriva y los eventos de seguridad. Trate los incidentes de IA como otros incidentes y aprenda de ellos. Véase el Tema 3.2 — Gestión de Incidentes.
10. **Revise con regularidad y conserve los registros.** Vuelva a revisar el inventario y los niveles de riesgo al menos una vez al año y cuando cambien las leyes o los sistemas. Conserve la evidencia en un solo lugar.

## Preguntas para conversar con su equipo

**¿Dónde usamos hoy la IA, quién es responsable de cada uso y qué podría salir mal?**
Construyan un primer inventario. Esperen brechas, sobre todo en las funciones de proveedores y las herramientas personales. Después elijan los tres usos más arriesgados y asignen responsables.

**¿Cuáles de nuestros usos afectan al acceso, el dinero, la salud o el empleo de las personas y qué revisión reciben?**
Busquen los usos de mayor riesgo. Esperen incertidumbre sobre qué cuenta. Después involucren a asesores jurídicos y de privacidad en la clasificación.

**¿Qué datos ponen los empleados en las herramientas de IA y conocen las reglas?**
Pregunten de forma anónima si hace falta. Esperen sorpresas. Después acuerden una regla clara con ejemplos y ofrezcan una alternativa aprobada.

**¿Qué mostraríamos a un regulador o a un cliente que preguntara cómo controlamos nuestra IA?**
Reúnan lo que existe. Esperen un expediente escaso. Después elijan tres documentos para elaborar: el inventario, la política y una evaluación de riesgos.

**¿Cómo probamos los resultados injustos y qué grupos deberíamos mirar?**
Piensen en las personas afectadas por cada uso. Esperen que nadie lo haya probado. Después elijan un uso y diseñen una comparación sencilla entre grupos, con asesoramiento.

**¿Quién puede decir que no a un uso de IA y qué ocurre cuando lo dice?**
La gobernanza sin poder para detener es decorativa. Esperen respuestas poco claras. Después nombren al decisor de los usos de mayor riesgo y un nivel de servicio para las revisiones.

## En la práctica: un ejemplo de gestión de servicios

Una agencia nacional de seguridad social usa IA en varios lugares: un agente virtual de un proveedor en su sitio web público, una herramienta que resume las notas de los casos para los gestores, un asistente para desarrolladores usado por su personal de TI y un piloto que señala posibles errores en las solicitudes de prestaciones para su revisión. No existe un registro central, y la oficina de un ministro ha preguntado a la agencia cómo controla la IA.

El director de informática pide a la oficina de gestión de servicios que construya un inventario en seis semanas. Encuentra once usos, entre ellos dos que nadie en el departamento de TI conocía: una función de resumen de texto que un proveedor activó en el sistema de gestión de casos y una herramienta de transcripción usada por una oficina regional con cuentas personales. El equipo clasifica los usos por riesgo con la oficial de privacidad y el departamento jurídico. El piloto de señalamiento de solicitudes se clasifica como de alto riesgo, porque su salida podría llevar a una acción contra una persona; el resumen de notas de casos es medio; el asistente de desarrolladores es bajo, aunque plantea cuestiones de licencias.

Para cada uso se nombra un responsable. Para el piloto de solicitudes, el responsable encarga una evaluación de riesgos, que incluye una comparación de las tasas de señalamiento entre grupos y una regla según la cual a nadie se le deniega nunca una prestación solo por la salida de la herramienta. La herramienta de transcripción se detiene hasta encontrar una alternativa aprobada; a la oficina regional se le ofrece una herramienta aprobada por el proveedor bajo un contrato con términos de protección de datos. Una política de cuatro páginas fija reglas sobre datos y aprobaciones, y se promete una vía de revisión corta, de diez días hábiles, para los usos de riesgo medio.

Qué cambia: la agencia puede responder al ministerio con un inventario, una política y una evaluación de riesgos de su uso de mayor riesgo. Qué sigue siendo difícil: las funciones de proveedores activadas por defecto siguen apareciendo y la agencia no tiene una forma automática de descubrirlas; la comparación entre grupos está limitada por datos que la agencia quizá no pueda tener legalmente; y la promesa de diez días de la vía de revisión tensa a un equipo pequeño. La oficina planea una revisión trimestral de las funciones de proveedores y una solicitud de orientación jurídica sobre las pruebas.

## Cuatro perspectivas

### Equipos de producto y de entrega

Registren sus usos de IA, evalúen el riesgo pronto, prueben con casos realistas y adversarios y registren qué puede hacer el sistema. Incorporen una vía para que las personas impugnen los resultados y para que ustedes puedan apagarlo.

### Equipos de servicio y de operaciones

Monitoricen los sistemas de IA en producción, gestionen los incidentes e informen de errores y quejas. Sigan las reglas de datos e informen a los responsables de las nuevas funciones de IA que aparezcan en sus herramientas.

### Liderazgo y gobernanza

Patrocine el programa, nombre los derechos de decisión y financie el trabajo. Pida el inventario, los niveles de riesgo y la evidencia de las pruebas. No externalice la responsabilidad a proveedores ni a comités.

### Clientes y usuarios

Deberían informarle cuando se use IA de maneras que le importan, y usted debería poder llegar a una persona e impugnar decisiones. Pregunte cómo se usan sus datos e informe de los resultados que le parezcan erróneos o injustos.

## Ágil, IA, automatización y analítica

### Ágil

Ofrezca una revisión rápida y proporcionada con salvaguardas que los equipos puedan seguir, como herramientas aprobadas y una lista de comprobación breve para los usos de bajo riesgo. Itere la política con los equipos. Precaución: una revisión lenta y pesada empuja a los equipos a eludirla; mantenga rápida la vía de bajo riesgo.

### IA

La IA puede ayudar a redactar políticas, leer los términos de los proveedores y preparar evaluaciones de riesgos, con revisión jurídica y humana. Nombre también un responsable de ese uso. Precaución: un resumen de IA de una ley o de un contrato puede ser erróneo; no lo use nunca como base de una decisión de cumplimiento. Véase el Tema 5.1 — IA en la gestión de servicios.

### Automatización

Automatice las fuentes del inventario, las reglas de prevención de pérdida de datos, las aprobaciones de usos de bajo riesgo y el registro, con revisión de las excepciones. Precaución: el bloqueo automático puede empujar el trabajo a dispositivos personales; combínelo con alternativas aprobadas. Véase el Tema 6.1 — Estrategia de automatización.

### Analítica

Siga la proporción de usos de IA con responsables y evaluaciones, los incidentes, las quejas, los resultados de las pruebas y el tiempo de revisión. Precaución: los recuentos de evaluaciones completadas pueden premiar el papeleo; compruebe una muestra para ver su calidad y si los controles funcionan. Véanse el libro *Service Management Metrics* y el Tema 7.3 — Medición e informes.

## Modos de fallo habituales

- **Sin inventario.** Los usos se multiplican sin verse. Construya y actualice el inventario.
- **Revisión única para todo.** Se bloquea todo o no se revisa nada. Adapte la revisión al riesgo.
- **Política que nadie puede seguir.** El personal la ignora. Escriba reglas breves con ejemplos y ofrezca herramientas aprobadas.
- **Gobernanza como papeleo.** Existen documentos y no controles. Pruebe que los controles funcionan.
- **Confiar en las afirmaciones de los proveedores.** Los términos y el comportamiento no se comprueban. Pregunte, pruebe y registre.
- **Ignorar a las personas afectadas.** El sesgo y el daño pasan inadvertidos. Pruebe los resultados entre grupos y ofrezca una vía de impugnación.
- **Tratar el asesoramiento jurídico como algo que puede dar una IA.** Los resúmenes erróneos impulsan decisiones. Use asesores cualificados.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Inventario y responsabilidad | Usos desconocidos | Usos principales enumerados | Inventario con responsables y niveles de riesgo | Inventario revisado y verificado por descubrimiento | Inventario integrado con el catálogo, las compras y los controles |
| Riesgo y pruebas | Ad hoc | Algunas evaluaciones | Evaluación proporcionada y pruebas antes del lanzamiento | Resultados monitorizados y atendidos | Aseguramiento continuo entre sistemas y proveedores |
| Política y datos | Ninguna | Orientación en borrador | Política clara, herramientas aprobadas y reglas de datos | Cumplimiento monitorizado y auditado | Reglas aplicadas por herramientas y adaptadas al cambio |
| Supervisión y responsabilidad | Poco clara | Patrocinador designado | Roles definidos, vía de revisión y supervisión humana | Calidad de la supervisión muestreada | Gobernanza coordinada entre la empresa y los socios |

## Lista de verificación

- [ ] Mantenemos un inventario de IA con responsables y propósitos.
- [ ] Cada uso tiene un nivel de riesgo, con revisión proporcional a él.
- [ ] Una política breve cubre datos, aprobaciones y usos prohibidos.
- [ ] Existen herramientas aprobadas y una vía de revisión rápida.
- [ ] Los usos de mayor riesgo tienen una evaluación de riesgos registrada y pruebas, incluidas las de sesgo.
- [ ] Los términos de los proveedores sobre datos, pruebas y cambios de modelo están registrados.
- [ ] La supervisión humana está definida y muestreada.
- [ ] Hemos preguntado a asesores jurídicos y de privacidad por nuestras obligaciones.

## Prompts de IA

**Redacte una entrada de inventario a partir de notas.**

```text
Here are notes on an AI use: [paste].
Draft an inventory entry with: purpose, owner (only if stated), vendor or model (only if stated), data used, people affected, decisions it influences, and proposed risk level with the reasons. Mark each item not in the notes as [missing]. Do not state legal obligations.
List what you are unsure of.
```

**Prepare preguntas para un proveedor.**

```text
We are considering an AI product from a vendor for [use]. What we know of it: [paste].
Write 20 questions for the vendor about data use and retention, training on our data, testing for accuracy and bias, security, model changes, incident notification, and exit. Do not assume answers.
List what you are unsure of.
```

**Estructure una evaluación de riesgos para su revisión.**

```text
AI use: [describe]. People affected: [list]. Decisions influenced: [list]. Current controls: [list].
Draft a risk assessment table with: harm, who is affected, likelihood and severity (marked as my estimate to be confirmed), existing controls, further controls to consider, and questions for the owner. Do not give legal conclusions.
List what you are unsure of.
```

## Habilidades de IA

- [risk-register](../../../../skills/risk-register/SKILL.md): úsela para registrar los riesgos de la IA, los responsables y las decisiones.
- [machine-learning-model-card](../../../../skills/machine-learning-model-card/SKILL.md): úsela para documentar el propósito, los datos, el rendimiento y los límites de un modelo.
- [legal-data-privacy-compliance](../../../../skills/legal-data-privacy-compliance/SKILL.md): úsela para plantear las cuestiones de privacidad a su asesor jurídico.
- [legal-compliance-audit](../../../../skills/legal-compliance-audit/SKILL.md): úsela para preparar evidencia y preguntas para una auditoría.
- [data-governance](../../../../skills/data-governance/SKILL.md): úsela para fijar responsabilidad y reglas para los datos que usa la IA.

## Fuentes principales

- NIST, AI Risk Management Framework: un marco voluntario muy usado para gestionar los riesgos de la IA.
- ISO/IEC 42001 (el propio estándar): requisitos de un sistema de gestión de IA; lea la edición vigente del editor.
- El texto de la Ley de Inteligencia Artificial de la Unión Europea y la orientación de sus propios reguladores: fuentes autorizadas sobre las obligaciones legales.
- Wikipedia, "Regulation of artificial intelligence" y "Ethics of artificial intelligence": visiones generales del panorama.

## Referencias

1. Regulation of artificial intelligence — Wikipedia — https://en.wikipedia.org/wiki/Regulation_of_artificial_intelligence
2. Artificial Intelligence Act — Wikipedia — https://en.wikipedia.org/wiki/Artificial_Intelligence_Act
3. Ethics of artificial intelligence — Wikipedia — https://en.wikipedia.org/wiki/Ethics_of_artificial_intelligence
4. Algorithmic bias — Wikipedia — https://en.wikipedia.org/wiki/Algorithmic_bias
5. Fairness (machine learning) — Wikipedia — https://en.wikipedia.org/wiki/Fairness_(machine_learning)
6. General Data Protection Regulation — Wikipedia — https://en.wikipedia.org/wiki/General_Data_Protection_Regulation
7. Privacy impact assessment — Wikipedia — https://en.wikipedia.org/wiki/Privacy_impact_assessment
8. Governance, risk, and compliance — Wikipedia — https://en.wikipedia.org/wiki/Governance,_risk,_and_compliance
9. Risk management — Wikipedia — https://en.wikipedia.org/wiki/Risk_management
10. Red team — Wikipedia — https://en.wikipedia.org/wiki/Red_team
11. Explainable artificial intelligence — Wikipedia — https://en.wikipedia.org/wiki/Explainable_artificial_intelligence
12. AI Risk Management Framework — NIST — https://www.nist.gov/itl/ai-risk-management-framework
