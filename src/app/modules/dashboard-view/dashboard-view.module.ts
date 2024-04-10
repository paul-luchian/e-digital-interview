import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardViewRoutingModule } from './dashboard-view-routing.module';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as dashboardState from './state/state'
import { PostService } from './services/post.service';
import { PhotoService } from './services/photo.service';
import { DashboardEffects } from './state/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { DashboardPostsComponent } from './dashboard-posts/dashboard-posts.component';
import { DashboardPhotosComponent } from './dashboard-photos/dashboard-photos.component';
import { DashboardRemovedComponent } from './dashboard-removed/dashboard-removed.component';

@NgModule({
  declarations: [
    DashboardViewComponent,
    DashboardPostsComponent,
    DashboardPhotosComponent,
    DashboardRemovedComponent
  ],
  imports: [
    CommonModule,
    DashboardViewRoutingModule,
    StoreModule.forRoot(dashboardState.reducers),
    EffectsModule.forRoot([DashboardEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [
    PostService,
    PhotoService,
  ]
})
export class DashboardViewModule { }
