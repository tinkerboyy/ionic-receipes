import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { EditReceipePage } from "../edit-receipe/edit-receipe";

/**
 * Generated class for the ReceipesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-receipes",
  templateUrl: "receipes.html"
})
export class ReceipesPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ReceipesPage");
  }

  addNewReceipe() {
    this.navCtrl.push(EditReceipePage, { mode: "New" });
  }
}
