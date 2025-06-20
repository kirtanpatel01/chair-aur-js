// const date = new Date()
// console.log(date) // 2025-06-20T13:39:28.799Z
// console.log(date.toDateString()) // Fri Jun 20 2025
// console.log(date.toISOString()) // 2025-06-20T13:42:44.701Z
// console.log(date.toJSON()) // 2025-06-20T13:42:44.701Z
// console.log(date.toLocaleDateString()) // 6/20/2025
// console.log(date.toLocaleString()) // 6/20/2025, 1:42:44 PM
// console.log(date.toLocaleTimeString()) // 1:42:44 PM
// console.log(date.toString()) // Fri Jun 20 2025 13:42:44 GMT+0000 (Coordinated Universal Time)
// console.log(date.toTimeString()) // 13:42:44 GMT+0000 (Coordinated Universal Time)
// console.log(date.toUTCString()) // Fri, 20 Jun 2025 13:42:44 GMT

console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);
// it will print 'UTC' which means the time will be in +5:30 format not in indian 

const date = new Date();

// console.log(date.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));
// 20/6/2025, 7:20:17 pm this our time 

// console.log(
//     date.toLocaleString('en-IN', { 
//         timeZone: 'Asia/Kolkata',
//         hour12: false
//     })
// );
// 20/6/2025, 19:22:35 pm this our time in 24-h

// setInterval(() => {
//   const timeInKolkata = new Date().toLocaleTimeString('en-IN', {
//     timeZone: 'Asia/Kolkata',
//   });
//   console.clear();
//   console.log('🕒 IST Time:', timeInKolkata);
// }, 1000);
// this will log timer

console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')

// Days left in year
const daysLeft = () => {
  const now = new Date();
  const end = new Date(now.getFullYear(), 11, 31);
  return Math.ceil((end - now) / (1000 * 60 * 60 * 24));
};

console.log('Days left in year:', daysLeft());

console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')

const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

console.log(rtf.format(-1, 'day'));    // "yesterday"
console.log(rtf.format(3, 'minute'));  // "in 3 minutes"

console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')

const drawCalendar = (year, month) => {
    const first = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    console.log('Sun Mon Tue Wed Thu Fri Sat');
    const pad = (n) => String(n).padStart(3);
    
    let str = ' '.repeat(first * 4);
    for (let d = 1; d <= daysInMonth; d++) {
        str += pad(d) + ' ';
        if ((d + first) % 7 === 0) str += '\n';
    }
    console.log(str);
};

drawCalendar(2025, 5); // June 2025

console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')

const d = new Date('1970-01-01T00:00:00Z');
console.log(d.getTime()); // 0 — The Unix Epoch
