INSERT INTO CATEGORIA(NM_CATEGORIA) VALUE
    ("Ficção"),
    ("científica"),
    ("Sátira"),
    ("Thriller"),
    ("psicológico"),
    ("Antologia"),
    ("gore"),
    ("Cyberpunk"),
    ("Adulto"),
    ("Animacao"),
    ("Samurai"),
    ("Magica"),
    ("Meccha"),
    ("Historico"),
    ("Anime"),
    ("Baseado em quadrinhos"),
    ("Vigilante"),
    ("DC Comics"),
    ("Super Herois"),
    ("Investigação"),
    ("Viagem no Tempo"),
    ("Surrealismo"),
    ("Policial"),
    ("Misterio"),
    ("sobrenatural"),
    ("Horror"),
    ("1980s"),
    ("Mundo Paralelo"),
    ("thriller psicológico");
INSERT INTO SERIE VALUES (
    "1", "Black Mirror", "Black Mirror",
    2011,5, 11,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra, massa vitae eleifend tempor, ligula augue hendrerit est, eu feugiat ligula dui vitae ex. Donec quis tellus non metus gravida suscipit. Praesent sit amet ex in est interdum pharetra id eu purus."
);
INSERT INTO SERIE_CATEGORIA VALUES (1,1),(1,2),(1,3),(1,4),(1,5),(1,6);
INSERT INTO EPISODIO VALUES
    (
        "1", 1, 1,
        "O hino Nascional", "The National Anthem",
        "2011-12-04", 100,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra, massa vitae eleifend tempor, ligula augue hendrerit est, eu feugiat ligula dui vitae ex. Donec quis tellus non metus gravida suscipit. Praesent sit amet ex in est interdum pharetra id eu purus.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra, massa vitae eleifend tempor, ligula augue hendrerit est, eu feugiat ligula dui vitae ex."
    ),
    (
        "1", 5, 2,
        "O hino Nascional", "The National Anthem",
        "2011-11-04", 20,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra, massa vitae eleifend tempor, ligula augue hendrerit est, eu feugiat ligula dui vitae ex. Donec quis tellus non metus gravida suscipit. Praesent sit amet ex in est interdum pharetra id eu purus.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra, massa vitae eleifend tempor, ligula augue hendrerit est, eu feugiat ligula dui vitae ex."
    ),
    (
        "1", 5, 3,
        "O hino Nascional", "The National Anthem",
        "2011-12-04", 100,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra, massa vitae eleifend tempor, ligula augue hendrerit est, eu feugiat ligula dui vitae ex. Donec quis tellus non metus gravida suscipit. Praesent sit amet ex in est interdum pharetra id eu purus.",
        NULL
    ),
    (
        "1", 4, 3,
        "O hino Nascional", "The National Anthem",
        "2011-12-04", 100,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra, massa vitae eleifend tempor, ligula augue hendrerit est, eu feugiat ligula dui vitae ex. Donec quis tellus non metus gravida suscipit. Praesent sit amet ex in est interdum pharetra id eu purus.",
        NULL
    );
INSERT INTO SERIE VALUES (
    "2", "Amor, Morte & Robôs", "Love Death + Robots",
    2005,2, 28,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra, massa vitae eleifend tempor, ligula augue hendrerit eit amet, consectetur adipiscing elit. Praesent viverra, massa vitae eleifend tempor, ligula augue hendrerit est, eu feugiat ligula dui vitae ex. Donec quis tellus non metus gravida suscipit. Praesent sit amet ex in est interdum pharetra id eu purus."
);
INSERT INTO SERIE_CATEGORIA VALUES (2,7),(2,8),(2,9),(2,10),(2,6);
INSERT INTO EPISODIO VALUES
    (
        "2", 1, 1,
        "O hino Nascional", "The National Anthem",
        "2011-12-04", 100,
        "",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra, massa vitae eleifend tempor, ligula augue hendrerit est, eu feugiat ligula dui vitae ex."
    ),
    (
        "2", 1, 2,
        "O hino Nascional", "The National Anthem",
        "2011-11-04", 20,
        "Lorem  uscipit. Praesent sit amet ex in est interdum pharetra id eu purus.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praese tae ex."
    ),
    (
        "2", 2, 1,
        "O hino Nascional", "The National Anthem",
        "2011-12-04", 100,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra, massa vitae eleifend tempor, ligula augue hendrerit  x in est interdum pharetra id eu purus.",
        NULL
    ),
    (
        "2", 2, 2,
        "O hino Nascional", "The National Anthem",
        "2011-12-04", 100,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra, massa vitae eleifend tem ex. Donec quis tellus non metus gravida suscipit. Praesent sit amet ex in est interdum pharetra id eu purus.",
        NULL
    );
INSERT INTO SERIE VALUES (
    "3", "Yasuke", "Yasuke",
    2005,1, 6,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra, massa vitae eleifend tempor, ligula augue hendrerit est, eu feugiat ligula dui vitae ex. Donec quis tellus non metus gravida suscipit. Praesent sit amet ex in est interdum pharetra id eu purus."
);
INSERT INTO SERIE_CATEGORIA VALUES (3,11),(3,12),(3,13),(3,14),(3,15);
INSERT INTO EPISODIO VALUES
    (
        "3", 1, 1,
        "Lorem ipsum", "Lorem ipsum",
        "2021-04-29", 20,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra, massa vitae eleifend tempor, ligula augue hendrerit est, eu feugiat ligula dui vitae ex. Donec quis tellus non metus gravida suscipit. Praesent sit amet ex in est interdum pharetra id eu purus.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    ),
    (
        "3", 1, 2,
        "Lorem ipsum", "Lorem ipsum",
        "2021-04-29", 25,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra, massa vitae eleifend tempor, ligula augue hendrerit est, eu feugiat ligula dui vitae ex. Donec quis tellus non metus gravida suscipit. Praesent sit amet ex in est interdum pharetra id eu purus.",
        NULL
    ),
    (
        "3", 1, 3,
        "Lorem ipsum", "Lorem ipsum",
        "2021-04-29", 20,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra, massa vitae eleifend tempor, ligula augue hendrerit est, eu feugiat ligula dui vitae ex. Donec quis tellus non metus gravida suscipit. Praesent sit amet ex in est interdum pharetra id eu purus.",
        NULL
    ),
    (
        "3", 1, 4,
        "Lorem ipsum 2.0", "Avemaria",
        "2021-04-29", 29,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra, massa vitae eleifend tempor, ligula augue hendrerit est, eu feugiat ligula dui vitae ex. Donec quis tellus non metus gravida suscipit. Praesent sit amet ex in est interdum pharetra id eu purus.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    ),
    (
        "3", 1, 5,
        "Lorem ipsum", "Lorem ipsum",
        "2021-04-29", 25,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra, massa vitae eleifend tempor, ligula augue hendrerit est, eu feugiat ligula dui vitae ex. Donec quis tellus non metus gravida suscipit. Praesent sit amet ex in est interdum pharetra id eu purus.",
        NULL
    ),
    (
        "3", 1, 6,
        "Lorem ipsum 3.0", "Oxente 3.0",
        "2021-04-29", 23,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra, massa vitae eleifend tempor, ligula augue hendrerit est, eu feugiat ligula dui vitae ex. Donec quis tellus non metus gravida suscipit. Praesent sit amet ex in est interdum pharetra id eu purus.",
        NULL
    );
INSERT INTO SERIE VALUES (
    "4", "Arqueiro", "Arrow",
    2012,8, 170,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra, massa vitae eleifend tempor, ligula augue hendrerit est, eu feugiat ligula dui vitae ex. Donec quis tellus non metus gravida suscipit. Praesent sit amet ex in est interdum pharetra id eu purus."
);
INSERT INTO SERIE_CATEGORIA VALUES (4,16),(4,17),(4,18),(4,19);
INSERT INTO EPISODIO VALUES
    (
        "4", 1, 1,
        "OIA A FRECHA", "Look at the arrow",
        "2012-10-20", 20,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra, massa vitae eleifend tempor, ligula augue hendrerit est, eu feugiat ligula dui vitae ex. Donec quis tellus non metus gravida suscipit. Praesent sit amet ex in est interdum pharetra id eu purus.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    ),
    (
        "4", 2, 2,
        "Sem dor Sem Vacina", "No pain no gain",
        "2012-10-20", 20,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra, massa vitae eleifend tempor, ligula augue hendrerit est, eu feugiat ligula dui vitae ex. Donec quis tellus non metus gravida suscipit. Praesent sit amet ex in est interdum pharetra id eu purus.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    );
INSERT INTO SERIE VALUES (
    "5", "Dark", "Dark",
    2005,2, 26,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra, massa vitae eleifend tempor, ligula augue hendrerit est, eu feugiat ligula dui vitae ex. Donec quis tellus non metus gravida suscipit. Praesent sit amet ex in est interdum pharetra id eu purus."
);
INSERT INTO SERIE_CATEGORIA VALUES (5,20),(5,21),(5,22),(5,23),(5,24);
INSERT INTO EPISODIO VALUES
    (
        "5", 1, 1,
        "DORK", "Dark",
        "2020-10-20", 20,
        NULL,
        NULL
    ),
    (
        "5", 1, 2,
        "Dia 2", "Day 2",
        "2020-10-20", 20,
        "Loex. Donec quis tellus non metus gravida suscipit. Praesent sit amet ex in est interdum pharetra id eu purus.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    ),
    (
        "5", 1, 3,
        "Dia 1", "Day 1",
        "2020-10-20", 20,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra, massa vitae eleifend tempor, ligula augue hendrerit  Praesent viverra, massa vitae eleifend tempor, ligula augue hendrerit est, eu feugiat ligula dui vitae ex. Donec quis tellus non metus gravida suscipit. Praesent sit amet ex in est interdum pharetra id eu purus.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    ),
    (
        "5", 1, 4,
        "Dia -3", "Dia -3",
        "2020-10-20", 20,
        "Lorem ipsum dolor sit am  hendrerit est, eu feugiat ligula dui vitae ex. Donec quis tellus non metus gravida suscipit. Praesent sit amet  id eu purus.",
        NULL
    ),
    (
        "5", 2, 1,
        "Amanha", "Tomorrow",
        "2021-06-03", 30,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra, massa vitae eleifend tempor, ligula augue hendrer",
        NULL
    ),
    (
        "5", 2, 2,
        "Ontem", "Yesterday",
        "2021-06-01", 30,
        "Lorem ipsum dolor s e eleifend tempor, ligula augue hendrerit est, eu feugiat ligula dui vitae ex. Donec quis tellus non metus gravida suscipit. Praesent sit amet ex in est interdum pharetra id eu purus.",
        NULL
    ),
    (
        "5", 2, 3,
        "2023", "2023",
        "2023-06-01", 30,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra, massa vitae eleifend tempor, ligula augue hendrerit est, eu feugiatt ex in est interdum pharetra id eu purus.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    );
INSERT INTO SERIE VALUES (
    "6", "Stranger Things", "Stranger Things",
    2005,3, 25,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra, massa vitae eleifend tempor, ligula augue hendrerit est, eu feugiat ligula dui vitae ex. Donec quis tellus non metus gravida suscipit. Praesent sit amet ex in est interdum pharetra id eu purus."
);
INSERT INTO SERIE_CATEGORIA VALUES (6,25),(6,26),(6,27),(6,28),(6,29);
INSERT INTO EPISODIO VALUES
    (
        "6", 1, 1,
        "OIA O MONSTRO", "Look at the the monster",
        "2015-12-10", 20,
        NULL,
        NULL
    ),
    (
        "6", 2, 2,
        "KAPA KAPA", "KAPA KAPA",
        "2015-12-10", 20,
        "Lorem ipsum dolor sit a ndrerit est, eu feugiat ligula dui vitae ex. Donec quis tellus non metus gravida suscipit. Praesent sit amet ex in est interdum pharetra id eu purus.",
        "Lorem ipsum d dipiscing elit."
    ),
    (
        "6", 3, 2,
        "KAPA KAPA", "KAPA KAPA",
        "2015-12-10", 20,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra, massa vitae eleifend tempor, ligula augue he cipit. Praesent sit amet ex in est interdum pharetra id eu purus.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    );