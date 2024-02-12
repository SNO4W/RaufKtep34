/* Меджнунов Рауф ИСиП(п) 2/4 */

/* 1  */
function filter(email, blackLst) {
    let mailArr = [];

    for (let i = 0; i < email.length; i++) {
        let emails = email[i];

        if (blackLst.includes(emails) === false) {
          mailArr.push(emails); 
        }
      }
    
      return mailArr;
    }

let email = ["yfguhkij@mail.ru", "fygu1241512@mail.ru", "wqtfruqi1111@mail.ru"]
let blackLst = ["fygu1241512@mail.ru", "qiuwhfiqogh@mail.ru"];
let mailArr = filter(email, blackLst);
console.log(mailArr, '\n');


/* 2  */
function calculate(total, quantity, promocode = null) {
    if (promocode === 'ДАРИМ300') {
      total = Math.max(0, total - 300);
      console.log("Применен промокод ДАРИМ300;");
    }
  
    // скидку для кол-во товаров
    if (quantity >= 10) {
      total *= 0.95; // скидка 5%
      console.log("Применена скидка кол-во товаров;");
    }
  
    // скидка общей суммы
    if (total > 50000) {
      let newTotal = (total - 50000) * 0.2; // сумма скидки
      total -= newTotal;
      console.log("Применена скидка общей суммы;");
    }
  
    // промокод "СКИДКА15"
    if (promocode === 'СКИДКА15' && total >= 20000) {
      total *= 0.85; // скидка 15%
      console.log("Применен промокод СКИДКА15;");
    }
  
    return total;
  }

  let totalPrice = 60000;
  let totalQuantity = 19;
  let promocode = "СКИДКА15";
  
  let finalPrice = calculate(totalPrice, totalQuantity, promocode);
  console.log(`Цена с учётом всех скидок: ${finalPrice}`);