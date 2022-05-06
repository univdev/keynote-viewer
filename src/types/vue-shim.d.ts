declare module "*.vue" {
  import Vue from 'vue'

  interface VForm extends HTMLFormElement {
    validate(): boolean;
    resetValidation(): void;
  }

  export default Vue
}