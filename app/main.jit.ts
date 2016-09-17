import { AppModule } from './app.module';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));




