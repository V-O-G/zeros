module.exports = function getZerosCount(number) {
  var summands = [];
summands.push(Math.floor(number/10*2));
var i=2;
while (true){
    var devisor = Math.pow(5,i);
    summands.push(Math.floor(number/devisor));
    i++;
    if(number/devisor<1){break;}
}
var answer = summands.reduce(function(a, b) { return a + b; }, 0);
return answer;
}
