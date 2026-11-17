# Gestión de Activos de Hardware

**La gestión de activos de hardware sigue la tecnología física desde la compra hasta la eliminación: sabe qué es cada dispositivo, quién lo tiene, cómo está configurado y protegido, cuándo debe sustituirse y cómo sale con seguridad; la sostenibilidad y la protección de datos forman parte de ella tanto como el costo.**

## Por qué importa

El hardware es la parte de TI que se puede dejar caer. Se pierde en los trenes, se olvida en los taxis, se roba de los coches, se olvida en los armarios y se lleva a casa quien se va. También envejece. Una flota comprada en un solo año se desgasta junta, y el costo de mantener vivos los dispositivos que fallan crece hasta que una oleada de sustitución cae en un solo presupuesto. El hardware guarda datos, y un dispositivo que sale de la organización sin haberse borrado puede filtrarlos.

El entorno añade otra dimensión. Los dispositivos electrónicos se fabrican con una energía y unos materiales considerables y se convierten en residuos electrónicos cuando se desechan. Wikipedia describe los residuos electrónicos como un problema ambiental creciente, con peligros derivados de un manejo inadecuado. Prolongar la vida útil de los dispositivos, repararlos, reutilizarlos y reciclarlos de forma responsable reduce tanto el costo como el daño.

La gestión de activos de hardware (HAM) es la parte de la gestión de activos de TI que trata de los dispositivos físicos: portátiles, ordenadores de sobremesa, teléfonos móviles, servidores, equipos de red, periféricos y los dispositivos especializados de un sector concreto. Responde a las preguntas prácticas: qué tenemos, dónde está, quién lo tiene, es seguro, vale la pena conservarlo y cómo sale. Este tema se apoya en el Tema 4.1 — Gestión de activos y se conecta con la gestión de la configuración (Tema 4.4 — Gestión de la Configuración), la seguridad de la información (Tema 3.13 — Gestión de la Seguridad de la Información) y la sostenibilidad (Tema 8.2 — Gestión de servicios sostenible y responsable).

## Conceptos clave

**Ciclo de vida del hardware.** Las etapas incluyen planificar, adquirir, recibir y etiquetar, configurar y desplegar, operar y dar soporte, renovar o retirar, y eliminar. Cada etapa involucra a equipos distintos, así que los traspasos importan. Los artículos de Wikipedia sobre el seguimiento de activos y las garantías describen partes de esto.

**Configuraciones estándar.** Una configuración estándar de dispositivo, con software aprobado y ajustes de seguridad, acelera el despliegue y facilita el soporte. El aprovisionamiento sin intervención (zero-touch provisioning), descrito en Wikipedia, permite configurar un dispositivo automáticamente cuando se conecta por primera vez. Véase el Tema 6.5 — Autoservicio y cumplimiento automatizado.

**Gestión de endpoints.** Herramientas que inscriben, configuran, actualizan y protegen portátiles, teléfonos y tabletas desde una consola central. Wikipedia describe la gestión de dispositivos móviles y la gestión unificada de endpoints. También aportan los datos de lo que está en uso y su estado.

**Traiga su propio dispositivo (BYOD).** Políticas que permiten al personal usar dispositivos personales para el trabajo. Wikipedia describe el BYOD. Reduce el costo del hardware y plantea cuestiones de seguridad, soporte y privacidad. Decida qué se permite, qué se gestiona y qué ocurre cuando alguien se va.

**Identificación y custodia.** Cada dispositivo tiene una identidad, como una etiqueta de activo y un número de serie, y un custodio. Los registros de traslados y entregas evitan pérdidas. Véase el Tema 4.1 — Gestión de activos.

**Garantía y soporte.** El hardware viene con garantías y contratos de soporte que terminan en fechas conocidas. Seguirlos permite reparar mientras están cubiertos e informa las decisiones de renovación. Wikipedia describe las garantías.

**Estado y salud.** Los dispositivos informan de parte de su propio estado: la salud de la batería, el estado del disco y los indicadores de fallo. Wikipedia describe SMART, la tecnología de monitorización de discos. Usar estos datos permite sustituir antes del fallo y reduce el tiempo de inactividad no planificado.

**Ciclos de renovación.** La sustitución planificada del hardware a cierta antigüedad o estado. Los ciclos comunes son de tres a cinco años para los portátiles, y a menudo más largos para el equipamiento de red, pero el intervalo adecuado depende del uso, el costo del fallo y el ritmo de las exigencias del software. Sustituir demasiado pronto desperdicia dinero y recursos; demasiado tarde eleva los fallos y el riesgo de seguridad. Base el intervalo en datos.

**Repuestos y reparación.** Tener unidades y piezas de repuesto acorta la recuperación. La reparación mantiene los dispositivos útiles durante más tiempo. Wikipedia describe el movimiento del derecho a reparar, que sostiene que los propietarios y los talleres independientes deberían poder reparar los dispositivos. Considere la reparabilidad al comprar.

**Protección de datos.** Los dispositivos deben usar cifrado de disco, para que un dispositivo perdido no exponga datos, y borrarse antes de su reutilización o eliminación. Wikipedia describe el cifrado de discos y el borrado de datos. Use métodos que correspondan a la sensibilidad de los datos y, donde se exija, obtenga un certificado de borrado. Véase el Tema 3.13 — Gestión de la Seguridad de la Información.

**Eliminación y reutilización.** Las opciones incluyen la reutilización interna, la donación, la reventa, el reacondicionamiento, el reciclaje y la destrucción. Elija socios que cumplan las normas sobre residuos y datos. En la Unión Europea, la Directiva RAEE, descrita en Wikipedia, fija normas para los residuos de aparatos eléctricos y electrónicos; el Convenio de Basilea, también descrito allí, rige el movimiento de residuos peligrosos entre países. Compruebe las normas locales.

**Huella ambiental.** Gran parte de las emisiones de la vida de un dispositivo proceden de la fabricación, no del uso. Wikipedia describe la energía incorporada. Conservar los dispositivos más tiempo, repararlos y comprar reacondicionados donde corresponda suele reducir la huella más que las mejoras de eficiencia en el uso. El enfoque de economía circular, descrito en Wikipedia, busca mantener los materiales en uso.

**Centros de datos e infraestructura.** Los servidores y el equipamiento de red tienen su propio ciclo de vida y sus consideraciones de energía y refrigeración. Muchas organizaciones alquilan hoy en lugar de poseer, lo cual cambia el panorama de los activos pero no la necesidad de gestionar lo que queda. Véase el Tema 4.5 — Gestión financiera y FinOps.

**Cómo encajan las lentes.** La gestión de activos de hardware se beneficia de la iteración ágil sobre el proceso de la flota y de las configuraciones estándar. La IA puede predecir fallos y ayudar a emparejar registros, bajo revisión. La automatización aprovisiona, parchea y borra dispositivos. La analítica muestra la antigüedad, los fallos, la utilización y el costo.

## Buenas prácticas

1. **Etiquete y registre a la llegada.** Cada dispositivo recibe una identidad y un registro cuando se recibe, antes de que nadie lo use. Vincule los datos de compra, garantía y responsable.
2. **Use una configuración estándar.** Defina y mantenga un número reducido de configuraciones de dispositivo, con ajustes de seguridad y software aprobado. Automatice la inscripción donde sea posible.
3. **Conozca la custodia.** Registre quién tiene cada dispositivo y actualice el registro cuando se mueva. Exija un acuse de recibo cuando se entregue un dispositivo.
4. **Cifre y gestione.** Exija cifrado de disco e inscripción en la gestión de endpoints para cada dispositivo. Sea capaz de bloquear o borrar de forma remota un dispositivo perdido y pruebe que funciona.
5. **Planifique la renovación con datos.** Use la antigüedad, las tasas de fallo y los datos de estado para fijar el momento de la sustitución. Reparta las compras a lo largo de los años para evitar una única oleada grande.
6. **Mantenga repuestos y una vía de reparación.** Tenga un pequeño conjunto de dispositivos de repuesto para sustitución urgente y decida qué reparar o enviar a servicio. Compruebe los términos de la garantía.
7. **Recupere los dispositivos de quienes se van o cambian de puesto.** Vincule los eventos de RR. HH. con tareas para recuperar o reasignar el equipamiento, con plazos y seguimiento.
8. **Borre antes de reutilizar o eliminar.** Use un método aprobado, regístrelo y obtenga evidencia de cualquier socio externo. No confíe nunca en borrar archivos.
9. **Elimine de forma responsable.** Elija la reutilización y el reacondicionamiento antes que el reciclaje y use socios que cumplan las normas sobre residuos y datos. Conserve los certificados.
10. **Mida la huella y el costo.** Siga el costo total y, donde pueda, el impacto ambiental por dispositivo y por usuario, y úselos en las decisiones de compra.

## Preguntas para conversar con su equipo

**¿Qué antigüedad tiene nuestra flota y cuántos dispositivos han superado su vida prevista?**
Use datos. Espere una larga cola. Pregunte cuáles son los costos de fallo y de soporte de los dispositivos antiguos. Después planifiquen una renovación escalonada.

**¿Qué ocurre con un portátil desde el día en que una persona se va hasta que está listo para el siguiente usuario?**
Recorran cada paso y pregunten dónde puede atascarse. Esperen retrasos en la recuperación y el borrado. Después elijan un paso para acelerar.

**Si hoy se perdiera un dispositivo con datos sensibles, ¿qué protegería los datos y cómo lo sabemos?**
Compruebe el estado del cifrado y el borrado remoto. Espere brechas en los dispositivos más antiguos o personales. Después muestreen dispositivos para comprobar el cumplimiento.

**¿Qué dispositivos sustituimos según un calendario y podríamos conservar más tiempo algunos con reparación?**
Pregunte qué impulsa el ciclo de renovación: la garantía, las necesidades de software o la costumbre. Mire las tasas de fallo. Después prueben un ciclo más largo para un grupo.

**¿Cómo eliminamos el hardware y quién confirma que se borraron los datos?**
Pida documentos. Espere incertidumbre sobre los socios. Después revisen de extremo a extremo una cadena de eliminación.

**¿Cómo podría ayudar la IA a predecir fallos o a conciliar nuestros registros y qué comprobaríamos a mano?**
La IA puede encontrar dispositivos con probabilidad de fallar a partir de datos de estado. También puede señalar los sanos. Pregunte quién es responsable y cómo se comprueban sus predicciones. Después pruébenla con los fallos del año pasado.

## En la práctica: un ejemplo de gestión de servicios

El departamento de TI de un ayuntamiento regional gestiona 3.000 portátiles, 800 teléfonos y unos cientos de servidores y dispositivos de red. Cada tres años sustituye la mayoría de los portátiles en una sola compra, lo cual tensa el presupuesto, y ha encontrado unos 200 portátiles viejos en los armarios. Una auditoría reciente descubre que un lote de dispositivos enviado a reciclaje no tenía registro de borrado de datos.

La gestora de activos de hardware propone una renovación por estado. Con los datos de salud de batería y disco de la herramienta de gestión de endpoints, más la antigüedad y el historial de fallos, estima que alrededor del 35 por ciento de los portátiles a los tres años siguen en buen estado. Fija una regla: sustituir a los cuatro años o cuando la salud caiga por debajo de un umbral, con una compra repartida cada trimestre. Para los armarios, pide a cada equipo que devuelva los dispositivos sin usar a un almacén central, donde se borran, se prueban y se reasignan o se venden a través de un reacondicionador que proporciona un certificado de borrado.

También añade un desencadenante de bajas que crea una tarea de recuperación con un plazo de dos semanas y exige que la herramienta de endpoints confirme que cada dispositivo recuperado ha sido borrado antes de marcarlo como disponible.

Tras un año, el gasto del ayuntamiento en portátiles baja en aproximadamente una quinta parte, se reasignan casi 150 dispositivos y cada dispositivo reciclado tiene un registro de borrado. La tasa de fallos entre los portátiles de vida prolongada es algo mayor, y el centro de ayuda informa de más sustituciones de batería. Qué sigue siendo difícil: parte del personal se resiente de conservar dispositivos más viejos mientras otros reciben nuevos; el reacondicionador no siempre puede certificar el borrado de unidades cifradas antiguas; y el ayuntamiento no ha medido el efecto ambiental, aunque espera que sea positivo. La gestora añade una revisión anual del ciclo prolongado frente al costo de soporte y pide al reacondicionador un estándar de borrado más claro.

## Cuatro perspectivas

### Equipos de producto y de entrega

Usen dispositivos estándar donde puedan, devuelvan lo que ya no necesiten y mantengan registrado y cifrado el hardware de desarrollo. Consideren la reparabilidad y la vida útil al especificar el equipamiento.

### Equipos de servicio y de operaciones

Mantengan exacto el inventario, inscriban y cifren cada dispositivo, prueben el borrado remoto y gestionen los repuestos y la reparación. Gestionen la eliminación con una cadena de custodia registrada.

### Liderazgo y gobernanza

Decida la política de renovación y eliminación con vistas al costo, el riesgo y los efectos ambientales. Financie el proceso y un plan de sustitución repartido. Pida evidencia del borrado de datos.

### Clientes y usuarios

Cuide su dispositivo, informe de inmediato de la pérdida y devuelva el equipamiento cuando se vaya o ya no lo necesite. Cuente pronto al equipo de soporte los problemas para que la reparación sea barata.

## Ágil, IA, automatización y analítica

### Ágil

Mejore el proceso de la flota en pasos pequeños con los usuarios: pruebe una configuración nueva con un grupo, ajuste y amplíe. Revise cada año las reglas de renovación con datos. Precaución: los cambios constantes en la configuración estándar crean esfuerzo de soporte; manténgala estable y explique los cambios.

### IA

La IA puede predecir fallos de dispositivos a partir de datos de salud, ayudar a emparejar registros y sugerir qué dispositivos renovar, bajo revisión. Nombre un responsable. Precaución: las predicciones basadas en pocos fallos pueden ser poco fiables; compárelas con reglas simples y siga las falsas alarmas. Véase el Tema 5.1 — IA en la gestión de servicios.

### Automatización

Automatice la inscripción, la configuración, la aplicación de parches, el bloqueo y borrado remotos y las tareas de bajas, con registros y comprobaciones. Precaución: un borrado automatizado en el dispositivo equivocado destruye datos; confirme la identidad y conserve copias de seguridad. Véase el Tema 6.5 — Autoservicio y cumplimiento automatizado.

### Analítica

Observe la antigüedad de la flota, las tasas de fallo, el costo de reparación, el estado de las garantías, la utilización, el tiempo de recuperación de los dispositivos de quienes se van y, donde estén disponibles, estimaciones de energía y emisiones. Precaución: las cifras de emisiones suelen ser estimaciones con amplia incertidumbre; indique el método. Véanse el Tema 7.3 — Medición e informes y el libro *Service Management Metrics*.

## Modos de fallo habituales

- **Dispositivos que no se registran a la llegada.** Los registros nunca se ponen al día. Etiquete y registre en la recepción.
- **Sin seguimiento de la custodia.** El equipamiento desaparece. Registre quién tiene qué.
- **Dispositivos sin cifrar.** Una pérdida se convierte en una filtración. Exija cifrado y pruebe el borrado remoto.
- **Renovación de gran explosión.** Sobresaltos presupuestarios y desperdicio. Reparta las compras y use datos de estado.
- **Eliminación sin prueba de borrado.** Los datos salen con el dispositivo. Use métodos aprobados y conserve certificados.
- **Acaparar dispositivos viejos.** Los armarios se llenan de existencias. Devuelva, borre y reutilice o recicle.
- **Ignorar el impacto ambiental.** Los residuos crecen. Favorezca la reutilización, la reparación y el reciclaje responsable.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Registros y custodia | Listas de compras | Dispositivos principales registrados | Cada dispositivo etiquetado, registrado y asignado | Registros conciliados con el descubrimiento y auditados | Registros exactos en tiempo real entre sedes y proveedores |
| Protección | Incoherente | Cifrado en dispositivos nuevos | Cifrado, inscripción y borrado remoto como norma | Cumplimiento monitorizado y probado | La protección se adapta automáticamente al riesgo |
| Renovación | Solo por antigüedad | Ciclo planificado | Renovación repartida basada en el estado | Renovación ajustada con datos de costo y fallos | Renovación integrada con reparación, reutilización y metas de sostenibilidad |
| Eliminación | Informal | Proveedor aprobado | Proceso de borrado, certificado y reciclaje | Cadena de custodia auditada | Enfoque circular en toda la flota y los socios |

## Lista de verificación

- [ ] Cada dispositivo se etiqueta y se registra a la llegada.
- [ ] Sabemos quién tiene cada dispositivo.
- [ ] Los dispositivos están cifrados e inscritos en la gestión, y se prueba el borrado remoto.
- [ ] El momento de la renovación usa datos de estado y de fallos.
- [ ] Existen repuestos y una vía de reparación.
- [ ] Los dispositivos de quienes se van se recuperan en un plazo definido.
- [ ] Los dispositivos se borran antes de su reutilización o eliminación, con registro.
- [ ] Elegimos la reutilización y el reciclaje responsable y seguimos los resultados.

## Prompts de IA

**Encuentre candidatos a renovación a partir de datos de salud.**

```text
Here is a list of devices with age, battery health, disk health, repair history, and warranty end date, with identifiers removed: [paste].
Group devices into low, medium, and high concern based on the data and the rules I state: [state rules]. List devices that fall in different groups depending on the rule. Do not recommend replacement.
List what you are unsure of.
```

**Redacte una lista de comprobación de equipo para las bajas.**

```text
Our context: [type of organization, device types, management tools]. Our leaver process: [describe].
Draft a checklist for retrieving, wiping, and reissuing a device, with an owner role and deadline for each step, and list the points where equipment is most often lost. Do not invent policy.
List what you are unsure of.
```

**Revise un proceso de eliminación.**

```text
Here is how we dispose of hardware: [describe steps and partners]. Here is what our policy requires: [paste].
List each policy requirement and say whether the described process addresses it, or "not described". Do not assess legal compliance.
List what you are unsure of.
```

## Habilidades de IA

- [configuration-management](../../../../skills/configuration-management/SKILL.md): úsela para vincular los dispositivos con servicios y responsables.
- [capacity-planning](../../../../skills/capacity-planning/SKILL.md): úsela para planificar servidores e infraestructura.
- [roi-analysis](../../../../skills/roi-analysis/SKILL.md): úsela para sopesar las opciones de renovación, reparación y reutilización.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md): úsela para asignar responsabilidades entre compras, TI, RR. HH. e instalaciones.

## Fuentes principales

- ISO/IEC 19770 (los propios estándares): los requisitos y la orientación para la gestión de activos de TI; lea las ediciones vigentes del editor.
- PeopleCert, páginas de certificación ITIL: la descripción del propietario de la práctica de gestión de activos de TI.
- Wikipedia, "Electronic waste" y "Circular economy": visiones generales de los aspectos ambientales.
- Wikipedia, "Right to repair": antecedentes de la reparabilidad.

## Referencias

1. Electronic waste — Wikipedia — https://en.wikipedia.org/wiki/Electronic_waste
2. Circular economy — Wikipedia — https://en.wikipedia.org/wiki/Circular_economy
3. Right to repair — Wikipedia — https://en.wikipedia.org/wiki/Right_to_repair
4. Data erasure — Wikipedia — https://en.wikipedia.org/wiki/Data_erasure
5. Disk encryption — Wikipedia — https://en.wikipedia.org/wiki/Disk_encryption
6. Mobile device management — Wikipedia — https://en.wikipedia.org/wiki/Mobile_device_management
7. Bring your own device — Wikipedia — https://en.wikipedia.org/wiki/Bring_your_own_device
8. Asset tracking — Wikipedia — https://en.wikipedia.org/wiki/Asset_tracking
9. Warranty — Wikipedia — https://en.wikipedia.org/wiki/Warranty
10. Waste Electrical and Electronic Equipment Directive — Wikipedia — https://en.wikipedia.org/wiki/Waste_Electrical_and_Electronic_Equipment_Directive
11. Embodied energy — Wikipedia — https://en.wikipedia.org/wiki/Embodied_energy
