export class User {
    constructor(
        public id: number = null,
        public firstName: string = "",
        public lastName: string = "",
        public email: string = "",
        public birthday: Date = null,
        public password: string = "",
        public confirmPassword: string = "",
      ){}
    
}