const personForm = document.querySelector('form#personForm') // don't need first form

function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target // should give us the object submitted (the form)
  const name = f.personName.value
  const color = f.faveColor.value
  const newTitle = name + "'s favorite color is " + color;
  document.querySelector('h1').textContent = newTitle // Changes heading 1
}

personForm.addEventListener('submit', handleSubmit)