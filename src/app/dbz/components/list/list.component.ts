import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../pages/interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10,
    },
  ];
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string) {
    console.log('🚀 ~ ListComponent ~ onDeleteCharacter ~ id:', id);
    if (!id) return;
    this.onDelete.emit(id);
  }
}
