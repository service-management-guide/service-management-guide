# Gestión financiera y FinOps

**La gestión financiera de los servicios hace visible el costo de lo que usted opera y lo vincula con el valor entregado; FinOps aplica esa disciplina al gasto en nube y en IA, donde el costo sigue las decisiones de ingeniería hora a hora, poniendo a ingenieros, finanzas y responsables de producto en la misma conversación.**

## Por qué importa

El costo de la tecnología solía ser unas pocas decisiones grandes y lentas: comprar servidores, firmar una licencia, construir un centro de datos. Finanzas podía planificarlo una vez al año. Los servicios en la nube y las suscripciones lo cambiaron. Cualquier ingeniero puede crear un recurso que cuesta dinero cada hora, y la factura llega un mes después, agregada de modo que nadie puede decir qué la causó. Los costos suben poco a poco y luego dan un salto, y la primera señal es una sorpresa en una factura.

La IA lo agudiza. Un prompt cuesta una fracción de céntimo, y una función usada por un millón de personas cuesta mucho. Entrenar un modelo o ejecutar una carga grande en hardware especializado puede costar en un día tanto como el presupuesto mensual de un equipo. A diferencia de un servidor, que se ve en un bastidor, el costo basado en el uso es invisible hasta que es grande.

La gestión financiera en la gestión de servicios es anterior a la nube. ITIL la describe como entender y gestionar los costos de los servicios, incluidos el presupuesto, la contabilidad y la facturación. FinOps es una práctica más reciente, bautizada por una comunidad de profesionales, que aporta responsabilidad financiera al gasto en nube mediante la colaboración entre los equipos de ingeniería, finanzas y negocio. Este tema describe ambas y cómo se complementan. Se vincula con la gestión de activos (Tema 4.1 — Gestión de activos), la gestión de niveles de servicio (Tema 3.7 — Gestión de Niveles de Servicio) y la economía de la automatización y la IA (Tema 6.1 — Estrategia de automatización y Tema 5.8 — Modelo operativo y habilidades de IA). No ofrece asesoramiento contable ni fiscal.

## Conceptos clave

**Cálculo del costo de un servicio.** Averiguar cuánto cuesta entregar un servicio: personas, infraestructura, licencias, proveedores y gastos generales. Wikipedia describe la contabilidad de costos, la práctica más amplia de registrar y analizar costos. Los costos son directos (pertenecen a un servicio) o compartidos (por asignar). El objetivo es una estimación utilizable, no una perfecta.

**Asignación de costos.** Atribuir los costos compartidos a servicios, equipos o productos según una regla, como el número de personas, el uso o la capacidad. Wikipedia describe la asignación de costos y el costeo basado en actividades, que asigna el costo según las actividades que lo generan. Una regla debe ser comprensible y difícil de rebatir; una regla perfecta no vale una larga discusión.

**Showback y chargeback.** El showback informa de los costos a los consumidores sin facturarlos; el chargeback se los factura. Wikipedia describe el chargeback y el showback de TI. El showback genera conciencia con menos fricción. El chargeback crea incentivos más fuertes y más administración, y puede producir discusiones sobre la asignación. Muchas organizaciones empiezan por el showback.

**Presupuesto y pronóstico.** Un presupuesto es un plan del gasto esperado; un pronóstico es una estimación actualizada de dónde acabará el gasto. Wikipedia describe los presupuestos y los pronósticos. Para el gasto variable en nube e IA, los pronósticos frecuentes y las alertas importan más que una cifra anual. Véase el Tema 2.10 — Gestión ágil y aprendizaje sobre la financiación de equipos estables.

**Gastos de capital y gastos operativos.** La contabilidad distingue el gasto de capital, que compra activos que se espera que duren, del gasto operativo, que es el costo del día a día. Wikipedia describe ambos. La nube desplaza el gasto del capital a lo operativo, lo cual afecta a los presupuestos y a los informes; pregunte a finanzas cómo lo trata su organización.

**Costo total de propiedad.** El costo a lo largo de toda la vida de un activo o servicio, incluidos la compra, la operación, el soporte y la eliminación. Wikipedia describe el costo total de propiedad. Evita elegir la compra más barata y la vida más cara.

**Retorno y valor.** El costo importa en relación con el valor. El retorno de la inversión (ROI), el valor actual neto y medidas similares comparan los beneficios con los costos a lo largo del tiempo. Wikipedia describe el retorno de la inversión y el valor actual neto. Tenga cuidado con los beneficios difíciles de medir; indique supuestos y rangos.

**Costo de oportunidad y costo hundido.** El costo de oportunidad es el valor de la mejor alternativa a la que se renuncia. El costo hundido es el gasto que no puede recuperarse; no debería guiar las decisiones futuras, aunque a menudo lo hace. Wikipedia describe ambos.

**FinOps.** Una práctica, y una comunidad, destinada a aportar responsabilidad financiera al gasto variable en nube. Wikipedia no tiene un artículo separado con ese nombre en el momento de escribir esto; la FinOps Foundation (finops.org), parte de la Linux Foundation, publica un marco y definiciones. Sus ideas centrales son que los equipos son responsables de su uso y su costo, que las decisiones las impulsa el valor de negocio de la tecnología, que los datos son oportunos y accesibles, y que un grupo central facilita en lugar de vigilar.

**El ciclo FinOps.** Una descripción común tiene tres fases que se repiten: informar (hacer visibles y asignar los costos), optimizar (encontrar y actuar sobre los ahorros) y operar (incorporar la práctica en cómo trabajan los equipos). Consulte el marco vigente de la Foundation para los detalles.

**Etiquetado y asignación en la nube.** Los datos de costos solo son útiles si los recursos están etiquetados con responsable, servicio y entorno. Sin etiquetas, las facturas no pueden asignarse. Haga cumplir el etiquetado en la creación. Véase el Tema 4.4 — Gestión de la Configuración.

**Palancas de optimización.** Las comunes incluyen ajustar el tamaño de los recursos, apagar los ociosos, usar descuentos por compromiso para las cargas estables, elegir niveles de almacenamiento más baratos y el cambio de arquitectura. Los ahorros dependen de compromisos con la fiabilidad y el esfuerzo. Sopese cada uno frente al nivel de servicio que respalda. Véase el Tema 3.11 — Disponibilidad, Capacidad y Rendimiento.

**Costos unitarios.** El costo por transacción, por usuario o por solicitud relaciona el gasto con el valor. Si el costo total sube pero el costo por transacción baja, el crecimiento puede explicarlo. Si el costo por transacción sube, algo va mal. Las medidas unitarias ayudan en las conversaciones con finanzas y con los responsables de producto.

**Costo de la IA.** Las cargas de IA añaden costos de entrenamiento, alojamiento y uso, con frecuencia con precios por tokens (unidades de texto procesado), por tiempo de cómputo en hardware especializado como las unidades de procesamiento gráfico, o por llamada. Wikipedia describe las unidades de procesamiento gráfico y el aprendizaje automático. El consumo de energía es también un costo y una preocupación de sostenibilidad. Siga el costo por caso de uso y por resultado. Véase el Tema 5.8 — Modelo operativo y habilidades de IA.

**La deuda técnica como idea financiera.** El mantenimiento aplazado es un pasivo cuyos intereses se pagan en trabajo más lento y más incidentes. Wikipedia describe la deuda técnica. Mostrar su costo en dinero y tiempo ayuda a que compita por financiación.

**Cómo encajan las lentes.** La gestión financiera respalda la financiación ágil de equipos estables. La IA puede ayudar a analizar facturas y a pronosticar, bajo revisión, y es en sí un costo que gestionar. La automatización apaga los recursos ociosos y hace cumplir las etiquetas. La analítica proporciona los datos de costo y valor.

## Buenas prácticas

1. **Haga visible el costo a quienes deciden.** Muestre a cada equipo el costo de lo que opera, casi en tiempo real, con una asignación en la que confíen. La visibilidad cambia el comportamiento más que la política.
2. **Etiquete en la creación y haga que se cumpla.** Exija etiquetas de responsable, servicio y entorno en el pipeline. Informe del gasto sin etiquetar y persígalo.
3. **Empiece por el showback.** Comparta los costos y deje que los equipos reaccionen antes de introducir cargos. Pase al chargeback solo si los beneficios justifican el esfuerzo y las discusiones.
4. **Asigne con reglas simples y acordadas.** Elija reglas que la gente entienda, documéntelas y revíselas cada año. No dedique meses a la perfección.
5. **Pronostique a menudo y alerte ante los cambios.** Para el gasto variable, actualice los pronósticos cada mes o semana y fije alertas de presupuesto. Investigue las sorpresas con rapidez.
6. **Actúe sobre los ahorros evidentes.** Elimine los recursos ociosos, ajuste el tamaño y pase a niveles más baratos donde los niveles de servicio lo permitan. Registre cada ahorro y su compromiso.
7. **Comprométase donde la carga sea estable.** Para el uso constante, considere descuentos por compromiso tras un análisis, y revíselos. Evite comprometerse con cargas inciertas.
8. **Use costos unitarios.** Informe el costo por transacción, usuario o resultado junto a los totales. Discuta los cambios con los responsables de producto.
9. **Incluya el uso de IA.** Mida el costo por caso de uso de IA, incluidos el uso, el alojamiento y el soporte. Fije límites y alertas y revise si cada uso vale su costo.
10. **Sopese el costo frente al valor y el riesgo.** No recorte lo que protege la fiabilidad, la seguridad o la experiencia del usuario sin una elección consciente. Muestre los compromisos al responsable.

## Preguntas para conversar con su equipo

**¿Cuánto cuesta operar nuestro servicio más importante y qué seguridad tenemos?**
Pida una cifra y su método. Espere números aproximados y piezas que faltan. Después elijan un servicio y construyan una mejor estimación.

**¿Qué costos de nube no podemos atribuir a un equipo ni a un servicio?**
Miren el gasto sin etiquetar. Esperen una proporción significativa. Después asignen los elementos mayores y hagan cumplir las etiquetas para los nuevos.

**¿En qué gastamos por última vez algo que no volveríamos a elegir y por qué no lo notamos?**
Esto encuentra brechas de visibilidad. Esperen recursos ociosos y suscripciones olvidadas. Después acuerden una alerta y una revisión mensual.

**¿Cómo decidimos si un ahorro vale el riesgo para el servicio?**
Pidan el último ejemplo. Esperen que nadie lo sopesara de forma explícita. Después acuerden quién decide y qué información necesita.

**¿Cuánto cuesta nuestro uso de IA por caso de uso y quién es responsable de la cifra?**
Pidan el desglose de la factura. Esperen cifras agregadas o desconocidas. Después asignen un responsable del costo para cada uso importante de IA y fijen un límite.

**¿Cómo hablan hoy de costos finanzas, ingeniería y los responsables de producto y qué podría mejorar?**
Describan las reuniones. Esperen que ocurran por separado. Después organicen una breve revisión conjunta mensual de los principales costos.

## En la práctica: un ejemplo de gestión de servicios

La plataforma de streaming de un radiodifusor nacional funciona en una nube pública y cuesta varias veces lo planificado. El equipo de finanzas recibe una única factura mensual y pide a ingeniería que la «reduzca un 15 por ciento». Los ingenieros dicen que el tráfico crece y que recortar el gasto pondría en riesgo el servicio durante los eventos en directo.

La responsable de la plataforma pide un mes para construir visibilidad. Hace cumplir las etiquetas mediante una regla del pipeline y, para los recursos existentes, asigna responsables con ayuda de cada equipo. El gasto sin etiquetar baja del 38 por ciento al 7 por ciento. Con la asignación en marcha, elabora un informe de showback por equipo y servicio, más el costo por hora transmitida. El informe muestra que el costo total ha subido un 30 por ciento en el año, mientras que el costo por hora transmitida ha bajado ligeramente: el crecimiento, no el despilfarro, explica la mayor parte. También muestra que los entornos de desarrollo y pruebas, que funcionan toda la noche y los fines de semana, suponen el 18 por ciento del gasto.

El equipo programa el apagado de los entornos no productivos fuera del horario de trabajo, lo que ahorra aproximadamente dos tercios de su costo, y ajusta el tamaño de un conjunto de bases de datos sobredimensionadas. Evita tocar la capacidad para los eventos en directo. Para las cargas de base estables, compra descuentos por compromiso tras un análisis de uso de tres meses. Una nueva función de subtitulado asistido por IA se sigue por separado: su costo por hora de vídeo es mayor de lo esperado, y la responsable de producto decide aplicarla primero solo a las noticias en directo.

Qué cambia: finanzas e ingeniería discuten el costo por hora transmitida, y la meta pasa a ser un costo unitario, no un recorte lineal. Qué sigue siendo difícil: los datos de costos llegan con retraso, de modo que un mal despliegue puede funcionar días antes de que se vea; la asignación de los costos compartidos de la plataforma la discuten dos equipos; y los compromisos reducen la flexibilidad si cambia la arquitectura. La responsable programa una revisión trimestral de los compromisos y una breve nota sobre cómo se asignan los costos compartidos.

## Cuatro perspectivas

### Equipos de producto y de entrega

Sepan cuánto cuesta su producto, etiqueten lo que crean e incluyan el costo en las decisiones de diseño. Observen el costo por transacción y avisen al responsable cuando una función lo cambie.

### Equipos de servicio y de operaciones

Eliminen los recursos ociosos, ajusten el tamaño cuidando la fiabilidad y alerten de los picos de costo. Lleven datos operativos a las conversaciones con finanzas.

### Liderazgo y gobernanza

Pida costos unitarios y valor, no solo totales. Decida cuánto centralizar. Financie el trabajo de visibilidad y de etiquetado y respalde de forma explícita los compromisos frente a la fiabilidad.

### Clientes y usuarios

Si se le factura, debería ver qué impulsa el costo y qué opciones tiene. Pida la base de cualquier asignación y diga qué niveles de servicio valora.

## Ágil, IA, automatización y analítica

### Ágil

Financie equipos estables, revise el costo con los responsables de producto con regularidad y trate el costo como una entrada más para la priorización. Precaución: no haga del recorte de costos la única meta; los equipos recortarán lo fácil, como las pruebas y la resiliencia.

### IA

La IA puede ayudar a analizar facturas, encontrar anomalías y recursos ociosos y pronosticar el gasto, bajo revisión. Las cargas de IA necesitan su propio seguimiento de costos, responsables y límites. Precaución: un asistente de IA que recomienda ahorros puede ignorar restricciones de fiabilidad o contractuales; compruebe cada recomendación. Véase el Tema 5.8 — Modelo operativo y habilidades de IA.

### Automatización

Automatice el cumplimiento de etiquetas, el apagado de recursos ociosos, las alertas de presupuesto y los informes, con excepciones y registros. Precaución: el apagado automático puede borrar o detener algo necesario; use calendarios y confirmación del responsable para los recursos importantes. Véase el Tema 6.1 — Estrategia de automatización.

### Analítica

Use el costo asignado, el costo unitario, la precisión del pronóstico, la proporción sin etiquetar y la utilización de los compromisos. Precaución: las cifras de showback dependen de las reglas de asignación y los ahorros de optimización suelen exagerarse; compare con las facturas reales. Véanse el Tema 7.3 — Medición e informes y el libro *Service Management Metrics*.

## Modos de fallo habituales

- **Una factura global.** Nadie es dueño del costo. Etiquete, asigne e informe por equipo.
- **El recorte de costos como meta.** Sufre la fiabilidad. Empareje el costo con niveles de servicio y valor.
- **Peleas por la asignación.** Los equipos discuten las reglas. Elija reglas simples y revíselas cada año.
- **Pronosticar una vez al año.** El gasto variable sorprende. Pronostique a menudo y alerte.
- **Comprometerse demasiado pronto.** Los descuentos fijan la capacidad equivocada. Analice primero el uso.
- **Ignorar el costo de la IA.** El uso crece sin verse. Siga por caso de uso y fije límites.
- **Sin vínculo con el valor.** El gasto se recorta o crece sin razón. Use costos unitarios y resultados.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
|---|---|---|---|---|---|
| Visibilidad | Factura total | Costo por cuenta | Costo asignado por equipo y servicio con etiquetas | Costo casi en tiempo real con alertas de anomalías | Costo y valor visibles entre proveedores y suministradores |
| Asignación | Ninguna | Aproximada | Reglas simples documentadas | Reglas revisadas con los responsables | Asignación integrada con la planificación y la financiación |
| Optimización | Ad hoc | Algunos ahorros encontrados | Ciclo regular de optimización | Ahorros seguidos frente al costo real | Optimización automatizada con supervisión |
| Vínculo con el valor | Sin vínculo | Se discuten los totales | Se informan costos unitarios | Costos unitarios y resultados revisados con los responsables | Costo, riesgo y valor optimizados en conjunto |

## Lista de verificación

- [ ] Etiquetamos los recursos con responsable, servicio y entorno en la creación.
- [ ] Los equipos ven el costo de lo que operan.
- [ ] Las reglas de asignación están por escrito y acordadas.
- [ ] Los pronósticos se actualizan al menos una vez al mes, con alertas de presupuesto.
- [ ] Revisamos con regularidad los recursos ociosos y sobredimensionados.
- [ ] Informamos los costos unitarios junto a los totales.
- [ ] El uso y el costo de la IA se siguen por caso de uso, con límites.
- [ ] Los ahorros se sopesan frente a la fiabilidad y se registran.

## Prompts de IA

**Encuentre anomalías en un informe de costos.**

```text
Here is a monthly cost report by service and team for the last six months: [paste data].
List changes of more than [percentage] between months, the services involved, and one question per change to ask the owner. Do not explain causes that are not in the data.
List what you are unsure of.
```

**Redacte un resumen de showback para un equipo.**

```text
Team: [name]. Here are their costs and usage for the month: [paste]. Prior month: [paste].
Write a one-page summary in plain language: total, change, top three cost drivers, unit cost if given, and two questions for the team. Do not recommend cuts.
List what you are unsure of.
```

**Estime el costo de un caso de uso de IA.**

```text
The use case: [describe]. Expected usage: [number of requests per day, average size]. Pricing we have been given: [paste].
Calculate a monthly cost range with low, expected, and high usage, showing each step and assumption. State what costs the figures leave out. Do not invent prices.
List what you are unsure of.
```

## Habilidades de IA

- [budget-forecasting](../../../../skills/budget-forecasting/SKILL.md): úsela para construir y actualizar pronósticos con supuestos declarados.
- [roi-analysis](../../../../skills/roi-analysis/SKILL.md): úsela para comparar costos y beneficios.
- [portfolio-management](../../../../skills/portfolio-management/SKILL.md): úsela para revisar el gasto entre productos y servicios.
- [vendor-management](../../../../skills/vendor-management/SKILL.md): úsela para gestionar compromisos y renovaciones.

## Fuentes principales

- FinOps Foundation (finops.org): el marco, las definiciones y el material de casos de la comunidad para la gestión financiera de la nube.
- J.R. Storment y Mike Fuller, *Cloud FinOps* (2.ª edición, 2023): una guía de profesionales sobre la práctica.
- PeopleCert, páginas de certificación ITIL: la descripción del propietario de la práctica de gestión financiera.
- Wikipedia, "Cost accounting" e "IT chargeback and showback": visiones generales de las ideas contables.

## Referencias

1. Cost accounting — Wikipedia — https://en.wikipedia.org/wiki/Cost_accounting
2. IT chargeback and showback — Wikipedia — https://en.wikipedia.org/wiki/IT_chargeback_and_showback
3. Cost allocation — Wikipedia — https://en.wikipedia.org/wiki/Cost_allocation
4. Activity-based costing — Wikipedia — https://en.wikipedia.org/wiki/Activity-based_costing
5. Total cost of ownership — Wikipedia — https://en.wikipedia.org/wiki/Total_cost_of_ownership
6. Return on investment — Wikipedia — https://en.wikipedia.org/wiki/Return_on_investment
7. Net present value — Wikipedia — https://en.wikipedia.org/wiki/Net_present_value
8. Capital expenditure — Wikipedia — https://en.wikipedia.org/wiki/Capital_expenditure
9. Operating expense — Wikipedia — https://en.wikipedia.org/wiki/Operating_expense
10. Technical debt — Wikipedia — https://en.wikipedia.org/wiki/Technical_debt
11. FinOps Foundation — Linux Foundation — https://www.finops.org
