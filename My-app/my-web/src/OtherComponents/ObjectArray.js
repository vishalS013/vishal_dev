const ObjectArray = () => {

  const data = [
    {
      name: "shubham",
      lastname: "shukla",
      city: "jammu",
      anotherdata: {
        age: 24,
        area: ["fazilka", "indore", "pakistan"],
        final: [
          {
            data: "jgah",
            pincode: "201203",
            city: [
              { name: "himachal", area: "jammu" },
              { name: "una", area: "pathankot" },
              { name: "ferozpur", area: "ropar" },
              {
                data: [
                  { edu: "bca", result: "pass" },
                  {
                    edu: "bba",
                    result: "good",
                  },
                  {
                    edu: "btec",
                    result: "excellent",
                    areaTwo: ["fazilka", "indore", "pakistan"],
                    performance: ["80%", "70%", "99%"],
                    anotherresut: [
                      { edu: "btec", result: "excellent" },
                      {
                        edu: "bcaaa",
                        result: "pooor",
                      },
                      {
                        edu: "arts",
                        result: "great",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  ];


  const result = data.map((item) => {
    let newData = item.anotherdata.final[0].city[3].data[2].anotherresut[1].result;
    
    for(let i=0; i <= newData.length;i++){
      document.write ( `my performance is ${item.anotherdata.final[0].city[3].data[2].performance[1]} and percentage is ${item.anotherdata.final[0].city[3].data[2].anotherresut[1].result}`);
      return newData
    } 
  });
  //  array.push(result) 
  console.log(result);
  return (
    <div>

<h1>chgffjfj</h1>

    </div>
   
  )
}

export default ObjectArray