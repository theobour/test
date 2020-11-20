  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "http://mockbin.org/bin/620a74b4-6a33-48a5-9ef4-ccab5db4ac0b", true);
  xhttp.send();
