<template>
  <div>
    <input class="uk-input"
      :class="classes"
      :id="id"
      :autocomplete="autocomplete"
      :autofocus="autofocus"
      :disabled="disabled" 
      :hidden="hidden"
      :name="name"
      :value="value"
      :title="title"
      :type="type"
      :pattern="pattern"
      :placeholder="placeholder"
      :readonly="readonly"
      :maxlength="maxlength"
      :minlength="minlength"
      :required="required"
      @invalid="invalid"
      @keyup="keyup"
      @input="input">
    <div v-if="errorMessage" class="uk-alert-danger" uk-alert>
      {{ errorMessage }}</div>
  </div>
</template>

<script>
  /**
   * The custom HTML `<input>` component. It represents a multi-line plain-text editing control.
   */
  export default {
    name: 'vx-input',
    props: {
      /**
       * Use this directive to create two-way data bindings with the component. It automatically picks the correct way to update the element based on the input type.
       * @model
       */
      value: { type: String },

      /**
       * Defines a unique identifier (ID) which must be unique in the whole document.
       */
      id: { type: String },

      /**
       * This property indicates whether the value of the control can be automatically completed by the browser. Possible values are: `off` and `on`.
       */
      autocomplete: { type: String },

      /**
       * This Boolean property lets you specify that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control.
       */
      autofocus: { type: Boolean },

      /**
       * This Boolean property indicates that the user cannot interact with the control.
       */
      disabled: { type: Boolean, default: false },

      /**
       * This Boolean property indicates that the element is not yet, or is no longer, relevant. For example, it can be used to hide elements of the page that can't be used until the login process has been completed. Browsers won't render the composant with the hidden property set.
       */
      hidden: { type: Boolean },

      /**
       * Contains a text representing advisory information related to the element it belongs to. It's also use to display an error message when the input is invalid.
       */
      title: { type: String },

      /**
       * The maximum number of characters (Unicode code points) that the user can enter. If this value isn't specified, the user can enter an unlimited number of characters.
       */
      maxlength: { type: Number, validator: (value) => value > 0 },

      /**
       * The minimum number of characters (Unicode code points) required that the user should enter.
       */
      minlength: { type: Number, validator: (value) => value >= 0 },

      /**
       * The name of the control.
       */
      name: { type: String },

      /**
       * A regular expression that the control's value is checked against. The pattern must match the entire value, not just some subset. Use the `title` property to describe the pattern to help the user.
       */
      pattern: { type: String },

      /**
       * A hint to the user of what can be entered in the control. Carriage returns or line-feeds within the placeholder text must be treated as line breaks when rendering the hint.
       */
      placeholder: { type: String },

      /**
       * @private
       */
      type: { type: String, default: 'text' },

      /**
       * This Boolean property indicates that the user cannot modify the value of the control. Unlike the disabled property, the readonly property does not prevent the user from clicking or selecting in the control.
       */
      readonly: { type: Boolean },

      /**
       * This property specifies that the user must fill in a value before submitting a form.
       */
      required: { type: Boolean, default: false },
      dataClassError: { type: String, default: 'uk-form-danger' }
    },
    data () {
      return {
        initialValue: null,
        hasError: false,
        errorMessage: null
      }
    },
    computed: {
      classes () {
        return {
          [this.dataClassError]: this.hasError
        }
      }
    },
    created () {
      this.initialValue = this.value
    },
    methods: {
      /**
       * Define if the control value is empty of not.
       */
      isEmpty () {
        return !this.value || this.value.length === 0
      },

      /**
       * @private
       */
      invalid (e) {
        this.setError(this.title)

        /**
         * Fired when a submittable element has been checked and doesn't satisfy its constraints. The validity of submittable elements is checked before submitting their owner form.
         */
        this.$emit('invalid', e)
      },

      /**
       * @private
       */
      input (e) {
        this.value = e.target.value
        this.clearError()

        /**
         * Fired when the value is changed.
         */
        this.$emit('input', this.value)

        if (this.value !== this.initialValue) {
          /**
           * Fired when a change to the initial element's value is committed by the user. Unlike the `input` event, the change event is not necessarily fired for each change to an element's value.
           */
          this.$emit('change')
        }
      },

      /**
       * @private
       */
      keyup (e) {
        /**
         * Fired when a key is released.
         */
        this.$emit('keyup')
      },

      /**
       * Set a message error
       */
      setError (message) {
        this.hasError = true
        this.errorMessage = message
      },

      /**
       * clear the message error
       */
      clearError () {
        this.hasError = false
        this.errorMessage = null
      }
    }
  }
</script>

<style scoped>
  input {
    padding-left: 15px;
    padding-right: 15px;
  }
  
  input + .uk-alert-danger {
    font-size: .9em;
    text-align: left;
    margin-top: 0;
    padding-top: 7px;
    padding-bottom: 7px;
  }
</style>
