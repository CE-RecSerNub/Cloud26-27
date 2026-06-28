# Guía Didáctica: Administración de Redes en la Nube
## Código: 5163 | Carga Horaria: 150 horas | Créditos: 8 ECTS

---

## 1. Identificación y Presentación del Módulo

*   **Módulo Profesional:** Administración de redes en la nube.
*   **Código:** 5163.
*   **Duración:** 150 horas.
*   **ECTS:** 8.
*   **Especialidad Docente:** Informática.
*   **Perfil:** Profesor de Enseñanza Secundaria / Catedrático de Informática.

### Justificación del Módulo
La red es la infraestructura que interconecta todos los servicios y garantiza que las aplicaciones sean accesibles de forma segura y eficiente. Este módulo capacita al alumnado en la planificación y el direccionamiento IP de redes virtuales en la nube, el diseño de topologías seguras con subredes públicas y privadas, y la implementación de mecanismos de conectividad híbrida (VPN y enlaces dedicados). Además, abarca la configuración de balanceadores de carga, DNS, redes de distribución de contenido (CDN) y firewalls perimetrales (WAF/IPS).

---

## 2. Resultados de Aprendizaje (RA) y Criterios de Evaluación (CE)

### RA1. Aplica procedimientos de despliegue de una infraestructura de red asociada a las aplicaciones de unos sistemas, configurando la privacidad, ciberseguridad y disponibilidad, para permitir la conectividad entre recursos de la nube y otras instalaciones propias (on-premise) o en otras nubes.
*   **a)** Se han configurado las redes virtuales con los rangos de direcciones IP en las zonas de disponibilidad y/o regiones, estableciendo el direccionamiento privado (CIDR), direccionamiento público, puertas de enlace, cortafuegos (NACL) y/o grupos de seguridad, y la delegación de subredes.
*   **b)** Se han creado reglas de cortafuegos y/o grupos de seguridad para los recursos y destinos, según las conexiones permitidas (puertos, protocolos e IPs).
*   **c)** Se ha configurado la resolución de nombres de zonas DNS privadas o públicas enlazadas con las redes virtuales definidas, asignando registros para rutas internas/externas.
*   **d)** Se han creado métodos de acceso privado a los recursos internos de la red tales como proxies, túneles VPN, enlaces privados (Private Endpoints / PrivateLink) o emparejamiento (peering) entre redes virtuales, configurando autenticación y cifrado.
*   **e)** Se han creado recursos de inspección de tráfico (VPC Flow Logs, Packet Mirroring), ubicándolos en la topología de red para auditar y registrar el tráfico.
*   **f)** Se ha establecido el enrutado y conexión entre sistemas locales y servicios WAN de redes.

### RA2. Configura recursos de red, asignando parámetros de balanceo y escalado horizontal y vertical, desde orígenes externos o internos, en condiciones de ciberseguridad, direccionando y enrutando el tráfico a los recursos desplegados en la nube.
*   **a)** Se han configurado los balanceadores de carga (L4/L7 - ALB, NLB) con las reglas y parámetros de enrutamiento y comprobaciones de salud (health checks) hacia los grupos de cómputo.
*   **b)** Se han creado recursos de resolución de nombres DNS (Route 53, Azure DNS), permitiendo varias zonas y subzonas con registros de alias e internos/externos.
*   **c)** Se han configurado las opciones de caché perimetral distribuido de la nube (CDN - Content Delivery Network), estableciendo puntos de presencia, host de origen, encabezados y protocolos (HTTPS).
*   **d)** Se han establecido opciones de traducción de direccionamiento público (NAT Gateway) para compartir IPs públicas entre recursos privados que requieran salida a Internet.
*   **e)** Se ha establecido el direccionamiento público y privado, reservando direcciones IP estáticas internas y externas según necesidades.
*   **f)** Se han habilitado servicios de control perimetral, cortafuegos de red, enrutamiento y puertas de enlace (Internet Gateway, Transit Gateway), configurando conectividad y auditoría.

### RA3. Administra redes privadas físicas y virtuales mediante herramientas de una entidad proveedora de nube y de empresas de dispositivos de conectividad, disponiendo de un entorno híbrido con conexiones privadas, directas y de alta capacidad entre los recursos locales y de nube.
*   **a)** Se han configurado redes virtuales internas mediante emparejamiento (peering) de redes o redes compartidas para conectividad directa inter-nube.
*   **b)** Se han establecido conexiones privadas a través de túneles VPN IPSec entre las redes de instalaciones locales y redes virtuales de la nube, o entre múltiples proveedores cloud.
*   **c)** Se han establecido conexiones directas y privadas dedicadas de alta velocidad (AWS Direct Connect, Azure ExpressRoute, GCP Dedicated Interconnect), configurando el enrutamiento BGP en los dispositivos locales y cloud.
*   **d)** Se han establecido conexiones directas y de emparejamiento público (Public Peering) garantizando calidad de servicio, latencia y coste.
*   **e)** Se han definido rutas dinámicas en los dispositivos de enrutamiento físicos o virtuales, permitiendo la detección automática de cambios en la topología.
*   **f)** Se han configurado las conexiones VPN site-to-site (sitio a sitio) o point-to-site (punto a sitio / clientes remotos), configurando seguridad, cifrado y configuración de clientes.

### RA4. Aplica procedimientos de configuración de la seguridad digital de los recursos, monitorizando sus conexiones, para registrar los accesos e identificar su potencial de riesgo en los sistemas.
*   **a)** Se han configurado las políticas de seguridad sobre los recursos cloud, creando reglas detalladas de entrada/salida para el control y supervisión del tráfico.
*   **b)** Se han configurado los servicios de cortafuegos de red (Network Firewall), especificando reglas, políticas e integración con firewalls de terceros.
*   **c)** Se han activado y configurado herramientas de protección de capa 7 (WAF - Web Application Firewall) y sistemas de prevención de intrusos (IPS) para proteger aplicaciones web de ataques conocidos (OWASP Top 10) y mitigar riesgos.
*   **d)** Se ha configurado la autorización, autenticación y auditoría de red mediante automatizaciones (IaC, plantillas de infraestructura o CLIs).
*   **e)** Se ha configurado la monitorización activa de los recursos de red mediante alertas automáticas sobre métricas de tráfico y análisis de logs de flujo.

---

## 3. Recursos Didácticos Recomendados

*   **Redes Virtuales y Enrutamiento:**
    *   AWS VPC (Virtual Private Cloud), Azure Virtual Networks, Google Cloud VPC.
    *   Subnetting y enrutamiento CIDR en la práctica.
*   **Balanceo de Carga y CDNs:**
    *   [AWS Elastic Load Balancing](https://aws.amazon.com/es/elasticloadbalancing/) (Application Load Balancer).
    *   AWS CloudFront o Azure CDN / Cloudflare.
*   **Conectividad Híbrida:**
    *   Configuración de VPN IPsec site-to-site y point-to-site.
    *   Laboratorios de enrutamiento dinámico (BGP) simulados en GNS3 o Cisco Packet Tracer con conexiones cloud.
*   **Seguridad y Auditoría:**
    *   Manejo de Security Groups (Stateful) vs NACLs (Stateless).
    *   AWS WAF (Web Application Firewall) y análisis de logs con Athena.

---

## 4. Rúbrica de Evaluación por Niveles de Rendimiento

| RA | Insuficiente (1-4) | Suficiente (5) | Notable (6-8) | Sobresaliente (9-10) |
| :--- | :--- | :--- | :--- | :--- |
| **RA1. Despliegue de Red Virtual** | Desconoce el direccionamiento CIDR y mezcla IPs de subredes solapadas. Deja recursos vulnerables. | Crea una red virtual (VPC) con subredes públicas e Internet Gateway de manera guiada. | Diseña subredes públicas y privadas, gestiona tablas de enrutamiento, grupos de seguridad y activa el flujo de logs de red. | Implementa redes virtuales complejas con direccionamiento óptimo, accesos privados mediante endpoints (PrivateLink) y peering inter-VPC. |
| **RA2. Balanceo y Enrutamiento** | No sabe cómo redirigir el tráfico. Expone servidores directamente sin balanceador. | Asocia una IP elástica o estática pública a una instancia y levanta un balanceador de carga simple con ayuda. | Configura balanceadores L7 de forma autónoma con comprobaciones de salud, alias de DNS y salida privada mediante NAT Gateway. | Implementa un sistema de alta disponibilidad global usando CDNs seguras con HTTPS, políticas DNS avanzadas de enrutamiento (geolocalización/fallo) y balanceadores. |
| **RA3. Redes Híbridas** | No logra conectar entornos on-premise con cloud de forma segura. | Configura un cliente VPN software individual (point-to-site) de forma guiada para acceder a un recurso privado. | Configura túneles VPN site-to-site entre una red virtual local simulada y la nube, aplicando cifrado IPsec estándar. | Diseña e implementa una red híbrida empresarial integrada (ej. con Transit Gateway), configurando BGP dinámico y alta disponibilidad de red. |
| **RA4. Seguridad y Monitorización** | Permite acceso total (0.0.0.0/0) a todos los puertos. No audita ni revisa logs de red. | Aplica reglas de firewall a puertos de bases de datos o HTTP limitadas a IPs indicadas en la práctica. | Configura reglas WAF frente a ataques web comunes, habilita alertas por alto volumen de tráfico y audita accesos mediante logs de flujo de red. | Implementa un centro de control perimetral coordinado con IDS/IPS y WAF activo que bloquea amenazas automáticamente e integra alertas en tiempo real. |
