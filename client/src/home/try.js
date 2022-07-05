import { cities } from "../LocalDB";
import google from "@googlemaps/google-maps-services-js"

function shortestDistance(origin, destination) {
    return('https://www.google.com/maps/dir/?api=1&origin='+origin+'&destination='+destination);
}

export default shortestDistance;