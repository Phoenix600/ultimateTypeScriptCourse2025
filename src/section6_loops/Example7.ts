let m:number = 120;
let n:number = 75;

while (n != m)
{
    if(n > m)
    {
        n = m - n;
    }
    else
    {
        m = n - m;
    }
}

console.log("GCD : " + m);