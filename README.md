# vx-input

A VxInput Component

[![Build Status](https://travis-ci.org/vx-components/input.svg?branch=master)](https://travis-ci.org/vx-components/input)
[![bitHound Dependencies](https://www.bithound.io/github/vx-components/input/badges/dependencies.svg)](https://www.bithound.io/github/vx-components/input/master/dependencies/npm)

## Install
```sh
npm install --save @vx-components/input
```

## VxInput API

### props 
- `v-model` ***String*** (*optional*) 
Use this directive to create two-way data bindings with the component. It automatically picks the correct way to update the element based on the input type. 

- `id` ***String*** (*optional*) 
Defines a unique identifier (ID) which must be unique in the whole document. 

- `autocomplete` ***String*** (*optional*) 
This property indicates whether the value of the control can be automatically completed by the browser. Possible values are: `off` and `on`. 

- `autofocus` ***Boolean*** (*optional*) 
This Boolean property lets you specify that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. 

- `disabled` ***Boolean*** (*optional*) `default: false` 
This Boolean property indicates that the user cannot interact with the control. 

- `hidden` ***Boolean*** (*optional*) 
This Boolean property indicates that the element is not yet, or is no longer, relevant. For example, it can be used to hide elements of the page that can't be used until the login process has been completed. Browsers won't render the composant with the hidden property set. 

- `title` ***String*** (*optional*) 
Contains a text representing advisory information related to the element it belongs to. It's also use to display an error message when the input is invalid. 

- `maxlength` ***Number*** (*optional*) 
The maximum number of characters (Unicode code points) that the user can enter. If this value isn't specified, the user can enter an unlimited number of characters. 

- `minlength` ***Number*** (*optional*) 
The minimum number of characters (Unicode code points) required that the user should enter. 

- `name` ***String*** (*optional*) 
The name of the control. 

- `pattern` ***String*** (*optional*) 
A regular expression that the control's value is checked against. The pattern must match the entire value, not just some subset. Use the `title` property to describe the pattern to help the user. 

- `placeholder` ***String*** (*optional*) 
A hint to the user of what can be entered in the control. Carriage returns or line-feeds within the placeholder text must be treated as line breaks when rendering the hint. 

- `readonly` ***Boolean*** (*optional*) 
This Boolean property indicates that the user cannot modify the value of the control. Unlike the disabled property, the readonly property does not prevent the user from clicking or selecting in the control. 

- `required` ***Boolean*** (*optional*) `default: false` 
This property specifies that the user must fill in a value before submitting a form. 

- `dataClassError` ***String*** (*optional*) `default: 'uk-form-danger'` 

### events 
- `invalid` Fired when a submittable element has been checked and doesn't satisfy its constraints. The validity of submittable elements is checked before submitting their owner form. 
- `input` Fired when the value is changed. 
- `change` Fired when a change to the initial element's value is committed by the user. Unlike the `input` event, the change event is not necessarily fired for each change to an element's value. 
- `keyup` Fired when a key is released. 

### methods 
- `isEmpty()` 
Define if the control value is empty of not. 

- `setError()` 
Set a message error 

- `clearError()` 
clear the message error 


## Usage

```html
<template>
  <vx-input v-model="value" @input="onInput" />
</template>

<script>
  import VxInput from '@vx-components/input/vx.vue'
  
  export default {
    data: () => ({
      value: 'Hello World!'
    }),
    methods: {
      onInput () {
        // this.value contains the new value
      }
    },
    components: { VxInput }
  }
</script>
```

## License

Under the MIT license. See [LICENSE](https://github.com/vx-components/input/blob/master/LICENSE) file for more details.
