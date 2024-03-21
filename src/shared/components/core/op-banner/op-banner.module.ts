import { NgModule } from '@angular/core'
import { OpBannerComponent } from './op-banner.component'

const components = [
  OpBannerComponent
]

@NgModule({
  declarations: [OpBannerComponent],
  exports: [OpBannerComponent]
})
export class OpBannerModule {}
