import defaultImage1 from '../assets/Default1.jpeg';
import defaultImage2 from '../assets/Default2.jpeg';
import defaultImage3 from '../assets/Default3.jpeg';
import defaultImage4 from '../assets/Default4.jpeg';
import defaultImage5 from '../assets/Default5.jpeg';
import defaultImage6 from '../assets/Default6.jpeg';

const mockPaintings = [
    {
        id: 1,
        picture: defaultImage1,
        title: 'Утро в сосновом лесу',
        context: 'Утро в сосновом лесу - одно из ярких произведений кисти И. Шишкина. Шедевр пропитан восхищением природы растительного и животного мира. На картине все смотрится очень гармонично. Зеленые, голубые и ярко-желтые тона создают эффект едва проснувшейся от сна природы. На заднем плане можно увидеть яркие золотистые оттенки – это намек на пробивающиеся лучи солнца. Они придают картине торжественную атмосферу. По земле еще клубится туман, изображенный довольно реалистично, и, если сосредоточиться на этой детали шедевра, то можно прочувствовать утреннюю прохладу. лавный акцент картины – это сочетание солнечного света на заднем плане и медведей на дереве на переднем. Если визуально провести линию через эти объекты, то мы увидим, что они изображены художником наиболее ярко и насыщенно. Все остальное является просто легкими дополняющими зарисовками.',
        price: '14000',
        status: 'действует',
    },
    {
        id: 2,
        picture: defaultImage2,
        title: 'Ковёр-самолёт',
        context: 'Картина «Ковер-самолет» Виктора Васнецова привлекает не только мастерством исполнения, но и жизнеутверждающим посылом. Автор в своем произведении продемонстрировал победу добра над злом, света над серостью обыденности, стремление к лучшему будущему, способность человека преодолевать все препятствия и невзгоды. Весь окружающий пейзаж намеренно выполнен в приглушенных, тускло-зеленых тонах. Природа выглядит застывшей: зеркальная гладь реки, замершие деревья. Тогда как главные персонажи нарисованы насыщенными красками, наполнены движением, как будто поднявшись над обыденностью и житейскими невзгодами, устремляются в будущее, полное грандиозных планов и свершений.',
        price: '1800',
        status: 'действует',
    },
    {
        id: 3,
        picture: defaultImage3,
        title: 'Девятый вал',
        context: 'Драматичный сюжет картины характерен для романтизма. Корабль разбился в шторм, остался только обломок мачты, на котором пытаются выжить шестеро моряков. Буря все еще продолжается: на несчастных поднимается самая опасная волна. Но уже наступило утро, выходит солнце, и его яркий тёплый свет даёт надежду на спасение. «Девятый вал» стал вершиной романтического периода творчества Айвазовского. 33-летний художник уже был достаточно известен и в России, и за рубежом, получил несколько золотых медалей и звание академика Императорской академии художеств. Но это полотно сразу стало шедевром.',
        price: '12800',
        status: 'действует',
    },
    {
        id: 4,
        picture: defaultImage4,
        title: 'Золотая осень',
        context: 'Яркий, охристый цвет, перемежёванный с красным и оранжевым, льющийся с полотна, настолько красноречив, что даже не глядя на подпись у рамы, можно легко догадаться – перед нами «Золотая осень» Исаака Левитана. Картина была впервые представлена на 24-й выставке передвижников, и предваряла её скрупулёзная работа. Сначала были созданы этюды с натуры – автор осенью 1895 года жил в усадьбе Горка Тверской губернии, там и искал сюжеты, а закончена уже в Москве. Сразу привлекает внимание настроение работы. Живописец от элегических, очень тонких и душевных работ вдруг перешёл к пышному, яркому, торжественному пейзажу. Как водится, все значимые события в жизни творца непременно находят свой отклик в его произведениях, и Левитан не явился исключением – его личная жизнь бурлила и была полна страстей во время написания «Золотой осени».',
        price: '15600',
        status: 'действует',
    },
    {
        id: 5,
        picture: defaultImage5,
        title: 'Смотр Черноморского флота в 1849 году',
        context: 'XIX век – время блистательных побед Российского флота. Принимавший участие в нескольких морских операциях, побывавший в Севастополе во время Крымской войны, Иван Константинович Айвазовский восхищался героизмом и отвагой русских моряков и гордился опытом и талантом наших знаменитых флотоводцев, со многими из которых был знаком лично.В 1849 году он принимает участие в смотре кораблей Черноморского флота, проводимом императором Николаем I. Это великолепное зрелище настолько врезалось в память художника, что в 1886 году он напишет картину, посвященную этому событию, наполненную торжеством и чувством гордости. Солнце стоит высоко в небе, яркими слепящими бликами отражаясь воде, переливается серебром дорожка, бегущая по небольшим волнам. Легкие вытянутые облака плывут по бледно-голубому небу. Вдали, в мягкой золотисто-седой дымке, видна панорама Севастопольской бухты, на холмах раскинулся белый город. На горизонте тают нежные синевато-синие очертания гор.',
        price: '8700',
        status: 'действует',
    },
    {
        id: 6,
        picture: defaultImage6,
        title: 'Зимний пейзаж с церковью',
        context: 'Покинув в 1922 году навсегда Россию, Константин Иванович Горбатов продолжал считать себя русским художником. Еще в начале творческого пути за художником прочно закрепилась слава «певца русской старины». Ви­ды ста­рых рус­ских го­ро­дов, снежные зимы мастер продолжал писать и в солнечной Италии. Рус­ская те­ма­ти­ка прош­ла через все искусство ху­дож­ни­ка. Сох­ра­нять вер­ность на­ту­ре по­мо­га­ла не толь­ко па­мять ху­дож­ни­ка, но и вы­ве­зен­ные с со­бой за гра­ни­цу не­боль­шие этю­ды с рус­ски­ми мо­ти­ва­ми. «Зим­ний пей­заж с цер­ковью» был написан Горбатовым в 1925 году, когда Константин Иванович практически постоянно жил на Капри, этот период можно охарактеризовать как самый плодотворный в творчестве мастера. Пейзаж не­сет в се­бе све­жесть вос­по­ми­на­ний о рус­ской про­вин­ции. Зас­не­жен­ный ко­со­гор, ро­зо­вая цер­ковь на вер­ши­не ко­со­го­ра, до­ма по склону, за­ин­де­ве­лые бе­ре­зы на пе­ред­нем пла­не все это, кажется, только увиденным художником.',
        price: '9900',
        status: 'действует',
    }
]


export const getMockPaintings = () => {
    return {
        paintings: mockPaintings,
    };
};

export default mockPaintings;