function stringTimeDiff(startTime, stopTime) {

    workStart = startTime.split(":");
    workStop = stopTime.split(":");

    let startDate = new Date("2020","09","17",workStart[0],workStart[1]);
    console.log(startDate);

    let stopDate = new Date("2020","09","17",workStop[0],workStop[1]);
    console.log(stopDate);

    let workTime = stopDate - startDate;

    console.log(workTime);

    console.log("sekuntteja " + workTime/1000);
    console.log("minuutteja " + workTime/1000/60);
    console.log("tunteja " + Math.floor(workTime/1000/60/60));

    let h = Math.floor(workTime/1000/60/60).toString();
    let m = ((workTime/1000/60)-h*60).toString();

    h = h.padStart(2, '0')
    m = m.padStart(2, '0')

    let result = h + ":" + m;
    
    return result;
}

