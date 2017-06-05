const personForm = document.querySelector('form#personForm') // don't need first form

function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target // should give us the object submitted (the form)
  const name = f.personName.value
  const fcolor = f.faveColor.value

  const newTitle = name + "'s favorite color is " + fcolor
  document.querySelector('h1').textContent = newTitle // Changes heading 1

  const x = document.querySelector('p.emptyPara')  
  if (fcolor != 'white' && fcolor != 'yellow') {
    x.style.color = 'white' // Changes text color
  }
  x.style.backgroundColor = fcolor // Changes border color
  
  let newPara = name + " thinks that Xtern's logo should be " + fcolor + " instead because s/he loves it oh so much. Here are a couple things that are " + fcolor + ": "
  const array = {
    black: "charcoal, witches' cats, the night, most computer cords, TVs that are turned off, and lots of stuff during Halloween",
    blue: "the sky, blueberries, water, the Microsoft Edge logo, most jeans, sapphires, uranus, and a variety of birds that I don't know the names of",
    green: "grass, leaves, clovers, weeds, cacti, lettuce, cucumbers, pickles, celery, trees, and most other plants and bad-tasting vegetables",
    pink: "cotton candy, flamingos, ham, jelly fish, tulips, Hello Kitty-themed stuff, roses, Valentine's Day decorations, and naked mole rats",
    red: "cherries, strawberries, raspberries, tomatoes, cardinals, fire alarms, fire extinguishers, stop signs, and a lot of other stuff that have to do with safety...or impending doom",
    white: "paper, snow, sugar, flour, ghosts, clouds, and other stuff I can't currently think of",
    yellow: "higlighers, lemons, the centers of daisies, butter, corn, ducks, cheese, egg yolks, bees, honey, and various traffic signs that no one pays attention to",
  }
  newPara = newPara + (array[fcolor] || "Your color was not yet registered in the database")
  // console.log(array[fcolor])

  x.textContent = newPara // Changes paragraph
}

personForm.addEventListener('submit', handleSubmit)