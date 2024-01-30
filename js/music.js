const ap = new APlayer({
    container: document.getElementById('aplayer'),
    theme: '#FFCCFF',
    order: 'random',
    preload: 'auto',
    listMaxHeight: '336px',
    volume: '0.5',
    mutex: true,
    lrcType: 3,
    /* 下方更改为你自己的歌单就行 */
    audio: [{
            name: "Closure",
            artist: "Hayd",
            url: "https://cdn.nonamegmm.tk/music/Closure-Hayd/Closure-Hayd.mp3",
            cover: "https://cdn.nonamegmm.tk/music/Closure-Hayd/Closure-Hayd.jpg",
            lrc: "https://cdn.nonamegmm.tk/music/Closure-Hayd/Closure-Hayd.lrc",
        },
        {
            name: "Pink Champagne",
            artist: "Nick Lopez",
            url: "https://cdn.nonamegmm.tk/music/PinkChampagne-NickLopez/PinkChampagne-NickLopez.mp3",
            cover: "https://cdn.nonamegmm.tk/music/PinkChampagne-NickLopez/PinkChampagne-NickLopez.jpg",
            lrc: "https://cdn.nonamegmm.tk/music/PinkChampagne-NickLopez/PinkChampagne-NickLopez.lrc",
        },
        {
            name: "Head In The Clouds",
            artist: "Hayd",
            url: "https://cdn.nonamegmm.tk/music/HeadInTheClouds-Hayd/HeadInTheClouds-Hayd.mp3",
            cover: "https://cdn.nonamegmm.tk/music/HeadInTheClouds-Hayd/HeadInTheClouds-Hayd.jpg",
            lrc: "https://cdn.nonamegmm.tk/music/HeadInTheClouds-Hayd/HeadInTheClouds-Hayd.lrc",
        },
        {
            name: "Drowning",
            artist: "N i G H T S",
            url: "https://cdn.nonamegmm.tk/music/Drowning-NiGHTS/Drowning-NiGHTS.mp3",
            cover: "https://cdn.nonamegmm.tk/music/Drowning-NiGHTS/Drowning-NiGHTS.jpg",
            lrc: "https://cdn.nonamegmm.tk/music/Drowning-NiGHTS/Drowning-NiGHTS.lrc",
        },
        {
            name: "Aquel Verano Que Estuve Enfermo - 我生病的那个夏天",
            artist: "Zola",
            url: "https://cdn.nonamegmm.tk/music/AquelVeranoQueEstuveEnfermo-Zola/AquelVeranoQueEstuveEnfermo-Zola.mp3",
            cover: "https://cdn.nonamegmm.tk/music/AquelVeranoQueEstuveEnfermo-Zola/AquelVeranoQueEstuveEnfermo-Zola.jpg",
            lrc: "https://cdn.nonamegmm.tk/music/AquelVeranoQueEstuveEnfermo-Zola/AquelVeranoQueEstuveEnfermo-Zola.lrc",
        },
        {
            name: "**** Being Sober",
            artist: "Annika Wells",
            url: "https://cdn.nonamegmm.tk/music/BeingSober-AnnikaWells/BeingSober-AnnikaWells.mp3",
            cover: "https://cdn.nonamegmm.tk/music/BeingSober-AnnikaWells/BeingSober-AnnikaWells.jpg",
            lrc: "https://cdn.nonamegmm.tk/music/BeingSober-AnnikaWells/BeingSober-AnnikaWells.lrc",
        },
        {
            name: "In Uh Breeze",
            artist: "Monica Riskey",
            url: "https://cdn.nonamegmm.tk/music/InUhBreeze-MonicaRiskey/InUhBreeze-MonicaRiskey.mp3",
            cover: "https://cdn.nonamegmm.tk/music/InUhBreeze-MonicaRiskey/InUhBreeze-MonicaRiskey.jpg",
            lrc: "https://cdn.nonamegmm.tk/music/InUhBreeze-MonicaRiskey/InUhBreeze-MonicaRiskey.lrc",
        },
        {
            name: "MELANCHOLY",
            artist: "White Cherry",
            url: "https://cdn.nonamegmm.tk/music/MELANCHOLY-WhiteCherry/MELANCHOLY-WhiteCherry.mp3",
            cover: "https://cdn.nonamegmm.tk/music/MELANCHOLY-WhiteCherry/MELANCHOLY-WhiteCherry.jpg",
            lrc: "https://cdn.nonamegmm.tk/music/MELANCHOLY-WhiteCherry/MELANCHOLY-WhiteCherry.lrc",
        },
        {
            name: "r u ok",
            artist: "Tate McRae",
            url: "https://cdn.nonamegmm.tk/music/ruok-TateMcRae/ruok-TateMcRae.mp3",
            cover: "https://cdn.nonamegmm.tk/music/ruok-TateMcRae/ruok-TateMcRae.jpg",
            lrc: "https://cdn.nonamegmm.tk/music/ruok-TateMcRae/ruok-TateMcRae.lrc",
        },
        {
            name: "Star Without a Sky",
            artist: "Vern Matz",
            url: "https://cdn.nonamegmm.tk/music/StarWithoutaSky-VernMatz/StarWithoutaSky-VernMatz.mp3",
            cover: "https://cdn.nonamegmm.tk/music/StarWithoutaSky-VernMatz/StarWithoutaSky-VernMatz.jpg",
            lrc: "https://cdn.nonamegmm.tk/music/StarWithoutaSky-VernMatz/StarWithoutaSky-VernMatz.lrc",
        },
        {
            name: "Sorry to Your Next Ex",
            artist: "Haiden",
            url: "https://cdn.nonamegmm.tk/music/SorrytoYourNextEx-Haiden/SorrytoYourNextEx-Haiden.mp3",
            cover: "https://cdn.nonamegmm.tk/music/SorrytoYourNextEx-Haiden/SorrytoYourNextEx-Haiden.jpg",
            lrc: "https://cdn.nonamegmm.tk/music/SorrytoYourNextEx-Haiden/SorrytoYourNextEx-Haiden.lrc",
        },
        {
            name: "Ready Yet",
            artist: "Mokita",
            url: "https://cdn.nonamegmm.tk/music/ReadyYet-Mokita/ReadyYet-Mokita.mp3",
            cover: "https://cdn.nonamegmm.tk/music/ReadyYet-Mokita/ReadyYet-Mokita.jpg",
            lrc: "https://cdn.nonamegmm.tk/music/ReadyYet-Mokita/ReadyYet-Mokita.lrc",
        },
        {
            name: "Make the Move",
            artist: "Chris James",
            url: "https://cdn.nonamegmm.tk/music/MaketheMove-ChrisJames/MaketheMove-ChrisJames.mp3",
            cover: "https://cdn.nonamegmm.tk/music/MaketheMove-ChrisJames/MaketheMove-ChrisJames.jpg",
            lrc: "https://cdn.nonamegmm.tk/music/MaketheMove-ChrisJames/MaketheMove-ChrisJames.lrc",
        },
        {
            name: "double take",
            artist: "Dhruv",
            url: "https://cdn.nonamegmm.tk/music/doubletake-Dhruv/doubletake-Dhruv.mp3",
            cover: "https://cdn.nonamegmm.tk/music/doubletake-Dhruv/doubletake-Dhruv.jpg",
            lrc: "https://cdn.nonamegmm.tk/music/doubletake-Dhruv/doubletake-Dhruv.lrc",
        },
        {
            name: "golden hour",
            artist: "JVKE",
            url: "https://cdn.nonamegmm.tk/music/goldenhour-JVKE/goldenhour-JVKE.mp3",
            cover: "https://cdn.nonamegmm.tk/music/goldenhour-JVKE/goldenhour-JVKE.jpg",
            lrc: "https://cdn.nonamegmm.tk/music/goldenhour-JVKE/goldenhour-JVKE.lrc",
        }
    ]
});

/* 底栏歌词 */
setInterval(function () {
    $("#lrc").html("<span class='lrc-show'><i class='iconfont icon-music'></i> " + $(".aplayer-lrc-current").text() + " <i class='iconfont icon-music'></i></span>");
}, 500);

/* 音乐通知及控制 */
ap.on('play', function () {
    music = $(".aplayer-title").text() + $(".aplayer-author").text();
    iziToast.info({
        timeout: 8000,
        iconUrl: './img/icon/music.png',
        displayMode: 'replace',
        message: music
    });
    $("#play").html("<i class='iconfont icon-pause'>");
    $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
    if ($(document).width() >= 990) {
        $('.power').css("cssText", "display:none");
        $('#lrc').css("cssText", "display:block !important");
    }
});

ap.on('pause', function () {
    $("#play").html("<i class='iconfont icon-play'>");
    if ($(document).width() >= 990) {
        $('#lrc').css("cssText", "display:none !important");
        $('.power').css("cssText", "display:block");
    }
});

//音量调节
function changevolume() {
    var x = $("#volume").val();
    ap.volume(x, true);
    if (x == 0) {
        $("#volume-ico").html("<i class='iconfont icon-volume-x'></i>");
    } else if (x > 0 && x <= 0.3) {
        $("#volume-ico").html("<i class='iconfont icon-volume'></i>");
    } else if (x > 0.3 && x <= 0.6) {
        $("#volume-ico").html("<i class='iconfont icon-volume-1'></i>");
    } else {
        $("#volume-ico").html("<i class='iconfont icon-volume-2'></i>");
    }
}

$("#music").hover(function () {
    $('.music-text').css("display", "none");
    $('.music-volume').css("display", "flex");
}, function () {
    $('.music-text').css("display", "block");
    $('.music-volume').css("display", "none");
})

/* 一言与音乐切换 */
$('#open-music').on('click', function () {
    $('#hitokoto').css("display", "none");
    $('#music').css("display", "flex");
});

$("#hitokoto").hover(function () {
    $('#open-music').css("display", "flex");
}, function () {
    $('#open-music').css("display", "none");
})

$('#music-close').on('click', function () {
    $('#music').css("display", "none");
    $('#hitokoto').css("display", "flex");
});

/* 上下曲 */
$('#play').on('click', function () {
    ap.toggle();
    $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
});

$('#last').on('click', function () {
    ap.skipBack();
    $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
});

$('#next').on('click', function () {
    ap.skipForward();
    $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
});

/* 打开音乐列表 */
$('#music-open').on('click', function () {
    if ($(document).width() >= 990) {
        $('#box').css("display", "block");
        $('#row').css("display", "none");
        $('#more').css("cssText", "display:none !important");
    }
});