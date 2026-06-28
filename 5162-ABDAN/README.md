# Guía Didáctica: Administración de Bases de Datos y Almacenamiento en la Nube
## Código: 5162 | Carga Horaria: 150 horas | Créditos: 12 ECTS

---

## 1. Identificación y Presentación del Módulo

*   **Módulo Profesional:** Administración de bases de datos y almacenamiento en la nube.
*   **Código:** 5162.
*   **Duración:** 150 horas.
*   **ECTS:** 12.
*   **Especialidad Docente:** Informática.
*   **Perfil:** Profesor de Enseñanza Secundaria / Catedrático de Informática.

### Justificación del Módulo
La persistencia de datos es el núcleo de cualquier sistema de información. En la nube, las opciones de almacenamiento y bases de datos son diversas y especializadas. Este módulo capacita al alumnado para seleccionar, desplegar y administrar las soluciones más eficientes bajo criterios de coste, rendimiento, cifrado y disponibilidad. Se tratan los tres modelos de almacenamiento (bloques, archivos y objetos), bases de datos transaccionales (SQL) y no transaccionales (NoSQL), sincronización híbrida de datos, e infraestructuras de análisis a gran escala (OLAP/ETL).

---

## 2. Resultados de Aprendizaje (RA) y Criterios de Evaluación (CE)

### RA1. Selecciona el tipo de almacenamiento para los datos del sistema según requisitos funcionales y criterios de durabilidad, seguridad, fiabilidad, rendimiento y coste, asegurando un almacenamiento eficiente en el entorno o proyecto.
*   **a)** Se ha comprobado que las operaciones de almacenamiento de objetos y de ficheros de la entidad proveedora cumplen unos determinados requisitos funcionales y no funcionales.
*   **b)** Se han consultado los tipos de almacenamiento proporcionados por la entidad proveedora, a partir de la documentación del mismo, para verificar cuáles ofrecen garantías según criterios de durabilidad, fiabilidad y rendimiento especificados.
*   **c)** Se han descartado tipos de almacenamiento proporcionados por la entidad proveedora no disponibles en la región o regiones donde el sistema vaya a desplegarse.
*   **d)** Se ha seleccionado el tipo de almacenamiento que resulte más económico, consultando las tablas de precios de la entidad proveedora de nube.
*   **e)** Se han ajustado los parámetros de almacenamiento que afecten a los costes de uso del servicio (tamaño, acceso, transferencia, operaciones de lectura/escritura, replicación, backup y recuperación).

### RA2. Administra sistemas de almacenamiento de objetos en nube, configurando y monitorizando los mismos, para garantizar el almacenamiento, la seguridad digital, y los patrones de uso que mejor se ajusten a unos requisitos.
*   **a)** Se han definido nombres de contenedores (depósitos o *buckets*) y de etiquetas para metadatos, teniendo en cuenta las limitaciones técnicas.
*   **b)** Se ha definido una clase de almacenamiento (frecuente, infrecuente, archivo/glacier) para cada contenedor en función de costes e impacto de recuperación.
*   **c)** Se ha escogido una región geográfica de almacenamiento de objetos para asegurar los requisitos de latencia y coste, respetando las restricciones de residencia de los datos (ej. RGPD).
*   **d)** Se han configurado los parámetros de sistema relativos a cifrado (servidor o cliente, claves KMS o administradas), mediante CLI, consola o IaC.
*   **e)** Se han configurado parámetros del sistema relativos a visibilidad, acceso (políticas de bucket, ACLs), seguridad, monitorización y auditoría (logs de acceso).
*   **f)** Se han configurado los parámetros de acceso público en caso necesario usando dominios personalizados y certificados SSL/TLS.
*   **g)** Se han configurado las políticas de ciclo de vida de los objetos (Lifecycle rules) para soportar cambios de clase, versiones o borrado programado.
*   **h)** Se ha configurado una política de replicación (cross-region o intra-region) y copia de seguridad de los objetos.

### RA3. Administra sistemas de almacenamiento de ficheros en nube, tanto en dispositivos de bloque como en sistemas de almacenamiento en red, utilizando tanto herramientas gráficas como de línea de comandos, API (Application Programming Interface), y/o IaC, garantizando el almacenamiento, la ciberseguridad, y los patrones de uso.
*   **a)** Se ha escogido una clase de almacenamiento teniendo en cuenta requisitos funcionales, patrones de acceso y costes.
*   **b)** Se ha escogido una región geográfica e implantado replicación entre zonas para latencia y alta disponibilidad.
*   **c)** Se han configurado los parámetros del sistema relativos a cifrado del almacenamiento en reposo.
*   **d)** Se han configurado parámetros relativos a visibilidad, acceso, monitorización y auditoría de los volúmenes de disco y archivos de red.
*   **e)** Se ha montado un dispositivo de almacenamiento (bloque/EBS) o sistema de ficheros de red (NFS/SMB/EFS) en los clientes, estableciendo permisos de lectura y escritura.
*   **f)** Se han aplicado cambios durante el ciclo de vida del dispositivo (redimensionado en caliente, cambios de tipo/velocidad de disco, desmontaje y borrado).
*   **g)** Se han configurado los mecanismos de backup (instantáneas/snapshots) de los dispositivos de almacenamiento.

### RA4. Administra los sistemas de bases de datos (SQL y NoSQL administrados), utilizando tanto herramientas gráficas como de línea de comandos, API, y/o IaC, garantizando el almacenamiento, la seguridad digital, y los patrones de uso que mejor se ajusten a los requisitos.
*   **a)** Se ha escogido la región geográfica y la topología de replicación (multi-zona, réplicas de lectura) para asegurar latencia, costes y alta disponibilidad.
*   **b)** Se han configurado parámetros de cifrado en tránsito (SSL/TLS) y en reposo (KMS), mediante consola o IaC.
*   **c)** Se han configurado parámetros del sistema de bases de datos relativos a visibilidad de red (subredes privadas), acceso, seguridad, monitorización y auditoría (logs de consultas lentas).
*   **d)** Se han aplicado cambios propios de ciclo de vida (modificación de tamaño, tipo de computación de BBDD, motor de base de datos o actualizaciones de parches).
*   **e)** Se han configurado políticas de backup automatizadas y retención de snapshots de la BBDD.
*   **f)** Se ha monitorizado activamente el rendimiento de las consultas, inserciones y actualizaciones.
*   **g)** Se han efectuado optimizaciones no complejas mediante índices, rediseño de esquemas o distribución de datos para mejorar costes y rendimiento.

### RA5. Gestiona los datos tanto desde el exterior, como entre sistemas de almacenamiento y bases de datos soportados por la entidad proveedora de nube, utilizando tanto herramientas gráficas, como de línea de comandos, API y/o IaC, para facilitar el flujo de información en el sistema.
*   **a)** Se ha seleccionado una opción de transferencia (online/offline) y sincronización de datos según requisitos.
*   **b)** Se han analizado los costes asociados a la transferencia de datos (egreso de datos, coste de peticiones de APIs).
*   **c)** Se han configurado conexiones y tareas de transferencia (DataSync, Storage Transfer Service) de forma segura y eficiente.
*   **d)** Se han provisionado dispositivos para transferencia offline física de datos a gran escala (ej. AWS Snowball, Azure Data Box) prestando especial atención a la seguridad y cifrado.
*   **e)** Se han configurado parámetros de acceso y visibilidad de los flujos de datos.
*   **f)** Se ha configurado la sincronización automática de datos unidireccional y bidireccional entre sistemas de almacenamiento.
*   **g)** Se han completado importaciones/exportaciones de volcados de datos de forma manual o programada (dumps SQL, CSVs).
*   **h)** Se ha monitorizado el flujo de transferencia y sincronización de datos para detectar errores de integridad o conectividad.

### RA6. Administra la infraestructura de datos de nube híbrida, utilizando tanto herramientas gráficas, como de líneas de comandos, API, y/o IaC, para permitir la interoperabilidad de la nube con otros entornos, conforme a los criterios de patrones de acceso, seguridad digital, durabilidad, fiabilidad y rendimiento.
*   **a)** Se ha verificado una implementación de configuración híbrida de almacenamiento basada en documentación de referencia.
*   **b)** Se ha verificado la disponibilidad de conexiones avanzadas seguras y de baja latencia (VPN IPsec o enlaces dedicados).
*   **c)** Se han configurado pasarelas de almacenamiento híbrido (Storage Gateway / Hybrid Cloud Storage) que expongan volúmenes en local respaldados por almacenamiento cloud.
*   **d)** Se ha configurado la auditoría y monitorización de accesos híbridos de datos.
*   **e)** Se ha configurado la sincronización en segundo plano de datos locales a la nube de manera automática y desatendida.
*   **f)** Se han realizado transferencias e importaciones de datos en entornos híbridos de forma manual y supervisada.
*   **g)** Se han monitorizado los procesos híbridos de sincronización para garantizar la consistencia del almacenamiento local y cloud.

### RA7. Administra sistemas de transformación y análisis de datos (OLAP), utilizando tanto herramientas gráficas como de línea de comandos y/o API y garantizando el almacenamiento, la seguridad, y los patrones de uso.
*   **a)** Se ha seleccionado una región de despliegue analítico y réplicas necesarias respetando las restricciones de datos.
*   **b)** Se han configurado parámetros de cifrado en reposo y en tránsito en almacenes analíticos.
*   **c)** Se han configurado accesos detallados y seguridad a nivel de columna/fila en sistemas analíticos (Identity and Access Management aplicado a Data Lakes).
*   **d)** Se ha configurado el particionado de datos, ciclos de vida y compactación en formatos analíticos óptimos (Parquet, ORC) para balancear coste y rendimiento en consultas OLAP.
*   **e)** Se han supervisado trabajos de extracción, transformación y carga (ETL), depurando errores en logs.
*   **f)** Se han configurado políticas de copias de seguridad de los sistemas de almacenamiento de datos analíticos.
*   **g)** Se ha monitorizado el rendimiento de consultas a gran escala y el espacio consumido por los sistemas OLAP.

---

## 3. Recursos Didácticos Recomendados

*   **Almacenamiento de Objetos, Bloques e Híbrido:**
    *   AWS S3, Azure Blob, Google Cloud Storage.
    *   Montaje de discos: AWS EBS y sistemas de red como AWS EFS (NFS) o Azure Files (SMB).
    *   Híbrido: AWS Storage Gateway / Azure StorSimple.
*   **Bases de Datos Administradas:**
    *   [AWS RDS Tutorial](https://aws.amazon.com/es/rds/) (Creación de base de datos PostgreSQL Multi-AZ).
    *   Bases NoSQL: AWS DynamoDB, GCP Firestore / Bigtable.
*   **Ingeniería de Datos y Analítica (OLAP/ETL):**
    *   AWS Glue / AWS Redshift / AWS Athena.
    *   Google BigQuery (Laboratorios interactivos de análisis SQL sobre conjuntos de datos públicos).

---

## 4. Rúbrica de Evaluación por Niveles de Rendimiento

| RA | Insuficiente (1-4) | Suficiente (5) | Notable (6-8) | Sobresaliente (9-10) |
| :--- | :--- | :--- | :--- | :--- |
| **RA1. Selección de Almacenamiento** | Mezcla conceptos de bloques y archivos. Escoge de forma arbitraria sin justificar costes o velocidad. | Identifica los tipos de almacenamiento teóricos y describe sus costes según manual. | Selecciona con acierto el almacenamiento basándose en el rendimiento (IOPS) y durabilidad requerida. | Realiza estudios comparativos de coste detallados y propone soluciones optimizadas combinando almacenamiento en frío y en caliente. |
| **RA2. Almacenamiento de Objetos** | Deja el bucket público por error. Incapaz de configurar cifrados o políticas de acceso. | Crea un bucket, sube objetos manualmente desde la consola web y aplica cifrado básico sugerido. | Configura políticas de ciclo de vida (Lifecycle), versionado, políticas de bucket seguras y réplicas inter-regionales. | Desarrolla flujos completos automatizados mediante IaC con dominios personalizados HTTPS, registros de auditoría y cifrado con claves KMS administradas. |
| **RA3. Sistemas de Archivos y Bloques** | Incapaz de montar discos. Confunde sistemas de bloque con sistemas de red de archivos compartidos. | Despliega y asocia un volumen de disco de bloque o red a una instancia mediante instrucciones paso a paso. | Redimensiona volúmenes de disco en caliente sin pérdida de datos, configura backups automáticos y gestiona permisos NFS/SMB en red. | Implementa sistemas de archivos distribuidos elásticos con optimización automática de IOPS y rendimiento de ráfaga, y automatiza snapshots con cifrado. |
| **RA4. Administración de BBDD** | Expone BBDD directamente a Internet. Desconoce cómo optimizar rendimiento de consultas. | Despliega una base de datos relacional básica monozona (RDS/Cloud SQL) y realiza consultas simples de prueba. | Configura topologías de alta disponibilidad (Multi-AZ), réplicas de lectura para descarga de tráfico, backups y subredes privadas. | Optimiza el rendimiento mediante análisis de logs de consultas lentas, ajusta índices, rediseña esquemas complejos de tablas y gestiona escalado de cómputo en caliente. |
| **RA5. Gestión y Transferencia** | Pierde la integridad en la copia. Desconoce los costes de egreso (egress) al transferir datos. | Realiza volcados manuales e importaciones básicas de bases de datos usando comandos tipo Dump / Import. | Configura tareas de sincronización automatizadas (DataSync) y analiza de forma correcta el presupuesto de egreso de datos. | Planifica e implementa migraciones complejas de datos a gran escala offline/online con cifrado reforzado y verificación de hashes de integridad. |
| **RA6. Infraestructura Híbrida** | Incapaz de conectar el almacenamiento on-premise con servicios de nube. | Comprende el funcionamiento teórico de una pasarela de almacenamiento híbrido. | Despliega una pasarela de almacenamiento (Storage Gateway) compartiendo volúmenes locales respaldados por la nube de forma guiada. | Administra e integra sistemas de archivos híbridos en producción local, garantizando coherencia de caché y cifrado de extremo a extremo (end-to-end). |
| **RA7. Análisis de Datos (OLAP)** | Carga archivos raw sin estructurar en almacenes analíticos, produciendo altos costes de consulta. | Carga datos analíticos sencillos en una base de datos analítica (BigQuery/Redshift) y ejecuta consultas SQL. | Configura particionado de datos, formatos de columna compactados (ej. Parquet) y audita accesos finos a nivel de columna/fila. | Desarrolla tuberías de datos (pipelines) ETL automatizadas que limpian, transforman y particionan datos raw a formatos OLAP optimizados. |
