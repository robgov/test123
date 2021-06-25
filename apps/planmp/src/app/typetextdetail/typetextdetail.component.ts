import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {
  VwAlbertaPsiprovider,
  VwPmpLookup,
  VwPmpPsiprogramCountByCategory,
} from '@libs/common/models';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

interface Item {
  id: string;
  value: string;
  type: string;
}

@Component({
  selector: 'ae-typetextdetail',
  templateUrl: './typetextdetail.component.html',
  styleUrls: ['./typetextdetail.component.scss'],
})
export class TypetextdetailComponent implements OnInit {
  @Input() cips: VwPmpPsiprogramCountByCategory[];
  @Input() providers: VwAlbertaPsiprovider[];
  @Input() items: VwPmpLookup[];

  myControl = new FormControl();
  filteredOptions: Observable<any[]>;

  keywords: any;
  searchdisabled: boolean = true;
  ctlvisible: boolean = false;

  constructor (private router: Router) {}

  ngOnInit() {
    // this.loadItemsFromProvider();

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => (typeof value === 'string' ? value : value.name)),
      map((name) => (name ? this._filter(name) : this.items.slice()))
    );
  }

  displayFn(u: VwPmpLookup): any {
    return u && u.name ? u.name : '';
  }

  private _filter(value: string): any[] {

    const filterValue = value.toLowerCase();
    return this.items.filter(
      (option) => option.name.toLowerCase().indexOf(filterValue) === 0
    );
  }

  onSearchChange(searchValue: string) {
    if (this.keywords) {
      if (this.keywords.trim().length > 3) {
        this.searchdisabled = false;
        this.ctlvisible = true;
      }
    }
  }

  onOptionSelected(newValue: any) {
    if (newValue) {
      this.keywords = newValue;
      this.searchdisabled = false;
    }
  }

  displaySearchResult() {
    if (this.keywords.type) {
      //I'm a material autocomplete entry
      if (this.keywords.type == 'provider') {
        //I'm a provider
        this.router.navigate(['/home/program-search-results'],{ queryParams: { provider: this.keywords.code } });
      }
      else if (this.keywords.type == 'cips') {
        //I'm a cips code category
        this.router.navigate(['/home/program-search-results'],{ queryParams: { cipSubSeriesCode: this.keywords.code } });
      }
    }
    else {
      //They just typed in a keyword
      this.router.navigate(['/home/program-search-results'],{ queryParams: { keywords: this.keywords } });
    }
  }
}
