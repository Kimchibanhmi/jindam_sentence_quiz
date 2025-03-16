// sentence.js에서 문장 데이터 불러오기
import { sentenceData } from './sentence.js';

// 게임 상태 변수
let currentSentence = 1;
let currentStage = 1;
let timerInterval;
let timeLeft = 20;
let placedWords = [];
let isTimerExpired = false;
let gameStarted = false;
let currentDay = 1; // 현재 일차
const SENTENCES_PER_DAY = 10; // 하루당 문장 수
const TOTAL_DAYS = 10; // 총 일수
let allWordCards = []; // 현재 문장의 모든 단어 카드를 저장하는 배열
let completedSentences = []; // 완료한 문장들을 저장하는 배열
let completedDays = []; // 완료한 Day들을 저장하는 배열
let lastDayUnlockTime = null; // 마지막으로 Day가 언락된 시간
let completedSentencesByDay = {}; // Day별 완성 문장을 저장하는 객체

// DOM 요소
const startPopup = document.getElementById('start-popup');
const startGameBtn = document.getElementById('start-game-btn');
const dayCompletePopup = document.getElementById('day-complete-popup');
const completedDayElement = document.getElementById('completed-day');
const completedSentencesList = document.getElementById(
  'completed-sentences-list'
);
const nextDayMessage = document.getElementById('next-day-message');
const closeDayPopupBtn = document.getElementById('close-day-popup-btn');
const gameContainer = document.querySelector('.container');
const dayInfo = document.getElementById('current-day');
const currentSentenceElement = document.getElementById('current-sentence');
const timerElement = document.getElementById('time-left');
const translationElement = document.getElementById('current-question');
const answerArea = document.getElementById('answer-area');
const wordCardsContainer = document.getElementById('word-cards');
const checkBtn = document.getElementById('check-btn');
const nextBtn = document.getElementById('next-btn');
const resultMessage = document.getElementById('result');
const fullSentenceElement = document.getElementById('full-sentence');
const fullSentenceArea = document.getElementById('full-sentence-area');
const retryDayBtn = document.getElementById('retry-day-btn');

// 시작 화면 초기화
function initStartScreen() {
  gameContainer.classList.add('hidden');
  startPopup.classList.remove('hidden');

  // 로컬 스토리지에서 게임 상태 복원
  loadGameState();

  startGameBtn.addEventListener('click', startGame);
}

// 게임 시작
function startGame() {
  startPopup.classList.add('hidden');
  gameContainer.classList.remove('hidden');
  gameStarted = true;

  // 게임 상태 다시 로드하여 완료 팝업 확인
  loadGameState();

  initGame();
}

// 게임 초기화
function initGame() {
  // 현재 일차 표시
  dayInfo.textContent = currentDay;

  loadSentence();

  checkBtn.removeEventListener('click', checkAnswer);
  nextBtn.removeEventListener('click', nextStage);
  checkBtn.addEventListener('click', checkAnswer);
  nextBtn.addEventListener('click', nextStage);
}

// 게임 상태 저장
function saveGameState() {
  const gameState = {
    completedDays: completedDays,
    currentDay: currentDay,
    lastDayUnlockTime: lastDayUnlockTime,
    completedSentencesByDay: completedSentencesByDay, // 추가: Day별 완성 문장 저장
  };

  localStorage.setItem('hskGameState', JSON.stringify(gameState));
}

// 게임 상태 로드
function loadGameState() {
  try {
    const savedState = localStorage.getItem('hskGameState');

    if (savedState) {
      const gameState = JSON.parse(savedState);
      completedDays = gameState.completedDays || [];
      lastDayUnlockTime = gameState.lastDayUnlockTime || null;
      completedSentencesByDay = gameState.completedSentencesByDay || {}; // 추가: Day별 완성 문장 로드

      // 진행 가능한 가장 낮은 Day 확인
      const nextIncompleteDay = getNextIncompleteDay();
      currentDay = nextIncompleteDay;

      // 새 Day가 열렸는지 확인
      checkNewDayUnlock();

      // 게임 시작 후 Day 1이 완료되었다면 완료 팝업 표시
      if (gameStarted && completedDays.includes(1)) {
        // Day 1 완료 메시지 표시를 위한 임시 데이터
        loadCompletedDaySentences(1);

        // Day 1 완료 팝업 표시
        setTimeout(() => {
          currentDay = 1; // 팝업 내용을 Day 1로 설정
          showDayCompletePopup();
          currentDay = nextIncompleteDay; // 다시 실제 진행할 Day로 복원
        }, 500);
      }
    }
  } catch (error) {
    console.error('게임 상태 로드 중 오류:', error);
    // 오류 발생 시 기본 상태 사용
    completedDays = [];
    currentDay = 1;
    lastDayUnlockTime = null;
    completedSentencesByDay = {};
  }
}

// 다음 미완료 Day 가져오기
function getNextIncompleteDay() {
  for (let day = 1; day <= TOTAL_DAYS; day++) {
    if (!completedDays.includes(day)) {
      return day;
    }
  }
  return 1; // 모든 Day가 완료되었을 경우 Day 1로 돌아감
}

// 새로운 Day 언락 체크
function checkNewDayUnlock() {
  const now = new Date();

  // 마지막 언락 시간이 있고, 현재 시간이 마지막 언락 다음 날 자정 이후인지 확인
  if (lastDayUnlockTime) {
    const lastUnlock = new Date(lastDayUnlockTime);
    const nextMidnight = new Date(lastUnlock);
    nextMidnight.setDate(nextMidnight.getDate() + 1);
    nextMidnight.setHours(0, 0, 0, 0);

    if (now >= nextMidnight && completedDays.length < TOTAL_DAYS) {
      // 다음 Day 언락
      lastDayUnlockTime = now.toISOString();
      saveGameState();

      alert(`Day ${completedDays.length + 2}가 오픈되었습니다!`);
    }
  } else if (completedDays.length === 0) {
    // 처음 시작할 때는 Day 1이 바로 언락됨
    lastDayUnlockTime = now.toISOString();
    saveGameState();
  }
}

// 현재 일차에 해당하는 문장 가져오기
function getSentencesForCurrentDay() {
  const startIndex = (currentDay - 1) * SENTENCES_PER_DAY;
  return sentenceData.slice(startIndex, startIndex + SENTENCES_PER_DAY);
}

// 문장 로드
function loadSentence() {
  currentStage = 1;
  isTimerExpired = false;
  currentSentenceElement.textContent = currentSentence;

  const dailySentences = getSentencesForCurrentDay();

  // 현재 일차에 문장이 충분한지 확인
  if (dailySentences.length === 0 || currentSentence > dailySentences.length) {
    resultMessage.textContent = '오늘의 문장이 없습니다.';
    resultMessage.className = 'result incorrect';
    return;
  }

  const currentSentenceData = dailySentences[currentSentence - 1];

  // 번역 설정
  translationElement.textContent = currentSentenceData.translation;

  // 완성된 문장 영역 숨기기
  fullSentenceArea.classList.add('hidden');

  // 모든 단어 카드 생성 (마지막 스테이지의 카드를 사용)
  const lastStage =
    currentSentenceData.stages[currentSentenceData.stages.length - 1];
  createAllWordCards(lastStage.cards);

  loadStage();
}

// 모든 단어 카드 생성 (문장 시작 시 한 번만 호출)
function createAllWordCards(cards) {
  // 기존 카드 저장 배열 초기화
  allWordCards = [];

  try {
    // 단어 카드 생성 및 섞기
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5);

    shuffledCards.forEach((word) => {
      const wordCard = document.createElement('div');
      wordCard.className = 'word-card';
      wordCard.dataset.word = word; // 단어 데이터 저장

      try {
        // 중국어 문자와 병음 분리
        const [character, pinyin] = word.split('/');

        // 중국어와 병음 요소 추가
        const characterElement = document.createElement('div');
        characterElement.className = 'character';
        characterElement.textContent = character;

        const pinyinElement = document.createElement('div');
        pinyinElement.className = 'pinyin';
        pinyinElement.textContent = pinyin;

        wordCard.appendChild(characterElement);
        wordCard.appendChild(pinyinElement);

        // 단어 카드 클릭 이벤트
        wordCard.addEventListener('click', function () {
          moveCard(this);
        });

        // 배열에 저장
        allWordCards.push(wordCard);
      } catch (error) {
        console.error('단어 카드 생성 중 오류:', word, error);
      }
    });
  } catch (error) {
    console.error('createAllWordCards 함수 실행 중 오류:', error);
  }
}

// 카드 이동 함수
function moveCard(card) {
  if (wordCardsContainer.contains(card)) {
    // 단어 카드에서 정답 영역으로 이동
    wordCardsContainer.removeChild(card);
    answerArea.appendChild(card);
    placedWords.push(card.dataset.word);
  } else {
    // 정답 영역에서 단어 카드 영역으로 이동
    answerArea.removeChild(card);
    wordCardsContainer.appendChild(card);

    // placedWords 배열에서 해당 단어 제거
    const index = placedWords.indexOf(card.dataset.word);
    if (index > -1) {
      placedWords.splice(index, 1);
    }
  }
}

// 스테이지 로드
function loadStage() {
  clearInterval(timerInterval);
  answerArea.innerHTML = '';
  wordCardsContainer.innerHTML = '';
  resultMessage.textContent = '';
  placedWords = [];

  const dailySentences = getSentencesForCurrentDay();

  // 현재 일차에 문장이 충분한지 확인
  if (dailySentences.length === 0 || currentSentence > dailySentences.length) {
    return;
  }

  const currentSentenceData = dailySentences[currentSentence - 1];

  // 현재 스테이지가 유효한지 확인
  if (currentStage > currentSentenceData.stages.length) {
    currentStage = 1;
  }

  // 현재 스테이지에 맞는 번역 표시
  const currentStageObj = currentSentenceData.stages[currentStage - 1];

  // stageTranslation이 있으면 해당 번역을 표시, 없으면 전체 번역 표시
  if (currentStageObj.stageTranslation) {
    translationElement.textContent = currentStageObj.stageTranslation;
  } else {
    translationElement.textContent = currentSentenceData.translation;
  }

  // 모든 단어 카드 표시
  displayWordCards();

  // 타이머 시작
  startTimer();

  // 버튼 상태 설정
  checkBtn.disabled = false;
  nextBtn.disabled = true;
}

// 단어 카드 표시 (스테이지마다 호출)
function displayWordCards() {
  // 정답 영역과 단어 카드 영역 초기화
  answerArea.innerHTML = '';
  wordCardsContainer.innerHTML = '';
  placedWords = [];

  // 저장된 모든 단어 카드를 표시
  allWordCards.forEach((card) => {
    // 복제본 생성 (이벤트 리스너도 복제됨)
    const clonedCard = card.cloneNode(true);
    clonedCard.dataset.word = card.dataset.word;

    // 클릭 이벤트 다시 추가
    clonedCard.addEventListener('click', function () {
      moveCard(this);
    });

    wordCardsContainer.appendChild(clonedCard);
  });
}

// 타이머 시작
function startTimer() {
  timeLeft = 20;
  timerElement.textContent = timeLeft;

  // 기존 타이머가 있다면 정리
  if (timerInterval) {
    clearInterval(timerInterval);
  }

  timerInterval = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      isTimerExpired = true;
      checkAnswer();
    }
  }, 1000);
}

// 첫 단계로 재설정
function resetToFirstStage() {
  currentStage = 1;
  isTimerExpired = false;
  loadStage();
}

// 정답 확인
function checkAnswer() {
  // 타이머 정지
  clearInterval(timerInterval);
  timerInterval = null;

  try {
    const dailySentences = getSentencesForCurrentDay();
    // 현재 일차에 문장이 유효한지 확인
    if (
      dailySentences.length === 0 ||
      currentSentence > dailySentences.length
    ) {
      return;
    }

    const currentSentenceData = dailySentences[currentSentence - 1];

    // 현재 스테이지가 유효한지 확인
    if (currentStage > currentSentenceData.stages.length) {
      currentStage = 1;
      return;
    }

    const correctStage = currentSentenceData.stages[currentStage - 1];
    const correctWords = correctStage.answer;

    let isCorrect = true;

    // 정답과 사용자 입력 비교
    if (placedWords.length !== correctWords.length) {
      isCorrect = false;
    } else {
      for (let i = 0; i < placedWords.length; i++) {
        if (placedWords[i] !== correctWords[i]) {
          isCorrect = false;
          break;
        }
      }
    }

    // 타이머 종료 또는 오답인 경우
    if (isTimerExpired) {
      resultMessage.textContent =
        '시간이 초과되었습니다! 현재 문장의 처음부터 다시 시작합니다.';
      resultMessage.className = 'result incorrect';

      // 시각적 피드백을 위해 카드 영역을 잠시 흔들기
      answerArea.classList.add('shake');
      wordCardsContainer.classList.add('shake');

      // 1초 후 첫 단계로 재설정
      setTimeout(() => {
        answerArea.classList.remove('shake');
        wordCardsContainer.classList.remove('shake');
        resetToFirstStage();
      }, 1000);
      return;
    }

    if (isCorrect) {
      resultMessage.textContent = '정답입니다!';
      resultMessage.className = 'result correct';

      // 마지막 스테이지 확인
      if (currentStage === currentSentenceData.stages.length) {
        checkBtn.disabled = true;
        nextBtn.disabled = false;

        // 완성된 문장 표시
        try {
          const completedSentence = correctWords
            .map((word) => word.split('/')[0])
            .join('');
          fullSentenceElement.textContent = completedSentence;
          fullSentenceArea.classList.remove('hidden');

          // 완성한 문장 저장
          const sentenceInfo = {
            chinese: completedSentence,
            korean: currentSentenceData.translation,
          };

          // 현재 Day의 완성 문장 배열 초기화 (필요시)
          if (!completedSentencesByDay[currentDay]) {
            completedSentencesByDay[currentDay] = [];
          }

          // 중복 방지를 위해 확인 후 추가
          const dayCompletedSentences = completedSentencesByDay[currentDay];
          const exists = dayCompletedSentences.some(
            (item) => item.chinese === sentenceInfo.chinese
          );
          if (!exists) {
            dayCompletedSentences.push(sentenceInfo);
            completedSentencesByDay[currentDay] = dayCompletedSentences;
            saveGameState(); // 상태 저장
          }
        } catch (error) {
          console.error('완성된 문장 생성 중 오류:', error);
          fullSentenceElement.textContent = '문장을 표시할 수 없습니다.';
          fullSentenceArea.classList.remove('hidden');
        }
      } else {
        // 다음 스테이지 버튼 활성화
        checkBtn.disabled = true;
        nextBtn.disabled = false;
      }
    } else {
      resultMessage.textContent = '오답입니다! 다시 시도하세요.';
      resultMessage.className = 'result incorrect';

      // 타이머 재설정
      startTimer();
    }
  } catch (error) {
    console.error('checkAnswer 함수 실행 중 오류:', error);
    resultMessage.textContent = '오류가 발생했습니다. 다시 시도해주세요.';
    resultMessage.className = 'result incorrect';
  }
}

// Day 완료 팝업 표시
function showDayCompletePopup() {
  completedDayElement.textContent = currentDay;
  completedSentencesList.innerHTML = '';

  // Day가 완료되었을 때 모든 문장 자동 저장 (필요시)
  if (
    completedDays.includes(currentDay) &&
    (!completedSentencesByDay[currentDay] ||
      completedSentencesByDay[currentDay].length < SENTENCES_PER_DAY)
  ) {
    saveAllDaySentences(currentDay);
  }

  // 현재 Day의 완성 문장 목록 표시
  const daySentences = completedSentencesByDay[currentDay] || [];

  console.log(`Day ${currentDay} 완료 팝업 표시:`, daySentences);

  if (daySentences.length === 0) {
    // 문장이 없으면 자동으로 생성
    saveAllDaySentences(currentDay);
    console.log(
      `Day ${currentDay} 문장 자동 생성 후:`,
      completedSentencesByDay[currentDay]
    );
  }

  // 다시 가져오기
  const updatedSentences = completedSentencesByDay[currentDay] || [];

  updatedSentences.forEach((sentence, index) => {
    const sentenceItem = document.createElement('div');
    sentenceItem.className = 'completed-sentence-item';

    const chineseText = document.createElement('div');
    chineseText.className = 'chinese-text';
    chineseText.textContent = `${index + 1}. ${sentence.chinese}`;

    const koreanText = document.createElement('div');
    koreanText.className = 'korean-text';
    koreanText.textContent = sentence.korean;

    sentenceItem.appendChild(chineseText);
    sentenceItem.appendChild(koreanText);
    completedSentencesList.appendChild(sentenceItem);
  });

  // Day 완료 처리
  if (!completedDays.includes(currentDay)) {
    completedDays.push(currentDay);
    saveGameState();
  }

  // 모든 Day 완료 여부 확인
  const allDaysCompleted =
    completedDays.length === TOTAL_DAYS &&
    completedDays.every((day) => day >= 1 && day <= TOTAL_DAYS);

  // 다음 Day 메시지 또는 전체 완료 메시지
  if (allDaysCompleted) {
    nextDayMessage.textContent =
      '10일동안 100문장을 모두 완벽하게 공부했습니다. 축하합니다!';
    nextDayMessage.style.fontSize = '20px';
    nextDayMessage.style.color = '#e74c3c';
  } else if (currentDay < TOTAL_DAYS) {
    // Day 2는 반드시 다음날 자정 이후에만 오픈
    if (currentDay === 1) {
      const now = new Date();
      const lastUnlock = lastDayUnlockTime
        ? new Date(lastDayUnlockTime)
        : new Date();
      const nextMidnight = new Date(lastUnlock);
      nextMidnight.setDate(nextMidnight.getDate() + 1);
      nextMidnight.setHours(0, 0, 0, 0);

      if (now < nextMidnight) {
        const timeUntilMidnight = nextMidnight - now;
        const hoursLeft = Math.floor(timeUntilMidnight / (1000 * 60 * 60));
        const minutesLeft = Math.floor(
          (timeUntilMidnight % (1000 * 60 * 60)) / (1000 * 60)
        );

        nextDayMessage.textContent = `Day 2는 자정부터 오픈됩니다. (남은 시간: ${hoursLeft}시간 ${minutesLeft}분)`;
      } else {
        nextDayMessage.textContent = `Day 2가 오픈되었습니다!`;
      }
    } else {
      nextDayMessage.textContent = `내일 Day ${currentDay + 1}에서 만나요~`;
    }
  } else {
    nextDayMessage.textContent = '축하합니다! Day 10 학습을 완료했습니다!';
  }

  // 팝업 표시
  dayCompletePopup.classList.remove('hidden');

  // 다시 풀기 버튼 항상 표시
  retryDayBtn.style.display = 'inline-block';
}

// Day의 모든 문장 자동 저장 함수
function saveAllDaySentences(day) {
  const startIndex = (day - 1) * SENTENCES_PER_DAY;
  const daySentences = sentenceData.slice(
    startIndex,
    startIndex + SENTENCES_PER_DAY
  );

  // completedSentencesByDay 초기화
  if (!completedSentencesByDay[day]) {
    completedSentencesByDay[day] = [];
  }

  // 모든 문장 추가
  daySentences.forEach((sentence) => {
    const lastStage = sentence.stages[sentence.stages.length - 1];
    const completedSentence = lastStage.answer
      .map((word) => word.split('/')[0])
      .join('');

    const sentenceInfo = {
      chinese: completedSentence,
      korean: sentence.translation,
    };

    // 중복 방지
    const exists = completedSentencesByDay[day].some(
      (item) => item.chinese === sentenceInfo.chinese
    );

    if (!exists) {
      completedSentencesByDay[day].push(sentenceInfo);
    }
  });

  saveGameState();
  console.log(
    `Day ${day}의 모든 문장 자동 저장 완료:`,
    completedSentencesByDay[day]
  );
}

// 다음 스테이지로 이동
function nextStage() {
  try {
    const dailySentences = getSentencesForCurrentDay();
    // 현재 일차에 문장이 유효한지 확인
    if (
      dailySentences.length === 0 ||
      currentSentence > dailySentences.length
    ) {
      console.log(
        '유효하지 않은 문장 인덱스:',
        currentSentence,
        '가능한 문장 수:',
        dailySentences.length
      );
      return;
    }

    const currentSentenceData = dailySentences[currentSentence - 1];

    // 마지막 스테이지 확인
    if (currentStage === currentSentenceData.stages.length) {
      // 마지막 문장인지 확인
      if (currentSentence === SENTENCES_PER_DAY) {
        // Day 완료 팝업 표시
        showDayCompletePopup();

        // 마지막 일차인지 확인
        if (currentDay === TOTAL_DAYS) {
          // 모든 일차와 문장 완료
          resultMessage.textContent = '축하합니다! 모든 학습을 완료했습니다!';
          resultMessage.className = 'result correct';
          return;
        } else {
          // 완료 팝업 확인 버튼 클릭 시 다음 Day로 이동
          closeDayPopupBtn.onclick = function () {
            // 다음 Day 진행 여부 결정
            const nextDay = getNextIncompleteDay();

            // 현재 시간 체크
            const now = new Date();
            const lastUnlock = lastDayUnlockTime
              ? new Date(lastDayUnlockTime)
              : new Date();
            const nextMidnight = new Date(lastUnlock);
            nextMidnight.setDate(nextMidnight.getDate() + 1);
            nextMidnight.setHours(0, 0, 0, 0);

            // Day 3 이상은 자정 이후에만 오픈
            if (
              nextDay >= 3 &&
              now < nextMidnight &&
              nextDay > completedDays.length + 1
            ) {
              alert(`Day ${nextDay}는 자정 이후에 오픈됩니다.`);
              // 완료한 Day 중 가장 높은 Day로 이동
              currentDay =
                completedDays.length > 0 ? Math.max(...completedDays) : 1;
            } else {
              currentDay = nextDay;
            }

            currentSentence = 1;
            dayInfo.textContent = currentDay;

            // 완성한 문장 초기화
            completedSentencesByDay[currentDay] = [];

            // 팝업 닫기
            dayCompletePopup.classList.add('hidden');

            // 다음 Day 문장 로드
            loadSentence();
          };
          return;
        }
      } else {
        // 다음 문장으로 이동
        currentSentence++;
        console.log('다음 문장으로 이동:', currentSentence);
      }

      loadSentence();
    } else {
      // 다음 스테이지로 이동
      currentStage++;
      console.log('다음 스테이지로 이동:', currentStage);
      loadStage();
    }
  } catch (error) {
    console.error('nextStage 함수 실행 중 오류:', error);
    resultMessage.textContent = '오류가 발생했습니다. 다시 시도해주세요.';
    resultMessage.className = 'result incorrect';
  }
}

// 완료된 Day의 문장들을 로드하는 함수 추가
function loadCompletedDaySentences(day) {
  completedSentences = [];
  const startIndex = (day - 1) * SENTENCES_PER_DAY;
  const daySentences = sentenceData.slice(
    startIndex,
    startIndex + SENTENCES_PER_DAY
  );

  // 해당 Day의 문장들을 completedSentences에 추가
  daySentences.forEach((sentence) => {
    const lastStage = sentence.stages[sentence.stages.length - 1];
    const completedSentence = lastStage.answer
      .map((word) => word.split('/')[0])
      .join('');

    completedSentences.push({
      chinese: completedSentence,
      korean: sentence.translation,
    });
  });
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM이 로드되었습니다.');
  // sentence.js가 로드되었는지 확인
  if (typeof sentenceData !== 'undefined' && Array.isArray(sentenceData)) {
    console.log('문장 데이터가 로드되었습니다. 문장 수:', sentenceData.length);

    // 이벤트 리스너 등록
    closeDayPopupBtn.addEventListener('click', function () {
      dayCompletePopup.classList.add('hidden');
    });

    // 다시 풀기 버튼 이벤트 리스너
    retryDayBtn.addEventListener('click', function () {
      // Day 선택 모달 표시 (완료한 Day가 여러 개일 경우)
      if (completedDays.length > 1) {
        showDaySelectionModal();
      } else {
        // 현재 Day만 다시 풀기
        currentDay = completedDays[0] || 1;
        currentSentence = 1;
        currentStage = 1;

        // 팝업 닫기
        dayCompletePopup.classList.add('hidden');

        // 다시 시작
        dayInfo.textContent = currentDay;
        loadSentence();
      }
    });

    initStartScreen();
  } else {
    console.error('문장 데이터를 로드할 수 없습니다.');
    alert(
      '문장 데이터를 로드할 수 없습니다. 페이지를 새로고침하거나 나중에 다시 시도해주세요.'
    );
  }
});

// Day 선택 모달 표시
function showDaySelectionModal() {
  // 기존 모달이 있으면 제거
  const existingModal = document.getElementById('day-selection-modal');
  if (existingModal) {
    document.body.removeChild(existingModal);
  }

  // 새 모달 생성
  const modal = document.createElement('div');
  modal.id = 'day-selection-modal';
  modal.className = 'popup';

  let modalContent = `
    <div class="popup-content">
      <h2>다시 풀 Day 선택</h2>
      <p>완료한 Day 중에서 다시 풀고 싶은 Day를 선택하세요.</p>
      <div class="day-selection-list">
  `;

  // 완료한 Day 목록 생성
  completedDays.forEach((day) => {
    modalContent += `<div class="day-selection-item" data-day="${day}">Day ${day}</div>`;
  });

  modalContent += `
      </div>
      <button id="close-selection-modal-btn">취소</button>
    </div>
  `;

  modal.innerHTML = modalContent;
  document.body.appendChild(modal);

  // 이벤트 리스너 등록
  document.querySelectorAll('.day-selection-item').forEach((item) => {
    item.addEventListener('click', function () {
      const selectedDay = parseInt(this.getAttribute('data-day'));

      // 선택한 Day로 설정
      currentDay = selectedDay;
      currentSentence = 1;
      currentStage = 1;

      // 모달 닫기
      document.body.removeChild(modal);
      dayCompletePopup.classList.add('hidden');

      // 선택한 Day 시작
      dayInfo.textContent = currentDay;
      loadSentence();
    });
  });

  // 취소 버튼
  document
    .getElementById('close-selection-modal-btn')
    .addEventListener('click', function () {
      document.body.removeChild(modal);
    });
}
