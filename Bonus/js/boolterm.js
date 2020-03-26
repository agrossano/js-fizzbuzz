/* boolterm v 0.1 */

var d, hours, minutes;

d = new Date();
hours = d.getHours();
minutes = d.getMinutes();
seconds = d.getSeconds();


document.getElementById('user').innerHTML = '[agrossano@me]' + document.title;
document.getElementById('time').innerHTML = hours + ":" + minutes + ":" + seconds;






