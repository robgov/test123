import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderPublicationDto} from '@libs/common/models';
import { FlexConstants } from '@libs/FlexConstants';
import { Store } from '@ngxs/store';


@Component({
  selector: 'ae-program-summary-detail',
  templateUrl: './program-summary-detail.component.html',
  styleUrls: ['./program-summary-detail.component.scss']
})
export class ProgramSummaryDetailComponent implements OnInit {

  @Input() program: any;
  @Input() programDetailData: any;
  @Input() providerPublications: ProviderPublicationDto[];
  FlexConstants = FlexConstants;
  constructor(private router: Router, private store: Store) {}
  programName: number = 0;

  ngOnInit() {
    
  }

  getProgramProviderOverview(){
    if (this.providerPublications ) {
      return this.providerPublications.find(p=>p.providerId === this.program.providerId).providerOverviewHtml;
    }
    return "MacEwan University inspires students with a powerful combination of academic excellence and personal learning experiences - ours is a connected culture that focuses on learner-centred teaching, and on providing opportunities for students to grow and achieve. The university provides a transformative education in a collaborative and supportive environment where creativity and innovation thrive. Faculties focus on teaching, and many are also engaged in ground-breaking, internationally-recognized research and scholarly and artistic activity that enhances their teaching and the curriculum - and creates opportunities for student involvement in research. The university offers a broad complement of programs comprised of bachelor and applied degrees, diplomas and certificates. Faculties and schools offer programming in fine arts and communications; health and community studies; liberal arts and sciences; and business.";
  }

}
