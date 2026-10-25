function upDate(previewPic) {
  // 1. Log to check that the event is triggering
  console.log("Event triggered");
  
  // 2. Log the alt and source of the previewPic variable
  console.log("Alt text:", previewPic.alt);
  console.log("Source URL:", previewPic.src);
  
  // 3 & 4. Change the text of the element with the id of 'image'
  document.getElementById('image').innerHTML = previewPic.alt;
  
  // 5 & 6. Change the background image of the element with the id of 'image'
  // Note: CSS background-image requires the url('...') syntax
  document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
  // 1. Update the background image back to the original value of an empty string
  document.getElementById('image').style.backgroundImage = "url('')";
  
  // 2. Update the text back to the original text (hardcoded as requested)
  document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}