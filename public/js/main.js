const cityNamee = document.getElementById("cityName"); 
const submitBtnn = document.getElementById("submitBtn");
const tempValuee = document.getElementById("tempValue");

const getInfo = async (event) => {
    event.preventDefault();
    const cityValue = cityNamee.value;
    if(cityValue === ""){
        alert("Pls Enter a City Name...");
    }
    else{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=b7b6da4127155891c07d624a22a8c476&units=metric`
            const response = await fetch(url);   
            const data = await response.json(); 
            console.log(data);
            const arrData = [data];
            tempValuee.innerText = "City : " + arrData[0].name +", " + arrData[0].sys.country + "  ||  Temperature : " + arrData[0].main.temp + "C";
            cityNamee.value=""; // input has value in it whereas <p>,<h1> has innerText in it.
            // console.log(cityNamee);

        } catch (error) {
            console.log(error);
        }
        
    }
    
}

submitBtnn.addEventListener("click",getInfo);
