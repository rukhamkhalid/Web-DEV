const numbers = [1, 2, 3, 4, 5, 6];
        console.log("Original Array:", numbers);

        const squaredNumbers = numbers.map(num => num * num);
        console.log("Squared Numbers:", squaredNumbers);

        const evenNumbers = numbers.filter(num => num % 2 === 0);
        console.log("Even Numbers:", evenNumbers);

        const sum = numbers.reduce((acc, num) => acc + num, 0);
        console.log("Sum of Numbers:", sum);