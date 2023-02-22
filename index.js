var html = `<div class="container-roulette" id = "content-roulette">
<div class="roulette">
  <!-- fill color -->
  <div class="fill fill_1"></div>
  <div class="fill fill_2"></div>
  <div class="fill fill_3"></div>
  <div class="fill fill_4"></div>
  <!-- <div class="fill fill_5"></div> -->
  <!-- line -->
  <div class="line line_1"></div>
  <!-- <div class="line line_2"></div> -->
  <div class="line line_3"></div>
  <!-- <div class="line line_4"></div> -->
  <!-- content -->
  <div class="content content_1">1</div>
  <div class="content content_2">2</div>
  <div class="content content_3">3</div>
  <div class="content content_4">4</div>

</div>
<div id="triangle-up"></div>
<button class="trigger" id = "spin">Start</button>
</div>`;

const formTemplate2 =
  '<div id="template_form"></div><div class="dvPrvw">' +
  '<table width="100%" border="0" cellspacing="0" cellpadding="0" class="tbPrvw" >' +
  '<tr>' +
  '<td width="15%" class="clbl"><label for="country_code">Country Code</label></td>' +
  '<td class="cinp" ><div id="country_code"></div></td>' +
  '</tr>' +
  '<tr>' +
  '<td class="clbl"><label for="description">Description</label></td>' +
  '<td colspan="3" class="cinp"><div id="description"></div></td>' +
  '</tr>' +
  '</table>' +
  '</div>';

webix.ready(function () {
  webix.ui({
    rows: [
      {
        id: 'header',
        cols: [
          {
            view: 'toolbar',
            id: 'headerToolbar',
            padding: 3,
            elements: [
              {
                id: 'sidebarMenuIcon',
                view: 'icon',
                icon: 'mdi mdi-menu',
              },
              { view: 'label', label: 'Roulette', id: 'sidebarLabel' },
              // {},
              // { view: 'icon', icon: 'mdi mdi-comment', badge: 4 },
              // { view: 'icon', icon: 'mdi mdi-bell', badge: 10 },
            ],
          },
        ],
      },
      {
        id: 'rouletteLayout',
        borderless: false,
        height: 450,
        cols: [
          {
            view: 'scrollview',
            borderless: true,
            id: 'betNoti',
            body: {
              id: 'betNotiContent',
              view: 'layout',
              width: 300,
              rows: [
                {
                  height: 20,
                  borderless: true,
                  view: 'label',
                  label: `Player Crom has joined the room`,
                  readonly: true,
                },
                { height: 10 },
              ],
            },
          },
          {
            id: 'roulette',
            view: 'template',
            template: html,
            borderless: true,
          },
          {},
        ],
      },
      { height: 30 },
      {
        id: 'betLayout',
        cols: [
          { width: 10 },
          {
            view: 'layout',
            rows: [
              {
                view: 'label',
                label: '1',
                id: 'bet-1',
              },
              {
                view: 'text',
                label: 'Amount',
                labelWidth: 80,
                id: 'bet1Amount',
                pattern: { mask: '##########', allow: /[0-9]/g },
              },
              {
                cols: [
                  {
                    view: 'button',
                    id: 'bet1Button10Percent',
                    value: '10%',
                    on: {
                      onItemClick: () => {
                        fill10Percent(1);
                      },
                    },
                  },
                  {
                    view: 'button',
                    id: 'bet1Button25Percent',
                    value: '25%',
                    on: {
                      onItemClick: () => {
                        fill25Percent(1);
                      },
                    },
                  },
                  {
                    view: 'button',
                    id: 'bet1Button50Percent',
                    value: '50%',
                    on: {
                      onItemClick: () => {
                        fill50Percent(1);
                      },
                    },
                  },
                  {
                    view: 'button',
                    id: 'bet1Button100Percent',
                    value: '100%',
                    on: {
                      onItemClick: () => {
                        fill100Percent(1);
                      },
                    },
                  },
                ],
              },
              {
                view: 'button',
                id: 'bet1Button',
                value: 'Bet',
                css: 'webix_primary',
                on: {
                  onItemClick: async () => {
                    let amount = Number($$('bet1Amount').getValue());
                    if (!(await validateBetAmount(amount))) return;
                    notiBet(amount, 1);
                    setAssetAfterBet(amount);
                    storeBetHistory('Crom', '1', amount);
                  },
                },
              },
            ],
          },
          { width: 20 },
          {
            view: 'layout',
            rows: [
              {
                view: 'label',
                label: '2',
                id: 'bet-2',
              },
              {
                view: 'text',
                label: 'Amount',
                labelWidth: 80,
                id: 'bet2Amount',
                pattern: { mask: '##########', allow: /[0-9]/g },
              },
              {
                cols: [
                  {
                    view: 'button',
                    id: 'bet2Button10Percent',
                    value: '10%',
                    on: {
                      onItemClick: () => {
                        fill10Percent(2);
                      },
                    },
                  },
                  {
                    view: 'button',
                    id: 'bet2Button25Percent',
                    value: '25%',
                    on: {
                      onItemClick: () => {
                        fill25Percent(2);
                      },
                    },
                  },
                  {
                    view: 'button',
                    id: 'bet2Button50Percent',
                    value: '50%',
                    on: {
                      onItemClick: () => {
                        fill50Percent(2);
                      },
                    },
                  },
                  {
                    view: 'button',
                    id: 'be21Button100Percent',
                    value: '100%',
                    on: {
                      onItemClick: () => {
                        fill100Percent(2);
                      },
                    },
                  },
                ],
              },
              {
                view: 'button',
                value: 'Bet',
                id: 'bet2Button',
                css: 'webix_primary',
                on: {
                  onItemClick: async () => {
                    let amount = Number($$('bet2Amount').getValue());
                    if (!(await validateBetAmount(amount))) return;

                    notiBet(amount, 2);

                    setAssetAfterBet(amount);
                    storeBetHistory('Crom', '2', amount);
                  },
                },
              },
            ],
          },
          { width: 20 },
          {
            view: 'layout',
            rows: [
              {
                view: 'label',
                label: '3',
                id: 'bet-3',
              },
              {
                view: 'text',
                label: 'Amount',
                id: 'bet3Amount',
                labelWidth: 80,
                pattern: { mask: '##########', allow: /[0-9]/g },
              },
              {
                cols: [
                  {
                    view: 'button',
                    id: 'bet3Button10Percent',
                    value: '10%',
                    on: {
                      onItemClick: () => {
                        fill10Percent(3);
                      },
                    },
                  },
                  {
                    view: 'button',
                    id: 'bet3Button25Percent',
                    value: '25%',
                    on: {
                      onItemClick: () => {
                        fill25Percent(3);
                      },
                    },
                  },
                  {
                    view: 'button',
                    id: 'bet3Button50Percent',
                    value: '50%',
                    on: {
                      onItemClick: () => {
                        fill50Percent(3);
                      },
                    },
                  },
                  {
                    view: 'button',
                    id: 'bet3Button100Percent',
                    value: '100%',
                    on: {
                      onItemClick: () => {
                        fill100Percent(3);
                      },
                    },
                  },
                ],
              },
              {
                view: 'button',
                id: 'bet3Button',
                value: 'Bet',
                css: 'webix_primary',
                on: {
                  onItemClick: async () => {
                    let amount = Number($$('bet3Amount').getValue());
                    if (!(await validateBetAmount(amount))) return;
                    notiBet(amount, 3);
                    setAssetAfterBet(amount);
                    storeBetHistory('Crom', '3', amount);
                  },
                },
              },
            ],
          },
          { width: 20 },
          {
            view: 'layout',
            rows: [
              {
                view: 'label',
                label: '4',
                id: 'bet-4',
              },
              {
                view: 'text',
                id: 'bet4Amount',
                label: 'Amount',
                labelWidth: 80,
                pattern: { mask: '##########', allow: /[0-9]/g },
              },
              {
                cols: [
                  {
                    view: 'button',
                    id: 'bet4Button10Percent',
                    value: '10%',
                    on: {
                      onItemClick: () => {
                        fill10Percent(4);
                      },
                    },
                  },
                  {
                    view: 'button',
                    id: 'bet4Button25Percent',
                    value: '25%',
                    on: {
                      onItemClick: () => {
                        fill25Percent(4);
                      },
                    },
                  },
                  {
                    view: 'button',
                    id: 'bet4Button50Percent',
                    value: '50%',
                    on: {
                      onItemClick: () => {
                        fill50Percent(4);
                      },
                    },
                  },
                  {
                    view: 'button',
                    id: 'bet4Button100Percent',
                    value: '100%',
                    on: {
                      onItemClick: () => {
                        fill100Percent(4);
                      },
                    },
                  },
                ],
              },
              {
                view: 'button',
                id: 'bet4Button',
                value: 'Bet',
                css: 'webix_primary',
                on: {
                  onItemClick: async () => {
                    let amount = Number($$('bet4Amount').getValue());
                    if (!(await validateBetAmount(amount))) return;
                    notiBet(amount, 4);
                    setAssetAfterBet(amount);
                    storeBetHistory('Crom', '4', amount);
                  },
                },
              },
            ],
          },
          { width: 20 },
        ],
      },
      { height: 30 },
      {
        view: 'layout',
        id: 'playerInfoLayout',
        rows: [
          {
            cols: [
              {},
              {
                id: 'assetLabel',
                view: 'label',
                label: 'Balance: ',
                labelWidth: 50,
                width: 60,
              },
              {
                id: 'asset',
                view: 'text',
                // label:""
                value: 10000,
                readonly: true,
                borderless: true,
              },
              {},
            ],
          },
        ],
      },
    ],
  });
  const evtSource = new EventSource('http://168.138.21.22:8082/api/stream', {
    withCredentials: false,
  });

  evtSource.onmessage = function (event) {
    // let evt = JSON.parse(event.data);
    // console.log(ent.start);
  };

  evtSource.addEventListener('roulette', function (event) {
    let data = JSON.parse(event.data);
    let nextRound = moment(data.nextRound);
    let now = moment();
    let start = moment(data.start);
    let end = moment(data.end);
    let afterSecondWillStart = now.diff(start);
    let diffNowToNext = nextRound.diff(now);
    let diffNowToEnd = end.diff(now);
    let timeout = diffNowToNext - diffNowToEnd;
    console.log('now', now.toDate());
    console.log('start', start.toDate());
    console.log('end', end.toDate());
    console.log('diff now to end ', diffNowToEnd);
    console.log('diff now and next rond ', diffNowToNext);
    console.log('-----------------------');
    var devide;
    if (diffNowToEnd > 10000) {
      devide = diffNowToEnd % 10000;
    } else if (diffNowToEnd > 1000) {
      devide = diffNowToEnd % 1000;
    }
    if (start > now) {
      let remain = start - now;
      setTimeout(() => {
        webix.message('game start after 10s');
        setTimeout(() => {
          spin(20);
          clearTimeout();
        }, 20000);
      }, remain);
      clearTimeout();
    } else {
    }
  });

  // $('#spin').click(async function () {
  //   disableBetButton();
  //   await spin();
  // });
});

const spin = async (second) => {
  const spinner = document.querySelector('.roulette');
  var rNumber = Math.random();
  var randomDeg = ((rNumber * (360 - 0 + 1)) / 4) * 1000;
  var oldDeg = randomDeg;
  if (Math.abs(oldDeg - randomDeg) < 2000) {
    randomDeg += 2000;
  }
  if (randomDeg % 90 == 0) {
    randomDeg += 10; //in order not to point at the line-devide
  }
  spinner.style.transition = `transform ${second} forwards`;
  spinner.style.transition = `transform ${second}s cubic-bezier(0.1, 0.7, 0.1, 1)`;
  // spinner.style.animationDelay = '10s';

  spinner.style.transform = `rotate(${randomDeg}deg)`;
  let value = randomDeg - Math.floor(randomDeg / 360) * 360;
  let rs;

  setTimeout(() => {
    if (value >= 0 && value <= 90) {
      rs = 2;
      webix.message('2');
    } else if (value >= 90 && value <= 180) {
      rs = 1;
      webix.message('1');
    } else if (value >= 180 && value <= 270) {
      rs = 4;
      webix.message('4');
    } else if (value >= 270 && value <= 360) {
      rs = 3;
      webix.message('3');
    } else {
      console.log('error');
    }
    fundForWinner(rs);
    // clearAllBet();
    enableBetButton();
  }, 20100);

  return rs;
};

const notiBet = (amount, betAtNumber) => {
  if (!amount || amount <= 0) return;
  $$('betNotiContent').addView({
    rows: [
      {
        height: 20,
        borderless: true,
        view: 'label',
        label: `Player Crom has bet ${amount} at ${betAtNumber}  `,
        readonly: true,
      },
      { height: 10 },
    ],
  });
};

const setAssetAfterBet = async (amount) => {
  let asset = Number($$('asset').getValue());
  $$('asset').setValue((asset - amount).toString());
};
const validateBetAmount = async (amount) => {
  let asset = Number($$('asset').getValue());
  if (asset < amount) {
    await webix.alert('Not enough balance', 'alert-error');
    return false;
  }
  return true;
};
let betHistories = [];
const storeBetHistory = (player, betAtNumber, amount) => {
  betHistories.push({
    player: player,
    betAtNumber: betAtNumber,
    amount: amount,
  });
};

const fundForWinner = async (resultSpiner) => {
  let winners = betHistories.filter((e) => e.betAtNumber == resultSpiner);
  if (winners.length == 0) return;
  const winnersNeedToFundMap = await winners.reduce((next, cur) => {
    const { player, amount } = cur;
    next[player] = (next[player] || 0) + Number(amount);
    return next;
  }, {}); //=> {Crom : 1000, XXX : 2}
  //call api with param ({Crom : 1000, XXX : 2}) to fund

  let currentUser = 'Crom';
  currentAsset = Number($$('asset').getValue());
  if (!winnersNeedToFundMap[`${currentUser}`]) return;
  let name = Object.keys(winnersNeedToFundMap).find((e) => e == currentUser);
  if (!name) return;
  let totalWinAmount = winnersNeedToFundMap[name];
  $$('asset').setValue((currentAsset + Number(totalWinAmount)).toString());

  betHistories = [];
  notiWin(winnersNeedToFundMap);
};

const notiWin = (winnersMap) => {
  if (!winnersMap) return;
  for (const [key, value] of Object.entries(winnersMap)) {
    $$('betNotiContent').addView({
      rows: [
        {
          height: 20,
          borderless: true,
          view: 'label',
          label: `Player ${key} has win $ ${value} `,
          readonly: true,
        },
        { height: 10 },
      ],
    });
  }
};

const clearAllBet = () => {
  $$('bet1Amount').setValue('');
  $$('bet2Amount').setValue('');
  $$('bet3Amount').setValue('');
  $$('bet4Amount').setValue('');
};

const disableBetButton = () => {
  $$('bet1Button').disable();
  $$('bet2Button').disable();
  $$('bet3Button').disable();
  $$('bet4Button').disable();
};

const enableBetButton = () => {
  $$('bet1Button').enable();
  $$('bet2Button').enable();
  $$('bet3Button').enable();
  $$('bet4Button').enable();
};

const fill10Percent = (betAtNumber) => {
  let currentBalance = Number($$('asset').getValue());
  $$(`bet${betAtNumber}Amount`).setValue(Math.floor(currentBalance * 0.1));
};
const fill25Percent = (betAtNumber) => {
  let currentBalance = Number($$('asset').getValue());
  $$(`bet${betAtNumber}Amount`).setValue(Math.floor(currentBalance * 0.25));
};
const fill50Percent = (betAtNumber) => {
  let currentBalance = Number($$('asset').getValue());
  $$(`bet${betAtNumber}Amount`).setValue(Math.floor(currentBalance * 0.5));
};
const fill100Percent = (betAtNumber) => {
  let currentBalance = Number($$('asset').getValue());
  $$(`bet${betAtNumber}Amount`).setValue(currentBalance);
};
