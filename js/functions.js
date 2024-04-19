export const binaryToText = input => input.split(' ').map(char => String.fromCharCode(parseInt(char, 2))).join('')

export const hexToText = input => input.split(' ').map(char => String.fromCharCode(parseInt(char, 16))).join('')

export const asciiToText = input => input.split(' ').map(char => String.fromCharCode(parseInt(char))).join('')

export const getTransitoryValue = data => {
  const formats = {
    'binary': () => binaryToText(data.input),
    'hex': () => hexToText(data.input),
    'ascii': () => asciiToText(data.input)
  };
  return (formats[data.inlineRadioOptions] || (() => data.input))()
}

export const textToBinary = input => input.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' ').trim()

export const textToHex = input => input.split('').map(char => char.charCodeAt(0).toString(16).padStart(2, '0')).join(' ').trim()

export const textToAscii = input => input.split('').map(char => char.charCodeAt(0) + ' ').join('').trim()

export const formatOutput = (text, value) => `${text}:\r\n${value}\r\n`