import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Customer } from '../model/customer.model';

@Injectable()
export class CustomerService {

    constructor(@InjectModel('Customer') private readonly model: Model<Customer>) { }

    async create(data: Customer): Promise<Customer> {
        const customer = new this.model(data);
        return await customer.save();
    }
}