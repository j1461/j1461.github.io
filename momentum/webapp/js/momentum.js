$('#logo').css('cursor', 'pointer').on('click', function() {
  top.location.reload(true);
});



$("#searchForm").submit(function (event) {
  $(this).animate({ marginTop: '4em' }, {
    duration: 200,
    complete: function () {
      getHackers($("#searchField").val());
    }
  })
  console.log("Submit triggered value = " + $("#searchField").val());

  //console.log(map);

  

  event.preventDefault();
});

/*
 * Clean All
 */
function cleanAll() {

  $("#hackersResult").html("");

  $("#map-canvas").addClass("hide");  

}

// Global var for hackersList
var hackersList;

/*
 * Get Hackers - request/result
 */
function getHackers(search) {

  // Compose request - TBD

  console.log("Go for hackers q = " + search);

  cleanAll();

  $("#topResultsForBlock").removeClass("hide");

  $("#topResultsFor").html(search);

  //console.log($("#topResultsFor"));

  // Make request and print the data
  // old "js/hackersList.json?q=" + search
  //var searchUrl = "js/hackersList.json?q=" + search;
  var searchUrl = "http://hkwk.up1.in/api/list/" + search;

  //var searchUrl = "/api/list/" + search;
  
  $.getJSON( searchUrl, function( data ) {

    

    hackersList = data["Hackers"];

    if (_.isEmpty(hackersList)) {
      console.log("NO Data");
      return;
    }

    

    // Augmet with a fake data
    hackersList = augmentWithFake(hackersList, search);

    console.log("Response = ");
    console.log(hackersList);

    showMap(hackersList);

    showList(hackersList);

  });

}

function augmentWithFake(hackersList, search) {

  var hList = _.clone(hackersList);

  _.each(hList, function(h, index) {

    //console.log("augment hacker " + h);

    // Check Title
    if (_.isEmpty(h["Title"])) {
      h["Title"] = getFakeTitle(search);
      console.log("Assign a new title = " + h["Title"]);
    }

    // Check Location
    if (_.isEmpty(h["Location"])) {
      h["Location"] = getFakeLocation();
      console.log("Assign a new location = " + h["Location"]);
    }


  });

  return hList;
}

function getFakeTitle(search) {
  var r = Math.floor(Math.random() * fakeTitles.length);
  return fakeTitles[r];
}

function getFakeLocation() {
  var r = Math.floor(Math.random() * fakeLocations.length);
  return fakeLocations[r]; 
}

function showList(hackersList) {

  // Clear all hackers list
  $("#hackersResult").html("");

    // Iterate over hackers
  _.each(hackersList, function(hacker, index) {

    // Create a user element
    var el = $("<div/>").addClass("user center");


    // Create an image block
    var avatar = $("<div/>").addClass("avatar-frame");
    var avatar_image = $("<img/>").attr("src", hacker["AvatarUrl"]);
    if (hacker["AvatarUrl"] === null) {
      avatar_image.attr('src', 'css/default-profile-' + ((((Math.random() * 10000) % 3) + 1) | 0) + '.jpg');
    }
    if (hacker["Type"] === "Hacker") {
      avatar_image.addClass("hacker");
    }
    avatar_image.addClass("center");
    avatar_image.appendTo(avatar);
    avatar.appendTo(el);

    var overlay_div = $('<div/>').addClass('overlay')
      .append(
        $('<span/>').addClass('percentage')
          .text(((((Math.random() * 10000) % 5) + 1) | 0) + '')
          .append(
            $('<span/>').css('font-size', '35px').text('%')
          )
      ).append(
        $('<span/>').addClass('momentum-score').text('momentum score')
      ).append(
        $('<span/>').addClass('more-details')
      ).on('click', (function (hacker) {
        return function () {
          var url = hacker.Type === 'Hacker' ?
            'https://github.com/' : 'https://www.behance.net/';
          window.open(url + hacker.OnSiteUserName, '_blank')
        };
      })(hacker));

    if (hacker["Type"] !== "Hacker") {
      overlay_div.addClass('designer');
    }

    avatar.append(overlay_div);
    avatar.on('mouseenter', function () {
      overlay_div.fadeIn(100);
    }).on('mouseleave', function () {
      overlay_div.fadeOut(100);
    });


    //console.log("index = " + index + ", hacker = " + JSON.stringify(hacker));

    // Fullname
    var txt = $("<p/>");
    if (!_.isEmpty(hacker["FullName"])) {
      txt.text(hacker["FullName"]);
    }
    txt.appendTo(el);

    // Line
    //if (!_.isEmpty(hacker["Title"]) || !_.isEmpty(hacker["Location"])) {
      var line = $('<div class="line"></div>');
      line.appendTo(el);
    //}

    // Title
    var title = $('<div class="title"></div>');
    if (!_.isEmpty(hacker["Title"])) {
      title.text(hacker["Title"]);
    }
    title.appendTo(el);

    // Location
    var location = $('<div class="location"></div>');

    if (!_.isEmpty(hacker["Location"])) {
      location.append($('<img src="css/pin-map.png" />'));
      location.append(hacker["Location"]);
    }

    location.appendTo(el);

    // Add user element to the structure
    el.appendTo("#hackersResult");

    // Clearfix after each 5th element
    if ((index + 1) % 4 == 0) {
      var clearfix = $('<div class="clearfix"></div>');
      clearfix.appendTo("#hackersResult");
    }


  });    

}


// Global Map variable
var geocoder;
var map;
var markersBounds;
var minIconSize = 0.5; // scale
var maxIconSize = 1.8; //scale
var stepIconSize = 0.5;
var perPointIconSize;
var countsMin;
var countsMax;
//var iconSize = 1;

function showMap(hackersList) {
  console.log("ShowMap");
  
  //$("#map-canvas").show();
  $("#map-canvas").removeClass("hide");


  var mapOptions = {
    zoom: 2,
    center: new google.maps.LatLng(51.5073, -0.1277) // London
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  google.maps.event.trigger(map, "resize");

  markersBounds = new google.maps.LatLngBounds ();
  iconSize = 1;

  //Filter nulls
  var hackersListWithoutNull = _.filter(hackersList, function(hacker){
    return !_.isNull(hacker["Location"]);
  });
  console.log("hackersListWithoutNull = ");
  console.log(hackersListWithoutNull);

  // Distinct locations count
  var counts = _.countBy(hackersListWithoutNull, function(item){
    return item["Location"];
  });

  console.log("counts = " + JSON.stringify(counts));
  console.log(counts);

  // Find min max for the marker size steps

  countsMin = _.min(_.values(counts));
  countsMax = _.max(_.values(counts));

  console.log("MIN = " + countsMin);
  console.log("MAX = " + countsMax);

  
  var devider = countsMax - countsMin
  devider = devider == 0 ? 1 : devider;
  perPointIconSize = (maxIconSize - minIconSize) / devider;


  console.log("perPointIconSize = " + perPointIconSize);

  _.each(_.keys(counts), function(city) {
    console.log("min = " + counts[city]);
  });

  /* */
  geocodeAndPlaceMarkers(counts);

}

function geocodeAndPlaceMarkers(counts) {

  if (_.isEmpty(counts) ) {
    if (!_.isEmpty(markersBounds)) map.fitBounds(markersBounds);
    return;
  }

  var v = pop(counts);

  console.log("geocodeAndPlaceMarkers: count = ");
  console.log(v);

  geocoder.geocode( { "address": v.key}, function(results, status) {

    if (status == google.maps.GeocoderStatus.OK) {

      markersBounds.extend(results[0].geometry.location);
      //console.log("markersBounds = ");
      //console.log(markersBounds);

      //  Fit these bounds to the map
      //map.fitBounds(markersBounds);

      //console.log("geocoded location = ");
      //console.log(results[0].geometry.location);

      //map.setCenter(results[0].geometry.location);

      _.delay(function() {

        var iconSize = minIconSize + perPointIconSize * (v.value - countsMin);

        //console.log("calc iconSize = " + iconSize + " for value = " + v.value);

        var icon = {

          path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
          fillColor: '#903030',
          fillOpacity: .6,
          anchor: new google.maps.Point(0,0),
          strokeWeight: 0,
          scale: iconSize
        }

        var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          animation: google.maps.Animation.DROP,
          icon: icon,
          title: v.key

        });

        var infowindow = new google.maps.InfoWindow({
          content: v.key + ": " + v.value + "&nbsp;&nbsp;&nbsp;&nbsp;"
        });

        google.maps.event.addListener(marker, 'click', function() {
          console.log("Marker Click Location = " + v.key);
          // Filter hacker with Location of marker
          var hackersFiltered = _.filter(hackersList, function(h) {
            return h["Location"] == v.key
          });
          // Show filtered hackers
          showList(hackersFiltered);
        });

        google.maps.event.addListener(marker, 'mouseover', function() {
          infowindow.open(map, this);
        });

        google.maps.event.addListener(marker, 'mouseout', function() {
          infowindow.close();
        });

        console.log("iconSize = " + iconSize);

      }, 200);
      

    } else {
      console.log("ERROR: Geocode was not successful for the following reason: " + status);
    }

  });
  
  // Delay next call to the geocode
  _.delay(geocodeAndPlaceMarkers, 150, counts);

}

/*
 * Pops the random key from the object.
 */
function pop(obj) {
  for (var key in obj) {
    // Uncomment below to fix prototype problem.
    // if (!Object.hasOwnProperty.call(obj, key)) continue;
    var result = {"key": key, "value" : obj[key]};
    // If the property can't be deleted fail with an error.
    if (!delete obj[key]) { throw new Error(); }
    return result;
  } 
}

$(function initialize() {

    

  geocoder = new google.maps.Geocoder();

  // Show the form
  $("#searchForm").removeClass("hide");
  //$("topResultsForBlock").hide();

  //_.delay(getHackers(), 500, "Designers and Developers");


});

var fakeLocations = [
  "Paris", "Berlin", "San Francisco", "San Mateo", "Kyiv", "Keln", "Ahmedabad, India", "Surat, India", "Como, Italy", "Warsaw, Poland", "London", "Oxford", "Valencia"
];

var fakeTitles = [
  "Open-Source Wearable Projects",
  "Wearables",
  "Smart Home Automation",
  "IoT Engineering",
  "Robotics Augmented",
  "Engineering",
  "BioTech"
];

/*
var fakeDescs = [
  "Super cool guy1",
  "Super cool guy2"
];
*/


//google.maps.event.addDomListener(window, 'load', initialize);


