export namespace StrapiActions {
  export class GetProgramData {
    static readonly type = '[Aed Strapi] Get Program Data';
  }

  export class GetLoanData {
    static readonly type = '[Aed Strapi] Get Loan Data';
  }

  export class GetProgramDetailData {
    static readonly type = '[Aed Strapi] Get Program Detail Data';
    constructor() {}
  }

  export class GetProgramDetailTabData {
    static readonly type = '[Aed Strapi] Get Program Detail Tab Data';
    constructor(public tabId: number) {}
  }
}
