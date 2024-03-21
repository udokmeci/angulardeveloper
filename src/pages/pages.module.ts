import { NgModule } from '@angular/core'
import { ContainerModule } from './container.module'
import { HomePageModule } from './home/home.module'
import { OpComponentsModule } from '@components/core/op-components.module'

@NgModule({
  exports: [
    ContainerModule,
    HomePageModule,
    OpComponentsModule
  ],
  imports: [
    HomePageModule,
    ContainerModule,
    OpComponentsModule
  ]
})
export class PagesModule {}
