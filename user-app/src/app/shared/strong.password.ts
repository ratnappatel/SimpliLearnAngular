import {AbstractControl, FormControl} from '@angular/forms';

export function validatePassword(control:AbstractControl) : {[key:string]:any} |null
{
    const regex=/[A-Z]/g;
    const arr=control.value.match(regex);
    var flag:boolean=false;
    if(arr==null)
       flag=true;

    return flag?{'strongPassword':{value:control.value}}:null;

   /*  if(flag)
        return {'strongPassword':{value:control.value}};
    else
        return null;
 */
}

// either null OR error JSON-object