export default class NumberList
{
    GetList()
    {
        const list = Array(5)
        for (let n of list) {
            n = Math.random() * 100            
        }
        

        return list
    }

    static IsOdd(valor:number)
    {
        return valor % 2 == 1;
    }
}