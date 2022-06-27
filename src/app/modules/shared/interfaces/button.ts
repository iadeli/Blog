export class ButtonOptions {
  constructor(title: string, click: Function | undefined) {
    this.title = title;    
    this.click = click;
  }
  title: string;
  click: Function | undefined;
}
