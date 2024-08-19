// Ação VVVVV

document.getElementById("acao").addEventListener("input", function() {
    var maxLength = 30;
    if (this.value.length > maxLength) {
        this.value = this.value.slice(0, maxLength);
    }
});

// Justificativa VVVVV

document.getElementById("justificativa").addEventListener("input", function() {
    var maxLength = 30;
    if (this.value.length > maxLength) {
        this.value = this.value.slice(0, maxLength);
    }
});

// Apoiadores VVVVV

document.getElementById("responsavel").addEventListener("input", function() {
    var maxLength = 20;
    if (this.value.length > maxLength) {
        this.value = this.value.slice(0, maxLength);
    }
});

// Local VVVVV

document.getElementById("local").addEventListener("input", function() {
    var maxLength = 30;
    if (this.value.length > maxLength) {
        this.value = this.value.slice(0, maxLength);
    }
});

// Prazo VVVVV

document.getElementById("Prazo").addEventListener("input", function() {
    var value = this.value;
    // Remove all non-numeric characters
    value = value.replace(/\D/g, '');
    // Format as dd/mm/yyyy
    if (value.length > 8) {
        value = value.slice(0, 8);
    }
    if (value.length > 4) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4) + '/' + value.slice(4);
    } else if (value.length > 2) {
        value = value.slice(0, 2) + '/' + value.slice(2);
    }
    this.value = value;
});

// Etapas VVVVV 

document.getElementById("etapas").addEventListener("input", function() {
    var maxLength = 30;
    if (this.value.length > maxLength) {
        this.value = this.value.slice(0, maxLength);
    }
});

// Custo VVVVV

document.getElementById("custo").addEventListener("input", function() {
    var value = this.value;
    
    // Remove tudo que não é número
    value = value.replace(/\D/g, '');
    
    // Adiciona o ponto como separador de milhar e vírgula como separador decimal
    if (value.length > 2) {
        value = value.slice(0, -2) + ',' + value.slice(-2);
    }
    
    // Adiciona separadores de milhar
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    
    // Adiciona o símbolo de R$ no início
    value = 'R$ ' + value;
    
    // Atualiza o valor do campo
    this.value = value;
});

particlesJS("particles-js", {"particles":{"number":{"value":170,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
