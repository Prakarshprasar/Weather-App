//background image move code
// let body=document.getElementById("#body");
document.body.style.backgroundImage="url('https://www.whoa.in/download/natural-greenary-and-waterfall-hd-wallpaper')"
// let a=0;
// let bgarr=[
// "url('https://www.hdnicewallpapers.com/Walls/Big/Nature%20and%20Landscape/Beautiful_Nature_Background_Wallpapers.jpg')",
// "url('https://wallpaperaccess.com/full/1163661.jpg')",
// "url('https://wallpaperaccess.com/full/1540001.jpg')",
// "url('https://wallpaperaccess.com/full/1540005.jpg')",
// "url('https://free4kwallpapers.com/uploads/originals/2015/07/16/nice-beach-suning-weather-hd-wallapaper.jpg')",
// "url('https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')",
// // "url('')",
// "url('https://www.whoa.in/download/natural-greenary-and-waterfall-hd-wallpaper')",]

// setInterval(function(){
//     if(a==bgarr.length){
//         a=0;
//     }
// document.body.style.backgroundImage=bgarr[a];
// a++;
// },7000)


livelocation()

//live location code
function livelocation(){
    navigator.geolocation.getCurrentPosition(success);

    function success(position) {
        let crd = position.coords;
    
        console.log("Your current position is:");
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
    
        getDataLocation(crd.latitude, crd.longitude);
        forecast(crd.latitude,crd.longitude)
    }   
    function getDataLocation(lat,lon){

        
        let url2=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1b3b62ddf70b439578a98e435ece5f00`;
        fetch(url2)
        .then(function(res){
            return res.json()
        }).then(function(res){
            // forecast(res.coord.lat,res.coord.lon);
            append2(res)
            // console.log(res.name)
            // console.log(res)
        })
    
        function append2(res){
            let map=document.getElementById("gmap_canvas")
            let city=res.name;
            // console.log(city)
            let name=document.createElement("p");
            name.innerText="Current City: "+city
            
            let mintemp=document.createElement("p");
            let degree=document.createElement("sup");
            degree.innerText="o"
            mintemp.innerText="Min Temperature: "+Math.floor(res.main.temp_min-273);
            mintemp.append(degree)
            let degree1=document.createElement("sup");
            degree1.innerText="o"
            let maxtemp=document.createElement("p");
            maxtemp.innerText="Max Temperature: "+Math.floor(res.main.temp_max-273);
            maxtemp.append(degree1)
            let windspeed=document.createElement("p");
            windspeed.innerText=+"Wind Speed: "+res.wind.speed
            let winddegree=document.createElement("p");
            winddegree.innerText="Wind degree: "+res.wind.deg;
            let clouds=document.createElement("p");
            clouds.innerText="Clouds: "+res.clouds.all;
            let humidity=document.createElement("p");
            humidity.innerText="Humidity: "+res.main.humidity
    
    
            // let sunrisediv=document.createElement("div");
    
            // let sunriseimg=document.createElement("img");
            // sunriseimg.src="https://images.unsplash.com/photo-1563738068154-8d2e9f19ed62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2glMjBzdW5yaXNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            // let sunrise=document.createElement("p");
            // sunrise.innerText=" : "+res.sys.sunrise;
            // sunrisediv.append(sunriseimg,sunrise)
    
            // let sunsetdiv=document.createElement("div");
    
            // let sunsetimg=document.createElement("img");
            // sunsetimg.src="https://cdn.pixabay.com/photo/2016/09/07/11/37/sunset-1651426__340.jpg"
            // let sunset=document.createElement("p");
            // sunset.innerText=" : "+res.sys.sunset;
            // sunsetdiv.append(sunsetimg,sunset)
            
            
    
            document.getElementById("detail").append(name,mintemp,maxtemp,winddegree,winddegree,clouds,humidity)
            map.src=`https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    
            // if(res.weather[0].main=="Rain"){
            //     ocument.body.style.backgroundImage="url('https://w0.peakpx.com/wallpaper/119/481/HD-wallpaper-rainy-day.jpg')"
                
            // }else if(res.weather[0].main=="Clouds"){
            //     document.body.style.backgroundImage="url('https://www.whoa.in/download/natural-greenary-and-waterfall-hd-wallpaper')"
            // }else{
            //     d
            //     document.body.style.backgroundImage="url('https://c4.wallpaperflare.com/wallpaper/250/412/54/sunny-summer-day-wallpaper-preview.jpg')"
            // }
    
            
            
            // forecast(lat,lon)
    
    
        }
    
        
    }
}


//heading code

let head=document.querySelector("#head");
let headstr="WeatherJaano From Prakarsh Prasar    "
// let colorarr=["OrangeRed","Orange","Coral","Teal","SpringGreen","Tomato"]

let i=0;
// let j=0;
let bag="";
setInterval(function(){
    if(i==headstr.length){
        
        bag=""
        i=0;
    }
    // if(j==colorarr.length){
    //     j=0;
    // }
    bag=bag+headstr[i];
    head.innerText=bag;
    head.style.color="Wheat"
    i++;
    // j++;
    
},200)

//onclick button code

document.querySelector("#btn").addEventListener("click",myFunction,forecast);

    

    function myFunction(){
        // window.location.reload();
        document.getElementById("detail").innerHTML=null;
        let city = document.getElementById("inp").value;
        const url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=1b3b62ddf70b439578a98e435ece5f00"
        fetch(url)
        .then(function(res){
            return res.json()
        })
        .then(function(res){
            // console.log("res:"+res)
            append(res)
        })
        .catch(function(err){
            console.log('err:', err)
        })

        function append(res){
            // console.log('res:', res)
            let map=document.getElementById("gmap_canvas")
            let city=res.name;
            // console.log(city)
            let name=document.createElement("p");
            name.innerText="City Name: "+city
            
            
            let mintemp=document.createElement("p");
            let degree=document.createElement("sup");
            degree.innerText="o"
            mintemp.innerText="Min Temperature: "+Math.floor(res.main.temp_min-273);
            mintemp.append(degree)
            let degree1=document.createElement("sup");
            degree1.innerText="o"
            let maxtemp=document.createElement("p");
            maxtemp.innerText="Max Temperature: "+Math.floor(res.main.temp_max-273);
            maxtemp.append(degree1)
            let windspeed=document.createElement("p");
            windspeed.innerText=+"Wind Speed: "+res.wind.speed
            let winddegree=document.createElement("p");
            winddegree.innerText="Wind degree: "+res.wind.deg;
            let clouds=document.createElement("p");
            clouds.innerText="Clouds: "+res.clouds.all;
            let humidity=document.createElement("p");
            humidity.innerText="Humidity: "+res.main.humidity

            // let sunrisediv=document.createElement("div");

            // let sunriseimg=document.createElement("img");
            // sunriseimg.src="https://images.unsplash.com/photo-1563738068154-8d2e9f19ed62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2glMjBzdW5yaXNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            // let sunrise=document.createElement("p");
            // sunrise.innerText=" : "+res.sys.sunrise;
            // sunrisediv.append(sunriseimg,sunrise)

            // let sunsetdiv=document.createElement("div");

            // let sunsetimg=document.createElement("img");
            // sunsetimg.src="https://cdn.pixabay.com/photo/2016/09/07/11/37/sunset-1651426__340.jpg"
            // let sunset=document.createElement("p");
            // sunset.innerText=" : "+res.sys.sunset;
            // sunsetdiv.append(sunsetimg,sunset)
            
            

            document.getElementById("detail").append(name,mintemp,maxtemp,winddegree,winddegree,clouds,humidity)
            map.src=`https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`

            // if(res.weather[0].main=="Rain"){
            //     document.body.style.backgroundImage="url('https://w0.peakpx.com/wallpaper/119/481/HD-wallpaper-rainy-day.jpg')"
                
            // }else if(res.weather[0].main=="Clouds"){
            //     document.body.style.backgroundImage="url('https://www.whoa.in/download/natural-greenary-and-waterfall-hd-wallpaper')"
            // }else{
                
            //     document.body.style.backgroundImage="url('https://c4.wallpaperflare.com/wallpaper/250/412/54/sunny-summer-day-wallpaper-preview.jpg')"
            // }

            let long=res.coord.lon;
            let lati=res.coord.lat;
            forecast(lati,long)


        }

        
        }

        //7 day forecast code


        function forecast(lati,long){

            document.getElementById("forecast").innerHTML=null;

            let url1=`https://api.openweathermap.org/data/2.5/onecall?lat=${lati}&lon=${long}&appid=1b3b62ddf70b439578a98e435ece5f00`
            fetch(url1)
            .then(function(res){
            return res.json()
            })
            .then(function(res){
                console.log(res.daily)
                appendforecast(res.daily)
            })
            .catch(function(err){
                console.log('err:', err)
            })

            function appendforecast(daily){
                let i=0;
                daily.forEach(function(elem,index){
                    let div=document.createElement("div");

                    
                    // let arr=["Sat","Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

                    // let day=document.createElement("h3");
                    // day.innerText=arr[i];
                    // i++;
                    let img=document.createElement("img");
                    if(elem.weather[0].main=="Clear"){
                        img.src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
                    }else if(elem.weather[0].main=="Clouds"){
                        img.src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
                    }else{
                        img.src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
                    }

                    let degree1=document.createElement("sup");
                    degree1.innerText="o"
                    let max=document.createElement("p");
                    let maxcelcius=Math.floor(elem.temp.max-273);
                    max.innerText=maxcelcius
                    max.style.fontWeight="bold"
                    max.append(degree1)


                    let degree2=document.createElement("sup");
                    degree2.innerText="o"
                    let min=document.createElement("p");
                    let mincelcius= Math.floor(elem.temp.min-273);
                    min.innerText=mincelcius
                    min.append(degree2)

                    div.append(img,max,min)

                    document.getElementById("forecast").append(div)




                })
                
            }
        }