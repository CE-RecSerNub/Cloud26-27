# Curso de Especialización en Recursos y Servicios en la Nube
### Conselleria d'Educació, Universitats i Ocupació — Comunitat Valenciana

Bienvenido al repositorio oficial del **Curso de Especialización de Formación Profesional de Grado Superior en Recursos y Servicios en la Nube**. 

Este espacio está diseñado para albergar las programaciones, guías didácticas, prácticas, y materiales de soporte docente para las enseñanzas de este curso de especialización en el territorio de la Comunitat Valenciana.

🚀 **Portal Web del Curso (Publicado en GitHub Pages):** [ce-recsernub.github.io/Cloud26-27](https://ce-recsernub.github.io/Cloud26-27/)

---

## 📋 Ficha Técnica del Curso

*   **Denominación:** Recursos y servicios en la nube.
*   **Nivel:** Formación Profesional de Grado Superior (Máster de Formación Profesional).
*   **Duración Total:** 720 horas en un curso de 30 semanas (700 horas asociadas a módulos profesionales + 20 horas de tutoría).
    *   *Nota Dual:* Para el curso 2026-2027, el **25% de las 700 horas de los módulos (175 horas)** se realiza en modalidad de **Formación en Empresa (FE)** (FCT/Dual).
    *   *Adaptación IES Poeta Paco Mollá:* Para mayor equidad pedagógica y por distribución de los Resultados de Aprendizaje de despliegue, el centro redistribuye 1 hora semanal del módulo 5160 al 5164, quedando ambos con **4 horas semanales (120 horas totales cada uno)**.
*   **Créditos ECTS:** 41.
*   **Familia Profesional:** Informática y Comunicaciones.
*   **Referencia Normativa:** [Real Decreto 145/2026, de 25 de febrero](https://www.boe.es/eli/es/rd/2026/02/25/145) (BOE nº 53, de 28 de febrero de 2026) y el [Decreto 95/2026, de 19 de junio, del Consell](https://dogv.gva.es/va/eli/es-vc/d/2026/06/19/95/dof/vci/html) (DOGV nº 10391, de 25 de junio de 2026), regulador del currículo en la Comunitat Valenciana.
*   **Requisitos de Acceso:** 
    *   Técnico Superior en Administración de Sistemas Informáticos en Red (**ASIR**).
    *   Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (**DAM**).
    *   Técnico Superior en Desarrollo de Aplicaciones Web (**DAW**).
    *   *Otros títulos habilitados por la Conselleria d'Educació.*

---

## 🗺️ Estructura del Plan de Estudios (Comunitat Valenciana)

El curso de especialización consta de **5 módulos profesionales** con la distribución horaria oficial de la Comunidad Valenciana:

| Código | Módulo Profesional | Duración | ECTS | Especialidad Docente |
| :---: | :--- | :---: | :---: | :--- |
| **5160** | 🔗 [Fundamentos y configuración inicial de servicios en la nube](./5160-fundamentos-servicios-nube/README.md) | 120 h (4h/sem)* | 8 | Sistemas y Aplicaciones Informáticas |
| **5161** | 🔗 [Administración de recursos de computación en la nube](./5161-administracion-nube/README.md) | 180 h (6h/sem) | 8 | Sistemas y Aplicaciones Informáticas |
| **5162** | 🔗 [Administración de bases de datos y almacenamiento en la nube](./5162-bd-almacenamiento-nube/README.md) | 150 h (5h/sem) | 12 | Informática |
| **5163** | 🔗 [Administración de redes en la nube](./5163-redes-nube/README.md) | 150 h (5h/sem) | 8 | Informática |
| **5164** | 🔗 [Despliegue de servicios administrados en la nube](./5164-despliegue-nube/README.md) | 120 h (4h/sem)* | 5 | Sistemas y Aplicaciones Informáticas |

*\* Distribución horaria propia adaptada por el IES Poeta Paco Mollá (4h/semana en ambos módulos).*

---

## 🎯 Competencia General

La competencia general de este curso de especialización consiste en:
> Desplegar y administrar infraestructura en plataformas en la nube, gestionando recursos y servicios tales como computación, red y comunicaciones entre equipos locales y sistemas en la nube, almacenamiento de información y bases de datos, automatizando procesos en su caso, en condiciones de ciberseguridad, cumpliendo la normativa aplicable en materia de protección de datos y propiedad intelectual e industrial, prevención de riesgos laborales y los estándares de calidad.

---

## 💻 Entorno Tecnológico y Herramientas Comunes

Las clases prácticas y desarrollos curriculares se apoyarán sobre:
*   **Plataformas Cloud Principales:** AWS (Amazon Web Services), Microsoft Azure, Google Cloud Platform (GCP).
*   **Entornos de Contenedores:** Docker, Podman, Kubernetes.
*   **Infraestructura como Código (IaC):** Terraform, Ansible, CloudFormation.
*   **Gestión de Acceso:** Identity and Access Management (IAM), SSO, Identity Providers.
*   **Bases de Datos:** SQL (PostgreSQL, MySQL/MariaDB en la nube), NoSQL (DynamoDB, Firestore, MongoDB Atlas) y almacenes analíticos (OLAP / BigQuery).

---

## 📂 Organización de Carpetas en el Repositorio

La organización del repositorio sigue la siguiente convención:
```
CloudRepo26-27/
├── .gitignore
├── README.md                              <-- Este archivo
├── 5160-fundamentos-servicios-nube/
│   └── README.md                          <-- Guía Didáctica 5160
├── 5161-administracion-nube/
│   └── README.md                          <-- Guía Didáctica 5161
├── 5162-bd-almacenamiento-nube/
│   └── README.md                          <-- Guía Didáctica 5162
├── 5163-redes-nube/
│   └── README.md                          <-- Guía Didáctica 5163
└── 5164-despliegue-nube/
    └── README.md                          <-- Guía Didáctica 5164
```
