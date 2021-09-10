function getActivity() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
      document.getElementById("activity").textContent = data.activity
      document.getElementById("title").textContent = "🦾 HappyBot🦿"
      document.body.classList.add("fun")
      document.getElementById("get-activity").textContent = "Another??"
    })
}

function loading() {
      document.body.classList.remove("fun")  
    document.getElementById("activity").textContent = "DRUM ROLL PLEASE..."
    setTimeout(getActivity, 2000)
  
}

document.getElementById("get-activity").addEventListener("click", loading)