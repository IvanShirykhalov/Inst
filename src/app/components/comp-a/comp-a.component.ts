import { Component, OnInit } from '@angular/core'
import { ValueService } from 'src/app/sevrices/value.service'
import { Observable } from 'rxjs'
import { BeautifulLoggerService } from 'src/app/sevrices/beautiful-logger.service'

@Component({
  selector: 'inst-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.scss'],
})
export class CompAComponent implements OnInit {
  constructor(
    private valueService: ValueService,
    private beautifulLoggerService: BeautifulLoggerService,
  ) {}

  value$ = new Observable()

  addValueHandler() {
    this.valueService.add()
    //console.log('add value')
    this.beautifulLoggerService.log('add value', 'success')
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
