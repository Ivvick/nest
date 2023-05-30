import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Order, OrderDocument} from "../../schemas/order";
import {Model} from "mongoose";
import {OrderDto} from "../../dto/order-dto";
import {IOrder} from "../../interfaces/order";
import {ITour} from "../../interfaces/tour";

@Injectable()
export class OrderService {
    constructor(@InjectModel(Order.name) private orderModel:Model<OrderDocument>) {
    }

    async sendOrder (data: OrderDto): Promise<Order> {
        const orderData = new this.orderModel(data);
        return orderData.save()
    }

    async getAllOrdersById(id): Promise<IOrder> {
        return this.orderModel.findById(id);
    }

    async getAllOrders(): Promise<Order[]> {
        return this.orderModel.find();
    }

}
