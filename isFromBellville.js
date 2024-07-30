export default function isFromBellville(registrationNumber) {
    return registrationNumber.startsWith('CY');
}

console.log(isFromBellville('CY123456'));
console.log(isFromBellville('CA789012'));