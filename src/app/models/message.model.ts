export class Message{
    constructor(
        public message: string, 
        public _id?: string,        
        public community?: string,
        public user?: string) {}
}