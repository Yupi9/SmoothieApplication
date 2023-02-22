export interface Smoothie {
    id?: number;
    name: string;
    ingredients: string;
    nutrition: Nutrition;
}

export interface Nutrition {
    id?: number;
    energy: number;
    protein: number;
    fat: number;
    carbohydrate: number;
}
