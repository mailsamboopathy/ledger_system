
export class Person {
    constructor(
        public name: string,
        public age: number,
        public gender: string
    ) {}

    public isEligibleToVote(): boolean {
        let isEligible: boolean = false;
        if (this.age >= 18) {
            isEligible = true;
        }
        return isEligible;
    }
    
}
