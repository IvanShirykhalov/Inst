import { Component, OnInit } from '@angular/core'
import { ValueService } from 'src/app/sevrices/value.service'

@Component({
  selector: 'inst-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.scss'],
})
export class CompBComponent implements OnInit {
  value = 0

  decValueHandler() {
    this.valueService.dec()
  }

  constructor(private valueService: ValueService) {}

  ngOnInit() {
    this.valueService.value$.subscribe((value: number) => {
      this.value = value
    })
    //this.value = this.valueService.value
  }
}
