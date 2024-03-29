function sieveOfEratosthenes(n) {
    var primes = [];
    for (var i = 0; i <= n; i++)
        primes[i] = true;

    primes[0] = false;
    primes[1] = false;

    for (var i = 2; i <= Math.sqrt(n); i++)
        for (var j = 2; j*i <= n; j++ )
            primes[j*i] = false;

    var result = [];

    for (var i = 0; i <= n; i++)
        if (primes[i]) result.push(i);

    return result;

}

console.log(sieveOfEratosthenes(200));