// This file exports types and interfaces used throughout the project for type safety in TypeScript.

export interface EmailTemplate {
    title: string;
    body: string;
    footer: string;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    discount?: number;
    imageUrl: string;
    link: string;
}

export interface Promotion {
    title: string;
    discountPercentage: number;
    validUntil: Date;
    products: Product[];
}