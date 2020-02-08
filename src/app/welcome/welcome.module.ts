import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
// welcomeModuleに表示させるボタンをMaterialから引用
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [WelcomeComponent],
  // importsに上記importと同様に"MatButtonModule"を追加する
  imports: [CommonModule, WelcomeRoutingModule, MatButtonModule]
})
export class WelcomeModule {}
