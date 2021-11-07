import {Component, mixins} from 'nuxt-property-decorator';
import { validationMixin } from 'vuelidate';
import {required, maxLength, email} from 'vuelidate/lib/validators';


@Component({
  validations: {
    name: {required, maxLength: maxLength(10)},
    email: {required, email},
    select: {required},
    checkbox: {
      checked(val: any) {
        return val
      },
    }
  }
})
export default class Form extends mixins(validationMixin) {

  public name: string =  '';
  public email: string = '';
  public select: null = null;
  public items: string[] = [
    'Я учитель',
    'Я ученик',
  ];

  public checkbox: boolean = false;

  public get checkboxErrors(): string[] {
    const errors: string[] = [];
    if (!this.$v.checkbox.$dirty) {
      return errors;
    }
    !this.$v.checkbox.checked && errors.push('You must agree to continue!');
    return errors;
  }

  public get selectErrors(): string[] {
    const errors: string[] = [];
    if (!this.$v.select.$dirty) {
      return errors;
    }
    !this.$v.select.required && errors.push('Item is required');
    return errors;
  }

  public get nameErrors(): string[] {
    const errors: string[] = [];
    if (!this.$v.name.$dirty) {
      return errors;
    }
    !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long');
    !this.$v.name.required && errors.push('Name is required.');
    return errors;
  }

  public get emailErrors() : string[] {
    const errors: string[] = [];
    if (!this.$v.email.$dirty) {
      return errors;
    }
    !this.$v.email.email && errors.push('Must be valid e-mail');
    !this.$v.email.required && errors.push('E-mail is required');
    return errors;
  }

  public submit(): void {
    this.$v.$touch();
  }

  public clear(): void {
    this.$v.$reset();
    this.name = '';
    this.email = '';
    this.select = null;
    this.checkbox = false;
  }
}
