import requests
from time import sleep
from bs4 import BeautifulSoup
from geopy.geocoders import Nominatim
import os
import eel

def cls():
    os.system('cls' if os.name=='nt' else 'clear')

headers = {
    'User-Agent': 'Mozilla/5.0'
}

geolocator = Nominatim(user_agent="Test")

eel.init('web')

data = []

s = requests.Session()

cls()

data = [{'verified': True, 'name': 'Jozita', 'address': 'Vilnius, Parko g. 69B', 'coordinates': [54.6855165, 25.4287438], 'B95': '1.39', 'B98': '0.00', 'D': '1.29', 'Dk': '-', 'LPG': '0.70', 'updated': '-'}, {'verified': True, 'name': 'Jozita', 'address': 'Vilnius, Pramonės g. 18', 'coordinates': [54.6959581, 25.43206807185129], 'B95': '1.39', 'B98': '0.00', 'D': '1.29', 'Dk': '-', 'LPG': '0.70', 'updated': '-'}, {'verified': True, 'name': 'Jozita', 'address': 'Kaunas, Jonavos g. 51', 'coordinates': [54.93392265, 23.917581251684357], 'B95': '1.39', 'B98': '1.39', 'D': '1.29', 'Dk': '-', 'LPG': '0.70', 'updated': '-'}, {'verified': True, 'name': 'Jozita', 'address': 'Kaunas, Kuršių g. 13A', 'coordinates': [54.9361282, 23.89593455], 'B95': '1.39', 'B98': '1.39', 'D': '1.29', 'Dk': '-', 'LPG': '0.70', 'updated': '-'}, {'verified': True, 'name': 'Jozita', 'address': 'Garliava, Vytauto  g. 111A', 'coordinates': [54.82826815, 23.87309677771739], 'B95': '1.39', 'B98': '0.00', 'D': '1.29', 'Dk': '-', 'LPG': '0.70', 'updated': '-'}, {'verified': True, 'name': 'Jozita', 'address': 'Šiauliai, Girulių g. 1', 'coordinates': [55.92212885, 23.297136822153924], 'B95': '1.38', 'B98': '0.00', 'D': '1.28', 'Dk': '-', 'LPG': '0.70', 'updated': '-'}, {'verified': True, 'name': 'Jozita', 'address': 'Šiauliai, Architektų g. 80', 'coordinates': [55.92452875, 23.279541186389963], 'B95': '1.38', 'B98': '1.38', 'D': '1.28', 'Dk': '-', 'LPG': '0.70', 'updated': '-'}, {'verified': True, 'name': 'Jozita', 'address': 'Raseiniai, Maironio g. 78b', 'coordinates': [55.39002085, 23.130770704632482], 'B95': '1.39', 'B98': '1.39', 'D': '1.29', 'Dk': '-', 'LPG': '0.70', 'updated': '-'}, {'verified': True, 'name': 'Jozita', 'address': 'Tauragė, Šilalės g. 105 ', 'coordinates': [55.2717164, 22.2864955], 'B95': '1.39', 'B98': '0.00', 'D': '1.29', 'Dk': '-', 'LPG': '0.70', 'updated': '-'}, {'verified': False, 'name': 'Abromika ', 'address': 'Marvelės g. 132 Kaunas', 'coordinates': [54.903836749999996, 23.835313002699188], 'B95': '1.409', 'B98': '-', 'D': '1.319', 'Dk': '-', 'LPG': '0.73', 'updated': '2021-11-07 12:00:04'}, {'verified': False, 'name': 'Abromika ', 'address': 'Zarasų g. 9 Utena', 'coordinates': [55.5123015, 25.64397803731955], 'B95': '1.4', 'B98': '-', 'D': '1.31', 'Dk': '-', 'LPG': '0.74', 'updated': '2021-11-07 12:00:04'}, {'verified': False, 'name': 'Abromika ', 'address': 'Kęstučio g. 1B Kelmė Kelmė', 'coordinates': [55.63479315, 22.945431550927225], 'B95': '1.379', 'B98': '-', 'D': '1.299', 'Dk': '-', 'LPG': '0.728', 'updated': '2021-11-07 12:00:04'}, {'verified': False, 'name': 'Baltic Petroleum ', 'address': 'Jonavos g. 60A Kaunas', 'coordinates': [54.905035049999995, 23.89958489032746], 'B95': '1.399', 'B98': '-', 'D': '1.299', 'Dk': '-', 'LPG': '0.719', 'updated': '2021-11-07 13:23:06'}, {'verified': False, 'name': 'Baltic Petroleum ', 'address': 'Rinktinės g. 59 Vilnius', 'coordinates': [54.70280435, 25.28824285628972], 'B95': '1.379', 'B98': '-', 'D': '1.289', 'Dk': '-', 'LPG': '0.72', 'updated': '2021-11-01 18:01:14'}, {'verified': False, 'name': 'Circle K ', 'address': 'Jonavos g. 38 Kaunas', 'coordinates': [54.90159965, 23.895029337716615], 'B95': '1.452', 'B98': '-', 'D': '1.352', 'Dk': '-', 'LPG': '0.789', 'updated': '2021-11-07 13:23:50'}, {'verified': False, 'name': 'Circle K ', 'address': 'Talino g. 2B Vilnius', 'coordinates': [54.71335795, 25.20943107466475], 'B95': '1.499', 'B98': '-', 'D': '1.399', 'Dk': '-', 'LPG': '0.789', 'updated': '2021-11-05 07:37:35'}, {'verified': False, 'name': 'Circle K ', 'address': 'Sporto g. 16A Vilnius', 'coordinates': [54.69508615, 25.29812339734815], 'B95': '1.468', 'B98': '-', 'D': '1.379', 'Dk': '-', 'LPG': '-', 'updated': '2021-11-01 18:10:49'}, {'verified': False, 'name': 'Circle K ', 'address': 'Kareivių g. 13 Vilnius', 'coordinates': [54.71872355, 25.300572444622723], 'B95': '1.52', 'B98': '-', 'D': '1.362', 'Dk': '-', 'LPG': '0.743', 'updated': '2021-11-01 18:10:01'}, {'verified': False, 'name': 'Circle K ', 'address': 'Geležinio Vilko g. 2A Vilnius', 'coordinates': [54.670978950000006, 25.23677784229564], 'B95': '1.479', 'B98': '-', 'D': '1.389', 'Dk': '-', 'LPG': '0.779', 'updated': '2021-10-31 13:11:31'}, {'verified': False, 'name': 'Circle K ', 'address': 'Gariūnų g. 45 Vilnius', 'coordinates': [54.65890865, 25.161126545600148], 'B95': '1.476', 'B98': '-', 'D': '1.386', 'Dk': '-', 'LPG': '-', 'updated': '2021-10-30 14:07:59'}, {'verified': False, 'name': 'Circle K ', 'address': 'P. Žadeikos g. 1 Vilnius', 'coordinates': [54.73084595, 25.2415065786847], 'B95': '-', 'B98': '-', 'D': '-', 'Dk': '1.444', 'LPG': '-', 'updated': '2021-10-30 07:50:03'}, {'verified': False, 'name': 'Circle K ', 'address': 'Basanavičiaus g. 63 Panevėžys', 'coordinates': [55.7175665, 24.3709321], 'B95': '1.456', 'B98': '-', 'D': '1.366', 'Dk': '-', 'LPG': '0.789', 'updated': '2021-10-29 19:31:19'}, {'verified': False, 'name': 'Circle K ', 'address': 'Geležinio Vilko g. 39 Vilnius', 'coordinates': [54.7023542, 25.264959044092784], 'B95': '1.436', 'B98': '-', 'D': '1.346', 'Dk': '-', 'LPG': '0.769', 'updated': '2021-10-24 18:22:19'}, {'verified': False, 'name': 'Circle K ', 'address': 'Geležinio Vilko g. 4 Vilnius', 'coordinates': [54.7028361, 25.263915390981186], 'B95': '1.436', 'B98': '-', 'D': '1.346', 'Dk': '-', 'LPG': '0.769', 'updated': '2021-10-24 18:21:22'}, {'verified': False, 'name': 'Circle K ', 'address': 'A. Goštauto g. 13 Vilnius', 'coordinates': [54.694221799999994, 25.263425855921795], 'B95': '1.449', 'B98': '-', 'D': '1.359', 'Dk': '-', 'LPG': '-', 'updated': '2021-10-20 19:44:06'}, {'verified': False, 'name': 'Circle K ', 'address': 'Kareivių g. 3 Vilnius', 'coordinates': [54.71554825, 25.291019959419128], 'B95': '1.415', 'B98': '-', 'D': '1.315', 'Dk': '-', 'LPG': '0.779', 'updated': '2021-10-20 19:37:20'}, {'verified': False, 'name': 'Circle K ', 'address': 'Ukmergės g. 231 Vilnius', 'coordinates': [54.72020425, 25.246330146370244], 'B95': '1.426', 'B98': '-', 'D': '1.336', 'Dk': '-', 'LPG': '-', 'updated': '2021-10-16 22:46:56'}, {'verified': False, 'name': 'Circle K ', 'address': 'Laisvės pr. 43C Vilnius', 'coordinates': [54.7091609, 25.228024586474795], 'B95': '1.426', 'B98': '-', 'D': '1.336', 'Dk': '-', 'LPG': '0.773', 'updated': '2021-10-16 22:42:37'}, {'verified': False, 'name': 'Circle K ', 'address': 'Kareiviu 3 Vilnius', 'coordinates': [54.71554825, 25.291019959419128], 'B95': '-', 'B98': '-', 'D': '1.275', 'Dk': '-', 'LPG': '-', 'updated': '2021-10-10 23:05:51'}, {'verified': False, 'name': 'Ecoil ', 'address': 'Ukmergės g. 130 Vilnius', 'coordinates': [54.7032021, 25.257464600000006], 'B95': '1.34', 'B98': '-', 'D': '1.24', 'Dk': '-', 'LPG': '-', 'updated': '2021-10-08 15:21:06'}, {'verified': False, 'name': 'Emsi ', 'address': 'Ukmergės g. 437 Vilnius', 'coordinates': [54.753616949999994, 25.21174702871773], 'B95': '1.38', 'B98': '-', 'D': '1.29', 'Dk': '-', 'LPG': '0.73', 'updated': '2021-10-24 18:20:43'}, {'verified': False, 'name': 'Emsi ', 'address': 'Laisvės pr. 80B Vilnius', 'coordinates': [54.7234742, 25.2329583269936], 'B95': '1.36', 'B98': '-', 'D': '1.27', 'Dk': '-', 'LPG': '0.73', 'updated': '2021-10-24 18:18:53'}, {'verified': False, 'name': 'Jozita ', 'address': 'Parko g. 69B Vilnius', 'coordinates': [54.6855165, 25.4287438], 'B95': '1.39', 'B98': '-', 'D': '1.29', 'Dk': '-', 'LPG': '0.7', 'updated': '2021-11-07 12:00:04'}, {'verified': False, 'name': 'Jozita ', 'address': 'Pramonės g. 18 Vilnius', 'coordinates': [54.6959581, 25.43206807185129], 'B95': '1.39', 'B98': '-', 'D': '1.29', 'Dk': '-', 'LPG': '0.7', 'updated': '2021-11-07 12:00:04'}, {'verified': False, 'name': 'Jozita ', 'address': 'Jonavos g. 51 Kaunas', 'coordinates': [54.93392265, 23.917581251684357], 'B95': '1.39', 'B98': '-', 'D': '1.29', 'Dk': '-', 'LPG': '0.7', 'updated': '2021-11-07 12:00:04'}, {'verified': False, 'name': 'Jozita ', 'address': 'Kuršių g. 13A Kaunas', 'coordinates': [54.9361282, 23.89593455], 'B95': '1.39', 'B98': '-', 'D': '1.29', 'Dk': '-', 'LPG': '0.7', 'updated': '2021-11-07 12:00:04'}, {'verified': False, 'name': 'Jozita ', 'address': 'Vytauto g. 111A Garliava', 'coordinates': [54.82826815, 23.87309677771739], 'B95': '1.39', 'B98': '-', 'D': '1.29', 'Dk': '-', 'LPG': '0.7', 'updated': '2021-11-07 12:00:04'}, {'verified': False, 'name': 'Jozita ', 'address': 'Girulių g. 1 Šiauliai', 'coordinates': [55.92212885, 23.297136822153924], 'B95': '1.38', 'B98': '-', 'D': '1.28', 'Dk': '-', 'LPG': '0.7', 'updated': '2021-11-07 12:00:04'}, {'verified': False, 'name': 'Jozita ', 'address': 'Architektų g. 80 Šiauliai', 'coordinates': [55.92452875, 23.279541186389963], 'B95': '1.38', 'B98': '-', 'D': '1.28', 'Dk': '-', 'LPG': '0.7', 'updated': '2021-11-07 12:00:04'}, {'verified': False, 'name': 'Jozita ', 'address': 'Maironio g. 78B Raseiniai', 'coordinates': [55.39002085, 23.130770704632482], 'B95': '1.39', 'B98': '-', 'D': '1.29', 'Dk': '-', 'LPG': '0.7', 'updated': '2021-11-07 12:00:04'}, {'verified': False, 'name': 'Jozita ', 'address': 'Šilalės g. 105 Tauragė', 'coordinates': [55.2717164, 22.2864955], 'B95': '1.39', 'B98': '-', 'D': '1.29', 'Dk': '-', 'LPG': '0.7', 'updated': '2021-11-07 12:00:04'}, {'verified': False, 'name': 'Neste ', 'address': 'P. Lukšio g. 22 Vilnius', 'coordinates': [54.711696599999996, 25.292917866126277], 'B95': '1.425', 'B98': '-', 'D': '1.325', 'Dk': '1.415', 'LPG': '-', 'updated': '2021-11-07 17:05:34'}, {'verified': False, 'name': 'Neste ', 'address': 'Savanorių pr. 220A Vilnius', 'coordinates': [54.64417095, 25.20703294987173], 'B95': '1.435', 'B98': '-', 'D': '1.335', 'Dk': '-', 'LPG': '-', 'updated': '2021-11-07 15:41:29'}, {'verified': False, 'name': 'Neste ', 'address': 'Savanorių pr. 187 Vilnius', 'coordinates': [54.646852, 25.2103082], 'B95': '1.435', 'B98': '-', 'D': '1.335', 'Dk': '1.425', 'LPG': '-', 'updated': '2021-11-07 15:40:52'}, {'verified': False, 'name': 'Neste ', 'address': 'Pilaitės pr. 27 Vilnius', 'coordinates': [54.708836149999996, 25.189748651167207], 'B95': '1.419', 'B98': '-', 'D': '1.319', 'Dk': '1.409', 'LPG': '-', 'updated': '2021-11-07 14:44:24'}, {'verified': False, 'name': 'Neste ', 'address': 'Gariūnų g. 55 Vilnius', 'coordinates': [54.658288, 25.158872968149666], 'B95': '1.455', 'B98': '-', 'D': '1.355', 'Dk': '1.445', 'LPG': '-', 'updated': '2021-11-07 14:29:49'}, {'verified': False, 'name': 'Neste ', 'address': 'Jonavos g. 110 Kaunas', 'coordinates': [54.9133395, 23.91165274195889], 'B95': '1.425', 'B98': '-', 'D': '1.325', 'Dk': '1.415', 'LPG': '-', 'updated': '2021-11-07 13:22:09'}, {'verified': False, 'name': 'Neste ', 'address': 'Ukmergės g. 296 Vilnius', 'coordinates': [54.7361226, 25.231208628690304], 'B95': '1.419', 'B98': '-', 'D': '1.329', 'Dk': '1.419', 'LPG': '-', 'updated': '2021-11-07 13:14:51'}, {'verified': False, 'name': 'Neste ', 'address': 'Žirmūnų g. 54C Vilnius', 'coordinates': [54.706724550000004, 25.30414477480923], 'B95': '1.429', 'B98': '-', 'D': '1.339', 'Dk': '-', 'LPG': '-', 'updated': '2021-11-07 13:14:00'}, {'verified': False, 'name': 'Neste ', 'address': 'Justiniškių g. 14B Vilnius', 'coordinates': [54.70512795, 25.21500795017663], 'B95': '1.439', 'B98': '-', 'D': '1.349', 'Dk': '1.429', 'LPG': '-', 'updated': '2021-11-07 13:13:54'}, {'verified': False, 'name': 'Neste ', 'address': 'Subačiaus g. 64 Vilnius', 'coordinates': [54.6768577, 25.309488643311038], 'B95': '1.439', 'B98': '-', 'D': '1.349', 'Dk': '1.439', 'LPG': '-', 'updated': '2021-11-07 13:13:27'}, {'verified': False, 'name': 'Neste ', 'address': 'Parodų g. 1A Vilnius', 'coordinates': [54.6734185, 25.22407525], 'B95': '1.439', 'B98': '-', 'D': '1.349', 'Dk': '-', 'LPG': '-', 'updated': '2021-11-07 13:13:16'}, {'verified': False, 'name': 'Neste ', 'address': 'Molėtų pl. 8 Vilnius', 'coordinates': [54.75484995, 25.271346], 'B95': '1.409', 'B98': '-', 'D': '1.309', 'Dk': '1.409', 'LPG': '-', 'updated': '2021-11-07 13:13:03'}, {'verified': False, 'name': 'Neste ', 'address': 'Panerių g. 42 Vilnius', 'coordinates': [54.668187, 25.2646344], 'B95': '1.449', 'B98': '-', 'D': '1.349', 'Dk': '1.439', 'LPG': '-', 'updated': '2021-11-07 13:12:38'}, {'verified': False, 'name': 'Neste ', 'address': 'Kauno g. 26 Vilnius', 'coordinates': [54.6716027, 25.270100393917414], 'B95': '1.439', 'B98': '-', 'D': '1.349', 'Dk': '-', 'LPG': '-', 'updated': '2021-11-07 13:12:13'}, {'verified': False, 'name': 'Neste ', 'address': 'Eišiškių pl. 82 Vilnius', 'coordinates': [54.621284599999996, 25.24294027046859], 'B95': '1.459', 'B98': '-', 'D': '1.359', 'Dk': '1.449', 'LPG': '-', 'updated': '2021-11-07 13:12:02'}, {'verified': False, 'name': 'Neste ', 'address': 'Žirnių g. 17 Vilnius', 'coordinates': [54.656653399999996, 25.29203805470233], 'B95': '1.429', 'B98': '-', 'D': '1.329', 'Dk': '1.419', 'LPG': '-', 'updated': '2021-11-07 13:11:37'}, {'verified': False, 'name': 'Neste ', 'address': 'Veiverių g. 132D Kaunas', 'coordinates': [54.87569225, 23.890946443230188], 'B95': '1.429', 'B98': '-', 'D': '1.33', 'Dk': '-', 'LPG': '-', 'updated': '2021-11-06 18:00:06'}, {'verified': False, 'name': 'Neste ', 'address': 'Europos pr. 43 Kaunas', 'coordinates': [54.8759609, 23.912441], 'B95': '1.449', 'B98': '-', 'D': '1.349', 'Dk': '1.439', 'LPG': '-', 'updated': '2021-11-06 17:01:57'}, {'verified': False, 'name': 'Neste ', 'address': 'Artojo g. 2 Klaipėda', 'coordinates': [55.71764935, 21.151701058723027], 'B95': '1.429', 'B98': '-', 'D': '1.329', 'Dk': '1.419', 'LPG': '-', 'updated': '2021-11-06 14:27:25'}, {'verified': False, 'name': 'Neste ', 'address': 'Versmės g. 2 Radviliškis', 'coordinates': [55.814272349999996, 23.5460382874917], 'B95': '1.415', 'B98': '-', 'D': '1.315', 'Dk': '-', 'LPG': '-', 'updated': '2021-11-05 19:08:22'}, {'verified': False, 'name': 'Neste ', 'address': 'Kuršių g. 1 Kaunas', 'coordinates': [54.9361572, 23.885296600000004], 'B95': '1.429', 'B98': '-', 'D': '1.329', 'Dk': '1.419', 'LPG': '-', 'updated': '2021-11-04 18:51:47'}, {'verified': False, 'name': 'Neste ', 'address': 'Minijos g. 119 Klaipėda', 'coordinates': [55.6847139, 21.150523135060816], 'B95': '1.419', 'B98': '-', 'D': '1.319', 'Dk': '1.409', 'LPG': '-', 'updated': '2021-11-04 18:50:39'}, {'verified': False, 'name': 'Neste ', 'address': 'Smiltelės g. 17 Klaipėda', 'coordinates': [55.6698514, 21.192962797193317], 'B95': '1.409', 'B98': '-', 'D': '1.319', 'Dk': '-', 'LPG': '-', 'updated': '2021-11-02 17:42:57'}, {'verified': False, 'name': 'Neste ', 'address': 'Žirmūnų g. 68B Vilnius', 'coordinates': [54.717569499999996, 25.304504], 'B95': '1.415', 'B98': '-', 'D': '1.315', 'Dk': '-', 'LPG': '-', 'updated': '2021-11-02 15:13:21'}, {'verified': False, 'name': 'Neste ', 'address': 'Geležinio Vilko g. 63 Vilnius', 'coordinates': [54.71192525, 25.270628744129525], 'B95': '1.429', 'B98': '-', 'D': '1.339', 'Dk': '-', 'LPG': '-', 'updated': '2021-11-01 18:09:09'}, {'verified': False, 'name': 'Neste ', 'address': 'Šilutės pl. 30 Klaipėda', 'coordinates': [55.69308945, 21.174769582671118], 'B95': '1.399', 'B98': '-', 'D': '1.309', 'Dk': '1.389', 'LPG': '-', 'updated': '2021-10-31 13:49:38'}, {'verified': False, 'name': 'Neste ', 'address': 'Tilžės g. 72 Šiauliai', 'coordinates': [55.920091400000004, 23.293274204490345], 'B95': '1.419', 'B98': '-', 'D': '1.329', 'Dk': '1.409', 'LPG': '-', 'updated': '2021-10-30 15:48:07'}, {'verified': False, 'name': 'Neste ', 'address': 'Ramygalos g. 145B Panevėžys', 'coordinates': [55.70952425, 24.374756203183644], 'B95': '1.419', 'B98': '-', 'D': '1.329', 'Dk': '1.409', 'LPG': '-', 'updated': '2021-10-30 14:01:09'}, {'verified': False, 'name': 'Neste ', 'address': 'Raudondvario pl. 103 Kaunas', 'coordinates': [54.906861649999996, 23.872820030939067], 'B95': '1.419', 'B98': '-', 'D': '1.329', 'Dk': '1.409', 'LPG': '-', 'updated': '2021-10-29 20:48:39'}, {'verified': False, 'name': 'Neste ', 'address': 'Taikos pr. 60 Klaipėda', 'coordinates': [55.688921300000004, 21.155192399999997], 'B95': '1.399', 'B98': '-', 'D': '1.309', 'Dk': '-', 'LPG': '-', 'updated': '2021-10-27 19:05:07'}, {'verified': False, 'name': 'Neste ', 'address': 'Rygos g. 2 Vilnius', 'coordinates': [54.7156207, 25.228695356173063], 'B95': '1.429', 'B98': '-', 'D': '1.339', 'Dk': '1.419', 'LPG': '-', 'updated': '2021-10-26 17:38:45'}, {'verified': False, 'name': 'Neste ', 'address': 'Geležinio Vilko g. 37A Vilnius', 'coordinates': [54.70131605, 25.263809293008713], 'B95': '1.409', 'B98': '-', 'D': '1.319', 'Dk': '1.399', 'LPG': '-', 'updated': '2021-10-24 18:21:55'}, {'verified': False, 'name': 'Neste ', 'address': 'Buivydiškių g. 5 Vilnius', 'coordinates': [54.710826749999995, 25.240414912006997], 'B95': '1.409', 'B98': '-', 'D': '1.319', 'Dk': '-', 'LPG': '-', 'updated': '2021-10-24 14:50:44'}, {'verified': False, 'name': 'Neste ', 'address': 'Ūdrijos g. 31A Alytus', 'coordinates': [54.4087929, 24.0047444], 'B95': '1.399', 'B98': '-', 'D': '1.309', 'Dk': '1.389', 'LPG': '-', 'updated': '2021-10-23 20:07:55'}, {'verified': False, 'name': 'Neste ', 'address': 'R. Kalantos g. 27 Kaunas', 'coordinates': [54.8950607, 23.985888708613523], 'B95': '1.389', 'B98': '-', 'D': '1.299', 'Dk': '-', 'LPG': '-', 'updated': '2021-10-23 18:56:45'}, {'verified': False, 'name': 'Neste ', 'address': 'Laisvės pr. 125A Vilnius', 'coordinates': [54.7276619, 25.23525283173516], 'B95': '1.395', 'B98': '-', 'D': '1.305', 'Dk': '1.385', 'LPG': '-', 'updated': '2021-10-22 15:53:16'}, {'verified': False, 'name': 'Neste ', 'address': 'Erfurto g. 41 Vilnius', 'coordinates': [54.67281855, 25.197955800799534], 'B95': '1.429', 'B98': '-', 'D': '1.329', 'Dk': '1.409', 'LPG': '-', 'updated': '2021-10-19 17:37:50'}, {'verified': False, 'name': 'Neste ', 'address': 'Architektų g. 130 Vilnius', 'coordinates': [54.6808377, 25.20763891812412], 'B95': '1.419', 'B98': '-', 'D': '1.329', 'Dk': '1.409', 'LPG': '-', 'updated': '2021-10-19 17:17:03'}, {'verified': False, 'name': 'Neste ', 'address': 'Ateities pl. 50B Kaunas', 'coordinates': [54.925985749999995, 24.06054522823807], 'B95': '1.389', 'B98': '-', 'D': '1.299', 'Dk': '1.379', 'LPG': '-', 'updated': '2021-10-18 18:57:38'}, {'verified': False, 'name': 'Neste ', 'address': 'Šilutės pl. 5C Klaipėda', 'coordinates': [55.70317155, 21.16480105], 'B95': '1.379', 'B98': '-', 'D': '1.279', 'Dk': '-', 'LPG': '-', 'updated': '2021-10-17 15:32:57'}, {'verified': False, 'name': 'Neste ', 'address': 'Vilniaus g. 94 Pabradė', 'coordinates': [54.978523499999994, 25.75663178476632], 'B95': '1.409', 'B98': '-', 'D': '1.319', 'Dk': '1.399', 'LPG': '-', 'updated': '2021-10-17 13:56:46'}, {'verified': False, 'name': 'Neste ', 'address': 'S. Stanevičiaus g. 3 Vilnius', 'coordinates': [54.7215007, 25.2561173], 'B95': '1.379', 'B98': '-', 'D': '1.279', 'Dk': '1.359', 'LPG': '-', 'updated': '2021-10-16 08:20:46'}, {'verified': False, 'name': 'Neste ', 'address': 'Kedrų g. 2 Vilnius', 'coordinates': [54.67721315, 25.25565116678041], 'B95': '1.379', 'B98': '-', 'D': '1.289', 'Dk': '1.369', 'LPG': '-', 'updated': '2021-10-12 13:16:32'}, {'verified': False, 'name': 'Neste ', 'address': 'Plieno g. 1 Klaipėda', 'coordinates': [55.6728215, 21.201734729193085], 'B95': '1.349', 'B98': '-', 'D': '1.259', 'Dk': '1.339', 'LPG': '-', 'updated': '2021-10-11 13:46:07'}, {'verified': False, 'name': 'Orlen ', 'address': 'Milašiaus g. 31 Vilnius', 'coordinates': [54.7280491, 25.327010912807726], 'B95': '1.419', 'B98': '-', 'D': '1.319', 'Dk': '-', 'LPG': '0.729', 'updated': '2021-11-01 18:07:33'}, {'verified': False, 'name': 'Orlen ', 'address': 'Žirmūnų g. 1T Vilnius', 'coordinates': [54.6960059, 25.300080900000005], 'B95': '1.379', 'B98': '-', 'D': '1.289', 'Dk': '-', 'LPG': '0.729', 'updated': '2021-11-01 18:02:40'}, {'verified': False, 'name': 'Orlen ', 'address': 'Varnių g. 50 Kaunas', 'coordinates': [54.9138013, 23.90684986305221], 'B95': '1.379', 'B98': '-', 'D': '1.289', 'Dk': '1.299', 'LPG': '0.699', 'updated': '2021-10-31 13:48:18'}, {'verified': False, 'name': 'Saurida ', 'address': 'Baltosios Vokės g. 35 Vilnius', 'coordinates': [54.613359349999996, 25.18373072150873], 'B95': '-', 'B98': '-', 'D': '-', 'Dk': '-', 'LPG': '0.69', 'updated': '2021-11-01 06:00:12'}, {'verified': False, 'name': 'Saurida ', 'address': 'Vytauto g. 4A Vilkaviškis', 'coordinates': [54.6460538, 23.0487692], 'B95': '-', 'B98': '-', 'D': '-', 'Dk': '-', 'LPG': '0.69', 'updated': '2021-11-01 06:00:12'}, {'verified': False, 'name': 'Saurida ', 'address': 'P. Cvirkos g. 5 Rokiškis', 'coordinates': [55.9410228, 25.5887056], 'B95': '-', 'B98': '-', 'D': '-', 'Dk': '-', 'LPG': '0.69', 'updated': '2021-11-01 06:00:12'}, {'verified': False, 'name': 'Saurida ', 'address': 'Vilniaus g. 122 Ukmergė', 'coordinates': [55.23352745, 24.781252537715787], 'B95': '1.37', 'B98': '-', 'D': '1.29', 'Dk': '-', 'LPG': '0.7', 'updated': '2021-11-01 06:00:12'}, {'verified': False, 'name': 'Saurida ', 'address': 'Kosmoso g. 1 Visaginas', 'coordinates': [55.59742745, 26.403363461270786], 'B95': '1.38', 'B98': '-', 'D': '1.29', 'Dk': '-', 'LPG': '0.7', 'updated': '2021-11-01 06:00:12'}, {'verified': False, 'name': 'Saurida ', 'address': 'Rytinio kelio g. 19 Šilalė', 'coordinates': [55.4918497, 22.199277448667527], 'B95': '1.38', 'B98': '-', 'D': '1.29', 'Dk': '-', 'LPG': '0.7', 'updated': '2021-11-01 06:00:12'}, {'verified': False, 'name': 'Saurida ', 'address': 'Vilniaus g. 373a Šiauliai', 'coordinates': [55.942819099999994, 23.28161933052148], 'B95': '1.38', 'B98': '-', 'D': '1.29', 'Dk': '-', 'LPG': '0.7', 'updated': '2021-11-01 06:00:12'}, {'verified': False, 'name': 'Saurida ', 'address': 'Pramonės g. 7C Šiauliai', 'coordinates': [55.916465599999995, 23.301941132995974], 'B95': '1.38', 'B98': '-', 'D': '1.29', 'Dk': '-', 'LPG': '0.69', 'updated': '2021-11-01 06:00:12'}, {'verified': False, 'name': 'Saurida ', 'address': 'Vytauto g. 20 Skuodas', 'coordinates': [56.261388350000004, 21.529906505078024], 'B95': '1.38', 'B98': '-', 'D': '1.31', 'Dk': '-', 'LPG': '0.7', 'updated': '2021-11-01 06:00:12'}, {'verified': False, 'name': 'Saurida ', 'address': 'Rumšiškės 56335 Rumšiškės', 'coordinates': [54.869979, 24.22562133318953], 'B95': '1.38', 'B98': '-', 'D': '1.29', 'Dk': '-', 'LPG': '0.7', 'updated': '2021-11-01 06:00:12'}, {'verified': False, 'name': 'Saurida ', 'address': 'Gedimino g. 50c Radviliškis', 'coordinates': [55.814645799999994, 23.553073042540692], 'B95': '1.38', 'B98': '-', 'D': '1.29', 'Dk': '-', 'LPG': '0.69', 'updated': '2021-11-01 06:00:12'}, {'verified': False, 'name': 'Saurida ', 'address': 'Gamyklos g. 43A Mažeikiai', 'coordinates': [56.31901365, 22.308850608416826], 'B95': '-', 'B98': '-', 'D': '-', 'Dk': '-', 'LPG': '0.69', 'updated': '2021-11-01 06:00:12'}, {'verified': False, 'name': 'Saurida ', 'address': 'V. Kudirkos g. 18A Naujoji Akmenė', 'coordinates': [56.3172286, 22.884846771173144], 'B95': '1.43', 'B98': '-', 'D': '1.34', 'Dk': '-', 'LPG': '0.71', 'updated': '2021-11-01 06:00:12'}, {'verified': False, 'name': 'Saurida ', 'address': 'S. Daukanto g. 19 Kazlų Rūda', 'coordinates': [54.7414262, 23.49729269511556], 'B95': '-', 'B98': '-', 'D': '-', 'Dk': '-', 'LPG': '0.69', 'updated': '2021-11-01 06:00:12'}, {'verified': False, 'name': 'Saurida ', 'address': 'Jūrininkų pr. 29 Klaipėda', 'coordinates': [55.65683905, 21.183820720437343], 'B95': '1.38', 'B98': '-', 'D': '1.29', 'Dk': '-', 'LPG': '0.7', 'updated': '2021-11-01 06:00:12'}, {'verified': False, 'name': 'Saurida ', 'address': 'Garažų g. 20 Kaunas', 'coordinates': [54.9236773, 24.0008281], 'B95': '1.38', 'B98': '-', 'D': '1.29', 'Dk': '-', 'LPG': '0.7', 'updated': '2021-11-01 06:00:12'}, {'verified': False, 'name': 'Saurida ', 'address': 'Vytauto g. 2, Garliava Garliava', 'coordinates': [54.81371215, 23.874645218398946], 'B95': '-', 'B98': '-', 'D': '-', 'Dk': '-', 'LPG': '0.69', 'updated': '2021-11-01 06:00:12'}, {'verified': False, 'name': 'Saurida ', 'address': 'Pramonės g. 5 Alytus', 'coordinates': [54.423526800000005, 24.020393585577274], 'B95': '1.38', 'B98': '-', 'D': '1.29', 'Dk': '-', 'LPG': '0.69', 'updated': '2021-11-01 06:00:12'}, {'verified': False, 'name': 'Saurida ', 'address': 'Miškininkų g. 7 Alytus', 'coordinates': [54.41130555, 24.067650096022142], 'B95': '1.38', 'B98': '-', 'D': '1.29', 'Dk': '-', 'LPG': '-', 'updated': '2021-11-01 06:00:12'}, {'verified': False, 'name': 'Saurida ', 'address': 'Žirmūnų g. 70 Žirmūnai', 'coordinates': [54.7192871, 25.3028152], 'B95': '-', 'B98': '-', 'D': '-', 'Dk': '-', 'LPG': '0.69', 'updated': '2021-11-01 06:00:12'}, {'verified': False, 'name': 'Saurida ', 'address': 'Buivydiškių g. 1 Zujūnai', 'coordinates': [54.72368005, 25.19104091202027], 'B95': '1.38', 'B98': '-', 'D': '1.29', 'Dk': '-', 'LPG': '0.7', 'updated': '2021-11-01 06:00:12'}]
@eel.expose
def GetPricesSent():
    yeet = 0
    avgPrices, minPrices = GetAvgPrices()
    eel.getAvgPrices(avgPrices, minPrices)
    for rowdata in data:
        yeet += 1
        print(yeet)
        if rowdata['B95'] == '-' and rowdata['D'] == '-' and rowdata['Dk'] == '-' and rowdata['LPG'] != '-':
            eel.AddYellowMarker(rowdata['verified'], rowdata['name'], rowdata['address'], rowdata['coordinates'][0], rowdata['coordinates'][1], rowdata['B95'], rowdata['B98'], rowdata['D'], rowdata['Dk'], rowdata['LPG'], rowdata['updated'])
        else:
            eel.AddMarker(rowdata['verified'], rowdata['name'], rowdata['address'], rowdata['coordinates'][0], rowdata['coordinates'][1], rowdata['B95'], rowdata['B98'], rowdata['D'], rowdata['Dk'], rowdata['LPG'], rowdata['updated'])

@eel.expose
def GetCircleK():
    url = "https://www.circlek.lt/degaliniu-sarasas?_wrapper_format=drupal_ajax"

    payload={}
    files={}
    headers = {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }

    data = requests.request("POST", url, headers=headers, data=payload, files=files).json()

    StationList = data[0]['settings']['ck_sim_search']["station_results"]
    StationListIds = StationList.keys()

    for station in StationListIds:
        extras = []
        fuel = []

        lat = data[0]['settings']['ck_sim_search']["station_results"][station]["/sites/{siteId}/location"]['lat']
        lng = data[0]['settings']['ck_sim_search']["station_results"][station]["/sites/{siteId}/location"]['lng']
        extra = data[0]['settings']['ck_sim_search']["station_results"][station]["/sites/{siteId}/services"]
        fuels = data[0]['settings']['ck_sim_search']["station_results"][station]["/sites/{siteId}/fuels"]
        address = data[0]['settings']['ck_sim_search']["station_results"][station]["/sites/{siteId}/addresses"]['PHYSICAL']['street']


        for i in extra:
            extras.append(i['displayName'])
        for i in fuels:
            fuel.append(i['displayName'])


        extras = str(extras).replace("['" ,"").replace("', '", '<br>').replace("']", '')
        fuel = str(fuel).replace("['" ,"").replace("', '", '<br>').replace("']", '')

        eel.AddBlue(lat, lng, address, fuel, extras)

def GetAvgPrices():
    B95prices = []
    Dprices = []
    Dkprices = []
    LPGprices = []

    avgB95 = 0
    avgD = 0
    avgDk = 0
    avgLPG = 0

    for i in data:

        if i['B95'] == "-" or i['B95'] == "0.00" or i['B95'] == "":
            pass
        else:
            B95prices.append(float(i['B95']))

        if i['D'] == "-" or i['D'] == "0.00" or i['D'] == "":
            pass
        else:
            Dprices.append(float(i['D']))

        if i['Dk'] == "-" or i['Dk'] == "0.00" or i['Dk'] == "":
            pass
        else:
            Dkprices.append(float(i['Dk']))

        if i['LPG'] == "-" or i['LPG'] == "0.00" or i['LPG'] == "":
            pass
        else:
            LPGprices.append(float(i['LPG']))

    if(len(B95prices)>0):
        avgB95 = sum(B95prices)/len(B95prices)
        minB95 = min(B95prices)
    if(len(Dprices)>0):
        avgD = sum(Dprices)/len(Dprices)
        minD = min(Dprices)
    if(len(Dkprices)>0):
        avgDk = sum(Dkprices)/len(Dkprices)
        minDk = min(Dkprices)
    if(len(LPGprices)>0):
        avgLPG = sum(LPGprices)/len(LPGprices)
        minLPG = min(LPGprices)

    avgPrices = {
        'B95': round(avgB95, 3),
        'D': round(avgD, 3),
        'Dk': round(avgDk, 3),
        'LPG': round(avgLPG, 3)
    }

    minPrices = {
        'B95': minB95,
        'D': minD,
        'Dk': minDk,
        'LPG': minLPG
    }

    print(minPrices)
    return avgPrices, minPrices

@eel.expose
def GetChartData():
    print('yeet')
    url = "https://degalu-kainos.lt/general/ajaxD30"
    headers = {
      'user-agent': 'Mozilla/5.0'
    }
    chartData = requests.request("GET", url, headers=headers).json()
    eel.DrawChart(chartData)

#print(r, "\n")
#print(r.reason, "\n")
#print("headers =", r.headers, "\n")
#print(r)

eel.start('index.html', size=(1980, 1080), position=(0, 0))