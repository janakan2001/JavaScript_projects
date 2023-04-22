
document.querySelector('#submit').addEventListener('click',()=>
{
    const update = ()=>
    {
        let dob = document.querySelector('#dob').value,
            day = new Date(dob),
            time = day.getTime(),
            today = new Date(),
            timenow = today.getTime(),
            val = timenow-time,

            sec = Math.floor(val/(1000)),
            min = Math.floor(val/(1000*60)),
            hour = Math.floor(val/(1000*60*60)),
            days = Math.floor(val/(1000*60*60*24)),
            weeks = Math.floor(val/(1000*60*60*24*7)),
            month = Math.floor(val/(1000*60*60*24*30.437)),
            year = Math.floor(val/(1000*60*60*24*365.25));

            let insert = function(x,y){
                document.querySelector(x).innerHTML = y;
            }
            insert("#year",year+"-Years");
            insert("#month",month+"-Months");
            insert("#week",weeks+"-Weeks");
            insert("#day",days+"-Days");
            insert("#hour",hour+"-Hours");
            insert("#min",min+"-Minutes");
            insert("#sec",sec+"-Seconds");
    }
    setInterval(update,1000)
    
    

})