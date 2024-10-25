# Find an average order value for every weekday

Implement `OrdersAnalyzer#averageDailySales` method that

1. For passed orders will return a map with a DayOfWeek as a key and an average total order value. 

2. Average value should be rounded to the nearest integer (half up rounding).

3. The method should always return a map. If there are no orders for some weekday, there might be no entry in the resulting map or there might be an entry with a `0` value. 

## Example output

Your implementation should return following output for example data:

```json
{
  DayOfWeek.MONDAY : 37, 
  DayOfWeek.TUESDAY : 0, 
  DayOfWeek.WEDNESDAY : 0, 
  DayOfWeek.THURSDAY : 0, 
  DayOfWeek.FRIDAY  : 0, 
  DayOfWeek.SATURDAY : 7,
  DayOfWeek.SUNDAY : 35 
}
```


In the example above, there are two orders placed on Saturday: first with total value equal to `9` and second with total value equal to `4`, so the average order value rounded to nearest integer is `7`


## Example input

Orders collection:
```javascript
[
    {
        orderId: 554,
        creationDate: "2017-03-25T10:35:20", // Saturday
        orderLines: [
            {productId: 9872, name: 'Pencil', quantity: 3, unitPrice: 3.00}
        ]
    },
    {
        orderId: 555,
        creationDate: "2017-03-25T11:24:20", // Saturday
        orderLines: [
            {productId: 9872, name: 'Pencil', quantity: 1, unitPrice: 3.00},
            {productId: 1746, name: 'Eraser', quantity: 1, unitPrice: 1.00}
        ]
    },
    {
        orderId: 453,
        creationDate: "2017-03-27T14:53:12", // Monday
        orderLines: [
            {productId: 5723, name: 'Pen', quantity: 4, unitPrice: 4.22},
            {productId: 9872, name: 'Pencil', quantity: 3, unitPrice: 3.12},
            {productId: 3433, name: 'Erasers Set', quantity: 1, unitPrice: 6.15}
        ]
    },
    {
        orderId: 431,
        creationDate: "2017-03-20T12:15:02", // Monday
        orderLines: [
            {productId: 5723, name: 'Pen', quantity: 7, unitPrice: 4.22},
            {productId: 3433, name: 'Erasers Set', quantity: 2, unitPrice: 6.15}
        ]
    },
    {
        orderId: 690,
        creationDate: "2017-03-26T11:14:00", // Sunday
        orderLines: [
            {productId: 9872, name: 'Pencil', quantity: 4, unitPrice: 3.12},
            {productId: 4098, name: 'Marker', quantity: 5, unitPrice: 4.50}
        ]
    }
];
```