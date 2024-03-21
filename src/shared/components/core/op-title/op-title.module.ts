import { NgModule } from '@angular/core'
import { OpTitleComponent } from './op-title.component'

const components = [
  OpTitleComponent
]

@NgModule({
  declarations: [OpTitleComponent],
  exports: [OpTitleComponent]
})
export class OpTitleModule {}
