import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit, Output } from '@angular/core';
import { PipeTransform } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FlexConstants } from '@libs/FlexConstants';

@Component({
  selector: 'ae-searchblock',
  templateUrl: './searchblock.component.html',
  styleUrls: ['./searchblock.component.scss']
})
export class SearchblockComponent implements OnInit {

  keywords: string ="" ;
  //@Input() data: any;
  targetaddress: string;
  dataEmitter: EventEmitter<any> = new EventEmitter();

  keywordlength: number = 0;
  searchdisabled: boolean = true;

  FlexConstants = FlexConstants;

  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  onSearchChange(searchValue: string): void {

    if (this.keywords) {
      if (this.keywords.trim().length > 3) {
        this.searchdisabled = false;
      }
    }
  }

  // redirect() {

  //   console.log('I am supposed to be redirecting')

  //   if (this.targetaddress != null) {
  //     if (this.keywordlength > 3) {
  //       console.log('redirecting now to ' + this.targetaddress);
  //       this.router.navigate([this.targetaddress, this.keywords]);
  //     }
  //     else {
  //       console.log('no redirection ');
  //       this.router.navigate([this.targetaddress]);
  //     }
  //   }
  //   this.dataEmitter.emit(this.keywords);
  // }
}



