const objects = [
    { Fname: 'Abu Bakar', Lname: 'Saddique', value: 10 },
    { Fname: 'Ali', Lname: 'Raza', value: 15 },
    { Fname: 'Usman', Lname: 'Umer', value: 5 }
  ];

    const highestValue = objects.reduce((previous, current) =>
        (previous.value > current.value) ? previous : current   //if true previous, if false current
    );

    console.log(`The object with the highest value is: ${JSON.stringify(highestValue)}`);
