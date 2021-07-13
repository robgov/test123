import { createSelector, Select, Selector } from '@ngxs/store';
import { StrapiState } from './strapi.state';
import { StrapiStateModel } from './strapi-state.model';
import { Constants} from '@libs/common/constants';

export class StrapiSelectors {
    @Selector([StrapiState])
    static programData(state: StrapiStateModel): Object[] {
      return state.programData;
    }

    @Selector([StrapiState])
    static loanData(state: StrapiStateModel): Object[] {
      return state.loanData;
    }

    static getLoanDataImageUrl(loanData:any) {
        return createSelector([StrapiState],(state:StrapiStateModel) =>
            state.baseUrl + loanData.Loanapplyimage.url
        )
    }

    static getApplyImageUrl(programData:any) {
        return createSelector([StrapiState],(state:StrapiStateModel) =>
            state.baseUrl + programData.Applyimage.url
        )
    }

    static getProgramDetailData(programId: number) {
        return createSelector([StrapiState],(state:StrapiStateModel)=>
            //state.programDetailData.find(pd=>pd.programId === programId)]
            state.programDetailData[0]
        )
    }

}