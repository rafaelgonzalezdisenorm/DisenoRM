document.addEventListener('DOMContentLoaded', () => {
    
    // ------------------------------------------------------------------
    // 1. LÓGICA DEL MENÚ HAMBURGUESA (Para Mobile)
    // ------------------------------------------------------------------
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }

    // ------------------------------------------------------------------
    // 2. LÓGICA DEL FILTRO MANUAL DEL PORTAFOLIO (portafolio.html)
    // ------------------------------------------------------------------
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (document.querySelector('.portfolio-gallery')) {
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                galleryItems.forEach(item => {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.style.display = 'block'; 
                        item.style.transition = 'opacity 0.5s ease-in-out';
                        item.style.opacity = '1';
                    } else {
                        item.style.opacity = '0';
                        setTimeout(() => { item.style.display = 'none'; }, 500);
                    }
                });
            });
        });
        const initialFilterButton = document.querySelector('.filter-btn.active');
        if (initialFilterButton) { initialFilterButton.click(); }
    }


    // ------------------------------------------------------------------
    // 3. DATOS DE LOS PROYECTOS (BASE DE DATOS JS COMPLETA)
    // ------------------------------------------------------------------
    const projectData = {
        'cocina_lujo': {
            title: 'Cocina Integral Minimalista',
            category: 'Remodelación y Muebles',
            description: 'Este proyecto consistió en la remodelación completa de una cocina de 12 m², transformándola en un espacio minimalista y altamente funcional. El desafío fue integrar electrodomésticos de última generación manteniendo líneas limpias y utilizando iluminación LED para resaltar los acabados.',
            details: [
                'Mobiliario: Gabinetes en MDF o Melamina con acabado blanco lacado de alto brillo.',
                'Encimera e Isla: Cuarzo blanco con vetas grises (tipo Carrara o Calacatta).',
                'Detalle Decorativo: Listones de madera clara en la cara frontal de la isla.',
                'Iluminación: Lámparas colgantes modernas sobre la isla y luz LED funcional en gabinetes.',
                'Piso: Piso laminado o vinílico en tono madera clara.'
            ],
            images: [
                './assets/img/cocinaabierta.jpg', 
                './assets/img/cocinaabierta2.png', 
                './assets/img/cocinaabierta3.png'
            ]
        },
        'pintura_catalizada': {
            title: 'Acabado de Pintura Especial',
            category: 'Pintura',
            description: 'Aplicación de pintura catalizada mate de alto tráfico en un armario o mueble de almacenamiento. Este acabado proporciona una superficie de lujo, extremadamente resistente al rayado, la humedad y el uso diario, ideal para muebles que requieren durabilidad y una estética sofisticada.',
            details: [
                'Tipo de Pintura: Poliuretano Catalizado (Bicomponente) Mate.',
        'Superficie Aplicada: Armario de 4 puertas o módulo de cocina.',
        'Preparación: Lijado fino, sellado y aplicación de fondo catalizado para una superficie de espejo.',
        'Beneficio: Alta resistencia física y química (fácil de limpiar).',
        'Duración: 5 días (incluyendo el curado).'
            ],
            images: [
                './assets/img/acabado_especial.jpg', 
                './assets/img/pintura.png',
                './assets/img/pintura2.png',
            ]
        },
        'closet_melamina': {
            title: 'Clóset Moderno y Funcional',
            category: 'Muebles',
            description: 'Diseño y fabricación de un clóset a la medida optimizando el espacio vertical y la distribución interna. Se utilizó melamina de alta resistencia con acabado texturizado para un look moderno y duradero.',
            details: [
                'Materiales: Melamina de 18mm con acabado texturizado.',
                'Herrajes: Bisagras de cierre suave y rieles telescópicos.',
                'Diseño: Espacios para ropa larga, cajones profundos y maletero.',
                'Tiempo de Ejecución: 3 semanas.'
            ],
            images: [
                './assets/img/armario.jpg', 
                './assets/img/armario2.png',
                './assets/img/armario3.png'
            ]
        },
        'bano_lujo': {
            title: 'Lavamanos con Encimera de Mármol y Mueble Clásico',
            category: 'Remodelación',
            description: 'Renovación integral de un baño principal, incluyendo cambio de tuberías, instalación de nuevos sanitarios y un lavamanos con detalles ornamentales dorados en una encimera de mármol rojizo veteado. El conjunto se complementa con un mueble de madera oscura de estilo clásico, creando un ambiente elegante y funcional.',
            details: [
                'Materiales de la Encimera: Mármol de Carrara Rojo/Rosa con vetas distintivas.',
        'Mueble Base: Madera de caoba, con acabado oscuro y tiradores metálicos.',
        'Lavamanos: Cerámica blanca empotrada con diseño de grecas o motivos clásicos en dorado.',
        'Grifería: Grifo de doble manija con acabado cromado o níquel pulido, estilo victoriano.',
        'Espejo: Espejo de pared amplio, sin marco visible, que refleja el ambiente del baño.',
        'Accesorios: Jabonera y dispensador a juego con la grifería.'
            ],
            images: [
                './assets/img/bano.jpg', 
            ]
        },
        'mueble_tv': {
            title: 'Centro de Entretenimiento Modular Moderno',
            category: 'Muebles',
            description: 'Sistema modular de entretenimiento que combina almacenamiento vertical y horizontal con un diseño de pared flotante. Presenta una pared trasera con acanalado vertical para añadir textura y ocultar el cableado, destacando el módulo central con iluminación LED cálida.',
            details: [
                'Estructura Inferior: Módulo de base horizontal con amplios cajones de almacenamiento en acabado mate (gris oscuro o topo).',
        'Materiales Principales: Panelería acanalada (o listonada) en tono neutro, madera veteada (para el módulo flotante central) y vidrio/metal (para los gabinetes laterales).',
        'Almacenamiento Lateral: Dos vitrinas o bibliotecas verticales con iluminación interna, ideales para exhibir objetos decorativos o cristalería.',
        'Iluminación: Tira de luz LED cálida integrada sobre y bajo el módulo flotante central de madera.',
        'Instalación: Diseño completamente empotrado/flotante.',
        'Detalle: Zócalo de ventilación discreto en la base.'
            ],
            images: [
                './assets/img/muebledetv.jpg', 
                './assets/img/muebledetv2.png',
                './assets/img/muebledetv3.png',
            ]
        },
        'fachada_acabado': {
            title: 'Acabado de Fachada Residencial',
            category: 'Exteriores y Fachadas',
            description: 'Diseño arquitectónico de una fachada con revestimiento principal de listones verticales de madera en tonos rojizos, que aportan calidez y textura. La composición se interrumpe estratégicamente con franjas verticales de ladrillo visto, añadiendo un contraste de materiales y ritmo visual. Cuenta con un acceso pavimentado en adoquín y barandilla de vidrio.',
            details: [
                'Revestimiento Principal: Listones verticales de madera o WPC (Wood Plastic Composite) en tonos caoba/rojizos.',
        'Material de Contraste: Franjas verticales de ladrillo caravista en tonos cálidos/beige.',
        'Iluminación Exterior: Apliques de pared discretos montados sobre las secciones de ladrillo para iluminación nocturna.',
        'Pavimento Exterior: Adoquines de ladrillo con un patrón de semicírculo y juntas de cemento claro.',
        'Barandilla: Barandilla de seguridad con postes bajos en acabado oscuro y paneles de vidrio templado.',
        'Vegetación: Jardineras bajas o arbustos decorativos a lo largo de la base de la fachada.',
        'Nivelación: Rampa suave de acceso en concreto, con vegetación a los lados.'
            ],
            images: [
                './assets/img/fachada.jpg', 
                './assets/img/fachada2.png'
            ]
        }
    };


    // ------------------------------------------------------------------
    // 4. LÓGICA DE CARGA DINÁMICA DE PROYECTO (proyecto.html)
    // ------------------------------------------------------------------
    if (document.querySelector('.project-detail-container')) {
        
        const urlParams = new URLSearchParams(window.location.search);
        const projectId = urlParams.get('id');
        const project = projectData[projectId];
        
        if (project) { 
            
            // Cargar Título y Categoría
            document.getElementById('project-title').textContent = project.title;
            document.getElementById('project-category-text').textContent = project.category; 
            
            // Cargar Descripción
            document.getElementById('project-description-text').textContent = project.description;
            
            // Cargar Detalles Técnicos
            const detailsList = document.getElementById('project-details-list');
            detailsList.innerHTML = '';
            project.details.forEach(detail => {
                const li = document.createElement('li');
                // CAMBIO AQUÍ: Usar textContent o solo asignar el innerHTML sin modificar la cadena.
                // Usaremos innerHTML solo con la cadena de detalle original.
                li.innerHTML = detail; // Ya no se agregan asteriscos.
                detailsList.appendChild(li);
            });
            
            // Llamar a las funciones de interacción
            initSlider(project.images);
            initTabs(); 

        } else {
            // Manejar error si no se encuentra el ID
            document.getElementById('project-title').textContent = 'Error: Proyecto no encontrado';
            // Mostrar un error en la descripción si el proyecto no existe
            document.getElementById('project-description-text').textContent = 'Lo sentimos, el proyecto solicitado no está disponible. Asegúrate de que la URL sea correcta.';
            initTabs(); // Activamos tabs para que al menos se vea el error.
        }
    }


    // ------------------------------------------------------------------
    // 5. FUNCIÓN DE TABS (Activa las pestañas y muestra la inicial)
    // ------------------------------------------------------------------
    function initTabs() {
        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        if (tabButtons.length === 0) return;

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTab = button.getAttribute('data-tab');
                tabButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                tabContents.forEach(content => { content.classList.remove('active'); });
                document.getElementById(targetTab).classList.add('active');
            });
        });

        // Activación inicial: Resalta el botón 'Descripción' y muestra su contenido
        document.getElementById('descripcion').classList.add('active');
        const firstButton = document.querySelector('.tab-btn[data-tab="descripcion"]');
        if (firstButton) {
            firstButton.classList.add('active');
        }
    }

    // ------------------------------------------------------------------
    // 6. FUNCIÓN DEL SLIDER DE IMÁGENES
    // ------------------------------------------------------------------
    function initSlider(images) {
        if (!images || images.length === 0) return;

        const mainImage = document.getElementById('project-main-image');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const thumbnailsContainer = document.getElementById('thumbnails-container');
        let currentImageIndex = 0;
        
        // Verificación de contenedor (para evitar el error de 'appendChild')
        if (!thumbnailsContainer) {
             console.error("Error: Elemento #thumbnails-container no encontrado.");
             return;
        }

        function updateSlider() {
            mainImage.src = images[currentImageIndex];
            document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
                thumb.classList.toggle('active', index === currentImageIndex);
            });
        }

        // Crear miniaturas
        images.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Miniatura ${index + 1}`;
            img.classList.add('thumbnail');
            img.addEventListener('click', () => {
                currentImageIndex = index;
                updateSlider();
            });
            thumbnailsContainer.appendChild(img);
        });

        // Controles de navegación
        prevBtn.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
            updateSlider();
        });

        nextBtn.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
            updateSlider();
        });

        // Inicializar el slider
        updateSlider();
    }
});