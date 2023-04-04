
window.addEventListener('load', ()=> {

    setEndTime();

    document.addEventListener("change", (e) => {
        setEndTime();
        calculateTime();
    });
})


function getPersons() {
    let value = document.querySelector('input[name="people"]:checked').value;
    return parseInt(value)
}

function getPPM() {
    let value = document.querySelector('input[name="ppm"]:checked').value;
    return parseInt(value)
}

function setEndTime() {
    let date = moment();
    let endTime = document.getElementById('end');
    endTime.value = date.format("HH:mm");
}


function calculateTime() {
    const ppm = getPPM();
    const persons = getPersons();
    const startInput = document.getElementById('start').value
    const startTime = moment(startInput, "HH:mm");
    const endInput = document.getElementById('end').value
    const endTime = moment(endInput, "HH:mm");

    const hoursText = document.getElementById('hrs');
    const priceText = document.getElementById("price");

    let duration = 0;
    let price = 0;
    const roundTo = 15;
    duration = endTime.diff(startTime, "minutes");

    if (duration > 0) {

        if(duration % roundTo != 0) {
            duration = duration + (roundTo - (duration % roundTo))
        }
        hoursText.innerHTML = `${(duration/60).toFixed(2)} hours`

        price = duration * ppm * persons;
        priceText.innerHTML = `$${(price/10).toFixed(2)}`
    }
    else if(duration == 0) {
        hoursText.innerHTML = "0.00 hours"
        priceText.innerHTML = "$0.00"
    }
    else {
        hoursText.innerHTML = "Time Entry Error"
        priceText.innerHTML = "Error de entrada de tiempo"
    }
    
}