# Centro de servicio con IA y agentes virtuales

**Los agentes virtuales y la clasificación con IA pueden responder preguntas rutinarias, encaminar y preparar tickets y redactar respuestas; ayudan cuando se basan en conocimiento revisado, son honestos sobre lo que no saben, es fácil dejarlos por una persona y se miden por si los usuarios obtuvieron lo que necesitaban.**

## Por qué importa

Los centros de servicio llevan mucho tiempo queriendo responder preguntas sencillas más rápido y a menor costo. Los chatbots fueron el primer intento: menús con guion que frustraban a los usuarios. Los asistentes más nuevos, construidos sobre grandes modelos de lenguaje, son mucho más fluidos y pueden manejar preguntas abiertas en lenguaje sencillo. Eso los hace mucho más útiles, y también mucho más capaces de hacer daño cuando se equivocan, porque sus respuestas erróneas suenan bien.

Para los usuarios, un agente virtual puede ser un camino rápido a una respuesta a cualquier hora. Para el personal del centro, la clasificación y la redacción con IA pueden encargarse de clasificar y escribir para que dediquen tiempo a los casos más difíciles. Para la organización, ambas pueden reducir el costo por contacto. Estos beneficios son reales, y dependen de que el asistente se use para las preguntas adecuadas, se mantenga exacto y no atrape a quienes necesitan a una persona.

Los riesgos tienen rostro humano. Un usuario bloqueado en un sistema antes de un plazo, un enfermero de atención al paciente que necesita una solución rápida, o una persona angustiada que recibe un guion alegre: todos ellos están mal atendidos por un asistente que no sabe reconocer cuándo pasar el caso. Este tema describe dónde encajan los agentes virtuales y la clasificación con IA, cómo diseñarlos y probarlos y cómo medirlos con honestidad. Se apoya en el centro de servicios (Tema 3.1 — Centro de Servicios), las solicitudes de servicio (Tema 3.6 — Gestión de Solicitudes de Servicio) y el conocimiento (Tema 3.9 — Gestión del Conocimiento), y se basa en las ideas del Tema 5.1 — IA en la gestión de servicios y del Tema 5.6 — Gobernanza, riesgo y cumplimiento de la IA.

## Conceptos clave

**Agente virtual.** Software que conversa con los usuarios por texto o voz para responder preguntas o realizar tareas. Los artículos de Wikipedia sobre chatbots y asistentes virtuales los describen. En un centro de servicios, un agente virtual suele ser el primer punto de contacto, con una vía hacia una persona.

**Basado en reglas frente a basado en IA.** Los primeros chatbots seguían guiones o buscaban coincidencias de palabras clave. Los asistentes basados en IA interpretan el lenguaje natural y pueden componer respuestas. Wikipedia describe las interfaces de usuario conversacionales y la comprensión del lenguaje natural. Los guiones son predecibles y limitados; los modelos de lenguaje son flexibles y menos predecibles. Muchos sistemas en producción los combinan: flujos con guion para tareas sensibles y modelos de lenguaje para preguntas abiertas.

**Intenciones y flujos.** Una intención es lo que el usuario quiere hacer, como «restablecer mi contraseña» o «pedir un portátil». Muchos asistentes identifican la intención y luego ejecutan un flujo definido con comprobaciones, lo cual es más seguro para las acciones. Para las preguntas abiertas, el asistente recupera los artículos relevantes y responde a partir de ellos.

**Fundamentación (grounding).** Responder a partir de fuentes especificadas y revisadas, normalmente artículos de conocimiento, y mostrarlas, en lugar de hacerlo desde la memoria general del modelo. Wikipedia describe la generación aumentada por recuperación. La fundamentación reduce las respuestas inventadas pero no las elimina, y hace que la calidad de su base de conocimiento sea el límite de la calidad del asistente. Véase el Tema 3.9 — Gestión del Conocimiento.

**Desvío y resolución.** Desvío significa que un usuario obtuvo una respuesta del asistente y no contactó a una persona. Resolución significa que el problema del usuario se resolvió realmente. Difieren: un usuario que se rinde y va a otro lado está desviado, no resuelto. Mida la resolución mediante seguimiento, contactos repetidos y retroalimentación.

**Traspaso.** Pasar la conversación a una persona, con contexto, cuando el asistente no puede ayudar o el usuario lo pide. Wikipedia describe el traspaso en general. Un buen traspaso lleva el historial, para que el usuario no tenga que repetirse. Uno malo lo deja en una cola. Haga que «hablar con una persona» esté siempre visible.

**Clasificación y encaminamiento.** La IA clasifica los tickets entrantes por tipo, urgencia y equipo, y los encamina. Wikipedia describe el triaje. También puede detectar probables incidentes mayores a partir de una ráfaga de contactos similares. Los errores envían el trabajo a la cola equivocada; la tasa de reencaminamientos es una buena medida.

**Redacción y resumen para los agentes.** La IA puede resumir hilos largos de tickets, sugerir artículos y redactar respuestas para que el agente las edite. Esto mantiene el control en una persona mientras ahorra tiempo. Véase el Tema 5.4 — IA generativa para incidentes, conocimiento y cambios.

**Detección de sentimiento y urgencia.** Técnicas que infieren el estado de ánimo o la urgencia del usuario a partir del texto. Wikipedia describe el análisis de sentimiento. Puede priorizar a un usuario alterado o un mensaje que menciona un plazo. Es imperfecto, sobre todo entre idiomas y culturas, así que úselo como una pista.

**Soporte de voz y multilingüe.** El reconocimiento y la síntesis de voz permiten la interacción por voz; la traducción automática permite el soporte en más idiomas. Wikipedia describe estas tecnologías. La calidad varía según el idioma y el acento, y los usuarios de idiomas menos comunes pueden estar peor atendidos. Pruebe con hablantes reales.

**Accesibilidad e inclusión.** Los asistentes deben funcionar para las personas con discapacidad y para quienes no se sienten seguros con la tecnología. Wikipedia describe la accesibilidad y las Pautas de Accesibilidad para el Contenido Web (WCAG). Una ventana de chat que los lectores de pantalla no pueden usar excluye a los usuarios. La brecha digital, también descrita en Wikipedia, nos recuerda que no todos prefieren o pueden usar el chat.

**Identidad y autoridad.** Un asistente que puede realizar acciones, como restablecer una contraseña, debe verificar quién pregunta. No deje nunca que un asistente conceda acceso solo por una afirmación. Véanse el Tema 3.6 — Gestión de Solicitudes de Servicio y el Tema 3.13 — Gestión de la Seguridad de la Información.

**Honestidad sobre ser una máquina.** Los usuarios deben saber que hablan con una IA, y el asistente no debe fingir ser humano ni tener sentimientos que no tiene. Algunas leyes exigen la divulgación; compruebe las normas que le apliquen. El artículo de Wikipedia sobre los patrones oscuros describe prácticas de diseño que engañan a los usuarios, como ocultar la vía hacia una persona; evítelas.

**Seguridad de los asistentes.** Los asistentes afrontan ataques como la inyección de prompts, en la que un texto de un mensaje o documento intenta anular las instrucciones del asistente. Wikipedia describe la inyección de prompts. No dé a un asistente poderes que un mensaje hostil pudiera usar mal y trate la entrada del usuario y los documentos recuperados como no fiables.

**Privacidad.** Las conversaciones pueden contener datos personales. Decida qué se almacena, durante cuánto tiempo, quién puede leerlo y si entrena algún modelo. Wikipedia describe los datos personales y el Reglamento General de Protección de Datos como un marco jurídico. Recabe asesoramiento jurídico.

**Cómo encajan las lentes.** Los agentes virtuales son el rostro visible de la IA, la automatización y la analítica en el centro de servicios. La práctica ágil sugiere empezar con pocos temas y ampliar. La automatización completa las tareas detrás de la conversación. La analítica le dice qué preguntan los usuarios y dónde falla el asistente.

## Buenas prácticas

1. **Elija temas en los que un asistente pueda hacerlo bien.** Empiece con preguntas frecuentes, sencillas y de bajo riesgo que tengan respuestas claras, como cómo conectarse a la red inalámbrica. Evite al principio los temas sensibles o de alto riesgo.
2. **Fundamente las respuestas en artículos revisados.** Use la recuperación de la base de conocimiento y muestre la fuente. Si ninguna fuente respalda una respuesta, el asistente debe decirlo y ofrecer a una persona.
3. **Haga evidente la vía hacia una persona.** Muestre siempre una opción clara de «hablar con una persona» y traspase con la conversación adjunta. No la bloquee nunca.
4. **Verifique la identidad para las acciones.** Para todo lo que cambie accesos o datos, use comprobaciones fuertes fuera del chat y limite lo que puede hacer el asistente. Registre cada acción.
5. **Diga a los usuarios que es una IA.** Indíquelo al principio, diga en qué puede y en qué no puede ayudar y evite fingir ser humano.
6. **Construya un conjunto de pruebas y ejecútelo.** Cree preguntas realistas a partir de tickets reales, incluidas las que el asistente debe declinar y las que intentan manipularlo. Ejecute el conjunto antes del lanzamiento y tras cada cambio.
7. **Lea conversaciones reales.** Revise una muestra de conversaciones cada semana, sobre todo aquellas en las que el usuario se fue o pidió una persona. Úselas para corregir artículos, flujos e instrucciones.
8. **Mida la resolución, no solo el desvío.** Siga los contactos de seguimiento, las valoraciones de los usuarios, los traspasos y las quejas. Compare con una línea base.
9. **Incluya a todos.** Pruebe con lectores de pantalla y con distintos idiomas y acentos. Mantenga disponibles otros canales, como el teléfono y el correo.
10. **Gestiónelo como un servicio.** Nombre un responsable, un presupuesto, un calendario de mejoras y un plan para cuando cambie el modelo subyacente o el proveedor.

## Preguntas para conversar con su equipo

**¿Qué preguntas hacen los usuarios con más frecuencia y cuáles de ellas podría responder un asistente de forma fiable a partir de nuestros artículos actuales?**
Usen los datos de tickets. Esperen una lista breve de preguntas repetitivas. Comprueben la exactitud y la integridad de los artículos. Después elijan cinco preguntas para una primera prueba.

**¿Qué no debe hacer ni decir nunca el asistente y cómo lo probaremos?**
Enumeren los límites: ningún cambio de acceso sin verificación, ningún consejo legal ni médico, ninguna promesa sobre plazos. Esperen desacuerdo sobre los bordes. Después conviertan cada límite en una prueba.

**Cuando un usuario está frustrado o pide una persona, ¿qué ocurre y cuánto tarda?**
Pruébenlo ustedes mismos. Esperen brechas de contexto y retrasos. Después acuerden un tiempo máximo y un formato de traspaso estándar.

**¿Cómo sabremos que los usuarios obtuvieron la respuesta que necesitaban, y no solo que dejaron de chatear?**
Pregunte por la medida. Espere «tasa de desvío». Después acuerden una pregunta de seguimiento, una comprobación de contactos repetidos y una revisión de muestras.

**¿Quién puede usar este asistente y a quién podría fallar?**
Piensen en personas con discapacidad, diferencias de idioma o poca confianza. Esperen que algunos grupos no se hayan considerado. Después prueben con algunos usuarios reales de esos grupos.

**¿Qué datos contienen las conversaciones, adónde van y quién puede leerlos?**
Recorran el flujo de datos. Esperen sorpresas sobre proveedores y conservación. Después escriban el flujo y pidan al oficial de privacidad que lo revise.

## En la práctica: un ejemplo de gestión de servicios

El centro de TI de un servicio regional de salud da soporte a unas 12.000 personas del personal clínico y administrativo. Las llamadas alcanzan su máximo en los cambios de turno, cuando los clínicos necesitan inicios de sesión e impresión, y la espera media es de nueve minutos. El gerente de servicios propone un agente virtual en el portal del personal y en un canal de mensajería.

El equipo empieza con un alcance estrecho. Toman las 15 preguntas de «cómo hago» más comunes de seis meses de tickets, revisan los artículos correspondientes con usuarios clínicos y reescriben ocho que no están claros. El asistente responde solo a partir de esos artículos. Para los restablecimientos de contraseña no actúa por sí mismo; enlaza con el flujo de restablecimiento del sistema de identidad, que usa su propia verificación. Un aviso indica que es un asistente de IA, y un botón de «hablar con una persona» traspasa la conversación, con un resumen, a un agente del centro.

Antes del lanzamiento, el equipo construye 80 preguntas de prueba, incluidas preguntas sobre temas ajenos a las 15, como el consejo clínico, que el asistente debe declinar, e intentos de que revele sus instrucciones. La primera versión falla nueve pruebas, sobre todo por responder fuera de su alcance. El equipo ajusta las instrucciones y añade una regla: todo lo que no coincida va a una persona. En el primer mes, el asistente atiende unas 1.400 conversaciones; alrededor del 40 por ciento terminan sin un ticket y el 12 por ciento se traspasan a un agente. La gerente lee 100 conversaciones cada semana. Descubre que los usuarios preguntan a menudo por una pantalla de inicio de sesión cambiada recientemente que los artículos aún no describen, y el equipo los actualiza.

Qué cambia: el tiempo de espera en los picos baja y los agentes dedican menos tiempo a las preguntas repetidas. Qué sigue siendo difícil: el personal del turno de noche de algunas plantas tiene mala conectividad y sigue llamando; el asistente tiene dificultades con las preguntas en dos idiomas que usa mucho personal, y el equipo aún no ha encontrado un método de prueba adecuado; y el precio del proveedor crece con el volumen de conversaciones. La gerente añade artículos traducidos y una revisión trimestral de los costos.

## Cuatro perspectivas

### Equipos de producto y de entrega

Proporcionen artículos claros y notas de versión para sus cambios, porque el asistente solo puede responder lo que está escrito. Construyan flujos que el asistente pueda llamar con seguridad, con sus propias comprobaciones de identidad.

### Equipos de servicio y de operaciones

Sean responsables de la calidad del asistente: lean conversaciones, corrijan artículos y mejoren flujos. Gestionen bien los traspasos e informen de los patrones a los responsables de producto y de servicio.

### Liderazgo y gobernanza

Fije los límites, financie el trabajo de conocimiento y las pruebas y pida medidas de resolución, no solo de desvío. Asegúrese de que siempre haya una vía hacia una persona. Compruebe las cuestiones de datos y jurídicas.

### Clientes y usuarios

Debería saber que habla con una IA, poder dejarla por una persona en cualquier momento y no tener que repetirse. Diga al proveedor cuándo una respuesta fue errónea o poco útil.

## Ágil, IA, automatización y analítica

### Ágil

Empiece con pocos temas, libere a menudo, aprenda de conversaciones reales y amplíe por pasos. Involucre a usuarios y agentes en la revisión de qué añadir. Precaución: añadir muchos temas con rapidez sin probar multiplica las respuestas erróneas; añada en grupos pequeños y probados.

### IA

Los asistentes necesitan un responsable, un conjunto de pruebas, respuestas fundamentadas y revisión por muestreo. Decida qué puede decir y hacer la IA y dónde debe decidir una persona. Precaución: ajustar las instrucciones para superar las pruebas puede volver frágiles a los asistentes; renueve el conjunto de pruebas con preguntas reales nuevas. Véase el Tema 5.1 — IA en la gestión de servicios.

### Automatización

Conecte el asistente con flujos definidos para las solicitudes rutinarias, con verificación, registros y límites, de modo que desencadene acciones sin improvisarlas. Precaución: un asistente que puede actuar ante un mensaje persuasivo es un objetivo; mantenga estrechos sus poderes y verifique la identidad por otra vía. Véase el Tema 6.5 — Autoservicio y cumplimiento automatizado.

### Analítica

Observe las preguntas formuladas, respondidas, declinadas, traspasadas y abandonadas, las valoraciones de los usuarios, los contactos repetidos y el costo por contacto resuelto. Precaución: un desvío alto puede significar que los usuarios se rindieron, y las valoraciones provienen de un grupo pequeño y autoseleccionado; combine con conversaciones muestreadas. Véanse el Tema 7.7 — Analítica de experiencia y sentimiento y el libro *Service Management Metrics*.

## Modos de fallo habituales

- **Sin salida.** Los usuarios dan vueltas con un bot. Ofrezca siempre una persona, con contexto.
- **Respuestas de memoria.** El modelo inventa pasos. Fundamente en artículos revisados y decline cuando no esté seguro.
- **El desvío como éxito.** Los usuarios se van sin ayuda. Mida la resolución y los contactos repetidos.
- **Acciones sin verificación.** Se concede acceso por una afirmación. Verifique por otra vía y registre.
- **Bot oculto.** Los usuarios creen que hablan con una persona. Diga que es una IA.
- **Usuarios excluidos.** Fallan los lectores de pantalla o los idiomas. Pruebe con usuarios reales y mantenga otros canales.
- **Conocimiento obsoleto.** El asistente cita artículos viejos. Vincule las actualizaciones con los cambios y revise muestras.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Alcance y diseño | Lo que ofrezca el proveedor | Unos pocos temas | Temas, límites y flujos definidos | Alcance ajustado con datos de conversaciones | Alcance coordinado entre funciones y canales |
| Fundamentación y conocimiento | Memoria del modelo | Algunos artículos | Artículos revisados con fuentes mostradas | Conocimiento actualizado a partir de las conversaciones | Conocimiento y asistente mejorados juntos de forma continua |
| Traspaso e inclusión | Oculto o deficiente | Existe traspaso | Traspaso visible con contexto, accesibilidad probada | Traspaso e inclusión medidos | Experiencia coherente entre canales, idiomas y capacidades |
| Medición | Solo volumen | Desvío | Resolución, contactos repetidos y valoraciones | Muestras y tendencias revisadas con regularidad | Resultados vinculados con el costo y la experiencia entre servicios |

## Lista de verificación

- [ ] Elegimos un conjunto pequeño de temas adecuados para el asistente.
- [ ] Las respuestas se fundamentan en artículos revisados y muestran las fuentes.
- [ ] Una opción visible de «hablar con una persona» traspasa con contexto.
- [ ] La identidad se verifica fuera del chat para cualquier acción.
- [ ] Se dice a los usuarios que es una IA.
- [ ] Tenemos un conjunto de pruebas y lo ejecutamos antes y después de cada cambio.
- [ ] Leemos una muestra de conversaciones cada semana.
- [ ] Probamos la accesibilidad y los idiomas que hablan nuestros usuarios.

## Prompts de IA

**Redacte preguntas de prueba a partir de tickets.**

```text
Here are anonymized ticket titles and summaries from the past month: [paste]. Our assistant is allowed to answer these topics: [list].
Write 40 test questions based on the tickets: 25 inside the topics, 10 outside them that the assistant should decline, and 5 that try to make it ignore its rules. State the correct behavior for each. Do not include real personal data.
List what you are unsure of.
```

**Revise conversaciones en busca de patrones de fallo.**

```text
Here are transcripts of conversations where the user asked for a person or left unhelped, with personal data removed: [paste].
Group them into up to six patterns, count each, quote a short example, and list a possible fix to investigate. Do not blame the user.
List what you are unsure of.
```

**Redacte instrucciones del asistente para su revisión.**

```text
Our assistant helps staff of [type of organization] with [topics]. It must never: [list]. It must always: [list, such as offer a person and cite sources].
Draft instructions of under 250 words for the assistant, in plain language, including what to say when it does not know. Do not invent capabilities or sources.
List what you are unsure of.
```

## Habilidades de IA

- [prompt-engineering](../../../../skills/prompt-engineering/SKILL.md): úsela para diseñar y probar las instrucciones del asistente.
- [service-catalog](../../../../skills/service-catalog/SKILL.md): úsela para definir en qué puede ayudar el asistente a los usuarios a solicitar.
- [survey-design](../../../../skills/survey-design/SKILL.md): úsela para diseñar una retroalimentación de usuarios que mida la resolución.
- [getting-feedback](../../../../skills/getting-feedback/SKILL.md): úsela para reunir la retroalimentación de usuarios y agentes.

## Fuentes principales

- W3C, Web Content Accessibility Guidelines (WCAG): el estándar internacional de contenido web accesible, relevante para las interfaces de chat.
- NIST, AI Risk Management Framework: una estructura para identificar y gestionar los riesgos de la IA.
- Wikipedia, "Chatbot" y "Virtual assistant": visiones generales de las tecnologías.
- Wikipedia, "Prompt injection": antecedentes de un riesgo de seguridad principal.

## Referencias

1. Chatbot — Wikipedia — https://en.wikipedia.org/wiki/Chatbot
2. Virtual assistant — Wikipedia — https://en.wikipedia.org/wiki/Virtual_assistant
3. Conversational user interface — Wikipedia — https://en.wikipedia.org/wiki/Conversational_user_interface
4. Retrieval-augmented generation — Wikipedia — https://en.wikipedia.org/wiki/Retrieval-augmented_generation
5. Triage — Wikipedia — https://en.wikipedia.org/wiki/Triage
6. Sentiment analysis — Wikipedia — https://en.wikipedia.org/wiki/Sentiment_analysis
7. Accessibility — Wikipedia — https://en.wikipedia.org/wiki/Accessibility
8. Web Content Accessibility Guidelines — Wikipedia — https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines
9. Dark pattern — Wikipedia — https://en.wikipedia.org/wiki/Dark_pattern
10. Prompt injection — Wikipedia — https://en.wikipedia.org/wiki/Prompt_injection
11. Web Content Accessibility Guidelines (WCAG) overview — W3C — https://www.w3.org/WAI/standards-guidelines/wcag/
