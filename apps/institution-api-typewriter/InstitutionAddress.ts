
module institution_api_typewriter {

    // $Classes/Enums/Interfaces(filter)[template][separator]
    // filter (optional): Matches the name or full name of the current item. * = match any, wrap in [] to match attributes or prefix with : to match interfaces or base classes.
    // template: The template to repeat for each matched item
    // separator (optional): A separator template that is placed between all templates e.g. $Properties[public $name: $Type][, ]

    // More info: http://frhagn.github.io/Typewriter/

    
    export class InstitutionAddress {
        
        // INSTITUTIONADDRESSID
        public institutionAddressId: number = 0;
        // INSTITUTIONID
        public institutionId: number = 0;
        // ADDRESSGUID
        public addressGuid: string = null;
        // ADDRESSUSAGE
        public addressUsage: string = null;
        // ADDRESSTYPE
        public addressType: string = null;
        // LISTSEQUENCE
        public listSequence: number = null;
        // ADDRESSLINE1
        public addressLine1: string = null;
        // ADDRESSLINE2
        public addressLine2: string = null;
        // ADDRESSLINE3
        public addressLine3: string = null;
        // ADDRESSLINE4
        public addressLine4: string = null;
        // CITY
        public city: string = null;
        // PROVINCESTATE
        public provinceState: string = null;
        // POSTALZIPCODE
        public postalZipCode: string = null;
        // COUNTRY
        public country: string = null;
        // ADDRESSBUSINESSSTARTDATE
        public addressBusinessStartDate: Date = null;
        // ADDRESSBUSINESSENDDATE
        public addressBusinessEndDate: Date = null;
        // INSTITUTION
        public institution: Institution = null;
    }
}
