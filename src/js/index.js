let isFlipped = false; 

function changeperson() {
    const image = document.getElementById('person-image');  
    const flipCard = image.closest('.flip-card');  

    flipCard.classList.toggle('flipped');  


    image.classList.add('opacity-0');  
    changeContent();  


    setTimeout(() => {

        if (!isFlipped) {
            image.src = 'src/img/jofferhome.jpg';  
        } else {
            image.src = 'src/img/xianhome.jpg';  
        }

        image.classList.remove('opacity-0');  


        isFlipped = !isFlipped;
    }, 150);  
}

function changeContent() {
    const name = document.getElementById('name');
    const para = document.getElementById('intropara');
    const icon1 = document.getElementById('icon1');
    const icon2 = document.getElementById('icon2');
    const icon3 = document.getElementById('icon3');
    const icon4 = document.getElementById('icon4');


    fadeOutContent(name, para, icon1, icon2, icon3, icon4);


    setTimeout(() => {

        if (!isFlipped) {
            name.textContent = "I'M XIAN DIVINAGRACIA";
            para.textContent = 'An aspiring programmer and multimedia artist; I enjoy creating things   like art, videos, and programs. I am committed to learning things even on rest days. I have a deep passion for C++, Java, and soon Python, with a goal of being a professional software developer in the industry.'; 
            icon1.src = 'src/img/tailwind.png';
            icon2.src = 'src/img/js.png';
            icon3.src = 'src/img/c-.png';  
            icon4.src = 'src/img/java.png';  
        } else {

            name.textContent = "I'M JOFFER ESCOTO";
            para.textContent = 'An aspiring IT professional with a passion for technology and problem-solving. I thrive in dynamic environments explore innovative solutions to complex challenges. My goal is to expand my knowledge and skills in the IT field to contribute impactful projects.';
            icon1.src = 'src/img/html.png';
            icon2.src = 'src/img/css.png';
            icon3.src = 'src/img/c-.png';  
            icon4.src = 'src/img/java.png'; 
        }

        fadeInContent(name, para, icon1, icon2, icon3, icon4);
    }, 500); 
}

function fadeOutContent(name, para, icon1, icon2, icon3, icon4) {
    name.classList.add('opacity-0');
    para.classList.add('opacity-0');
    icon1.classList.add('opacity-0');
    icon2.classList.add('opacity-0');
    icon3.classList.add('opacity-0');  
    icon4.classList.add('opacity-0'); 
}


function fadeInContent(name, para, icon1, icon2, icon3, icon4) {
    name.classList.remove('opacity-0');
    para.classList.remove('opacity-0');
    icon1.classList.remove('opacity-0');
    icon2.classList.remove('opacity-0');
    icon3.classList.remove('opacity-0'); 
    icon4.classList.remove('opacity-0');
}


function changeIcon(id, newSrc) {
    var imgElement = document.getElementById(id);
    imgElement.src = newSrc;  
}

function revertIcon(id, originalSrc) {
    var imgElement = document.getElementById(id);
    imgElement.src = originalSrc;  
}
