// Initialize search plugin
// const search = new Filter("search", "data-caption");

//Self written search/content filter function
function search() {
  let userInput = document.getElementById("search").value; //get userinput
  userInput = userInput.toLowerCase(); //convert userinput to lowercase
  let images = document.querySelectorAll("a"); //get all anchor tags

  //loop through all anchor tags
  for (let i = 0; i < images.length; i++) {
    //display images if userinput is inluded in an images data-caption
    //if it is NOT then do not display
    if (images[i].getAttribute("data-caption").toLowerCase().includes(userInput)) {
      images[i].style.display = "block";
    } else {
      images[i].style.display = "none";
    }
  }
}

// Initialize baguette box
baguetteBox.run(".gallery", {});
