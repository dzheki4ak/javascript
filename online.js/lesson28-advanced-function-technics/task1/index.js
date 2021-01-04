const calc = value => {
     let initValue = value;

     const methodSet = {
          
          add(number) {
               initValue += number;
               return this;
          },

          substract(number) {
               initValue -= number;
               return this;
          },

          mult(number) {
               initValue *= number;
               return this;
          },

          div(number) {
               initValue /= number;
               return this;
          },

          result() {
               return initValue;
          },
     }
     return methodSet;
}

const result = calc(5).add(10).substract(3).div(4).result(); 