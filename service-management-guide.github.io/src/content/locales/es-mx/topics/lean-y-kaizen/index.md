# Lean y kaizen

**Lean es una forma de pensar el trabajo que elimina el desperdicio y se centra en el valor que recibe el cliente, y kaizen es su hábito de mejora continua en pequeños pasos por parte de quienes hacen el trabajo; juntos aportan buena parte del pensamiento práctico que hay detrás de la gestión ágil de servicios.**

## Por qué importa

Los equipos de servicio cargan con mucho trabajo que no ayuda a los clientes: aprobaciones duplicadas, informes que nadie lee, traspasos que pierden información, tickets reabiertos porque la primera respuesta no daba en el clavo. Cada pieza parece razonable por separado. Juntas consumen más tiempo que el trabajo útil y hacen que cada servicio sea más lento y más caro de lo necesario.

El pensamiento lean ofrece un vocabulario para verlo. Pregunta qué valora el cliente, sigue los pasos que lo producen y etiqueta el resto como desperdicio por reducir. Kaizen, una palabra japonesa que significa «cambio para mejor», aporta el método para reducirlo: muchas mejoras pequeñas, hechas todo el tiempo, por las personas más cercanas al trabajo. No hace falta ningún gran rediseño.

Ambas ideas vienen de la manufactura, en especial del Sistema de Producción de Toyota, y ambas se han adaptado al software y a los servicios. Sustentan los principios rectores de ITIL 4 «centrarse en el valor», «mantenerlo simple y práctico» y «avanzar de forma iterativa con retroalimentación» (véase el Tema 1.5 — Principios Rectores de ITIL). Este tema explica las ideas clave, muestra cómo aplicarlas al trabajo de servicios y muestra dónde pueden usarse mal.

## Conceptos clave

**Manufactura lean y el Sistema de Producción de Toyota.** Lean es una etiqueta para métodos de producción derivados del Sistema de Producción de Toyota, desarrollado después de la Segunda Guerra Mundial. Sus objetivos son entregar valor al cliente, reducir el desperdicio y mejorar el flujo. Los artículos de Wikipedia sobre la manufactura lean y sobre el Sistema de Producción de Toyota dan los antecedentes. La palabra «lean» se popularizó tras la investigación sobre la producción de automóviles a finales del siglo XX.

**Valor y desperdicio.** En términos lean, el valor es aquello por lo que el cliente está dispuesto a pagar o que notaría si faltara. El desperdicio, llamado «muda» en japonés, es toda actividad que consume recursos y no agrega valor. Lean nombra también «muri» (sobrecarga de personas o equipos) y «mura» (irregularidad en el trabajo). Juntos, estos tres suelen llamarse las tres emes.

**Los siete desperdicios, traducidos al trabajo de servicios.** La lista clásica de siete desperdicios de la manufactura tiene análogos en los servicios:

| Desperdicio clásico | En el trabajo de servicios, por ejemplo |
|---|---|
| Transporte | Pasar un ticket entre muchas colas |
| Inventario | Un backlog de solicitudes que nadie atenderá jamás |
| Movimiento | Buscar información en muchos sistemas |
| Espera | Una solicitud parada a la espera de aprobación |
| Sobreproducción | Informes y funciones que nadie pidió |
| Sobreprocesamiento | Pasos de aprobación que no añaden seguridad |
| Defectos | Correcciones erróneas que causan tickets repetidos |

Muchos autores de lean añaden un octavo, el talento no aprovechado de las personas. En el software, Mary y Tom Poppendieck adaptaron la lista en su trabajo sobre desarrollo lean de software, que describe Wikipedia.

**Flujo y arrastre.** Lean organiza el trabajo para que fluya con suavidad y para que el trabajo nuevo empiece cuando hay capacidad en lugar de empujarse hacia dentro. Véase el Tema 2.3 — Flujo y kanban para las herramientas.

**Respeto por las personas.** Lean en Toyota descansa en dos pilares, la mejora continua y el respeto por las personas. En la práctica, eso significa pedir a quienes hacen el trabajo que encuentren los problemas y propongan las soluciones, en lugar de imponer cambios desde fuera. Los programas lean que recortan personal y lo llaman mejora hacen un mal uso de la idea.

**Kaizen.** Mejora continua mediante cambios pequeños. Wikipedia describe kaizen como un enfoque que usa todo el mundo en una organización, con cambios lo bastante pequeños como para probarse rápido. Un ciclo kaizen típico usa el bucle planificar-hacer-verificar-actuar (PDCA): planificar un cambio, probarlo, verificar el resultado y adoptarlo o ajustarlo. Véase el Tema 3.15 — Mejora Continua.

**Ir y ver (gemba).** «Gemba» es el lugar donde ocurre el trabajo. La práctica lean pide a directivos y a quienes mejoran que vayan allí, observen y hagan preguntas, en lugar de depender de informes. Para un equipo de servicio, el gemba puede ser la mesa de servicio, una cola de tickets o una llamada con un cliente.

**Herramientas de causa raíz.** Lean usa métodos sencillos como los «cinco porqués» (preguntar por qué repetidamente hasta llegar a una causa sobre la que se pueda actuar) y la resolución de problemas A3 (un resumen estructurado de una página). Apoyan la gestión de problemas (véase el Tema 3.3 — Gestión de Problemas). Requieren cuidado: preguntar «por qué» cinco veces puede llevar a una persona a quien culpar en vez de a una causa del sistema.

**A prueba de errores.** Poka-yoke es la práctica de diseñar un paso de modo que los errores sean difíciles de cometer o se detecten de inmediato. En el trabajo de servicios, puede ser un campo obligatorio, una plantilla, una comprobación en un pipeline o una confirmación antes de una acción arriesgada. La autonomación, a veces llamada jidoka, se refiere a detener un proceso cuando se detecta una falla, lo que tiene un análogo moderno en los pipelines que se detienen ante una prueba fallida.

**Detener la línea.** El cordón andon de una planta de Toyota permite a cualquier trabajador detener la línea cuando ve un problema. Traducido a los servicios, cualquiera puede plantear un problema que podría dañar a los clientes, y el equipo trata la señal como útil, no como una perturbación.

**Lean y ágil.** El pensamiento lean influyó en el desarrollo ágil de software, y ambos se solapan: lotes pequeños, retroalimentación, mejora continua, respeto por las personas. Esta guía destaca la participación continua de las partes interesadas, la mejora continua y la entrega continua de cambios que funcionan, que lean respalda.

**Cómo encajan las lentes.** Lean y kaizen son el motor de mejora de la lente ágil. La IA puede encontrar patrones en los tickets que sugieran desperdicio, bajo revisión. La automatización elimina pasos manuales repetidos, después de haberlos simplificado. La analítica muestra dónde espera el trabajo y dónde surgen los defectos.

## Buenas prácticas

1. **Defina el valor desde el punto de vista del cliente.** Para cada servicio, escriba qué valora el cliente. Marque cada paso del proceso como que añade valor, necesario pero sin añadir valor, o desperdicio.
2. **Vaya y vea.** Pase tiempo donde ocurre el trabajo, observe solicitudes reales y hable con quienes las atienden. Los informes no lo sustituyen.
3. **Elimine el desperdicio antes de automatizar.** Simplifique primero el proceso. Automatizar un paso con desperdicio hace el desperdicio más barato de producir, no más pequeño.
4. **Deje que las personas más cercanas al trabajo lo mejoren.** Dé a los equipos tiempo, autoridad y una forma sencilla de probar cambios. Revise sus ideas con rapidez y cuénteles qué ocurrió.
5. **Haga las mejoras pequeñas y rápidas.** Apunte a cambios que puedan probarse en días. Ejecútelos como experimentos con una expectativa declarada y una fecha de comprobación.
6. **Corrija las causas, no a las personas.** Cuando algo sale mal, pregunte qué del sistema lo permitió. Use métodos de causa raíz para encontrar causas y evite detenerse en «error humano».
7. **Haga a prueba de errores los pasos repetidos.** Agregue campos obligatorios, plantillas, comprobaciones y confirmaciones donde los errores hayan ocurrido más de una vez.
8. **Deje que cualquiera detenga la línea.** Cree una forma segura de plantear una preocupación sobre un cambio o una respuesta a un incidente. Agradezca a quien la planteó.
9. **Mantenga un tablero de mejoras.** Muestre las ideas de mejora, su estado y sus resultados donde el equipo y las partes interesadas puedan verlos.
10. **No use lean como tapadera de recortes.** Si la mejora lleva a despidos, la gente deja de proponer mejoras. Diga cómo se usará el tiempo ahorrado.

## Preguntas para conversar con su equipo

**¿Qué valoran nuestros clientes de este servicio y qué hacemos que no notarían si dejáramos de hacerlo?**
Esto separa el valor de la actividad. Los equipos suelen encontrar informes, aprobaciones o comprobaciones que nadie usa. Pida el punto de vista del cliente si es posible. Después elijan una actividad para detener durante un mes, con un responsable atento a posibles daños.

**¿Cuál de los desperdicios clásicos vemos con más frecuencia y cuál es un ejemplo reciente de cada uno?**
Use la tabla de los siete desperdicios. La gente suele nombrar primero la espera y el retrabajo. Pida tickets o incidentes reales. Después elijan el desperdicio que más tiempo cuesta.

**¿Cuándo propuso alguien por última vez una mejora y qué pasó con la idea?**
Esto prueba el sistema de mejora. Quizá oiga que las ideas se esfuman o que sugerir significa que te asignen el trabajo. Pregunte cuánto se tardó en responder. Después acuerden un tiempo de respuesta y una lista visible.

**¿Qué errores repetidos podríamos hacer imposibles, o al menos evidentes?**
Busque errores que ocurren una y otra vez: una categoría equivocada, un campo que falta, un comando ejecutado en el sistema equivocado. Pregunte cómo sería una protección sencilla. Después elijan un error y una protección para probar.

**¿Dónde culpamos a las personas cuando el sistema permitió el error?**
Esto sondea la cultura. Las revisiones suelen terminar con «ten más cuidado». Pregunte qué hizo probable el error y qué lo dificultaría. Después reescriban la conclusión de una revisión pasada en términos del sistema.

**¿Cómo nos ayudaría la IA a encontrar desperdicio y cómo comprobaríamos que acierta?**
La IA puede agrupar tickets, encontrar preguntas repetidas y sugerir candidatos a automatización. También puede inventar patrones. Pregunte quién comprobará una muestra de lo que encuentra. Después elijan una muestra de tickets para probar primero a mano su agrupación.

## En la práctica: un ejemplo de gestión de servicios

Una agencia gubernamental de prestaciones opera un centro de contacto que responde preguntas sobre solicitudes. El personal dice que se pasa los días «persiguiendo información». La jefa del equipo, que ha hecho un curso breve de lean, decide ir al lugar de trabajo. Se sienta con los agentes durante tres días y anota, de 120 llamadas, el motivo de cada llamada y lo que hizo el agente.

Descubre que 40 de las 120 llamadas eran repetidas sobre la misma solicitud, porque el primer agente no podía ver el estado que guardaba otro sistema. Otras 25 eran sobre una carta que usaba términos que quienes llamaban no entendían. Los agentes dedicaban una gran parte de cada llamada a cambiar entre cuatro pantallas.

El equipo prueba tres cambios pequeños durante seis semanas: reescribe la carta confusa con unas frases sencillas y la prueba con una muestra de solicitantes, añade una pantalla que muestra el estado de la solicitud tomado del otro sistema y crea una guía de una página para las cinco preguntas más comunes. Los agentes proponen un cuarto cambio, una plantilla para las notas de llamada que reduce las reexplicaciones entre turnos. Cada uno se prueba durante dos semanas y se revisa en una breve reunión semanal.

Qué cambia: las llamadas repetidas bajan en la muestra que sigue el equipo y los agentes informan de menos cambios de pantalla. Qué sigue siendo difícil: la pantalla de estado depende de una integración que pertenece a otro departamento, que aún no ha aceptado mantenerla; el equipo no tiene una buena forma de medir si quienes llamaban entendieron la carta salvo preguntándoles; y un directivo ha preguntado cuántas horas de agente ahorraron los cambios, lo que tienta a contar un número. La jefa mantiene el foco en la experiencia de quienes llaman y acuerda con su directivo que los ahorros se usarán para reducir el backlog, no para recortar personal.

## Cuatro perspectivas

### Equipos de producto y de entrega

Definan el valor desde el punto de vista del usuario y eliminen funciones y pasos que no lo sirvan. Usen experimentos pequeños, hagan a prueba de errores los pasos repetidos y traten los problemas operativos como señales para cambiar el diseño.

### Equipos de servicio y de operaciones

Ustedes ven el desperdicio a diario. Regístrenlo, lleven ejemplos al tablero de mejoras y prueben soluciones pequeñas. Usen «detener la línea» cuando un cambio o una respuesta pueda dañar a los clientes.

### Liderazgo y gobernanza

Vaya y vea. Pregunte al equipo qué cambiaría y dé tiempo para hacerlo. Proteja a quienes plantean problemas. Sea explícito en que lean no es un programa de recorte de costos.

### Clientes y usuarios

Usted sabe lo que valora. Diga al proveedor qué pasos le resultan inútiles y cuáles le ayudan. Si da retroalimentación, espere oír qué cambió.

## Ágil, IA, automatización y analítica

### Ágil

Lean y kaizen aportan el hábito de mejora: cambios pequeños, retroalimentación frecuente, partes interesadas involucradas y personas en quienes se confía para mejorar su propio trabajo. Precaución: los tableros de mejoras pueden convertirse en otro backlog que nadie revisa; mantenga la lista corta y revisada.

### IA

La IA puede agrupar tickets, encontrar preguntas repetidas y sugerir dónde hay desperdicio. Cada uso necesita un responsable y una persona que compruebe una muestra. Precaución: un resumen de IA puede encontrar patrones que son solo artefactos de cómo se categorizaron los tickets; verifique contra el trabajo. Véase el Tema 5.1 — IA en la gestión de servicios.

### Automatización

Automatice los pasos que queden tras eliminar el desperdicio y estabilizar el proceso, como encaminar una solicitud o actualizar un estado, y conserve un registro y una forma de revertir. Precaución: la automatización puede fijar un mal proceso y dificultar el cambio; revise tras cada automatización importante. Véase el Tema 6.1 — Estrategia de automatización.

### Analítica

Mida dónde espera el trabajo, con qué frecuencia se rehace y cuánto duran los contactos repetidos. Precaución: contar «horas ahorradas» invita a afirmaciones infladas y puede minar la confianza; siga también la experiencia de clientes y equipo. Véanse el Tema 7.6 — Analítica de procesos y de flujos de valor y el libro *Service Management Metrics*.

## Modos de fallo habituales

- **Lean como recorte de costos.** La gente deja de proponer mejoras. Diga cómo se usarán las ganancias y cumpla esa promesa.
- **Mejora desde la distancia.** Los consultores rediseñan lo que no han observado. Vaya y vea, e involucre a quienes hacen el trabajo.
- **Automatizar el desperdicio.** Un mal proceso se convierte en script. Simplifique primero.
- **Culpar a las personas.** Las revisiones terminan en «error humano». Busque qué del sistema lo permitió.
- **Las ideas de mejora desaparecen.** La gente deja de sugerir. Responda con rapidez y muestre la lista.
- **Programas de mejora grandes.** El cambio tarda un año y aporta poco. Prefiera experimentos pequeños con comprobaciones.
- **Contar ahorros como meta.** Los números se inflan. Mida resultados y experiencia del cliente.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Valor y desperdicio | Valor supuesto | Algo de desperdicio identificado | Valor y desperdicio definidos por servicio | Desperdicio seguido y reducido | Reducción del desperdicio coordinada entre servicios y proveedores |
| Hábito de mejora | Mejora por crisis | Unos pocos promotores | Experimentos pequeños regulares con revisión | Resultados medidos y compartidos | Mejora integrada en los equipos y entre socios |
| Resolución de problemas | Culpa | Algo de análisis de causa raíz | Método estándar de causa raíz en uso | Causas seguidas hasta la prevención | Aprendizaje compartido en toda la organización |
| A prueba de errores | Raro | Protecciones ad hoc | Protecciones para errores repetidos conocidos | Efecto de las protecciones medido | Protecciones integradas en herramientas y pipelines por doquier |

## Lista de verificación

- [ ] Escribimos qué valoran los clientes de cada servicio.
- [ ] Fuimos adonde ocurre el trabajo y observamos trabajo real.
- [ ] Clasificamos los pasos como que añaden valor, necesarios o desperdicio.
- [ ] Las ideas de mejora son visibles, se responden con rapidez y se siguen.
- [ ] Probamos cambios como experimentos pequeños con fecha de comprobación.
- [ ] Las revisiones buscan causas en el sistema, no culpables.
- [ ] Agregamos protecciones para errores repetidos.
- [ ] Dijimos cómo se usarán las ganancias de la mejora.

## Prompts de IA

**Clasifique pasos como valor o desperdicio para revisión.**

```text
Here are the steps in our process for [service], with who does each and roughly how long it takes: [paste steps].
Propose for each step whether it adds value to the customer, is necessary but not value-adding, or looks like waste, with a one-line reason and a question to confirm with the people who do it. Do not recommend removing anything.
List what you are unsure of.
```

**Encuentre preguntas repetidas en los tickets.**

```text
Below are ticket titles and first messages, with personal data removed: [paste sample].
Group them into up to eight themes, count each, and quote two short examples per theme exactly. Do not guess causes.
List what you are unsure of.
```

**Convierta una nota de causa raíz en preguntas sobre el sistema.**

```text
Here is a summary of a recent failure: [paste summary].
Rewrite it as a list of questions about what in our system allowed the failure, avoiding blame, and suggest one guard to consider for each. Do not state causes that are not in the summary.
List what you are unsure of.
```

## Habilidades de IA

- [kaizen](../../../../skills/kaizen/SKILL.md): úsela para planificar y ejecutar pequeños experimentos de mejora.
- [root-cause-analysis](../../../../skills/root-cause-analysis/SKILL.md): úsela para encontrar causas en el sistema.
- [value-stream-map](../../../../skills/value-stream-map/SKILL.md): úsela para ver el desperdicio y las esperas en el flujo.
- [fishbone-diagram](../../../../skills/fishbone-diagram/SKILL.md): úsela para organizar posibles causas para la discusión.

## Fuentes principales

- Taiichi Ohno, *Toyota Production System: Beyond Large-Scale Production* (1988): el relato de un fundador sobre las ideas.
- Mary y Tom Poppendieck, *Lean Software Development: An Agile Toolkit* (2003): adapta el pensamiento lean al software.
- Wikipedia, "Lean manufacturing" y "Kaizen": resúmenes neutrales con lecturas adicionales.
- Wikipedia, "Lean software development": la adaptación al trabajo de software.

## Referencias

1. Lean manufacturing — Wikipedia — https://en.wikipedia.org/wiki/Lean_manufacturing
2. Kaizen — Wikipedia — https://en.wikipedia.org/wiki/Kaizen
3. Toyota Production System — Wikipedia — https://en.wikipedia.org/wiki/Toyota_Production_System
4. Muda (Japanese term) — Wikipedia — https://en.wikipedia.org/wiki/Muda_(Japanese_term)
5. Lean software development — Wikipedia — https://en.wikipedia.org/wiki/Lean_software_development
6. Gemba — Wikipedia — https://en.wikipedia.org/wiki/Gemba
7. Poka-yoke — Wikipedia — https://en.wikipedia.org/wiki/Poka-yoke
8. Andon (manufacturing) — Wikipedia — https://en.wikipedia.org/wiki/Andon_(manufacturing)
9. Five whys — Wikipedia — https://en.wikipedia.org/wiki/Five_whys
10. Value-stream mapping — Wikipedia — https://en.wikipedia.org/wiki/Value-stream_mapping
