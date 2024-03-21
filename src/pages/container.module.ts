import { NgModule } from '@angular/core'
import { ContainerComponent } from './container.component'
import { RouterModule } from '@angular/router'
import { OpComponentsModule } from '@components/core/op-components.module'
import { TranslateModule } from '@ngx-translate/core'

@NgModule({
  declarations: [
    ContainerComponent
  ],
  exports: [
    ContainerComponent
  ],
  imports: [
    RouterModule,
    OpComponentsModule,
    TranslateModule
  ]
})
export class ContainerModule {}
