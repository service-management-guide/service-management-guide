# Gestión de servicios sostenible y responsable

**La gestión de servicios responsable cuenta los costos ambientales, sociales y éticos de operar servicios, incluidos la energía de la nube y de la IA, los residuos electrónicos, la accesibilidad y el trato justo a las personas; funciona midiendo lo que se puede con incertidumbre declarada, eligiendo opciones de menor impacto donde cuestan poco y no confundiendo una afirmación con un resultado.**

## Por qué importa

Los servicios digitales parecen ingrávidos. Sale una solicitud, vuelve una respuesta y nada parece consumirse. Detrás hay centros de datos que consumen electricidad y agua, dispositivos fabricados con materiales extraídos, redes que funcionan día y noche y, cada vez más, grandes cargas de trabajo de IA que consumen más energía que las tareas que sustituyen. La huella del sector es grande y crece, y se pide a las organizaciones, por parte de clientes, reguladores, personal y sus propias juntas, que digan cuál es la suya y qué hacen al respecto.

El medio ambiente es solo una parte del asunto. Los servicios también afectan a las personas. Un portal inaccesible deja fuera a los usuarios con discapacidad. Un modelo de soporte que supone que todos tienen internet rápido falla a quienes no la tienen. Una herramienta de IA entrenada con datos estrechos trata peor a algunos grupos. Un modelo de guardia que agota a los ingenieros es un costo social que soportan quienes operan el servicio. La gestión de servicios responsable se pregunta por todo esto, no como ocurrencia tardía sino como parte de cómo se diseñan, se compran y se operan los servicios.

Es un campo en el que las afirmaciones van por delante de la evidencia. Wikipedia describe el lavado verde (greenwashing), la práctica de hacer afirmaciones engañosas sobre beneficios ambientales, y es común en el marketing tecnológico. Las mediciones son a menudo estimaciones con gran incertidumbre. Un ahorro en un lugar puede trasladar un costo a otro, y las ganancias de eficiencia pueden verse compensadas por un mayor uso, un patrón que Wikipedia describe como efecto rebote, o paradoja de Jevons. Este tema ofrece un enfoque práctico: conozca sus impactos principales, mida con honestidad, actúe donde el efecto es mayor y el costo menor, y sea cuidadoso con lo que afirma. Se conecta con el hardware (Tema 4.3 — Gestión de Activos de Hardware), las finanzas (Tema 4.5 — Gestión financiera y FinOps), la gobernanza de la IA (Tema 5.6 — Gobernanza, riesgo y cumplimiento de la IA) y la gobernanza (Tema 8.1 — Gobernanza, Riesgo y Cumplimiento). No ofrece asesoramiento jurídico; las obligaciones de informar difieren según el lugar.

## Conceptos clave

**Sostenibilidad.** Satisfacer las necesidades presentes sin comprometer la capacidad de las generaciones futuras de satisfacer las suyas, en la frase común. Wikipedia describe la sostenibilidad con dimensiones ambiental, social y económica. En la gestión de servicios significa operar servicios de maneras que no impongan costos injustificados al medio ambiente, a las personas ni a las opciones futuras.

**Ambiental, social y de gobernanza (ESG).** Un marco que organizaciones e inversores usan para evaluar el desempeño no financiero. Wikipedia describe el ESG. Los requisitos de información evolucionan rápidamente en muchas jurisdicciones. Su organización puede pedir datos a los equipos de servicio. Compruebe qué aplica y conserve registros que pueda defender.

**Huella de carbono y emisiones.** Las emisiones de gases de efecto invernadero causadas por una actividad, expresadas normalmente en dióxido de carbono equivalente. Wikipedia describe las huellas de carbono y los gases de efecto invernadero. La contabilidad del carbono suele distinguir las emisiones de las operaciones propias, de la energía comprada y de la cadena de valor más amplia, incluida la fabricación de dispositivos y el uso de servicios de proveedores, que a menudo son la mayor parte y la más difícil de medir. Wikipedia describe la contabilidad del carbono y estas categorías.

**Impacto incorporado y operativo.** El impacto incorporado es lo que se usa para fabricar y transportar un dispositivo o construir una instalación; el impacto operativo es lo que se usa mientras funciona. En los dispositivos de usuario final, el impacto incorporado suele ser la mayor parte de las emisiones durante la vida útil. Wikipedia describe la energía incorporada. En los centros de datos suele dominar la operación, sobre todo la electricidad. Entender cuál se aplica orienta la acción. Véase el Tema 4.3 — Gestión de Activos de Hardware.

**Energía y centros de datos.** Los centros de datos usan electricidad para computar y para refrigerar. Wikipedia describe los centros de datos y la eficiencia en el uso de la energía (PUE), una razón entre la energía total de la instalación y la energía usada por el equipo informático. Un PUE bajo no significa bajas emisiones; también importa la intensidad de carbono de la electricidad, así como lo plenamente que se use el equipo. Los servidores inactivos siguen consumiendo energía.

**Nube e infraestructura compartida.** Los grandes proveedores de nube suelen operar con más eficiencia que las salas pequeñas locales y pueden comprar energía renovable a escala. También hacen fácil consumir más. Wikipedia describe la computación en la nube en general. Pida a los proveedores datos de emisiones por región y servicio y trate sus cifras como estimaciones con métodos declarados. Pasar a la nube no hace por sí solo más verde un servicio.

**IA y energía.** Entrenar y ejecutar modelos grandes puede consumir mucha energía y, en algunos casos, agua para refrigeración. El impacto depende del tamaño del modelo, de la frecuencia de uso y de dónde se ejecuta. El uso frecuente de modelos grandes para tareas que un método simple podría hacer desperdicia recursos. Véase el Tema 5.8 — Modelo operativo y habilidades de IA. Trate con cautela las cifras publicadas, ya que los métodos y el alcance varían.

**Software y operaciones eficientes.** El código eficiente, los recursos del tamaño adecuado, apagar los entornos inactivos, programar el trabajo flexible cuando la electricidad es más limpia y reducir el almacenamiento y la transferencia de datos innecesarios reducen el impacto y normalmente también el costo. Wikipedia describe la informática verde y la práctica de diseñar para un menor impacto ambiental. Véase el Tema 4.5 — Gestión financiera y FinOps, donde los ahorros de costo y de emisiones suelen coincidir.

**Residuos electrónicos y economía circular.** Los aparatos electrónicos desechados contienen materiales valiosos y peligros. Wikipedia describe los residuos electrónicos y el enfoque de economía circular, que mantiene los materiales en uso mediante la reutilización, la reparación y el reciclaje. Una vida más larga de los dispositivos, la reparación, el reacondicionamiento y el reciclaje responsable reducen los residuos. Véase el Tema 4.3 — Gestión de Activos de Hardware. El movimiento del derecho a reparar, que Wikipedia describe, aboga por dispositivos que puedan repararse.

**Pensamiento de ciclo de vida.** Considerar todas las etapas de un producto o servicio, desde los materiales hasta la eliminación. Wikipedia describe el análisis del ciclo de vida. Protege contra el traslado del impacto de una etapa a otra, como ahorrar energía en el uso con un dispositivo que necesita más recursos para fabricarse.

**Efectos rebote.** La eficiencia puede llevar a un mayor uso, que anula la ganancia. Wikipedia lo describe bajo el efecto rebote y la paradoja de Jevons. Si un cómputo más barato lleva a mucho más cómputo, el impacto total puede subir. Fije metas absolutas además de metas de eficiencia.

**Accesibilidad e inclusión.** Los servicios deben poder usarlos personas con distintas capacidades, dispositivos, idiomas y conectividad. Wikipedia describe la accesibilidad, el diseño inclusivo y la brecha digital. Estándares como las Pautas de Accesibilidad para el Contenido Web fijan una base para el contenido web. Las leyes de muchos lugares exigen accesibilidad. Incluya a los usuarios con discapacidad en el diseño y las pruebas y mantenga rutas no digitales.

**Equidad y ética.** Los servicios y los sistemas de IA deben tratar a las personas con justicia y ser abiertos sobre cómo funcionan. Wikipedia describe el sesgo algorítmico y la ética de la inteligencia artificial. Véase el Tema 5.6 — Gobernanza, riesgo y cumplimiento de la IA.

**Personas y carga de trabajo.** Las personas que operan los servicios son partes interesadas. Una guardia sostenible, horarios razonables, condiciones de trabajo seguras y un trato justo al personal de los proveedores forman parte de la práctica responsable. Véase el Tema 2.10 — Gestión ágil y aprendizaje.

**Compras responsables.** Elegir proveedores por sus prácticas ambientales y sociales además de por el precio. Wikipedia describe las compras sostenibles. Pida evidencia, como datos de emisiones publicados y políticas de reparación, y compruebe las afirmaciones. Véase el Tema 3.14 — Gestión de Proveedores.

**Honestidad en la medición.** Muchas cifras en esta área son estimaciones. Declare el método, el alcance y la incertidumbre. Cuídese de las comparaciones que usan límites distintos. Evite afirmaciones como «neutro en carbono» sin una base clara y verificable, ya que el relato de Wikipedia sobre el lavado verde muestra cómo tales afirmaciones engañan.

**Responsabilidad corporativa.** Las organizaciones publican cada vez más compromisos. Wikipedia describe la responsabilidad social corporativa. Los equipos de servicio aportan datos y toman decisiones que determinan si se cumplen los compromisos.

**Cómo encajan las lentes.** La sostenibilidad se aplica a las cuatro. La práctica ágil sugiere experimentos pequeños y medidos para reducir el desperdicio. La IA es a la vez una fuente de impacto y una herramienta para encontrar ahorros. La automatización puede apagar recursos inactivos y programar trabajo. La analítica mide el impacto con incertidumbre declarada.

## Buenas prácticas

1. **Encuentre sus mayores impactos.** Estime dónde están los mayores efectos ambientales y sociales de sus servicios: dispositivos, uso de nube y centros de datos, cargas de IA, viajes y las personas que operan los servicios. Empiece donde el potencial sea mayor.
2. **Mida con métodos declarados.** Use datos de proveedores y factores de conversión estándar, registre el alcance y los supuestos y muestre la incertidumbre. Mejore los datos con el tiempo.
3. **Recorte el desperdicio que también recorta costos.** Apague los entornos inactivos, ajuste el tamaño de los recursos, elimine datos innecesarios y consolide los sistemas infrautilizados. A menudo se pagan solos.
4. **Alargue la vida de los dispositivos.** Repare, actualice y reutilice antes de sustituir, y elija equipos reparables y duraderos. Deseche por canales responsables con borrado de datos.
5. **Elija dónde y cuándo ejecuta.** Donde tenga la opción, use regiones y horas con electricidad más limpia y pida datos a los proveedores. Evite traslados que aumenten el impacto en otra parte.
6. **Use la IA de forma proporcionada.** Ajuste el tamaño del modelo y la frecuencia de uso al valor. Use métodos simples donde lo hagan igual de bien. Siga el costo y, donde se pueda, la energía de las cargas de IA.
7. **Diseñe y pruebe la accesibilidad.** Siga los estándares de accesibilidad, pruebe con usuarios de distintas necesidades y mantenga rutas alternativas. Incluya la accesibilidad en la definición de terminado.
8. **Compruebe la equidad y la ética.** Revise los servicios y los usos de la IA en busca de efectos injustos, pruebe entre grupos y dé a la gente una forma de impugnar las decisiones.
9. **Cuide a quienes operan los servicios.** Mantenga sostenibles la carga de trabajo y las guardias y trate con justicia al personal de los proveedores. Cuente el agotamiento como un costo.
10. **Sea honesto en las afirmaciones.** Diga qué midió, cómo y qué no sabe. Evite declaraciones vagas o no verificables y haga revisar las afirmaciones antes de publicarlas.

## Preguntas para conversar con su equipo

**¿Dónde está el mayor impacto ambiental de nuestros servicios y cómo lo sabemos?**
Miren dispositivos, nube, IA e instalaciones. Esperen falta de datos y supuestos fuertes. Después elijan un área para estimar con un método declarado.

**¿Cuáles de nuestros sistemas o entornos funcionan todo el tiempo y podrían apagarse o reducirse?**
Comprueben desarrollo y pruebas. Esperen que haya inactivos. Después programen apagados para un entorno y registren el ahorro.

**¿Cuánto tiempo conservamos los dispositivos y qué nos impide conservarlos más tiempo o repararlos?**
Pregunten por la política y el hábito. Esperen renovación por calendario. Después prueben una vida más larga para un grupo.

**¿Quién no puede usar nuestros servicios tal como están diseñados y cómo lo sabemos?**
Piensen en discapacidad, idioma, conectividad y confianza. Esperen que algunos grupos no se probaran. Después observen a unos cuantos usuarios de esos grupos.

**¿Qué usos de la IA hemos adoptado donde bastaría un método más simple y qué cuestan en recursos?**
Revisen la lista. Esperen que algunos sean de moda. Después comparen un uso de la IA con una alternativa simple en calidad y costo.

**¿Qué afirmaciones hemos hecho, o nos han pedido hacer, sobre sostenibilidad y podemos respaldar cada una?**
Reúnanlas. Esperen algunas que no puedan verificarse. Después revisen cada una con las personas que tienen los datos.

## En la práctica: un ejemplo de gestión de servicios

El departamento de TI de una biblioteca nacional ha recibido la petición del ministerio del que depende de informar sobre el impacto ambiental de sus servicios digitales y proponer reducciones. El departamento tiene 400 empleados, 6.000 dispositivos en 300 sedes, un catálogo alojado en la nube y un reciente asistente de búsqueda con IA.

La gerente del servicio empieza estimando las fuentes principales. Para los dispositivos, los registros de compras y de activos muestran 4.800 portátiles y equipos de sobremesa, con una antigüedad media de 4,1 años. Con cifras de ciclo de vida publicadas por los fabricantes, que anota como estimaciones, juzga que el impacto incorporado de los dispositivos comprados en el año es el mayor elemento individual. Para la nube, el panel de emisiones del proveedor da una estimación mensual por región, que registra con el método declarado por el proveedor. El uso del asistente de IA es pequeño comparado con otros elementos, pero crece, y el proveedor no da datos de energía.

Propone cuatro acciones. Alargar el ciclo de sustitución de portátiles de cuatro a cinco años donde los datos de estado lo permitan, con reparación de baterías y almacenamiento. Apagar los entornos de desarrollo y pruebas por la noche y los fines de semana, lo que también ahorra alrededor de una quinta parte del costo de la nube. Trasladar una carga por lotes a una región con una red de menor carbono, tras comprobar que la latencia es aceptable. Y pedir al proveedor de IA datos de energía y de agua y fijar una regla por la que el asistente se use solo para preguntas abiertas, con búsqueda simple para elementos conocidos.

En el aspecto social, el departamento encarga una prueba de accesibilidad del portal con cinco empleados y usuarios de la biblioteca que usan lectores de pantalla y uno que usa control por voz. Descubre que el formulario de reservas no puede completarse solo con el teclado, y el equipo lo corrige. También revisa el calendario de guardias, que a veces tiene a dos ingenieros cubriendo 24 horas; añade un tercero.

Qué cambia: el ministerio recibe un primer informe con métodos y rangos, y el departamento tiene cuatro acciones con seguimiento. Qué sigue siendo difícil: las cifras de impacto incorporado se basan en promedios de fabricantes y no pueden verificarse; el proveedor no ha dado datos de energía; una afirmación ambiental en un borrador de nota de prensa («un servicio digital neutro en carbono») se retira porque el departamento no puede respaldarla; y el ciclo de sustitución más largo aumenta el esfuerzo de soporte de los dispositivos más antiguos. La gerente informa de las incertidumbres y planea una revisión del costo de soporte.

## Cuatro perspectivas

### Equipos de producto y de entrega

Diseñen para la eficiencia y la accesibilidad: páginas ligeras, consultas eficientes, recursos del tamaño adecuado y soporte de teclado y lector de pantalla. Elijan los métodos de IA en proporción a la necesidad y prueben con usuarios diversos.

### Equipos de servicio y de operaciones

Apaguen lo que esté inactivo, reparen y reutilicen dispositivos, registren datos de energía y de residuos y mantengan sostenibles las guardias. Digan a los responsables dónde es mayor el impacto.

### Liderazgo y gobernanza

Fije metas con objetivos absolutos y medición honesta, y financie el trabajo. Revise las afirmaciones antes de publicarlas. Incluya a las personas, no solo el carbono, en lo que cuenta.

### Clientes y usuarios

Debería poder usar los servicios sea cual sea su capacidad o su conexión, y esperar información honesta sobre su impacto. Diga a los proveedores lo que no le funciona y lo que le gustaría ver.

## Ágil, IA, automatización y analítica

### Ágil

Pruebe cambios pequeños, como apagados programados o una página más ligera, mida el efecto y conserve lo que funciona. Incluya en las revisiones a usuarios con distintas necesidades. Precaución: no ejecute un gran «programa verde» sin medidas; elija acciones con evidencia.

### IA

La IA puede ayudar a encontrar recursos inactivos, analizar datos de uso y de energía y comprobar diseños en busca de problemas de accesibilidad, bajo revisión. La propia IA tiene una huella ambiental y riesgos de sesgo. Precaución: no afirme que la IA ahorra energía sin compararla con la energía que usa; mida ambas. Véase el Tema 5.8 — Modelo operativo y habilidades de IA.

### Automatización

Automatice el apagado de entornos inactivos, la programación de cargas flexibles y la limpieza de datos sin uso, con responsables y salvaguardas. Precaución: el borrado automático puede eliminar datos necesarios; use reglas de conservación y revisión. Véase el Tema 6.1 — Estrategia de automatización.

### Analítica

Reúna energía, estimaciones de emisiones, antigüedad de los dispositivos y datos de fallos, uso de la nube y resultados de pruebas de accesibilidad, con el método y la incertidumbre declarados. Precaución: las cifras de emisiones varían mucho según el método, y las mejoras puntuales pueden anularse con el crecimiento; siga los totales absolutos y las tendencias. Véanse el Tema 7.3 — Medición e informes y el libro *Service Management Metrics*.

## Modos de fallo habituales

- **Afirmaciones sin evidencia.** Declaraciones como «neutro en carbono» no pueden respaldarse. Declare métodos y límites y revise las afirmaciones.
- **Trasladar el problema.** El impacto pasa a otra etapa u otro proveedor. Piense en ciclos de vida.
- **Eficiencia sin límites.** Los ahorros se compensan con más uso. Fije metas absolutas.
- **Accesibilidad como ocurrencia tardía.** Algunos usuarios quedan excluidos. Intégrela y pruébela desde el principio.
- **IA sobredimensionada.** Modelos grandes hacen tareas simples. Ajuste el método a la necesidad.
- **Ignorar a quienes operan los servicios.** Aumentan el agotamiento y la rotación. Trate la carga de trabajo como parte de la sostenibilidad.
- **Sin datos.** Las decisiones descansan en conjeturas. Reúna lo que pueda, con incertidumbre.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Medición | Ninguna | Estimaciones aproximadas | Impactos principales estimados con métodos declarados | Datos mejorados y seguidos frente a las metas | Datos de impacto integrados con costos, planificación y proveedores |
| Acción | Ad hoc | Algunos ahorros | Prácticas estándar: apagado, ajuste de tamaño, vida de los dispositivos | Acciones seguidas y revisadas | Impacto integrado en el diseño, las compras y las operaciones |
| Inclusión y ética | No considerada | Conciencia | Revisiones estándar de accesibilidad y equidad | Resultados medidos entre grupos | Diseño inclusivo y equidad integrados en todos los servicios |
| Honestidad | Afirmaciones sin comprobar | Conciencia | Afirmaciones revisadas frente a la evidencia | Afirmaciones auditadas | Informes transparentes con aseguramiento independiente |

## Lista de verificación

- [ ] Estimamos nuestros principales impactos ambientales con métodos declarados.
- [ ] Apagamos o reducimos los entornos inactivos.
- [ ] Reparamos, reutilizamos y alargamos la vida de los dispositivos y desechamos con responsabilidad.
- [ ] Pedimos a los proveedores datos de emisiones y de energía y registramos sus métodos.
- [ ] Los usos de la IA son proporcionados, con el costo y, donde sea posible, la energía registrados.
- [ ] Los servicios se prueban en cuanto a accesibilidad con usuarios reales.
- [ ] Las guardias y la carga de trabajo son sostenibles.
- [ ] Las afirmaciones de sostenibilidad se revisan frente a la evidencia antes de publicarse.

## Prompts de IA

**Estructure una estimación de impacto.**

```text
Here are our facts: number and age of devices [paste], cloud usage by region [paste], AI usage [paste], and any supplier emissions data [paste].
Draft a table of impact sources, the data we have for each, the missing data, the method we could use, and the main uncertainty. Do not invent emission factors or figures.
List what you are unsure of.
```

**Revise una afirmación de sostenibilidad.**

```text
Here is a draft statement about our service's environmental impact: [paste]. Here is the evidence we have: [paste].
For each claim, say whether the evidence supports it, partly supports it, or does not, quoting the text, and list what is missing. Do not rewrite the claim.
List what you are unsure of.
```

**Planifique una prueba de accesibilidad.**

```text
Our service: [describe]. Our users: [groups]. Known issues: [list].
Draft a test plan with tasks real users would attempt, the assistive technologies and devices to include, what to record, and how to report results. Do not claim any standard is met.
List what you are unsure of.
```

## Habilidades de IA

- [roi-analysis](../../../../skills/roi-analysis/SKILL.md): úsela para sopesar el costo y el beneficio de las opciones que reducen el impacto.
- [stakeholder-analysis](../../../../skills/stakeholder-analysis/SKILL.md): úsela para identificar a quién afecta y quién falta.
- [risk-register](../../../../skills/risk-register/SKILL.md): úsela para registrar riesgos ambientales y sociales con responsables.
- [capacity-planning](../../../../skills/capacity-planning/SKILL.md): úsela para ajustar el tamaño de los recursos.
- [vendor-management](../../../../skills/vendor-management/SKILL.md): úsela para pedir datos y compromisos a los proveedores.

## Fuentes principales

- The Green Software Foundation (greensoftware.foundation): guías y estándares de la comunidad sobre software y carbono.
- W3C, Web Content Accessibility Guidelines (WCAG): el estándar internacional de contenido web accesible.
- Wikipedia, "Sustainability" y "Greenwashing": visiones generales del campo y del principal peligro de las afirmaciones.
- Wikipedia, "Electronic waste" y "Circular economy": antecedentes sobre dispositivos y materiales.

## Referencias

1. Sustainability — Wikipedia — https://en.wikipedia.org/wiki/Sustainability
2. Environmental, social, and governance — Wikipedia — https://en.wikipedia.org/wiki/Environmental,_social,_and_governance
3. Carbon footprint — Wikipedia — https://en.wikipedia.org/wiki/Carbon_footprint
4. Carbon accounting — Wikipedia — https://en.wikipedia.org/wiki/Carbon_accounting
5. Green computing — Wikipedia — https://en.wikipedia.org/wiki/Green_computing
6. Data center — Wikipedia — https://en.wikipedia.org/wiki/Data_center
7. Power usage effectiveness — Wikipedia — https://en.wikipedia.org/wiki/Power_usage_effectiveness
8. Electronic waste — Wikipedia — https://en.wikipedia.org/wiki/Electronic_waste
9. Circular economy — Wikipedia — https://en.wikipedia.org/wiki/Circular_economy
10. Greenwashing — Wikipedia — https://en.wikipedia.org/wiki/Greenwashing
11. Rebound effect (conservation) — Wikipedia — https://en.wikipedia.org/wiki/Rebound_effect_(conservation)
12. Accessibility — Wikipedia — https://en.wikipedia.org/wiki/Accessibility
