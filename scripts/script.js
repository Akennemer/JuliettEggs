$(document).ready(function () {
  // alert("page is ready");
  console.log("doc is ready");})

// Submit button and logging to the console
$('#submitButton').click(function() {
  console.log("clicked");})

// this hides the image containing the bad UI
  function disappearingEgg() {
    var x = document.getElementById("egg-special");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };