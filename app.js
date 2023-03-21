function onPageLoad() {
    getDate();
    getTemp();
}

function getDate() {
    const date = new Date().toLocaleDateString('en-us', { 
        weekday:"long", 
        year:"numeric", 
        month:"short", 
        day:"numeric"
    });
    const today = document.querySelector('.date');
    today.textContent = date;
}

async function getTemp() {
    const tempEl = document.querySelector('.temp');

    tempEl.textContent = await getTempText();
}

async function getTempText() {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=40.39&longitude=-111.85&hourly=temperature_2m&temperature_unit=fahrenheit'
    const response = await fetch(url)
    const data = await response.json();

    console.log('data', data);
    return data.hourly["temperature_2m"][0] + 'degrees F';
}

window.onload = onPageLoad;