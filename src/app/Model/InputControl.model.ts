import { InputGeneric } from "./InputGenric.model";

export class InputControlText extends InputGeneric<string>{
    override controlType='Text';
}

export class InputControlRadio extends InputGeneric<string>{
    override controlType='Radio';
}

export class InputControlEmail extends InputGeneric<string>{
    override controlType='Email';
}