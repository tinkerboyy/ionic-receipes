import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { ReceipePage } from "../pages/receipe/receipe";
import { ShoppingListPage } from "../pages/shopping-list/shopping-list";
import { TabsPage } from "../pages/tabs/tabs";
import { EditReceipePage } from "../pages/edit-receipe/edit-receipe";
import { ReceipesPage } from "../pages/receipes/receipes";
import { ShoppingListService } from "../services/shopping-list.service";

@NgModule({
  declarations: [
    MyApp,
    ReceipesPage,
    ReceipePage,
    ShoppingListPage,
    TabsPage,
    EditReceipePage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ReceipesPage,
    ReceipePage,
    ShoppingListPage,
    TabsPage,
    EditReceipePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ShoppingListService
  ]
})
export class AppModule {}
