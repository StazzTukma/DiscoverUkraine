import { useState } from "react";

export const cities = [
    {
        name: "None",
        imgURL: null,
        description: 'Click on the city marker on the map to display the city',
    },
    {
        name: "Lutsk",
        imgURL: "https://volyninfa.com.ua/wp-content/uploads/2021/01/picture2_luck-jaki-cikavi-_338774_p0.jpg",
        description: "Lutsk is a city on the Styr River in northwestern Ukraine. It is the administrative center of the Volyn Oblast (province) and the administrative center of the surrounding Lutsk Raion (district) within the oblast, although it is not a part of the raion. Lutsk has the status of a city of oblast significance, equivalent to that of a district, and a population of 217,197 (2021 est.) It is a historical, political, cultural and religious center of Volyn.",
    },
    {
        name: "Rivne",
        imgURL: "https://f.discover.ua/city/89/D9Tbh.jpg",
        description: "Rivne is a city in western Ukraine. The city is the administrative center of Rivne Oblast (province), as well as the surrounding Rivne Raion (district created in the USSR) within the oblast. Administratively, Rivne is incorporated as a city of oblast significance and does not belong to the district. Between World War I and World War II, the city was located in Poland as a district-level (county) seat in Wolyn Voivodeship. At the start of World War II in 1939, Rivne was occupied by the Soviet Red Army and received its current status by becoming a seat of regional government of the Rivne Oblast which was created out of the eastern portion of the voivodeship. During the German occupation of 1941–44 the city was designated as a capital of German Ukraine (Reichskommissariat Ukraine). In the spring of 1919, it also served as a provisional seat of the Ukrainian government throughout the ongoing war with Soviet Russia. Rivne is an important transportation hub, with the international Rivne Airport, and rail links to Zdolbuniv, Sarny, and Kovel, as well as highways linking it with Brest, Kyiv, and Lviv. Among other leading companies there is a chemical factory of Rivne-Azot (part of Ostchem Holding).",
    },
    {
        name: "Zhytomyr",
        imgURL: "https://freshnews.zt.ua/upload/resize_cache/iblock/0aa/700_400_1/0aa6c63eb28800b56cd26e8810e58085.jpg",
        description: "Zhytomyr is a city in the north of the western half of Ukraine. It is the administrative center of Zhytomyr Oblast (province), as well as the administrative center of the surrounding Zhytomyr Raion (district). The city of Zhytomyr is not a part of Zhytomyr Raion: the city itself is designated as its own separate raion within the oblast; moreover, Zhytomyr consists of two so-called |raions in a city|: Bohunskyi Raion and Koroliovskyi Raion (named in honor of Sergey Korolyov). Zhytomyr occupies an area of 65 square kilometers (25 square miles). Zhytomyr is a major transportation hub. The city lies on a historic route linking the city of Kyiv with the west through Brest. Today it links Warsaw with Kyiv, Minsk with Izmail, and several major cities of Ukraine. Zhytomyr was also the location of Ozerne airbase, a key Cold War strategic aircraft base 11 kilometers (6.8 miles) southeast of the city. Important economic activities of Zhytomyr include lumber milling, food processing, granite quarrying, metalworking, and the manufacture of musical instruments. Zhytomyr Oblast is the main center of the Polish minority in Ukraine, and in the city itself there is a Latin Catholic cathedral and large Roman Catholic Polish cemetery, founded in 1800. It is regarded as the third largest Polish cemetery outside Poland, after the Lychakivskiy Cemetery in Lviv and Rasos Cemetery in Vilnius."
    },
    {
        name: "Kyiv",
        imgURL: "https://images.adsttc.com/media/images/629c/d4fa/3e4b/31a7/1900/0006/newsletter/shutterstock_2092825747.jpg?1654445301",
        description: "Kyiv is the capital and most populous city of Ukraine. It is in north-central Ukraine along the Dnieper River. As of 1 January 2021, its population was 2,962,180 making Kyiv the seventh-most populous city in Europe. Kyiv is an important industrial, scientific, educational, and cultural center in Eastern Europe. It is home to many high-tech industries, higher education institutions, and historical landmarks. The city has an extensive system of public transport and infrastructure, including the Kyiv Metro. The city's name is said to derive from the name of Kyi, one of its four legendary founders. During its history, Kyiv, one of the oldest cities in Eastern Europe, passed through several stages of prominence and obscurity. The city probably existed as a commercial center as early as the 5th century. A Slavic settlement on the great trade route between Scandinavia and Constantinople, Kyiv was a tributary of the Khazars,[16] until its capture by the Varangians (Vikings) in the mid-9th century. Under Varangian rule, the city became a capital of Kievan Rus', the first East Slavic state. Completely destroyed during the Mongol invasions in 1240, the city lost most of its influence for the centuries to come. It was a provincial capital of marginal importance in the outskirts of the territories controlled by its powerful neighbours, first Lithuania, then Poland and ultimately Russia.",
    },
    {
        name: "Chernihiv",
        imgURL: "https://content.r9cdn.net/rimg/dimg/42/67/19c9fb07-city-52247-174af27c330.jpg?crop=true&width=1366&height=768&xhint=1455&yhint=1046",
        description: "Chernihiv is a city and municipality in northern Ukraine, which serves as the administrative center of Chernihiv Oblast and Chernihiv Raion within the oblast. Chernihiv's population is 285,234 (2021 est.)The city was designated as a Hero City during the 2022 Russian Invasion of Ukraine."
    },
    {
        name: "Sumy",
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Skyline_of_Sumy_%28cropped%29.jpg/540px-Skyline_of_Sumy_%28cropped%29.jpg",
        description: "Sumy is a city of regional significance in Ukraine, and the capital of Sumy Oblast. The city is situated on the banks of the Psel River in northeastern Ukraine with a population of 259,660 (2021 est.) according to the 2021 census, making it the 23rd-largest in the country. The city of Sumy was founded in the 1650s by the Cossacks within the region of Sloboda Ukraine, on the banks of the Psel River."
    },
    {
        name: "Lviv",
        imgURL: "https://varta1.com.ua/uploads/media/73/de/73de3127dd742bc7c6b3f790e9b27f06_w960.avif",
        description: "Lviv is a city that usually asociated with cultural centre of Ukraine. There you can find a lot of delicious restorants with intresting culture. Also there you can visit beautiful castles that have big plot, and looks very unusual in some cases it can be even scary."
    },
    {
        name: "Cherkasy",
        imgURL: "https://scontent.fkbp1-1.fna.fbcdn.net/v/t31.18172-8/20746320_905766626259581_117724786910493861_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=YThQ6S117FIAX_JaVc2&_nc_ht=scontent.fkbp1-1.fna&oh=00_AT9ZCCrW65QhJCzyEnU5TXXmjMohGxpF8o-D78BWA7G6WQ&oe=62E8C2F0",
        description: "Chercassy is city where you can find peace. This city always was on of the quiest cities in Ukraine. Also almost all city situated near water, so if u want to have a break near the beach you can rest there and look at beautiful river Dnipro"
    },
    {
        name: "Dnipro",
        imgURL: "http://udhtu.edu.ua/wp-content/uploads/2018/05/dnepr2.jpg",
        description: "Dnipro is one of the biggest cities in Ukraine. This is a city of contrasts that hides many secrets and mysteries. This is the space capital of the former Soviet Union, where Zenit missiles were produced. It is home to Europe's longest embankment of 23 km and the largest Jewish Menorah center. The Dnipro metro is the shortest in Europe, with a length of only 7.8 km. And right there is the longest building in the country - the Dnipro like Chinese wall with a length of 800 m. It has 32 entrances and as many as 3 trolleybus stops"
    },
    {
        name: "Sevastopol'",
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/%D0%9F%D0%B0%D0%BC%27%D1%8F%D1%82%D0%BD%D0%B8%D0%BA_%D0%B7%D0%B0%D1%82%D0%BE%D0%BF%D0%BB%D0%B5%D0%BD%D0%B8%D0%BC_%D0%BA%D0%BE%D1%80%D0%B0%D0%B1%D0%BB%D1%8F%D0%BC_%D0%B8_%D0%BD%D0%B0%D0%B1%D0%B5%D1%80%D0%B5%D0%B6%D0%BD%D0%B0_%D0%BC.%D0%A1%D0%B5%D0%B2%D0%B0%D1%81%D1%82%D0%BE%D0%BF%D1%96%D0%BB%D1%8C.jpg/1280px-%D0%9F%D0%B0%D0%BC%27%D1%8F%D1%82%D0%BD%D0%B8%D0%BA_%D0%B7%D0%B0%D1%82%D0%BE%D0%BF%D0%BB%D0%B5%D0%BD%D0%B8%D0%BC_%D0%BA%D0%BE%D1%80%D0%B0%D0%B1%D0%BB%D1%8F%D0%BC_%D0%B8_%D0%BD%D0%B0%D0%B1%D0%B5%D1%80%D0%B5%D0%B6%D0%BD%D0%B0_%D0%BC.%D0%A1%D0%B5%D0%B2%D0%B0%D1%81%D1%82%D0%BE%D0%BF%D1%96%D0%BB%D1%8C.jpg",
        description: "The city of Sevastopol is located in the southwestern part of Crimea, on the coast of the Black Sea. This city is of national importance as a major recreational, industrial, scientific-technical and cultural-historical center of Ukraine. Sevastopol is the largest sea trade and fishing port that does not freeze in winter. The city is approximately equidistant at a distance of 60-70 km from Simferopol, Yevpatoria and Yalta"
    },
    {
        name: "Luhans'k",
        imgURL: "https://ua-travels.in.ua/wp-content/uploads/2016/12/%D0%AD%D1%81%D1%82%D0%B0%D0%BA%D0%B0%D0%B4%D0%B0-752x440.jpg",
        description: "Luhansk is not only a beautiful city with many parks, squares and cultural monuments, but also one of the largest industrial cities of Ukraine. For example, the Luhansk Diesel Locomotive Plant supplied diesel locomotives to the entire former Soviet Union and is known in many countries abroad. Luhansk is also famous for its universities and institutes — VUU, LGMU. The KVK team of our LSH has repeatedly won and became famous in all CIS countries. Luhansk is also the homeland of many famous people."
    },
    {
        name: "Donets'k",
        imgURL: "https://shakhtar.com/-/media/fcsd/club/heading-images/placeholder-club-honours.jpg",
        description: "Before the beginning of the Russian aggression in Donbas, Donetsk was a large industrial and financial center of Ukraine, the mining capital of Ukraine, the center of the most economically developed region of Ukraine. It was a developed metropolis in which high industrial and scientific potential, highly qualified workers and specialists, developed infrastructure and production base were concentrated. The economy of the city consisted of 200 industrial enterprises with a production volume of more than UAH 50 billion and more than 20,000 small and medium-sized enterprises, which employed about 180,000 Donetsk residents."
    },
    {
        name: "Odesa",
        imgURL: "https://all.accor.com/magazine/imagerie/kartinka-1-9438.jpg", 
        description: "Odessa is a port city on the northwestern coast of the Black Sea. It is the third largest city in Ukraine after Kyiv and Kharkiv, the main industrial, cultural, transport, scientific and resort center of the Northern Black Sea region.Conveniently located geographically, Odesa quickly turned from a small settlement into a trade, industrial and scientific center of European importance. During the First World War and the Russian Civil War, the city experienced devastation and chaos, and during the Second World War it was partially destroyed. Today, the city continues to develop, now as a large industrial and resort center of Ukraine. "
    },
    {
        name: "Kharkiv",
        imgURL: "https://media.istockphoto.com/photos/kharkiv-landscape-view-picture-id623984152?k=20&m=623984152&s=612x612&w=0&h=DZxppfU5XmifcyQVaHqditPdxN0sV8GbaiQquuCCRsc=",
        description: "Kharkiv is a majestic and glorious city spread out in the east of Ukraine. It is the second most populous city in Ukraine and it has something to surprise guests. Powerful, bright, picturesque.It is not for nothing that Kharkiv once had the honor of being the capital of Ukraine. And although not so long, he left his mark in the history of our country. But Soviet times have passed and the capital has been moved, but the city, as a powerful industrial center, continues to function and enriches the country. Kharkiv is also a center of scientific and student self-government."
    },
    {
        name: "Hmelnitskiy",
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/%D0%91%D1%83%D0%B4%D0%B8%D0%BD%D0%BE%D0%BA_%D0%A5%D0%9E%D0%A5%D0%9C_03.jpg/550px-%D0%91%D1%83%D0%B4%D0%B8%D0%BD%D0%BE%D0%BA_%D0%A5%D0%9E%D0%A5%D0%9C_03.jpg",
        description: "On March 15, 1941, the city became the center of the Kamianets-Podilskyi region; January 16, 1954 — renamed to Khmelnytskyi in honor of Bohdan Khmelnytskyi, the center of the Khmelnytskyi region. The area of ​​the city increases significantly, especially after the annexation of the suburban villages of Zareche and Grechany. Several plants of all-Union importance are being established - transformer substations, Traktorodetal, radio engineering, thermoplastic machines, Kation, industrial construction, food and light industry enterprises are becoming operational. In particular, the plant of transformer substations becomes the leader in the USSR in the production of transformers for railway transport, the Kation plant is one of the largest producers of capacitors in the country, and the State Enterprise Novator is the only producer of special military aviation equipment in the USSR. The emergence of such enterprises turned the city of Khmelnytskyi into a large industrial center of Ukraine. The population grew significantly, the first university was founded - the Institute of Technology (now Khmelnytskyi National University), the first trolleybus lines were laid, and new neighborhoods were built. In addition, the city becomes an important military-strategic center not only of the region, but of the entire country. During the Cold War, in 1956, the 17th Guards Motorized Rifle Division arrived at the regional center for a permanent deployment, and in 1961-1964, units of the 19th Division from the 43rd Missile Army of the Soviet Army of the Russian Soviet Socialist Republic arrived. It is from this time that combat positions of Intercontinental Ballistic Missiles are deployed near Khmelnytskyi and on the territory of the region[14]. A significant event that adds to the military history of the city was the founding of the Khmelnytskyi Higher Artillery Command School in 1970, on the basis of which in the 1990s the only National Academy of the State Border Service of Ukraine named after Bohdan Khmelnytskyi was established. After the end of the Cold War, all nuclear missiles in the country, in particular in the Khmelnytskyi region, were eliminated under the Nanna-Lugar Program.",
    },
    {
        name: "Uzhhorod",
        imgURL: "https://cdn4.suspilne.media/images/291d6825e85de6d5.jpg",
        description: "Uzhgorod is a city on the Uzh River in the Zakarpattia region of Ukraine, the center of the Uzhgorod urban community and the Uzhgorod district. Located 811 km from Kyiv, on the border with Slovakia. The heart of Uzhgorod is its castle, many tourists are also attracted by the church, synagogue and bishop's residence. In 1646, under the auspices of the Vatican, the Uzhgorod Union was proclaimed and the Greek Catholic Church was formed in Transcarpathia."
    },
    {
        name: "Kropyvnytskyi",
        imgURL: "http://ukrainaincognita.com/wp-content/uploads/files/kirov_ped2.jpg",
        description: "Kropuvnickiy administrative center of Kirovohrad region and Kropyvnytskyi district; an industrial and cultural center in the center of the country; highway junction, railway station, airport. Kropyvnytskyi lies within the borders of the Dnieper Highlands, on the banks of the Ingul River, where smaller rivers — Sugoklia and Biyanka — flow into it."
    },
    {
        name: "Zaporizhzhia",
        imgURL: "https://etnoxata.com.ua/image/cache/catalog/image/catalog/stat3/06_2016/22_06_16/z/00.webp",
        description: "It is one of the largest administrative, industrial and cultural centers of southern Ukraine with developed mechanical engineering, ferrous and non-ferrous metallurgy, chemical and construction industries, a river port and an important transit railway hub. According to the Unified District Planning Scheme of Ukraine, Zaporizhzhia occupies an important place in the regional settlement system and performs the functions of regional, international and district centers, each of which has its own inter-village service area"
    },
    {
        name: "Mykolaiv",
        imgURL: "https://m.kontrakty.ua/images/stories/nikolaev24.com.ua.jpg",
        description: "On the steppe expanses of southern Ukraine, where the Ingul and Southern Bug rivers merge, the city of Mykolaiv spread out. The city is overturned across Ingul, from the embankment you can admire a beautiful panorama and a view of the port. Sea vessels enter here, since Mykolayiv served as the gateway to the Black Sea for a long time, and the fame of the city of ships, sailors and brides was established behind it."
    },
    {
        name: "Kherson",
        imgURL: "https://static.dw.com/image/61138696_401.jpg",
        description: "Kherson is a city in the south of Ukraine, the administrative center of the Kherson region. It is located on the right high bank of the Dnieper. The population as of January 1, 2022 is 279,131 people. An important economic center of southern Ukraine. A significant railway junction (on the Mykolaiv-Snigurivka-Dzhankoy line), sea trade port, river port. Kherson has a satellite city of Oleshka. Since July 17, 2020, it has been the administrative center of the Kherson district."
    },
    {
        name: "Vinnytsia",
        imgURL: "https://tamtour.com.ua/local/image/440/009/ua241.jpg",
        description: "Vinnytsia is a wonderful city in Central Ukraine, which is famous not only for its rich history, but also for the many awards it has been awarded with. Several times Vinnytsia was recognized as the most comfortable city in Ukraine, many call Vinnytsia the city of fountains. Also Vinnica has really big cool city of dance of fontains"
    },
    {
        name: "Ternopil'",
        imgURL: "https://ternopilcity.gov.ua/upload/DJI-0006-2.jpg",
        description: "Of the interesting details, it was in Ternopil that the first Esperanto textbook in Ukraine was published. It was in Ternopil that the first Singing Field in Ukraine appeared. Nearby is the Optimistic Cave - the longest cave on the mainland. About a hundred castles have survived in Ukraine, and 34 of them are in the Ternopil region."
    },
    {
        name: "Chernivtsi",
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/%D0%90%D1%80%D1%85%D1%96%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D0%BD%D0%B8%D0%B9_%D0%B0%D0%BD%D1%81%D0%B0%D0%BC%D0%B1%D0%BB%D1%8C_%D0%A2%D0%B5%D0%B0%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%97_%D0%BF%D0%BB%D0%BE%D1%89%D1%96.Jpg/800px-%D0%90%D1%80%D1%85%D1%96%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D0%BD%D0%B8%D0%B9_%D0%B0%D0%BD%D1%81%D0%B0%D0%BC%D0%B1%D0%BB%D1%8C_%D0%A2%D0%B5%D0%B0%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%97_%D0%BF%D0%BB%D0%BE%D1%89%D1%96.Jpg",
        description: "The people of Chernivtsi started from a fortress built by warriors in the valley of the Prut River on the southwestern edge of the Principality of Galicia in the second half of the 12th century. The name Chernivtsi comes from the Old Slavic word chern, a black garden, the defensive walls of which were made of earth and oak and were black in color. This is written by the ACC news agency. The first reliable mention of Chernivtsi dates back to the charter of the Moldavian master Oleksandr Dobry, issued to Lviv merchants on October 8, 1408."
    },
    {
        name: "Ivano-Frankivs'k",
        imgURL: "http://synod.ugcc.ua/pub/images/8818529044ee3ff1.jpg",
        description: "Ivano-Frankivsk is a very small and compact city, which seems very tiny from a bird's eye view. But this does not mean at all that he has nothing to surprise guests and travelers. In fact, to visit all the interesting neighborhoods and learn all the secrets of the city, one vacation is not enough. Ivano-Frankivsk has a unique monument that has no analogues in Europe. This is a monument to the egg."
    },
    {
        name: "Poltava",
        imgURL: "https://planetofhotels.com/guide/sites/default/files/styles/big_gallery_image/public/text_gallery/poltava-3.jpg",
        description: "Poltava is the spiritual capital of Ukraine, one of the oldest and greenest cities of our country, known for its historical and cultural monuments. For 11 centuries, Poltava increases glorious traditions, takes care of the beauty of the present, rejuvenates, and steps optimistically into the future."
    },

    {
        name: '',
        imgURL: null,
        description: "lorem"
    },
]

export const search = (name, inputArray) => {
    for (let i=0; i < inputArray.length; i++) {
        if (inputArray[i].name == name) {
            return inputArray[i];
        }
  }
}