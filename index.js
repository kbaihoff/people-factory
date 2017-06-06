const personForm = document.querySelector('form#personForm') // don't need first form
const more = document.querySelector('form#more')

function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target // should give us the object submitted (the form)
  const details = document.querySelector('#details')
  const name = f.personName.value
  const fcolor = f.faveColor.value

  details.innerHTML = `<em>${name}<em>`
  // Text content would take 'em' as part of the string, allows HTML to be put in the string

  const newTitle = "This page will be all about " + name
  document.querySelector('h1').style.color = fcolor
  document.querySelector('h1').textContent = newTitle // Changes heading 1
  
  if (fcolor != 'white' && fcolor != 'yellow') {
    document.querySelector('p.emptyPara').style.color = 'white' // Changes text color
  }
  document.querySelector('p.emptyPara').style.backgroundColor = fcolor // Changes border color
  // document.querySelector('p').style.alignContent = 'center'
  
  let newPara = name + " thinks that Xtern's logo should be " + fcolor + " instead because s/he loves it oh so much. Here are a couple things that are " + fcolor + ": "
  const array = {
    black: "charcoal, witches' cats, the night, most computer cords, TVs that are turned off, and lots of stuff during Halloween",
    blue: "the sky, blueberries, water, the Microsoft Edge logo, most jeans, sapphires, uranus, and a variety of birds that I don't know the names of",
    green: "grass, leaves, clovers, weeds, cacti, lettuce, cucumbers, pickles, celery, trees, and most other plants and bad-tasting vegetables",
    magenta: "This is way too similar to pink for there to be a separate list",
    pink: "cotton candy, flamingos, ham, jelly fish, tulips, Hello Kitty-themed stuff, roses, Valentine's Day decorations, and naked mole rats",
    purple: "amethysts, eggplants, grapes, irises, lilacs, sea urchins, plums, jelly, turnips, violets, the GitHub Desktop logo, Northwestern, Barney the dinosaur, and one of the Teletubbies",
    red: "cherries, strawberries, raspberries, tomatoes, cardinals, fire alarms, fire extinguishers, stop signs, and a lot of other stuff that have to do with safety...or impending doom",
    white: "paper, snow, sugar, flour, ghosts, clouds, and a ton of other stuff I can't currently think of",
    yellow: "higlighers, lemons, the centers of daisies, butter, corn, ducks, cheese, egg yolks, bees, honey, and various traffic signs that no one pays attention to",
  }
  newPara = newPara + (array[fcolor] || "Your color was not yet registered in the database")
  // console.log(array[fcolor])

  document.querySelector('p.emptyPara').textContent = newPara // Changes paragraph
  document.querySelector('form#more').style.display = 'block' // Make form 2 visible
}
function handleSubmit2(ev) {
  ev.preventDefault()
  const f = ev.target
  const school = f.school.value
  const state = f.homeState.value

  document.querySelector('h3').textContent = "Here is your mini biography:"
  const newPara = "Hello. My name is [still need to get name from previous form] and I am from " + state + ". I currently go to school at " + school + " in Indiana, which is a requirement to come to Xtern... I think. Anyway, yeah! Here is my second form!"

  document.querySelector('p.e2').textContent = newPara
}

personForm.addEventListener('submit', handleSubmit)
more.addEventListener('submit', handleSubmit2)