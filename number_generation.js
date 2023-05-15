/** генерация случайного числа в диапозоне 1-100 с задеркой в 3 секунды
 * и асинхронная проверка на четность **/


function checkNumber() {
    const myPromise = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            let number = Math.floor(Math.random() * (100 - 1)) + 1
            if (number % 2 ===0) resolve(`Сгенерировааное число - ${number}`)
            else reject(`Сгенерировааное число - ${number}`)
        }, 3000);

    })
    myPromise
        .then((result) => {
            console.log('Завершено успешно', result);
        })
        .catch((error) => {
            console.log('Завершено с ошибкой', error);
        });
}

checkNumber()