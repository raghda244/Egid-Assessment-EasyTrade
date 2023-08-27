import { Injectable } from "@angular/core"

export class Order {
    stockId: number
    price: number
    quantity: number
    personName: string
    type: number
}

@Injectable()
export class OrderService {
    constructor() { }
    OrdersList: Order[] = [
        {
            stockId: 1,
            personName: "Nourhan Assad",
            price: 100.5,
            quantity: 2,
            type: 1
        },
        {
            stockId: 2,
            personName: "Raghda Mohsen",
            price: 20.85,
            quantity: 1,
            type: 2
        },
        {
            stockId: 2,
            personName: "Mohamed Khaled",
            price: 107.2,
            quantity: 3,
            type: 1
        },
        {
            stockId: 15,
            personName: "Hassan Ehab",
            price: 50.83,
            quantity: 2,
            type: 1
        },
        {
            stockId: 10,
            personName: "Mohamed Khaled",
            price: 90.5,
            quantity: 5,
            type: 2
        }
    ]

    getOrders() {
        return this.OrdersList;
    }

    ManageOrder(order:Order){
        this.OrdersList.push(order)
    }
}
