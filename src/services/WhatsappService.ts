import { create, Whatsapp } from "venom-bot";

export default class WhatsappService {
  private client!: Whatsapp;

  constructor() {
    this.initialize();
  }

  async sendText(to: string, body: string) {
    //553192310461@c.us
    this.client.sendText(to, body);
  }

  private initialize() {
    const qr = (base64QrImg: string) => {
      base64QrImg;
    };

    const status = (statusSession: string) => {
      return statusSession;
    };

    const start = (client: Whatsapp) => {
      this.client = client;

      this.sendText(
        "553192310461@c.us",
        "Olá Roberto! O código de confirmação é: *5812475124*"
      );
    };

    create("Zeev Notificator", qr, status)
      .then((client) => start(client))
      .catch((err) => console.error(err));
  }
}
