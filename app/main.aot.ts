import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/app/app.module.ngfactory';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory).catch(err => console.error(err));
