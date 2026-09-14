const pages = [
    {
      type: "cover",
      title: "2026년 추석",
      mainTitle: "성묘 예배",
      buttonText: "예배 시작하기"
    },
  
    {
      type: "common",
      title: "사도신경",
      content: [
        "나는 전능하신 아버지 하나님, 천지의 창조주를 믿습니다.",
        "나는 그의 유일하신 아들, 우리 주 예수 그리스도를 믿습니다.",
        "그는 성령으로 잉태되어 동정녀 마리아에게서 나시고,",
        "본디오 빌라도에게 고난을 받아 십자가에 못 박혀 죽으시고,",
        "장사된 지 사흘만에 죽은 자 가운데서 다시 살아나셨으며,",
        "하늘에 오르시어 전능하신 아버지 하나님 우편에 앉아 계시다가,",
        "거기로 부터 살아있는 자와 죽은 자를 심판하러 오십니다.",
        "나는 성령을 믿으며, 거룩한 공교회와 성도의 교제와",
        "죄를 용서 받는 것과 몸의 부활과 영생을 믿습니다. 아멘."
      ]
    },
  
    {
      type: "scripture",
      number: "01",
      reference: "시편 90:1",
      translation: "",
      content: [
        "주여 주는 대대에 우리의 거처가 되셨나이다."
      ],
      meaning: "우리 가족의 뿌리, 모든 세대의 근원은 하나님이십니다"
    },
  
    {
      type: "scripture",
      number: "02",
      reference: "출애굽기 20:12",
      translation: "",
      content: [
        "네 부모를 공경하라 그리하면 네 하나님 여호와가 네게 준 땅에서 네 생명이 길리라."
      ],
      meaning: "앞서 살아간 선대를 기억합니다"
    },
  
    {
      type: "scripture",
      number: "03",
      reference: "시편 90:12",
      translation: "현대어성경",
      content: [
        "우리의 일생이 얼마나 짧은지 헤아릴 수 있게 하셔서",
        "우리가 지혜로운 마음을 얻게 하소서."
      ],
      meaning: "우리에게 주어진 시간을 어떻게 살아갈 것인지 돌아봅니다"
    },
  
    {
      type: "scripture",
      number: "04",
      reference: "시편 126:5~6",
      translation: "현대어성경",
      content: [
        "눈물로 씨를 뿌리는 자는 기쁨으로 거두리라.",
        "울면서 씨를 가지고 나가 뿌리는 자는 단을 가지고 기쁨으로 돌아오리라."
      ],
      meaning: "한 해 동안의 수고에는 맺어진 풍성한 결실과 그 기쁨이 있습니다"
    },
  
    {
      type: "scripture",
      number: "05",
      reference: "신명기 16:15",
      translation: "현대어성경",
      content: [
        "여러분은 이 명절을 지키면서 여러분의 하나님 여호와께서",
        "여러분의 농사와 여러분이 하는 모든 일에 복 주신 것을",
        "감사하고 기뻐하십시오."
      ],
      meaning: "하나님 주신 풍성한 수확에 감사하십시오"
    },
  
    {
      type: "scripture",
      number: "06",
      reference: "시편 133:1, 3",
      translation: "우리말성경",
      content: [
        "형제가 함께 한마음으로 사는 것이 얼마나 선하고 얼마나 보기 좋은가.",
        "헤르몬의 이슬이 시온 산에 내리는 것 같구나.",
        "거기서 여호와께서 복을 내리시니 곧 영원한 생명이라."
      ],
      meaning: "가족이 한 자리에 모여 화목한 모습을 하나님께서 축복하십니다"
    },
  
    {
      type: "scripture",
      number: "07",
      reference: "골로새서 3:13",
      translation: "우리말성경",
      content: [
        "누가 누구에게 불평거리가 있더라도 서로 용납하고",
        "서로 용서해 주십시오.",
        "주께서 여러분을 용서하신 것같이 여러분도 그렇게 하십시오."
      ],
      meaning: "가족 사이의 서운함과 갈등을 내려 놓으십시오"
    },
  
    {
      type: "scripture",
      number: "08",
      reference: "잠언 17:1",
      translation: "우리말성경",
      content: [
        "마른 빵을 먹더라도 평안하고 조용한 것이",
        "온갖 맛있는 음식이 가득하고도 다투며 사는 것보다 낫습니다."
      ],
      meaning: "가족간 화목과 사랑이 진정한 명절의 의미입니다"
    },
  
    {
      type: "scripture",
      number: "09",
      reference: "고린도전서 13:13",
      translation: "우리말성경",
      content: [
        "그러므로 믿음, 소망, 사랑, 이 세 가지는 언제까지나 남아 있을 것인데",
        "이 가운데 가장 위대한 것은 사랑입니다."
      ],
      meaning: "가족에게 가장 깊이 남아 있어야 할 것은 사랑입니다"
    },
  
    {
      type: "scripture",
      number: "10",
      reference: "시편 103:17",
      translation: "현대어성경",
      content: [
        "한결같이 따스하게 아껴 주시는 여호와의 사랑 영원하니",
        "주님을 모시고 사는 이에게 그 사랑 영원토록 보여주시리라.",
        "그 자식의 자식에까지 주님의 어지심을 보이시리라."
      ],
      meaning: "그리하면 하나님께서 복을 주십니다"
    },
  
    {
      type: "common",
      title: "주기도문",
      content: [
        "하늘에 계신 우리 아버지,",
        "아버지의 이름을 거룩하게 하시며 아버지의 나라가 오게 하시며,",
        "아버지의 뜻이 하늘에서와 같이 땅에서도 이루어지게 하소서.",
        "오늘 우리에게 일용할 양식을 주시고,",
        "우리가 우리에게 잘못한 사람을 용서하여 준 것같이",
        "우리 죄를 용서하여 주시고,",
        "우리를 시험에 빠지지 않게 하시고 악에서 구하소서.",
        "나라와 권능과 영광이 영원히 아버지의 것입니다. 아멘."
      ]
    },
  
    {
      type: "ending",
      title: "예배를 마칩니다",
      content: [
        "함께한 가족들과 인사를 나누고,",
        "먼저 떠난 가족을 마음에 기억하며",
        "잠시 둘러보는 시간을 갖습니다."
      ],
      finalMessage: "평안하고 건강한 추석 보내세요."
    }
  ];

let currentPage = 0;

let touchStartX = 0;
let touchEndX = 0;

const swipeThreshold = 50;

const pageContainer =
  document.getElementById("page-container");

const pageIndicator =
  document.getElementById("page-indicator");

const prevButton =
  document.getElementById("prev-button");

const nextButton =
  document.getElementById("next-button");


function renderPage() {
  const page = pages[currentPage];

  pageContainer.innerHTML = "";

  pageContainer.className =
  `page-container page-${page.type}`;

  pageIndicator.textContent =
    `${currentPage + 1} / ${pages.length}`;

  updateNavigationButtons();

  if (page.type === "cover") {
    renderCoverPage(page);
  }

  if (page.type === "common") {
    renderCommonPage(page);
  }

  if (page.type === "scripture") {
    renderScripturePage(page);
  }

  if (page.type === "ending") {
    renderEndingPage(page);
  }

  connectPageButtons();
}


function renderCoverPage(page) {
  pageContainer.innerHTML = `
    <div class="cover-page">

      <p class="cover-year">
        ${page.title}
      </p>

      <h1 class="cover-title">
        ${page.mainTitle}
      </h1>

      <div class="cover-divider"></div>

      <button
        id="start-button"
        class="start-button"
        type="button"
      >
        ${page.buttonText}
        <span aria-hidden="true">›</span>
      </button>

    </div>
  `;
}


function renderCommonPage(page) {
  const paragraphs = page.content
    .map((line) => {
      return `
        <p class="common-line">
          ${line}
        </p>
      `;
    })
    .join("");

  pageContainer.innerHTML = `
    <div class="common-page">

      <h1 class="page-title">
        ${page.title}
      </h1>

      <div class="common-content">
        ${paragraphs}
      </div>

    </div>
  `;
}

function renderScripturePage(page) {
  const scriptureLines = page.content
    .map((line) => {
      return `
        <p class="scripture-line">
          ${line}
        </p>
      `;
    })
    .join("");

  const translation = page.translation
    ? `
      <p class="scripture-translation">
        ${page.translation}
      </p>
    `
    : "";

  pageContainer.innerHTML = `
    <div class="scripture-page">

      <p class="scripture-label">
        성경말씀
      </p>

      <p class="scripture-number">
        ${page.number}
      </p>

      <h1 class="scripture-reference">
        ${page.reference}
      </h1>

      ${translation}

      <div class="scripture-content">
        ${scriptureLines}
      </div>

      <div class="scripture-divider"></div>

      <p class="scripture-meaning">
        ${page.meaning}
      </p>

    </div>
  `;
}

function renderEndingPage(page) {
  const endingLines = page.content
    .map((line) => {
      return `
        <p class="ending-line">
          ${line}
        </p>
      `;
    })
    .join("");

  pageContainer.innerHTML = `
    <div class="ending-page">

      <h1 class="ending-title">
        ${page.title}
      </h1>

      <div class="ending-divider"></div>

      <div class="ending-content">
        ${endingLines}
      </div>

      <p class="ending-message">
        ${page.finalMessage}
      </p>

    </div>
  `;
}


function updateNavigationButtons() {
  prevButton.disabled =
    currentPage === 0;

  nextButton.disabled =
    currentPage === pages.length - 1;
}


function goToNextPage() {
  if (currentPage >= pages.length - 1) {
    return;
  }

  currentPage += 1;

  renderPage();
}


function goToPrevPage() {
  if (currentPage <= 0) {
    return;
  }

  currentPage -= 1;

  renderPage();
}


function handleSwipe() {
  const swipeDistance =
    touchEndX - touchStartX;

  if (Math.abs(swipeDistance) < swipeThreshold) {
    return;
  }

  if (swipeDistance < 0) {
    goToNextPage();
  }

  if (swipeDistance > 0) {
    goToPrevPage();
  }
}


function connectPageButtons() {
  const startButton =
    document.getElementById("start-button");

  if (startButton) {
    startButton.addEventListener(
      "click",
      goToNextPage
    );
  }
}


function connectSwipeEvents() {
  pageContainer.addEventListener(
    "touchstart",
    (event) => {
      touchStartX =
        event.changedTouches[0].screenX;
    },
    {
      passive: true
    }
  );

  pageContainer.addEventListener(
    "touchend",
    (event) => {
      touchEndX =
        event.changedTouches[0].screenX;

      handleSwipe();
    },
    {
      passive: true
    }
  );
}


function initApp() {
  prevButton.addEventListener(
    "click",
    goToPrevPage
  );

  nextButton.addEventListener(
    "click",
    goToNextPage
  );

  connectSwipeEvents();

  renderPage();
}


if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    initApp
  );
} else {
  initApp();
}