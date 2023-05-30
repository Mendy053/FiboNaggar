function showElement() {
    document.getElementById("navside").className = ("show");
    document.getElementById("gray-background").className = ("show");
}
function unshowElement() {
    document.getElementById("navside").className = ("hide");
    document.getElementById("gray-background").className = ("hide");
}

function openA() {
    window.location.replace("https://fibotax.com/multistepsForm/name");
}

function openB() {
    window.location.replace("https://fibotax.com/");
}
function openC() {
    window.location.replace("https://fibotax.com/pricing");
}

function openD() {
    window.location.replace("https://fibotax.com/faq");
}

function openE() {
    window.location.replace("https://fibotax.com/about-us");
}

function openF() {
    window.location.replace("https://magazine.fibotax.com/?utm_source=homepage");
}
function openG() {
    window.location.replace("https://fibotax.com/#ContactUs");
}

function showSpinner() {
    const button = document.getElementById("toopen");
    const span = document.querySelector("#toopen span");
    const spinner = document.getElementById("spinner");

    span.classList.add("hidden");
    spinner.classList.remove("hidden");

    setTimeout(() => {
        button.style.display = "none"
        spinner.classList.add("hidden");
        showMassage();
    }, 1000);
}

function showMassage() {
    const afterImg = document.querySelector("#after-img div");
    toopen.innerHTML = "";
    const massage = `שלום לך,

ראינו כי הגשת בקשה לפתיחת תיק בקשה לחישוב והחזרי מס.

לאחר פניה ראשונית אל רשות המיסים, אנו מבינים כי יתכן והנך זכאי לסכום גבוה מהסכום המינימלי שקבענו עבור פתיחת תיקים ללקוחות פרטיים.

בשביל להמשיך בטיפול בתיקך, אנא שלח לנו אימייל לכתובת שמופיעה למטה וצרף את המסמכים הבאים:

• תלושי השכר שלך לחודשים ינואר - מרץ של שנת 2022.
• אם אתה מועסק על ידי שני מעסיקים ומעלה, אנא צרף אישורי תיאום מס לשנה זו.
• צילום של תעודת זהות וספח, או רישיון. נא לשים לב, אם תעודת הזהות שלך היא ביומטרית, יש לצרף שני צדדי התעודה.
• אישור ניהול חשבון בנק בו מופיע מספר הת.ז. שלך.
• טופס 106 לשנת 2022.

יש לקחת בחשבון כי ניתן להגיש פניות לרשות המיסים רק עד לסוף חודש יוני 2023, במידה ותגיש את המסמכים לאחר 12.06.2023 - הבקשה תיפתח רק בשנה הבאה.

נא לשלוח את המייל עם המסמכים לכתובת trygry@gmail.com.

תודה רבה ובהצלחה בהמשך התהליך.

בברכה,
גלעד - מחלקת תיקים פרטיים.`;

    const pepper = document.createElement("div");
    pepper.id = "pepper";
    const p = document.createElement("p");
    p.innerText = massage;
    pepper.append(p);
    afterImg.append(pepper);
}