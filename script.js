function calculateOdds() {
    //debugger; 

    let data, dataArray;
    let data2, dataArray2;
    let targetOdd, parsedTarget;
    let oddOccurrencies=0;
    let j = 0;
    let resultArray = [];

    data = document.getElementById('odds-cl-1').value;
    data = data.replace(/\s/g, '');
    dataArray = data.split(',');

    data2 = document.getElementById('odds-cl-2').value;
    data2 = data2.replace(/\s/g, '');
    dataArray2 = data2.split(',');

    targetOdd = document.getElementById('targetOdd').value;
    for (let i = 0; i < dataArray.length; i++) {
        for (let k = 0; k < dataArray2.length; k++) {
            resultArray[j] = parseInt(dataArray[i]) * parseInt(dataArray2[k]);

            console.log("Prodotto tra", dataArray[i], "e", dataArray2[k], ":", resultArray[j])
            
            parsedTarget= parseInt(targetOdd);
            if (resultArray[j] === parseInt(targetOdd)){
                oddOccurrencies++;
                alert("E' stata trovata una quota" + " (" + resultArray[j] + ") " + "corrispondente a quella desiderata" + " (" + targetOdd + ") data dal prodotto di " + dataArray[i] + " e " + dataArray2[k] + " .Corrispondenze: " + oddOccurrencies);
            }
            j++;
        }
    }

}
