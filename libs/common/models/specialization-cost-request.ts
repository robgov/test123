


export class SpecializationCostRequest {
    public programId: number;
    public specializationId: number;
    public providerId: number;

    constructor(init? : Partial<SpecializationCostRequest>) {
        
        Object.assign(this, init);
    }
}

