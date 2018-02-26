var video;
var data_;
var list;
var sw = true;
var duration = 0;
var tb = 10;
window.onload = function () {
    data_ = data;
    loadList();
    $('#pause').hide();
    $('#back').hide();
    $('#next').hide();
    list = $('.list-card');
    list.click(function () {
        $('.list-container').find('.div-is-active').removeClass('div-is-active');
        let x = parseInt($(this).attr('id'));
        console.log(x);
        $(this).addClass('div-is-active');
        $('.section-controls').find('progress').remove();
        $(data_).each(function (i, element) {
            if (x == element.id) {
                let section = $('.section-body');
                section.empty();
                section.append(`<video alt="${element.title}" poster="${element.img}"><source src="${element.v1}" alt="${element.title}" type="${element.type}" id="${element.id}"></video>`);
                video = $('video');
                desActive();
            }
            if(x == '7'){
                let section = $('.section-body');
                section.empty();
                section.append(`<video alt="${element.title}" poster="${element.img}"><source src="${element.v1}" alt="${element.title}" type="${element.type}" id="${element.id}"><track src="media/translate/cc.vtt" srclang="es" label="Español" default></video>`);
                video = $('video');
                video[0].volume = 0;
                desActive();
            }
        })
    })
    if (sw) {
        let section = $('.section-body');
        section.empty();
        section.append(`<video alt="${data_[0].title}"><source src="${data_[0].v1}" alt="${data_[0].title}" type="video/mp4" id="${data_[0].id}"/></video>`);
        video = $('video');
        sw = false;
        $('.list-container').find(`#1`).addClass('div-is-active');
        desActive();
    }
}

function loadVol() {
    let value = video[0].volume;
}

function loadList() {
    let list = $('.list-container');
    let c_ = 0;
    $(data_).each(function (i, element) {
        let c = 'c' + c_;
        if (element.type == 'audio/mpeg') {
            list.append(`<div class="list-card ${c}" id="${element.id}">`);
            $('.c' + c_).append(`<div tabindex="${tb}" title="${element.title}"><span class="icon-13" title="${element.title}"><h4 role="heading" level="2">${element.description}</h4></span></div>`);
            c_++;
            tb++;
        }
        if (element.type == 'video/mp4') {
            list.append(`<div class="list-card ${c}" id="${element.id}">`);
            $('.c' + c_).append(`<div tabindex="${tb}" title="${element.title}"><span class="icon-12" title="${element.title}"><h4 role="heading" level="2">${element.description}</h4></span></div>`);
            c_++;
            tb++;
        }
    })
}

function active() {
    $('#pause').show('slow');
    $('#back').show('slow');
    $('#next').show('slow');
    $('#play').hide('slow');
}

function desActive() {
    $('#pause').hide('slow');
    $('#back').hide('slow');
    $('#next').hide('slow');
    $('#play').show('slow');
}

$('#play').click(function () {
    video[0].play();
    active();
})

$('#pause').on('click', function () {
    video[0].pause();
    desActive();
})

$('#stop').on('click', function () {
    video[0].pause();
    video[0].currentTime = 0;
    desActive();
})

$('#back').on('click', function () {
    video[0].currentTime -= 10;
})

$('#next').on('click', function () {
    video[0].currentTime += 10;
})

$('#up').on('click', function () {
    video[0].volume += 0.1;
})

$('#down').on('click', function () {
    video[0].volume -= 0.1;
})

$('#mute').on('click', function () {
    video[0].volume = 0;
})

$('#backElement').click(function () {
    $('.list-container').find('.div-is-active').removeClass('div-is-active');
    let id = parseInt($('video').find('source').attr('id'));
    id--;
    $(data_).each(function (i, element) {
        if (id == element.id) {
            $('.list-container').find(`#${id}`).addClass('div-is-active');
            let section = $('.section-body');
            section.empty();
            section.append(`<video alt="${element.title}" poster="${element.img}"><source src="${element.v1}" alt="${element.title}" type="${element.type}" id="${element.id}"></video>`);
            video = $('video');
            desActive();
        }
    })
})
$('#nextElement').click(function () {
    $('.list-container').find('.div-is-active').removeClass('div-is-active');
    let id = parseInt($('video').find('source').attr('id'));
    id++;
    $(data_).each(function (i, element) {
        if (id == element.id) {
            $('.list-container').find(`#${id}`).addClass('div-is-active');
            let section = $('.section-body');
            section.empty();
            section.append(`<video alt="${element.title}" poster="${element.img}"><source src="${element.v1}" alt="${element.title}" type="${element.type}" id="${element.id}"></video>`);
            video = $('video');
            desActive();
        }
    })
})
