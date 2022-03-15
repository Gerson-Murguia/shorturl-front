export class Shortlink{
    public originalUrl:string;
    public shortUrl:string;
    public createdAt: Date;

    constructor(){
        this.originalUrl='';
        this.shortUrl='';
        this.createdAt=new Date();
    }
}