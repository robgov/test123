import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {
  VwAlbertaPsiprovider,
  VwPmpLookup,
  VwPmpPsiprogramCountByCategory,
} from '@libs/common/models';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { SelectSnapshot } from '@ngxs-labs/select-snapshot';
import { RouterSelectors } from '@libs/common/store';
import { ProgramActions } from '@libs/common/store';

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

  @SelectSnapshot(RouterSelectors.getRoute) routeUrl: string;

  myControl = new FormControl();
  filteredOptions: Observable<any[]>;

  keywords: any;
  searchdisabled: boolean = true;
  ctlvisible: boolean = false;

  constructor(private router: Router, private store: Store) {}

  ngOnInit() {
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
    //TODO: GROSS! Lots of room for improvement here
    if (this.routeUrl.startsWith('/home/program-search-results')) {
      //We're already on the search results, no navigating
      if (this.keywords.type) {
        //I'm a material autocomplete entry
        if (this.keywords.type == 'provider') {
          //I'm a provider
          var providers = new Array<number>();
          providers.push(+this.keywords.code);
          this.store.dispatch(
            new ProgramActions.SetProgramSearchProviderFilter(providers)
          );
        } else if (this.keywords.type == 'cips') {
          //I'm a cips code category
          this.store.dispatch(
            new ProgramActions.SetProgramSearchCategoryFilter(
              this.keywords.code
            )
          );
        }
      } else {
        //They just typed in a keyword
        this.store.dispatch(
          new ProgramActions.SetProgramSearchKeywordFilter(this.keywords)
        );
      }
      this.keywords = '';
    } else {
      if (this.keywords.type) {
        //I'm a material autocomplete entry
        if (this.keywords.type == 'provider') {
          //I'm a provider
          this.router.navigate(['/home/program-search-results'], {
            queryParams: {
              id: 'program-search-results',
              provider: this.keywords.code,
            },
          });
        } else if (this.keywords.type == 'cips') {
          //I'm a cips code category
          this.router.navigate(['/home/program-search-results'], {
            queryParams: {
              id: 'program-search-results',
              cipSubSeriesCode: this.keywords.code,
            },
          });
        }
      } else {
        //They just typed in a keyword
        this.router.navigate(['/home/program-search-results'], {
          queryParams: {
            id: 'program-search-results',
            keywords: this.keywords,
          },
        });
      }
    }
  }
}
