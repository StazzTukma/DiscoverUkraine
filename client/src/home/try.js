import { cities } from "../LocalDB";

function shortestDistance(origin, destination) {
    return('https://www.google.com/maps/dir/?api=1&origin='+origin+'&destination='+destination);
}

export default shortestDistance;