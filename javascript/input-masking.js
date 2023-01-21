// Element constants
const maskedInputs = document.querySelectorAll('input[data-mask]')

// Base configuration for all masked inputs
for (const input of maskedInputs) {
  // Get the input's mask
  let mask = input.getAttribute('data-mask')
  // Get the input's mask reverse boolean
  const reverse = input.getAttribute('data-mask-reverse') !== null
  // Stores a boolean value to indicate if the mask ends with a numeric character
  const maskEndsWithNumber = !isNaN(mask.charAt(mask.length - 1))

  // If the data-mask-reverse attribute exists, reverse the mask string
  if (reverse) {
    mask = [...mask].reverse().join('')
  }

  // Separate the numeric parts from the mask
  const numericParts = mask.split(/[^\d]/g).filter(part => !!part.length)
  // Add the regex format to all parts
  const regexParts = numericParts.map(m => `([\\d#]\{${m.length}\})`)
  // Join the regex parts to create the final regex
  const maskRegex = new RegExp(regexParts.join(''))
  // Calculates the full length of numeric characters
  const fullLength = numericParts.join('').length
  // Initiates the group counter
  let i = 1
  // Creates the group mask string
  const maskReplace = mask.replace(/\d{1,}/g, () => `\$${i++}`)

  // Set the input's max length to the size of the mask
  input.setAttribute('maxlength', mask.length)

  // Function to handle the input events
  function maskHandler(e) {
    // Get the input's current value
    let { value } = input

    // Removes the last character if the user deleted the last non-numeric character
    if (e.type === 'keydown' && e.keyCode == 8 && isNaN(value.charAt(value.length - 1))) {
      value = value.replace(/\d[^\d]{1,}$/, '')
      e.preventDefault()
    }

    // Removes all non-numeric characters from it
    value = value.replace(/[^\d]/g, '')

    // Reverse the string if needed
    if (reverse) {
      value = [...value].reverse().join('')
    }

    // Fill the string with '#'
    value = value.padEnd(fullLength, '#')
    // Apply the mask
    value = value.replace(maskRegex, maskReplace)

    // Get the end of the numeric part (start of the '#' fill)
    const fillIndex = value.indexOf('#')
    // Checks if the fill character exists
    if (fillIndex !== -1) {
      // Remove the '#' fill
      value = value.slice(0, fillIndex)
    }

    // Assures the string ends with a numeric character
    if (maskEndsWithNumber) {
      value = value.replace(/[^\d]$/, '')
    }
    // Restore the right order of the string
    if (reverse) {
      value = [...value].reverse().join('')
    }

    // Update the input's value
    input.value = value
  }

  // Handles the onkeyup, keydown and change events on the masked input
  input.addEventListener('keyup', maskHandler)
  input.addEventListener('keydown', maskHandler)
  input.addEventListener('change', maskHandler)
}