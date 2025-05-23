---
metric: false
gemType: 2
gemValue: 10
gemMass: 8
gemDensity: 170
---
# Gem Table

> [!infobox]
> # Gem Calculator
> Metric? | `INPUT[toggle():metric]` (`VIEW[{metric} ? "g, mL" : "mlbs, fl oz"]`) |
> -|:-:|
> Mineral | `INPUT[inlineSelect(option(10, Amethyst), option(7, Aquamarine), option(15, Diamond), option(14, Emerald), option(2, Jade), option(5, Lapis Lazuli), option(3, Onyx), option(11, Opal), option(6, Pearl), option(9, Peridot), option(1, Quartz), option(12, Ruby), option(13, Sapphire), option(8, Topaz), option(4, Turquoise)):gemType]`
> Value | `INPUT[number(class(nb-mb-css)):gemValue]` gp
> Mass | `VIEW[round((1-0.546485*{metric})*1000*({gemType} == 1 ? {gemValue}/1000 : {gemType} >= 2 & {gemType} <= 5 ? {gemValue}/1250 : {gemType} == 6 ? {gemValue}/1500 : {gemType} >= 7 & {gemType} <= 10 ? {gemValue}/1750 : {gemType} >= 11 & {gemType} <= 14 ? {gemValue}/2000 : {gemValue}/2500), 2)][:gemMass]` `VIEW[{metric} ? "g" : "mlbs"]`
> Size `VIEW[(1-0.98398*{metric})*({gemType} <= 6 ? 170 : {gemType} >= 7 & {gemType} <= 14 ? 200 : 219.4)][math(hidden):gemDensity]` | `VIEW[round((0.9575+0.0425*{metric})*{gemMass}/{gemDensity}, 2)]` `VIEW[{metric} ? "mL" : "fl oz"]`

**Inline Roller:** `dice: [[Random_Gems_Table^GemTable]]`

| dice: 1d100 | Gems                                                                                                  |
| ----------- | ----------------------------------------------------------------------------------------------------- |
| 1 - 21      | `dice: [[Random_Gems_Table^NumGems]]` Quartz worth `dice: [[Random_Gems_Table^QuartzGem]]` gp each    |
| 22 - 38     | `dice: [[Random_Gems_Table^NumGems]]` Jade worth `dice: [[Random_Gems_Table^PSGem]]` gp each          |
| 39 - 52     | `dice: [[Random_Gems_Table^NumGems]]` Onyxes worth `dice: [[Random_Gems_Table^PSGem]]` gp each        |
| 53 - 62     | `dice: [[Random_Gems_Table^NumGems]]` Turquoises worth `dice: [[Random_Gems_Table^PSGem]]` gp each    |
| 63 - 71     | `dice: [[Random_Gems_Table^NumGems]]` Lapis Lazulis worth `dice: [[Random_Gems_Table^PSGem]]` gp each |
| 72 - 78     | `dice: [[Random_Gems_Table^NumGems]]` Pearls worth `dice: [[Random_Gems_Table^PearlGem]]` gp each     |
| 79 - 83     | `dice: [[Random_Gems_Table^NumGems]]` Aquamarines worth `dice: [[Random_Gems_Table^mGem]]` gp each    |
| 84 - 87     | `dice: [[Random_Gems_Table^NumGems]]` Topaz worth `dice: [[Random_Gems_Table^mGem]]` gp each          |
| 88 - 90     | `dice: [[Random_Gems_Table^NumGems]]` Peridots worth `dice: [[Random_Gems_Table^mGem]]` gp each       |
| 91 - 93     | `dice: [[Random_Gems_Table^NumGems]]` Amethysts worth `dice: [[Random_Gems_Table^mGem]]` gp each      |
| 94 - 95     | `dice: [[Random_Gems_Table^NumGems]]` Opals worth `dice: [[Random_Gems_Table^PGem]]` gp each          |
| 96 - 96     | `dice: [[Random_Gems_Table^NumGems]]` Rubies worth `dice: [[Random_Gems_Table^PGem]]` gp each         |
| 97 - 98     | `dice: [[Random_Gems_Table^NumGems]]` Sapphires worth `dice: [[Random_Gems_Table^PGem]]` gp each      |
| 99          | `dice: [[Random_Gems_Table^NumGems]]` Emeralds worth `dice: [[Random_Gems_Table^PGem]]` gp each       |
| 100         | `dice: [[Random_Gems_Table^NumGems]]` Diamonds worth `dice: [[Random_Gems_Table^Diamond]]` gp each    |
^GemTable

### Type of Gem

You've found a `dice: [[Random_Gems_Table#^GemType]]`

| dice: 1d100 | Gems                                                      |
| ----------- | --------------------------------------------------------- |
| 1 - 21      | Quartz worth `dice: [[Random_Gems_Table^QuartzGem]]` gp   |
| 22 - 38     | Jade worth `dice: [[Random_Gems_Table^PSGem]]` gp         |
| 39 - 52     | Onyx worth `dice: [[Random_Gems_Table^PSGem]]` gp         |
| 53 - 62     | Turquoise worth `dice: [[Random_Gems_Table^PSGem]]` gp    |
| 63 - 71     | Lapis Lazuli worth `dice: [[Random_Gems_Table^PSGem]]` gp |
| 72 - 78     | Pearl worth `dice: [[Random_Gems_Table^PearlGem]]` gp     |
| 79 - 83     | Aquamarine worth `dice: [[Random_Gems_Table^mGem]]` gp    |
| 84 - 87     | Topas worth `dice: [[Random_Gems_Table^mGem]]` gp          |
| 88 - 90     | Peridot worth `dice: [[Random_Gems_Table^mGem]]` gp       |
| 91 - 93     | Amethyst worth `dice: [[Random_Gems_Table^mGem]]` gp      |
| 94 - 95     | Opal worth `dice: [[Random_Gems_Table^PGem]]` gp          |
| 96 - 96     | Rubie worth `dice: [[Random_Gems_Table^PGem]]` gp         |
| 97 - 98     | Sapphire worth `dice: [[Random_Gems_Table^PGem]]` gp      |
| 99          | Emerald worth `dice: [[Random_Gems_Table^PGem]]` gp       |
| 100         | Diamond worth `dice: [[Random_Gems_Table^Diamond]]` gp    |
^GemType

You've found a `dice: [[Random_Gems_Table^GemTypePlain]]`

| dice: 1d100 | Gems         |
| ----------- | ------------ |
| 1 - 21      | Quartz       |
| 22 - 38     | Jade         |
| 39 - 52     | Onyx         |
| 53 - 62     | Turquoise    |
| 63 - 71     | Lapis Lazuli |
| 72 - 78     | Pearl        |
| 79 - 83     | Aquamarine   |
| 84 - 87     | Topas        |
| 88 - 90     | Peridot      |
| 91 - 93     | Amethyst     |
| 94 - 95     | Opal         |
| 96 - 96     | Rubie        |
| 97 - 98     | Sapphire     |
| 99          | Emerald      |
| 100         | Diamond      |
^GemTypePlain

### Number of Gems found

You've found `dice: [[Random_Gems_Table^NumGems]]` Gems.

| dice: 1d20 | # of gems |
|------------|-----------|
| 1-6        | 1         |
| 7-10       | 2         |
| 11-14      | 3         |
| 15-17      | 4         |
| 18-19      | 5         |
| 20         | 6         |
^NumGems

## Gem Data 
The following tables detail the likelihood of finding a precious mineral of a certain size (weight). The tables follow roughly the formula `{ValueDensity} * 0.003744*2^(X/10.7273)`.

| dice: 1d100 | Quartz (lbs) |
|------------|--------------|
| 1-7        | 4            |
| 8-15       | 8            |
| 16-20      | 12           |
| 21-24      | 16           |
| 25-27      | 20           |
| 28-29      | 24           |
| 30-32      | 28           |
| 33-34      | 32           |
| 35         | 36           |
| 36-37      | 40           |
| 38         | 44           |
| 39-40      | 48           |
| 41         | 52           |
| 42         | 56           |
| 43         | 60           |
| 44         | 64           |
| 45         | 68           |
| 46         | 72           |
| 47         | 80           |
| 48         | 84           |
| 49         | 88           |
| 50         | 96           |
| 51         | 100          |
| 52         | 108          |
| 53         | 116          |
| 54         | 124          |
| 55         | 132          |
| 56         | 140          |
| 57         | 148          |
| 58         | 160          |
| 59         | 168          |
| 60         | 180          |
| 61         | 192          |
| 62         | 204          |
| 63         | 220          |
| 64         | 236          |
| 65         | 248          |
| 66         | 268          |
| 67         | 284          |
| 68         | 304          |
| 69         | 324          |
| 70         | 344          |
| 71         | 368          |
| 72         | 392          |
| 73         | 420          |
| 74         | 448          |
| 75         | 476          |
| 76         | 508          |
| 77         | 544          |
| 78         | 580          |
| 79         | 616          |
| 80         | 660          |
| 81         | 704          |
| 82         | 748          |
| 83         | 800          |
| 84         | 852          |
| 85         | 908          |
| 86         | 968          |
| 87         | 1036         |
| 88         | 1104         |
| 89         | 1176         |
| 90         | 1256         |
| 91         | 1340         |
| 92         | 1428         |
| 93         | 1524         |
| 94         | 1628         |
| 95         | 1736         |
| 96         | 1852         |
| 97         | 1976         |
| 98         | 2104         |
| 99         | 2248         |
| 100        | 2396         |
^QuartzGem

| dice: 1d100 | Precious Stones (lbs) |
|------------|-----------------------|
| 1-7        | 5                     |
| 8-15       | 10                    |
| 16-20      | 15                    |
| 21-24      | 20                    |
| 25-27      | 25                    |
| 28-29      | 30                    |
| 30-32      | 35                    |
| 33-34      | 40                    |
| 35         | 45                    |
| 36-37      | 50                    |
| 38         | 55                    |
| 39-40      | 60                    |
| 41         | 65                    |
| 42         | 70                    |
| 43         | 75                    |
| 44         | 80                    |
| 45         | 85                    |
| 46         | 90                    |
| 47         | 100                   |
| 48         | 105                   |
| 49         | 110                   |
| 50         | 120                   |
| 51         | 125                   |
| 52         | 135                   |
| 53         | 145                   |
| 54         | 155                   |
| 55         | 165                   |
| 56         | 175                   |
| 57         | 185                   |
| 58         | 200                   |
| 59         | 210                   |
| 60         | 225                   |
| 61         | 240                   |
| 62         | 255                   |
| 63         | 275                   |
| 64         | 295                   |
| 65         | 310                   |
| 66         | 335                   |
| 67         | 355                   |
| 68         | 380                   |
| 69         | 405                   |
| 70         | 430                   |
| 71         | 460                   |
| 72         | 490                   |
| 73         | 525                   |
| 74         | 560                   |
| 75         | 595                   |
| 76         | 635                   |
| 77         | 680                   |
| 78         | 725                   |
| 79         | 770                   |
| 80         | 825                   |
| 81         | 880                   |
| 82         | 935                   |
| 83         | 1000                  |
| 84         | 1065                  |
| 85         | 1135                  |
| 86         | 1210                  |
| 87         | 1295                  |
| 88         | 1380                  |
| 89         | 1470                  |
| 90         | 1570                  |
| 91         | 1675                  |
| 92         | 1785                  |
| 93         | 1905                  |
| 94         | 2035                  |
| 95         | 2170                  |
| 96         | 2315                  |
| 97         | 2470                  |
| 98         | 2630                  |
| 99         | 2810                  |
| 100        | 2995                  |
^PSGem

| dice: 1d100 | Pearl (lbs) |
|------------|-------------|
| 1-7        | 6           |
| 8-15       | 12          |
| 16-20      | 18          |
| 21-24      | 24          |
| 25-27      | 30          |
| 28-29      | 36          |
| 30-32      | 42          |
| 33-34      | 48          |
| 35         | 54          |
| 36-37      | 60          |
| 38         | 66          |
| 39-40      | 72          |
| 41         | 78          |
| 42         | 84          |
| 43         | 90          |
| 44         | 96          |
| 45         | 102         |
| 46         | 108         |
| 47         | 120         |
| 48         | 126         |
| 49         | 132         |
| 50         | 144         |
| 51         | 150         |
| 52         | 162         |
| 53         | 174         |
| 54         | 186         |
| 55         | 198         |
| 56         | 210         |
| 57         | 222         |
| 58         | 240         |
| 59         | 252         |
| 60         | 270         |
| 61         | 288         |
| 62         | 306         |
| 63         | 330         |
| 64         | 354         |
| 65         | 372         |
| 66         | 402         |
| 67         | 426         |
| 68         | 456         |
| 69         | 486         |
| 70         | 516         |
| 71         | 552         |
| 72         | 588         |
| 73         | 630         |
| 74         | 672         |
| 75         | 714         |
| 76         | 762         |
| 77         | 816         |
| 78         | 870         |
| 79         | 924         |
| 80         | 990         |
| 81         | 1056        |
| 82         | 1122        |
| 83         | 1200        |
| 84         | 1278        |
| 85         | 1362        |
| 86         | 1452        |
| 87         | 1554        |
| 88         | 1656        |
| 89         | 1764        |
| 90         | 1884        |
| 91         | 2010        |
| 92         | 2142        |
| 93         | 2286        |
| 94         | 2442        |
| 95         | 2604        |
| 96         | 2778        |
| 97         | 2964        |
| 98         | 3156        |
| 99         | 3372        |
| 100        | 3594        |
^PearlGem

| dice: 1d100 | Minor Gems (lbs) |
|------------|------------------|
| 1-7        | 7                |
| 8-15       | 14               |
| 16-20      | 21               |
| 21-24      | 28               |
| 25-27      | 35               |
| 28-29      | 42               |
| 30-32      | 49               |
| 33-34      | 56               |
| 35         | 63               |
| 36-37      | 70               |
| 38         | 77               |
| 39-40      | 84               |
| 41         | 91               |
| 42         | 98               |
| 43         | 105              |
| 44         | 112              |
| 45         | 119              |
| 46         | 126              |
| 47         | 140              |
| 48         | 147              |
| 49         | 154              |
| 50         | 168              |
| 51         | 175              |
| 52         | 189              |
| 53         | 203              |
| 54         | 217              |
| 55         | 231              |
| 56         | 245              |
| 57         | 259              |
| 58         | 280              |
| 59         | 294              |
| 60         | 315              |
| 61         | 336              |
| 62         | 357              |
| 63         | 385              |
| 64         | 413              |
| 65         | 434              |
| 66         | 469              |
| 67         | 497              |
| 68         | 532              |
| 69         | 567              |
| 70         | 602              |
| 71         | 644              |
| 72         | 686              |
| 73         | 735              |
| 74         | 784              |
| 75         | 833              |
| 76         | 889              |
| 77         | 952              |
| 78         | 1015             |
| 79         | 1078             |
| 80         | 1155             |
| 81         | 1232             |
| 82         | 1309             |
| 83         | 1400             |
| 84         | 1491             |
| 85         | 1589             |
| 86         | 1694             |
| 87         | 1813             |
| 88         | 1932             |
| 89         | 2058             |
| 90         | 2198             |
| 91         | 2345             |
| 92         | 2499             |
| 93         | 2667             |
| 94         | 2849             |
| 95         | 3038             |
| 96         | 3241             |
| 97         | 3458             |
| 98         | 3682             |
| 99         | 3934             |
| 100        | 4193             |
^mGem

| dice: 1d100 | Precious Gems (lbs) |
|------------|---------------------|
| 1-7        | 8                   |
| 8-15       | 16                  |
| 16-20      | 24                  |
| 21-24      | 32                  |
| 25-27      | 40                  |
| 28-29      | 48                  |
| 30-32      | 56                  |
| 33-34      | 64                  |
| 35         | 72                  |
| 36-37      | 80                  |
| 38         | 88                  |
| 39-40      | 96                  |
| 41         | 104                 |
| 42         | 112                 |
| 43         | 120                 |
| 44         | 128                 |
| 45         | 136                 |
| 46         | 144                 |
| 47         | 160                 |
| 48         | 168                 |
| 49         | 176                 |
| 50         | 192                 |
| 51         | 200                 |
| 52         | 216                 |
| 53         | 232                 |
| 54         | 248                 |
| 55         | 264                 |
| 56         | 280                 |
| 57         | 296                 |
| 58         | 320                 |
| 59         | 336                 |
| 60         | 360                 |
| 61         | 384                 |
| 62         | 408                 |
| 63         | 440                 |
| 64         | 472                 |
| 65         | 496                 |
| 66         | 536                 |
| 67         | 568                 |
| 68         | 608                 |
| 69         | 648                 |
| 70         | 688                 |
| 71         | 736                 |
| 72         | 784                 |
| 73         | 840                 |
| 74         | 896                 |
| 75         | 952                 |
| 76         | 1016                |
| 77         | 1088                |
| 78         | 1160                |
| 79         | 1232                |
| 80         | 1320                |
| 81         | 1408                |
| 82         | 1496                |
| 83         | 1600                |
| 84         | 1704                |
| 85         | 1816                |
| 86         | 1936                |
| 87         | 2072                |
| 88         | 2208                |
| 89         | 2352                |
| 90         | 2512                |
| 91         | 2680                |
| 92         | 2856                |
| 93         | 3048                |
| 94         | 3256                |
| 95         | 3472                |
| 96         | 3704                |
| 97         | 3952                |
| 98         | 4208                |
| 99         | 4496                |
| 100        | 4792                |
^PGem

| dice: 1d100 | Diamond (lbs) |
|------------|---------------|
| 1-7        | 10            |
| 8-15       | 20            |
| 16-20      | 30            |
| 21-24      | 40            |
| 25-27      | 50            |
| 28-29      | 60            |
| 30-32      | 70            |
| 33-34      | 80            |
| 35         | 90            |
| 36-37      | 100           |
| 38         | 110           |
| 39-40      | 120           |
| 41         | 130           |
| 42         | 140           |
| 43         | 150           |
| 44         | 160           |
| 45         | 170           |
| 46         | 180           |
| 47         | 200           |
| 48         | 210           |
| 49         | 220           |
| 50         | 240           |
| 51         | 250           |
| 52         | 270           |
| 53         | 290           |
| 54         | 310           |
| 55         | 330           |
| 56         | 350           |
| 57         | 370           |
| 58         | 400           |
| 59         | 420           |
| 60         | 450           |
| 61         | 480           |
| 62         | 510           |
| 63         | 550           |
| 64         | 590           |
| 65         | 620           |
| 66         | 670           |
| 67         | 710           |
| 68         | 760           |
| 69         | 810           |
| 70         | 860           |
| 71         | 920           |
| 72         | 980           |
| 73         | 1050          |
| 74         | 1120          |
| 75         | 1190          |
| 76         | 1270          |
| 77         | 1360          |
| 78         | 1450          |
| 79         | 1540          |
| 80         | 1650          |
| 81         | 1760          |
| 82         | 1870          |
| 83         | 2000          |
| 84         | 2130          |
| 85         | 2270          |
| 86         | 2420          |
| 87         | 2590          |
| 88         | 2760          |
| 89         | 2940          |
| 90         | 3140          |
| 91         | 3350          |
| 92         | 3570          |
| 93         | 3810          |
| 94         | 4070          |
| 95         | 4340          |
| 96         | 4630          |
| 97         | 4940          |
| 98         | 5260          |
| 99         | 5620          |
| 100        | 5990          |
^Diamond