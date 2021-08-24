import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { TileLoaderComponent } from './tile-loader.component'

@NgModule({
  imports: [CommonModule],
  declarations: [
    TileLoaderComponent
  ],
  exports: [
    TileLoaderComponent
  ],
})
export class WebHomeUiTileLoaderModule {}
