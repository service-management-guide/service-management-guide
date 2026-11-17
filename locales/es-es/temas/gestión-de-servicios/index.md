# Gestión de servicios

**La gestión de servicios es la disciplina de diseñar, operar y mejorar servicios para que los clientes obtengan los resultados que desean sin cargar con el costo y el riesgo de producirlos; la práctica ágil, la IA, la automatización y la analítica son cuatro maneras de hacer mejor ese trabajo, no sustitutos de él.**

## Por qué importa

La mayoría de las organizaciones son al mismo tiempo clientes y proveedoras de servicios. Un hospital depende de un sistema de historias clínicas que opera su área de TI, y esa área depende de un proveedor de nube. Cada eslabón de la cadena le promete algo al siguiente. Cuando una promesa falla, el fallo recorre la cadena y cae sobre una persona que nunca vio la causa: una enfermera que no puede abrir una historia, un cliente que no puede pagar.

La gestión de servicios da a quienes hacen estas promesas una forma compartida de pensarlas y conversarlas. Plantea una pregunta sencilla: ¿qué necesita lograr el cliente y qué debemos hacer, de forma repetida y confiable, para que lo logre? Trata la respuesta como una práctica continua y no como un proyecto con fecha de término.

Para los equipos de tecnología, el cambio es pasar de «operamos servidores y aplicaciones» a «proporcionamos un resultado». Los servidores siguen importando. Pero la medida del éxito pasa de si la máquina está en funcionamiento a si la persona pudo hacer su trabajo. Ese cambio explica por qué un equipo puede cumplir todas las metas de disponibilidad y aun así escuchar que su servicio es deficiente.

Esta guía trata la gestión de servicios a través de cuatro lentes: ágil, IA, automatización y analítica. Cada lente cambia la forma de operar los servicios. Ninguna cambia la pregunta anterior. Lea primero este tema; los siguientes se apoyan en su vocabulario.

## Conceptos clave

**Servicio.** ITIL 4 define un servicio como un medio para posibilitar la cocreación de valor facilitando los resultados que los clientes quieren lograr, sin que el cliente tenga que gestionar costos y riesgos específicos. Dos partes de esa definición pesan. «Cocreación» significa que el valor no reside en el proveedor: aparece cuando el cliente usa el servicio. Y «sin tener que gestionar costos y riesgos específicos» dice qué asume el proveedor, que es la razón por la que los clientes pagan o financian el servicio.

**Valor, resultados, productos.** Un producto (output) es lo que un servicio genera, como un ticket resuelto o una versión desplegada. Un resultado (outcome) es el cambio que el cliente quería, como un paciente atendido a tiempo. El valor es el juicio del cliente sobre lo que valió el resultado frente a su costo y riesgo. Un equipo puede generar muchos productos y ningún resultado, y una revisión de servicio que solo cuenta productos no lo verá.

**Proveedor, consumidor y los roles dentro de «consumidor».** El proveedor diseña y opera el servicio. El consumidor es un grupo más amplio: el cliente define los requisitos y asume la responsabilidad del resultado, el usuario usa el servicio y el patrocinador autoriza el financiamiento. Una persona puede tener varios roles, y un servicio fracasa cuando el proveedor habla solo con uno de ellos.

**Relación de servicio.** Proveedores y consumidores están unidos por una relación hecha de acuerdos, expectativas y un ciclo de retroalimentación. Un acuerdo de nivel de servicio (SLA), tratado en el Tema 3.7 — Gestión de Niveles de Servicio, es una parte. La conversación que mantiene honesto al SLA es la parte mayor.

**Prácticas, no solo procesos.** Las descripciones antiguas de la gestión de servicios de TI (ITSM) destacan los procesos: secuencias fijas de pasos, como un proceso de incidentes. La guía actual, incluido ITIL 4, habla de prácticas: conjuntos de recursos organizacionales diseñados para realizar trabajo hacia un objetivo. Una práctica incluye personas, información, herramientas y socios, además de los pasos. El Tema 1.2 — ITIL rastrea cómo llegó el marco a esta formulación, y el Tema 1.4 — El sistema de valor del servicio muestra cómo encajan las prácticas.

**De lo centrado en la tecnología a lo centrado en el servicio.** Un equipo centrado en la tecnología se organiza en torno a componentes: el equipo de red, el de bases de datos, el de aplicaciones. Un equipo centrado en el servicio se organiza en torno a lo que experimenta el cliente, que atraviesa esos componentes. La mayoría de las organizaciones está en algún punto intermedio, y sus revisiones de incidentes lo muestran: si cada revisión termina con «fue el componente del otro equipo», la organización sigue centrada en la tecnología.

**Gestión de servicios más allá de TI.** Las mismas ideas se aplican a recursos humanos, instalaciones, asuntos legales y finanzas, y por eso muchas organizaciones extienden una mesa de servicio y un catálogo de servicios a esas funciones. Véase el Tema 1.9 — Gestión de servicios empresariales.

**Las cuatro lentes.** *Ágil* significa participación continua de las partes interesadas, mejora continua y entrega continua de cambios que funcionan. *IA* significa sistemas que aprenden patrones y generan o recomiendan, y que necesitan un responsable y supervisión humana. *Automatización* significa trabajo que el software realiza sin que una persona toque cada paso. *Analítica* significa usar datos para responder preguntas sobre el servicio. La Parte 2 cubre lo ágil, la Parte 5 la IA, la Parte 6 la automatización y la Parte 7 la analítica.

## Buenas prácticas

1. **Parta del resultado del cliente.** Para cada servicio, escriba una frase que empiece por «El cliente puede…». Si el equipo no puede escribirla, aún no sabe qué está proporcionando. Verifique la frase con un cliente real, no con un colega que comparte sus supuestos.
2. **Nombre un responsable para cada servicio.** Una persona responde por el servicio tal como lo experimenta el cliente, aunque contribuyan muchos equipos. Sin responsable, nadie sopesa una corrección en un equipo frente a su costo para otro.
3. **Describa los servicios con las palabras del cliente.** Sustituya «clúster Exchange» por «correo y calendario». Las vistas técnicas son útiles dentro del proveedor; la descripción dirigida al cliente es la que debe aparecer en catálogos, informes y páginas de estado.
4. **Defina el límite del servicio.** Diga qué incluye, qué no incluye y qué debe hacer el propio cliente. Los límites poco claros producen disputas en el peor momento, durante un incidente.
5. **Trate la mejora como parte del servicio.** Reserve una parte visible de la capacidad para el trabajo de mejora y revise con las partes interesadas, de forma periódica, una pequeña lista de cambios pendientes. Si su equipo opta por usar sprints, puede incluir una revisión en cada uno; el hábito importa más que el ritmo.
6. **Use las lentes para hacer preguntas, no para comprar herramientas.** Ante cada cambio, pregunte qué práctica ágil acortaría la retroalimentación, dónde podría ayudar la IA y quién la supervisaría, qué automatización eliminaría trabajo manual repetido y qué datos mostrarían si funcionó.
7. **Mantenga a las personas como responsables de las decisiones.** El software puede recomendar y actuar dentro de límites, pero una persona designada decide cuáles son los límites y revisa lo ocurrido. Esto se aplica igual a los scripts y a los sistemas de IA.
8. **Mida resultados y mantenga honestas las medidas.** Empareje cada medida de productos, como tickets cerrados, con una medida de resultado o de experiencia, y diga cómo podría manipularse cada una. El libro complementario *Service Management Metrics* ofrece las definiciones.
9. **Ponga por escrito lo que promete.** Los acuerdos no tienen que ser largos. Una página breve que indique alcance, horario, metas y contactos evita más discusiones que un contrato extenso que nadie lee.
10. **Revise la relación de servicio, no solo el servicio.** Reúnase con los clientes según un calendario, escuche lo que les cuesta y cuénteles qué cambió por ello. Una relación sin retroalimentación se deteriora.

## Preguntas para conversar con su equipo

**Si un cliente describiera nuestro servicio en una frase, ¿qué diría y estaríamos de acuerdo?**
Esto comprueba si proveedor y consumidor comparten una imagen del servicio. Espere respuestas que describan componentes o el esfuerzo del proveedor y no el resultado del cliente. Reúna frases reales de clientes si puede. Después pregunte qué palabras de su frase nosotros mismos nunca usamos.

**¿Dónde nuestros informes muestran verde mientras los clientes están descontentos?**
Esto busca la brecha entre productos y resultados. Los equipos suelen mencionar metas de disponibilidad o de cierre de tickets que se cumplieron durante una mala semana. Escuche lo que el informe omite. Después pregunte qué única medida habría pasado a rojo.

**¿Qué servicios nuestros no tienen un único responsable?**
Los vacíos de responsabilidad son comunes en los límites entre equipos, como las plataformas compartidas o la incorporación de personal. La conversación puede sacar a la luz un servicio que todos suponen que es de otro. Apunte a una persona designada, no a un comité. Después pregunte quién decide cuando dos equipos quieren cosas opuestas.

**¿Qué tiene que hacer el cliente por su cuenta que nunca hemos puesto por escrito?**
Los límites suelen ser difusos del lado del cliente: preparar datos, aprobar solicitudes, mantener actualizados los datos de contacto. Quizá oiga que «todos lo saben». Pregunte a un miembro nuevo del equipo o a un cliente. Después pregunte qué deber no escrito causó nuestra última disputa.

**¿Cuál de las cuatro lentes (ágil, IA, automatización, analítica) ayudaría más a nuestro servicio este año y qué nos costaría?**
La pregunta obliga a elegir y nombra costos como la supervisión, el mantenimiento o el trabajo sobre la calidad de los datos. Los equipos suelen atraerse por la lente más nueva. Pida evidencia de que el problema existe. Después pregunte qué dejaríamos de hacer para abrir espacio.

**¿Qué haríamos distinto si las personas a las que servimos pudieran ver todo lo que hacemos?**
Esto saca a la luz trabajo oculto, como los remedios manuales, y comprueba si el equipo se enorgullece de cómo opera. Las respuestas van de «nada» a una larga lista de vergüenzas. Trate la lista como candidatos a mejora, no como culpas. Después elija un elemento para hacerlo visible este mes.

## En la práctica: un ejemplo de gestión de servicios

Una red regional de bibliotecas públicas tiene un pequeño departamento de TI que da soporte a 40 sucursales. El personal describe su trabajo como «mantener en marcha los sistemas de la biblioteca». Las quejas llegan en rachas, sobre todo de las personas que dirigen las sucursales, y el informe mensual del departamento es una página de cifras de disponibilidad que siempre superan la meta.

La gerente de servicios realiza un breve ejercicio. Pide a tres directores de sucursal que completen la frase «El servicio de TI me ayuda a…». Las respuestas hablan de abrir la sucursal a tiempo, de ayudar a los usuarios a encontrar y pedir en préstamo materiales y de realizar la hora del cuento infantil. Ninguna menciona el tiempo de actividad. Descubre que el día en que cada sucursal abre, el personal inicia sesión en cuatro sistemas, y que un inicio de sesión lento a las 8:55 a. m. cuesta más que una caída corta a medianoche.

El equipo renombra sus servicios con las palabras del cliente, como «Apertura y cierre de una sucursal» y «Préstamos y devoluciones». Nombra un responsable para cada uno, informa el tiempo que una sucursal necesitó para empezar a prestar tras abrir y conserva las cifras de disponibilidad para uso propio. Además, agrega una pequeña lista de mejoras, que revisa cada mes con dos directores de sucursal. Dos de los primeros elementos son un cambio en el inicio de sesión y una guía impresa para un problema recurrente.

Qué cambia: las conversaciones con las sucursales pasan de quejas por caídas a solicitudes concretas. Qué sigue siendo difícil: la nueva cifra del tiempo de apertura depende de que el personal la registre, y algunas sucursales lo hacen de forma inconsistente. El departamento tampoco tiene un responsable acordado para el sistema de pedido de libros, que pertenece en parte a un proveedor y en parte a un equipo de compras. Ese vacío es su próximo tema de conversación.

## Cuatro perspectivas

### Equipos de producto y de entrega

Piense en el servicio que construye como algo que la gente usará durante años. Pregunte quién lo operará, cómo sabrá que funciona para los clientes y qué entregará además del código. Mantenga el resultado del cliente junto al backlog para que las concesiones sean visibles.

### Equipos de servicio y de operaciones

Su trabajo diario es el servicio tal como lo experimentan los clientes. Tenga presente la frase del cliente al priorizar, registre lo que aprende de incidentes y solicitudes, y diga a quienes construyen y financian el servicio lo que ve.

### Liderazgo y gobernanza

Financie servicios, no solo proyectos, y pida un responsable y un resultado para cada uno. Desconfíe de los informes construidos solo con productos. Dedique tiempo a reunirse directamente con los clientes al menos varias veces al año.

### Clientes y usuarios

Usted es parte del servicio, no solo un receptor. Diga qué resultado necesita, cuente al proveedor lo que no funciona y espere saber qué cambió como consecuencia. Pida por escrito el límite del servicio si no está seguro de qué está cubierto.

## Ágil, IA, automatización y analítica

### Ágil

Aplique la mejora continua al servicio mismo: un pequeño backlog de cambios, revisado con los clientes y entregado en piezas pequeñas. Precaución: no use el vocabulario ágil para rebautizar un servicio como proyecto con fecha límite; los servicios continúan y su mejora nunca termina.

### IA

Use la IA donde ahorre tiempo a personas expertas en lecturas y redacciones rutinarias, como resumir un hilo largo de tickets, con un responsable designado y una persona que revise lo que produce. Precaución: la IA comete errores verosímiles, así que decida de antemano cómo se notaría y corregiría una respuesta errónea. El Tema 5.1 — IA en la gestión de servicios traza el panorama.

### Automatización

Automatice pasos repetidos y bien entendidos, como crear cuentas o reiniciar un servicio que falla de forma conocida, y conserve un registro de lo que hizo la automatización y una forma de revertirlo. Precaución: automatizar un proceso confuso hace la confusión más rápida, así que simplifique primero. Véase el Tema 6.1 — Estrategia de automatización.

### Analítica

Recopile datos que respondan una pregunta formulada, como qué solicitudes tardan más y por qué. Precaución: los datos de los tickets reflejan lo que la gente eligió registrar, no todo lo ocurrido, y toda medida que se convierte en meta invita a la manipulación. Las definiciones y las salvaguardas están en el libro complementario *Service Management Metrics*, y el Tema 7.1 — Analítica para la gestión de servicios cubre los métodos.

## Modos de fallo habituales

- **Contar esfuerzo en lugar de resultados.** Los informes listan tickets y horas pero no lo que lograron los clientes. Agregue una medida de resultado o de experiencia por cada servicio.
- **Servicios sin responsable.** Todos contribuyen y nadie decide. Nombre a una persona responsable por servicio y publique el nombre.
- **Nombres técnicos en las conversaciones con clientes.** Los clientes no pueden saber qué está cubierto. Describa los servicios con las palabras del cliente y mantenga aparte el mapa técnico.
- **Tratar el marco como la meta.** El equipo adopta cada término de ITIL y no cambia nada que los clientes noten. Elija una práctica, mejórela con evidencia y deténgase cuando la evidencia se agote.
- **Herramientas primero.** Se compra una plataforma antes de que alguien haya descrito el servicio. Escriba primero la descripción del servicio y la meta de mejora, y después elija herramientas.
- **Entregar el criterio al software sin supervisión.** Un sistema de automatización o de IA actúa sin un responsable designado. Asigne un responsable, fije límites y revise lo que hizo.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Definición del servicio | Servicios descritos por tecnología | Servicios principales descritos por resultado | Todos los servicios tienen descripciones y límites basados en resultados | Descripciones revisadas con los clientes de forma periódica | Descripciones y límites compartidos entre proveedores y socios |
| Responsabilidad | Responsabilidad poco clara | Responsables de los servicios principales | Cada servicio tiene un responsable designado | Los responsables revisan resultados y costos con regularidad | Los responsables coordinan entre proveedores y equipos internos |
| Mejora | La mejora ocurre por crisis | Existe una lista de ideas | Un backlog de mejoras revisado con capacidad reservada | Las mejoras se comprueban con evidencia | La mejora aprende de clientes y datos de todos los servicios |
| Uso de las cuatro lentes | Se usan de forma ocasional | Probadas en un equipo | Elegidas a propósito, con responsables y supervisión | Efectos medidos y revisados | Usadas en conjunto bajo una gobernanza común |

## Lista de verificación

- [ ] Cada servicio tiene una frase de resultado para el cliente.
- [ ] Cada servicio tiene un responsable designado.
- [ ] Las descripciones dirigidas al cliente usan las palabras del cliente.
- [ ] Los límites del servicio, incluidos los deberes del cliente, están por escrito.
- [ ] Existe un backlog de mejoras revisado, con tiempo reservado.
- [ ] Cada medida de productos está emparejada con una medida de resultado o de experiencia.
- [ ] Cada sistema de automatización y de IA tiene un responsable y una forma de revisar lo que hizo.
- [ ] Nos reunimos con los clientes según un calendario y les contamos qué cambió.

## Prompts de IA

**Convierta nombres técnicos de servicios en resultados para el cliente.**

```text
Here is a list of our technical services: [paste list with one-line descriptions].
For each, propose one sentence beginning "The customer can…" in plain language, and name the kind of customer you are assuming. Do not invent facts about our business; where you cannot tell, write "unknown" and ask a question.
List what you are unsure of at the end.
```

**Encuentre vacíos de responsabilidad a partir de una lista de servicios.**

```text
Below is our service list with any owners we have recorded: [paste list].
Produce a table: service, owner (only if given; otherwise "none recorded"), and one question to ask to find the real owner. Do not guess owners.
Ask clarifying questions first, mark assumptions, and list what you are unsure of.
```

**Prepare una conversación con clientes.**

```text
I will meet customers of the service [service name] next week. Customer roles present: [list roles].
Draft eight open questions about what outcome they need, what blocks them, and what they do for themselves. Avoid leading questions and technical jargon. Do not suggest answers.
Finish with three things I should listen for and what you are unsure of.
```

## Habilidades de IA

- [service-catalog](../../../../skills/service-catalog/SKILL.md): úsela para convertir descripciones de servicios en un catálogo dirigido al cliente.
- [stakeholder-analysis](../../../../skills/stakeholder-analysis/SKILL.md): úsela para identificar a clientes, usuarios y patrocinadores y lo que necesita cada uno.
- [maturity-models](../../../../skills/maturity-models/SKILL.md): úsela para aplicar la tabla de madurez como autoevaluación del equipo.

## Fuentes principales

- Wikipedia, "Service management": una visión breve de la disciplina en distintos sectores.
- Wikipedia, "IT service management": cómo se aplican las ideas a TI, con los marcos que la describen.
- Wikipedia, "Service-dominant logic": la teoría de marketing detrás de la cocreación de valor, útil para explicar por qué el valor reside en el cliente.
- Wikipedia, "ITIL": el marco más conocido, incluida la definición de servicio citada arriba (compare su redacción con las publicaciones vigentes de su propietario; véase el Tema 1.3 — ITIL 5).

## Referencias

1. Service management — Wikipedia — https://en.wikipedia.org/wiki/Service_management
2. IT service management — Wikipedia — https://en.wikipedia.org/wiki/IT_service_management
3. Service (economics) — Wikipedia — https://en.wikipedia.org/wiki/Service_(economics)
4. Service-dominant logic — Wikipedia — https://en.wikipedia.org/wiki/Service-dominant_logic
5. Value creation — Wikipedia — https://en.wikipedia.org/wiki/Value_creation
6. ITIL — Wikipedia — https://en.wikipedia.org/wiki/ITIL
7. Service design — Wikipedia — https://en.wikipedia.org/wiki/Service_design
8. Customer experience — Wikipedia — https://en.wikipedia.org/wiki/Customer_experience
9. Artificial intelligence — Wikipedia — https://en.wikipedia.org/wiki/Artificial_intelligence
