import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { NgForm } from "@angular/forms";
import { ShoppingListService } from "../../services/shopping-list.service";
import { Ingredient } from "../../models/ingredient";

/**
 * Generated class for the ShoppingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-shopping-list",
  templateUrl: "shopping-list.html"
})
export class ShoppingListPage {
  listItems: Ingredient[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private shoppingListService: ShoppingListService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ShoppingListPage");
  }

  ionViewWillEnter() {
    this.loadItems();
  }

  addItem(form: NgForm) {
    console.log(form);
    this.shoppingListService.addItem(
      form.value.ingredientName,
      form.value.amount
    );
    form.reset();
    this.loadItems();
  }

  onCheckItem(index: number) {
    this.shoppingListService.removeItem(index);
    this.loadItems();
  }

  private loadItems() {
    this.listItems = this.shoppingListService.getItems();
  }
}
