document.addEventListener('DOMContentLoaded', () => {
    const curriculumGrid = document.getElementById('curriculum-grid');
    const progressPercentageSpan = document.getElementById('progress-percentage');
    const progressFill = document.getElementById('progress-fill');

    // Define your courses based on the PDF.
    // I've assigned categories based on typical university structures.
    // You can adjust 'category' to match the colors in your image's legend.
    const courses = [
        // Year 1
        { id: 1, name: 'Introducción a las Ciencias Veterinarias', level: 1, semester: 1, year: 1, category: 'fundamentos' },
        { id: 2, name: 'Fundamentos de la Química', level: 1, semester: 1, year: 1, category: 'fundamentos' },
        { id: 3, name: 'Biología Celular y Molecular', level: 1, semester: 1, year: 1, category: 'fundamentos' },
        { id: 4, name: 'Matemática', level: 1, semester: 1, year: 1, category: 'humanidades' },
        { id: 5, name: 'Zoología', level: 1, semester: 1, year: 1, category: 'fundamentos' },
        { id: 6, name: 'Fundamentos de la Física', level: 1, semester: 1, year: 1, category: 'fundamentos' },
        { id: 7, name: 'Anatomía Animal I', level: 2, semester: 2, year: 1, category: 'fundamentos' },
        { id: 8, name: 'Praderas y Especies Forrajeras', level: 2, semester: 2, year: 1, category: 'fundamentos' },
        { id: 9, name: 'Fundamentos de Bioquímica', level: 2, semester: 2, year: 1, category: 'fundamentos' },
        { id: 10, name: 'Histoembriología Veterinaria', level: 2, semester: 2, year: 1, category: 'fundamentos' },
        { id: 11, name: 'Ecología', level: 2, semester: 2, year: 1, category: 'fundamentos' },
        { id: 12, name: 'Electivo 1', level: 2, semester: 2, year: 1, category: 'electivo' },

        // Year 2
        { id: 13, name: 'Anatomía Animal II', level: 3, semester: 3, year: 2, category: 'fundamentos' },
        { id: 14, name: 'Nutrición y Alimentación Animal', level: 3, semester: 3, year: 2, category: 'fundamentos' },
        { id: 15, name: 'Fisiología Veterinaria', level: 3, semester: 3, year: 2, category: 'fundamentos' },
        { id: 16, name: 'Práctica Inicial', level: 3, semester: 3, year: 2, category: 'practica' },
        { id: 17, name: 'Inmunología General', level: 3, semester: 3, year: 2, category: 'fundamentos' },
        { id: 18, name: 'Bioestadística', level: 3, semester: 3, year: 2, category: 'investigacion' },
        { id: 19, name: 'Electivo 2', level: 3, semester: 3, year: 2, category: 'electivo' },
        { id: 20, name: 'Etología y Bienestar Animal', level: 4, semester: 4, year: 2, category: 'fundamentos' },
        { id: 21, name: 'Histopatología', level: 4, semester: 4, year: 2, category: 'fundamentos' },
        { id: 22, name: 'Microbiología Veterinaria', level: 4, semester: 4, year: 2, category: 'fundamentos' },
        { id: 23, name: 'Conservación de Fauna Silvestre', level: 4, semester: 4, year: 2, category: 'fundamentos' },
        { id: 24, name: 'Métodos de Investigación en Salud', level: 4, semester: 4, year: 2, category: 'investigacion' },
        { id: 25, name: 'Electivo 3', level: 4, semester: 4, year: 2, category: 'electivo' },

        // Year 3
        { id: 26, name: 'Genética en Ciencias Veterinarias', level: 5, semester: 5, year: 3, category: 'fundamentos' },
        { id: 27, name: 'Epidemiología Veterinaria', level: 5, semester: 5, year: 3, category: 'politica-gestion' },
        { id: 28, name: 'Fisiopatología Veterinaria', level: 5, semester: 5, year: 3, category: 'fundamentos' },
        { id: 29, name: 'Gestión Ambiental y Desarrollo Sustent', level: 5, semester: 5, year: 3, category: 'politica-gestion' },
        { id: 30, name: 'Gestión Contable y Financiera', level: 5, semester: 5, year: 3, category: 'politica-gestion' },
        { id: 31, name: 'Electivo 4', level: 5, semester: 5, year: 3, category: 'electivo' },
        { id: 32, name: 'Semiología veterinaria', level: 6, semester: 6, year: 3, category: 'curriculo-didactica' },
        { id: 33, name: 'Reproducción animal', level: 6, semester: 6, year: 3, category: 'fundamentos' },
        { id: 34, name: 'Anatomía Patológica', level: 6, semester: 6, year: 3, category: 'fundamentos' },
        { id: 35, name: 'Microbiología de los Alimentos', level: 6, semester: 6, year: 3, category: 'fundamentos' },
        { id: 36, name: 'Práctica Intermedia', level: 6, semester: 6, year: 3, category: 'practica' },
        { id: 37, name: 'Electivo 5', level: 6, semester: 6, year: 3, category: 'electivo' },

        // Year 4
        { id: 38, name: 'Sistemas de Producción Animal', level: 7, semester: 7, year: 4, category: 'politica-gestion' },
        { id: 39, name: 'Farmacología Veterinaria', level: 7, semester: 7, year: 4, category: 'fundamentos' },
        { id: 40, name: 'Enfermedades producidas por agentes biológicos I', level: 7, semester: 7, year: 4, category: 'fundamentos' },
        { id: 41, name: 'Procedimientos clínicos', level: 7, semester: 7, year: 4, category: 'practica' },
        { id: 42, name: 'Imagenología', level: 7, semester: 7, year: 4, category: 'fundamentos' },
        { id: 43, name: 'Inteligencia artificial aplicada a la salud', level: 7, semester: 7, year: 4, category: 'humanidades' },
        { id: 44, name: 'Laboratorio clínico y biotecnología', level: 8, semester: 8, year: 4, category: 'fundamentos' },
        { id: 45, name: 'Investigación en Ciencias Veterinarias', level: 8, semester: 8, year: 4, category: 'investigacion' },
        { id: 46, name: 'Enfermedades producidas por agentes biológicos II', level: 8, semester: 8, year: 4, category: 'fundamentos' },
        { id: 47, name: 'Principios de cirugía y anestesiología', level: 8, semester: 8, year: 4, category: 'practica' },
        { id: 48, name: 'Medicina interna', level: 8, semester: 8, year: 4, category: 'fundamentos' },
        { id: 49, name: 'Bioética', level: 8, semester: 8, year: 4, category: 'humanidades' },

        // Year 5
        { id: 50, name: 'Salud Pública Veterinaria', level: 9, semester: 9, year: 5, category: 'politica-gestion' },
        { id: 51, name: 'Unidad de Investigación I', level: 9, semester: 9, year: 5, category: 'investigacion' },
        { id: 52, name: 'Internado de Pequeños Animales I', level: 9, semester: 9, year: 5, category: 'practica' },
        { id: 53, name: 'Internado de Animales Mayores I', level: 9, semester: 9, year: 5, category: 'practica' },
        { id: 54, name: 'Formulación y Evaluación de Proyectos Veterinarios', level: 9, semester: 9, year: 5, category: 'politica-gestion' },
        { id: 55, name: 'Gestión Veterinaria', level: 9, semester: 9, year: 5, category: 'politica-gestion' },
        { id: 56, name: 'Práctica Profesional', level: 9, semester: 9, year: 5, category: 'practica' }, // Note: Prerequisite is "Obtención de licenciatura" which is difficult to model directly here as a clickable course.
        { id: 57, name: 'Una Salud', level: 10, semester: 10, year: 5, category: 'politica-gestion' },
        { id: 58, name: 'Unidad de Investigación II', level: 10, semester: 10, year: 5, category: 'investigacion' },
        { id: 59, name: 'Internado Electivo: Pequeños Animales II', level: 10, semester: 10, year: 5, category: 'practica' },
        { id: 60, name: 'Internado Electivo: Animales Mayores', level: 10, semester: 10, year: 5, category: 'practica' },
        { id: 61, name: 'Internado Electivo: Conservación, Biodiversidad y Medio Ambiente', level: 10, semester: 10, year: 5, category: 'practica' },
        { id: 62, name: 'Internado Electivo: Producción y Sistemas de Aseguramiento de la Calidad', level: 10, semester: 10, year: 5, category: 'practica' },
        { id: 63, name: 'Orientación Laboral y Responsabilidad Ética en Medicina Veterinaria', level: 10, semester: 10, year: 5, category: 'familia-acompanamiento' },
    ];

    // Define prerequisites based on the PDF. Keys are course IDs, values are arrays of prerequisite IDs.
    const prerequisites = {
        7: [5], // Anatomía Animal I: Zoología
        8: [3], // Praderas y Especies Forrajeras: Biología Celular y Molecular
        9: [2, 3], // Fundamentos de Bioquímica: Fundamentos de la Química, Biología Celular y Molecular
        10: [3], // Histoembriología Veterinaria: Biología Celular y Molecular (3)
        11: [4, 5], // Ecología: Matemática, Zoología
        13: [7], // Anatomía Animal II: Anatomía Animal I
        14: [8, 9], // Nutrición y Alimentación Animal: Praderas y Especies Forrajeras, Fundamentos de Bioquímica
        15: [9, 10], // Fisiología Veterinaria: Fundamentos de Bioquímica, Histoembriología Veterinaria
        16: [7, 11], // Práctica Inicial: Anatomía Animal I, Ecología
        17: [3, 9], // Inmunología General: Biología Celular y Molecular, Fundamentos de Bioquímica
        20: [15], // Etología y Bienestar Animal: Fisiología Veterinaria
        21: [15], // Histopatología: Fisiología Veterinaria
        22: [17], // Microbiología Veterinaria: Inmunología General
        23: [11], // Conservación de Fauna Silvestre: Ecología
        24: [18], // Métodos de Investigación en Salud: Bioestadística
        26: [18], // Genética en Ciencias Veterinarias: Bioestadística
        27: [24], // Epidemiología Veterinaria: Métodos de Investigación en Salud
        28: [13, 21, 23], // Fisiopatología Veterinaria: Anatomía Animal II, Histopatología, Conservación de Fauna Silvestre
        32: [20, 28], // Semiología veterinaria: Etología y Bienestar Animal, Fisiopatología Veterinaria
        33: [28], // Reproducción animal: Fisiopatología Veterinaria
        34: [28], // Anatomía Patológica: Fisiopatología Veterinaria
        35: [22, 24], // Microbiología de los Alimentos: Microbiología Veterinaria, Métodos de Investigación en Salud
        36: [16, 20], // Práctica Intermedia: Práctica Inicial, Etología y Bienestar Animal
        38: [14, 26], // Sistemas de Producción Animal: Nutrición y Alimentación Animal, Genética en Ciencias Veterinarias
        39: [28], // Farmacología Veterinaria: Fisiopatología Veterinaria
        40: [27, 35], // Enfermedades producidas por agentes biológicos I: Epidemiología Veterinaria, Microbiología de los Alimentos
        41: [32], // Procedimientos clínicos: Semiología veterinaria
        42: [34], // Imagenología: Anatomía Patológica
        43: [18], // Inteligencia artificial aplicada a la salud: Bioestadística
        44: [34, 40], // Laboratorio clínico y biotecnología: Anatomía Patológica, Enfermedades producidas por agentes biológicos I
        45: [24], // Investigación en Ciencias Veterinarias: Métodos de Investigación en Salud
        46: [40, 39], // Enfermedades producidas por agentes biológicos II: Enfermedades producidas por agentes biológicos I, Farmacología Veterinaria
        47: [39, 41], // Principios de cirugía y anestesiología: Farmacología Veterinaria, Procedimientos clínicos
        48: [32, 42], // Medicina interna: Semiología veterinaria, Imagenología
        50: [46], // Salud Pública Veterinaria: Enfermedades producidas por agentes biológicos II
        51: [45, 49], // Unidad de Investigación I: Investigación en Ciencias Veterinarias, Bioética
        52: [44, 47, 48], // Internado de Pequeños Animales I: Laboratorio clínico y biotecnología, Principios de cirugía y anestesiología, Medicina interna
        53: [44, 47, 48], // Internado de Animales Mayores I: Laboratorio clínico y biotecnología, Principios de cirugía y anestesiología, Medicina interna
        54: [30, 38], // Formulación y Evaluación de Proyectos Veterinarios: Gestión Contable y Financiera, Sistemas de Producción Animal
        55: [30, 38], // Gestión Veterinaria: Gestión Contable y Financiera, Sistemas de Producción Animal
        // 56: ['licenciatura'], // Práctica Profesional: "Obtención de licenciatura" - this is a special case.
        57: [50, 54], // Una Salud: Salud Pública Veterinaria, Formulación y Evaluación de Proyectos Veterinarios
        58: [51], // Unidad de Investigación II: Unidad de Investigación I
        63: [36] // Orientación Laboral y Responsabilidad Ética en Medicina Veterinaria: Práctica Intermedia
    };

    // Load approved courses from localStorage or initialize an empty Set
    let approvedCourses = new Set(JSON.parse(localStorage.getItem('approvedCourses')) || []);

    // Function to update the progress bar and percentage
    function updateProgress() {
        const totalCourses = courses.length;
        const approvedCount = approvedCourses.size;
        const percentage = totalCourses === 0 ? 0 : (approvedCount / totalCourses) * 100;
        progressPercentageSpan.textContent = `${percentage.toFixed(0)}%`;
        progressFill.style.width = `${percentage}%`;
    }

    // Function to check if a course's prerequisites are met
    function arePrerequisitesMet(courseId) {
        const prereqs = prerequisites[courseId];
        if (!prereqs || prereqs.length === 0) {
            return true; // No prerequisites
        }
        return prereqs.every(prereqId => approvedCourses.has(prereqId));
    }

    // Function to render/re-render the curriculum grid
    function renderCurriculum() {
        curriculumGrid.innerHTML = ''; // Clear existing content

        const years = [...new Set(courses.map(course => course.year))].sort((a, b) => a - b);

        years.forEach(year => {
            const yearBlock = document.createElement('div');
            yearBlock.className = 'year-block';
            yearBlock.textContent = `AÑO ${year}`;
            curriculumGrid.appendChild(yearBlock);

            const semestersInYear = [...new Set(courses.filter(course => course.year === year).map(course => course.semester))].sort((a, b) => a - b);

            semestersInYear.forEach(semester => {
                const semesterBlock = document.createElement('div');
                semesterBlock.className = 'semester-block';
                semesterBlock.textContent = `SEMESTRE ${semester}`;
                curriculumGrid.appendChild(semesterBlock);

                const coursesInSemester = courses.filter(course => course.year === year && course.semester === semester);
                const coursesContainer = document.createElement('div');
                coursesContainer.className = 'courses-container';

                coursesInSemester.forEach(course => {
                    const courseCard = document.createElement('div');
                    courseCard.className = `course-card ${course.category}`;
                    courseCard.dataset.id = course.id;
                    courseCard.textContent = course.name;

                    if (approvedCourses.has(course.id)) {
                        courseCard.classList.add('approved');
                    } else if (!arePrerequisitesMet(course.id)) {
                        courseCard.classList.add('locked');
                        courseCard.title = 'Prerrequisitos no cumplidos';
                    }

                    courseCard.addEventListener('click', () => {
                        if (courseCard.classList.contains('locked')) {
                            // Optionally, show a message that prerequisites are not met
                            alert('No puedes aprobar este ramo, los prerrequisitos no han sido cumplidos.');
                            return;
                        }

                        if (approvedCourses.has(course.id)) {
                            approvedCourses.delete(course.id);
                        } else {
                            approvedCourses.add(course.id);
                        }
                        localStorage.setItem('approvedCourses', JSON.stringify(Array.from(approvedCourses)));
                        renderCurriculum(); // Re-render to update states and re-evaluate prerequisites
                        updateProgress();
                    });
                    coursesContainer.appendChild(courseCard);
                });
                curriculumGrid.appendChild(coursesContainer);
            });
        });
    }

    // Initial render and progress update
    renderCurriculum();
    updateProgress();
});
