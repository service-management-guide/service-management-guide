# Mejora Continua

**La mejora continua es el ciclo recurrente de elegir un cambio pequeño, probarlo, comprobar si ayudó y conservarlo o revertirlo; funciona cuando la mejora tiene un backlog visible, capacidad protegida, un responsable y evidencia detrás de cada decisión.**

## Por qué importa

Todo equipo quiere mejorar y la mayoría no lo consigue. Las razones rara vez son la falta de ideas. Las ideas de mejora abundan y viven en las cabezas de las personas, en las notas de las retrospectivas y en las revisiones de incidentes. Fracasan porque nadie es responsable de ellas, nada protege el tiempo para ellas y el trabajo urgente siempre gana. Pasados unos meses, la gente deja de sugerir, porque sugerir no tiene efecto.

La mejora continua es la práctica que lo arregla. Hace de la mejora una parte regular y visible de cómo trabaja un equipo. Las ideas van a una lista compartida. Alguien ordena la lista. En cada ciclo se reserva una pequeña cantidad de capacidad para los elementos principales. Cada cambio se prueba como un experimento, se comprueba y se conserva o se descarta. A lo largo de un año, muchos cambios pequeños se suman en ganancias sustanciales, y el equipo aprende lo que funciona en su propio contexto.

ITIL 4 sitúa la mejora continua en el corazón del sistema de valor del servicio, como componente y como práctica (véase el Tema 1.4 — El sistema de valor del servicio). El pensamiento lean, el kaizen, el ciclo de Deming y las retrospectivas ágiles describen versiones del mismo ciclo (véase el Tema 2.4 — Lean y kaizen). Este tema describe el ciclo, el backlog de mejoras y los hábitos que lo mantienen vivo, y muestra cómo ayudan la IA, la automatización y la analítica y dónde engañan. Se conecta con la gestión de problemas (Tema 3.3 — Gestión de Problemas), que aporta muchas ideas de mejora, y con la medición (Tema 7.3 — Medición e informes).

## Conceptos clave

**«Continual» frente a «continuous».** ITIL usa «continual improvement», es decir, una mejora que se repite a intervalos, en ciclos. «Continuous improvement» se usa a menudo en los círculos de lean y de calidad con un significado similar. En español ambas se dicen «mejora continua». Las palabras se usan con laxitud y esta guía las trata como la misma idea. Wikipedia describe el proceso de mejora continua.

**El ciclo.** La forma más conocida es planificar-hacer-verificar-actuar (PDCA), también llamado ciclo de Deming por W. Edwards Deming, quien lo popularizó en la gestión de la calidad. Usted planifica un cambio y lo que espera de él, lo hace a pequeña escala, verifica los resultados y actúa: lo adopta, lo ajusta o lo descarta. Wikipedia describe el PDCA y el papel de Deming. El ciclo se repite.

**El modelo de mejora continua de ITIL 4.** ITIL 4 ofrece un modelo de siete pasos: cuál es la visión; dónde estamos ahora; dónde queremos estar; cómo llegamos; actuar; ¿llegamos?; cómo mantenemos el impulso. Es un estímulo para pensar, no un procedimiento que seguir servilmente. Compruebe la orientación vigente del propietario, también para ITIL 5, antes de citarlo como actual (véase el Tema 1.3 — ITIL 5).

**Backlog de mejoras.** Una única lista ordenada de ideas de mejora, cada una con un responsable, un beneficio esperado y un estado. Wikipedia describe los backlogs. Las fuentes incluyen revisiones de incidentes, retrospectivas, retroalimentación de usuarios, auditorías y sugerencias del personal. El orden se establece por valor esperado y esfuerzo, con espacio para las victorias rápidas.

**Capacidad protegida.** Una parte del tiempo reservada para la mejora, como el 10 o el 20 por ciento, visible en los planes. Sin ella, la mejora compite con el trabajo urgente y pierde. Un equipo que no puede proteger ninguna capacidad debe decirlo abiertamente y preguntar qué dejaría de hacer la dirección.

**Experimentos.** Trate cada cambio como una prueba con una hipótesis: «Si hacemos X, esperamos Y, medido por Z en N semanas». Wikipedia describe el experimento y la hipótesis. Un experimento pequeño limita el riesgo de un mal cambio y enseña algo en cualquier caso.

**Medidas y líneas base.** Para saber si un cambio ayudó, necesita saber de dónde partió. Registre la medida de base antes del cambio y compruébela después. Mida lo que importa a los usuarios y al equipo, y diga cómo podría engañar cada medida. Véase el libro *Service Management Metrics*.

**Retrospectivas.** Reuniones regulares en las que un equipo mira atrás a cómo trabajó y elige qué cambiar. Wikipedia describe las retrospectivas. Si su equipo elige usarlas, asegúrese de que los resultados vayan al backlog con responsables. Una retrospectiva que produce una lista en la que nadie actúa es peor que ninguna.

**Causa raíz y aprendizaje.** Las revisiones de incidentes y de problemas producen ideas de mejora. Véase el Tema 3.3 — Gestión de Problemas. Las auditorías, la retroalimentación de los clientes y la comparación con otros (benchmarking) aportan más. Wikipedia describe el benchmarking.

**Tradiciones de gestión de la calidad.** La gestión de calidad total, Six Sigma con su ciclo DMAIC (definir, medir, analizar, mejorar, controlar) y lean aportan métodos. Wikipedia describe cada uno. Use el método más ligero que encaje: el ajuste de un equipo pequeño no necesita un proyecto formal de Six Sigma.

**Responsabilidad.** Cada mejora tiene un responsable que responde de probarla e informar del resultado. Una persona o un grupo pequeño es dueño del backlog y de su orden. En ITIL 4, la mejora continua es tarea de todos, con un coordinador.

**Celebrar y compartir.** Comparta lo que se probó, incluidos los fracasos. Reconozca las mejoras que hizo la gente y cuente a quienes las sugirieron qué pasó con su idea. Esto mantiene vivas las ideas.

**Mejora en distintos niveles.** La mejora ocurre en el trabajo diario de un equipo, en un servicio, en una práctica y en toda la organización. Alinéelos: los cambios a nivel de equipo no deben socavar las metas a nivel de servicio. Véase el Tema 1.4 — El sistema de valor del servicio.

**Cómo encajan las lentes.** La mejora continua es la lente ágil en su forma más pura: pasos pequeños, retroalimentación y aprendizaje. La IA puede encontrar mejoras candidatas en los datos y redactar experimentos, bajo revisión. La automatización se encarga de las tareas repetidas que identifica la mejora. La analítica mide el efecto.

## Buenas prácticas

1. **Mantenga un único backlog de mejoras visible.** Recoja las ideas de todas las fuentes en un solo lugar. Hágalo abierto al equipo y a las partes interesadas, y manténgalo lo bastante corto como para que sea real.
2. **Nombre un responsable del backlog y de cada elemento.** El responsable del backlog ordena los elementos y los mantiene en movimiento; cada elemento tiene una persona que lo probará.
3. **Proteja la capacidad.** Reserve una parte de cada ciclo para la mejora y muéstrela en el plan. Informe cuando se recorte y por qué.
4. **Elija cambios pequeños y rápidos.** Prefiera elementos que puedan probarse en días o un par de semanas. Divida las ideas grandes en pasos que puedan probarse por separado.
5. **Declare la expectativa antes de empezar.** Escriba lo que espera que ocurra, cómo lo medirá y cuándo lo comprobará. Registre la línea base.
6. **Compruebe y decida.** En la fecha de revisión, mire el resultado con honestidad. Conserve, ajuste o revierta el cambio y anote por qué.
7. **Cierre el ciclo con las personas.** Cuente a quienes sugirieron un elemento qué ocurrió. Agradézcales y comparta lo que aprendió.
8. **Use datos y usuarios.** Mire las medidas y pregunte a las personas afectadas. Esté atento a las medidas fáciles de mover sin ayudar a nadie.
9. **Aprenda de los fallos y los incidentes.** Lleve las revisiones al backlog, con acciones que tengan responsables y fechas. Véase el Tema 3.3 — Gestión de Problemas.
10. **Revise el propio sistema de mejora.** De vez en cuando pregunte si el proceso ayuda: cuántos elementos se completan, cuánto tardan y si la gente sigue sugiriendo ideas. Cámbielo si no es así.

## Preguntas para conversar con su equipo

**¿Qué ideas de mejora tuvimos el trimestre pasado y qué pasó con cada una?**
Recójanlas. Esperen muchas ideas perdidas. Pregunten qué las detuvo. Después creen una lista y elijan los tres primeros elementos.

**¿Cuánto de nuestro tiempo está realmente protegido para la mejora y quién lo defiende?**
Pida las cifras. Espere poco o nada. Pregunte qué dejaríamos de hacer para crear el espacio. Después acuerden una porción pequeña, como media jornada a la semana, y quién la protegerá.

**¿Cuál fue el último cambio que hicimos y que luego revertimos y qué aprendimos?**
Esto normaliza el fracaso. Espere historias de cambios que no funcionaron. Busque el aprendizaje. Después acuerden que la reversión es un resultado normal de un experimento.

**¿Cómo sabemos que nuestra última mejora realmente ayudó?**
Pregunte qué se midió antes y después. Espere «se sentía mejor». Después elijan una mejora actual y acuerden una línea base y una fecha de revisión.

**¿Dónde gastamos esfuerzo de mejora que ningún usuario ni compañero notaría?**
Esto comprueba el valor del esfuerzo. Pregunte quién se beneficia de cada elemento. Después elijan un elemento para descartar.

**¿Cómo podría ayudarnos la IA a encontrar y probar mejoras y cómo comprobaremos que acierta?**
La IA puede encontrar patrones en los tickets y sugerir experimentos. También puede sugerir lo que solo parece prometedor. Pregunte quién es responsable del uso y cómo se prueban las sugerencias. Después prueben las ideas sugeridas por la IA con el mismo proceso de experimentos que cualquier otra.

## En la práctica: un ejemplo de gestión de servicios

El equipo de reparaciones de viviendas de un ayuntamiento provincial atiende alrededor de 1.200 solicitudes de reparación al mes. El personal se queja de forma habitual del esfuerzo desperdiciado: inquilinos que llaman repetidamente para pedir novedades, contratistas que llegan sin acceso y formularios que rebotan entre tres sistemas. El equipo lleva un año celebrando retrospectivas y tiene un gran archivo de notas, pero poco ha cambiado.

La jefa del equipo pide al equipo que elija un área de mejora para una prueba de seis semanas. Eligen las llamadas repetidas de inquilinos que preguntan por el estado de una reparación, que suponen alrededor de una quinta parte de las llamadas. Crea un backlog de mejoras, empezando con 14 elementos de las notas de la retrospectiva, y pide al equipo que puntúe cada uno por valor esperado y esfuerzo. Toman los tres primeros. El primero es enviar un mensaje de texto al inquilino cuando se reserva una cita y el día anterior. El segundo es añadir al mensaje el nombre y el teléfono del contratista. El tercero es registrar una línea base de llamadas repetidas por semana.

Para cada elemento el equipo escribe una expectativa: «Los mensajes reducirán las llamadas repetidas de estado en una cuarta parte en cuatro semanas». La jefa reserva dos tardes al mes del trabajo planificado, con el jefe del servicio aceptando aplazar un informe de baja prioridad. Tras seis semanas, las llamadas repetidas bajan en aproximadamente una quinta parte, no una cuarta. El elemento del nombre del contratista no tiene efecto medible y se descarta. De las llamadas surge una idea nueva: los inquilinos quieren volver a reservar sin llamar por teléfono. Entra en el backlog.

Qué cambia: el equipo ha visto surgir una mejora de sus propias ideas, y la gente sugiere más. Qué sigue siendo difícil: las dos tardes se recortaron dos veces cuando aumentaron las reparaciones de emergencia; los mensajes de texto dependen de que los contratistas actualicen los registros a tiempo, lo que no siempre hacen; y la línea base de llamadas repetidas procede de un registro de llamadas que el equipo sabe imperfecto. La jefa informa de los recortes al jefe del servicio y mantiene visibles los números.

## Cuatro perspectivas

### Equipos de producto y de entrega

Mantengan una lista de mejoras para el producto y su pipeline, y reserven capacidad para ella. Traten los incidentes, las preguntas de soporte y los retrasos de entrega como fuentes de ideas, y midan el efecto de los cambios.

### Equipos de servicio y de operaciones

Capten lo que ven: contactos repetidos, soluciones alternativas y pasos lentos. Prueben cambios pequeños y compartan los resultados. Lleven la retroalimentación de los usuarios al backlog.

### Liderazgo y gobernanza

Proteja la capacidad de mejora y pregunte qué ha cambiado gracias a ella. Busque evidencia de efecto y celebre el aprendizaje además del éxito. No premie el volumen de ideas ni de cambios.

### Clientes y usuarios

Usted es una fuente de mejoras. Diga al proveedor qué no funciona y qué ayudaría, y espere saber qué ocurrió con su sugerencia.

## Ágil, IA, automatización y analítica

### Ágil

La mejora continua es el corazón de la práctica ágil: reflexionar, ajustar y entregar cambios pequeños con las partes interesadas. Precaución: si su equipo elige usar retrospectivas, asegúrese de que su resultado llegue al backlog y se haga; si no es así, cambie el método.

### IA

La IA puede encontrar patrones en tickets y retroalimentación, proponer experimentos candidatos y redactar resúmenes de resultados, con un responsable y criterio humano. Precaución: la IA puede proponer mejoras verosímiles que los datos no respaldan; pruébelas como cualquier otra idea. Véase el Tema 5.1 — IA en la gestión de servicios.

### Automatización

Automatice las tareas repetidas que identifica el trabajo de mejora y la recogida de datos de base y de resultados para los experimentos. Precaución: la automatización puede fijar un proceso antes de que se haya mejorado; simplifique primero. Véase el Tema 6.1 — Estrategia de automatización.

### Analítica

Use líneas base, tendencias y comparaciones de antes y después, prestando atención al ruido y a otros cambios que ocurrieron al mismo tiempo. Precaución: una comparación breve de antes y después puede engañar y las medidas pueden manipularse una vez que son metas; combine los datos con la retroalimentación de los usuarios. Véanse el Tema 7.3 — Medición e informes y el libro *Service Management Metrics*.

## Modos de fallo habituales

- **Ideas sin responsable.** La lista crece y nada ocurre. Asigne responsables y ordene la lista.
- **Sin capacidad protegida.** El trabajo urgente desplaza a la mejora. Reserve tiempo y defiéndalo.
- **Grandes programas de mejora.** El cambio es lento y los beneficios poco claros. Prefiera experimentos pequeños.
- **Sin línea base.** Nadie sabe si el cambio ayudó. Registre antes y compruebe después.
- **Retrospectivas sin acción.** La gente deja de asistir. Lleve los resultados al backlog y hágalos.
- **Teatro del éxito.** Solo se informa de los logros. Comparta fracasos y aprendizaje.
- **Medidas como metas.** Los números se mueven y el trabajo no mejora. Empareje las medidas con retroalimentación.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Backlog | Ideas en las cabezas | Existe una lista | Un único backlog con responsable y ordenado, con estado visible | Calidad y flujo del backlog revisados | Backlogs vinculados entre equipos y servicios |
| Capacidad | Ninguna | Tiempo ocasional | Parte protegida de la capacidad | Uso de la capacidad revisado frente a los resultados | Capacidad planificada en todo el portafolio |
| Experimentos | Cambios hechos sin comprobaciones | Algunas líneas base | Expectativa, medida y fecha de revisión para cada cambio | Resultados analizados y compartidos | Experimentos coordinados entre equipos |
| Aprendizaje | Perdido | Notas | Hallazgos compartidos y usados en el siguiente ciclo | Aprendizaje medido | El aprendizaje impulsa la estrategia y las alianzas |

## Lista de verificación

- [ ] Tenemos un backlog de mejoras visible con responsables.
- [ ] Una parte de la capacidad está protegida para la mejora.
- [ ] Cada cambio tiene una expectativa, una línea base, una medida y una fecha de revisión.
- [ ] Conservamos, ajustamos o revertimos los cambios según la evidencia.
- [ ] Quienes sugieren ideas saben qué pasó con ellas.
- [ ] Las revisiones de incidentes y de problemas alimentan el backlog.
- [ ] Compartimos los fracasos y el aprendizaje.
- [ ] Revisamos el propio proceso de mejora.

## Prompts de IA

**Ordene un backlog para su discusión.**

```text
Here is our improvement backlog with a short description of each item, the people affected, and a rough effort estimate: [paste].
Propose an order using expected value and effort as stated, show your reasoning for each item, and list items where the description is too vague to judge. Do not invent benefits or effort.
List what you are unsure of.
```

**Convierta una idea en un experimento.**

```text
Our idea: [describe]. Our current baseline: [describe or write "unknown"]. The people affected: [list].
Write an experiment plan with a hypothesis, a measure, how the measure could mislead, how long to run it, who to ask for feedback, and what would make us reverse it. Do not predict the result.
List what you are unsure of.
```

**Resuma los resultados de un experimento.**

```text
Here is the data before and after our change: [paste]. Here is feedback from the people affected: [paste].
Summarize what changed, what did not, other things that changed at the same time, and what we cannot conclude. Do not state that the change caused the result unless the data support it.
List what you are unsure of.
```

## Habilidades de IA

- [kaizen](../../../../skills/kaizen/SKILL.md): úsela para planificar y ejecutar pequeños experimentos de mejora.
- [agile-reflection](../../../../skills/agile-reflection/SKILL.md): úsela para realizar reflexiones que produzcan acciones.
- [dmaic](../../../../skills/dmaic/SKILL.md): úsela para proyectos de mejora mayores y con muchos datos.
- [six-sigma](../../../../skills/six-sigma/SKILL.md): úsela cuando la variación y la calidad sean el problema principal.
- [futurespective](../../../../skills/futurespective/SKILL.md): úsela para mirar adelante además de atrás.

## Fuentes principales

- PeopleCert, páginas de certificación ITIL: la descripción del propietario de la mejora continua y su modelo.
- W. Edwards Deming, *Out of the Crisis* (1982): fundamentos de la gestión de la calidad y del ciclo de mejora.
- Wikipedia, "Continual improvement process" y "PDCA": visiones generales del ciclo.
- Wikipedia, "Kaizen": la tradición japonesa del cambio pequeño y continuo.

## Referencias

1. Continual improvement process — Wikipedia — https://en.wikipedia.org/wiki/Continual_improvement_process
2. PDCA — Wikipedia — https://en.wikipedia.org/wiki/PDCA
3. W. Edwards Deming — Wikipedia — https://en.wikipedia.org/wiki/W._Edwards_Deming
4. Kaizen — Wikipedia — https://en.wikipedia.org/wiki/Kaizen
5. Retrospective — Wikipedia — https://en.wikipedia.org/wiki/Retrospective
6. Backlog — Wikipedia — https://en.wikipedia.org/wiki/Backlog
7. Experiment — Wikipedia — https://en.wikipedia.org/wiki/Experiment
8. Benchmarking — Wikipedia — https://en.wikipedia.org/wiki/Benchmarking
9. Six Sigma — Wikipedia — https://en.wikipedia.org/wiki/Six_Sigma
10. Total quality management — Wikipedia — https://en.wikipedia.org/wiki/Total_quality_management
11. Lean manufacturing — Wikipedia — https://en.wikipedia.org/wiki/Lean_manufacturing
