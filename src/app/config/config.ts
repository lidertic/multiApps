type Hosts = {
  host: string;
  url: string;
  default?: Boolean;
};

export class Config {
  static llistaHosts: Array<Hosts> = [
    {
      host: 'localhost',
      url: '//localhost:8181/webpreavisosServerWeb/services/rest'
    },
    {
      host: '192.168.1.109',
      url: '//192.168.1.109:8181/webpreavisosServerWeb/services/rest'
    },
    {
      host: '10.120.1.182',
      url: '//10.120.1.182:12100/webpreavisosServerWeb/services/rest'
    },
    {
      host: 'reingtest.portic.net',
      url: '//reingtest.portic.net/webpreavisosServerWeb/services/rest'
    },
    {
      host: 'appdemo.portic.net',
      url: '//appdemo.portic.net/webpreavisosServerWeb/services/rest'
    },
    {
      host: 'app.portic.net',
      url: '//app.portic.net/webpreavisosServerWeb/services/rest',
      default: true
    }
  ];

  public static getEnvironmentVariable(value): string {
    let environment: string;
    let protocol: string;
    let data = {};
    environment = window.location.hostname;
    protocol = window.location.protocol;
    const resultat = this.llistaHosts.filter(
      element => element.host === environment
    );
    resultat.length === 0
      ? (environment = this.llistaHosts.filter(
          element => element.default === true
        )[0].url)
      : (environment = resultat[0].url);
    data = {
      endPoint: protocol + environment
    };
    return data[value];
  }
}
