# Centro de Servicios

**El centro de servicios es el punto único de contacto entre un proveedor de servicios y sus usuarios, y funciona mejor cuando resuelve lo que puede en el primer contacto, encamina con rapidez a las personas adecuadas lo que no puede y devuelve lo que oye a la mejora; la IA puede clasificar y redactar, pero una persona sigue siendo responsable de la relación.**

## Por qué importa

Para la mayoría de los usuarios, el centro de servicios es el proveedor de servicios. Rara vez conocen a los ingenieros, arquitectos o gestores que hay detrás del servicio. Conocen a una persona en un chat, una llamada telefónica o un formulario, en un momento en que algo va mal o necesitan que se haga algo. Cómo vaya ese contacto determina cómo juzgan todo el servicio.

Un centro de servicios también se asienta sobre una rica fuente de información. Oye qué está roto, qué confunde a la gente y qué cambios causan problemas, a menudo antes que la monitorización. Cuando esa información se pierde en los tickets, la organización repite sus errores; cuando se usa, el centro se convierte en el sistema de alerta temprana de la organización.

El centro es también la parte de la gestión de servicios que más cambia la nueva tecnología. El chat, los portales de autoservicio, los agentes virtuales y las herramientas de IA reducen el volumen de contactos simples y cambian el aspecto de los restantes. Este tema describe para qué sirve un centro de servicios, los principales modelos y canales, y cómo introducir automatización e IA sin perder el lado humano. Las prácticas relacionadas son la gestión de solicitudes de servicio (Tema 3.6 — Gestión de Solicitudes de Servicio), la gestión de incidentes (Tema 3.2 — Gestión de Incidentes) y la gestión del conocimiento (Tema 3.9 — Gestión del Conocimiento).

## Conceptos clave

**Propósito.** En términos de ITIL 4, el centro de servicios capta la demanda de resolución de incidentes y de solicitudes de servicio, y es el punto de entrada y el punto único de contacto del proveedor de servicios con todos sus usuarios. Los artículos de Wikipedia sobre mesas de ayuda y puntos de contacto describen la idea.

**Punto único de contacto.** Los usuarios no deberían tener que conocer la estructura de la organización para obtener ayuda. Un solo lugar, con una forma de pedir y un registro de la solicitud, les ahorra la molestia de averiguar quién es responsable. El punto de contacto no es necesariamente un único número de teléfono; puede ser un portal, un chat, una dirección de correo y un mostrador de atención presencial que alimentan el mismo sistema.

**No solo TI.** Muchas organizaciones tienen centros más allá de TI, como recursos humanos e instalaciones. Véase el Tema 1.9 — Gestión de servicios empresariales.

**Canales.** Teléfono, correo, chat, un portal, una aplicación móvil, atención presencial, herramientas de mensajería y canales automatizados. Un enfoque omnicanal, descrito en Wikipedia, busca una experiencia coherente y un registro continuo cuando un usuario pasa de un canal a otro. El objetivo es encontrar a los usuarios donde ya están, sin obligar a que cada contacto pase por un formulario de ticket.

**Niveles y encaminamiento.** Muchos centros usan niveles: el personal de primera línea recibe el contacto y resuelve lo que puede, los especialistas de segunda línea atienden los asuntos más técnicos y los equipos de tercera línea incluyen desarrolladores y proveedores. Los niveles pueden crear traspasos y retrasos. Algunas organizaciones avanzan hacia menos traspasos dando a la primera línea mejores herramientas y conocimiento.

**Desplazar a la izquierda.** Llevar la resolución hacia el usuario o hacia el punto más temprano: autoservicio, artículos de conocimiento, automatización y mejor capacidad de la primera línea. Una solución que ocurre en el primer contacto o sin ningún contacto es más barata y rápida que una que pasa por varios niveles.

**Enjambre (swarming).** En lugar de pasar un problema por una cadena, un grupo de personas con habilidades relevantes colabora en él y luego vuelve a otro trabajo. El Consortium for Service Innovation, que también publica Knowledge-Centered Service (KCS), ha descrito un enfoque al que llama enjambre inteligente. El enjambre puede reducir los traspasos, pero necesita una coordinación clara y una cultura que lo respalde.

**Resolución en el primer contacto.** La proporción de contactos resueltos sin más contacto. Es una medida común y arriesgada: empujarla hacia arriba puede llevar a los agentes a cerrar tickets antes de tiempo o a evitar los complejos. Véase el libro *Service Management Metrics* para su definición y salvaguardas.

**Empatía y comunicación.** Un usuario con un problema suele estar estresado. El lenguaje sencillo, una declaración clara de lo que sucederá a continuación y la honestidad sobre la incertidumbre importan tanto como la habilidad técnica. El artículo de Wikipedia sobre la empatía da un contexto general.

**Conocimiento.** Los agentes del centro dependen de artículos de conocimiento y de notas compartidas. Knowledge-Centered Service propone captar y mejorar el conocimiento como subproducto de resolver problemas. Véase el Tema 3.9 — Gestión del Conocimiento.

**Agentes virtuales y chatbots.** Software que conversa con los usuarios, responde preguntas comunes y recoge detalles. Wikipedia describe los chatbots y los asistentes virtuales. Los útiles desvían los contactos simples y preparan los complejos, y pasan a una persona cuando no pueden ayudar. Véase el Tema 5.3 — Centro de servicio con IA y agentes virtuales.

**Experiencia.** Las encuestas de satisfacción, los net promoter scores y medidas similares preguntan a los usuarios qué pensaron. Son una fuente de información y cada una tiene límites: las respuestas de las encuestas provienen de un grupo autoseleccionado y las puntuaciones pueden verse influidas por cómo se formula la pregunta. Véase el Tema 7.7 — Analítica de experiencia y sentimiento.

**Cómo encajan las lentes.** La práctica ágil sugiere mejoras pequeñas y frecuentes del centro con los usuarios involucrados. La IA clasifica, resume y redacta respuestas. La automatización atiende las solicitudes rutinarias y el encaminamiento. La analítica revela la demanda, las causas de los contactos y la experiencia.

## Buenas prácticas

1. **Facilite pedir ayuda.** Ofrezca los canales que prefieren los usuarios y asegúrese de que todos conducen al mismo registro. Pruebe cada canal como lo haría un usuario.
2. **Sepa por qué le contacta la gente.** Categorice los contactos por motivo, revise con regularidad los principales y pregunte qué haría innecesario cada uno. Mantenga pocas categorías y útiles.
3. **Resuelva en el primer contacto donde sea seguro.** Dé al personal de primera línea el acceso, las herramientas y el conocimiento para arreglar problemas comunes, y reglas claras sobre lo que puede hacer.
4. **Dé cada vez un siguiente paso claro.** Diga a los usuarios qué ocurrirá, quién lo hará y cuándo tendrán noticias. El silencio genera contactos repetidos.
5. **Desplace a la izquierda con intención.** Para los contactos más comunes, ofrezca autoservicio, un artículo o automatización. Compruebe que la vía de autoservicio funciona y que los usuarios la conocen.
6. **Reduzca los traspasos.** Observe los tickets que pasan por varios equipos y pregunte si el enjambre, un mejor encaminamiento o mejores habilidades de la primera línea ayudarían.
7. **Escriba conocimiento mientras trabaja.** Capte las soluciones en artículos en el momento y mejórelos cuando fallen. Retire los artículos obsoletos.
8. **Escuche los patrones y transmítalos.** Diga a la gestión de problemas, a los equipos de producto y a los responsables lo que ve el centro. Incluya ejemplos de usuarios.
9. **Use la automatización y la IA con una persona responsable.** Deje que atiendan los pasos rutinarios, con un traspaso claro a una persona y una forma visible de llegar a una. Revise lo que hicieron.
10. **Cuide a las personas del centro.** Ofrezca formación, una carga de trabajo sostenible y un camino para crecer. Un centro con alta rotación pierde conocimiento y buena voluntad.

## Preguntas para conversar con su equipo

**¿Por qué nos contacta la gente y cuáles de esos contactos podrían evitarse?**
Use la lista real de los motivos principales. Espere restablecimientos de contraseña, solicitudes de acceso y preguntas del tipo «cómo hago». Pregunte qué detendría cada uno. Después elijan un motivo y estimen el esfuerzo para eliminarlo.

**¿Qué vive un usuario desde el momento del contacto hasta el momento de la resolución, paso a paso?**
Recorra un ticket real, incluidas las esperas. La gente suele descubrir largos silencios y preguntas repetidas. Después elijan un paso para mejorar este mes.

**¿Qué tickets pasan por más traspasos y qué los causa?**
Los traspasos cuestan tiempo y contexto. Busque patrones, como equipos concretos o tipos de asunto. Pregunte si el enjambre podría funcionar. Después prueben una ruta distinta para un tipo de ticket.

**¿Qué no puede hacer hoy el personal de primera línea que le permitiría resolver más en el primer contacto?**
Esto encuentra brechas de acceso, conocimiento y autoridad. Espere razones de seguridad y de proceso. Pregunte quién decidió y cuándo. Después elijan un permiso para ampliar, con salvaguardas.

**¿Dónde prefieren pedir ayuda los usuarios y estamos allí?**
Los usuarios pueden estar ya usando herramientas de chat o preguntando a colegas. Pregúnteles. Espere diferencias entre grupos. Después elijan un canal para mejorar o añadir y uno para retirar.

**¿Qué querríamos que hiciera un agente virtual o asistente de IA y qué debe quedarse en manos de una persona?**
Trace un límite claro: la IA para preguntas rutinarias y preparar detalles, las personas para la angustia, la ambigüedad y las decisiones con consecuencias. Pregunte quién es responsable del asistente y cómo se encuentran los errores. Después elijan una prueba pequeña con una persona que revise.

## En la práctica: un ejemplo de gestión de servicios

El centro de servicios de TI de una distribuidora regional de electricidad recibe unos 600 contactos por semana de 3.000 empleados, entre ellos operadores de la sala de control e ingenieros de campo. Los usuarios dicen que es difícil llegar a una persona, y las cifras del propio centro muestran un número creciente de contactos repetidos. El personal del centro dice que dedica la mitad del día a problemas de contraseñas y cuentas.

La jefa del centro revisa una muestra de 300 contactos y descubre que el 35 por ciento son problemas de contraseñas y accesos, el 20 por ciento son preguntas de «cómo hago» sobre tres aplicaciones y el 10 por ciento son contactos repetidos sobre un asunto anterior. Introduce tres cambios. Se añade al portal un restablecimiento de contraseña de autoservicio, con una guía breve fijada en la página de inicio de sesión. Se prueba un agente virtual con las preguntas de «cómo hago» de las tres aplicaciones, con un botón visible de «hablar con una persona». Y una política da al personal de primera línea la autoridad para conceder acceso estándar sin una segunda aprobación.

Tras dos meses, los contactos por contraseñas bajan en aproximadamente la mitad, y el agente virtual resuelve más o menos un tercio de sus conversaciones sin traspaso. La jefa lee cada semana una muestra de las conversaciones del agente y descubre que dio una respuesta errónea sobre el nuevo inicio de sesión de una aplicación. Corrige el artículo y añade una comprobación para las nuevas versiones.

Qué cambia: el personal atiende menos contactos rutinarios y dedica más tiempo a los asuntos complejos. Qué sigue siendo difícil: los ingenieros de campo en zonas remotas con mala conectividad no pueden usar el portal con fiabilidad y siguen llamando por teléfono; la nueva autoridad de acceso del centro preocupa al equipo de seguridad, que pide una revisión mensual; y parte del personal del centro teme que el agente virtual recorte sus empleos. La jefa dice abiertamente que el objetivo es liberar tiempo para trabajos más difíciles y acuerda con su directivo que no se reducirá la plantilla por este motivo durante un año.

## Cuatro perspectivas

### Equipos de producto y de entrega

El centro es su señal temprana. Denle notas de versión, problemas conocidos e información de soporte clara antes del lanzamiento, y lean lo que informa. Corrijan las causas de los contactos repetidos.

### Equipos de servicio y de operaciones

Trabajen con el centro en el conocimiento compartido, un escalamiento claro y una vía rápida a los especialistas. Únanse al enjambre donde ayude y cuenten al centro lo que han aprendido para que la primera línea pueda resolver más.

### Liderazgo y gobernanza

Trate al centro como la cara de sus servicios y un sistema de alerta temprana. Financie herramientas, trabajo de conocimiento y formación. Tenga cuidado con las metas que empujan al personal a cerrar tickets rápido. Pida evidencia de lo que experimentan los usuarios.

### Clientes y usuarios

Debería poder pedir ayuda de la forma que le convenga, saber qué ocurrirá a continuación y llegar a una persona cuando haga falta. Describa su problema y lo que estaba haciendo; ayuda al centro. Avíselos cuando un consejo no funcionó.

## Ágil, IA, automatización y analítica

### Ágil

Mejore el centro en pasos pequeños con los usuarios: pruebe un canal nuevo con un grupo, ajuste y amplíe. Involucre al personal del centro en la elección de qué cambiar. Precaución: el cambio constante de herramientas y guiones agota al personal; dosifique los cambios y explíquelos.

### IA

La IA puede clasificar y encaminar contactos, resumir hilos largos, sugerir artículos y redactar respuestas para que los agentes las revisen. Un agente virtual puede responder preguntas rutinarias. Nombre un responsable, mantenga una vía visible hacia una persona y revise una muestra de conversaciones de IA. Precaución: las respuestas erróneas entregadas con fluidez erosionan la confianza, así que siga las correcciones y las quejas. Véase el Tema 5.3 — Centro de servicio con IA y agentes virtuales.

### Automatización

Automatice las solicitudes rutinarias, como los restablecimientos de contraseña y el acceso estándar, con comprobaciones y registros, y automatice las actualizaciones de tickets y las notificaciones. Precaución: la automatización puede dejar a usuarios sin acceso o concederlo por error; incluya comprobaciones de identidad, límites de frecuencia y revisión. Véase el Tema 6.5 — Autoservicio y cumplimiento automatizado.

### Analítica

Observe los motivos de contacto, los volúmenes por canal, el tiempo de resolución, los contactos repetidos y los comentarios de los usuarios. Precaución: la resolución en el primer contacto y el tiempo de gestión pueden manipularse, y las puntuaciones de satisfacción reflejan quién contesta las encuestas; combínelas con muestras de contactos reales. Véanse el Tema 7.7 — Analítica de experiencia y sentimiento y el libro *Service Management Metrics*.

## Modos de fallo habituales

- **Es difícil llegar a una persona.** Los usuarios dan vueltas entre menús y bots. Ofrezca siempre una vía clara hacia una persona.
- **Silencio tras el primer contacto.** Los usuarios insisten. Dé un siguiente paso y un plazo.
- **Tickets cerrados para cumplir una meta.** Los contactos repetidos suben. Mida la resolución y las reaperturas y compruebe muestras.
- **Conocimiento escrito una vez y abandonado.** Los artículos se vuelven obsoletos. Revise su uso y retire lo que falla.
- **Traspasos por todas partes.** Los tickets rebotan entre colas. Mejore las habilidades de la primera línea, el encaminamiento o el enjambre.
- **Respuestas de bots que nadie comprueba.** El consejo erróneo se propaga. Revise una muestra y corrija la fuente.
- **Centro aislado de la organización.** Los patrones no se transmiten. Comparta lo que oye con los responsables.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Canales | Teléfono y correo | Portal añadido | Registro coherente entre canales | Canales elegidos según la evidencia de uso | Experiencia coherente entre canales y funciones |
| Resolución | Mayormente escalada | Algunas soluciones en primera línea | Autoridad y conocimiento de primera línea definidos | Resolución y reaperturas medidas | Resolución apoyada por automatización y enjambre |
| Conocimiento | Notas personales | Artículos compartidos | Artículos escritos como parte del trabajo | Uso y calidad de los artículos medidos | Conocimiento mejorado de forma continua a partir de los contactos |
| Comprensión | Recuentos de volumen | Principales motivos enumerados | Motivos revisados y transmitidos a los responsables | Contactos reducidos mediante causas raíz | Demanda moldeada junto con los equipos de producto y servicio |

## Lista de verificación

- [ ] Los usuarios pueden contactarnos por los canales que prefieren, con un único registro.
- [ ] Conocemos los principales motivos de contacto y los revisamos con regularidad.
- [ ] El personal de primera línea tiene la autoridad y el conocimiento para resolver los problemas comunes.
- [ ] Cada contacto termina con un siguiente paso y un plazo claros.
- [ ] Las vías de autoservicio funcionan y los usuarios las conocen.
- [ ] El conocimiento se escribe y se actualiza como parte del trabajo.
- [ ] Informamos de los patrones a los responsables de producto y de servicio.
- [ ] La automatización y la IA tienen un responsable, una vía visible hacia una persona y revisión por muestreo.

## Prompts de IA

**Agrupe los motivos de contacto.**

```text
Below are ticket titles and short descriptions from our service desk, with personal data removed: [paste sample].
Group them into up to ten reasons, count each, and quote two short examples exactly for each reason. For the top three, list one question to ask about whether the contact could be avoided. Do not guess causes.
List what you are unsure of.
```

**Redacte una respuesta para que la revise un agente.**

```text
User message: [paste message, with personal data removed]. Relevant article text: [paste article].
Draft a reply of under 120 words in plain language that uses only the article, states the next step, and says clearly if the article does not answer the question. Do not promise outcomes or timings that are not in the article.
List what you are unsure of.
```

**Pruebe el límite de un agente virtual.**

```text
Our virtual agent will handle: [list topics]. It must hand over to a person for: [list topics].
Write 25 test messages, some inside the scope, some at the edge, and some that must be handed over, and for each state the correct behavior. Do not include real personal data.
List what you are unsure of.
```

## Habilidades de IA

- [service-catalog](../../../../skills/service-catalog/SKILL.md): úsela para describir lo que los usuarios pueden pedir y cómo.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): úsela para encontrar traspasos y esperas en el flujo de tickets.
- [survey-design](../../../../skills/survey-design/SKILL.md): úsela para diseñar retroalimentación de usuarios que sea justa y útil.
- [getting-feedback](../../../../skills/getting-feedback/SKILL.md): úsela para reunir la retroalimentación de usuarios y agentes.

## Fuentes principales

- Consortium for Service Innovation, Knowledge-Centered Service (KCS) y enjambre inteligente: orientación práctica sobre conocimiento y colaboración en el soporte.
- PeopleCert, páginas de certificación ITIL: la descripción del propietario de la orientación de ITIL, incluida la práctica del centro de servicios.
- Wikipedia, "Help desk": una visión general de la función.
- Wikipedia, "Omnichannel": antecedentes del contacto multicanal coherente.

## Referencias

1. Help desk — Wikipedia — https://en.wikipedia.org/wiki/Help_desk
2. Customer support — Wikipedia — https://en.wikipedia.org/wiki/Customer_support
3. Point of contact — Wikipedia — https://en.wikipedia.org/wiki/Point_of_contact
4. Omnichannel — Wikipedia — https://en.wikipedia.org/wiki/Omnichannel
5. Chatbot — Wikipedia — https://en.wikipedia.org/wiki/Chatbot
6. Virtual assistant — Wikipedia — https://en.wikipedia.org/wiki/Virtual_assistant
7. Triage — Wikipedia — https://en.wikipedia.org/wiki/Triage
8. Self-service — Wikipedia — https://en.wikipedia.org/wiki/Self-service
9. Support ticket — Wikipedia — https://en.wikipedia.org/wiki/Support_ticket
10. Consortium for Service Innovation — KCS library — https://library.serviceinnovation.org
