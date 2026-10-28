# Entrega continua

**La entrega continua es la práctica de mantener el software siempre en estado liberable y de enviar cambios pequeños a los servicios en producción con frecuencia, mediante pasos automatizados de compilación, prueba y despliegue; hace el cambio más seguro al hacerlo más pequeño, y es como los equipos ágiles cambian servicios en producción sin esperar a una liberación trimestral.**

## Por qué importa

El cambio es la mayor fuente de riesgo en un servicio en producción, y la respuesta habitual es frenarlo: menos liberaciones, más aprobaciones, ciclos de prueba más grandes. Cada una de estas medidas hace mayor la siguiente liberación, lo que la hace más arriesgada, lo que provoca más cautela. Los equipos acaban liberando una vez por trimestre con un largo fin de semana de trabajo angustioso.

La entrega continua invierte ese ciclo. Si un cambio es pequeño, sus efectos son fáciles de entender, de probar y de revertir. Si se libera mediante un pipeline automatizado, las mismas comprobaciones se ejecutan siempre, en el mismo orden y con un registro. Si la liberación puede hacerse en cualquier momento, el equipo puede responder a un servicio que falla o a la necesidad de un cliente en horas y no en semanas.

Para la gestión de servicios, la entrega continua importa porque cambia el aspecto del control. Una práctica de habilitación de cambios construida en torno a una reunión semanal de un comité no puede seguir el ritmo de 20 liberaciones al día, y no tiene por qué hacerlo si el pipeline lleva las comprobaciones (véanse el Tema 3.4 — Habilitación de Cambios y el Tema 6.4 — Pipelines y cambio automatizado). Este tema explica la práctica, el vocabulario y cómo introducirla sin perder el control.

## Conceptos clave

**Integración continua.** Los desarrolladores fusionan su trabajo en una línea principal compartida con frecuencia, al menos a diario, y cada fusión dispara una compilación y una ejecución de pruebas automáticas. El objetivo es encontrar los problemas de integración cuando son pequeños. El artículo de Wikipedia sobre integración continua describe la práctica y su origen en la programación extrema.

**Entrega continua.** Las compilaciones que superan las comprobaciones automáticas están siempre en un estado que podría liberarse. La decisión de liberar es una decisión de negocio, que se toma cuando conviene, no un obstáculo técnico. En la formulación estándar, la liberación es un clic y de bajo riesgo.

**Despliegue continuo.** Un paso más, en el que cada cambio que supera el pipeline se libera a producción de forma automática, sin aprobación manual. Es una elección, no un requisito de la entrega continua, y se ajusta mejor a unos servicios y unos riesgos que a otros.

**El pipeline de despliegue.** Una secuencia automatizada de etapas: compilación, pruebas unitarias, pruebas de integración, comprobaciones de seguridad, despliegue en un entorno de prueba, pruebas de aceptación y liberación. Cada etapa deja pasar el cambio o lo detiene. El pipeline es a la vez un mecanismo de seguridad y una fuente de evidencia, porque registra qué se comprobó.

**Lotes pequeños.** Liberar cambios pequeños significa que cada uno toca poco. La ley de Little de la teoría de colas, que describe Wikipedia, explica parte del efecto: con la misma tasa de trabajo, lotes más pequeños significan colas más cortas y retrasos más cortos. Los lotes pequeños también facilitan rastrear los fallos hasta una causa.

**Separar el despliegue de la liberación.** El despliegue pone el código en los servidores de producción. La liberación pone una función a disposición de los usuarios. Técnicas como los interruptores de funciones (feature toggles) permiten desplegar código apagado y activarlo después, primero para algunos usuarios. Esto reduce el riesgo de cada paso. Véase el Tema 3.5 — Gestión de Versiones y Despliegues.

**Entrega progresiva.** Liberar primero a una pequeña parte de los usuarios, observar y ampliar gradualmente. Las variantes incluyen las liberaciones canarias, en las que un grupo pequeño recibe el cambio, y el despliegue azul-verde, en el que dos entornos de producción se alternan para poder revertir con rapidez mediante un cambio.

**Control de versiones y desarrollo basado en tronco.** Todos los cambios, incluidas las definiciones de configuración e infraestructura, viven en el control de versiones. Muchos equipos trabajan en una única rama principal con ramas de corta vida, lo que mantiene frecuente la integración. Véase el Tema 6.3 — Infraestructura como código y GitOps.

**Retroalimentación y recuperación rápidas.** El objetivo es encontrar los fallos con rapidez y recuperarse con rapidez. Programas de investigación sobre la entrega de software, como el trabajo de DevOps Research and Assessment (DORA), siguen medidas como la frecuencia de despliegue, el plazo de entrega de los cambios, la tasa de fallos de cambio y el tiempo de restablecimiento del servicio. Trátelas como preguntas sobre su sistema, no como calificaciones para los equipos; véase el libro *Service Management Metrics*.

**Qué requiere.** Pruebas automatizadas en las que se confía, un pipeline estable, capacidad de revertir o de avanzar, monitorización de producción que muestre el efecto de un cambio y un equipo que responde de lo que libera. Sin esto, las liberaciones frecuentes son temerarias; con ello, son más seguras que las poco frecuentes.

**Cómo encajan las lentes.** La entrega continua es la forma práctica de la lente ágil para los servicios en producción. Los asistentes de IA ayudan a escribir y revisar código y pruebas bajo revisión humana. La automatización es el núcleo del pipeline. La analítica le dice qué están haciendo el pipeline y los servicios.

## Buenas prácticas

1. **Mantenga liberable la línea principal.** Trate una compilación rota como la máxima prioridad del equipo. Una regla como «arreglar o revertir en una hora» mantiene sana la integración.
2. **Haga los cambios pequeños.** Apunte a cambios que un revisor pueda entender en minutos. Si un cambio es grande, divídalo, por ejemplo liberando primero el paso preparatorio.
3. **Automatice las comprobaciones en las que confía.** La compilación y las comprobaciones unitarias, de integración y de seguridad se ejecutan en cada cambio. Añada una comprobación cuando un incidente muestre una brecha y quite, tras conversarlo, una que nunca falla y cuesta tiempo.
4. **Use un único camino de pipeline para todos los cambios.** Evite rutas especiales para los cambios urgentes. Un único camino lo bastante rápido para las emergencias es más seguro que una excepción que rara vez se ejercita.
5. **Separe el despliegue de la liberación.** Use interruptores de funciones y despliegues escalonados para poder activar el nuevo comportamiento para unos pocos usuarios y desactivarlo de nuevo con rapidez. Registre el estado de cada interruptor y elimine los antiguos.
6. **Planifique la vuelta atrás.** Para cada cambio, sepa cómo revertir o avanzar, y practíquelo. Los cambios de datos requieren especial cuidado, porque una reversión de código no puede deshacerlos.
7. **Monitorice el efecto de cada liberación.** Observe las tasas de error, la latencia y los indicadores orientados al usuario durante un periodo definido tras la liberación, y facilite correlacionar un cambio con un síntoma.
8. **Escriba qué comprueba el pipeline.** Una breve descripción de cada etapa, su propósito y su responsable permite que auditores, personal nuevo y operaciones lo entiendan.
9. **Incluya a operaciones desde el principio.** Lleve a las personas de operaciones y soporte al diseño, para que los registros, runbooks y alertas formen parte del cambio y no sean una ocurrencia tardía.
10. **Mejore el pipeline como un producto.** Dele un responsable y un backlog. Los pipelines lentos e inestables enseñan a la gente a eludirlos.

## Preguntas para conversar con su equipo

**¿Cuánto tarda nuestro cambio más pequeño en llegar a producción y dónde espera?**
Esto encuentra los retrasos. Pida un ejemplo real con marcas de tiempo. Las esperas típicas son las pruebas manuales, la aprobación, el acceso a entornos y las ventanas de liberación. Después elijan la espera más larga y un primer paso para recortarla.

**¿Cuáles de nuestras aprobaciones manuales podría sustituir una comprobación del pipeline y qué riesgo controla cada una?**
Cada aprobación existe por una razón, a menudo un incidente de hace años. Pregunte qué riesgo atiende y qué evidencia satisfaría a quien aprueba. Espere resistencia de los dueños de los controles; pídales que ayuden a diseñar el reemplazo. Después prueben un reemplazo con una fecha de revisión.

**¿Qué ocurre cuando una liberación sale mal? ¿Con qué rapidez podríamos revertirla y lo hemos practicado?**
Los equipos suelen descubrir que la reversión existe solo sobre el papel. Pregunte cuándo se usó por última vez. Después planifiquen un ensayo en un entorno seguro.

**¿En qué pruebas confiamos y cuáles ignoramos?**
Las pruebas inestables erosionan la confianza. Pregunte qué fallos se encoge de hombros el equipo. Espere respuestas honestas sobre pruebas que «suelen pasar al reintentar». Después elijan una prueba inestable para arreglar o eliminar.

**¿Cómo sabemos en una hora si una liberación perjudicó a los usuarios?**
Esto prueba la monitorización. Las respuestas van de «esperamos las quejas» a paneles y alertas automáticas. Pregunte qué indicador habría detectado la última mala liberación. Después elijan un indicador para añadir y comprobar.

**¿Dónde podría ayudar la IA en nuestro pipeline y quién revisa lo que produce?**
La IA puede redactar pruebas, revisar cambios y explicar fallos. Pregunte qué produciría cada uso y quién responde. Espere entusiasmo y poca supervisión. Después elijan un uso de bajo riesgo con revisión humana y una medida de errores.

## En la práctica: un ejemplo de gestión de servicios

El equipo digital de un grupo hospitalario regional opera un servicio de citas de pacientes que usan 30 clínicas. Las liberaciones ocurren cada trimestre en una ventana de fin de semana con una larga lista de comprobación de pruebas. Las dos últimas se alargaron, y una introdujo una falla que apareció el lunes por la mañana como citas duplicadas.

La jefa del equipo, junto con el responsable del servicio, propone pasos pequeños. Primero automatizan la compilación y las 200 pruebas de regresión más importantes, para que se ejecuten en cada cambio. Segundo, ponen la configuración en control de versiones y exigen una revisión entre pares para cada cambio. Tercero, añaden un interruptor de función para poder activar las nuevas reglas de reserva primero en una clínica. La oficial de seguridad clínica, que aprueba el servicio, pide evidencia de que cada cambio fue probado y revisado. El equipo le muestra el registro del pipeline de cada liberación.

Tras cuatro meses, el equipo libera cada semana y el riesgo del lunes por la mañana es menor porque los cambios son más pequeños y visibles. El cambio de la regla de doble reserva se activa primero en una clínica, se detecta el segundo día cuando una recepcionista nota un mensaje extraño y se desactiva en minutos.

Qué cambia: las liberaciones dejan de ser acontecimientos de fin de semana y la oficial de seguridad revisa evidencia en lugar de asistir a reuniones. Qué sigue siendo difícil: el conjunto de pruebas aún no cubre algunos casos complejos de reserva, una interfaz heredada con el sistema de historias de pacientes no tiene prueba automatizada y dos clínicas están descontentas con el cambio semanal porque afecta a su formación. El equipo acuerda un calendario de cambios para las funciones sensibles a la formación y sigue agregando pruebas a medida que los incidentes revelan brechas.

## Cuatro perspectivas

### Equipos de producto y de entrega

Sean dueños del pipeline y de lo que libera. Mantengan pequeños los cambios, fiables las pruebas y ordenados los interruptores. Incluyan registros, alertas y runbooks en la definición de terminado y observen el efecto de cada liberación.

### Equipos de servicio y de operaciones

Ayuden a definir qué comprueba el pipeline y qué muestra la monitorización. Trabajen con los desarrolladores en la reversión y en cómo se ve «sano». Pidan el registro de la liberación cuando empiece un incidente.

### Liderazgo y gobernanza

Financie el pipeline, las pruebas y la monitorización, que son fáciles de dejar sin recursos. Pida evidencia de control del pipeline en lugar de reuniones. No use las medidas de entrega para clasificar equipos.

### Clientes y usuarios

Espere cambios pequeños y frecuentes y correcciones rápidas. Diga al equipo cuándo un cambio le perturba, por ejemplo en torno a la formación o a periodos de mucha actividad, y pida aviso de los cambios importantes.

## Ágil, IA, automatización y analítica

### Ágil

La entrega continua es el lado de la entrega de la práctica ágil: cambios que funcionan en piezas pequeñas, con las partes interesadas involucradas y una revisión regular de qué mejorar. Precaución: no la equipare con un método concreto; los equipos pueden entregar de forma continua con o sin sprints.

### IA

Los asistentes de IA pueden redactar código, pruebas y notas de versión, y resumir fallos, con un responsable designado y una persona que revise cada salida antes de que entre en el pipeline. Precaución: el código generado puede traer problemas de seguridad o de licencias; ejecute las mismas comprobaciones que para cualquier cambio y siga la proporción de cambios asistidos por IA que causan defectos. Véase el Tema 5.4 — IA generativa para incidentes, conocimiento y cambios.

### Automatización

Automatice la compilación, las pruebas, el análisis de seguridad, el despliegue y el rastro de evidencia, y mantenga automática la reversión donde pueda. Precaución: un pipeline en verde muestra que las comprobaciones pasaron, no que el cambio sea correcto; mantenga la revisión humana para las decisiones de diseño y de riesgo. Véase el Tema 6.4 — Pipelines y cambio automatizado.

### Analítica

Siga el plazo de entrega de los cambios, la frecuencia de despliegue, la tasa de fallos de cambio y el tiempo de restablecimiento como preguntas para el sistema. Precaución: cuando se convierten en metas, los equipos dividen los cambios de forma artificial o evitan registrar fallos; úselas con las salvaguardas del libro *Service Management Metrics*.

## Modos de fallo habituales

- **Liberaciones frecuentes sin pruebas.** La velocidad sube y la confianza baja. Construya primero las comprobaciones y libere con la frecuencia que respalden.
- **Un camino aparte para los cambios urgentes.** El camino urgente no se prueba y es arriesgado. Haga el camino principal lo bastante rápido para las emergencias.
- **Interruptores de funciones de larga vida.** Los interruptores viejos se acumulan y nadie sabe qué está activado. Siga los interruptores y elimínelos tras el despliegue.
- **Sin ensayo de reversión.** La reversión falla cuando se necesita. Practíquela en un entorno seguro.
- **Pruebas inestables ignoradas.** La gente deja de creer en las compilaciones rojas. Arregle o elimine las pruebas inestables.
- **Tratar el pipeline como trabajo de otros.** Se deteriora. Dele un responsable y un backlog.
- **Medidas usadas para clasificar equipos.** Los equipos manipulan los números. Use las medidas para encontrar problemas, no para comparar personas.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Frecuencia de liberación | Trimestral o menos | Mensual | Semanal o más, por un camino estándar | Frecuencia ajustada según el riesgo y la demanda | Continua entre servicios, con entrega progresiva |
| Automatización | Compilación y pruebas manuales | Compilación automatizada | Compilación, pruebas y despliegue automatizados | Pipeline monitorizado y mejorado como producto | Pipelines compartidos y gobernados entre equipos |
| Evidencia de control | Reuniones y listas de comprobación | Algunos registros | Registros del pipeline para cada cambio | Evidencia muestreada y revisada | Evidencia continua, con revisión humana del riesgo |
| Recuperación | Reversión poco clara | Reversión documentada | Reversión o avance ensayados | Tiempo de restablecimiento medido | Recuperación automatizada y probada con regularidad |

## Lista de verificación

- [ ] La línea principal es liberable en todo momento.
- [ ] Todo cambio pasa por un único pipeline automatizado.
- [ ] Las pruebas en las que confiamos se ejecutan en cada cambio; las inestables se arreglan o eliminan.
- [ ] Separamos el despliegue de la liberación, con los interruptores de funciones registrados.
- [ ] Sabemos cómo revertir o avanzar y lo hemos ensayado.
- [ ] Monitorizamos el efecto de cada liberación.
- [ ] El pipeline tiene un responsable, un backlog y una descripción de sus comprobaciones.
- [ ] Los cambios asistidos por IA se revisan y se siguen.

## Prompts de IA

**Encuentre las esperas en una liberación.**

```text
Here is a timeline of our last release, from "change ready" to "in production": [paste timeline with timestamps and who acted].
List each wait and how long it was, then give two questions per wait to find its cause. Do not assume causes.
List what you are unsure of.
```

**Proponga comprobaciones del pipeline para un riesgo.**

```text
Our service: [describe]. The risk we want to control: [describe, such as untested configuration change].
List five automated checks that could address it, what each would catch, and what each would miss. Do not claim a check removes the risk.
Mark assumptions and list what you are unsure of.
```

**Redacte un plan de ensayo de reversión.**

```text
Our release process: [paste steps]. Our rollback method: [describe, or write "unknown"].
Draft a one-page rehearsal plan with steps, roles, success criteria, and what to record. Include a safe environment only; do not suggest rehearsing in production.
List what you are unsure of.
```

## Habilidades de IA

- [shift-left-testing](../../../../skills/shift-left-testing/SKILL.md): úsela para mover las pruebas a etapas más tempranas del pipeline.
- [test-driven-development](../../../../skills/test-driven-development/SKILL.md): úsela para construir pruebas junto con los cambios.
- [release-notes](../../../../skills/release-notes/SKILL.md): úsela para describir cada liberación a clientes y soporte.

## Fuentes principales

- Jez Humble y David Farley, *Continuous Delivery* (2010): el libro que nombró y describió la práctica.
- DORA (dora.dev): investigación e informes sobre el desempeño de la entrega de software.
- Wikipedia, "Continuous delivery": un resumen de los principios y las prácticas relacionadas.
- Wikipedia, "Continuous integration": la práctica que la sustenta.

## Referencias

1. Continuous delivery — Wikipedia — https://en.wikipedia.org/wiki/Continuous_delivery
2. Continuous integration — Wikipedia — https://en.wikipedia.org/wiki/Continuous_integration
3. Continuous deployment — Wikipedia — https://en.wikipedia.org/wiki/Continuous_deployment
4. Feature toggle — Wikipedia — https://en.wikipedia.org/wiki/Feature_toggle
5. Blue–green deployment — Wikipedia — https://en.wikipedia.org/wiki/Blue%E2%80%93green_deployment
6. Little's law — Wikipedia — https://en.wikipedia.org/wiki/Little%27s_law
7. Version control — Wikipedia — https://en.wikipedia.org/wiki/Version_control
8. Test automation — Wikipedia — https://en.wikipedia.org/wiki/Test_automation
9. DevOps — Wikipedia — https://en.wikipedia.org/wiki/DevOps
10. DORA — DevOps Research and Assessment — https://dora.dev
