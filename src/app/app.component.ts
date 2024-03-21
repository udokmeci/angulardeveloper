import { Component, type OnInit } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { environment } from 'environments/environment'
const nl = require('./i18n/nl-BE.json')
const en = require('./i18n/en-US.json')

@Component({
  selector: 'op-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  constructor (private readonly translateService: TranslateService) {}

  ngOnInit (): void {
    this.translateService.setTranslation('nl-BE', nl)
    this.translateService.setTranslation('en-US', en)
    this.translateService.use(environment.defaultLanguage)
  }
}
