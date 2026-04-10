const content = {
  es: {
    schoolName: 'Colegio José Pardo',
    gradeLevel: '5to grado de primaria',
    teacherName: 'Profesor Rolando de la Torre Gamarra',
    heroTitle: 'Aprendemos con curiosidad, crecemos con valores y nos conectamos con el mundo.',
    heroDescription: 'Este espacio presenta los proyectos, actividades y experiencias de aprendizaje de nuestro salón en Matemáticas, Ciencia y Tecnología. También abre una puerta para conectar con estudiantes de otras instituciones del Perú y del mundo.',
    btnExplore: '⚡ Explorar áreas',
    btnContact: '🌍 Contacto internacional',
    welcomeLabel: 'Docente de 5to grado de primaria',
    teacherCardName: 'Profesor Rolando de la Torre Gamarra',
    languagesLabel: 'Idiomas',
    areasLabel: 'Áreas clave',
    welcomeTitle: 'Bienvenidos a nuestro salón',
    welcomeText: 'Aquí compartimos trabajos, experimentos, retos, logros y momentos importantes del aula. La meta es mostrar cómo aprendemos, cómo pensamos y cómo colaboramos.',
    values: ['🤝 Respeto', '🔍 Curiosidad', '💪 Esfuerzo', '👥 Equipo', '🌍 Identidad'],
    subjectsTitle: 'Áreas que impulsan nuestro aprendizaje',
    subjectsSubtitle: 'Mostramos el trabajo del aula en dos áreas fundamentales para el pensamiento, la creatividad y la exploración.',
    mathTitle: 'Matemáticas',
    mathDesc: 'Resolución de problemas, razonamiento lógico, geometría, cálculo mental y actividades prácticas para comprender el mundo con números.',
    scienceTitle: 'Ciencia y Tecnología',
    scienceDesc: 'Experimentos, observación, cuidado del ambiente, pequeños proyectos tecnológicos y curiosidad científica aplicada a la vida diaria.',
    projectsTitle: 'Lo que hacemos en clase',
    projectsSubtitle: 'Estas son algunas líneas de trabajo que pueden destacarse durante el año escolar.',
    projects: [
      ['🧮 MATEMÁTICA', 'Reto matemático de la semana', 'Problemas colaborativos, juegos de lógica y exposiciones de estrategias de solución divertidas.'],
      ['🔬 CIENCIA', 'Mini laboratorio escolar', 'Experimentos emocionantes para descubrir fenómenos naturales, materiales sorprendentes y energía.'],
      ['💻 TECNOLOGÍA', 'Tecnología para aprender', 'Uso creativo de recursos digitales, presentaciones geniales y trabajos visuales para comunicar ideas.']
    ],
    galleryTitle: 'Galería del salón',
    galleryNote: 'Conoce a nuestro profesor y a los estudiantes del 5to grado del Colegio José Pardo.',
    teacherCardTitle: 'Nuestro profesor',
    teacherCaption: 'Profesor Rolando de la Torre Gamarra – Docente comprometido con la excelencia educativa',
    studentsCardTitle: 'Nuestros estudiantes',
    studentsCaption: '5to grado de primaria – Un salón lleno de curiosidad, esfuerzo y alegría de aprender',
    groupSectionTitle: 'Somos el 5to grado',
    groupSectionText: 'Un aula comprometida con el aprendizaje de calidad. Nos encanta colaborar con otras escuelas del mundo para intercambiar experiencias y crecer juntos.',
    globalTitle: 'Conexión con el mundo',
    globalText: 'Queremos compartir experiencias con estudiantes de otras instituciones y países, intercambiar ideas, mostrar nuestra cultura y aprender de otras realidades educativas.',
    globalItems: [
      { icon: '📹', title: 'Videoconferencias', text: 'Encuentros en tiempo real via Google Meet entre alumnos de diferentes escuelas del mundo.' },
      { icon: '💬', title: 'Chat entre alumnos', text: 'Comunicación escrita directa para hacer amistades y compartir ideas.' },
      { icon: '📝', title: 'Intercambio cultural', text: 'Los alumnos cuentan sus historias y aprenden de otras realidades educativas.' }
    ],
    contactTitle: 'Contáctanos',
    contactText: 'Para proyectos de intercambio escolar, actividades colaborativas o comunicación institucional.',
    contactInvite: 'Invitamos a escuelas, docentes y estudiantes a contactarnos para iniciativas educativas, presentaciones del aula y actividades de intercambio internacional.',
    highlightTitle: 'Aula multilingüe con proyección global',
    highlightText: 'Español, quechua, inglés, portugués y francés en un mismo espacio digital para fortalecer identidad, comunicación y apertura internacional.',
    footerText: 'Educación con identidad, ciencia y proyección global',
    locationTitle: '📍 Dónde nos encontramos',
    locationCity: 'Chalhuanca',
    locationRegion: 'Aymaraes, Apurímac, Perú',
    locationSchool: 'Colegio José Pardo',
    locationGrade: '5to Grado de Primaria',
    locationMapBtn: '🗺️ Abrir en Google Maps',
    workshopsTitle: '🎨 Talleres Especiales',
    workshopsSubtitle: 'Actividades extracurriculares para potenciar habilidades y pasiones',
    workshopsMainTitle: 'Actividades extracurriculares',
    workshopSchedule: 'Jueves 4:00 - 6:00 PM | Dos bimestres | Nivel Principiante',
    workshops: [
      {
        id: 'programming',
        title: '💻 Diseño y Programación',
        icon: '💻',
        schedule: 'Jueves 4:00 - 6:00 PM',
        description: 'Espacio de innovación donde aprendemos a crear soluciones tecnológicas mediante programación y diseño de circuitos.',
        topics: ['Python con Thonny', 'Tinkercad para Arduino', 'Robot Seguidor de Línea', 'Robot Sumo'],
        objectives: [
          'Desarrollar pensamiento computacional y lógica de programación',
          'Crear soluciones tecnológicas para problemas reales',
          'Dominar conceptos básicos de electrónica y robótica',
          'Trabajar en equipo en proyectos tecnológicos'
        ],
        competencies: [
          'Pensamiento crítico y resolución de problemas',
          'Creatividad e innovación tecnológica',
          'Trabajo colaborativo',
          'Comunicación técnica'
        ]
      },
      {
        id: 'dance',
        title: '🎭 Danza Folclórica',
        icon: '🎭',
        schedule: 'Miércoles 4:00 - 6:00 PM',
        description: 'Conectamos con nuestra identidad cultural a través del movimiento, aprendiendo danzas tradicionales que representan la riqueza del Perú.',
        topics: ['Marinera', 'Huayno', 'Tikichaka', 'Técnica de movimiento'],
        objectives: [
          'Valorar y preservar la cultura peruana',
          'Desarrollar expresión corporal y artística',
          'Fortalecer coordinación motriz y ritmo',
          'Crear sentido de comunidad e identidad'
        ],
        competencies: [
          'Expresión artística y corporal',
          'Sensibilidad cultural e identidad',
          'Coordinación y equilibrio',
          'Autoconfianza y presencia en escena'
        ]
      },
      {
        id: 'math',
        title: '🧮 Matemáticas Avanzada',
        icon: '🧮',
        schedule: 'Lunes 4:00 - 6:00 PM',
        description: 'Exploramos matemática a través de juegos, desafíos y aplicaciones prácticas, descubriendo su utilidad en la vida cotidiana.',
        topics: ['Fracciones y decimales', 'Áreas y perímetros', 'Razonamiento lógico', 'Estadística básica'],
        objectives: [
          'Fortalecer el razonamiento lógico-matemático',
          'Resolver problemas complejos con estrategias variadas',
          'Aplicar matemática a situaciones reales',
          'Desarrollar confianza en habilidades matemáticas'
        ],
        competencies: [
          'Pensamiento lógico',
          'Resolución de problemas',
          'Cálculo y estimación',
          'Comunicación matemática'
        ]
      },
      {
        id: 'sports',
        title: '⚽ Deporte y Movimiento',
        icon: '⚽',
        schedule: 'Martes 4:00 - 6:00 PM',
        description: 'Disciplina física y desarrollo de habilidades deportivas en voleibol, fútbol y atletismo, formando atletas competitivos.',
        topics: ['Voleibol', 'Fútbol', 'Atletismo', 'Acondicionamiento físico'],
        objectives: [
          'Promover hábitos de vida saludable',
          'Desarrollar habilidades deportivas competitivas',
          'Fomentar trabajo en equipo y liderazgo',
          'Mejorar capacidad física y resistencia'
        ],
        competencies: [
          'Destreza motriz y coordinación',
          'Trabajo en equipo',
          'Liderazgo y espíritu deportivo',
          'Disciplina y perseverancia'
        ]
      }
    ],
    linksMenuBtn: '🔗 Enlaces',
    linkSteam: 'Club Robótica STEAM',
    linkSchool: 'Sitio Institucional',
    linkPeru: 'Conoce el Perú'
  },
  qu: {
    schoolName: 'José Pardo Yachay Wasi',
    gradeLevel: 'Pisqa kaq grado primaria',
    teacherName: 'Yachachiq Rolando de la Torre Gamarra',
    heroTitle: 'Yachanchik munaywan, wiñanchik allin kawsaywan, hinallataq kay pachapi runakunawan tinkunchik.',
    heroDescription: 'Kay p\'anqapi rikuchkanchik imayna yachanchik Matemática, Ciencia Tecnologíapi, hinallataq huk llaqtakunapi, huk suyukunapi yachaq warmakunawan tinkuyta munanchik.',
    btnExplore: '⚡ Yachay áreas qhaway',
    btnContact: '🌍 Tinkuy correo',
    welcomeLabel: 'Pisqa kaq grado yachachiq',
    teacherCardName: 'Yachachiq Rolando de la Torre Gamarra',
    languagesLabel: 'Simi',
    areasLabel: 'Hatun áreas',
    welcomeTitle: 'Yaykuykuqkuna, hamuychis',
    welcomeText: 'Kaypi rikhurichkan rurasqayku, musuq yachaykuna, llank\'aykuna, atipaykuna, hinallataq aula ukhupi allin p\'unchaykuna.',
    values: ['🤝 Yupaychay', '🔍 Musquy yachay', '💪 Kallpachakuy', '👥 Yanapanakuy', '🌍 Kikin kay'],
    subjectsTitle: 'Yachayniykuta kallpachaq áreas',
    subjectsSubtitle: 'Iskay área nisqapi aula llank\'ayninta rikuchkanchik: yuyay, musuq ruray, maskay ima.',
    mathTitle: 'Matemática',
    mathDesc: 'Sasachakuy solucionay, yuyayman yaykuy, geometría, utqay yupay, hinallataq kawsaypi yupaywan yachay.',
    scienceTitle: 'Ciencia y Tecnología',
    scienceDesc: 'Pruebakuna, qhaway, pachamamata waqaychay, uchuy proyectokuna, ciencia yuyaywan kawsaypi ruray.',
    projectsTitle: 'Imakunatan clasepi ruwanchik',
    projectsSubtitle: 'Kaykunaqa wata yachaypi rikuchikuy atisqa llank\'ay ñankuna kanku.',
    projects: [
      ['🧮 MATEMÁTICA', 'Semana matemática reto', 'Huñunakuypi sasachakuykuna, yuyay pukllaykuna, solución ñankunamanta rimay.'],
      ['🔬 CIENCIA', 'Uchuy laboratorio escolar', 'Sasachay mana kaptinpas experimentokuna naturaleza, materiales, kallpa yachanapaq.'],
      ['💻 TEKNOLOHÍA', 'Tecnología yachanapaq', 'Recursos digitales nisqakunata allinta llamk\'achispa yuyaykunata willay.']
    ],
    galleryTitle: 'Salón galería',
    galleryNote: 'Yachachiqniykita hinallataq 5to grado yachaqkunata qhawaykuychis.',
    teacherCardTitle: 'Yachachiqninchik',
    teacherCaption: 'Yachachiq Rolando de la Torre Gamarra',
    studentsCardTitle: 'Yachaqkuna',
    studentsCaption: '5to grado primaria – Munay, kallpawan, kusiwan yachaq aula',
    groupSectionTitle: '5to Grado kanchik',
    groupSectionText: 'Ñuqanchikqa allin yachaywan comprometidos kanchik. Munanchik huk yachay wasikunawan tinkuyta rimakuyta allin kawsayninata waqaychakuyta.',
    globalTitle: 'Kay pachawan tinkuy',
    globalText: 'Munanchik huk institucionkunapi, huk suyukunapi yachaqkunawan yuyay churanakuyta. Hina kaykunata rikuchikunchik:',
    globalItems: [
      { icon: '📹', title: 'Google Meet', text: 'Sumaq pacha tinkuykuna alumnoskunawan huk yachay wasikunamanta.' },
      { icon: '💬', title: 'Chat alumnoskuna', text: 'Simiwan rimaykuna amistadpaq, yuyay churanakuypaq.' },
      { icon: '📝', title: 'Yachay churanakuy', text: 'Yachaqkuna willakunkis rimakunata qhepaman.' }
    ],
    contactTitle: 'Tinkuy',
    contactText: 'Escuela masinkunawan proyektokunapaq, yanapanakuy llank\'aykunapaq, utaq institucional rimaypaq.',
    contactInvite: 'Yachay wasikunata, yachachiqkunata, yachaqkunata waqyaykuchkanchik correo nisqawan rimarinankupaq.',
    highlightTitle: 'Pichqa simiyuq aula, kay pachaman mast\'ariywan',
    highlightText: 'Español, quechua, inglés, portugués, francés huk digital espacio ukhupi: kikin kayta kallpachaypaq, rimayta allinchaypaq.',
    footerText: 'Kikin kaywan, cienciayuq, kay pachaman mast\'ariywan yachay',
    locationTitle: '📍 Maypin kanchik',
    locationCity: 'Chalhuanca',
    locationRegion: 'Aymaraes, Apurímac, Perú',
    locationSchool: 'José Pardo Yachay Wasi',
    locationGrade: 'Pisqa kaq grado primaria',
    locationMapBtn: '🗺️ Google Maps nisqapi qhaway',
    workshopsTitle: '🎨 Llamk\'ay Talleres',
    workshopsSubtitle: 'Kurnu yachay ñankuna, kallpachaymi talentos',
    workshopsMainTitle: 'Kurnu yachay ñankuna',
    workshopSchedule: 'Jueves 4:00 - 6:00 PM | Iskay bimestre | Qallari ñivel',
    workshops: [
      {
        id: 'programming',
        title: '💻 Teknolohía y Programación',
        icon: '💻',
        schedule: 'Jueves 4:00 - 6:00 PM',
        description: 'Musuq llamk\'aykunapa ñanpi, yachanchik computadorawan ruranakuyta hinallataq circuito electronicus nisqakuna.',
        topics: ['Python Thonny nisqawan', 'Tinkercad Arduino nisqawan', 'Seguidor Robot', 'Sumo Robot'],
        objectives: [
          'Computadora yuyay nisqata kallpachay',
          'Teknolohia nisqakunawan sasachakuykuna rurayta yachakunanchik',
          'Electrónica hinallataq robótica nisqakunata atikunanchik',
          'Yanapanakuywan proyektokunapia llamk\'ay'
        ],
        competencies: [
          'Yuyay hinallataq sasachakuy',
          'Musuq ruray teknolohiayuq',
          'Yanapanakuy',
          'Técnico rimay'
        ]
      },
      {
        id: 'dance',
        title: '🎭 Danza Folklorika Peruana',
        icon: '🎭',
        schedule: 'Miércoles 4:00 - 6:00 PM',
        description: 'Ñuqanchik kikin kaywan tinkunchik katipaywan, Perukunap danzakuna yachakunchik.',
        topics: ['Marinera', 'Huayno', 'Tikichaka', 'Katipay nisqakunap técnica'],
        objectives: [
          'Perukunap cultura valoraykunanchik',
          'Gorpota rimay hinallataq artista rimay yachakunanchik',
          'Katipay motriz hinallataq ritmo kallpachay',
          'Ayllu hinallataq kikin kayta kallpachay'
        ],
        competencies: [
          'Artista hinallataq gorpota rimay',
          'Kulturap sentimiento',
          'Katipay hinallataq balance',
          'Autoconfianza escenapi'
        ]
      },
      {
        id: 'math',
        title: '🧮 Matemática Avanzada',
        icon: '🧮',
        schedule: 'Lunes 4:00 - 6:00 PM',
        description: 'Matemáticata pukllaykuna, sasachakuy hinallataq kawsaypi ruray nisqakunawan maskanchik.',
        topics: ['Fracción hinallataq decimales', 'Área hinallataq perímetro', 'Yuyay lógico', 'Estadística qallari'],
        objectives: [
          'Yuyay lógico-matemático kallpachay',
          'Sasachakuy complexos ñankuna ruwakunchik',
          'Matemática kawsaypi ruray',
          'Matematica habilidad confidence'
        ],
        competencies: [
          'Yuyay lógico',
          'Sasachakuy',
          'Yupay hinallataq estimación',
          'Matemática rimay'
        ]
      },
      {
        id: 'sports',
        title: '⚽ Deporte hinallataq Katipay',
        icon: '⚽',
        schedule: 'Martes 4:00 - 6:00 PM',
        description: 'Atletikap yachaypa ñanpi, voleibol, fútbol hinallataq atletismo nisqakunapi deportista atisqa runananchik.',
        topics: ['Voleibol', 'Fútbol', 'Atletismo', 'Gorpo kallpachay'],
        objectives: [
          'Allin kawsay hábitos promover',
          'Deportiva habilidades kallpachay',
          'Yanapanakuy hinallataq liderazgo',
          'Gorpo kallpa hinallataq resistencia'
        ],
        competencies: [
          'Gorpota destreza',
          'Yanapanakuy',
          'Liderazgo',
          'Disciplina hinallataq perseverancia'
        ]
      }
    ],
    linksMenuBtn: '🔗 Tinkuypaq',
    linkSteam: 'STEAM Robótica Club',
    linkSchool: 'Yachay Wasip Web',
    linkPeru: 'Piruwta Riqsiy'
  },
  en: {
    schoolName: 'José Pardo School',
    gradeLevel: '5th Grade Primary Classroom',
    teacherName: 'Teacher Rolando de la Torre Gamarra',
    heroTitle: 'We learn with curiosity, grow with values, and connect with the world.',
    heroDescription: 'This website showcases our classroom work in Mathematics, Science, and Technology, while opening opportunities to connect with students from other schools around the world.',
    btnExplore: '⚡ Explore learning areas',
    btnContact: '🌍 International contact',
    welcomeLabel: '5th Grade Primary Teacher',
    teacherCardName: 'Teacher Rolando de la Torre Gamarra',
    languagesLabel: 'Languages',
    areasLabel: 'Key areas',
    welcomeTitle: 'Welcome to our classroom',
    welcomeText: 'Here we share projects, experiments, challenges, achievements, and meaningful classroom moments. Our goal is to show how we learn, think, and collaborate.',
    values: ['🤝 Respect', '🔍 Curiosity', '💪 Effort', '👥 Teamwork', '🌍 Cultural Identity'],
    subjectsTitle: 'Learning areas that inspire us',
    subjectsSubtitle: 'We showcase classroom work in two key areas for thinking, creativity, and exploration.',
    mathTitle: 'Mathematics',
    mathDesc: 'Problem solving, logical reasoning, geometry, mental math, and practical activities to understand the world through numbers.',
    scienceTitle: 'Science and Technology',
    scienceDesc: 'Experiments, observation, environmental care, small technology projects, and scientific curiosity applied to everyday life.',
    projectsTitle: 'What we do in class',
    projectsSubtitle: 'These are some work lines that will be highlighted during the school year.',
    projects: [
      ['🧮 MATH', 'Weekly math challenge', 'Collaborative problem solving, logic games, and student presentations of solution strategies.'],
      ['🔬 SCIENCE', 'Mini school laboratory', 'Simple experiments to discover natural phenomena, materials, and energy.'],
      ['💻 TECHNOLOGY', 'Technology for learning', 'Creative use of digital resources, presentations, and visual work to communicate ideas.']
    ],
    galleryTitle: 'Classroom gallery',
    galleryNote: 'Meet our teacher and the students of 5th grade at José Pardo School.',
    teacherCardTitle: 'Our teacher',
    teacherCaption: 'Teacher Rolando de la Torre Gamarra – A teacher committed to educational excellence',
    studentsCardTitle: 'Our students',
    studentsCaption: '5th Grade Primary – A classroom full of curiosity, effort, and joy of learning',
    groupSectionTitle: 'We are 5th Grade',
    groupSectionText: 'We are a classroom committed to quality learning. We love collaborating with schools around the world to exchange experiences and grow together.',
    globalTitle: 'Connecting with the world',
    globalText: 'We want to exchange experiences with students from other schools and countries, share ideas, show our culture and learn from other educational realities.',
    globalItems: [
      { icon: '📹', title: 'Video Conferences', text: 'Real-time Google Meet meetings between students from different schools worldwide.' },
      { icon: '💬', title: 'Student Chat', text: 'Direct written communication to make friends and share ideas across borders.' },
      { icon: '📝', title: 'Cultural Exchange', text: 'Students share their stories and learn from peers around the globe.' }
    ],
    contactTitle: 'Contact Us',
    contactText: 'For school exchange projects, collaborative activities, or institutional communication.',
    contactInvite: 'We invite schools, teachers, and students to contact us for educational initiatives, classroom presentations, and international exchange activities.',
    highlightTitle: 'A multilingual classroom with global projection',
    highlightText: 'Spanish, Quechua, English, Portuguese, and French in one digital space to strengthen identity, communication, and international openness.',
    footerText: 'Education with identity, science, and global vision',
    locationTitle: '📍 Where to find us',
    locationCity: 'Chalhuanca',
    locationRegion: 'Aymaraes, Apurímac, Perú',
    locationSchool: 'José Pardo School',
    locationGrade: '5th Grade Primary',
    locationMapBtn: '🗺️ Open in Google Maps',
    workshopsTitle: '🎨 Special Workshops',
    workshopsSubtitle: 'Extracurricular activities to enhance skills and passions',
    workshopsMainTitle: 'Extracurricular activities',
    workshopSchedule: 'Thursdays 4:00 - 6:00 PM | Two terms | Beginner Level',
    workshops: [
      {
        id: 'programming',
        title: '💻 Design and Programming',
        icon: '💻',
        schedule: 'Thursdays 4:00 - 6:00 PM',
        description: 'Space for innovation where we learn to create technological solutions through programming and circuit design.',
        topics: ['Python with Thonny', 'Tinkercad for Arduino', 'Line Follower Robot', 'Sumo Robot'],
        objectives: [
          'Develop computational thinking and programming logic',
          'Create technological solutions to real problems',
          'Master basic concepts of electronics and robotics',
          'Work as a team on technology projects'
        ],
        competencies: [
          'Critical thinking and problem solving',
          'Creativity and technological innovation',
          'Collaborative work',
          'Technical communication'
        ]
      },
      {
        id: 'dance',
        title: '🎭 Peruvian Folkloric Dance',
        icon: '🎭',
        schedule: 'Wednesdays 4:00 - 6:00 PM',
        description: 'We connect with our cultural identity through movement, learning traditional dances that represent the richness of Peru.',
        topics: ['Marinera', 'Huayno', 'Tikichaka', 'Movement technique'],
        objectives: [
          'Value and preserve Peruvian culture',
          'Develop body expression and artistic skills',
          'Strengthen motor coordination and rhythm',
          'Build community sense and identity'
        ],
        competencies: [
          'Artistic and body expression',
          'Cultural sensitivity and identity',
          'Coordination and balance',
          'Self-confidence and stage presence'
        ]
      },
      {
        id: 'math',
        title: '🧮 Advanced Mathematics',
        icon: '🧮',
        schedule: 'Mondays 4:00 - 6:00 PM',
        description: 'We explore mathematics through games, challenges, and practical applications, discovering its usefulness in everyday life.',
        topics: ['Fractions and decimals', 'Areas and perimeters', 'Logical reasoning', 'Basic statistics'],
        objectives: [
          'Strengthen logical-mathematical reasoning',
          'Solve complex problems with varied strategies',
          'Apply mathematics to real situations',
          'Develop confidence in mathematical abilities'
        ],
        competencies: [
          'Logical thinking',
          'Problem solving',
          'Calculation and estimation',
          'Mathematical communication'
        ]
      },
      {
        id: 'sports',
        title: '⚽ Sports and Movement',
        icon: '⚽',
        schedule: 'Tuesdays 4:00 - 6:00 PM',
        description: 'Physical discipline and development of sports skills in volleyball, soccer, and athletics, forming competitive athletes.',
        topics: ['Volleyball', 'Soccer', 'Athletics', 'Physical conditioning'],
        objectives: [
          'Promote healthy lifestyle habits',
          'Develop competitive sports skills',
          'Foster teamwork and leadership',
          'Improve physical capacity and endurance'
        ],
        competencies: [
          'Motor skills and coordination',
          'Teamwork',
          'Leadership and sportsmanship',
          'Discipline and perseverance'
        ]
      }
    ],
    linksMenuBtn: '🔗 Links',
    linkSteam: 'STEAM Robotics Club',
    linkSchool: 'School Website',
    linkPeru: 'Visit Peru'
  },
  pt: {
    schoolName: 'Colégio José Pardo',
    gradeLevel: '5º ano do ensino fundamental',
    teacherName: 'Professor Rolando de la Torre Gamarra',
    heroTitle: 'Aprendemos com curiosidade, crescemos com valores e nos conectamos com o mundo.',
    heroDescription: 'Este site apresenta os projetos, atividades e experiências de aprendizagem de nossa sala em Matemática, Ciências e Tecnologia. Também abre portas para conectar com alunos de outras instituições do Brasil e do mundo.',
    btnExplore: '⚡ Explorar áreas',
    btnContact: '🌍 Contato internacional',
    welcomeLabel: 'Professor do 5º ano do ensino fundamental',
    teacherCardName: 'Professor Rolando de la Torre Gamarra',
    languagesLabel: 'Idiomas',
    areasLabel: 'Áreas principais',
    welcomeTitle: 'Bem-vindos à nossa sala de aula',
    welcomeText: 'Aqui compartilhamos projetos, experimentos, desafios, conquistas e momentos significativos da sala. Nosso objetivo é mostrar como aprendemos, pensamos e colaboramos.',
    values: ['🤝 Respeito', '🔍 Curiosidade', '💪 Esforço', '👥 Trabalho em equipe', '🌍 Identidade cultural'],
    subjectsTitle: 'Áreas de aprendizagem que nos inspiram',
    subjectsSubtitle: 'Apresentamos o trabalho da sala em duas áreas fundamentais para o pensamento, criatividade e exploração.',
    mathTitle: 'Matemática',
    mathDesc: 'Resolução de problemas, raciocínio lógico, geometria, cálculo mental e atividades práticas para entender o mundo através dos números.',
    scienceTitle: 'Ciências e Tecnologia',
    scienceDesc: 'Experimentos, observação, cuidado com o ambiente, pequenos projetos tecnológicos e curiosidade científica aplicada à vida cotidiana.',
    projectsTitle: 'O que fazemos em classe',
    projectsSubtitle: 'Estas são algumas linhas de trabalho que serão destacadas durante o ano escolar.',
    projects: [
      ['🧮 MATEMÁTICA', 'Desafio matemático da semana', 'Resolução colaborativa de problemas, jogos de lógica e apresentações de estratégias de solução.'],
      ['🔬 CIÊNCIAS', 'Mini laboratório escolar', 'Experimentos para descobrir fenômenos naturais, materiais surpreendentes e energia.'],
      ['💻 TECNOLOGIA', 'Tecnologia para aprender', 'Uso criativo de recursos digitais, apresentações envolventes e trabalhos visuais para comunicar ideias.']
    ],
    galleryTitle: 'Galeria da sala',
    galleryNote: 'Conheça nosso professor e os alunos do 5º ano do Colégio José Pardo.',
    teacherCardTitle: 'Nosso professor',
    teacherCaption: 'Professor Rolando de la Torre Gamarra – Um educador comprometido com a excelência educacional',
    studentsCardTitle: 'Nossos alunos',
    studentsCaption: '5º ano do ensino fundamental – Uma sala cheia de curiosidade, esforço e alegria de aprender',
    groupSectionTitle: 'Somos o 5º ano',
    groupSectionText: 'Somos uma sala comprometida com o aprendizado de qualidade. Adoramos colaborar com escolas ao redor do mundo para trocar experiências e crescer juntos.',
    globalTitle: 'Conectando com o mundo',
    globalText: 'Queremos trocar experiências com alunos de outras instituições e países, compartilhar ideias, mostrar nossa cultura e aprender de outras realidades educacionais.',
    globalItems: [
      { icon: '📹', title: 'Videoconferências', text: 'Encontros em tempo real via Google Meet entre alunos de diferentes escolas no mundo.' },
      { icon: '💬', title: 'Chat entre alunos', text: 'Comunicação escrita direta para fazer amigos e compartilhar ideias além de fronteiras.' },
      { icon: '📝', title: 'Intercâmbio cultural', text: 'Alunos compartilham suas histórias e aprendem com colegas ao redor do globo.' }
    ],
    contactTitle: 'Contate-nos',
    contactText: 'Para projetos de intercâmbio escolar, atividades colaborativas ou comunicação institucional.',
    contactInvite: 'Convidamos escolas, professores e alunos para entrarem em contato conosco para iniciativas educacionais, apresentações da sala e atividades de intercâmbio internacional.',
    highlightTitle: 'Uma sala multilíngue com projeção global',
    highlightText: 'Espanhol, quíchua, inglês, português e francês em um único espaço digital para fortalecer identidade, comunicação e abertura internacional.',
    footerText: 'Educação com identidade, ciência e visão global',
    locationTitle: '📍 Onde nos encontrar',
    locationCity: 'Chalhuanca',
    locationRegion: 'Aymaraes, Apurímac, Peru',
    locationSchool: 'Colégio José Pardo',
    locationGrade: '5º ano do ensino fundamental',
    locationMapBtn: '🗺️ Abrir no Google Maps',
    workshopsTitle: '🎨 Oficinas Especiais',
    workshopsSubtitle: 'Atividades extracurriculares para potencializar habilidades e paixões',
    workshopsMainTitle: 'Atividades extracurriculares',
    workshopSchedule: 'Quintas-feiras 4:00 - 6:00 PM | Dois bimestres | Nível Principiante',
    workshops: [
      {
        id: 'programming',
        title: '💻 Design e Programação',
        icon: '💻',
        schedule: 'Quinta-feira 4:00 - 6:00 PM',
        description: 'Espaço de inovação onde aprendemos a criar soluções tecnológicas através de programação e design de circuitos.',
        topics: ['Python com Thonny', 'Tinkercad para Arduino', 'Robô Seguidor de Linha', 'Robô Sumo'],
        objectives: [
          'Desenvolver pensamento computacional e lógica de programação',
          'Criar soluções tecnológicas para problemas reais',
          'Dominar conceitos básicos de eletrônica e robótica',
          'Trabalhar em equipe em projetos tecnológicos'
        ],
        competencies: [
          'Pensamento crítico e resolução de problemas',
          'Criatividade e inovação tecnológica',
          'Trabalho colaborativo',
          'Comunicação técnica'
        ]
      },
      {
        id: 'dance',
        title: '🎭 Dança Folclórica Peruana',
        icon: '🎭',
        schedule: 'Quarta-feira 4:00 - 6:00 PM',
        description: 'Nos conectamos com nossa identidade cultural através do movimento, aprendendo danças tradicionais que representam a riqueza do Peru.',
        topics: ['Marinera', 'Huayno', 'Tikichaka', 'Técnica de movimento'],
        objectives: [
          'Valorizar e preservar a cultura peruana',
          'Desenvolver expressão corporal e artística',
          'Fortalecer coordenação motora e ritmo',
          'Criar senso de comunidade e identidade'
        ],
        competencies: [
          'Expressão artística e corporal',
          'Sensibilidade cultural e identidade',
          'Coordenação e equilíbrio',
          'Autoconfiança e presença em cena'
        ]
      },
      {
        id: 'math',
        title: '🧮 Matemática Avançada',
        icon: '🧮',
        schedule: 'Segundas 4:00 - 6:00 PM',
        description: 'Exploramos matemática através de jogos, desafios e aplicações práticas, descobrindo sua utilidade na vida cotidiana.',
        topics: ['Frações e decimais', 'Áreas e perímetros', 'Raciocínio lógico', 'Estatística básica'],
        objectives: [
          'Fortalecer o raciocínio lógico-matemático',
          'Resolver problemas complexos com estratégias variadas',
          'Aplicar matemática a situações reais',
          'Desenvolver confiança em habilidades matemáticas'
        ],
        competencies: [
          'Pensamento lógico',
          'Resolução de problemas',
          'Cálculo e estimação',
          'Comunicação matemática'
        ]
      },
      {
        id: 'sports',
        title: '⚽ Esporte e Movimento',
        icon: '⚽',
        schedule: 'Terças 4:00 - 6:00 PM',
        description: 'Disciplina física e desenvolvimento de habilidades esportivas em voleibol, futebol e atletismo, formando atletas competitivos.',
        topics: ['Voleibol', 'Futebol', 'Atletismo', 'Condicionamento físico'],
        objectives: [
          'Promover hábitos de vida saudável',
          'Desenvolver habilidades esportivas competitivas',
          'Fomentar trabalho em equipe e liderança',
          'Melhorar capacidade física e resistência'
        ],
        competencies: [
          'Destreza motora e coordenação',
          'Trabalho em equipe',
          'Liderança e espírito esportivo',
          'Disciplina e perseverança'
        ]
      }
    ],
    linksMenuBtn: '🔗 Links',
    linkSteam: 'Clube de Robótica STEAM',
    linkSchool: 'Site da Escola',
    linkPeru: 'Conheça o Peru'
  },
  fr: {
    schoolName: 'Collège José Pardo',
    gradeLevel: '5ème année du primaire',
    teacherName: 'Professeur Rolando de la Torre Gamarra',
    heroTitle: 'Nous apprenons avec curiosité, grandissons avec des valeurs et nous connectons avec le monde.',
    heroDescription: 'Ce site présente les projets, activités et expériences d\'apprentissage de notre classe en Mathématiques, Sciences et Technologie. Il ouvre aussi des portes pour se connecter avec des étudiants d\'autres institutions du Pérou et du monde.',
    btnExplore: '⚡ Explorer les domaines',
    btnContact: '🌍 Contact international',
    welcomeLabel: 'Professeur de 5ème année du primaire',
    teacherCardName: 'Professeur Rolando de la Torre Gamarra',
    languagesLabel: 'Langues',
    areasLabel: 'Domaines clés',
    welcomeTitle: 'Bienvenue dans notre classe',
    welcomeText: 'Ici, nous partageons des projets, des expériences, des défis, des réussites et des moments importants de la classe. Notre objectif est de montrer comment nous apprenons, pensons et collaborons.',
    values: ['🤝 Respect', '🔍 Curiosité', '💪 Effort', '👥 Travail d\'équipe', '🌍 Identité culturelle'],
    subjectsTitle: 'Domaines d\'apprentissage qui nous inspirent',
    subjectsSubtitle: 'Nous présentons le travail de la classe dans deux domaines fondamentaux pour la pensée, la créativité et l\'exploration.',
    mathTitle: 'Mathématiques',
    mathDesc: 'Résolution de problèmes, raisonnement logique, géométrie, calcul mental et activités pratiques pour comprendre le monde à travers les nombres.',
    scienceTitle: 'Sciences et Technologie',
    scienceDesc: 'Expériences, observation, protection de l\'environnement, petits projets technologiques et curiosité scientifique appliquée à la vie quotidienne.',
    projectsTitle: 'Ce que nous faisons en classe',
    projectsSubtitle: 'Voici quelques domaines de travail qui seront mis en évidence au cours de l\'année scolaire.',
    projects: [
      ['🧮 MATHÉMATIQUES', 'Défi mathématique de la semaine', 'Résolution collaborative de problèmes, jeux de logique et présentations de stratégies de résolution.'],
      ['🔬 SCIENCES', 'Mini-laboratoire scolaire', 'Expériences pour découvrir des phénomènes naturels, des matériaux surprenants et l\'énergie.'],
      ['💻 TECHNOLOGIE', 'La technologie pour apprendre', 'Utilisation créative de ressources numériques, présentations engageantes et travaux visuels pour communiquer les idées.']
    ],
    galleryTitle: 'Galerie de classe',
    galleryNote: 'Rencontrez notre professeur et les élèves de 5ème année du Collège José Pardo.',
    teacherCardTitle: 'Notre professeur',
    teacherCaption: 'Professeur Rolando de la Torre Gamarra – Un enseignant engagé pour l\'excellence éducative',
    studentsCardTitle: 'Nos élèves',
    studentsCaption: '5ème année du primaire – Une classe remplie de curiosité, d\'effort et de joie d\'apprendre',
    groupSectionTitle: 'Nous sommes la 5ème année',
    groupSectionText: 'Nous sommes une classe engagée vers un apprentissage de qualité. Nous aimons collaborer avec des écoles du monde entier pour échanger des expériences et grandir ensemble.',
    globalTitle: 'Connexion avec le monde',
    globalText: 'Nous voulons échanger des expériences avec des étudiants d\'autres institutions et pays, partager des idées, montrer notre culture et apprendre d\'autres réalités éducatives.',
    globalItems: [
      { icon: '📹', title: 'Vidéoconférences', text: 'Réunions en temps réel via Google Meet entre étudiants de différentes écoles du monde.' },
      { icon: '💬', title: 'Chat entre étudiants', text: 'Communication écrite directe pour se faire des amis et partager des idées au-delà des frontières.' },
      { icon: '📝', title: 'Échange culturel', text: 'Les étudiants partagent leurs histoires et apprennent de leurs camarades du monde entier.' }
    ],
    contactTitle: 'Nous contacter',
    contactText: 'Pour les projets d\'échange scolaire, les activités collaboratives ou la communication institutionnelle.',
    contactInvite: 'Nous invitons les écoles, les enseignants et les étudiants à nous contacter pour les initiatives éducatives, les présentations de classe et les activités d\'échange international.',
    highlightTitle: 'Une classe multilingue avec projection mondiale',
    highlightText: 'Espagnol, quechua, anglais, portugais et français dans un même espace numérique pour renforcer l\'identité, la communication et l\'ouverture internationale.',
    footerText: 'Éducation avec identité, science et vision mondiale',
    locationTitle: '📍 Où nous trouver',
    locationCity: 'Chalhuanca',
    locationRegion: 'Aymaraes, Apurímac, Pérou',
    locationSchool: 'Collège José Pardo',
    locationGrade: '5ème année du primaire',
    locationMapBtn: '🗺️ Ouvrir dans Google Maps',
    workshopsTitle: '🎨 Ateliers Spécialisés',
    workshopsSubtitle: 'Activités extrascolaires pour développer compétences et passions',
    workshopsMainTitle: 'Activités extrascolaires',
    workshopSchedule: 'Jeudis 4:00 - 6:00 PM | Deux bimestres | Niveau Débutant',
    workshops: [
      {
        id: 'programming',
        title: '💻 Conception et Programmation',
        icon: '💻',
        schedule: 'Jeudis 4:00 - 6:00 PM',
        description: 'Espace d\'innovation où nous apprenons à créer des solutions technologiques par la programmation et la conception de circuits.',
        topics: ['Python avec Thonny', 'Tinkercad pour Arduino', 'Robot Suiveur de Ligne', 'Robot Sumo'],
        objectives: [
          'Développer la pensée informatique et la logique de programmation',
          'Créer des solutions technologiques pour des problèmes réels',
          'Maîtriser les concepts fondamentaux de l\'électronique et de la robotique',
          'Travailler en équipe sur des projets technologiques'
        ],
        competencies: [
          'Pensée critique et résolution de problèmes',
          'Créativité et innovation technologique',
          'Travail collaboratif',
          'Communication technique'
        ]
      },
      {
        id: 'dance',
        title: '🎭 Danse Folklorique Péruvienne',
        icon: '🎭',
        schedule: 'Mercredis 4:00 - 6:00 PM',
        description: 'Nous nous connectons avec notre identité culturelle à travers le mouvement, en apprenant les danses traditionnelles qui représentent la richesse du Pérou.',
        topics: ['Marinera', 'Huayno', 'Tikichaka', 'Technique de mouvement'],
        objectives: [
          'Valoriser et préserver la culture péruvienne',
          'Développer l\'expression corporelle et artistique',
          'Renforcer la coordination motrice et le rythme',
          'Créer un sentiment d\'appartenance et d\'identité'
        ],
        competencies: [
          'Expression artistique et corporelle',
          'Sensibilité culturelle et identité',
          'Coordination et équilibre',
          'Assurance et présence sur scène'
        ]
      },
      {
        id: 'math',
        title: '🧮 Mathématiques Avancées',
        icon: '🧮',
        schedule: 'Lundis 4:00 - 6:00 PM',
        description: 'Nous explorons les mathématiques à travers des jeux, des défis et des applications pratiques, découvrant son utilité dans la vie quotidienne.',
        topics: ['Fractions et décimales', 'Aires et périmètres', 'Raisonnement logique', 'Statistiques de base'],
        objectives: [
          'Renforcer le raisonnement logico-mathématique',
          'Résoudre des problèmes complexes avec des stratégies variées',
          'Appliquer les mathématiques à des situations réelles',
          'Développer la confiance dans les aptitudes mathématiques'
        ],
        competencies: [
          'Pensée logique',
          'Résolution de problèmes',
          'Calcul et estimation',
          'Communication mathématique'
        ]
      },
      {
        id: 'sports',
        title: '⚽ Sport et Mouvement',
        icon: '⚽',
        schedule: 'Mardis 4:00 - 6:00 PM',
        description: 'Discipline physique et développement de compétences sportives en volley-ball, football et athlétisme, formant des athlètes compétitifs.',
        topics: ['Volley-ball', 'Football', 'Athlétisme', 'Conditionnement physique'],
        objectives: [
          'Promouvoir des habitudes de vie saine',
          'Développer des compétences sportives compétitives',
          'Favoriser le travail en équipe et le leadership',
          'Améliorer la capacité physique et l\'endurance'
        ],
        competencies: [
          'Dextérité motrice et coordination',
          'Travail d\'équipe',
          'Leadership et esprit sportif',
          'Discipline et persévérance'
        ]
      }
    ],
    linksMenuBtn: '🔗 Liens',
    linkSteam: 'Club de Robotique STEAM',
    linkSchool: 'Site de l\'École',
    linkPeru: 'Visitez le Pérou'
  }
};

/* ---- Helpers ---- */
function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function renderValues(items) {
  const container = document.getElementById('valuesGrid');
  if (!container) return;
  container.innerHTML = items.map(item =>
    `<div class="value-item">${item}</div>`
  ).join('');
}

function renderProjects(projects) {
  const container = document.getElementById('projectsGrid');
  if (!container) return;
  container.innerHTML = projects.map(([tag, title, text]) => `
    <article class="project-card">
      <span class="project-tag">${tag}</span>
      <h3>${title}</h3>
      <p>${text}</p>
    </article>
  `).join('');
}

function renderGlobal(items) {
  const container = document.getElementById('globalGrid');
  if (!container) return;
  container.innerHTML = items.map(item => `
    <div class="global-item">
      <span class="global-item-icon">${item.icon}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </div>
  `).join('');
}

function renderWorkshopsCards(workshops) {
  const container = document.getElementById('workshopsCardsContainer');
  if (!container) return;
  container.innerHTML = workshops.map(workshop => `
    <a href="workshops.html" class="workshop-card-link" onclick="sessionStorage.setItem('activeWorkshop', '${workshop.id}')">
      <article class="workshop-card">
        <div class="workshop-card-icon">${workshop.icon}</div>
        <h3>${workshop.title}</h3>
        <p>${workshop.schedule}</p>
      </article>
    </a>
  `).join('');
}

/* ---- Apply language ---- */
function applyLanguage(lang) {
  const t = content[lang];

  // Textos simples
  const simpleKeys = [
    'schoolName', 'gradeLevel', 'teacherName', 'heroTitle', 'heroDescription',
    'btnExplore', 'btnContact', 'welcomeLabel', 'teacherCardName', 'languagesLabel',
    'areasLabel', 'welcomeTitle', 'welcomeText', 'subjectsTitle', 'subjectsSubtitle',
    'mathTitle', 'mathDesc', 'scienceTitle', 'scienceDesc', 'projectsTitle', 'projectsSubtitle',
    'galleryTitle', 'galleryNote', 'teacherCardTitle', 'teacherCaption',
    'studentsCardTitle', 'studentsCaption', 'groupSectionTitle', 'groupSectionText',
    'globalTitle', 'globalText', 'contactTitle', 'contactText', 'contactInvite',
    'highlightTitle', 'highlightText', 'footerText',
    'locationTitle', 'locationCity', 'locationRegion', 'locationSchool', 'locationGrade', 'locationMapBtn',
    'workshopsTitle', 'workshopsSubtitle', 'workshopsMainTitle',
    'linksMenuBtn', 'linkSteam', 'linkSchool', 'linkPeru'
  ];

  simpleKeys.forEach(key => setText(key, t[key]));

  renderValues(t.values);
  renderProjects(t.projects);
  renderGlobal(t.globalItems);
  renderWorkshopsCards(t.workshops);

  document.documentElement.lang = lang === 'qu' ? 'qu' : lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

/* ---- Event listeners ---- */
document.querySelectorAll('.lang-btn').forEach(button => {
  button.addEventListener('click', () => applyLanguage(button.dataset.lang));
});

/* ---- Carousel ---- */
function initCarousel() {
  const container = document.getElementById('galleryCarousel');
  const nextBtn = document.getElementById('galleryNext');
  const prevBtn = document.getElementById('galleryPrev');
  if (!container || !nextBtn || !prevBtn) return;

  const images = [
    "blocklygames.webp", "foto1.webp", "foto2.webp", "foto3.webp", "foto4.webp", "foto5.webp", 
    "foto6.webp", "foto7.webp", "foto8.webp", "foto9.webp", "foto10.webp", "foto11.webp", 
    "foto12.webp", "foto13.webp", "foto14.webp", "foto15.webp", "foto16.webp", "foto17.webp", 
    "foto18.webp", "foto19.webp", "foto20.webp", "foto21.webp", "foto22.webp", "foto23.webp", 
    "foto24.webp", "foto25.webp", "foto26.webp", "foto27.webp", "foto28.webp", "foto29.webp", 
    "foto30.webp", "foto31.webp", "foto32.webp", "foto33.webp", "foto34.webp", "foto35.webp", 
    "foto36.webp", "foto37.webp", "foto38.webp", "foto39.webp", "foto40.webp", "foto41.webp", 
    "foto42.webp", "foto43.webp", "foto44.webp", "foto45.webp", "foto46.webp", "foto47.webp", 
    "foto48.webp", "foto49.webp", "foto50.webp", "foto51.webp", "foto52.webp", "foto53.webp", 
    "foto54.webp", "foto55.webp", "foto56.webp", "foto57.webp", "foto58.webp", "foto59.webp", 
    "foto60.webp", "foto61.webp", "foto62.webp", "foto63.webp", "foto64.webp", "foto65.webp", 
    "foto66.webp", "grupo.png", "processing.jpg", "profesor.png"
  ];

  container.innerHTML = images.map(img => `
    <div class="carousel-item">
      <img src="fotos/${img}" loading="lazy" alt="Foto del salón">
    </div>
  `).join('');

  nextBtn.addEventListener('click', () => {
    const itemWidth = container.querySelector('.carousel-item')?.clientWidth || 300;
    container.scrollBy({ left: itemWidth + 16, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    const itemWidth = container.querySelector('.carousel-item')?.clientWidth || 300;
    container.scrollBy({ left: -(itemWidth + 16), behavior: 'smooth' });
  });
}

/* ---- Init ---- */
applyLanguage('qu');
initCarousel();

/* ---- Scroll reveal ---- */
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  const style = document.createElement('style');
  style.textContent = `
    .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.6s ease, transform 0.6s ease; }
    .reveal.visible { opacity: 1; transform: translateY(0); }
  `;
  document.head.appendChild(style);

  document.querySelectorAll(
    '.project-card, .gallery-card, .global-item, .value-item, .subject-card, .stat-item, .contact-card'
  ).forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${i * 0.06}s`;
    observer.observe(el);
  });
});
