type model_type=({
    idx: number;
    name: string;
    slo: string;
    src: string;
    cvid: string[];
    csum: string;
    cper: {
        eng: string;
        zero: string;
        hp: string;
        psum: string;
    };
    cdes: string;
    part: string[];
    logo?: string;
    psrc: string[];
    bgc: string;
})[]


const mdata:model_type = [
    {
        idx: 1,
        name: "portofino",
        slo: "재발견을 향한 여정",
        src: "./img/index/portofino.png",
        cvid: [
            "https://ferrari-cdn.thron.com/static/KLGC0Q_GT-Portofino_M_Video_Ufficiale_YT-4500_JAPDQ7.mp4?xseo=",
            "https://ferrari-cdn.thron.com/static/VZMLUP_ferrari-portofino-m-engine-cover-video-desk-4500_OM28G1.mp4?xseo="
        ],
        csum: "페라리 포르토피노M은 전작인 포르토피노를 기반으로 성능을 상당 부분 향상시킴으로써 모델명에 ‘변화 (Modificata)’를 의미하는 ‘M’을 붙였습니다. 포르토피노M은 페라리가 새롭게 선보인 2+ 시트 스파이더 모델로서, 8단 듀얼클러치 변속기와 5가지 모드의 마네티노를 비롯한 혁신 기술 및 디자인 요소를 컨버터블 GT 라인업에 최초로 적용한 것이 특징입니다. 이 덕분에 포르토피노 M과 함께 하는 모든 주행이 평범한 일상을 재발견하는 여정이 됩니다.",
        cper: {
            eng: "V8",
            zero: "3.45",
            hp: "620",
            psum: "페라리 포르토피노 M의 엔진은 2016년부터 4년 연속으로 “올해의 엔진상(International Engine of the Year)” 대상을 수상한 V8 터보 엔진 라인업에 속합니다. 새로운 캠 프로파일을 적용하고 터빈 회전 수를 측정하는 스피드 센서를 터보차저에 탑재함으로써, 기존 포르토피노 대비 20마력 향상된 620마력의 성능을 발휘합니다. 또한 새로운 가솔린 미립자 필터(Gasoline Particulate Filter, GPF)를 탑재해 엄격한 유로-6D 배출가스 기준을 충족하면서도 주행의 즐거움은 그대로 선사합니다.",
        },
        cdes: "진화하는 강렬한 카리스마와 정교한 디테일",
        part: ["APPLE", "APTIV", "BREMBO", "BRIDGESTONE", "BWI", "FONTANA PIETRO S.P.A.", "MAGNA PT", "IHI", "LEAR", "MARELLI", "MAHLE", "OMR", "PIRELLI", "ROBERT BOSCH GMBH", "SHELL", "ZF GROUP", "STR", "VALEO", "WEBASTO", "MICHELIN"],
        logo: "https://cdn.ferrari.com/cms/network/media/img/resize/5f5fbcc6900e1e448208c448-ferrari-portofino-m-logo?",
        psrc: [
            "https://cdn.ferrari.com/cms/network/media/img/resize/5f5b66b7b6dc0602f4e66bb6-ferrari-portofino-m-intro_desktop?width=1920&height=1600",
            "https://ferrari-cdn.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/0x0/e0f14992-e3ae-4b66-8e0d-d50942503247.jpg?v=195",
            "https://ferrari-cdn.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/0x0/5ec37725-98fe-4de5-9f3c-2f7e74578378.jpg?v=195",
            "https://ferrari-cdn.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/0x0/b0f1222b-303c-4b1e-9a58-04284d4572cf.jpg?v=195",
            "https://ferrari-cdn.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/0x0/b0f1222b-303c-4b1e-9a58-04284d4572cf.jpg?v=195",
        ],
        bgc: "#0d2025",
    },
    {
        idx: 2,
        name: "purosangue",
        slo: "그 무엇과도 다른",
        src: "./img/index/purosangue.png",
        cvid: [
            "https://ferrari-cdn.thron.com/static/M83MPR_F175_Fascination_revised_2022_09_08_GN6T2P.mp4?xseo=",
            "https://ferrari-cdn.thron.com/delivery/public/video/ferrari/bf05745e-410c-42fb-b7eb-f182d6b7984b/bocxuw/WEBFULLHD/telaio_scocca_v03"
        ],
        csum: "페라리 푸로산게는 페라리 역사상 최초의 4 도어 4인승 차량입니다. 그러나 앞뒤 각 두 개의 좌석을 장착한 2+2 차량은 페라리 초창기부터 전략적으로 중요한 모델이었습니다. 대다수 페라리 차량의 성공은 뛰어난 성능과 일등석을 탄 듯한 편안함 덕분이었습니다. 그리고 이제, 페라리는 75년간 수행해온 첨단 연구의 정점에서, 성능과 운전의 즐거움, 편안함이 완벽한 조화를 이루며 페라리만의 독특한 DNA를 응축한 전 세계 유일무이한 차량을 탄생시켰습니다. 바로 이 때문에 이태리어로 이태리어로 '서러브레드(‘thoroughbred, 순종)'를 의미하는 푸로산게라는 모델명이 선택되었습니다.",
        cper: {
            eng: "V12 65˚",
            zero: "",
            hp: "725",
            psum: "",
        },
        cdes: "진정한 페라리 라운지",
        part: ["ADLER", "AGP", "APTIV", "ART", "ASK", "BOSCH", "BREMBO", "BRIDGESTONE", "BURMESTER", "CPC", "FAURECIA", "FICOMIRRORS", "FONTANA", "HELLA", "IBER OLEFF", "LEAR", "MAGNA TS", "MAHLE", "MARELLI", "METHODE"],
        logo: "https://cdn.ferrari.com/cms/network/media/img/resize/6319e2f974b2846f6b4ab57c-ferrari-purosangue-logo-site-launch?",
        psrc: [
            "https://cdn.ferrari.com/cms/network/media/img/resize/631b4b3e30c90b54c7788e9b-ferrari-purosangue-intro-cover-desk-new-2?width=1920&height=1600",
            "https://cdn.ferrari.com/cms/network/media/img/resize/631b4f89712d0c1f62d29668-ferrari-purosangue-dynamics-desk-new-2?width=1920&height=1080",
            "https://cdn.ferrari.com/cms/network/media/img/resize/6319fbc5b0abe34c81ed719d?width=1920&height=1080",
            "https://cdn.ferrari.com/cms/network/media/img/resize/6318ae34249fce08ae4cdd1a-ferrari-purosangue-tech-spech-cover-desk?",
            "https://ferrari-cdn.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/1024x768/636fb1a8-a1a0-4531-ac79-ad009a1ffd57.jpg?v=284",
        ],
        bgc: "#430000",
    },
    {
        idx: 3,
        name: "roma",
        slo: "시간을 초월한 우아함",
        src: "./img/index/roma.png",
        cvid: [
            "https://ferrari-cdn.thron.com/delivery/public/video/ferrari/4681ff51-f971-4773-a8f0-98428ad815e0/bocxuw/WEBFULLHD/ferrari-roma-intro-it",
            "https://ferrari-cdn.thron.com/delivery/public/video/ferrari/12231eca-aa93-492c-b453-91d5071b406b/bocxuw/WEBFULLHD/ferrari-roma-engine-intro-des"
        ],
        csum: "페라리 로마는 페라리의 새로운 미드-프론트 엔진 2+ 쿠페로 세련된 비율과 시대를 초월한 디자인이 특징이며 탁월한 성능과 핸들링을 자랑합니다. 독특한 감각과 스타일의 이 자동차는 1950년대와 60년대 로마의 평온하고 즐거운 삶의 방식을 현대적으로 표현했습니다.",
        cper: {
            eng: "V8",
            zero: "3.4",
            hp: "620",
            psum: "페라리 로마는 4년 연속 세계 올해의 엔진상을 수상한 제품군에 속하는 V8 터보차저 엔진 덕분에 동일 카테고리 내에서 최고의 성능을 자랑합니다. 이 버전의 엔진은 7,500rpm에서 620마력의 힘을 내고 SF90 스트라달레를 통해 선보인 신형 8단 DCT 변속기와 결합됩니다.",
        },
        cdes: "스포츠와 럭셔리",
        part: ["APPLE", "ADLER", "APTIV", "ART", "BITRON", "BOSCH", "BREMBO", "BRIDGESTONE", "FICOMIRRORS", "FONTANA", "FRAU", "IHI", "IMR", "LEAR", "MAGNA TS", "MARELLI", "METEOR", "MICHELIN", "MHG", "OMR"],
        logo: "https://cdn.ferrari.com/cms/network/media/img/resize/5e31b63f0bd18308db19fae7-ferrari-roma-logo-v2?",
        psrc: [
            "https://cdn.ferrari.com/cms/network/media/img/resize/5dcbcb572cdb32285a764c31-d-ferrari-roma-intro-img?width=1920&height=1600",
            "https://cdn.ferrari.com/cms/network/media/img/resize/5dcbcbb0f8fc7b0aa904b4cb-d-ferrari-roma-design-img?width=1920&height=1080",
            "https://ferrari-cdn.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/1024x768/12bce541-9990-42a6-93d6-d15d61af0cbf.jpg?v=195",
            "https://ferrari-view.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/1024x768/6d69c934-6a1c-4fe0-a935-71f32dd7436c.jpg?v=195",
            "https://ferrari-cdn.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/1024x768/9a2cc9c6-ffcc-4bac-87d3-1bb9d68cdb0d.jpg?v=195",
        ],
        bgc: "#d0dddd",
    },
    {
        idx: 4,
        name: "sf90-stradale",
        slo: "상상을 넘어서",
        src: "./img/index/sf90-stradale.png",
        cvid: [
            "https://ferrari-cdn.thron.com/delivery/public/video/ferrari/9a9d2452-4f5d-4294-b42d-7dcdfb55d0e8/bocxuw/WEBFULLHD/official-video-173",
            "https://ferrari-cdn.thron.com/delivery/public/video/ferrari/63d725dd-c8aa-40d2-a14f-9b3187b30449/bocxuw/WEBFULLHD/03A_PTU_Intro_v06_desktop"
        ],
        csum: "이 차의 이름은 성능면에서 이뤄낸 모든 성과를 함축하고 있습니다. 페라리의 경주용 차와 공도용 차 사이에 항상 존재해 온 강력한 연결고리를 강조하기 위해 스쿠데리아 페라리(Scuderia Ferrari) 창립 90주년을 이름에 담았습니다. SF90 스트라달레는 페라리의 가장 진보된 기술을 집약시킨 차로, 페라리가 경주를 통해 습득한 지식과 기술을 어떻게 양산차에 바로 적용시켰는지 완벽하게 보여주는 모델입니다",
        cper: {
            eng: "V8",
            zero: "2.5",
            hp: "780",
            psum: "SF90 스트라달레는 페라리 역사상 최초의 PHEV 차량으로 3개의 전기모터와 통합된 내연기관을 장착했으며 전기 모터 중 2개는 독립적이며 앞 차축에 위치하고 있고, 후방에 있는 나머지 하나는 엔진과 기어박스 사이에 놓여 있습니다. ",
        },
        cdes: "미래 지향적 디자인",
        part: ["APPLE", "APTIV", "ART SPA", "BOSCH", "BREMBO", "CONTINENTAL", "DANA GRAZIANO", "DTS", "FONDERIE 3M", "FONTANA GROUP", "IHI", "MAGNA TS", "MAGNETI MARELLI", "MAHLE", "MICHELIN", "OMR", "PIRELLI", "SABELT", "SAINT GOBAIN SEKURIT", "SHELL"],
        logo: "https://cdn.ferrari.com/cms/network/media/img/resize/5dd3f1690cf6995f44de9161-ferrari-sf90-stradale-logo-line-up?",
        psrc: [
            "https://cdn.ferrari.com/cms/network/media/img/resize/5e859916bdab4269899fe275-d-intro-f173?width=1920&height=1600",
            "https://ferrari-cdn.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/1024x768/53b12318-9b06-4fb2-8f40-e2630fdb5e9b.jpg?v=252",
            "https://ferrari-cdn.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/1024x768/c3b89d3e-2f28-4d60-9775-4d076ccf16e8.jpg?v=252",
            "https://ferrari-cdn.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/1024x768/6079b891-13fb-4fd4-9970-6004ac79613c.jpg?v=252",
            "https://ferrari-cdn.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/1024x768/45e74727-283f-4262-b147-e3dfdc1e55ce.jpg?v=252",
        ],
        bgc: "#303030",
    },
    {
        idx: 5,
        name: "296-gts",
        slo: "운전의 즐거움, 그 본보기가 되다",
        src: "./img/index/296-gts.png",
        cvid: [
            "https://ferrari-cdn.thron.com/static/MVAIMC_GT-Copertina_Ferrari_GTS_768x1024_1QI4W1.mp4?xseo="
        ],
        csum: "페라리의 미드-리어 엔진을 장착한 2인승 베를리네타 스파이더의 진화, 296 GTS는 플러그-인(PHEV) 전기 모터와 결합된 신형 120° V6엔진(296 GTB 때 처음으로 장착)을 탑재, 총 830cv에 이르는 엄청난 출력을 선사합니다. 이 차량은 “운전의 재미”라는 개념을 완전히 재정의하고 있으며 한계 상황 뿐만 아니라 일상 주행에서도 순수한 감성을 보장합니다.  ",
        cper: {
            eng: "V6 120˚",
            zero: "",
            hp: "",
            psum: "296 GTB의 깔끔하고 정교한 라인을 더욱 강조하기 위해 296 GTS에 변화를 주었습니다. 하드톱을 연 296 GTS의 모습은 오픈-에어 하이브리드 콘셉트에 있어서다른 차량과 비교할 수 없는 우아함의 전형을 보여주고 있습니다. 스파이더 모델을 위한 이 전례 없는 아키텍처는 페라리 역사의 새 장을 열었다고 할 수 있습니다. 디자이너들의 목표는 296 GTB의 주요 특성을 유지하는 것이었습니다. 이를 위해 기술적인 구성 요소들의 치수에 대한 세심한 분석 기간을 거쳤습니다. 디자이너들은 차체 외관 변경에 대한 영향을 최소화하는 데 중점을 두었습니다. 동시에 디자인의 복잡성을 압축하면서 완성된 유선형으로 변환시키는, 명확하고 즉각적으로 알아볼 수 있는 디자인 테마를 도입하였습니다.",
        },
        cdes: "복잡성이 만들어낸 단순함",
        part: ["APPLE", "APTIV", "BOSCH", "BREMBO", "IHI", "MAGNA TS", "MAHLE", "MARELLI", "METEOR", "MICHELIN", "OMR", "PIRELLI", "SHELL", "ZF", "SABELT", "FRAU", "SAINT GOBAIN SEKURIT", "ADLER", "FONTANA GROUP", "VALEO"],
        logo: "https://cdn.ferrari.com/cms/network/media/img/resize/6259141e91e1817daad41dd9-ferrari-296-gtb-logo-header-page-new?",
        psrc: [
            "https://cdn.ferrari.com/cms/network/media/img/resize/62592e7e71e8055a6c7f3aaf-ferrari-296-gts-intro-desk?width=1920&height=1600",
            "https://ferrari-cdn.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/1024x768/71421241-bc14-4acb-b8af-7881f7cbd064.jpg?v=226",
            "https://ferrari-cdn.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/1024x768/ba39a78c-fb8b-44a9-84c9-ec81a8fd6fc5.jpg?v=226",
            "https://ferrari-cdn.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/1024x768/67d16621-7002-4e72-a578-3a02c9bd9620.jpg?v=226",
            "https://ferrari-cdn.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/1024x768/17fb41a7-6ca2-4890-a54c-70a5dc2fc00e.jpg?v=226",
        ],
        bgc: "#001C35",
    },
    {
        idx: 6,
        name: "296-gtb",
        slo: "운전의 즐거움을 정의하다",
        src: "./img/index/296-gtb.png",
        cvid: [
            "https://ferrari-cdn.thron.com/delivery/public/video/ferrari/5feee24d-b9af-49b5-b4ab-72937a458461/rstc5j/WEBHD/gt-ferrari_296gtb_copertina_768x1024_astratta"
        ],
        csum: "미드리어 엔진을 장착한 2인승 베를리네타 스포츠카의 진화, 296 GTB는 플러그인PHEV 전기 모터와 결합된 신형 120° V6엔진을 탑재, 830마력에 이르는 출력을 선보이며 페라리의 혁신을 세상에 선보였습니다. 이 차는 극강의 퍼포먼스를 추구하는 순간 뿐 아니라 일상 주행에서도 순수한 즐거움을 제공하며 운전의 재미를 재정의하고 있습니다. ",
        cper: {
            eng: "V6 120˚",
            zero: "",
            hp: "830",
            psum: "",
        },
        cdes: "콤팩트함과 모던함",
        part: ["APPLE", "APTIV", "BOSCH", "BREMBO", "IHI", "MAGNA TS", "MAHLE", "MARELLI", "METEOR", "MICHELIN", "OMR", "PIRELLI", "SHELL", "ZF", "SABELT", "FRAU", "SAINT GOBAIN SEKURIT", "ADLER", "FONTANA GROUP", "VALEO"],
        logo: "https://cdn.ferrari.com/cms/network/media/img/resize/60d0651c61e4197d910f0217-ferrari-296-gtb-2021-logo-header?",
        psrc: [
            "https://cdn.ferrari.com/cms/network/media/img/resize/60d0b58c9b071e08fb36d6b5-ferrari-296-gtb-intro-desk-2?width=1920&height=1600",
            "https://ferrari-cdn.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/1024x768/49afda1a-0dfd-4920-9ec4-d92e224d343e.jpg?v=195",
            "https://ferrari-cdn.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/1024x768/d7d4b25b-d006-49c2-9870-5cdf1e762c81.jpg?v=195",
            "https://ferrari-cdn.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/1024x768/abd7b383-0478-4891-8c94-ea98799449ed.jpg?v=195",
            "https://ferrari-cdn.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/1024x768/7318d10b-ce23-4442-a26c-111daea1d448.jpg?v=195",
        ],
        bgc: "#23252D",
    },
    {
        idx: 7,
        name: "roma-spider",
        slo: "새로운 이야기가 시작됩니다.",
        src: "./img/index/roma-spider.png",
        cvid: [
            "https://ferrari-cdn.thron.com/delivery/public/video/ferrari/e35f89f2-00a6-4499-bd83-6d477d08767e/bocxuw/WEBFULLHD/ferrari-roma-spider-official-",
            "https://ferrari-cdn.thron.com/delivery/public/video/ferrari/906e8865-f34e-431b-a518-586bf058c295/bocxuw/WEBFULLHD/ferrari-roma-spider-interni"
        ],
        csum: "시대를 초월한 우아함과 뛰어난 성능을 가진 페라리 로마 스파이더는 즐거움을 추구했던 세련된 이탈리아인들의 1950-60년대 라이프스타일을 현대적으로 재해석한 스파이더 모델입니다. 이 스파이더는 페라리 로마를 성공작으로 만드는 데 기여한 V8 2+ 콘셉트의 비율과 볼륨, 사양을 계승하고 있습니다. 그러나 페라리 로마 스파이더를 더욱 특별하게 만드는 것은 다름 아닌 소프트톱입니다. 이 솔루션은 1969년 365 GTS4에 채택된 지 54년만에 페라리 프론트 엔진 차량에 다시 등장했습니다.",
        cper: {
            eng: "V8",
            zero: "3.4",
            hp: "620",
            psum: "",
        },
        cdes: "미의 형상",
        part: ["APPLE", "ADLER", "APTIV", "ART", "BITRON", "BOSCH", "BREMBO", "BRIDGESTONE", "FICOMIRRORS", "FONTANA", "FRAU", "IHI", "IMR", "LEAR", "MAGNA TS", "MARELLI", "METEOR", "MICHELIN", "MHG", "OMR"],
        psrc: [],
        bgc: "",
    },
    {
        idx: 8,
        name: "812-gts",
        slo: "",
        src: "./img/index/812-gts.png",
        cvid: [],
        csum: "",
        cper: {
            eng: "",
            zero: "",
            hp: "",
            psum: "",
        },
        cdes: "",
        part: [],
        psrc: [],
        bgc: "",
    },
    {
        idx: 9,
        name: "daytona-sp3",
        slo: "",
        src: "./img/index/daytona-sp3.png",
        cvid: [],
        csum: "",
        cper: {
            eng: "",
            zero: "",
            hp: "",
            psum: "",
        },
        cdes: "",
        part: [],
        psrc: [],
        bgc: "",
    },
    {
        idx: 10,
        name: "df90-spider",
        slo: "",
        src: "./img/index/df90-spider.png",
        cvid: [],
        csum: "",
        cper: {
            eng: "",
            zero: "",
            hp: "",
            psum: "",
        },
        cdes: "",
        part: [],
        psrc: [],
        bgc: "",
    },
    {
        idx: 11,
        name: "monza-sp1",
        slo: "",
        src: "./img/index/monza-sp1.png",
        cvid: [],
        csum: "",
        cper: {
            eng: "",
            zero: "",
            hp: "",
            psum: "",
        },
        cdes: "",
        part: [],
        psrc: [],
        bgc: "",
    },
    {
        idx: 12,
        name: "monza-sp2",
        slo: "",
        src: "./img/index/monza-sp2.png",
        cvid: [],
        csum: "",
        cper: {
            eng: "",
            zero: "",
            hp: "",
            psum: "",
        },
        cdes: "",
        part: [],
        psrc: [],
        bgc: "",
    },
];
export default mdata;
