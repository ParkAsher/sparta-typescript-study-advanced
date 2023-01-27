import { Order, Status, User } from '../types';

// getData<타입변수>(data: 캡처): 반환 {}
function getData<T>(data: T): T {
    return data;
}

console.log(getData<string>('string data'));
console.log(getData<number>(1234));
console.log(getData<User>({ email: 'devasherpark@gmail.com', name: 'Asher' }));
console.log(getData<string[]>(['string', 'data']));
console.log(getData<string[]>([])); // 빈배열도 유효한인자!

const orders: Order[] = Object.values(Status).map((status, index) => {
    return {
        buyer: `buyer #${index}`,
        orderStatus: status,
    };
});
