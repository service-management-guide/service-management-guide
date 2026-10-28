# El Manifiesto Ágil y sus principios

**Los cuatro valores y los doce principios del Manifiesto Ágil se escribieron en 2001 para equipos de software y se trasladan a la operación de servicios en producción cuando se leen como un llamado a la participación continua de las partes interesadas, la mejora continua y la entrega continua de cambios que funcionan, y no como una receta de reuniones.**

## Por qué importa

Ágil es una de las palabras más usadas y más mal usadas del trabajo tecnológico. Unos la emplean para un conjunto de ceremonias, otros para la velocidad y otros como excusa para omitir la planificación y la documentación. En la gestión de servicios la confusión sale más cara, porque a los equipos de servicio a menudo les dicen que deben volverse «ágiles» sin que nadie explique qué significa eso para un turno de guardia, un incidente o un acuerdo de nivel de servicio.

El Manifiesto es breve y releerlo es la manera más barata de despejar la confusión. Sus valores y principios no dicen nada de sprints, reuniones diarias ni tableros concretos. Hablan de personas, de resultados que funcionan, de colaboración con los clientes y de responder al cambio. Eso los convierte en una prueba útil para cualquier práctica que adopte un equipo de servicio: ¿nos ayuda esto a involucrar a las partes interesadas, a aprender y a entregar cambios de forma segura y continua?

Este tema reformula los valores y principios para el trabajo de servicios, señala lo que el Manifiesto no dice y los vincula con las prácticas del resto de la Parte 2. Los principios rectores de ITIL 4 se corresponden estrechamente con estas ideas (véase el Tema 1.5 — Principios Rectores de ITIL).

## Conceptos clave

**Origen.** En febrero de 2001, diecisiete profesionales del software se reunieron en Utah y escribieron el «Manifiesto para el desarrollo ágil de software». Fue una declaración de valores compartidos de personas que usaban métodos distintos, entre ellos la programación extrema, Scrum y otros. El artículo de Wikipedia sobre el desarrollo ágil de software recoge la historia y el texto.

**Cuatro valores.** El Manifiesto dice que, aunque hay valor en los elementos de la derecha, se valoran más los de la izquierda:

- Individuos e interacciones sobre procesos y herramientas
- Software que funciona sobre documentación exhaustiva
- Colaboración con el cliente sobre negociación contractual
- Responder al cambio sobre seguir un plan

No dice que los elementos de la derecha carezcan de valor. Dice hacia dónde inclinarse cuando entran en conflicto.

**Doce principios.** Los principios del Manifiesto, parafraseados aquí, dicen: satisfacer al cliente mediante la entrega temprana y continua de software valioso; acoger los requisitos cambiantes, incluso tarde; entregar software que funcione con frecuencia, con preferencia por los plazos más cortos; que las personas de negocio y las desarrolladoras trabajen juntas a diario; construir los proyectos en torno a personas motivadas y confiar en ellas; preferir la conversación cara a cara; tomar el software que funciona como principal medida del progreso; mantener un ritmo sostenible; prestar atención continua a la excelencia técnica y al buen diseño; valorar la simplicidad, el arte de maximizar la cantidad de trabajo no realizado; dejar que los equipos autoorganizados produzcan los mejores diseños; y reflexionar con regularidad sobre cómo ser más eficaces y ajustarse en consecuencia.

**Reformulado para el trabajo de servicios en producción.** Para un equipo de servicio, el «software que funciona» se convierte en un servicio que funciona: un servicio que hace lo que los clientes necesitan, hoy. «Clientes» incluye a usuarios, patrocinadores y a quienes dependen del servicio más adelante en la cadena. «Entrega» incluye liberar un cambio y también atender una solicitud o corregir una falla. La «documentación» sigue importando, para runbooks y conocimiento, pero en la cantidad que ayude a la siguiente persona. La «negociación contractual» aparece en los acuerdos de nivel de servicio y en los contratos con proveedores: el valor dice que se mantenga la conversación con el cliente junto al contrato.

**Lo que el Manifiesto destaca.** Leído con una lente de servicios, el énfasis recae en la participación continua de las partes interesadas (clientes y personas que entregan trabajando juntos), la mejora continua (reflexión y ajuste regulares), la evolución permanente del servicio, un ritmo sostenible para quienes lo operan, personas motivadas en quienes se confía para hacer el trabajo y la entrega continua de cambios que funcionan. Véase el Tema 2.2 — Entrega continua.

**Lo que no dice.** No exige sprints, Scrum, Kanban, puntos de historia, reuniones de pie ni ninguna herramienta concreta. Son métodos específicos, algunos de los cuales se describen en esta guía donde corresponde. Si su equipo elige usar Scrum, sprints o Kanban, pueden servir a los valores; adoptarlos no hace por sí solo ágil a un equipo. Tratar los métodos como la sustancia de lo ágil es un error común, a veces llamado práctica de culto cargo.

**Lo que no dice sobre operaciones.** El Manifiesto se escribió sobre cómo construir software. Guarda silencio sobre las guardias, la gestión de incidentes y los niveles de servicio. Trasladarlo a ellos es un juicio, y esta guía muestra una lectura. Son posibles otras, y conviene contrastarlas con su propia evidencia.

**Agilidad frente a control.** Una afirmación común es que lo ágil e ITIL se oponen. El Manifiesto no contradice el control. Un cambio pequeño, probado y reversible puede ser más seguro que uno grande, lo cual es en sí una forma de control. La tensión es real donde los controles exigen aprobaciones pesadas, manuales y poco frecuentes, y la respuesta es llevar el control al pipeline de entrega, no abandonarlo (véase el Tema 3.4 — Habilitación de Cambios).

**Cómo encajan las lentes.** Lo ágil es la primera de las cuatro lentes. Los asistentes de IA pueden redactar, revisar y resumir, pero el valor de «individuos e interacciones» nos recuerda que la conversación con el cliente sigue siendo humana. La automatización respalda la entrega frecuente de «software que funciona». La analítica respalda «reflexionar y ajustar» al mostrar evidencia para el siguiente cambio.

## Buenas prácticas

1. **Contraste las prácticas con los valores.** Para cualquier ceremonia, herramienta o documento, pregunte a qué valor sirve. Si la respuesta es ninguno, deje de hacerlo o cámbielo. Si su equipo elige usar sprints, Scrum o Kanban, aplique la misma prueba a cada elemento.
2. **Involucre a las partes interesadas de forma continua.** Ponga a un cliente, usuario o su representante en contacto regular con el equipo, no solo al principio y al final. Las conversaciones cortas y frecuentes sobre el servicio real superan a las revisiones largas de documentos.
3. **Entregue el cambio en piezas pequeñas.** Prefiera un cambio que pueda liberarse y comprobarse en días a uno que espera un lote grande. Los cambios pequeños son más fáciles de entender, probar y revertir.
4. **Mantenga el servicio que funciona como medida del progreso.** Cuente lo que está en marcha y ayuda a los clientes, no el número de tareas cerradas ni de documentos escritos. Véase el libro *Service Management Metrics* para medidas y sus riesgos de manipulación.
5. **Escriba documentación que ayude a la siguiente persona.** Mantenga breves y al día los runbooks, los diagramas y las decisiones. Elimine lo que nadie lee y agregue lo que alguien necesitó y no encontró.
6. **Confíe en las personas motivadas y deles lo que necesitan.** Fije metas y restricciones claras y deje que el equipo decida cómo. Quite obstáculos en lugar de añadir puntos de control.
7. **Proteja un ritmo sostenible.** Planifique las guardias y el trabajo de mejora para que la gente pueda seguir durante años. Las hazañas heroicas son una señal de alarma, no una fortaleza.
8. **Reflexione con regularidad.** Programe una revisión breve y periódica de cómo trabaja el equipo, por ejemplo tras incidentes y liberaciones, y actúe sobre al menos un hallazgo cada vez. Si su equipo elige usar retrospectivas, trate su resultado como un backlog.
9. **Acoja el cambio y hágalo barato.** Invierta en pruebas, automatización y un diseño claro para que un cambio tardío no sea una crisis. Pregunte qué facilitaría el siguiente cambio.
10. **Manténgalo simple.** Busque la solución más pequeña que cubra la necesidad y elimine el trabajo que no agrega valor.

## Preguntas para conversar con su equipo

**¿Cuál de los cuatro valores honramos más en la práctica y cuál descuidamos?**
Los equipos suelen decir «individuos e interacciones» mientras funcionan con tickets y herramientas, o «software que funciona» mientras documentan en exceso. Pida evidencia reciente de cada valor. Las respuestas varían según el rol, así que escuche a varios. Después elijan un valor para reforzar este trimestre.

**¿Qué ven nuestros clientes de nuestro trabajo entre liberaciones o entre incidentes?**
Esto comprueba la participación continua. Espere respuestas como «nada» o «un informe mensual». Pregunte qué querría ver un cliente cada semana. Después organicen una conversación breve y regular con usuarios reales.

**¿Cuáles de nuestras prácticas mantenemos porque «lo dice lo ágil» y a qué valor sirve cada una?**
Muchos equipos realizan rituales sin saber por qué. Pregunte qué cambiaría si cada una se detuviera. Escuche los rituales que llenan el calendario y no producen nada. Después prueben un cambio con una fecha de revisión.

**¿Qué tan pequeño puede ser nuestro cambio liberable más pequeño y qué nos impide hacerlo?**
Esto explora el tamaño de los lotes. Los obstáculos comunes son las pruebas manuales, los pasos de aprobación y los entornos compartidos. Pida un ejemplo concreto. Después elijan un obstáculo para eliminar.

**¿Dónde sentimos que nuestro ritmo es insostenible y qué cuesta?**
Aquí salen la fatiga de las guardias, las interrupciones constantes y las liberaciones en fin de semana. Trate las respuestas como datos sobre el sistema. Después acuerden un cambio para reducir la carga y quién comprobará que funcionó.

**¿Dónde impiden la colaboración nuestros contratos y acuerdos de nivel de servicio, y dónde los usamos como excusa?**
Ocurren ambas cosas. Algunos contratos realmente limitan lo que puede cambiar; otros se citan para evitar una conversación. Pida la cláusula. Después planifiquen una conversación con el cliente o el proveedor sobre un término limitante.

## En la práctica: un ejemplo de gestión de servicios

El equipo digital de un operador regional de autobuses gestiona la aplicación de horarios y el flujo de llegadas en tiempo real. La dirección anuncia el paso a «ágil» y ordena sprints, reuniones diarias y una herramienta nueva. En un mes el equipo está ocupado con ceremonias, la atención de incidentes se resiente y la responsable de operaciones se queja de que nada ha mejorado.

La jefa del equipo se hace otra pregunta: ¿qué valores del Manifiesto nos faltan? Descubre que el equipo no tiene contacto regular con el personal de la sala de control que usa el flujo de llegadas, que libera cambios solo una vez por trimestre y que tiene un gran backlog de solicitudes que nadie puede ordenar. Conserva la reunión diaria, que el equipo encuentra útil, y suprime dos ceremonias que la duplican. Añade una llamada semanal de 20 minutos con dos personas de la sala de control, empieza a liberar pequeños cambios cada semana con un breve conjunto de pruebas automatizadas y pide al equipo que elija una mejora de cada revisión de incidente.

Qué cambia: el personal de la sala de control informa los problemas antes, y un retraso recurrente del flujo se corrige en una semana en lugar de esperar a la siguiente liberación trimestral. Qué sigue siendo difícil: la liberación semanal depende de un proveedor que controla el formato de los datos de los vehículos y no cambiará su calendario, la carga de guardias del equipo sigue siendo pesada y algunos directivos aún piden un plan con fechas fijas. La jefa del equipo mantiene estos puntos sobre la mesa en la revisión mensual.

## Cuatro perspectivas

### Equipos de producto y de entrega

Use los valores para decidir qué conservar y qué recortar. Trabaje con usuarios reales a menudo, libere cambios pequeños y trate el servicio en producción como parte de su producto. Mantenga breve y al día la documentación.

### Equipos de servicio y de operaciones

Apliquen los valores a cómo gestionan incidentes, solicitudes y cambios: hablen con las personas afectadas, mejoren tras cada incidente y protejan un ritmo sostenible. Ofrézcanse a unirse pronto a la planificación, para que las necesidades operativas den forma al trabajo.

### Liderazgo y gobernanza

No imponga ceremonias. Pida participación de las partes interesadas, liberaciones pequeñas y evidencia de mejora. Fije la dirección y las restricciones, y confíe en que los equipos elijan cómo. Vigile el ritmo: las hazañas heroicas sostenidas son un riesgo.

### Clientes y usuarios

Usted es parte del trabajo del equipo. Dé retroalimentación regular y honesta, y espere ver llegar los cambios en piezas pequeñas. Diga al equipo qué es lo más importante y avísele cuando algo que entregó no ayudó.

## Ágil, IA, automatización y analítica

### Ágil

Este tema es la base: participación continua de las partes interesadas, mejora continua y entrega continua de cambios que funcionan. Precaución: los métodos no son la sustancia; contraste cualquier práctica con los valores.

### IA

Los asistentes de IA pueden redactar historias de usuario, resumir comentarios y sugerir pruebas, con una persona que revise cada salida. El valor de «individuos e interacciones» significa que la conversación con los clientes sigue siendo humana. Precaución: los resúmenes de IA de los comentarios de clientes pueden aplanar lo que dijo la gente; lea una muestra de los originales. Véase el Tema 5.1 — IA en la gestión de servicios.

### Automatización

Automatice las pruebas, la compilación y el despliegue para que el cambio pequeño y frecuente sea barato y seguro, y conserve registros y reversión. Precaución: automatizar un pipeline sin que el equipo entienda qué comprueba produce una falsa confianza; revise qué verifica cada etapa. Véase el Tema 6.4 — Pipelines y cambio automatizado.

### Analítica

Use datos para reflexionar y ajustar: tiempo de la idea a la liberación, fallos de cambio, tiempo de restablecimiento y comentarios de clientes. Precaución: cualquiera de ellos se convierte en meta cuando se usa para calificar a los equipos, y los equipos ajustarán el número en lugar del trabajo; úselos para aprender. Véanse el Tema 7.3 — Medición e informes y el libro *Service Management Metrics*.

## Modos de fallo habituales

- **Ceremonias sin valores.** El equipo celebra todas las reuniones y no cambia nada. Pregunte a qué valor sirve cada práctica.
- **Ágil como pura velocidad.** La presión sube, la calidad baja y la gente se agota. Proteja un ritmo sostenible y la calidad técnica.
- **Nada de documentación.** El conocimiento vive en las cabezas y el personal de guardia sufre. Mantenga runbooks breves y notas de decisión.
- **Las partes interesadas aparecen solo en la revisión.** Las sorpresas llegan tarde. Involucre a un usuario cada semana.
- **Usar el contrato como escudo.** Nadie habla con el cliente. Mantenga la conversación y cambie el contrato cuando haga falta.
- **Imponer métodos desde arriba.** Los equipos cumplen en la forma. Dé metas y restricciones y deje que los equipos elijan.
- **Leer el Manifiesto como antagónico al control.** Los equipos abandonan controles útiles. Integre en cambio el control en el pipeline.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Participación de las partes interesadas | Solo al principio y al final | Revisiones regulares | Contacto semanal con usuarios reales | Retroalimentación medida y atendida | Clientes y proveedores involucrados entre equipos |
| Entrega de cambios | Liberaciones grandes y raras | Algunas liberaciones más pequeñas | Liberaciones pequeñas, frecuentes y probadas | Flujo de cambios medido y mejorado | Cambio entregado de forma continua entre servicios |
| Reflexión y mejora | Tras las crisis | Revisiones ocasionales | Revisiones regulares con un backlog | Resultados de las mejoras comprobados | Aprendizaje compartido entre equipos |
| Ritmo y personas | Hazañas heroicas | Conciencia de la sobrecarga | Guardias y carga de trabajo sostenibles | Carga medida y equilibrada | Carga planificada entre equipos |

## Lista de verificación

- [ ] Podemos enunciar los cuatro valores y los doce principios y decir qué prácticas sirven a cuáles.
- [ ] Un usuario real o representante de clientes habla con el equipo cada semana.
- [ ] Nuestro cambio liberable más pequeño se entrega en días, no en meses.
- [ ] Contamos el servicio que funciona, no las tareas, como progreso.
- [ ] La documentación es breve, actual y se lee.
- [ ] Celebramos una revisión regular y actuamos sobre al menos un hallazgo.
- [ ] Las guardias y la carga de trabajo son sostenibles.
- [ ] Los controles están integrados en el pipeline donde es posible.

## Prompts de IA

**Contraste una práctica con los valores.**

```text
Our team practice: [describe the practice and how often it happens].
For each of the four Agile Manifesto values, say whether the practice appears to serve it, strain it, or is unrelated, and give one question to check with the team. Do not recommend dropping the practice.
List what you are unsure of.
```

**Convierta comentarios en una lista breve para el equipo.**

```text
Below is feedback from users of [service]: [paste feedback, with personal details removed].
Group it into up to six themes, give a count for each, and quote one short example for each theme exactly. Do not infer what users meant beyond the words.
List what you are unsure of.
```

**Redacte una nota de una página con acuerdos de trabajo.**

```text
Our team context: [team size, services, on-call pattern]. Our values we want to honor: [list].
Draft up to eight working agreements as short sentences, each tied to one Agile Manifesto value or principle. Avoid naming specific methods or tools unless I listed them.
List what you are unsure of.
```

## Habilidades de IA

- [agile-principles](../../../../skills/agile-principles/SKILL.md): úsela para aplicar los principios a la práctica de un equipo.
- [agile-reflection](../../../../skills/agile-reflection/SKILL.md): úsela para realizar una reflexión que produzca elementos de mejora.
- [agile-charter](../../../../skills/agile-charter/SKILL.md): úsela para acordar metas y acuerdos de trabajo con las partes interesadas.

## Fuentes principales

- El Manifiesto para el desarrollo ágil de software y sus doce principios (agilemanifesto.org): el texto primario; léalo directamente.
- Wikipedia, "Agile software development": historia, el texto de los valores y las críticas.
- Wikipedia, "Extreme programming": uno de los métodos que dio forma al Manifiesto.
- Wikipedia, "Scrum (project management)": un marco a menudo llamado ágil, descrito como un marco y no como la sustancia de lo ágil.

## Referencias

1. Agile software development — Wikipedia — https://en.wikipedia.org/wiki/Agile_software_development
2. Extreme programming — Wikipedia — https://en.wikipedia.org/wiki/Extreme_programming
3. Scrum (project management) — Wikipedia — https://en.wikipedia.org/wiki/Scrum_(project_management)
4. Kanban (development) — Wikipedia — https://en.wikipedia.org/wiki/Kanban_(development)
5. Continual improvement process — Wikipedia — https://en.wikipedia.org/wiki/Continual_improvement_process
6. Retrospective — Wikipedia — https://en.wikipedia.org/wiki/Retrospective
7. Self-organization — Wikipedia — https://en.wikipedia.org/wiki/Self-organization
8. Technical debt — Wikipedia — https://en.wikipedia.org/wiki/Technical_debt
9. Waterfall model — Wikipedia — https://en.wikipedia.org/wiki/Waterfall_model
10. Manifesto for Agile Software Development — Beck et al. — https://agilemanifesto.org/
