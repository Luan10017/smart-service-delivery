import { AbstractControl, FormGroup } from "@angular/forms";

export class ValidatiorFields{
//nao vai precisar ficar instanciando esse método
  static MustMatch(controlName: string, matchingControlName: string): any{

    return (group: AbstractControl) => {
      const formGroup = group as FormGroup;
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if(matchingControl.errors && !matchingControl.errors.mustMatch ){
           return null;
      }

      if(control.value != matchingControl.value){
            //vc vai ter um campo novo nos .errors
              matchingControl.setErrors({ mustMatch: true });
      }
      else{
            matchingControl.setErrors(null);
      }
        return null;
      };
    }
  }
