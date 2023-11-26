function counting() {
  document.getElementById("result").innerHTML=""

    let from = +document.getElementById("from").value;
    let to = +document.getElementById("to").value;
    let difference = +document.getElementById("difference").value;
  
    for (let i = from; i <= to; i += difference) {
      let output = document.getElementById("result");
      output.innerHTML+=`${i} ,`
    }
  }