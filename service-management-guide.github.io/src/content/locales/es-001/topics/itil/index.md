# ITIL

**ITIL es el cuerpo de orientación más utilizado para la gestión de servicios de TI, puesto por escrito por el gobierno del Reino Unido en la década de 1980 y hoy propiedad de PeopleCert; trátelo como una biblioteca de ideas que se adaptan con evidencia, no como una norma que se aprueba o se suspende.**

## Por qué importa

ITIL aparece en ofertas de empleo, contratos con proveedores y catálogos de formación de todo el mundo. Mucha gente usa la palabra para referirse a un proceso concreto, como el comité asesor de cambios, o a una herramienta concreta. Ambos usos son demasiado estrechos y ambos llevan a discusiones que en realidad tratan de otra cosa.

Saber de dónde viene ITIL explica por qué se lee como se lee. Comenzó como consejo práctico para operar grandes centros de cómputo del gobierno, creció hasta ser un conjunto de libros de procesos y se convirtió en un conjunto más amplio de prácticas y un modelo de valor. Cada etapa dejó vocabulario. Un equipo que entiende la historia puede distinguir qué partes responden a un problema real hoy y cuáles son un hábito heredado.

ITIL también se sitúa dentro de un campo mayor. Es un marco entre varios (véase el Tema 1.8 — Marcos y estándares de gestión de servicios), y la versión más reciente tiene su propio tema (véase el Tema 1.3 — ITIL 5). Este tema ofrece los antecedentes y un mapa de lo que contiene ITIL, para que el resto de la guía use sus términos con cuidado.

## Conceptos clave

**Orígenes.** ITIL son las siglas de Information Technology Infrastructure Library. Según Wikipedia, fue desarrollada en la década de 1980 por la Central Computer and Telecommunications Agency (CCTA), un organismo del gobierno del Reino Unido, para mejorar la calidad y la eficiencia de las TI gubernamentales. La primera forma fue un gran conjunto de libros. Más tarde, la responsabilidad pasó a la Office of Government Commerce (OGC) y luego a otros organismos; consulte las fuentes de abajo para el detalle, porque la titularidad ha cambiado de manos más de una vez.

**Versiones.** En la nomenclatura abreviada de uso general: la versión 1 fue la de los libros originales; la versión 2 (hacia 2001) los reagrupó en conjuntos como soporte del servicio y entrega del servicio; la versión 3 (2007), actualizada en 2011, organizó la orientación en torno a un ciclo de vida del servicio de estrategia, diseño, transición, operación y mejora continua; ITIL 4 (2019) sustituyó el ciclo de vida por el sistema de valor del servicio y un conjunto de prácticas; ITIL (Versión 5) fue presentada por PeopleCert en 2026. Las fechas de esta lista provienen de referencias generales y pueden diferir en un año según la fuente, así que confirme con el propietario la que utilice.

**Titularidad.** El propietario actual de ITIL es PeopleCert, una empresa de certificación. El propietario publica la orientación, gestiona el esquema de certificación y concede licencias a los proveedores de formación. Las consecuencias prácticas son que los textos completos son publicaciones con licencia, que la terminología oficial proviene del propietario y que todo lo que un tercero describa como «ITIL» debe contrastarse con la redacción vigente del propietario.

**Mejor práctica o práctica común.** A menudo se llama a ITIL «mejor práctica». La lectura más modesta y más exacta es que recoge prácticas que a muchas organizaciones les resultaron útiles. No prueba que una práctica dada funcione en su contexto. Esta guía le pide que contraste cada práctica con su propia evidencia.

**Qué contiene ITIL 4.** El sistema de valor del servicio (SVS) describe cómo la oportunidad y la demanda se convierten en valor, mediante la gobernanza, la cadena de valor del servicio, las prácticas, los principios rectores y la mejora continua (véase el Tema 1.4 — El sistema de valor del servicio). Cuatro dimensiones enmarcan lo que necesita todo servicio: organizaciones y personas, información y tecnología, socios y proveedores, y flujos de valor y procesos (véase el Tema 1.6 — Cuatro Dimensiones de la Gestión de Servicios). Los siete principios rectores están en el Tema 1.5 — Principios Rectores de ITIL, y las seis actividades de la cadena de valor, en el Tema 1.7 — La Cadena de Valor del Servicio. ITIL 4 describe 34 prácticas en tres grupos: gestión general, gestión de servicios y gestión técnica. La Parte 3 de esta guía cubre las principales.

**Certificación.** La certificación ITIL se aplica a las personas, en etapas que van desde el nivel básico hasta niveles superiores. No certifica a una organización. Una organización que quiere una norma auditada externamente suele mirar ISO/IEC 20000. Un certificado muestra que alguien estudió el material; no muestra que sepa operar una práctica.

**Relación con lo ágil y DevOps.** Las primeras versiones de ITIL se leían como secuenciales, controladas y cargadas de documentos. Esa lectura era a menudo correcta para su época y su tecnología, y llevó a muchos equipos ágiles a tratar a ITIL como un enemigo. ITIL 4 se conecta de forma explícita con las ideas ágiles, lean y DevOps. El Tema 2.5 — DevOps cubre cómo se relacionan ambos, y el Tema 2.9 — Gestión de Servicios Ágil cubre la aplicación de los valores ágiles a las propias prácticas.

## Buenas prácticas

1. **Lea el texto del propietario para los términos que importan.** Para una definición que vaya a citar, como servicio, incidente o cambio, lea la redacción publicada por el propietario y cítela. Los resúmenes de terceros se desvían.
2. **Adapte, no adopte en bloque.** Elija las prácticas que respondan a un problema que tiene. Empiece donde está y agregue estructura solo cuando resuelva algo que los clientes o el personal puedan percibir.
3. **Tenga presente la historia al leer material antiguo.** Un proceso diseñado para lanzamientos poco frecuentes en servidores físicos necesita replantearse para la entrega continua. Pregunte qué problema resolvía la orientación y luego si todavía lo tiene.
4. **Use prácticas, no departamentos.** Una práctica atraviesa equipos. No cree un «departamento de incidentes» porque ITIL tenga una práctica de incidentes; asegúrese de que el trabajo se haga bien dondequiera que esté.
5. **Etiquete las afirmaciones sobre ITIL por versión.** Escriba «en ITIL 4» o «en ITIL 5» para que el lector sepa cuál está leyendo, y mantenga una nota fechada de lo que verificó con el propietario.
6. **Separe la certificación de la capacidad.** Financie formación para quienes la necesiten y juzgue la preparación por el desempeño observado: ¿puede el equipo gestionar un incidente mayor o estimar el riesgo de un cambio?
7. **Combine ITIL con una visión de ingeniería.** Una sus prácticas con prácticas de entrega como las pruebas automatizadas, la infraestructura como código y el desarrollo basado en tronco, de modo que los controles queden integrados en el trabajo.
8. **Haga explícito el responsable de cada práctica.** Nombre a una persona responsable de cómo funciona una práctica, que pueda cambiarla y mejorarla junto con el equipo que hace el trabajo.
9. **Revise las prácticas con evidencia.** Observe lo que produce la práctica, como el tiempo para restablecer el servicio o la proporción de cambios que causan incidentes, y cámbiela cuando la evidencia lo indique.
10. **Mantenga la terminología coherente pero ligera.** Use el vocabulario compartido donde ayude a personas de distintos equipos a entenderse y descarte los términos que solo crean ceremonia.

## Preguntas para conversar con su equipo

**Cuando decimos «ITIL», ¿a qué nos referimos? ¿A un proceso, una herramienta, un certificado, un marco o un hábito?**
La gente usa la palabra para cosas distintas, y las discusiones sobre ITIL suelen ser discusiones sobre el significado. Pida un ejemplo a cada persona. Probablemente oirá una mezcla de una reunión concreta, una herramienta de tickets y un curso de formación. Después escriba una frase acordada sobre lo que ITIL significa para nosotros.

**¿Cuáles de nuestras prácticas existen por ITIL y qué problema resuelve hoy cada una?**
Esto separa las prácticas que funcionan de las heredadas. Escuche las respuestas que citan un fallo real, como una caída tras un cambio sin revisar, y las que solo citan «lo dice el marco». Después elija una práctica sin un problema claro y acuerden cómo comprobar si hace falta.

**¿Dónde supone nuestro uso de ITIL que los lanzamientos son lentos y poco frecuentes?**
Muchos controles datan de una época de lanzamientos grandes y raros. Los equipos que ahora lanzan a diario suelen encontrar pasos de aprobación que no pueden seguir el ritmo. Reúna ejemplos concretos. Después pregunte qué riesgo debía controlar cada paso y si una comprobación en el pipeline podría controlarlo mejor.

**¿Quién responde por cada una de nuestras prácticas y cómo se entera de lo que no funciona?**
Una práctica sin responsable no puede mejorar. Espere incertidumbre sobre quién es dueño de la gestión del conocimiento o de la gestión de problemas. Después pregunte cómo aprende el responsable de las personas que hacen el trabajo.

**¿Qué aprendimos de la última certificación que pagamos y qué cambiamos por ello?**
Esto vincula la formación con los resultados. Quizá oiga que el curso gustó pero que nada cambió en el trabajo. Es información útil, no una acusación. Después acuerden un cambio que probará el próximo mes alguien que haya hecho el curso.

**¿Qué sabemos de la orientación más reciente del propietario y cómo lo sabemos?**
Esto introduce la disciplina de las fuentes (véase el Tema 1.3 — ITIL 5). Los equipos suelen conocer titulares de blogs y charlas de congresos. Clasifique lo que dice el equipo en verificado con el propietario, plausible y desconocido. Después asigne a alguien para leer la página del propietario y anotar la fecha.

## En la práctica: un ejemplo de gestión de servicios

El departamento de TI de una aseguradora mediana ha usado el vocabulario de ITIL durante quince años. Un nuevo jefe de ingeniería de plataforma dice que el marco es burocrático y quiere abandonarlo. La gerente de servicios se opone y cita hallazgos de auditoría que el marco ayudó a cerrar.

Acuerdan poner a prueba la afirmación en lugar de discutirla. El equipo enumera las diez prácticas que realmente ejecuta y, para cada una, anota el problema que debía resolver y una evidencia reciente. Cuatro prácticas tienen evidencia clara: la gestión de incidentes, la habilitación de cambios, la gestión de solicitudes de servicio y el catálogo de servicios producen resultados medibles que el negocio nota. Tres tienen evidencia pero una carga excesiva, en especial el comité asesor de cambios semanal que revisa todos los cambios, incluidos los estándar con un largo historial de éxito. Tres no tienen ni evidencia ni responsable.

El departamento conserva las cuatro primeras, sustituye la revisión que hacía el comité de los cambios rutinarios por comprobaciones en el pipeline y una revisión entre pares, y retira una de las prácticas sin responsable tras confirmar que ninguna auditoría depende de ella. También envía a dos ingenieros a un curso breve para que puedan leer directamente la orientación vigente del propietario.

Qué cambia: el debate pasa de «ITIL bueno o malo» a qué práctica atiende qué riesgo. Qué sigue siendo difícil: los auditores siguen pidiendo la evidencia en un formato particular, y producirla desde el pipeline requiere tiempo de ingeniería que el equipo aún no ha financiado. Las dos prácticas sin responsable que quedan están en el backlog de mejoras.

## Cuatro perspectivas

### Equipos de producto y de entrega

Aprenda el vocabulario de las prácticas que afectan a su trabajo, como la habilitación de cambios y la gestión de versiones, para poder mostrar cómo su pipeline cumple su intención. Pregunte a operaciones qué necesita de usted para operar el producto y proporciónelo.

### Equipos de servicio y de operaciones

Usted lleva la mayoría de las prácticas de ITIL en el día a día. Manténgalas ligadas a la evidencia y traiga ejemplos de dónde una práctica ayuda y dónde frena a la gente. Proponga cambios a las prácticas en lugar de rodearlas.

### Liderazgo y gobernanza

Pregunte qué problema resuelve cada práctica, quién es su responsable y qué evidencia muestra que funciona. Sea cauto con gastar en certificación como sustituto de la capacidad. Contraste las afirmaciones sobre nuevas versiones con las publicaciones del propietario antes de comprometer dinero.

### Clientes y usuarios

Rara vez ve ITIL en sí. Ve con qué rapidez se resuelven los incidentes, cuán claras son las solicitudes y cómo se comunican los cambios. Si una práctica le afecta, como un paso de aprobación, pregunte al proveedor para qué sirve.

## Ágil, IA, automatización y analítica

### Ágil

Trate las prácticas como un backlog de cosas por mejorar junto con quienes las operan, entregadas en pasos pequeños y revisadas con las partes interesadas. Precaución: no use el lenguaje ágil como pretexto para abandonar controles que gestionan un riesgo real; sustituya el control por uno mejor.

### IA

ITIL 5, tal como lo describe el propietario, aborda entornos habilitados por IA (véase el Tema 1.3 — ITIL 5). Use la IA para ayudar a las personas a encontrar y leer la orientación más rápido, con una persona que verifique la fuente, y asigne un responsable a cualquier sistema de IA usado en el trabajo de servicio. Precaución: un asistente de IA puede afirmar con seguridad detalles de ITIL que son erróneos o están desactualizados; pídale que cite el texto que usted aportó en lugar de responder de memoria.

### Automatización

Integre controles en pipelines y herramientas para que seguir la práctica sea el camino más fácil, por ejemplo una comprobación automática de que cada registro de cambio enlaza con una compilación probada. Precaución: la automatización puede esconder una mala práctica tras una marca verde, así que revise qué prueba realmente cada control automatizado.

### Analítica

Use unas pocas medidas para ver si las prácticas funcionan, como el tiempo para restablecer el servicio, la proporción de cambios que causan incidentes y las solicitudes atendidas en los plazos acordados. Precaución: las medidas de cumplimiento de la práctica, como «porcentaje de tickets con categoría», pueden manipularse y dicen poco de los resultados. Consulte el libro *Service Management Metrics* para definiciones y salvaguardas.

## Modos de fallo habituales

- **Equiparar ITIL con un solo proceso.** La gente discute sobre el comité asesor de cambios y se pierde el resto. Describa las prácticas que realmente ejecuta y juzgue cada una con su propia evidencia.
- **Citar blogs como si fueran la norma.** Los detalles se desvían entre resúmenes de terceros. Cite las publicaciones del propietario y feche su lectura.
- **Los certificados como prueba de capacidad.** Un equipo formado puede operar mal una práctica. Observe el trabajo y mire los resultados.
- **Copiar el marco en lugar de resolver un problema.** El equipo instala todas las prácticas y los clientes no notan nada. Parta de un problema y agregue la práctica que lo atiende.
- **Tratar la orientación antigua como obsoleta o como sagrada.** Ambas posturas ignoran la evidencia. Compare la orientación con el comportamiento real de su servicio.
- **Controles añadidos a mano que la automatización podría proporcionar.** El personal se convierte en el control. Traslade las comprobaciones rutinarias a los pipelines y reserve la revisión humana para los juicios.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Uso de ITIL | Términos usados con laxitud | Algunas prácticas adoptadas por nombre | Prácticas elegidas definidas y con responsable | Prácticas revisadas con evidencia | Las prácticas evolucionan con la entrega y los datos entre equipos |
| Disciplina de fuentes | Resúmenes de blogs | Textos del propietario leídos por unos pocos | Afirmaciones etiquetadas por versión y verificadas | Reverificadas antes de decidir | Registro de verificación compartido y fechado |
| Capacidad | Solo certificados | Comienzan las revisiones de prácticas | Capacidad observada en simulacros y revisiones | Resultados medidos y aprovechados | Aprendizaje compartido en la organización y con los socios |

## Lista de verificación

- [ ] Podemos decir en una frase qué significa «ITIL» en nuestra organización.
- [ ] Enumeramos las prácticas que ejecutamos y el problema que resuelve cada una.
- [ ] Cada práctica tiene un responsable designado.
- [ ] Etiquetamos las afirmaciones sobre ITIL por versión y citamos al propietario para las definiciones.
- [ ] Juzgamos las prácticas con evidencia, como el tiempo de restablecimiento y el fallo de cambios.
- [ ] Separamos la certificación de la capacidad en nuestra planificación.
- [ ] Los controles rutinarios están integrados en pipelines donde es posible.
- [ ] Volvemos a consultar las publicaciones del propietario antes de las decisiones importantes.

## Prompts de IA

**Compare nuestras prácticas con los problemas que resuelven.**

```text
Here is a list of the practices our team runs: [list practices].
For each, ask me what problem it solved when it was introduced and what recent evidence shows it works. Then produce a table: practice, problem, evidence, owner (only what I tell you), and a question to test whether we still need it.
Do not invent facts about ITIL. List what you are unsure of.
```

**Contraste afirmaciones sobre ITIL con el texto del propietario.**

```text
Below are statements we have heard about ITIL: [paste statements].
Below is text copied from the owner's published pages: [paste owner text].
For each statement, say whether the owner's text supports it, contradicts it, or is silent, and quote the words exactly. Use no outside knowledge.
List what you are unsure of.
```

**Redacte una explicación en lenguaje llano para el personal nuevo.**

```text
Write a one-page explanation for new starters of how our organization uses ITIL, using only this description of our practice: [paste description].
Keep it under 400 words, avoid jargon, and flag every statement that comes from our description versus general knowledge. Do not add claims about ITIL versions.
End with what you are unsure of.
```

## Habilidades de IA

- [itil-5](../../../../skills/itil-5/SKILL.md): úsela para contrastar las prácticas con la orientación más reciente del propietario, con las afirmaciones marcadas como no confirmadas.
- [maturity-models](../../../../skills/maturity-models/SKILL.md): úsela para evaluar cuánto ha madurado cada práctica.
- [service-catalog](../../../../skills/service-catalog/SKILL.md): úsela cuando el trabajo lleve a describir servicios para los clientes.

## Fuentes principales

- PeopleCert, páginas de certificación ITIL: la descripción que da el propio propietario del marco y del esquema de certificación.
- Wikipedia, "ITIL": historia, versiones y cambios de titularidad en forma resumida.
- Wikipedia, "IT service management": el campo al que pertenece ITIL.
- Wikipedia, "ISO/IEC 20000": la norma certificable para sistemas de gestión de servicios, a menudo comparada con ITIL.

## Referencias

1. ITIL — Wikipedia — https://en.wikipedia.org/wiki/ITIL
2. IT service management — Wikipedia — https://en.wikipedia.org/wiki/IT_service_management
3. Central Computer and Telecommunications Agency — Wikipedia — https://en.wikipedia.org/wiki/Central_Computer_and_Telecommunications_Agency
4. Office of Government Commerce — Wikipedia — https://en.wikipedia.org/wiki/Office_of_Government_Commerce
5. AXELOS — Wikipedia — https://en.wikipedia.org/wiki/AXELOS
6. ISO/IEC 20000 — Wikipedia — https://en.wikipedia.org/wiki/ISO/IEC_20000
7. DevOps — Wikipedia — https://en.wikipedia.org/wiki/DevOps
8. Continual improvement process — Wikipedia — https://en.wikipedia.org/wiki/Continual_improvement_process
9. Artificial intelligence — Wikipedia — https://en.wikipedia.org/wiki/Artificial_intelligence
10. ITIL Foundation Bridge (Version 5) — PeopleCert — https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-foundation-bridge-version-5-4158
