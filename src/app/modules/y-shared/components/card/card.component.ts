import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title: string | undefined;
  @Input() subtitle: string | undefined;
  @Input() content: string | undefined;
  @Output() cardClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onViewCard(){
    this.cardClicked.emit();
  }

}
