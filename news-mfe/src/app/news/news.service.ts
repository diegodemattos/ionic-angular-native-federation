import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { NewsState } from './news.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class NewsService {
  private state: BehaviorSubject<NewsState>;

  constructor(private httpClient: HttpClient) {
    this.state = new BehaviorSubject({
      news: [],
      loading: false,
      error: null,
    } as NewsState);
  }

  loadNews() {
    this.state.next({
      "news": [
        {
          "title": "Quem eram tio e sobrinho que morreram após caminhões deles baterem de frente e pegarem fogo no Paraná",
          "summary": "Grave acidente aconteceu na BR-373 e também causou a morte de uma mulher. Outro jovem, sobrinho e primo das vítimas, foi socorrido com vida e sobreviveu. Três pessoas morreram em acidente que caminhões batem e pegam fogo na BR-373\nO tio e o sobrinho que morreram após os caminhões em que eles estavam baterem de frente e pegarem fogo na BR-373 foram identificados como Leonildo Bueno da Rocha, de 41 anos, e Elisson Joilson da Rocha, de 24 anos. \nO g1 apurou que ambos eram moradores de Mallet, cidade da região central do Paraná.\nO acidente aconteceu na tarde de terça-feira (20) e também causou a morte de uma mulher, que era passageira do caminhão dirigido por Leonildo. Até a última atualização desta reportagem, o nome dela ainda não havia sido divulgado. Também não havia informação sobre se havia parentesco entre ela e as vítimas.\n✅ Siga o canal do g1 PR no WhatsApp\n✅ Siga o canal do g1 PR no Telegram\nTio e sobrinho morrem após baterem de frente; caminhões deles pegaram fogo em rodovia do PR\nReprodução/Redes Soci",
          "url": "https://g1.globo.com/pr/campos-gerais-sul/noticia/2025/05/21/quem-eram-tio-e-sobrinho-que-morreram-apos-baterem-de-frente-e-caminhoes-deles-pegarem-fogo-em-rodovia-do-parana.ghtml",
          "image": "https://s2-g1.glbimg.com/YEk0c3zU6pAhTyO9NdqRV_lp4bM=/1800x0/filters:format(jpeg)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/6/t/vjiBsERvOhfpdYUt4xCg/g1-2025-05-21t093436.868.png"
        },
        {
          "title": "Prefeitos de Rio Azul e Mallet unem forças para resolver antigo problema no limite entre os municípios",
          "summary": "Leandro Jasinski e Pedro Kowalczyk destacam parceria entre as prefeituras para construção de bueiro com 14 tubos de concreto na comunidade de Lajeado dos Melos por: Clayton Burgath, jornalista No último dia 15 de maio, os prefeitos Leandro Jasinski (Rio Azul) e Pedro Kowalczyk (Mallet) estiveram juntos na comunidade de Lajeado dos Melos, localizada no &#8230;\n\n\nO post Prefeitos de Rio Azul e Mallet unem forças para resolver antigo problema no limite entre os municípios apareceu primeiro em Portal Notícia da Região.",
          "url": "https://www.portalnoticiadaregiao.com.br/prefeitos-de-rio-azul-e-mallet-unem-forcas-para-resolver-antigo-problema-no-limite-entre-os-municipios/",
          "image": "https://www.portalnoticiadaregiao.com.br/wp-content/uploads/2025/05/Copia-de-Copia-de-Red-Minimalist-Breaking-News-Announcement-Youtube-Thumbnail-1.jpg"
        },
        {
          "title": "Identificados tio e sobrinho mortos em acidente com caminhões",
          "summary": "Uma terceira vítima fatal foi encontrada posteriormente em meios aos destroços",
          "url": "https://www.jmais.com.br/identificados-tio-e-sobrinho-mortos-em-acidente-com-caminhoes/",
          "image": "https://www.jmais.com.br/wp-content/uploads/2025/05/tio-e-sobrinho-acidente.jpg"
        },
        {
          "title": "Filho é suspeito de matar pai, esquartejar corpo e jogá-lo em rio, no Paraná",
          "summary": "Polícia afirma que filho de Cícero de Sousa Guedes confessou o crime. Homem trabalhava como palhaço e sumiu na sexta-feira (9). g1 tenta identificar defesa do suspeito. Bombeiros fazem buscas pelo corpo de Cícero de Sousa Guedes\nCorpo de Bombeiros - Reprodução/Redes Sociais\nUm jovem é suspeito de matar o próprio pai, esquartejar o corpo do homem e jogá-lo em no Rio Iguaçu, em São Mateus do Sul, no sul do Paraná. As informações são da Polícia Civil, que também afirma que o jovem confessou o crime.\nA vítima foi identificada como Cícero de Sousa Guedes. Conhecido localmente como \"Palhaço Chumbrega\", ele estava desaparecido desde sexta-feira (9).\nNesta quinta (15), o Corpo de Bombeiros realiza buscas pelo corpo do homem. \n✅ Siga o canal do g1 PR no WhatsApp\n✅ Siga o canal do g1 PR no Telegram\nCícero de Sousa Guedes trabalhava como \"Palhaço Chumbrega\"\nReprodução/Redes Sociais\nAs investigações iniciaram na quarta-feira (14), após o registro de uma Boletim de Ocorrência (B.O.) sobre o desaparecimento de Cícero.\n\"As ",
          "url": "https://g1.globo.com/pr/campos-gerais-sul/noticia/2025/05/15/filho-e-suspeito-de-matar-pai-esquartejar-corpo-e-joga-lo-em-rio-no-parana.ghtml",
          "image": "https://s2-g1.glbimg.com/GtGZUzc0yw13x-PbrDvn2-iVzd8=/1800x0/filters:format(jpeg)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/B/B/KPZ2THREOzyQIn94LXdg/g1-2025-05-15t140238.531.png"
        },
        {
          "title": "São M. Sul – “Matei, cortei e levei de bicicleta”: filho confessa esquartejamento de pai",
          "summary": "As buscas por partes do corpo de Cícero de Souza Guedes, conhecido na cidade como “Palhaço Chumbrega”, seguem na manhã desta quinta-feira (15), em São Mateus do Sul. O homem de 58 anos, conhecido pelo trabalho como palhaço em festas e eventos infantis, foi morto e esquartejado pelo próprio filho, que confessou o crime à &#8230;\n\n\nO post São M. Sul &#8211; “Matei, cortei e levei de bicicleta”: filho confessa esquartejamento de pai apareceu primeiro em Portal Notícia da Região.",
          "url": "https://www.portalnoticiadaregiao.com.br/sao-m-sul-matei-cortei-e-levei-de-bicicleta-filho-confessa-esquartejamento-de-pai/",
          "image": "https://www.portalnoticiadaregiao.com.br/wp-content/uploads/2025/05/Screenshot_3-1.jpg"
        },
        {
          "title": "Cerca de 50 milímetros de chuva foram registrados em São Mateus do Sul nas últimas horas",
          "summary": "Moradores que foram afetados pela chuva de granizo devem procurar a Defesa Civi Municipal",
          "url": "https://www.jmais.com.br/cerca-de-50-milimetros-de-chuva-foram-registrados-em-sao-mateus-do-sul-nas-ultimas-horas/",
          "image": "https://www.jmais.com.br/wp-content/uploads/2025/05/granizo93485-1024x537-1.jpg"
        },
        {
          "title": "Palmeiras começa Copa do Brasil com vitória e quebra invencibilidade do Ceará",
          "summary": "O Palmeiras estreou com o pé direito na Copa do Brasil, na noite desta quarta-feira, ao vencer o Ceará por 1 a 0, em pleno Castelão. O gol do zagueiro Gustavo Gómez garantiu a vantagem para o Verdão na terceira fase da competição e derrubou uma invencibilidade de oito meses do Vozão em seus domínios. [&#8230;]",
          "url": "https://noticiamarajo.com.br/esportes/palmeiras-comeca-copa-do-brasil-com-vitoria-e-quebra-invencibilidade-do-ceara/",
          "image": "https://noticiamarajo.com.br/wp-content/uploads/2025/05/9c39a329b11069b42a000c44c9641f7f.jpeg"
        },
        {
          "title": "Polícia Civil investiga vídeos com fuzis em baile funk na Cidade de Deus",
          "summary": "Evento, que contou com a apresentação do MC Poze do Rodo, teve a presença de traficantes portando armas de grosso calibre ",
          "url": "https://jovempan.com.br/programas/jornal-da-manha/policia-civil-investiga-videos-com-fuzis-em-baile-funk-na-cidade-de-deus.html",
          "image": "https://jpimg.com.br/uploads/2025/05/imagem-jvp-87.png"
        },
        {
          "title": "Linha de ônibus 624 terá itinerário alterado a partir de sexta-feira (23)",
          "summary": "A alteração ocorre após a nova sinalização semafórica no local e visa ampliar o atendimento do transporte coletivo naquela região.  Alinha de ônibus 624 (Nova República/T2/Cachoeirinha) terá itinerário alterado, segundo informou o Instituto Municipal de Mobilidade Urbana (IMMU), em Manaus. Com as mudanças, a linha 624 passará a atender o novo trecho da avenida Lourenço da Silva Braga, entre as avenidas Silves e Manaus 2000, na zona Sul. A mudança ocorre a partir de sexta-feira (23).\nA alteração ocorre após a nova sinalização semafórica no local e visa ampliar o atendimento do transporte coletivo naquela região. \nA linha cumprirá o seguinte itinerário no sentido Cachoeirinha, normal até a avenida Manaus 2000, prolongamento da avenida Lourenço da Silva Braga, avenidas Ajuricaba e Carvalho Leal e, em seguida, chega ao Terminal de Integração 2 (T2) da Cachoeirinha. \nNo sentido bairro, a linha 624 terá o seguinte itinerário: normal até a avenida Borba, avenida Santa Isabel, avenida Maués, prolongamento da avenida ",
          "url": "https://g1.globo.com/am/amazonas/utilidade-publica/noticia/2025/05/21/linha-de-onibus-624-tera-itinerario-alterado-a-partir-de-sexta-feira-23.ghtml",
          "image": "https://s.glbimg.com/jo/g1/static/live/imagens/img_facebook.png?g1"
        },
        {
          "title": "Governo do RJ oferece recompensa de R$ 5 mil para quem denunciar autor de disparo que matou policial",
          "summary": "José Antônio Lourenço foi baleado e morto na manhã de segunda-feira (19), durante a Operação Gelo Podre, realizada na Cidade de Deus, Zona Oeste do Rio de Janeiro",
          "url": "https://jovempan.com.br/programas/jornal-da-manha/governo-do-rj-oferece-recompensa-de-r-5-mil-para-quem-denunciar-autor-de-disparo-que-matou-policial.html",
          "image": "https://jpimg.com.br/uploads/2025/05/imagem-jvp-94.png"
        }
      ],
      "loading": false,
      "error": null
    });
    return;
    this.state.next({
      ...this.state.value,
      news: [],
      loading: true,
      error: null,
    });
    Geolocation.getCurrentPosition()
      .then(({ coords }) => {
        this.httpClient
          .get(
            `https://api.worldnewsapi.com/search-news?language=pt&location-filter=${coords.latitude},${coords.longitude},50&api-key=301b76952be84db8b6c1c80c52af4dd9`
          )
          .subscribe({
            next: (response: any) => {
              this.state.next({
                ...this.state.value,
                news: response.news.map((news: any) => ({
                  title: news.title,
                  summary: news.summary,
                  url: news.url,
                  image: news.image
                })),
                loading: false,
                error: null,
              });
            },
            error: () => {
              this.state.next({
                ...this.state.value,
                news: [],
                loading: false,
                error: 'Error loading the news.',
              });
            },
          });
      })
      .catch(() => {
        this.state.next({
          ...this.state.value,
          news: [],
          loading: false,
          error: 'Error retrieving location.',
        });
      });
  }

  getState(): Observable<NewsState> {
    return this.state.asObservable();
  }
}
