const PeopleFactory = {
  // theForm: document.querySelector('form#personForm'),

  init: function(formSelector) { // Allow someone to select which form to pass
    const f = document.querySelector(formSelector)
    f.addEventListener('submit', this.handleSubmit.bind(this)) // The form is calling even listener which calls handle, so form is "this"
    // Not just "handleSubmit" because it is a property of PeopleFactory; this refers to this object
    // Changed name to theForm because we used personForm as an ID; automatically makes a global variable
    // Need to say this to refer to this object property: this.theForm.addEventListener('submit', this.handleSubmit)
  },
  
  // Make renderColor a property of the object; this is a "method" of the object
  renderColor: function(color) {
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = color
    colorDiv.style.width = '100px'
    colorDiv.style.height = '50px'
    return colorDiv
  }, // Need comma because it's another property

  // Make renderListItem a property of the object; this is a "method" of the object
  renderListItem: function(fieldName, value) {
    const li = document.createElement('li')
    const dt = document.createElement('dt')
    const dd = document.createElement('dd')
    dt.textContent = fieldName
    dd.innerHTML = value
    li.appendChild(dt)
    li.appendChild(dd)
    return li
  },

  // Make renderList a property of the object; this is a "method" of the object
  renderList: function(personData) {
    const list = document.createElement('dl')
    // Loop over ['name', 'favoriteColor', 'age']
    Object.keys(personData).map((fieldName) => {
      const li = this.renderListItem(fieldName, personData[fieldName])
      list.appendChild(li)
      // if you say list.appendChild(li).bind(this), the method is invoked with parameters, so you would be binding this to the return value of apppend
    })
    return list
  },

  handleSubmit: function(ev) {
    ev.preventDefault()
    const f = ev.target
    const details = document.querySelector('#details')
    
    //debugger

    const person = {
      name: f.personName.value,
      favoriteColor: this.renderColor(f.favoriteColor.value).outerHTML,
      age: f.age.value,
    }
    details.appendChild(this.renderList(person))
  },
}

PeopleFactory.init('form#personForm')



// PeopleFactory.personForm access the personForm from outside the object
// Equivalent to PeopleFactory['personForm']

// PeopleFactory.renderColor('cornflowerblue') calls the method
// Equivalent to PeopleFactory['renderColor']('blue')

// IIFE:wrap the entire code in an anonymous function, wrap that whole function in parentheses, then add () at the end to immediately invoke function; helps prevent making sure no global variables because it makes a new variable scope

// Could also wrap whole code in a block using {}

// this. doesn't depend on where in the code it is, it's how it's called