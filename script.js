let fileInput = document.querySelector('#file-input');

// Чтение файла
fileInput.addEventListener('change', function(event){
    //onchange
    let file = fileInput.files[0];

    //обьект который читает файл
    let reader = new FileReader();  
    document.getElementById('message').innerHTML = 'Пожалуйста подождите. Идет поиск палиндромов...'
    reader.onload = function (event) {
        // console.log(reader.result);
        
        palindrom(reader.result.split('\r\n'));
    }
    reader.readAsText(file);

});

// Поиск палиндрома
const palindrom = (arr) => {

    let array = new Array();

    for (let index = 0; index < arr.length; index++) {
       
        // отображает что браузер не завис
        // console.log('.');

        // Переводим слова строки в нижний регистр, разделяем их пробелом
        // переворачиваем и соеденяем их через пробел
       str = arr[index].toLowerCase().split('').reverse().join('');
        
       // Проверяем чтобы слово было не менее 4 символов
       // не содержало дефисов и соответствовало самому себе в перевернутом виде
       if(str.length >= 3 && !(str.search(/-/) != -1) && str == arr[index]) {
            //  console.log(arr[index]);
            array.push(arr[index]);
            document.getElementById('message').innerHTML = 'Поиск дал следующие результаты:'
            document.getElementById('result').innerHTML = array.join('<br>');     
        }
        
    }
}