# Task

В классе FighterService создать метод для получения детальной информации о бойце. Добавить возможность ее просмотра - для этого реализовать функцию getFighterInfo, которая будет обрабатывать клик по бойцу. Данные отобразить с помощью функции createFighterPreview.

Процесс битвы будет запускаться с помощью кнопки Fight. В функции renderArena вызвать функцию fight и после окончания битвы вывести победителя на экран с помощью функции showWinnerModal.

Функция fight должна возвращать Промис, который будет выполнен успешно, если кто-то из бойцов побеждает.

Игроки наносят удары друг другу с помощью клавиш A (первый боец) и J (второй боец). Бойцы могут блокировать удары с помощью клавиш D и L соответственно, в таком случае боец ​​уклоняется от удара. Также боец ​​не может нанести удар, если он находится в блоке.

Показатель здоровья бойца уменьшается на количество вреда, причиненного противником. Ее можно будет определить с помощью функции getDamage, которая будет возвращать getHitPower - getBlockPower (или 0, если боец ​​"ушел" от удара полностью, то есть сила блока больше силы удара).

Также причиненный ущерб нужно отобразить с помощью индикатора здоровья, который находится над бойцами. Достаточно уменьшить ширину элемента health-bar.

Реализовать функции:

getHitPower, который бы рассчитывал силу удара (количество ущерба здоровью противника) по формуле power = attack _ criticalHitChance;, где criticalHitChance - рандомно число от 1 до 2,
getBlockPower, который бы рассчитывал силу блока (амортизация удара противника) по формуле power = defense _ dodgeChance;, где dodgeChance - рандомно число от 1 до 2. Не нужно округлять результаты данных функций.
Бойцы также могут наносить критические удары, которые не могут быть заблокированы и вычисляются по формуле 2 \* attack, где attack- характеристика бойца. Для того, чтобы бойцу нанести такой удар, нужно одновременно нажать 3 соответствующие клавиши, указанные в файле controls.js. Этот удар можно наносить не чаще, чем каждые 10 секунд.

Вот ссылка на стартер проекта - https://github.com/binary-studio-academy/stage-2-es6-for-everyone

Note: Существующий функционал и код не нужно менять, поскольку работу будут проверять автотесты.

Домашнюю работу обязательно сдавать на Bitbucket: https://bitbucket.org. Создавать пулл-реквесты, таски, проекты на этот раз не нужно - только работа с самим Git-ом.
