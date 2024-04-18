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

  const binaryToText = input => input.split(' ').map(char => String.fromCharCode(parseInt(char, 2))).join('')

  const hexToText = input => input.split(' ').map(char => String.fromCharCode(parseInt(char, 16))).join('')

  const asciiToText = input => input.split(' ').map(char => String.fromCharCode(parseInt(char))).join('')

  const textToBinary = input => input.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' ').trim()

  const textToHex = input => input.split('').map(char => char.charCodeAt(0).toString(16).padStart(2, '0')).join(' ').trim()

  const textToAscii = input => input.split('').map(char => char.charCodeAt(0) + ' ').join('').trim()

  const formatOutput = (text, value) => `${text}:\r\n${value}\r\n`

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    let transitoryValue
    let returnString = ''
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    switch (data.inlineRadioOptions) {
      case 'binary':
        transitoryValue = binaryToText(data.input)
        break
      case 'hex':
        transitoryValue = hexToText(data.input)
        break
      case 'ascii':
        transitoryValue = asciiToText(data.input)
        break
      default:
        transitoryValue = data.input
    }

    switch (true) {
      case data.text === 'text':
        returnString += formatOutput('Text', transitoryValue)
        break
      case data.binary === 'binary':
        returnString += formatOutput('Binary', textToBinary(transitoryValue))
        break
      case data.hex === 'hex':
        returnString += formatOutput('Hexadecimal', textToHex(transitoryValue))
        break
      case data.ascii === 'ascii':
        returnString += formatOutput('Ascii', textToAscii(transitoryValue))
        break
      default:
        allOutput.checked = true
        returnString += formatOutput('Text', transitoryValue)
        returnString += formatOutput('Binary', textToBinary(transitoryValue))
        returnString += formatOutput('Hexadecimal', textToHex(transitoryValue))
        returnString += formatOutput('Ascii', textToAscii(transitoryValue))
        break
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
  })
})()