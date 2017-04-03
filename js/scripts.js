// Empty JS for your own code to be here
$('#DylImg').hover(function () {
    $(this).attr('src', 'Images/Hypno-16-Dylan.gif');
}, function () {
    $(this).attr('src', 'Images/DB.jpg');
});
$('#GlynnImg').hover(function () {
    $(this).attr('src', 'Images/Hypno-5-Glynn.gif');
}, function () {
    $(this).attr('src', 'Images/GR.jpg');
});
$('#GImg').hover(function () {
    $(this).attr('src', 'Images/Hypno-4-G.gif');
}, function () {
    $(this).attr('src', 'Images/GS.jpg');
});
$('#DevImg').hover(function () {
    $(this).attr('src', 'Images/Hypno-6-Dev.gif');
}, function () {
    $(this).attr('src', 'Images/DR.jpg');
});
$('#VinceImg').hover(function () {
    $(this).attr('src', 'Images/Hypno-2-Vince.gif');
}, function () {
    $(this).attr('src', 'Images/VK.jpg');
});
$('#SMFB').hover(function () {
    $(this).attr('src', 'Images/facebook-logo-y.png');
}, function () {
    $(this).attr('src', 'Images/facebook-logo.png');
});
$('#SMT').hover(function () {
    $(this).attr('src', 'Images/twitter-logo-y.png');
}, function () {
    $(this).attr('src', 'Images/twitter-logo.png');
});
$('#SMYT').hover(function () {
    $(this).attr('src', 'Images/youtube-logo-y.png');
}, function () {
    $(this).attr('src', 'Images/youtube-logo.png');
});

var divPos = {};
var offset = $("#pyramidDiv").offset();
$("#pyramidDiv").mousemove(function (e) {
    divPos = {
        x: e.pageX - offset.left,
        y: e.pageY - offset.top
    };

    var xPercent = divPos.x / $("#pyramidDiv").width() * 100;

    if (xPercent > 0 && xPercent < 25) {

        $('#HoverImg').attr('src', 'Images/Pyramid_sunrise.jpg');
    }
    else if (xPercent > 25 && xPercent < 50) {
        $('#HoverImg').attr('src', 'Images/Pyramid.jpg');
    }
    else if (xPercent > 50 && xPercent < 75) {
        $('#HoverImg').attr('src', 'Images/pyramid_night.jpg');
    }
    else if (xPercent > 75 && xPercent < 100) {
        $('#HoverImg').attr('src', 'Images/Pyramid_sunset.jpg');
        
    }
}).mouseout( function () {
    $('#HoverImg').attr('src', null);
});


$("#products").click(function () {
    if ($(this).attr('href') == "#LuxWalker") {
        $(this).attr('href', '#LuxViewer')
    }
    else {

        $(this).attr('href', '#LuxWalker')
    }

});
$('.tile')
  // tile mouse actions
  .on('mouseover', function () {
      $(this).children('.photo').css({ 'transform': 'scale(' + $(this).attr('data-scale') + ')' });
  })
  .on('mouseout', function () {
      $(this).children('.photo').css({ 'transform': 'scale(1)' });
  })
  .on('mousemove', function (e) {
      $(this).children('.photo').css({ 'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 + '%' });
  })
  // tiles set up
  .each(function () {
      $(this)
        // add a photo container
        .append('<div class="photo"></div>')
        // some text just to show zoom level on current item in this example
        
        // set up a background image for each tile based on data-image attribute
        .children('.photo').css({ 'background-image': 'url(' + $(this).attr('data-image') + ')' });
  })

$('#HoverTxt').hover(function () {
    $(this).attr('style', 'color:#ffbf00');
}, function () {
    $(this).attr('style', 'color:#0D0D0D');
});
    window.addEventListener('load', onVrViewLoad)
    function onVrViewLoad() {
    var vrView = new VRView.Player('#vrview', {
        image: 'Images/US_LAX_SCT_A_9200_SteppingStone_001_160716_01_jca.jpg',
        is_stereo: true
    });
}