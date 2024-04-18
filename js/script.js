(() => {
  const form = document.querySelector('form')
  const input = document.querySelector('#input')
  const allOutput = document.querySelector('#all-output')
  const allOutputs = document.querySelectorAll('.output')

  allOutput.addEventListener('click', (e) => {
    allOutputs.forEach(output => {
      output.checked = e.target.checked
      if (e.target.checked) {
        output.disabled = true
      } else {
        output.disabled = false
      }
    })
  })

  allOutputs.forEach(output => {
    output.addEventListener('click', (e) => {
      if ([...allOutputs].every(output => output.checked)) {
        allOutput.checked = true
        allOutputs.forEach(output => output.disabled = true)
      } else {
        allOutput.checked = false
      }
    })
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    console.log(data)
  })

  form.addEventListener('reset', (e) => {
    console.log('Reset')
    form.reset()
    input.value = 'Cheese'
    setTimeout(() => {
      new mdb.Input(document.querySelector('#input').parentElement).init()
    })
  })
})()