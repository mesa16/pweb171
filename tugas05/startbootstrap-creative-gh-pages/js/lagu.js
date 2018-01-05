counter = {
      'pelangi1':0,
      'balonku1':0,
      'naikkeretaapi1':0,
      'cicak1':0
    }

    function tampillagu(id){
      $(".bloklagu").hide();
      $('#'+id).show();

      counter[id]++;
      $('#c'+id).html(counter[id]);
      document.getElementById("info").style.display="none"
      document.getElementById("copyright").style.marginTop="0px";
    }

    window.onload = setInterval(clock,1000);

function clock()
{
  var d = new Date();

  var date = d.getDate();

  var month = d.getMonth();
  var montharr =["Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
  month=montharr[month];

  var year = d.getFullYear();

  var day = d.getDay();
  var dayarr =["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
  day=dayarr[day];

  var hour =d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();

  document.getElementById("date").innerHTML=day+" "+date+" "+month+" "+year;
  document.getElementById("time").innerHTML=hour+":"+min+":"+sec;
}
