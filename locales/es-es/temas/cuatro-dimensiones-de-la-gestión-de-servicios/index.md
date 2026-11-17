# Cuatro Dimensiones de la Gestión de Servicios

**ITIL 4 dice que todo servicio debe examinarse a través de cuatro dimensiones —organizaciones y personas, información y tecnología, socios y proveedores, y flujos de valor y procesos— y que un servicio falla cuando se descuida una de ellas, por bien que estén hechas las demás.**

## Por qué importa

Cuando un servicio tiene un problema, la primera explicación suele ser tecnológica: un error, un límite de capacidad, un ajuste mal configurado. A veces es correcta. A menudo la raíz está en otra parte: un equipo que no sabe que es responsable del servicio, un proveedor cuyo contrato no cubre el fallo o un flujo de aprobación que hace que la corrección tarde una semana.

Las cuatro dimensiones son una lista de comprobación contra el pensamiento estrecho. Para cualquier servicio o cambio, se hacen cuatro series de preguntas. ¿Quién hace el trabajo y tiene las habilidades, la estructura y la cultura para ello? ¿Qué información y tecnología usa el servicio y qué produce? ¿Qué socios y proveedores contribuyen y en qué condiciones? ¿Cómo fluye el trabajo y cuáles son los pasos y las reglas? Un servicio es tan fuerte como su dimensión más débil, y una mejora en una dimensión puede desperdiciarse por el descuido de otra.

Este tema explica las cuatro dimensiones tal como las describe ITIL 4, muestra cómo usarlas en el diseño y la revisión, y muestra dónde las toca cada una de las lentes ágil, IA, automatización y analítica. ITIL (Versión 5), presentada por PeopleCert en 2026, mantiene a ITIL 4 como la base más documentada. Consulte las páginas del propietario para ver cómo se presentan las dimensiones en la versión más reciente (véase el Tema 1.3 — ITIL 5).

## Conceptos clave

**Organizaciones y personas.** Esta dimensión abarca la estructura organizacional, los roles y responsabilidades, la cultura y las habilidades y competencias del personal. Incluye el liderazgo, cómo se toman las decisiones y cómo se comunican los equipos. La ley de Conway, la observación de que los sistemas tienden a reflejar las estructuras de comunicación de las organizaciones que los construyen, recuerda que la estructura da forma a los servicios. El Tema 8.3 — Cambio Organizacional y Adopción trata con detalle el lado humano del cambio.

**Información y tecnología.** Abarca la información y el conocimiento que necesita el servicio y las tecnologías que lo sustentan: plataformas, herramientas, datos y arquitectura. Incluye la información que el servicio crea, como registros e informes, y cómo se gestiona y protege. En la práctica actual incluye sistemas de IA, que añaden a las preguntas la calidad de los datos, el comportamiento del modelo y la supervisión. Atañen a esta dimensión el Tema 7.2 — Fundamentos y gobernanza de datos y el Tema 4.4 — Gestión de la Configuración.

**Socios y proveedores.** Pocos servicios los entrega por completo una sola organización. Esta dimensión abarca las relaciones con otras organizaciones que intervienen en el diseño, el desarrollo, la entrega, el soporte o la mejora: proveedores, proveedores de nube, contratistas y socios. Incluye las condiciones contractuales, la integración entre las partes y el riesgo de dependencia. Véase el Tema 3.14 — Gestión de Proveedores, y la idea de externalización y de dependencia de un proveedor (vendor lock-in).

**Flujos de valor y procesos.** Abarca las actividades, los flujos de trabajo, los controles y los procedimientos que convierten entradas en salidas, y cómo la organización los ordena en flujos de valor. Pregunta cómo fluye el trabajo, dónde espera y qué reglas se aplican. Véanse el Tema 1.7 — La Cadena de Valor del Servicio y el Tema 7.6 — Analítica de procesos y de flujos de valor.

**Factores externos.** ITIL 4 señala que las cuatro dimensiones están afectadas por factores externos, a menudo enumerados como políticos, económicos, sociales, tecnológicos, legales y ambientales (la lista PESTLE). Una regulación, un tipo de cambio o el precio de la energía pueden cambiar lo que un servicio puede hacer. Trátelos como contexto de cada dimensión y no como una quinta.

**Uso conjunto de las dimensiones.** Las dimensiones interactúan. Una nueva herramienta de automatización (tecnología) necesita personas con la habilidad de operarla (personas), puede depender de la hoja de ruta de un proveedor (socios) y cambia el flujo de trabajo (procesos). Saltarse una pregunta es como los proyectos acaban con una herramienta que nadie sabe usar o con un proceso que nadie puede seguir.

**Visión sociotécnica.** La idea de que las organizaciones están hechas de partes sociales y técnicas que deben diseñarse juntas tiene una larga historia, que Wikipedia resume bajo sistemas sociotécnicos. Las cuatro dimensiones son una versión práctica de esa idea para los servicios.

**Dónde encajan las lentes.** El trabajo ágil toca sobre todo las dimensiones de personas y procesos, mediante la estructura de equipos y los ciclos cortos de retroalimentación. La IA y la automatización están sobre todo en información y tecnología, pero también cambian roles y flujos de trabajo. La analítica toma información de las cuatro y informa de cómo se desempeña cada una.

## Buenas prácticas

1. **Haga las cuatro preguntas en cada cambio importante.** Antes de aprobar un cambio o un servicio nuevo, pregunte qué necesita de cada dimensión. Una tabla de una página con cuatro filas basta para exponer las brechas.
2. **Nombre la dimensión más débil.** Para un servicio existente, pregunte cuál es hoy la dimensión más débil y deje que eso guíe adónde va el esfuerzo de mejora. No recurra por defecto a la dimensión que su equipo encuentra más interesante.
3. **Ponga los roles por escrito.** Para la dimensión de personas, indique quién es responsable del servicio, quién lo soporta y quién decide. Compruebe que las personas tienen las habilidades o que hay un plan para desarrollarlas.
4. **Trate el conocimiento como parte de la información.** Enumere lo que la gente necesita saber para operar el servicio, dónde reside ese conocimiento y quién lo mantiene al día. Un runbook que nadie actualiza es un riesgo.
5. **Conozca la contribución de sus proveedores.** Para cada proveedor, registre qué aporta, el acuerdo, quién gestiona la relación y qué pasa si falla. Pruebe el arreglo en un ejercicio, no solo sobre el papel.
6. **Mapee el flujo, no solo los pasos.** Para la dimensión de procesos, siga una pieza de trabajo real y registre las esperas. Una descripción de proceso que enumera pasos pero no colas pasa por alto la mayor parte del retraso.
7. **Mire las interfaces.** La mayoría de los problemas ocurren donde una dimensión se encuentra con otra, como un traspaso entre un proveedor y un equipo interno, o entre una herramienta y el flujo de trabajo que apoya. Revise esas interfaces de forma específica.
8. **Incluya los factores externos.** Agregue una línea para todo lo que esté fuera de su control y afecte a cada dimensión: una regulación, un cambio de mercado, el precio de la energía. Revise la lista al menos una vez al año.
9. **Use las dimensiones en las revisiones posteriores a incidentes.** Tras un incidente, pregunte qué dimensión contribuyó. Si todas las revisiones culpan a la tecnología, el equipo probablemente no mira las demás. Véase el Tema 3.3 — Gestión de Problemas.
10. **Vuelva a revisar tras un cambio.** Cuando agregue IA, cambie de proveedor o reorganice, repita las cuatro preguntas, porque el equilibrio se mueve.

## Preguntas para conversar con su equipo

**Para nuestro servicio más importante, ¿cuál de las cuatro dimensiones es hoy la más débil?**
Esto pone el modelo en uso. Los equipos suelen decir primero la tecnología. Insista en la evidencia: un incidente reciente, un retraso, una queja. Compare respuestas entre roles, porque personas distintas ven debilidades distintas. Después elijan una acción para la dimensión más débil.

**¿Qué supone nuestro último gran cambio sobre personas, proveedores y procesos que nunca comprobamos?**
Los supuestos son donde fallan los planes. Espere «el equipo lo aprenderá» y «el proveedor lo apoyará». Pregunte quién confirmó cada uno. Después elijan un supuesto para probar esta semana.

**¿Qué proveedor podría causarnos más daño si fallara y cómo sabemos que podríamos sobrellevarlo?**
Esto prueba la dimensión de socios más allá de los contratos. Quizá oiga que el proveedor es grande y por tanto seguro. Pregunte cuándo se probó por última vez el arreglo. Después planifiquen un ejercicio pequeño, como un simulacro de conmutación por error o una revisión del plan de salida.

**¿Dónde espera más el trabajo en nuestro flujo de valor principal y qué dimensión causa la espera?**
Las esperas pueden venir de las personas (nadie disponible), la tecnología (herramienta lenta), los proveedores (cola externa) o el proceso (aprobación). Use un ejemplo real con fechas. Después pregunte quién podría eliminar la espera y cuánto costaría.

**¿Qué revisiones de incidentes del último año apuntaron a algo distinto de la tecnología?**
Esto comprueba si las revisiones miran con amplitud. Espere un patrón de causas tecnológicas y un número menor de causas de personas y procesos. Pregunte qué causas no atendimos. Después agreguen una pregunta fija sobre las cuatro dimensiones a la plantilla de revisión.

**¿Cómo está cambiando la IA cada dimensión de nuestro servicio?**
La IA afecta a las habilidades (personas), los datos y modelos (información y tecnología), los proveedores de servicios de IA (socios) y los pasos de aprobación y revisión (proceso). Pida un cambio concreto en cada una. Después elijan la dimensión con la mayor brecha de supervisión.

## En la práctica: un ejemplo de gestión de servicios

Una autoridad municipal de transporte planea reemplazar el back end de su aplicación de planificación de viajes. El plan del proyecto cubre la tecnología con gran detalle: una migración a la nube, un nuevo almacén de datos y una pila de monitorización. Una responsable de servicio pide una revisión de una página de las cuatro dimensiones antes de que se apruebe el plan.

En personas, la revisión descubre que solo dos ingenieros saben cómo se comporta el sistema actual bajo carga y ambos están cerca de la jubilación; no hay plan para transferir su conocimiento y no se ha dicho al equipo de soporte que la aplicación va a cambiar. En información y tecnología, el plan es sólido, aunque no dice cómo se validará el flujo de ubicación de autobuses en tiempo real. En socios, el flujo viene de un operador regional cuyo contrato se renueva en ocho meses, y el nuevo diseño depende de una función que el operador no ha aceptado proporcionar. En procesos, el flujo de liberación aún exige una aprobación de tres semanas que choca con las liberaciones semanales previstas.

La autoridad ajusta el plan: empareja a los dos ingenieros con colegas más jóvenes, incorpora al equipo de soporte a las revisiones de diseño, abre una conversación con el operador sobre el flujo y revisa la regla de aprobación con el responsable de cambios. Qué sigue siendo difícil: el operador puede no aceptar la función y la autoridad no tiene una fuente alternativa. La responsable de servicio lo registra como riesgo y pide al grupo directivo que decida cuánto esperar.

## Cuatro perspectivas

### Equipos de producto y de entrega

Use las cuatro dimensiones como revisión de diseño. Pregunte quién operará lo que construye, de qué datos y herramientas depende, qué socios están en la cadena y cómo fluirá el trabajo tras el lanzamiento. Incluya esas respuestas en su definición de terminado.

### Equipos de servicio y de operaciones

A menudo ven primero las dimensiones descuidadas: habilidades que faltan, traspasos con proveedores y retrasos de proceso. Plantéenlas con ejemplos concretos y pidan participar antes en la planificación para que las cuatro preguntas se hagan antes del lanzamiento.

### Liderazgo y gobernanza

Pida la visión de las cuatro dimensiones en las propuestas importantes. Financie las dimensiones no tecnológicas: habilidades, gestión de proveedores y mejora de procesos. Fíjese cuando los planes describen la tecnología con detalle y el resto en una frase.

### Clientes y usuarios

Usted experimenta las dimensiones juntas: la persona que le ayuda, la herramienta que usa, el proveedor que hay detrás y los pasos que debe seguir. Diga al proveedor dónde está bloqueado y qué parte del servicio parece ser la causa.

## Ágil, IA, automatización y analítica

### Ágil

Incluya a personas de cada dimensión en ciclos cortos de revisión con las partes interesadas, como el gestor de cuenta del proveedor o el responsable de soporte, y trate las brechas como elementos del backlog. Precaución: los equipos ágiles pueden concentrarse en la tecnología que construyen y descuidar a los proveedores y el proceso; agregue las cuatro preguntas a su revisión.

### IA

Pregunte de cada sistema de IA: quién es su responsable (personas), qué datos usa y cómo se comprueban (información), qué proveedor suministra el modelo y en qué condiciones (socios) y dónde revisa una persona su salida (proceso). Precaución: una función de IA de un proveedor activada por defecto puede eludir las cuatro, así que mantenga un inventario. Véase el Tema 5.6 — Gobernanza, riesgo y cumplimiento de la IA.

### Automatización

Automatice la recopilación de información de las dimensiones donde pueda, por ejemplo listando proveedores a partir de datos de contratos y servicios sin responsable a partir del catálogo. Precaución: la automatización cambia roles y flujos de trabajo, así que repita las cuatro preguntas con las personas afectadas.

### Analítica

Elija uno o dos indicadores por dimensión, por ejemplo la proporción de servicios con un responsable designado, los incidentes de proveedores, los errores de calidad de datos y el tiempo de espera en el flujo de valor. Precaución: cualquier indicador aislado puede manipularse, y las dimensiones sin una medida fácil, como la cultura, pueden quedar fuera; discútanlas de todos modos. Véanse el Tema 7.3 — Medición e informes y el libro *Service Management Metrics*.

## Modos de fallo habituales

- **Pensar solo en la tecnología.** Cada problema recibe una solución técnica. Haga las cuatro preguntas y mire las otras dimensiones.
- **Herramientas sin personas.** Llega una plataforma nueva y nadie está formado para operarla. Planifique las habilidades y los roles junto con la tecnología.
- **Riesgo de proveedores ignorado.** Existe un contrato, pero nadie probó el caso de fallo. Haga un ejercicio y registre el resultado.
- **Proceso descrito pero no observado.** El flujo documentado difiere del real. Siga trabajo real y compare.
- **Dimensiones tratadas como proyectos separados.** Los cambios de habilidades, herramientas, proveedores y procesos los gestionan grupos distintos que nunca se reúnen. Asigne un responsable para todo el cambio.
- **Factores externos olvidados.** Una regulación o un cambio de precios sorprende al equipo. Mantenga una lista breve y revísela.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Organizaciones y personas | Roles poco claros | Responsables de los servicios principales | Roles, habilidades y derechos de decisión definidos | Habilidades y estructura revisadas frente a los resultados | Equipos y habilidades organizados en torno a flujos de valor |
| Información y tecnología | Herramientas elegidas ad hoc | Sistemas principales enumerados | Información y tecnología mapeadas con responsables | Calidad de datos y uso de herramientas revisados | Tecnología y datos compartidos y gobernados entre servicios |
| Socios y proveedores | Solo contratos | Proveedores clave conocidos | Roles, acuerdos y planes de salida de los proveedores registrados | Desempeño de proveedores revisado y probado | Proveedores integrados en el flujo y la mejora compartidos |
| Flujos de valor y procesos | Pasos sin documentar | Proceso principal descrito | Flujos mapeados con esperas | Flujo medido y cuellos de botella atendidos | Flujos coordinados de extremo a extremo con los socios |

## Lista de verificación

- [ ] Cada cambio importante tiene una revisión de cuatro dimensiones.
- [ ] Cada servicio importante tiene un responsable designado y una lista de habilidades necesarias.
- [ ] La contribución, el acuerdo y el plan ante fallos de cada proveedor están registrados.
- [ ] Sabemos dónde reside la información y el conocimiento de cada servicio.
- [ ] Hemos seguido al menos un flujo de valor real con sus esperas.
- [ ] Las revisiones posteriores a incidentes preguntan qué dimensión contribuyó.
- [ ] Mantenemos una lista breve de factores externos y la revisamos.
- [ ] Los sistemas de IA están cubiertos en las cuatro dimensiones.

## Prompts de IA

**Redacte una revisión de cuatro dimensiones a partir de la descripción de un cambio.**

```text
Our change: [paste description]. Our service: [name].
Produce a table with four rows (organizations and people, information and technology, partners and suppliers, value streams and processes) and columns: what the description says, what it does not say, and two questions to ask. Do not invent facts.
List what you are unsure of.
```

**Encuentre riesgos de proveedores sobre los que preguntar.**

```text
Here is a list of our suppliers and what each provides: [paste list].
For each, list three questions we should ask about failure, exit, and integration. Do not state facts about the suppliers that I did not provide.
Mark assumptions and list what you are unsure of.
```

**Convierta una revisión de incidente en preguntas de cuatro dimensiones.**

```text
Below is the summary of an incident review: [paste summary].
For each of the four dimensions, list what the review says about it and one question we have not yet asked. Do not assign blame or invent causes.
List what you are unsure of.
```

## Habilidades de IA

- [root-cause-analysis](../../../../skills/root-cause-analysis/SKILL.md): úsela para rastrear causas a través de las cuatro dimensiones.
- [vendor-management](../../../../skills/vendor-management/SKILL.md): úsela para revisar la dimensión de socios y proveedores.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): úsela para examinar la dimensión de flujos de valor y procesos.

## Fuentes principales

- PeopleCert, páginas de certificación ITIL: la descripción del propietario de la orientación de ITIL, incluido cómo enmarca las dimensiones la versión más reciente.
- Wikipedia, "Sociotechnical system": la idea de fondo de diseñar juntas las partes sociales y técnicas.
- Wikipedia, "Conway's law": una explicación breve y útil de cómo la estructura da forma a los sistemas.
- Wikipedia, "PEST analysis": la familia de listas de factores externos que incluye PESTLE.

## Referencias

1. ITIL — Wikipedia — https://en.wikipedia.org/wiki/ITIL
2. IT service management — Wikipedia — https://en.wikipedia.org/wiki/IT_service_management
3. Sociotechnical system — Wikipedia — https://en.wikipedia.org/wiki/Sociotechnical_system
4. Conway's law — Wikipedia — https://en.wikipedia.org/wiki/Conway%27s_law
5. Organizational structure — Wikipedia — https://en.wikipedia.org/wiki/Organizational_structure
6. Outsourcing — Wikipedia — https://en.wikipedia.org/wiki/Outsourcing
7. Vendor lock-in — Wikipedia — https://en.wikipedia.org/wiki/Vendor_lock-in
8. Business process — Wikipedia — https://en.wikipedia.org/wiki/Business_process
9. PEST analysis — Wikipedia — https://en.wikipedia.org/wiki/PEST_analysis
10. ITIL Foundation Bridge (Version 5) — PeopleCert — https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-foundation-bridge-version-5-4158
