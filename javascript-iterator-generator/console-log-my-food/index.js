#! C:\Program Files\nodejs\

const { default: axios } = require("axios");
const { read, fchmod, fchown } = require("fs");

const readLine = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "enter command > ",
});

readLine.prompt();
readLine.on("line", async (line) => {
  switch (line.trim()) {
    case "list vegan foods":
      {
        const { data } = await axios.get(`http://localhost:3000/food`);
        function* listVeganFoods() {
          try {
            let idx = 0;
            const veganOnly = data.filter((food) => {
              return food.dietary_preferences.includes("vegan");
            });

            while (veganOnly[idx]) {
              yield veganOnly[idx];
              idx++;
            }
          } catch (error) {
            console.log("Something went wrong while listing vegan items", {
              error,
            });
          }
        }
        for (let val of listVeganFoods()) {
          console.log(val.name);
        }
        readLine.prompt();

        // const veganIterable = {
        //   [Symbol.iterator]() {
        //     return this;
        //   },
        //   next() {
        //     const current = veganOnly[idx];
        //     idx++;
        //     if (current) {
        //       return { value: current, done: false };
        //     } else {
        //       return { value: current, done: true };
        //     }
        //   },
        // };
      }
      break;

    case "log":
      {
        const { data } = await axios.get(`http://localhost:3000/food`);
        const it = data[Symbol.iterator]();
        let actionIt;

        function* actionGenerator() {
          try {
            const food = yield;
            const servingSize = yield askForServingSize();
            yield displayCalories(servingSize, food);
          } catch (error) {
            console.log({ error });
          }
        }

        //   const actionIterator = {
        //     [Symbol.iterator]() {
        //       let positions = [...this.actions];
        //       return {
        //         [Symbol.iterator]() {
        //           return this;
        //         },
        //         next(...args) {
        //           if (positions.length > 0) {
        //             const position = positions.shift();
        //             const result = position(...args);
        //             return { value: result, done: false };
        //           } else {
        //             return { done: true };
        //           }
        //         },
        //         return() {
        //           positions = [];
        //           return { done: true };
        //         },
        //         throw(error) {
        //           console.log(error);
        //           return { value: undefined, done: true };
        //         },
        //       };
        //     },
        //     actions: [askForServingSize, displayCalories],
        //   };

        function askForServingSize(food) {
          readLine.question(
            `How many servings did you eat? (as decimal: 1, 0.5, 1.25, etc..)`,
            (servingSize) => {
              if (servingSize === "nevermind" || servingSize === "n") {
                actionIt.return();
              } else if (
                typeof servingSize !== "number" ||
                servingSize === NaN
              ) {
                actionIt.throw("Please, numbers only");
              } else {
                actionIt.next(servingSize, food);
              }
            }
          );
        }

        async function displayCalories(servingSize, food) {
          const calories = food.calories;
          console.log(
            `${
              food.name
            } with a serving size of ${servingSize} has a ${Number.parseFloat(
              calories * parseFloat(servingSize, 10)
            ).toFixed()} calories.`
          );
          const { data } = await axios.get(`http://localhost:3000/users/1`);
          const usersLog = data.log || [];
          const putBody = {
            ...data,
            log: [
              ...usersLog,
              {
                [Date.now()]: {
                  food: food.name,
                  servingSize,
                  calories: Number.parseFloat(
                    calories * parseFloat(servingSize, 10)
                  ),
                },
              },
            ],
          };
          await axios.put(`http://localhost:3000/users/1`, putBody, {
            headers: {
              "Content-Type": "application/json",
            },
          });

          actionIt.next();
          readLine.prompt();
        }

        readLine.question(
          `What would you like to log today? `,
          async (item) => {
            let position = it.next();
            while (!position.done) {
              const food = position.value.name;
              if (food === item) {
                console.log(`${item} has ${position.value.calories} calories`);
                actionIt = actionGenerator();
                actionIt.next();
                actionIt.next(position.value);
              }
              position = it.next();
            }
            readLine.prompt();
          }
        );
      }
      break;
    case `today's log`:
      readLine.question("Email: ", async (emailAddress) => {
        const { data } = await axios.get(
          `http://localhost:3000/users?email=${emailAddress}`
        );
        const foodLog = data[0].log || [];
        let totalCalories = 0;

        function* getFoodLog() {
          try {
            yield* foodLog;
          } catch (error) {
            console.log("Error reading the food log", { error });
          }
        }
        const logIterator = getFoodLog();
        for (const entry of logIterator) {
          const timestamp = Object.keys(entry)[0];
          if (isToday(new Date(Number(timestamp)))) {
            console.log(
              `${entry[timestamp].food}, ${entry[timestamp].servingSize} serving(s)`
            );
            totalCalories += entry[timestamp].calories;
            if (totalCalories >= 12000) {
              console.log(`Dammnn! You've reached 12,000 calories`);
              logIterator.return();
            }
          }
        }
        console.log("--------------");
        console.log(`Total Calories: ${totalCalories}`);
        readLine.prompt();
      });
      break;
  }
  readLine.prompt();
});

function isToday(timestamp) {
  const today = new Date();
  return (
    timestamp.getDate() === today.getDate() &&
    timestamp.getMonth() === today.getMonth() &&
    timestamp.getFullYear() === today.getFullYear()
  );
}
