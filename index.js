const personForm = document.querySelector('form#personForm') // don't need first form

function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target // should give us the object submitted (the form)
  const name = f.personName.value
  const fcolor = f.faveColor.value

  const newTitle = name + "'s favorite color is " + fcolor
  document.querySelector('h1').textContent = newTitle // Changes heading 1

  const newPara = name + " thinks that Xterns logo should be " + fcolor + " instead"
  const x = document.querySelector('p.emptyPara')
  x.textContent = newPara // Changes paragraph
  x.style.color = 'white' // Changes text color
  x.style.backgroundColor = fcolor // Changes border color
}

personForm.addEventListener('submit', handleSubmit)