import { ButtonOptions } from "./button";

export class CardOptions {
  constructor(key: any, title: string, content: string, subTitle?: string, buttons?: ButtonOptions[]) {    
    this.key = key;
    this.title =title;
    this.subtitle = subTitle;
    this.content = content;
    this.buttons = buttons;
  }
  key: any;
  title: string;
  subtitle?: string;
  content: string;
  buttons?: ButtonOptions[];
}
