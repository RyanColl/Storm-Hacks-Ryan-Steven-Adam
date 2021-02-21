import { geoArray } from './geo'
interface LatLng {
    lat: number,
    lng: number
}
var location: LatLng = { lat: 49.24890826962529, lng: -122.98049837083043 }
const geoLoc = navigator.geolocation

geoLoc.getCurrentPosition((position) => {
    if (position) location = { lat: position.coords.latitude, lng: position.coords.longitude }
});
const burnabyLatlng = { lat: 49.24890826962529, lng: -122.98049837083043 }

class GeoMap {
    private _googleMaps: google.maps.Map;
    constructor() {
        this._googleMaps = new google.maps.Map(document.getElementById("map") as HTMLElement, {
          center: location,
          zoom: 1,
        });
      }


}
const geo = new GeoMap()