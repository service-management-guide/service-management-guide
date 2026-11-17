# La Cadena de Valor del Servicio

**La cadena de valor del servicio de ITIL 4 es un modelo operativo de seis actividades —planificar, mejorar, involucrar, diseñar y hacer la transición, obtener o construir, y entregar y dar soporte— por las que pasa cada flujo de valor en su propio orden; úsela para encontrar dónde espera el trabajo y quién es responsable de cada traspaso.**

## Por qué importa

El trabajo en una organización de servicios rara vez avanza en línea recta. Llega una solicitud, alguien hace una pregunta, se diseña un cambio, se llama a un proveedor, se despliega el cambio y el soporte lo recoge. Cada paso pertenece a un equipo distinto y nadie ve el recorrido completo. El resultado es un retraso que ningún equipo causó y que ningún equipo puede corregir por sí solo.

La cadena de valor del servicio da forma a ese recorrido. Nombra seis actividades que juntas convierten la demanda en valor y permite describir un trayecto específico, un flujo de valor, como una ruta a través de esas actividades. Como las actividades son genéricas, el mismo modelo sirve para una liberación de software, una solicitud de portátil o un incidente, con rutas distintas.

Este tema explica las seis actividades, en qué se diferencian los flujos de valor de la cadena y cómo usar el modelo con trabajo real. Describe ITIL 4, la versión más documentada. ITIL (Versión 5), presentada por PeopleCert en 2026, puede presentar el modelo operativo de otra manera; consulte las páginas del propietario antes de citarlo como vigente (véase el Tema 1.3 — ITIL 5).

## Conceptos clave

**Las seis actividades.** En ITIL 4 son:

| Actividad | Propósito en palabras sencillas |
|---|---|
| Planificar | Mantener en toda la organización un entendimiento compartido de la visión, el estado actual y la dirección |
| Mejorar | Lograr que los servicios, las prácticas y los productos sigan mejorando |
| Involucrar | Comprender las necesidades de las partes interesadas y mantener buenas relaciones y transparencia |
| Diseñar y hacer la transición | Asegurar que los productos y servicios cumplen las expectativas de calidad, costo y tiempo de comercialización |
| Obtener o construir | Asegurar que los componentes están disponibles cuando y donde se necesitan y cumplen la especificación |
| Entregar y dar soporte | Asegurar que los servicios se entregan y se soportan según la especificación y las expectativas acordadas |

**Entradas y salidas.** La cadena recibe dos tipos de entrada: oportunidad y demanda desde fuera, y los resultados de otras actividades desde dentro. Cada actividad produce salidas que alimentan otras actividades, y la cadena entera produce productos y servicios para los consumidores. El valor se realiza cuando los consumidores usan el servicio, no cuando termina la cadena.

**Flujo de valor.** Una serie de pasos que una organización emprende para crear y entregar productos y servicios a los consumidores. Un flujo de valor es específico: «resolver un incidente mayor», «incorporar a una persona empleada», «liberar un cambio en una aplicación móvil». Cada uno sigue su propio camino por las actividades. Los artículos de Wikipedia sobre flujos de valor y sobre el mapeo de flujos de valor explican la idea y su origen lean.

**No es la cadena de valor de Porter.** El estudioso de la gestión Michael Porter describió una «cadena de valor» en 1985 para empresas manufactureras, con actividades primarias y de apoyo. La cadena de ITIL toma prestados el nombre y la idea de que las actividades añaden valor, pero describe operaciones de servicio y no es el mismo modelo. Al leer material más antiguo, compruebe a cuál se refiere.

**Las actividades no son equipos ni fases.** Una actividad es un tipo de trabajo, no un departamento. En una organización pequeña una sola persona puede realizar las seis en un día. En una grande, la misma actividad puede ocurrir en muchos lugares. La cadena no impone un orden; lo impone el flujo de valor.

**Las prácticas contribuyen a las actividades.** Cada práctica, como la gestión de incidentes o la habilitación de cambios, ayuda a una o más actividades. Mapear las prácticas a las actividades muestra solapamientos y brechas (véase el Tema 1.4 — El sistema de valor del servicio). Por ejemplo, una práctica de habilitación de cambios puede tocar diseñar y hacer la transición, obtener o construir, y entregar y dar soporte.

**Flujo y espera.** La pregunta útil sobre un flujo de valor no es cuánto dura cada paso sino dónde espera el trabajo. En la mayoría de las organizaciones, el trabajo pasa mucho más tiempo esperando entre actividades que siendo trabajado. La tradición lean de mapear flujos de valor, tratada en el Tema 2.4 — Lean y kaizen y en el Tema 7.6 — Analítica de procesos y de flujos de valor, existe para sacar esto a la luz.

**La entrega continua como flujo de valor.** Un cambio de software que fluye desde la idea hasta producción pasa por planificar, involucrar, diseñar y hacer la transición, obtener o construir, y entregar y dar soporte, con mejorar corriendo en paralelo. Las prácticas de entrega continua acortan las esperas entre ellas (véase el Tema 2.2 — Entrega continua).

**Cómo encajan las lentes.** Lo ágil acorta los ciclos dentro de la cadena y aumenta la participación de las partes interesadas en «involucrar». La IA puede ayudar dentro de las actividades, por ejemplo resumiendo solicitudes en «involucrar» o proponiendo pruebas en «diseñar y hacer la transición». La automatización mueve el trabajo entre actividades sin traspasos manuales. La analítica mide el flujo a través de la cadena.

## Buenas prácticas

1. **Mapee flujos de valor reales, no la cadena en general.** Elija un flujo concreto, como la atención de una solicitud de acceso de un cliente, y siga un ejemplo reciente de principio a fin. Use fechas reales.
2. **Marque las actividades a las que pertenece cada paso.** Etiquete cada paso del seguimiento con la actividad a la que sirve. A menudo encontrará varios pasos en una actividad y ninguno en otra, lo cual es un hallazgo.
3. **Mida la espera por separado del trabajo.** Registre cuánto tiempo se trabajó y cuánto estuvo en una cola. Informe de ambos; la diferencia suele sorprender.
4. **Encuentre los traspasos.** Cada vez que el trabajo pasa de un equipo a otro, pregunte qué información viaja con él y qué se pierde. El retrabajo repetido suele provenir de un mal traspaso.
5. **Trate «involucrar» como una actividad de primer nivel.** Muchos equipos de servicio planifican y entregan bien e involucran mal. Compruebe que las partes interesadas participan desde el inicio y que la retroalimentación vuelve a quienes deciden.
6. **Haga visible «mejorar» en cada flujo.** Busque dónde entran las ideas de mejora en el flujo y quién las revisa. Si no hay punto de entrada, la mejora dependerá de hazañas heroicas.
7. **Nombre un responsable para cada flujo de valor.** Una persona responde del flujo de extremo a extremo y puede pedir a los equipos que cambien. Sin responsable, cada equipo optimiza su propia parte.
8. **Use la cadena para ubicar la automatización.** Busque pasos estables, repetidos y bien entendidos, y automatícelos, con registros. No automatice un paso que es solo síntoma de una decisión que falta.
9. **Revise el mapa tras un cambio.** Nuevos proveedores, herramientas o asistentes de IA alteran la ruta. Redibuje el flujo y pregunte qué se movió.
10. **Mantenga el modelo ligero.** Si el mapa se convierte en un gran diagrama que nadie usa, simplifíquelo. Una página que muestre las esperas vale más que un esquema completo.

## Preguntas para conversar con su equipo

**¿Qué flujo de valor importa más a nuestros clientes y quién es su responsable de extremo a extremo?**
Esto empieza por la responsabilidad. La gente suele nombrar un proceso pero no una persona. Puede que halle varios responsables de partes y ninguno del conjunto. Después elijan un flujo y una persona responsable para probar durante un trimestre.

**¿Dónde esperó más tiempo la última pieza de trabajo y por qué?**
Use un ejemplo real con fechas. Las respuestas típicas son aprobaciones, colas para especialistas y espera de información de un cliente. Pregunte qué esperaba el trabajo, no quién fue lento. Después pregunte qué eliminaría la espera.

**¿Cuál de las seis actividades hacemos peor?**
Los equipos suelen decir «involucrar» o «mejorar» cuando se les pregunta con honestidad. Pida evidencia: un requisito que se pasó por alto, una idea de mejora en la que nadie actuó. Después elijan un cambio pequeño en esa actividad.

**¿Qué información se pierde en nuestro mayor traspaso?**
Pregunte al equipo receptor qué desearía haber sabido. Espere contexto ausente, prioridad poco clara y falta de historial. Después acuerden un campo o una conversación que viaje con el trabajo.

**¿Qué pasos de nuestro flujo existen solo por una decisión que falta?**
Algunos pasos, como las aprobaciones repetidas, suplen una regla que nadie ha escrito. Pregunte quién aprobaría el trabajo si la regla existiera y qué diría la regla. Después redacten la regla para un caso.

**¿Qué haríamos distinto en el flujo si un asistente de IA pudiera redactar, resumir o encaminar en cada paso?**
Esto saca a la luz dónde podría ayudar la IA y dónde añadiría riesgo. Pida responsables y puntos de revisión. Después elijan un paso de bajo riesgo para probar con una persona que revise cada salida.

## En la práctica: un ejemplo de gestión de servicios

El departamento de TI de una universidad atiende solicitudes para preparar entornos de cómputo de investigación para proyectos nuevos. Los investigadores se quejan de que tarda semanas. La responsable del servicio sigue una solicitud reciente a través de la cadena de valor.

La solicitud llega por correo (involucrar), se aclara en tres intercambios, la aprueba una oficial de financiación, pasa a un equipo de infraestructura que construye el entorno (obtener o construir), lo prueba un segundo equipo (diseñar y hacer la transición) y se entrega a soporte con una nota breve (entregar y dar soporte). El tiempo total transcurrido es de 23 días hábiles. El tiempo de trabajo efectivo, sumado entre las personas implicadas, es de menos de cuatro días. El resto es espera: aclaraciones, la aprobación y la cola del segundo equipo.

El departamento hace tres cambios. Sustituye el intercambio de correos por un formulario breve que plantea las preguntas que se hacían en todos los casos, preaprueba las solicitudes por debajo de un umbral de financiación y pide al equipo de infraestructura que ejecute pruebas básicas como parte de la construcción, con el segundo equipo revisando una muestra. También nombra a la jefa de cómputo de investigación como responsable del flujo.

Qué cambia: el mismo tipo de solicitud tarda ahora unos nueve días hábiles, según las siguientes solicitudes que el equipo sigue. Qué sigue siendo difícil: el umbral de preaprobación depende de una regla financiera que el departamento no controla, y el enfoque de muestreo aún no se ha acordado con el equipo de seguridad, de modo que algunos entornos todavía esperan revisión. La responsable anota ambos puntos para la siguiente revisión de mejoras.

## Cuatro perspectivas

### Equipos de producto y de entrega

Trate su pipeline de entrega como un flujo de valor y siga un cambio desde la idea hasta el servicio en marcha. Muestre las esperas y trabaje con operaciones en el traspaso a entregar y dar soporte. Incluya la actividad «involucrar» en sus planes, con los clientes participando desde el principio.

### Equipos de servicio y de operaciones

Ustedes son responsables de buena parte de entregar y dar soporte y reciben traspasos de otros. Registren lo que necesitaron y no recibieron en cada traspaso y llévenlo al responsable del flujo. Ofrézcanse a revisar los diseños pronto, cuando es más barato cambiarlos.

### Liderazgo y gobernanza

Pida que los flujos de valor tengan responsable y se midan de extremo a extremo. Mire las esperas, no solo el esfuerzo. Financie los traspasos y las actividades de involucrar y mejorar, que es fácil dejar sin recursos.

### Clientes y usuarios

Usted ve el flujo desde fuera: entra una solicitud y algo vuelve más tarde. Pregunte al proveedor cuáles son los pasos y dónde está su solicitud. Dígale dónde le hicieron la misma pregunta dos veces.

## Ágil, IA, automatización y analítica

### Ágil

Use ciclos cortos dentro de cada actividad, con las partes interesadas involucradas en todo momento, y trate el mapa del flujo como un backlog de mejoras. Precaución: acelerar una actividad, como la construcción, no mejora el flujo si la siguiente actividad es el cuello de botella.

### IA

La IA puede ayudar dentro de las actividades: resumir un hilo largo de solicitud en «involucrar», redactar casos de prueba en «diseñar y hacer la transición» o sugerir un artículo de conocimiento en «entregar y dar soporte». Asigne un responsable, mantenga a una persona revisando las salidas y registre qué se usó. Precaución: un paso de IA que encamina mal el trabajo añade un nuevo tipo de espera; siga las correcciones. Véase el Tema 5.1 — IA en la gestión de servicios.

### Automatización

Automatice los traspasos y los pasos rutinarios, como crear un registro y avisar al siguiente equipo, para que el trabajo avance sin esperar a que alguien se acuerde. Mantenga un registro y una forma de revertir. Precaución: la automatización puede acelerar un flujo hacia un cuello de botella y alargar la cola. Véase el Tema 6.2 — Automatización y orquestación de flujos de trabajo.

### Analítica

Use marcas de tiempo en los límites de las actividades para calcular el plazo de entrega, el tiempo de trabajo y el tiempo de espera de cada flujo. Precaución: las marcas de tiempo dependen de cómo la gente use los estados de los tickets, y una medida de «tiempo en la actividad» puede manipularse moviendo tickets entre estados; contraste con seguimientos de trabajo real. Véanse el Tema 7.6 — Analítica de procesos y de flujos de valor y el libro *Service Management Metrics*.

## Modos de fallo habituales

- **Dibujar la cadena, no un flujo.** Las seis casillas cuelgan de una pared y no describen nada. Siga una solicitud real con fechas.
- **Optimizar una sola actividad.** Un equipo acelera la construcción y el flujo sigue lento. Mida de extremo a extremo y encuentre la espera más larga.
- **Ignorar «involucrar» y «mejorar».** La planificación y la entrega son sólidas y la retroalimentación es débil. Dé a ambas responsables y tiempo explícitos.
- **Flujo sin responsable.** Cada equipo defiende su propio paso. Nombre a una persona responsable del flujo.
- **Confundir la cadena con el modelo de Porter.** Los lectores importan ideas equivocadas. Diga a qué modelo se refiere.
- **Tratar las actividades como equipos.** El modelo se convierte en un organigrama. Mantenga las actividades como tipos de trabajo que realizan muchos equipos.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Mapeo de flujos | Sin mapas | Un flujo seguido | Flujos principales mapeados con datos reales | Mapas actualizados y usados para decidir | Flujos mapeados entre equipos, proveedores y plataformas |
| Medición del flujo | Solo esfuerzo | Se conoce el tiempo transcurrido | Se informa del tiempo de trabajo y de espera | Cuellos de botella seguidos y atendidos | Flujo optimizado en todo el sistema |
| Responsabilidad | Los equipos son dueños de pasos | Responsables de los flujos principales | Cada flujo clave tiene un responsable | Los responsables revisan el flujo y los resultados para el cliente | Los responsables se coordinan entre flujos y socios |
| Involucrar y mejorar | Ad hoc | Se capta algo de retroalimentación | La retroalimentación y la mejora tienen puntos de entrada definidos | Se miden los resultados de ambas | Retroalimentación y mejora conectadas entre flujos |

## Lista de verificación

- [ ] Sabemos qué flujos de valor importan más a los clientes.
- [ ] Cada flujo clave tiene un responsable designado.
- [ ] Seguimos al menos una solicitud real con fechas.
- [ ] Conocemos el tiempo de trabajo y el tiempo de espera de ese flujo.
- [ ] Identificamos los principales traspasos y lo que se pierde en cada uno.
- [ ] «Involucrar» y «mejorar» tienen cada una un punto de entrada definido.
- [ ] Ubicamos la automatización en pasos estables y repetidos, con registros.
- [ ] Redibujamos el flujo tras un cambio importante.

## Prompts de IA

**Analice un seguimiento en busca de esperas.**

```text
Here is a trace of one request through our process, with timestamps and who handled each step: [paste trace].
Calculate for each step the elapsed time from the previous step, and list the three longest gaps. For each, suggest two questions to find out why the work waited. Do not assume causes.
List what you are unsure of.
```

**Etiquete los pasos con actividades de la cadena de valor.**

```text
Below are the steps in our process for [stream name]: [paste steps].
Label each with one of the six ITIL 4 value chain activities (plan, improve, engage, design and transition, obtain or build, deliver and support) and give a one-line reason. Mark labels you are unsure about and list which activities have no steps.
Do not add steps.
```

**Redacte preguntas para una revisión de traspaso.**

```text
We hand work from [team A] to [team B] in the stream [name]. The information handed over is: [list].
Write ten questions to ask team B about what they need that they do not receive. Avoid suggesting answers.
List what you are unsure of.
```

## Habilidades de IA

- [value-stream-map](../../../../skills/value-stream-map/SKILL.md): úsela para mapear y medir un flujo de valor.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): úsela para analizar los pasos, las esperas y los traspasos de un proceso.
- [kaizen](../../../../skills/kaizen/SKILL.md): úsela para convertir los hallazgos en pequeños experimentos de mejora.

## Fuentes principales

- PeopleCert, páginas de certificación ITIL: la descripción del propietario de la orientación de ITIL y de la versión más reciente.
- Wikipedia, "Value stream": el concepto que organiza la cadena.
- Wikipedia, "Value-stream mapping": la técnica lean para encontrar esperas.
- Wikipedia, "Value chain": el modelo original de Porter, para no confundir ambos.

## Referencias

1. ITIL — Wikipedia — https://en.wikipedia.org/wiki/ITIL
2. IT service management — Wikipedia — https://en.wikipedia.org/wiki/IT_service_management
3. Value chain — Wikipedia — https://en.wikipedia.org/wiki/Value_chain
4. Michael Porter — Wikipedia — https://en.wikipedia.org/wiki/Michael_Porter
5. Value stream — Wikipedia — https://en.wikipedia.org/wiki/Value_stream
6. Value-stream mapping — Wikipedia — https://en.wikipedia.org/wiki/Value-stream_mapping
7. Lean manufacturing — Wikipedia — https://en.wikipedia.org/wiki/Lean_manufacturing
8. Workflow — Wikipedia — https://en.wikipedia.org/wiki/Workflow
9. Continuous delivery — Wikipedia — https://en.wikipedia.org/wiki/Continuous_delivery
10. ITIL Foundation Bridge (Version 5) — PeopleCert — https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-foundation-bridge-version-5-4158
