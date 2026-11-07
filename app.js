// ============================================================
// KALU AMHARIC BIBLE
// Complete Updated Application JavaScript
// ============================================================

// 1. EMBEDDED 66-BOOK NAME MAPPING
const BIBLE_BOOKS = [
  { am: "ኦሪት ዘፍጥረት", en: "Genesis" },
  { am: "ኦሪት ዘጸአት", en: "Exodus" },
  { am: "ኦሪት ዘሌዋውያን", en: "Leviticus" },
  { am: "ኦሪት ዘኍልቍ", en: "Numbers" },
  { am: "ኦሪት ዘዳግም", en: "Deuteronomy" },
  { am: "መጽሐፈ ኢያሱ ወልደ ነዌ", en: "Joshua" },
  { am: "መጽሐፈ መሣፍንት", en: "Judges" },
  { am: "መጽሐፈ ሩት", en: "Ruth" },
  { am: "መጽሐፈ ሳሙኤል ቀዳማዊ", en: "1 Samuel" },
  { am: "መጽሐፈ ሳሙኤል ካልዕ", en: "2 Samuel" },
  { am: "መጽሐፈ ነገሥት ቀዳማዊ።", en: "1 Kings" },
  { am: "መጽሐፈ ነገሥት ካልዕ።", en: "2 Kings" },
  { am: "መጽሐፈ ዜና መዋዕል ቀዳማዊ።", en: "1 Chronicles" },
  { am: "መጽሐፈ ዜና መዋዕል ካልዕ።", en: "2 Chronicles" },
  { am: "መጽሐፈ ዕዝራ።", en: "Ezra" },
  { am: "መጽሐፈ ነህምያ።", en: "Nehemiah" },
  { am: "መጽሐፈ አስቴር።", en: "Esther" },
  { am: "መጽሐፈ ኢዮብ።", en: "Job" },
  { am: "መዝሙረ ዳዊት", en: "Psalms" },
  { am: "መጽሐፈ ምሳሌ", en: "Proverbs" },
  { am: "መጽሐፈ መክብብ", en: "Ecclesiastes" },
  { am: "መኃልየ መኃልይ ዘሰሎሞን", en: "Song of Solomon" },
  { am: "ትንቢተ ኢሳይያስ", en: "Isaiah" },
  { am: "ትንቢተ ኤርምያስ", en: "Jeremiah" },
  { am: "ሰቆቃው ኤርምያስ", en: "Lamentations" },
  { am: "ትንቢተ ሕዝቅኤል", en: "Ezekiel" },
  { am: "ትንቢተ ዳንኤል", en: "Daniel" },
  { am: "ትንቢተ ሆሴዕ", en: "Hosea" },
  { am: "ትንቢተ ኢዮኤል", en: "Joel" },
  { am: "ትንቢተ አሞጽ", en: "Amos" },
  { am: "ትንቢተ አብድዩ", en: "Obadiah" },
  { am: "ትንቢተ ዮናስ", en: "Jonah" },
  { am: "ትንቢተ ሚክያስ", en: "Micah" },
  { am: "ትንቢተ ናሆም", en: "Nahum" },
  { am: "ትንቢተ ዕንባቆም", en: "Habakkuk" },
  { am: "ትንቢተ ሶፎንያስ", en: "Zephaniah" },
  { am: "ትንቢተ ሐጌ", en: "Haggai" },
  { am: "ትንቢተ ዘካርያስ", en: "Zechariah" },
  { am: "ትንቢተ ሚልክያስ", en: "Malachi" },
  { am: "የማቴዎስ ወንጌል", en: "Matthew" },
  { am: "የማርቆስ ወንጌል", en: "Mark" },
  { am: "የሉቃስ ወንጌል", en: "Luke" },
  { am: "የዮሐንስ ወንጌል", en: "John" },
  { am: "የሐዋርያት ሥራ", en: "Acts" },
  { am: "ወደ ሮሜ ሰዎች", en: "Romans" },
  { am: "1ኛ ወደ ቆሮንቶስ ሰዎች", en: "1 Corinthians" },
  { am: "2ኛ ወደ ቆሮንቶስ ሰዎች", en: "2 Corinthians" },
  { am: "ወደ ገላትያ ሰዎች", en: "Galatians" },
  { am: "ወደ ኤፌሶን ሰዎች", en: "Ephesians" },
  { am: "ወደ ፊልጵስዩስ ሰዎች", en: "Philippians" },
  { am: "ወደ ቆላስይስ ሰዎች", en: "Colossians" },
  { am: "1ኛ ወደ ተሰሎንቄ ሰዎች", en: "1 Thessalonians" },
  { am: "2ኛ ወደ ተሰሎንቄ ሰዎች", en: "2 Thessalonians" },
  { am: "1ኛ ወደ ጢሞቴዎስ", en: "1 Timothy" },
  { am: "2ኛ ወደ ጢሞቴዎስ", en: "2 Timothy" },
  { am: "ወደ ቲቶ", en: "Titus" },
  { am: "ወደ ፊልሞና", en: "Philemon" },
  { am: "ወደ ዕብራውያን", en: "Hebrews" },
  { am: "የያዕቆብ መልእክት", en: "James" },
  { am: "1ኛ የጴጥሮስ መልእክት", en: "1 Peter" },
  { am: "2ኛ የጴጥሮስ መልእክት", en: "2 Peter" },
  { am: "1ኛ የዮሐንስ መልእክት", en: "1 John" },
  { am: "2ኛ የዮሐንስ መልእክት", en: "2 John" },
  { am: "3ኛ የዮሐንስ መልእክት", en: "3 John" },
  { am: "የይሁዳ መልእክት", en: "Jude" },
  { am: "የዮሐንስ ራእይ", en: "Revelation" },
];

// 2. UI LOCALIZATION

const UI_STRINGS = {
  am: {
    brandSubtitle: "የአማርኛ መጽሐፍ ቅዱስ",
    brandPromise: "በሆነው ልክ ሳይሆን በፈቀደው ልክ እንወቀው",
    aboutDevBtn: "About Developer",
    booksTitle: "መጻሕፍት",
    chaptersTitle: "ምዕራፍ",
    bookSearchPlaceholder: "መጽሐፍ ፈልግ...",
    chapterBadgePrefix: "ምዕራፍ",
    searchBtnText: "🔍 ጥቅስ ወይም ቃል ፈልግ... <kbd>/</kbd>",
    globalSearchPlaceholder: "መላው መጽሐፍ ቅዱስ ውስጥ ፈልግ (ምሳሌ፦ ፍቅር፣ ብርሃን)...",
    searchMetaPrompt: "ለመፈለግ ቢያንስ 2 ፊደላት ያስገቡ",
    searchMetaInitial: "ለመፈለግ ቃል ያስገቡ",
    searchVersesFound: "ጥቅሶች ተገኝተዋል",
    favoritesTitle: "የተወደዱ ጥቅሶች (Favorites)",
    emptyFavorites: "ምንም የተወደደ ጥቅስ የለም።",
    settingsTitle: "የንባብና የገጽታ ቅንብሮች",
    dailyTag: "ዕለታዊ ጥቅስ",
    loading: "እየተጫነ ነው...",
    notFound: "ይዘት አልተገኘም።",
    copySuccess: "ጥቅሱ ተቀድቷል!",
    copyBtn: "📋 copy",
    clearHlBtn: "✕",

    // Settings Modal
    themeLabel: "የገጽታ ቀለም (Theme)",
    themeDark: "🌙 ማታ (Dark)",
    themeLight: "☀️ ቀን (Light)",
    themeSepia: "📜 ወረቀት (Sepia)",
    fontLabel: "የፊደል ቅርጽ (Typography)",
    fontSizeLabel: "መጠን: ",
    lineHeightLabel: "ክፍተት: ",
    layoutLabel: "የንባብ አቀራረብ (Reading Layout)",
    layoutVerse: "በየጥቅሱ (Verses)",
    layoutParagraph: "በተከታታይ አንቀጽ (Paragraph)",
    widthLabel: "የንባብ ስፋት (Page Width)",
    widthNarrow: "ጠባብ (650px)",
    widthMedium: "መካከለኛ (850px)",
    widthFull: "ሙሉ ስፋት",
    accentLabel: "ቀለም (Accent Color)",
    geezPunctLabel: "የግዕዝ ሁለት ነጥብ (፡) ይታይ",
    verseNumsLabel: "የጥቅስ ቁጥሮች ይታዩ",
    backupLabel: "መረጃ አያያዝ (Backup / Sync)",
    exportBtn: "📥 ቅጂ አውርድ",
    importBtn: "📤 ቅጂ አስመጣ",
    resetBtn: "🗑️ አጽዳ",

    // Tooltips & Titles
    tipBooks: "መጻሕፍት ዝርዝር",
    tipChapters: "ምዕራፍ ዝርዝር",
    tipSearch: "በመጽሐፍ ቅዱስ ፈልግ",
    tipPrev: "ቀዳሚ ምዕራፍ",
    tipNext: "ቀጣይ ምዕራፍ",
    tipFavs: "የተወደዱ",
    tipSettings: "ማስተካከያ",
    favVerseTitle: "ወዳጅ አድርግ",
    clearHlTitle: "ቀለም አጥፋ",
  },

  en: {
    brandSubtitle: "Holy Bible",
    brandPromise: "Knowing Him not by chance, but as He wills",
    aboutDevBtn: "About Developer",
    booksTitle: "Books",
    chaptersTitle: "Chapters",
    bookSearchPlaceholder: "Search book...",
    chapterBadgePrefix: "Chapter",
    searchBtnText: "🔍 Search verses or keywords... <kbd>/</kbd>",
    globalSearchPlaceholder: "Search the entire Bible (e.g. Love, Light)...",
    searchMetaPrompt: "Type at least 2 characters to search",
    searchMetaInitial: "Enter a keyword to search",
    searchVersesFound: "verses found",
    favoritesTitle: "Favorite Verses",
    emptyFavorites: "No favorite verses saved yet.",
    settingsTitle: "Reading & Display Settings",
    dailyTag: "Daily Verse",
    loading: "Loading scripture...",
    notFound: "Scripture content not found.",
    copySuccess: "Verse copied to clipboard!",
    copyBtn: "📋 Copy",
    clearHlBtn: "✕",

    // Settings Modal
    themeLabel: "Theme",
    themeDark: "🌙 Dark",
    themeLight: "☀️ Light",
    themeSepia: "📜 Sepia",
    fontLabel: "Typography",
    fontSizeLabel: "Size: ",
    lineHeightLabel: "Line Spacing: ",
    layoutLabel: "Reading Layout",
    layoutVerse: "By Verse",
    layoutParagraph: "Paragraph",
    widthLabel: "Page Width",
    widthNarrow: "Narrow (650px)",
    widthMedium: "Medium (850px)",
    widthFull: "Full Width",
    accentLabel: "Accent Color",
    geezPunctLabel: "Show Ge'ez Punctuation (፡)",
    verseNumsLabel: "Show Verse Numbers",
    backupLabel: "Data Management (Backup / Sync)",
    exportBtn: "📥 Export Backup",
    importBtn: "📤 Import Backup",
    resetBtn: "🗑️ Reset Data",

    // Tooltips & Titles
    tipBooks: "Books list",
    tipChapters: "Chapters list",
    tipSearch: "Search Bible",
    tipPrev: "Previous Chapter",
    tipNext: "Next Chapter",
    tipFavs: "Favorites",
    tipSettings: "Settings",
    favVerseTitle: "Add to Favorites",
    clearHlTitle: "Clear Highlight",
  },
};

// 3. GLOBAL VARIABLES

let bibleData = [];

let currentBookIndex = 0;
let currentChapterIndex = 0;

let currentMode = "am";

let favorites = safeReadJSON("amharic_bible_favs", []);

let highlights = safeReadJSON("amharic_bible_highlights", {});

let appSettings = safeReadJSON("amharic_bible_settings", null) || {
  theme: "theme-light",
  font: "'Noto Sans Ethiopic', 'Nyala', sans-serif",
  fontSize: "20px",
  lineHeight: "2.1",
  layout: "layout-verse",
  width: "width-medium",
  accent: "#C6A45C",
  showGeezPunct: true,
  showVerseNums: true,
};

if (appSettings.accent === "#58a6ff") {
  appSettings.accent = "#C6A45C";
}

let activeVerseElement = null;
let activeVerseData = null;

const kjvCache = {};

// 4. DOM ELEMENTS

const appContainer = document.getElementById("appContainer");

const colBooks = document.getElementById("colBooks");
const colChapters = document.getElementById("colChapters");

const sidebarBackdrop = document.getElementById("sidebarBackdrop");

const bookListEl = document.getElementById("bookList");
const chapterGridEl = document.getElementById("chapterGrid");

const scriptureContainer = document.getElementById("scriptureContainer");
const scriptureDisplay = document.getElementById("scriptureDisplay");

const activeBookTitle = document.getElementById("activeBookTitle");
const activeChapterBadge = document.getElementById("activeChapterBadge");

const bookSearchInput = document.getElementById("bookSearch");

const scrollProgressBar = document.getElementById("scrollProgressBar");

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileChapBtn = document.getElementById("mobileChapBtn");

const closeBooksBtn = document.getElementById("closeBooksBtn");
const closeChaptersBtn = document.getElementById("closeChaptersBtn");

const zenToggleBtn = document.getElementById("zenToggleBtn");

const prevChapBtn = document.getElementById("prevChapBtn");
const nextChapBtn = document.getElementById("nextChapBtn");

const openSearchBtn = document.getElementById("openSearchBtn");
const mobileSearchBtn = document.getElementById("mobileSearchBtn");

const openSettingsBtn = document.getElementById("openSettingsBtn");
const viewFavoritesBtn = document.getElementById("viewFavoritesBtn");

const searchModal = document.getElementById("searchModal");
const closeSearchBtn = document.getElementById("closeSearchBtn");

const globalSearchInput = document.getElementById("globalSearchInput");

const searchMetaInfo = document.getElementById("searchMetaInfo");
const searchResultsList = document.getElementById("searchResultsList");

const settingsModal = document.getElementById("settingsModal");
const closeSettingsBtn = document.getElementById("closeSettingsBtn");

const favoritesModal = document.getElementById("favoritesModal");
const closeFavoritesBtn = document.getElementById("closeFavoritesBtn");

const favoritesListEl = document.getElementById("favoritesList");

const versePopup = document.getElementById("versePopup");

const copyVerseBtn = document.getElementById("copyVerseBtn");
const clearHlBtn = document.getElementById("clearHlBtn");

const toast = document.getElementById("toastNotification");

const dailyVerseCard = document.getElementById("dailyVerseCard");
const dailyRef = document.getElementById("dailyRef");
const dailyText = document.getElementById("dailyText");

const closeDailyBtn = document.getElementById("closeDailyBtn");

const fontSelect = document.getElementById("fontSelect");

const fontSizeRange = document.getElementById("fontSizeRange");
const fontSizeVal = document.getElementById("fontSizeVal");

const lineHeightRange = document.getElementById("lineHeightRange");
const lineHeightVal = document.getElementById("lineHeightVal");

const showGeezPunctToggle = document.getElementById("showGeezPunctToggle");
const showVerseNumToggle = document.getElementById("showVerseNumToggle");

const exportDataBtn = document.getElementById("exportDataBtn");
const importDataInput = document.getElementById("importDataInput");

const resetDataBtn = document.getElementById("resetDataBtn");

// 5. HELPER FUNCTIONS

function safeReadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    console.warn(`Could not read saved setting: ${key}`, error);
    return fallback;
  }
}

function savedChapterIndexValid(book, index) {
  return Array.isArray(book?.chapters) && index < book.chapters.length;
}

function saveReadingPosition() {
  if (
    !bibleData.length ||
    !bibleData[currentBookIndex]?.chapters?.[currentChapterIndex]
  ) {
    return;
  }

  try {
    localStorage.setItem(
      "amharic_bible_last_read",
      JSON.stringify({
        bookIndex: currentBookIndex,
        chapterIndex: currentChapterIndex,
        book: bibleData[currentBookIndex].title,
        chapter:
          bibleData[currentBookIndex].chapters[currentChapterIndex].chapter,
        savedAt: new Date().toISOString(),
      }),
    );
  } catch (error) {
    console.warn("Reading position could not be saved.", error);
  }
}

function getEnglishBookName(amharicTitle) {
  const cleanTitle = (amharicTitle || "").trim();

  const entry = BIBLE_BOOKS.find((b) => b.am.trim() === cleanTitle);

  return entry ? entry.en : cleanTitle;
}

// 6. LOAD KJV CHAPTER

async function loadKJVChapter(enName, chapterNumber) {
  if (kjvCache[enName]) {
    return extractKJVVerses(kjvCache[enName], chapterNumber);
  }

  try {
    const response = await fetch(`./kjv/${encodeURIComponent(enName)}.json`);

    if (!response.ok) {
      throw new Error(`HTTP status: ${response.status}`);
    }

    const data = await response.json();

    kjvCache[enName] = data;

    return extractKJVVerses(data, chapterNumber);
  } catch (error) {
    console.error(`Failed to load KJV file for ${enName}:`, error);

    return [];
  }
}

function extractKJVVerses(data, chapterNumber) {
  if (!data) return [];

  const targetNum = Number(chapterNumber);

  if (Array.isArray(data.chapters)) {
    const chapter = data.chapters.find((c) => Number(c.chapter) === targetNum);

    return chapter ? chapter.verses || [] : [];
  }

  if (data[chapterNumber] || data[String(targetNum)]) {
    const chapterObject = data[chapterNumber] || data[String(targetNum)];

    if (Array.isArray(chapterObject)) {
      return chapterObject;
    }

    return Object.keys(chapterObject).map((key) => chapterObject[key]);
  }

  return [];
}

// 7. LOAD AMHARIC BIBLE
// FIXED: Corrected savedBookIndex initialization.
// IMPROVED: Better JSON loading and error handling.

async function loadBible() {
  if (scriptureDisplay) {
    scriptureDisplay.innerHTML = `<p class="loading-msg">እየተጫነ ነው... Loading KALU Bible...</p>`;
  }

  applyStoredSettings();

  try {
    const response = await fetch("./amharic_bible.json");

    if (!response.ok) {
      throw new Error(
        `Could not load amharic_bible.json. HTTP Status: ${response.status}`,
      );
    }

    const data = await response.json();

    if (!data || !Array.isArray(data.books)) {
      throw new Error(
        "Invalid Bible JSON structure. Expected an object containing a books array.",
      );
    }

    bibleData = data.books;

    if (bibleData.length === 0) {
      throw new Error("Bible JSON contains no books.");
    }

    // Validate the Bible structure.

    bibleData.forEach((book, index) => {
      if (
        !book ||
        typeof book.title !== "string" ||
        !Array.isArray(book.chapters)
      ) {
        throw new Error(`Invalid book structure at position ${index + 1}.`);
      }
    });

    console.log(`KALU Bible loaded successfully: ${bibleData.length} books.`);

    renderBooks(bibleData);

    // Restore saved reading position.

    const savedPosition = safeReadJSON("amharic_bible_last_read", null);

    // FIX: Use savedPosition.bookIndex here,
    // NOT savedBookIndex before initialization.

    const savedBookIndex =
      Number.isInteger(savedPosition?.bookIndex) &&
      savedPosition.bookIndex >= 0 &&
      savedPosition.bookIndex < bibleData.length
        ? savedPosition.bookIndex
        : 0;

    const selectedBook = bibleData[savedBookIndex];

    selectBook(savedBookIndex, false);

    const savedChapterIndex =
      Number.isInteger(savedPosition?.chapterIndex) &&
      savedPosition.chapterIndex >= 0 &&
      savedChapterIndexValid(selectedBook, savedPosition.chapterIndex)
        ? savedPosition.chapterIndex
        : 0;

    if (savedChapterIndex > 0) {
      currentChapterIndex = savedChapterIndex;

      renderChapters(selectedBook.chapters);

      await renderVerses(selectedBook.chapters[currentChapterIndex]);
    }

    initDailyVerse();
  } catch (error) {
    console.error("Critical KALU Bible loading error:", error);

    scriptureDisplay.innerHTML = `
      <div style="
        color:#ff6b6b;
        padding:30px;
        text-align:center;
      ">
        <h3>የመጽሐፍ ቅዱስ መረጃ መጫን አልተቻለም</h3>

        <p>Failed to load Amharic Bible data.</p>

        <p style="font-size:13px;">
          ${error.message}
        </p>

        <p>
          Please check that amharic_bible.json
          is in the correct folder and that Live Server is running.
        </p>
      </div>
    `;
  }
}

// 8. RENDER BOOKS

function renderBooks(books) {
  bookListEl.innerHTML = "";

  books.forEach((book, index) => {
    const li = document.createElement("li");

    const englishName = getEnglishBookName(book.title);

    li.textContent = currentMode === "kjv" ? englishName : book.title;

    li.classList.toggle("active", index === currentBookIndex);

    li.addEventListener("click", () => {
      selectBook(index);

      closeDrawers();
    });

    bookListEl.appendChild(li);
  });
}

// 9. SELECT BOOK

function selectBook(index, shouldSave = true) {
  if (!Number.isInteger(index) || index < 0 || index >= bibleData.length) {
    return;
  }

  currentBookIndex = index;

  currentChapterIndex = 0;

  document.querySelectorAll("#bookList li").forEach((li, idx) => {
    li.classList.toggle("active", idx === index);
  });

  const book = bibleData[index];

  const englishName = getEnglishBookName(book.title);

  if (currentMode === "kjv") {
    activeBookTitle.textContent = englishName;
  } else if (currentMode === "parallel") {
    activeBookTitle.textContent = `${book.title} (${englishName})`;
  } else {
    activeBookTitle.textContent = book.title;
  }

  renderChapters(book.chapters);

  renderVerses(book.chapters[0]);

  if (shouldSave) {
    saveReadingPosition();
  }
}

// 10. RENDER CHAPTERS

function renderChapters(chapters) {
  chapterGridEl.innerHTML = "";

  chapters.forEach((chapter, index) => {
    const chip = document.createElement("div");

    chip.className = `chapter-chip ${
      index === currentChapterIndex ? "active" : ""
    }`;

    chip.textContent = chapter.chapter;

    chip.addEventListener("click", () => {
      currentChapterIndex = index;

      document.querySelectorAll(".chapter-chip").forEach((element, i) => {
        element.classList.toggle("active", i === index);
      });

      renderVerses(chapter);

      saveReadingPosition();

      closeDrawers();
    });

    chapterGridEl.appendChild(chip);
  });
}

// 11. RENDER SCRIPTURE VERSES

async function renderVerses(chapterObj) {
  if (!chapterObj) return;

  const lang = currentMode === "kjv" ? "en" : "am";

  const dict = UI_STRINGS[lang];

  activeChapterBadge.textContent = `${dict.chapterBadgePrefix} ${chapterObj.chapter}`;

  hideFloatingPalette();

  const bookName = bibleData[currentBookIndex].title;

  const englishBookName = getEnglishBookName(bookName);

  const chapterNumber = chapterObj.chapter;

  if (currentMode === "kjv") {
    activeBookTitle.textContent = englishBookName;
  } else if (currentMode === "parallel") {
    activeBookTitle.textContent = `${bookName} (${englishBookName})`;
  } else {
    activeBookTitle.textContent = bookName;
  }

  let kjvVerses = [];

  if (currentMode === "kjv" || currentMode === "parallel") {
    scriptureDisplay.innerHTML = `<p class="loading-msg">${dict.loading}</p>`;

    kjvVerses = await loadKJVChapter(englishBookName, chapterNumber);
  }

  scriptureDisplay.innerHTML = "";

  const amVerses = chapterObj.verses || [];

  const totalVerses = Math.max(amVerses.length, kjvVerses.length);

  if (totalVerses === 0) {
    scriptureDisplay.innerHTML = `
      <p style="
        color:var(--text-muted);
        text-align:center;
      ">
        ${dict.notFound}
      </p>
    `;

    return;
  }

  for (let index = 0; index < totalVerses; index++) {
    const verseNumber = index + 1;

    const rawAm = amVerses[index] || "";

    const kjvEntry = kjvVerses[index];

    const rawKjv =
      typeof kjvEntry === "object" ? kjvEntry?.text || "" : kjvEntry || "";

    const verseTextAm = appSettings.showGeezPunct
      ? rawAm
      : rawAm.replace(/፡/g, " ");

    const verseTextKjv = rawKjv;

    const verseKey = `${bookName}-${chapterNumber}-${verseNumber}`;

    const isFavorite = favorites.some((f) => f.key === verseKey);

    const highlightColor = highlights[verseKey] || "";

    const verseDiv = document.createElement("div");

    verseDiv.className = `verse-item ${verseNumber === 1 ? "drop-cap" : ""}`;

    if (highlightColor) {
      verseDiv.setAttribute("data-highlight", highlightColor);
    }

    // AMHARIC MODE

    if (currentMode === "am") {
      verseDiv.innerHTML = `
        <span class="verse-num">${verseNumber}</span>

        <span class="verse-text">${escapeHTML(verseTextAm)}</span>

        <span class="fav-icon ${isFavorite ? "active" : ""}" title="ወዳጅ አድርግ">
          ${isFavorite ? "❤️" : "♡"}
        </span>
      `;
    }

    // KJV MODE
    else if (currentMode === "kjv") {
      verseDiv.innerHTML = `
        <span class="verse-num">${verseNumber}</span>

        <span class="verse-text"
          style="font-family:Georgia,serif;">
          ${escapeHTML(verseTextKjv || "—")}
        </span>

        <span class="fav-icon ${isFavorite ? "active" : ""}" title="Favorite">
          ${isFavorite ? "❤️" : "♡"}
        </span>
      `;
    }

    // PARALLEL MODE
    else if (currentMode === "parallel") {
      verseDiv.classList.add("parallel-row");

      verseDiv.innerHTML = `
        <span class="verse-num">${verseNumber}</span>

        <div class="parallel-cols">

          <div class="verse-text am">
            ${escapeHTML(verseTextAm || "—")}
          </div>

          <div class="verse-text en"
            style="font-family:Georgia,serif;color:var(--text-muted);">
            ${escapeHTML(verseTextKjv || "—")}
          </div>

        </div>

        <span class="fav-icon ${isFavorite ? "active" : ""}">
          ${isFavorite ? "❤️" : "♡"}
        </span>
      `;
    }

    // FLOATING PALETTE

    verseDiv.addEventListener("click", (event) => {
      if (event.target.classList.contains("fav-icon")) {
        return;
      }

      let copyPayload = verseTextAm;

      let displayBook = bookName;

      if (currentMode === "kjv") {
        copyPayload = verseTextKjv;

        displayBook = englishBookName;
      } else if (currentMode === "parallel") {
        copyPayload = `${verseTextAm}\n\n${verseTextKjv}`;

        displayBook = `${bookName} / ${englishBookName}`;
      }

      showFloatingPalette(verseDiv, {
        key: verseKey,

        book: displayBook,

        chapter: chapterNumber,

        verse: verseNumber,

        text: copyPayload,
      });
    });

    // FAVORITE BUTTON

    const favoriteButton = verseDiv.querySelector(".fav-icon");

    if (favoriteButton) {
      favoriteButton.addEventListener("click", (event) => {
        event.stopPropagation();

        toggleFavorite(
          verseKey,
          bookName,
          chapterNumber,
          verseNumber,
          verseTextAm || verseTextKjv,
          favoriteButton,
        );
      });
    }

    scriptureDisplay.appendChild(verseDiv);
  }

  scriptureContainer.scrollTop = 0;

  updateScrollProgress();

  saveReadingPosition();
}

// Safe HTML text rendering helper

function escapeHTML(value) {
  return String(value ?? "").replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[char],
  );
}

// 12. FLOATING PALETTE

function showFloatingPalette(element, data) {
  activeVerseElement = element;

  activeVerseData = data;

  const rect = element.getBoundingClientRect();

  versePopup.style.top = `${Math.min(
    rect.bottom + 6,
    window.innerHeight - 60,
  )}px`;

  versePopup.style.left = `${Math.max(
    12,
    Math.min(rect.left + 10, window.innerWidth - 300),
  )}px`;

  versePopup.classList.add("show");
}

function hideFloatingPalette() {
  versePopup.classList.remove("show");

  activeVerseElement = null;

  activeVerseData = null;
}

// COPY VERSE

copyVerseBtn.addEventListener("click", async () => {
  if (!activeVerseData) return;

  const citation = `“${activeVerseData.text}”\n— ${activeVerseData.book} ${activeVerseData.chapter}:${activeVerseData.verse}`;

  try {
    await navigator.clipboard.writeText(citation);

    const lang = currentMode === "kjv" ? "en" : "am";

    showToast(UI_STRINGS[lang].copySuccess);

    hideFloatingPalette();
  } catch (error) {
    console.error("Copy failed:", error);

    showToast("Unable to copy verse.");
  }
});

// HIGHLIGHTS

document.querySelectorAll(".hl-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!activeVerseElement || !activeVerseData) {
      return;
    }

    const color = btn.dataset.hl;

    activeVerseElement.setAttribute("data-highlight", color);

    highlights[activeVerseData.key] = color;

    localStorage.setItem(
      "amharic_bible_highlights",
      JSON.stringify(highlights),
    );

    hideFloatingPalette();
  });
});

// CLEAR HIGHLIGHT

clearHlBtn.addEventListener("click", () => {
  if (!activeVerseElement || !activeVerseData) {
    return;
  }

  activeVerseElement.removeAttribute("data-highlight");

  delete highlights[activeVerseData.key];

  localStorage.setItem("amharic_bible_highlights", JSON.stringify(highlights));

  hideFloatingPalette();
});

// 13. FULL TEXT SEARCH

globalSearchInput.addEventListener("input", (event) => {
  const query = event.target.value.trim();

  const lang = currentMode === "kjv" ? "en" : "am";

  const dict = UI_STRINGS[lang];

  if (query.length < 2) {
    searchMetaInfo.textContent = dict.searchMetaPrompt;

    searchResultsList.innerHTML = "";

    return;
  }

  const results = [];

  bibleData.forEach((book) => {
    book.chapters.forEach((chapter) => {
      chapter.verses.forEach((verseText, verseIndex) => {
        if (verseText && verseText.includes(query)) {
          results.push({
            book: book.title,

            chapter: chapter.chapter,

            verse: verseIndex + 1,

            text: verseText,
          });
        }
      });
    });
  });

  searchMetaInfo.textContent = `${results.length} ${dict.searchVersesFound}`;

  searchResultsList.innerHTML = "";

  results.slice(0, 100).forEach((item) => {
    const card = document.createElement("div");

    card.className = "search-hit-card";

    const displayBook =
      currentMode === "kjv" ? getEnglishBookName(item.book) : item.book;

    card.innerHTML = `
      <div class="search-hit-meta">
        ${escapeHTML(displayBook)}
        ${item.chapter}:${item.verse}
      </div>

      <div class="search-hit-text">
        ${escapeHTML(item.text)}
      </div>
    `;

    card.addEventListener("click", () => {
      jumpToScripture(item.book, item.chapter);

      searchModal.classList.remove("open");
    });

    searchResultsList.appendChild(card);
  });
});

// JUMP TO SCRIPTURE

function jumpToScripture(bookTitle, chapterNumber) {
  const bookIndex = bibleData.findIndex((book) => book.title === bookTitle);

  if (bookIndex === -1) return;

  selectBook(bookIndex);

  const chapterIndex = bibleData[bookIndex].chapters.findIndex(
    (chapter) => String(chapter.chapter) === String(chapterNumber),
  );

  if (chapterIndex > -1) {
    currentChapterIndex = chapterIndex;

    renderChapters(bibleData[bookIndex].chapters);

    renderVerses(bibleData[bookIndex].chapters[chapterIndex]);
  }
}

// 14. CHAPTER NAVIGATION

function nextChapter() {
  if (!bibleData.length) return;

  const book = bibleData[currentBookIndex];

  if (currentChapterIndex < book.chapters.length - 1) {
    currentChapterIndex++;

    renderChapters(book.chapters);

    renderVerses(book.chapters[currentChapterIndex]);
  } else if (currentBookIndex < bibleData.length - 1) {
    selectBook(currentBookIndex + 1);
  }
}

function prevChapter() {
  if (!bibleData.length) return;

  if (currentChapterIndex > 0) {
    currentChapterIndex--;

    renderChapters(bibleData[currentBookIndex].chapters);

    renderVerses(bibleData[currentBookIndex].chapters[currentChapterIndex]);
  } else if (currentBookIndex > 0) {
    currentBookIndex--;

    const previousBook = bibleData[currentBookIndex];

    selectBook(currentBookIndex, false);

    currentChapterIndex = previousBook.chapters.length - 1;

    renderChapters(previousBook.chapters);

    renderVerses(previousBook.chapters[currentChapterIndex]);
  }
}

prevChapBtn.addEventListener("click", prevChapter);

nextChapBtn.addEventListener("click", nextChapter);

// 15. KEYBOARD SHORTCUTS

window.addEventListener("keydown", (event) => {
  if (
    event.target.tagName === "INPUT" ||
    event.target.tagName === "SELECT" ||
    event.target.tagName === "TEXTAREA"
  ) {
    if (event.key === "Escape") {
      event.target.blur();
    }

    return;
  }

  if (event.key === "ArrowRight") {
    nextChapter();
  }

  if (event.key === "ArrowLeft") {
    prevChapter();
  }

  if (event.key === "/" || (event.ctrlKey && event.key === "f")) {
    event.preventDefault();

    searchModal.classList.add("open");

    globalSearchInput.focus();
  }

  if (event.key.toLowerCase() === "z") {
    appContainer.classList.toggle("zen-mode");
  }

  if (event.key === "Escape") {
    searchModal.classList.remove("open");

    settingsModal.classList.remove("open");

    favoritesModal.classList.remove("open");

    closeDrawers();

    hideFloatingPalette();
  }
});

// 16. MOBILE DRAWERS

mobileMenuBtn.addEventListener("click", () => {
  colBooks.classList.add("open");

  colChapters.classList.remove("open");

  sidebarBackdrop.classList.add("active");
});

mobileChapBtn.addEventListener("click", () => {
  colChapters.classList.add("open");

  colBooks.classList.remove("open");

  sidebarBackdrop.classList.add("active");
});

function closeDrawers() {
  colBooks.classList.remove("open");

  colChapters.classList.remove("open");

  sidebarBackdrop.classList.remove("active");
}

closeBooksBtn.addEventListener("click", closeDrawers);

closeChaptersBtn.addEventListener("click", closeDrawers);

sidebarBackdrop.addEventListener("click", closeDrawers);

zenToggleBtn.addEventListener("click", () => {
  appContainer.classList.toggle("zen-mode");
});

// 17. SCROLL PROGRESS

scriptureContainer.addEventListener("scroll", updateScrollProgress);

function updateScrollProgress() {
  const total =
    scriptureContainer.scrollHeight - scriptureContainer.clientHeight;

  const percentage =
    total > 0 ? (scriptureContainer.scrollTop / total) * 100 : 0;

  scrollProgressBar.style.width = `${percentage}%`;
}

// 18. FAVORITES

function toggleFavorite(key, book, chapter, verse, text, iconElement) {
  const index = favorites.findIndex((favorite) => favorite.key === key);

  if (index > -1) {
    favorites.splice(index, 1);

    iconElement.textContent = "♡";

    iconElement.classList.remove("active");
  } else {
    favorites.push({
      key,

      book,

      chapter,

      verse,

      text,
    });

    iconElement.textContent = "❤️";

    iconElement.classList.add("active");
  }

  localStorage.setItem("amharic_bible_favs", JSON.stringify(favorites));
}

viewFavoritesBtn.addEventListener("click", () => {
  favoritesListEl.innerHTML = "";

  const lang = currentMode === "kjv" ? "en" : "am";

  const dict = UI_STRINGS[lang];

  if (favorites.length === 0) {
    favoritesListEl.innerHTML = `
      <p style="
        color:var(--text-muted);
        text-align:center;
      ">
        ${dict.emptyFavorites}
      </p>
    `;
  } else {
    favorites.forEach((favorite) => {
      const card = document.createElement("div");

      card.className = "search-hit-card";

      const displayBook =
        currentMode === "kjv"
          ? getEnglishBookName(favorite.book)
          : favorite.book;

      card.innerHTML = `
        <div class="search-hit-meta">
          ${escapeHTML(displayBook)}
          ${favorite.chapter}:${favorite.verse}
        </div>

        <div class="search-hit-text">
          ${escapeHTML(favorite.text)}
        </div>
      `;

      card.addEventListener("click", () => {
        jumpToScripture(favorite.book, favorite.chapter);

        favoritesModal.classList.remove("open");
      });

      favoritesListEl.appendChild(card);
    });
  }

  favoritesModal.classList.add("open");
});

// 19. SETTINGS

function saveSettings() {
  localStorage.setItem("amharic_bible_settings", JSON.stringify(appSettings));
}

function applyStoredSettings() {
  document.body.className = appSettings.theme;

  document.querySelectorAll(".theme-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.theme === appSettings.theme);
  });

  document.documentElement.style.setProperty("--app-font", appSettings.font);

  fontSelect.value = appSettings.font;

  document.documentElement.style.setProperty(
    "--font-size",
    appSettings.fontSize,
  );

  fontSizeRange.value = parseInt(appSettings.fontSize);

  fontSizeVal.textContent = appSettings.fontSize;

  document.documentElement.style.setProperty(
    "--line-height",
    appSettings.lineHeight,
  );

  lineHeightRange.value = appSettings.lineHeight;

  lineHeightVal.textContent = appSettings.lineHeight;

  scriptureDisplay.className = `scripture-pane ${appSettings.width} ${appSettings.layout}`;

  if (!appSettings.showVerseNums) {
    scriptureDisplay.classList.add("hide-verse-nums");
  }

  document.querySelectorAll(".layout-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.layout === appSettings.layout);
  });

  document.querySelectorAll(".width-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.width === appSettings.width);
  });

  document.documentElement.style.setProperty("--accent", appSettings.accent);

  document.documentElement.style.setProperty(
    "--accent-glow",
    `${appSettings.accent}25`,
  );

  document.querySelectorAll(".color-dot").forEach((dot) => {
    dot.classList.toggle("active", dot.dataset.color === appSettings.accent);
  });

  showGeezPunctToggle.checked = appSettings.showGeezPunct;

  showVerseNumToggle.checked = appSettings.showVerseNums;
}

// THEME HANDLERS

document.querySelectorAll(".theme-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    appSettings.theme = btn.dataset.theme;

    saveSettings();

    applyStoredSettings();
  });
});

// FONT HANDLERS

fontSelect.addEventListener("change", (event) => {
  appSettings.font = event.target.value;

  saveSettings();

  applyStoredSettings();
});

fontSizeRange.addEventListener("input", (event) => {
  appSettings.fontSize = `${event.target.value}px`;

  saveSettings();

  applyStoredSettings();
});

lineHeightRange.addEventListener("input", (event) => {
  appSettings.lineHeight = event.target.value;

  saveSettings();

  applyStoredSettings();
});

// LAYOUT HANDLERS

document.querySelectorAll(".layout-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    appSettings.layout = btn.dataset.layout;

    saveSettings();

    applyStoredSettings();
  });
});

document.querySelectorAll(".width-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    appSettings.width = btn.dataset.width;

    saveSettings();

    applyStoredSettings();
  });
});

// ACCENT COLORS

document.querySelectorAll(".color-dot").forEach((dot) => {
  dot.addEventListener("click", () => {
    appSettings.accent = dot.dataset.color;

    saveSettings();

    applyStoredSettings();
  });
});

// CHECKBOX HANDLERS

showGeezPunctToggle.addEventListener("change", (event) => {
  appSettings.showGeezPunct = event.target.checked;

  saveSettings();

  if (bibleData.length) {
    renderVerses(bibleData[currentBookIndex].chapters[currentChapterIndex]);
  }
});

showVerseNumToggle.addEventListener("change", (event) => {
  appSettings.showVerseNums = event.target.checked;

  saveSettings();

  applyStoredSettings();
});

// 20. BACKUP AND RESTORE

exportDataBtn.addEventListener("click", () => {
  const bundle = {
    favorites,

    highlights,

    settings: appSettings,

    exportedAt: new Date().toISOString(),
  };

  const blob = new Blob([JSON.stringify(bundle, null, 2)], {
    type: "application/json",
  });

  const url = URL.createObjectURL(blob);

  const anchor = document.createElement("a");

  anchor.href = url;

  anchor.download = `amharic_bible_backup_${new Date().toISOString().slice(0, 10)}.json`;

  anchor.click();

  URL.revokeObjectURL(url);
});

importDataInput.addEventListener("change", (event) => {
  const file = event.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = (loadEvent) => {
    try {
      const data = JSON.parse(loadEvent.target.result);

      if (data.favorites) {
        favorites = data.favorites;
      }

      if (data.highlights) {
        highlights = data.highlights;
      }

      if (data.settings) {
        appSettings = data.settings;
      }

      localStorage.setItem("amharic_bible_favs", JSON.stringify(favorites));

      localStorage.setItem(
        "amharic_bible_highlights",
        JSON.stringify(highlights),
      );

      saveSettings();

      applyStoredSettings();

      if (bibleData.length) {
        renderVerses(bibleData[currentBookIndex].chapters[currentChapterIndex]);
      }

      showToast("Backup restored successfully!");
    } catch (error) {
      console.error("Restore error:", error);

      alert("Invalid backup file.");
    }
  };

  reader.readAsText(file);
});

resetDataBtn.addEventListener("click", () => {
  if (confirm("Reset all favorites, highlights, and custom settings?")) {
    [
      "amharic_bible_favs",
      "amharic_bible_highlights",
      "amharic_bible_settings",
      "amharic_bible_last_read",
    ].forEach((key) => {
      localStorage.removeItem(key);
    });

    favorites = [];

    highlights = {};

    location.reload();
  }
});

// 21. DAILY VERSE

function initDailyVerse() {
  const allVerses = [];

  bibleData.forEach((book) => {
    (book.chapters || []).forEach((chapter) => {
      (chapter.verses || []).forEach((text, index) => {
        if (typeof text === "string" && text.trim()) {
          allVerses.push({
            book: book.title,

            chapter: chapter.chapter,

            verse: index + 1,

            text,
          });
        }
      });
    });
  });

  if (allVerses.length === 0) {
    dailyVerseCard.hidden = true;

    return;
  }

  const previousVerse = localStorage.getItem("qalu_previous_daily_verse");

  let randomIndex = Math.floor(Math.random() * allVerses.length);

  let selectedVerse = allVerses[randomIndex];

  function getVerseKey(verse) {
    return `${verse.book}|${verse.chapter}|${verse.verse}`;
  }

  if (allVerses.length > 1 && getVerseKey(selectedVerse) === previousVerse) {
    randomIndex = (randomIndex + 1) % allVerses.length;

    selectedVerse = allVerses[randomIndex];
  }

  localStorage.setItem("qalu_previous_daily_verse", getVerseKey(selectedVerse));

  const displayBook =
    currentMode === "kjv"
      ? getEnglishBookName(selectedVerse.book)
      : selectedVerse.book;

  dailyRef.textContent = `${displayBook} ${selectedVerse.chapter}:${selectedVerse.verse}`;

  dailyText.textContent = `“${selectedVerse.text}”`;

  dailyVerseCard.dataset.reference = `${selectedVerse.book}|${selectedVerse.chapter}|${selectedVerse.verse}`;
}

closeDailyBtn.addEventListener("click", () => {
  dailyVerseCard.remove();
});

dailyVerseCard.addEventListener("dblclick", () => {
  const reference = dailyVerseCard.dataset.reference;

  if (!reference) return;

  const [book, chapter] = reference.split("|");

  jumpToScripture(book, Number(chapter));
});

// 22. TOAST NOTIFICATION

function showToast(message) {
  toast.textContent = message;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

// 23. BOOK SEARCH

bookSearchInput.addEventListener("input", (event) => {
  const query = event.target.value.trim().toLowerCase();

  const items = bookListEl.querySelectorAll("li");

  items.forEach((item) => {
    item.style.display = item.textContent.toLowerCase().includes(query)
      ? "block"
      : "none";
  });
});

// 24. MODAL CONTROLS

function openSearch() {
  searchModal.classList.add("open");

  globalSearchInput.focus();
}

openSearchBtn.addEventListener("click", openSearch);

mobileSearchBtn.addEventListener("click", openSearch);

closeSearchBtn.addEventListener("click", () => {
  searchModal.classList.remove("open");
});

openSettingsBtn.addEventListener("click", () => {
  settingsModal.classList.add("open");
});

closeSettingsBtn.addEventListener("click", () => {
  settingsModal.classList.remove("open");
});

closeFavoritesBtn.addEventListener("click", () => {
  favoritesModal.classList.remove("open");
});

// 25. CLOSE FLOATING PALETTE

document.addEventListener("click", (event) => {
  if (
    !event.target.closest(".verse-item") &&
    !event.target.closest("#versePopup")
  ) {
    hideFloatingPalette();
  }
});

// 26. READING MODE SWITCHING
// Amharic / KJV / Parallel

document.querySelectorAll(".mode-btn").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    document.querySelectorAll(".mode-btn").forEach((button) => {
      button.classList.remove("active");
    });

    const target = event.currentTarget;

    target.classList.add("active");

    currentMode = target.getAttribute("data-mode");

    updateUILanguage();

    if (bibleData[currentBookIndex]?.chapters?.[currentChapterIndex]) {
      renderVerses(bibleData[currentBookIndex].chapters[currentChapterIndex]);
    }
  });
});

// 27. UPDATE UI LANGUAGE

function updateUILanguage() {
  const isEn = currentMode === "kjv";
  const lang = isEn ? "en" : "am";
  const dict = UI_STRINGS[lang];

  // Set html document lang attribute
  document.documentElement.lang = isEn ? "en" : "am";

  // 1. Brand Strip
  const brandSubtitle = document.querySelector(".brand-copy span");
  if (brandSubtitle) brandSubtitle.textContent = dict.brandSubtitle;

  const brandPromise = document.querySelector(".brand-promise");
  if (brandPromise) {
    brandPromise.innerHTML = `<span class="brand-dot"></span> ${dict.brandPromise}`;
  }

  // 2. Sidebars
  const booksTitle = document.querySelector("#colBooks .panel-header h2");
  if (booksTitle) {
    booksTitle.innerHTML = `<span class="side-heading-icon" aria-hidden="true">✦</span> ${dict.booksTitle}`;
  }

  const chaptersTitle = document.querySelector("#colChapters .panel-header h3");
  if (chaptersTitle) chaptersTitle.textContent = dict.chaptersTitle;

  if (bookSearchInput) bookSearchInput.placeholder = dict.bookSearchPlaceholder;

  // 3. Header Action Buttons & Tooltips
  if (mobileMenuBtn) mobileMenuBtn.title = dict.tipBooks;
  if (mobileChapBtn) mobileChapBtn.title = dict.tipChapters;
  if (openSearchBtn) {
    openSearchBtn.innerHTML = dict.searchBtnText;
    openSearchBtn.title = dict.tipSearch;
  }
  if (mobileSearchBtn) mobileSearchBtn.title = dict.tipSearch;
  if (prevChapBtn) prevChapBtn.title = dict.tipPrev;
  if (nextChapBtn) nextChapBtn.title = dict.tipNext;
  if (viewFavoritesBtn) viewFavoritesBtn.title = dict.tipFavs;
  if (openSettingsBtn) openSettingsBtn.title = dict.tipSettings;

  // 4. Chapter Badge & Active Title
  if (bibleData[currentBookIndex]?.chapters?.[currentChapterIndex]) {
    const activeChap =
      bibleData[currentBookIndex].chapters[currentChapterIndex].chapter;
    activeChapterBadge.textContent = `${dict.chapterBadgePrefix} ${activeChap}`;
  }

  // 5. Daily Verse Card
  const dailyTag = document.querySelector(".daily-tag");
  if (dailyTag) dailyTag.textContent = dict.dailyTag;

  // 6. Search Modal
  if (globalSearchInput)
    globalSearchInput.placeholder = dict.globalSearchPlaceholder;
  if (
    searchMetaInfo &&
    (!globalSearchInput || globalSearchInput.value.trim().length < 2)
  ) {
    searchMetaInfo.textContent = dict.searchMetaInitial;
  }

  // 7. Favorites Modal
  const favoritesTitle = document.querySelector(
    "#favoritesModal .modal-header h3",
  );
  if (favoritesTitle) favoritesTitle.textContent = dict.favoritesTitle;

  // 8. Settings Modal
  const settingsTitle = document.querySelector(
    "#settingsModal .modal-header h3",
  );
  if (settingsTitle) settingsTitle.textContent = dict.settingsTitle;

  const settingLabels = document.querySelectorAll(
    "#settingsModal .setting-item > label:not(.toggle-checkbox)",
  );
  if (settingLabels.length >= 7) {
    settingLabels[0].textContent = dict.themeLabel;
    settingLabels[1].textContent = dict.fontLabel;
    settingLabels[2].textContent = dict.layoutLabel;
    settingLabels[3].textContent = dict.widthLabel;
    settingLabels[4].textContent = dict.accentLabel;
    settingLabels[5].textContent = dict.backupLabel;
  }

  // Theme buttons
  const themeBtns = document.querySelectorAll(".theme-btn");
  if (themeBtns.length >= 3) {
    themeBtns[0].textContent = dict.themeDark;
    themeBtns[1].textContent = dict.themeLight;
    themeBtns[2].textContent = dict.themeSepia;
  }

  // Layout buttons
  const layoutBtns = document.querySelectorAll(".layout-btn");
  if (layoutBtns.length >= 2) {
    layoutBtns[0].textContent = dict.layoutVerse;
    layoutBtns[1].textContent = dict.layoutParagraph;
  }

  // Width buttons
  const widthBtns = document.querySelectorAll(".width-btn");
  if (widthBtns.length >= 3) {
    widthBtns[0].textContent = dict.widthNarrow;
    widthBtns[1].textContent = dict.widthMedium;
    widthBtns[2].textContent = dict.widthFull;
  }

  // Checkboxes
  const geezLabelSpan =
    showGeezPunctToggle?.parentElement?.querySelector("span");
  if (geezLabelSpan) geezLabelSpan.textContent = dict.geezPunctLabel;

  const verseNumSpan = showVerseNumToggle?.parentElement?.querySelector("span");
  if (verseNumSpan) verseNumSpan.textContent = dict.verseNumsLabel;

  // Backup buttons
  if (exportDataBtn) exportDataBtn.textContent = dict.exportBtn;
  if (resetDataBtn) resetDataBtn.textContent = dict.resetBtn;
  const importLabel = document.querySelector(".file-input-label");
  if (importLabel) {
    const inputChild = importLabel.querySelector("input");
    importLabel.childNodes[0].textContent = dict.importBtn + " ";
    if (inputChild) importLabel.appendChild(inputChild);
  }

  // 9. Floating Verse Palette
  if (copyVerseBtn) copyVerseBtn.innerHTML = dict.copyBtn;
  if (clearHlBtn) clearHlBtn.title = dict.clearHlTitle;

  // 10. Re-render Book List with localized names
  if (bibleData.length > 0) {
    renderBooks(bibleData);
  }
}

// 28. ABOUT DEVELOPER MODAL

const aboutDeveloperBtn = document.getElementById("aboutDeveloperBtn");

const aboutDeveloperModal = document.getElementById("aboutDeveloperModal");

const closeAboutDeveloperBtn = document.getElementById(
  "closeAboutDeveloperBtn",
);

if (aboutDeveloperBtn && aboutDeveloperModal && closeAboutDeveloperBtn) {
  const closeAboutDeveloper = () => {
    aboutDeveloperModal.classList.remove("open");
  };

  aboutDeveloperBtn.addEventListener("click", () => {
    aboutDeveloperModal.classList.add("open");

    closeAboutDeveloperBtn.focus();
  });

  closeAboutDeveloperBtn.addEventListener("click", closeAboutDeveloper);

  aboutDeveloperModal.addEventListener("click", (event) => {
    if (event.target === aboutDeveloperModal) {
      closeAboutDeveloper();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAboutDeveloper();
    }
  });
}

// 29. TELEGRAM WEB APP SUPPORT

if (window.Telegram && window.Telegram.WebApp) {
  const telegramApp = window.Telegram.WebApp;

  telegramApp.ready();

  telegramApp.expand();
}

// 30. START APPLICATION

console.log("KALU Bible application starting...");

loadBible();
