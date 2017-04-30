import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './spaceapps.routing';

import { SpaceappsComponent } from './spaceapps.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SpaceappsComponent
  ]
})

export class SpaceappsModule {}

