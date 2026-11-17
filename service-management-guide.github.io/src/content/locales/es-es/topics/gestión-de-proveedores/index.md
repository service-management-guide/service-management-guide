# Gestión de Proveedores

**La gestión de proveedores asegura que los vendedores, proveedores de nube y socios de los que depende un servicio entreguen lo acordado y que usted pueda arreglárselas cuando no lo hagan; funciona cuando se trata a los proveedores como parte del servicio, los contratos coinciden con los niveles de servicio que usted promete y la relación incluye una revisión conjunta y un plan de salida.**

## Por qué importa

Pocos servicios los entrega una sola organización. La aplicación móvil de un banco funciona sobre una plataforma en la nube, usa un procesador de pagos, envía mensajes a través de un proveedor de telecomunicaciones y la respalda fuera de horario un proveedor de servicios gestionados. Cada uno de ellos es un eslabón de la cadena. Cuando falla uno, el cliente no distingue entre el banco y su proveedor. El banco es el responsable.

La gestión de proveedores es la práctica que trata esta realidad. Abarca la elección de proveedores, el acuerdo de lo que proporcionarán, la monitorización de su desempeño, la gestión de la relación y la planificación del cambio o del fallo. Cuando funciona, los proveedores se convierten en parte del equipo de servicio, con metas compartidas y comunicación abierta. Cuando falla, las organizaciones descubren demasiado tarde que un contrato promete menos que el servicio que han prometido a sus propios clientes, o que dejar a un proveedor llevaría dos años.

Los servicios modernos lo hacen más difícil y más importante. Las plataformas en la nube y los productos de software como servicio aportan capacidades en minutos y pueden ser difíciles de abandonar. Los servicios de IA añaden nuevas dependencias de modelos y prácticas de datos que el comprador no puede ver. Este tema explica la práctica, los principales arreglos y las trampas. Se conecta con la gestión de niveles de servicio (Tema 3.7 — Gestión de Niveles de Servicio), la continuidad del servicio (Tema 3.12 — Gestión de la Continuidad del Servicio) y la gestión financiera (Tema 4.5 — Gestión financiera y FinOps). No ofrece asesoramiento jurídico ni de compras; obtenga eso de los especialistas adecuados.

## Conceptos clave

**Proveedor.** Una parte que suministra productos o servicios a una organización, como un vendedor, un contratista, un proveedor de nube o un socio. En términos de ITIL 4, los proveedores aparecen en la dimensión «socios y proveedores» (véase el Tema 1.6 — Cuatro Dimensiones de la Gestión de Servicios). Un proveedor puede ser también un competidor, un cliente o parte del mismo grupo empresarial.

**Gestión de proveedores.** La práctica de asegurar que los proveedores de la organización y su desempeño se gestionan de forma adecuada para apoyar la prestación fluida de productos y servicios de calidad. Wikipedia describe ideas relacionadas bajo gestión de la relación con proveedores y sistemas de gestión de proveedores.

**Externalización (outsourcing).** Contratar una actividad con un tercero. Wikipedia describe la externalización y la deslocalización, con sus motivos y riesgos. La externalización traslada el trabajo; no traslada al cliente la responsabilidad por el resultado.

**Multiproveedor e integración.** Muchas organizaciones usan varios proveedores, cada uno para una parte distinta del servicio. Wikipedia describe el multiproveedor (multisourcing). Alguien tiene que coordinarlos para que el cliente vea un solo servicio. Este papel se llama a veces integración y gestión de servicios (SIAM), descrita en Wikipedia, y puede desempeñarlo el cliente, un proveedor principal o un especialista. Véase la habilidad de integración y gestión de servicios de esta guía.

**Nube y software como servicio.** La computación en la nube y el software como servicio trasladan infraestructura y aplicaciones a los proveedores. Wikipedia describe ambos. La responsabilidad es compartida: el proveedor asegura y opera la plataforma; el cliente configura, usa y protege lo que pone allí. El reparto difiere según el modelo de servicio, y malentenderlo es una causa común de incidentes. Lea la descripción del proveedor de su modelo de responsabilidad compartida.

**Contratos y acuerdos.** Un contrato indica lo que proporcionará el proveedor, a qué precio, con qué niveles de servicio y con qué compensaciones. Un contrato de apoyo respalda los niveles de servicio que usted ha prometido a su propio cliente; ambos deben ser coherentes. Véase el Tema 3.7 — Gestión de Niveles de Servicio. El artículo de Wikipedia sobre la gestión de contratos describe cómo gestionar los acuerdos a lo largo de su vida.

**Diligencia debida.** Comprobar a un proveedor antes de comprometerse: salud financiera, prácticas de seguridad, referencias, certificaciones y capacidad de satisfacer la necesidad. Wikipedia describe la diligencia debida. Adapte las comprobaciones a la importancia del proveedor.

**Gestión del desempeño.** Monitorizar lo que entrega el proveedor frente a lo acordado, con revisiones regulares. Las medidas deben reflejar lo que le importa y basarse en datos que pueda verificar. Los indicadores clave de desempeño se describen en Wikipedia, así como las cautelas sobre ellos. Véase el libro *Service Management Metrics*.

**Relación y gobierno.** Una relación con un proveedor necesita contactos designados en ambas partes, reuniones regulares, una vía de escalamiento y una forma de plantear preocupaciones. El tono importa: los proveedores tratados como adversarios tienden a protegerse; los tratados como socios tienden a compartir los problemas pronto.

**Dependencia de un proveedor (vendor lock-in).** Una situación en la que cambiar de proveedor es costoso o poco práctico. Wikipedia describe el vendor lock-in. La dependencia es a veces un precio aceptable por el valor; debe ser una elección consciente. Los estándares abiertos y la interoperabilidad, descritos en Wikipedia, la reducen.

**Planificación de la salida.** Un plan para terminar la relación: cómo se transferirán los datos y servicios, cuánto tardaría, cuánto costaría y qué debe proporcionar el proveedor. Wikipedia describe las estrategias de salida en general. Un plan de salida que nunca se ha examinado es una esperanza. Para los proveedores críticos, pruebe partes de él.

**Concentración y dependencia.** Depender mucho de un proveedor, o de varios que se apoyan en el mismo proveedor subyacente, crea un riesgo de concentración. Mapee las dependencias, incluidas las indirectas. Véase el Tema 3.12 — Gestión de la Continuidad del Servicio.

**Seguridad de la información y datos.** Los proveedores suelen manejar datos sensibles. Acuerde requisitos de seguridad, notificación de incidentes, derechos de auditoría y ubicación y devolución de los datos. Compruebe la ley que le aplique. Véase el Tema 3.13 — Gestión de la Seguridad de la Información.

**Proveedores de IA.** Los proveedores de modelos y servicios de IA traen preguntas particulares: con qué datos entrenan, si se conservan sus entradas, cómo se anuncian los cambios en los modelos y qué supervisión puede aplicar usted. Véase el Tema 5.6 — Gobernanza, riesgo y cumplimiento de la IA.

**Cómo encajan las lentes.** La gestión de proveedores aplica la mejora continua a las relaciones: revisión regular y mejora conjunta. La IA puede ayudar a leer contratos y resumir el desempeño, bajo revisión jurídica y humana. La automatización recoge datos de desempeño y fechas de renovación. La analítica muestra el desempeño y el gasto de los proveedores.

## Buenas prácticas

1. **Conozca a sus proveedores y lo que aporta cada uno.** Mantenga un registro de proveedores con los servicios que respaldan, las fechas de contrato, los responsables y la criticidad. Incluya los servicios en la nube comprados con tarjeta.
2. **Haga que los contratos coincidan con sus propios compromisos.** Para cada servicio que usted promete, compruebe que todos los contratos de apoyo lo permiten. Cierre las brechas renegociando, añadiendo redundancia o cambiando su promesa.
3. **Adapte la diligencia debida al riesgo.** Examine con cuidado a los proveedores críticos; use comprobaciones más ligeras para los menores. Vuelva a revisar cuando un proveedor cambie de propietario o de alcance.
4. **Nombre responsables en ambos lados.** Cada proveedor tiene un responsable interno de la relación y un contacto designado en el proveedor. Fije por adelantado una vía de escalamiento.
5. **Revise el desempeño con regularidad.** Reúnase según un calendario, observe los datos y los incidentes y acuerde acciones. Comparta el desempeño de su propio servicio para que el proveedor vea el efecto.
6. **Trate a los proveedores como parte del equipo donde importe.** Inclúyalos en las revisiones de incidentes y en la planificación de cambios que les afecten. Comparta la información que les ayude a ayudarle.
7. **Entienda la responsabilidad compartida.** Para los servicios en la nube y de software, escriba qué hace el proveedor y qué hace usted. Compruebe que su parte está cubierta.
8. **Planifique la salida.** Para los proveedores críticos, documente cómo se alejaría, incluida la exportación de datos, el plazo y el costo. Pruebe partes, como exportar datos.
9. **Vigile la concentración.** Mapee qué servicios dependen del mismo proveedor o del mismo proveedor subyacente. Decida dónde vale la pena pagar por la redundancia.
10. **Incluya preguntas de seguridad, privacidad e IA.** Pregunte a los proveedores cómo protegen los datos, notifican los incidentes y usan o entrenan con sus datos, y registre las respuestas.

## Preguntas para conversar con su equipo

**¿Qué proveedores podrían detener nuestro servicio más importante y qué haríamos?**
Enumérenlos, incluidos los indirectos. Esperen una o dos sorpresas. Después elijan un proveedor crítico y pregunten cómo nos las arreglaríamos con una semana de caída.

**¿Dónde un contrato con un proveedor promete menos de lo que nosotros prometemos a nuestros clientes?**
Pongan los números lado a lado. Esperen brechas en los tiempos de respuesta y la disponibilidad. Después elijan una brecha para cerrar o para señalar al cliente.

**¿Quién es el responsable de cada relación con un proveedor y cuándo se reunió por última vez con él?**
La responsabilidad suele darse por supuesta. Pregunte la fecha de la última reunión y qué resultó de ella. Después asignen responsables y un calendario.

**¿Cuánto tardaríamos en dejar a nuestro mayor proveedor y qué perderíamos?**
Intenten responder de forma concreta. Esperen «años» o «ni idea». Después redacten un plan de salida aproximado y prueben una exportación de datos.

**¿Qué suponemos que gestiona por nosotros el proveedor de nube y qué tenemos que hacer en realidad?**
Comprueben la documentación del proveedor. Esperen suposiciones sobre copias de seguridad, acceso y configuración. Después enumeren nuestras propias responsabilidades y quién es responsable de cada una.

**¿Qué hace cada proveedor de IA con nuestros datos y cómo nos informará de los cambios en los modelos?**
Lean los términos. Esperen incertidumbre. Después pregunten directamente a los proveedores y registren las respuestas en el registro.

## En la práctica: un ejemplo de gestión de servicios

El servicio de declaración en línea de una autoridad tributaria nacional depende de cinco proveedores: una plataforma en la nube, un proveedor de verificación de identidad, una pasarela de SMS para códigos de un solo uso, un servicio de escaneo de documentos y un proveedor de servicios gestionados que da soporte a la plataforma fuera de horario. El compromiso de la propia autoridad con los contribuyentes es que el servicio esté disponible durante la temporada de declaraciones con una respuesta a los incidentes en cuatro horas.

La responsable del servicio elabora un registro de una página y compara cada contrato con el compromiso. El contrato del proveedor de servicios gestionados promete una respuesta en ocho horas fuera de horario. El contrato de la pasarela de SMS no indica disponibilidad ni obligación de notificar incidentes. El contrato del proveedor de identidad debe renovarse dentro de cuatro meses, y la salida tardaría unos nueve meses por cómo se almacenan los datos de identidad.

Toma tres medidas. Renegocia la respuesta del proveedor de servicios gestionados a cuatro horas para la temporada de declaraciones, a un precio que va al titular del presupuesto para su decisión. Añade una segunda pasarela de SMS como respaldo y acuerda probar el cambio. E inicia un estudio de salida para el proveedor de identidad, empezando con una exportación de prueba de los datos, y lo usa en las conversaciones de renovación para pedir mejores términos de portabilidad de datos. Programa revisiones trimestrales con cada uno de los cinco, a las que asiste el gestor de cuenta del proveedor.

Qué cambia: la autoridad puede indicar qué promesas a los contribuyentes respalda cada contrato y el respaldo de SMS funciona en la primera prueba. Qué sigue siendo difícil: el costo adicional de respuesta del proveedor de servicios gestionados lo discute finanzas; el fallo regional de la propia plataforma en la nube sigue siendo una dependencia única para la que la autoridad no ha financiado una solución; y el proveedor de identidad todavía no ha aceptado los términos de portabilidad. La responsable registra esto como riesgos abiertos con responsables.

## Cuatro perspectivas

### Equipos de producto y de entrega

Sepan de qué proveedores depende su producto y qué prometen. Diseñen para el fallo del proveedor donde sea práctico y construyan integraciones que hagan posible el cambio. Involucren a los proveedores en la planificación de cambios que les afecten.

### Equipos de servicio y de operaciones

Mantengan al día los contactos de los proveedores y las vías de escalamiento, compartan los incidentes con los proveedores con prontitud y registren su desempeño. Planteen las brechas contractuales con las que se topen en la práctica.

### Liderazgo y gobernanza

Decida qué dependencias son aceptables y financie la redundancia y el trabajo de salida que se derive. Pida evidencia de que los contratos respaldan sus compromisos. Esté atento a la concentración y a la dependencia.

### Clientes y usuarios

Quizá no vea a los proveedores de su proveedor, pero depende de ellos. Pregunte qué dependencias tiene el servicio y qué ocurre si falla una. Espere información clara en un incidente mayor.

## Ágil, IA, automatización y analítica

### Ágil

Incluya a los proveedores en revisiones y mejoras conjuntas regulares y busque ciclos cortos de retroalimentación con ellos. Precaución: los equipos ágiles pueden adoptar servicios con rapidez sin comprobaciones; mantenga al día el registro de proveedores y revise las nuevas dependencias.

### IA

La IA puede ayudar a leer contratos, comparar los términos con los compromisos de servicio y resumir los informes de los proveedores, bajo revisión del personal jurídico y de compras. Nombre un responsable. Precaución: un resumen de IA de un contrato puede pasar por alto o inventar cláusulas; compruebe siempre con el documento y recabe asesoramiento jurídico sobre la interpretación. Véase el Tema 5.6 — Gobernanza, riesgo y cumplimiento de la IA.

### Automatización

Automatice la recogida de datos de desempeño de los proveedores, los recordatorios de renovación y las comprobaciones de la configuración de la nube, con responsables de las excepciones. Precaución: el aprovisionamiento automatizado de servicios de terceros puede crear dependencias sin seguimiento; vincule el aprovisionamiento con el registro. Véase el Tema 6.1 — Estrategia de automatización.

### Analítica

Siga el desempeño de los proveedores frente a las medidas acordadas, el gasto por proveedor, la parte de incidentes y la concentración de dependencias. Precaución: los números informados por el proveedor pueden definirse a su favor, y las penalizaciones ligadas a una sola medida invitan a la manipulación; verifique con sus propios datos. Véanse el libro *Service Management Metrics* y el Tema 7.3 — Medición e informes.

## Modos de fallo habituales

- **Contratos por debajo de los compromisos.** Las promesas superan lo que los proveedores deben entregar. Compare y cierre las brechas.
- **Proveedores fuera del registro.** Proliferan los servicios en la sombra. Mantenga un registro y vincúlelo con las compras.
- **Relaciones adversarias.** Los proveedores ocultan problemas. Comparta metas y revise de forma conjunta.
- **Sin plan de salida.** Cambiar es poco práctico. Planifique y pruebe las salidas críticas.
- **Responsabilidad compartida malentendida.** Se supone que un servicio en la nube es seguro y tiene copias de seguridad. Documente quién hace qué.
- **Concentración oculta.** Varios proveedores se apoyan en el mismo proveedor. Mapee las dependencias indirectas.
- **Ignorar los términos de datos de IA.** Se conservan las entradas o se usan para entrenar. Pregunte y registre.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Visibilidad | Proveedores conocidos por el equipo | Registro de los proveedores principales | Registro con responsables, criticidad y contratos | Registro mantenido al día desde compras y descubrimiento | Dependencias mapeadas entre proveedores y proveedores indirectos |
| Contratos | Firmados y archivados | Revisados en la renovación | Alineados con nuestros compromisos de servicio | Desempeño y compensaciones revisados | Contratos adaptados a lo largo de la cadena de suministro |
| Relación | Transaccional | Contactos designados | Revisiones regulares con acciones | Mejora conjunta y aprendizaje compartido | Proveedores integrados en la planificación y la recuperación |
| Salida y riesgo | Ninguno | Conciencia | Planes de salida para los proveedores críticos | Partes probadas | Redundancia y salidas gestionadas en todo el portafolio |

## Lista de verificación

- [ ] Mantenemos un registro de proveedores con responsables, criticidad y fechas de contrato.
- [ ] Cada contrato con un proveedor se compara con los compromisos que respalda.
- [ ] Cada proveedor crítico tiene un responsable de la relación designado y una vía de escalamiento.
- [ ] Celebramos revisiones regulares con los proveedores críticos.
- [ ] Hemos documentado la responsabilidad compartida de los servicios en la nube.
- [ ] Los proveedores críticos tienen planes de salida, con partes probadas.
- [ ] Conocemos nuestros riesgos de concentración.
- [ ] Hemos preguntado a los proveedores de IA y de datos por el uso de los datos y los cambios en los modelos.

## Prompts de IA

**Compare un contrato con nuestros compromisos.**

```text
Here are the relevant terms from a supplier contract: [paste clauses]. Here are the commitments we make to our own customers for the supported service: [paste].
List each of our commitments and say whether the contract text supports it, conflicts with it, or is silent, quoting the exact words. Do not give legal advice or interpret ambiguous clauses.
List what you are unsure of.
```

**Redacte preguntas para la revisión de un proveedor.**

```text
Supplier: [name and what they provide]. Recent facts: [incidents, performance data, changes].
Draft ten questions for the quarterly review, covering performance, incidents, changes, risks, and improvements. Avoid blame and do not suggest facts I did not give.
List what you are unsure of.
```

**Mapee dependencias a partir de una lista.**

```text
Here is a list of our services and the suppliers each uses: [paste]. Here is what I know about what each supplier itself depends on: [paste, or write "unknown"].
Produce a table showing, for each supplier, which services depend on it, and highlight suppliers that appear in many services or that share an underlying provider. Mark every assumption.
List what you are unsure of.
```

## Habilidades de IA

- [vendor-management](../../../../skills/vendor-management/SKILL.md): úsela para gestionar la selección y el desempeño de los proveedores.
- [service-integration-and-management](../../../../skills/service-integration-and-management/SKILL.md): úsela para coordinar varios proveedores en un solo servicio.
- [service-level-agreement](../../../../skills/service-level-agreement/SKILL.md): úsela para alinear los acuerdos a lo largo de la cadena.
- [risk-register](../../../../skills/risk-register/SKILL.md): úsela para registrar los riesgos de proveedores y las decisiones.

## Fuentes principales

- PeopleCert, páginas de certificación ITIL: la descripción del propietario de la práctica de gestión de proveedores.
- Wikipedia, "Supplier relationship management" y "Outsourcing": visiones generales de las ideas.
- Wikipedia, "Vendor lock-in": un resumen del riesgo y sus causas.
- La propia documentación de los proveedores de nube sobre sus modelos de responsabilidad compartida: la declaración autorizada de quién hace qué.

## Referencias

1. Supplier relationship management — Wikipedia — https://en.wikipedia.org/wiki/Supplier_relationship_management
2. Vendor management system — Wikipedia — https://en.wikipedia.org/wiki/Vendor_management_system
3. Outsourcing — Wikipedia — https://en.wikipedia.org/wiki/Outsourcing
4. Multisourcing — Wikipedia — https://en.wikipedia.org/wiki/Multisourcing
5. Service integration and management — Wikipedia — https://en.wikipedia.org/wiki/Service_integration_and_management
6. Vendor lock-in — Wikipedia — https://en.wikipedia.org/wiki/Vendor_lock-in
7. Contract management — Wikipedia — https://en.wikipedia.org/wiki/Contract_management
8. Due diligence — Wikipedia — https://en.wikipedia.org/wiki/Due_diligence
9. Exit strategy — Wikipedia — https://en.wikipedia.org/wiki/Exit_strategy
10. Cloud computing — Wikipedia — https://en.wikipedia.org/wiki/Cloud_computing
11. Interoperability — Wikipedia — https://en.wikipedia.org/wiki/Interoperability
