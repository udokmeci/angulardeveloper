import { NgModule } from '@angular/core'
import { HomePageComponent } from './home.component'
import { OpComponentsModule } from '@components/core/op-components.module'
import { TranslateModule } from '@ngx-translate/core'

const components = [
  HomePageComponent
]

@NgModule({
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
  imports: [
    OpComponentsModule,
    TranslateModule
  ]
})
export class HomePageModule {}
