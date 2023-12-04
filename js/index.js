document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loader-container").style.display = "flex";
    document.body.classList.add("no-scroll");
});

document.addEventListener("readystatechange", function () {
    if (document.readyState === "complete") {
        document.getElementById("loader-container").style.display = "none";
        document.body.classList.remove("no-scroll");
    }
});



const webData = [
    { name: "React", percentage: 56, image: "	https://cdn-icons-png.flaticon.com/512/11023/11023348.png" },
    { name: "PHP", percentage: 23, image: "	https://cdn-icons-png.flaticon.com/512/5968/5968332.png" },
    { name: "HTML", percentage: 99, image: "	https://cdn-icons-png.flaticon.com/512/174/174854.png" },
    { name: "CSS", percentage: 66, image: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
    { name: "JS", percentage: 44, image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
    { name: "Blazor", percentage: 44, image: "assets/img/logo-blazor.svg" }
];

const programmingData = [
    { name: "Java", percentage: 77, image: "https://cdn-icons-png.flaticon.com/512/226/226777.png" },
    { name: "C#", percentage: 66, image: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png" },
    { name: "C++", percentage: 55, image: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png" },
    { name: "Python", percentage: 44, image: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png" }
];

const toolsData = [
    { name: "Git", percentage: 95, image: "https://cdn-icons-png.flaticon.com/512/11518/11518876.png" },
    { name: "Git Desktop", percentage: 95, image: "	https://cdn-icons-png.flaticon.com/512/733/733553.png" },
    { name: "ChatGPT", percentage: 55, image: "assets/img/logo-gpt.png" },
    { name: "Docker", percentage: 22, image: "https://cdn-icons-png.flaticon.com/512/919/919853.png" }
];

const SkillsContainer = document.querySelector('.skill');

function generateSkills(data) {
    SkillsContainer.innerHTML = '';

    data.forEach((item) => {
        var div = document.createElement("div");
        div.className = "single-chart";

        div.innerHTML = `<svg viewBox="0 0 36 36" class="circular-chart orange">
      <path class="circle-bg" d="M18 2.0845a15.9155 15.9155 0 0 1 0 31.831a15.9155 15.9155 0 0 1 0 -31.831"/>
      <path class="circle" stroke-dasharray="${item.percentage}, 100" d="M18 2.0845a15.9155 15.9155 0 0 1 0 31.831a15.9155 15.9155 0 0 1 0 -31.831"/>

    </svg>
    
    <div class="technologiess">
            <img src="${item.image}" width="70" height="60" />
            <h3 class="name">${item.name}</h3>
    <h6 class="percentage">${item.percentage}%</h6>

    </div>

    `;

        SkillsContainer.appendChild(div);
    });
}

const webButton = document.getElementById('webButton');
const programmingButton = document.getElementById('programmingButton');
const toolsButton = document.getElementById('toolsButton');

function setActiveButton(activeButton) {
    // Resetea las clases de todos los botones
    webButton.classList.remove('btn-primary');
    programmingButton.classList.remove('btn-primary');
    toolsButton.classList.remove('btn-primary');


    webButton.classList.add('btn-secundary');
    programmingButton.classList.add('btn-secundary');
    toolsButton.classList.add('btn-secundary');

    // Establece el botón activo como primario y los otros como secundarios
    activeButton.classList.add('btn-primary');
    [webButton, programmingButton, toolsButton].forEach((button) => {
        if (button !== activeButton) {
            button.classList.add('btn-secondary');
        }
    });
}

webButton.addEventListener('click', () => {
    setActiveButton(webButton);
    generateSkills(webData);
});

programmingButton.addEventListener('click', () => {
    setActiveButton(programmingButton);
    generateSkills(programmingData);
});

toolsButton.addEventListener('click', () => {
    setActiveButton(toolsButton);
    generateSkills(toolsData);
});

generateSkills(webData);


var projects = [
    {
        imageSrc: 'assets/img/encripdatador.png',
        title: 'Encriptador',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, nesciunt praesentium ducimus in nostrum consequuntur aspernatur deserunt alias atque qui? Voluptatum fugiat minima enim iste tenetur voluptates, officiis temporibus qui!',
        website: 'https://daylanarias1.github.io/Encriptador/',
        repository: 'https://github.com/daylanarias1/Encriptador.git',
        technologies: ['bi-filetype-html', 'bi-filetype-html', 'bi-filetype-html']
    },
    {
        imageSrc: 'assets/img/entomologia.png',
        title: 'Entomologia',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, nesciunt praesentium ducimus in nostrum consequuntur aspernatur deserunt alias atque qui? Voluptatum fugiat minima enim iste tenetur voluptates, officiis temporibus qui!',
        website: 'https://primierlab.000webhostapp.com/',
        repository: 'https://github.com/daylanarias1/Sistema-entomologia.git',
        technologies: ['bi-filetype-js', 'bi-filetype-html']
    }
];

function createCarousel(projects) {
    let carouselItems = '';
    let carouselIndicators = '';

    for (let i = 0; i < projects.length; i++) {
        carouselItems += `
      <div class="carousel-item">
        <img src="${projects[i].imageSrc}" alt="${projects[i].title}">
        <div class="carousel-caption">
          <h5>${projects[i].title}</h5>
          <p>${projects[i].description}</p>
          <div class="technologies">
            <img src="https://cdn-icons-png.flaticon.com/512/11518/11518876.png" class="icon-technology" alt="">
          </div>
          <div class="links">
            <a href="${projects[i].website}"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white" class="bi bi-globe2" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
</svg></a>
            <a href="${projects[i].repository}"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#CC4342" class="bi bi-git" viewBox="0 0 16 16">
  <path d="M15.698 7.287 8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025 1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.031 1.031 0 0 0 0-1.457"/>
</svg></a>
          </div>
        </div>
      </div>`;

        carouselIndicators += `<li><label onclick="buscar(${i})" class="carousel-bullet">•</label></li>`;
    }

    let carouselInner = document.querySelector('.carousel-inner');
    carouselInner.innerHTML += `${carouselItems}<ol class="carousel-indicators">${carouselIndicators}</ol>`;

    showSlides();
}

var currentIndex = 0;
var totalSlides = projects.length;

function showSlides() {
    const slides = document.querySelectorAll('.carousel-item');
    const labels = document.querySelectorAll('label');

    slides.forEach((slide, index) => {
        slide.style.display = index === currentIndex ? 'flex' : 'none';
    });

    labels.forEach((label, index) => {
        label.classList.toggle('active-bullet', index === currentIndex);
    });
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlides();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlides();
}

function buscar(index) {
    currentIndex = index;
    console.log("asdasd");
    showSlides();
}

createCarousel(projects);


// Obtén una lista de elementos con la clase 'btnAbrirPDF'
let btnAbrirPDF = document.getElementsByClassName('btnAbrirPDF');

// Itera sobre la lista de elementos y agrega el evento a cada uno
for (let i = 0; i < btnAbrirPDF.length; i++) {
    btnAbrirPDF[i].addEventListener('click', function () {
        let rutaPDF = '../assets/pdf/Daylan Arias.pdf';
        window.open(rutaPDF, '_blank');
    });
}

