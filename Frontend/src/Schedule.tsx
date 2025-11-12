import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import useCalendar from './useCalendar';

// function Schedule() {
//   const date1 = new Date("2025 12 29")
//   // console.log (date1);

//   const date2 = new Date();
//   date2.setFullYear(2025);
//   date2.setMonth(7);
//   date2.setDate(14);
//   // console.log(date2);

//   const date6 = new Date(2029, 10, 1);
//   const date7 = new Date(2029, 10, 9);
//   const diffdate = date6 - date7;
//   // console.log (diffdate / (1000 * 60 * 60 * 24));

//   const date8 = new Date();
//   date8.setDate(date8.getDate() + 7);
//   // console.log (date8);

//   const date9 = new Date();
//   // console.log (date9.toString());
//   // console.log(date9.toISOString());
//   // console.log (date9.toTimeString());
//   // console.log(date9.toLocaleDateString());

//   const date5 = new Date();
//   // console.log(date5.toLocaleDateString('fr-FR', {month: 'long'}))

//   const date = new Date();
//   console.log(new Intl.DateTimeFormat('en-US', {month: 'long', year: 'numeric'  }).format(date));

//   return (
//     <div>

//     </div>
//   );
// }
const Schedule: React.FC<{locale?: string}> = ({
  locale = navigator.language
}) => {

  const {year, month, weekdays, cells, isToday, startOfMonth, goNext, goPrev} = useCalendar(new Date(), locale);


  return <>
    Calendar
  </>
}

export default Schedule;
