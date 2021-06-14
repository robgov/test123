export namespace ProgramActions { 
    export class GetPrograms {
        static readonly type = '[Aed Programs] Get Programs';
    }

    export class GetProgramSpecializations { 
        static readonly type = '[Aed Providers] Get Program Specializations';
    }

    export class GetProgramCosts { 
        static readonly type = '[Aed Providers] Get Program Costs';
    }

    export class GetProgramCategoryCounts { 
        static readonly type = '[Aed Providers] Get Program Category Counts';
    }

    // Provider Info
    export class GetProgramProviders {
        static readonly type = '[Aed Providers] Get Program Providers';
    }

    export class GetProgramProviderLogos { 
        static readonly type = '[Aed Providers] Get Program Provider Logos';
    }
}