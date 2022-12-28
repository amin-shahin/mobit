const categoriesProduct = [
    {id:1,cover:'/images/Home/categories/airpod.svg',productName:'هنزفری'},
    {id:2,cover:'/images/Home/categories/laptop.svg',productName:'لپ تاپ'},
    {id:3,cover:'/images/Home/categories/material pc.svg',productName:'قطعات کامپیوتر'},
    {id:4,cover:'/images/Home/categories/mobile.svg',productName:'گوشی موبایل '},
    {id:5,cover:'/images/Home/categories/powerBank.svg',productName:' پاور بانک'},
    {id:6,cover:'/images/Home/categories/side mobile.svg',productName:'جانبی موبایل '},
    {id:7,cover:'/images/Home/categories/smart watch.svg',productName:'ساعت هوشمند'},
    {id:8,cover:'/images/Home/categories/tablet.svg',productName:'تبلت'},
]
const specialOffers  = [
    {id:1,desc:'  محافظ صفحه نمایش سرامیکی ساعت هوشمند Redmi Watch',price:'83,000',discount:19000,discountTrue:true,discountPercent:77,star:4,comment:69,cover:'/images/Home/specialOffers/screen support smart watch1.webp'},
    {id:2,desc:'محافظ صفحه نمایش سرامیکی ساعت هوشمند  Bip 3 Pro',price:'83,000',discount:19000,discountTrue:true,discountPercent:77,star:4,comment:69,cover:'/images/Home/specialOffers/screen support smart watch bip3.webp'},
    {id:3,desc:' کاور محافظ سیلیکونی هندزفری انکر برای مدل Anker R100 ',price:'82,000',discount:49000,discountTrue:true,discountPercent:40,star:4,comment:69,cover:'/images/Home/specialOffers/cover airpod.webp'},
    {id:4,desc:'اس اس دی اینترنال ای دیتا ایکس پی جی مدل SX6000 Lite ظرفیت 128 گیگابایت',price:'842,000',discount:775000,discountTrue:true,discountPercent:10,star:4,comment:69,cover:'/images/Home/specialOffers/ssd.webp'},
    {id:5,desc:'شارژر همراه ای دیتا مدل T5000C ظرفیت 5000 میلی آمپر ساع',price:'288,000',discount:229000,discountTrue:true,discountPercent:20,star:4,comment:69,cover:'/images/Home/specialOffers/power bank hamrah.webp'},
    {id:6,desc:'هدفون بلوتوثی اینفینیکس مدل XE27',price:'3,950,000',discount:3380000,discountTrue:true,discountPercent:11,star:4,comment:69,cover:'/images/Home/specialOffers/airpod xe27.webp'},
    {id:7,desc:'مانیتور جی پلاس مدل GDM-225LN سایز 22 اینچ',price:'82,000',discount:49000,discountTrue:true,discountPercent:14,star:4,comment:69,cover:'/images/Home/specialOffers/tv.webp'},
    {id:8,desc:'کارت حافظه microSDHC سیبراتون کلاس 10 استاندارد UHS-I U1 سرعت 85MBps ظرفیت 16 گیگابایت',price:'116,000',discount:85000,discountTrue:true,discountPercent:27,star:4,comment:69,cover:'/images/Home/specialOffers/flash memory.webp'},
    {id:9,desc:'ساعت هوشمند شیائومی مدل Mi Watch XMWTCL02',price:'3,359,000',discount:3149000,discountTrue:true,discountPercent:6,star:4,comment:69,cover:'/images/Home/specialOffers/smart watch mi.webp'},
]

const topViewProducts = [
    {id:1,desc:'گوشی موبایل سامسونگ مدل Galaxy A32 دو سیم کارت ظرفیت 128 گیگابایت رم 6 گیگابایت',price:'  7,252,000',discount:7169000,star:4,comment:69,cover:'/images/Home/topViewer/sam a32.webp'},
    {id:2,desc:' گوشی موبایل نوکیا مدل 105 - 2019 TA-1174 DS دو سیم‌ کارت',price:'509,000',discount:485000,star:4,comment:450,cover:'/images/Home/topViewer/mobile nokia.webp'},
    {id:3,desc:'هندزفری بلوتوث هایلو مدل W۱',price:'  921,000',discount:819000,star:5,comment:925,cover:'/images/Home/bestSellers/airpod hayluo w1.webp'},
    {id:4,desc:'   شارژر همراه شیائومی مدل Redmi ظرفیت 20000 میلی آمپرساعت گلوبال به همراه کابل ',price:'  681,000',discount:619000,star:5,comment:125,cover:'/images/Home/bestSellers/powerBank xiaomi.webp'},
    {id:5,desc:' هندزفری بلوتوثی هایلو مدل Haylou GT6 TWS Earphones',price:'511,000',discount:452000,star:4,comment:85,cover:'/images/Home/bestSellers/airpod hayluo gt6.webp'},
    {id:6,desc:'  پاوربانک 10000 شیائومی Xiaomi Redmi PB100LZM 2.4A Fast Charge 10W نسخه گلوبال همراه',price:'429,000',discount:363000,star:4,comment:96,cover:'/images/Home/bestSellers/powerBank 2.webp'},
]

const brandCategoriesData = [
    {id:1,cover:'/images/Home/brandCategories/apple.webp',brand:'اپل'},
    {id:2,cover:'/images/Home/brandCategories/samsung.webp',brand:'سامسونگ'},
    {id:3,cover:'./images/Home/brandCategories/nokia.webp',brand:'نوکیا'},
    {id:4,cover:'./images/Home/brandCategories/one plus.webp',brand:'وان پلاس'},
    {id:5,cover:'./images/Home/brandCategories/xiaomi.webp',brand:'شیائومی'},
    {id:6,cover:'./images/Home/brandCategories/hoawei.webp',brand:'هواوی'},
    {id:7,cover:'./images/Home/brandCategories/g plus.webp',brand:'جی پلاس'},
]
 const bestSellers = [
    {id:1,desc:'گوشی موبایل نوکیا مدل2019 106 دو سیم‌ کارت',price:'  599,000',discount:528000,star:4,comment:69,cover:'/images/Home/bestSellers/nokia106.webp'},
    {id:2,desc:' هدست بی سیم QCY T13 ',price:'  590,000',discount:529000,star:5,comment:455,cover:'/images/Home/bestSellers/airpod qcy.webp'},
    {id:3,desc:'  گوشی موبایل نوکیا مدل 105 - 2019 TA-1174 DS دو سیم‌ کارت ',price:'  509,000',discount:489000,star:4,comment:425,cover:'/images/Home/bestSellers/nokia 105.webp'},
    {id:4,desc:'   شارژر همراه شیائومی مدل Redmi ظرفیت 20000 میلی آمپرساعت گلوبال به همراه کابل ',price:'  681,000',discount:619000,star:5,comment:125,cover:'/images/Home/bestSellers/powerBank xiaomi.webp'},
    {id:5,desc:'هندزفری بلوتوث هایلو مدل W۱',price:'  921,000',discount:819000,star:5,comment:925,cover:'/images/Home/bestSellers/airpod hayluo w1.webp'},
    {id:6,desc:' هندزفری بلوتوثی هایلو مدل Haylou GT6 TWS Earphones',price:'511,000',discount:452000,star:4,comment:85,cover:'/images/Home/bestSellers/airpod hayluo gt6.webp'},
    {id:7,desc:'  پاوربانک 10000 شیائومی Xiaomi Redmi PB100LZM 2.4A Fast Charge 10W نسخه گلوبال همراه',price:'429,000',discount:363000,star:4,comment:96,cover:'/images/Home/bestSellers/powerBank 2.webp'},
    {id:8,desc:'گوشی موبایل سامسونگ مدل Galaxy A32 دو سیم کارت ظرفیت 128 گیگابایت رم 6 گیگابایت',price:'  7,252,000',discount:7169000,star:4,comment:69,cover:'/images/Home/topViewer/sam a32.webp'},

 ]
       
             
const newMobile =[

 {id:1,desc:' گوشی موبایل شیائومی مدل Redmi Note 11 Pro Plus 5G دو سیم‌ کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت-پک هند رام گلوبال ',price:'  11,067,000',discount:10850000,star:4,comment:69,cover:'/images/Home/new mobile/redmi node 11 pro 256.webp'},
 {id:2,desc:' گوشی موبایل شیائومی مدل Redmi Note 11 Pro Plus 5G دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 8 گیگابایت-پک هند رام گلوبال ',price:'  9,820,000',discount:9590000,star:4,comment:69,cover:'/images/Home/new mobile/redmi note 11 pro 128.webp'},
 {id:3,desc:'   گوشی موبایل نوکیا مدل G11 PLUS TA-1421 دو سیم‌کارت ظرفیت 64 گیگابایت و رم 4 گیگابایت',price:'  4,341,000',discount:4095000,star:4,comment:69,cover:'/images/Home/new mobile/g11 plus.webp'},
 {id:4,desc:' گوشی موبایل آنر مدل 70 دو سیم کارت ظرفیت 128 گیگابایت و 8 گیگابایت رم',price:'  12,341,000',discount:12095000,star:4,comment:69,cover:'/images/Home/new mobile/honor 70.webp'},
 {id:5,desc:'گوشی موبایل آنر مدل X7 دو سیم کارت ظرفیت 128گیگابایت و 6 گیگابایت رم',price:'  5,150,000',discount:4959000,star:4,comment:69,cover:'/images/Home/new mobile/honr x7.webp'},
 {id:6,desc: 'گوشی موبایل سامسونگ مدل Galaxy A04 دو سیم کارت ظرفیت 32 گیگابایت و 3 گیگابایت رم',price:'  3,289,000',discount:3082000,star:4,comment:69,cover:'/images/Home/new mobile/6galaxy a04.webp'},

]

const newProduct = [
    {id:1,desc:'عینک محافظ چشم کامپیوتر شیائومی مدل HMJ01RM',price:'  1,103,000',discount:919000,star:4,comment:69,cover:'/images/Home/new product/glasses.webp'},
    {id:2,desc:'ساعت هوشمند جی تب مدل G-tab GT3 Pro',price:'  1,421,000',discount:1199000,star:4,comment:69,cover:'/images/Home/new product/smart watch gt3.webp'},
    {id:3,desc:' اسمارت واچ کیسلکت مدل Smart Calling Watch Kr با بند اضافه',price:'  1,597,000',discount:1465000,star:4,comment:69,cover:'/images/Home/new product/smart calling watch.webp'},
    {id:4,desc:' اسمارت واچ کیسلکت مدل Smart Calling Watch Kr Pr',price:'  2,040,000',discount:1879000,star:4,comment:69,cover:'/images/Home/new product/smart calling watch 2.webp'},
    {id:5,desc:' زمین شوی شیائومی Deerma مدل DEM-TB900',price:'  880,000',discount:735000,star:4,comment:69,cover:'/images/Home/new product/earth cleaner .webp'},
    {id:6,desc:' تبلت سامسونگ مدل Galaxy Tab A8 10.5 SM-X205 ظرفیت 32 گیگابایت و رم 3 گیگابایت',price:'  6,955,000',discount:6819000,star:4,comment:69,cover:'/images/Home/new product/tablet.webp'},
    {id:7,desc:'هندزفری بلوتوثی هایلو مدل GT7 Neo',price:'  627,000',discount:519000,star:4,comment:69,cover:'/images/Home/new product/airpod.webp'},
    {id:8,desc:'هندزفری بلوتوثی هایلو مدل X1 Neo ',price:'  583,000',discount:519000,star:4,comment:69,cover:'/images/Home/new product/airpod x1 new.webp'},
    {id:9,desc:' بی سیم واکی تاکی شیائومی مدل XIAOMI BeeBest A108 ',price:'  1,231,000',discount:1079000,star:4,comment:69,cover:'/images/Home/new product/xiaomi bisim.webp'},
    
]

const TechnologyNewsData = [
    {id:1,cover:'./images/Home/news/best-iphone.jpg',title:"بهترین گوشی اپل (درسال 2022)"},
    {id:2,cover:'./images/Home/news/honor.jpg',title:"بهترین گوشی آنر (درسال 2022)"},
    {id:3,cover:'./images/Home/news/best-wireless-headphone-.jpg',title:"بهترین هنزفری های تا 300 هزار تومان  (درسال 2022)"},
    {id:4,cover:'./images/Home/news/the-samsung-phone.jpg',title:"بهترین گوشی سامسونگ (درسال 2022)"}
]

    export  {topViewProducts,brandCategoriesData,bestSellers,newMobile,newProduct,TechnologyNewsData,specialOffers,categoriesProduct}