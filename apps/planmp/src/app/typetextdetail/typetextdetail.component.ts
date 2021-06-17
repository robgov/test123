import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { VwAlbertaPsiprovider, VwPmpPsiprogramCountByCategory } from '@libs/common/models';
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
  styleUrls: ['./typetextdetail.component.scss']
})
export class TypetextdetailComponent implements OnInit {

  @Input() cips: VwPmpPsiprogramCountByCategory[];
  @Input() providers: VwAlbertaPsiprovider[];

  items: any[];

  myControl = new FormControl();
  filteredOptions: Observable<any[]>;


  keywords: string = "";
  searchdisabled: boolean = true;
  ctlvisible: boolean = false;

  ngOnInit() {

 
    this.items = this.providers.map(p=> <Item> ({ value:p.providerName, id: p.providerId.toString(), type: 'provider'}));

    var tmp = this.cips.map(c=>  <Item> ({ value:c.cipSubSeries, id: c.cipSubSeriesCode, type: 'cips'}));
    this.items = this.items.concat(tmp);


    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.items.slice())
      );
  }

  displayFn(u: Item): any{
    return u && u.value ? u.value: '';
  }




  private _filter(value: string): VwAlbertaPsiprovider[] {
    const filterValue = value.toLowerCase();
    return this.providers.filter(option => option.providerName.toLowerCase().indexOf(filterValue) === 0);
  }

  onSearchChange(searchValue: string): void {
    if (this.keywords) {
      if (this.keywords.trim().length > 3) {
        this.searchdisabled = false;
        this.ctlvisible = true;
      }
    }
  }
}