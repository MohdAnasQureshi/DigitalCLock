
let date = new Date();
let h = date.getHours();
let s = date.getSeconds();
let m = date.getMinutes();
ampm = "AM";
let day = date.getDay();
let month = date.getMonth();
let year = date.getUTCFullYear();
   if(h>12){
    h = h - 12;
    ampm = "PM"
   }
   if(h===0)(
    h=12
   )
  h = h<10 ? "0" + h : h;
  s = s<10 ? "0" + s : s;
  m = m<10 ? "0" + m : m;
  document.getElementById('hour').innerHTML=h;
  document.getElementById('minute').innerHTML=m;
  document.getElementById('second').innerHTML=s;
  document.getElementById('ampm').innerHTML=ampm;
   
  switch (day) {
    case 0: day = "Sun"
        
        break;
    case 1: day = "Mon"
        
        break;
    case 2: day = "Tue"
        
        break;
    case 3: day = "Wed"
        
        break;
    case 4: day = "Thu"
        
        break;
    case 5: day = "Fri"
        
        break;
    case 6: day = "Sat"
        
        break;
  
    default: day = "Sorry";
        break;
  }

  switch (month) {
    case 0: month = "Jan"
        
        break;
    case 1: month = "Feb"
        
        break;
    case 2: month = "Mar"
        
        break;
    case 3: month = "Apr"
        
        break;
    case 4: month = "May"
        
        break;
    case 5: month = "Jun"
        
        break;
    case 6: month = "Jul"
        
        break;
    case 7: month = "Aug"
        
        break;
    case 8: month = "Sep"
        
        break;
    case 9: month = "Oct"
        
        break;
    case 10: month = "Nov"
        
        break;
    case 11: month = "Dec"
        
        break;
  
    default: month = "Sorry"
        break;
  }

  document.getElementsByClassName('day')[0].innerHTML=day;
  document.getElementsByClassName('month')[0].innerHTML=month;
  document.getElementsByClassName('year')[0].innerHTML=year;
 



setInterval(() => {
let date = new Date();
let h = date.getHours();
let s = date.getSeconds();
let m = date.getMinutes();
ampm = "AM";
let day = date.getDay();
let month = date.getMonth();
let year = date.getUTCFullYear();
   if(h>12){
    h = h - 12;
    ampm = "PM"
   }
   if(h===0)(
    h=12
   )
  h = h<10 ? "0" + h : h;
  s = s<10 ? "0" + s : s;
  m = m<10 ? "0" + m : m;
  document.getElementById('hour').innerHTML=h;
  document.getElementById('minute').innerHTML=m;
  document.getElementById('second').innerHTML=s;
  document.getElementById('ampm').innerHTML=ampm;
   
  switch (day) {
    case 0: day = "Sun"
        
        break;
    case 1: day = "Mon"
        
        break;
    case 2: day = "Tue"
        
        break;
    case 3: day = "Wed"
        
        break;
    case 4: day = "Thu"
        
        break;
    case 5: day = "Fri"
        
        break;
    case 6: day = "Sat"
        
        break;
  
    default: day = "Sorry";
        break;
  }

  switch (month) {
    case 0: month = "Jan"
        
        break;
    case 1: month = "Feb"
        
        break;
    case 2: month = "Mar"
        
        break;
    case 3: month = "Apr"
        
        break;
    case 4: month = "May"
        
        break;
    case 5: month = "Jun"
        
        break;
    case 6: month = "Jul"
        
        break;
    case 7: month = "Aug"
        
        break;
    case 8: month = "Sep"
        
        break;
    case 9: month = "Oct"
        
        break;
    case 10: month = "Nov"
        
        break;
    case 11: month = "Dec"
        
        break;
  
    default: month = "Sorry"
        break;
  }

  document.getElementsByClassName('day')[0].innerHTML=day;
  document.getElementsByClassName('month')[0].innerHTML=month;
  document.getElementsByClassName('year')[0].innerHTML=year;
 
    
}, 1000);

