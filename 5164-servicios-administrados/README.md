# Guía Didáctica: Despliegue de Servicios Administrados en la Nube
## Código: 5164 | Carga Horaria: 90 horas | Créditos: 5 ECTS

---

## 1. Identificación y Presentación del Módulo

*   **Módulo Profesional:** Despliegue de servicios administrados en la nube.
*   **Código:** 5164.
*   **Duración:** 90 horas.
*   **ECTS:** 5.
*   **Especialidad Docente:** Sistemas y Aplicaciones Informáticas.
*   **Perfil:** Profesor de Enseñanza Secundaria / Catedrático / Profesor Técnico de FP (a extinguir).

### Justificación del Módulo
La adopción de la nube alcanza su madurez cuando se deja de gestionar la infraestructura básica y se pasa a utilizar servicios administrados y la automatización total. Este módulo capacita al alumno para desplegar infraestructuras completas de forma automatizada mediante Infraestructura como Código (IaC - Terraform), utilizar colas de mensajería asíncrona para desacoplar servicios (Pub/Sub), ejecutar trabajos de procesamiento pesado en segundo plano (Batch/Lotes), e integrar soluciones de terceros preempaquetadas mediante el uso de los Marketplace de los proveedores de nube.

---

## 2. Resultados de Aprendizaje (RA) y Criterios de Evaluación (CE)

### RA1. Aplica procedimientos de despliegue de recursos en la nube de manera automática a través de plantillas de ficheros para estandarizar el aprovisionamiento mediante infraestructura como código (IaC).
*   **a)** Se han determinado los recursos para desplegar conjuntamente (tipo de servicios, arquitectura, configuración, proveedor) analizando el estado final.
*   **b)** Se ha seleccionado un motor de IaC (ej. Terraform) y conectores (providers), configurando credenciales, permisos y parámetros.
*   **c)** Se han creado plantillas y ficheros de IaC, asignando valores a variables de configuración y definiendo el estado final de los recursos.
*   **d)** Se han validado las plantillas y sintaxis de los ficheros, creando el plan de ejecución del despliegue (dry-run).
*   **e)** Se ha comparado el estado actual de la infraestructura con el estado deseado final, validando las tareas requeridas para alcanzarlo.
*   **f)** Se ha ejecutado el plan de despliegue, creando y configurando los recursos cloud de acuerdo con los archivos generados.
*   **g)** Se han revisado los resultados del aprovisionamiento, validando que el estado de los recursos desplegados coincide con el deseado.
*   **h)** Se han documentado las plantillas y ficheros de IaC, incluyendo procedimientos de actualización, y compartiéndolos en un repositorio Git.

### RA2. Aplica procedimientos de despliegue de servicios de mensajería asíncrona, optimizando la transmisión y el procesamiento de los flujos de datos que se intercambian entre múltiples fuentes y distribuirlos a múltiples receptores, monitorizando los resultados.
*   **a)** Se ha aprovisionado un servicio de mensajería asíncrona (colas, colas de suscripción, etc.) en la consola de administración.
*   **b)** Se han verificado los permisos necesarios y las identidades habilitadas para consumir o producir en el servicio de mensajería.
*   **c)** Se ha configurado el servicio de mensajería asíncrona, incluyendo temas (topics) y subscripciones para la entrega de mensajes, estableciendo la modalidad de entrega, retención de mensajes y políticas de reintento ante fallos (Dead Letter Queues).
*   **d)** Se ha monitorizado el flujo de mensajes almacenados, pendientes y entregados mediante el sistema de telemetría del proveedor.
*   **e)** Se ha verificado de forma práctica que los mensajes son entregados correctamente a los consumidores del tema o cola.

### RA3. Aplica procedimientos de despliegue de ejecución de trabajos por lotes (Batch), para la ejecución de manera repetitiva de trabajos sin supervisión directa de los usuarios, monitorizando los resultados.
*   **a)** Se ha aprovisionado un servicio de automatización de ejecución de trabajos por lotes en la consola de la plataforma.
*   **b)** Se ha configurado el trabajo por lotes que hay que automatizar, incluyendo nombre, frecuencia, contenedor/script de ejecución, reintentos ante fallos y destinos de salida.
*   **c)** Se ha activado la planificación de la ejecución de forma periódica (expresiones cron o disparadores por eventos de almacenamiento).
*   **d)** Se ha monitorizado la ejecución de un trabajo automatizado, validando los tiempos de ejecución y la ausencia de errores.

### RA4. Aplica procedimientos de despliegue de soluciones de terceros, seleccionándolas desde el marketplace para automatizar el despliegue de paquetes de software.
*   **a)** Se ha revisado el catálogo del marketplace del proveedor cloud, analizando costes estimados, contratos de licenciamiento (BYOL/Pay-as-you-go), especificaciones técnicas y compatibilidades.
*   **b)** Se ha seleccionado una solución de terceros (ej. CMS, stack analítico, etc.) configurando la capacidad de cómputo, almacenamiento, redes y accesos clave donde se realizará el despliegue, y los permisos necesarios.
*   **c)** Se ha ejecutado el despliegue automático de la solución desde el marketplace, monitorizando las fases de provisión.
*   **d)** Se han realizado pruebas de funcionamiento (revisión de logs, accesos HTTP, credenciales por defecto) para verificar la correcta instalación.
*   **e)** Se han documentado las tareas de operación, actualización de versiones, monitorización de logs y borrado de la solución.
*   **f)** Se han registrado y documentado las credenciales finales de configuración, URLs de acceso y configuraciones de seguridad.

---

## 3. Recursos Didácticos Recomendados

*   **Infraestructura como Código (IaC):**
    *   [HashiCorp Terraform Tutorial](https://developer.hashicorp.com/terraform/tutorials) (Uso del provider de AWS/Azure, variables, outputs y archivos de estado state).
    *   Archivos declarativos nativos: AWS CloudFormation / Azure Bicep.
*   **Sistemas de Mensajería y Desacoplamiento:**
    *   AWS SQS (Simple Queue Service) y SNS (Simple Notification Service).
    *   Azure Service Bus o Google Cloud Pub/Sub.
*   **Procesamiento por Lotes:**
    *   AWS Batch, Azure Batch o Kubernetes Batch Jobs.
*   **Marketplace Cloud:**
    *   Despliegue guiado de aplicaciones empaquetadas (ej. un servidor de logs de Grafana o un CMS de WordPress a través del Marketplace de AWS, Azure o GCP).

---

## 4. Rúbrica de Evaluación por Niveles de Rendimiento

| RA | Insuficiente (1-4) | Suficiente (5) | Notable (6-8) | Sobresaliente (9-10) |
| :--- | :--- | :--- | :--- | :--- |
| **RA1. Infraestructura como Código** | Modifica recursos en consola manual alternando con IaC, rompiendo el archivo de estado (*state drift*). | Escribe código Terraform básico para desplegar una instancia y lo ejecuta de manera guiada. | Define múltiples recursos interconectados (VPC, subredes, VM) usando variables, outputs y validando el plan de ejecución. | Desarrolla módulos Terraform reutilizables, gestiona el estado en backend remoto seguro, aplica políticas de cambios y documenta en Git. |
| **RA2. Mensajería Asíncrona** | Configura colas sin permisos, perdiendo mensajes o permitiendo accesos no autorizados. | Aprovisiona una cola sencilla y envía mensajes de prueba desde la consola del proveedor cloud. | Configura temas, suscripciones filtradas y colas con políticas de reintento y Dead Letter Queue (DLQ) para mensajes fallidos. | Diseña e integra arquitecturas orientadas a eventos desacopladas con colas, monitorizando tiempos de entrega y latencias. |
| **RA3. Trabajos por Lotes (Batch)** | Ejecuta scripts de larga duración en VMs estándar sin control de fallos ni programador. | Crea un trabajo por lotes simple de ejecución manual a partir de una plantilla provista. | Configura y planifica trabajos Batch cronometrados que se ejecutan sobre contenedores efímeros y monitoriza logs de salida. | Implementa sistemas complejos de procesamiento por lotes que escalan dinámicamente nodos en función del volumen de tareas y alertas de fallos. |
| **RA4. Marketplace y Terceros** | Despliega soluciones sin revisar costes ni configurar seguridad, dejando accesos inseguros. | Selecciona y despliega una aplicación del Marketplace (ej. Wordpress) siguiendo un tutorial básico. | Despliega una solución del Marketplace configurando subredes privadas, llaves SSH y documenta accesos y URLs de soporte. | Evalúa opciones del Marketplace bajo costes y licencias (BYOL), gestiona el ciclo de vida (updates) y asegura accesos integrando SSL e IAM. |
