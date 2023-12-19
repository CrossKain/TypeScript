import { car } from "./src/modules/car";
const totalVerdict = (car: {
    brand: string;
    model: string;
    country: string;
    price: number;
    color: string;
    rating: [string, string][];
}) => {
    const sumRating = car.rating.reduce((acc, item) => {
        console.log(acc, item);

        return +item[1] + acc;
    }, 0);
    const verdict = sumRating / car.rating.length;
    return verdict;
};

export const carResult = totalVerdict(car);