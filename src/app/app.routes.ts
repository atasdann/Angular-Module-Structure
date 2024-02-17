import { Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

export const routes: Routes = [
  {path:'',component:Page1Component},
  {path:'page1',component:Page1Component},
  {path:'page2',component:Page2Component},
  {path:'posts',loadChildren:()=>import('../components/-post/-post.module').then(m => m.PostModule)} // lazy loading of PostsModule
];
