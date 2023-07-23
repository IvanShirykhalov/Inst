import { Component, OnInit } from '@angular/core'
import { ValueService } from 'src/app/sevrices/value.service'
import { Observable } from 'rxjs'
import { BeautifulLoggerService } from 'src/app/sevrices/beautiful-logger.service'

@Component({
  selector: 'inst-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.scss'],
})
export class CompBComponent implements OnInit {
  constructor(
    private valueService: ValueService,
    private beautifulLoggerService: BeautifulLoggerService,
  ) {}

  value$ = new Observable()

  decValueHandler() {
    this.valueService.dec()
    //console.log('dec value')
    this.beautifulLoggerService.log('dec value', 'error')
  }

  ngOnInit() {
    this.value$ = this.valueService.value$

    //Подписка
    // this.valueService.value$.subscribe((value: number) => {
    //   this.value = value
    // })

    //Старый код
    //this.value = this.valueService.value
  }
}
