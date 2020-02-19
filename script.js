let iframe = document.querySelector('iframe');
let doc = iframe.contentDocument;

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {
      lat: 49.2750,
      lng: -123.1100
    }
  });

  var trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
}

// callback function after iframe is loaded
function iframeCallback() {
  iframe.onload = function () {
    document.getElementById('map-iframe').contentWindow.postMessage("message", "*");
    console.log(document.getElementById('map-iframe').contentWindow);
    
    // iframeCleanUp();
  }
}

function iframeCleanUp() {
  console.log(iframe.contentWindow);
  console.log(iframe.contentWindow.document);

  // document.querySelector('#wrapper header').style.display = "none";
}

iframeCallback();