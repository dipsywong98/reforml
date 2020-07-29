import { WrongValidatorSettingError } from './WrongValidatorSettingError'

describe('WrongValidatorSettingError', () => {
  it('is constructable', () => {
    expect(new WrongValidatorSettingError()).toBeTruthy()
  })
})
