document.getElementById('calculate').addEventListener('click', function() {
    const numCycles = parseInt(document.getElementById('numCycles').value);
    const sleepTime = document.getElementById('sleepTime').value;

    if (!numCycles || !sleepTime) {
        alert('Please fill in all fields');
        return;
    }

    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '';

    let currentTime = sleepTime.split(':');
    let hours = parseInt(currentTime[0]);
    let minutes = parseInt(currentTime[1]);

    for (let i = 1; i <= numCycles; i++) {
        minutes += 90;
        if (minutes >= 60) {
            hours += Math.floor(minutes / 60);
            minutes = minutes % 60;
        }
        hours = hours % 24; // Wrap around if hours exceed 24

        const newTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        resultContainer.innerHTML += `<p>Cycle ${i} = ${newTime}</p>`;
    }
});

