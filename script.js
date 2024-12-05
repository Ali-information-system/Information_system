function sumOfMultiples(a,b,l)
{
    const l = [0,1,2,3,4,5,10];
    const a = [2];
    const b = [5];
    sum=0;
    for(i = 0; i<l.length;i++)
    {
        if(l[i] % a ==0) || ( l[i] % b ==0)
        (
            <p>multiple of a and b.</p>
            )
    }
    
}
######### Basket ##########
let basketcost = (basket, prices)
{
    let totalcost = 0;
    for(let product in basket)
        {
            if(prices.hasownproperty(product))
            {
                totalcost+ = basket[product] *prices[product]
}
        }
    return totalcost;
};
let basket = { apple: 2, banana: 3};
let prices = { apple: 1.5, banana: 0.5};

console.log(basketcost(basket, prices));









