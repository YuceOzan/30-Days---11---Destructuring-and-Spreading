const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
    ]

    //1. ITERATE THROUGH THE USERS ARRAY AND GET ALL THE KEYS OF THE OBJECT USING DESTRUCTURING

    for (const {name, scores, skills, age} of users){
        console.log(name, scores, skills, age)
    };
    
    //2. FIND THE PERSONS WHO HAVE LESS THAN TWO SKILLS

    for(const {name, skills} of users){
        if (skills.length < 2){
            console.log(`${name} has has less than two skills: ${skills}`)
        };
    };

    