import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  useLetters = true;
  useNumbers = true;
  useSymbols = true;
  passwordLength = 0;

  onClickButton() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '1234567890';
    const symbols = '!"£$%&/()=?^'

    let validchars = '';
    validchars += this.useLetters ? letters : '';
    validchars += this.useNumbers ? numbers : '';
    validchars += this.useSymbols ? symbols : '';

    let generatedPassword = '';
    for (let i = 0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * validchars.length);
      generatedPassword += validchars[index]
    }
    this.password = generatedPassword;
  }

  onChangeUseLetters() {
    this.useLetters = !this.useLetters;
  }

  onChangeUseNumbers() {
    this.useNumbers = !this.useNumbers;
  }

  onChangeUseSymbols() {
    this.useSymbols = !this.useSymbols;
  }

  onChangeLength(event: Event) {
    const target = event.target as HTMLInputElement;
    const parsedValue = parseInt(target.value);
    if (Number.isInteger(parsedValue)) {
      this.passwordLength = parsedValue;
    } else {
      this.passwordLength = 0;
    }
  }

  buttonIsDisabled() {
    return !this.passwordLength || (!this.useLetters && !this.useNumbers && !this.useSymbols);
  }
}
