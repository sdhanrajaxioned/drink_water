var remained = document.getElementById('remained');
var percentage = document.getElementById('percentage');
var litre = document.querySelector('.litre');
var cup = document.querySelectorAll('.cup');

update_glass();

cup.forEach(function(cup,idx) {
  cup.addEventListener('click', function() {
    highlightCup(idx);
  })
})

function highlightCup(idx) {
  if(cup[idx].classList.contains('full') && !cup[idx].nextElementSibling.classList.contains('full')){
    idx--
  }

  cup.forEach(function(cup, idx2) {
    if(idx2 <= idx){
      cup.classList.add('full')
    }
    else {
      cup.classList.remove('full')
    }
  })

  update_glass();
}

function update_glass() {
  var fullCups = document.querySelectorAll('.cup.full').length;
  var totalCups = cup.length

  if(fullCups === 0){
    percentage.style.visibility= "hidden";
    percentage.style.height= 0;
  }else {
    percentage.style.visibility= "visible";
    percentage.style.height = `${fullCups / totalCups * 330}px`
    percentage.innerText = `${fullCups / totalCups *100}%`
  }

  if(fullCups === totalCups){
    remained.style.visibility = 0;
    remained.style.height= 0;
  }else {
    remained.style.visibility = "visible";
    litre.innerText = `${2 - (250 * fullCups / 1000)} L`
  }
}