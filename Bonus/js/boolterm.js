/* boolterm v 0.1 */

var d, hours, minutes;

d = new Date();
hours = d.getHours();
minutes = d.getMinutes();
seconds = d.getSeconds()

document.getElementById('user').innerHTML = '[agrossano@me] Fully AutomatedFizzBuzz';
document.getElementById('time').innerHTML = hours + ":" + minutes + ":" + seconds;



