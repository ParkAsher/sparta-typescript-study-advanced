import { Color, Direction, IThingsInLife } from '../types';

/* keys : string[] */
const keys = Object.keys(Color);
console.log(keys);

/* values : Color[] */
const values = Object.values(Color);
console.log(values);

type ObjectType = {
    [key in Color]?: string;
};

const myObject: ObjectType = {};

values.forEach((key) => {
    myObject[key] = 'hello';
});

console.log(myObject);

type TableData = {
    [x: string]: string;
};

const enum TableKey {
    ID = 'ID',
    FirstName = 'firstName',
    LastName = 'lastName',
    Score = 'score',
}

type StrictTableData = {
    [key in TableKey]: string;
};

type LessStrictTableData = {
    [key in TableKey]?: string;
};

const myTableData: LessStrictTableData = {
    ID: '1',
    firstName: 'Park',
    // lastName: 'asher',
    // score: '100',
    // age: '28',
};

console.log(myTableData);
