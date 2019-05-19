import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { BackendProvider } from '../../providers/backend/backend';

interface Company {
  name: string;
  location: string;
};

@IonicPage()
@Component({
  selector: 'page-company-selector',
  templateUrl: 'company-selector.html',
})
export class CompanySelectorPage {

  searchQuery: string = '';
  suggestions: Company[] = [];
  totalItems: Company[] = [];
  cachedItems: Company[] = [];

  constructor(
    private viewCtrl: ViewController,
    private navParams: NavParams,
    private backend: BackendProvider
  ) { }

  ionViewWillLoad() {
    this.initialiseItems();
  }

  initialiseItems() {
    this.backend.getFeedbacks().subscribe(res => {
      this.totalItems = res.map(r => {
        return {
          name: r.personalDetails.company,
          location: r.personalDetails.companyLocation
        } as Company;
      });
      this.cachedItems = this.totalItems;
      console.log(this.totalItems)
    }, error => console.log(error));
  }

  initFromCache() {
    this.totalItems = this.cachedItems;
  }

  selected(suggestion) {
    if (!suggestion) {
      suggestion = { name: this.searchQuery, location: '' };
    }
    this.viewCtrl.dismiss(suggestion);
  }

  close() {
    this.viewCtrl.dismiss(null);
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initFromCache();

    // set val to the value of the searchbar
    const val = ev.target.value;

    if (val.trim() == '') {
      this.suggestions = [];
    }

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.suggestions = this.totalItems.filter((item) => {
        return (
          item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          item.location.toLowerCase().indexOf(val.toLowerCase()) > -1
        );
      });
    }
  }

}
