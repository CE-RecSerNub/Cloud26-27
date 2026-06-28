# Guía Didáctica: Administración de Recursos de Computación en la Nube
## Código: 5161 | Carga Horaria: 180 horas | Créditos: 8 ECTS

---

## 1. Identificación y Presentación del Módulo

*   **Módulo Profesional:** Administración de recursos de computación en la nube.
*   **Código:** 5161.
*   **Duración:** 180 horas.
*   **ECTS:** 8.
*   **Especialidad Docente:** Sistemas y Aplicaciones Informáticas.
*   **Perfil:** Profesor de Enseñanza Secundaria / Catedrático / Profesor Técnico de FP (a extinguir).

### Justificación del Módulo
Este módulo proporciona las capacidades y destrezas para administrar las capacidades de procesamiento en la nube. Abarca desde la creación y dimensionamiento de máquinas virtuales (instancias) y grupos de cómputo autoescalados, hasta el despliegue moderno basado en contenedores y la computación serverless (funciones como servicio, FaaS). Además, se capacita al alumno para planificar la continuidad de negocio mediante la automatización de backups de las infraestructuras de computación.

---

## 2. Resultados de Aprendizaje (RA) y Criterios de Evaluación (CE)

### RA1. Utiliza técnicas de despliegue de instancias de computación y grupos de cómputo para usar los recursos, aplicando las características definidas previamente y proporcionando capacidades de autoescalado, para obtener un entorno de trabajo sobre el que configurar la capacidad de procesamiento según las necesidades.
*   **a)** Se han elegido una región y zona de disponibilidad, interpretando las necesidades de una arquitectura, tales como alta disponibilidad, localización de la plataforma o requisitos de red.
*   **b)** Se ha creado una plantilla de ejecución de cómputo (launch templates), incluyendo el tipo de instancia, sus características de CPU, memoria, reserva de recursos en la plataforma y almacenamiento.
*   **c)** Se ha seleccionado una opción de computación del listado del proveedor de nube, tomando el elemento cuyas características de CPU, memoria y modo de virtualización se correspondan con criterios funcionales, económicos y operativos.
*   **d)** Se han reservado los recursos en la plataforma según la opción de computación seleccionada (instancias bajo demanda, reservadas o spot).
*   **e)** Se han usado plantillas para homogeneizar el proceso de selección de la opción de computación.
*   **f)** Se han modificado recursos de computación en la configuración de la instancia de cómputo, analizando requisitos de tamaño, velocidad, memoria y características especiales de replicación (escalado vertical).
*   **g)** Se ha definido un comportamiento automatizado asociado al grupo de escalado asegurando que, ante cambios de las cargas de trabajo, los recursos se crean y destruyen de la forma solicitada (escalado horizontal).
*   **h)** Se han seleccionado los recursos de monitorización entre los disponibles en el proveedor de nube para supervisar el estado y rendimiento de la instancia.
*   **i)** Se ha administrado la configuración de seguridad en la instancia (firewall del host/grupos de seguridad), garantizando exclusivamente los accesos a puertos, protocolos y usuarios autorizados.
*   **j)** Se han creado etiquetas que identifiquen las instancias de computación, asignándolas de forma unívoca y especificando el proyecto asociado y su rol.

### RA2. Aplica técnicas de despliegue de contenedores, partiendo de imágenes almacenadas en un registro al efecto (hub/registry), para ejecutar aplicaciones basadas en estos recursos según las necesidades.
*   **a)** Se ha elegido una región y zona de disponibilidad, interpretando las necesidades de la arquitectura.
*   **b)** Se han administrado las imágenes para el despliegue de los componentes de las aplicaciones sobre contenedores, incluyendo localización y descarga, configuración y almacenaje en el registro de imágenes.
*   **c)** Se han configurado características del despliegue del contenedor, mediante variables de entorno o ficheros de configuración que se aplican en el momento de inicio.
*   **d)** Se han parametrizado los recursos a cada componente (límites de CPU/memoria, privilegios del usuario de ejecución, requisitos de almacenamiento persistente, DNS e integración).
*   **e)** Se han organizado nodos de cómputo, haciendo uso de los grupos de cómputo o autoescalado, orquestación de balanceo y enrutado de los contenedores en la red.
*   **f)** Se han añadido las opciones de monitorización del estado y rendimiento de los contenedores, usando las herramientas del proveedor o soluciones particulares.

### RA3. Aplica técnicas de despliegue de la infraestructura de funciones como servicio (FaaS), ejecutando componentes de aplicaciones basados en funciones desplegadas sobre cómputo.
*   **a)** Se ha elegido la región y zona de disponibilidad, interpretando las necesidades de la arquitectura.
*   **b)** Se han creado funciones como servicio, mediante codificación, utilizando funciones existentes en la plataforma o desplegando aplicaciones ya preparadas por el proveedor.
*   **c)** Se han asociado permisos que posibiliten ejecutar la función como servicio, seleccionando o creando roles IAM adecuados.
*   **d)** Se han configurado requisitos de almacenamiento persistente para la ejecución de la función, asignando parámetros según necesidades.
*   **e)** Se han añadido recursos de monitorización y gestión de eventos a los ficheros de creación automatizada de infraestructura, incluyendo etiquetas que identifiquen unívocamente los elementos.
*   **f)** Se ha configurado el despliegue de la función como servicio, garantizando la procedencia de los orígenes definidos.
*   **g)** Se han añadido etiquetas que identifiquen unívocamente las funciones como servicio dentro de la plataforma.

### RA4. Aplica procedimientos de preparación y de automatización del backup de infraestructuras de cómputo en plataforma de la entidad proveedora de nube, asegurando los datos y el estado de los recursos desplegados según las necesidades del proyecto.
*   **a)** Se ha elegido la región y zona de disponibilidad, interpretando las necesidades de la arquitectura.
*   **b)** Se han creado los planes de copias de seguridad, teniendo en cuenta retenciones, frecuencias de ejecución y dispersión geográfica.
*   **c)** Se ha configurado la disponibilidad de los datos, velocidad de recuperación (RTO/RPO), retención y directrices de seguridad (cifrado) y duplicados a otros entornos.
*   **d)** Se han asociado los planes de copia de seguridad a los recursos definidos en la plataforma usando las etiquetas asociadas o agrupando por tipo de servicio.

---

## 3. Recursos Didácticos Recomendados

*   **Entornos Prácticos de Servidores Virtuales:**
    *   AWS EC2 & Auto Scaling Groups.
    *   Azure Virtual Machines & Scale Sets.
    *   GCP Compute Engine & Managed Instance Groups.
*   **Contenedores e Imágenes:**
    *   [Docker Documentation](https://docs.docker.com/) (Creación de Dockerfiles y registries locales/nube como AWS ECR, Azure ACR).
    *   Servicios administrados: AWS ECS, Azure Container Instances (ACI), Google Cloud Run.
    *   Introducción a la orquestación: Kubernetes Academy o laboratorios de AWS EKS, Azure AKS o GKE.
*   **Computación Serverless (FaaS):**
    *   AWS Lambda, Azure Functions o Google Cloud Functions.
*   **Respaldos de Seguridad:**
    *   AWS Backup, Azure Recovery Services Vault o Google Cloud Backup and DR.

---

## 4. Rúbrica de Evaluación por Niveles de Rendimiento

| RA | Insuficiente (1-4) | Suficiente (5) | Notable (6-8) | Sobresaliente (9-10) |
| :--- | :--- | :--- | :--- | :--- |
| **RA1. Instancias y Autoescalado** | Incapaz de desplegar una máquina virtual básica. Confunde escalado vertical con horizontal. | Despliega una instancia virtual simple de forma guiada en una región y zona concreta. | Configura plantillas de lanzamiento (launch templates), grupos de seguridad y un autoescalado basado en CPU de forma autónoma. | Diseña e implementa una arquitectura elástica multinivel autoescalable tras balanceadores de carga, aplicando políticas dinámicas avanzadas y optimización de costes (Spot instances). |
| **RA2. Despliegue de Contenedores** | No entiende el concepto de contenedor. Incapaz de descargar u operar imágenes Docker. | Ejecuta un contenedor simple en un servicio PaaS (ej. Cloud Run o ACI) a partir de una imagen pública. | Construye imágenes personalizadas, las sube a un registro de nube privado y configura recursos de CPU/Memoria y variables de entorno del contenedor. | Orquesta múltiples contenedores interconectados con almacenamiento persistente y configura grupos de autoescalado o nodos para la alta disponibilidad. |
| **RA3. Funciones (Serverless/FaaS)** | Confunde la computación sin servidor con la ausencia de código. Incapaz de desplegar una función. | Despliega una función de prueba con código de plantilla de la consola del proveedor en una región. | Configura disparadores (triggers) por eventos (ej. subida de archivo a storage), asocia roles IAM específicos y limita el tiempo de ejecución. | Desarrolla microservicios serverless completos, gestiona variables secretas de manera segura e implementa monitorización y trazabilidad analítica de ejecuciones. |
| **RA4. Backups de Cómputo** | No planifica copias de seguridad de las instancias o las realiza únicamente de forma manual. | Realiza snapshots manuales de discos de instancias de computación siguiendo indicaciones. | Configura planes de backup periódicos automatizados (frecuencia, retención) y políticas de cifrado básicas. | Implementa una política global de recuperación ante desastres (Disaster Recovery) automatizada con replicación inter-región y valida los RTO y RPO teóricos. |
