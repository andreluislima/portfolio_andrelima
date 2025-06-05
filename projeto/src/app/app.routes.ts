import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ProjectComponent } from './pages/project/project.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {path:'home', component:IndexComponent},
    {path:'resume', component:ResumeComponent},
    {path:'project', component:ProjectComponent},
    {path:'contact', component:ContactComponent},
    {path:'', redirectTo:'home', pathMatch:'full'}
];
