import {ContractType} from './ContractType'

export interface Job{
      id?:Number;
      title : string,
      company : string,
      city : string,
      zipcode : string,
      description : string,
      contractType : string,
      startDate : Date,
      publishedDate : Date,
    }
