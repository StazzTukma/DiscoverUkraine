import { useState } from "react";

export const cities = [
    {
        name: "None",
        imgURL: null,
        description: 'Click on the city marker on the map to display the city',
    },
    {
        name: "Luts`k",
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
        name: "lorem",
        imgURL: "lorem",
        description: "lorem"
    },
    {
        name: "lorem",
        imgURL: "lorem",
        description: "lorem"
    },
    {
        name: "lorem",
        imgURL: "lorem",
        description: "lorem"
    },
    {
        name: "lorem",
        imgURL: "lorem",
        description: "lorem"
    },
    {
        name: "lorem",
        imgURL: "lorem",
        description: "lorem"
    },
    {
        name: "lorem",
        imgURL: "lorem",
        description: "lorem"
    },
]

export const search = (id, inputArray) => {
    for (let i=0; i < inputArray.length; i++) {
        if (inputArray[i].id === id) {
            return inputArray[i];
        }
    }
  }