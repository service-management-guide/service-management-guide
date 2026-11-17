# Gestión de activos

**La gestión de activos de TI hace un seguimiento de lo que posee una organización, dónde está, quién lo usa, cuánto cuesta y cuándo debe sustituirse o retirarse; funciona cuando se mantiene al día un único registro fiable a lo largo de todo el ciclo de vida y se usa para decidir, no solo para contar.**

## Por qué importa

Pregunte cuántos portátiles, servidores, licencias de software y suscripciones en la nube tiene una organización y la respuesta suele ser una estimación. Los registros están dispersos entre compras, finanzas, TI y equipos individuales. Se compra equipamiento y nunca se registra, o se registra y se pierde. Las suscripciones siguen después de que termine el proyecto que las necesitaba. Las licencias se cuentan en una fecha lejana.

Las consecuencias son costosas. Se gasta dinero en equipos y licencias que nadie usa. Las auditorías de los fabricantes de software encuentran faltantes y traen sanciones. Los equipos de seguridad no pueden parchear lo que no saben que existe. Cuando se pierde un dispositivo, nadie sabe qué datos contenía. Cuando un auditor pide evidencia de control, la organización no puede darla.

La gestión de activos da una respuesta única y fiable a «¿qué tenemos?», y la base de las preguntas que siguen: ¿es seguro?, ¿se usa?, ¿vale su costo?, ¿está cerca del final de su vida? Este tema cubre los conceptos centrales y la visión del ciclo de vida de los activos de TI en general. Las áreas específicas tienen sus propios temas: el software (Tema 4.2 — Gestión de Activos de Software), el hardware (Tema 4.3 — Gestión de Activos de Hardware) y los elementos de configuración (Tema 4.4 — Gestión de la Configuración). Los costos se vinculan con el Tema 4.5 — Gestión financiera y FinOps.

## Conceptos clave

**Activo.** Algo de valor que posee o controla una organización. En TI, los activos incluyen hardware, software, servicios en la nube, datos, licencias, contratos y, a veces, personas y conocimiento. Wikipedia describe la gestión de activos como el proceso sistemático de desarrollar, operar, mantener y deshacerse de los activos con eficiencia de costos. Esta guía usa «gestión de activos de TI» (ITAM) para la práctica aplicada a la tecnología.

**Activo frente a elemento de configuración.** Un activo se sigue por su valor y propiedad, a menudo con detalle financiero. Un elemento de configuración (CI) es cualquier cosa que necesita gestionarse para entregar un servicio, seguido con sus relaciones con otros elementos. Ambos se solapan: un servidor es ambas cosas. Los registros suelen vivir en sistemas distintos. Véase el Tema 4.4 — Gestión de la Configuración.

**El ciclo de vida.** Un activo pasa por etapas: planificar, adquirir, desplegar, operar y mantener, y retirar o desechar. Cada etapa tiene decisiones y registros. El artículo de Wikipedia sobre el ciclo de vida del producto describe la idea general. Gestionar el ciclo de vida significa saber en qué punto está cada activo y actuar en el momento adecuado, por ejemplo sustituir portátiles antes de que suban las tasas de fallo o renovar licencias antes de que caduquen.

**Cuatro vistas.** Una forma útil de pensar la información de los activos es mediante cuatro vistas: inventario (qué y dónde), financiera (costo, amortización, propiedad), contractual (garantía, soporte, términos de licencia) y operativa (uso, estado y rendimiento). Cada vista responde preguntas distintas, y el registro debe contener lo suficiente de cada una para ser útil.

**Inventario y descubrimiento.** Una lista de activos con atributos clave como tipo, modelo, número de serie, ubicación, responsable y estado. Los inventarios pueden construirse registrando las compras, rastreando dispositivos y software en las redes, o ambas cosas. Las herramientas de descubrimiento encuentran lo que nunca se registró y los elementos registrados que ya no existen. Ninguna fuente es completa por sí sola, y conciliarlas es el verdadero trabajo. Wikipedia describe el inventario y el seguimiento de activos.

**Identificación.** Cada activo necesita una identidad que sobreviva a su vida: una etiqueta de activo, un código de barras o un número de serie. Wikipedia describe los códigos de barras y la identificación por radiofrecuencia (RFID), usados para seguir elementos físicos.

**Propiedad y custodia.** Dos preguntas para cada activo: quién responde de él y quién lo tiene o lo usa. Difieren: un equipo puede responder de una flota de dispositivos que sostienen personas individuales. Una custodia clara evita equipos perdidos.

**Costo y valor.** Los costos incluyen el precio de compra, el soporte, las licencias, la energía y la eliminación. El costo total de propiedad, descrito en Wikipedia, tiene en cuenta toda la vida útil, no solo el precio. La amortización, descrita en Wikipedia, es un tratamiento contable; los equipos de finanzas la usan para informar, y el equipo de ITAM debe entenderla.

**Activos de nube y de suscripción.** Los servicios en la nube y las suscripciones de software también son activos, aunque no tienen forma física y pueden crearse en minutos. Sin disciplina, proliferan. Vincúlelos a responsables, proyectos y presupuestos en el momento de la creación. Véase el Tema 4.5 — Gestión financiera y FinOps.

**TI en la sombra (shadow IT).** Tecnología comprada y usada sin el conocimiento de la función de TI. Wikipedia describe la TI en la sombra. Surge porque la vía oficial es lenta o no satisface las necesidades. Trátela como información sobre necesidades no atendidas e incorpore a la gestión las herramientas útiles.

**Activos de datos.** Los datos también son activos, con responsables, clasificación y reglas de conservación. Wikipedia describe la gestión de activos digitales, que está relacionada. Véase el Tema 7.2 — Fundamentos y gobernanza de datos.

**Estándares.** ISO/IEC 19770 es una familia de estándares para la gestión de activos de TI, descrita en Wikipedia. Véase el Tema 1.8 — Marcos y estándares de gestión de servicios.

**Sostenibilidad.** Las decisiones sobre activos tienen efectos ambientales: la energía de fabricación, los residuos electrónicos y la reparabilidad. Wikipedia describe los residuos electrónicos y la economía circular. Véase el Tema 8.2 — Gestión de servicios sostenible y responsable.

**Cómo encajan las lentes.** La gestión de activos es la base factual que necesitan las cuatro lentes. La práctica ágil mantiene ligero el proceso y lo mejora con los usuarios. La IA puede ayudar a conciliar registros, detectar anomalías y predecir fallos, bajo revisión. La automatización descubre y actualiza los registros. La analítica usa los datos para decidir sobre la sustitución, el aprovechamiento de licencias y el costo.

## Buenas prácticas

1. **Defina qué cuenta como activo.** Decida qué categorías seguirá y con qué umbral de valor o riesgo. Empiece por las que cuestan más o conllevan más riesgo.
2. **Mantenga un registro autorizado único.** Elija una única fuente de verdad para cada tipo de activo y vincule las demás a ella. Las listas duplicadas divergen.
3. **Registre en la adquisición.** Haga de la compra, la recepción y el registro un único paso conectado, para que nada se despliegue sin registrar. Etiquete los elementos físicos a su llegada.
4. **Combine los registros con el descubrimiento.** Use el descubrimiento automatizado para encontrar elementos no registrados y ausentes, y concilie con regularidad. Investigue cada diferencia.
5. **Nombre un responsable y un custodio.** Para cada activo o grupo, registre quién responde y quién lo tiene. Actualice cuando las personas cambien de puesto o se vayan.
6. **Siga todo el ciclo de vida.** Registre el despliegue, los traslados, los cambios de propiedad, la reparación y el retiro. Use las fechas del ciclo de vida para planificar la sustitución y las renovaciones.
7. **Vincule los activos con servicios y costos.** Conecte cada activo con los servicios que respalda y el presupuesto al que pertenece. Esto permite el análisis de impacto y la asignación de costos.
8. **Haga seguras la pérdida y la eliminación.** Defina qué ocurre cuando un dispositivo se pierde o se retira: borrado de datos, eliminación segura, certificados y registro. Compruebe que ocurre.
9. **Audite por muestreo.** Compruebe cada periodo una muestra de registros frente a la realidad, por ejemplo verificando físicamente dispositivos, y mida la exactitud.
10. **Use los datos para decidir.** Revise la utilización, la antigüedad, los fallos y el costo para orientar la sustitución, los cambios de licencias y la consolidación. Un registro que nadie usa se deteriorará.

## Preguntas para conversar con su equipo

**¿Cuántos dispositivos, licencias y suscripciones tenemos y qué confianza tenemos en cada número?**
Pregunte a distintas personas. Espere respuestas distintas. Pregunte cómo se obtuvo el número. Después elijan una categoría y concíliela bien.

**¿Por dónde entran activos en nuestra organización sin ser registrados?**
Busque compras con tarjeta, regalos, pruebas que se hicieron permanentes y cuentas de nube creadas por equipos. Espere varias brechas. Después cierren la mayor.

**¿Quién es responsable de cada una de nuestras categorías de activos?**
La responsabilidad suele ser poco clara en el equipamiento compartido y las suscripciones. Pida nombres. Después asignen responsables y una fecha de revisión.

**¿Qué ocurre cuando alguien pierde un portátil o deja la organización?**
Recorran el proceso paso a paso. Esperen brechas en la recuperación del equipo y la retirada de accesos. Después acuerden una lista de comprobación y un responsable.

**¿Por qué activos pagamos pero ya no usamos?**
Miren licencias, suscripciones y equipos ociosos. Esperen encontrar algo. Después elijan los tres costos principales y decidan retirar, reasignar o renovar.

**¿Cómo podría ayudar la IA a mantener exactos nuestros datos de activos y qué comprobaríamos a mano?**
La IA puede emparejar registros, señalar entradas extrañas y sugerir categorías. También puede fusionar registros por error. Pregunte quién es responsable del uso y cómo se encuentran los errores. Después pruébenla con una muestra frente a una lista conciliada manualmente.

## En la práctica: un ejemplo de gestión de servicios

El director de finanzas pide al departamento de TI de una universidad el número de portátiles en uso. Tres fuentes dan tres respuestas: compras dice 4.200, el sistema de identidad muestra 3.600 usuarios con portátil registrado y la herramienta de gestión de endpoints ve 3.900 dispositivos. El departamento tiene además un hallazgo reciente de auditoría según el cual los portátiles de quienes se van no siempre se devuelven.

El responsable de ITAM empieza por decidir el alcance: portátiles, ordenadores de sobremesa, tabletas y teléfonos por encima de un valor pequeño, además de software y suscripciones en la nube. Nombra al sistema de gestión de endpoints como fuente de verdad de lo que está en uso y a los registros de compras como fuente de lo que se compró, y pide al gestor de activos que concilie cada mes. La primera conciliación encuentra unos 300 dispositivos comprados y no vistos en la red, 200 vistos en la red y no comprados mediante compras, y 90 dispositivos asignados a personal que se había ido.

Establece tres cambios: etiquetas y un registro en la recepción de cada dispositivo; una lista de comprobación de bajas que vincula el evento de baja de RR. HH. con una tarea de recuperar el equipo, con un plazo; y una muestra trimestral en la que un técnico verifica físicamente 100 dispositivos. Tras dos trimestres, las diferencias de conciliación bajan en dos tercios y la exactitud de la muestra es del 94 por ciento.

Qué cambia: el director de finanzas obtiene un número que el departamento puede defender, y el proceso de bajas recupera decenas de dispositivos. Qué sigue siendo difícil: los dispositivos comprados por grupos de investigación con subvenciones siguen eludiendo compras; la comprobación física en campus remotos depende de personal ocupado; y los datos de las suscripciones en la nube están en otra herramienta que pertenece a otro equipo. La responsable lleva al director de finanzas las compras con subvenciones y los datos de suscripciones como siguiente pieza.

## Cuatro perspectivas

### Equipos de producto y de entrega

Registren los activos que usa su producto: licencias, servicios en la nube y dispositivos. Etiqueten los recursos de nube con responsable y proyecto en el momento de crearlos y retiren lo que ya no necesiten.

### Equipos de servicio y de operaciones

Mantengan exactos los registros a medida que despliegan, trasladan y retiran equipamiento. Informen de las discrepancias y usen los datos de descubrimiento en incidentes y cambios.

### Liderazgo y gobernanza

Pida un inventario defendible y el costo de lo que se posee. Financie el proceso y las herramientas. Use los datos para decisiones de sustitución y de costos, y haga responsables a los dueños.

### Clientes y usuarios

Usted tiene activos en nombre de la organización. Manténgalos seguros, informe pronto de la pérdida y devuelva el equipo cuando se vaya. Diga al proveedor qué herramientas necesita que no se suministran.

## Ágil, IA, automatización y analítica

### Ágil

Empiece por las categorías de mayor valor y mejore el proceso en pasos pequeños con los usuarios. Revise la exactitud y los puntos de dolor con regularidad. Precaución: un proyecto de inventario de gran explosión queda desactualizado enseguida; construya el hábito de registrar sobre la marcha.

### IA

La IA puede conciliar registros de varias fuentes, señalar anomalías como dispositivos no vistos en meses y predecir fallos a partir de la antigüedad y el historial, con una persona que revise las fusiones y retiros propuestos. Nombre un responsable. Precaución: la IA puede fusionar dos activos distintos o pasar por alto un desajuste; muestree su salida. Véase el Tema 5.1 — IA en la gestión de servicios.

### Automatización

Automatice el descubrimiento, la creación de registros en la compra y la inscripción, los desencadenantes de bajas y los recordatorios de renovación, con registros. Precaución: los registros automatizados pueden multiplicar duplicados; fije reglas de emparejamiento y revise las excepciones. Véase el Tema 6.1 — Estrategia de automatización.

### Analítica

Observe la exactitud del inventario, los activos sin responsable, el perfil de antigüedad, la utilización, el costo por tipo de activo y las licencias sin uso. Precaución: una cifra alta de exactitud procedente de una muestra pequeña puede engañar; muestree entre ubicaciones y tipos. Véanse el Tema 7.3 — Medición e informes y el libro *Service Management Metrics*.

## Modos de fallo habituales

- **Varias listas sin conciliar.** Nadie conoce la verdad. Elija una fuente de verdad y concilie.
- **Registrar después del despliegue.** Se pierden elementos. Registre en la adquisición.
- **Sin responsable ni custodio.** Se pierde equipamiento. Nombre ambos.
- **Pagar por lo que no se usa.** Las licencias y suscripciones continúan. Revise el uso y retire.
- **Sin control de eliminación.** Los datos se van con el equipo retirado. Borre y registre.
- **Registros que nadie usa.** Los datos se deterioran. Úselos para decidir.
- **Ignorar la nube y las suscripciones.** Los costos crecen sin verse. Siga estos elementos como activos.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Inventario | Hojas de cálculo | Un registro principal | Registro único conciliado con el descubrimiento | Exactitud medida y mejorada | Inventario en tiempo real entre local, nube y proveedores |
| Ciclo de vida | Sin seguimiento | Se anotan compra y eliminación | Etapas y fechas del ciclo de vida registradas | Ciclo de vida usado para planificar sustitución y renovación | Ciclo de vida gestionado entre activos y proveedores con automatización |
| Responsabilidad | Poco clara | Responsables de los elementos grandes | Responsable y custodio para cada activo | Responsabilidad revisada con regularidad | Responsabilidad vinculada con servicios y presupuestos |
| Uso de los datos | Contar | Informes básicos | Costos y utilización usados en las decisiones | Ahorros y riesgo seguidos | Los datos impulsan la planificación en todo el portafolio |

## Lista de verificación

- [ ] Definimos qué activos seguimos y el umbral.
- [ ] Existe una fuente de verdad para cada tipo de activo.
- [ ] Los activos se registran en la adquisición, con identificación.
- [ ] El descubrimiento y los registros se concilian con regularidad.
- [ ] Cada activo tiene un responsable y un custodio.
- [ ] La pérdida, la baja y la eliminación tienen un proceso definido y comprobado.
- [ ] Auditamos una muestra de registros frente a la realidad.
- [ ] Usamos los datos para orientar las decisiones de sustitución y de costos.

## Prompts de IA

**Concilie dos listas.**

```text
Here are two lists of devices from different systems, with identifiers removed where sensitive: [paste list A] and [paste list B].
List items that appear in both, items only in A, items only in B, and items that might be the same asset under different names. Show your matching reasoning and do not merge anything.
List what you are unsure of.
```

**Encuentre candidatos para retirar.**

```text
Here is a list of subscriptions and licenses with cost, number of seats, and last-used dates: [paste].
List those with low or no recent use, the cost of each, and a question to ask the owner. Do not recommend cancellation.
List what you are unsure of.
```

**Redacte una lista de comprobación de bajas.**

```text
Our context: [type of organization, equipment, systems]. Our leaver triggers: [describe].
Draft a checklist for retrieving equipment and removing access, with owners and deadlines for each step, and note what could be missed. Do not add legal requirements.
List what you are unsure of.
```

## Habilidades de IA

- [configuration-management](../../../../skills/configuration-management/SKILL.md): úsela para vincular los activos con los servicios que respaldan.
- [data-governance](../../../../skills/data-governance/SKILL.md): úsela para la responsabilidad y la clasificación de los activos de datos.
- [roi-analysis](../../../../skills/roi-analysis/SKILL.md): úsela para sopesar decisiones de sustitución o retiro.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md): úsela para aclarar quién responde de cada categoría de activos.

## Fuentes principales

- ISO/IEC 19770 (los propios estándares): los requisitos y la orientación para la gestión de activos de TI; lea las ediciones vigentes del editor.
- PeopleCert, páginas de certificación ITIL: la descripción del propietario de la práctica de gestión de activos de TI.
- Wikipedia, "Asset management" y "Total cost of ownership": visiones generales de las ideas.
- Wikipedia, "Shadow IT": antecedentes de la tecnología no gestionada.

## Referencias

1. Asset management — Wikipedia — https://en.wikipedia.org/wiki/Asset_management
2. ISO/IEC 19770 — Wikipedia — https://en.wikipedia.org/wiki/ISO/IEC_19770
3. Asset tracking — Wikipedia — https://en.wikipedia.org/wiki/Asset_tracking
4. Inventory — Wikipedia — https://en.wikipedia.org/wiki/Inventory
5. Product lifecycle — Wikipedia — https://en.wikipedia.org/wiki/Product_lifecycle
6. Total cost of ownership — Wikipedia — https://en.wikipedia.org/wiki/Total_cost_of_ownership
7. Depreciation — Wikipedia — https://en.wikipedia.org/wiki/Depreciation
8. Shadow IT — Wikipedia — https://en.wikipedia.org/wiki/Shadow_IT
9. Electronic waste — Wikipedia — https://en.wikipedia.org/wiki/Electronic_waste
10. Digital asset management — Wikipedia — https://en.wikipedia.org/wiki/Digital_asset_management
11. Radio-frequency identification — Wikipedia — https://en.wikipedia.org/wiki/Radio-frequency_identification
