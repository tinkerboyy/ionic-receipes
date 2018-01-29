import { Component, OnInit } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ActionSheetController,
  AlertController
} from "ionic-angular";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";

/**
 * Generated class for the EditReceipePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-edit-receipe",
  templateUrl: "edit-receipe.html"
})
export class EditReceipePage implements OnInit {
  mode = "New";
  selectOptions = ["Easy", "Medium", "Hard"];
  receipeForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController
  ) {}

  private initializeForm() {
    this.receipeForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      difficulty: new FormControl("Medium", Validators.required),
      ingredients: new FormArray([])
    });
  }

  ngOnInit() {
    this.mode = this.navParams.get("mode");
    this.initializeForm();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad EditReceipePage");
  }

  onSubmit() {
    console.log(this.receipeForm);
  }

  onManageIngredients() {
    let actionSheet = this.actionSheetCtrl.create({
      title: "What do you want to do?",
      buttons: [
        {
          text: "Add Ingredient",
          handler: () => {
            this.showAlert().present();
          }
        },
        {
          text: "Remove All Ingredients",
          role: "destructive",
          handler: () => {
            console.log("Destructive clicked");
          }
        },
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ]
    });
    actionSheet.present();
  }

  private showAlert() {
    let alert = this.alertCtrl.create({
      title: "New Friend!",
      subTitle:
        "Your friend, Obi wan Kenobi, just accepted your friend request!",
      inputs: [
        {
          name: "name",
          placeholder: "Name"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: data => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Add",
          handler: data => {
            if (data.name.trim() === "" || data.name === null) {
              return;
            }

            (<FormArray>this.receipeForm.get("ingredients")).push(
              new FormControl(data.name, Validators.required)
            );
          }
        }
      ]
    });
    return alert;
  }
}
