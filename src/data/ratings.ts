import { faker } from "@faker-js/faker";

export interface user_rating {
    id: string;
    userName: string;
    rating: number;
    message: string;
}

export default function ratings_data(size: number): user_rating[] {
    const data: user_rating[] = [];

    for (let i = 0; i < size; i++) {
        data.push({
            id: faker.string.ulid(),
            userName: faker.person.fullName(),
            rating: faker.number.int({ min: 3, max: 5 }),
            message: faker.lorem.paragraph({ min: 2, max: 5 }),
        });
    }
    return data;
}
