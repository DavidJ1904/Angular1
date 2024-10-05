import { Invoice } from "../invoice";

export const invoiceData: Invoice = {
    id: "001",
    company: {
        ruc: "1792285747001",
        name: "Clear Mins Consultores",
        addres: {
            city: "Quito",
            principalStreet: "Juan Pablo Sanz",
            secondaryStreet: "Iñaquito",
            code: "N-57",
        },
    },
    customers: {
        id: "1726500588",
        name: "David",
        surname: "Jima",
        addres: {
            city: "Quito",
            principalStreet: "Isidro Saenz",
            secondaryStreet: "La ecuatoriana",
            code: "N-45",
        },
    },
    items: [
        {
            id: 100,
            product: {
                id: 500,
                name: "Papas Ruffles",
                price: 0.50,
                description: "Las papas mas sabrosonas",
                category: {
                    id: 10,
                    name: "Snaks",
                },
            },
            quantity: 23,
        },
        {
            id: 101,
            product: {
                id: 550,
                name: "Doritos",
                price: 0.60,
                description: "De queso",
                category: {
                    id: 10,
                    name: "Snaks",
                }, 
            },
            quantity: 50,
        },
        {
            id: 102,
            product: {
                id: 580,
                name: "kchitos",
                price: 0.30,
                description: "Para cachudos",
                category: {
                    id: 10,
                    name: "Snaks",
                },
            },
            quantity: 100,
        },
    ],
}