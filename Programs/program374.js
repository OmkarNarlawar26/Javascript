// 2 constructors in one code are Not Allowed

class Demo
{
    constructor()
    {
        this.No1 = 0;
        this.No2 = 0;

        console.log("Inside default constructor");
    }

    constructor(A,B)
    {
        this.No1 = A;
        this.No2 = B;

        console.log("Inside parametrised constructor");
    }
}

function main()
{
    let obj1 = new Demo();
    let obj2 = new Demo(10,20);
    
    console.log(obj.No1);
    console.log(obj.No2);
}

main();