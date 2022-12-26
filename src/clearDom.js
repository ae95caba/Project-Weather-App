function clearDom() {
  const contentChildreen = document.querySelectorAll("#content > div");
  contentChildreen.forEach((child) => {
    child.innerHTML = "";
  });
}

export default clearDom;
