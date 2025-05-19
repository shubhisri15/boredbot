const ideaBtn = document.getElementById("get-activity")

ideaBtn.addEventListener("click", function() {
  const params = new URLSearchParams({
    type: 'recreational'
  });
  
  fetch(`https://apis.scrimba.com/bored/api/activity?${params}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById("activity").textContent = data.activity
      document.getElementById("activity").classList.add("fun")
      ideaBtn.textContent = "Still bored"
    })
})