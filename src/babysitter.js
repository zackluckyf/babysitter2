var babysitter = {
    start: 2300,
    end: 230,
    bedtime: 2200
};
var earliestStartTime = 1700;
var latestEndTime = 400;
var midnight = 2400;

function calculateStart(babysitter) {
    return babysitter.start >= earliestStartTime || babysitter.start < latestEndTime;
};

function calculateEnd(babysitter) {
    return babysitter.end > earliestStartTime || babysitter.end <= latestEndTime;
};

function calculateBed(babysitter) {
    return babysitter.bedtime > earliestStartTime && babysitter.bedtime <= midnight;
};

function startBedCalculation(babysitter) {
    var firstShift = babysitter.bedtime - babysitter.start;
    firstShift > 0 ? firstShift : firstShift = 0;
    return Math.ceil(firstShift / 100);
};

function bedtimeMidnightCalculation(babysitter) {
    var secondShift;
    babysitter.start > babysitter.bedtime ? secondShift = midnight-babysitter.start : secondShift = midnight - babysitter.bedtime;
    return Math.ceil(secondShift / 100);
};

function midnightToEndCalculation(babysitter){
  var thirdShift = 0;
  if(babysitter.end < 401){
    babysitter.start < 400 ? thirdShift = babysitter.end - babysitter.start: thirdShift = babysitter.end;
  }
  return Math.ceil(thirdShift / 100);
};

function payBabysitter(babysitter) {
    console.log('Total pay before bedtime: ' + startBedCalculation(babysitter)*12);
    console.log('Total pay before midnight: ' + bedtimeMidnightCalculation(babysitter)*8);
    console.log('Total pay after midnight: ' + midnightToEndCalculation(babysitter)*16);
    var pay = startBedCalculation(babysitter)*12+bedtimeMidnightCalculation(babysitter)*8+midnightToEndCalculation(babysitter)*16;
    return pay;
};
