import { NgModule } from '@angular/core'
import { OpHeaderComponent } from './op-header.component'

const components = [
  OpHeaderComponent
]

@NgModule({
  declarations: [OpHeaderComponent],
  exports: [OpHeaderComponent]
})
export class OpHeaderModule {}
