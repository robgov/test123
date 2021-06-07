import { Component, OnInit } from '@angular/core';
import { VwAlbertaPsiprovider } from '@libs/common/models';
import { AlbertaPSIProviderService } from '@libs/common/services';

@Component({
  selector: 'aedigital-school-summary-list',
  templateUrl: './school-summary-list.component.html',
  styleUrls: ['./school-summary-list.component.scss']
})
export class SchoolSummaryListComponent implements OnInit {
  constructor(private apsiProviderService: AlbertaPSIProviderService) {}

  providers: VwAlbertaPsiprovider[];

  ngOnInit(): void {
    this.loadProviders();
  }

  loadProviders() {
    this.apsiProviderService.getAlbertaPsiProviders().subscribe((result) => {
      this.providers = result;
    });
  }
}
