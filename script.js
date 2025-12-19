function route(){
 const t=document.getElementById('type').value;
 const b=document.getElementById('budget').value;
 const time=document.getElementById('time').value;
 const msg=`AYA, ACTIVATE. Тип:${t} | Бюджет:${b} | Срок:${time}. Искам AYA Travel Blueprint.`;
 document.getElementById('out').textContent=msg;
 document.getElementById('wa').href='https://wa.me/?text='+encodeURIComponent(msg);
}
