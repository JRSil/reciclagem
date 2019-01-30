var lojasData = [
    /*{
      "pev": "CD Eusébio",
      "end": "Rua Rufino Ferreira Filho, S/N, Parque Santa Clara, CEP: ,Eusébio,Ceará",
      "horario": "Segunda a sábado: Das 09:00 as 17:00",
      "tipo": "Corporativo",
      "regiao": "Ceará",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-3.867775,+-38.4846639"
    },
    {
      "pev": "CD - Guarulhos",
      "end": "Rua landri sales, 1070, Água Chata, CEP: 07175-450,Guarulhos,São Paulo",
      "horario": "Segunda a sábado: Das 09:00 as 17:00",
      "tipo": "Corporativo",
      "regiao": "São Paulo",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-23.4288885,+-46.3751397"
    },
    {
      "pev": "Emporium São Paulo - Afonso Braz",
      "end": "Rua Afonso Braz, 431, Vila Nova Conceição, CEP: 04511-011,São Paulo,São Paulo",
      "horario": "Segunda a sábado: Das 7h às 22h",
      "tipo": "Varejo",
      "regiao": "São Paulo",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-23.5960766,+-46.6680279"
    },
    {
      "pev": "Emporium São Paulo - Moema",
      "end": "Avenida Jurema, 271, Indianôpolis, CEP: 04079-001,São Paulo,São Paulo",
      "horario": "Segunda a sábado: Das 7h às 22h",
      "tipo": "Varejo",
      "regiao": "São Paulo",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-23.6078973,+-46.65943069999999"
    },
    {
      "pev": "Emporium São Paulo - Itaim Bibi",
      "end": "Rua R. Pedroso Alvarenga, 803, Itaim Bibi, CEP: 03178-200,São Paulo,São Paulo",
      "horario": "Segunda a sábado: Das 7h às 22h",
      "tipo": "Varejo",
      "regiao": "São Paulo",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-23.5820216,+-46.6783432"
    },
    {
      "pev": "Enel - Reserva Open Mall",
      "end": "Avenida Washington Soares, 3000, Engenheiro Luciano Cavalcante, CEP: 60810-350,Fortaleza,Ceará",
      "horario": "07-22h (segunda a domingo)",
      "tipo": "Varejo",
      "regiao": "Ceará",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-3.78361,+-38.48195330000001"
    },
    {
      "pev": "Enel - Rio Mar",
      "end": "Rua Desembargador Lauro Nogueira, 1500, Papicu, CEP: 60175-055,Fortaleza,Ceará",
      "horario": "07-22h (segunda a domingo)",
      "tipo": "Varejo",
      "regiao": "Ceará",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-3.7411363,+-38.4717768"
    },
    {
      "pev": "Escritórios Integradora Eusébio",
      "end": "Rua Santa Clara, 100, Santa Clara, CEP: ,Eusébio,Ceará",
      "horario": "Segunda a sábado: Das 09:00 as 17:00",
      "tipo": "Corporativo",
      "regiao": "Ceará",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-3.9030295,+-38.4487679"
    },
    {
      "pev": "Hirota - Ipiranga",
      "end": "Avenida Nazaré, 1299, Ipiranga, CEP: 04263-000,São Paulo,São Paulo",
      "horario": "Segunda a sábado: Das 8h às 21h",
      "tipo": "Varejo",
      "regiao": "São Paulo",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-23.5954674,+-46.6095364"
    },
    {
      "pev": "Hirota - Mooca",
      "end": "Rua Teresina, 319, Vila Bertioga, CEP: 03185-010,São Paulo,São Paulo",
      "horario": "Segunda a sábado: Das 8h às 21h",
      "tipo": "Varejo",
      "regiao": "São Paulo",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-23.5623205,+-46.5830551"
    },
    {
      "pev": "Hirota - Santa Cecília",
      "end": "Avenida General Olímpio da Silveira, 39, Santa Cecília, CEP: 01150-001,São Paulo,São Paulo",
      "horario": "Segunda a sábado: Das 8h às 21h",
      "tipo": "Varejo",
      "regiao": "São Paulo",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-23.5330768,+-46.6571288"
    },
    {
      "pev": "Hirota - Saúde",
      "end": "Avenida Jabaquara, 1920, Saúde, CEP: 14750-000,São Paulo,São Paulo",
      "horario": "Segunda a sábado: Das 8h às 21h",
      "tipo": "Varejo",
      "regiao": "São Paulo",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-23.6212903,+-46.6401013"
    },
    {
      "pev": "Hirota - Vila Monumento",
      "end": "Rua Gaspar Fernandes, 452, Vila Monumento, CEP: 01549-000,São Paulo,São Paulo",
      "horario": "Segunda a sábado: Das 8h às 21h",
      "tipo": "Varejo",
      "regiao": "São Paulo",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-23.5750146,+-46.6163563"
    },
    {
      "pev": "Integradora - Eusébio",
      "end": "Rua Santa Clara, 100, Parque Santa Clara, CEP: 61760-000,Eusébio,Ceará",
      "horario": "Segunda a sábado: Das 09:00 as 17:00",
      "tipo": "Corporativo",
      "regiao": "Ceará",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-3.8657004,+-38.4848345"
    },
    {
      "pev": "Preço & Cia. - Vila Esperança",
      "end": "Rua Maria Carlota, 577, Vila Esperança, CEP: 03647-000,São Paulo,São Paulo",
      "horario": "Segunda a sábado: Das 8h às 20h, Domingo e feriados: Das 8h às 13h",
      "tipo": "Varejo",
      "regiao": "São Paulo",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-23.5266308,+-46.52788349999999"
    },
    {
      "pev": "Preço & Cia. - Tatuapé",
      "end": "Rua R. Tuiuti, 904, Tatuapé, CEP: 03081-002,São Paulo,São Paulo",
      "horario": "Segunda a sábado: Das 8h às 20h, Domingo e feriados: Das 8h às 13h",
      "tipo": "Varejo",
      "regiao": "São Paulo",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-23.5332539,+-46.57574109999999"
    },
    {
      "pev": "São Luiz - Alphaville",
      "end": "Avenida Litorânea, 2010, Cararu, CEP: ,Fortaleza,Ceará",
      "horario": "Segunda à Sábado: 07:00 - 21:00, Domingo e Feriados: 07:00 - 19:00",
      "tipo": "Varejo",
      "regiao": "Ceará",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-3.8268845,+-38.4297766"
    },
    {
      "pev": "São Luiz - Barão de Sturdat",
      "end": "Avenida Barão de Sturdat, 2675, Joaquim Távora, CEP: ,Fortaleza,Ceará",
      "horario": "Segunda à Sábado: 07:00 - 21:00, Domingo e Feriados: 07:00 - 20:00",
      "tipo": "Varejo",
      "regiao": "Ceará",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-3.7470004,+-38.51036879999999"
    },
    {
      "pev": "São Luiz - Benfica",
      "end": "Avenida Carapinima, 2200, Benfica, CEP: ,Fortaleza,Ceará",
      "horario": "Segunda à Sábado: 08:00 - 22:00, Domingo e Feriados: 08:00 - 21:00",
      "tipo": "Varejo",
      "regiao": "Ceará",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-3.7387429,+-38.5398037"
    },
    {
      "pev": "São Luiz - Cambeba",
      "end": "Avenida Whashington Soares, 6180, Alagadiço Novo, CEP: ,Fortaleza,Ceará",
      "horario": "Segunda à Sábado: 07:00 - 22:00, Domingo e Feriados: 07:00 - 22:00",
      "tipo": "Varejo",
      "regiao": "Ceará",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-3.757442,+-38.489337"
    },
    {
      "pev": "São Luiz - Cocó",
      "end": "Avenida Engenheiro Santana Júnior, 2977, Cocô, CEP: ,Fortaleza,Ceará",
      "horario": "Segunda à Sábado: 07:00 - 00:00, Domingo e Feriados: 07:00 - 22:00",
      "tipo": "Varejo",
      "regiao": "Ceará",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-3.7457108,+-38.4889351"
    },
    {
      "pev": "São Luiz - Dunas",
      "end": "Avenida Engenheiro Alberto Sá, 1111, Dunas, CEP: ,Fortaleza,Ceará",
      "horario": "Segunda à Sábado: 07:00 - 22:00, Domingo e Feriados: 07:00 - 20:00",
      "tipo": "Varejo",
      "regiao": "Ceará",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-3.735354099999999,+-38.4721374"
    },
    {
      "pev": "São Luiz - Oliveira Paiva",
      "end": "Rua Francisco Borges Soares, 170, Cambeba, CEP: 60822-310,Fortaleza,Ceará",
      "horario": "Segunda à Sábado: 07:00 - 00:00, Domingo e Feriados: 07:00 - 22:00",
      "tipo": "Varejo",
      "regiao": "Ceará",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-3.761889,+-38.4833068"
    },
    {
      "pev": "São Luiz - Pontes Vieira",
      "end": "Avenida Pontes Vieira, 1486, Dionísio Torres, CEP: ,Fortaleza,Ceará",
      "horario": "Segunda à Sábado: 07:00 - 22:00, Domingo e Feriados: 07:00 - 21:00",
      "tipo": "Varejo",
      "regiao": "Ceará",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-3.7523852,+-38.5080673"
    },
    {
      "pev": "São Luiz - Praia de Iracema",
      "end": "Rua dos Tabajaras, 693, Praia de Iracema, CEP: ,Fortaleza,Ceará",
      "horario": "Segunda à Sábado: 07:00 - 21:00, Domingo e Feriados: 07:00 - 20:00",
      "tipo": "Varejo",
      "regiao": "Ceará",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-3.7197649,+-38.51361929999999"
    },
    {
      "pev": "São Luiz - Rio Mar",
      "end": "Rua Desembargador Lauro Nogueira, 1500, Papicu, CEP: 60175-055,Fortaleza,Ceará",
      "horario": "Segunda à Sábado: 09:00 - 22:00, Domingo e Feriados: 09:00 - 22:00",
      "tipo": "Varejo",
      "regiao": "Ceará",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-3.7411363,+-38.4717768"
    },
    {
      "pev": "São Luiz - Rio Mar Kennedy",
      "end": "Avenida Sargento Hermínio Sampaio, 3100, Presidente Kennedy, CEP: ,Fortaleza,Ceará",
      "horario": "Segunda à Sábado: 09:00 - 22:00, Domingo e Feriados: 09:00 - 22:00",
      "tipo": "Varejo",
      "regiao": "Ceará",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-3.7264686,+-38.566981"
    },
    {
      "pev": "São Luiz - Santos Dumont",
      "end": "Avenida Santos Dumont, 5625, Papicu, CEP: ,Fortaleza,Ceará",
      "horario": "Segunda à Sábado: 07:00 - 22:00, Domingo e Feriados: 07:00 - 20:00",
      "tipo": "Varejo",
      "regiao": "Ceará",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-3.7416939,+-38.4813044"
    },
    {
      "pev": "São Luiz - Virgílio Távora",
      "end": "Avenida Senador Virgílio Távora, 570, Aldeota, CEP: ,Fortaleza,Ceará",
      "horario": "Segunda à Sábado: 07:00 - 00:00, Domingo e Feriados: 07:00 - 20:00",
      "tipo": "Varejo",
      "regiao": "Ceará",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-3.7332078,+-38.4921425"
    },
    {
      "pev": "3corações - Ipiranga",
      "end": "Av. Nazaré, 1139, Piso Térreo, Ipiranga, CEP: 02071-012, São Paulo, São Paulo",
      "horario": "Segunda a sexta: Das 8h às 18h",
      "tipo": "Corporativo",
      "regiao": "São Paulo",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-23.5942188,+-46.6096967"
    },
    {
      "pev": "NORDESTÃO DE LAGOA NOVA",
      "end": "Av. Sen. Salgado Filho, 1656 - Lagoa Nova, Natal - RN, 59056-000",
      "horario": "Segunda à Domingo: 7:00 - 22:00, Feriados: das 7:00 - 20:00",
      "tipo": "Varejo",
      "regiao": "Rio Grande do Norte",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-5.8155594,+-35.206248"
    },
    {
      "pev": "NORDESTÃO DE CIDADE JARDIM",
      "end": "R. Leôncio Etelvino de Medeiros, 2877 - Capim Macio, Natal - RN, 59078-570",
      "horario": "Segunda à Domingo: 7:00 - 22:00, Feriados: das 7:00 - 20:00",
      "tipo": "Varejo",
      "regiao": "Rio Grande do Norte",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-5.8501198,+-35.2056522"
    },
    {
      "pev": "NORDESTÃO TIROL",
      "end": "Av. Prudente de Morais, 1140 - Tirol, Natal - RN, 59020-510",
      "horario": "Segunda à Domingo: 7:00 - 22:00, Feriados: das 7:00 - 20:00",
      "tipo": "Varejo",
      "regiao": "Rio Grande do Norte",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-5.7931848,+-35.203688"
    },
    {
      "pev": "NORDESTÃO DE NOVA PARNAMIRIM",
      "end": "Av. Maria Lacerda Montenegro, 1400 - Nova Parnamirim, Natal - RN",
      "horario": "Segunda à Domingo: 7:00 - 22:00, Feriados: das 7:00 - 20:00",
      "tipo": "Varejo",
      "regiao": "Rio Grande do Norte",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-5.8875019,+-35.2105537"
    },
    {
      "pev": "NORDESTÃO SANTA CATARINA",
      "end": "Av. Dr. João Medeiros Filho, 1835 - Potengi, Natal - RN, 59108-200",
      "horario": "Segunda à Domingo: 7:00 - 22:00, Feriados: das 7:00 - 20:00",
      "tipo": "Varejo",
      "regiao": "Rio Grande do Norte",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-5.7607705,+-35.2524458"
    },
    {
      "pev": "FAVORITO SUPERMERCADOS",
      "end": "Av. Engenheiro Roberto Freire, 1296 - Capim Macio, Natal - RN, 59082-055",
      "horario": "Segunda à Sábado: 07:00 - 19:00",
      "tipo": "Varejo",
      "regiao": "Rio Grande do Norte",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-5.8562052,+-35.1986085"
    },
    {
      "pev": "FÁBRICA 3 CORAÇÕES",
      "end": "BR 101, Km 10,5, Quadras 4 e 5, Lote 140, s/n - Nossa Sra. da Apresentação, Natal - RN, 59115-001",
      "horario": "Segunda à Sábado: 10:00 - 22:00, Domingo: 12:00 - 20:00",
      "tipo": "Corporativo",
      "regiao": "Rio Grande do Norte",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-5.741986,+-35.2881556"
    },
    {
      "pev": "ZONA SUL 7",
      "end": "Rua Dias Ferreira, 290 B. Leblon.",
      "horario": "Segunda à Sábado: 06:00 - 23:00, Domingo: 07:00 - 22:00",
      "tipo": "Varejo",
      "regiao": "Rio de Janeiro",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-22.9840436,+-43.2268691"
    },
    {
      "pev": "ZONA SUL 1",
      "end": "Rua Visconde de Pirajá, 118 | 122 | 124 | 128 A. Ipanema.",
      "horario": "Segunda à Sábado: 06:00 - 23:00, Domingo: 07:00 - 22:00",
      "tipo": "Varejo",
      "regiao": "Rio de Janeiro",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-22.9844247,+-43.1989644"
    },
    {
      "pev": "ZONA SUL 8",
      "end": "Rua Visconde de Pirajá, 504 a 508. Ipanema.",
      "horario": "Segunda à Sábado: 06:00 - 23:00, Domingo: 07:00 - 22:00",
      "tipo": "Varejo",
      "regiao": "Rio de Janeiro",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-22.98384,+-43.210107"
    },
    {
      "pev": "ZONA SUL 9",
      "end": "Rua Prudente de Moraes, 49. Ipanema.",
      "horario": "Segunda à Sábado: 06:00 - 23:00, Domingo: 07:00 - 22:00",
      "tipo": "Varejo",
      "regiao": "Rio de Janeiro",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-22.985859,+-43.1973295"
    },
    {
      "pev": "ZONA SUL 19",
      "end": "Avenida Nossa Senhora de Copacabana, 936. Copacabana.",
      "horario": "Segunda à Sábado: 06:00 - 23:00, Domingo: 07:00 - 22:00",
      "tipo": "Varejo",
      "regiao": "Rio de Janeiro",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-22.9757296,+-43.190106"
    },
    {
      "pev": "ZONA SUL 38",
      "end": "Rua Dias da Rocha, 29. Copacabana.",
      "horario": "Segunda à Sábado: 06:00 - 23:00, Domingo: 07:00 - 22:00",
      "tipo": "Varejo",
      "regiao": "Rio de Janeiro",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-22.9729617,+-43.1893018"
    },
    {
      "pev": "SUPERMERCADOS MUNDIAL",
      "end": "Rua Siqueira Campos, 71. Copacabana.",
      "horario": "Segunda à Sábado: 07:00 - 22:00, Domingo: 07:30 - 14:00",
      "tipo": "Varejo",
      "regiao": "Rio de Janeiro",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-22.9687737,+-43.1852474"
    },
    {
      "pev": "ZONA SUL 28",
      "end": "Rua Marechal Cantuária, 178 A Loja. Urca.",
      "horario": "Segunda à Sábado: 06:00 - 23:00, Domingo: 07:00 - 22:00",
      "tipo": "Varejo",
      "regiao": "Rio de Janeiro",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-22.9485105,+-43.1643283"
    },
    {
      "pev": "SUPERMERCADOS MUNDIAL",
      "end": "Avenida Érico Veríssimo, 918. Barra da Tijuca.",
      "horario": "Segunda à Sábado: 07:00 - 22:00, Domingo: 07:30 - 14:00",
      "tipo": "Varejo",
      "regiao": "Rio de Janeiro",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-23.0095593,+-43.3060351"
    },
    {
      "pev": "SUPERMERCADOS MUNDIAL",
      "end": "Avenida Embaixador Abelardo Bueno, 2.660. Barra da Tijuca",
      "horario": "Segunda à Sábado: 07:00 - 22:00, Domingo: 07:30 - 14:00",
      "tipo": "Varejo",
      "regiao": "Rio de Janeiro",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-22.9729114,+-43.3901187"
    },
    {
      "pev": "SUPERMERCADOS MUNDIAL",
      "end": "Estrada de Jacarepaguá, 7.563 - boxes 01 a 11. Freguesia. Jacarepaguá",
      "horario": "Segunda à Sábado: 07:00 - 22:00, Domingo: 07:30 - 14:00",
      "tipo": "Varejo",
      "regiao": "Rio de Janeiro",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-22.9474259,+-43.3396702"
    },
    {
      "pev": "SUPERMERCADOS MUNDIAL",
      "end": "Rua Santo Afonso, 300. Tijuca.",
      "horario": "Segunda à Sábado: 07:00 - 22:00, Domingo: 07:30 - 14:00",
      "tipo": "Varejo",
      "regiao": "Rio de Janeiro",
      "status": "Ativado",
      "link": "https://www.google.com.br/maps/search/-22.9233411,+-43.2340883"
    },
    {
      "pev": "3corações - Ipiranga",
      "end": "Av. Nazaré, 1139 – Ipiranga, Piso Térreo, São Paulo – SP, 02071-012",
      "horario": "Segunda a sexta: Das 8h às 18h",
      "tipo": "",
      "regiao": "São Paulo",
      "link": "https://www.google.com.br/maps/place/Av.+Nazar%C3%A9,+1139+-+Ipiranga,+S%C3%A3o+Paulo+-+SP/@-23.5942143,-46.6118455,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce5beba918fbb9:0x1d5a7e8d24fa65e3!8m2!3d-23.5942143!4d-46.6096568",
      "status": "Ativado"
    },
    {
        "pev": "Emporium São Paulo - Afonso Braz",
        "end": "Rua Afonso Braz, 431 - Vila Nova Conceição, São Paulo - SP, 04511-011",
        "horario": "Segunda a sábado: Das 7h às 22h",
        "tipo": "",
        "regiao": "São Paulo",
        "link": "https://goo.gl/yAu7xp",
        "status": "Ativado"
    },
    {
        "pev": "Emporium São Paulo - Itaim Bibi",
        "end": "R. Pedroso Alvarenga, 803 - Itaim Bibi, São Paulo - SP, 03178-200",
        "horario": "Segunda a sábado: Das 7h às 22h",
        "tipo": "",
        "regiao": "São Paulo",
        "link": "https://goo.gl/W1GroQ",
        "status": "Ativado"
    },
    {
        "pev": "Emporium São Paulo - Moema",
        "end": "Av. Jurema, 271 - Moema, São Paulo - SP, 04079-001",
        "horario": "Segunda a sábado: Das 7h às 22h",
        "tipo": "",
        "regiao": "São Paulo",
        "link": "https://goo.gl/dz6oDi",
        "status": "Ativado"
    },
    {
        "pev": "FNAC Pinheiros",
        "end": "Praça dos Omaguás, 34 - Pinheiros, São Paulo - SP, 05419-020",
        "horario": "Segunda a sábado: Das 10h às 21h, Domingo: Das 11h às 20h",
        "tipo": "",
        "regiao": "São Paulo",
        "link": "https://goo.gl/jcucVU",
        "status": "Ativado"
    },
    {
        "pev": "HIROTA - Santa Cecília",
        "end": "Av. Gen. Olímpio da Silveira, 39 - Santa Cecilia, São Paulo - SP, 01150-001",
        "horario": "Segunda a sábado: Das 8h às 21h",
        "tipo": "",
        "regiao": "São Paulo",
        "link": "https://goo.gl/JRfUF4",
        "status": "Ativado"
    },
    {
        "pev": "HIROTA - Mooca",
        "end": "R. Teresina, 319 - Vila Bertioga, São Paulo - SP, 03185-010",
        "horario": "Segunda a sábado: Das 8h às 21h",
        "tipo": "",
        "regiao": "São Paulo",
        "link": "https://goo.gl/JRfUF4",
        "status": "Ativado"
    },
    {
        "pev": "HIROTA - Ipiranga",
        "end": "Av. Nazaré, 1299 - Ipiranga, São Paulo - SP, 04263-000",
        "horario": "Segunda a sábado: Das 8h às 21h",
        "tipo": "",
        "regiao": "São Paulo",
        "link": "https://goo.gl/bMgnw1",
        "status": "Ativado"
    },
    {
        "pev": "HIROTA - Vila Monumento",
        "end": "Rua Gaspar Fernandes, 452 - Vila Monumento, São Paulo - SP, 01549-000",
        "horario": "Segunda a sábado: Das 8h às 21h",
        "tipo": "",
        "regiao": "São Paulo",
        "link": "https://goo.gl/cnt2eh",
        "status": "Ativado"
    },
    {
        "pev": "HIROTA - Saúde",
        "end": "Av. Jabaquara, 1920 - Saúde, São Paulo - SP, 14750-000",
        "horario": "Segunda a sábado: Das 8h às 21h",
        "tipo": "",
        "regiao": "São Paulo",
        "link": "https://goo.gl/xeeVzp",
        "status": "Ativado"
    },
    {
        "pev": "Preço &amp; Cia - Vila Esperança",
        "end": "R. Maria Carlota, 577 - Vila Esperança, São Paulo - SP",
        "horario": "Segunda a sábado: Das 8h às 20h, Domingo e feriados: Das 8h às 13h",
        "tipo": "",
        "regiao": "São Paulo",
        "link": "https://goo.gl/3uHXFu",
        "status": "Ativado"
    },
    {
        "pev": "Preço &amp; Cia - Tatuapé",
        "end": "R. Tuiuti, 904 - Tatuapé, São Paulo - SP",
        "horario": "Segunda a sábado: Das 8h às 20h, Domingo e feriados: Das 8h às 13h",
        "tipo": "",
        "regiao": "São Paulo",
        "link": "https://goo.gl/tqgY8A",
        "status": "Ativado"
    },
    {
        "pev": "Enel - Reserva Open Mall",
        "end": "Avenida Washington Soares, 3000 – Engenheiro Luciano Cavalcante, Fortaleza – CE, 60810-350",
        "horario": "Segunda a domingo: Das 7h às 22h",
        "tipo": "",
        "regiao": "Ceará",
        "link": "https://goo.gl/BqBVLf",
        "status": "Ativado"
    },
    {
        "pev": "Enel - Rio Mar",
        "end": "Rua Desembargador Lauro Nogueira, 1500 – Papicu, Fortaleza – CE, 60175-055",
        "horario": "Segunda a domingo: Das 7h às 22h",
        "tipo": "",
        "regiao": "Ceará",
        "link": "https://goo.gl/NJb2nt",
        "status": "Ativado"
    },
    {
        "pev": "São Luiz - Alphaville",
        "end": "Avenida Litorânea, 2010 - Cararu, Fortaleza – CE",
        "horario": "Segunda a sábado: Das 7h às 21h, Domingo a feriados: Das 7h às 19h",
        "tipo": "",
        "regiao": "Ceará",
        "link": "https://goo.gl/cec31g",
        "status": "Ativado"
    },
    {
        "pev": "São Luiz - Barão de Sturdat",
        "end": "Avenida Barão de Sturdat, 2675 - Joaquim Távora, Fortaleza – CE",
        "horario": "Segunda a sábado: Das 7h às 21h, Domingo a feriados: Das 7h às 20h",
        "tipo": "",
        "regiao": "Ceará",
        "link": "https://goo.gl/6JZ1ti",
        "status": "Ativado"
    },
    {
        "pev": "São Luiz - Benfica",
        "end": "Avenida Carapinima, 2200 - Benfica, Fortaleza – CE",
        "horario": "Segunda a sábado: Das 8h às 22h, Domingo a feriados: Das 8h às 21h",
        "tipo": "",
        "regiao": "Ceará",
        "link": "https://goo.gl/hg2crk",
        "status": "Ativado"
    },
    {
        "pev": "São Luiz - Cambeba",
        "end": "Avenida Whashington Soares, 6180 - Alagadiço Novo, Fortaleza – CE",
        "horario": "Segunda a sábado: Das 7h às 22h, Domingo a feriados: Das 7h às 22h",
        "tipo": "",
        "regiao": "Ceará",
        "link": "https://goo.gl/y4CVKZ",
        "status": "Ativado"
    },
    {
        "pev": "São Luiz - Cambeba",
        "end": "Avenida Whashington Soares, 6180 - Alagadiço Novo, Fortaleza – CE",
        "horario": "Segunda a sábado: Das 7h às 22h, Domingo a feriados: Das 7h às 22h",
        "tipo": "",
        "regiao": "Ceará",
        "link": "https://goo.gl/y4CVKZ",
        "status": "Ativado"
    },
    {
        "pev": "São Luiz - Cocó",
        "end": "Avenida Engenheiro Santana Júnior, 2977 - Cocó, Fortaleza – CE",
        "horario": "Segunda a sábado: Das 7h às 0h, Domingo a feriados: Das 7h às 22h",
        "tipo": "",
        "regiao": "Ceará",
        "link": "https://goo.gl/vbZXGk",
        "status": "Ativado"
    },
    {
        "pev": "São Luiz - Dunas",
        "end": "Avenida Engenheiro Alberto Sá, 1111 - Dunas, Fortaleza – CE",
        "horario": "Segunda a sábado: Das 7h às 22h, Domingo a feriados: Das 7h às 20h",
        "tipo": "",
        "regiao": "Ceará",
        "link": "https://goo.gl/oSZmaa",
        "status": "Ativado"
    },
    {
        "pev": "São Luiz - Oliveira Paiva",
        "end": "Rua Francisco Borges Soares, 170 - Cambeba, Fortaleza – CE, CEP: 60822-310",
        "horario": "Segunda a sábado: Das 7h às 0h, Domingo a feriados: Das 7h às 22h",
        "tipo": "",
        "regiao": "Ceará",
        "link": "https://goo.gl/SkjCpR",
        "status": "Ativado"
    },
    {
        "pev": "São Luiz - Pontes Vieira",
        "end": "Avenida Pontes Vieira, 1486 - Dionísio Torre, Fortaleza – CE",
        "horario": "Segunda a sábado: Das 7h às 22h, Domingo a feriados: Das 7h às 21h",
        "tipo": "",
        "regiao": "Ceará",
        "link": "https://goo.gl/Q41eGe",
        "status": "Ativado"
    },
    {
        "pev": "São Luiz - Praia de Iracema",
        "end": "Rua dos Tabajaras, 693 - Praia de Iracema, Fortaleza – CE",
        "horario": "Segunda a sábado: Das 7h às 21h, Domingo a feriados: Das 7h às 20h",
        "tipo": "",
        "regiao": "Ceará",
        "link": "https://goo.gl/JS7dGg",
        "status": "Ativado"
    },
    {
        "pev": "São Luiz - Rio Mar",
        "end": "Rua Desembargador Lauro Nogueira, 1500 - Papicu, Fortaleza – CE, 60175-055",
        "horario": "Segunda a sábado: Das 9h às 22h, Domingo a feriados: Das 9h às 22h",
        "tipo": "",
        "regiao": "Ceará",
        "link": "https://goo.gl/LA83qW",
        "status": "Ativado"
    },
    {
        "pev": "São Luiz - Rio Mar Kennedy",
        "end": "Avenida Sargento Hermínio Sampaio, 3100 - Presidente Kennedy, Fortaleza – CE",
        "horario": "Segunda a sábado: Das 9h às 22h, Domingo a feriados: Das 9h às 22h",
        "tipo": "",
        "regiao": "Ceará",
        "link": "https://goo.gl/1BVNYL",
        "status": "Ativado"
    },
    {
        "pev": "São Luiz - Santos Dumont",
        "end": "Avenida Santos Dumont, 5625 - Papicu, Fortaleza – CE",
        "horario": "Segunda a sábado: Das 7h às 22h, Domingo a feriados: Das 7h às 20h",
        "tipo": "",
        "regiao": "Ceará",
        "link": "https://goo.gl/Cfp6jf",
        "status": "Ativado"
    },
    {
        "pev": "São Luiz - Virgílio Távora",
        "end": "Avenida Senador Virgílio Távora, 570 - Aldeota, Fortaleza – CE",
        "horario": "Segunda a sábado: Das 7h às 0h, Domingo a feriados: Das 7h às 20h",
        "tipo": "",
        "regiao": "Ceará",
        "link": "https://goo.gl/TFD29S",
        "status": "Ativado"
    },*///começo bloco novo
    {
      "pev": "DMA - Cristiano Machado Nº2250",
      "end": "Avenida Cristiano Machado, 2250 - Cidade Nova, Belo Horizonte - MG",
      "horario": "",
      "tipo": "",
      "regiao": "Minas Gerais",
      "link": "https://goo.gl/maps/v1KjGnfStbU2",
      "status": "Ativado"
    },
    {
      "pev": "DMA - Luiz Paulo Franco Nº383",
      "end": "Avenida Luiz Paulo Franco, 383 - Belvedere, Belo Horizonte - MG",
      "horario": "",
      "tipo": "",
      "regiao": "Minas Gerais",
      "link": "https://goo.gl/maps/J6xaGpEx8SH2",
      "status": "Ativado"
    },
    {
      "pev": "Emporium São Paulo - Afonso Braz",
      "end": "Rua Afonso Braz, 431 - Vila Nova Conceição, São Paulo - SP",
      "horario": "",
      "tipo": "",
      "regiao": "São Paulo",
      "link": "https://goo.gl/maps/gy9sUQQiQmw",
      "status": "Ativado"
    },
    {
      "pev": "Emporium São Paulo - Jurema",
      "end": "Avenida Jurema, 271 - Indianópolis, São Paulo - SP",
      "horario": "",
      "tipo": "",
      "regiao": "São Paulo",
      "link": "https://goo.gl/maps/83PuECwaCN92",
      "status": "Ativado"
    },
    {
      "pev": "Emporium São Paulo - Pedroso Alvarenga",
      "end": "Rua R. Pedroso Alvarenga, 803 - Itaim Bibi, São Paulo - SP",
      "horario": "",
      "tipo": "",
      "regiao": "São Paulo",
      "link": "https://goo.gl/maps/f8ZjrVVFwf32",
      "status": "Ativado"
    },
    {
      "pev": "Extra - Av. Francisco Sales Nº898",
      "end": "Avenida Francisco Sales, 898 - Santa Efigênia, Belo Horizonte - MG",
      "horario": "",
      "tipo": "",
      "regiao": "Minas Gerais",
      "link": "https://goo.gl/maps/fwKgjzmyiwp",
      "status": "Ativado"
    },
    {
      "pev": "Extra - Cristiano Machado Nº4000",
      "end": "Avenida Cristiano Machado, 4000 - União, Belo Horizonte - MG",
      "horario": "",
      "tipo": "",
      "regiao": "Minas Gerais",
      "link": "https://goo.gl/maps/3jnNhaxgT7v",
      "status": "Ativado"
    },
    {
      "pev": "Extra - Maria Luiza Santiago Nº10",
      "end": "Rua Maria Luiza Santiago, 10 - Santa Lucia, Belo Horizonte - MG",
      "horario": "",
      "tipo": "",
      "regiao": "Minas Gerais",
      "link": "https://goo.gl/maps/sBnfXQ15md82",
      "status": "Ativado"
    },
    {
      "pev": "Favorito Supermercados",
      "end": "Avenida Engenheiro Roberto Freire, 1296 - Capim Macio, Natal - RN",
      "horario": "",
      "tipo": "",
      "regiao": "Rio Grande do Norte",
      "link": "https://goo.gl/maps/nbg9XjhfJsC2",
      "status": "Ativado"
    },
    {
      "pev": "Hirota - Campo Belo",
      "end": "Rua Vieira de Morais, 263 - Campo Belo, São Paulo - SP",
      "horario": "",
      "tipo": "",
      "regiao": "São Paulo",
      "link": "https://goo.gl/maps/x8e1CjtBFSy",
      "status": "Ativado"
    },
    {
      "pev": "Hirota - Ipiranga",
      "end": "Avenida Nazaré, 1299 - Ipiranga, São Paulo - SP",
      "horario": "",
      "tipo": "",
      "regiao": "São Paulo",
      "link": "https://goo.gl/maps/brvx63rD8mH2",
      "status": "Ativado"
    },
    {
      "pev": "Hirota - Mooca",
      "end": "Rua Teresina, 319 - Vila Bertioga, São Paulo - SP",
      "horario": "",
      "tipo": "",
      "regiao": "São Paulo",
      "link": "https://goo.gl/maps/DzehWGMPwN42",
      "status": "Ativado"
    },
    {
      "pev": "Hirota - Santa Cecília",
      "end": "Avenida General Olímpio da Silveira, 39 - Santa Cecília, São Paulo - SP",
      "horario": "",
      "tipo": "",
      "regiao": "São Paulo",
      "link": "https://goo.gl/maps/9akxPnF39ZA2",
      "status": "Ativado"
    },
    {
      "pev": "Hirota - Saúde",
      "end": "Avenida Jabaquara, 1920 - Saúde, São Paulo - SP",
      "horario": "",
      "tipo": "",
      "regiao": "São Paulo",
      "link": "https://goo.gl/maps/kZayousxvT62",
      "status": "Ativado"
    },
    {
      "pev": "Hirota - Vila Monumento",
      "end": "Rua Gaspar Fernandes, 452 - Vila Monumento, São Paulo - SP",
      "horario": "",
      "tipo": "",
      "regiao": "São Paulo",
      "link": "https://goo.gl/maps/BDwWDV4zH6n",
      "status": "Ativado"
    },
    {
      "pev": "Mundial Embaixador Abelardo Bueno",
      "end": "Avenida Embaixador Abelardo Bueno, 2660 - Barra da Tijuca, Rio de Janeiro - RJ, 22775-040",
      "horario": "",
      "tipo": "",
      "regiao": "Rio de Janeiro",
      "link": "https://goo.gl/maps/KAyd2RW8CzQ2",
      "status": "Ativado"
    },
    {
      "pev": "Mundial Jacarepaguá",
      "end": "Estrada de Jacarepaguá, 7563 - Jacarepaguá, Rio de Janeiro - RJ",
      "horario": "",
      "tipo": "",
      "regiao": "Rio de Janeiro",
      "link": "https://goo.gl/maps/1X5dzra3qiq",
      "status": "Ativado"
    },
    {
      "pev": "Mundial  Santo Afonso",
      "end": "Rua Santo Afonso, 300 - Tijuca, Rio de Janeiro - RJ, 20511-170",
      "horario": "",
      "tipo": "",
      "regiao": "Rio de Janeiro",
      "link": "https://goo.gl/maps/USDATUuuoTD2",
      "status": "Ativado"
    },
    {
      "pev": "Mundial Siqueira Campos",
      "end": "Rua Siqueira Campos, 71 - Copacabana, Rio de Janeiro - RJ, 22031-072",
      "horario": "",
      "tipo": "",
      "regiao": "Rio de Janeiro",
      "link": "https://goo.gl/maps/Jjv34PRW7Rk",
      "status": "Ativado"
    },
    {
      "pev": "Nordestão Cidade Jardim",
      "end": "Rua Leôncio Etelvino de Medeiros, 2877 - Capim Macio, Natal - RN, 59078-570",
      "horario": "",
      "tipo": "",
      "regiao": "Rio Grande do Norte",
      "link": "https://goo.gl/maps/71zQ4ekiKhT2",
      "status": "Ativado"
    },
    {
      "pev": "Nordestão Lagoa Nova",
      "end": "Avenida Senador Salgado Filho, 1656 - Lagoa Nova, Natal - RN, 59056-000",
      "horario": "",
      "tipo": "",
      "regiao": "Rio Grande do Norte",
      "link": "https://goo.gl/maps/tSEhyBG4wkv",
      "status": "Ativado"
    },
    {
      "pev": "Nordestão Nova Parnamirim",
      "end": "Avenida Maria Lacerda Montenegro, 1400 - Nova Parnamirim, Parnamirim - RN, 59152-600",
      "horario": "",
      "tipo": "",
      "regiao": "Rio Grande do Norte",
      "link": "https://goo.gl/maps/9ZKSa4FLW6P2",
      "status": "Ativado"
    },
    {
      "pev": "Nordestão Santa Catarina",
      "end": "Avenida Dr João Medeiros Filho, 1835 - Potengi, Natal - RN, 59108-200",
      "horario": "",
      "tipo": "",
      "regiao": "Rio Grande do Norte",
      "link": "https://goo.gl/maps/QuJCt3Q2Bcr",
      "status": "Ativado"
    },
    {
      "pev": "Nordestão Tirol",
      "end": "Avenida Prudente de Morais, 1140 - Tirol, Natal - RN, 59020-510",
      "horario": "",
      "tipo": "",
      "regiao": "Rio Grande do Norte",
      "link": "https://goo.gl/maps/yDu3jWRWpQt",
      "status": "Ativado"
    },
    {
      "pev": "Preço & Cia. - Maria Carlota",
      "end": "Rua Maria Carlota, 577 - Vila Esperança, São Paulo - SP, 03647-000",
      "horario": "",
      "tipo": "",
      "regiao": "São Paulo",
      "link": "https://goo.gl/maps/BxpV3pfTzJQ2",
      "status": "Ativado"
    },
    {
      "pev": "Preço & Cia. - Tuiuti",
      "end": "Rua R. Tuiuti, 904 - Tatuapé, São Paulo - SP, 03081-002",
      "horario": "",
      "tipo": "",
      "regiao": "São Paulo",
      "link": "https://goo.gl/maps/PS7SZDNvGY82",
      "status": "Ativado"
    },
    {
      "pev": "São Luiz - Alphaville",
      "end": "Avenida Litorânea, 2010 - Cararu, Eusébio - CE, 61760-000",
      "horario": "",
      "tipo": "",
      "regiao": "Ceará",
      "link": "https://goo.gl/maps/GKtjzwtRqDp",
      "status": "Ativado"
    },
    {
      "pev": "São Luiz - Barão de Sturdat",
      "end": "Avenida Barão de Sturdat, 2675 - Joaquim Távora, Fortaleza - CE, 60120-002",
      "horario": "",
      "tipo": "",
      "regiao": "Ceará",
      "link": "https://goo.gl/maps/hCdAToPZ6ws",
      "status": "Ativado"
    },
    {
      "pev": "São Luiz - Benfica",
      "end": "Avenida Carapinima, 2200 - Benfica, Fortaleza - CE, 60015-290",
      "horario": "",
      "tipo": "",
      "regiao": "Ceará",
      "link": "https://goo.gl/maps/hCdAToPZ6ws",
      "status": "Ativado"
    },
    {
      "pev": "São Luiz - Cambeba",
      "end": "Avenida Whashington Soares, 6180 - Alagadiço Novo, Fortaleza - CE, 60830-640",
      "horario": "",
      "tipo": "",
      "regiao": "Ceará",
      "link": "https://goo.gl/maps/3VXP4CrmiNB2",
      "status": "Ativado"
    },
    {
      "pev": "São Luiz - Cocó",
      "end": "Avenida Engenheiro Santana Júnior, 2977 - Cocó, Fortaleza - CE, 60192-205",
      "horario": "",
      "tipo": "",
      "regiao": "Ceará",
      "link": "https://goo.gl/maps/huKx7U1xrf72",
      "status": "Ativado"
    },
    {
      "pev": "São Luiz - Dunas",
      "end": "Avenida Engenheiro Alberto Sá, 1111 - Dunas, Fortaleza - CE, 60175-395",
      "horario": "",
      "tipo": "",
      "regiao": "Ceará",
      "link": "https://goo.gl/maps/8NMvABr7kEU2",
      "status": "Ativado"
    },
    {
      "pev": "São Luiz - Oliveira Paiva",
      "end": "Rua Francisco Borges Soares, 170 - Cidade dos Funcionários, Fortaleza - CE, 60822-310",
      "horario": "",
      "tipo": "",
      "regiao": "Ceará",
      "link": "https://goo.gl/maps/AFUXrgVMpmr",
      "status": "Ativado"
    },
    {
      "pev": "São Luiz - Pontes Vieira",
      "end": "Avenida Pontes Vieira, 1486 - Dionísio Torres, Fortaleza - CE, 60130-240",
      "horario": "",
      "tipo": "",
      "regiao": "Ceará",
      "link": "https://goo.gl/maps/r3989HJKTw22",
      "status": "Ativado"
    },
    {
      "pev": "São Luiz - Praia de Iracema",
      "end": "Rua dos Tabajaras, 693 - Praia de Iracema, Fortaleza - CE, 60060-510",
      "horario": "",
      "tipo": "",
      "regiao": "Ceará",
      "link": "https://goo.gl/maps/ZQXWpELf6w82",
      "status": "Ativado"
    },
    {
      "pev": "São Luiz - Rio Mar",
      "end": "Rua Desembargador Lauro Nogueira, 1500 - Papicu, Fortaleza - CE, 60175-055",
      "horario": "",
      "tipo": "",
      "regiao": "Ceará",
      "link": "https://goo.gl/maps/qD3xdmqZVux",
      "status": "Ativado"
    },
    {
      "pev": "São Luiz - Rio Mar Kennedy",
      "end": "Avenida Sargento Hermínio Sampaio, 3100 - Presidente Kennedy, Fortaleza - CE, 60355-512",
      "horario": "",
      "tipo": "",
      "regiao": "Ceará",
      "link": "https://goo.gl/maps/V5inAfUDcUu",
      "status": "Ativado"
    },
    {
      "pev": "São Luiz - Santos Dumont",
      "end": "Avenida Santos Dumont, 5625 - Papicu, Fortaleza - CE, 60175-047",
      "horario": "",
      "tipo": "",
      "regiao": "Ceará",
      "link": "https://goo.gl/maps/D22hZm4uD9z",
      "status": "Ativado"
    },
    {
      "pev": "São Luiz - Virgílio Távora",
      "end": "Avenida Senador Virgílio Távora, 570 - Aldeota, Fortaleza - CE, 60170-250",
      "horario": "",
      "tipo": "",
      "regiao": "Ceará",
      "link": "https://goo.gl/maps/sSUvt99JsSw",
      "status": "Ativado"
    },
    {
      "pev": "Super Nosso - BR 356 Nº462",
      "end": "Rodovia BR 356, 462 - Sion, Belo Horizonte - MG, 03032-055",
      "horario": "",
      "tipo": "",
      "regiao": "Minas Gerais",
      "link": "https://goo.gl/maps/2cDrPzsiHj52",
      "status": "Ativado"
    },
    {
      "pev": "Super Nosso - Prof. Mario Werneck Nº2641",
      "end": "Avenida Prof. Mario Werneck, 2641 - Buritis, Belo Horizonte - MG, 30575-180",
      "horario": "",
      "tipo": "",
      "regiao": "Minas Gerais",
      "link": "https://goo.gl/maps/Sg2W2GZzyju",
      "status": "Ativado"
    },
    {
      "pev": "Super Nosso - Rodovia Januário Carneiro Nº8625",
      "end": "Rodovia Januário Carneiro - MG 30, 8625 - Vale do Sereno, Nova Lima - MG",
      "horario": "",
      "tipo": "",
      "regiao": "Minas Gerais",
      "link": "https://goo.gl/maps/RQQ1jR8SYY62",
      "status": "Ativado"
    },
    {
      "pev": "Verde Mar - Contorno Nº6099",
      "end": "Avenida Contorno, 6099 - São Pedro, Belo Horizonte - MG, 30110-039",
      "horario": "",
      "tipo": "",
      "regiao": "Minas Gerais",
      "link": "https://goo.gl/maps/e24xJi5hUK32",
      "status": "Ativado"
    },
    {
      "pev": "Verde Mar - Cristina Nº991",
      "end": "Rua Cristina, 991 - São Pedro, Belo Horizonte - MG, 30330-130",
      "horario": "",
      "tipo": "",
      "regiao": "Minas Gerais",
      "link": "https://goo.gl/maps/JhWdozcDxux",
      "status": "Ativado"
    },
    {
      "pev": "Verde Mar - Fernandes Tourinho Nº471",
      "end": "Rua Fernandes Tourinho, 471 - Funcionarios, Belo Horizonte - MG, 30110-043",
      "horario": "",
      "tipo": "",
      "regiao": "Minas Gerais",
      "link": "https://goo.gl/maps/3oJBtosHYfK2",
      "status": "Ativado"
    },
    {
      "pev": "Verde Mar - Guaicui*",
      "end": "Rua Guaicui, 700 - Luxemburgo, Belo Horizonte - MG, 30380-340",
      "horario": "",
      "tipo": "",
      "regiao": "Minas Gerais",
      "link": "https://goo.gl/maps/uB8XDYZXE7k",
      "status": "Ativado"
    },
    {
      "pev": "Verde Mar - Nossa Senhora do Carmo Nº1900",
      "end": "Avenida Nossa Senhora do Carmo, 1900 - Sion, Belo Horizonte - MG, 30330-360",
      "horario": "",
      "tipo": "",
      "regiao": "Minas Gerais",
      "link": "https://goo.gl/maps/4CwU6V6EjvS2",
      "status": "Ativado"
    },
    {
      "pev": "Verde Mar - Olegário Maciel Nº1600",
      "end": "Avenida Olegário Maciel, 1600 - Lourdes, Belo Horizonte - MG, 30180-111",
      "horario": "",
      "tipo": "",
      "regiao": "Minas Gerais",
      "link": "https://goo.gl/maps/vW9f7iKTLPx",
      "status": "Ativado"
    },
    {
      "pev": "Verde Mar - Presidente Tancredo Neves Nº2700",
      "end": "Avenida Presidente Tancredo Neves, 2700 - Paquetá/ Castelo, Belo Horizonte - MG, 31330-642",
      "horario": "",
      "tipo": "",
      "regiao": "Minas Gerais",
      "link": "https://goo.gl/maps/sWBgcqXCvJ92",
      "status": "Ativado"
    },
    {
      "pev": "Verde Mar - Prof. Mario Werneck Nº1500",
      "end": "Avenida Prof. Mario Werneck, 1500 - Estoril, Belo Horizonte - MG, 30455-610",
      "horario": "",
      "tipo": "",
      "regiao": "Minas Gerais",
      "link": "https://goo.gl/maps/x76i4YiWjM32",
      "status": "Ativado"
    },
    {
      "pev": "Verde Mar - Raja Gabaglia Nº3600",
      "end": "Avenida Raja Gabaglia, 3600 - Estoril, Belo Horizonte - MG, 30360-670",
      "horario": "",
      "tipo": "",
      "regiao": "Minas Gerais",
      "link": "https://goo.gl/maps/W3JmTsac1dS2",
      "status": "Ativado"
    },
    {
      "pev": "Verde Mar - Rua do Ouro Nº195",
      "end": "Rua Rua do Ouro, 195 - Serra, Belo Horizonte - MG, 30220-000",
      "horario": "",
      "tipo": "",
      "regiao": "Minas Gerais",
      "link": "https://goo.gl/maps/4kJxJYu8W4L2",
      "status": "Ativado"
    },
    {
      "pev": "Verde Mar - Rua Viçosa",
      "end": "Rua Viçosa, 572 - São Pedro, Belo Horizonte - MG, 30330-160",
      "horario": "",
      "tipo": "",
      "regiao": "Minas Gerais",
      "link": "https://goo.gl/maps/zrR3j1UjoZS2",
      "status": "Ativado"
    },
    {
      "pev": "Verde Mar - Santa Rosa Nº846",
      "end": "Avenida Santa Rosa, 846 - São Luiz, Belo Horizonte - MG, 31741-095",
      "horario": "",
      "tipo": "",
      "regiao": "Minas Gerais",
      "link": "https://goo.gl/maps/5gbbTb6JpZy",
      "status": "Ativado"
    },
    {
      "pev": "Verde Mar - Vancouver Nº40",
      "end": "Rua Vancouver, 40 - Jardim Canadá, Nova Lima - MG, 34000-000",
      "horario": "",
      "tipo": "",
      "regiao": "Minas Gerais",
      "link": "https://goo.gl/maps/YHnHHHLttxs",
      "status": "Ativado"
    },
    {
      "pev": "Zona Sul 10",
      "end": "Avenida das Américas, 16237 - Recreio, Rio de Janeiro - RJ, 22790-703",
      "horario": "",
      "tipo": "",
      "regiao": "Rio de Janeiro",
      "link": "https://goo.gl/maps/tAEJbr4W6EE2",
      "status": "Ativado"
    },
    {
      "pev": "Zona Sul 14",
      "end": "Avenida Bartolomeu Mitre, 705 - Leblon, Rio de Janeiro - RJ, 22431-010",
      "horario": "",
      "tipo": "",
      "regiao": "Rio de Janeiro",
      "link": "https://goo.gl/maps/eB74B9JS4Dq",
      "status": "Ativado"
    },
    {
      "pev": "Zona Sul 19",
      "end": "Avenida Nossa Senhora de Copacabana, 936 - Copacabana, Rio de Janeiro - RJ, 22060-000",
      "horario": "",
      "tipo": "",
      "regiao": "Rio de Janeiro",
      "link": "https://goo.gl/maps/AJDDod436Cs",
      "status": "Ativado"
    },
    {
      "pev": "Zona Sul 28",
      "end": "Rua Marechal Cantuária, 178 - Urca, Rio de Janeiro - RJ, 22291-000",
      "horario": "",
      "tipo": "",
      "regiao": "Rio de Janeiro",
      "link": "https://goo.gl/maps/HYwrS43Ah4o",
      "status": "Ativado"
    },
    {
      "pev": "Zona Sul 38",
      "end": "Rua Dias da Rocha, 29 - Copacabana, Rio de Janeiro - RJ, 22051-020",
      "horario": "",
      "tipo": "",
      "regiao": "Rio de Janeiro",
      "link": "https://goo.gl/maps/YjepyUkRNNB2",
      "status": "Ativado"
    },
    {
      "pev": "Zona Sul 8",
      "end": "Rua Visconde de Pirajá, 504 - Ipanema, Rio de Janeiro - RJ, 24410-002",
      "horario": "",
      "tipo": "",
      "regiao": "Rio de Janeiro",
      "link": "https://goo.gl/maps/fdrXybP5Lp12",
      "status": "Ativado"
    },
    {
      "pev": "Zona Sul 9",
      "end": "Rua Prudente de Morais, 49 - Ipanema, Rio de Janeiro - RJ, 22420-040",
      "horario": "",
      "tipo": "",
      "regiao": "Rio de Janeiro",
      "link": "https://goo.gl/maps/L2Ex8BALM5Q2",
      "status": "Ativado"
    },
    {
      "pev": "Mundial Érico Verissimo",
      "end": "Avenida Érico Veríssimo, 918 - Barra da Tijuca, Rio de Janeiro - RJ, 22621-180",
      "horario": "",
      "tipo": "",
      "regiao": "Rio de Janeiro",
      "link": "https://goo.gl/maps/MFzmqKKTnzs",
      "status": "Ativado"
    }
  ];