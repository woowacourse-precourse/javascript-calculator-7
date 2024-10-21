# javascript-calculator-precourse

## Features

1. **Handle empty string**  
   - If the input string is empty, the result will be 0.  
     Example: `"" => 0`

2. **Basic delimiters support**  
   - The input string can use commas (`,`) or colons (`:`) as separators. The program will add the numbers split by these separators.  
     Example: `"1,2"` => 3, `"1,2:3"` => 6

3. **Custom delimiter support**  
   - You can set a custom separator using the format `"//[delimiter]\n"`.  
     Example: `"//;\n1;2;3"` => 6  
   - This allows using different separators besides comma and colon.

4. **Input validation**  
   - If the input string has invalid values (not numbers or wrong format), the program will show an error message: `[ERROR] Invalid input`.

5. **Output sum of numbers**  
   - The program will show the sum of all numbers found in the input string.

6. **Error handling**  
   - If there is a mistake in the input, the program will show an error message starting with `[ERROR]`.
