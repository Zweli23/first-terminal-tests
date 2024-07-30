export default function isWeekday(day) {
    
    const weekendDays = ['Saturday', 'Sunday'];
    
    
    return !weekendDays.includes(day);
}


console.log(isWeekday('Monday')); 
console.log(isWeekday('Sunday')); 
console.log(isWeekday('Saturday')); 