const brands = [
  { id: 'samsung', name: 'SAMSUNG', className: 'samsung' },
  { id: 'fabulux', name: 'FABULUX LED', className: 'fabulux' },
  { id: 'cletech', name: 'cletech', className: 'cletech' },
  { id: 'par', name: 'PAR', className: 'par' },
  { id: 'dahua', name: 'DAHUA', className: 'dahua' },
  { id: 'peerless', name: 'peerless-AV', className: 'peerless' }
];

const groups = [
  {
    id: 'indoor',
    name: 'Indoor',
    description: 'Displays for interior spaces'
  },
  {
    id: 'outdoor',
    name: 'Outdoor',
    description: 'Displays built for exterior use'
  },
  {
    id: 'semi-outdoor',
    name: 'Semi-Outdoor',
    description: 'Displays for covered and bright areas'
  },
  {
    id: 'videowall',
    name: 'Video Walls',
    description: 'Large-format visual experiences for every space'
  },
  {
    id: 'interactive',
    name: 'Interactive',
    description: 'Touch-enabled collaboration and meeting displays'
  },
  {
    id: 'led',
    name: 'LED',
    description: 'Specialist LED display solutions'
  }
];


/* =========================================================
   SAMSUNG INDOOR LINEUPS
   ========================================================= */

const samsungIndoorLineups = [
  {
    id: 'qhc',
    name: 'QHC',
    features: [
      'Brightness:700',
      '24/7'
    ],
    sheetUrl: 'samsung-pdfs/SAMSUNG-QHC-LINE-UP-SHEET.pdf.pdf'
  },

  {
    id: 'qmc',
    name: 'QMC',
    features: [
      'Brightness:500',
      '24/7'
    ],
    sheetUrl: 'samsung-pdfs/SAMSUNG-QMC-LINE-UP-SHEET.pdf.pdf'
  },

  {
    id: 'qbc',
    name: 'QBC',
    features: [
      'Brightness:350',
      '16/7'
    ],
    sheetUrl: 'samsung-pdfs/SAMSUNG-QBC-LINE-UP-SHEET.pdf.pdf'
  }
];


/* =========================================================
   IMAGE HELPER
   ========================================================= */

function samsungSearchImage(model, code) {
  return `https://tse1.mm.bing.net/th?q=${encodeURIComponent(
    `Samsung ${model} ${code}`
  )}`;
}


/* =========================================================
   SAMSUNG PRODUCTS - 31 MODELS
   ========================================================= */

const samsungProducts = [

  {
    no: 1,
    brand: 'samsung',
    group: 'semi-outdoor',
    title: 'OM55N-D',
    code: 'LH55OMNDPGB/EN',
    use: 'Window displays, storefronts and bright semi-outdoor environments.',
    color: '#315c7f',
    image: 'https://www.conex-media.at/produkte/digital-signage/item/925-samsung-om55n-d-lh55omndpgb-en',
    link: 'https://www.samsung.com/ie/smart-signage/outdoor-signage/windowdisplay-omn-d-series-lh55omndpgb-en/',
    manualUrl: 'samsung-pdfs/OM55N-D_LH55OMNDPGB_EN.pdf'
  },

  {
    no: 2,
    brand: 'samsung',
    group: 'interactive',
    title: 'WM85B',
    code: 'LH85WMBWLGCXUE',
    use: 'Large meeting rooms, collaboration spaces, classrooms and presentations.',
    color: '#315c7f',
    image: 'https://www.ictechdistribution.com/product/details/IC59143402/samsung-flip-pro-wm85b-85-inch-4k-uhd-interactive-display-dubai/',
    link: 'https://www.samsung.com/sa_en/business/smart-signage/interactive-display/flip-pro-wm85b-interactive-display-lh85wmbwlgcxue/',
    manualUrl: 'samsung-pdfs/WM85B_LH85WMBWLGCXUE.pdf'
  },

  {
    no: 3,
    brand: 'samsung',
    group: 'interactive',
    title: 'WM75B',
    code: 'LH75WMBWLGCXUE',
    use: 'Meeting rooms, classrooms, collaboration and interactive presentations.',
    color: '#315c7f',
    image: 'https://ayoubcomputers.com/samsung-75-flip-pro-wm75b-interactive-display-lh75wmbwlgcxue/',
    link: 'https://www.samsung.com/sa_en/business/smart-signage/interactive-display/flip-pro-wm75b-interactive-display-lh75wmbwlgcxue/',
    manualUrl: 'samsung-pdfs/WM75B_LH75WMBWLGCXUE.pdf'
  },

  {
    no: 5,
    brand: 'samsung',
    group: 'indoor',
    title: 'OM55B',
    code: 'LH55OMBEBGBXUE',
    use: 'Indoor digital signage, commercial spaces and professional environments.',
    color: '#224d75',
    image: 'https://tse1.mm.bing.net/th?q=Samsung%20OM55B%20LH55OMBEBGBXUE',
    link: 'https://www.samsung.com/ae/business/smart-signage/outdoor-signage/outdoor-signage-om55b-uhd-4k-3000nit-ip5x-lh55ombebgbxue/',
    manualUrl: 'samsung-pdfs/OM55B_LH55OMBEBGBXUE.pdf'
  },

  {
    no: 6,
    brand: 'samsung',
    group: 'interactive',
    title: 'QM55B-T',
    code: 'LH55QMBTBGCXUE',
    use: 'Interactive commercial applications, meetings and touch-enabled presentations.',
    color: '#315c7f',
    image: 'https://www.pc-canada.com/dd2/img/item/A-1500x1500/8745716-1.jpg',
    link: 'https://www.samsung.com/ae/business/smart-signage/uhd-4k-signage/crystal-uhd-signage-qmc-lh55qmcebgcxue/',
    manualUrl: 'samsung-pdfs/QM55B-T_LH55QMBTBGCXUE.pdf'
  },

  {
    no: 7,
    brand: 'samsung',
    group: 'interactive',
    title: 'QM43B-T',
    code: 'LH43QMBTBGCXUE',
    use: 'Touch-enabled digital signage, collaboration and interactive applications.',
    color: '#315c7f',
    image: 'https://med.greatecno.com/733961-large_default/samsung-qm43b-t-smart-signage-touch-display-107-9-cm-43-inch-4k-uhd-500-cd-m-24-7-hdmi-displayport-usb-tizen-6-5.jpg',
    link: 'https://www.samsung.com/sa_en/business/smart-signage/interactive-display/qmb-t-uhd-4k-capacitive-touch-8ms-lh43qmbtbgcxue/',
    manualUrl: 'samsung-pdfs/QM43B-T_LH43QMBTBGCXUE.pdf'
  },

  {
    no: 8,
    brand: 'samsung',
    group: 'videowall',
    title: 'VM46B-U',
    code: 'LH46VMBUBGBXUE',
    use: 'Professional video wall installations, control rooms and commercial spaces.',
    color: '#1a3459',
    image: 'https://uae.microless.com/product/samsung-vmb-u-videowall-46-fhd-ips-display-8ms-response-time-ultra-narrow-bezel-non-glare-panel-1200-1-contrast-ratio-vesa-mount-compatible-ip5x-rating-black-lh46vmbubgbxue/',
    link: 'https://www.samsung.com/ae/smart-signage/video-wall/vmb-u-46-inch-fhd-1080p-500nit-ip5x-35mm-lh46vmbubgbxue/',
    manualUrl: 'samsung-pdfs/VM46B-U_LH46VMBUBGBXUE.pdf'
  },

  {
    no: 9,
    brand: 'samsung',
    group: 'videowall',
    title: 'VH55C-R',
    code: 'LH55VHCRBGBXUE',
    use: 'Ultra-narrow bezel video wall applications and professional control environments.',
    color: '#1a3459',
    image: 'https://www.jp-uk.co.uk/video-wall-displays/samsung/samsung-55-inch-vh55c-r-lh55vhcrbgbxen-video-wall-display-with-razor-thin-bezel.html',
    link: 'https://www.samsung.com/sa_en/smart-signage/video-wall/vhr-r-55-inch-fhd-1080p-700nit-ip5x-0-88mm-lh55vhrrbgbxue/',
    manualUrl: 'samsung-pdfs/VH55C-R_LH55VHCRBGBXUE.pdf'
  },

  {
    no: 10,
    brand: 'samsung',
    group: 'videowall',
    title: 'VM55C-R',
    code: 'LH55VMCRBGBXUE',
    use: 'Professional video walls, control rooms and commercial installations.',
    color: '#1a3459',
    image: 'https://av.sg/products/samsung-55-vm55c-r-full-hd-video-wall-display',
    link: 'https://www.samsung.com/eg/business/smart-signage/video-wall/vmb-r-fhd-1080p-500nit-ip5x-088mm-lh55vmbrbgbxue/',
    manualUrl: 'samsung-pdfs/VM55C-R_LH55VMCRBGBXUE.pdf'
  },

  {
    no: 11,
    brand: 'samsung',
    group: 'videowall',
    title: 'VM55B-R',
    code: 'LH55VMBRBGBXUE',
    use: 'Professional video wall installations and large-format visual environments.',
    color: '#1a3459',
    image: samsungSearchImage('VM55B-R', 'LH55VMBRBGBXUE'),
    link: 'https://www.samsung.com/eg/business/smart-signage/video-wall/vmb-r-fhd-1080p-500nit-ip5x-088mm-lh55vmbrbgbxue/',
    manualUrl: 'samsung-pdfs/VM55B-R_LH55VMBRBGBXUE.pdf'
  },

  {
    no: 12,
    brand: 'samsung',
    group: 'videowall',
    title: 'VM55B-U',
    code: 'LH55VMBUBGBXUE',
    use: 'Large-format video wall applications in commercial and professional spaces.',
    color: '#1a3459',
    image: 'https://images.pcel.com/600/Electronica-Monitores-Samsung-VM55B-U-431440-4xEE7n9uf5rNkut6.jpg',
    link: 'https://www.samsung.com/ae/smart-signage/video-wall/vmb-u-46-inch-fhd-1080p-500nit-ip5x-35mm-lh46vmbubgbxue/',
    manualUrl: 'samsung-pdfs/VM55B-U_LH55VMBUBGBXUE.pdf'
  },

  {
    no: 13,
    brand: 'samsung',
    group: 'interactive',
    title: 'WA75F',
    code: 'LH75WAFWLGCXUE',
    use: 'Interactive meetings, education, collaboration and digital whiteboarding.',
    color: '#315c7f',
    image: 'https://uae.microless.com/product/samsung-waf-series-interactive-display-75-4k-uhd-touch-ir-display-8ms-response-time-64gb-flash-memory-wi-fi-bluetooth-connectivity-android-14-black-lh75wafwlgcxue/',
    link: 'https://www.samsung.com/levant/business/smart-signage/interactive-display/interactive-display-waf-lh75wafwlgcxue/',
    manualUrl: 'samsung-pdfs/WA75F_LH75WAFWLGCXUE.pdf'
  },

  {
    no: 14,
    brand: 'samsung',
    group: 'videowall',
    title: 'VM55C-E',
    code: 'LH55VMCEBGBXUE',
    use: 'Extreme narrow-bezel video wall installations and professional displays.',
    color: '#1a3459',
    image: 'https://www.jp-uk.co.uk/video-wall-displays/samsung/samsung-55-inch-vm55c-e-video-wall-display-with-extra-narrow-bezel.html',
    link: 'https://www.samsung.com/my/business/smart-signage/video-wall/vmc-e-extreme-narrow-bezel-video-wall-fhd-1080p-500nit-ip5x-174mm-lh55vmcebgbxxs/',
    manualUrl: 'samsung-pdfs/VM55C-E_LH55VMCEBGBXUE.pdf'
  },

  {
    no: 15,
    brand: 'samsung',
    group: 'indoor',
    title: 'QM55C',
    code: 'LH55QMCEBGCXUE',
    use: 'Professional indoor digital signage for retail, corporate and commercial environments.',
    color: '#224d75',
    image: 'https://handyav-shop.com/cdn/shop/files/samsungqm43r.jpg2.jpg?v=1699287592',
    link: 'https://www.samsung.com/ae/business/smart-signage/uhd-4k-signage/crystal-uhd-signage-qmc-lh55qmcebgcxue/',
    manualUrl: 'samsung-pdfs/QM55C_LH55QMCEBGCXUE.pdf'
  },

  {
    no: 16,
    brand: 'samsung',
    group: 'outdoor',
    title: 'OH55DX',
    code: 'LH55OHDEBGBXUE',
    use: 'High-brightness outdoor signage for demanding exterior environments.',
    color: '#0d5776',
    image: 'https://www.dominodisplay.com/display-oh55dx-da-esterno',
    link: 'https://www.samsung.com/ae/smart-signage/outdoor-signage/outdoor-signage-oh55a-55-inch-smart-signage-oh55a-lh55ohaebgbxue/',
    manualUrl: 'samsung-pdfs/OH55DX_LH55OHDEBGBXUE.pdf'
  },

  {
    no: 17,
    brand: 'samsung',
    group: 'interactive',
    title: 'WA86F',
    code: 'LH56WAFWLGCXUE',
    use: 'Large interactive collaboration spaces, education and meeting environments.',
    color: '#315c7f',
    image: samsungSearchImage('WA86F', 'LH56WAFWLGCXUE'),
    link: 'https://www.samsung.com/sa_en/smart-signage/interactive-display/waf-65-inch-lh65wafwlgcxue/',
    manualUrl: 'samsung-pdfs/WA86F_LH56WAFWLGCXUE.pdf'
  },

  {
    no: 18,
    brand: 'samsung',
    group: 'indoor',
    title: 'QM85C',
    code: 'LH85QMCEBGCXUE',
    use: 'Large-format indoor digital signage for retail, corporate and commercial spaces.',
    color: '#224d75',
    image: 'https://www.mwave.com.au/products/samsung-qm85c-85-4k-uhd-247-500nit-commercial-display-ac46672',
    link: 'https://www.samsung.com/ae/business/smart-signage/uhd-4k-signage/crystal-uhd-signage-qmc-lh85qmcebgcxue/',
    manualUrl: 'samsung-pdfs/QM85C_LH85QMCEBGCXUE.pdf'
  },

  {
    no: 19,
    brand: 'samsung',
    group: 'indoor',
    title: 'QM75C',
    code: 'LH75QMCEBGCXUE',
    use: 'Professional indoor signage for retail, showrooms, offices and commercial environments.',
    color: '#224d75',
    image: samsungSearchImage('QM75C', 'LH75QMCEBGCXUE'),
    link: 'https://www.samsung.com/ae/business/smart-signage/uhd-4k-signage/crystal-uhd-signage-qmc-lh85qmcebgcxue/',
    manualUrl: 'samsung-pdfs/QM75C_LH75QMCEBGCXUE.pdf'
  },

  {
    no: 20,
    brand: 'samsung',
    group: 'indoor',
    title: 'QH50C',
    code: 'LH50QHCEBGCXUE',
    use: 'Professional indoor digital signage for commercial applications.',
    color: '#224d75',
    image: 'https://cdn.mwave.com.au/images/400/lh50qhcebgcxxy_ac68948_92416.jpg',
    link: 'https://www.samsung.com/ae/business/smart-signage/uhd-4k-signage/crystal-uhd-signage-qhc-lh50qhcebgcxue/',
    manualUrl: 'samsung-pdfs/QH50C_LH50QHCEBGCXUE.pdf'
  },

  {
    no: 21,
    brand: 'samsung',
    group: 'interactive',
    title: 'WA65F',
    code: 'LH65WAFWLGCXUE',
    use: 'Interactive meetings, classrooms, collaboration and presentations.',
    color: '#315c7f',
    image: 'https://uae.microless.com/product/samsung-waf-series-interactive-display-65-ips-display-4k-uhd-resolution-8ms-response-time-ir-touch-technology-wifi-bluetooth-connectivity-12-7-operation-time-black-lh65wafwlgcxue/',
    link: 'https://www.samsung.com/levant/business/smart-signage/interactive-display/interactive-display-waf-lh65wafwlgcxue/',
    manualUrl: 'samsung-pdfs/WA65F_LH65WAFWLGCXUE.pdf'
  },

  {
    no: 22,
    brand: 'samsung',
    group: 'interactive',
    title: 'WM65B',
    code: 'LH65WMBWBGCXUE',
    use: 'Interactive collaboration, meeting rooms, classrooms and presentations.',
    color: '#315c7f',
    image: samsungSearchImage('WM65B', 'LH65WMBWBGCXUE'),
    link: 'https://www.samsung.com/levant/business/smart-signage/interactive-display/flip-pro-wm65b-interactive-display-lh65wmbwbgcxue/',
    manualUrl: 'samsung-pdfs/WM65B_LH65WMBWBGCXUE.pdf'
  },

  {
    no: 23,
    brand: 'samsung',
    group: 'outdoor',
    title: 'OH55A-S',
    code: 'LH55OHAOSGBXUE',
    use: 'High-brightness outdoor signage for façades, public spaces and advertising.',
    color: '#0d5776',
    image: samsungSearchImage('OH55A-S', 'LH55OHAOSGBXUE'),
    link: 'https://www.samsung.com/ae/business/smart-signage/outdoor-signage/outdoor-signage-oh55a-s-fhd-4k-3500nit-ip5x-lh55ohaesgbxue/',
    manualUrl: 'samsung-pdfs/OH55A-S_LH55OHAOSGBXUE.pdf'
  },

  {
    no: 24,
    brand: 'samsung',
    group: 'interactive',
    title: 'WM55B',
    code: 'LH55WMBWBGCXUE',
    use: 'Interactive meetings, collaboration, education and digital whiteboarding.',
    color: '#315c7f',
    image: samsungSearchImage('WM55B', 'LH55WMBWBGCXUE'),
    link: 'https://www.samsung.com/sa_en/business/smart-signage/interactive-display/flip-pro-wm55b-interactive-display-lh55wmbwbgcxue/',
    manualUrl: 'samsung-pdfs/WM55B_LH55WMBWBGCXUE.pdf'
  },

  {
    no: 25,
    brand: 'samsung',
    group: 'indoor',
    title: 'QM43C',
    code: 'LH43QMCEPGCXUE',
    use: 'Professional indoor signage for retail, offices, hospitality and commercial spaces.',
    color: '#224d75',
    image: samsungSearchImage('QM43C', 'LH43QMCEPGCXUE'),
    link: 'https://www.samsung.com/levant/business/smart-signage/uhd-4k-signage/crystal-uhd-signage-qmc-lh43qmcepgcxue/',
    manualUrl: 'samsung-pdfs/QM43C_LH43QMCEPGCXUE.pdf'
  },

  {
    no: 26,
    brand: 'samsung',
    group: 'indoor',
    title: 'QM65C',
    code: 'LH65QMCEBGCXUE',
    use: 'Professional indoor digital signage for commercial and corporate environments.',
    color: '#224d75',
    image: samsungSearchImage('QM65C', 'LH65QMCEBGCXUE'),
    link: 'https://www.samsung.com/ae/business/smart-signage/uhd-4k-signage/crystal-uhd-signage-qmc-lh65qmcebgcxue/',
    manualUrl: 'samsung-pdfs/QM65C_LH65QMCEBGCXUE.pdf'
  },

  {
    no: 27,
    brand: 'samsung',
    group: 'indoor',
    title: 'QM50C',
    code: 'LH50QMCEPGCXUE',
    use: 'Professional indoor digital signage for retail, hospitality and business spaces.',
    color: '#224d75',
    image: samsungSearchImage('QM50C', 'LH50QMCEPGCXUE'),
    link: 'https://www.samsung.com/levant/business/smart-signage/uhd-4k-signage/crystal-uhd-signage-qmc-lh50qmcepgcxue/',
    manualUrl: 'samsung-pdfs/QM50C_LH50QMCEPGCXUE.pdf'
  },

  {
    no: 28,
    brand: 'samsung',
    group: 'indoor',
    title: 'QM32C',
    code: 'LH32QMCEBGCXUE',
    use: 'Compact professional signage for retail, hospitality and business environments.',
    color: '#224d75',
    image: samsungSearchImage('QM32C', 'LH32QMCEBGCXUE'),
    link: 'https://www.samsung.com/ae/business/smart-signage/uhd-4k-signage/crystal-uhd-signage-qmc-lh32qmcebgcxue/',
    manualUrl: 'samsung-pdfs/QM32C_LH32QMCEBGCXUE.pdf'
  },

  {
    no: 29,
    brand: 'samsung',
    group: 'outdoor',
    title: 'OH24B',
    code: 'LH24OHBEBGBXUE',
    use: 'Outdoor and high-brightness digital signage for demanding environments.',
    color: '#0d5776',
    image: samsungSearchImage('OH24B', 'LH24OHBEBGBXUE'),
    link: 'https://www.samsung.com/uk/business/smart-signage/outdoor-signage/outdoor-signage-oh24b-fhd-1500nit-ip66-lh24ohbebgbxen/',
    manualUrl: 'samsung-pdfs/OH24B_LH24OHBEBGBXUE.pdf'
  },

  {
    no: 30,
    brand: 'samsung',
    group: 'indoor',
    title: 'SH37C',
    code: 'LH37SHCEBGBXUE',
    use: 'Stretched-format signage for retail, transportation, hospitality and specialized environments.',
    color: '#224d75',
    image: samsungSearchImage('SH37C', 'LH37SHCEBGBXUE'),
    link: 'http://samsung.com/ie/business/smart-signage/others/stretched-display-sh37c-lh37shcebgbxen/',
    manualUrl: 'samsung-pdfs/SH37C_LH37SHCEBGBXUE.pdf'
  },

  {
    no: 31,
    brand: 'samsung',
    group: 'indoor',
    title: 'QM98C',
    code: 'LH98QMCEBGCXUE',
    use: '98-inch large-format professional signage for premium commercial environments.',
    color: '#224d75',
    image: samsungSearchImage('QM98C', 'LH98QMCEBGCXUE'),
    link: 'https://www.samsung.com/sa_en/smart-signage/uhd-4k-signage/uhd-signage-qm98c-98-inch-lh98qmcebgcxue/',
    manualUrl: 'samsung-pdfs/QM98C_LH98QMCEBGCXUE.pdf'
  },

  {
    no: 32,
    brand: 'samsung',
    group: 'indoor',
    title: 'QHFX',
    code: 'LH115QHFEBGXUE',
    use: 'Ultra-large professional digital signage for premium indoor environments.',
    color: '#224d75',
    image: samsungSearchImage('QHFX', 'LH115QHFEBGXUE'),
    link: 'https://www.samsung.com/sa_en/smart-signage/uhd-4k-signage/supersized-uhd-signage-qhfx-115-inch-portrait-antiglare-lh115qhfebgxue/',
    manualUrl: 'samsung-pdfs/QHFX_LH115QHFEBGXUE.pdf'
  }
];


/* =========================================================
   SAMSUNG OUTDOOR LINEUPS
   ========================================================= */

const samsungOutdoorLineups = [
  {
    id: 'oh',
    name: 'OH',
    features: [
      'Outdoor Signage',
      'High Brightness',
      'IP56'
    ],
    sheetUrl: 'samsung-pdfs/SAMSUNG-OH-LINE-UP-SHEET.pdf'
  }
];


/* =========================================================
   SAMSUNG SEMI-OUTDOOR LINEUPS
   ========================================================= */

const samsungSemiOutdoorLineups = [
  {
    id: 'omn',
    name: 'OMN',
    features: [
      'Window Display',
      'High Brightness',
      'Slim Design',
      '24/7'
    ],
    sheetUrl: 'samsung-pdfs/SAMSUNG-OMN-INE-UP-SHEET.pdf.pdf'
  }
];


/* =========================================================
   DAHUA PRODUCTS
   ========================================================= */

const dahuaProducts = [

  {
    no: 330,
    brand: 'dahua',
    group: 'indoor',
    title: 'LDV43-SAI400K',
    code: 'LDV43-SAI400K',
    use: '43-inch vertical floor-standing digital signage for retail, hospitality, showrooms and commercial spaces.',
    color: '#315c7f',
    image: 'https://www.dahuasecurity.com/asset/upload/uploads/cpq/prm-os-srv-res/smart/formal/Product/HQ/1.0.01.14.11216/Images/LDV43-SAI400K_View_Front-logo.png',
    link: 'https://www.dahuasecurity.com/my/products/Display--Control/LCD-Digital-Signage/SAI-Series/LDV43-SAI400K',
    manualUrl: null
  },

  {
    no: 331,
    brand: 'dahua',
    group: 'indoor',
    title: 'LDH32-SAI200K',
    code: 'LDH32-SAI200K',
    use: '32-inch wall-mounted digital signage for retail, menus, hospitality and commercial environments.',
    color: '#315c7f',
    image: 'https://www.dahuasecurity.com/asset/upload/uploads/soft/20211214/LDH32-SAI200K.jpg',
    link: 'https://www.dahuasecurity.com/in/products/All-Products/Display--Control/LCD-Digital-Signage/SAI-Series/LDH32-SAI200K',
    manualUrl: null
  },

  {
    no: 332,
    brand: 'dahua',
    group: 'indoor',
    title: 'LDH43-FAI400K',
    code: 'LDH43-FAI400K',
    use: '43-inch wall-mounted digital signage for retail, hospitality, offices and commercial environments.',
    color: '#315c7f',
    image: 'https://www.dahuasecurity.com/asset/upload/uploads/soft/20220602/LDH43-FAI400K.jpg',
    link: 'https://www.dahuasecurity.com/ar/products/All-Products/Display--Control/LCD-Digital-Signage/Lite-Series/LDH43-FAI400K',
    manualUrl: null
  },

  {
    no: 451,
    brand: 'dahua',
    group: 'indoor',
    title: 'LDV65-SAI400K',
    code: 'LDV65-SAI400K',
    use: '65-inch vertical floor-standing digital signage for large retail, hospitality and commercial environments.',
    color: '#315c7f',
    image: 'https://www.dahuasecurity.com/asset/upload/uploads/soft/20240924/LDV65-SAI400K_View_Front-logo.png',
    link: 'https://www.dahuasecurity.com/kr/products/All-Products/Discontinued-Products/Display--Control/LDV65-SAI400K',
    manualUrl: null
  },

  {
    no: 452,
    brand: 'dahua',
    group: 'indoor',
    title: 'LDH55-WAI200K',
    code: 'DHI-LDH55-WAI200K',
    use: '55-inch high-brightness wall-mounted digital signage for storefronts, commercial spaces and bright environments.',
    color: '#315c7f',
    image: 'https://www.dahuasecurity.com/asset/upload/uploads/cpq/prm-os-srv-res/smart/formal/Product/HQ/1.0.99.12.10266/Images/LDH55-WAI200K_View_Front-logo.png',
    link: 'https://www.dahuasecurity.com/cz/products/All-Products/Display--Control/LCD-Digital-Signage/Pro-Series/LDH55-WAI200K',
    manualUrl: null
  },

  {
    no: 453,
    brand: 'dahua',
    group: 'videowall',
    title: 'LS550UEM-EG',
    code: 'DHI-LS550UEM-EG',
    use: '55-inch Full-HD video wall display with an ultra-narrow 0.88mm bezel for control rooms, monitoring centers and commercial spaces.',
    color: '#1a3459',
    image: 'https://www.dahuasecurity.com/asset/upload/uploads/soft/20220412/LS550UEM-EG.jpg',
    link: 'https://www.dahuasecurity.com/tr/products/all-products/display--control/lcd-video-walls/essential-series/ls550uem-eg',
    manualUrl: null
  },

  {
    no: 454,
    brand: 'dahua',
    group: 'videowall',
    title: 'LS550UDH-EG',
    code: 'DHI-LS550UDH-EG',
    use: '55-inch Full-HD video wall display with an ultra-narrow 1.74mm bezel for professional video wall installations.',
    color: '#1a3459',
    image: 'https://www.dahuasecurity.com/asset/upload/uploads/soft/20220714/LS550UDH-EG.jpg',
    link: 'https://www.dahuasecurity.com/tr/products/All-Products/Display--Control/LCD-Video-Walls/Essential-Series/LS550UDH-EG',
    manualUrl: null
  },

  {
    no: 455,
    brand: 'dahua',
    group: 'videowall',
    title: 'LS550UCM-UF',
    code: 'DHI-LS550UCM-UF',
    use: '55-inch Full-HD video wall display with a 3.5mm ultra-narrow bezel for control rooms, meeting rooms and commercial spaces.',
    color: '#1a3459',
    image: 'https://www.dahuasecurity.com/asset/upload/uploads/soft/20241110/LS550UCM-UF.jpg',
    link: 'https://www.dahuasecurity.com/mena/products/All-Products/Display--Control/LCD-Video-Walls/Ultra-Series/LS550UCM-UF',
    manualUrl: null
  },

  {
    no: 464,
    brand: 'dahua',
    group: 'led',
    title: 'DHI-PHSIA1.8-LF',
    code: 'DHI-PHSIA1.8-LF',
    use: 'Indoor fine-pixel-pitch LED display for premium indoor visual experiences, control rooms and commercial spaces.',
    color: '#193a58',
    image: 'https://www.dahuasecurity.com/asset/upload/uploads/soft/20240206/PHSIA1.8-LF.jpg',
    link: 'https://www.dahuasecurity.com/ph/products/Display--Control/LED-Displays/Indoor-Fine-Pixel/PHSIA1.8-LF',
    manualUrl: null
  }

];


/* =========================================================
   OTHER BRANDS
   ========================================================= */

const products = [
  ...samsungProducts,
  ...dahuaProducts,

  {
    brand: 'fabulux',
    group: 'indoor',
    title: 'Indoor LED Display',
    use: 'Custom LED displays for retail, hospitality, events, and interior brand environments.',
    color: '#236498',
    manualUrl: null,
    link: null,
    image: null
  },

  {
    brand: 'fabulux',
    group: 'outdoor',
    title: 'Outdoor LED Advertising Board',
    use: 'Weather-resistant façade and outdoor advertising solutions.',
    color: '#186598',
    manualUrl: null,
    link: null,
    image: null
  },

  {
    brand: 'fabulux',
    group: 'semi-outdoor',
    title: 'Transparent & Window LED',
    use: 'Eye-catching content for glass façades, shop windows, and protected exterior spaces.',
    color: '#407da6',
    manualUrl: null,
    link: null,
    image: null
  },

  {
    brand: 'cletech',
    group: 'interactive',
    title: 'Interactive Meeting Display',
    use: 'Collaboration, whiteboarding, and presentations in training and meeting rooms.',
    color: '#5c6774',
    manualUrl: null,
    link: null,
    image: null
  },

  {
    brand: 'par',
    group: 'indoor',
    title: 'Professional AV Solutions',
    use: 'Professional display and audio systems for commercial projects and events.',
    color: '#27476d',
    manualUrl: null,
    link: null,
    image: null
  },

  {
    brand: 'everyvue',
    group: 'indoor',
    title: 'Commercial & Hospitality Display',
    use: 'Purpose-built displays for hotels, hospitality, and business environments.',
    color: '#9d3b3b',
    manualUrl: null,
    link: null,
    image: null
  },

  {
    brand: 'peerless',
    group: 'videowall',
    title: 'Display Mounting Solutions',
    use: 'Safe, flexible mounts for displays, video walls, and mobile carts.',
    color: '#713f44',
    manualUrl: null,
    link: null,
    image: null
  }
];


/* =========================================================
   DOM
   ========================================================= */

const grid = document.getElementById('brandGrid');
const groupGrid = document.getElementById('groupGrid');
const productGrid = document.getElementById('productGrid');
const groupsSection = document.getElementById('groups');
const productsSection = document.getElementById('products');
const modal = document.getElementById('productModal');

let selectedBrandId = null;


/* =========================================================
   EXTRA IMAGE CSS
   ========================================================= */

const imageStyles = document.createElement('style');

imageStyles.textContent = `
  .product-art {
    position: relative;
    overflow: hidden;
    min-height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--art, #224d75);
  }

  .product-art > span {
    position: absolute;
    top: 12px;
    left: 14px;
    z-index: 3;
    color: #fff;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: .08em;
    text-transform: uppercase;
    text-shadow: 0 1px 4px rgba(0,0,0,.5);
  }

  .product-image {
    width: 100%;
    height: 100%;
    min-height: 220px;
    object-fit: contain;
    display: block;
    background: #fff;
    transition: transform .35s ease;
  }

  .product-card:hover .product-image {
    transform: scale(1.035);
  }

  .product-image-fallback {
    width: 76%;
    aspect-ratio: 16 / 9;
    border: 7px solid #161c22;
    background: linear-gradient(135deg,#247db8,#08131e);
    box-shadow: 0 12px 0 rgba(0,0,0,.25);
  }

  .modal-product-image {
    width: 100%;
    height: 100%;
    max-height: 500px;
    object-fit: contain;
    display: block;
    background: #fff;
  }

  .samsung-modal-links {
    display: grid;
    gap: 9px;
  }

  .samsung-modal-links a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 14px;
    border: 1px solid var(--line);
    color: inherit;
    text-decoration: none;
    font-size: 12px;
    font-weight: 700;
    background: #fff;
    transition: .2s;
  }

  .samsung-modal-links a:hover {
    border-color: #397ec0;
    transform: translateY(-1px);
  }

  .product-model-code {
    display: block;
    margin-top: 5px;
    font-family: "DM Mono", monospace;
    font-size: 10px;
    color: #687482;
    word-break: break-all;
  }

  /* Samsung lineup area */
  .samsung-lineups-wrapper {
    grid-column: 1 / -1;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
    margin-top: 8px;
  }

  .samsung-lineups-title {
    grid-column: 1 / -1;
    margin: 4px 0 0;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: .04em;
    text-transform: uppercase;
  }

  .samsung-lineup-card {
    width: 100%;
  }

  @media (max-width: 700px) {
    .samsung-lineups-wrapper {
      grid-template-columns: 1fr;
    }
  }
`;

document.head.appendChild(imageStyles);


/* =========================================================
   HELPERS
   ========================================================= */

function brandById(id) {
  return brands.find(brand => brand.id === id);
}

function groupById(id) {
  return groups.find(group => group.id === id);
}


/* =========================================================
   RENDER BRANDS
   ========================================================= */

function renderBrands(active) {

  grid.innerHTML = brands.map(brand => `
    <button
      class="brand-card ${brand.id === active ? 'active' : ''}"
      data-brand="${brand.id}"
      aria-label="View ${brand.name} product groups"
    >
      <span class="brand-logo ${brand.className}">
        ${brand.name}
      </span>
    </button>
  `).join('');
}


/* =========================================================
   SELECT BRAND
   ========================================================= */

function selectBrand(id) {

  selectedBrandId = id;

  const brand = brandById(id);

  renderBrands(id);

  document.getElementById('selectedBrandLabel').textContent =
    `${brand.name} / select a group`;

  groupGrid.style.gridTemplateColumns =
    window.innerWidth < 700
      ? 'repeat(2, 1fr)'
      : 'repeat(3, 1fr)';

  const availableGroups = groups.filter(group =>
    products.some(product =>
      product.brand === selectedBrandId &&
      product.group === group.id
    )
  );

  groupGrid.innerHTML = availableGroups.map((group, index) => {

    return `
      <button
        class="group-card"
        data-group="${group.id}"
        type="button"
      >

        <span>
          ${String(index + 1).padStart(2, '0')}
        </span>

        <h3>${group.name}</h3>

        <p>
          ${group.description}
        </p>

        <b>↗</b>

      </button>
    `;

  }).join('');

  groupsSection.hidden = false;
  productsSection.hidden = true;

  groupsSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}


/* =========================================================
   SAMSUNG LINEUP GROUP RENDERER
   Keeps the original GROUPS visible above the lineups
   ========================================================= */

function renderSamsungLineups(lineups, groupName, showPdf = false) {

  const brand = brandById('samsung');

  document.getElementById('selectedBrandLabel').textContent =
    `${brand.name} / ${groupName}`;

  /*
     IMPORTANT:
     Do NOT replace groupGrid completely.

     We keep the existing group buttons and append
     the Samsung lineups underneath them.
  */

  const lineupHTML = lineups.map((lineup, index) => {

    return `
      <div
        class="group-card samsung-lineup-card"
        data-lineup="${lineup.id}"
      >

        <span>
          ${String(index + 1).padStart(2, '0')}
        </span>

        <h3>${lineup.name}</h3>

        <ul class="lineup-features">
          ${lineup.features.map(feature => `
            <li>${feature}</li>
          `).join('')}
        </ul>

        ${
          showPdf && lineup.sheetUrl
            ? `
              <a
                href="${lineup.sheetUrl}"
                target="_blank"
                rel="noopener noreferrer"
                class="lineup-sheet-link"
                onclick="event.stopPropagation();"
              >
                View Line Up Sheet ↗
              </a>
            `
            : ''
        }

        <b>↗</b>

      </div>
    `;

  }).join('');


  /*
     The wrapper spans the full width of the group grid,
     so all original groups stay ABOVE it.
  */

  const existingGroups = groupGrid.innerHTML;

  groupGrid.innerHTML = `
    ${existingGroups}

    <div class="samsung-lineups-wrapper">

      <div class="samsung-lineups-title">
        ${groupName} Lineups
      </div>

      ${lineupHTML}

    </div>
  `;


  groupGrid.style.gridTemplateColumns =
    window.innerWidth < 700
      ? 'repeat(2, 1fr)'
      : 'repeat(3, 1fr)';

  groupsSection.hidden = false;
  productsSection.hidden = true;

  groupsSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}


/* =========================================================
   RENDER SAMSUNG INDOOR LINEUPS
   ========================================================= */

function renderSamsungIndoorLineups() {

  renderSamsungLineups(
    samsungIndoorLineups,
    'Indoor',
    true
  );
}


/* =========================================================
   RENDER SAMSUNG OUTDOOR LINEUPS
   ========================================================= */

function renderSamsungOutdoorLineups() {
  renderSamsungLineups(
    samsungOutdoorLineups,
    'Outdoor',
    true
  );
}


/* =========================================================
   RENDER SAMSUNG SEMI-OUTDOOR LINEUPS
   ========================================================= */

function renderSamsungSemiOutdoorLineups() {

  renderSamsungLineups(
    samsungSemiOutdoorLineups,
    'Semi-Outdoor',
    true
  );
}


/* =========================================================
   SELECT GROUP
   ========================================================= */

function selectGroup(groupId) {

  const brand = brandById(selectedBrandId);
  const group = groupById(groupId);

  const list = products.filter(product =>
    product.brand === selectedBrandId &&
    product.group === groupId
  );

  document.getElementById('selectedGroup').textContent =
    `${brand.name} / ${group.name}`;

  if (!list.length) {

    productGrid.innerHTML = `
      <p class="empty-group">
        This group is being prepared.
        Contact MixGT for the current product guide.
      </p>
    `;

  } else {

    productGrid.innerHTML = list.map(product => {

      const realIndex = products.indexOf(product);

      const image = product.image || '';

      return `
        <button
          class="product-card"
          data-index="${realIndex}"
          type="button"
        >

          <div
            class="product-art"
            style="--art:${product.color || '#224d75'}"
          >

            <span>
              ${brand.name}
            </span>

            ${
              image
                ? `
                  <img
                    class="product-image"
                    src="${image}"
                    alt="${product.title} ${product.code}"
                    loading="lazy"
                    onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
                  >

                  <div
                    class="product-image-fallback"
                    style="display:none"
                  ></div>
                `
                : `
                  <div class="product-image-fallback"></div>
                `
            }

          </div>

          <div class="product-card-content">

            <p>${group.name}</p>

            <h3>${product.title}</h3>

            ${
              product.code
                ? `
                  <small class="product-model-code">
                    ${product.code}
                  </small>
                `
                : `
                  <small>
                    Open product guide
                  </small>
                `
            }

            <span class="card-arrow">
              ↗
            </span>

          </div>

        </button>
      `;

    }).join('');
  }

  productsSection.hidden = false;

  productsSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}


/* =========================================================
   BRAND CLICK
   ========================================================= */

grid.addEventListener('click', event => {

  const button =
    event.target.closest('[data-brand]');

  if (!button) return;

  selectBrand(button.dataset.brand);
});


/* =========================================================
   GROUP CLICK
   ========================================================= */

groupGrid.addEventListener('click', event => {

  const button =
    event.target.closest('[data-group]');

  if (!button) return;

  const groupId =
    button.dataset.group;


  /* SAMSUNG INDOOR */

  if (
    selectedBrandId === 'samsung' &&
    groupId === 'indoor'
  ) {

    renderSamsungIndoorLineups();

    return;
  }


  /* SAMSUNG OUTDOOR */

  if (
    selectedBrandId === 'samsung' &&
    groupId === 'outdoor'
  ) {

    renderSamsungOutdoorLineups();

    return;
  }


  /* SAMSUNG SEMI-OUTDOOR */

  if (
    selectedBrandId === 'samsung' &&
    groupId === 'semi-outdoor'
  ) {

    renderSamsungSemiOutdoorLineups();

    return;
  }


  /* ALL OTHER BRANDS / GROUPS */

  selectGroup(groupId);

});


/* =========================================================
   BACK TO GROUPS
   ========================================================= */

document
  .getElementById('backToGroups')
  .addEventListener('click', () => {

    productsSection.hidden = true;
    groupsSection.hidden = false;

    groupsSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

  });


/* =========================================================
   PRODUCT MODAL
   ========================================================= */

productGrid.addEventListener('click', event => {

  const card =
    event.target.closest('[data-index]');

  if (!card) return;

  const product =
    products[Number(card.dataset.index)];

  if (!product) return;

  const brand =
    brandById(product.brand);

  const group =
    groupById(product.group);


  /* -------------------------------------------------------
     MODAL BRAND
     ------------------------------------------------------- */

  document.getElementById('modalBrand').textContent =
    brand.name;


  /* -------------------------------------------------------
     MODAL VISUAL
     ------------------------------------------------------- */

  const modalVisual =
    document.getElementById('modalVisual');

  modalVisual.style.background =
    product.color || '#224d75';


  /* Replace old screen shape with actual product image */

  if (product.image) {

    modalVisual.innerHTML = `
      <span id="modalBrand">
        ${brand.name}
      </span>

      <img
        class="modal-product-image"
        src="${product.image}"
        alt="${product.title} ${product.code}"
        onerror="this.style.display='none';"
      >
    `;

  } else {

    modalVisual.innerHTML = `
      <span id="modalBrand">
        ${brand.name}
      </span>

      <div class="product-image-fallback"></div>
    `;
  }


  /* -------------------------------------------------------
     MODAL CATEGORY
     ------------------------------------------------------- */

  document.getElementById('modalCategory').textContent =
    `${brand.name} / ${group.name}`;


  /* -------------------------------------------------------
     MODAL TITLE
     ------------------------------------------------------- */

  document.getElementById('modalTitle').textContent =
    product.title;


  /* -------------------------------------------------------
     DESCRIPTION
     ------------------------------------------------------- */

  if (product.brand === 'samsung') {

    document.getElementById('modalDescription').textContent =
      `Samsung ${product.title} — ${product.code}`;

  } else {

    document.getElementById('modalDescription').textContent =
      `A ${brand.name} solution selected for your project requirements.`;
  }


  /* -------------------------------------------------------
     USE
     ------------------------------------------------------- */

  document.getElementById('modalUse').textContent =
    product.use;


  /* -------------------------------------------------------
     PRODUCT DOCUMENTATION
     ------------------------------------------------------- */

  let manualHTML = '';

  if (product.brand === 'samsung') {

    manualHTML = `
      <div class="samsung-modal-links">

        ${
          product.link
            ? `
              <a
                href="${product.link}"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  Open Samsung product page
                </span>

                <b>↗</b>
              </a>
            `
            : ''
        }

        ${
          product.manualUrl
            ? `
              <a
                href="${product.manualUrl}"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  Open PDF product guide
                </span>

                <b>↗</b>
              </a>
            `
            : ''
        }

      </div>
    `;

  } else if (product.manualUrl) {

    manualHTML = `
      <a
        href="${product.manualUrl}"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open PDF product guide
        <b>↗</b>
      </a>
    `;

  } else {

    manualHTML = `
      <span class="manual-pending">
        PDF product guide coming soon —
        contact MixGT for the current document.
      </span>
    `;
  }


  document.getElementById('modalManual').innerHTML =
    manualHTML;


  /* -------------------------------------------------------
     OPEN MODAL
     ------------------------------------------------------- */

  modal.classList.add('open');

  modal.setAttribute(
    'aria-hidden',
    'false'
  );

  document.body.style.overflow =
    'hidden';
});


/* =========================================================
   CLOSE MODAL
   ========================================================= */

modal.addEventListener('click', event => {

  if (
    event.target.closest('[data-close]')
  ) {

    modal.classList.remove('open');

    modal.setAttribute(
      'aria-hidden',
      'true'
    );

    document.body.style.overflow = '';

  }

});


/* =========================================================
   ESC KEY
   ========================================================= */

document.addEventListener('keydown', event => {

  if (
    event.key === 'Escape' &&
    modal.classList.contains('open')
  ) {

    const closeButton =
      modal.querySelector('[data-close]');

    if (closeButton) {
      closeButton.click();
    }
  }

});


/* =========================================================
   URL BRAND SUPPORT
   Example:
   products.html?brand=samsung
   ========================================================= */

const requestedBrand =
  new URLSearchParams(
    window.location.search
  ).get('brand');

renderBrands();

if (
  brands.some(
    brand => brand.id === requestedBrand
  )
) {

  selectBrand(requestedBrand);

}

