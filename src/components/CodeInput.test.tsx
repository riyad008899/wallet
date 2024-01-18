import { render } from '@testing-library/react-native'
import * as React from 'react'
import { TextInput } from 'react-native'
import CodeInput, { CodeInputStatus } from 'src/components/CodeInput'

describe('CodeInput', () => {
  it('disables auto correct / suggestion when in input mode', () => {
    const { UNSAFE_getByType } = render(
      <CodeInput
        status={CodeInputStatus.Inputting}
        inputValue={'test'}
        inputPlaceholder={'placeholder'}
        onInputChange={jest.fn()}
      />
    )

    expect(UNSAFE_getByType(TextInput).props.autoCorrect).toBe(false)
    expect(UNSAFE_getByType(TextInput).props.autoCapitalize).toBe('none')
    expect(UNSAFE_getByType(TextInput).props.keyboardType).toBe('number-pad')
  })
})
