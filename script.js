const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

// localStorage can throw (private mode), so every call goes through here
const store = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
};

/* ---------- text: English lives in the HTML, Arabic is kept here ---------- */
const ar = {
  skip: "انتقل إلى المحتوى", logo: "أكاديمية ميناء للغة الإنجليزية", navlabel: "التنقل الرئيسي",
  n1: "اختبار المستوى", n2: "المجموعات", n3: "المدرسون", n4: "الرسوم", n5: "أسئلة", cta: "انضم إلى مجموعة",
  h1: "دروس إنجليزي في الإسكندرية، وثمانية مقاعد فقط في كل قاعة.",
  hp: "مجموعات مسائية ومجموعات يوم الجمعة، من المبتدئ تمامًا إلى المتقدم. جرّب اختبار الاثني عشر سؤالًا في الأسفل لتعرف من أين ستبدأ.",
  hb1: "ابدأ اختبار المستوى", hb2: "شاهد الجدول",
  lad_t: "ماذا يتيح لك كل مستوى",
  la1: "تعرّف بنفسك، وتطلب الطعام، وتسأل عن الاتجاهات.",
  la2: "تتحدث عن يومك وعن عطلة الأسبوع الماضي وعن خططك.",
  la3: "تتدبر السفر والحديث العابر في العمل والرسائل البسيطة.",
  la4: "تتابع اجتماعًا، وتكتب بريدًا واضحًا، وتشارك في نقاش.",
  la5: "تدافع عن رأيك، وتقرأ الأخبار، وتكتب التقارير بسهولة.",
  q_t: "اعرف مستواك الحالي",
  q_p: "اثنا عشر سؤالًا، نحو ثماني دقائق. هذه نقطة بداية فقط: يؤكد لك أحد المدرسين مستواك في حديث قصير قبل أن تدفع أي شيء.",
  g_t: "المجموعات والجدول",
  g_p: "تُفتح مجموعة جديدة في أول يوم أحد من كل شهر. في كل مجموعة ثمانية طلاب على الأكثر.",
  f_level: "المستوى", f_all: "كل المستويات", ielts: "التحضير لاختبار IELTS", f_time: "وقت اليوم",
  t_all: "أي وقت", t_m: "صباحًا", t_e: "مساءً", t_f: "الجمعة",
  cap1: "المجموعات التي تبدأ الشهر القادم مع الأيام والمواعيد والمقاعد المتاحة",
  th1: "المستوى", th2: "الدورة", th3: "الأيام", th4: "الوقت", th5: "المقاعد", th6: "إجراء",
  ge: "إنجليزي عام", ielts_s: "IELTS", ask: "اسأل عن هذه المجموعة",
  empty: "لا توجد مجموعة بهذا الاختيار. جرّب وقتًا آخر من اليوم، أو اسألنا عن مجموعة جديدة.",
  m_t: "كيف تعمل المجموعة",
  m1b: "ثمانية مقاعد على الأكثر.", m1: "الجميع يتحدث في كل حصة. لا أحد يختبئ في آخر القاعة.",
  m2n: "10 أسابيع", m2b: "المستوى الواحد عشرة أسابيع.", m2: "وينتهي باختبار محادثة قصير مع مدرسك، وليس باختبار طويل.",
  m3n: "يومان", m3b: "الواجب يعود إليك مصححًا.", m3: "نعيد الواجبات الكتابية خلال يومي عمل، مع ملاحظات تستفيد منها.",
  t_t: "مدرسوك", t_p: "يبقى كل مدرس مع مجموعته طوال الأسابيع العشرة.",
  p1: "ندى فاروق", p1r: "مجموعات A1 إلى B2، وإحدى عشرة سنة من التدريس",
  p1d: "تبدأ المستويات الأولى بالإنجليزية تقريبًا كليًا، وتُبقي العربية جاهزة للحظة التي يتعثر فيها أحدهم فعلًا.",
  p2: "مارك رايلي", p2r: "مجموعات C1 والتحضير لاختبار IELTS",
  p2d: "من مدينة ليدز، ويقيم في الإسكندرية منذ 2016. يصحح بنفسه كل مهام الكتابة في IELTS.",
  p3: "هبة منصور", p3r: "مجموعات A2 وB1 وحصص الجمعة",
  p3d: "معلمة سابقة في المرحلة الابتدائية. حصصها في معظمها عمل ثنائي، فتتحدث أكثر مما تستمع.",
  fe_t: "الرسوم", fe_p: "الأسعار أرقام تجريبية. اختبار المستوى والحديث الأول مع المدرس مجانيان.",
  cap2: "الرسوم الشهرية حسب نوع الدورة", fh1: "الدورة", fh2: "الرسوم", fh3: "ملاحظات",
  fr1: "إنجليزي عام، مساءً أو صباحًا", fp1: "1,200 جنيه شهريًا", fn1: "الكتب 350 جنيهًا لكل مستوى، وتُدفع مرة واحدة.",
  fr2: "إنجليزي عام، مجموعة الجمعة", fp2: "1,000 جنيه شهريًا", fn2: "أربع ساعات كل جمعة.",
  fr3: "التحضير لاختبار IELTS", fp3: "1,800 جنيه شهريًا", fn3: "يشمل اختبارًا تجريبيًا كاملًا كل شهر.",
  fr4: "حصة خاصة", fp4: "400 جنيه للساعة", fn4: "احجز قبل الموعد بيومين على الأقل.",
  fq_t: "قبل أن تنضم",
  q1: "هل يجب أن أجري اختبار المستوى أولًا؟", a1: "لا. هو يوفر الوقت فقط. إذا تخطيته، يطرح عليك أحد المدرسين بضعة أسئلة في زيارتك الأولى ويقترح عليك مجموعة.",
  q2: "هل أستطيع تغيير المجموعة بعد أن أبدأ؟", a2: "نعم، خلال الأسبوعين الأولين، إذا توفر مقعد في المجموعة التي تريدها.",
  q3: "هل الحصص عبر الإنترنت؟", a3: "لا. كل المجموعات تلتقي حضوريًا في مدرستنا بالإسكندرية.",
  q4: "ماذا لو فاتتني حصة؟", a4: "راسلنا قبل الحصة وسيرسل لك مدرسك الملاحظات والواجب.",
  q5: "هل تدرّسون الأطفال؟", a5: "ليس حاليًا. مجموعاتنا للطلاب من سن 16 عامًا فأكثر.",
  r_t: "اطلب مكانًا", r_p: "أخبرنا بالمستوى والوقت الذي تفضله. نتصل بك خلال يوم عمل واحد لنؤكد المجموعة.",
  l1: "الاسم الكامل", l2: "الهاتف", l3: "المستوى", lv0: "لست متأكدًا بعد", l4: "الوقت المفضل",
  consent: "أوافق على التواصل معي بخصوص هذا الطلب. <a href=\"privacy.html\">الخصوصية وملفات الارتباط</a>",
  send: "أرسل طلبي",
  fd: "دروس إنجليزي في الإسكندرية، مصر.", fa: "ساعات العمل",
  fo1: "من السبت إلى الخميس، 9 صباحًا حتى 9 مساءً", fo2: "الجمعة، 9 صباحًا حتى 3 عصرًا", fc: "التواصل",
  rights: "© 2026 أكاديمية ميناء للغة الإنجليزية. مشروع تجريبي وليست مدرسة حقيقية. الأسعار والمدرسون والمواعيد أمثلة.",
  privlink: "الخصوصية وملفات الارتباط", cr: "تريد موقعًا مثل هذا؟ راسل المطور"
};

// text that is built by the script, in both languages
const UI = {
  en: {
    title: "Mina English Academy | English classes in Alexandria",
    desc: "English groups of eight in Alexandria, from A1 to C1. Take a 12-question level check and see the timetable. Demo project.",
    langAria: "Switch to Arabic", langBtn: "ع", menuOpen: "Open menu", menuClose: "Close menu",
    qOf: (i, n) => `Question ${i} of ${n}`, progress: "Progress through the level check",
    back: "Back", next: "Next", finish: "See my level",
    yourLevel: "Your starting level looks like",
    score: (s, n) => `You answered ${s} of ${n} questions correctly.`,
    seeGroups: l => `See ${l} groups`, retake: "Retake the check",
    note: "This is a quick estimate. A teacher confirms your level in a short talk, and you can move up or down in the first two weeks.",
    seats: n => `${n} ${n === 1 ? "seat" : "seats"} left`,
    count: n => n === 0 ? "No groups match" : `${n} ${n === 1 ? "group" : "groups"} shown`,
    levels: {
      A1: "Beginner. No earlier English is needed to join an A1 group.",
      A2: "Elementary. You know the basics and need more confidence in everyday talk.",
      B1: "Intermediate. You can manage daily situations and now need range and accuracy.",
      B2: "Upper-intermediate. You follow most things, and the work is on fluency and writing.",
      C1: "Advanced. Groups at this level focus on precision, style and exam skills."
    },
    mName: "Enter your full name.",
    mPhone: "Enter a valid phone number, for example 0100 000 0000.",
    mConsent: "Please tick the box to agree to be contacted.",
    mOk: "Demo form: nothing was sent. On a live site this request would reach the school."
  },
  ar: {
    title: "أكاديمية ميناء | دروس إنجليزي في الإسكندرية",
    desc: "مجموعات إنجليزي من ثمانية طلاب في الإسكندرية، من A1 إلى C1. جرّب اختبار المستوى المكوّن من 12 سؤالًا وشاهد الجدول. مشروع تجريبي.",
    langAria: "التبديل إلى الإنجليزية", langBtn: "EN", menuOpen: "افتح القائمة", menuClose: "أغلق القائمة",
    qOf: (i, n) => `السؤال ${i} من ${n}`, progress: "التقدم في اختبار المستوى",
    back: "السابق", next: "التالي", finish: "اعرض مستواي",
    yourLevel: "يبدو أن مستواك المبدئي هو",
    score: (s, n) => `أجبت إجابة صحيحة عن ${s} من ${n} سؤالًا.`,
    seeGroups: l => `شاهد مجموعات ${l}`, retake: "أعد الاختبار",
    note: "هذا تقدير سريع. يؤكد لك أحد المدرسين مستواك في حديث قصير، ويمكنك الانتقال إلى مستوى أعلى أو أدنى خلال الأسبوعين الأولين.",
    seats: n => n === 1 ? "بقي مقعد واحد" : n === 2 ? "بقي مقعدان" : `بقيت ${n} مقاعد`,
    count: n => n === 0 ? "لا توجد مجموعات مطابقة" : n === 1 ? "تظهر مجموعة واحدة" : n === 2 ? "تظهر مجموعتان" : `تظهر ${n} مجموعات`,
    levels: {
      A1: "مبتدئ. لا تحتاج إلى أي معرفة سابقة بالإنجليزية للانضمام إلى مجموعة A1.",
      A2: "أساسي. تعرف الأساسيات وتحتاج إلى ثقة أكبر في الحديث اليومي.",
      B1: "متوسط. تتدبر مواقف الحياة اليومية، وتحتاج الآن إلى تنوع أكبر ودقة أكثر.",
      B2: "فوق المتوسط. تفهم معظم ما يقال، والعمل الآن على الطلاقة والكتابة.",
      C1: "متقدم. تركز مجموعات هذا المستوى على الدقة والأسلوب ومهارات الاختبارات."
    },
    mName: "اكتب اسمك الكامل.",
    mPhone: "اكتب رقم هاتف صحيحًا، مثل 0100 000 0000.",
    mConsent: "ضع علامة في المربع للموافقة على التواصل معك.",
    mOk: "نموذج تجريبي: لم يُرسل شيء. في الموقع الحقيقي يصل الطلب إلى المدرسة."
  }
};

let lang = store.get("lang") === "ar" ? "ar" : "en";
const ui = () => UI[lang];

// remember the English text from the HTML so we can switch back
$$("[data-i18n]").forEach(el => { el.dataset.en = el.innerHTML; });
$$("[data-i18n-aria]").forEach(el => { el.dataset.en = el.getAttribute("aria-label"); });
const metaDesc = $('meta[name="description"]');

/* ---------- level check ---------- */
const QUIZ = [
  { q: "My sister ___ a teacher.", o: ["am", "are", "is", "be"], a: 2 },
  { q: "We ___ breakfast at eight every day.", o: ["has", "having", "have", "haves"], a: 2 },
  { q: "There ___ two books on the table.", o: ["is", "am", "be", "are"], a: 3 },
  { q: "I ___ to the cinema yesterday.", o: ["went", "go", "gone", "going"], a: 0 },
  { q: "She is ___ than her brother.", o: ["tall", "more tall", "tallest", "taller"], a: 3 },
  { q: "If you ___ hard, you will pass the exam.", o: ["study", "studied", "will study", "would study"], a: 0 },
  { q: "I have lived in Alexandria ___ 2015.", o: ["for", "from", "during", "since"], a: 3 },
  { q: "The report ___ by the manager before the meeting.", o: ["finished", "has finish", "was finished", "is finishing"], a: 2 },
  { q: "By the time we arrived, the film ___.", o: ["had already started", "already started", "has already started", "was already starting"], a: 0 },
  { q: "I wish I ___ more time to study last week.", o: ["have", "had", "would have", "had had"], a: 3 },
  { q: "Hardly ___ the station when the train left.", o: ["had we reached", "we had reached", "did we reach", "we reached"], a: 0 },
  { q: "His argument was so ___ that nobody could disagree with it.", o: ["compulsory", "compelling", "compatible", "comprehensive"], a: 1 }
];
// number of correct answers needed for each level
const levelFor = s => s <= 3 ? "A1" : s <= 5 ? "A2" : s <= 8 ? "B1" : s <= 10 ? "B2" : "C1";

let idx = 0;
const answers = new Array(QUIZ.length).fill(null);
let showResult = false;

function renderQuiz(focus) {
  const q = $("#qView"), r = $("#rView");
  if (showResult) { q.hidden = true; r.hidden = false; renderResult(focus); return; }
  r.hidden = true; q.hidden = false;
  const item = QUIZ[idx], u = ui();
  q.innerHTML = `
    <div class="q-top"><span>${u.qOf(idx + 1, QUIZ.length)}</span></div>
    <progress max="${QUIZ.length}" value="${idx}" aria-label="${u.progress}"></progress>
    <fieldset lang="en" dir="ltr">
      <legend id="qLegend" tabindex="-1">${item.q.replace("___", "_____")}</legend>
      <div class="opts">
        ${item.o.map((t, i) => `<label class="opt"><input type="radio" name="ans" value="${i}"${answers[idx] === i ? " checked" : ""}><span>${t}</span></label>`).join("")}
      </div>
    </fieldset>
    <div class="q-nav">
      <button type="button" class="btn ghost" id="qBack"${idx === 0 ? " hidden" : ""}>${u.back}</button>
      <button type="button" class="btn" id="qNext"${answers[idx] === null ? " disabled" : ""}>${idx === QUIZ.length - 1 ? u.finish : u.next}</button>
    </div>`;
  $$("input[name=ans]", q).forEach(inp => inp.addEventListener("change", () => {
    answers[idx] = +inp.value;
    $("#qNext").disabled = false;
  }));
  $("#qBack").addEventListener("click", () => { idx--; renderQuiz(true); });
  $("#qNext").addEventListener("click", () => {
    if (idx < QUIZ.length - 1) idx++; else showResult = true;
    renderQuiz(true);
  });
  if (focus) $("#qLegend").focus({ preventScroll: true });
}

function renderResult(focus) {
  const u = ui();
  const score = answers.reduce((n, a, i) => n + (a === QUIZ[i].a ? 1 : 0), 0);
  const lvl = levelFor(score);
  const r = $("#rView");
  r.innerHTML = `
    <h3>${u.yourLevel} <span class="res-lvl">${lvl}</span></h3>
    <p class="score">${u.score(score, QUIZ.length)}</p>
    <p>${u.levels[lvl]}</p>
    <p class="res-note">${u.note}</p>
    <div class="actions">
      <button type="button" class="btn" id="seeG">${u.seeGroups(lvl)}</button>
      <button type="button" class="link" id="retake">${u.retake}</button>
    </div>`;
  $("#seeG").addEventListener("click", () => {
    $("#fLevel").value = lvl;
    $('input[name=slot][value=all]').checked = true;
    applyFilter();
    $("#lv").value = lvl;
    $("#groups").scrollIntoView();
  });
  $("#retake").addEventListener("click", () => {
    idx = 0; showResult = false; answers.fill(null); renderQuiz(true);
  });
  if (focus) r.focus({ preventScroll: true });
}

/* ---------- timetable ---------- */
const rows = $$("#tbl tbody tr");
function applyFilter() {
  const lv = $("#fLevel").value;
  const slot = $("input[name=slot]:checked").value;
  let n = 0;
  rows.forEach(tr => {
    const show = (lv === "all" || tr.dataset.level === lv) && (slot === "all" || tr.dataset.slot === slot);
    tr.hidden = !show;
    if (show) n++;
  });
  $("#count").textContent = ui().count(n);
  $("#empty").hidden = n !== 0;
  $("#tbl").closest(".tbl-wrap").hidden = n === 0;
}
$("#fLevel").addEventListener("change", applyFilter);
$$("input[name=slot]").forEach(i => i.addEventListener("change", applyFilter));

// each row's button carries the group into the request form
$$(".pick").forEach(b => b.addEventListener("click", () => {
  const tr = b.closest("tr");
  $("#lv").value = tr.dataset.level;
  $("#tm").value = tr.dataset.slot;
  $("#register").scrollIntoView();
  $("#nm").focus({ preventScroll: true });
}));

function fillDays() {
  // 2024-01-07 was a Sunday, so day numbers 0 to 6 map straight onto it
  const fmt = new Intl.DateTimeFormat(lang === "ar" ? "ar" : "en", { weekday: lang === "ar" ? "long" : "short" });
  const sep = lang === "ar" ? "، " : ", ";
  $$(".days").forEach(td => {
    td.textContent = td.dataset.days.split(",").map(d => fmt.format(new Date(2024, 0, 7 + +d))).join(sep);
  });
  $$(".seats").forEach(td => { td.textContent = ui().seats(+td.dataset.n); });
  // labels for the stacked table on phones come from the column headings
  $$("#tbl, .fees").forEach(t => {
    const heads = $$("thead th", t).map(th => th.textContent.trim());
    $$("tbody tr", t).forEach(tr => $$("td", tr).forEach((td, i) => {
      td.dataset.label = td.querySelector(".pick") ? "" : (heads[i + 1] || "");
    }));
  });
}

/* ---------- language ---------- */
function setLang(l, focus) {
  lang = l;
  const html = document.documentElement;
  html.lang = l;
  html.dir = l === "ar" ? "rtl" : "ltr";
  $$("[data-i18n]").forEach(el => { el.innerHTML = l === "ar" ? ar[el.dataset.i18n] : el.dataset.en; });
  $$("[data-i18n-aria]").forEach(el => el.setAttribute("aria-label", l === "ar" ? ar[el.dataset.i18nAria] : el.dataset.en));
  const u = ui();
  document.title = u.title;
  metaDesc.setAttribute("content", u.desc);
  const btn = $("#langBtn");
  btn.textContent = u.langBtn;
  btn.setAttribute("aria-label", u.langAria);
  btn.lang = l === "ar" ? "en" : "ar";
  const open = $("#nav").classList.contains("open");
  $("#burger").setAttribute("aria-label", open ? u.menuClose : u.menuOpen);
  fillDays();
  applyFilter();
  renderQuiz(false);
  store.set("lang", l);
}
$("#langBtn").addEventListener("click", () => setLang(lang === "ar" ? "en" : "ar"));

/* ---------- menu ---------- */
const burger = $("#burger"), nav = $("#nav");
function closeMenu() {
  nav.classList.remove("open");
  burger.setAttribute("aria-expanded", "false");
  burger.setAttribute("aria-label", ui().menuOpen);
}
burger.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(open));
  burger.setAttribute("aria-label", open ? ui().menuClose : ui().menuOpen);
});
$$("#nav a").forEach(a => a.addEventListener("click", closeMenu));
document.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });

/* ---------- request form ---------- */
$("#form").addEventListener("submit", e => {
  e.preventDefault();
  const phone = $("#ph").value.replace(/[\s()-]/g, "");
  let err = "";
  if ($("#nm").value.trim().length < 3) err = "mName";
  else if (!/^\+?\d{10,14}$/.test(phone)) err = "mPhone";
  else if (!$("#ok").checked) err = "mConsent";
  const msg = $("#msg");
  msg.classList.toggle("bad", !!err);
  msg.textContent = ui()[err || "mOk"];
  if (!err) e.target.reset();
});

setLang(lang);
