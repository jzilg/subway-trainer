export type SubwayLines = Record<string, Record<string, string[]>>

const u1 = {
    u2: [
        'Gleisdreieck',
        'Nollendorfplatz',
        'Wittenbergplatz'
    ],
    u4: [
        'Nollendorfplatz',
    ],
    u6: [
        'Hallesches Tor',
    ],
    u7: [
        'Möckernbrücke',
    ],
    u8: [
        'Kottbuser Tor',
    ],
    u9: [
        'Kurfürstendamm',
    ]
}

const u2 = {
    u1: u1.u2,
    u3: [
        'Gleisdreieck',
        'Nollendorfplatz',
        'Wittenbergplatz'
    ],
    u4: [
        'Nollendorfplatz',
    ],
    u5: [
        'Alexanderplatz',
    ],
    u6: [
        'Stadtmitte',
    ],
    u7: [
        'Bismarckstraße',
    ],
    u8: [
        'Alexanderplatz',
    ],
    u9: [
        'Zoologischer Garten'
    ]
}

const u3 = {
    u2: u2.u3,
    u4: [
        'Nollendorfplatz',
    ],
    u6: [
        'Hallesches Tor',
    ],
    u7: [
        'Möckernbrücke',
    ],
    u8: [
        'Kottbuser Tor',
    ],
    u9: [
        'Spichernstraße',
    ]
}

const u4 = {
    u1: u1.u4,
    u2: u2.u4,
    u3: u3.u4,
    u7: [
        'Bayrischer Platz'
    ],
}

const u5 = {
    u2: u2.u5,
    u6: [
        'Unter den Linden',
    ],
    u8: [
        'Alexanderplatz',
    ],
}

const u6 = {
    u1: u1.u6,
    u2: u2.u6,
    u3: u3.u6,
    u5: u5.u6,
    u7: [
        'Mehringdamm',
    ],
    u9: [
        'Leopoldplatz'
    ]
}

const u7 = {
    u1: u1.u7,
    u2: u2.u7,
    u3: u3.u7,
    u4: u4.u7,
    u6: u6.u7,
    u8: [
        'Hermannplatz',
    ],
    u9: [
        'Berliner Straße',
    ],
}

const u8 = {
    u1: u1.u8,
    u2: u2.u8,
    u3: u3.u8,
    u5: u5.u8,
    u7: u7.u8,
    u9: [
        'Osloer Straße',
    ],
}

const u9 = {
    u1: u1.u9,
    u2: u2.u9,
    u3: u3.u9,
    u6: u6.u9,
    u7: u7.u9,
    u8: u8.u9,
}


const subwayLines: SubwayLines = {
    u1,
    u2,
    u3,
    u4,
    u5,
    u6,
    u7,
    u8,
    u9,
}

export default subwayLines
