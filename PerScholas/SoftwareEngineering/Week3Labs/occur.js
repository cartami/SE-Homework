<script>
 
// Javascript program to count occurrences
// of an element
 
 
    // Returns number of times x occurs in arr[0..n-1]
    function countOccurrences(arr,n,x)
    {
        let res = 0;
        for (let i=0; i<n; i++)
        {
            if (x == arr[i])
                res++;
        }
        return res;
    }
     
    arr=[1, 2, 2, 2, 2, 3, 4, 7 ,8 ,8]
    let  n = arr.length;
    let x = 2;
    document.write(countOccurrences(arr, n, x));
     
    // This code is contributed by avanitrachhadiya2155
     
</script>