function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  let rankings = document.getElementById("app").querySelectorAll('ul.ranked-list li')
  for (var i = 0; i < rankings.length; i++){
    rankings[i].textContent = (parseInt(rankings[i].textContent) + n).toString()
  }
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div')
}
