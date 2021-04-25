
const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');

const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal===""){
        city_name.innerText = `Plz write the name before search`;
        datahide.classList.add('data_hide');
    }else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=7c3a0da708c44faad05f146583b6c55a`;
            const response = await fetch(url);

            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerHTML = `${arrData[0].main.temp} <sup>0</sup> C`;
            // temp_status.innerText = arrData[0].weather[0].main;
            console.log(data);

            const tempMood = arrData[0].weather[0].main;

            // condition to check sunny or cloudy
            if(tempMood=="Clear"){
                temp_status.innerHTML="<i class='fas fa-sun' sytle='color:#eccc68'></i>";
            }else if(tempMood=="Clouds"){
                temp_status.innerHTML="<i class='fas fa-cloud' sytle='color:#f1f2f6'></i>";
            }else if(tempMood=="Rain"){
                temp_status.innerHTML="<i class='fas fa-rain' sytle='color:#a4b0be'></i>";
            }else{
                temp_status.innerHTML="<i class='fas fa-cloud' sytle='color:#f1f2f6'></i>";
            }
            datahide.classList.remove('data_hide');


        }catch{
            city_name.innerText = `Plz write the city name properly`;
            datahide.classList.add('data_hide');

        }
    }
    
    // alert("submit");
}

submitBtn.addEventListener('click', getInfo);