import puppeteer, { Browser } from "puppeteer";
import { Whatsapp, create } from "venom-bot"

export default class WhatsappService {
  private client!: Whatsapp;
  private browser!: Browser;

  constructor() {
    this.initialize();
  }

  async sendText(to: string, body: string) {
    await this.client.sendText(to, body);
  }

  private async initialize() {
    try {
      this.browser = await puppeteer.launch({
        executablePath: "/usr/local/bin/chromium-browser", // Atualize com o caminho correto
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      });

      const qr = (base64QrImg: string) => {
      };

      const status = (statusSession: string) => {
        return statusSession;
      };

      const start = (client: Whatsapp) => {
        this.client = client;

        // this.sendText( "553192310461@c.us",
        // "Olá Roberto! O código de confirmação é: *512455*")
      };

      create("Zeev Notificator", qr, status, {
        browser: this.browser, // Passa o navegador Puppeteer
      })
        .then((client: Whatsapp) => start(client))
        .catch((err: any) => console.log(err));
    } catch (error) {
      console.error("Ocorreu um erro ao iniciar o bot:", error);
    }
  }
}