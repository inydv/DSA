// 2^10
// Modular Exponentiation

#include <iostream>
using namespace std;

int modularExponentiation(int x, int n, int m)
{
    int res = 1;

    while (n > 0)
    {
        if (n & 1)
        {
            // ODD
            res = (1LL);
        }

        x = x * x;
        n = n >> 1;
    }

    return res;
}

int main()
{
    return 0;
}