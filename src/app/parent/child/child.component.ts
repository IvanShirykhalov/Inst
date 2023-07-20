import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Address } from 'src/app/parent/parent.component'

@Component({
  selector: 'inst-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  name = 'Victor'

  @Input() surName?: string
  @Input() address?: Address

  @Output() sandeGradeEvent = new EventEmitter<string>()

  inputGrade = ''

  sendGradeHandler() {
    this.sandeGradeEvent.emit(this.inputGrade)
  }
}
