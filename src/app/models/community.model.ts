export class Community{
    constructor(
        public name: string, 
        public owner: string, 
        public topic: string, 
        public _public: Boolean,
        public _id?: string,        
        public members?: string[]) {}
}