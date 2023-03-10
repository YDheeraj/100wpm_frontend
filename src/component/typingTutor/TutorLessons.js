

const TutorLessons = () => {
    const texts = {
       chapters:[
        "1. Home Row Position","2. Index Fingers",
        "3. Middle and Ring Fingers","4. Pinkies ",
        "5. Repetition 1 ","6. Repetition 2 ",
        "7. Repetition 3 ","8. Repetition 4 ",
        "9. Vowels","10. Alphabet",
        "11. Common Combinations ","12. Numbers and Punctuation ",
        "13. Using Shift Key ","14. Numbers and Punctuation 2 ","15. Sentences"
       ],
       lessons:[
     ["1. jkkjk","2. dffdf","3.jffjf","4. ddjjd kkfkk","5. l;;l","6. lfk","7 assas","8 .all add;","9. alas dald"],
     ["1. ghhgh","2. gad has aha;","3. gaff;","4. rttrt trtt","5. art tad6","6. daft dar","7. hart","8. graft fas","9. yuuyu uyuuy","10. day fly","11. lush shut","12. vbbvb bvbbv","13. bad vag","14. baby vagary","15. nmmnm mnmmn","16. ham gun","17. hang damm","18. must bank","19. numb bush"], 
     ["1. iooio","3. weewe","2. hid ill","4. red tea","5. ,..,.","6. why, yes.","7. xccxc","8. act, six","9. also take,","10. exercise hair","11. after death","12. hotel later","13. night knife"],
     ["1. zqqzq qzqqz","2. zoo quit","3. p[[p[","4. put opaque","5. ']]'/","6. plus/minus;","7. zombie square;","8. poster.","9. zigzag' porosity,","10. zone quarter.","11. zipper [zoological]"],
     ["1. mean mean","2. jeans jeans","3. echo echo","4. thin thin","5. disk disk","6. dish dish","7. dale dale","8. oils oils","9. path path","10. last last","11. land land","12. pets pets","13. mean jeans 1","14. mean jeans 2","15. mean jeans 3","16. mean jeans 4","17. mean jeans 5"],
     ["1.poundpound","2.pitspits","3.ryasryas","4.ebbedebbed","5.riskrisk","6.reeksreeks","7.leakleak","8.lenslens","9.fluxflux","10.leaveleave","11.leisleis","12.leafleaf","13.poundpits1","14.poundpits2","15.poundpits3","16.poundpits4","17.poundpits5"],
     ["1. lief lief","2. lazy lazy","3. keno keno","4. quack quack","5. knife knife","6. jack jack","7. chap chap","8. sock sock","9. keys keys","10. obey obey","11. men’s men’s","12. caps caps","13. lief lazy 1","14. lief lazy 2","15. lief lazy 3","16. lief lazy 4","17. lief lazy 5"],
     ["1. vile vile","2. fine fine","3. vent vent","4. vale vale","5. back back","6. bans bans","7. bags bags","8. tins tins","9. gift gift","10. grit grit","11. herb herb","12. hand hand","13. vile fine 1","14. vile fine 2","15. vile fine 3","16. vile fine 4","17. vile fine 5"],
     ["1. ouoie","2. ieyoi","3. aeoua","4. oeiau","5. oyeao"],
     ["1. gowof","2. aixle","3. nsptn","4. odmyl","5. kruxm"],
     ["1. ing ing","2. tion tion","3. ment ment","4. ure ure","5. sion sion","6. ous ous","7. our our","8. er or","9. tch tch","10. ck ch","11. ea ea","12. er er","13. the ht","14. ght ght","15. es ly","16. ed ed","17. and and"],
     ["1. 78878", "2. mean7", "3. 56656", "4. land5", "5. 90090", "6. flux9", "7. 34434", "8. chap3", "9. -==-", "10. back=", "11. 12212", "12. cash2", "13. only6", "14. 17-5=12", "15. 49-1=48"],
     ["1. GHDJY", "2. GTY<D", "3. RPVDC", "4. MAGIC RIVER", "5. COMPANY HORSES", "6. MagiC RiveR", "7. ComPanY HorSeS"],
     ["1. ! @! @ !", "2. @song", "3. # $#", "4. rain $ rain", "5. %^ ^ %%", "6. pale %^ pale ^", "7. & * & * &* *", "8. calf & calf", "9. () ) ( ))( ( )(", "10. mask ( mask )", "11. + _ + _+ ", "12. mine _ mine +", "13. coal (@ coal *# coal )", "14. face $ face #", "15. deal *$ deal )# deal", "16. 1. Mean, 2. Jeans,", "17. 1) 'Pound'; 2) 'Pits';", "18. (Lief - Lazy)", "19. Vile & Fine"],
     ["1. A bad workman", "2. Better a glorious", "3. Calamity is man's", "4. Eat at pleasure", "5. He who pleased", "6. Jack of all", "7. Keep a thing", "8. Make hay", "9. Between two stools", "10. Roll my log", "11. Scornful dogs", "12. We never know", "13. Old birds", "14. Zeal without knowledge", "15. Better die", "16. Looks like"],
    ]
    ,
    lessonContent:[
      [
        "jkkjk kjkkj jkjjk kkjkj jjkjk jkjkk kjkjj jkjkj kkjkj jjkjk",
        "dffdf fdffd dfddf ffdfd ddfdf dfdff fdfdd dfdfd ffdfd ddfdf",
        "jffjf jjjff fjffj jjffj fffjj dkdkd kdkdk kkddk ddkdk kddkk",
        "ddjjd kkfkk ffjfj kkdkk jjdjd kdkdk ffjjk kkddf dkfdf kkjjf",
        "l;;l; ;l;;l l;ll; ;;l;l ll;l; l;l;; ;l;ll l;l;l ;;l;l ll;l;",
        "lfk ;fk djlf kflf ;fkj kj;f dj;;f ;f;lf ;lfkf dljdf ;f;lfkf",
        "assas sassa asaas ssasa aasas asass sasaa asasa ssasa aasas",
        "ll add; as ask; sad; fas lad dak; dad fad fall; lass dall;",
        "alas dald fall; dad flak; lass sad; fass; all fall lad; ask"
      ],
      [
        "ghhgh hghhg ghggh hhghg gghgh ghghh hghgg ghghg hhghg gghgh",
        "gad has aha; had flag gas; sag ash; gag dash glag half;",
        "gaff; hall hald saga hash; sash gall flag; has dash half",
        "rttrt trttr rtrrt ttrtr rrtrt rtrtt trtrr rtrtr ttrtr rrtrt",
        "art tad gar at sat rag tag; far jar tar rah hat rat rag tat",
        "daft dart jars task; hard tart start grad data talk; shaft rash",
        "hart; haft karat halt salt dark; raft draft shark; grass",
        "graft fast raja shark gard shard start lard; flat",
        "graft fast raja shark gard shard start lard; flat",
        "day fly dug lay jay sky lug fur fry try hut; say lady yard",
        "lush shut fray surd lurk usual surf flay just lust dust",
        "vbbvb bvbbv vbvvb bbvbv vvbvb vbvbb bvbvv vbvbv bbvbv vvbvb",
        "bad vag bug bar vug vas vat bav bay bat bag bah vast bur",
        "baby vagary burst vary ruby valuta buy vast vault vulgar by",
        "nmmnm mnmmn nmnnm mmnmn nnmnm nmnmm mnmnn nmnmn mmnmn",
        "ham gun jam ran gum man fun mat nab arm sun may nut tun mud",
        "hang damm harm darn farm hung lamb rang sand tang tank many",
        "must bank gang busy hand thank bury junk human marry funny",
        "numb bush ray baulk flask bald stuff bask shark navy hurry"
      ],
      [
        "iooio oiooi ioiio ooioi iioio ioioo oioii ioioi ooioi iioio",
        "hid ill oil for hit out rid dog hot old too sit oat fin aim",
        "weewe eweew wewwe eewew wwewe wewee eweww wewew eewew wwewe",
        "red tea way leg tie let see owe wet set lie few how sir who",
        ",..,. .,.., ,.,,. ..,., ,,.,. ,.,.. .,.,, ,.,., ..,., ,,.,.",
        "why, yes. low, two, was, den. led. ebb, ten, you. new, met.",
        "xccxc cxccx xcxxc ccxcx xxcxc xcxcc cxcxx xcxcx ccxcx xxcxc",
        "act, six icy cub fix cab car. wax cry arc axe, can cat cod",
        "also take, wake late ease, joke sort food obey under beyond",
        "exercise hair rare. gold xenon warry; worm shirt luxury soul",
        "after death known; early first jewel large offer raise order",
        "hotel later ready. agree dirty earth, floor weight water soil",
        "night knife; house lunch naught yield; world story where habit"
      ],
      [
        "zqqzq qzqqz zqzzq qqzqz zzqzq zqzqq qzqzz zqzqz qqzqz zzqzq",
        "zoo quit zit quite zoom quick zest zing quake zeal zany",
        "p[[p[ [p[[p p[pp[ [[p[p pp[p[ p[p[[ [p[pp p[p[p [[p[p pp[p[",
        "put opaque [pup puzzle [proposal [prompt plan [pomp lamp",
        "']]'/ ]'/]' ']'/] /]']' '/]'] ']'/] ]']/' /]']' ]/']' '']/]",
        "plus/minus; acropolis' [appall] miles/hour [cm/sec] per' pair",
        "zombie square; poetic /marquee/ question prize [quiz] proper",
        "poster. price queen [plate] zippy, reply zero km/h quality;",
        "zigzag' porosity, quantity peace/poker camp zodiac damp plan",
        "zone quarter. prosperity zirconium' /pound/ power; [press]",
        "zipper [zoological] quack, piece proud; pearl. penetrate/",
      ],
      [
        "mean mean mean mean mean mean mean mean mean mean mean mean",
        "jeans jeans jeans jeans jeans jeans jeans jeans jeans jeans",
        "echo echo echo echo echo echo echo echo echo echo echo echo",
        "thin thin thin thin thin thin thin thin thin thin thin thin",
        "disk disk disk disk disk disk disk disk disk disk disk disk",
        "dish dish dish dish dish dish dish dish dish dish dish dish",
        "dale dale dale dale dale dale dale dale dale dale dale dale",
        "oils oils oils oils oils oils oils oils oils oils oils oils",
        "path path path path path path path path path path path path",
        "last last last last last last last last last last last last",
        "land land land land land land land land land land land land",
        "pets pets pets pets pets pets pets pets pets pets pets pets",
        "mean jeans echo thin disk dish dale oils path last land pets",
        "mean jeans echo thin disk dish dale oils path last land pets",
        "mean jeans echo thin disk dish dale oils path last land pets",
        "mean jeans echo thin disk dish dale oils path last land pets",
        "mean jeans echo thin disk dish dale oils path last land pets"
      ],
      [
        "pound pound pound pound pound pound pound pound pound pound",
        "pits pits pits pits pits pits pits pits pits pits pits pits",
        "ryas ryas ryas ryas ryas ryas ryas ryas ryas ryas ryas ryas",
        "ebbed ebbed ebbed ebbed ebbed ebbed ebbed ebbed ebbed ebbed",
        "risk risk risk risk risk risk risk risk risk risk risk risk",
        "reeks reeks reeks reeks reeks reeks reeks reeks reeks reeks",
        "leak leak leak leak leak leak leak leak leak leak leak leak",
        "lens lens lens lens lens lens lens lens lens lens lens lens",
        "flux flux flux flux flux flux flux flux flux flux flux flux",
        "leave leave leave leave leave leave leave leave leave leave leave leave",
        "leis leis leis leis leis leis leis leis leis leis leis leis",
        "leaf leaf leaf leaf leaf leaf leaf leaf leaf leaf leaf leaf",
        "pound pits ryas ebbed risk reeks leak lens flux leave leis leaf",
        "pound pits ryas ebbed risk reeks leak lens flux leave leis leaf",
        "pound pits ryas ebbed risk reeks leak lens flux leave leis leaf",
        "pound pits ryas ebbed risk reeks leak lens flux leave leis leaf",
        "pound pits ryas ebbed risk reeks leak lens flux leave leis leaf"
      ],
      [
        "lief lief lief lief lief lief lief lief lief lief lief lief",
        "lazy lazy lazy lazy lazy lazy lazy lazy lazy lazy lazy lazy",
        "keno keno keno keno keno keno keno keno keno keno keno keno",
        "quack quack quack quack quack quack quack quack quack quack",
        "knife knife knife knife knife knife knife knife knife knife",
        "jack jack jack jack jack jack jack jack jack jack jack jack",
        "chap chap chap chap chap chap chap chap chap chap chap chap",
        "sock sock sock sock sock sock sock sock sock sock sock sock",
        "keys keys keys keys keys keys keys keys keys keys keys keys",
        "obey obey obey obey obey obey obey obey obey obey obey obey",
        "men's men's men's men's men's men's men's men's men's men's",
        "caps caps caps caps caps caps caps caps caps caps caps caps",
        "lief lazy keno quack knife jack chap sock keys obey men's caps",
        "lief lazy keno quack knife jack chap sock keys obey men's caps",
        "lief lazy keno quack knife jack chap sock keys obey men's caps",
        "lief lazy keno quack knife jack chap sock keys obey men's caps",
        "lief lazy keno quack knife jack chap sock keys obey men's caps"
      ],
      [
        "vile vile vile vile vile vile vile vile vile vile vile vile",
        "fine fine fine fine fine fine fine fine fine fine fine fine",
        "vent vent vent vent vent vent vent vent vent vent vent vent",
        "vale vale vale vale vale vale vale vale vale vale vale vale",
        "back back back back back back back back back back back back",
        "bans bans bans bans bans bans bans bans bans bans bans bans",
        "bags bags bags bags bags bags bags bags bags bags bags bags",
        "tins tins tins tins tins tins tins tins tins tins tins tins",
        "gift gift gift gift gift gift gift gift gift gift gift gift",
        "grit grit grit grit grit grit grit grit grit grit grit grit",
        "herb herb herb herb herb herb herb herb herb herb herb herb",
        "hand hand hand hand hand hand hand hand hand hand hand hand",
        "vile fine vent vale back bans bags tins gift grit herb hand",
        "vile fine vent vale back bans bags tins gift grit herb hand",
        "vile fine vent vale back bans bags tins gift grit herb hand",
        "vile fine vent vale back bans bags tins gift grit herb hand",
        "vile fine vent vale back bans bags tins gift grit herb hand"
      ],
      [
          "ouoie uaueo iyaei yoeia eyaie uaoyi oyaey iyoeo iouya eaiyu",
          "ieyoi auyei oeaui eyaey oyuae eyoei uyieo aeoyi yioae oiyeu",
          "aeoua ieyoa uaeoe iaeoa ueaya aeyoi uaeoy eioae uaeya ioeia",
          "oeiau yoeie ieaua ieyei auaeo yoieu aeyoi auioy eaiae uoaie",
          "oyeao ieauy ioeya aueai oaeya iueie yoeau eioei aeyei iyuoa"
      ],
      [
         "gowof hrocj ayxle rfkqk dugpw cjxln dma]e xjnup skxnz rmokl",
         "aixle rlnlb dmywg tvprh lumtk ajrmw heomc zlnuk pfpex ndlyv",
         "nsptn bwitk zopsw vkstg mdibw auvle quvkn smrkx nithd krihx",
         "odmyl dlekh xutnv cmdiw lwubr hcken amrug ltnxp kwoby cysna",
         "kruxm aodnw ylq]s kpayc xuspg nzkej iehxf krmxl hsitb dmysk"
      ],
      [
        "ing ing ing ing ing ing ing ing ing ing ing ing ing",
        "tion tion tion tion tion tion tion tion tion tion tion",
        "ment ment ment ment ment ment ment ment ment ment ment",
        "ure ure ure ure ure ure ure ure ure ure ure ure ure ure",
        "sion sion sion sion sion sion sion sion sion sion sion",
        "ous ous ous ous ous ous ous ous ous ous ous ous ous ous",
        "our our our our our our our our our our our our our our",
        "er or er or er or er or er or er or er or er or er or",
        "tch tch tch tch tch tch tch tch tch tch tch tch tch tch",
        "ck ch ck ch ck ch ck ch ck ch ck ch ck ch ck ch ck ch ck",
        "ea ea ea ea ea ea ea ea ea ea ea ea ea ea ea ea ea ea ea",
        "er er er er er er er er er er er er er er er er er er er",
        "the ht the ht the ht the ht the ht the ht the ht the ht the",
        "ght ght ght ght ght ght ght ght ght ght ght ght ght ght ght",
        "es ly es ly es ly es ly es ly es ly es ly es ly es ly es ly",
        "ed ed ed ed ed ed ed ed ed ed ed ed ed ed ed ed ed ed ed",
        "and and and and and and and and and and and and and and"
      ],
      [
        "78878 87887 78778 88787 77878 78788 87877 78787 88787 77878",
        "mean7 jeans8 echo7 thin8 disk7 dish8 dale7 oils8 path7 last8",
        "56656 65665 56556 66565 55656 56566 65655 56565 66565 55656",
        "land5 pets6 pound8 pits7 ryas5 ebbed6 risk5 reeks7 leak8 lens6",
        "90090 09009 90990 00909 99090 90900 09099 90909 00909 99090",
        "flux9 lave0 leis7 leaf0 lief6 lazy9 keno5 quack9 knife8 jack0",
        "34434 43443 34334 44343 33434 34344 43433 34343 44343 33434",
        "chap3 sock4 keys3 obey0 men's7 caps4 vile3 fine4 vent6 vale4",
        "-==-= =-==- -=--= ==-=- --=-= -=-== =-=-- -=-=- ==-=- --=-=",
        "back= bans- bags3 tins- gift4 grit= herb5 hand= pink7 chin=",
        "12212 21221 12112 22121 11212 12122 21211 12121 22121 11212",
        "cash2 come1 earn= evil2 form- join3 vote1 deck6 fern2 zeal1",
        "only6 pain3 sale3 rank0===king7 5bait5 3 5deny5 3 4find42-10",
        "17-5=12 8-3=5 10-3=7 6-4=2 13-2=11 19-4=15 8-5=3 5-1=4 19-12=7",
        "49-1=48 12-3=9 15-9=6 12-8=4 11-4=7 19-13=6 12-3=9 10-6=4 9-4=5"
      ],
      [
        "GHDJY GYDUC Z:CCH HGXCD V:JPR JGKXG JDJEG YLG<N JENGT CJGCY",
        "GTY<D FGYDH KYNUN RDA:G F<DUJ LPDUY RLCPF GCGGD YAFCJ YGEXR",
        "RPVDC D< DV BVXCN TWYPY DNBTG AGLYV RFKBD HYPVL YRPJC G<H:X",
        "MAGIC RIVER MONEY NOISE PAPER WOMAN EVENT ANGRY COVER METAL",
        "COMPANY HORSES HAPPY SPECIAL VENTURE CHANGE RETURN KNIGHT",
        "MagiC RiveR MoneY NoisE PapeR WomaN EvenT AngrY CoveR MetaL",
        "ComPanY HorSeS HappY SpeCiaL VenTurE ChaNgE RetUrN KniGhT"
      ],
      [
       "! @! @ !@! @ ! @!! ! @! @@ !@@ @ ! !@ @ !!@ !@ ! @! @ @! !@@",
       "@song ! song @! song @ song !@ song ! song @@! song @ song !!",
       "# $# #$$ $# $#$ # $ $ ##$ # $# $ #$# # $#$ #$ $ # $$# $ #$$",
       "rain $ rain #$ rain ##$ rain # rain $# rain $ rain $# rain $",
       "%^ ^ %%^ % ^% ^ %^% ^^ % ^%^ ^ %^ % ^%% ^% ^ %^^ % ^^% % ^%^",
       "pale %^ pale ^ pale ^%^ pale % pale %^ pale ^% pale ^ pale %",
       "& *& * &*& * *&& & *& ** &** & * &* * &&* &* & *& * *& &* **",
        "calf & calf *& calf * calf &*& calf & calf **& calf * calf &",
        "() ) ( ))( ( )( ()( ) () ))( ( ) ))( )( ) (() )( ( )() () ((",
        "mask ( mask )( mask) mask ( mask )() mask ) mask () mask )(",
        "+ _ _+_ _+ _ __+ +_+ _ ++ _+ + _ ++_ _ + +_+ _ +_ + _+ + _+_",
        "mine _ mine +_ mine _+_ mine + mine _+ mine + mine _ mine _+",
        "coal (@ coal ?# coal ) coal $^ coal #_ coal )% coal & coal ^",
        "face $ face #( face $% face * face ^_ face @ face ) face %&@",
        "deal *$ deal )# deal ( deal &? deal %^ deal &_ deal $ deal @",
        "1. Mean, 2. Jeans, 3. Echo? 4. Thin, 5. Disk? 6. Dish, 7. Last? 8. Oils, 9. Path",
        `1) "Pound"; 2) "Pits"; 3) "Ryas"; 4) "Ebbed"; 5) "Risk"; 6) "Reeks"; 7) "Leak"`,
        "(Lief - Lazy) + (Keno ? Quack) + (Knife * Jack) - (Chap & Sock) * (Keys + Obey)",
        "<Vile & Fine> @ <Vent & Vale> @ <Back & Bans> @ <Bags & Tins> @ <Gift>"
      ],
      [
        "1. A bad workman quarrels with his tools.",
        "2. Better a glorious death than a shameful life.",
        "3. Calamity is man's true touchstone.",
        "4. Eat at pleasure, drink with measure.",
        "5. He who pleased everybody died before he was born.",
        "6. Jack of all trades and master of none.",
        "7. Keep a thing seven years and you will find a use for it.",
        "8. Make hay while the sun shine.",
        "9. Between two stools one falls to the ground.",
        "10. Roll my log and I will roll yours.",
        "11. Scornful dogs will eat dirty puddings.",
        "12. We never know the value of water till the well is dry.",
        "13. Old birds are not to be caught with chaff.",
        "14. Zeal without knowledge is a runaway horse.",
        "15. Better die standing than live kneeling.",
        "Looks like I'm typing a bit faster now. Now it's a good time to take a certification test.",
      ]
    ]
      

    }
    
    return  texts;
  }
  
  export default TutorLessons