'use strict'

import Vue from 'vue'
import Input from '../../vx.vue'

const DEFAULT_TYPE = 'text'
const DEFAULT_DISABLED = false
const DEFAULT_REQUIRED = false

const PROP_TYPE = 'email'
const PROP_NAME = 'useremail'
const PROP_VALUE = 'test@example.com'
const PROP_PLACEHOLDER = 'your email'
const PROP_MINLENGTH = 8
const PROP_MAXLENGTH = 80
const PROP_AUTOCOMPLETE = 'on'
const PROP_DISABLED = false
const PROP_REQUIRED = true

/* global describe it expect */

describe('component', () => {
  it('should have a created hook', () =>
    expect(typeof Input.created).toBe('function'))
})

describe('methods', () => {
  it('should have a isEmpty method', () =>
    expect(typeof Input.methods.isEmpty).toBe('function'))

  it('should have a invalid method', () =>
    expect(typeof Input.methods.invalid).toBe('function'))

  it('should have a input method', () =>
    expect(typeof Input.methods.input).toBe('function'))

  it('should have a keyup method', () =>
    expect(typeof Input.methods.keyup).toBe('function'))

  it('should have a setError method', () =>
    expect(typeof Input.methods.setError).toBe('function'))

  it('should have a clearError method', () =>
    expect(typeof Input.methods.clearError).toBe('function'))
})

describe('data', () => {
  it('should be a function', () =>
    expect(typeof Input.data).toBe('function'))

  const defaultData = Input.data()

  it('should have initialValue with default value', () =>
    expect(defaultData.initialValue).toBe(null))

  it('should have hasError with default value', () =>
    expect(defaultData.hasError).toBe(false))

  it('should have errorMessage with default value', () =>
    expect(defaultData.errorMessage).toBe(null))
})

describe('mount with default props', () => {
  const Constructor = Vue.extend(Input)
  const component = new Constructor().$mount()

  const input = () => component.$el.querySelector('input')

  it('should have default type value', () =>
    expect(input().type).toBe(DEFAULT_TYPE))

  it('should have default disabled value', () =>
    expect(component.disabled).toBe(DEFAULT_DISABLED))

  it('should have default required value', () =>
    expect(component.required).toBe(DEFAULT_REQUIRED))
})

describe('mount with setting props', () => {
  const Constructor = Vue.extend(Input)
  const component = new Constructor({
    propsData: {
      type: PROP_TYPE,
      name: PROP_NAME,
      value: PROP_VALUE,
      placeholder: PROP_PLACEHOLDER,
      minlength: PROP_MINLENGTH,
      maxlength: PROP_MAXLENGTH,
      autocomplete: PROP_AUTOCOMPLETE,
      disabled: PROP_DISABLED,
      required: PROP_REQUIRED
    }
  }).$mount()

  const input = () => component.$el.querySelector('input')
  const attr = (name) => input().getAttribute(name)
  const bool = (name, value) => value ? name : null

  it('should correctly set type prop', () =>
    expect(attr('type')).toBe(PROP_TYPE))

  it('should correctly set name prop', () =>
    expect(attr('name')).toBe(PROP_NAME))

  it('should correctly set value prop', () =>
    expect(input().value).toBe(PROP_VALUE))

  it('should not be empty', () =>
    expect(component.isEmpty()).toBe(false))

  it('should correctly set placeholder prop', () =>
    expect(attr('placeholder')).toBe(PROP_PLACEHOLDER))

  it('should correctly set minlength prop', () =>
    expect(parseInt(attr('minlength'))).toBe(PROP_MINLENGTH))

  it('should correctly set maxlength prop', () =>
    expect(parseInt(attr('maxlength'))).toBe(PROP_MAXLENGTH))

  it('should correctly set autocomplete prop', () =>
    expect(component.autocomplete).toBe(PROP_AUTOCOMPLETE))

  it('should correctly set disabled prop', () =>
    expect(attr('disabled')).toBe(bool('disabled', PROP_DISABLED)))

  it('should correctly set required prop', () =>
    expect(attr('required')).toBe(bool('required', PROP_REQUIRED)))
})
