// name

document.getElementById('name').addEventListener('input', function (e) {
    const value = e.target.value;

    // Remove qualquer caractere que não seja letra
    e.target.value = value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');

    if (value.length > 18) {
        e.target.value = value.slice(0, 18);
    }
});

// ação

document.getElementById('acao').addEventListener('input', function (e) {
    const value = e.target.value;

    // Limitar a 30 caracteres
    if (value.length > 30) {
        e.target.value = value.slice(0, 30);
    }
});

//responsavel

document.getElementById('responsavel').addEventListener('input', function (e) {
    const value = e.target.value;

    e.target.value = value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');

    if (value.length > 18) {
        e.target.value = value.slice(0, 18);
    }
});

// endereço 

document.getElementById('endereço').addEventListener('input', function (e) {
    const value = e.target.value;

    // Limitar a 30 caracteres
    if (value.length > 30) {
        e.target.value = value.slice(0, 30);
    }
});

// Validação e formatação do campo Horário
document.getElementById('horario').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (value.length > 4) {
        value = value.slice(0, 4);
    }

    if (value.length > 2) {
        value = value.slice(0, 2) + ':' + value.slice(2);
    }

    const [hours, minutes] = value.split(':');
    if (hours && (parseInt(hours) < 0 || parseInt(hours) > 23)) {
        value = '23:' + (minutes || '00');
    }
    if (minutes && (parseInt(minutes) < 0 || parseInt(minutes) > 59)) {
        value = (hours || '00') + ':59';
    }

    e.target.value = value;
});

// data

document.getElementById('data').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (value.length > 4) {
        value = value.slice(0, 4);
    }

    if (value.length > 2) {
        value = value.slice(0, 2) + '/' + value.slice(2);
    }

    const [day, month] = value.split('/');
    if (day && (parseInt(day) < 0 || parseInt(day) > 31)) {
        value = '31/' + (month || '');
    }

    if (month && (parseInt(month) < 0 || parseInt(month) > 12)) {
        value = (day || '31') + '/12';
    }

    e.target.value = value;
});


// Formatação do campo Custo com R$ e somente números
document.getElementById('custo').addEventListener('input', function (e) {
    let value = e.target.value.replace(/[^0-9]/g, ''); 

    if (value.length > 10) {
        value = value.slice(0, 10);
    }

    if (value.length > 0) {
        let formattedValue = value;
        if (formattedValue.length > 2) {
            formattedValue = formattedValue.slice(0, -2) + ',' + formattedValue.slice(-2);
        }

        formattedValue = 'R$ ' + formattedValue;

        e.target.value = formattedValue;
    } else {
        e.target.value = 'R$ ';
    }
});

particlesJS("particles-js", {"particles":{"number":{"value":170,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
