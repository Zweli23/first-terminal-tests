export default function isFrom(registrationNumber, locationIndicator) {
    if (!locationIndicator) {
        return false;
    }
    return registrationNumber.startsWith(locationIndicator);
}
