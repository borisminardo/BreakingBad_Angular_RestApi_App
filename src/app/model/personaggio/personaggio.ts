export class Personaggio{
    
    private char_id:number;
    name:string;
    private birthday:string;
    private occupation:string[];
    private img:string;
    private status:string;
    private apparence:string[];
    private nickname:string;
    private portrayed:string;

    getChar_id():number{
        return this.char_id;
    }

    getName():string{
        return this.name;
    }

    getBirthday():string{
        return this.birthday;
    }
    
    getOccupation():string[]{
        return this.occupation;
    }
    
    getImg():string{
        return this.img;
    }
    
    getStatus():string{
        return this.status;
    }
    getApparence():string[]{
        return this.apparence;
    }
    
    getNickname():string{
        return this.nickname;
    }
    
    getPortrayed():string{
        return this.portrayed;
    }
}