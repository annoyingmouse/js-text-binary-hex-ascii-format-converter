import {
  getTransitoryValue,
  textToBinary,
  textToHex,
  textToAscii,
  formatOutput
} from './functions.js'

(() => {
  const form = document.querySelector('form')
  const input = document.querySelector('#input')
  const output = document.querySelector('#output')
  const allOutput = document.querySelector('#all-output')
  const allOutputs = document.querySelectorAll('.output')

  allOutput.addEventListener('click', (e) => {
    allOutputs.forEach(output => {
      output.checked = e.target.checked
      output.disabled = !!e.target.checked;
    })
  })

  allOutputs.forEach(output => {
    output.addEventListener('click', () => {
      if ([...allOutputs].every(output => output.checked)) {
        allOutput.checked = true
        allOutputs.forEach(output => output.disabled = true)
      } else {
        allOutput.checked = false
      }
    })
  })

  form.addEventListener('submit',
    (e) => {
      e.preventDefault()
      let returnString = ''
      const formData = new FormData(form)
      const data = Object.fromEntries(formData.entries())
      data['output-type'] = formData.getAll('output-type')
      const transitoryValue = getTransitoryValue(data)

      if (data['output-type'].includes('text')) {
        returnString += formatOutput('Text', transitoryValue)
      }
      if (data['output-type'].includes('binary')) {
        returnString += formatOutput('Binary', textToBinary(transitoryValue))
      }
      if (data['output-type'].includes('hex')) {
        returnString += formatOutput('Hexadecimal', textToHex(transitoryValue))
      }
      if (data['output-type'].includes('ascii')) {
        returnString += formatOutput('Ascii', textToAscii(transitoryValue))
      }
      if (data['output-type'].includes('all') || data['output-type'].length === 0) {
        returnString += formatOutput('Text', transitoryValue)
        returnString += formatOutput('Binary', textToBinary(transitoryValue))
        returnString += formatOutput('Hexadecimal', textToHex(transitoryValue))
        returnString += formatOutput('Ascii', textToAscii(transitoryValue))
      }
      if (data['output-type'].length === 0) {
        allOutput.checked = true
        allOutputs.forEach(output => {
          output.checked = true
          output.disabled = true
        })
      }
      output.value = returnString
      setTimeout(() => {
        new mdb.Input(document.querySelector('#output').parentElement).init()
      })
    })

  form.addEventListener('reset', () => {
    form.reset()
    input.value = 'Cheese'
    setTimeout(() => {
      new mdb.Input(document.querySelector('#input').parentElement).init()
    })
    allOutputs.forEach(output => output.disabled = false)
  })
})()