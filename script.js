
          // function updateClock(){
          //       var now = new Date();
          //       var dname = now.getDay(),
          //       mo = now.getMonth(),
          //       dnum = now.getDate(),
          //       yr = now.getFullYear(),
          //       hou = now.getHours(),
          //       min = now.getMinutes(),
          //       sec = now.getSeconds(),
          //       pe = "AM";
            

          //       var months = ["January", "february" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];


          //       var week = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];

          //       var ids = ["dayname","month" , "daynum" , "year" , "hour" , "minutes" , "seconds" , "period"];

          //       var values = [dname , mo ,dnum , yr , hou , min , sec , pe];

          //       for(var i = 0 ; i < ids.length ; i++)
          //        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
                
 
          //   }
          //        function initClock(){
          //        updateClock();
          //        window.setInterval("updateClock()" , 1);
          //   }






          //   <script type="text/javascript">
            function updateclock(){
                var now = new Date();
                var dname = now.getDay(),
                mo = now.getMonth(),
                dnum = now.getDate(),
                yr = now.getFullYear(),
                hou = now.getHours(),
                min = now.getMinutes(),
                sec = now.getSeconds()
                pe = "AM";
                console.log(new Date());

                var months = ["January", "february" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];

                var week = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];

                var ids = ["dayname","month" , "daynum" , "year" , "hour" , "minute" , "second" , "period"];

                var values = [dname , mo ,dnum , yr , hou , min , sec, pe];

                for(var i = 0 ; i < ids.length ; i++)
                {
                    if(i===0)
                    {document.getElementById(ids[i]).firstChild.nodeValue = week[values[i]];}
                    else if(i===1)
                    {document.getElementById(ids[i]).firstChild.nodeValue = months[values[i]];}
                    else
                    {document.getElementById(ids[i]).firstChild.nodeValue = values[i];}
                }
            }
            function up(){
            setInterval(()=>{
            updateclock();
            },1000)}
            up();
     //    </script>