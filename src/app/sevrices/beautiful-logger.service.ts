import { Injectable } from '@angular/core'

type severityType = 'error' | 'success' | 'info' | 'warning'

@Injectable({
  providedIn: 'root',
})
export class BeautifulLoggerService {
  log(message: string, severity: severityType) {
    console.log(`%c ${message}`, this.getSeverity(severity))
  }

  getSeverity(severity: severityType) {
    switch (severity) {
      case 'success':
        return 'background: green; color: white;'
      case 'info':
        return 'background: blue; color: white;'
      case 'error':
        return 'background: red; color: white;'
      case 'warning':
        return 'background: orange; color: black;'
      default:
        return ''
    }
  }
}
