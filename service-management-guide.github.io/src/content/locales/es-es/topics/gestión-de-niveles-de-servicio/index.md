# Gestión de Niveles de Servicio

**La gestión de niveles de servicio fija metas claras y medibles para los servicios junto con las personas que dependen de ellos, sigue el desempeño frente a esas metas y usa las brechas para mejorar; sus formas modernas añaden los acuerdos de nivel de experiencia y los objetivos de ingeniería al tradicional acuerdo de nivel de servicio.**

## Por qué importa

Los proveedores y los clientes tienen imágenes distintas de lo que significa «buen servicio». El proveedor piensa en la disponibilidad y en el cierre de tickets. El cliente piensa en si pudo terminar su trabajo. Sin una definición acordada, ambos pueden ser sinceros y ambos pueden estar descontentos: el proveedor señala un informe que muestra que se cumplieron todas las metas, y el cliente señala una semana de frustración.

La gestión de niveles de servicio cierra esa brecha. Inicia una conversación con el cliente sobre lo que necesita, convierte la respuesta en metas que pueden medirse y las informa de un modo que el cliente puede comprobar. La conversación importa más que el documento. Un acuerdo de nivel de servicio (SLA) escrito una vez y archivado da una falsa tranquilidad; uno revisado con regularidad, con datos reales y una discusión honesta de lo que no funciona, genera confianza.

La práctica moderna también afronta una crítica: las metas fijadas sobre medidas técnicas pueden estar todas en verde mientras los usuarios están descontentos. En respuesta, las organizaciones añaden medidas de experiencia, como los acuerdos de nivel de experiencia (XLA), y los equipos de ingeniería fijan objetivos de nivel de servicio (SLO) basados en lo que los usuarios notan. Este tema explica el vocabulario, cómo fijar metas y cómo mantenerlas útiles. Se conecta con la disponibilidad y la capacidad (Tema 3.11 — Disponibilidad, Capacidad y Rendimiento), la gestión de proveedores (Tema 3.14 — Gestión de Proveedores) y la medición (Tema 7.3 — Medición e informes).

## Conceptos clave

**Acuerdo de nivel de servicio (SLA).** En ITIL 4, un acuerdo documentado entre un proveedor de servicios y un cliente que identifica tanto los servicios requeridos como el nivel de servicio esperado. El artículo de Wikipedia sobre los acuerdos de nivel de servicio describe las partes comunes: una descripción del servicio, metas, medición, informes y qué ocurre si no se cumplen las metas. Los SLA pueden ser internos, entre un proveedor y su propia organización, o externos, en un contrato comercial.

**Meta de nivel de servicio.** Un compromiso específico y medible, como «el 99,9 por ciento de las solicitudes se completan en menos de dos segundos en un mes natural» o «los incidentes de prioridad uno se responden en 15 minutos». Cada meta define qué se mide, cómo, en qué periodo y en qué condiciones.

**Objetivo de nivel de servicio (SLO).** Una meta para un indicador de nivel de servicio (SLI), usada sobre todo por equipos de ingeniería, como parte de la práctica descrita en el Tema 2.6 — Ingeniería de Fiabilidad de Sitios. Los SLO suelen ser internos y más estrictos que el SLA externo, para que el equipo note los problemas antes de un incumplimiento. Wikipedia describe los objetivos de nivel de servicio.

**Acuerdo de nivel operativo (OLA).** Un acuerdo entre equipos internos que apoya la entrega de un servicio a un cliente. Por ejemplo, un equipo de redes podría acordar tiempos de respuesta con el equipo de servicio que respalda un SLA externo. Wikipedia describe los acuerdos de nivel operativo.

**Contrato de apoyo.** Un acuerdo con un proveedor externo que apoya la entrega de un servicio. Debe ser coherente con el SLA al que respalda. Si su SLA promete cuatro horas y el contrato de su proveedor permite ocho, la brecha es suya.

**Acuerdo de nivel de experiencia (XLA).** Una idea más reciente: acuerdos que se centran en cómo los usuarios experimentan el servicio, como lo bien que les ayudó a lograr sus metas, en lugar de medidas puramente técnicas. Los XLA suelen usar encuestas, medidas de sentimiento y observaciones además de datos del sistema. No hay una definición estándar única, así que escriba lo que usted quiere decir. Véase el Tema 7.7 — Analítica de experiencia y sentimiento.

**Qué hace buena a una meta.** Es significativa para el cliente, medible, basada en evidencia de lo que se puede lograr y acordada con las personas que dependen de ella. Indica el método de medición y las exclusiones, como el mantenimiento planificado. No promete lo que el proveedor no puede controlar.

**Promedios y percentiles.** Los promedios ocultan los peores casos. Una meta de «tiempo de respuesta medio inferior a un segundo» puede cumplirse aunque una de cada diez solicitudes tarde diez segundos. Los percentiles, descritos en Wikipedia, dan una imagen mejor: «el 95 por ciento de las solicitudes en menos de dos segundos». Elija el percentil según la experiencia que le importe.

**Disponibilidad y tiempo de actividad.** Una meta común, expresada como porcentaje del tiempo en que un servicio es utilizable. El artículo de Wikipedia sobre la disponibilidad describe el cálculo. Depende de lo que cuente como «utilizable»: un servicio puede estar activo y ser inutilizable. Defínalo desde el punto de vista del usuario.

**Penalizaciones y créditos.** Muchos SLA externos incluyen compensaciones, como créditos de servicio, si el proveedor no cumple una meta. Son una señal de seriedad, pero un mal sustituto del servicio: un crédito pequeño no ayuda a un cliente cuyo negocio se vio afectado. El artículo de Wikipedia sobre daños liquidados describe ideas contractuales relacionadas. Compruebe cómo funcionan las compensaciones en sus contratos y consulte asesoramiento jurídico donde haga falta; esta guía no lo ofrece.

**Informes.** Los informes regulares muestran los resultados frente a las metas, con explicaciones de los incumplimientos y acciones. Los informes son para la conversación, no solo para el registro. Incluya ejemplos y comentarios de usuarios junto con los números.

**Revisión.** Revise los SLA y las metas con los clientes a intervalos acordados, ajustándolos cuando cambien las necesidades o la tecnología. Retire las metas que nadie usa.

**Ley de Goodhart.** «Cuando una medida se convierte en una meta, deja de ser una buena medida». Wikipedia describe esta observación, atribuida al economista Charles Goodhart. La gente ajusta su comportamiento para cumplir el número, no el propósito. Los niveles de servicio invitan a ello: tickets cerrados antes de tiempo, incidentes reclasificados, relojes detenidos. Protéjase con muestras, medidas emparejadas y retroalimentación de los clientes. Véase el libro *Service Management Metrics*.

**Cómo encajan las lentes.** La gestión de niveles de servicio es donde la mejora ágil se encuentra con el acuerdo: revise las metas a menudo y ajústelas. La IA puede ayudar a analizar datos de desempeño y a redactar informes, bajo revisión. La automatización mide e informa con coherencia. La analítica muestra la relación entre las metas técnicas y la experiencia del usuario.

## Buenas prácticas

1. **Empiece por lo que necesita el cliente.** Pregunte qué no puede permitirse que falle y qué lentitud toleraría. Base las metas en esas respuestas, no en lo que es fácil de medir.
2. **Mantenga reducido el número de metas.** Un puñado de metas significativas por servicio es más fácil de entender y gestionar que decenas. Descarte las que nadie usa.
3. **Escriba cada meta con precisión.** Indique qué se mide, desde dónde, en qué periodo, qué se excluye y cómo se calcula el resultado. Pruebe la definición con los datos de un mes reciente.
4. **Use percentiles para la respuesta y el rendimiento.** Informe la proporción de casos que cumplen la meta y muestre los peores casos, no solo el promedio.
5. **Fije objetivos internos más estrictos que los acuerdos.** Dé a su equipo margen para actuar antes de un incumplimiento. Haga coherentes entre sí las metas internas y externas y los contratos con proveedores.
6. **Añada medidas de experiencia.** Junto a las metas técnicas, pregunte a los usuarios cómo les ayudó el servicio, con encuestas breves y observación. Muestree casos reales para ver lo que los números pasan por alto.
7. **Informe con contexto.** Presente los resultados en una reunión regular con el cliente, explique con honestidad los incumplimientos y acuerde acciones. Incluya algunos comentarios de usuarios.
8. **Protéjase de la manipulación.** Revise muestras de tickets e incidentes que hay detrás de los números, observe las tasas de reapertura y empareje las medidas de velocidad con medidas de calidad.
9. **Revise los acuerdos con regularidad.** Reúnase al menos una vez al año, y cuando cambie algo importante, para comprobar que las metas siguen correspondiendo a la necesidad y al costo. Cambie las metas abiertamente.
10. **Alinee a los proveedores.** Compruebe que el acuerdo de cada proveedor respalda las metas que usted promete y acuerde cómo se le informa de su desempeño. Véase el Tema 3.14 — Gestión de Proveedores.

## Preguntas para conversar con su equipo

**Si cumplimos todas las metas el mes pasado, ¿diría nuestro cliente que el servicio fue bueno?**
Esto prueba si las metas reflejan la experiencia. Espere un desajuste en algún punto. Pida una queja reciente que ninguna meta captó. Después elijan una nueva medida de experiencia.

**¿Qué metas nuestras no lee nadie y sobre cuáles discute todo el mundo?**
Esto encuentra medidas inútiles y controvertidas. Pregunte quién usa cada una para decidir. Después retiren una y aclaren otra.

**¿Qué prometemos a los clientes que dependa de un proveedor o de otro equipo y qué nos han prometido ellos?**
Esto prueba la coherencia entre acuerdos. Compare los números lado a lado. Espere brechas. Después elijan una brecha para cerrar, renegociando o cambiando nuestra promesa.

**¿Cómo podrían cumplirse nuestras metas sin ayudar al usuario?**
Imagine la manipulación: cerrar tickets antes de tiempo, detener relojes, estrechar definiciones. Pregunte si ocurre algo de eso. Después elijan una comprobación por muestreo para una meta.

**¿Quién asiste a nuestras reuniones de revisión del servicio y qué cambia después?**
Las reuniones sin acción son ritual. Pida la última lista de acciones. Después acuerden que cada revisión termine con un máximo de tres acciones con responsables.

**¿Dónde podría ayudar la IA a analizar datos de niveles de servicio o a redactar informes y qué debe comprobar una persona?**
La IA puede resumir tendencias y redactar explicaciones. También puede afirmar causas sin evidencia. Pregunte quién revisa el borrador frente a los datos. Después prueben resúmenes redactados por IA para uso interno, con una persona que los apruebe.

## En la práctica: un ejemplo de gestión de servicios

El departamento de TI de una empresa regional de agua da soporte a 800 empleados de oficina y 300 cuadrillas de campo. El SLA del sistema de órdenes de trabajo promete 99,5 por ciento de disponibilidad y una respuesta de cuatro horas para los incidentes de prioridad uno. Los informes muestran todas las metas cumplidas durante dos años. Aun así, las cuadrillas de campo llaman «poco fiable» al sistema, y el jefe de operaciones exige un SLA mejor.

La gerente de servicios se reúne con los jefes de cuadrilla y pregunta qué significa «poco fiable». Dicen que el sistema está activo pero muy lento a primera hora de la mañana, cuando las cuadrillas empiezan a trabajar, y que no sincroniza cuando tienen mala cobertura móvil. Nada de eso queda reflejado: la disponibilidad se mide con una comprobación desde el centro de datos a intervalos de cinco minutos, y las metas de respuesta se aplican solo a los tickets que levantan las cuadrillas, lo que rara vez hacen porque suponen que no se hará nada.

La gerente propone cambios. El equipo añade un SLI basado en transacciones reales de usuarios: el 95 por ciento de los guardados de órdenes de trabajo se completan en tres segundos, medido por separado para el periodo de 6 a 8 de la mañana. Añade una breve encuesta mensual de pulso para las cuadrillas, con dos preguntas sobre si el sistema les ayudó a terminar el trabajo y qué se interpuso. Y fija un SLO interno más estricto que el SLA, para que el equipo vea la lentitud de primera hora antes que las cuadrillas. El jefe de operaciones acepta revisar las metas con representantes de las cuadrillas cada trimestre.

Qué cambia: los datos del primer mes muestran con claridad la lentitud de primera hora, y un ajuste de la base de datos corrige buena parte. Qué sigue siendo difícil: los fallos de sincronización dependen de una cobertura móvil que la empresa no controla; la encuesta tiene una tasa de respuesta de alrededor de un tercio; y el nuevo SLI no está en el contrato, por lo que los informes al equipo ejecutivo llevan ahora dos conjuntos de números. La gerente conserva ambos y propone incorporar las nuevas medidas al SLA en la próxima renovación.

## Cuatro perspectivas

### Equipos de producto y de entrega

Definan indicadores y objetivos con las personas que operan y usan el servicio, e integren las mediciones en el producto. Traten una meta incumplida como un estímulo para mirar el diseño, no solo las operaciones.

### Equipos de servicio y de operaciones

Conozcan las metas y cómo se miden. Vigilen la manipulación, informen con honestidad y lleven a las reuniones de revisión ejemplos de lo que los números pasan por alto. Usen los objetivos internos para actuar pronto.

### Liderazgo y gobernanza

Pregunte si las metas reflejan lo que necesitan los clientes y si son coherentes con los contratos de proveedores. Mire distribuciones y muestras, no solo los porcentajes principales. Evite premiar o castigar a los equipos por números aislados.

### Clientes y usuarios

Diga qué es lo que más le importa y qué puede tolerar. Participe en las revisiones. Si todos los informes están en verde y usted está descontento, dígaselo al proveedor y dé ejemplos.

## Ágil, IA, automatización y analítica

### Ágil

Revise y ajuste las metas con regularidad junto con los clientes, en pasos pequeños, y use los incumplimientos como retroalimentación para mejorar. Precaución: las metas que cambian cada mes confunden a todos; mantenga un núcleo estable y cámbielo de forma deliberada.

### IA

La IA puede analizar datos de desempeño, redactar informes y sugerir causas de los incumplimientos, con una persona responsable de las conclusiones. Nombre un responsable para cada uso. Precaución: las explicaciones de la IA sobre los incumplimientos pueden sonar autorizadas sin evidencia; pídale que cite los datos que usó. Véase el Tema 5.1 — IA en la gestión de servicios.

### Automatización

Automatice la medición a partir de transacciones reales, los informes y las alertas de riesgo de incumplimiento, con un cálculo transparente. Precaución: la medición automatizada puede ocultar errores de definición; muestree con regularidad los datos en bruto y el cálculo. Véase el Tema 6.2 — Automatización y orquestación de flujos de trabajo.

### Analítica

Combine medidas técnicas, como los percentiles del tiempo de respuesta, con datos de experiencia, como los resultados de encuestas y las quejas. Precaución: las encuestas proceden de quienes responden y toda medida puede manipularse una vez que es una meta; use varias fuentes y muestree casos. Véanse el Tema 7.7 — Analítica de experiencia y sentimiento y el libro *Service Management Metrics*.

## Modos de fallo habituales

- **Todo en verde y los clientes descontentos.** Las medidas pasan por alto la experiencia. Añada indicadores basados en el usuario y muestras.
- **Demasiadas metas.** Nadie las lee. Conserve unas pocas que importen.
- **Solo promedios.** Los peores casos quedan ocultos. Use percentiles y muestre los valores atípicos.
- **Manipulación.** Relojes detenidos, tickets cerrados antes de tiempo. Muestree y empareje medidas.
- **Acuerdos incoherentes.** Las promesas superan lo que entregan los proveedores. Alinee las metas internas y externas.
- **El SLA como arma.** Las reuniones discuten créditos. Céntrese en la mejora y el entendimiento compartido.
- **Nunca revisado.** Las metas envejecen. Revise a intervalos acordados.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Metas | Técnicas, sin revisar | Algunas metas basadas en el cliente | Metas fijadas con los clientes y definidas con precisión | Metas revisadas frente a datos y experiencia | Metas coordinadas entre servicios y socios |
| Medición | Manual | Algo de automatización | Medida a partir de transacciones de usuarios donde es posible | Medición validada y muestreada | Medición automatizada y transparente a lo largo de la cadena |
| Experiencia | No se mide | Encuestas ad hoc | Medidas de experiencia junto a las técnicas | Experiencia vinculada con mejoras | La experiencia impulsa los acuerdos entre servicios |
| Revisión | Rara | Anual | Revisiones regulares con acciones | Revisiones seguidas por sus resultados | Revisiones integradas con la planificación y los proveedores |

## Lista de verificación

- [ ] Las metas se basan en lo que necesitan los clientes y se acuerdan con ellos.
- [ ] Cada meta está definida con precisión y probada con datos reales.
- [ ] Usamos percentiles para las metas de respuesta y rendimiento.
- [ ] Los objetivos internos son más estrictos que los acuerdos externos.
- [ ] Los contratos con proveedores respaldan las metas que prometemos.
- [ ] Medimos la experiencia además del desempeño técnico.
- [ ] Muestreamos los casos que hay detrás de los números para detectar manipulación.
- [ ] Revisamos los acuerdos al menos una vez al año y tras cambios importantes.

## Prompts de IA

**Compruebe la definición de una meta.**

```text
Here is a service level target as written: [paste]. Here is a month of raw data: [paste summary].
List what is unclear in the wording, compute the result in two different reasonable ways showing your steps, and note where the answers differ. Do not recommend a new target.
List what you are unsure of.
```

**Encuentre lo que los números pasan por alto.**

```text
Our targets: [list]. Here are user complaints from the last quarter: [paste, personal data removed].
List complaints that no target would have detected, quote each briefly, and suggest one possible measure for each. Do not claim the measures would work.
List what you are unsure of.
```

**Prepare una revisión del servicio.**

```text
Here are this month's results against targets: [paste]. Here are notable incidents and user comments: [paste].
Draft an agenda and five questions to discuss with the customer, including one about what the numbers do not show. Do not explain causes that are not in the material.
List what you are unsure of.
```

## Habilidades de IA

- [service-level-agreement](../../../../skills/service-level-agreement/SKILL.md): úsela para redactar y revisar acuerdos y metas.
- [key-risk-indicators](../../../../skills/key-risk-indicators/SKILL.md): úsela para elegir indicadores que avisen pronto.
- [survey-design](../../../../skills/survey-design/SKILL.md): úsela para diseñar medidas de experiencia.
- [vendor-management](../../../../skills/vendor-management/SKILL.md): úsela para alinear los acuerdos con proveedores con sus metas.

## Fuentes principales

- PeopleCert, páginas de certificación ITIL: la descripción del propietario de la práctica de gestión de niveles de servicio.
- Betsy Beyer y otros (eds.), *Site Reliability Engineering* (2016), capítulo sobre objetivos de nivel de servicio, gratis en sre.google.
- Wikipedia, "Service-level agreement" y "Service-level objective": visiones generales de los términos.
- Wikipedia, "Goodhart's law": una advertencia sobre el uso de medidas como metas.

## Referencias

1. Service-level agreement — Wikipedia — https://en.wikipedia.org/wiki/Service-level_agreement
2. Service-level objective — Wikipedia — https://en.wikipedia.org/wiki/Service-level_objective
3. Operational-level agreement — Wikipedia — https://en.wikipedia.org/wiki/Operational-level_agreement
4. Percentile — Wikipedia — https://en.wikipedia.org/wiki/Percentile
5. Availability — Wikipedia — https://en.wikipedia.org/wiki/Availability
6. Goodhart's law — Wikipedia — https://en.wikipedia.org/wiki/Goodhart%27s_law
7. Liquidated damages — Wikipedia — https://en.wikipedia.org/wiki/Liquidated_damages
8. Customer satisfaction — Wikipedia — https://en.wikipedia.org/wiki/Customer_satisfaction
9. Net promoter score — Wikipedia — https://en.wikipedia.org/wiki/Net_promoter_score
10. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
