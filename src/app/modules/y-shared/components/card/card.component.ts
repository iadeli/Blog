import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() content: string = '';
  @Input() showButton: boolean = false;
  @Output() cardClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onViewCard(){
    this.cardClicked.emit();
  }

}
