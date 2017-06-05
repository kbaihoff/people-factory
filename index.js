const personForm = document.querySelector('form#personForm') // don't need first form

function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target // should give us the object submitted (the form)
  const name = f.personName.value
  // const color
  document.querySelector('h1').textContent = name // Changes heading 1
}

personForm.addEventListener('submit', handleSubmit)