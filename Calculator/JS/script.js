console.log("Welcome to My Calculator");
const str = document.getElementById("str");
const buttons = document.querySelectorAll("button");
let strValue = "";

for (let element of buttons) {
  element.addEventListener("click", (e) => {
    let buttontext = e.target.innerText;

    if (buttontext == "AC") {
      strValue = "";
      str.value = "";
    } else if (buttontext == "C") {
      strValue = strValue.slice(0, -1);
      str.value = str.value.slice(0, -1);
    } else if (buttontext == "=") {
      
      try {
        str.value = eval(strValue);
        strValue = eval(strValue);
      } catch (error) {
        strValue = "";
        str.value = "Invalid Expression";
      }
    } else if (buttontext == "X") {
      strValue += "*";
      str.value += buttontext;
    }
    else if (buttontext == "÷") {
      strValue += "/";
      str.value += buttontext;
    } 
    else if (buttontext == "%") {
      strValue += "/100";
      str.value += buttontext;
    } 
    else {
      strValue += buttontext;
      str.value += buttontext;
    }
  });
}
