var html = `<div class="container-roulette" id = "content-roulette">
<div class="roullete">
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

<button class="trigger">Start</button>
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
        height: 350,
        cols: [
          {
            view: 'scrollview',
            borderless: true,
            id: 'betNoti',
            body: {
              id: 'betNotiContent',
              borderless: true,
              view: 'text',
              value: 'abc',
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
          {},
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
                pattern: { mask: '##########', allow: /[0-9]/g },
              },
              { view: 'button', value: 'Đặt', css: 'webix_primary' },
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
                pattern: { mask: '##########', allow: /[0-9]/g },
              },
              { view: 'button', value: 'Đặt', css: 'webix_primary' },
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
                labelWidth: 80,
                pattern: { mask: '##########', allow: /[0-9]/g },
              },
              { view: 'button', value: 'Đặt', css: 'webix_primary' },
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
                label: 'Số tiền',
                labelWidth: 80,
                pattern: { mask: '##########', allow: /[0-9]/g },
              },
              { view: 'button', value: 'Đặt', css: 'webix_primary' },
            ],
          },
          {},
        ],
      },
    ],
  });
});
