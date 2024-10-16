var life = document.getElementById('lifeExpectancy').value;
var age = 1;

function deathclock() {
	age = document.getElementById('age').value;
  life = document.getElementById('lifeExpectancy').value;
  age = parseInt(age);
  life = parseInt(life);
  if (age > 120 ) {age = 120; $("#age").val(age);}
  if (age > life) {life = age; $("#lifeExpectancy").val(life);}
	document.getElementById('lifespan').innerHTML = "";
	for(x=1; x<=life; x++) {
	    var year = document.createElement('div');
	    if (x<=age) {year.className = "lived"} else {year.className = "left";}
	    document.getElementById('lifespan').appendChild(year);
	}
  if (age>0) {
    legend = document.getElementById('legend');
    lived = Math.ceil(age/life*1000) / 10;
    legend.innerHTML = "You have lived <b>" + lived + "%</b> of your life.<div class='key'><div class='legend lived'></div> &middot; Year lived<br clear='all'/><div class='legend left'></div> &middot; Year left</div>";
    
      ;
    
  }
}
deathclock();