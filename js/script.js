// Telegram foydalanuvchi nomingiz (@ belgisisiz). Shu yerga o'zingiznikini yozing:
var TG="Utkirbekogluu";
var STEP=0.5; // kg qadami
var OPEN=8,CLOSE=21; // ish vaqti (soat): 08:00 - 21:00 (Toshkent vaqti)
var ART=[
`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><ellipse cx="60" cy="112" rx="34" ry="4.5" fill="#000" opacity=".13"/><g stroke="#A8573F" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"><path d="M36 44C18 40 8 60 18 72C26 80 38 72 39 62Z" fill="#EDB48C" /><path d="M84 44C102 40 112 60 102 72C94 80 82 72 81 62Z" fill="#EDB48C" /><path d="M44 78C24 82 16 100 26 110C36 117 50 105 54 90Z" fill="#EDB48C" /><path d="M76 78C96 82 104 100 94 110C84 117 70 105 66 90Z" fill="#EDB48C" /><circle cx="24" cy="113" r="4.5" fill="#FFF8EE"/><circle cx="96" cy="113" r="4.5" fill="#FFF8EE"/><path d="M60 24C86 24 92 50 90 68C88 88 74 98 60 98C46 98 32 88 30 68C28 50 34 24 60 24Z" fill="#F9D5B5" /><ellipse cx="60" cy="25" rx="10" ry="4" fill="#E27C6F"/></g><path d="M60 34C52 50 52 74 58 94M60 34C68 50 68 74 62 94" fill="none" stroke="#EDB48C" stroke-width="2.5" stroke-linecap="round" opacity="1"/><ellipse cx="46" cy="50" rx="9" ry="5" fill="#fff" opacity="0.55" transform="rotate(-35 46 50)"/><circle cx="46" cy="40" r="1.1" fill="#E2A27D"/><circle cx="70" cy="44" r="1.1" fill="#E2A27D"/><circle cx="54" cy="56" r="1.1" fill="#E2A27D"/><circle cx="66" cy="66" r="1.1" fill="#E2A27D"/><circle cx="48" cy="72" r="1.1" fill="#E2A27D"/><circle cx="72" cy="80" r="1.1" fill="#E2A27D"/><circle cx="58" cy="88" r="1.1" fill="#E2A27D"/><circle cx="52" cy="50" r="1.1" fill="#E2A27D"/><circle cx="64" cy="76" r="1.1" fill="#E2A27D"/></svg>`,
`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><ellipse cx="60" cy="112" rx="34" ry="4.5" fill="#000" opacity=".13"/><g stroke="#A8573F" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"><path d="M12 74C10 50 32 32 60 32C82 32 98 42 110 52C100 64 84 82 62 90C40 98 16 94 12 74Z" fill="#F7B0A6" /><path d="M66 98C80 94 98 98 104 106C96 112 78 112 66 106Z" fill="#F4A097" /></g><path d="M24 66C40 52 62 46 90 54" fill="none" stroke="#FFE9DC" stroke-width="4.5" stroke-linecap="round" opacity="1"/><path d="M26 78C44 86 66 84 88 70M36 68C50 72 68 70 82 62" fill="none" stroke="#E5877D" stroke-width="2.6" stroke-linecap="round" opacity="0.9"/><ellipse cx="46" cy="44" rx="12" ry="4" fill="#fff" opacity="0.4" transform="rotate(-12 46 44)"/></svg>`,
`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><ellipse cx="60" cy="112" rx="34" ry="4.5" fill="#000" opacity=".13"/><g stroke="#A8573F" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"><path d="M84 78L98 92" fill="none" stroke="#A8573F" stroke-width="13" stroke-linecap="round" opacity="1"/><path d="M84 78L98 92" fill="none" stroke="#FFF8EE" stroke-width="9" stroke-linecap="round" opacity="1"/><circle cx="103" cy="94" r="6.5" fill="#FFF8EE"/><circle cx="96" cy="101" r="6" fill="#FFF8EE"/><path d="M10 62C10 40 36 28 62 30C90 32 102 50 94 68C86 86 60 94 36 88C20 84 10 76 10 62Z" fill="#F9D5B5" /></g><path d="M26 78C44 90 68 90 82 78" fill="none" stroke="#EDB48C" stroke-width="3" stroke-linecap="round" opacity="0.9"/><ellipse cx="40" cy="42" rx="13" ry="5" fill="#fff" opacity="0.5" transform="rotate(-25 40 42)"/><circle cx="36" cy="60" r="1.1" fill="#E2A27D"/><circle cx="52" cy="70" r="1.1" fill="#E2A27D"/><circle cx="60" cy="50" r="1.1" fill="#E2A27D"/><circle cx="72" cy="58" r="1.1" fill="#E2A27D"/><circle cx="46" cy="80" r="1.1" fill="#E2A27D"/><circle cx="68" cy="84" r="1.1" fill="#E2A27D"/><circle cx="30" cy="70" r="1.1" fill="#E2A27D"/><circle cx="78" cy="44" r="1.1" fill="#E2A27D"/></svg>`,
`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><ellipse cx="60" cy="112" rx="34" ry="4.5" fill="#000" opacity=".13"/><g stroke="#A8573F" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"><path d="M14 82C6 64 20 44 42 46C56 48 60 64 52 76C44 90 22 94 14 82Z" fill="#F9D5B5" /><path d="M46 52C54 36 72 30 86 36C92 46 86 60 72 66C60 70 52 64 46 52Z" fill="#F9D5B5" /><path d="M82 36C92 24 104 22 109 27C106 36 96 42 88 44Z" fill="#EDB48C" /><circle cx="48" cy="58" r="6" fill="#FFF8EE"/></g><ellipse cx="30" cy="58" rx="8" ry="4" fill="#fff" opacity="0.5" transform="rotate(-30 30 58)"/><ellipse cx="68" cy="44" rx="9" ry="3.5" fill="#fff" opacity="0.5" transform="rotate(-20 68 44)"/><circle cx="24" cy="72" r="1.1" fill="#E2A27D"/><circle cx="36" cy="80" r="1.1" fill="#E2A27D"/><circle cx="60" cy="52" r="1.1" fill="#E2A27D"/><circle cx="76" cy="52" r="1.1" fill="#E2A27D"/><circle cx="52" cy="64" r="1.1" fill="#E2A27D"/><circle cx="96" cy="32" r="1.1" fill="#E2A27D"/></svg>`,
`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><ellipse cx="60" cy="113" rx="36" ry="4.5" fill="#000" opacity=".13"/><g stroke="#A8573F" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"><path d="M10 66C8 44 30 28 56 30C70 31 77 40 85 38C99 36 111 50 109 65C107 81 92 95 74 97C58 99 52 90 38 93C22 95 12 84 10 66Z" fill="#A63346" /></g><path d="M56 32C61 50 58 72 67 92" fill="none" stroke="#6E1E2B" stroke-width="3" stroke-linecap="round" opacity="1"/><path d="M62 60C74 58 88 62 98 72" fill="none" stroke="#6E1E2B" stroke-width="2.6" stroke-linecap="round" opacity="0.8"/><ellipse cx="30" cy="56" rx="12" ry="5" fill="#E37A8E" opacity="0.75" transform="rotate(-30 30 56)"/><ellipse cx="86" cy="52" rx="9" ry="4" fill="#E37A8E" opacity="0.55" transform="rotate(-20 86 52)"/><circle cx="96" cy="86" r="4" fill="#5F7F3F" stroke="#3E5A25" stroke-width="1.5"/></svg>`,
`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><ellipse cx="60" cy="114" rx="38" ry="4.5" fill="#000" opacity=".13"/><g stroke="#A8573F" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"><path d="M74 14C52 22 42 48 48 76C52 94 62 104 74 106C86 104 96 94 100 76C106 48 96 22 74 14Z" fill="#F4B5A0" /></g><path d="M74 18V104" fill="none" stroke="#FFF8EE" stroke-width="6" stroke-linecap="round" opacity="1"/><path d="M74 18V104" fill="none" stroke="#A8573F" stroke-width="1.2" stroke-linecap="round" opacity="1"/><path d="M74 34C60 34 52 42 50 52M74 50C60 50 52 58 50 68M74 66C60 66 53 73 52 83M74 82C62 82 56 88 55 96M74 34C88 34 96 42 98 52M74 50C88 50 96 58 98 68M74 66C88 66 95 73 96 83M74 82C86 82 92 88 93 96" fill="none" stroke="#FFF1E4" stroke-width="3.2" stroke-linecap="round" opacity="1"/><path d="M26 14C44 26 14 52 28 72C34 80 32 90 26 100" fill="none" stroke="#A8573F" stroke-width="16" stroke-linecap="round" opacity="1"/><path d="M26 14C44 26 14 52 28 72C34 80 32 90 26 100" fill="none" stroke="#F9D5B5" stroke-width="12" stroke-linecap="round" opacity="1"/><path d="M30 22L22 26M27 34L34 36M20 46L28 48M18 60L28 60M26 74L34 72M30 86L22 88" fill="none" stroke="#EDB48C" stroke-width="2.4" stroke-linecap="round" opacity="1"/><ellipse cx="26" cy="13" rx="8" ry="3.5" fill="#E27C6F" stroke="#A8573F" stroke-width="1.8"/></svg>`,
`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><ellipse cx="60" cy="113" rx="34" ry="4.5" fill="#000" opacity=".13"/><g stroke="#A8573F" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"><path d="M50 68L26 94" fill="none" stroke="#A8573F" stroke-width="14" stroke-linecap="round" opacity="1"/><path d="M50 68L26 94" fill="none" stroke="#FFF8EE" stroke-width="10" stroke-linecap="round" opacity="1"/><circle cx="21" cy="98" r="6.5" fill="#FFF8EE"/><circle cx="30" cy="103" r="6" fill="#FFF8EE"/><path d="M48 56L38 80L62 72Z" fill="#F9D5B5" /><circle cx="74" cy="44" r="29" fill="#F9D5B5"/></g><ellipse cx="64" cy="32" rx="12" ry="5" fill="#fff" opacity="0.55" transform="rotate(-30 64 32)"/><path d="M58 62C70 70 86 68 94 56" fill="none" stroke="#EDB48C" stroke-width="3" stroke-linecap="round" opacity="0.9"/><circle cx="62" cy="46" r="1.1" fill="#E2A27D"/><circle cx="78" cy="34" r="1.1" fill="#E2A27D"/><circle cx="86" cy="50" r="1.1" fill="#E2A27D"/><circle cx="70" cy="58" r="1.1" fill="#E2A27D"/><circle cx="88" cy="38" r="1.1" fill="#E2A27D"/><circle cx="56" cy="38" r="1.1" fill="#E2A27D"/><circle cx="76" cy="50" r="1.1" fill="#E2A27D"/></svg>`,
`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><ellipse cx="60" cy="114" rx="34" ry="4.5" fill="#000" opacity=".13"/><g stroke="#A8573F" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"><path d="M53 6C52 16 47 24 44 34L76 34C73 24 68 16 67 6Z" fill="#EDB48C" /><path d="M36 52C22 50 15 64 22 74C28 80 37 74 38 66Z" fill="#EDB48C" /><path d="M84 52C98 50 105 64 98 74C92 80 83 74 82 66Z" fill="#EDB48C" /><path d="M60 28C88 28 95 56 92 76C89 96 76 106 60 106C44 106 31 96 28 76C25 56 32 28 60 28Z" fill="#F9D5B5" /><ellipse cx="60" cy="6" rx="9.5" ry="3.5" fill="#E27C6F"/><ellipse cx="60" cy="104" rx="13" ry="4.5" fill="#E58A80"/></g><path d="M60 38C52 54 52 80 58 98M60 38C68 54 68 80 62 98" fill="none" stroke="#EDB48C" stroke-width="2.5" stroke-linecap="round" opacity="1"/><ellipse cx="45" cy="56" rx="10" ry="5" fill="#fff" opacity="0.55" transform="rotate(-35 45 56)"/><circle cx="46" cy="44" r="1.1" fill="#E2A27D"/><circle cx="72" cy="50" r="1.1" fill="#E2A27D"/><circle cx="54" cy="64" r="1.1" fill="#E2A27D"/><circle cx="68" cy="72" r="1.1" fill="#E2A27D"/><circle cx="48" cy="82" r="1.1" fill="#E2A27D"/><circle cx="74" cy="88" r="1.1" fill="#E2A27D"/><circle cx="60" cy="56" r="1.1" fill="#E2A27D"/></svg>`,
`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><ellipse cx="60" cy="112" rx="34" ry="4.5" fill="#000" opacity=".13"/><g stroke="#A8573F" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"><path d="M36 44C18 40 8 60 18 72C26 80 38 72 39 62Z" fill="#EDB48C" /><path d="M84 44C102 40 112 60 102 72C94 80 82 72 81 62Z" fill="#EDB48C" /><path d="M44 78C24 82 16 100 26 110C36 117 50 105 54 90Z" fill="#EDB48C" /><path d="M76 78C96 82 104 100 94 110C84 117 70 105 66 90Z" fill="#EDB48C" /><circle cx="24" cy="113" r="4.5" fill="#FFF8EE"/><circle cx="96" cy="113" r="4.5" fill="#FFF8EE"/><path d="M60 24C86 24 92 50 90 68C88 88 74 98 60 98C46 98 32 88 30 68C28 50 34 24 60 24Z" fill="#F9D5B5" /><ellipse cx="60" cy="25" rx="10" ry="4" fill="#E27C6F"/></g><path d="M60 34C52 50 52 74 58 94M60 34C68 50 68 74 62 94" fill="none" stroke="#EDB48C" stroke-width="2.5" stroke-linecap="round" opacity="1"/><ellipse cx="46" cy="50" rx="9" ry="5" fill="#fff" opacity="0.55" transform="rotate(-35 46 50)"/><circle cx="46" cy="40" r="1.1" fill="#E2A27D"/><circle cx="70" cy="44" r="1.1" fill="#E2A27D"/><circle cx="54" cy="56" r="1.1" fill="#E2A27D"/><circle cx="66" cy="66" r="1.1" fill="#E2A27D"/><circle cx="48" cy="72" r="1.1" fill="#E2A27D"/><circle cx="72" cy="80" r="1.1" fill="#E2A27D"/><circle cx="58" cy="88" r="1.1" fill="#E2A27D"/><circle cx="52" cy="50" r="1.1" fill="#E2A27D"/><circle cx="64" cy="76" r="1.1" fill="#E2A27D"/></svg>`
];
var TINT=["#FFE8D6", "#FFE0DC", "#FFE6D0", "#FFEBD2", "#F6D9DD", "#EFE6DA", "#FFE3D0", "#FFE9D8", "#FFE9C9"];

var IC={ph:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',tg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>',bag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>'};
// Mahsulot rasmlari: images/ papkaga shu nomlar bilan joylang (800x800 kvadrat .jpg tavsiya etiladi)
var PH=["images/p0.jpg","images/p1.jpg","images/p2.jpg","images/p3.jpg","images/p4.jpg","images/p5.jpg","images/p6.jpg","images/p7.jpg","images/p8.jpg"];
function vis(i){return PH[i]?{c:" pv",s:"background-image:url("+PH[i]+")",h:""}:{c:"",s:"background:"+TINT[i],h:ART[i]}}

var T={
uz:{"thx_t0": "Xaridingiz uchun rahmat!", "inst_ok": "Sayt telefoningizga o'rnatildi", "ic_t": "Saytni telefoningizga yuklab oling", "ic_s": "Har safar qidirib o'tirmang, ikonka orqali bir bosishda oching.", "ins_t": "Saytni telefoningizga qo'shing", "ins_s": "Quyidagi 3 qadamni bajaring, sayt ekraningizda ikonka bo'lib turadi.", "ios1": "Safari brauzerida pastdagi \u00abUlashish\u00bb tugmasini bosing", "ios2": "\u00abBosh ekranga qo'shish\u00bb ni tanlang", "ios3": "\u00abQo'shish\u00bb ni bosing, ikonka ekraningizda paydo bo'ladi", "and1": "Brauzerning yuqoridagi \u22ee menyusini oching", "and2": "\u00abIlovani o'rnatish\u00bb yoki \u00abBosh ekranga qo'shish\u00bb ni tanlang", "and3": "\u00abO'rnatish\u00bb ni bosing, ikonka ekraningizda paydo bo'ladi", "pc1": "Manzil satrining o'ng chetidagi o'rnatish belgisini bosing", "pc2": "\u00abO'rnatish\u00bb tugmasini bosing", "pc3": "Sayt alohida oynada, ilova kabi ochiladi","cfm_t": "Buyurtmani yubordingizmi?", "cfm_s": "Telegramda \u00abYuborish\u00bb tugmasini bosgan bo'lsangiz, tasdiqlang.", "cfm_yes": "Ha, yubordim", "cfm_no": "Yo'q, Telegramni qayta ochish", "o_done": "Telegramda yubordim","cat3": "Tayyor taom", "thx_t": "{n}, xaridingiz uchun rahmat!", "thx_s": "Xaridingizdan mamnunmiz. Biz tez orada javob beramiz.", "thx_bye": "Salomat bo'ling, yana kutamiz!", "thx_more": "Yana xarid qilish", "thx_tg": "Telegramni qayta ochish","osub": "Ma'lumotlaringizni yozing, Telegram tayyor xabar bilan ochiladi", "onote": "Izoh (ixtiyoriy)", "nlbl": "Izoh", "stg_t": "Sozlamalar", "stg_sub": "Saytni o'zingizga moslang", "s_lang": "Til", "s_theme": "Mavzu", "s_light": "Oq", "s_dark": "Qorong'u", "s_sys": "Tizim", "s_motion": "Animatsiyalar", "s_motion_d": "Harakatli effektlarni yoqish yoki o'chirish", "s_intro": "Kirish animatsiyasi", "s_intro_d": "Sayt ochilganda chiqadigan sakrovchi tovuq", "s_vib": "Titrash", "s_vib_d": "Tugmalarni bosganda telefon titraydi", "s_big": "Katta matn", "s_big_d": "Yozuvlarni kattaroq qilish", "s_step": "Miqdor qadami", "s_step_d": "+ tugmasi necha kg qo'shadi", "s_rem": "Ma'lumotlarimni eslab qol", "s_rem_d": "Keyingi buyurtmada ism, telefon va manzil o'zi chiqadi", "s_clrcart": "Savatni tozalash", "s_clrdata": "Saqlangan ma'lumotni o'chirish", "s_share": "Saytni ulashish", "s_tg": "Telegramda yozish", "s_reset": "Sozlamalarni tiklash", "t_cart0": "Savat tozalandi", "t_data0": "Saqlangan ma'lumot o'chirildi", "t_copied": "Havola nusxalandi", "t_ios": "Safari: Ulashish tugmasi, so'ng \u00abBosh ekranga qo'shish\u00bb", "t_reset": "Sozlamalar tiklandi", "t_step": "Qadam o'zgartirildi",u:"kg",fsub:"Savol yoki buyurtma bo'lsa, qo'ng'iroq qiling yoki yozing.",lp:"Telefon",la:"Manzil",lh:"Ish vaqti",st1:"Hozir ochiq",st0:"Hozir yopiq",miss:"Kechirasiz, avval ism, telefon va manzilni to'ldiring",phbad:"Telefon raqamini to'liq yozing",thx:"Rahmat! Telegramda \u00abYuborish\u00bb ni bosing",inst:"Saytni yuklab olish",cat0:"Hammasi",cat1:"Go'sht",cat2:"Jigar va sho'rva",i1t:"Bepul yetkazib berish",i1:"Buyurtmangizni uyingizgacha bepul yetkazamiz.",i2t:"Ish vaqti",i2:"Har kuni 08:00 – 21:00",i3t:"100% xalol",i3:"Barcha mahsulotlarimiz sifatli va xalol.",otl:"Bugungi takliflar",more:"Batafsil",tg:["Bugungi taklif","Xalol va toza","Sovutilgan","Yangi keldi","Sifatli","Hamyonbop","Yangi","Xalol","Tayyor taom"],tot:"Jami",otitle:"Buyurtmani tasdiqlash",oname:"Ismingiz",ophone:"Telefon raqamingiz",oaddr:"Yetkazish manzili",otg:"Telegramda yuborish",ocopy:"Nusxalash",ocopied:"Buyurtma nusxalandi",ohint:"Telegram ochilganda xabar avtomatik chiqmasa, nusxalangan matnni xabarga qo'ying (Paste).",rev:"Sharhlar",revs:"ta sharh",norate:"Hali baho yo'q",nrev:"Hali sharh yo'q. Birinchi bo'ling!",yname:"Ismingiz",ycom:"Fikringizni yozing...",send:"Sharh yuborish",add:"Savatga qo'shish",need:"Baho bering va fikr yozing",thanks:"Rahmat! Fikringiz qo'shildi",anon:"Mijoz",m_home:"Bosh sahifa",m_about:"Biz haqimizda",atitle:"Biz haqimizda",a1:"Bizning sahifamiz, ya'ni «Xom tovuq» dasturimiz 2026-yilda ishlab chiqilgan va bu sayt ham demo, ham jonli variantda ishlamoqda.",a2:"Siz bizdan mahsulot olishga majbur emassiz. Biz ham sizni mahsulot olishga majburlayotganimiz yo'q.",a3:"Bu dastur odamlarga yaxshilik qilish maqsadida yaratilgan",a4:"Bu sayt Khudoyberdiev tomonidan yaratilgan.",a5:"Bizning mahsulotlarimizning barchasi sifatli va 100% xalol. Uyingizgacha bepul yetkazib berish xizmatimiz ham mavjud.",a6:"Biz bilan bog'lanish uchun tel:",m_prod:"Mahsulotlar",m_how:"Qanday buyurtma",m_contact:"Aloqa",tag:"Bugun yangi keltirildi",h1:"Sifatli, toza xom tovuq",sub:"Har kuni yangi. Sovuq zanjirda saqlanadi, tarozida aniq tortiladi va uyingizgacha yetkaziladi.",cta:"Buyurtma berish",call:"Qo'ng'iroq qilish",c1:"Halol",c2:"Sovuq zanjir",c3:"Tez yetkazish",b1:"100% yangi",ptitle:"Mahsulotlar",search:"Qidirish...",s1t:"1. Tanlang",s1:"Kerakli mahsulotni va kilogrammni + tugmasi bilan qo'shing.",s2t:"2. Telegramda yuboring",s2:"Pastdagi tugma buyurtmangizni tayyor xabar qilib Telegramga yuboradi.",s3t:"3. Qabul qiling",s3:"Operator bog'lanadi va mahsulotni manzilingizga yetkazamiz.",ctitle:"Biz bilan bog'lanish",addr:"Toshkent shahri, Chilonzor tumani, Bunyodkor ko'chasi 12",hours:"Har kuni 08:00 – 21:00",openmap:"Xaritada ochish",kg:"so'm/kg",sum:"so'm",items:"ta mahsulot",order:"Telegramda buyurtma",none:"Hech narsa topilmadi",msg:"Assalomu alaykum! Buyurtma bermoqchiman:",mq:"Har kuni yangi • Halol • Tez yetkazish • Toza va sifatli • ",
 p:[["Butun tovuq","Butun, tozalangan, 1.5–2 kg","Yosh broyler tovuq, tozalangan va yuvilgan. Qovurish, duxovkada pishirish va sho'rva uchun mos. Har kuni yangi keltiriladi."],["Ko'krak filesi","Suyaksiz, terisiz","Yog'i kam, oqsilga boy qism. Tez pishadi, kotlet, shashlik va salatlar uchun juda yaxshi."],["Son (but)","Yangi, sovutilgan","Yumshoq va shirali go'sht. Tandir, duxovka va qovurish uchun eng yaxshi tanlov."],["Qanot","Marinadga tayyor","Marinadga tayyor qanotlar. Duxovkada yoki qovurilgan holda mazali gazak."],["Jigar","Toza, yangi","Toza va yangi jigar. Temir va vitaminlarga boy, tez pishadi."],["Bo'yin go'shti","Sho'rva uchun","Sho'rva va bulon uchun. Hamyonbop narx, to'yimli ta'm."],["Butaka","Yangi, sovutilgan","Tovuqning oyoq qismi. Qovurish, duxovka va tandir uchun mos."],["Tush bo'yinli","Bo'yni bilan, tozalangan","Bo'yni bilan birga butun tush. Sho'rva, bulon va qovurish uchun yaxshi tanlov."],["Tovuq tandir","Tandirda pishirilgan, tayyor","Maxsus ziravorlarda tandirda pishirilgan butun tovuq. Qobig'i qarsildoq, go'shti yumshoq va shirali. Issiq holda yeyishga tayyor."]]},
en:{"thx_t0": "Thank you for your purchase!", "inst_ok": "Site installed on your device", "ic_t": "Download the site to your phone", "ic_s": "No need to search every time, open it with one tap from the icon on your screen.", "ins_t": "Add the site to your phone", "ins_s": "Follow these 3 steps and the site will sit on your screen as an icon.", "ios1": "In Safari, tap the Share button at the bottom", "ios2": "Choose Add to Home Screen", "ios3": "Tap Add, the icon appears on your screen", "and1": "Open the browser's \u22ee menu at the top", "and2": "Choose Install app or Add to Home screen", "and3": "Tap Install, the icon appears on your screen", "pc1": "Click the install icon at the right end of the address bar", "pc2": "Click Install", "pc3": "The site opens in its own window like an app","cfm_t": "Did you send your order?", "cfm_s": "If you pressed Send in Telegram, please confirm.", "cfm_yes": "Yes, I sent it", "cfm_no": "No, open Telegram again", "o_done": "I sent it on Telegram","cat3": "Ready meals", "thx_t": "{n}, thank you for your purchase!", "thx_s": "We're happy with your purchase. We'll reply soon.", "thx_bye": "Take care, see you again!", "thx_more": "Shop more", "thx_tg": "Open Telegram again","osub": "Enter your details, Telegram opens with a ready message", "onote": "Note (optional)", "nlbl": "Note", "stg_t": "Settings", "stg_sub": "Make the site yours", "s_lang": "Language", "s_theme": "Theme", "s_light": "Light", "s_dark": "Dark", "s_sys": "System", "s_motion": "Animations", "s_motion_d": "Turn motion effects on or off", "s_intro": "Intro animation", "s_intro_d": "The bouncing chicken when the site opens", "s_vib": "Vibration", "s_vib_d": "Phone vibrates when you tap buttons", "s_big": "Large text", "s_big_d": "Make text bigger", "s_step": "Quantity step", "s_step_d": "How many kg the + button adds", "s_rem": "Remember my details", "s_rem_d": "Name, phone and address are filled in next time", "s_clrcart": "Clear cart", "s_clrdata": "Delete saved details", "s_share": "Share site", "s_tg": "Write on Telegram", "s_reset": "Reset settings", "t_cart0": "Cart cleared", "t_data0": "Saved details deleted", "t_copied": "Link copied", "t_ios": "Safari: tap Share, then Add to Home Screen", "t_reset": "Settings reset", "t_step": "Step changed",u:"kg",fsub:"Questions or an order? Call us or write to us.",lp:"Phone",la:"Address",lh:"Working hours",st1:"Open now",st0:"Closed now",miss:"Sorry, please fill in your name, phone and address first",phbad:"Please enter a complete phone number",thx:"Thank you! Press Send in Telegram",inst:"Download the site",cat0:"All",cat1:"Meat",cat2:"Liver & broth",i1t:"Free delivery",i1:"We deliver your order to your door for free.",i2t:"Working hours",i2:"Every day 08:00 – 21:00",i3t:"100% halal",i3:"All our products are quality and halal.",otl:"Today's offers",more:"Details",tg:["Today's pick","Halal & clean","Chilled","Just arrived","Quality","Budget-friendly","Fresh","Halal","Ready to eat"],tot:"Total",otitle:"Confirm your order",oname:"Your name",ophone:"Your phone number",oaddr:"Delivery address",otg:"Send on Telegram",ocopy:"Copy",ocopied:"Order copied",ohint:"If the message does not appear automatically in Telegram, paste the copied text into the message.",rev:"Reviews",revs:"reviews",norate:"No ratings yet",nrev:"No reviews yet. Be the first!",yname:"Your name",ycom:"Write your opinion...",send:"Submit review",add:"Add to cart",need:"Give a rating and write a comment",thanks:"Thank you! Your review was added",anon:"Customer",m_home:"Home",m_about:"About us",atitle:"About us",a1:"Our page, the «Xom tovuq» (Raw Chicken) app, was developed in 2026, and this site works both as a demo and as a live version.",a2:"You are not obliged to buy anything from us, and we are not pushing you to buy.",a3:"This app was created with the aim of doing good for people",a4:"This site was created by Khudoyberdiev.",a5:"All our products are high quality and 100% halal. We also offer free delivery to your door.",a6:"To contact us, call:",m_prod:"Products",m_how:"How to order",m_contact:"Contact",tag:"Fresh delivery today",h1:"Quality, clean raw chicken",sub:"Fresh every day. Kept in a cold chain, weighed exactly and delivered to your door.",cta:"Order now",call:"Call us",c1:"Halal",c2:"Cold chain",c3:"Fast delivery",b1:"100% fresh",ptitle:"Products",search:"Search...",s1t:"1. Choose",s1:"Add the product and kilograms you need with the + button.",s2t:"2. Send on Telegram",s2:"The button below sends your order to Telegram as a ready message.",s3t:"3. Receive",s3:"An operator will contact you and we deliver to your address.",ctitle:"Contact us",addr:"Tashkent, Chilanzar district, Bunyodkor street 12",hours:"Every day 08:00 – 21:00",openmap:"Open in maps",kg:"UZS/kg",sum:"UZS",items:"items",order:"Order on Telegram",none:"Nothing found",msg:"Hello! I would like to order:",mq:"Fresh every day • Halal • Fast delivery • Clean and quality • ",
 p:[["Whole chicken","Whole, cleaned, 1.5–2 kg","Young broiler chicken, cleaned and washed. Great for frying, roasting and soup. Delivered fresh every day."],["Chicken breast fillet","Boneless, skinless","Lean, protein-rich cut. Cooks fast and works well for cutlets, kebabs and salads."],["Thigh","Fresh, chilled","Soft and juicy meat. The best choice for tandoor, oven and frying."],["Wings","Ready to marinate","Wings ready for marinade. A tasty snack baked or fried."],["Liver","Clean, fresh","Clean, fresh liver. Rich in iron and vitamins, cooks quickly."],["Chicken neck","For broth","For soup and broth. Budget-friendly price and rich flavor."],["Butaka (drumstick)","Fresh, chilled","The leg part of the chicken. Good for frying, oven and tandoor."],["Carcass with neck","With neck, cleaned","Whole carcass together with the neck. A good choice for soup, broth and frying."],["Tandoor chicken","Roasted in tandoor, ready to eat","Whole chicken roasted in a tandoor with special spices. Crispy golden skin, tender and juicy meat. Ready to eat while hot."]]},
ru:{"thx_t0": "\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0443!", "inst_ok": "\u0421\u0430\u0439\u0442 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u043d\u0430 \u0432\u0430\u0448\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e", "ic_t": "\u0421\u043a\u0430\u0447\u0430\u0439\u0442\u0435 \u0441\u0430\u0439\u0442 \u043d\u0430 \u0442\u0435\u043b\u0435\u0444\u043e\u043d", "ic_s": "\u041d\u0435 \u043d\u0443\u0436\u043d\u043e \u043a\u0430\u0436\u0434\u044b\u0439 \u0440\u0430\u0437 \u0438\u0441\u043a\u0430\u0442\u044c: \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0439\u0442\u0435 \u043e\u0434\u043d\u0438\u043c \u043d\u0430\u0436\u0430\u0442\u0438\u0435\u043c \u043f\u043e \u0437\u043d\u0430\u0447\u043a\u0443 \u043d\u0430 \u044d\u043a\u0440\u0430\u043d\u0435.", "ins_t": "\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0441\u0430\u0439\u0442 \u043d\u0430 \u0442\u0435\u043b\u0435\u0444\u043e\u043d", "ins_s": "\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 3 \u0448\u0430\u0433\u0430, \u0438 \u0441\u0430\u0439\u0442 \u0431\u0443\u0434\u0435\u0442 \u0437\u043d\u0430\u0447\u043a\u043e\u043c \u043d\u0430 \u0432\u0430\u0448\u0435\u043c \u044d\u043a\u0440\u0430\u043d\u0435.", "ios1": "\u0412 Safari \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u00ab\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f\u00bb \u0432\u043d\u0438\u0437\u0443", "ios2": "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u00ab\u041d\u0430 \u044d\u043a\u0440\u0430\u043d \u0414\u043e\u043c\u043e\u0439\u00bb", "ios3": "\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u00ab\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c\u00bb, \u0437\u043d\u0430\u0447\u043e\u043a \u043f\u043e\u044f\u0432\u0438\u0442\u0441\u044f \u043d\u0430 \u044d\u043a\u0440\u0430\u043d\u0435", "and1": "\u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u043c\u0435\u043d\u044e \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u22ee \u0432\u0432\u0435\u0440\u0445\u0443", "and2": "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u00ab\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u00bb \u0438\u043b\u0438 \u00ab\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u044b\u0439 \u044d\u043a\u0440\u0430\u043d\u00bb", "and3": "\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u00ab\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u00bb, \u0437\u043d\u0430\u0447\u043e\u043a \u043f\u043e\u044f\u0432\u0438\u0442\u0441\u044f \u043d\u0430 \u044d\u043a\u0440\u0430\u043d\u0435", "pc1": "\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u043e\u043a \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0441\u043f\u0440\u0430\u0432\u0430 \u0432 \u0430\u0434\u0440\u0435\u0441\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0435", "pc2": "\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u00ab\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u00bb", "pc3": "\u0421\u0430\u0439\u0442 \u043e\u0442\u043a\u0440\u043e\u0435\u0442\u0441\u044f \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u043c \u043e\u043a\u043d\u0435, \u043a\u0430\u043a \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435","cfm_t": "\u0412\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043b\u0438 \u0437\u0430\u043a\u0430\u0437?", "cfm_s": "\u0415\u0441\u043b\u0438 \u0432\u044b \u043d\u0430\u0436\u0430\u043b\u0438 \u00ab\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c\u00bb \u0432 Telegram, \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435.", "cfm_yes": "\u0414\u0430, \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043b(\u0430)", "cfm_no": "\u041d\u0435\u0442, \u043e\u0442\u043a\u0440\u044b\u0442\u044c Telegram \u0441\u043d\u043e\u0432\u0430", "o_done": "\u042f \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043b(\u0430) \u0432 Telegram","cat3": "\u0413\u043e\u0442\u043e\u0432\u044b\u0435 \u0431\u043b\u044e\u0434\u0430", "thx_t": "{n}, \u0441\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0443!", "thx_s": "\u041c\u044b \u0440\u0430\u0434\u044b \u0432\u0430\u0448\u0435\u0439 \u043f\u043e\u043a\u0443\u043f\u043a\u0435. \u041c\u044b \u0441\u043a\u043e\u0440\u043e \u043e\u0442\u0432\u0435\u0442\u0438\u043c.", "thx_bye": "\u0412\u0441\u0435\u0433\u043e \u0434\u043e\u0431\u0440\u043e\u0433\u043e, \u0436\u0434\u0451\u043c \u0432\u0430\u0441 \u0441\u043d\u043e\u0432\u0430!", "thx_more": "\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u043f\u043e\u043a\u0443\u043f\u043a\u0438", "thx_tg": "\u041e\u0442\u043a\u0440\u044b\u0442\u044c Telegram \u0441\u043d\u043e\u0432\u0430","osub": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435, Telegram \u043e\u0442\u043a\u0440\u043e\u0435\u0442\u0441\u044f \u0441 \u0433\u043e\u0442\u043e\u0432\u044b\u043c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435\u043c", "onote": "\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 (\u043d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e)", "nlbl": "\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439", "stg_t": "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438", "stg_sub": "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u0441\u0430\u0439\u0442 \u043f\u043e\u0434 \u0441\u0435\u0431\u044f", "s_lang": "\u042f\u0437\u044b\u043a", "s_theme": "\u0422\u0435\u043c\u0430", "s_light": "\u0421\u0432\u0435\u0442\u043b\u0430\u044f", "s_dark": "\u0422\u0451\u043c\u043d\u0430\u044f", "s_sys": "\u0421\u0438\u0441\u0442\u0435\u043c\u0430", "s_motion": "\u0410\u043d\u0438\u043c\u0430\u0446\u0438\u0438", "s_motion_d": "\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u043b\u0438 \u0432\u044b\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u0438", "s_intro": "\u0410\u043d\u0438\u043c\u0430\u0446\u0438\u044f \u0432\u0445\u043e\u0434\u0430", "s_intro_d": "\u041f\u0440\u044b\u0433\u0430\u044e\u0449\u0430\u044f \u043a\u0443\u0440\u0438\u0446\u0430 \u043f\u0440\u0438 \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u0438 \u0441\u0430\u0439\u0442\u0430", "s_vib": "\u0412\u0438\u0431\u0440\u0430\u0446\u0438\u044f", "s_vib_d": "\u0422\u0435\u043b\u0435\u0444\u043e\u043d \u0432\u0438\u0431\u0440\u0438\u0440\u0443\u0435\u0442 \u043f\u0440\u0438 \u043d\u0430\u0436\u0430\u0442\u0438\u044f\u0445", "s_big": "\u041a\u0440\u0443\u043f\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442", "s_big_d": "\u0423\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u0442\u0435\u043a\u0441\u0442", "s_step": "\u0428\u0430\u0433 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430", "s_step_d": "\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u043a\u0433 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u043a\u043d\u043e\u043f\u043a\u0430 +", "s_rem": "\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u043e\u0438 \u0434\u0430\u043d\u043d\u044b\u0435", "s_rem_d": "\u0418\u043c\u044f, \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0438 \u0430\u0434\u0440\u0435\u0441 \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u044f\u0442\u0441\u044f \u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0440\u0430\u0437", "s_clrcart": "\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443", "s_clrdata": "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435", "s_share": "\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0441\u0430\u0439\u0442\u043e\u043c", "s_tg": "\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0432 Telegram", "s_reset": "\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438", "t_cart0": "\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043e\u0447\u0438\u0449\u0435\u043d\u0430", "t_data0": "\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u044b", "t_copied": "\u0421\u0441\u044b\u043b\u043a\u0430 \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0430", "t_ios": "Safari: \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f, \u0437\u0430\u0442\u0435\u043c \u041d\u0430 \u044d\u043a\u0440\u0430\u043d \u0414\u043e\u043c\u043e\u0439", "t_reset": "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u0431\u0440\u043e\u0448\u0435\u043d\u044b", "t_step": "\u0428\u0430\u0433 \u0438\u0437\u043c\u0435\u043d\u0451\u043d",u:"кг",fsub:"\u0415\u0441\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441 \u0438\u043b\u0438 \u0437\u0430\u043a\u0430\u0437? \u041f\u043e\u0437\u0432\u043e\u043d\u0438\u0442\u0435 \u0438\u043b\u0438 \u043d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043d\u0430\u043c.",lp:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",la:"\u0410\u0434\u0440\u0435\u0441",lh:"\u0412\u0440\u0435\u043c\u044f \u0440\u0430\u0431\u043e\u0442\u044b",st1:"\u0421\u0435\u0439\u0447\u0430\u0441 \u043e\u0442\u043a\u0440\u044b\u0442\u043e",st0:"\u0421\u0435\u0439\u0447\u0430\u0441 \u0437\u0430\u043a\u0440\u044b\u0442\u043e",miss:"\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0438\u043c\u044f, \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0438 \u0430\u0434\u0440\u0435\u0441",phbad:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e",thx:"\u0421\u043f\u0430\u0441\u0438\u0431\u043e! \u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u00ab\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c\u00bb \u0432 Telegram",inst:"Скачать сайт",cat0:"Все",cat1:"Мясо",cat2:"Печень и бульон",i1t:"Бесплатная доставка",i1:"Доставляем заказ до двери бесплатно.",i2t:"Время работы",i2:"Ежедневно 08:00 – 21:00",i3t:"100% халяль",i3:"Все наши продукты качественные и халяль.",otl:"Предложения дня",more:"Подробнее",tg:["Выбор дня","Халяль и чисто","Охлаждённое","Новинка","Качество","Выгодно","Свежее","Халяль","Готово к еде"],tot:"Итого",otitle:"Подтверждение заказа",oname:"Ваше имя",ophone:"Ваш номер телефона",oaddr:"Адрес доставки",otg:"Отправить в Telegram",ocopy:"Копировать",ocopied:"Заказ скопирован",ohint:"Если сообщение не появилось в Telegram автоматически, вставьте скопированный текст в сообщение.",rev:"Отзывы",revs:"отз.",norate:"Оценок пока нет",nrev:"Отзывов пока нет. Будьте первым!",yname:"Ваше имя",ycom:"Напишите ваш отзыв...",send:"Отправить отзыв",add:"В корзину",need:"Поставьте оценку и напишите отзыв",thanks:"Спасибо! Ваш отзыв добавлен",anon:"Клиент",m_home:"Главная",m_about:"О нас",atitle:"О нас",a1:"Наша страница, приложение «Xom tovuq» («Сырая курица»), разработано в 2026 году, и этот сайт работает как в демо-, так и в живом режиме.",a2:"Вы не обязаны ничего у нас покупать, и мы вас к покупке не принуждаем.",a3:"Это приложение создано, чтобы делать людям добро",a4:"Этот сайт создан Khudoyberdiev.",a5:"Все наши продукты качественные и на 100% халяль. У нас также есть бесплатная доставка до вашего дома.",a6:"Чтобы связаться с нами, звоните:",m_prod:"Продукты",m_how:"Как заказать",m_contact:"Контакты",tag:"Сегодня свежий завоз",h1:"Качественная чистая сырая курица",sub:"Свежая каждый день. Хранится в холодовой цепи, точно взвешивается и доставляется до двери.",cta:"Заказать",call:"Позвонить",c1:"Халяль",c2:"Холодовая цепь",c3:"Быстрая доставка",b1:"100% свежая",ptitle:"Продукты",search:"Поиск...",s1t:"1. Выберите",s1:"Добавьте нужный продукт и килограммы кнопкой +.",s2t:"2. Отправьте в Telegram",s2:"Кнопка внизу отправит заказ в Telegram готовым сообщением.",s3t:"3. Получите",s3:"Оператор свяжется с вами, мы доставим по адресу.",ctitle:"Свяжитесь с нами",addr:"Ташкент, Чиланзарский район, улица Бунёдкор 12",hours:"Ежедневно 08:00 – 21:00",openmap:"Открыть на карте",kg:"сум/кг",sum:"сум",items:"поз.",order:"Заказать в Telegram",none:"Ничего не найдено",msg:"Здравствуйте! Хочу заказать:",mq:"Свежая каждый день • Халяль • Быстрая доставка • Чисто и качественно • ",
 p:[["Тушка целиком","Целая, потрошёная, 1.5–2 кг","Молодой бройлер, очищенный и промытый. Подходит для жарки, запекания и бульона. Свежий завоз каждый день."],["Филе грудки","Без кости и кожи","Постная часть, богатая белком. Быстро готовится, отлично для котлет, шашлыка и салатов."],["Бедро","Свежее, охлаждённое","Мягкое и сочное мясо. Лучший выбор для тандыра, духовки и жарки."],["Крылья","Готовы к маринаду","Крылья, готовые к маринаду. Вкусная закуска запечённая или жареная."],["Печень","Чистая, свежая","Чистая свежая печень. Богата железом и витаминами, готовится быстро."],["Шея куриная","Для бульона","Для супа и бульона. Доступная цена и насыщенный вкус."],["Бутака (окорочок)","Свежее, охлаждённое","Ножка курицы. Подходит для жарки, духовки и тандыра."],["Тушка с шеей","С шеей, очищенная","Цельная тушка вместе с шеей. Хороший выбор для супа, бульона и жарки."],["Курица тандыр","Запечена в тандыре, готова к еде","Целая курица, запечённая в тандыре со специальными специями. Хрустящая золотистая корочка, нежное и сочное мясо. Готова к употреблению."]]}
};
/* === TIL: lotin -> o'zbek kirill o'giruvchi (uz matnidan kirillni o'zi yasaydi) === */
function lat2cyr(s){
 var o="",i=0,L=s.length,ap=/['\u2019\u2018\u02bb\u02bc`]/,
 m={a:"а",b:"б",d:"д",f:"ф",g:"г",h:"ҳ",i:"и",j:"ж",k:"к",l:"л",m:"м",n:"н",o:"о",p:"п",q:"қ",r:"р",s:"с",t:"т",u:"у",v:"в",x:"х",y:"й",z:"з"};
 function isL(c){return /[A-Za-z]/.test(c||"")}
 while(i<L){
  var c=s[i],lc=c.toLowerCase(),n=s[i+1]||"",ln=n.toLowerCase(),up=c!==lc;
  function put(ch){o+=up?ch.toUpperCase():ch}
  if((lc==="o"||lc==="g")&&ap.test(n)){put(lc==="o"?"ў":"ғ");i+=2;continue}
  if(lc==="s"&&ln==="h"){put("ш");i+=2;continue}
  if(lc==="c"&&ln==="h"){put("ч");i+=2;continue}
  if(lc==="y"&&(ln==="a"||ln==="u"||(ln==="o"&&!ap.test(s[i+2]||"")))){put(ln==="o"?"ё":ln==="u"?"ю":"я");i+=2;continue}
  if(lc==="y"&&ln==="e"&&!isL(s[i-1])){put("е");i+=2;continue}
  if(lc==="e"){put(isL(s[i-1])?"е":"э");i++;continue}
  if(ap.test(c)){o+="ъ";i++;continue}
  if(m[lc]){put(m[lc]);i++;continue}
  o+=c;i++;
 }
 return o;
}
function conv(v){return typeof v==="string"?lat2cyr(v):Array.isArray(v)?v.map(conv):(function(x){var r={};for(var k in x)r[k]=conv(x[k]);return r})(v)}
T.uzc=conv(T.uz);
/* Tillar tartibi: tugma bosilganda shu ketma-ketlikda almashadi. Xohlasangiz tartibini o'zgartiring */
var LANGS=["uz","ru","en","uzc"],LBL={uz:"UZ",ru:"RU",en:"EN",uzc:"ЎЗ"},HL={uz:"uz",ru:"ru",en:"en",uzc:"uz-Cyrl"};
var price=[30000,45000,30000,39000,60000,12000,12000,30000,50000],icons=["","","","","","","",""],cart={};
var lang="uz",theme="light",$=function(i){return document.getElementById(i)};
function fmt(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g," ")}
function render(){
 var d=T[lang],f=$("q").value.trim().toLowerCase(),h="",rk=0;
 d.p.forEach(function(p,i){
  if(f&&(p[0]+" "+p[1]).toLowerCase().indexOf(f)<0)return;
  if(cat&&CATS[cat].indexOf(i)<0)return;
  var n=cart[i]||0;
  h+='<div class="row" data-p="'+i+'" style="--r:'+(rk++)+'" tabindex="0"><div class="av'+vis(i).c+'" role="img" aria-label="'+esc(p[0])+'" style="'+vis(i).s+'">'+vis(i).h+'</div><div class="mid"><b>'+p[0]+'</b><small>'+p[1]+'</small><em>'+fmt(price[i])+' '+d.kg+'</em>'+rt(i)+'</div><div class="qty">'+(n?'<button class="s" data-a="-" data-i="'+i+'" aria-label="-">−</button><span>'+fq(n)+'</span>':'')+'<button data-a="+" data-i="'+i+'" aria-label="+">+</button></div></div>';
 });
 $("list").innerHTML=h||'<div class="none">'+d.none+'</div>';
 $("list").classList.toggle("ra",rowAnim);rowAnim=false;
 cartUi();
}
function cartUi(){
 var d=T[lang],c=0,s=0;
 for(var k in cart){c+=cart[k];s+=cart[k]*price[k]}
 $("cart").classList.toggle("on",c>0);
 var nn=Object.keys(cart).length,bn=$("cbn");
 if(bn){var chg=bn.textContent!==String(nn);bn.textContent=nn;bn.hidden=!nn;if(chg&&nn){var cb=$("cbtn");cb.classList.remove("bp2");void cb.offsetWidth;cb.classList.add("bp2")}}
 countTo(s,d);
 $("cinfo").textContent=fq(c)+" "+d.u+" • "+Object.keys(cart).length+" "+d.items;
 $("send").innerHTML=IC.tg+"<span>"+d.order+"</span>";
}
function setLang(l){if(typeof stopType==="function")stopType();rowAnim=true;
 lang=l;try{localStorage.setItem("lang",l)}catch(e){}
 var d=T[l];document.documentElement.lang=HL[l]||l;
 document.querySelectorAll("[data-i]").forEach(function(el){if(d[el.dataset.i])el.textContent=d[el.dataset.i]});
 $("q").placeholder=d.search;$("rn").placeholder=d.yname;$("rc").placeholder=d.ycom;if(!$("pm").hidden)fillP();if(!$("om").hidden)fillO();buildC();renderStatus();placeNvi();syncUI();if(!$("ins").hidden)insSteps(curPlat);
 var m=d.mq.repeat(8);$("mq").textContent=m+m;
 $("lgt").textContent=LBL[l];
 render();
}
function setTheme(t){
 theme=t;document.documentElement.dataset.theme=t;$("theme").innerHTML=t==="dark"?'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>':'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 13A9 9 0 1 1 11 3a7 7 0 0 0 10 10z"/></svg>';
 try{localStorage.setItem("theme",t)}catch(e){}
}
$("lgb").onclick=function(){var b=this;setLang(LANGS[(LANGS.indexOf(lang)+1)%LANGS.length]);b.classList.remove("lspin");void b.offsetWidth;b.classList.add("lspin")};
$("theme").onclick=function(){
 var r=this.getBoundingClientRect(),x=r.left+r.width/2,y=r.top+r.height/2,go=function(){S.theme=(theme==="dark"?"light":"dark");saveS();applyTheme();syncUI()};
 if(!document.startViewTransition||RM){go();return}
 var t=document.startViewTransition(go);
 t.ready.then(function(){document.documentElement.animate({clipPath:["circle(0px at "+x+"px "+y+"px)","circle("+Math.hypot(Math.max(x,innerWidth-x),Math.max(y,innerHeight-y))+"px at "+x+"px "+y+"px)"]},{duration:650,easing:"ease-in-out",pseudoElement:"::view-transition-new(root)"})}).catch(function(){});
};
var cat=0,CATS=[null,[0,1,2,3,6,7],[4,5],[8]];
function fq(n){return n%1?n.toFixed(1):String(n)}
$("cats").onclick=function(e){var b=e.target.closest("button");if(!b)return;cat=+b.dataset.k;document.querySelectorAll("#cats button").forEach(function(x){x.classList.toggle("on",x===b)});rowAnim=true;render()};
document.querySelectorAll('a[href="https://t.me/xomtovuq"]').forEach(function(a){a.href="https://t.me/"+TG});
document.querySelectorAll(".tgn").forEach(function(a){a.textContent="@"+TG});
var qs=0;
$("q").oninput=function(){rowAnim=true;render();var v=this.value.trim();if(v&&!qs){qs=1;$("products").scrollIntoView({behavior:"smooth"})}if(!v)qs=0};
$("q").addEventListener("keydown",function(e){if(e.key==="Enter"){$("products").scrollIntoView({behavior:"smooth"});this.blur()}});
$("sbtn").onclick=function(){var h=$("hs");h.classList.toggle("open");if(h.classList.contains("open"))$("q").focus()};
$("list").onclick=function(e){
 var b=e.target.closest("button");if(!b){var r=e.target.closest(".row");if(r)openP(+r.dataset.p);return}
 var i=b.dataset.i;
 if(b.dataset.a==="+"){var rw=b.closest(".row");fly(rw&&rw.querySelector(".av"));cart[i]=(cart[i]||0)+STEP}
 else{cart[i]-=STEP;if(cart[i]<=0)delete cart[i]}
 render();
};
$("send").onclick=openO;
var nav=$("nav"),bg=$("burger");
bg.onclick=function(){var o=nav.classList.toggle("open");bg.setAttribute("aria-expanded",o)};
nav.onclick=function(e){if(e.target.tagName==="A"){nav.classList.remove("open");bg.setAttribute("aria-expanded","false")}};
var ab=$("about");
function openAbout(e){if(e)e.preventDefault();ab.hidden=false;document.body.style.overflow="hidden";$("aclose").focus()}
function closeAbout(){ab.hidden=true;document.body.style.overflow=""}
document.querySelectorAll(".openabout").forEach(function(a){a.addEventListener("click",function(e){nav.classList.remove("open");openAbout(e)})});
$("aclose").onclick=closeAbout;
ab.onclick=function(e){if(e.target===ab)closeAbout()};
document.addEventListener("keydown",function(e){if(e.key==="Escape"){if(!ab.hidden)closeAbout();if(!$("pm").hidden)closeP();if(!$("om").hidden)closeO();if(!$("stg").hidden)closeS();if(!$("thx").hidden)hideThx(true);if(!$("ins").hidden)closeIns()}});
var cur=0,rate=0,R={};
try{R=JSON.parse(localStorage.getItem("rev")||"{}")}catch(e){R={}}
function saveR(){try{localStorage.setItem("rev",JSON.stringify(R))}catch(e){}}
function esc(t){return String(t).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function avg(i){var a=R[i]||[];if(!a.length)return null;var s=0;a.forEach(function(r){s+=r.s});return{v:(s/a.length).toFixed(1),n:a.length}}
function rt(i){var a=avg(i);return a?'<span class="rt">★ '+a.v+' ('+a.n+')</span>':''}
function stars(n){return"★★★★★".slice(0,n)+"☆☆☆☆☆".slice(0,5-n)}
function paintStars(){document.querySelectorAll("#stars button").forEach(function(b){b.classList.toggle("on",+b.dataset.v<=rate)})}
function fillP(){
 var d=T[lang],p=d.p[cur],a=avg(cur),l=R[cur]||[],h="";
 var v=vis(cur);$("pav").className="av big"+v.c;$("pav").style.cssText=v.s;$("pav").innerHTML=v.h;$("pname").textContent=p[0];$("pprice").textContent=fmt(price[cur])+" "+d.kg;
 $("pavg").textContent=a?"★ "+a.v+" · "+a.n+" "+d.revs:d.norate;
 $("pbio").textContent=p[2];$("padd").innerHTML=IC.bag+"<span>"+d.add+"</span>";
 l.slice().reverse().forEach(function(r){h+='<div class="rv"><div class="rvt"><b>'+esc(r.n)+'</b><span>'+stars(r.s)+'</span></div><p>'+esc(r.t)+'</p><small>'+esc(r.d)+'</small></div>'});
 $("plist").innerHTML=h||'<div class="none">'+d.nrev+'</div>';
}
function openP(i){cur=i;rate=0;paintStars();$("rn").value="";$("rc").value="";$("rmsg").textContent="";fillP();$("pm").hidden=false;document.body.style.overflow="hidden";$("pclose").focus()}
function closeP(){$("pm").hidden=true;document.body.style.overflow=""}
$("pclose").onclick=closeP;
$("pm").onclick=function(e){if(e.target===$("pm"))closeP()};
$("stars").onclick=function(e){var b=e.target.closest("button");if(!b)return;rate=+b.dataset.v;paintStars()};
$("list").addEventListener("keydown",function(e){if(e.key==="Enter"&&e.target.classList.contains("row"))openP(+e.target.dataset.p)});
$("padd").onclick=function(){fly($("pav"));cart[cur]=(cart[cur]||0)+STEP;render();closeP()};
$("rsend").onclick=function(){
 var d=T[lang],n=$("rn").value.trim(),t=$("rc").value.trim();
 if(!rate||!t){$("rmsg").textContent=d.need;return}
 (R[cur]=R[cur]||[]).push({n:n||d.anon,s:rate,t:t,d:new Date().toLocaleDateString()});saveR();
 rate=0;paintStars();$("rn").value="";$("rc").value="";$("rmsg").textContent=d.thanks;fillP();render();
};
function phDigits(){var d=$("op").value.replace(/\D/g,"");return d.indexOf("998")===0?d.slice(3):d}
function fmtPhone(v){var d=String(v).replace(/\D/g,"");if(d.indexOf("998")===0)d=d.slice(3);d=d.slice(0,9);var o="+998";if(d.length)o+=" "+d.slice(0,2);if(d.length>2)o+=" "+d.slice(2,5);if(d.length>5)o+=" "+d.slice(5,7);if(d.length>7)o+=" "+d.slice(7,9);return d.length?o:""}
function okName(){return $("on").value.trim().length>=2}
function okPhone(){return phDigits().length===9}
function okAddr(){return $("oa").value.trim().length>=5}
function valid(){return okName()&&okPhone()&&okAddr()}
function orderText(){
 var d=T[lang],t=d.msg,s=0;
 for(var k in cart){t+="\n• "+d.p[k][0]+" — "+cart[k]+" "+d.u;s+=cart[k]*price[k]}
 t+="\n"+d.tot+": "+fmt(s)+" "+d.sum;
 var n=$("on").value.trim(),p=$("op").value.trim(),a=$("oa").value.trim(),nt=$("onote").value.trim();
 if(n)t+="\n"+d.oname+": "+n;
 if(p)t+="\n"+d.ophone+": "+p;
 if(a)t+="\n"+d.oaddr+": "+a;
 if(nt)t+="\n"+d.nlbl+": "+nt;
 return t;
}
function updO(){
 var a=[okName(),okPhone(),okAddr()];
 [["fl_on",a[0]],["fl_op",a[1]],["fl_oa",a[2]]].forEach(function(x){$(x[0]).classList.toggle("ok",x[1]);if(x[1])$(x[0]).classList.remove("bad")});
 $("opbi").style.width=(a.filter(Boolean).length/3*100)+"%";
 $("otg").href=valid()?"https://t.me/"+TG+"?text="+encodeURIComponent(orderText()):"#";
}
function fillO(){
 var d=T[lang],h="",s=0,r=0;
 for(var k in cart){h+='<div class="orow" style="--r:'+(r++)+'"><span>'+esc(d.p[k][0])+' × '+cart[k]+' '+d.u+'</span><span>'+fmt(cart[k]*price[k])+'</span></div>';s+=cart[k]*price[k]}
 h+='<div class="orow otot" style="--r:'+r+'"><span>'+d.tot+'</span><span>'+fmt(s)+' '+d.sum+'</span></div>';
 $("osum").innerHTML=h;updO();
}
function getCust(){try{return JSON.parse(localStorage.getItem("xt_cust")||"null")}catch(e){return null}}
function saveCust(){if(!S.remember)return;try{localStorage.setItem("xt_cust",JSON.stringify({n:$("on").value.trim(),p:$("op").value.trim(),a:$("oa").value.trim()}))}catch(e){}}
function openO(){
 if(!Object.keys(cart).length)return;
 $("o_done").hidden=true;pend=false;awayAt=0;
 $("omsg").textContent="";$("omsg").className="rmsg";
 if(S.remember){var c=getCust();if(c){if(!$("on").value)$("on").value=c.n||"";if(!$("op").value)$("op").value=c.p||"";if(!$("oa").value)$("oa").value=c.a||""}}
 $("orem").checked=!!S.remember;
 fillO();$("om").hidden=false;document.body.style.overflow="hidden";
 if(window.matchMedia&&matchMedia("(hover:hover)").matches)setTimeout(function(){var f=!okName()?$("on"):!okPhone()?$("op"):!okAddr()?$("oa"):null;if(f)f.focus()},350);
}
function closeO(){$("om").hidden=true;document.body.style.overflow=""}
function copyText(t){
 try{if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).catch(function(){});return}}catch(e){}
 var x=document.createElement("textarea");x.value=t;x.style.position="fixed";x.style.opacity="0";document.body.appendChild(x);x.select();
 try{document.execCommand("copy")}catch(e){}document.body.removeChild(x);
}
function inp(){var w=this.closest(".fl");if(w)w.classList.remove("bad");var m=$("omsg");if(m.classList.contains("err")){m.className="rmsg";m.textContent=""}updO()}
$("on").addEventListener("input",inp);$("oa").addEventListener("input",inp);$("onote").addEventListener("input",updO);
$("op").addEventListener("input",function(){this.value=fmtPhone(this.value);inp.call(this)});
$("oclose").onclick=closeO;
$("om").onclick=function(e){if(e.target===$("om"))closeO()};
$("otg").addEventListener("click",function(e){
 var d=T[lang],bad=[];
 ["fl_on","fl_op","fl_oa"].forEach(function(id){$(id).classList.remove("bad")});
 if(!okName())bad.push("fl_on");
 if(!okPhone())bad.push("fl_op");
 if(!okAddr())bad.push("fl_oa");
 if(bad.length){
  e.preventDefault();
  bad.forEach(function(id){var el=$(id);void el.offsetWidth;el.classList.add("bad")});
  var m=$("omsg");m.className="rmsg err";
  m.textContent=(bad.length===1&&bad[0]==="fl_op"&&phDigits().length>0)?d.phbad:d.miss;
  $(bad[0].replace("fl_","")).focus();vib(60);return;
 }
 saveCust();
 $("omsg").className="rmsg";updO();vib([30,50,80]);$("omsg").textContent=d.thx;lastOrder={href:$("otg").href};pend=true;awayAt=0;$("o_done").hidden=false;
});
["on","op","oa"].forEach(function(id){$(id).addEventListener("input",function(){this.classList.remove("bad");var m=$("omsg");if(m.classList.contains("err")){m.className="rmsg";m.textContent=""}})});
// Chegirma foizi (0 = chegirma yo'q). Masalan birinchi mahsulotga 10% bo'lsa: [10,0,0,0,0,0,0,0]
var DISC=[0,0,0,0,0,0,0,0,0],BASE=price.slice();
for(var di=0;di<price.length;di++)price[di]=Math.round(BASE[di]*(100-DISC[di])/100);
var grads=["linear-gradient(135deg,#ff5f6d,#c8102e)","linear-gradient(135deg,#ff8a3d,#d9381e)","linear-gradient(135deg,#f5576c,#8e0e2b)","linear-gradient(135deg,#ff7a59,#b3122c)","linear-gradient(135deg,#e53561,#7a0c24)","linear-gradient(135deg,#ff9a44,#c0392b)","linear-gradient(135deg,#ff6b4a,#a30f2a)","linear-gradient(135deg,#ff5577,#6e0a20)","linear-gradient(135deg,#f5a623,#b5420f)"];
var cs=0,ctimer=null,cN=price.length,reduce=window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches;
function buildC(){
 var d=T[lang],h="",dh="";
 d.p.forEach(function(p,i){
  var pr=fmt(price[i])+" "+d.kg+(DISC[i]?'<s>'+fmt(BASE[i])+'</s>':'');
  h+='<div class="slide" style="--g:'+grads[i]+'" role="group" aria-roledescription="slide" aria-label="'+(i+1)+'/'+cN+'"><div class="st"><span class="sg">'+d.tg[i]+'</span><h3>'+esc(p[0])+'</h3><p>'+esc(p[2])+'</p><div class="sp">'+pr+'</div><div class="sb"><button class="btn" data-c="add" data-i="'+i+'">'+IC.bag+'<span>'+d.add+'</span></button><button class="btn o" data-c="info" data-i="'+i+'">'+d.more+'</button></div></div><div class="se">'+(DISC[i]?'<span class="sd">-'+DISC[i]+'%</span>':'')+'<div class="ph'+vis(i).c+'" role="img" aria-label="'+esc(p[0])+'"'+(vis(i).c?' style="'+vis(i).s+'"':'')+'>'+vis(i).h+'</div></div></div>';
  dh+='<button data-d="'+i+'" aria-label="'+(i+1)+'"></button>';
 });
 $("track").innerHTML=h;$("dots").innerHTML=dh;goC(cs,true);
}
function goC(n,keep){
 cs=(n+cN)%cN;$("track").style.transform="translateX(-"+cs*100+"%)";
 document.querySelectorAll("#dots button").forEach(function(b){b.classList.toggle("on",+b.dataset.d===cs)});
 document.querySelectorAll(".slide").forEach(function(s,i){s.classList.toggle("act",i===cs)});
 if(!keep)playC();
}
function playC(){stopC();if(!reduce&&!RM)ctimer=setInterval(function(){goC(cs+1,true)},4500)}
function stopC(){if(ctimer){clearInterval(ctimer);ctimer=null}}
$("cprev").onclick=function(){goC(cs-1)};
$("cnext").onclick=function(){goC(cs+1)};
$("dots").onclick=function(e){var b=e.target.closest("button");if(b)goC(+b.dataset.d)};
$("track").onclick=function(e){
 var b=e.target.closest("button");if(!b)return;var i=+b.dataset.i;
 if(b.dataset.c==="add"){fly(b.closest(".slide").querySelector(".ph"));cart[i]=(cart[i]||0)+STEP;render()}else openP(i);
};
var cw=$("cwrap"),tx=0;
cw.addEventListener("mouseenter",stopC);cw.addEventListener("mouseleave",playC);
cw.addEventListener("focusin",stopC);cw.addEventListener("focusout",playC);
cw.addEventListener("touchstart",function(e){tx=e.touches[0].clientX;stopC()},{passive:true});
cw.addEventListener("touchend",function(e){var dx=e.changedTouches[0].clientX-tx;if(Math.abs(dx)>40)goC(cs+(dx<0?1:-1));else playC()},{passive:true});
document.addEventListener("visibilitychange",function(){document.hidden?stopC():playC()});
/* === ANIM S: saytni yuklab olish (PWA o'rnatish) === */
var dp=null,curPlat="pc",isApp=!!((window.matchMedia&&matchMedia("(display-mode: standalone)").matches)||navigator.standalone);
function hideInst(){["inst","a_inst","instcard"].forEach(function(id){var el=$(id);if(el)el.hidden=true})}
window.addEventListener("beforeinstallprompt",function(e){e.preventDefault();dp=e});
window.addEventListener("appinstalled",function(){dp=null;hideInst();closeIns();toast(T[lang].inst_ok)});
function plat(){var u=navigator.userAgent||"";return(/iphone|ipad|ipod/i.test(u)||(/Macintosh/.test(u)&&navigator.maxTouchPoints>1))?"ios":/android/i.test(u)?"and":"pc"}
function insSteps(p){
 curPlat=p;var d=T[lang],h="";
 for(var i=1;i<=3;i++)h+='<li style="--r:'+(i-1)+'"><span class="isn">'+i+'</span><span>'+d[p+i]+'</span></li>';
 $("isteps").innerHTML=h;mark("ins_seg",p);
}
function openIns(){insSteps(plat());$("ins").hidden=false;document.body.style.overflow="hidden"}
function closeIns(){$("ins").hidden=true;document.body.style.overflow=""}
function doInstall(){if(dp){var p=dp;dp=null;p.prompt()}else openIns()}
$("inst").onclick=doInstall;$("ic_btn").onclick=doInstall;
$("insx").onclick=closeIns;$("ins").onclick=function(e){if(e.target===$("ins"))closeIns()};
$("ins_seg").onclick=function(e){var b=e.target.closest("button");if(b)insSteps(b.dataset.v)};
if(isApp)hideInst();
if("serviceWorker" in navigator&&/^https?:$/.test(location.protocol))window.addEventListener("load",function(){navigator.serviceWorker.register("sw.js").catch(function(){})});
/* Ochilishdan oldingi qisqa kirish (bir sessiyada bir marta; bosilsa o'tkazib yuboriladi) */
(function(){
 var i=$("intro");if(!i){setTimeout(startType,60);return}
 var rm=window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches;
 if(rm){i.remove();return}
 try{sessionStorage.setItem("hi","1")}catch(e){}
 document.body.style.overflow="hidden";
 function done(){if(!i.parentNode)return;i.remove();document.body.style.overflow="";clearTimeout(tt);startType()}
 var tt=setTimeout(startType,3300);i.addEventListener("click",done);setTimeout(done,4400);
})();
/* Animatsiyalar: savatga uchish, summa sanalishi, aylantirganda paydo bo'lish */
var OSRM=!!(window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches),RM=OSRM,shown=0,raf=0;
/* === ANIM C: summa sanalishi === */
function countTo(s,d){
 cancelAnimationFrame(raf);
 if(RM||shown===s){shown=s;$("ctot").textContent=fmt(s)+" "+d.sum;return}
 var a=shown,t0=performance.now();
 (function st(t){var k=Math.min(1,(t-t0)/420),e=1-Math.pow(1-k,3);shown=Math.round(a+(s-a)*e);$("ctot").textContent=fmt(shown)+" "+d.sum;if(k<1)raf=requestAnimationFrame(st)})(t0);
}
/* === ANIM B: mahsulot rasmi savatga uchib borishi === */
function fly(src){
 vib(25);if(RM||!src)return;
 var r=src.getBoundingClientRect(),c=$("cart"),tx=c.offsetLeft+44,ty=c.offsetTop+c.offsetHeight/2;
 var el=src.cloneNode(true);el.removeAttribute("id");
 el.style.cssText+=";position:fixed;margin:0;left:"+r.left+"px;top:"+r.top+"px;width:"+r.width+"px;height:"+r.height+"px;z-index:90;pointer-events:none;animation:none;box-shadow:0 10px 24px rgba(0,0,0,.3)";
 document.body.appendChild(el);
 var dx=tx-(r.left+r.width/2),dy=ty-(r.top+r.height/2);
 el.animate([{transform:"translate(0,0) scale(1)",opacity:1},{transform:"translate("+dx*.5+"px,"+(dy*.5-60)+"px) scale(.7)",opacity:1,offset:.45},{transform:"translate("+dx+"px,"+dy+"px) scale(.18)",opacity:.9}],{duration:700,easing:"cubic-bezier(.45,0,.55,1)"}).onfinish=function(){el.remove();c.classList.remove("bump");void c.offsetWidth;c.classList.add("bump")};
}
/* === ANIM D: aylantirganda paydo bo'lish (JS qismi) === */
(function(){
 if(RM||!("IntersectionObserver" in window))return;
 var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}})},{threshold:.12});
 document.querySelectorAll(".car,.head,.cats,.list,.how div,.f>div,.f>a.map,.icard").forEach(function(el){el.classList.add("rvl");io.observe(el)});
})();
/* === ANIM G: konfetti (buyurtma yuborilganda) === */
function confetti(src,n){
 if(RM)return;
 var r=(src||$("otg")).getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+(src?r.height/2:0),cols=["#c8102e","#f5b301","#2da44e","#ffffff","#ff7a59","#3b82f6"];
 for(var k=0;k<(n||42);k++){
  var p=document.createElement("i");
  p.style.cssText="position:fixed;left:"+cx+"px;top:"+cy+"px;width:"+(6+Math.random()*5)+"px;height:"+(9+Math.random()*7)+"px;background:"+cols[k%cols.length]+";border-radius:2px;z-index:140;pointer-events:none";
  document.body.appendChild(p);
  var x=(Math.random()-.5)*340,up=90+Math.random()*190,fall=140+Math.random()*260,rot=(Math.random()-.5)*720;
  p.animate([{transform:"translate(0,0) rotate(0)",opacity:1},{transform:"translate("+x*.7+"px,"+(-up)+"px) rotate("+rot*.5+"deg)",opacity:1,offset:.4},{transform:"translate("+x+"px,"+fall+"px) rotate("+rot+"deg)",opacity:0}],{duration:1100+Math.random()*900,easing:"cubic-bezier(.3,.6,.5,1)"}).onfinish=(function(el){return function(){el.remove()}})(p);
 }
}
/* === ANIM L: telefon titrashi === */
function vib(p){try{if(!RM&&S.vibrate&&navigator.vibrate)navigator.vibrate(p)}catch(e){}}
/* === ANIM K: sarlavha harfma-harf yozilishi === */
var typed=false,typeTimer=null;
function startType(){
 if(typed||RM)return;typed=true;
 var h=document.querySelector(".hero h1");if(!h)return;
 var t=h.textContent,i=0;h.style.minHeight=h.offsetHeight+"px";h.textContent="";h.classList.add("typing");
 typeTimer=setInterval(function(){i++;h.textContent=t.slice(0,i);if(i>=t.length)stopType()},48);
}
function stopType(){
 if(typeTimer){clearInterval(typeTimer);typeTimer=null}
 var h=document.querySelector(".hero h1");if(h){h.classList.remove("typing");h.style.minHeight=""}
}
/* === ANIM N: footer (JS qismi): ochiq/yopiq holati va kartalarning paydo bo'lishi === */
function renderStatus(){
 var h=new Date(new Date().toLocaleString("en-US",{timeZone:"Asia/Tashkent"})).getHours(),on=h>=CLOSE&&h<OPEN;
 $("stt").classList.toggle("off",!on);$("sttx").textContent=T[lang][on?"st1":"st0"];
}
setInterval(renderStatus,60000);
(function(){
 if(RM||!("IntersectionObserver" in window))return;
 var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.remove("ft");x.target.classList.add("fin");io.unobserve(x.target)}})},{threshold:.15});
 document.querySelectorAll(".fh,.fc,.map2,.fb2").forEach(function(el){el.classList.add("ft");io.observe(el)});
})();
/* === ANIM O: sarlavha (progress, scrollspy, yashirinish), ripple, spotlight, hero tilt === */
var rowAnim=true,HD=document.getElementById("hd"),lastY=0,tick=false;
function placeNvi(){
 var a=document.querySelector("#nav a.on"),n=$("nvi");if(!a||!n)return;
 n.style.width=a.offsetWidth+"px";n.style.transform="translateX("+a.offsetLeft+"px)";
}
function spy(){
 var mid=window.innerHeight*.38,cur="#top",map=[[".hero","#top"],["#products","#products"],["#how","#how"],["#contact","#contact"]];
 map.forEach(function(m){var el=document.querySelector(m[0]);if(el&&el.getBoundingClientRect().top<=mid)cur=m[1]});
 document.querySelectorAll("#nav a").forEach(function(a){a.classList.toggle("on",a.getAttribute("href")===cur)});
 placeNvi();
}
function onScroll(){
 var y=window.scrollY,max=document.documentElement.scrollHeight-window.innerHeight;
 HD.style.setProperty("--p",max>0?(y/max).toFixed(4):0);
 HD.classList.toggle("hd-s",y>20);
 HD.classList.toggle("hd-h",y>lastY&&y>320&&!$("nav").classList.contains("open")&&!$("hs").classList.contains("open"));
 lastY=y;spy();
 document.querySelectorAll(".rvl:not(.in)").forEach(function(el){if(el.getBoundingClientRect().top<window.innerHeight*.92)el.classList.add("in")});
 document.querySelectorAll(".ft").forEach(function(el){if(el.getBoundingClientRect().top<window.innerHeight*.92){el.classList.remove("ft");el.classList.add("fin")}});
}
window.addEventListener("scroll",function(){if(!tick){tick=true;requestAnimationFrame(function(){tick=false;onScroll()})}},{passive:true});
window.addEventListener("resize",placeNvi);
$("cbtn").onclick=function(){if(Object.keys(cart).length)openO();else $("products").scrollIntoView({behavior:"smooth"})};
document.addEventListener("pointerdown",function(e){
 if(RM)return;
 var t=e.target.closest&&e.target.closest(".btn,.cb,.lg");if(!t)return;
 var r=t.getBoundingClientRect(),s=Math.max(r.width,r.height)*2,k=document.createElement("span");
 k.className="rpl";k.style.cssText="width:"+s+"px;height:"+s+"px;left:"+(e.clientX-r.left-s/2)+"px;top:"+(e.clientY-r.top-s/2)+"px";
 t.appendChild(k);setTimeout(function(){k.remove()},700);
});
document.querySelectorAll(".how div,.fc").forEach(function(el){el.classList.add("spot")});
document.addEventListener("pointermove",function(e){
 var t=e.target.closest&&e.target.closest(".spot,.row");if(!t)return;
 var b=t.getBoundingClientRect();t.style.setProperty("--rx",(e.clientX-b.left)+"px");t.style.setProperty("--ry",(e.clientY-b.top)+"px");
},{passive:true});
(function(){
 var pic=document.querySelector(".pic"),hp=$("hph");
 if(RM||!pic||!hp||!window.matchMedia||!matchMedia("(hover:hover)").matches)return;
 pic.addEventListener("pointermove",function(e){var b=pic.getBoundingClientRect(),x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;hp.style.transform="perspective(700px) rotateY("+(x*12)+"deg) rotateX("+(-y*12)+"deg) scale(1.02)"});
 pic.addEventListener("pointerleave",function(){hp.style.transform=""});
})();
onScroll();
/* === ANIM Q: sozlamalar (settings): tema, animatsiya, kirish, titrash, katta matn, qadam, eslab qolish va amallar === */
var SK="xt_settings",SD={theme:"light",motion:true,intro:true,vibrate:true,big:false,remember:true,step:0.5},S={},tmr=0;
(function(){var o={};try{o=JSON.parse(localStorage.getItem(SK)||"{}")}catch(e){}
 if(!o.theme){try{var lt=localStorage.getItem("theme");if(lt)o.theme=lt}catch(e){}}
 for(var k in SD)S[k]=(o[k]===undefined?SD[k]:o[k]);
})();
function saveS(){try{localStorage.setItem(SK,JSON.stringify(S))}catch(e){}}
function resolveTheme(){return S.theme==="system"?((window.matchMedia&&matchMedia("(prefers-color-scheme:dark)").matches)?"dark":"light"):S.theme}
function applyTheme(){setTheme(resolveTheme())}
function applyBig(){document.documentElement.classList.toggle("bt",!!S.big)}
function applyMotion(){RM=OSRM||!S.motion;document.documentElement.classList.toggle("nomo",!S.motion);if(RM)stopC();else playC()}
function mark(id,v){document.querySelectorAll("#"+id+" button").forEach(function(b){b.classList.toggle("on",b.dataset.v===v)})}
function syncUI(){
 mark("sg_lang",lang);mark("sg_theme",S.theme);mark("sg_step",String(S.step));
 [["t_motion","motion"],["t_intro","intro"],["t_vib","vibrate"],["t_big","big"],["t_rem","remember"]].forEach(function(x){var el=$(x[0]);if(el)el.checked=!!S[x[1]]});
 if($("orem"))$("orem").checked=!!S.remember;
}
function toast(m){var t=$("tst");t.textContent=m;t.classList.add("show");clearTimeout(tmr);tmr=setTimeout(function(){t.classList.remove("show")},2600)}
function openS(){syncUI();$("stg").hidden=false;document.body.style.overflow="hidden"}
function closeS(){$("stg").hidden=true;document.body.style.overflow=""}
STEP=S.step;applyBig();applyMotion();
$("gear").onclick=openS;$("sclose").onclick=closeS;
$("stg").onclick=function(e){if(e.target===$("stg"))closeS()};
$("sg_lang").onclick=function(e){var b=e.target.closest("button");if(b)setLang(b.dataset.v)};
$("sg_theme").onclick=function(e){var b=e.target.closest("button");if(!b)return;S.theme=b.dataset.v;saveS();applyTheme();syncUI()};
$("sg_step").onclick=function(e){var b=e.target.closest("button");if(!b)return;S.step=parseFloat(b.dataset.v);STEP=S.step;saveS();syncUI();toast(T[lang].t_step+": "+S.step+" "+T[lang].u)};
[["t_motion","motion",function(){applyMotion()}],["t_intro","intro",function(){}],["t_vib","vibrate",function(){vib(40)}],["t_big","big",applyBig],["t_rem","remember",function(){syncUI()}]].forEach(function(x){
 $(x[0]).addEventListener("change",function(){S[x[1]]=this.checked;saveS();x[2]()});
});
$("orem").addEventListener("change",function(){S.remember=this.checked;saveS();syncUI()});
$("a_cart").onclick=function(){cart={};render();if(!$("om").hidden)closeO();toast(T[lang].t_cart0)};
$("a_data").onclick=function(){try{localStorage.removeItem("xt_cust")}catch(e){}["on","op","oa","onote"].forEach(function(id){$(id).value=""});updO();toast(T[lang].t_data0)};
$("a_inst").onclick=function(){closeS();doInstall()};
$("a_share").onclick=function(){
 var u=location.href.split("#")[0];
 if(navigator.share){navigator.share({title:"Xom tovuq",text:T[lang].h1,url:u}).catch(function(){})}
 else{copyText(u);toast(T[lang].t_copied)}
};
$("a_about").onclick=function(){closeS();openAbout()};
$("a_reset").onclick=function(){for(var k in SD)S[k]=SD[k];saveS();STEP=S.step;applyTheme();applyBig();applyMotion();setLang("uz");syncUI();toast(T[lang].t_reset)};
if(window.matchMedia){var mq=matchMedia("(prefers-color-scheme:dark)");var onM=function(){if(S.theme==="system")applyTheme()};if(mq.addEventListener)mq.addEventListener("change",onM)}
/* === ANIM R: rahmat (xayrlashuv) ekrani: buyurtma yuborilgach chiqadi === */
var lastOrder=null,pend=false,wasAway=false,asking=false;
(function(){
 $("txch").innerHTML=ART[0].replace(/<ellipse[^>]*opacity="\.13"[^>]*\/>/,"");
 var h="",i,sz;
 for(i=0;i<16;i++){sz=14+Math.random()*22;h+='<i style="left:'+(Math.random()*96).toFixed(1)+'%;width:'+sz.toFixed(0)+'px;height:'+sz.toFixed(0)+'px;--d:'+(5+Math.random()*5).toFixed(1)+'s;--t:'+(Math.random()*5).toFixed(1)+'s;--x:'+((Math.random()-.5)*120).toFixed(0)+'px"><svg viewBox="0 0 24 24"><path d="M12 21s-7-4.6-9.3-9A5.4 5.4 0 0 1 12 6.6 5.4 5.4 0 0 1 21.3 12C19 16.4 12 21 12 21z"/></svg></i>'}
 $("txh").innerHTML=h;
})();
function firstName(){var n=($("on").value||"").trim();if(!n){var c=getCust();n=(c&&c.n)||""}n=n.split(/\s+/)[0]||"";return n?n.charAt(0).toUpperCase()+n.slice(1):""}
function showThx(){
 var d=T[lang],c=0,s=0;
 for(var k in cart){c++;s+=cart[k]*price[k]}
 if(!c)return;
 pend=false;
 lastOrder=lastOrder||{href:$("otg").href};
 var nm=firstName(),ttl=nm?d.thx_t.replace(/\{[n\u043d]\}/,nm):d.thx_t0;
 $("thxt").innerHTML=ttl.split(" ").map(function(w,i){return '<span style="--i:'+i+'">'+esc(w)+'</span>'}).join(" ");
 $("txs").textContent=fmt(s)+" "+d.sum+" • "+c+" "+d.items;
 closeO();$("thx").hidden=false;document.body.style.overflow="hidden";
 setTimeout(function(){confetti($("txmas"),70)},500);
 setTimeout(function(){confetti($("txmas"),40)},1600);
 vib([40,60,40,60,120]);
}
function hideThx(clear){$("thx").hidden=true;document.body.style.overflow="";if(clear){cart={};render()}}
var awayAt=0;
function away(){if(pend&&!awayAt)awayAt=Date.now()}
function back(){if(pend&&awayAt){var t=Date.now()-awayAt;awayAt=0;if(t>1200){pend=false;setTimeout(showThx,350)}}}
document.addEventListener("visibilitychange",function(){document.hidden?away():back()});
window.addEventListener("blur",away);window.addEventListener("focus",back);window.addEventListener("pageshow",back);
$("o_done").onclick=function(){pend=false;showThx()};
$("tx_more").onclick=function(){hideThx(true);$("products").scrollIntoView({behavior:"smooth"})};
$("tx_tg").onclick=function(){if(lastOrder)window.open(lastOrder.href,"_blank")};
$("up").onclick=function(){var u=this;window.scrollTo({top:0,behavior:"smooth"});u.classList.add("bp");setTimeout(function(){u.classList.remove("bp")},450)};
window.addEventListener("scroll",function(){$("up").classList.toggle("show",window.scrollY>500)});
try{lang=localStorage.getItem("lang")||"uz";theme=resolveTheme()}catch(e){}
(function(){var v=vis(0),h=$("hph");h.className="hph"+v.c;h.style.cssText=v.c?v.s:"";h.innerHTML=v.h})();if(!T[lang])lang="uz";setTheme(theme);setLang(lang);playC();
