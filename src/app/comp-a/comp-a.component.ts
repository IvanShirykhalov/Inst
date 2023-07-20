import { Component, OnInit } from '@angular/core'
import { ValueService } from 'src/app/sevrices/value.service'

@Component({
  selector: 'inst-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.scss'],
})
export class CompAComponent implements OnInit {
  value = 0

  addValueHandler() {
    this.valueService.add()
  }

  constructor(private valueService: ValueService) {}

  ngOnInit() {
    //Подписка
    this.valueService.value$.subscribe((value: number) => {
      this.value = value
    })
    //this.value = this.valueService.value
  }
}
