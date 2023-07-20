import { create, Whatsapp } from "venom-bot";

class Sender {
  private client!: Whatsapp;

  constructor() {
    this.initialize();
  }

  async sendMessage(to: string, body: string) {
    await this.client.sendText(to, body);
  }

  async initialize() {
    const qr = (base64QrImg: string) => {
      console.log("QR CODE", base64QrImg);
    };

    const status = (statusSession: string) => {
      console.log("Status", statusSession);
    };

    const start = (client: Whatsapp) => {
      this.client = client;
    };

    create("Zeev Notificator", qr, status)
      .then((client) => start(client))
      .catch((error) => console.error(error));
  }
}

export default Sender;
