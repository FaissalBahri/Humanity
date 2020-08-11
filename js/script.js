            
            var main =document.querySelector('main')
            var burger = document.getElementsByClassName('burger');
            var menu = document.getElementById('hidden');

            burger.addEventListener('click',function() {
                 menu.classList.add('open');
            })
            main.addEventListener('click',function(){
                menu.classList.remove('open');
            })