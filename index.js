const p = document.querySelector("p");
const font = document.querySelector("#font");
const color = document.querySelector("#color");
const size = document.querySelector("#size");

// display the choises on page
//first check for storage
if(localStorage.theme) {
  // console.log(Object.keys(JSON.parse(localStorage.theme)).length)
  let deserialization = JSON.parse(localStorage.theme);
  // use the property if exist or use the default value on selecetd option html element=
  if(deserialization.hasOwnProperty("color")) {
    let storageColor = deserialization["color"];
    p.style.color = storageColor;
  color.querySelector(`[value="${storageColor}"]`).setAttribute("selected", "true");
  }

   if(deserialization.hasOwnProperty("fontSize")) {
    let storageFontSize = deserialization["fontSize"];
    p.style.fontSize = `${storageFontSize}px`;
    // console.log(`${storageFontSize}`)
    size.querySelector(`[value="${storageFontSize}"]`).setAttribute("selected", "true");
    // console.log(size.querySelector(`[value=${parseInt(stosragefontSize)}]`))
  }

  if(deserialization.hasOwnProperty("fontFamily")) {
    let storagefontFamily = deserialization["fontFamily"];
    p.style.fontFamily = storagefontFamily;
  font.querySelector(`[value="${storagefontFamily}"]`).setAttribute("selected", "true");
  }
  // let fontSize = (deserialization.hasOwnProperty("fontSize") ? deserialization["fontSize"] : font.value) + "px";
  // let fontFamily = deserialization.hasOwnProperty("fontFamily") ? deserialization["fontFamily"] : size.value;

  // p.style.fontSize = fontSize
  // p.style.fontFamily = fontFamily;
} else {
  // in case there is no storge at all
  p.style.cssText = `font-family: ${font.value}; color: ${color.value}; font-size: ${size.value}px`;
}

// add event to listen to change in selection option
// then display it on screen
// add it to the local storage
document.addEventListener("change", e => {
  let selectedValue = e.target.value;
  let newTheme = typeof localStorage.theme !== "undefined" ? JSON.parse(localStorage.theme) : {};
  if(e.target.name === "font") {
    p.style.fontFamily = selectedValue;
    newTheme["fontFamily"] = selectedValue;
  } else if(e.target.name === "color") {
    p.style.color = selectedValue;
    newTheme["color"] = selectedValue;
  } else if (e.target.name === "size") {
    p.style.fontSize = `${selectedValue}px`;
    newTheme["fontSize"] = selectedValue;
  }
  localStorage.theme = JSON.stringify(newTheme);
})
