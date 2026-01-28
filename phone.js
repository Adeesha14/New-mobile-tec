function toggleSidebar() {
  var sidebar = document.getElementById("sideget");
  if (sidebar.style.display === "block") {
    sidebar.style.display = "none";
  } else {
    sidebar.style.display = "block";
  }

  document.getElementById("close").style.display = "none";
}
function searchFunction() {
  let input = document.getElementById('search-phone');
  let filter = input.value.toUpperCase();
  let ul = document.getElementById("suggestions-list");
  let li = ul.getElementsByTagName('li');

  
  if (input.value.length > 0) {
    ul.style.display = "block"; 
  } else {
    ul.style.display = "none";  
  }

  
  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    let txtValue = a.textContent || a.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
