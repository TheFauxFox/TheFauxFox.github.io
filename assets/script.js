window.onload = () => {
  Object.values(document.getElementsByClassName("checkbox")).forEach((el) => {
    el.addEventListener("click", (evt) => {
      targetClasses = evt.target.classList;
      if (targetClasses.contains("checked")) {
        window[evt.target.attributes.name.value] = false;
        targetClasses.remove("checked");
        targetClasses.add("unchecked");
      } else {
        window[evt.target.attributes.name.value] = true;
        targetClasses.remove("unchecked");
        targetClasses.add("checked");
      }
    });
    window[el.attributes.name.value] = el.classList.contains("checked");
  });
};

const onEnter = (ele, cb) => {
  ele.onkeyup = (evt) => {
    if (evt.key === "Enter") {
      cb();
    }
  };
}