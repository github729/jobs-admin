import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule'
  },
  {
    path: 'pages',
    loadChildren: './pages/full-pages/full-pages.module#FullPagesModule'
  },
  {
    path: 'govt-jobs',
    loadChildren: './govt-jobs/govt-jobs.module#GovtJobsModule'
  },
];
