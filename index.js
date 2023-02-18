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
                label: 'Số tiền',
                labelWidth: 80,
                id: 'bet1Amount',
                pattern: { mask: '##########', allow: /[0-9]/g },
              },
              {
                view: 'button',
                value: 'Đặt',
                css: 'webix_primary',
                on: {
                  onItemClick: () => {
                    let amount = $$('bet1Amount').getValue();
                    notiBet(amount, 1);
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
                label: 'Số tiền',
                labelWidth: 80,
                id: 'bet2Amount',
                pattern: { mask: '##########', allow: /[0-9]/g },
              },
              {
                view: 'button',
                value: 'Đặt',
                css: 'webix_primary',
                on: {
                  onItemClick: () => {
                    let amount = $$('bet2Amount').getValue();
                    notiBet(amount, 2);
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
                label: 'Số tiền',
                id: 'bet3Amount',
                labelWidth: 80,
                pattern: { mask: '##########', allow: /[0-9]/g },
              },
              {
                view: 'button',
                value: 'Đặt',
                css: 'webix_primary',
                on: {
                  onItemClick: () => {
                    let amount = $$('bet3Amount').getValue();
                    notiBet(amount, 3);
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
                label: 'Số tiền',
                labelWidth: 80,
                pattern: { mask: '##########', allow: /[0-9]/g },
              },
              {
                view: 'button',
                value: 'Đặt',
                css: 'webix_primary',
                on: {
                  onItemClick: () => {
                    let amount = $$('bet4Amount').getValue();
                    notiBet(amount, 4);
                  },
                },
              },
            ],
          },
          { width: 20 },
        ],
      },
    ],
  });
  // const evtSource = new EventSource('10.0.0.193:8080/api/stream', {
  //   withCredentials: false,
  // });
  // setTimeout(function () {
  //   webix.message('Game will start after 2 seconds');
  //   $('.spin').css(
  //     'animation',
  //     `rotation ${randomNumber(4, 8)} ease-in-out forwards`
  //   );
  //   console.log('ok');
  // }, 2000);
  var randomTransform = 'rotate(' + Math.floor(Math.random() * 7045) + 'deg)';
  var randomDuration = Math.floor(Math.random() * 3) + 2;
  var randomAnimation = 'animate-' + Math.floor(Math.random() * 5 + 1);
  var randomDelay = Math.random() * 1.5 + 0.5;

  $('.roulette').css({
    transform: randomTransform,
    'animation-duration': randomDuration + 's',
    'animation-delay': randomDelay + 's',
  });

  // console.log(randomDuration, randomTransform);
  // $('.roulette').css({
  //   transform: randomTransform,
  //   'animation-duration': randomDuration + 's',
  // });
});

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const notiBet = (amount, betAt) => {
  $$('betNotiContent').addView({
    rows: [
      {
        height: 20,
        borderless: true,
        view: 'label',
        label: `Player Crom bet ${amount} at ${betAt}  `,
        readonly: true,
      },
      { height: 10 },
    ],
  });
};
