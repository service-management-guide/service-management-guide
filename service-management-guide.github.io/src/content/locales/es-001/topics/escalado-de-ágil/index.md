# Escalado de Ágil

**Los marcos de escalado como el Scaled Agile Framework (SAFe), Large-Scale Scrum (LeSS) y Disciplined Agile ayudan a que muchos equipos trabajen en un mismo producto o servicio, pero añaden estructura y costo; reduzca primero las dependencias y el número de equipos, y adopte un marco solo para los problemas de coordinación que queden.**

## Por qué importa

La práctica ágil se describió primero para un único equipo pequeño que podía sentarse junto, planificar junto y liberar junto. Los servicios reales son mayores. La aplicación móvil de un banco, el historial clínico de un hospital o la plataforma de transporte de una ciudad necesitan decenas o cientos de personas, muchos equipos, componentes compartidos y proveedores. Esos equipos dependen unos de otros, y las dependencias los frenan.

Los marcos de escalado ofrecen formas de coordinar. Proponen roles, eventos y artefactos para que muchos equipos puedan planificar y liberar al unísono. Algunos tienen grandes seguidores, programas de formación y esquemas de certificación. También atraen críticas: que reintroducen planificación pesada y jerarquía bajo nombres ágiles, que se venden como un programa para la organización cuando el verdadero problema es la arquitectura o la responsabilidad, y que difunden el vocabulario más rápido que el comportamiento.

Quien gestiona servicios se encuentra con los marcos de escalado en la práctica, porque los equipos que operan servicios son los que se coordinan con los equipos de plataforma, seguridad y proveedores. Este tema explica las principales opciones de forma neutral, pregunta cuándo ayuda escalar y dice qué probar antes de adoptar un marco. Describe los marcos según las propias descripciones de sus propietarios siempre que es posible; consulte las publicaciones vigentes de los propietarios, porque las versiones cambian.

## Conceptos clave

**El problema de escalar.** Cuando más de un puñado de equipos contribuye a un mismo resultado, crecen tres cosas: las dependencias (un equipo espera a otro), el esfuerzo de coordinación (planificación y comunicación) y el riesgo de decisiones incoherentes. La ley de Brooks, de un libro de Fred Brooks de 1975 y descrita en Wikipedia, observa que añadir personas a un proyecto atrasado tiende a retrasarlo aún más, por el costo de la comunicación. Escalar consiste en buena parte en limitar ese costo.

**Ley de Conway.** La observación de que el diseño de un sistema tiende a reflejar la estructura de comunicación de la organización que lo construye. Si los equipos se organizan por capa técnica, el sistema tendrá fronteras de capa y cada función necesitará a todos los equipos. Muchos problemas de escalado son problemas de estructura; véase el Tema 1.6 — Cuatro Dimensiones de la Gestión de Servicios.

**SAFe.** El Scaled Agile Framework es un conjunto de patrones de organización y de flujo de trabajo, de Scaled Agile, Inc., para implantar lo ágil a escala empresarial. Organiza los equipos en grupos que planifican juntos en incrementos fijos y ofrece configuraciones para distintos tamaños, entre ellas los niveles de portafolio, de solución grande y esencial. Se usa mucho en grandes empresas y tiene orientación detallada y certificación. Los críticos señalan su tamaño y sus ciclos de planificación.

**LeSS.** Large-Scale Scrum, creado por Craig Larman y Bas Vodde, extiende Scrum a muchos equipos con un único backlog de producto y un único propietario de producto. Destaca la simplicidad y la eliminación de la estructura innecesaria, y expresa la idea de que escalar debería significar «menos» organización («less»). Supone que los equipos usan Scrum. Véase less.works para su propia descripción.

**Disciplined Agile.** Un conjunto de herramientas, originalmente de Scott Ambler y Mark Lines, descrito en Wikipedia como Disciplined Agile Delivery, que ofrece un menú de opciones para cada aspecto de la entrega y anima a los equipos a elegir lo que encaja con su contexto. Hoy lo mantiene el Project Management Institute. El nombre del propio marco incluye la palabra «delivery» y se cita aquí como nombre propio.

**Scrum de Scrums.** Un patrón en el que un representante de cada equipo se reúne con regularidad con los demás para coordinar entre equipos. Es simple y funciona con un número reducido de equipos.

**Otros enfoques.** Algunas organizaciones adoptan un modelo inspirado en cómo se describe a una empresa concreta. Las descripciones publicadas de los escuadrones, tribus, capítulos y gremios de una empresa de música se copiaron ampliamente, aunque las personas implicadas han dicho que era una instantánea de un experimento y no un marco para adoptar. Trate esas descripciones como fuentes de ideas, no como recetas.

**Topologías de equipos y responsabilidad.** Un enfoque que describe un pequeño número de tipos de equipo (alineados con el flujo, de plataforma, habilitadores y de subsistema complicado) y sus modos de interacción, con el fin de reducir dependencias. Es una forma de pensar la estructura, y complementa la elección de un marco o puede sustituirla en algunas organizaciones.

**Agilidad empresarial.** Una idea más amplia: toda la organización, incluidas finanzas, RR. HH. y gobierno, necesita responder al cambio, no solo los equipos de entrega. Wikipedia la describe bajo agilidad empresarial. Escalar equipos sin cambiar la presupuestación ni el gobierno suele fracasar.

**Equipos de servicio a escala.** Los equipos de operaciones, soporte y plataforma sirven a muchos equipos de producto, y su trabajo no encaja bien en incrementos de planificación. Necesitan interfaces claras, como un catálogo de servicios y niveles de servicio acordados, y capacidad para manejar interrupciones. Véanse el Tema 2.8 — Propiedad de Productos y Servicios y el Tema 3.8 — Gestión del Catálogo de Servicios.

**Cómo encajan las lentes.** Escalar trata de la lente ágil al tamaño de la organización. La IA puede ayudar a resumir dependencias y planes, bajo revisión. La automatización puede mostrar dependencias en las herramientas y mantener coherentes los planes. La analítica puede mostrar dónde espera el trabajo a otros equipos.

## Buenas prácticas

1. **Reduzca las dependencias antes de coordinarlas.** Busque maneras de hacer independientes a los equipos: responsabilidades más claras, mejores interfaces, componentes compartidos con su propio equipo o fusión de equipos que siempre trabajan juntos.
2. **Alinee los equipos con el flujo de valor.** Organice los equipos en torno a un servicio o recorrido del cliente, de modo que un equipo pueda entregar un cambio desde la idea hasta producción. Evite los equipos que son dueños solo de una capa técnica.
3. **Empiece con la coordinación más pequeña que funcione.** Para unos pocos equipos, conversaciones regulares y un tablero compartido pueden bastar. Añada estructura solo cuando un problema muestre que la necesita.
4. **Elija un marco para un problema con nombre.** Escriba el problema de coordinación, como «cinco equipos comparten una liberación y los bloqueos son frecuentes», y pregunte qué marco o práctica lo atiende. No adopte un marco porque sea popular.
5. **Mantenga un backlog y una prioridad visibles para un resultado compartido.** Muchos equipos que trabajan con listas de prioridad distintas producen conflicto. Acuerde quién decide la prioridad entre equipos.
6. **Haga visibles las dependencias.** Muestre en un tablero o mapa qué equipo espera a cuál. Revise las mayores y decida si eliminar o gestionar cada una.
7. **Ofrezca las plataformas como servicios.** Si un equipo de plataforma sirve a otros, trate a los demás equipos como clientes, publique interfaces y mida si ayudan. Véase el Tema 2.5 — DevOps.
8. **Involucre a operaciones y proveedores en la planificación.** Incluya a los equipos de servicio y de proveedores en la planificación entre equipos, para que las necesidades de operación y soporte no se descubran en el lanzamiento.
9. **Cambie la presupuestación y el gobierno para que encajen.** Financiar equipos estables y resultados, y mantener un gobierno ligero y basado en evidencia, respalda la entrega a escala mejor que la financiación proyecto por proyecto.
10. **Revise el propio marco.** Pasado un año, pregunte si redujo la espera y mejoró los resultados. Abandone o cambie lo que no ayuda.

## Preguntas para conversar con su equipo

**¿A qué equipos esperamos más y por qué?**
Esto encuentra dependencias. La gente suele nombrar repetidamente unos pocos equipos. Pida ejemplos reales con fechas. Después pregunte qué haría desaparecer la dependencia, como mover una habilidad, una interfaz o una decisión.

**¿Qué problema resolvería un marco de escalado para nosotros que no podamos resolver con un cambio más simple?**
Esto comprueba si hace falta un marco. Los equipos suelen citar alineación general. Insista en lo específico. Después elijan el cambio más pequeño para probar primero.

**¿Cómo están organizados nuestros equipos, por capa, componente o recorrido, y qué nos cuesta?**
La estructura da forma a las dependencias. Pregunte cuántos equipos tocan un cambio típico. Espere respuestas de tres a seis. Después esbocen una estructura alternativa para un recorrido.

**¿Quién decide la prioridad cuando chocan los trabajos de dos equipos?**
Los derechos de decisión poco claros hacen perder tiempo. Quizá oiga que depende, o que los directivos deciden tarde. Pida el último ejemplo. Después acuerden un decisor y un plazo para cada tipo de conflicto.

**¿Cómo apoya o dificulta nuestro modelo de financiación que los equipos permanezcan juntos y sean dueños de servicios?**
La financiación por proyectos disuelve los equipos y pierde conocimiento. Pregunte cuánto tiempo permanecen juntos los equipos y quién financia la mejora. Después enumeren un servicio que se beneficiaría de una financiación estable.

**¿Cómo podría ayudarnos la IA a ver y gestionar dependencias y qué podría salir mal?**
La IA puede leer planes y tickets y sugerir vínculos. También puede inventar dependencias o pasar por alto las reales. Pregunte quién comprueba y con qué frecuencia. Después comparen un mapa generado por IA con uno dibujado por dos equipos.

## En la práctica: un ejemplo de gestión de servicios

La división digital de una red ferroviaria nacional tiene once equipos trabajando en un servicio de planificación de viajes: web, móvil, datos de horarios, flujos en tiempo real, pagos, accesibilidad y otros. Las liberaciones requieren que los once equipos estén listos, y el retraso de cualquiera detiene al resto. Al director de la división le han aconsejado adoptar un gran marco de escalado con un programa de formación y nuevos roles.

La responsable del servicio pide dos semanas para mapear primero las dependencias. Dibuja un tablero con cada equipo y los elementos que esperaron el último trimestre. Cuatro equipos concentran la mayor parte de la espera: el equipo de datos de horarios es un cuello de botella para otros tres; pagos depende del ciclo de liberaciones de un proveedor; las revisiones de accesibilidad las hace tarde un equipo aparte; y un sistema de diseño compartido no tiene responsable. Propone cuatro cambios: trasladar a dos ingenieros de datos a los equipos que más esperan, publicar los datos de horarios mediante una interfaz documentada que los equipos puedan leer sin preguntar, colocar especialistas en accesibilidad en los equipos web y móvil, y entregar el sistema de diseño a un equipo designado que trate a los demás como clientes.

El director acepta probarlo durante un trimestre y celebrar cada seis semanas una breve sesión de planificación entre equipos, con una única lista visible de prioridades para el resultado compartido. Se aplaza un marco.

Qué cambia: el número de elementos que esperan a otros equipos baja y las liberaciones ya no necesitan que los once equipos estén listos. Qué sigue siendo difícil: pagos sigue dependiendo del calendario del proveedor; la lista de prioridades compartida se discute en cada sesión; y el proceso presupuestario de la división financia proyectos, de modo que dos equipos se disolverán a fin de año. La responsable dice al director que, sin cambiar la financiación, las mejoras quizá no perduren.

## Cuatro perspectivas

### Equipos de producto y de entrega

Busquen maneras de eliminar dependencias de otros equipos y hagan visibles las que queden. Participen en la planificación entre equipos y mantengan el servicio en producción dentro de sus planes.

### Equipos de servicio y de operaciones

Ofrezcan interfaces claras, como un catálogo de servicios y niveles acordados. Únanse a la planificación para que las necesidades de operación y soporte se conozcan pronto, y lleven a la conversación datos sobre interrupciones y esperas.

### Liderazgo y gobernanza

Pregunte qué problema de coordinación resolvería un marco y cómo sabrá que lo hizo. Cambie la financiación y el gobierno para que encajen con equipos estables y orientados a resultados. Nombre quién decide la prioridad entre equipos.

### Clientes y usuarios

Debería experimentar un servicio que cambia con coherencia, no un conjunto de liberaciones inconexas. Diga al proveedor dónde las funciones o experiencias le parecen incoherentes, porque eso suele revelar problemas de coordinación.

## Ágil, IA, automatización y analítica

### Ágil

Mantenga involucradas a las partes interesadas entre equipos, entregue en piezas pequeñas y mejore cómo se coordinan los equipos. Precaución: los eventos de planificación a escala pueden ser lotes grandes disfrazados; manténgalos cortos y mantenga pequeñas las liberaciones.

### IA

La IA puede resumir backlogs entre equipos, proponer vínculos de dependencia y redactar notas de planificación, bajo revisión humana. Nombre un responsable para cada uso. Precaución: los resúmenes de planes hechos por IA pueden aplanar los desacuerdos; mantenga a las personas tomando las decisiones de compromiso. Véase el Tema 5.1 — IA en la gestión de servicios.

### Automatización

Automatice el seguimiento de dependencias en sus herramientas, los pipelines compartidos y los entornos coherentes, de modo que la coordinación dependa menos de reuniones. Precaución: las herramientas que imponen un plan rígido pueden deshacer la flexibilidad; manténgalas como apoyo a la conversación. Véase el Tema 6.4 — Pipelines y cambio automatizado.

### Analítica

Mida el tiempo de espera entre equipos, el número de dependencias entre equipos por elemento y el tiempo desde la idea hasta la liberación de un resultado compartido. Precaución: comparar equipos con estas medidas ignora el contexto e invita a manipularlas; úselas para encontrar problemas estructurales. Véanse el Tema 7.6 — Analítica de procesos y de flujos de valor y el libro *Service Management Metrics*.

## Modos de fallo habituales

- **Marco primero.** Un gran programa empieza antes de nombrar el problema. Mapee dependencias y pruebe cambios simples.
- **Equipos organizados por capa.** Cada cambio necesita a todos los equipos. Organice en torno al recorrido.
- **Las reuniones de coordinación se multiplican.** La gente pasa la semana en planificación. Reduzca las dependencias y el número de eventos.
- **Prioridad poco clara entre equipos.** Los equipos tiran en direcciones distintas. Nombre un decisor.
- **Financiación sin cambios.** La financiación por proyectos rompe los equipos. Financie equipos estables y resultados.
- **Copiar el modelo de otra empresa.** El contexto es distinto. Trátelo como ideas, no como receta.
- **Plataforma como mandato.** Los equipos la rodean. Trate a los demás equipos como clientes.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Dependencias | Desconocidas | Dependencias principales conocidas | Dependencias visibles y con responsable | Dependencias reducidas con evidencia | Equipos en gran medida independientes con interfaces claras |
| Estructura | Equipos por capa | Algunos equipos alineados con recorridos | Equipos alineados con el flujo de valor | Estructura revisada frente a los resultados | Estructura que se adapta entre servicios y socios |
| Coordinación | Ad hoc | Conversaciones regulares | Planificación ligera y regular entre equipos | Costo de coordinación medido | Coordinación apoyada en herramientas e interfaces compartidas |
| Financiación y gobierno | Financiación por proyectos | Algunos equipos estables | Equipos estables y gobierno orientado a resultados | Financiación revisada frente a los resultados | Financiación y gobierno que se adaptan en todo el portafolio |

## Lista de verificación

- [ ] Mapeamos las dependencias entre equipos con ejemplos reales.
- [ ] Intentamos reducir las dependencias antes de adoptar un marco.
- [ ] Los equipos están alineados con un recorrido o servicio donde es posible.
- [ ] Hay un decisor designado para la prioridad entre equipos.
- [ ] Los equipos de plataforma y de servicio publican interfaces y tratan a los demás como clientes.
- [ ] La planificación entre equipos es breve e incluye a operaciones y proveedores.
- [ ] La financiación respalda a equipos estables.
- [ ] Revisamos cada año el marco elegido frente a los resultados.

## Prompts de IA

**Redacte un mapa de dependencias a partir de notas.**

```text
Here are notes on what each team waited for in the last quarter: [paste notes].
List each dependency as "team A waits for team B for X", count how often each appears, and list the five most frequent. Do not infer reasons.
List what you are unsure of.
```

**Compare opciones de estructura.**

```text
Our service involves these teams and what each owns: [paste]. A typical change needs: [describe].
Describe two alternative ways to organize the teams around the journey, with the trade-offs of each. Mark assumptions. Do not recommend a framework.
List what you are unsure of.
```

**Prepare una agenda de planificación entre equipos.**

```text
We have [number] teams planning together for [period]. The shared outcome is: [describe]. The top dependencies are: [list].
Draft a 90-minute agenda that focuses on dependencies and priorities, with time for each, and questions to ask. Keep it short and avoid framework jargon.
List what you are unsure of.
```

## Habilidades de IA

- [scaled-agile-framework](../../../../skills/scaled-agile-framework/SKILL.md): úsela para entender los roles y eventos de SAFe antes de decidir si encaja.
- [large-scale-scrum](../../../../skills/large-scale-scrum/SKILL.md): úsela para entender LeSS y sus supuestos.
- [disciplined-agile](../../../../skills/disciplined-agile/SKILL.md): úsela para ver las opciones que ofrece Disciplined Agile para un contexto.
- [scrum-of-scrums](../../../../skills/scrum-of-scrums/SKILL.md): úsela para un patrón ligero de coordinación entre equipos.

## Fuentes principales

- Craig Larman y Bas Vodde, LeSS (less.works): la descripción de los propietarios de Large-Scale Scrum.
- Scaled Agile, Inc., SAFe (scaledagileframework.com): el sitio propio del marco.
- Matthew Skelton y Manuel Pais, *Team Topologies* (2019): una forma de pensar la estructura de los equipos y su interacción.
- Wikipedia, "Scaled agile framework" y "Conway's law": antecedentes neutrales.

## Referencias

1. Scaled agile framework — Wikipedia — https://en.wikipedia.org/wiki/Scaled_agile_framework
2. Disciplined agile delivery — Wikipedia — https://en.wikipedia.org/wiki/Disciplined_agile_delivery
3. Scrum (project management) — Wikipedia — https://en.wikipedia.org/wiki/Scrum_(project_management)
4. Conway's law — Wikipedia — https://en.wikipedia.org/wiki/Conway%27s_law
5. Brooks's law — Wikipedia — https://en.wikipedia.org/wiki/Brooks%27s_law
6. Business agility — Wikipedia — https://en.wikipedia.org/wiki/Business_agility
7. Matrix management — Wikipedia — https://en.wikipedia.org/wiki/Matrix_management
8. Portfolio management — Wikipedia — https://en.wikipedia.org/wiki/Portfolio_management
9. Large-Scale Scrum (LeSS) — Larman and Vodde — https://less.works
10. Scaled Agile Framework — Scaled Agile, Inc. — https://scaledagileframework.com
