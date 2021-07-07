


export class SpecializationDto {
    public specializationId: number = 0;
    public specializationNumber: number;
    public specializationName: string = '';
    public specializationCode: string = '';
    public specializationStatus: string = '';
    public cipCodeId: number = 0;
    public cipSubSeriesCode: string = '';
    public cipSubSeries: string = '';
    public administrativeUnitCode: string = '';
    public administrativeUnit: string = '';
    public entranceRequirementCode: string = '';
    public entranceRequirement: string = '';
    public unitOfLoad: string = '';
    public primaryFundingCode: string = '';
    public programId: number;
    public businessStartDate: Date;
    public businessEndDate: Date;

    constructor(init? : Partial<SpecializationDto>) {
        
        Object.assign(this, init);
    }
}

