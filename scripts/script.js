$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '500078569',
        limit: 20,
        resolution: 'standard_resolution',
        accessToken: '500078569.1677ed0.5da03c81dd954075bd6e2fd91ce69e0b',
        sortBy: 'most-commented',
        template: '<div class="col"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

        // This will create a single gallery from all elements that have class "gallery-item"
        $('.gallery').magnificPopup({
            type: 'image',
            delegate: 'a',
            gallery: {
                enabled: true
            }
        });

});

var map;
function initMap() {
    const home = {
        lat: 26.4615,
        lng: -80.0728
    };
  map = new google.maps.Map(document.getElementById('map'), {
    center: home,
    zoom: 8
  });
}