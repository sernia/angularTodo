import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { TypeScriptComponent } from './type-script/type-script.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PipeComponent } from './pipe/pipe.component';
import { DirectiveComponent } from './directive/directive.component';
import { TaskComponent } from './task/task.component';



const routes: Routes = [
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: 'index', component: IndexComponent},
  {path: 'type-script', component: TypeScriptComponent},
  {path: 'data-binding', component: DataBindingComponent},
  {path: 'pipe', component: PipeComponent},
  {path: 'directive', component: DirectiveComponent},
  {path: 'task', component: TaskComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
