import { Deserializable } from './deserializable.model'

export class MovieModel implements Deserializable{​​
public id: number;
public original_title: string;
public overview: string;
public title: string;
public vote_average: number;
public vote_count: number;

    deserialize(input: any){
        Object.assign(this, input);
        return this;
    }
}


export class TestModel {
    public id:number;
    public name:string;
}


